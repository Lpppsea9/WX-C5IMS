<template>
	<view>
		<!-- <time-status></time-status> -->
		<view ></view>
		<button @tap="getWorkDataOne" style="background-color: powderblue">本地数据</button>
		<button @tap="getWorkDataTwo" style="background-color: powderblue">后端接口</button>
	</view>
</template>

<script>
	
	var postData = require('../../data/workdata.json');
	export default {
		// name: 'Status',
		data() {
			return {
				
			}
		},
		methods: {
			getWorkDataOne () {
					console.log(postData.data)
				
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
