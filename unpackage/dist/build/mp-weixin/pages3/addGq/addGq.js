(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages3/addGq/addGq"],{"0cac":function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var n={biaofunRegion:function(){return Promise.all([o.e("common/vendor"),o.e("components/biaofun-region/biaofun-region")]).then(o.bind(null,"fc3e"))}},i=function(){var t=this.$createElement;this._self._c},a=[]},"10ee":function(t,e,o){"use strict";o.r(e);var n=o("0cac"),i=o("f4c1");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("3478");var s=o("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=c.exports},"1f00":function(t,e,o){},3478:function(t,e,o){"use strict";var n=o("1f00"),i=o.n(n);i.a},"86bd":function(t,e,o){"use strict";(function(t,e){var n=o("4ea4");o("dc35");n(o("66fd"));var i=n(o("10ee"));t.__webpack_require_UNI_MP_PLUGIN__=o,e(i.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])},c7e9:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{form:{supplyNeedType:1,categoryId:-1,name:"",content:"",createUserId:"",image:"",subCategory:"",province:"",city:""},gqType:["供应","需求"],types:[]}},onLoad:function(){this.getGoddTypeList()},methods:{toSubmit:function(){var e=this;if(!this.isSubmit())return!1;var o=this.form;o.categoryId=this.types[this.form.categoryId].id,o.createUserId=t.getStorageSync("userInfo").id,console.log("[===]",o),this.$axios.axios("post",this.$paths.supplyNeedAdd,o).then((function(o){200==o.code?(e.$tools.showToast("提交成功"),setTimeout((function(e){t.navigateBack({delta:1})}),1e3)):e.$tools.showToast(o.msg)})).catch((function(t){console.log("错误回调",t)}))},isSubmit:function(){return this.form.categoryId<0?(this.$tools.showToast("请选择分类"),!1):""==this.form.name?(this.$tools.showToast("请输入标题"),!1):""!=this.form.content||(this.$tools.showToast("请输入内容"),!1)},regionChange:function(t){console.log("asd",t),this.form.province=t[0].name,this.form.city=t[1].name},getGoddTypeList:function(){var t=this;this.$axios.axios("get",this.$paths.categorylist,{}).then((function(e){200==e.code&&(t.types=e.data)})).catch((function(t){console.log("错误回调",t)}))},gqTypeChange:function(t){this.form.supplyNeedType=parseInt(t.detail.value)+1},gqTypesChange:function(t){this.form.categoryId=parseInt(t.detail.value)},supplyNeedAdd:function(){}}};e.default=o}).call(this,o("543d")["default"])},f4c1:function(t,e,o){"use strict";o.r(e);var n=o("c7e9"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a}},[["86bd","common/runtime","common/vendor"]]]);