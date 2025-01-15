import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
} from '@/components/SocialIcons'
import logoDatablooz from '@/images/logos/datablooz.jpg'
import logoGetafeel from '@/images/logos/getafeel.jpg'
import logoQuantox from '@/images/logos/quantox.jpg'
import image1 from '@/images/photos/1.png'
import image2 from '@/images/photos/2.png'
import image3 from '@/images/photos/3.png'
import image4 from '@/images/photos/4.png'
import image5 from '@/images/photos/5.png'

function SocialLink({icon: Icon, ...props}) {
    return (
        <Link className="group -m-1 p-1" target="_blank" rel="noopener noreferrer" {...props}>
            <Icon
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
        </Link>
    )
}

function BriefcaseIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function GitHubSvgIcon(props) {
    return (
        <svg
            viewBox="0 0 98 96"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                className="fill-zinc-400 transition group-hover:fill-zinc-600 dark:fill-zinc-500 dark:group-hover:fill-zinc-300"
            />
        </svg>
    );
}


function ArrowDownIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Newsletter() {
    return (
        <div
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <GitHubSvgIcon className="h-6 w-6 flex-none bg-zinc-100 dark:bg-zinc-100/10 rounded-full"/>
                <span className="ml-3">Explore My GitHub</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Dive into my GitHub to check out what I’ve been working on lately.
            </p>
            <div className="mt-6 flex">
                <Button
                    href="https://github.com/stefan-dimitrijevic"
                    variant="secondary"
                    className="w-full"
                >
                    Visit GitHub
                </Button>
            </div>
        </div>
    )
}

function Technologies() {
    const technologyGroups = [
        {
            category: "Frontend Fun",
            technologies: [
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Bootstrap",
                "JavaScript",
                "TypeScript",
                "Angular",
                "React",
                "Draftbit",
                "Next.js",
            ],
        },
        {
            category: "Backend Brilliance",
            technologies: [
                "PHP",
                "Laravel",
                "Symfony",
                "Python",
                "C#",
                "ASP.Net Core",
                "Java",
            ],
        },
        {
            category: "Data Wizards",
            technologies: [
                "MySQL",
                "MongoDB",
                "Redis",
                "Elasticsearch",
                "Firebase",
            ],
        },
        {
            category: "DevOps & Tools",
            technologies: [
                "Git",
                "Docker",
                "Linux",
                "DigitalOcean",
                "AWS",
            ],
        },
    ];

    return (
        <div className="space-y-12">
            {technologyGroups.map((group, index) => (
                <div key={index} className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
                        {group.category}
                    </h2>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {group.technologies.map((tech, techIndex) => (
                            <li key={techIndex} className="flex items-center">
                                <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-500 mr-2"></span>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

function Resume() {
    let resume = [
        {
            company: 'Datablooz',
            title: 'Full Stack Developer',
            logo: logoDatablooz,
            start: '2024',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear(),
            },
        },
        {
            company: 'Getafeel',
            title: 'Full Stack Developer',
            logo: logoGetafeel,
            start: '2023',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear(),
            },
        },
        {
            company: 'Quantox',
            title: 'Back End Developer',
            logo: logoQuantox,
            start: '2021',
            end: '2023',
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div
                            className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image src={role.logo} alt="" className="h-7 w-7 rounded-full" unoptimized/>
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            >
                                <time dateTime={role.start.dateTime ?? role.start}>
                                    {role.start.label ?? role.start}
                                </time>
                                {' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <a
                href="/cv.pdf"
                download="Stefan_Dimitrijevic_CV.pdf"

            >
                <Button variant="secondary" className="group mt-6 w-full">
                    Download CV
                    <ArrowDownIcon
                        className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"/>
                </Button>
            </a>
        </div>
    )
}

function Photos() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex 2xl:justify-center gap-5 overflow-x-auto 2xl:overflow-hidden py-4 sm:gap-8 px-4">
                {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
                    <div
                        key={image.src}
                        className={clsx(
                            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                            rotations[imageIndex % rotations.length]
                        )}
                    >
                        <Image
                            src={image}
                            alt=""
                            sizes="(min-width: 640px) 18rem, 11rem"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Web programmer, Full Stack developer, and a big fan of clean code.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Hi there! I’m Stefan Dimitrijević, a Full Stack developer who loves crafting web applications,
                        solving tough problems, and exploring new tools. If it’s cutting-edge and useful, I’m in!
                    </p>
                    <div className="mt-6 flex gap-6">
                        <SocialLink
                            href="https://www.instagram.com/____dimmy____/"
                            aria-label="Follow on Instagram"
                            icon={InstagramIcon}
                        />
                        <SocialLink
                            href="https://github.com/stefan-dimitrijevic"
                            aria-label="Follow on GitHub"
                            icon={GitHubIcon}
                        />
                        <SocialLink
                            href="https://www.linkedin.com/in/stefan-dimitrijevic-dev"
                            aria-label="Follow on LinkedIn"
                            icon={LinkedInIcon}
                        />
                    </div>
                </div>
            </Container>
            <Photos/>
            <Container className="mt-24 md:mt-28">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="space-y-10">
                        <Technologies/>
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        <Newsletter/>
                        <Resume/>
                    </div>
                </div>
            </Container>
        </>
    )
}
