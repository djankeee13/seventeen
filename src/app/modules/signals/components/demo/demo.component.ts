import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  quantity = signal(1);
  qtyAvailable = signal([1,2,3,4,5]);
  
  selectedVehlice = signal<Vehlice>({id: 1, name: 'AT', price: 10000})
  vehlices = signal<Vehlice[]>([]);

  exPrice = computed(() => this.selectedVehlice().price * this.quantity());

  constructor(){
    console.log("signals-demo",this.quantity());

  }

  qtyEff = effect(() => console.log("latest quantity:", this.quantity()));

  onQuantitySelected(qty: number){
    this.quantity.set(qty);
  }

  updateQuantity(){
    this.quantity.update(qty => qty * 2);
  }

  updateCarPrice(){
    console.log("click")
    this.selectedVehlice.mutate(v => v.price = v.price + (v.price *.2));
  }
}

export interface Vehlice {
  id: number,
  name: string,
  price: number
}