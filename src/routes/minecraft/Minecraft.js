/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Minecraft.css';
import MinecraftMonit from '../../components/MinecraftMoniter/MinecraftMonit';

class Minecraft extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <h1>{this.props.title}</h1>
          <p>To Connect Via Minecraft: <strong>happyginger.net:25565</strong></p>
          <p>Minecraft Server Commands Wiki:
            <strong>
              <a
                href="http://minecraft.gamepedia.com/Commands"
                target="_blank"
                rel="noopener noreferrer"
              >http://minecraft.gamepedia.com/Commands</a>
            </strong>
          </p>
          <MinecraftMonit />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Minecraft);
