<template>
  <div id="app">
    <button v-if="annyangEnabled" id="start_annyang" v-on:click="this.startListening" v-html="this.initbutton"/>
    <Instructions v-if="showInstructions" :content="content" />
    <Commands v-if="showCommands" />
    <header>
      <Nav section="menu" />      
    </header>
    <router-view></router-view>
    <router-view name="page"></router-view>
  </div>
</template>

<script>

import annyang from 'annyang'
import Nav from './components/Nav.vue'
import Instructions from './components/Instructions.vue'
import Commands from './components/Commands.vue'

export default {
  name: 'app',
  data: function(){
    return {
      annyang : annyang,
      annyangEnabled: false,
      commands : {},
      initbutton: "Start Listening?",
      showInstructions: false,
      showCommands: false,
      content: "",
      link: [
      "Syllabus",
      "https://docs.google.com/document/d/1__Idam3_ifPBF28dpLGJCSTnTMyrFYOJ5XzQUY8JOpA/edit?usp=sharing"
      ]
    }
  },
  components : {
    Nav,
    Instructions,
    Commands
  },
  mounted: function() {
    this.runAnnYang()
  },
  methods: {
    runAnnYang(){
      if(this.annyang){
        this.commands = {
          '(please) stop listening' : this.stopListening,
          '(please) stop' : this.stopListening,
          '(go) back': this.goBack,
          '(jump) back': this.goBack,
          '(go) forward': this.goForward,
          '(jump) forward': this.goForward,
          'go to *link' : this.selectLink,
          'open *link' : this.selectLink,
          '(show) commands' : this.revealCommands,
          'hide commands' : this.revealCommands,
          '*link' : this.selectLink
        }

        this.annyang.addCommands(this.commands);
        this.annyangEnabled = true;

      }else{
        this.annyangEnabled = false;
      }  
    },
    startListening(){
      
      if(this.annyang.isListening() === true){
        this.stopListening()
      }else{
        this.initbutton = "Stop Listening?"
        this.annyang.start()
        this.showInstructions = true
        //show instruction statement
        this.delayContent("Welcome! Please call the link you'd like to open!", 4000)
        setTimeout(()=>{
          this.delayContent('To view the commands available, say "show commands"', 4000)
        }, 4500)
        setTimeout(()=>{
          this.delayContent('Now listening...', 3000)
        }, 8500)

      }

    },
    stopListening(){
      this.annyang.abort();
      this.initbutton = "Start Listening?"
      //hide instruction statement
      this.showInstructions = false
      this.content = ""
    },
    revealCommands(){
      this.showCommands = !this.showCommands
    },
    delayContent(content, timing){
      const delay = (timing === undefined) ? 1000 : timing
      this.content = content

      setTimeout(() => {
        this.content = ""
      }, delay)
    },
    goBack(){
      this.$router.go(-1)
      this.delayContent("Going Back")
    },
    goForward(){
      this.$router.go(1)
      this.delayContent("Jumping Forward")
    },
    selectLink(link){
      
      this.content = "Searching for: " + link
      let linkName = link.toLowerCase().replace(/ /g, '-').replace(':', '').replace('’', '').replace('.', '')

      if(linkName === "home"){
        linkName = "workshop-voice-activated"
      }
      let allLinks = document.querySelectorAll("a")
      let allLinksArray = Array.from(allLinks)

      // window.console.log("links:", allLinks, link, linkName)
      
      // filter for proper link
      let filteredLinks = allLinksArray.filter((thisLink) => {
        let thisLinkName = thisLink.innerHTML.toLowerCase().replace("'", '').replace('"', '').replace('.', '').replace('’', '').replace(/ /g, '-').replace(':', '').replace('/', '-')

        if(thisLinkName === linkName){
          return thisLink
        }else{
          return null
        }
      })

      if(filteredLinks.length > 0){
        // if link matches any of these conditions, new tab:
        if(filteredLinks[0].getAttribute('href').includes('files')
          || filteredLinks[0].getAttribute('href').includes('youtube') 
          || filteredLinks[0].getAttribute('href').includes('www') 
          || (!filteredLinks[0].href.includes('voice.teachinginter.net') 
          && !filteredLinks[0].href.includes('localhost:'))){
          
          this.delayContent("Opening new tab for: " + link)
          filteredLinks[0].style.backgroundColor = "#8A2BE2"
          filteredLinks[0].style.color = "white"
          setTimeout(()=>{
            window.open(filteredLinks[0].href);
            filteredLinks[0].style.backgroundColor = ""
            filteredLinks[0].style.color = ""
          }, 500)
          
        }else{
          // if internal, redirect:
          window.console.log(filteredLinks[0].href);
          this.delayContent("Navigating to: " + link)

          filteredLinks[0].style.backgroundColor = "#8A2BE2"
          filteredLinks[0].style.color = "white"
          
          setTimeout(()=>{
            this.$router.push({ path: filteredLinks[0].getAttribute('href') })
            filteredLinks[0].style.backgroundColor = ""
            filteredLinks[0].style.color = ""
          }, 500)
        }
      }else{
        // fill with not understood: please repeat
        this.delayContent("It appears " + link + " is not a command on this page...", 3000)
      }

      
    }
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
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom: 8rem;
  box-sizing: border-box;
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

#start_annyang{
  position: fixed;
  top: 3.2rem;
  right: 1rem;
  border-radius: 1rem;
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
  border: none;
  background-color: #8A2BE2;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0,0,0,0.8);
  z-index: 100;
}


</style>
