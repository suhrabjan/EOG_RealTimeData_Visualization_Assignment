export const FETCH_WEATHER = 'COMMAND/FETCH_WEATHER_FOR_LAT_LNG';
export const API_ERROR = 'EVENT/API_ERROR_RECEIVED';
export const WEATHER_DATA_RECEIVED = 'EVENT/WEATHER_DATA_RECEIVED';
export const WEATHER_ID_RECEIVED = 'EVENT/WEATHER_ID_RECEIVED';
export const FETCH_DRONE = 'COMMAND/FETCH_DRONE';

// export const determineDroneLatAndLong = () => async dispatch => {
//   const response = await jsonPlaceholder.get('/posts');
//   dispatch({ type: 'FETCH_POSTS', payload: response.data });
// };

// export const determineDroneLatAndLong = () => async dispatch

// const mapDispatch = dispatch => ({
//   onLoad: () =>
//     dispatch({
//       type: actions.FETCH_WEATHER,
//       longitude: 56, //Should get its data from state
//       latitude: 65 // Should Get its data from state
//     })
// });

// export const determineDroneLatAndLong = async dispatch => {
//   const response = await fetch(
//     'https://react-assessment-api.herokuapp.com/api/drone'
//   );
//   if (!response.ok) {
//     return { error: { code: response.status } };
//   }
//   const json = await response.json();
//   let l = json.data.length - 1;
//   dispatch({
//     type: 'FETCH_DRONE',
//     payload: { lat: json.data[l].latitude, lon: json.data[l].longitude }
//   });
//   // return { lat: json.data[l].latitude, lon: json.data[l].longitude };
// };

// export const determineDroneLatAndLong = async dispatch => {
//   const response = await fetch(
//     'https://react-assessment-api.herokuapp.com/api/drone'
//   );
//   if (!response.ok) {
//     return { error: { code: response.status } };
//   }
//   const json = await response.json();
//   let l = json.data.length - 1;
//   return {
//     type: 'FETCH_DRONE',
//     payload: { lat: json.data[l].latitude, lon: json.data[l].longitude }
//   };
// };
