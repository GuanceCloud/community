import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/24/outline'

const supportLinks = [
  {
    name: 'Help each other',
    href: '#',
    cta: 'Start to communicate',
    description: <ul role="list">
      <li>Join the community Slack</li>
      <li>Ask questions on GitHub, Stack overflow</li>
    </ul>,
    icon: PhoneIcon,
  },
  {
    name: 'Contribute the Way You Like',
    href: '#',
    cta: 'Read the Guidelines',
    description: <ul role="list">
      <ul>Make a proposal</ul>
      <ul>Report an issue</ul>
      <ul>Contribute code</ul>
      <ul>Write document</ul>
    </ul>,
    icon: LifebuoyIcon,
  },
  {
    name: 'Learn and Grow',
    href: '#',
    cta: 'Read the Blog',
    description: <ul role="list">
      <ul>Participate in meetups/webinars</ul>
      <ul>Discuss TiDB on TiDB Internals</ul>
      <ul>Take free TiDB training courses</ul>
      <ul>Grow in a community team</ul>
    </ul>,
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
