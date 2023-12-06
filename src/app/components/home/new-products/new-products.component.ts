import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewProductsComponent {
  activeCategory = 'laptops';

  sildeData = [
    {
      imgUrl:
        'https://images.unsplash.com/photo-1555375771-14b2a63968a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnQlMjBwaG9uZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnQlMjBwaG9uZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1514464750060-00e6e34c8b8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNtYXJ0JTIwcGhvbmVzfGVufDB8fDB8fHww',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1618658848098-354b39109799?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHNtYXJ0JTIwcGhvbmVzfGVufDB8fDB8fHww',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1555375771-14b2a63968a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnQlMjBwaG9uZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1510166420340-24950d8c7027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHNtYXJ0JTIwcGhvbmVzfGVufDB8fDB8fHww',
    },
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
}
