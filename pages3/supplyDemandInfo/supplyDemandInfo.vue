<template>
	<view>
		<view class="colonn">
			<view class="stope"></view>
			<view class="yuanhus colonn">
				<view class="roww center_center">
					<view class="shangdsstitle w-500">{{xuqiuInfo.name}}</view>
					<view class="allline"></view>
					<!-- <image src="/static/shoua.png" class="w-35 h-35"></image>
					<view class="w-20"></view>
					<image src="/static/fenxiag.png" class="w-35 h-35"></image> -->
				</view>
				<view class="h-20"></view>
				<view class="roww">
					<view class="huanhang w-500">
						<view class="roww center_center m-bottom-15 m-right-20"
						v-for="(item1,index1) in xuqiuInfo.subCategory"
						>
							<image src="../../static/banshou.png" class="w-30 h-30"></image>
							<view class="w-10"></view>
							<view class="fs-27">{{item1}}</view>
						</view>
					</view>
					<view class="allline"></view>
					<view class="fs-20">{{xuqiuInfo.createTime}}</view>
				</view>
				<view class="h-30"></view>
				<view class="roww userinfoview">
					<image :src="xuqiuInfo.userAvatar" mode="aspectFill" class="heafidd"></image>
					<view class="w-20"></view>
					<view class="colonn rowsb">
						<view>{{xuqiuInfo.userName}}</view>
						<view class="roww center_center w-460">
							<image src="../../static/dianhua.png" class="w-30 h-30"></image>
							<view class="w-15"></view>
							<view class="fs-30">{{xuqiuInfo.userPhone}}</view>
							<view class="allline"></view>
							<view class="fs-20">{{xuqiuInfo.userProvince}}-{{xuqiuInfo.userCity}}</view>
						</view>
					</view>
				</view>
				
				<view class="h-40"></view>
				<view class="colonn">
					<view style="font-weight: bold;font-size: 36rpx;">详情描述</view>
					<view class="h-20"></view>
					<view>
						<rich-text
						:nodes="xuqiuInfo.content"
						></rich-text>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options:{},
				xuqiuInfo:{}
			}
		},
		onLoad(options) {
			var xuqiuInfo=uni.getStorageSync("xuqiuInfo");
			xuqiuInfo.content=this.$tools.formatRichText(xuqiuInfo.content)
			this.xuqiuInfo=xuqiuInfo;
			// this.options=options;
			// this.getInfio();
		},
		methods: {
			// getInfio(){
			// 	var data1 = {
					
			// 	};
			// 	this.$axios
			// 		.axios('get', this.$paths.supplyNeedList, data1)
			// 		.then((res) => {
			// 			if (res.code == 200) {
			// 				var supplyDemandList = res.rows;
			// 				for (var a = 0; a < supplyDemandList.length; a++) {
			// 					if (supplyDemandList[a].subCategory) {
			// 						supplyDemandList[a].subCategory = supplyDemandList[a].subCategory.split(',');
			// 					}
			// 				}
			// 				this.supplyDemandList = supplyDemandList;
			// 			}
			// 		})
			// 		.catch((err) => {
			// 			console.log('错误回调', err);
			// 		});
			// }
		}
	}
</script>

<style>
@import url(supplyDemandInfo.css);
</style>
