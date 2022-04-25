import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginserviceService } from '../services/loginservice.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: any;
  public id:number=0;
  productname: string = "";
 productsku: string = "";
  productprice: string = "";
  editproductid:number;
jwtToken:string;
  display_edit_model="none";
  display_add_model="none";
  
 
  constructor(public  _productservice :ProductService,
    private _loginComponent:LoginComponent,
    private _router:Router,
   
    ) { 

      
   this. _productservice.getallproducts().subscribe(
    //read data and assign to public variable students
    data => { this.products = data
    // console.log(this.products);
    },
    err => console.error(err),
    // () => console.log(this.products)
);
    }

  ngOnInit(): void {

     if(sessionStorage.getItem('jwttoken')==undefined)
     {
       this._router.navigateByUrl('/login'); 
     }
}
  

  openeditmodel(editproductid:number)
  {

   
    this.editproductid=editproductid;

    for (let product of this.products) {

     
      if(editproductid==product.productId)
      {
     
       this.productname=product.name;
       this.productsku=product.sku;
       this.productprice=product.price;
      
      }
    }


    
    this.display_add_model="none";
   
    this.display_edit_model="block";
  }
  closeeditmodel()
  {
    this.display_edit_model="none";
  }


  openaddmodel()
  {this.display_edit_model="none";

    this.display_add_model="block";
  }
  closeaddmodel()
  {
    this.display_add_model="none";
  }

  deleteproduct(id:number)
  {

    this. _productservice.deleteproduct(id);
    window.location.reload();
  }


  addproduct()
  {
  
    this. _productservice.addproduct(this.productname,this.productsku,this.productprice);
    window.location.reload(); 
  }
  updateproduct()
  {

    this. _productservice.editproduct(this.editproductid,this.productname,this.productsku,this.productprice);
    window.location.reload(); 
  }


}
