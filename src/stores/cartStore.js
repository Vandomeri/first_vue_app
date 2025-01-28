import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore('cart', () => {


  const cart = ref([])
  const favs = ref([])

  const cartCount = computed(() => cart.value.length)

  function addToCart(product) {
    const itemIndex = cart.value.findIndex((item) => item.id == product.id)
    if (itemIndex === -1) {
      cart.value.push({
        ...product,
        quantity: 1
      })
      return
    }
    cart.value[itemIndex].quantity++
  }


  return { cart, favs, cartCount, addToCart }
})
