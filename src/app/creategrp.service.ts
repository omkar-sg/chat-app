import { Injectable } from "@angular/core";
import { GroupChat } from "./group.service";


export class Groups{
    gname:string=''; 
    uname:string[]=[];
    msgarr:{user:string;msg:string}[]=[]

}

@Injectable({
    providedIn:'root'
})

export class CreateGroup{

    groups:Groups[]=[]
    //constructor(private gc:GroupChat){  }

    addgroup(gname:string){
       let arr=new Groups()
       arr.gname=gname
    //     arr.uname?.push('')
    //    arr.msgarr?.push({user:'',msg:''})
       
        this.groups.push(arr)
        console.log("add group",this.groups)

    }

    

    getgroup(gname:string){
        return this.groups.find((ele)=>ele.gname==gname)?.uname

    }

    adduser(uname:string,gname:string){
        console.log("inside add user username:"+gname+" group:"+uname);
        console.log(this.groups.find((ele)=>ele.gname==gname));
        this.groups.find((ele)=>ele.gname==gname)?.uname.push(uname)
        
        console.log(this.groups)
    }

    sendmsg(gname:string,user:string,msg:string){
        
        this.groups.find((ele)=>ele.gname==gname)?.msgarr?.push({user:user,msg:msg})
        console.log(this.groups)
    }

    getchat(gname:string){
        console.log(this.groups.find((elem)=>{elem.gname==gname})?.msgarr)
        return this.groups.find((elem)=>elem.gname==gname)?.msgarr
    }
}