<template>
	<view class="news-info">
		<view>
			<p class="news-titleOne">{{banner.titleOne}}</p>
			<p class="news-contentOne">{{banner.contentOne}}</p>
			<p class="news-titleTwo">{{banner.titleTwo}}</p>
			<p class="news-contentTwo">{{banner.contentTwo}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner: {}
			}
		},
		methods: {
			
		},
		onLoad(event) {
			// TODO 后面把参数名替换成 payload
			// 目前在某些平台参数会被主动 decode，暂时这样处理。
			const payload = event.id || event.payload
			// console.log(payload)
			try {
				this.banner = JSON.parse(decodeURIComponent(payload));
			} catch (error) {
				this.banner = JSON.parse(payload);
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.news-titleOne
		text-align center
		font-size 32rpx
		font-weight 800
	.news-contentOne
		line-height 50rpx
		text-indent 30rpx
		color #908F94
		margin 20rpx 20rpx
	.news-titleTwo
		color #0270BC
		text-align center
		font-size 32rpx
		font-weight 800
	.news-contentTwo
		line-height 50rpx
		text-indent 30rpx
		color #908F94
		margin 20rpx 20rpx
</style>
