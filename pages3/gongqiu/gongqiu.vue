<template>
	<view>
		<view class="colonn gqview" v-for="(item,index) in supplyDemandList"
		@click.stop="topage(item)"
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
					<!-- ·{{item.userName}} -->
					<view class="roww w-550">
						<view class="wenzi1">今日活跃</view>
						<view class="allline"></view>
						<view class="wenzi1">{{item.userProvince}}{{item.userCity}}</view>
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
				supplyDemandList:[]
			}
		},
		onLoad() {
			this.getGongqiu();
		},
		methods: {
			topage(item){
					uni.navigateTo({
						url:"/pages3/supplyDemandInfo/supplyDemandInfo?id="+item.id
					})
			},
			// 获取最新的供求
			getGongqiu(){
				var data1={
					'pageSize':100000,
					'pageNum':1,
				}
				this.$axios
					.axios('get',
						this.$paths.supplyNeedList,
						data1)
					.then(res => {
						 if (res.code == 200){
							var supplyDemandList=res.rows;
							for(var a=0;a<supplyDemandList.length;a++){
								if(supplyDemandList[a].subCategory){
									supplyDemandList[a].subCategory=supplyDemandList[a].subCategory.split(",");
								}
							}
							this.supplyDemandList=supplyDemandList;
						 }
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
		}
	}
</script>

<style>
@import url(gongqiu.css);
</style>
