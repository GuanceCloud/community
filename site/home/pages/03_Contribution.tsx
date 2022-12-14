import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/24/outline'

const supportLinks = [
  {
    name: 'Help each other',
    href: 'https://github.com/GuanceCloud',
    cta: 'Start to communicate',
    description: <div className='prose'>
      <ul role="list">
        <li>Join the community <a
          href='https://join.slack.com/t/guancecloud/shared_invite/zt-1ldmfw7t3-OrloE4cFtoMoivklV1kM3A'>Slack</a></li>
        <li>Ask questions on <a
          href='https://github.com/GuanceCloud'
        >GitHub</a></li>
      </ul>
    </div>,
    icon: PhoneIcon,
  },
  {
    name: 'Contribute the Way You Like',
    href: '/contribution-guide',
    cta: 'Read the Guidelines',
    description: <div className='prose'>
      <ul role="list">
        <li><a
          target="_blank"
          rel="noreferer"
          href='/contribution-guide/how-to-guides/report-an-issue'>Report an Issue</a></li>
        <li><a
          target="_blank"
          rel="noreferer"
          href='/contribution-guide/how-to-guides/make-a-pull-request'>Make a Pull Request</a></li>
        <li><a
          target="_blank"
          rel="noreferer"
          href='/contribution-guide/how-to-guides/draft-a-proposal'>Draft a Proposal</a></li>
        <li><a
          target="_blank"
          rel="noreferer"
          href='/contribution-guide/how-to-guides/create-a-repository'>Create a Repository</a></li>
      </ul>
    </div>,
    icon: LifebuoyIcon,
  },
  {
    name: 'Learn and Grow',
    href: '/contribution-guide/tutorials/what-is-open-source',
    cta: 'Read the Explanation',
    description: <div className='prose'>
      <ul role="list">
        <li>
          <a
            target="_blank"
            rel="noreferer"
            href='/contribution-guide/explanations/repository-lifecycle'>
            Repository lifecycle
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferer"
            href='/contribution-guide/explanations/release-merge-train'>
            Release / Merge train
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferer"
            href='/contribution-guide/explanations/slash-bot-commands' >
            Slash bot commands
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferer"
            href='/contribution-guide/explanations/contributor-ladder'>
            Contributor ladder
          </a>
        </li>
      </ul>
    </div>,
    icon: NewspaperIcon,
  },
]

export default function Contribution() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="relative pb-32 text-center">
        {/* <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div> */}
        <div className="relative mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">Make Your Contribution</h1>
          <p className="mt-6 text-xl text-black">
            Lets make <span className="text-xl text-indigo-600 font-bold">Observability</span> better together.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                {link.description}
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  {link.cta}<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
