import { Component, OnInit } from '@angular/core';
import { PolicyInquiryService } from 'src/app/core/services/policy-inquiry-service';
import { PolicyInquiry } from 'src/app/core/models/policy-inquiry-model';

@Component({
  selector: 'app-policy-inquiry',
  templateUrl: './policy-inquiry.component.html',
  styleUrls: ['./policy-inquiry.component.scss']
})
export class PolicyInquiryComponent implements OnInit {

  policyInquiryDetails : PolicyInquiry

  constructor(private policyInquiryService:PolicyInquiryService) {
      
   }

  ngOnInit(): void {
   
  }

  onClickSearch(policyNumber:string) {
         this.policyInquiryService.getPolicyInquiryData(policyNumber).subscribe(policyInquiry => {
      this.policyInquiryDetails = policyInquiry;
    });;
  }

}
