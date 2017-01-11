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
import Weather from '../../components/Weather/Weather';
import Link from '../../components/Link/Link';
import styles from './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className="row">
            <div className="col-md-7">
              <h1>Michael Coooper&apos;s Homepage</h1>
              <h3>Quick Project Links</h3>
              <ul>
                <li><a href="https://github.com/thehappyginger" target="_blank" rel="noopener noreferrer">HappyGinger Github Repo</a></li>
                <li>
                  <Link to="/minecraft">Minecraft Server Moniter/Console</Link>
                  <br />This is a small NodeJs app that I wrote to control a Minecraft
                    Server via a public REST API.
                </li>
              </ul>
              <h3>Documentation Links</h3>
              <ul>
                <li><a href="//facebook.github.io/react/" target="_blank" rel="noopener noreferrer">ReactJs Documenation</a></li>
                <li><a href="//getbootstrap.com/css/" target="_blank" rel="noopener noreferrer">Bootstrap CSS Documenation</a></li>
                <li><a href="//minecraft.gamepedia.com/Commands/" target="_blank" rel="noopener noreferrer">Minecraft Console Commands</a></li>
                <li><a href="//github.com/kriasoft/react-starter-kit" target="_blank" rel="noopener noreferrer">ReactJs Boilerplate</a></li>
              </ul>
              <h3>Commonly Used Websites</h3>
              <ul>
                <li><a href="//www.google.com/" target="_blank" rel="noopener noreferrer">Google</a></li>
                <li><a href="//www.amazon.com/" target="_blank" rel="noopener noreferrer">Amazon</a></li>
                <li><a href="//www.ebay.com/" target="_blank" rel="noopener noreferrer">Ebay</a></li>
              </ul>
            </div>
            <div className="col-md-5">
              <Weather weather_location="Tucson, AZ" show_extended_forcast />
              <Weather weather_location="Summerhaven, AZ" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
