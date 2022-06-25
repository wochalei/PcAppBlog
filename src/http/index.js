import axios from "axios";
import {http} from '../config/httpConfig'

let request =  axios.create({
   /*  baseURL: http.url */

})
request.interceptors.request.use(config => {
    let data = config.data;
    let user_id= localStorage.getItem('user_id');
    data.user_id=user_id;

return config;
},error => {

return Promise.reject(error);
});
request.interceptors.response.use(function (response) {

    return response;
  }, function (error) {
      console.log(error);
    return Promise.reject(error);
  });


export default request