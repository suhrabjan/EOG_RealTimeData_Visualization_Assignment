import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeaderRaw from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import AvatarRaw from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: 'white'
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const avatarStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: 'white'
  }
});
const Avatar = withStyles(avatarStyles)(AvatarRaw);

const styles = {
  card: {
    margin: '1% 1%'
    // width: '700px',
    // height: '500px'
  }
};

const convertToHours = timestamp => {
  const ts = new Date(timestamp);
  return ts.toLocaleTimeString();
};

const NowWhat = props => {
  const { classes } = props;
  const { latitude, longitude, metric, metricsData } = props.details;
  const data = metricsData.map(line => {
    return {
      timestamp: convertToHours(line['timestamp']),
      metric: line['metric']
    };
  });
  // console.log(data);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
      <Card className={classes.card}>
        <CardHeader title="RealTime Visualization of Drone's Location" />
        <CardContent>
          <MyMap
            latitude={latitude}
            longitude={longitude}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSrmQ2sJuZJGraZ3RYVGtqDaykygpVA6g&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ width: '100%', height: '100%' }} />}
            containerElement={
              <div style={{ width: '650px', height: '400px' }} />
            }
            mapElement={<div style={{ width: '100%', height: `100%` }} />}
          />
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader title="RealTime Graphical Visualization of Drone's Temp" />
        <CardContent>
          <LineChart
            width={650}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="metric" stroke="black" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey={'timestamp'} />
            <YAxis type="number" domain={['dataMax - 200', 'auto']} />
            <Tooltip />
          </LineChart>
        </CardContent>
      </Card>
      <Card
        className={classes.card}
        style={{ minWidth: '700px', height: '500px' }}>
        <CardHeader title="RealTime Information of the Drone" />
        <CardContent>
          <List>
            <ListItem>
              <Avatar>1</Avatar>
              <ListItemText
                primary={`Temperature: ${metric || '249.20709327988456'}`}
              />
            </ListItem>
            <ListItem>
              <Avatar>2</Avatar>
              <ListItemText
                primary={`Latitude: ${latitude || '28.492074543952448'}`}
              />
            </ListItem>
            <ListItem>
              <Avatar>3</Avatar>
              <ListItemText
                primary={`Longitude: ${longitude || '-95.4928720669904'}`}
              />
            </ListItem>
            <ListItem>
              <Avatar>4</Avatar>
              <ListItemText primary={'Last Received: 2 seconds ago'} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

const MyMap = withScriptjs(
  withGoogleMap(({ latitude, longitude }) => {
    const defaultProps = {
      center: {
        lat: 31.11,
        lng: -100
      },
      zoom: 4
    };
    return (
      <Card>
        <GoogleMap
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}>
          <Marker
            position={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }}
          />
        </GoogleMap>
      </Card>
    );
  })
);

const mapStateToProps = state => {
  return { details: state.weather };
};

export default connect(mapStateToProps)(withStyles(styles)(NowWhat));
