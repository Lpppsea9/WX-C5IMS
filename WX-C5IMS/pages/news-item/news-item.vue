<template>
	<view class="news-list" >
		<view 
			class="news-item" 
			@tap="toNewsDetail(item)" 
			v-for="(item, index) of newsList"
			:id="item.id"
		>
			<view class="news-info">
				<view class="news-title">{{item.titleOne}}</view>
				<view class="news-desc">{{item.contentOne}}</view>
			</view>
			<view class="news-date">{{item.date}}</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		methods: {
			// 跳转到详情
			toNewsDetail(e) {
				// console.log(e)
				let detail = {
					titleOne: e.titleOne,
					contentOne: e.contentOne,
					titleTwo: e.titleTwo,
					contentTwo: e.contentTwo,
					id: e.id,
					date: e.date
				}
				// console.log(detail)
				uni.navigateTo({	
					url:'./news-item-detail/news-item-detail?id=' + encodeURIComponent(JSON.stringify(detail))
				})
			},
			getNewsList() {
				uni.request({
					url: "./static/news-item.json",
					success: (res) => {
						this.getNewsListSucc(res)
					}
				})
			},
			getNewsListSucc(res){
				res = res.data
				this.newsList = res.data
			}
		},
		mounted() {
			this.getNewsList()
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
