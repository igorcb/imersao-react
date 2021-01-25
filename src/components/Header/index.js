import Head from 'next/head'

export default function Header(props) {
  return (
    <Head>
      <meta property="og:title" content=">Imersão React Alura" key="title" />
      <meta property="og:image" content="https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg?resize=1536%2C1208&ssl=1" />
    </Head>
  );
}


