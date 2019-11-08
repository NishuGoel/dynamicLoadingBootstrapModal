import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { RenderInfoModalComponent } from './render-info-modal/render-info-modal.component';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InfoModalComponent,
    RenderInfoModalComponent
  ],
  imports: [
    BrowserModule, CommonModule,
    AppRoutingModule, FormsModule, NgbModalModule
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent],
  entryComponents: [InfoModalComponent]
})
export class AppModule { }
