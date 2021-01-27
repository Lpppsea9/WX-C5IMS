<template>
	<view>
		<view class="Num-Pwd">
			<view class="Num">
				<view>
					<text>账号</text>
				</view>
				<input  type="text" 
						value="" 
						v-model="userName" 
						class="UserNumber input"
				/>
			</view>
			<view class="Pwd">
				<view>
					<text>密码</text>
				</view>
				<input  type="text" 
						value="" 
						v-model="passWord" 
						class="UserPassword input"
						password="false"
				/>
			</view>
		</view>
		<view class="btns">
			<button class="btnLogin" @tap="login">登录</button>
			<button class="btnQuit" @tap="quit">退出</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:"",
				passWord:"",
			}
		},
		methods: {
			login(){
				if (this.userName.trim() === "") {
					uni.showToast({
						title:"用户名不能为空",
						icon:"none"
					})
				} else if (this.passWord.trim() === "") {
					uni.showToast({
						title:"密码不能为空",
						icon:"none"
					})
				} else {
					// 登录请求跳转
					uni.request({
						url: "https://www.shwanqiao.com/apis_login.php?user="+this.userName+"&pwd="+this.passWord,
						success(res) {
							res = res.data
							// console.log(res);
							if (res.mystatus === "yes") {
								uni.redirectTo({
									url:"../index/index"
								})
							} else {
								uni.showToast({
									title:"用户名或密码错误",
									icon:"none"
								})
							}
						}
					})
				}
			},
			quit(){
				uni.navigateTo({
					url:"../register/register"
				})
			}
		},
	}
</script>

<style scoped lang="stylus">
	page{
		background-color: #f0eff4;
	}
	
	.Num-Pwd{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 200rpx;
		margin-left: -40px;
	}
	
	.Num{
		display: flex;
		margin-bottom 20rpx
	}
	
	.Pwd{
		display: flex;
	}
	
	.input {
		width: 400rpx;
		padding-left: 20rpx;
		margin-left 10px
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
