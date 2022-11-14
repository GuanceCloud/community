package github

import (
	"dagger.io/dagger"
	"dagger.io/dagger/core"
	"encoding/json"

	"universe.dagger.io/alpha/terraform"
)

#Apply: {
	dir: dagger.#FS

	env: [string]: string | dagger.#Secret

	config: _

	dry_run: bool | *false

	workflow: {
		generate: {
			_variables: {
				organization: config.organization

				teams: {
					for k, v in config.teams {
						(k): v & {
							"organization": "\(organization)"
						}
					}
				}

				repositories: {
					for k, v in config.repositories {
						(k): v & {
							"organization": "\(organization)"
							application_ids: [
								config.app_id,
							]
						}
					}
				}
			}

			_code: {
				// module: main: source: "yufeiminds/repositories/github"
				module: main: source: "./modules/terraform-github-repositories"
				module: main: _variables
				terraform: backend: kubernetes: secret_suffix: "github"
			}

			code: core.#WriteFile & {
				input:    dir
				path:     "main.tf.json"
				contents: json.Marshal(_code)
			}

			output: code.output
		}

		if !dry_run {
			init: terraform.#Init & {
				source: generate.output

				withinEnv: env
			}

			plan: terraform.#Plan & {
				source: init.output

				withinEnv: env
			}
		
			apply: terraform.#Apply & {
				source: plan.output

				withinEnv: env
			}
		}

	}

	if dry_run {
		output: workflow.generate.output
	}

	if !dry_run {
		output: workflow.apply.output
	}
}
