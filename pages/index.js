import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Just some text so the headings wont collide</p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Agenda scroll effects:</h2>
        <ul>
          <li>
            <h3>Parallax effect:</h3>
          </li>
          <li>
            <ul>
              <li>
                <Link href={`/parallax/multipleImages`}>Parallax with multiple Images laying above each other</Link>
              </li>
              <li>
                <Link href={`/parallax/mountain`}>Simple Parallax using framer-motion lib</Link>
              </li>
            </ul>
          </li>

          <li>
            <h3>Reveal animations:</h3>
          </li>
          <li>
            <ul>
              <li>
                <Link href={`/onScroll/intersectionObserver`}>Simple scroll effect without any libraries</Link>
              </li>
              <li>
                <Link href={`/onScroll/motionSensor`}>Scroll effects using framer-motion lib</Link>
              </li>
            </ul>
          </li>

          <li>
            <h3>More animations:</h3>
          </li>
          <li>
            <ul>
              <li>
                <Link href={`/onScroll/progressBar`}>Simple page progress bar using framer-motion</Link>
              </li>
              <li>
                <Link href={`/onScroll/dragButton`}>Fancy way to drag buttons using framer-motion</Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
