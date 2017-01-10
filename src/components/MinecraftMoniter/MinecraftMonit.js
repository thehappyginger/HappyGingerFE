import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import fetch from '../../core/fetch';
import styles from './MinecraftMonit.css';

class MinecraftMonit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      returnMsg: '',
    };
  }

  componentDidMount() {
    this.runCommand('list');
  }

  runCommand(command) {
    if (command) {
      const url = 'https://www.happyginger.net/minecraft?Body=%2';
      const command = 'list';

      const request = new Request(`${url}${command}`, {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        headers: new Headers({
          'Content-Type': 'text/plain',
        }),
      });

      fetch(request)
        .then((returnMsg) => this.setState({ returnMsg }))
        .catch((err) => this.setState({
          returnMsg: err.message,
        }));
    }
  }

  render() {
    return (<div>{this.state.returnMsg}</div>);
  }
}

export default withStyles(styles)(MinecraftMonit);
