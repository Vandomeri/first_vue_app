import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {


  const cart = ref([])
  const favs = ref([])



  return { cart, favs }
})
