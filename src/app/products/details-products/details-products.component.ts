import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.scss']
})
export class DetailsProductsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: ProductsService, private router: Router) { }
  id: number = 0;

  productDescription: any = null;


  ngOnInit(): void {

    //const temp: string = this.activatedRoute.snapshot.paramMap.get('id');
   // this.id = +this.activatedRoute.snapshot.paramMap.get('id');

    // this.activatedRoute.params.subscribe(params=>
    //   {
    //     this.id=+params['id'];
    //     console.log(this.id);
    //   })

   // console.log(this.id);
    this.id=JSON.parse(this.activatedRoute.snapshot.paramMap.get('id') || '{}');
    //console.log(this.id);
    this.getProductDescription(this.id);

    //console.log(this.activatedRoute.snapshot.paramMap.get('id'));

    // this.activatedRoute.params.subscribe(params=>
    //   {
    //     this.id=+params['id'];
    //     console.log(typeof this.id);
    //     console.log(typeof params['id']);
    //   })

  }
  getProductDescription(id: number) {
    this.productDescription = this.service.getProductsDetails(id);
    //console.log(this.productDescription)

  }

  goBack(): void { 
    this.router.navigate(['']); 
  }


}
