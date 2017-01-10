import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import fetch from '../../core/fetch';
import styles from './Weather.css';

class Weather extends React.Component {
  constructor(props) {
    super(props); // weather_location (FORMAT: <city>, <two letter state>; EX: Tucson, AZ)

    this.state = {
      weather_data: {
        data: {},
        error: false,
        error_msg: '',
        isLoading: true,
      },
    };
  }

  componentDidMount() {
    this.retriveWeatherData(this.props.weather_location);
  }

  retriveWeatherData(loc) {
    if (loc) {
      const weatherUrl = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${loc}')&format=json`;

      fetch(weatherUrl)
        .then((response) => response.json())
        .then((weatherDataResponse) => this.setState({
          weather_data: {
            data: weatherDataResponse.query.results.channel,
            isLoading: false,
          },
        })).catch((err) => this.setState({
          weather_data: {
            error_msg: err,
            error: true,
            isLoading: false,
          },
        }));
    } else {
      this.setState({
        weather_data: {
          error_msg: {
            message: 'Error: No location specified...',
          },
          error: true,
          isLoading: false,
        },
      });
    }
  }

  formatWeather() {
    if (this.state.weather_data.isLoading) {
      return 'Loading...';
    }

    if (this.state.weather_data.error) {
      return `Error: ${this.state.weather_data.error_msg.message}`;
    }

    const weatherInfo = this.state.weather_data.data;
    return (
      <div className="row">
        <div className="col-md-12">
          <h2 className="location">{weatherInfo.location.city}, {weatherInfo.location.region}</h2>
          <div className="low">PubDate: {weatherInfo.item.pubDate}</div>
          <hr />
        </div>
        <div className="col-md-12">
          <div className="long">Current Temp: <strong>{weatherInfo.item.condition.temp}&deg;</strong></div>
          <div className="long">Current Wind Chill: <strong>{weatherInfo.wind.chill}&deg;</strong></div>
          <div className="long">Current Wind Speed: <strong>{weatherInfo.wind.speed}mph</strong></div>
          <hr />
        </div>
        <div className="col-md-12">
          <div className="low">Lat: {weatherInfo.item.lat}</div>
          <div className="long">Long: {weatherInfo.item.long}</div>
        </div>
        <div className="col-md-12">
          <div className="low">Sunrise: {weatherInfo.astronomy.sunrise}</div>
          <div className="long">Sunset: {weatherInfo.astronomy.sunset}</div>
        </div>
      </div>
    );
  }

  render() {
    console.log('Weather App Loaded.');
    return (
      <div className={styles.root}>
        {this.formatWeather()}
      </div>
    );
  }
}

Weather.propTypes = { weather_location: React.PropTypes.string };
Weather.defaultProps = { weather_location: 'Tucson, AZ' };

export default withStyles(styles)(Weather);
