<template>
	<view class="colonn">
		<view class="colonn topview">
			<view class="h-50"></view>
			<view class="roww center_center rowsb" style="padding:0rpx 20rpx;">
				<image @click="toBack" src="/static/zuojiantou.png" class="w-40 h-40"></image>
				<view style="color: white;" >行业咨询</view>
				<image src="/static/zuojiantou.png" class="w-40 yincang1 h-40"></image>
			</view>
			<view class="h-30"></view>
			<swiper class="bannerviwe">
				<swiper-item class="w-706 br-20 h-386" v-for="(item,index) in banners">
					<image mode="aspectFill"
					:src="item.image" 
					class="w-706 br-20 h-386"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="h-35"></view>
		<view class="roww w-750 center_center">
			<scroll-view scroll-x class="w-750">
				<view class="roww">
					<view class="w-20"></view>
					<block v-for="(item,index) in types">
						<block v-if="selindex==index">
							<view class="xuansaview">{{item.dictLabel}}</view>
						</block>
						<block v-else>
							<view class="xuansaviewNo" @click.stop="selindexClick(index)">{{item.dictLabel}}</view>
						</block>
					</block>
					<view class="w-20"></view>
				</view>
			</scroll-view>
		</view>
		
		
		
		
		
		<view class="roww gqview center_center" v-for="(item,index) in newsust"
		@click="toinfo(item)"
		>
			<view class="colonn">
				<view class="totieees txtShowLength1">{{item.name}}</view>
				<view class="h-20"></view>
				 
				<view class="roww center_center">
					<view class="fs-28">{{item.createTime}}</view>
					<view class="allline"></view>
				</view>
			</view>
			<view class="allline"></view>
			<image :src="item.image" mode="aspectFill" class="w-128 h-128"></image>
		</view>
		
		<view class="roww center_center m-top-30" v-if="newsust.length<=0">
			<view>暂无资讯信息</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banners:[],
				types:[],
				selindex:0,
				newsust:[]
			}
		},
		onLoad() {
			this.getType();
			this.newsCarouselList();
		},
		methods: {
			toinfo(item){
				uni.setStorageSync("webview",item.jumpPath)
				uni.navigateTo({
					url:"/pages3/wenview/wenview"
				})
			},
			// 获取新闻列表
			getNewsLos(){
				var data1={
					'pageNum':1,
					'pageSize':100000,
					'categoryId':this.types[this.selindex].dictValue
				}
				this.$axios
					.axios('get',
						this.$paths.newsInfolist,
						data1)
					.then(res => {
						 if (res.code == 200){
						 	this.newsust=res.rows;
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			selindexClick(index){
				this.selindex=index;
				this.getNewsLos()
			},
			getType(){
				var data1={}
				this.$axios
					.axios('get',
						this.$paths.dicttype+"news_type",
						data1)
					.then(res => {
						 if (res.code == 200){
						 	var types=res.data;
							this.types=types;
							this.getNewsLos();
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 新闻轮播图
			newsCarouselList(){
				var data1={}
				this.$axios
					.axios('get',
						this.$paths.newsCarouselList,
						data1)
					.then(res => {
						 if (res.code == 200){
						 	this.banners=res.data;
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			toBack(){
				uni.navigateBack({
					delta:1
				})
			},
			toCommpany(item){
				uni.navigateTo({
					url:"/pages2/company/company"
				})
			}
		}
	}
</script>

<style>
@import url(industryNews.css);
</style>
