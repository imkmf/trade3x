import Head from 'next/head'
import tachyons from 'tachyons/css/tachyons.min.css'
import custom from './custom.css'

const stylesheet = [custom, tachyons].join('')

export default () =>
  <div className='ph4'>
    <Head>
      <title>tradetradetrade</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <style jsx global>{stylesheet}</style>

    <div>
      <h1 className='b light-gray'>tradetradetrade</h1>

      <p className='light-silver f4 measure lh-copy'>
        A community of cryptocurrency traders, on Telegram. <a className='link light-gray dim' href="https://t.me/tradetradetrade">Join us</a>.
      </p>

      <p className='light-silver f4 measure lh-copy'>
        A project by <a className='link light-gray dim' href="https://twitter.com/imkmf">Kristian Freeman</a>.
      </p>
    </div>
  </div>
