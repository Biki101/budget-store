import {
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ShopDataService } from 'src/app/services/shop-data.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewProductsComponent {
  activeCategory = 'laptops';

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
    this.data = this.dataService.data;
  }
}
