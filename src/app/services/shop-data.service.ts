import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShopDataService {
  data = [
    {
      name: 'smartphones',
      data: [
        {
          category: 'Smart Phone',
          name: 'Mobile 21',
          price: 1000,
          imgUrl:
            'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          category: 'Smart Phone',
          name: 'Mobile 22',
          price: 2000,
          imgUrl:
            'https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnQlMjBwaG9uZXN8ZW58MHx8MHx8fDA%3D',
        },
        {
          category: 'Smart Phone',
          name: 'Mobile 23',
          price: 3000,
          imgUrl:
            'https://images.unsplash.com/photo-1514464750060-00e6e34c8b8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNtYXJ0JTIwcGhvbmVzfGVufDB8fDB8fHww',
        },
        {
          category: 'Smart Phone',
          name: 'Mobile 24',
          price: 35000,
          imgUrl:
            'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          category: 'Smart Phone',
          name: 'Mobile 25',
          price: 25000,
          imgUrl:
            'https://images.unsplash.com/photo-1555375771-14b2a63968a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnQlMjBwaG9uZXN8ZW58MHx8MHx8fDA%3D',
        },
        {
          category: 'Smart Phone',
          name: 'Mobile 26',
          price: 3000,
          imgUrl:
            'https://images.unsplash.com/photo-1510166420340-24950d8c7027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHNtYXJ0JTIwcGhvbmVzfGVufDB8fDB8fHww',
        },
      ],
    },
    {
      name: 'laptops',
      data: [
        {
          category: 'Laptop',
          name: 'Laptop 6',
          price: 45000,
          imgUrl:
            'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww',
        },
        {
          category: 'Laptop',
          name: 'Laptop 7',
          price: 60420,
          imgUrl:
            'https://plus.unsplash.com/premium_photo-1670274609267-202ec99f8620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          category: 'Laptop',
          name: 'Laptop 8',
          price: 2440,
          imgUrl:
            'https://images.unsplash.com/photo-1526570207772-784d36084510?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          category: 'Laptop',
          name: 'Laptop 9',
          price: 3560,
          imgUrl:
            'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          category: 'Laptop',
          name: 'Laptop 10',
          price: 66000,
          imgUrl:
            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D',
        },
      ],
    },
    {
      name: 'cameras',
      data: [
        {
          category: 'Camera',
          name: 'Camera 25',
          price: 2500,
          imgUrl:
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww',
        },
        {
          category: 'Camera',
          name: 'Camera 26',
          price: 3500,
          imgUrl:
            'https://images.unsplash.com/photo-1552168324-d612d77725e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhfGVufDB8fDB8fHww',
        },
        {
          category: 'Camera',
          name: 'Camera 27',
          price: 140,
          imgUrl:
            'https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          category: 'Camera',
          name: 'Camera 28',
          price: 6650,
          imgUrl:
            'https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          category: 'Camera',
          name: 'Camera 29',
          price: 5890,
          imgUrl:
            'https://images.unsplash.com/photo-1614108830714-74f0e4c8cd7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          category: 'Camera',
          name: 'Camera 30',
          price: 7840,
          imgUrl:
            'https://images.unsplash.com/photo-1506770797561-3b22048d1a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxjYW1lcmF8ZW58MHx8MHx8fDA%3D',
        },
      ],
    },
    {
      name: 'accessories',
      data: [
        {
          category: 'Accessories',
          name: 'Accessory 1',
          price: 45660,
          imgUrl:
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          category: 'Accessories',
          name: 'Accessory 2',
          price: 2500,
          imgUrl:
            'https://plus.unsplash.com/premium_photo-1687892166031-828cc6574c15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc29sZXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          category: 'Accessories',
          name: 'Accessory 3',
          price: 6500,
          imgUrl:
            'https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D',
        },
        {
          category: 'Accessories',
          name: 'Accessory 4',
          price: 8900,
          imgUrl:
            'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc29sZXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          category: 'Accessories',
          name: 'Accessory 5',
          price: 9000,
          imgUrl:
            'https://plus.unsplash.com/premium_photo-1679864782395-cc5697bf614f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D',
        },
      ],
    },
  ];
  constructor() {}
}
