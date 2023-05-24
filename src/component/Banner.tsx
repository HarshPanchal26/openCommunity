import { ArrowUturnRightIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Anatomy and Physiology',
        description:
            'Understanding the structure and function of the human body is essential for medical professionals. Some key topics to cover include the skeletal, muscular, cardiovascular, and nervous systems.',
        icon: ArrowUturnRightIcon,
    },
    {
        name: 'Medical Terminology',
        description: 'Learning medical terminology is crucial for effective communication in the healthcare industry. ',
        icon: ArrowUturnRightIcon,
    },
    {
        name: 'Pharmacology.',
        description: 'Understanding drugs and their effects on the body is essential for prescribing medications and managing patient care. ',
        icon: ArrowUturnRightIcon,
    },
]

export default function Banner() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src="https://github.com/priyankarpal/ProjectsHut/assets/88102392/7f15ef34-e4fd-4b4f-b8fe-52c721b10738"
                        alt="doctor screenshot"
                        loading='lazy'

                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    )
}
