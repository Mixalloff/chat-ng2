import { ModalDialogComponent } from './modal-dialog.component';
import { ModalDialogService } from './modal-dialog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ModalDialogComponent],
    entryComponents: [ModalDialogComponent],
    exports: [ModalDialogComponent]
})
export class ModalDialogModule {
}
