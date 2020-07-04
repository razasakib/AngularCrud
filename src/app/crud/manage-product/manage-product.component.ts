import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UxProductsService } from 'src/app/appService/ux-products.service';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  constructor(private _uxProducts:UxProductsService) { }
  dataTitle=this._uxProducts.fetchDataTitle();
  fetchSpinner=false;

  //edit
  @ViewChild('id') id:ElementRef;
  @ViewChild('name') name:ElementRef;
  @ViewChild('price') price:ElementRef;
 
  editMode:boolean=false;
  editIndex:number;
  



  products=[
   /* {id:'p1',name:'Laptop',price:45000},
    {id:'p2',name:'Mobile',price:8500},
    {id:'p3',name:'shoes',price:800},
    {id:'p4',name:'Tv',price:7500},*/
  ]



  ngOnInit(): void {
    this.onFetchProduct();
  }
  //add data
  onAddProduct(id,name,price){
    if(this.editMode){
        this.products[this.editIndex]={
          id:id.value,
          name:name.value,
          price:price.value
        }
        //button change from update to add
         this.editMode=false;
         //input blank
         this.id.nativeElement.value=[''];
         this.name.nativeElement.value=[''];
         this.price.nativeElement.value=[''];
    }else{
      
      this.products.push({
         id:id.value,
         name:name.value,
         price:price.value
      })
    }
    //save to server 
    this.onSaveProduct();
  }

  //save products into server
  onSaveProduct(){
    this._uxProducts.saveProducts(this.products).subscribe(
    (res)=>console.log(res),
    (error)=>console.log(error)
  )
  }
  //delete
  onDeleteProduct(id:number){
    if(confirm('Do you want to delete?')){
      this.products.splice(id,1);
      this.onSaveProduct();
    }
  }

  //fetch data
  onFetchProduct(){
    this.fetchSpinner= true;
    this._uxProducts.fetchProducts().subscribe(
     // (response)=>console.log(response),
     (response)=>{
       const data=JSON.stringify(response);
       console.log(data);
       this.products=JSON.parse(data)
       this.fetchSpinner=false;
     }
     ,  (error)=>console.log(error)
    )
  }


  //edit
  onEditProduct(index:number){
    this.editMode=true;
    this.editIndex=index;

       //  console.log(this.products[index]);
         this.id.nativeElement.value=this.products[index].id;
         this.name.nativeElement.value=this.products[index].name;
         this.price.nativeElement.value=this.products[index].price;

  }
}
