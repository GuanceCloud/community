import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

export default function Slack() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-lg bg-indigo-700 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div className="lg:self-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                <span className="block">Ready to contribute?</span>
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-indigo-200">
                                Step by step guides to get you started with contributing to Guance Cloud.
                            </p>
                            <a
                                href="/contribution-guide"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50"
                            >
                                Read the Contributor Guide
                            </a>
                        </div>
                    </div>
                    <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
                        <img
                            className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                            src="/images/guidelines.png"
                            alt="App screenshot"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-4">
                <div className="mx-auto max-w-7xl">
                    <div className="overflow-hidden rounded-lg bg-white shadow-xl">
                        <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                            <div className="lg:self-center">
                                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                                    <span className="block">Communicate on Slack?</span>
                                </h2>
                                <p className="mt-4 text-lg leading-6 text-black">
                                    Join our Slack community to get help from the community and the Guance Cloud team.
                                </p>
                                <a
                                    href="https://join.slack.com/t/guancecloud/shared_invite/zt-1ldmfw7t3-OrloE4cFtoMoivklV1kM3A"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-8 inline-flex items-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-50"
                                >
                                    Join the Slack channel
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl">
                    <div className="overflow-hidden rounded-lg bg-indigo-700 shadow-xl">
                        <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                            <div className="lg:self-center">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    <span className="block">More about Guance Cloud?</span>
                                </h2>
                                <p className="mt-4 text-lg leading-6 text-indigo-200">
                                    Learn more about Guance Cloud. Improve your efficiency about observability.
                                </p>
                                <a
                                    href="https://docs.guance.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50"
                                >
                                    Read more documentations
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
