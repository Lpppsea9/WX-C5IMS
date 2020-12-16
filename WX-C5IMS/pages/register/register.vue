<template>
	<view>
		<view class="Num-Pwd">
			<view class="Num">
				<view>
					<text>账号</text>
				</view>
				<input type="text" value="" v-model="user_name"/>
			</view>
			<view class="Pwd">
				<view>
					<text>密码</text>
				</view>
				<input type="text" value="" v-model="password"/>
			</view>
		</view>
		<view class="btns">
			<button class="btnLogin" @tap="finishRegister">完成注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user_name:"",
				password:""
			}
		},
		methods: {
			finishRegister(){
				uniCloud.callFunction({
					name:"register",
					data:{"user_name":this.user_name, "password": this.password},
					success:(res) => {
						alert("注册成功")
					},
				})
			}
		}
	}
</script>

<style>

</style>
