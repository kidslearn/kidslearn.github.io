(window.webpackJsonpwebapp=window.webpackJsonpwebapp||[]).push([[0],{17:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},23:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),c=n.n(l),o=(n(22),n(23),n(4),n(5),n(7)),u=/[\u4E00-\u9FFF]|[\u3400-\u4DBF]|(?:[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF])|(?:\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF3F])|(?:\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1F])|(?:\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEAF])|[\uF900-\uFAFF]|[\u3300-\u33FF]|[\uFE30-\uFE4F]|[\uF900-\uFAFF]|(?:\uD87E[\uDC00-\uDE1F])/;function i(e){return null!=e.toString().match(u)}function s(e){var t=e.split(""),n={};return t.forEach(function(e){i(e)&&(n[e]=(n[e]||0)+1)}),n}function m(e){for(var t=0,n=0,a=Object.entries(e);n<a.length;n++){var r=a[n],l=Object(o.a)(r,2);l[0],l[1];t++}return t}function d(e){for(var t="",n=0,a=Object.entries(e);n<a.length;n++){var r=a[n],l=Object(o.a)(r,2),c=l[0];l[1];t+=c}return t}function E(e){var t=e.split(""),n="";return t.forEach(function(e){i(e)&&(n+=e)}),n}var h=n(3);var b=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron text-center",style:{marginBottom:0}},r.a.createElement("h1",null,"\u8bfb\u7ed8\u672c\uff0c\u5b66\u4e2d\u6587")),r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"\u8bfb\u7ed8\u672c\uff0c\u5b66\u4e2d\u6587"))),r.a.createElement("div",{className:"container",style:{marginTop:"30px"}},r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("h4",null,"\u6211\u4f1a\u7684\u5b57",r.a.createElement("span",{id:"mywordNum",class:"bg-success text-white"},"2"),"\u4e2a(\u8bf7\u628a\u4f60\u4f1a\u7684\u5b57\u7c98\u8d34\u5230\u4ee5\u4e0b\u6587\u672c\u6846\uff09")),r.a.createElement("textarea",{id:"mywords",rows:"2",cols:"100"},"\u5b9d\u718a"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"\u7ed8\u672c\u6545\u4e8b",r.a.createElement("span",{id:"wordNum",class:"bg-success text-white"},"6"),"\u4e2a\u5b57 (\u8bf7\u628a\u5f85\u7edf\u8ba1\u7ed8\u672c\u6587\u5b57\u7c98\u8d34\u5230\u4ee5\u4e0b\u6587\u672c\u6846\uff09"),r.a.createElement("textarea",{id:"book",rows:"5",cols:"100"},"\u5c0f\u718a\u5b9d\u5b9d\u7ed8\u672c"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("input",{type:"button",value:"\u5f00\u59cb\u7edf\u8ba1",onClick:function(){var e=document.getElementById("book").value,t=s(e),n=document.getElementById("mywords").value,a=d(t),r=function(e,t){var n=t.split(""),a="";return n.forEach(function(t){-1==e.search(t)&&(a+=t)}),a}(n,a),l=s(document.getElementById("mywords").value);document.getElementById("book").innerHTML=d(t),document.getElementById("wordNum").innerHTML=function(e){for(var t=0,n=0,a=Object.entries(e);n<a.length;n++){var r=a[n],l=Object(o.a)(r,2);l[0];t+=l[1]}return t}(t),document.getElementById("diffNum").innerHTML=m(t),document.getElementById("newText").innerHTML=d(t),document.getElementById("wordFreq").innerHTML=function(e){var t=[],n="";for(var a in e)t.push([a,e[a]]);t.sort(function(e,t){return t[1]-e[1]});for(var r=0,l=Object.entries(t);r<l.length;r++){var c=l[r],u=Object(o.a)(c,2);u[0];n=n+u[1]+"\n"}return n}(t),document.getElementById("unknowWords").innerHTML=r,document.getElementById("percentage").innerHTML=function(e,t){var n;return n=100-Math.floor(e.length/t.length*100),document.getElementById("percentage").className=n<30?"bg-danger text-white":n>=70?"bg-success text-white":"bg-warning text-white",n+"%"}(r,a),document.getElementById("highlightbook").innerHTML=function(e,t){return e.split("").forEach(function(e){var n=new RegExp(e,"g");t=t.replace(n,'<span style="background-color:orange">'+e+"</span>")}),t}(r,e),document.getElementById("mywordNum").innerHTML=m(l),document.getElementById("unknowNum").innerHTML=r.length},className:"btn btn-primary btn-sm"})))),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col"},r.a.createElement("h4",null,"\u7ed8\u672c\u53bb\u91cd\u540e\u603b\u5b57\u6570\uff1a",r.a.createElement("span",{id:"diffNum",class:"bg-success text-white"},"5"))),r.a.createElement("div",{class:"col"},r.a.createElement("h4",null,"\u6211\u4f1a\u7684\u5b57\u5360\u7ed8\u672c\u5b57\u6570\u7684\u767e\u5206\u6bd4\uff1a",r.a.createElement("span",{id:"percentage",class:"bg-warning text-white"},"40%")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{class:"col"},r.a.createElement("h4",null,"\u7ed8\u672c\u53bb\u91cd\u540e\u65b0\u6587\u672c\uff1a")),r.a.createElement("div",{className:"col"},r.a.createElement(h.a,{render:function(e){var t=e.history;return r.a.createElement("input",{type:"button",value:"\u5b57\u5361\uff1a\u65b0\u6587\u672c",onClick:function(){var e=E(document.getElementById("newText").innerHTML);t.push("/getcard?text="+e)},className:"btn btn-primary btn-sm"})}}))),r.a.createElement("div",{id:"newText",class:"jumbotron"},"\u5c0f\u718a\u5b9d\u7ed8\u672c"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{class:"col"},r.a.createElement("h4",null,"\u7ed8\u672c\u5b57\u9891\u7edf\u8ba1\uff1a")),r.a.createElement("div",{className:"col"},r.a.createElement(h.a,{render:function(e){var t=e.history;return r.a.createElement("input",{type:"button",value:"\u5b57\u5361\uff1a\u5b57\u9891",onClick:function(){var e=E(document.getElementById("wordFreq").innerHTML);t.push("/getcard?text="+e)},className:"btn btn-primary btn-sm"})}}))),r.a.createElement("div",{id:"wordFreq",className:"jumbotron"},"\u5b9d,2 \u5c0f,1 \u718a,1 \u7ed8,1 \u672c,1"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{class:"col"},r.a.createElement("h4",null,"\u7ed8\u672c\u4e2d\u6211\u8fd8\u4e0d\u4f1a\u7684\u5b57",r.a.createElement("span",{id:"unknowNum",class:"bg-success text-white"},"3"),"\u4e2a\uff1a")),r.a.createElement("div",{className:"col"},r.a.createElement(h.a,{render:function(e){var t=e.history;return r.a.createElement("input",{type:"button",value:"\u5b57\u5361\uff1a\u7ed8\u672c\u4e2d\u6211\u8fd8\u4e0d\u4f1a\u7684\u5b57",onClick:function(){var e=E(document.getElementById("unknowWords").innerHTML);t.push("/getcard?text="+e)},className:"btn btn-primary btn-sm"})}}))),r.a.createElement("div",{id:"unknowWords",class:"jumbotron"},"\u5c0f\u7ed8\u672c"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{class:"col"},r.a.createElement("h4",null,"\u9ad8\u4eae\u751f\u5b57\u540e\u7684\u7ed8\u672c\u6587\u6863\uff1a")),r.a.createElement("div",{className:"col"},r.a.createElement(h.a,{render:function(e){var t=e.history;return r.a.createElement("input",{type:"button",value:"\u6253\u5f00\u9ad8\u4eae\u751f\u5b57\u540e\u7684\u7ed8\u672c\u6587\u6863",onClick:function(){var e=document.getElementById("highlightbook").innerHTML;t.push("/highlightbook?text="+e)},className:"btn btn-primary btn-sm"})}}))),r.a.createElement("div",{id:"highlightbook",class:"jumbotron"},r.a.createElement("span",{style:{backgroundColor:"orange"}},"\u5c0f"),"\u718a\u5b9d\u5b9d",r.a.createElement("span",{style:{backgroundColor:"orange"}},"\u7ed8\u672c"))))};var v=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"))};var g=function(){return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:function(){var e=window.location.search.substr(1),t=e.search("=");e=e.substring(t+1);var n=decodeURI(e).split(""),a=0,r='<style>    table, th, td {border: 1px solid black; border-collapse: collapse;} td{font-size: 13.2vh;}</style><table style="width:100%; position: absolute; top: 0; bottom: 0; left: 0; right: 0;"><tbody>';n.length;return n.forEach(function(e){a%4==0?(r+='<tr align="center">',r+="<td style='width:25%;'>"+e+"</td>"):r+="<td style='width:25%;'>"+e+"</td>",++a}),a%4==1?r+="<td></td><td></td><td></td>":a%4==2?r+="<td></td><td></td>":a%4==3&&(r+="<td></td>"),r+="</tr></tbody></table>"}()},className:"container",id:"p",style:{fontFamily:"XinhuaKaiti"}})};var p=function(){return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:function(){var e=window.location.search.substr(1),t=e.search("=");return e=e.substring(t+1),"<h4>"+decodeURI(e)+"</h4>"}()},className:"container",id:"p",style:{fontFamily:"XinhuaKaiti"}})},f=n(9);var w=function(){return r.a.createElement(f.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:b}),r.a.createElement(h.a,{path:"/mywordscard",component:v}),r.a.createElement(h.a,{path:"/getcard",component:g}),r.a.createElement(h.a,{path:"/highlightbook",component:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,n){}},[[17,1,2]]]);