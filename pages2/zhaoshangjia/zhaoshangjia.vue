<template>
	<view class="colonn">
		<view class="colonn topview">
			<view class="h-50"></view>
			<view class="roww center_center rowsb" style="padding: 0rpx 20rpx">
				<image src="/static/zuojiantou.png" @click.stop="toBack"  class="w-40 h-40"></image>
				<view style="color: white">找商家</view>
				<image src="/static/zuojiantou.png" class="w-40 yincang1 h-40"></image>
			</view>
			<view class="h-30"></view>
			<view class="roww w-750 rowsa center_center">
				<image  @click.stop="tosousuo" src="/static/sousuolan.png" class="w-650 sousuoimg h-75"></image>
				<!-- <view class="roww">
					<view style="color: white" class="fs-35">山东省 ▼</view>
				</view> -->
			</view>
			<view class="h-30"></view>
			<swiper class="bannerviwe">
				<swiper-item class="w-706 br-20 h-386" v-for="(item, index) in banners">
					<image mode="aspectFill" :src="item.image" class="w-706 br-20 h-386"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="h-35"></view>
		<view class="colonn w-750 center_center">
			<view class="roww w-750 rowsa" style="padding: 0rpx 21rpx">
				<swiper class="w-730 h-150" @change="swiperChange" :current="swindex">
					<swiper-item class="w-730 h-150 roww" v-for="(item, index) in types">
						<view class="roww">
							<view class="colonn center_center" style="margin: 0rpx 25rpx" 
							v-for="(item1, index1) in item" @click.stop="getShopList(index,index1)">
								<image :src="item1.logo" class="w-96 h-96"></image>
								<view class="h-15"></view>
								<view class="fs-24" style="font-weight: bold;color: #005AE0;"
								 v-if="index1==typeindex1&&index==typeindex">{{ item1.name }}</view>
								<view class="fs-24" v-else>{{ item1.name }}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
				<!-- <view class="colonn center_center" v-for="(item,index) in 5">
					<image src="/static/typename.png" class="w-96 h-96"></image>
					<view class="h-15"></view>
					<view class="fs-24">手动工具</view>
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

		<view class="roww gqview center_center" v-for="(item, index) in commpanyList" 
		@click="toCommpany(item)">
			<view class="colonn">
				<view style="font-weight: bold" class="fs-35">{{item.name}}</view>
				<view class="h-20"></view>
				<view class="huanhang w-400">
					<view class="sdgj" v-for="(item1, index1) in item.businessScope">{{item1}}</view>
				</view>
				<view class="roww center_center">
					<image src="/static/dianhua.png" class="w-28 h-28"></image>
					<view class="w-10"></view>
					<view class="fs-28">{{item.tel}}</view>
					<view class="allline"></view>
				</view>
			</view>
			<view class="allline"></view>
			<image :src="item.logo" mode="aspectFill" class="w-128 h-128"></image>
		</view>
		<view v-if="commpanyList.length<=0" class="roww center_center m-top-55">
			<view>暂无企业信息</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			banners: [], //轮播图
			types: [],
			swindex: 0,
			typeindex:0,
			typeindex1:0,
			commpanyList: []
		};
	},
	onLoad(options) {
		this.typeindex=parseInt(options.index);
		this.typeindex1=parseInt(options.index1);
		this.swindex=parseInt(options.index)
		this.getbanners();
		this.categorylist();
	},
	methods: {
		tosousuo(){
			uni.navigateTo({
				url:"/pages3/servach/servach"
			})
		},
		// 获取商家列表
		getShopList(index,index1) {
			this.typeindex=index;
			this.typeindex1=index1;
			
			var data1 = {
				categoryId: this.types[index][index1].id
			};
			this.$axios
				.axios('get', this.$paths.companylist, data1)
				.then((res) => {
					if (res.code == 200) {
						var commpanyList = res.rows;
						for(var a=0;a<commpanyList.length;a++){
							commpanyList[a].businessScope=commpanyList[a].businessScope.split(",");
						}
						this.commpanyList=commpanyList;
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
						if(res.data.length>0){
							this.getShopList(this.typeindex,this.typeindex1);
						}
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		toBack() {
			uni.navigateBack({
				delta: 1
			});
		},
		toCommpany(item) {
			uni.navigateTo({
				url: '/pages2/company/company?id='+item.id
			});
		}
	}
};
</script>

<style>
@import url(zhaoshangjia.css);
</style>
