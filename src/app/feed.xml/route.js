import {Feed} from 'feed';

export async function GET(req) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const author = {
        name: 'Stefan Dimitrijević',
        email: 'stefandimitrijevicdev@gmail.com',
    };

    const feed = new Feed({
        title: 'Web Programmer, Full Stack Developer, and Clean Code Enthusiast',
        description: `
      'Hi there! I'm Stefan Dimitrijević, a Full Stack Developer who loves crafting 
    web applications, tackling tough challenges, and exploring new frameworks.
    Come explore my About page to see what I'm currently working on at Getafeel 
    and Datablooz, or browse my Projects and Uses pages to get a sense of my 
    coding style and daily workflow tools.

    If you share the same passion for clean, efficient code—or if you're just 
    curious—dive in and see what I've been up to!'
    `,
        author,
        id: siteUrl,
        link: siteUrl,
        image: `${siteUrl}/icon.png`,
        favicon: `${siteUrl}/icon.png`,
        copyright: `All rights reserved ${new Date().getFullYear()}`,
        feedLinks: {
            rss2: `${siteUrl}/feed.xml`,
        },
    });

    // Generate the RSS feed
    let rssFeed = feed.rss2();

    // Add the Atom namespace to the <rss> tag
    rssFeed = rssFeed.replace(
        '<rss version="2.0">',
        '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">'
    );

    // Manually insert the <atom:link> tag
    const atomLink = `<atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />`;
    rssFeed = rssFeed.replace(
        '<channel>',
        `<channel>\n    ${atomLink}`
    );

    // Return the modified feed
    return new Response(rssFeed, {
        status: 200,
        headers: {
            'content-type': 'application/xml',
            'cache-control': 's-maxage=31556952',
        },
    });
}
