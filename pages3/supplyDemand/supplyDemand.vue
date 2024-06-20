<template>
	<view>
		<!-- <view class="colonn">
			<view class="roww rowsa center_center" style="color: white; background-color: #005ae0; padding: 20rpx 0rpx">
				<view class="w-20"></view>
				<scroll-view scroll-x class="w-670">
					<view class="roww">
						<view class="fs-30 m-right-20">秋季全国五金商品交易会</view>
						<view class="fs-30 m-right-20">中国(西安)国际五金机电博览会</view>
					</view>
				</scroll-view>
				<view class="w-15"></view>
				<image src="/static/gengduo.png" class="w-30 h-30"></image>
				<view class="w-20"></view>
			</view>
		</view> -->

		<view class="colonn gqview pore" v-for="(item, index) in supplyDemandList" @click.stop="toInfo(item)">
			<view style="font-weight: bold" class="fs-35">{{ item.name }}</view>
			<view class="h-10"></view>
			<view>{{ item.content }}</view>
			<view class="h-20"></view>
			<view class="huanhang">
				<view class="sdgj" v-for="(item1, index1) in item.subCategory">{{ item1 }}</view>
			</view>
			<view class="h-20"></view>
			<view class="roww">
				<image class="headerimg" mode="aspectFill" :src="item.userAvatar"></image>
				<view class="w-20"></view>
				<view class="colonn fs-25 rowsb">
					<view>{{ item.userName }}</view>
					<view class="roww w-550">
						<view class="wenzi1">今日活跃</view>
						<view class="allline"></view>
						<view class="wenzi1">{{ item.userProvince }}{{ item.userCity }}</view>
					</view>
				</view>
			</view>
			<view class="delview" @click.stop="toDelAlert(item)">删除</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			supplyDemandList: []
		};
	},
	onLoad() {
		this.getGq();
	},
	methods: {
		toDelAlert(item) {
			uni.showModal({
				title: '提示',
				content: '确定要删除吗?',
				success: (res) => {
					if (res.confirm) {
						this.todel(item);
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		todel(item) {
			var data1 = {
				'id':item.id,
				createUserId: uni.getStorageSync('userInfo').id
			};
			this.$axios
				.axios('post', this.$paths.supplyNeedDel, data1)
				.then((res) => {
					if (res.code == 200) {
						this.$tools.showToast("删除成功");
						setTimeout(res=>{
							this.getGq()
						},1000)
					}else{
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		toInfo(item) {
			uni.navigateTo({
				url: '/pages3/supplyDemandInfo/supplyDemandInfo?id=' + item.id
			});
		},
		getGq() {
			var data1 = {
				createUserId: uni.getStorageSync('userInfo').id
			};
			this.$axios
				.axios('get', this.$paths.supplyNeedList, data1)
				.then((res) => {
					if (res.code == 200) {
						var supplyDemandList = res.rows;
						for (var a = 0; a < supplyDemandList.length; a++) {
							if (supplyDemandList[a].subCategory) {
								supplyDemandList[a].subCategory = supplyDemandList[a].subCategory.split(',');
							}
						}
						this.supplyDemandList = supplyDemandList;
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
@import url(supplyDemand.css);
</style>
