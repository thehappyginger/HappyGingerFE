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
import styles from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <span className={styles.text}>&copy; {new Date().getFullYear()} - Michael Cooper, Tucson, AZ</span>
          <span className={styles.spacer}>·</span>
          <Link className={styles.link} to="/">Home</Link>
          <span className={styles.spacer}>·</span>
          <Link className={styles.link} to="/privacy">Privacy</Link>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
