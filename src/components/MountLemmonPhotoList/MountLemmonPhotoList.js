import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import fetch from '../../core/fetch';
import styles from './MountLemmonPhotoList.css';

class MountLemmonPhotoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoList: [],
    };
  }

  componentDidMount() {
    const url = 'https://www.happyginger.net/public/summit/listjpg.txt';

    fetch(url)
      .then((response) => {
        const responseArray = response.split('  ');
        this.setState({ photoList: responseArray });
      })
      .catch((err) => {
        const responseArray = [];
        responseArray[0] = response.err;
        this.setState({ photoList: responseArray });
      });
  }

  render() {
    return (
      <div>{this.state.photoList}</div>
    );
  }
}

export default withStyles(styles)(MountLemmonPhotoList);
