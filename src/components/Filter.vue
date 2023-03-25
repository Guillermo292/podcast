<script setup>
	import { ref, watch } from "vue";
	import { defineProps, defineEmits } from "vue";

	const props = defineProps({
		modelValue: String,
	});

	const emit = defineEmits(["update:modelValue"]);

	const searchTerm = ref(props.modelValue);
	watch(searchTerm, newValue => {
		emit("update:modelValue", newValue);
	});
</script>
<template>
	<div class="div">
		<span>100</span>
		<input
			type="text"
			placeholder="Filter podcasts..."
			class="input"
			v-model="searchTerm"
		/>
	</div>
</template>

<style lang="scss" scoped>
	@use "../scss/colors" as c;

	.div {
		display: flex;
		align-self: end;
		margin-bottom: 5em;
		margin-right: 3em;
		justify-content: space-around;
		width: 17em;

		span {
			align-self: center;
			background: map-get(c.$colors, "blue-electric");
			padding: 0.2em 0.4em;
			border-radius: 0.6em;
			color: white;
		}

		.input {
			padding: 0.3em;
			border: 1px solid grey;
			border-radius: 0.3em;
			// margin-left: em;
		}
	}
</style>