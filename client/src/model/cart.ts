import { computed, ref } from "vue";
import type { Product } from "./products";

const cart = ref([] as CartItem[]);

export function useCart() {
    return cart;
}

export interface CartItem {
    productId: number;
    product: Product;
    quantity: number;
}

export function addToCart(product: Product) {
    const item = cart.value.find((p) => p.productId == product.id);
    if (item) {
        item.quantity++;
    } else {
        cart.value.push({
            productId: product.id,
            product,
            quantity: 1,
        });
    }
}

export function removeFromCart(index: number) {
        cart.value.splice(index, 1);
}

export const quantity = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0));
export const total = computed(()=> cart.value.reduce((total, item) => total + item.product.price * item.quantity, 0))
