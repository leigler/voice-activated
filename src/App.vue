<template>
  <div id="app">
    <Main title="Currents: CD Workshop Series A" subtitle="Workshop 2: Voice Activated" :link="link" />
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  data: function(){
    return {
      link: [
      "Syllabus",
      "https://docs.google.com/document/d/1__Idam3_ifPBF28dpLGJCSTnTMyrFYOJ5XzQUY8JOpA/edit?usp=sharing"
      ]
    }
  },
  components: {
    Main
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

html, body{
  width: 100%;
  font-size: 15px;
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}

</style>
