import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({className, href, children, icon: Icon}) {
    const isMailtoLink = href.startsWith('mailto:');

    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                target={isMailtoLink ? undefined : "_blank"}
                rel={isMailtoLink ? undefined : "noopener noreferrer"}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    );
}

function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export const metadata = {
    title: 'About',
    description:
        'Learn about Stefan Dimitrijević—his journey as a Full Stack Developer, his work at Datablooz and Getafeel, and his passion for building and problem-solving.',
    keywords: [
        'Stefan Dimitrijević',
        'Stefan Dimitrijevic',
        'Full Stack Developer',
        'Web Development',
        'Problem-Solving',
        'Datablooz',
        'Getafeel',
        'Quantox',
        'Clean Code',
        'Personal Portfolio',
    ],
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt="Portrait of Stefan Dimitrijević"
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        I’m Stefan Dimitrijević. I live in Serbia, where I turn ideas into code.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            I’m a Full Stack Developer with a passion for solving complex problems and delivering
                            innovative, user-friendly solutions. Right now, I’m balancing the exciting challenges of
                            working simultaneously for two
                            companies: <strong>Getafeel</strong> and <strong>Datablooz</strong>.
                        </p>
                        <p>
                            At <strong>Datablooz</strong>, I’m developing a React Native mobile application called <em>Delta
                            Sapiens</em> and contributing to an internal tool for AI opportunity mapping, focusing on
                            innovative and efficient solutions. Meanwhile, at <strong>Getafeel</strong>, I’m working on
                            creating immersive experiences for virtual tours and property navigation systems using
                            modern frameworks and technologies. Previously, I worked as a back-end developer
                            at <strong>Quantox</strong>, where I enhanced and maintained large-scale web applications,
                            ensuring optimal performance and reliability in dynamic environments..
                        </p>
                        <p>
                            My journey in development started with curiosity and a love for technology, and over the
                            years, I’ve honed my skills in backend, frontend, and full-stack development. From creating
                            a fun educational website for an imaginary billiards school to enhancing large-scale web
                            applications, I’ve always enjoyed taking on challenges and finding creative solutions.
                        </p>
                        <p>
                            When I’m not coding, I’m probably playing billiards, strumming my guitar, planning a trip,
                            or binge-watching my favorite movies. I believe in the power of hobbies to fuel creativity
                            and keep life exciting.
                        </p>
                        <p>
                            I’m fluent in Serbian (native speaker) and English (professional level), which helps me
                            collaborate seamlessly with diverse teams and contribute to global projects.
                        </p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <SocialLink
                            href="https://www.linkedin.com/in/stefan-dimitrijevic-dev"
                            icon={LinkedInIcon}
                            className="mt-4"
                        >
                            Connect on LinkedIn
                        </SocialLink>
                        <SocialLink
                            href="https://github.com/stefan-dimitrijevic"
                            icon={GitHubIcon}
                            className="mt-4"
                        >
                            Follow on GitHub
                        </SocialLink>
                        <SocialLink
                            href="https://www.instagram.com/____dimmy____/"
                            icon={InstagramIcon}
                            className="mt-4"
                        >
                            Follow on Instagram
                        </SocialLink>
                        <SocialLink
                            href="mailto:stefandimitrijevicdev@gmail.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            stefandimitrijevicdev@gmail.com
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
