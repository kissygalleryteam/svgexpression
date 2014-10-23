/*
Thu Oct 23 2014 20:42:09 GMT+0800 (CST)
combined files by KMD:

index.js
*/

KISSY.add('kg/svgexpression/0.0.1/index',["node","base"],function(S ,require, exports, module) {
var $ = require('node').all;
var Base = require('base');

var Svgexpression = Base.extend({
    initializer:function(){
        var self = this;
        var $target = self.get('$target');
    }
},{
    ATTRS:{
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