import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './Users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { EditComponent } from './Servers/edit/edit.component';
import { ServerComponent } from './Servers/server/server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './users/users.service';
import { ServersService } from './servers/servers.services';
import { SimoService } from './simo.services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    EditComponent,
    ServerComponent,
    NotFoundComponent,
    CreateUserComponent,
    CreateServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UsersService,ServersService,SimoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
