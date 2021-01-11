<template>
	<!-- <view class="post-container">
	    <view class="post-author-date">
	      <image class="post-author" src="{{avatar}}"></image>
	      <text class="post-date">{{date}}</text>
	    </view>
	    <text class="post-title">{{title}}</text>
	    <image class="post-image" src="{{imgSrc}}"></image>
	    <text class="post-content">{{content}}</text>
	    <view class="post-like">
	      <image class="post-like-image" src="../../images/icon/chat.png"></image>
	      <text class="post-like-font">{{collection}}</text>
	      <image class="post-like-image" src="../../images/icon/view.png"></image>
	      <text class="post-like-font">{{reading}}</text>
	    </view>
	 </view> -->
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="stylus">
	.news-all
		display flex
		flex-direction column
		margin-top 20rpx
		border-top #000000 solid 1px
		.news-container
			width 100%
			display flex
			flex-direction row
			border-bottom #000000 solid 1px
			height 180rpx
			.news-left
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
				.news-content 
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
