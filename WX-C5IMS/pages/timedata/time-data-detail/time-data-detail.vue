<template>
	<view>
		<view>{{List.casename}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				List:{}
			};
		},
		onLoad(event) {
			const payload = event.data || event.payload
			try{
				this.List = JSON.parse(decodeURIComponent(payload))
			}catch(e){
				this.List = JSON.parse(payload)
			}
		}
	}
</script>

<style lang="stylus">

</style>
