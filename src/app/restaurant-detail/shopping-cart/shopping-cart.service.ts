import { Injectable } from '@angular/core'

import { CartItem } from './cart-item.model'
import { MenuItem } from '../menu-item/menu-item.model'

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = []

    constructor() {}

    addItem(item: MenuItem) {
        let foundItem = this.items.find(cItem => cItem.menuItem.id === item.id)

        if (foundItem) {
            foundItem.quantity++
        } else {
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    clear() {
        this.items = []
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, current) => prev + current, 0)
    }

    increaseQty(item: CartItem): any {
        throw new Error('Method not implemented.')
    }
}
