<template>
	<view>
		<view class="colonn">
			<view class="colonn topview">
				<view class="h-50"></view>
				<view class="roww center_center rowsb" style="padding:0rpx 20rpx;">
					<image @click="toBack" src="/static/zuojiantou.png" class="w-40 h-40"></image>
					<view style="color: white;">热门品牌</view>
					<image src="/static/zuojiantou.png" class="w-40 yincang1 h-40"></image>
				</view>
				<view class="h-30"></view>
				<view class="roww w-750 rowsa center_center">
					<image src="/static/sousuolan.png" @click.stop="tosousuo" class="w-650 sousuoimg h-75"></image>
					<!-- <view class="roww">
						<view style="color: white;" class="fs-35">山东省 ▼</view>
					</view> -->
				</view>
				<view class="h-52"></view>
				<view class="roww rowsa center_center" style="color: white;">
					<view class="w-20"></view>
					<scroll-view scroll-x class="w-670">
						<view class="roww">
							<view class="fs-30 m-right-20" v-for="(item,index) in types"
							:class="{
								'noeaewax':index!=typeIndex,
								'eaewax':index==typeIndex,
								
							}" @click.stop="typeIndexClick(index)"
							>{{item.name}}</view>
						</view>
					</scroll-view>
					<view class="w-15"></view>
					<image src="/static/gengduo.png" class="w-30 h-30"></image>
					<view class="w-20"></view>
				</view>
			</view>
			<view class="roww gqview center_center" 
			v-for="(item,index) in commpanyList" @click="toCommpany(item)">
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
			<view v-if="commpanyList.length<=0" class="roww center_center m-top-30">
				<view>暂无企业数据</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				types:[],
				typeIndex:-1,
				commpanyList:[]
			}
		},
		onLoad() {
			this.getTypes();
		},
		methods: {
			tosousuo(){
				uni.navigateTo({
					url:"/pages3/servach/servach"
				})
			},
			typeIndexClick(index){
				this.typeIndex=index;
				this.getGoodList()
			},
			getGoodList(){
				var data1={
					'categoryId':this.types[this.typeIndex].id
				};
				this.$axios
					.axios('get',
						this.$paths.companylist,
						data1)
					.then(res => {
						 if (res.code == 200){
							var commpanyList = res.rows;
							for (var a = 0; a < commpanyList.length; a++) {
								commpanyList[a].businessScope = commpanyList[a].businessScope.split(',');
							}
							this.commpanyList = commpanyList;
						 }else{
							 this.$tools.showToast(res.msg);
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			getTypes(){
				var data1={}
				this.$axios
					.axios('get',
						this.$paths.categorylist,
						data1)
					.then(res => {
						 if (res.code == 200){
							this.types=res.data;
							if(res.data.length>0){
								this.typeIndex=0;
								this.getGoodList();
							}
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			toBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			toCommpany(item){
				uni.navigateTo({
					url:"/pages2/company/company?id="+item.id
				})
			}
		}
	}
</script>

<style>
	@import url(heatBrand.css);
</style>