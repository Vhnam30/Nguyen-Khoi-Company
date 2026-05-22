import react from 'react';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';
import Header from '../components/Header/index.js';
import Footer from '../components/Footer/index.js';

function DefaultLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

//PropTypes
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
