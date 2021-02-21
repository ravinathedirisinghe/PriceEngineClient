import {Component, Input, OnInit} from '@angular/core';
import {CartItems} from './cart-items';
import {PriceRequest} from './price-request';
import {CartService} from './cart.service';
import {PriceListResponse} from './price-list-response';
import {CalculationResponse} from './calculation-response';

@Component({
    selector: 'cart-index',
    templateUrl: './cart-index.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    @Input() cartItems: CartItems;
    @Input() priceRequest: PriceRequest;
    priceListResponse: PriceListResponse;
    calculationResponse: CalculationResponse;

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
    }

    getPrices() {
        this.cartService.getPrices().subscribe(result => {
            this.priceListResponse = result;
        });
    }

    calculatePrices(): void {
        const priceRequest = new PriceRequest();
        // newUser.username = this.form.value.email;

        this.cartService.calculatePrices(priceRequest).subscribe(result => {
            this.calculationResponse = result;
        });
    }
}
