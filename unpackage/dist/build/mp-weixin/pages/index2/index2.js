(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index2/index2"],{1506:function(t,e,i){"use strict";i.r(e);var n=i("a06c"),s=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=s.a},"43d3":function(t,e,i){"use strict";i.r(e);var n=i("b346"),s=i("1506");for(var o in s)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("b4cf");var a=i("f0c5"),c=Object(a["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=c.exports},"72e3":function(t,e,i){},"76ce":function(t,e,i){"use strict";(function(t,e){var n=i("4ea4");i("dc35");n(i("66fd"));var s=n(i("43d3"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(s.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},a06c:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{imgType:1,types:[],swindex:0,typeindex:0,typeindex1:0,commpanyList:[],supplyDemandList:[]}},onLoad:function(){this.categorylist()},methods:{tosousuo:function(){t.navigateTo({url:"/pages3/servach/servach"})},topage:function(e){1==this.imgType?t.navigateTo({url:"/pages2/company/company?id="+e.id}):(t.setStorageSync("xuqiuInfo",e),t.navigateTo({url:"/pages3/supplyDemandInfo/supplyDemandInfo?id="+e.id}))},toTypecLICK:function(t,e){1==this.imgType?this.getShopList(t,e):this.getGongqiu(t,e)},getGongqiu:function(t,e){var i=this;this.typeindex=t,this.typeindex1=e;var n={pageSize:1e5,pageNum:1,categoryId:this.types[t][e].id};this.$axios.axios("get",this.$paths.supplyNeedList,n).then((function(t){if(200==t.code){for(var e=t.rows,n=0;n<e.length;n++)e[n].subCategory&&(e[n].subCategory=e[n].subCategory.split(","));i.supplyDemandList=e}})).catch((function(t){console.log("错误回调",t)}))},getShopList:function(t,e){var i=this;this.typeindex=t,this.typeindex1=e;var n={categoryId:this.types[t][e].id};this.$axios.axios("get",this.$paths.companylist,n).then((function(t){if(200==t.code){for(var e=t.rows,n=0;n<e.length;n++)e[n].businessScope=e[n].businessScope.split(",");i.commpanyList=e}})).catch((function(t){console.log("错误回调",t)}))},swiperChange:function(t){this.swindex=t.detail.current},categorylist:function(){var t=this;this.$axios.axios("get",this.$paths.categorylist,{}).then((function(e){200==e.code&&(t.types=t.$tools.oneZhuanTwo(e.data,5),e.data.length>0&&(t.getShopList(0,0),t.getGongqiu(0,0)))})).catch((function(t){console.log("错误回调",t)}))},imgClickType:function(t){this.imgType=t,this.toTypecLICK(this.typeindex,this.typeindex1)}}};e.default=i}).call(this,i("543d")["default"])},b346:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=(this._self._c,1==this.imgType&&this.commpanyList.length<=0),i=2==this.imgType&&this.supplyDemandList.length<=0;this.$mp.data=Object.assign({},{$root:{g0:e,g1:i}})},s=[]},b4cf:function(t,e,i){"use strict";var n=i("72e3"),s=i.n(n);s.a}},[["76ce","common/runtime","common/vendor"]]]);