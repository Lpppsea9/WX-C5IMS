<template>
	<view class="main">
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
				<button class="btn-item" @tap="ToNews">最新消息</button>
				<button class="btn-item" @tap="ToStatus">实时状态</button>
				<button class="btn-item" @tap="ToTimeData">实时数据</button>
			</view>
			<view class="btns-line">
				<button class="btn-item" @tap="ToWarning">异常报警</button>
				<button class="btn-item" @tap="ToForm">统计报表</button>
				<button class="btn-item" @tap="ToRank">能耗排行</button>
			</view>
			<view class="btns-line">
				<button class="btn-item" @tap="ToTaskList">任务列表</button>
			</view>
		</view>
		<view class="footer">
			<view class="item home">
				<image src="../../static/font/home.svg"></image>
				<p>首页</p>
			</view>
			<view class="item timedata" @tap="ToTimeData">
				<image src="../../static/font/time.svg"></image>
				<p>实时数据</p>
			</view>
			<view class="item engryform">
				<image src="../../static/font/form.svg"></image>
				<p>能耗报表</p>
			</view>
			<view class="item engryrank">
				<image src="../../static/font/rank.svg"></image>
				<p>能耗排行</p>
			</view>
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
			// 跳转页面
			ToNews(){
				uni.navigateTo({
                    url:"../news-item/news-item" 
                })
			},
			ToStatus(){
				uni.navigateTo({
			        url:"../status/status"
			    })
			},
			ToTimeData(){
				uni.navigateTo({
			        url:"../timedata/timedata"
			    })
			},
			ToTaskList() {
				uni.navigateTo({
				    url:"../TaskList/TaskList"
				})
			}
		}
	}
</script>

<style scoped lang="stylus">
	.main
		height 100%
		display flex
		flex-direction column
		.header
			flex 0 0 auto
			width 100%
			height 460rpx
			swiper
				width 100%
				height 460rpx
				image
					width 100%
					height 460rpx
		.btnsAll
			flex 1 0 auto
			display flex
			flex-direction column
			justify-content start
			margin-top 60rpx
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
		.footer
			width 100%
			height 100rpx
			display flex
			flex-direction row
			border-top 1px #333333 solid
			.item
				// border 1px solid #2C405A
				margin-top 10rpx
				font-size 30rpx
				flex 1
				text-align center
				color #929292
				image
					width 40rpx
					height 40rpx
</style>
