import { defineStore } from 'pinia'
export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart: [] as any,
    }),
    actions: {
        // 加入購物車
        createCartData(createCartData: any) {
            this.cart.push({ ...createCartData })
        },
        // 刪除購物車商品
        removeCartItem(id: number) {
            this.cart = this.cart.filter((item:any) => item.id !== id);
        },
    },
    getters: {
        getCartList: (state) => state.cart,
    },
})