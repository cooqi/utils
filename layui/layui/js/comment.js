//获取url参数
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.decodeURI(location.search).substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}