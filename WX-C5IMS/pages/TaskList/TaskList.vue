<template>
	<view>
		<view
			class="news-item" 
			@tap="toStatusInfo(item)" 
			v-for="(item, index) of List"
			:id="item.id"
		>
			<view class="news-info">
				<view class="news-title">{{item.casename}}</view>
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
				List:[]
			}
		},
		methods: {
			getStatusList() {
				uni.request({
					url:"https://www.shwanqiao.com/apis_getdata.php?action=gettasklist&user=liupeng&pwd=liupeng",
					success:(res) => {
						console.log(res);
						this.getStatusListSucc(res)
					} 
				})
			},
			getStatusListSucc(e){
				let res = e.data.data
				this.List = res
			},
			// 跳转到详情方法
			toStatusInfo(e) {
				let detail = {
					casename: e.casename,
					des: e.des,
					creator: e.creator,
					id: e.id,
				}
				uni.navigateTo({
					url:"./TaskDetail/TaskDetail?data=" + encodeURIComponent(JSON.stringify(detail))
				})
			}
		},
		mounted() {
			this.getStatusList()
		}
	}
</script>

<style lang="stylus" scoped>
	.a 
		border #0077AA 1px solid
		margin 30rpx 5rpx
</style>

