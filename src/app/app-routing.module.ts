import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateServerComponent } from './create-server/create-server.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditComponent } from './Servers/edit/edit.component';
import { ServerComponent } from './Servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './Users/user/user.component';
import { UsersComponent } from './users/users.component';



const appRoutes:Routes = [
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent,children: [
        {path:':id/:name',component:UserComponent}
    ]},
    {path:'servers',component:ServersComponent,children: [
        {path:':id',component:ServerComponent},
        {path:':id/edit',component:EditComponent}
    ]},
    {path:'createUser',component:CreateUserComponent},
    {path:'createServer',component:CreateServerComponent},
    {path:'not-found',component:NotFoundComponent},
    {path:'**',redirectTo:'/not-found'}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    
    exports:[RouterModule]
})




export class AppRoutingModule{
   

}