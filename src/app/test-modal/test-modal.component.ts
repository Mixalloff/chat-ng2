import { ModalDialogService } from './../+modal-dialog/modal-dialog.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'chat-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {
  @ViewChild(TestModalComponent, {read: ViewContainerRef}) modalRef;

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
