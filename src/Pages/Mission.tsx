
import { PlusCircleIcon } from "@heroicons/react/24/outline";



const features = [
  {
    name: 'Health Conditions',
    description:
      'This section could include a comprehensive list of medical conditions, ranging from common ailments like the flu to more serious diseases like cancer.',
    icon: PlusCircleIcon,
  },
  {
    name: 'Treatments and Procedures',
    description:
      ' This section could provide an overview of different medical treatments and procedures, including both conventional and alternative options', icon: PlusCircleIcon,
  },
  {
    name: 'Wellness and Prevention',
    description:
      'This section could focus on promoting a healthy lifestyle and preventing illness', icon: PlusCircleIcon,
  },
  {
    name: 'Nutrition and Fitness',
    description:
      'This section could provide information on healthy eating habits and tips for staying physically active', icon: PlusCircleIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Treatments and Procedures
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission is to provide a comprehensive, reliable, and user-friendly online platform that empowers individuals to make informed decisions about their health and well-being
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
