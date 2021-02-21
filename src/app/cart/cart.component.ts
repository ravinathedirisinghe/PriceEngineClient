import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CartItems} from './cart-items';
import {PriceRequest} from './price-request';
import {CartService} from './cart.service';
import {PriceListResponse} from './price-list-response';
import {CalculationResponse} from './calculation-response';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-cart-index',
    templateUrl: './cart-index.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    @Input() cartItems1: CartItems;
    @Input() cartItems2: CartItems;
    @Input() priceRequest: PriceRequest;
    priceListResponse: PriceListResponse;
    calculationResponse: CalculationResponse;

    @ViewChild('cartForm') cartForm: NgForm;

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
        if (this.priceRequest == null) {
            this.priceRequest = new PriceRequest();
        }
        if (this.cartItems1 == null) {
            this.cartItems1 = new CartItems();
        }
        if (this.cartItems2 == null) {
            this.cartItems2 = new CartItems();
        }
        if (this.priceListResponse == null) {
            this.priceListResponse = new PriceListResponse();
        }
        if (this.calculationResponse == null) {
            this.calculationResponse = new CalculationResponse();
        }
    }

    getPrices() {
        this.cartService.getPrices().subscribe(result => {
            this.priceListResponse = result;
        });
    }

    calculatePrices(): void {
        const cartItems: any = [];
        this.priceRequest.cartItems = cartItems;
        this.cartItems1.productName = 'Penguin-ears'
        this.cartItems2.productName = 'Horseshoe'
        this.priceRequest.cartItems.push(this.cartItems1);
        this.priceRequest.cartItems.push(this.cartItems2);
        this.priceRequest.customerId = '1';
        // newUser.username = this.form.value.email;

        this.cartService.calculatePrices(this.priceRequest).subscribe(result => {
            this.calculationResponse = result;
        });
    }
}