<template>
	<nav>		
		<h1>Currents: CD Workshop Series A</h1>
		<p>
			<router-link to="/">Workshop: Voice Activated</router-link>
		</p>
		<p>
			<a target="_blank" href="/files/PSAM_3060_A_Fisher_Eigler-Harding_Provencher_S20.pdf">Syllabus</a>
		</p>
		<p>
			<router-link to="/weekone">Week 1</router-link> ⟶ 
			<router-link to="/weektwo">Week 2</router-link> ⟶ 
			<router-link to="/weekthree">Week 3</router-link> ⟶ 
			<router-link to="/weekfour">Week 4</router-link> ⟶ 
      <router-link to="/weekfive">Week 5</router-link> ⟶
			<router-link to="/final-projects">Final Projects</router-link>
		</p>
		<p>
			<router-link to="/assignments">Assignments</router-link>, 
			<router-link to="/readings">Readings</router-link>, and 
			<router-link to="/resources">Resources</router-link>
		</p>
	</nav>
</template>
<script>

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

