<template>
	<view>
		<view class="colonn">
			<view class="roww gqview center_center">
				<view class="colonn">
						<view style="font-weight: bold" class="fs-40 w-550">{{conmpanyInfo.name}}</view>
						
					<view class="h-20"></view>
					<view class="roww center_center">
						<image src="/static/dianhua.png" class="w-28 h-28"></image>
						<view class="w-10"></view>
						<view class="fs-28">{{conmpanyInfo.tel}}</view>
						<view class="allline"></view>
					</view>
				</view>
				<view class="allline"></view>
				<image :src="conmpanyInfo.logo" class="w-128 h-128"></image>
			</view>

			<view class="colonn dozjovoew">
				<view class="roww">
					<view class="gongsidizhi">公司地址</view>
					<view class="allline"></view>
					<view v-if="isCang" @click.stop="shoucangClick">已收藏</view>
					<view v-else @click.stop="shoucangClick">点击收藏</view>
				</view>
				
				<view class="h-24"></view>
				<view class="roww bottom">
					<view class="fs-30 w-450">{{conmpanyInfo.place}}</view>
					<view class="allline"></view>
					<image src="/static/daohangsa.png" class="w-146 h-69"></image>
				</view>
			</view>

			<view class="colonn dozjovoew">
				<view class="gongsidizhi">公司介绍</view>
				<view class="h-24"></view>
				<view class="fs-30">
					<rich-text :nodes="conmpanyInfo.intro"></rich-text>
				</view>
			</view>

			<view class="colonn dozjovoew">
				<view class="gongsidizhi">主营业务</view>
				<view class="h-24"></view>
				<view class="huanhang">
					<view class="zyview" v-for="(item, index) in conmpanyInfo.businessScope">{{item}}</view>
				</view>
			</view>

			<view class="colonn dozjovoew">
				<view class="gongsidizhi">公司相册</view>
				<view class="h-24"></view>
				<view class="roww">
					<view
						class="zyview1"
						:class="{
							zyview1: imgType == 1,
							zyview2: imgType == 2
						}"
						@click.stop="imgClickType(1)"
					>
						公司照片
					</view>
					<view
						@click.stop="imgClickType(2)"
						:class="{
							zyview1: imgType == 2,
							zyview2: imgType == 1
						}"
					>
						产品照片
					</view>
				</view>
				<view class="roww">
					<scroll-view class="roww" scroll-x>
						<view class="colonn">
							<image v-if="imgType==1"
							:src="item" 
							class="w-640 br-15 m-bottom-20" 
							v-for="(item, index) in conmpanyInfo.image" 
							mode="widthFix"></image>
							<image v-if="imgType==2"
							:src="item.logo" 
							class="w-640 br-15 m-bottom-20" 
							v-for="(item, index) in goodList" 
							mode="widthFix"></image>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imgType: 1,
			options: {},
			conmpanyInfo:{},
			goodList:[],
			isCang:false,
		};
	},
	onLoad(options) {
		this.options = options;
		this.getCommpanyInfo();
		this.toIsCang()
	},
	methods: {
		shoucangClick(){
			if(this.isCang){
				this.toQuxiaoShoucang();
			}else{
				this.toShoucang();
			}
		},
		// 取消收藏
		toQuxiaoShoucang(){
			var data1={
				'userId':"",
				'markType':'1',
				'targetId':this.options.id
			}
			var userInfo=uni.getStorageSync("userInfo");
			if(userInfo){
				data1.userId=userInfo.id;
			}else{
				this.$tools.showToast("请先登录");
				return
			}
			this.$axios
				.axios('post',
					this.$paths.userMarkdel,
					data1)
				.then(res => {                 
					 if (res.code == 200){
						this.$tools.showToast("取消成功");
						this.isCang=false;
					 }else{
						 this.$tools.showToast(res.msg);
					 }
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
		// 收藏
		toShoucang(){
			var data1={
				'userId':"",
				'markType':'1',
				'targetId':this.options.id
			}
			var userInfo=uni.getStorageSync("userInfo");
			if(userInfo){
				data1.userId=userInfo.id;
			}else{
				this.$tools.showToast("请先登录");
				return
			}
			this.$axios
				.axios('post',
					this.$paths.userMarkAdd,
					data1)
				.then(res => {                 
					 if (res.code == 200){
						this.$tools.showToast("收藏成功");
						this.isCang=true;
					 }else{
						 this.$tools.showToast(res.msg);
					 }
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
		// 获取是否收藏
		toIsCang(){
			// /api/user/userMark/check
			
			var data1={
				'userId':"",
				'markType':'1',
				'targetId':this.options.id
			}
			
			var userInfo=uni.getStorageSync("userInfo");
			if(userInfo){
				data1.userId=userInfo.id;
			}
			this.$axios
				.axios('post',
					this.$paths.userMarkCheck,
					data1)
				.then(res => {                 
					 if (res.code == 200){
						this.isCang=true;
					 }else{
						 // this.$tools.showToast(res.msg);
					 }
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
		// 获取商品列表
		getGoodList(){
			var data1={
				'companyId':this.conmpanyInfo.id,
			}
			this.$axios
				.axios('get',
					this.$paths.companyProductList,
					data1)
				.then(res => {                 
					 if (res.code == 200){
						this.goodList=res.rows;
					 }  
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
		// 获取企业详情
		getCommpanyInfo() {
			this.$axios
				.axios('get', this.$paths.companyInfo + this.options.id, {})
				.then((res) => {
					if (res.code == 200) {
						this.conmpanyInfo = res.data;
						// businessScope
						if(this.conmpanyInfo.businessScope&&this.conmpanyInfo.businessScope!=''){
							this.conmpanyInfo.businessScope=this.conmpanyInfo.businessScope.split(",");
						}
						if(this.conmpanyInfo.image&&this.conmpanyInfo.image!=''){
							this.conmpanyInfo.image=this.conmpanyInfo.image.split(",");
						}
						this.getGoodList();
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		imgClickType(index) {
			this.imgType = index;
		}
	}
};
</script>

<style>
@import url(company.css);
</style>
