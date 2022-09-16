import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InicioComponent } from './principal/inicio/inicio.component';
import { AppRoutingModule } from './app.routing';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent, DialogOverviewExampleDialog } from './dialog/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { DialogService } from './dialog/dialog.service';
import { LoginComponent } from './login/login/login.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DialogComponent,
    DialogOverviewExampleDialog,
    LoginComponent
  ],
  imports: [
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatInputModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,


  ],
  providers: [MatDatepickerModule, ApiService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
