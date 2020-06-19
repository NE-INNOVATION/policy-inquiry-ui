import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolicyInquiryComponent } from './features/policy-inquiry/policy-inquiry.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PolicyInquiryService } from './core/services/policy-inquiry-service';
import { HttpHandler, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PolicyInquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [PolicyInquiryService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
