<template>
	<view>
		<view class="status-info">
			<view>
				<!-- <ul v-for="item of List">
					<li>{{item}}</li>
				</ul> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner:{}
			}
		},
		methods: {
		},
		onLoad(event) {
			const payload = event.id || event.payload
			// console.log(payload)
			try {
				this.banner = JSON.parse(decodeURIComponent(payload));
			} catch (error) {
				this.banner = JSON.parse(payload);
			}
			console.log(this.banner)
		}
	}
</script>

<style>

</style>
