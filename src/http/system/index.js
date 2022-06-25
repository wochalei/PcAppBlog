import request from "../index";
const path = '/api/system';
function getSystem(){
    return request({
        method:'post',
        url: path + '/get',
        data: {
            
        }
    })
}
function updateSystem(obj){
    return request({
        method:'post',
        url: path + '/update',
        data: obj
    })
}

export default{
    updateSystem,
    getSystem,
   
}