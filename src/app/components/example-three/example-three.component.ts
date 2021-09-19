import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/service/api-call.service';

@Component({
  selector: 'app-example-three',
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.css']
})
export class ExampleThreeComponent implements OnInit {


  public thirdData: string = '';
  public errorMessage! :string;

  constructor(private apiCallService: ApiCallService) { }

  ngOnInit(): void {

  }

  getThirdData() {
    this.apiCallService.fetchDataThree()
      .subscribe(res => {
        this.thirdData = JSON.stringify(res);
      },
      err => {
        this.errorMessage = err.message
      }

      );
  }
}
