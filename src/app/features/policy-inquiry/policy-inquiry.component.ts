import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PolicyInquiryService } from 'src/app/core/services/policy-inquiry-service';
import { PolicyInquiry, PolicyInquiryDt } from 'src/app/core/models/policy-inquiry-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { MatRadioChange } from '@angular/material/radio';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-policy-inquiry',
  templateUrl: './policy-inquiry.component.html',
  styleUrls: ['./policy-inquiry.component.scss']
})
export class PolicyInquiryComponent implements OnInit,AfterViewInit {

  policyInquiryDetails : PolicyInquiry
  searchBy:string="0";
  isSearchByPolicy:boolean=true;
  isExpandAll:boolean=false;
  policyInquiryByName : PolicyInquiryDt[]= [];

  @ViewChild('myaccordion', {static : false}) accordion: NgbAccordion;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['policyNumber', 'firstName', 'dob','Covbi','covcomp', 'driverName','licenseNumber', 'vehicleYear'];
  dataSource = new MatTableDataSource<PolicyInquiryDt>(this.policyInquiryByName);


  constructor(private policyInquiryService:PolicyInquiryService) {
      
   }

  ngOnInit(): void {
   
  }

  radioChange(event: MatRadioChange){
    if(this.searchBy === "1"){
      this.isSearchByPolicy = false;
      return;
    }

    this.isSearchByPolicy = true;
  }

  form: FormGroup = new FormGroup({
    RadioFormControlSearchBy: new FormControl('',Validators.required),
    policyNumber: new FormControl(''),
    lastName: new FormControl(''),
    firstName: new FormControl('')
  });

  search() {
    if (this.form.valid) {
      let policyNumber = this.form.get("policyNumber").value
      if(policyNumber === ""){
        alert("Please enter valid Policy Number");
        return;
      }

      this.policyInquiryService.getPolicyInquiryData(policyNumber).subscribe(policyInquiry => {
        this.policyInquiryDetails = policyInquiry;
        this.isExpandAll = true;
        return;
      });

      this.isExpandAll = false;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
    searchByName() {
      if (this.form.valid) {
        let firstName = this.form.get("firstName").value
        let lastName = this.form.get("lastName").value
        
        this.policyInquiryService.getPolicyInquiryDataByName(firstName,lastName).subscribe(policyInquiry => {
         
           if(policyInquiry.length <= 0){
             alert("No data found");
             return;
           }
           else{
            this.policyInquiryByName = [];
           }

           policyInquiry.map(item => {
            var policyInquiryDt:PolicyInquiryDt = {
              Covbi : item.coverages[0].bi,
              covcomp : item.coverages[0].comp,
              dob : item.customer.dob,
              driverName : item.drivers[0].name,
              policyNumber : item.policyNumber,
              firstName : item.customer.firstName,
              licenseNumber : item.drivers[0].licenseNum,
              vehicleYear : item.vehicles[0].year
            }

            this.policyInquiryByName.push(policyInquiryDt);

          });

          this.dataSource = new MatTableDataSource<PolicyInquiryDt>(this.policyInquiryByName);
          this.dataSource.paginator = this.paginator;

          return;
        });
  
        this.isExpandAll = false;
      }
  }

}
