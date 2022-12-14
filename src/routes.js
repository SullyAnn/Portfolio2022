// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
import VueRouter from 'vue-router';
import AboutComponent from './components/AboutComponent.vue'
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const About =  AboutComponent;


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

export default new VueRouter({
  routes, 
  mode: 'history'
});
