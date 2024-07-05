<template>
	<view>
		<view class="colonn" v-if="isShi">
			<view class="roww rowsa center_center" style="color: white; background-color: #005ae0; padding: 20rpx 0rpx">
				<view class="w-20"></view>
				<scroll-view scroll-x class="w-670">
					<view class="roww">
						<view
							class="fs-30 m-right-20"
							@click.stop="selIndexClick(index)"
							v-for="(item, index) in exhList"
							:class="{
								selexhNo: selIndex != index
							}"
						>
							{{ item.name }}
						</view>
					</view>
				</scroll-view>
				<view class="w-15"></view>
				<image src="/static/gengduo.png" class="w-30 h-30"></image>
				<view class="w-20"></view>
			</view>
		</view>

		<view class="huanhang rowsb p-all-30" v-if="isShi">
			<view class="colonn videoview" v-for="(item, index) in videoList">
				<channel-video object-fit="cover" class="videoimg videoimgview" :feed-id="item.feedId" :finder-user-name="item.finderUserName"></channel-video>
				<view class="w-335 txtShowLength" style="padding: 5rpx 22rpx; text-align: left; font-weight: bold">{{ item.name }}</view>
				<view class="h-13"></view>
				<!-- <view class="roww center_center">
					<view class="w-10"></view>
					<image src="/static/typename.png" class="w-30 h-30"></image>
					<view class="w-10"></view>
					<view class="fs-25">秋交会</view>
					<view class="allline"></view>
					<view class="roww center_center">
						<image src="/static/heart.png" class="w-29 h-24"></image>
						<view class="w-10"></view>
						<view class="fs-25 lh-24">5</view>
					</view>
					<view class="w-10"></view>
				</view>
				<view class="h-15"></view> -->
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			exhList: [],
			videoList: [],
			selIndex: 0,
			isShi: false
		};
	},
	onLoad() {
		this.getExhList();
		this.basicexamine();
	},
	methods: {
		basicexamine() {
			var data1 = {
				exhId: this.exhList[this.selIndex].id
			};
			this.$axios
				.axios('get', this.$paths.exhCarouselList, data1)
				.then((res) => {
					if (res.code == 200) {
						this.isShi = true;
						uni.setNavigationBarTitle({
							title:"展会视频"
						})
					} else {
						this.isShi = false;
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},

		selIndexClick(index) {
			this.selIndex = index;
			this.toTuijian();
		},
		// 获取视频推荐
		toTuijian() {
			var data1 = {
				exhId: this.exhList[this.selIndex].id
			};
			this.$axios
				.axios('get', this.$paths.exhVideoList, data1)
				.then((res) => {
					if (res.code == 200) {
						console.log('asd', res);
						this.videoList = res.rows;
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 获取展会列表
		getExhList() {
			var data1 = {};
			this.$axios
				.axios('get', this.$paths.exhInfoList, data1)
				.then((res) => {
					if (res.code == 200) {
						var exhList = res.data;
						for (var a = 0; a < exhList.length; a++) {
							this.selIndex = 0;
						}
						this.exhList = exhList;
						this.toTuijian();
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		toinfo(item) {
			uni.navigateTo({
				url: '/pages3/videoInfo/videoInfo'
			});
		}
	}
};
</script>

<style>
@import url(videoList.css);
</style>
