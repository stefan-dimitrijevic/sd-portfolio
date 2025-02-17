import {Providers} from '@/app/providers';
import {Layout} from '@/components/Layout';
import {Analytics} from "@vercel/analytics/next"
import {SpeedInsights} from '@vercel/speed-insights/next';

import '@/styles/tailwind.css';

export const metadata = {
    title: {
        template: '%s - Stefan Dimitrijević',
        default:
            'Stefan Dimitrijević - Full Stack Developer & Problem-Solver',
    },
    description:
        'I’m Stefan Dimitrijević, a Full Stack developer passionate about crafting web apps, solving tough problems, and exploring new technologies.',
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
        <SpeedInsights/>
        </body>
        </html>
    );
}
