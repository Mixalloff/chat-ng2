import { ModalDialogService } from './modal-dialog.service';
import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
    selector: 'vbc-modal-dialog',
    templateUrl: './modal-dialog.component.html',
    styleUrls: [ './modal-dialog.component.css' ],
})
export class ModalDialogComponent implements OnInit {
  @ViewChild(ModalDialogComponent, {read: ViewContainerRef}) modalRef;

  constructor(protected modalDialogService: ModalDialogService) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalDialogService.dismiss();
  }

  close(result) {
    this.modalDialogService.close(result);
  }
}
