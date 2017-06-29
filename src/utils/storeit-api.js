import axios from 'axios';

const BASE_URL = 'https://storeit-app.herokuapp.com/';

export { getUserData, getFacilityData };

function getUserData() {
  const url = `${BASE_URL}/api/users`;
  return axios.get(url).then(response => response.data);
}

function getFacilityData() {
  const url = `${BASE_URL}/api/facilities`;
  return axios.get(url).then(response => response.data);
}
