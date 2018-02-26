import { Injectable } from '@angular/core'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'

@Injectable()
export class OrderService {
    constructor(private shoppingCartService: ShoppingCartService) {}

    cartItems() {
        return this.shoppingCartService.items
    }

    icreaseQty(item: CartItem) {
        this.shoppingCartService.increaseQty(item)
    }
}
