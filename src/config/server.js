import React from 'react'


let AUTH_URL = window.location.host.indexOf('localhost') > -1 ? 'http://localhost:3000/' : 'https://storeit-app.herokuapp.com/';

export default AUTH_URL;
