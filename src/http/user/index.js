import request from "../index";
const path = '/api/user';
function addUser(data){
  return request({
       method:'post',
       url: path + '/add',
       data: {
           name:data.name,
           password:data.password
       }
   })
}

function loginUser(data){
    return request({
        method:'post',
        url: path + '/login',
        data: {
            name:data.name,
            password:data.password
        }
    })
}
function checkUserId(){
    return request({
        method:'post',
        url: path + '/check',
        data: {}
    })
}
function getUser(){
    return request({
        method:'post',
        url: path + '/information',
        data: {
            
        }
    })
}
export default{
    addUser,
    loginUser,
    checkUserId,
    getUser
}