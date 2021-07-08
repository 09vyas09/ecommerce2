import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private productList=[
    {
      id:1,
      name:"Product 1",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:"https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_960_720.jpg",
      stars:"50"
    },
    {
      id:2,
      name:"Product 2",
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbD1YZXhnKA83ZuiyyNpV5GNSiJUZqH-qa6vubUXhCeZzqrgcrqAJUCauCdQ920hbjq7A&usqp=CAU",
      stars:"70"
    },
  ]

  getProductList(): any{
    return this.productList;
  }

  getProductsDetails(id: number):{} {
    return this.productList.find(element => element.id === id)!;
  }

}
