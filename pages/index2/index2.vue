<template>
	<view>
		<view class="colonn topview">
			<view class="h-50"></view>
			<view class="roww w-750 rowsa center_center">
				<image  @click.stop="tosousuo"  src="/static/sousuolan.png" class="w-650 sousuoimg h-75"></image>
				<!-- <view class="roww">
					<view style="color: white" class="fs-35">山东省 ▼</view>
				</view> -->
			</view>
			<view class="h-20"></view>
			<view class="uyanhubai"></view>
		</view>
		<view class="colonn center_center">
			<view class="roww w-750 rowsa" style="padding: 0rpx 21rpx">
				<swiper class="w-730 h-150" @change="swiperChange">
					<swiper-item class="w-730 h-150 roww" v-for="(item, index) in types">
						<view class="roww">
							<view class="colonn center_center" style="margin: 0rpx 25rpx"
							 v-for="(item1, index1) in item" 
							 @click.stop="toTypecLICK(index, index1)">
								<image :src="item1.logo" class="w-96 h-96"></image>
								<view class="h-15"></view>
								<view class="fs-24" style="font-weight: bold;color: #005AE0;"
								 v-if="index1==typeindex1&&index==typeindex">{{ item1.name }}</view>
								<view class="fs-24" v-else>{{ item1.name }}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>

				<!-- <view class="colonn center_center" v-for="(item,index) in 5" @click.stop="topage(1)">
					<image src="/static/typename.png" class="w-96 h-96"></image>
					<view class="h-15"></view>
					<view class="fs-24">手动工具</view>
				</view> -->
			</view>
			<view class="h-30"></view>
			<view class="roww swxnaview">
				<block v-for="(item, index) in types">
					<view class="sellans" v-if="index == swindex"></view>
					<view class="sellans yincang1" v-else></view>
				</block>
			</view>
		</view>

		<view class="roww w-750 center_center m-top-50">
			<view
				class="zyview1"
				:class="{
					zyview1: imgType == 1,
					zyview2: imgType == 2
				}"
				@click.stop="imgClickType(1)"
			>
				供应商
			</view>
			<view class="w-30"></view>
			<view
				@click.stop="imgClickType(2)"
				:class="{
					zyview1: imgType == 2,
					zyview2: imgType == 1
				}"
			>
				产品求购
			</view>
		</view>

		<view class="colonn gqview" 
		v-for="(item, index) in supplyDemandList" 
		@click.stop="topage(item)" 
		v-if="imgType == 2">
			<view style="font-weight: bold" class="fs-35">{{ item.name }}</view>
			<view class="h-10"></view>
			<view> <rich-text :nodes="item.content"></rich-text></view>
			<view class="h-20"></view>
			<view class="huanhang">
				<view class="sdgj" v-for="(item1, index1) in item.subCategory">{{ item1 }}</view>
			</view>
			<view class="h-20"></view>
			<view class="roww">
				<image :src="item.userAvatar" class="headerimg"></image>
				<view class="w-20"></view>
				<view class="colonn fs-25 rowsb">
					<view>{{ item.userName }}</view>
					<view class="roww w-550">
						<view class="wenzi1">今日活跃</view>
						<view class="allline"></view>
						<view class="wenzi1">{{ item.userProvince }}-{{ item.userCity }}</view>
					</view>
				</view>
			</view>
		</view>

		<view class="roww gqview center_center" v-for="(item, index) in commpanyList"  
		@click.stop="topage(item)" 
		v-if="imgType == 1">
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
		<block v-if="imgType == 1 && commpanyList.length <= 0">
			<view class="roww center_center m-top-30">
				<view>暂无企业信息</view>
			</view>
		</block>
		<block v-if="imgType == 2 && supplyDemandList.length <= 0">
			<view class="roww center_center m-top-30">
				<view>暂无供求信息</view>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imgType: 1,
			types: [],
			swindex: 0,
			typeindex: 0,
			typeindex1: 0,
			commpanyList: [], //商家列表
			supplyDemandList: [] //供求列表
		};
	},
	onLoad() {
		this.categorylist();
		
	},
	methods: {
		tosousuo(){
			uni.navigateTo({
				url:"/pages3/servach/servach"
			})
		},
		topage(item){
			if(this.imgType==1){
				uni.navigateTo({
					url:"/pages2/company/company?id="+item.id
				})
			}else{
				uni.setStorageSync("xuqiuInfo",item);
				uni.navigateTo({
					url:"/pages3/supplyDemandInfo/supplyDemandInfo?id="+item.id
				})
			}
		},
		toTypecLICK(index,index1){
			if(this.imgType==1){
				this.getShopList(index,index1);
			}else{
				this.getGongqiu(index,index1);
			}
		},  
		getGongqiu(index,index1) {
			this.typeindex = index;
			this.typeindex1 = index1;
			var data1 = {
				pageSize: 100000,
				pageNum: 1,
				categoryId: this.types[index][index1].id
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
		// 商家列表
		getShopList(index, index1) {
			this.typeindex = index;
			this.typeindex1 = index1;
			var data1 = {
				categoryId: this.types[index][index1].id
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
						if (res.data.length > 0) {
							this.getShopList(0, 0);
							this.getGongqiu(0, 0);
						}
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		imgClickType(index) {
			this.imgType = index;
			this.toTypecLICK(this.typeindex,this.typeindex1)
		}
	}
};
</script>

<style>
@import url(index2.css);
</style>
