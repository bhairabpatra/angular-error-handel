import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/service/api-call.service';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.css']
})
export class ExampleOneComponent implements OnInit {

  public firstData: string = '';
  public errorMessage!: string;
  constructor(private apiCallService: ApiCallService) { }

  ngOnInit(): void {

  }

  getFirstData() {
    this.apiCallService.fetchDataOne()
      .subscribe(res => {
        this.firstData = JSON.stringify(res);
      },
      err => {
        this.errorMessage = err.message;
      });


  }
}
