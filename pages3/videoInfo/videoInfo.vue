<template>
	<view>
		<view class="colonn">
			<video class="w-750 " style="height:800rpx;"></video>
			<view class="colonn" style="padding:30rpx 40rpx;box-shadow: #c9c9c9 0px 0px 10rpx 5rpx;">
				<view>2024秋季全国五金交易会  展商推荐</view>
				<view class="h-20"></view>
				<view class="roww center_center "
				>
					<image src="/static/wode1.png" class="w-45 h-45"></image>
					<view class="w-15"></view>
					<view class="fs-30">秋交会</view>
					<view class="allline"></view>
					<image src="/static/wode1.png" class="w-40 h-40"></image>
					<view class="w-15"></view>
					<view>5</view>
				</view>
			</view>
		</view>
		
		<view class="colonn"  style="padding:30rpx 30rpx;">
			<view class="roww">
				<view>最新视频推荐</view>
				<view class="allline"></view>
				<image src="../../static/youjianto.png" class="w-20 h-30"></image>
			</view>
			<view class="h-25"></view>
			<view class="huanhang rowsb">
				<view class="colonn videoview"
				v-for="(item,index) in 3"
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
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url(videoInfo.css);
</style>
