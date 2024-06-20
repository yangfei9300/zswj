<template>
	<view>
		<view class="colonn">
			<view class="roww rowsa center_center" 
			style="color: white;background-color: #005AE0;padding:20rpx 0rpx;">
				<view class="w-20"></view>
				<scroll-view scroll-x class="w-670">
					<view class="roww">
						<view class="fs-30 m-right-20">秋季全国五金商品交易会</view>
						<view class="fs-30 m-right-20" >中国(西安)国际五金机电博览会</view>
					</view>
				</scroll-view>
				<view class="w-15"></view>
				<image src="/static/gengduo.png" class="w-30 h-30"></image>
				<view class="w-20"></view>
			</view>
		</view>
		
		
		<view class="huanhang rowsb p-all-30">
			<view class="colonn videoview"  
			v-for="(item,index) in 3"
			@click.stop="toinfo(item)"
			>
				<image src="../../static/lunbotu.png" 
				mode="aspectFill" class="videoimg videoimgview"></image>
				<view class="w-335 txtShowLength"
				style="padding: 5rpx 22rpx;text-align: left;font-weight: bold;"
				>2024秋季全国五金交展商推荐</view>
				<view class="h-13"></view>
				<view class="roww center_center">
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
				<view class="h-15"></view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toinfo(item){
				uni.navigateTo({
					url:"/pages3/videoInfo/videoInfo"
				})
			}
		}
	}
</script>

<style>
	@import url(videoList.css);
</style>