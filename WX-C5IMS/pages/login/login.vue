<template>
	<view>
		<view class="Num-Pwd">
			<view class="Num">
				<view>
					<text>账号</text>
				</view>
				<input  type="text" 
						value="" 
						v-model="user_name" 
						class="UserNumber input"
				/>
			</view>
			<view class="Pwd">
				<view>
					<text>密码</text>
				</view>
				<input  type="text" 
						value="" 
						v-model="password" 
						class="UserPassword input"
						password="false"
				/>
			</view>
		</view>
		<view class="btns">
			<button class="btnLogin" @tap="login">登录</button>
			<button class="btnQuit" @tap="quit">退出</button>
		</view>
		<text >{{warning}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user_name:"",
				password:"",
				warning:""
			}
		},
		methods: {
			login(){
				let user = {
					"user_name": this.user_name,
					"password": this.password
				}
				// console.log(user)
				uniCloud.callFunction({
					name:"login",
					data:user,
					success:(res) => { //res就是 result
						// console.log(res)
						let status = res.result.status;
						if(status==0){
							this.warning="登陆成功";
							uni.navigateTo({
								url:"../index/index"
							})
						}else if(status==1){
							this.warning="用户名错误"
						}else if(status==2){
							this.warning="密码错误"
						}
					},
					fail:(err) => {
						this.warning="用户名错误"
					}
					// fail:function(){
					// 	this.warn="用户错误"
					// },
				})
			},
			quit(){
				uni.navigateTo({
					url:"../register/register"
				})
			}
		},
	}
</script>

<style >
	page{
		background-color: #f0eff4;
	}
	
	.Num-Pwd{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 200rpx;
	}
	
	.Num{
		display: flex;
	}
	
	.Pwd{
		display: flex;
	}
	
	.input {
		width: 400rpx;
		padding-left: 20rpx;
		background-color: powderblue;
		border: 1px solid #333333;
	}
	
	.btns{
		margin-top: 30rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		
	}
	
	.btnLogin{
		height: 60rpx;
		width: 200rpx;
		line-height: 60rpx;
		background-color: #007aff;
		color: #fff;
		border-radius: 5rpx;
		margin-right: 10rpx;
	}
	
	.btnQuit{
		height: 60rpx;
		width: 200rpx;
		line-height: 60rpx;
		background-color: #dd524d;
		color: #fff;
		border-radius: 5rpx;
		margin-left: 10rpx;
	}
</style>
