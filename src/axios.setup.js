import axios from 'axios';

var apiURL = 'https://allotmentmanager.herokuapp.com';

if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "") {
    // alert("It's a local server!");
    apiURL = 'http://127.0.0.1:8000'
};
console.log(apiURL);

var instance = axios.create({
  baseURL: apiURL
});

export default instance;
