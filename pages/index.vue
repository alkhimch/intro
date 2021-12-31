<template>
	<div fluid class="index-container flex center middle">
		<div class="main-wrapper">
			<b-row>
				<b-col class="flex center">
					<div class="flex column tw mr-1rem center">
						<h1>I am</h1>
					</div>
					<div class="divider"></div>
					<div class="flex column ml-1rem tw">
						<h1>Shinenbayar</h1>
						<h1>Alkhimch</h1>
						<h1>Brother of two</h1>
						<h1>Developer</h1>
						<h1>Mathematician</h1>
						<h1>Photographer</h1>
					</div>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
.index-container {
	.main-wrapper {
		margin-top: auto;
		margin-bottom: auto;
		.divider {
			border-right: solid 1px #fff;
			// height: 50vh;
		}
	}
	height: 100vh;
}
</style>
