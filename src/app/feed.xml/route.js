import {Feed} from 'feed';

export async function GET(req) {
    let siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    let author = {
        name: 'Stefan Dimitrijević',
        email: 'stefandimitrijevicdev@gmail.com',
    };

    // Create a new feed with updated static metadata
    let feed = new Feed({
        title: 'Web Programmer, Full Stack Developer, and a Big Fan of Clean Code',
        description: `Hi there! I’m Stefan Dimitrijević, a Full Stack Developer who loves crafting web applications, solving tough problems, and exploring new tools. If it’s cutting-edge and useful, I’m in!

I live in Serbia, where I craft software solutions and shape the future of web development. I’m currently working simultaneously for two companies: Getafeel and Datablooz.

At Datablooz, I’m developing a React Native mobile application called Delta Sapiens using Draftbit and contributing to AI Scout, an internal tool for AI opportunity mapping built with Laravel and React. Meanwhile, at Getafeel, I’m focused on creating immersive 3D virtual tours and property navigation systems using Angular, Laravel, and other cutting-edge technologies. Previously, I worked as a back-end developer at Quantox, where I enhanced and maintained large-scale web applications using Symfony, MySQL, and Redis.

When I’m not coding, I’m probably playing billiards, strumming my guitar, planning a trip, or binge-watching my favorite movies. I believe in the power of hobbies to fuel creativity and keep life exciting.

I’m fluent in Serbian (native speaker) and English (professional level), which helps me collaborate seamlessly with diverse teams and contribute to global projects.`,
        author,
        id: siteUrl,
        link: siteUrl,
        image: `${siteUrl}/favicon.ico`,
        favicon: `${siteUrl}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}`,
        feedLinks: {
            rss2: `${siteUrl}/feed.xml`,
        },
    });

    // Return the feed without any articles
    return new Response(feed.rss2(), {
        status: 200,
        headers: {
            'content-type': 'application/xml',
            'cache-control': 's-maxage=31556952',
        },
    });
}
