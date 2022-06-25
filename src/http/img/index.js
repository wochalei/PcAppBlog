import request from "../index";
const path = '/api/img';

 function addImg(data){
   return  request({
      method:'post',
      url: path ,
      data
   })
 } 
 
 export default{
    addImg
};