<template>
	<view>
		<view class="colonn m-bottom-40" v-for="(item,index) in commpanyList"
		> 
			<view class="h-20"></view>
			<view class="guanviwe roww center_center">
				<view class="w-52"></view>
				<image :src="item.companyLogo" mode="aspectFill" class="h-86 w-86" ></image>
				<view class="w-50"></view>
				<view class="guanname w-350 txtShowLength1">{{item.companyName}}</view>
				<view class="allline"></view>
				<view class="chaksas" @click.stop="toInfo(item)">查看</view>
				<view class="w-52"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commpanyList:[],
				options:{}
			}
		},
		onLoad(options){
			this.options=options;
			this.exhCompanyList(options.id)
		},
		methods: {
			toInfo(item){
				uni.navigateTo({
					url:"/pages2/company/company?id="+item.id
				})
			},
			// 获取展商列表
			exhCompanyList(id){
				var data1={
					exhId:id,
					// hallId:""
				}
				if(this.options.hallId){
					data1.hallId=this.options.hallId;
				}
				this.$axios
					.axios('get',
						this.$paths.exhCompanyList,
						data1).then(res => {
						 if (res.code == 200){
							this.commpanyList=res.rows;
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			}
		}
	}
</script>

<style>
@import url(companyList.css);
</style>
