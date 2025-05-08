import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { IoInfinite } from 'react-icons/io5';

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Welcome to Nexus!</h1>
          <p className={styles.desc}>Your constellation of connections</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>We're all like stars in the universe —</p>
        <p className={styles.text}>separated by distance, yet held together by invisible bonds.</p>
      </div>
      <p className={styles.textReactProject}>
        This app is my final React project — and something more than just a contact manager.
      </p>
      <div className={styles.textContainer}>
        <p className={styles.appNameDesc}>
          <strong>"Nexus"</strong> comes from Latin, meaning connection or a center of ties. That's
          how I see human relationships: like stellar systems, where every contact matters and every
          person is their own world.
        </p>
      </div>
      <div className={styles.textContainer}>
        <p>I hope Nexus helps you not only store names and numbers,</p>
        <p className={styles.textIcon}>
          <IoInfinite className={styles.infiniteIcon} />
          but strengthen your ties,
        </p>
        <p className={styles.textIcon}>
          <IoInfinite className={styles.infiniteIcon} />
          stay close to the people who matter,
        </p>
        <p className={styles.textIcon}>
          <IoInfinite className={styles.infiniteIcon} />
          and remain part of strong systems — together.
        </p>
      </div>
      <div className={styles.stayInTouchContainer}>
        <h3>Let's stay connected</h3>
        <p>If this project resonates with you — I'd love to hear your thoughts.</p>
        <div className={styles.linkTextContainer}>
          <a
            className={styles.socialLink}
            href='https://www.linkedin.com/in/sofi-dobriak/'
            target='_blank'
          >
            You can find me on LinkedIn
          </a>
          <p>— let's keep our orbits aligned.</p>
        </div>
      </div>
      <p className={styles.postScriptum}>
        PS. If you do not want to register, but want to see the application from the inside, just
        enter <strong>guest123@mail.com</strong> as your email and password in the{' '}
        <Link to='/login' className={styles.toLoginPageLink}>
          login form
        </Link>
      </p>
    </>
  );
};

export default HomePage;
