(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages3/gongqiu/gongqiu"],{"32e9":function(t,n,e){},"55b6":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{supplyDemandList:[]}},onLoad:function(){this.getGongqiu()},methods:{topage:function(n){t.navigateTo({url:"/pages3/supplyDemandInfo/supplyDemandInfo?id="+n.id})},getGongqiu:function(){var t=this;this.$axios.axios("get",this.$paths.supplyNeedList,{pageSize:1e5,pageNum:1}).then((function(n){if(200==n.code){for(var e=n.rows,a=0;a<e.length;a++)e[a].subCategory&&(e[a].subCategory=e[a].subCategory.split(","));t.supplyDemandList=e}})).catch((function(t){console.log("错误回调",t)}))}}};n.default=e}).call(this,e("543d")["default"])},"91e3":function(t,n,e){"use strict";var a=e("32e9"),u=e.n(a);u.a},a1a6:function(t,n,e){"use strict";(function(t,n){var a=e("4ea4");e("dc35");a(e("66fd"));var u=a(e("fdc3"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(u.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},b271:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},u=[]},ebae:function(t,n,e){"use strict";e.r(n);var a=e("55b6"),u=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=u.a},fdc3:function(t,n,e){"use strict";e.r(n);var a=e("b271"),u=e("ebae");for(var i in u)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("91e3");var o=e("f0c5"),c=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=c.exports}},[["a1a6","common/runtime","common/vendor"]]]);