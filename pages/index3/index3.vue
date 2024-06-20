<template>
	<view>
		<view class="colonn topview">
			<view class="roww topview center_center" 
			v-if="userInfo.realName"
			>
				<view class="w-50"></view>
				<image mode="aspectFill" :src="userInfo.avatar"  class="headerim"></image>
				<view class="w-30"></view>
				<view>{{userInfo.realName}}</view>
				<view class="allline"></view>
				<view class="chakanzili" @click.stop="toUpdate">修改个人主页</view>
			</view>
			<view class="roww topview center_center"
			v-else
			>
				<view class="pore w-300 h-80 roww center_center">  
					<view>授权登录</view>
					<button 
						open-type="getPhoneNumber"
						class="poab yincang1"
						style="width: 100%;height: 100%;top: 0rpx;left: 0rpx;"
						@getphonenumber="toGetPhone"
					></button>
				</view>
			</view>
		</view>
		<view class="menuview roww rowsa center_center">
			
			<view class="colonn center_center"
			@click.stop="toPage(1)"
			>
				<image class="w-57 h-57" src="/static/shoucang.png"></image>
				<view class="h-20"></view>
				<view class="fs-25">收藏</view>
			</view>
			
			<view class="colonn center_center"
			@click.stop="toPage(2)"
			>
				<image class="w-57 h-57" src="/static/yifabu.png"></image>
				<view class="h-20"></view>
				<view class="fs-25">已发布</view>
			</view>
			
			<!-- <view class="colonn center_center">
				<image class="w-57 h-57" src="/static/yicengjiao.png"></image>
				<view class="h-20"></view>
				<view class="fs-25">成交</view>
			</view> -->
		</view>
		
		<view class="colonn background1">
			<view class="roww border_bottom center_center" 
			style="padding:30rpx 30rpx;"
			@click.stop="toPage(3)"
			>
				<view>发布供求</view>
				<view class="allline"></view>
				<image src="/static/youjianto.png" class="w-20 h-30"></image>
			</view>
			<!-- <view class="roww border_bottom center_center" style="padding:30rpx 30rpx;">
				<view>账号设置</view>
				<view class="allline"></view>
				<image src="/static/youjianto.png" class="w-20 h-30"></image>
			</view> -->
			<view class="roww border_bottom center_center pore" style="padding:30rpx 30rpx;">
				<view>联系我们</view>
				<view class="allline"></view>
				<image src="/static/youjianto.png" class="w-20 h-30"></image>
				<button open-type="contact" style="width: 100%;height: 100%;" class="poab yincang1"></button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{},
			}
		},
		onShow() {
			this.useruser();
		},
		methods: {
			toUpdate(){
				uni.navigateTo({
					url:"/pages3/userInfoUpdate/userInfoUpdate"
				})
			},
			// 获取个人信息  useruser
			useruser(){
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					return false;
				}
				this.$axios
					.axios('get',
						this.$paths.useruser+userInfo.id,
						{})
					.then(res => {
						 if (res.code == 200){
							console.log("阿斯顿",res)
							uni.setStorageSync("userInfo",res.data)
							this.userInfo=res.data;
						 }else{
							 this.$tools.showToast(res.msg);
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			toGetPhone(res){
				console.log("res",res)
				uni.login({
					success:res1=>{
						var obg={
							code:res1.code,
							encryptedData:res.detail.encryptedData,
							iv:res.detail.iv,						}
						this.getPhoneUrl(obg)
					}
				})
			},
			getPhoneUrl(obg){
				var data1={'params':obg}
				console.log("asd",JSON.stringify(data1))
				this.$axios
					.axios('post',
						this.$paths.userlogin,
						data1)
					.then(res => {
						 if (res.code == 200){
							console.log("阿斯顿",res)
							uni.setStorageSync("userInfo",res.data)
							this.userInfo=res.data;
							if(!res.data.realName){
								uni.navigateTo({
									url:"/pages3/userInfoUpdate/userInfoUpdate"
								})
							}
						 }else{
							 this.$tools.showToast(res.msg);
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			toPage(type){
				if(type==1){
					uni.navigateTo({
						url:"/pages3/myCollect/myCollect"
					})
				}else if(type==2){
					uni.navigateTo({
						url:"/pages3/supplyDemand/supplyDemand"
					})
				}else if(type==3){
					uni.navigateTo({
						url:"/pages3/addGq/addGq"
					})
				}
			},
		}
	}
</script>

<style>
@import url(index3.css);
</style>
