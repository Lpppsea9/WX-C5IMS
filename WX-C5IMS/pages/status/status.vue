<template>
	<view>
		<!-- <time-status></time-status> -->
		<view v-for="item in localData" >{{item.id}}</view>
		<button @tap="getWorkDataOne" style="background-color: powderblue">本地数据</button>
		<button @tap="getWorkDataTwo" style="background-color: powderblue;margin-bottom: 30rpx;">后端接口</button>
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
				let data = postData.data
				console.log(data)
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

<style>

</style>
