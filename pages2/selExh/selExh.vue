<template>
	<view>
		<view class="colonn">
			<view class="colonn topview">
				<view class="h-50"></view>
				<view class="roww center_center rowsb" style="padding: 0rpx 20rpx">
					<image @click="toBack" src="/static/zuojiantou.png" class="w-40 h-40"></image>
					<view style="color: white">选择展会</view>
					<image src="/static/zuojiantou.png" class="w-40 yincang1 h-40"></image>
				</view>

				<view class="h-52"></view>
				<view class="roww rowsa center_center" style="color: white">
					<view class="w-20"></view>
					<scroll-view scroll-x class="w-670">
						<view class="roww">
							<view class="fs-30 m-right-20" 
							v-for="(item,index) in exhList"
							:class="{
								'selexhNo': selIndex!=index
							}"
							>{{item.name}}</view>
						</view>
					</scroll-view>
					<view class="w-15"></view>
					<image src="/static/gengduo.png" class="w-30 h-30"></image>
					<view class="w-20"></view>
				</view>
			</view>
			<view class="roww rowsa" style="padding: 39rpx 32rpx">
				<view class="colonn">
					<image class="w-333 h-201" @click.stop="todengji" src="/static/guanzhongdnegjio.png"></image>
					<view class="h-10"></view>
					<image class="w-333 h-201" @click.stop="topage(3)" src="/static/zsmll.png"></image>
				</view>
				<view class="w-20"></view>
				<view class="colonn rowsb">
					<image @click.stop="topage(1)" src="/static/zhanguandaolan.png" class="w-334 h-126"></image>
					<image @click.stop="topage(2)" src="/static/zhanguandaol.png" class="w-334 h-126"></image>
					<image @click.stop="topage(6)" src="/static/dengjiliyu.png" class="w-334 h-126"></image>
				</view>
			</view>

			<view class="colonn dozjovoew">
				<view class="gongsidizhi">展会介绍</view>
				<view class="h-24"></view>
				<view class="fs-30">
					<rich-text :nodes="exhList[selIndex].intro"></rich-text>
				</view>
			</view>

			<view class="colonn dozjovoew">
				<view class="gongsidizhi">展馆地址</view>
				<view class="h-24"></view>
				<view class="roww bottom">
					<view class="fs-30 w-450">{{exhList[selIndex].place}}</view>
					<view class="allline"></view>
					<image src="/static/daohangsa.png" class="w-146 h-69"></image>
				</view>
			</view>

			<view class="colonn" style="padding: 30rpx 30rpx">
				<view class="roww" @click.stop="topage(4)">
					<view>推荐视频</view>
					<view class="allline"></view>
					<image src="../../static/youjianto.png" class="w-20 h-30"></image>
				</view>
				<view class="h-25"></view>
				<view class="huanhang rowsb">
					<view class="colonn videoview" v-for="(item, index) in 3" @click.stop="topage(5)">
						<image src="../../static/lunbotu.png" mode="aspectFill" class="videoimg videoimgview"></image>
						<view class="w-335 txtShowLength" style="padding: 5rpx 22rpx; text-align: left; font-weight: bold">2024秋季全国五金交展商推荐</view>
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
	</view>
</template>

<script>
export default {
	data() {
		return {
			exhList: [],
			selIndex:-1,
			videoList:[],
			bannerss:[],//轮播图
		};
	},
	onLoad() {
		this.getExhList();
		this.toTuijian();
		
	},
	methods: {
		toShops(){
			uni.navigateTo({
				url:"/pages2/companyList/companyList?id="+this.exhList[this.selIndex].id
			})
		},
		// 展会轮播图
		exhCarouselList(){
			var data1 = {
				'exhId':this.exhList[this.selIndex].id
			};
			this.$axios
				.axios('get', this.$paths.exhCarouselList, data1)
				.then((res) => {
					if (res.code == 200) {
						this.bannerss=res.data;
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		todengji(){
			uni.setStorageSync("webview",this.exhList[this.selIndex].enrollPath)
			uni.navigateTo({
				'url':"/pages3/wenview/wenview"
			})
		},
		// 获取视频推荐
		toTuijian(){
			var data1 = {};
			this.$axios
				.axios('get', this.$paths.exhVideoList, data1)
				.then((res) => {
					if (res.code == 200) {
						console.log("asd",res);
						this.videoList=res.data;
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
						for(var a=0;a<exhList.length;a++){
							this.selIndex=0;
						}
						this.exhList=exhList;
						this.exhCarouselList();
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},

		topage(type) {
			if (type == 1) {
				uni.navigateTo({
					url: '/pages2/hallGuide/hallGuide?id='+this.exhList[this.selIndex].id
				});
			} else if (type == 2) {
				uni.navigateTo({
					url: '/pages2/goodList/goodList'
				});
			} else if (type == 3) {
				// uni.navigateTo({
				// 	url: '/pages2/companyList/companyList'+
				// });
				this.toShops()
			} else if (type == 4) {
				uni.navigateTo({
					url: '/pages3/videoList/videoList'
				});
			} else if (type == 5) {
				uni.navigateTo({
					url: '/pages3/videoInfo/videoInfo'
				});
			}else if (type == 6) {
				// 参观礼遇
				uni.setStorageSync("richView",this.exhList[this.selIndex].gift)
				uni.navigateTo({
					url: '/pages3/richview/richview'
				});  
			}
		},
		toBack() {
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>

<style>
@import url(selExh.css);
</style>
