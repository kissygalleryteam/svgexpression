KISSY.add('kg/svgexpression/0.0.2/index',["node","base"],function(S ,require, exports, module) {var t=require("node").all,e=require("base"),r=e.extend({initializer:function(){function t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function e(){var e=t("svg");e.setAttribute("width",h),e.setAttribute("height",l),e.setAttribute("viewBox","0 0 200 200"),e.setAttribute("stroke",d()),e.setAttribute("fill","none"),e.setAttribute("stroke-width","3"),e.appendChild(r()),o>0&&e.appendChild(i(100,100,80,5,!0)),e.appendChild(i(100,100,70,2,!1));var a=50>=o?1:o/10;e.appendChild(n(70,80,10,a)),e.appendChild(n(130,80,10,a));var s=o/100*40+100;return 120==s&&s--,e.appendChild(u("M 80 120, Q 100 "+s+" 120 120,z")),e}function r(){var e=t("defs"),r=t("filter");r.setAttribute("id","dropshadow");var i=t("feGaussianBlur");i.setAttribute("stdDeviation",4);var n=t("feMerge"),u=t("feMergeNode"),a=t("feMergeNode");return a.setAttribute("in","SourceGraphic"),n.appendChild(u),n.appendChild(a),r.appendChild(i),r.appendChild(n),e.appendChild(r),e}function i(e,r,i,n,u){var d=t("circle");if(d.setAttribute("cx",e),d.setAttribute("cy",r),d.setAttribute("r",i),d.setAttribute("filter","url(#dropshadow)"),n&&d.setAttribute("stroke-width",n),u){var s=6.28*i,h=s/100*o,l=s-h,p=h+" "+l,b="0 "+s;d.setAttribute("stroke-dasharray",p),d.appendChild(a("stroke-dasharray",b,p))}return d}function n(e,r,i,n){var u=t("ellipse");return u.setAttribute("cx",e),u.setAttribute("cy",r),u.setAttribute("rx",i),u.setAttribute("ry",n),u.setAttribute("stroke-width",0),u.setAttribute("fill",d()),u.appendChild(a("ry",1,n)),u}function u(e){var r=t("path");return r.setAttribute("d",e),r.setAttribute("fill",d()),r.setAttribute("stroke-width",0),r.appendChild(a("d","M 80 120, Q 100 100 120 120,z",e)),r}function a(e,r,i){var n=t("animate");return n.setAttribute("attributeType","XML"),n.setAttribute("attributeName",e),n.setAttribute("from",r),n.setAttribute("to",i),n.setAttribute("dur",".5s"),n}function d(){var t,e=function(t,e,r){return Math.floor(t+(e-t)*((o-50*r)/50))};return t=50>=o?"rgb("+e(212,255,0)+","+e(89,153,0)+","+e(84,0,0)+")":100>o?"rgb("+e(255,123,1)+","+e(153,219,1)+","+e(0,68,1)+")":"rgb(123,219,68)"}var s=this.get("container"),o=this.get("level"),h=this.get("width"),l=this.get("height");s="string"==typeof s?document.querySelector(s):s,o=o>100?100:0>o?0:o,s.innerHTML="",s.appendChild(e())}},{ATTRS:{container:"",level:"",width:"",height:"",$target:{value:"",getter:function(e){return t(e)}}}});module.exports=r;});