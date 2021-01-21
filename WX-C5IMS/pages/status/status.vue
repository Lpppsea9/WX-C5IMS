<template>
	<view class="">
		<view class="status">
			<view class="status-item">徐总</view>
			<view class="status-item">张超DN40</view>
			<view class="status-item">宋老二</view>
			<view class="status-item">华泰DN50</view>
			<view class="status-item">史#</view>
		</view>
	</view>
</template>

<script>
	var postData = require('../../data/workdata.json');
	export default {
		data() {
			return {
				localData: postData.data
			}
		},
		methods: {
			getWorkDataOne () {
				const data = postData.data
				console.log(data[0].uid)
			},
			getWorkDataTwo () {
				uni.request({
					url:'http://47.103.95.119/c5pms/ajax_tabledata.php?action=m_organization&limit=10',
					success:(res) => {
						console.log(res.data)
					}
				})
			}
		},
		
	}
</script>

<style lang="stylus" scoped>
	.status
		display flex
		flex-direction row
		flex-wrap wrap
		.status-item
			width 200rpx
			height 80rpx
			line-height 80rpx
			text-align center
			background #05A05E
			margin 25rpx
			color #fff
			border-radius 10rpx
</style>