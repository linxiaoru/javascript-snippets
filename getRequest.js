/**
 * get url parameters (1)
*/
function GetRequest() {
  var url = location.search;  // get query string from url
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");  // split our query string into its component parts
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

// useage
var Request = new Object();
Request = GetRequest();
var a, b, c, d;
a = Request['a'];
b = Request['b'];
c = Request['c'];
d = Request['d'];

/*
(2)
尽可能全面正确的解析一个任意url的所有参数为Object。
var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled';
parseParam(url);
结果：
{
user: 'anonymous',
id: [123, 456], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
city: '北京', // 中文
d: true, // 未指定值的 key 约定值为 true
enabled: true, // 未指定值的 key 约定值为 true
}
*/
function parseParam(url) {
  var theRequest = {};
  var urlString = decodeURI(url).split('?')[1];
  var params = urlString.split('&');
  for (var param of params) {
    var temp = param.split('=');
    if (temp[0] in theRequest) {
      if (theRequest[temp[0]] instanceof Array) {
        theRequest[temp[0]].push(+temp[1])
      } else {
        theRequest[temp[0]] = [+theRequest[temp[0]], +temp[1]];
      }
    } else {
      theRequest[temp[0]] = temp[1] || true;
    }
  }
  return theRequest;
}

// useage

var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&id=123&city=%E5%8C%97%E4%BA%AC&d&enabled';
// var URL = location.search;
parseParam(url);
