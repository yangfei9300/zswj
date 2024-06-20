<template>
	<view>
		<view class="topbgview">
			<swiper class="bannerviwe">
				<swiper-item v-for="(item, index) in banners">
					<image :src="item.image" class="w-706 br-20 h-386"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="roww w-750 center_center" style="position: relative; top: 160rpx">
			<view
				class="zyview1"
				:class="{
					zyview1: imgType == 1,
					zyview2: imgType == 2
				}"
				@click.stop="imgClickType(1)"
			>
				找展馆
			</view>
			<view class="w-30"></view>
			<view
				@click.stop="imgClickType(2)"
				:class="{
					zyview1: imgType == 2,
					zyview2: imgType == 1
				}"
			>
				找展商
			</view>
		</view>
		<view class="h-50"></view>
		<view class="colonn m-bottom-40" v-for="(item, index) in hallList" style="position: relative; top: 160rpx" v-if="imgType == 1">
			<view class="guanviwe roww center_center">
				<view class="w-52"></view>
				<image :src="item.image" class="h-50 w-145"></image>
				<view class="w-50"></view>
				<view class="guanname">{{ item.name }}</view>
				<view class="allline"></view>
				<view class="chaksas" @click.stop="topage(1,item)">查看</view>
				<view class="w-52"></view>
			</view>
		</view>
		<view class="colonn m-bottom-40" v-for="(item, index) in businessList" style="position: relative; top: 160rpx"
		 v-if="imgType == 2">
			<view class="guanviwe roww center_center">
				<view class="w-52"></view>
				<image :src="item.companyLogo" mode="aspectFill" class="h-86 w-86"></image>
				<view class="w-50"></view>
				<view class="guanname w-350 txtShowLength1">{{item.companyName}}</view>
				<view class="allline"></view>
				<view class="chaksas" @click.stop="topage(2,item)">查看</view>
				<view class="w-52"></view>
			</view>
		</view>
		<view class="h-150"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imgType: 1,
			banners: [],
			hallList: [],
			businessList:[],//展商列表
			options:{}
		};
	},
	onLoad(options) {
		this.options=options;
		this.getbanners(options.id);
		this.getExhHallList(options.id);
		this.getBusiness(options.id);
	},
	methods: {
		// 获取展商列表
		getBusiness(id) {
			var data1 = {
				exhId: id
			};
			this.$axios
				.axios('get', this.$paths.exhCompanyList, data1)
				.then((res) => {
					if (res.code == 200) {
						this.businessList = res.rows;
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},

		// 获取展馆列表
		getExhHallList(id) {
			var data1 = {
				exhId: id
			};
			this.$axios
				.axios('get', this.$paths.exhHallList, data1)
				.then((res) => {
					if (res.code == 200) {
						this.hallList = res.data;
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 获取首页轮播图
		getbanners(id) {
			var data1 = {
				exhId: id
			};
			this.$axios
				.axios('get', this.$paths.exhCarouselList, data1)
				.then((res) => {
					if (res.code == 200) {
						this.banners = res.data;
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		imgClickType(index) {
			this.imgType = index;
		},
		topage(type,item) {
			if (type == 1) {
				uni.navigateTo({
					// url: '/pages2/company/company?id='+item.id
					url: '/pages2/companyList/companyList?hallId='+item.id+"&id="+this.options.id
				});
			} else if (type == 2) {
				uni.navigateTo({
					url: '/pages2/company/company?id='+item.id
				});
			}
		}
	}
};
</script>

<style>
@import url(hallGuide.css);
</style>
