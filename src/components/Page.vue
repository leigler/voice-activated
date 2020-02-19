<template>
	<main>
    <section class="Page" v-html="post"></section>
		<section v-if="error">
			<p>This page does not exist.</p>
			<p>Return <router-link to="/">Home</router-link>?</p>
    </section>
	</main>
</template>

<script>

import showdown from 'showdown';

export default {
  name: 'page',
  data: function(){
    return {
      loading: false,
      error: false,
      post : null
    }
  },
  props: {
    title: String,
    subtitle: String,
    link: Array
  }, 
	created: function() {
		this.fetchPage()
  },
  watch: {
    $route(to, from){
      if(to !== from){
        this.fetchPage()
      }
    }
  },
	methods: {
		fetchPage(){
			this.loading = true
			let section = this.$route.params

			return fetch(`/pages/${section.page}.md`)
			.then(response => {
				return response.text()
			})
			.then((responseMD) => {
				let converter = new showdown.Converter(),
						html      = converter.makeHtml(responseMD);
				this.loading = false;
				this.post = html;

			})
			.catch((error) => {
				this.error = true;
				window.console.log(error)
			})
		}
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