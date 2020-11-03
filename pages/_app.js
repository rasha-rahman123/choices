
import '../styles/globals.css'
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return( <>
<NextSeo
      title="choices - decide ur fate"
      description="When you cannot decide, let us take the wheel."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://choices.vercel.app',
        title: 'choices - decide ur fate',
        description: 'When you cannot decide, let us take the wheel.',
        images: [
          {
            url: 'https://i.imgur.com/vBLkXyd.png',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          }
        ],
        site_name: 'choices',
      }}
      twitter={{
        handle: '@raaahhh_sha',
        site: '@raaahhh_sha',
        cardType: 'summary_large_image',
      }}
    />
  <Component {...pageProps} />
  </>)
}

export default MyApp
