import {Providers} from '@/app/providers';
import {Layout} from '@/components/Layout';
import {Analytics} from "@vercel/analytics/next"

import '@/styles/tailwind.css';

export const metadata = {
    title: {
        template: '%s - Stefan Dimitrijević',
        default:
            'Stefan Dimitrijević - Full Stack Developer & Problem-Solver',
    },
    description:
        'Welcome to my personal corner of the web! I\'m Stefan Dimitrijević, a Full Stack developer who loves crafting web applications, solving tricky problems, and trying out the latest technologies. Whether I\'m building immersive experiences or exploring new frameworks, I\'m always looking for ways to push boundaries and write clean code.',
    keywords: [
        'Full Stack Developer',
        'Web Development',
        'Problem-Solving',
        'Clean Code',
        'Immersive Experiences',
        'Modern Technologies',
        'Stefan Dimitrijević',
        'Stefan Dimitrijevic',
        'Personal Portfolio',
    ],
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
        <Analytics/>
        </body>
        </html>
    );
}
