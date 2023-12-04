import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  collectionCardData = [
    {
      title: 'Laptop',
      imgUrl:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE1fHxsYXB0b3AlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Accessories',
      imgUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Cameras',
      imgUrl:
        'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D',
    },
  ];
}
