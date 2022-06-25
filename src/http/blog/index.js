import request from "../index";
const path = '/api/blog';

function addBlog(data) {
    let tmp = {
        title: data.title,
        summary: data.summary,
        content: data.content,
        type: data.type ,
        coverImg: data.coverImg ||'',
        img: data.img,
        created: Date.now(),
       
    }
     
    return request.post(path + "/add", tmp);

}

function searchAll(obj){
   
    let data ={title:obj.title,blog_id:obj.blog_id,page:obj.page,pageSize:obj.pageSize}
  
    return request.post(path + "/search",data);
}
function searchPublic(obj){
   
    let data ={title:obj.title,blog_id:obj.blog_id,page:obj.page,pageSize:obj.pageSize}
    
    return request.post(path + "/search_public",data);
}
function updateBlog(data){
    let tmp = {
        title: data.title,
        summary: data.summary,
        content: data.content,
        type: data.type ||"html",
        coverImg: data.coverImg,
        img: data.img,
        updated: Date.now(),
         blog_id:data.blog_id
    }
    return request.post(path + "/update",tmp);
}
function deletedBlog(blog_id){
  return request({
      method:'post',
      url: path + '/delete',
      data: {
        blog_id:blog_id
      }
  })
}
function searchType(obj){
    let data ={title:obj.title,blog_id:obj.blog_id,page:obj.page,pageSize:obj.pageSize,type:obj.type}
  
    return request.post(path + "/type",data);
}
function getAll(){
    return request({
        method:'post',
        url: path + '/searchAll',
        data: {}
    })
}
export default{
    addBlog,
    updateBlog,
    searchAll,
    deletedBlog,
    searchType,
    searchPublic,
    getAll
}