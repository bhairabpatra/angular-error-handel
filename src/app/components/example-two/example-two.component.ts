import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/service/api-call.service';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css']
})
export class ExampleTwoComponent implements OnInit {


  public secondData: string = '';
  public errorMessage !: string;
  constructor(private apiCallService: ApiCallService) { }

  ngOnInit(): void {

    this.apiCallService.resultTwo
    .subscribe((res) => {
      this.secondData = res
    });

    this.apiCallService.errorTwo
    .subscribe((res) =>{
      this.errorMessage = res
    })

  }

  getSecondData() {
      this.apiCallService.fetchDataTwo()
  }

}
