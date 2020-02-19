<template>
	<nav v-html="nav"></nav>
</template>

<script>

import showdown from 'showdown';

export default {
  name: 'week',
  data: function(){
    return {
      loading: false,
      error: false,
      nav : null
    }
  },
  props: {
    section: String
  }, 
	created: function() {
		this.fetchNav()
  },
	methods: {
		fetchNav(){
			this.loading = true

			return fetch(`/nav/${this.section}.md`)
			.then(response => {
				return response.text()
			})
			.then((responseMD) => {
				let converter = new showdown.Converter(),
						html      = converter.makeHtml(responseMD);
				this.loading = false;
				this.nav = html;

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

	nav{
		padding: 1rem;
		color: white;
		background-color: black;
		margin-bottom: 2rem;
	}

	nav *, nav p{
		text-indent: 0 !important;
	}
	
</style>

