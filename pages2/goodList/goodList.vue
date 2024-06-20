<template>
	<view>
		<view class="p-all-20">
			<view class="huanhang rowsb">
				<view class="colonn videoview" v-for="(item,index) in goodList"
				@click.stop="toGoodInfo(item)"
				>
					<image :src="item.logo" mode="aspectFill" class="videoimg videoimgview"></image>
					<view class="w-335 txtShowLength1 fs-30"
						style="padding: 5rpx 22rpx;text-align: left;font-weight: bold;">{{item.name}}</view>
					<view class="h-13"></view>
					<!-- <view class="roww center_center">
						<view class="w-10"></view>
						<image src="/static/typename.png" class="w-30 h-30"></image>
						<view class="w-10"></view>
						<view class="fs-25 w-290 txtShowLength1">{{item.}}</view>
						<view class="allline"></view>
					</view>
					<view class="h-15"></view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodList:[]
			}
		},
		onLoad(){
			this.toGoodList()
		},
		methods: {
			toGoodInfo(item){
				uni.navigateTo({
					url:"/pages3/goodInfo/goodInfo?id="+item.id
				})
			},
			toGoodList(){
				// /api/company/companyProduct/list
				var data1={}
				this.$axios
					.axios('get',
						this.$paths.companyProductList,
						data1)
					.then(res => {                 
						 if (res.code == 200){
							this.goodList=res.rows;
						 }else{
							 this.$tools.showToast(res.msg);
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			tonfo(){
				uni.navigateTo({
					url:"/pages3/goodInfo/goodInfo"
				})
			}
		}
	}
</script>

<style>
	@import url(goodList.css);
</style>