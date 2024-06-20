<template>
	<view>
		<view class="colonn">
			<view class="roww rowsa center_center w-750" 
			style="color: white;background-color: #005AE0;padding:20rpx 0rpx;position: fixed;top: 0rpx;left: 0rpx;">
				<view class="w-20"></view>
				<scroll-view scroll-x class="w-670">
					<view class="roww center_center">
						<view class="fs-30 " @click.stop="typeClick(1)" :class="{
							'':typeStyle==1,
							'typetx':typeStyle==2,
						}">我收藏的商家</view>
						<view class="w-60"></view>
						<view class="fs-30 " @click.stop="typeClick(2)" :class="{
						 	'':typeStyle==2,
						 	'typetx':typeStyle==1,
						 }">我收藏的商品</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="h-80"></view>

		<view class="roww gqview center_center" v-for="(item,index) in listy" 
		@click="toPage(item)" v-if="typeStyle==1">
			<view class="colonn">  
				<view style="font-weight: bold;" class="fs-35">{{item.companyName}}</view>
				<view class="h-20"></view>
				<view class="huanhang w-400">
					<view class="sdgj" v-for="(item1,index1) in item.companyBusinessScope">{{item1}}</view>
				</view>
				<view class="roww center_center">
					<image src="/static/dianhua.png" class="w-28 h-28"></image>
					<view class="w-10"></view>
					<view class="fs-28">{{item.companyTel}}</view>
					<view class="allline"></view>
				</view>
			</view>
			<view class="allline"></view>
			<image :src="item.companyLogo" mode="aspectFill" class="w-128 h-128"></image>
		</view>

		<view class="huanhang rowsb" style="margin:20rpx 22rpx;" 
		v-if="typeStyle==2">
			
			<view class="colonn videoview" v-for="(item,index) in listy"
			@click="toPage(item)"
			>
				<image :src="item.productLogo" mode="aspectFill" class="videoimg videoimgview"></image>
				<view class="w-335 txtShowLength1 fs-30"
					style="padding: 5rpx 22rpx;text-align: left;font-weight: bold;">{{item.productName}}</view>
				<view class="h-13"></view>
				<view class="roww center_center">
					<view class="w-10"></view>
					<image src="/static/typename.png" class="w-30 h-30"></image>
					<view class="w-10"></view>
					<view class="fs-25 w-290 txtShowLength1">{{item.companyName}}</view>
					<view class="allline"></view>
				</view>
				<view class="h-15"></view>
			</view>
			
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeStyle: 1,
				listy:[]
			}
		},
		onLoad() {
			this.userMarkList()
		},
		methods: {
			userMarkList(){
				var data1={
					'userId':"",
					'markType':this.typeStyle,
				}
				var userInfo=uni.getStorageSync("userInfo");
				if(userInfo){
					data1.userId=userInfo.id;
				}
				this.$axios
					.axios('get',
						this.$paths.userMarkList,
						data1)
					.then(res => {                 
						 if (res.code == 200){
							 if(this.typeStyle==1){
								var listy=res.rows;
								for(var a=0;a<listy.length;a++){
									listy[a].companyBusinessScope=listy[a].companyBusinessScope.split(",");
								}
								this.listy=listy;
							 }else if(this.typeStyle==2){
								var listy=res.rows;
								this.listy=listy;
							 }
						 }else{
							 this.$tools.showToast(res.msg);
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			typeClick(type) {
				this.typeStyle = type;
				this.userMarkList();
			},
			toPage(item) {
				if (this.typeStyle == 1) {
					uni.navigateTo({
						url:"/pages2/company/company?id="+item.targetId
					})
				}else{
					uni.navigateTo({
						url:"/pages3/goodInfo/goodInfo?id="+item.targetId
					})
				}
			},
		}
	}
</script>
<style>
	@import url(myCollect.css);
</style>