import axios from 'axios';

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = "AIzaSyCyOu-XbRZIYwaJpsCUn4lJgJAP-LdU0MM";

// Get the nearby places - passing the latitude, longitude, type, and optional keyword
const nearByPlace = (lat, lng, type, keyword = '') => {
  const url = `${BASE_URL}/nearbysearch/json?location=${lat},${lng}&radius=1500&type=${type}&keyword=${keyword}&key=${API_KEY}`;
  return axios.get(url);
};

export default {
  nearByPlace
};