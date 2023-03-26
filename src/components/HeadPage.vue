<template>
	<header class="header">
		<h1 class="header__title">Podcaster</h1>
	</header>
</template>

<style scoped lang="scss">
    @use "../scss/colors" as c;

	.header {
        color: map-get(c.$colors, "blue-electric");
        padding: 1.5em;
		width: 100%;
        display: block;
        border-bottom: 1px solid map-get(c.$colors, "grey-blue");
        margin-bottom: 2em;
        font-weight: bold;
	}
</style>