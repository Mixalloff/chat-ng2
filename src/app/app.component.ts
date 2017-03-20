import { ModalDialogService } from './+modal-dialog/modal-dialog.service';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('app', {read: ViewContainerRef}) containerRef;
  title = 'app works!';

  constructor(private modalDialogService: ModalDialogService){}

  ngAfterViewInit() {
    this.modalDialogService.init({ container: this.containerRef });
  }
}
