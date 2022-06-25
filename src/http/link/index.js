import request from "../index";
const path = '/api/friend';
function addLink(obj) {

    return request({
        method: 'post',
        url: path + '/add',
        data: obj
    })
}
function getLink(id) {
    return request({
        method: 'post',
        url: path + '/get',
        data: {id:id}
    })
}

function deletedLink(value) {
    return request({
        method: 'post',
        url: path + "/deleted",
        data: {
            id:value
        }
    })
}
function updateLink(obj) {
    return request({
        method: 'post',
        url: path + "/update",
        data: obj
    })
}
export default {
    addLink,
    getLink,
    deletedLink,
    updateLink
}