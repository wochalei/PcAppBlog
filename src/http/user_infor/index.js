import request from "../index";
const path = '/api/useriformation';
function getUser(obj) {
   obj=obj? obj:{};
    return request({
        method: 'post',
        url: path + '/get',
        data: {choose:obj.choose}
    })
}

function updateUser(obj) {
    return request({
        method: 'post',
        url: path + "/update",
        data: obj
    })
}
function updateIntroduce(obj) {
    return request({
        method: 'post',
        url: path + "/introduce",
        data: obj
    })
}
export default{

    getUser,
    updateIntroduce,
    updateUser
}