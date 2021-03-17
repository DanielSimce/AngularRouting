export class ServersService{
    servers = [
        {id:1,name:'Production Server',status:'Online'},
        {id:2,name:'Test',status:'Online'},
        {id:3,name:'Dev Server',status:'Online'}
    ];

    getServers(){
        return this.servers;
    }

    getServer(id:number){
        const server = this.servers.find(
            (s) => {
                return s.id === id;
            }
        );

        return server;
    }

    updateServer(id:number,name:string,status:string){
        const server = this.servers.find(
            (s) => {
                return s.id === id;
            }
        );
        if(server)  {
            server.name = name,
            server.status = status
        }  


    }
}