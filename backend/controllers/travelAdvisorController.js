import asyncHandler from 'express-async-handler'
import axios from 'axios';

// @desc    Get top rated products
// @route   GET /api/places/{type}?sw={sw}&ne={ne}
// @access  Public
export const getPlacesData = asyncHandler(async (req, res) => {
  console.log('GET /api')
  const {     
    bl_latitude,
    bl_longitude,
    tr_longitude,
    tr_latitude,
  } = req.query;

  const { type } = req.params;

  const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
    params: {
      bl_latitude,
      bl_longitude,
      tr_longitude,
      tr_latitude,
    },
    headers: {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    },
  });

  res.json(data)
})

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
export const getWeatherData = asyncHandler(async (req, res) => {
  const { lat, lng} = req.query;

    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
      params: { lat, lon: lng },
      headers: {
        'x-rapidapi-key': process.env.RAPID_API_KEY,
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      },
    });

  res.json(data);
})



