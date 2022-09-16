import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { InicioService } from '../inicio.service';
import { Users } from '../../models/Users';
import { Posts } from '../../models/Posts';
import { DialogService } from '../../dialog/dialog.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class InicioComponent implements OnInit {
  dataUsers: Users[] = [];
  dataPosts: Posts[] = [];
  dataSource: any[] = [];
  columnsToDisplay = ['name', 'username', 'address', 'email', 'phone'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Users | null | undefined;
  title = 'ejemplo';
  panelOpenState = false;

  constructor(
    protected _serviceInicio: InicioService,
    protected _serviceDialog: DialogService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.getUsers();


  }

  getUsers() {
    this._serviceInicio.getUsers().subscribe((data) => {

      this.dataUsers = data;
      this.dataSource = this.dataUsers;
      console.log(this.dataUsers);

    });
  }

  getPostforUserId(element: any) {
    this.expandedElement = this.expandedElement === element ? null : element;
    if (this.expandedElement != null) {
      console.log(this.expandedElement);
      this._serviceInicio.getPosts(this.expandedElement.id).subscribe((data) => {
        this.dataPosts = data;
        console.log(data);

      });
    }



  }

  getNewPost(post: any) {

    console.log("papa", post);
    this.dataPosts.push(post);
  }
  back(){
    this.router.navigate(['/']);
  }

}

