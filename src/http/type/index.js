import request from "../index";
const path = '/api/blogtype';
function addType(value){
    
   return request({
        method:'post',
        url: path + '/add',
        data: {
            
            type:value
        }
    })
}
function getType(id){
   return request({
       method:'post',
       url:  path + '/searchusertype',
       data: {
        
       }
   })
}
function changeType(type,value){
    
  return request({
      method:'post',
      url:  path + "/changeusertype",
      data: {
          type:type,
          value:value
      }
  })
}
function deletedType(value){
    return request({
        method:'post',
        url:  path + "/deleteusertype",
        data: {
            type:value
        }
    })
}
export default{
    addType,
    getType,
    changeType,
    deletedType 
}