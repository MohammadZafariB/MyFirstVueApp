import {products} from "@/data/products"
import { defineStore } from 'pinia'
export const useProductsStore = defineStore('products', {
    state: () => ({
      products

    }),

  })