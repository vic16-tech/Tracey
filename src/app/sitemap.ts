import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://your-website-url.com', // Replace with your actual domain
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ]
}