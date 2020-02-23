function ajax(url) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest;
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        }
    }
    // readyState = 0
    xmlhttp.open('GET', url, true);
    // readyState = 1
    xmlhttp.send();
    // readyState = 2 未响应

    // readyState = 3 收到部分

    // readyState = 4 已经接收到全部响应数据
}



// 0：未初始化 -- 尚未调用.open()方法；
// 1：启动 -- 已经调用.open()方法，但尚未调用.send()方法；
// 2：发送 -- 已经调用.send()方法，但尚未接收到响应；
// 3：接收 -- 已经接收到部分响应数据；
// 4：完成 -- 已经接收到全部响应数据，而且已经可以在客户端使用了；



// Promise
function getJSON(url) {
    var p = new Promise ((resolve, reject)=>{
        var XMLhttp;
        if (window.XMLHttpRequest){
            XMLhttp = new XMLHttpRequest();
        } else {
            XMLhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        XMLhttp.onreadystatechange = function() {
            if (XMLhttp.readyState == 4 && XMLhttp.status == 200){
                resolve(XMLhttp.responseText);
            } else {
                resJSON = {
                    code: XMLhttp.readyState,
                    response: XMLhttp.response
                }
                reject(resJSON)
            }
        }
        
        XMLhttp.open('GET', url, true)
        XMLhttp.send()

    })
}






