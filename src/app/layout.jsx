import {Providers} from '@/app/providers';
import {Layout} from '@/components/Layout';

import '@/styles/tailwind.css';

export const metadata = {
    title: {
        template: '%s - Stefan Dimitrijević',
        default:
            'Stefan Dimitrijević - Full Stack Developer and Technology Enthusiast',
    },
    description:
        'I’m Stefan Dimitrijević. I live in Serbia, where I craft software solutions and shape the future of web development. I’m a Full Stack Developer passionate about solving complex problems and delivering innovative, user-friendly solutions. Currently, I’m contributing to projects at Getafeel and Datablooz, leveraging technologies like Laravel, Angular, React, and Draftbit to build immersive experiences and cutting-edge tools.',
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
            <div className="flex w-full">
                <Layout>{children}</Layout>
            </div>
        </Providers>
        </body>
        </html>
    );
}
