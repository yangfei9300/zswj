(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages2/hallGuide/hallGuide"],{"04cd":function(t,n,i){"use strict";i.r(n);var e=i("bc01"),a=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=a.a},1018:function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c},a=[]},6273:function(t,n,i){"use strict";i.r(n);var e=i("1018"),a=i("04cd");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(s);i("e76a");var o=i("f0c5"),c=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);n["default"]=c.exports},9181:function(t,n,i){},bc01:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{imgType:1,banners:[],hallList:[],businessList:[],options:{}}},onLoad:function(t){this.options=t,this.getbanners(t.id),this.getExhHallList(t.id),this.getBusiness(t.id)},methods:{getBusiness:function(t){var n=this,i={exhId:t};this.$axios.axios("get",this.$paths.exhCompanyList,i).then((function(t){200==t.code&&(n.businessList=t.rows)})).catch((function(t){console.log("错误回调",t)}))},getExhHallList:function(t){var n=this,i={exhId:t};this.$axios.axios("get",this.$paths.exhHallList,i).then((function(t){200==t.code&&(n.hallList=t.data)})).catch((function(t){console.log("错误回调",t)}))},getbanners:function(t){var n=this,i={exhId:t};this.$axios.axios("get",this.$paths.exhCarouselList,i).then((function(t){200==t.code&&(n.banners=t.data)})).catch((function(t){console.log("错误回调",t)}))},imgClickType:function(t){this.imgType=t},topage:function(n,i){1==n?t.navigateTo({url:"/pages2/companyList/companyList?hallId="+i.id+"&id="+this.options.id}):2==n&&t.navigateTo({url:"/pages2/company/company?id="+i.id})}}};n.default=i}).call(this,i("543d")["default"])},c84b:function(t,n,i){"use strict";(function(t,n){var e=i("4ea4");i("dc35");e(i("66fd"));var a=e(i("6273"));t.__webpack_require_UNI_MP_PLUGIN__=i,n(a.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},e76a:function(t,n,i){"use strict";var e=i("9181"),a=i.n(e);a.a}},[["c84b","common/runtime","common/vendor"]]]);