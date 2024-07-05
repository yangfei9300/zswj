<template>
	<view style="padding:20rpx;">
		<rich-text :nodes="richView"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				richView:""
			}
		},
		onLoad() {
			var richView=uni.getStorageSync("richView")
			console.log("asd",richView)
			richView=this.$tools.formatRichText(richView);
			console.log("asd",richView)
			
			richView=this.$tools.formatRichText(richView)
			
			this.richView=richView;
			console.log("asd",richView)
			this.$forceUpdate()
		},
		methods: {
			
		}
	}
</script>

<style>
@import url(richview.css);
</style>
