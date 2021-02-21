import {CartItems} from './cart-items';

export class PriceRequest {
    customerId: string;
    cartItems: Array<CartItems> = [];
}
