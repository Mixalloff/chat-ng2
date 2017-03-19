import { ModalDialogModule } from './+modal-dialog/modal-dialog.module';
import { ExtendedComponent } from 'app/extended-modal/extended-component.decorator';
import { ModalDialogService } from './+modal-dialog/modal-dialog.service';
import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { ExtendedModalComponent } from './extended-modal/extended-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    TestModalComponent,
    ExtendedModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    appRoutes,
    ModalDialogModule
  ],
  entryComponents: [TestModalComponent, ExtendedModalComponent],
  providers: [ModalDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
