export class SimoService{
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

    updateServer(id:number,serverInfo: {name:string,status:string}){
        const server = this.servers.find(
            (s) => {
                return s.id === id;
            }
        );
        if(server)  {
            server.name = serverInfo.name,
            server.status = serverInfo.status
        }  


    }

    addServer(id:number,name:string,status:string){
        this.servers.push({
            id:id,
            name:name,
            status:status
        });
    }
}