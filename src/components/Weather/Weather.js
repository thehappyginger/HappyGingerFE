import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import fetch from '../../core/fetch';
import styles from './Weather.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    // weather_location (FORMAT: <city>, <two letter state>; EX: Tucson, AZ)
    // show_extended_forcast (FORMAT: true/false; DEFAUT: false)

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

  extendedForcast(weatherInfo) {
    if (this.props.show_extended_forcast) {
      return (
        <div className="row">
          <div className="col-sm-12">
            <hr />
            <h5>6 Day Forcast</h5>
          </div>
          {[...Array(6)].map((x, i) =>
            <div className="col-sm-4" key={i}>
              <p>
                <strong>{weatherInfo.item.forecast[i].date}</strong><br />
                High: <strong>{weatherInfo.item.forecast[i].low}&deg;</strong><br />
                Low: <strong>{weatherInfo.item.forecast[i].high}&deg;</strong><br />
                <strong>{weatherInfo.item.forecast[i].text}</strong>
              </p>
            </div>,
          )}
        </div>
      );
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
      <div>
        <h2 className="location">{weatherInfo.location.city}, {weatherInfo.location.region}</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="low">Last Updated: <strong>{weatherInfo.item.pubDate}</strong></div>
            <hr />
          </div>
          <div className="col-md-6">
            <div className="current_temp">Temp: <strong>{weatherInfo.item.condition.temp}&deg;</strong></div>
            <div className="current_wind_chill">Wind Chill: <strong>{weatherInfo.wind.chill}&deg;</strong></div>
            <div className="current_wind_speed">Wind Speed: <strong>{weatherInfo.wind.speed}mph</strong></div>
            <div className="current_condtion">Current Condition: <strong>{weatherInfo.item.condition.text}</strong></div>
          </div>
          <div className="col-md-6">
            <div className="low">Lat: <strong>{weatherInfo.item.lat}</strong></div>
            <div className="long">Long: <strong>{weatherInfo.item.long}</strong></div>
            <hr />
          </div>
          <div className="col-md-6">
            <div className="sunrise">Sunrise: <strong>{weatherInfo.astronomy.sunrise}</strong></div>
            <div className="sunset">Sunset: <strong>{weatherInfo.astronomy.sunset}</strong></div>
          </div>
        </div>
        {this.extendedForcast(weatherInfo)}
      </div>
    );
  }

  render() {
    return (
      <div className={styles.root}>
        {this.formatWeather()}
      </div>
    );
  }
}

Weather.propTypes = { weather_location: React.PropTypes.string, show_extended_forcast: React.PropTypes.bool };
Weather.defaultProps = { weather_location: 'Tucson, AZ', show_extended_forcast: false };

export default withStyles(styles)(Weather);
