<template>
	<main class="main">
		<h1>Class Info</h1>
		<p>Friday, 9:00 to 11:40<br>Academic Entrance 63 Fifth Ave, Room 304</p>
		<h1>Contact</h1>
		<ul>
			<li>Lukas Eigler-Harding, eigll343@newschool.edu</li>
			<li>Rahul S. Shinde, rsubhashshinde@gmail.com</li>
		</ul>
		<h1>Course Description</h1>
		<p>Voice activated is a critical inquiry into the affordances of speech and text input interfaces on the web. Using Javascript, students will design and prototype experimental interactions through language input and  parsing. By grounding contemporary language interfaces in their historical precedents in early digital computing, we will focus on developing unique perspectives regarding personal voice, cultural assumptions, and accessibility. Through research, discussion, and the dissection of speech augmented software (Alexa, Siri, Google Assistant), students will draw attention to the implications of language and tone in interface design.</p>
		<p>Considerations include:</p>
		<ul>
			<li>What is the importance of tying visual communication to senses other than sight?</li>
			<li>How minimal can an interface be?</li>
			<li>How does a speech based interface affect its surroundings?</li>
			<li>When do we change how we talk?</li>
		</ul>
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

<style >


</style>