
var baseUrl=''
function ajax(url, data, success, cache, alone, async, type, dataType, error) {
    var type = type || 'post';//请求类型
    var dataType = dataType || 'json';//接收数据类型
    var async = async || true;//异步请求
    var alone = alone || false;//独立提交（一次有效的提交）
    var cache = cache || false;//浏览器历史缓存
    var success = success || function (data) {
        setTimeout(function () {
            layer.msg(data.msg);//通过layer插件来进行提示信息
        }, 500);
        if (data.status) {//服务器处理成功
            setTimeout(function () {
                if (data.url) {
                    location.replace(data.url);
                } else {
                    location.reload(true);
                }
            }, 1500);
        } else {//服务器处理失败
            alert('服务器处理失败')
        }
    }
        var error = error || function (data) {
            layer.closeAll('loading');
            setTimeout(function () {
                if(data.status == 404){
                    layer.msg('请求失败，请求未找到');
                }else if(data.status == 503){
                    layer.msg('请求失败，服务器内部错误');
                }else {
                    layer.msg('请求失败,网络连接超时');
                }
            },500);
        }

        $.ajax({
            'url': baseUrl+url,
            'data': data,
            'type': type,
            'dataType': dataType,
            'async': async,
            'success': success,
            'error': error,

        })
    }

    // submitAjax(post方式提交)
    function submitAjax(form,url, success, cache, alone) {
        cache = cache || true;
        var form = $(form);
        var data = form.serialize();
        ajax(url, data, success, cache, alone, true, 'post','json');
    }
    // ajax提交(post方式提交)
    function post(url, data, success, cache, alone) {
        ajax(url, data, success, cache, alone, true, 'post','json');
    }
    // ajax提交(get方式提交)
    function get(url, success, cache, alone) {
        ajax(url, {}, success, cache,alone, true, 'get','json');
    }
    // ajax提交(get方式提交,传参数)
    function getdata(url,data, success, cache, alone) {
        ajax(url, data, success, cache,alone, false, 'get','json');
    }
    // jsonp跨域请求(get方式提交)
    function jsonp(url, success, cache, alone) {
        ajax(url, {}, success, cache, alone, true, 'get','jsonp');
    }
