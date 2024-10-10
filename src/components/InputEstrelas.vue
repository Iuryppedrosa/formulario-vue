<template>
  <div>
    <i
      v-for="estrela in estrelas"
      :key="estrela.id"
      :class="estrela.estilo"
      @click="marcarAvalicao(estrela.id + 1)"
    ></i>
  </div>
</template>
<script>
export default {
  name: 'InputEstrelas',
  props: {
    numeroEstrelas: {
      type: Number,
      required: true,
      default: 5
    }
  },
  data: () => {
    return {
      estrelas: [],
      avaliacao: 0
    }
  },
  created() {
    this.iniciarEstrelas()
  },
  methods: {
    iniciarEstrelas() {
      for (let i = 0; i < this.numeroEstrelas; i++) {
        this.estrelas[i] = {
          id: i,
          estilo: 'bi-star estrela'
        }
      }
    },
    marcarAvalicao(e) {
      this.iniciarEstrelas()
      this.avaliacao = e
      for (let i = 0; i < this.avaliacao; i++) {
        this.estrelas[i].estilo = 'bi-star-fill estrela'
      }
      this.$emit('avaliar', this.avaliacao)
    }
  }
}
</script>
<style>
.estrela {
  font-size: 2rem;
  color: #f8d053;
  margin-left: 1px;
  margin-right: 1px;
}
</style>
