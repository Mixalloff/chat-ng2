import { ModalDialogComponent } from './../+modal-dialog/modal-dialog.component';
import { ModalDialogService } from './../+modal-dialog/modal-dialog.service';
import { OnInit, Component } from '@angular/core';
import { ExtendedComponent } from "app/extended-modal/extended-component.decorator";


// @ExtendedComponent({
//   // selector: 'chat-extended-modal',
//   // parent: TestModalComponent

//   selector: 'chat-extended-modal',
//   templateUrl: './extended-modal.component.html',
//   styleUrls: ['./extended-modal.component.css'] // need add base modal style
// })


@Component({
// @ExtendedComponent({
  selector: 'chat-extended-modal',
  templateUrl: './extended-modal.component.html',
  styleUrls: [ './extended-modal.component.css' ]
})
export class ExtendedModalComponent extends ModalDialogComponent {

  constructor(modalDialogService: ModalDialogService) {
    super(modalDialogService);

    console.log(this)
   }

}