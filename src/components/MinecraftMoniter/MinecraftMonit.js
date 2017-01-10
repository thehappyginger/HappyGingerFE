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
      const url = 'https://www.happyginger.net/api/v1/minecraft?Body=/';
      const command = 'list';

      fetch(`${url}${command}`)
        .then((response) => response.json())
        .then((response) => this.setState({ returnMsg: response.data }))
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
