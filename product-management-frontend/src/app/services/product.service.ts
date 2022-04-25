import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { LoginserviceService } from './loginservice.service';
import { ProductComponent } from '../product/product.component';
@Injectable({
    providedIn: 'root'
})
export class ProductService {


    constructor(private http: HttpClient,
        private _loginComponent: LoginComponent,
        private _loginService: LoginserviceService) {

    }

    getallproducts() {

        const httpOptions =
            new HttpHeaders({

                'Authorization': 'Bearer ' + sessionStorage.getItem('jwttoken'),
            })

     
        return this.http.get('http://localhost:8080/getallproduct', { headers: httpOptions });
    }



    addproduct(name: string, sku: string, price: string) {
        const httpOptions =
            new HttpHeaders({

                'Authorization': 'Bearer ' + sessionStorage.getItem('jwttoken'),
            })
        this.http.post('http://localhost:8080/addproduct', { name, sku, price }, { headers: httpOptions })
            .subscribe((responseData) => {
               // console.log(responseData);
            });
    }


    editproduct(productId: number, name: string, sku: string, price: string) {
        const httpOptions =
            new HttpHeaders({

                'Authorization': 'Bearer ' + sessionStorage.getItem('jwttoken'),
            })
        this.http.post('http://localhost:8080/editproduct', { productId, name, sku, price }, { headers: httpOptions })
            .subscribe((responseData) => {
                console.log(responseData);
            });

    }

    deleteproduct(productId: number) {
        const httpOptions =
            new HttpHeaders({

                'Authorization': 'Bearer ' + sessionStorage.getItem('jwttoken'),
            })
        this.http.delete('http://localhost:8080/deleteproduct/' + encodeURIComponent(productId), { headers: httpOptions })
            .subscribe((responseData) => {
              //  console.log(responseData);
            });
    }
}
