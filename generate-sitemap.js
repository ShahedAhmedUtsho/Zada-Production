import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs';

// Array of your website's URLs
const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/services', changefreq: 'weekly', priority: 0.8 },
    // Add more URLs as needed
];

const stream = new SitemapStream({ hostname: 'https://www.zadaproduction.tech' });

// Write the sitemap to a file
streamToPromise(stream).then((data) => {
    createWriteStream('./public/sitemap.xml').write(data);
});

links.forEach(link => stream.write(link));
stream.end();
