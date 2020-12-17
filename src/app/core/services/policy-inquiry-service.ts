import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { PolicyInquiry } from '../models/policy-inquiry-model';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable()
export class PolicyInquiryService {

    constructor(private http: HttpClient) {

    }

    public getPolicyInquiryData(policyNumber: string) : Observable<PolicyInquiry> {
        return this.http.get<PolicyInquiry>(environment.gatewayUrl + "api/policy/policyinquiry/getdetails/" + policyNumber)
        .pipe(
            retry(1),
            catchError(this.handleError)
          );
      }

      public getPolicyInquiryDataByName(firstName: string,lastName: string) : Observable<PolicyInquiry[]> {
        return this.http.post<PolicyInquiry[]>(environment.gatewayUrl + "api/policy/policyinquiry/GetDetailsWithName",{"firstName" : firstName,"lastName":lastName})
        .pipe(
            retry(1),
            catchError(this.handleError)
          );
      }

      handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      }
}