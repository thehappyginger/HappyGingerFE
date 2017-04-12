import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Dominion.css';
import { CardData } from './CardData';

class Dominion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [
        {
          index: 0,
          alias: '',
          deck: [

          ],
          currentPosition: 0,
        },
        {
          index: 1,
          alias: '',
          deck: [],
          currentPosition: 0,
        },
        {
          index: 2,
          alias: '',
          deck: [],
          currentPosition: 0,
        },
        {
          index: 3,
          alias: '',
          deck: [],
          currentPosition: 0,
        },
      ],
    };
  }

  componentDidMount() {
    console.log(CardData);
  }

  render() {
    return (
      <div className={styles.root} />
    );
  }
}

export default withStyles(styles)(Dominion);
