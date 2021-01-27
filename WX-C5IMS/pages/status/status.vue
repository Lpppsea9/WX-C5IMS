<template>
	<view>
		<view 
			class="status" 
			v-for="(item, index) of statusList" 
			:id="item.id"
		>
			<view 
				class="status-item" 
				@tap="toStatusDetail(item)"
			>
				{{item.userName}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusList:[]
			}
		},
		methods: {
			getStatusList() {
				uni.request({
					url:'./static/status.json',
					// url:"https://unidemo.dcloud.net.cn/api/news"
					success: (res) => {
						this.getStatusListSucc(res)
					}
				})
			},
			getStatusListSucc(e){
				let res = e.data
				this.statusList = res.data
			},
			// 跳转到详情页面
			toStatusDetail(e) {
				let detail = {
					id: e.id,
					userName: e.userName
				}
				uni.navigateTo({
					url:'status-item/status-item?id=' + encodeURIComponent(JSON.stringify(detail))
				})
			}
		},
		mounted() {
			this.getStatusList()
		}
		
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