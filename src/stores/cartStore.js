import { defineStore } from "pinia";
import { products } from "../data/products.js"
export const useCartStore = defineStore("cart", {
    state: () => ({
        products,
        cart: []
    }),
    actions: {
        addToCart(product) {
            console.log("Product added to cart:", product);
            this.cart.push(product)
        },
        removeFromCart(productId) {
            this.cart = this.cart.filter(item => item.id !== productId);
        }
    },
    persist: {
        storage: localStorage
    }
}) 