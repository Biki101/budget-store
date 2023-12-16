import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ShopDataService } from 'src/app/services/shop-data.service';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.scss'],
})
export class TopSellingComponent {
  activeCategory = 'cameras';

  @ViewChild('carousel', { static: true }) caraousel!: TemplateRef<any>;

  data: any = [];

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

  constructor(private dataService: ShopDataService) {
    this.data = dataService.data;
  }
}
