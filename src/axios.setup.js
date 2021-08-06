import axios from 'axios';
import firebase from 'firebase/app'
import 'firebase/auth'
// import { auth } from './firebase'
// import { useAuth } from './contexts/AuthContext'


var apiURL = 'https://allotmentmanager.herokuapp.com';

if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "") {
    // alert("It's a local server!");
    apiURL = 'http://127.0.0.1:8000'
    console.log('Local api running at: ' + apiURL);
};

var instance = axios.create({
  baseURL: apiURL
});

instance.interceptors.request.use(async config => {
 config.headers.token = await firebase.auth().currentUser.getIdToken()
 return config
}, (error) => {
 return Promise.reject(error)
})

export default instance;
