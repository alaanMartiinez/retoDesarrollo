import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    public constructor(
        public dialog: MatDialog
    ) { }


    public openModal(component: any, dataValue: any, widthP: string, heightP?: string): Observable<any> {
        const dialogRef = this.dialog.open(component, {
            data: dataValue,
            width: widthP,
            height: heightP,
            panelClass: 'borderModal',
            disableClose: true
        });
        return dialogRef.afterClosed();
    }

    public closeModal(): void {
        this.dialog.closeAll();
    }
}
