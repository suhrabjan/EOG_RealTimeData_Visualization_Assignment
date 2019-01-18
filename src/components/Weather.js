import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import ChipRaw from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const cardStyles = theme => ({
  root: {
    background: theme.palette.secondary.main
  },
  label: {
    color: theme.palette.primary.main
  }
});
const Chip = withStyles(cardStyles)(ChipRaw);

class Weather extends Component {
  componentDidMount() {
    this.props.onLoad();
    this.interval = setInterval(() => {
      this.props.onLoad();
    }, 4000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { name, weather_state_name, temperatureinFahrenheit } = this.props;
    return (
      <Chip
        label={`Weather in ${name}: ${weather_state_name} and ${temperatureinFahrenheit}°`}
      />
    );
  }
}

const mapState = (state, ownProps) => {
  const {
    loading,
    name,
    weather_state_name,
    temperatureinFahrenheit,
    latitude
  } = state.weather;
  return {
    loading,
    name,
    weather_state_name,
    temperatureinFahrenheit,
    latitude
  };
};

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_WEATHER
    })
});

export default connect(
  mapState,
  mapDispatch
)(Weather);
