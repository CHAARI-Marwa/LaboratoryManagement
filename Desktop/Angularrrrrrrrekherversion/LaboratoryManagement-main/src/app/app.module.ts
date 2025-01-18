import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MemberFormComponent } from './member-form/member-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { FirebaseModule } from './Firebase.module';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { EventFormComponent } from './event-form/event-form.component';
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmComponent } from './confirm/confirm.component';
import { NgChartsModule } from 'ng2-charts';
import { ToolsFormComponent } from './tools-form/tools-form.component';
import { FormEtdComponent } from './form-etd/form-etd.component';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MembresVisitComponent } from './membres-visit/membres-visit.component';
import { EventVisitComponent } from './event-visit/event-visit.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    TemplateComponent,
    DashboardComponent,
    ToolsComponent,
    ArticlesComponent,
    EventsComponent,
    LoginComponent,
    EventFormComponent,
    ModalComponent,
    ConfirmComponent,
    ToolsFormComponent,
    FormEtdComponent,
    HomeComponent,
    HeaderComponent,
    MembresVisitComponent,
    EventVisitComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    MatSelectModule,
    MatCardModule, 
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    FirebaseModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
