/*
Sat Oct 25 2014 21:30:14 GMT+0800 (CST)
combined files by KMD:

index.js
*/

KISSY.add('kg/svgexpression/0.0.2/index',["node","base"],function(S ,require, exports, module) {
var $ = require('node').all;
var Base = require('base');

var Svgexpression = Base.extend({
    initializer:function(){
        var container = this.get('container');
        var level = this.get('level');
        var width = this.get('width');
        var height = this.get('height');

        function createElementNS(nodeName){
            return document.createElementNS('http://www.w3.org/2000/svg',nodeName);
        }
        /*构建画面*/
        function createSVG(){
            var svg = createElementNS('svg');
            svg.setAttribute('width',width);
            svg.setAttribute('height',height);
            svg.setAttribute('viewBox','0 0 200 200');
            svg.setAttribute('stroke',calcColor());
            svg.setAttribute('fill','none');
            svg.setAttribute('stroke-width','3');
            svg.appendChild(createdefs());
            if (level > 0) {
                svg.appendChild(createCircle(100,100,80,5,true));
            }
            svg.appendChild(createCircle(100,100,70,2,false));
            var eyeRY = level<=50?1:level/10;
            svg.appendChild(createellipse(70,80,10,eyeRY));
            svg.appendChild(createellipse(130,80,10,eyeRY));
            var mouthY = (level/100)*40+100;
            if (mouthY==120) {mouthY--}
            svg.appendChild(createpath('M 80 120, Q 100 '+mouthY+' 120 120,z'));
            return svg;
        }
        /*构建高光*/
        function createdefs(){
            var defs = createElementNS('defs');
            var filter = createElementNS('filter');
            filter.setAttribute('id','dropshadow');
            var feGaussianBlur = createElementNS('feGaussianBlur');
            feGaussianBlur.setAttribute('stdDeviation',4);
            var feMerge = createElementNS('feMerge');
            var feMergeNode1 = createElementNS('feMergeNode');
            var feMergeNode2 = createElementNS('feMergeNode');
            feMergeNode2.setAttribute('in','SourceGraphic');
            feMerge.appendChild(feMergeNode1);
            feMerge.appendChild(feMergeNode2);
            filter.appendChild(feGaussianBlur);
            filter.appendChild(feMerge);
            defs.appendChild(filter);
            return defs;
        }
        /*构建圆脸*/
        function createCircle(cx,cy,r,width,b){
            var circle = createElementNS('circle');
            circle.setAttribute('cx',cx);
            circle.setAttribute('cy',cy);
            circle.setAttribute('r',r);
            circle.setAttribute('filter','url(#dropshadow)');
            if (width) {
                circle.setAttribute('stroke-width',width);
            };
            if (b) {
                var perimeter = 3.14*2*r;
                var length = perimeter/100*level;
                var otherLength = perimeter-length;
                var toDasharray = length+' '+otherLength;
                var fromDasharray = '0 '+perimeter
                circle.setAttribute('stroke-dasharray',toDasharray);
                circle.appendChild(createAnimate('stroke-dasharray',fromDasharray,toDasharray));
            };
            // <animate attributeType="XML" attributeName="r" from=0 to=50 dur="1s"></animate>
            return circle;
        }
        /*构建眼睛*/
        function createellipse(cx,cy,rx,ry){
            var ellipse = createElementNS('ellipse');
            ellipse.setAttribute('cx',cx);
            ellipse.setAttribute('cy',cy);
            ellipse.setAttribute('rx',rx);
            ellipse.setAttribute('ry',ry);
            ellipse.setAttribute('stroke-width',0);
            ellipse.setAttribute('fill',calcColor());
            ellipse.appendChild(createAnimate('ry',1,ry));
            return ellipse;
        }
        /*构建眼睛嘴巴*/
        function createpolyline(from,to){
            var polyline = createElementNS('polyline');
            polyline.setAttribute('points',to);
            polyline.appendChild(createAnimate('points',from,to));
            return polyline;
        }
        /*构建嘴巴*/
        function createpath(d){
            var path = createElementNS('path');
            path.setAttribute('d',d);
            path.setAttribute('fill',calcColor());
            path.setAttribute('stroke-width',0);
            path.appendChild(createAnimate('d','M 80 120, Q 100 100 120 120,z',d));
            return path;
        }
        /*构建动画*/
        function createAnimate(name,from,to){
            var animate = createElementNS('animate');
            animate.setAttribute('attributeType','XML');
            animate.setAttribute('attributeName',name);
            animate.setAttribute('from',from);
            animate.setAttribute('to',to);
            animate.setAttribute('dur','.5s');
            return animate;
        }
        /*计算表情颜色*/ 
        /**
         * r:212 g:89 b:84
         * r:255 g:153 b:0
         * r:123 g:219 b:68
         */
        function calcColor(){
            var color;
            var calc = function(a,b,c){
                return Math.floor(a+(b-a)*((level-50*c)/50));
            }
            if (level <= 50) {
                color = 'rgb('+calc(212,255,0)+','+calc(89,153,0)+','+calc(84,0,0)+')'
            } else if(level < 100){
                color = 'rgb('+calc(255,123,1)+','+calc(153,219,1)+','+calc(0,68,1)+')'
            } else {
                color = 'rgb(123,219,68)'
            };
            return color;
        }

        container = (typeof container == 'string') ? document.querySelector(container) : container;
        level = level > 100 ? 100 : (level < 0 ? 0 : level);
        container.innerHTML = '';
        container.appendChild(createSVG());
    }
},{
    ATTRS:{
        container: '',
        level: '',
        width: '',
        height: '',
        $target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        }
    }
});

module.exports = Svgexpression;




});