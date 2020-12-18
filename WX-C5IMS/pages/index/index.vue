<template>
	<view>
		<view class="header">
			<swiper 
				class="swiper"
				:vertical="false" 
				:indicator-dots="true"
				indicator-color="#aaaaaa"
				indicator-active-color="#fff"
				:interval="3000"
				:autoplay="true"
				:circular="true"
			>
				<swiper-item @tap="ToNewsOne">
					<image src="../../static/swiperImgs/a.png"></image>
				</swiper-item>
				<swiper-item @tap="ToNewsTwo">
					<image src="../../static/swiperImgs/b.png"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="btnsAll">
			<view class="btns-line">
				<button class="btn-item">最新消息</button>
				<button class="btn-item">实时状态</button>
				<button class="btn-item">实时数据</button>
			</view>
			<view class="btns-line">
				<button class="btn-item">异常报警</button>
				<button class="btn-item">统计报表</button>
				<button class="btn-item">能耗排行</button>
			</view>
		</view>
		<view class="footer">
			
		</view>
	</view>
</template>
	
<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		methods: {
			ToNewsOne(){
				uni.navigateTo({
					url:"../newsone/newsone"
				})
			},
			ToNewsTwo(){
				uni.navigateTo({
					url:"../newsone/newsone"
				})
			},
			
		}
	}
</script>

<style scoped lang="stylus">
	.header
		width 100%
		swiper
			width 100%
			height 360rpx
			image
				width 100%
				height 360rpx
	.btnsAll
		display flex
		flex-direction column
		justify-content center
		margin-top 50rpx
		.btns-line
			display flex
			flex-direction row
			justify-content space-between
			margin-bottom 80rpx
			.btn-item
				width 200rpx
				height 100rpx
				line-height 100rpx
				background-color #7effd4
				font-size 30rpx
			
</style>
