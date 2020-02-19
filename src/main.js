import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

import Main from './components/Main.vue'
import Page from './components/Page.vue'

Vue.use(VueRouter)

// main routes
const routes = [
	{ 
		path: '/', 
		component: Main
	},
	{ 
		name: "page",
		path: '/:page',
		component: Page
	}
]


// set up router
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(savedPosition){
          resolve(savedPosition)
        }else{
          resolve({ x: 0, y: 0 })
        }
      }, 500)
    })
  }
})

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
