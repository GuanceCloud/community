package guancecloud

import (
	"dagger.io/dagger"

	"guance.com/github"
)

github_config: {
	"app_id":       30419448
	"organization": "GuanceCloud"
	"teams":        teams
	"repositories": repositories
}

dagger.#Plan & {
	client: {
		filesystem: {
			"./build": write: contents: actions.apply.output
		}
		env: {
			GITHUB_TOKEN:              dagger.#Secret
			KUBE_HOST:                 dagger.#Secret
			KUBE_CLIENT_CERT_DATA:     dagger.#Secret
			KUBE_CLIENT_KEY_DATA:      dagger.#Secret
			KUBE_CLUSTER_CA_CERT_DATA: dagger.#Secret
		}
	}

	actions: apply: {
		tfSource: dagger.#Scratch

		apply: github.#Apply & {
			dir: tfSource

			config: github_config

			dry_run: true

			env: {
				GITHUB_TOKEN:              client.env.GITHUB_TOKEN
				KUBE_NAMESPACE:            "iac"
				KUBE_CONFIG_PATH:          "~/.kube/config"
				KUBE_HOST:                 client.env.KUBE_HOST
				KUBE_CLIENT_CERT_DATA:     client.env.KUBE_CLIENT_CERT_DATA
				KUBE_CLIENT_KEY_DATA:      client.env.KUBE_CLIENT_KEY_DATA
				KUBE_CLUSTER_CA_CERT_DATA: client.env.KUBE_CLUSTER_CA_CERT_DATA
			}
		}

		output: apply.output
	}
}
