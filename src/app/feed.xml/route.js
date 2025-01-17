import {Feed} from 'feed';

export async function GET(req) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const author = {
        name: 'Stefan Dimitrijević',
        email: 'stefandimitrijevicdev@gmail.com',
    };

    // Create a new feed with updated static metadata
    const feed = new Feed({
        title: 'Web programmer, Full Stack developer, and a big fan of clean code',
        description: `
      Hi there! I’m Stefan Dimitrijević, a Full Stack Developer who loves crafting web applications, 
      solving tough problems, and exploring new tools. If it’s cutting-edge and useful, I’m in!

      Explore my website to learn about me (on the About page), check out my favorite tools and setup 
      (on the Uses page), and see the projects I’ve been working on (on the Projects page). 
      My Home page gives a quick overview of who I am and what I do.

      I live in Serbia, where I craft software solutions and shape the future of web development. 
      Currently, I’m working simultaneously for two companies: Getafeel and Datablooz.
      
      At Datablooz, I’m developing a React Native mobile app called Delta Sapiens using Draftbit, 
      and contributing to AI Scout, an internal tool for AI opportunity mapping (built with Laravel and React). 
      Meanwhile, at Getafeel, I’m focusing on immersive 3D virtual tours and property navigation systems 
      using Angular, Laravel, and other modern technologies.

      Previously, I worked as a back-end developer at Quantox, building and maintaining large-scale 
      web applications in Symfony, MySQL, and Redis. When I’m not coding, you can find me playing billiards, 
      strumming my guitar, planning trips, or binge-watching my favorite movies—because sometimes, 
      a good hobby is all you need to fuel creativity.

      I’m fluent in Serbian (my native language) and English (professional level), which helps me 
      collaborate with diverse teams and contribute to global projects.
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
