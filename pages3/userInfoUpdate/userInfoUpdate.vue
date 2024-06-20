<template>
	<view>
		<view class="colonn">
			<view class="roww center_center p-all-20 border_bottom">
				<view>头像</view>
				<view class="w-50"></view>
				<image 
				@click.stop="selImg"
				mode="aspectFill" 
				v-if="userInfo.avatar" 
				:src="userInfo.avatar" 
				class="w-100 h-100" style="border-radius: 50%"></image>
				<view v-else @click.stop="selImg">点击上传头像</view>
				<view class="allline"></view>
			</view>
			<view class="roww center_center border_bottom" style="padding: 30rpx 20rpx">
				<view>姓名</view>
				<view class="w-50"></view>
				<input placeholder="请输入姓名" v-model="userInfo.realName" class="fs-30" placeholder-class="fs-30" />
				<view class="allline"></view>
			</view>
			<view class="roww center_center border_bottom" style="padding: 30rpx 20rpx">
				<view>昵称</view>
				<view class="w-50"></view>
				<input placeholder="请输入昵称" v-model="userInfo.name" class="fs-30" placeholder-class="fs-30" />
				<view class="allline"></view>
			</view>
			<view class="h-30"></view>
			<view class="roww center_center" @click.stop="updateUserInfo">
				<view class="tijiao">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo: {}
		};
	},
	onLoad() {
		this.userInfo = uni.getStorageSync('userInfo');
	},
	methods: {
		// 修改个人信息
		updateUserInfo() {
			var data = this.userInfo;
			if (data.avatar == ''||!data.avatar) {
				this.$tools.showToast('请上传头像');
				return false;
			}
			if (data.realName == ''||!data.realName) {
				this.$tools.showToast('请填写真是姓名');
				return false;
			}
			this.$axios
				.axios('post', this.$paths.userupdate, data)
				.then((res) => {
					if (res.code == 200) {
						this.$tools.showToast("修改成功");
					}else{
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		selImg() {
			uni.chooseImage({
				count: 1,
				mediaType: ['image'],
				sourceType: ['album', 'camera'],
				maxDuration: 30,
				camera: 'back',
				success: (res) => {
					if (res.tempFiles.length > 0) {
						this.uploadimg(res.tempFiles[0].path);
					}
				}
			});
		},
		uploadimg(imgurl) {
			console.log(imgurl);
			this.$axios
				.axiosUpload(this.$paths.uploaduploadOSS, {}, imgurl)
				.then((res) => {
					if (res.code == 200) {
						console.log(res);
						this.userInfo.avatar = res.url;
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		}
	}
};
</script>

<style>
	@import url(userInfoUpdate.css);
</style>
