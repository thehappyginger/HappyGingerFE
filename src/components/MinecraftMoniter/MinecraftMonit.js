import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import fetch from '../../core/fetch';
import styles from './MinecraftMonit.css';

class MinecraftMonit extends React.Component {
  constructor(props) {
    super(props); // command

    this.state = {
      serverCommand: '',
      returnMsg: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ serverCommand: event.target.value });
  }

  handleSubmit(event) {
    this.runCommand(this.state.serverCommand);
    this.setState({ serverCommand: '' });
    event.preventDefault();
  }

  componentDidMount() {
    this.runCommand('/list');
  }

  componentDidUpdate() {
    this.refs.outputContainer_console.scrollTop = this.refs.outputContainer_console.scrollHeight;
  }

  runCommand(command) {
    const url = 'https://www.happyginger.net/api/v1/minecraft?Body=';

    fetch(`${url}${command}`)
      .then((response) => response.json())
      .then((response) => {
        const returnMsg = this.state.returnMsg;
        returnMsg.push(response.data);
        this.setState({ returnMsg });
      })
      .catch((err) => {
        const returnMsg = [err.message];
        this.setState({ returnMsg });
      });
  }

  renderOutput() {
    return (
      <div>
        {this.state.returnMsg.map((msg, index) => (
          <div className={styles.outputContainer_console_entry} key={index}>
            {msg.split('\n').map((msg, index) => (
              <div key={index}>
                {msg}<br />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className={styles.outputContainer}>
        <div ref="outputContainer_console" className={styles.outputContainer_console}>
          {this.renderOutput()}
        </div>
        <form onSubmit={this.handleSubmit} className={styles.outputContainer_form}>
          <div className="input-group row">
            <div className="col-sm-10">
              <input type="text" id="outputContainer_form" className="form-control" type="text" value={this.state.serverCommand} onChange={this.handleChange} />
            </div>
            <div className="col-sm-2">
              <button className="btn btn-primary" type="submit">Go!</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(MinecraftMonit);
