(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages3/myCollect/myCollect"],{"14fe":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},i=[]},"198b":function(t,e,n){"use strict";n.r(e);var o=n("47c4"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"264f":function(t,e,n){"use strict";n.r(e);var o=n("14fe"),i=n("198b");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("577b");var s=n("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=u.exports},"47c4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{typeStyle:1,listy:[]}},onLoad:function(){this.userMarkList()},methods:{userMarkList:function(){var e=this,n={userId:"",markType:this.typeStyle},o=t.getStorageSync("userInfo");o&&(n.userId=o.id),this.$axios.axios("get",this.$paths.userMarkList,n).then((function(t){if(200==t.code){if(1==e.typeStyle){for(var n=t.rows,o=0;o<n.length;o++)n[o].companyBusinessScope=n[o].companyBusinessScope.split(",");e.listy=n}else if(2==e.typeStyle){n=t.rows;e.listy=n}}else e.$tools.showToast(t.msg)})).catch((function(t){console.log("错误回调",t)}))},typeClick:function(t){this.typeStyle=t,this.userMarkList()},toPage:function(e){1==this.typeStyle?t.navigateTo({url:"/pages2/company/company?id="+e.targetId}):t.navigateTo({url:"/pages3/goodInfo/goodInfo?id="+e.targetId})}}};e.default=n}).call(this,n("543d")["default"])},5635:function(t,e,n){},"577b":function(t,e,n){"use strict";var o=n("5635"),i=n.n(o);i.a},"71a5":function(t,e,n){"use strict";(function(t,e){var o=n("4ea4");n("dc35");o(n("66fd"));var i=o(n("264f"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["71a5","common/runtime","common/vendor"]]]);