<template>
	<main>
		<h1>{{ title }}</h1>
		<h2>{{ subtitle }}</h2>
		<p><a target="_blank" :href="link[1]">{{link[0]}}</a></p>
	</main>
</template>

<script>
export default {
  name: 'Main',
  props: {
    title: String,
    subtitle: String,
    link: Array
  }
}	
</script>

<style scoped>
	h1{
		margin-top: 0.5rem;
	}
	h1, h2, p{
		margin-left: 0.5rem;
		font-weight: normal;
		font-size: 2rem;
		letter-spacing: -1px;
		line-height: 1.2;
	}

	a{
		color: #8A2BE2;
		box-sizing: border-box;
		border: solid 1px #8A2BE2;
		padding-left: 0.25rem;
		padding-right: 0.25rem;
		text-decoration: none;
	}

	@media(any-hover: hover){
		a:hover{
			background-color: #8A2BE2;
			color: white;
		}
	}

</style>