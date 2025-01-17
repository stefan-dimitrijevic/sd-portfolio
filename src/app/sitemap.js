export default function sitemap() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const now = new Date()

    return [
        {
            url: `${siteUrl}/`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/projects`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/uses`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.8,
        }
    ]
}
