<template>
	<view class="colonn">
		<view class="colonn topview">
			<view class="h-50"></view>
			<view class="roww center_center">
				<view style="color: white">掌上五金</view>
			</view>
			<view class="h-30"></view>
			<view class="roww w-750 rowsa">
				<image @click.stop="tosousuo" src="/static/sousuolan.png" class="w-500 sousuoimg h-65"></image>
				<view class="roww bottom">
					<image src="/static/liulanliang.png" class="w-65 h-65"></image>
					<view class="w-10"></view>
					<view style="color: white" class="fs-25">6520+</view>
				</view>
			</view>
			<view class="h-30"></view>
			<swiper class="bannerviwe">
				<swiper-item class="w-706 br-20 h-386" v-for="(item, index) in banners">
					<image mode="aspectFill" :src="item.image" class="w-706 br-20 h-386"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="colonn">
			<view class="h-29"></view>
			<view class="colonn w-750 center_center">
				<view class="roww w-750 rowsa" style="padding: 0rpx 21rpx">
					<swiper class="w-730 h-150" @change="swiperChange">
						<swiper-item class="w-730 h-150 roww" v-for="(item, index) in types">
							<view class="roww">
								<view class="colonn center_center" style="margin: 0rpx 25rpx" v-for="(item1, index1) in item" @click.stop="topage(1, index, index1)">
									<image :src="item1.logo" class="w-96 h-96"></image>
									<view class="h-15"></view>
									<view class="fs-24">{{ item1.name }}</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
					<!-- <view class="colonn center_center" 
					v-for="(item,index) in types"
					@click.stop="topage(1)"
					>
						<image :src="item.logo" class="w-96 h-96"></image>
						<view class="h-15"></view>
						<view class="fs-24">{{item.name}}</view>
					</view> -->
				</view>
				<view class="h-10"></view>
				<view class="roww swxnaview">
					<block v-for="(item, index) in types">
						<view class="sellans" v-if="index == swindex"></view>
						<view class="sellans yincang1" v-else></view>
					</block>
				</view>
			</view>
			<view class="h-29"></view>
			<view class="roww rowsb" style="padding: 0rpx 21rpx">
				<image src="https://zswjapi.zsyflive.com/profile/hangyezixun.png" @click.stop="topage(2)" class="w-332 h-396"></image>
				<view class="w-20"></view>
				<view class="colonn h-396 rowsb">
					<image src="https://zswjapi.zsyflive.com/profile/remenpinpai.png" @click.stop="topage(3)" class="w-350 h-189"></image>
					<image src="https://zswjapi.zsyflive.com/profile/xuanzezhanhui.png" @click.stop="topage(4)" class="w-350 h-189"></image>
				</view>
			</view>
			<view class="h-42"></view>
			<view class="roww center_center" style="padding: 0rpx 21rpx">
				<image src="/static/lanxian.png" class="w-10 h-34"></image>
				<view class="w-14"></view>
				<view class="h-34 fs-30" style="line-height: 34rpx">推荐展商</view>
				<view class="allline"></view>
				<view class="fs-30" @click.stop="topage(1, 0, 0)">更多</view>
				<view class="w-14"></view>
				<image class="w-17 h-29" src="/static/youjianto.png"></image>
			</view>
			<view class="h-15"></view>
			<!-- <view class="colonn gqview" v-for="(item,index) in shopList"
			@click.stop="topage(5)"
			>
				<view style="font-weight: bold;" class="fs-35">{{item.name}}</view>
				<view class="h-10"></view>
				<view>{{item.content}}</view>
				<view class="h-20"></view>
				<view class="huanhang">  
					<view class="sdgj" v-for="(item1,index1) in item.subCategory">{{item1}}</view>
				</view>
				<view class="h-20"></view>  
				<view class="roww">
					<image :src="item.userAvatar" mode="aspectFill" class="headerimg" ></image>
					<view class="w-20"></view>
					<view class="colonn fs-25 rowsb">
						<view>{{item.userName}}</view>
						<view class="roww w-550">
							<view class="wenzi1">今日活跃</view>
							<view class="allline"></view>
							<view class="wenzi1">{{item.userProvince}}{{item.userCity}}</view>
						</view>
					</view>
				</view>
			</view> -->
			<view class="roww gqview center_center" v-for="(item, index) in shopList" @click.stop="toshopinfo(item)">
				<view class="colonn">
					<view style="font-weight: bold" class="fs-35">{{ item.name }}</view>
					<view class="h-20"></view>
					<view class="huanhang w-400">
						<view class="sdgj" v-for="(item1, index1) in item.businessScope">{{ item1 }}</view>
					</view>
					<view class="roww center_center">
						<image src="/static/dianhua.png" class="w-28 h-28"></image>
						<view class="w-10"></view>
						<view class="fs-28">{{ item.tel }}</view>
						<view class="allline"></view>
					</view>
				</view>
				<view class="allline"></view>
				<image :src="item.logo" class="w-128 h-128"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			banners: [], //轮播图
			types: [], //分类
			swindex: 0,
			supplyDemandList: [], //供求列表
			shopList: []
		};
	},
	onLoad() {
		this.getbanners();
		this.categorylist();
		this.getGongqiu();
		this.getTjZhanshang();
	},
	methods: {
		toshopinfo(item) {
			uni.navigateTo({
				url: '/pages2/company/company?id=' + item.id
			});
		},
		getTjZhanshang() {
			var data1 = {};
			this.$axios
				.axios('get', this.$paths.companylisttop, data1)
				.then((res) => {
					if (res.code == 200) {
						var commpanyList = res.rows;
						for (var a = 0; a < commpanyList.length; a++) {
							commpanyList[a].businessScope = commpanyList[a].businessScope.split(',');
						}
						this.shopList = commpanyList;
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		tosousuo() {
			uni.navigateTo({
				url: '/pages3/servach/servach'
			});
		},
		// 获取最新的供求
		getGongqiu() {
			var data1 = {
				pageSize: 10,
				pageNum: 1
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
		},
		swiperChange(res) {
			this.swindex = res.detail.current;
		},
		// 获取首页分类
		categorylist() {
			var data1 = {};
			this.$axios
				.axios('get', this.$paths.categorylist, data1)
				.then((res) => {
					if (res.code == 200) {
						this.types = this.$tools.oneZhuanTwo(res.data, 5);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 获取首页轮播图
		getbanners() {
			var data1 = {};
			this.$axios
				.axios('get', this.$paths.indexCarousellist, data1)
				.then((res) => {
					if (res.code == 200) {
						this.banners = res.data;
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		topage(type, index, index1) {
			if (type == 1) {
				uni.navigateTo({
					url: '/pages2/zhaoshangjia/zhaoshangjia?index=' + index + '&index1=' + index1
				});
			} else if (type == 2) {
				uni.navigateTo({
					url: '/pages2/industryNews/industryNews'
				});
			} else if (type == 3) {
				uni.navigateTo({
					url: '/pages2/heatBrand/heatBrand'
				});
			} else if (type == 4) {
				uni.navigateTo({
					url: '/pages2/selExh/selExh'
				});
			} else if (type == 5) {
				uni.navigateTo({
					url: '/pages3/supplyDemandInfo/supplyDemandInfo'
				});
			}
		}
	}
};
</script>

<style>
@import url(index.css);
</style>
