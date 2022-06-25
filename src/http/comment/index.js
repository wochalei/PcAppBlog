import request from "../index";
const path = '/api/comment';
function add(data){
    return request({
        method:'post',
        url: path + '/add',
        data: data
    })     
}
function get(obj){
    return request({
        method:'post',
        url:  path + '/get',
        data: {
            blog_id:obj.blog_id,
        }
    })  
}
function deleted(id){
    return request({
        method:'post',
        url:  path + '/deleted',
        data: {
            id
        }
    })  
}
function reply(data){
    return request({
        method:'post',
        url:  path + '/reply',
        data: data
    })  
}
export default{
    add,
    get,
    deleted,
    reply,
}