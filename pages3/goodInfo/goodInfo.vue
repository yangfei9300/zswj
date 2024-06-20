<template>
	<view>
		<view class="colonn">
			<swiper class="w-710 h-420 m-all-20">
				<swiper-item  class="w-710 h-420">
					<image :src="goodInfo.logo"  
					mode="aspectFill" class="w-710 h-420 br-20"></image>
				</swiper-item>
			</swiper>
			<view class="colonn p-all-20">
				<view class="roww ">
					<view class="title txtShowLength">{{goodInfo.name}}</view>
					<view class="allline"></view>
					<image src="/static/nosel.png" v-if="!isCang"
					 @click.stop="shoucangClick()"
					 class="w-40 h-40"></image>
					 <image src="/static/selx.png"  v-if="isCang"
					  @click.stop="shoucangClick()"
					  class="w-40 h-40"></image>
					<!-- <view class="w-20"></view>
					<image src="/static/fenxiag.png" class="w-40 h-40"></image> -->
				</view>
				<view class="h-20"></view>
				
				<view class="huanhang w-550">
					<view class="sdgj" v-for="(item,index) in goodInfo.subCategory">{{item}}</view>
				</view>
				
				<view class="h-30"></view>
				<view class="colonn dozjovoew">
					<view class="gongsidizhi">商品介绍</view>
					<view class="h-24"></view>
					<image :src="item" v-for="(item,index) in goodInfo.image"></image>
				</view>
				<view class="h-30"></view>
				<view class="roww gqview center_center"
				@click="toCommpany(item)">
					<view class="colonn">
						<view style="font-weight: bold;" class="fs-35">{{goodInfo.companyName}}</view>
						<view class="h-20"></view>
						<view class="roww center_center">
							<image src="/static/dianhua.png" class="w-28 h-28"></image>
							<view class="w-10"></view>
							<view class="fs-28">{{goodInfo.companyTel}}</view>
							<view class="allline"></view>
						</view>
					</view>
					<view class="allline"></view>
					<image :src="goodInfo.companyLogo" mode="aspectFill" class="w-128 h-128"></image>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodInfo:{},
					isCang:false,
					options:{}
			}
		},
		onLoad(options) {
			this.options=options;
			this.getgoodInfo(options);
			this.toIsCang(options)
		},
		methods: {
			
			shoucangClick(){
				if(this.isCang){
					this.toQuxiaoShoucang(this.options.id);
				}else{
					this.toShoucang(this.options.id);
				}
			},
			// 取消收藏
			toQuxiaoShoucang(){
				var data1={
					'userId':"",
					'markType':'2',
					'targetId':this.options.id
				}
				var userInfo=uni.getStorageSync("userInfo");
				if(userInfo){
					data1.userId=userInfo.id;
				}else{
					this.$tools.showToast("请先登录");
					return
				}
				this.$axios
					.axios('post',
						this.$paths.userMarkdel,
						data1)
					.then(res => {                 
						 if (res.code == 200){
							this.$tools.showToast("取消成功");
							this.isCang=false;
						 }else{
							 this.$tools.showToast(res.msg);
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 收藏
			toShoucang(){
				var data1={
					'userId':"",
					'markType':'2',
					'targetId':this.options.id
				}
				var userInfo=uni.getStorageSync("userInfo");
				if(userInfo){
					data1.userId=userInfo.id;
				}else{
					this.$tools.showToast("请先登录");
					return
				}
				this.$axios
					.axios('post',
						this.$paths.userMarkAdd,
						data1)
					.then(res => {                 
						 if (res.code == 200){
							this.$tools.showToast("收藏成功");
							this.isCang=true;
						 }else{
							 this.$tools.showToast(res.msg);
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 获取是否收藏
			toIsCang(){
				// /api/user/userMark/check
				
				var data1={
					'userId':"",
					'markType':'2',
					'targetId':this.options.id
				}
				
				var userInfo=uni.getStorageSync("userInfo");
				if(userInfo){
					data1.userId=userInfo.id;
				}
				this.$axios
					.axios('post',
						this.$paths.userMarkCheck,
						data1)
					.then(res => {                 
						 if (res.code == 200){
							this.isCang=true;
						 }else{
							 // this.$tools.showToast(res.msg);
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			
			
			getgoodInfo(options){
				var data1={
					id:options.id
				}
				this.$axios
					.axios('get',
						this.$paths.companyProductInfo+options.id,
						data1)
					.then(res => {                 
						 if (res.code == 200){
							var goodInfo=res.data;
							if(goodInfo.image){
								goodInfo.image=goodInfo.image.split(",");
							}
							if(goodInfo.subCategory){
								goodInfo.subCategory=goodInfo.subCategory.split(",");
							}
							
							this.goodInfo=goodInfo;
						 }else{
							 this.$tools.showToast(res.msg);
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			}
		}
	}
</script>

<style>
.title{
	font-weight: bold;
	width: 550rpx;
}
.sdgj{
	font-size: 25rpx;
	background-color:#F0F0F0;
	font-size: 25rpx;
	line-height: 40rpx;
	padding:0rpx 10rpx;
	border-radius: 10rpx;
	margin-right: 15rpx;
	margin-bottom: 15rpx;
}

.dozjovoew{
		box-shadow: #c9c9c9 0px 0px 10rpx 5rpx;
		/* margin:25rpx; */
		border-radius: 15rpx;
		padding:30rpx 30rpx;
		margin-top: 25rpx;
}
.gongsidizhi{
	font-size: 40rpx;
	font-weight: bold;
}




.gqview{
	box-shadow: #c9c9c9 0px 0px 10rpx 5rpx;
	background-color: white;
	padding:30rpx 25rpx;
	margin:20rpx 0rpx;
	border-radius: 15rpx;
}
.sdgj{
	font-size: 25rpx;
	background-color:#F0F0F0;
	font-size: 25rpx;
	line-height: 40rpx;
	padding:0rpx 10rpx;
	border-radius: 10rpx;
	margin-right: 15rpx;
	margin-bottom: 15rpx;
}
.headerimg{
	width: 70rpx;
	height: 70rpx;
	border-radius: 50%;
	background-color: #005AE0;
}
.wenzi1{
	color: #AAAAAA;
}
.sdgj{
	font-size: 25rpx;
	background-color:#F0F0F0;
	font-size: 25rpx;
	line-height: 40rpx;
	padding:0rpx 10rpx;
	border-radius: 10rpx;
	margin-right: 15rpx;
	margin-bottom: 15rpx;
}

</style>
