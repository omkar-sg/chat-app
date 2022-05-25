import { Injectable } from "@angular/core";

// export class users{
//     name:string='';
//     id:number=0;

// }

@Injectable()

export class GroupChat{
    //id=1
    //user:{name:string;id:number}[]=[]
    
    user:string[]=[]
    msg:{time:any;user:string;msg:string}[]=[]

    adduser(uname:string){
        
        this.user.push(uname)
        // this.id++
    }


    sendmsg(msg:string,usernm:string){
        console.log(msg,usernm)
        this.msg.push({time:'test',user:usernm,msg:msg})

    }

    getmsg(){
        return this.msg
    }

    getusers(){
        return this.user
    }

}