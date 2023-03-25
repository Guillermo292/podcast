<script setup>
	import { defineProps } from "vue";

	const props = defineProps({
		podcast: Object,
	});
</script>

<template>
	<div class="card">
		<img
			class="card__img"
			:src="podcast['im:image'][2].label"
		/>
		<p class="card__title">{{ podcast["im:name"].label }}</p>
		<p class="card__author">
			Author: {{ podcast["im:artist"].label }}
		</p>
	</div>
</template>

<style lang="scss">
	.card {
		margin: 0 auto;
		margin-bottom: 5em;
		width: 15em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: black;
		padding: 0.5em;
		text-align: center;
		border: 1px solid rgba(163, 153, 163, 0.3);
		-webkit-box-shadow: 0px 6px 6px 0px rgba(163, 153, 163, 1);
		-moz-box-shadow: 0px 6px 6px 0px rgba(163, 153, 163, 1);
		box-shadow: 0px 6px 6px 0px rgba(163, 153, 163, 1);

		&__title {
			position: relative;
			bottom: 50px;
			font-size: 1em;
		}

		&__author {
			position: relative;
			bottom: 45px;
			font-size: 0.8em;
			color: grey;
		}

		&__img {
			border-radius: 50%;
			width: 50%;
			height: 70%;
			position: relative;
			bottom: 65px;
		}
	}
</style>