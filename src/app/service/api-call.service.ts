import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  public resultTwo = new Subject<string>();
  public errorTwo = new Subject<string>();
  public baseUrl: string = "https://jsonplaceholder.typicode.com/tods/";
  constructor(private http: HttpClient , private toastr: ToastrService) { }


  fetchDataOne() {
    return this.http.get(this.baseUrl + '1');
  }

  fetchDataTwo() {
     this.http.get(this.baseUrl + '2')
     .subscribe( (res) => {
      let data = JSON.stringify(res);
       this.resultTwo.next(data)
     },
     err => {
      this.errorTwo.next(err.message);
    });
  }

  fetchDataThree() {
    return this.http.get(this.baseUrl + '3');
  }

}
