<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">购物车</router-link> |
      <router-link to="/new">new</router-link>| -->
      
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 10px;
} */
html,body,#app{
  height: 100%;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
