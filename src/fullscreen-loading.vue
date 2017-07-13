<style lang="scss">
	body {
		overflow: hidden;
	}
	.loading-overlay {
		background-color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: .8;
		margin: 0;
		overflow: hidden !important;

		.animated-box {
			width: 10rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>

<template>
	<div class="loading-overlay" v-if="show">
		<div class="animated-box">
			<img :src="image" alt="" class="img img-responsive">
		</div>
	</div>
</template>

<script>
	export default {

        props: {
            image: {
                required: true,
                type: String
            },

            show: {
                default: false
            }
        }

	}
</script>
