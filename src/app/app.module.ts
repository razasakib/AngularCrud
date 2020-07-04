import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ManageProductComponent } from './crud/manage-product/manage-product.component';
import { UxProductsService } from './appService/ux-products.service';
import { HttpClientModule } from '@angular/common/http';
import { ManageUserComponent } from './crud2/manage-user/manage-user.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ManageProductComponent,
    ManageUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UxProductsService],
  bootstrap: [ManageUserComponent]
})
export class AppModule { }
