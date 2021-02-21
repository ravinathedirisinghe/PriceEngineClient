import {CartComponent} from './cart.component';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

const routes = [
    {
        path: 'cart-index',
        component: CartComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    providers: []
})
export class CartRoutingModule {
}
