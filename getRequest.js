/**
 * 获取 url ？后面的所有参数，根据需要获取参数值
*/
function GetRequest() {
  var url = location.search; // 获取url中"?"符后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

// 使用方法
var Request = new Object();
Request = GetRequest();
var a, b, c, d;
a = Request['a'];
b = Request['b'];
c = Request['c'];
d = Request['d'];