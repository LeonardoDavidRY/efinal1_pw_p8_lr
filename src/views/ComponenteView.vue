<template>
  <componente-image>
    <div>
        <h2>{{Puntaje}}</h2>
      <h2>{{intentos}}</h2>
    </div>
  </componente-image>
</template>

<script>
import componenteImage from "@/components/ComponenteImagen.vue";
export default {
  components: {
    componenteImage,
  },
  data() {
    return {
      imagenes: [
        {
          imagenPokemon: "https://placehold.co/200x200/000000/000000.png",
          Texto: "XXXXXXXXXX",
        },
        {
          imagenPokemon: "https://placehold.co/200x200/000000/000000.png",
          Texto: "XXXXXXXXXX",
        },
        {
          imagenPokemon: "https://placehold.co/200x200/000000/000000.png",
          Texto: "XXXXXXXXXX",
        },
      ],
      intentos: 0,
      puntaje: 0,
      mostrarMensaje: false,
      mensajes: {
        mensaje1:null,
        mensaje2:null,
      },
      colorText:null,
    };
  },
  methods:{
    empezarJuego() {
        intentos++;
        puntaje=0;
        

    },
    reiniciarJuego(){
        puntaje=0;
        

    }
  }
};
</script>

<style>
</style>