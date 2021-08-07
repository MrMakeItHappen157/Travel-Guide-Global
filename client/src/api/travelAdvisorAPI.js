/* eslint-disable consistent-return */
import axios from 'axios';

// export const getPlacesData = async (type, sw, ne) => {
//   try {
//     const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
//       params: {
//         bl_latitude: sw.lat,
//         bl_longitude: sw.lng,
//         tr_longitude: ne.lng,
//         tr_latitude: ne.lat,
//       },
//       headers: {
//         'x-rapidapi-key': '06ec26d43dmsh964a8fbfd373e7fp174d49jsnd77c98ac80ba',
//         // 'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
//         'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//       },
//     });

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/places/${type}?bl_latitude=${sw.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&tr_latitude=${ne.lat}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(`http://localhost:5000/api/weather?lat=${lat}&lng=${lng}`);

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
//         params: { lat, lon: lng },
//         headers: {
//           // 06ec26d43dmsh964a8fbfd373e7fp174d49jsnd77c98ac80ba
//           'x-rapidapi-key': '06ec26d43dmsh964a8fbfd373e7fp174d49jsnd77c98ac80ba',
//           // 'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
//           'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//         },
//       });

//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
