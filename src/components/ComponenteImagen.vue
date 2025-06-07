<template>
  <div class="container">
    <div>
      
    </div>
    <div class="button">
        <button> Jugar </button>

    </div>

  </div>
</template>

<script>
export default {
  props: {
    imagenPokemon: {
      type: String,
      require:true,
    },
    texto: {
      type: String,
      require:true,
    },
  },
  data() {
    return {
    }
  },

};
</script>

<style>
.container{
    justify-items: center;
    align-content: center;

}
button{

    margin: 10px;
    height: 40px;
    width: 100px;
    border: 5px solid black;
    font-family: 'Courier New', Courier, monospace;

}
</style>