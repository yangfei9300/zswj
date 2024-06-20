<template>
	<view>
		<view class="colonn">
			<picker :range="gqType" @change="gqTypeChange">
				<view class="colonn p-all-30 border_bottom">
					<view>类型</view>
					<view class="h-20"></view>
					<view class="roww center_center">
						<view v-if="form.supplyNeedType>=0">
							{{gqType[form.supplyNeedType-1]}}
						</view>
						<view v-else>
							请选择
						</view>
						<view class="w-20"></view>
						<image src="/static/youjianto.png" class="w-20 h-30"></image>
						<view class="allline"></view>
					</view>
				</view>
			</picker>
			
			<picker :range="types" range-key="name" @change="gqTypesChange">
				<view class="colonn p-all-30 border_bottom">
					<view>类型</view>
					<view class="h-20"></view>
					<view class="roww center_center">
						<view v-if="form.categoryId>=0">
							{{types[form.categoryId].name}}
						</view>
						<view v-else>
							请选择
						</view>
						<view class="w-20"></view>
						<image src="/static/youjianto.png" class="w-20 h-30"></image>
						<view class="allline"></view>
					</view>
				</view>
			</picker>
			
			<view class="colonn p-all-30 border_bottom">
				<view>标题</view>
				<view class="h-20"></view>
				<input v-model="form.name" placeholder="请输入标题" />
			</view>
			<view class="colonn p-all-30 border_bottom">
				<view>供求内容</view>
				<view class="h-20"></view>
				<textarea  v-model="form.content"  style="height: 200rpx;" placeholder="请输入标题" />
			</view>
			<view class="colonn p-all-30 border_bottom">
				<view>标签</view>
				<view   class="h-20"></view>
				<input  placeholder="使用逗号隔开" />
			</view>
			
			<view class="colonn p-all-30 border_bottom">
				<view>地址</view>
				<view class="h-20"></view>
				<view class="roww ">
					<biaofun-region @change1="regionChange">
					</biaofun-region>
					<view class="allline"></view>
				</view>
			</view>
			
		</view>
		<view class="h-50"></view>
		<view class="roww center_center">
			<view class="bentt" @click.stop="toSubmit">确认发布</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					  "supplyNeedType": 1,
					  "categoryId": -1,
					  "name": "",
					  "content": "",
					  "createUserId": "",
					  "image": "",
					  "subCategory": "",
					  "province": "",
					  "city": ""
				},
				gqType:['供应','需求'],
				types:[]
			}
		},
		onLoad() {
			this.getGoddTypeList();
		},
		methods: {
			toSubmit(){
				if(!this.isSubmit()){
					return false;
				}
				var data1=this.form;
				data1.categoryId=this.types[this.form.categoryId].id;
				data1.createUserId=uni.getStorageSync("userInfo").id;
				console.log("[===]",data1)
				this.$axios 
					.axios('post',
						this.$paths.supplyNeedAdd,
						data1)
					.then(res => {
						 if (res.code == 200){
							this.$tools.showToast("提交成功");
							setTimeout(res=>{
								uni.navigateBack({
									delta:1
								})
							},1000)
						 }else{
							 this.$tools.showToast(res.msg);
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			isSubmit(){
				if(this.form.categoryId<0){
					this.$tools.showToast("请选择分类");
					return false;
				}
				if(this.form.name==""){
					this.$tools.showToast("请输入标题");
					return false;
				}
				if(this.form.content==""){
					this.$tools.showToast("请输入内容");
					return false;
				}
				return true;
			},
			regionChange(res){
				console.log("asd",res);
				this.form.province=res[0].name;
				this.form.city=res[1].name;
			},
			// 获取商品分类
			getGoddTypeList(){
				var data1={}
				this.$axios
					.axios('get',
						this.$paths.categorylist,
						data1)
					.then(res => {
						 if (res.code == 200){
							this.types=res.data;
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			gqTypeChange(res){
				this.form.supplyNeedType=parseInt(res.detail.value)+1;
			},
			gqTypesChange(res){
				this.form.categoryId=parseInt(res.detail.value);
			},
			supplyNeedAdd(){
				
			},
			
		}
	}
</script>

<style>
@import url(addGq.css);
</style>
