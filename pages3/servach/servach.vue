<template>
	<view>
		
		<view class="roww  border_bottom center_center topviewww" 
		>
			<view class="inputview allline">
				<input v-model="searchTxt" placeholder="请输入搜索内容" class="allline " />
			</view>
			<view class="w-30"></view>
			<view class="button1" @click.stop="toEarch">搜索</view>
		</view>
		
		<view class="h-100"></view>
		
		<view class="h-50"></view>
		<block  v-if="commpanyList.length>0">
			<view class="roww center_center" style="font-weight: bold;">
				<view>企业</view>
			</view>
			<view class="h-20"></view>
		</block>
		
		
		<view class="roww gqview center_center" v-for="(item,index) in commpanyList"
		@click="toPage(1,item)" v-if="commpanyList.length>0">
			<view class="colonn">  
				<view style="font-weight: bold;" class="fs-35">{{item.name}}</view>
				<view class="h-20"></view>
				<view class="huanhang w-400">
					<view class="sdgj" v-for="(item1,index1) in item.businessScope">{{item1}}</view>
				</view>
				<view class="roww center_center">
					<image src="/static/dianhua.png" class="w-28 h-28"></image>
					<view class="w-10"></view>
					<view class="fs-28">{{item.tel}}</view>
					<view class="allline"></view>
				</view>  
			</view>
			<view class="allline"></view>
			<image :src="item.logo" class="w-128 h-128"></image>
		</view>
		<view class="h-50"></view>
		<view class="roww center_center" v-if="goodList.length>0" style="font-weight: bold;">
			<view>商品</view>
		</view>
		<view class="h-20"></view>
		<view class="huanhang rowsb" style="margin:20rpx 22rpx;" 
		>
			<view class="colonn videoview" v-for="(item,index) in goodList"
			@click="toPage(2,item)" v-if="goodList.length>0"
			>
				<image :src="item.logo" mode="aspectFill" class="videoimg videoimgview"></image>
				<view class="w-335 txtShowLength1 fs-30"
					style="padding: 5rpx 22rpx;text-align: left;font-weight: bold;">{{item.name}}</view>
				<view class="h-13"></view>
				<!-- <view class="roww center_center">
					<view class="w-10"></view>
					<image src="/static/typename.png" class="w-30 h-30"></image>
					<view class="w-10"></view>
					<view class="fs-25 w-290 txtShowLength1">秋交会秋交会秋交会秋交会</view>
					<view class="allline"></view>
				</view>
				<view class="h-15"></view> -->
			</view>
		</view>
		<view class="roww center_center " v-if="goodList.length<=0&&commpanyList.length<=0">
			<view>暂无数据</view> 
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeStyle: 1,
				searchTxt:'',
				goodList:[],//商品列表
				commpanyList:[],//企业列表
			}
		},
		onLoad() {
		},
		methods: {
			toPage(type,info){
				if(type==1){
					uni.navigateTo({
						url:"/pages2/company/company?id="+info.id
					})
				}else{ 
					uni.navigateTo({
						url:"/pages3/goodInfo/goodInfo?id="+info.id
					})
				}
			},
			toEarch(){
				this.getGoodList();
				this.getShopList();
			},
			// 商品列表
			getGoodList(){
					// /api/company/companyProduct/list
					var data1={
						'name':this.searchTxt
					}
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
			// 商家列表
			getShopList() {
				var data1 = {
					'name':this.searchTxt
				};
				this.$axios
					.axios('get', this.$paths.companylist, data1)
					.then((res) => {
						if (res.code == 200) {
							var commpanyList = res.rows;
							for (var a = 0; a < commpanyList.length; a++) {
								commpanyList[a].businessScope = commpanyList[a].businessScope.split(',');
							}
							this.commpanyList = commpanyList;
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
		}
	}
</script>

<style>
@import url(servach.css);
</style>
