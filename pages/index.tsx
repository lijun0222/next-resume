import Head from 'next/head';
import dynamic from 'next/dynamic';

const App = dynamic(() => import('@/components/App'), { ssr: false });

export default function Home() {
  return (
    <div className='h-screen flex'>
      <Head>
        <title>简历在线生成器</title>
        <meta 
          name='description'
          content='在线简历填写,PDF生成下载,简单,方便,高效'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </div>
  )
}