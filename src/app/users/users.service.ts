import { StringifyOptions } from 'querystring';

export class UsersService{
    users = [
        {id:1,name:'Simce'},
        {id:2,name:'Stefi'},
        {id:3,name:'Teo'},
        {id:4,name:'Tomi'}

    ];

    addUser(id:number,name:string){
        this.users.push({
            id:id,
            name:name
        });
    }
}