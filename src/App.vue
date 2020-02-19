<template>
  <div id="app">
    <header>
      <Nav section="menu" />      
    </header>
    <router-view></router-view>
    <router-view name="page"></router-view>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'

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
  components : {
    Nav
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

main{
  max-width: 80rem;
  margin: 0 auto;
  margin-bottom: 8rem;
}

@media(max-width: 768px){
  html, body{
    font-size: 12px;
  }

  main{
    width: 96%;
  }
}

@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300|IBM+Plex+Serif:300,300i&display=swap');

#app {
  font-family: 'IBM Plex Serif', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}

h1, h2, h3, h4, h5, h6{
  font-weight: normal;
}

h1, h2{
  margin-top: 2rem;
  text-transform: uppercase;
  color: #8A2BE2;
}

h2, h3{
  text-transform: uppercase;
  text-indent: 2rem;
}

h4, p:not(:first-of-type){
  text-indent: 2rem;
}

nav p{
  text-indent: 0 !important; 
}

h1, h2, h3, h4, p, li{
  font-weight: normal;
  font-size: 2rem;
  letter-spacing: -1px;
  line-height: 1.5;
}

p, ul{
  margin-bottom: 1rem;
}

p + ul{
  margin-top: -1rem;
}

ul{
  list-style: none;
}

ul li:before{
  content: "";
  margin-bottom: 0.1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  transform: skew(20deg);
  display: inline-block;
  background-color: #8A2BE2;
  transition: transform 0.2s ease-out;
}

ul li:nth-of-type(even):before{
  transform: skew(-20deg);
}

ul li:hover:before{
  transform: skew(0deg);
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
pre, code{
  font-family: 'IBM Plex Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  font-size: 1.25rem;
  background-color: #e3d0f5;
  border-radius: 0.25rem;
}

pre{
    box-sizing: border-box;
    padding: 0.5rem;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;     
    max-width: 60rem;
  }
  
pre code{
  padding: 0;
  border-radius: none;
  overflow-wrap: break-word;
  word-break: break-all;
}

code{
  padding: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}



</style>
