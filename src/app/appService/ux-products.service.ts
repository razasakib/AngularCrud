import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UxProductsService {

  url='https://uxproducts-be9fc.firebaseio.com/products.json';

  //custom header
  private headers=new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }
//save data
  saveProducts(products:any[]){
    // return this.http.post(this.url,products);
  return this.http.put(this.url,products,{headers:this.headers});
  }

  //fetch data
  fetchProducts(){
  return this.http.get (this.url);

  }

  //fetch dataTitle
  fetchDataTitle(){
    return this.http.get ('https://uxproducts-be9fc.firebaseio.com/dataTitle.json');
  
    }
} 