/**
 * get url parameters
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