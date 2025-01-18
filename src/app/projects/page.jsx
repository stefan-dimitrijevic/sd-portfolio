import Image from 'next/image'

import {Card} from '@/components/Card'
import {SimpleLayout} from '@/components/SimpleLayout'
import logoBilliardShop from '@/images/logos/billiard-shop.svg'
import logoBasil from '@/images/logos/basil.png'
import logoMyBlog from '@/images/logos/my-blog.ico'
import logoBigRock from '@/images/logos/big-rock.png'
import logoStrahOdDzekiCena from '@/images/logos/strah-od-dzeki-cena.png'
import logoLearn2Pool from '@/images/logos/learn-2-pool.png'


const projects = [
    {
        name: 'Billiard Shop',
        description: 'An ASP.NET Core Web API designed for managing an online billiard shop, including product catalogs and user interactions.',
        link: {href: 'https://github.com/stefan-dimitrijevic/billiard-shop', label: 'github.com'},
        logo: logoBilliardShop,
    },
    {
        name: 'Basil',
        description: 'A dynamic recipe website built with Laravel, featuring user authentication, recipe submissions, and interactive design.',
        link: {href: 'https://github.com/stefan-dimitrijevic/basil', label: 'github.com'},
        logo: logoBasil,
    },
    {
        name: 'My Blog',
        description: 'A blog platform created with Angular, allowing for seamless content management and modern UI/UX design.',
        link: {href: 'https://github.com/stefan-dimitrijevic/my-blog', label: 'github.com'},
        logo: logoMyBlog,
    },
    {
        name: 'Big Rock',
        description: 'A responsive website for a beer company developed with HTML, CSS, Bootstrap, JavaScript, and PHP, integrating Ajax and jQuery for interactivity.',
        link: {href: 'https://github.com/stefan-dimitrijevic/big-rock', label: 'github.com'},
        logo: logoBigRock,
    },
    {
        name: 'Strah od Dzeki Cena',
        description: 'A music group website crafted using HTML, CSS, JavaScript, and jQuery, showcasing the band’s content with an engaging design.',
        link: {href: 'https://github.com/stefan-dimitrijevic/strah-od-dzeki-cena', label: 'github.com'},
        logo: logoStrahOdDzekiCena,
    },
    {
        name: 'Learn 2 Pool',
        description: 'An educational website for an imaginary billiards school, built using HTML and CSS to create a simple yet effective design.',
        link: {href: 'https://github.com/stefan-dimitrijevic/learn-2-pool', label: 'github.com'},
        logo: logoLearn2Pool,
    },
]

function LinkIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}

export const metadata = {
    title: 'Projects',
    description: 'Explore a collection of my school projects, showcasing my learning journey and passion for development. Each project highlights my growing skills, problem-solving approach, and the technologies I\'ve explored during my academic experience.',
    keywords: [
        'Stefan Dimitrijević',
        'Stefan Dimitrijevic',
        'Projects',
        'School Projects',
        'Billiard Shop',
        'Basil',
        'My Blog',
        'Big Rock',
        'Strah od Dzeki Cena',
        'Learn 2 Pool',
        'ASP.NET Core',
        'Laravel',
        'Angular',
        'PHP',
        'HTML',
        'CSS',
        'JavaScript',
    ],
}

export default function Projects() {
    return (
        <SimpleLayout
            title="A showcase of my school projects and development journey."
            intro="Over the years, I’ve worked on various projects during my studies, each reflecting my growth and passion for web development. These are the ones I’m most proud of."
        >
            <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                {projects.map((project) => (
                    <Card as="li" key={project.name}>
                        <div
                            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                src={project.logo}
                                alt={`${project.name} logo`}
                                className="h-8 w-8"
                                unoptimized
                            />
                        </div>
                        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                            <Card.Link href={project.link.href}>{project.name}</Card.Link>
                        </h2>
                        <Card.Description>{project.description}</Card.Description>
                        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                            <LinkIcon className="h-6 w-6 flex-none"/>
                            <span className="ml-2">{project.link.label}</span>
                        </p>
                    </Card>
                ))}
            </ul>
        </SimpleLayout>
    )
}
