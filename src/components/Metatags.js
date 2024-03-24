// Component for metatags

// Use Twitter card validator to test: https://cards-dev.twitter.com/validator

import Head from 'next/head';

export default function Metatags({
                                     title = 'West Science Olympiad',
                                     description = 'Official Site for West High Science Olympiad, a Science Olympiad team based in Madison, Wisconsin',
                                     image = './favicon.ico',
                                 }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        </Head>
    );
}