import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a passionate Software Engineer graduated from Dokuz Eylül
          University with industry experience building both web and mobile
          applications and web services. I specialize in JavaScript and have
          professional experience working with Angular, Ionic and Node.js. I
          also have experience working with TypeScript, Java, C#, C, Python,
          MongoDB, PHP and MySQL. Currently, I'm a master student at Dokuz Eylül
          University Computer Engineering Department.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
