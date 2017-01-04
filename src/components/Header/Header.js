/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
// import logoUrl from './logo-small.png';
// import logoUrl2x from './logo-small@2x.png';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <Navigation className={styles.nav} />
          <Link className={styles.brand} to="/">
            {/* <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="38" height="38" alt="React" /> */}
            <span className={styles.brandTxt}>HappyGinger</span>
          </Link>
          <div className={styles.banner}>
            {/* <h1 className={styles.bannerTitle}></h1>
            <p className={styles.bannerDesc}></p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
