<template>
	<view>
		<!-- <time-status></time-status> -->
		<view v-for="item in localData">{{item.username}}</view>
		<button @tap="getWorkDataOne" style="background-color: powderblue">本地数据</button>
		<button @tap="getWorkDataTwo" style="background-color: powderblue;margin-bottom: 30rpx;">后端接口</button>
		<view id="app">
			<input type="text" v-model="inputValue" style="border: red 1px solid;"/>
			<button style="background-color: #0077AA;" @click="add">添加</button>
			<button style="background-color: #0077AA;">删除</button>
			<ul>
				<todo-item :content:"item">
					
				</todo-item>
			</ul>
		</view>
	</view>
</template>

<script>
	
	var postData = require('../../data/workdata.json');
	export default {
		// name: 'Status',
		// var TodoItem = {
		// 	template:'<li>{{inputValue}}</li>'
		// },
		
		var app = new Vue({
			el:'#app',
			// components:{
			// 	TodoItem:TodoItem
			// },
			data: {
				list:[],
				inputValue:''
			},
			methods:{
				add(){
					alert("lll")
				}
			}
		}),
		
		
		data() {
			return {
				localData: postData.data
			}
		},
		methods: {
			getWorkDataOne () {
				console.log(postData.data)
				// var data = postData.data
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
