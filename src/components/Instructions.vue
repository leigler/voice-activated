<template>
	<aside id="instructions">
		<p>
			<span v-if="content === '' " id="listening_animation"></span>
			<span>{{content}}</span>
	</p>
	</aside>
</template>

<script>
	export default{
		name: 'Instruction',
		props: {
			content: String
		}
	}

</script>

<style scoped>

#instructions{
	text-align: left;
	z-index: 100;
	position: fixed;
	top: 0.5rem;
	min-height: 2.2rem;
	width: calc(100vw - 2rem);
	max-width: 90rem;
	left: 1rem;
	background-color: #8A2BE2;
	color: white;
	border-radius: 1rem;
	box-sizing: border-box;
	font-family: 'IBM Plex Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 2.2rem;
  padding: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1;
  box-shadow: 0 2px 3px rgba(0,0,0,0.8);
}

#instructions p{
	font-size: 1rem;
  line-height: 1;
}

@keyframes loading{
	0%{
		content: ".";
	}
	33%{
		content: "..";
	}

	66%{
		content: "...";
	}
}

#listening_animation:before{
	width: 2rem;
	content: ".";
	animation-name: loading;
	animation-duration: 3s;
	animation-iteration-count: infinite;
}
	
</style>