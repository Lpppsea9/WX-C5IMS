<template>
	<view class="news-list">
		<view class="news-item" @tap="toNewsDetail">
			<view class="news-info">
				<view class="news-title">C5-IMS平台正式对外提供公共服务</view>
				<view class="news-desc">C5云平台已具备完善的对外API点点</view>
			</view>
			<view class="news-date">2021-08-05</view>
		</view>
		<view class="news-item" >
			<view class="news-info">
				<view class="news-title">技术驱动变革，数据引领创新-C5IMS</view>
				<view class="news-desc">C5云平台的建立，是建筑能源管理点点</view>
			</view>
			<view class="news-date">2021-08-02</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toNewsDetail() {
				uni.navigateTo({
					url:'./news-item-detail/news-item-detail'
				})
			}
		}
	}
</script>

<style scoped lang="stylus">
	.news-list
		display flex
		flex-direction column
		margin-top 20rpx
		border-top #000000 solid 1px
		.news-item
			width 100%
			display flex
			flex-direction row
			border-bottom #000000 solid 1px
			height 180rpx
			.news-info
				width 65%
				overflow hidden
				display flex
				flex-direction column
				margin-left 20rpx
				margin-top 20rpx
				.news-title
					font-size 35rpx
					font-weight 600
					margin-bottom 15rpx
				.news-desc 
					width: 100%;
					font-size 30rpx
					color #929292
					display: block;               
					overflow: hidden;   
					white-space: nowrap;
					text-overflow: ellipsis;
			.news-date
				width 35%
				font-size 32rpx
				color #929292
				text-align right
				margin-top 20rpx
				margin-right 20rpx
				
</style>
