import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Posts } from '../../models/Posts';
import { DialogService } from '../dialog.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  title?: string;
  body?: string;
  @Input() input_id: any;
  @Output() output_Post: EventEmitter<Posts> = new EventEmitter();

  constructor(public dialog: MatDialog, protected _serviceDialog: DialogService) { }

  ngOnInit() {

  }

  openDialog(): void {
    console.log(this.input_id);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { title: this.title, body: this.body, userId: this.input_id },
    }

    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });

    // dialogRef.disableClose = true;//disable default close operation

    dialogRef.beforeClosed().subscribe((result) => {
      console.log("ven", result);
      if (result) {

        console.log("entrooooo");

        this.output_Post.emit(result);


      }
    });
  }

}

@Component({
  selector: 'dialog-overview-dialog',
  templateUrl: './dialog-overview-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Posts,
    protected _serviceDialog: DialogService
  ) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  guardarPost() {
    console.log(this.data);

    this._serviceDialog.createPosts(this.data).subscribe((result) => {
      console.log(result);


      this.dialogRef.close(result);
    });


  }

}
