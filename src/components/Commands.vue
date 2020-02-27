<template>
		<ul id="commands">
			<li>(please) stop listening</li>
			<li>(please) stop</li>
			<li>(go) back</li>
			<li>(jump) back</li>
			<li>(go) forward</li>
			<li>(jump) forward</li>
			<li>go to link_name</li>
			<li>open link_name</li>
			<li>(show) commands</li>
			<li>hide commands</li>
			<li>link_name</li>
			<li id="hide">Hide Commands?</li>
		</ul>
</template>

<script>
	export default{
		name: 'Commands'
	}

</script>

<style scoped>

#commands{
	list-style: none;
	position: fixed;
	bottom: 0rem;
	width: 96vw;
	max-width: 80rem;
	left: 1rem;
	z-index: 100;
	text-align: left;
}

#commands li:before{
	display: none;
}

#commands li{
	text-align: right;
	display: inline-block;
	bottom: 2rem;
	margin-bottom: 0.5rem;
	margin-right: 0.5rem;
	background-color: #e3d0f5;
	color: #8A2BE2;
	border-radius: 1rem;
	box-sizing: border-box;
	font-family: 'IBM Plex Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 2.1rem;
  padding: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1;
  box-shadow: 0 2px 3px rgba(0,0,0,0.8);
}

#commands li#hide{
	color: white;
	background-color: #8A2BE2;
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