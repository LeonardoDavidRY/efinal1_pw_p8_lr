<template>
  <componente-view></componente-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ComponenteView from "@/components/ComponenteImagen.vue";

export default {
  name: "App",
  components: {
    ComponenteView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
