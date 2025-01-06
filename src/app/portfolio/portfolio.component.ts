import { Component } from '@angular/core';

interface Iproduct{

  src:string;
  alt:string;
}



@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  productList:Iproduct[] = [
    
  { src: '/poert1.png', alt: 'Home Image' },
  { src: '/port2.png', alt: 'Piece of Cake Image' },
  { src: '/port3.png', alt: 'Another Image' },
  { src: '/poert1.png', alt: 'Home Image' },
  { src: '/port2.png', alt: 'Piece of Cake Image' },
  { src: '/port3.png', alt: 'Another Image' },
 
  ]

  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  hideBigLayer(event: MouseEvent) {
    this.isclicked = false; 
  }



isclicked:boolean =false;
productinfo:Iproduct={}   as Iproduct 
  itemInfo(imgInfo:any):void{
    this.isclicked = true;
    console.log(imgInfo)
    this.productinfo=imgInfo;
    
  }
}






