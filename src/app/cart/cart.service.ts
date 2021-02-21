import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {PriceRequest} from './price-request';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PriceListResponse} from './price-list-response';
import {CalculationResponse} from './calculation-response';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private http: HttpClient,
                private router: Router) {
    }

    calculatePrices(priceRequest: PriceRequest): Observable<CalculationResponse> {
        return this.http.post('localhost:8080/api' + '/getPricing/calculate', priceRequest, {headers: null})
            .pipe(map(response => response as CalculationResponse));
    }

    getPrices(): Observable<PriceListResponse> {
        return this.http.get('localhost:8080/api' + '/getPricing/calculate', {headers: null})
            .pipe(map(response => response as PriceListResponse));
    }

}
