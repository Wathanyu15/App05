import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail: NavController) {}

  items=[
    {
      id:1,
      name:'Product A',
      price: 200,
      detail:'this is a product A',
      imageURL: 'https://media.cnn.com/api/v1/images/stellar/prod/asus-rog-zephyrus-g14-2024-product-card-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill',
    },
    {
      id:2,
      name:'Product B',
      price: 250,
      detail:'this is a product B',
      imageURL: 'https://helios-i.mashable.com/imagery/articles/05djrP5PjtVB7CcMtvrTOAP/images-1.fill.size_2000x1125.v1723100793.jpg',
    },
    {
      id:3,
      name:'Product C',
      price: 300,
      detail:'this is a product C',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5MSi5z8Yb3cN964nrSEhFTVmdEliG-Kr_w&s',
    },
    {
      id:4,
      name:'Product D',
      price: 350,
      detail:'this is a product D',
      imageURL: 'https://media.cnn.com/api/v1/images/stellar/prod/surface-laptop-16-9.jpg?c=16x9&q=h_720,w_1280,c_fill',
    }
  ]

  gotoDetail(i:any) {
    this.detail.navigateForward('/detail',{state:{i}})
  }
}
