import { Component, ElementRef, ViewChild } from "@angular/core";
import { CreateGroup, Groups } from "./creategrp.service";


@Component({
    selector:'ca-users',
    templateUrl:"./users.component.html",
    providers: [CreateGroup]
    
})

export class Users{
    user:string=''
    msg:string=''
    smuser:string=''
    gname:string=''
    smgrp=''

    constructor(private cg :CreateGroup){}

    
    addgroup(gname:string,){
        if(this.getgrps().find((ele)=>ele.gname==gname)?.gname==gname){alert("Group Already Created")}
        else{ this.cg.addgroup(gname)}
       
    }

    adduser(user:string){
        
        if(this.getgrps().find((ele)=>ele.gname==this.gname)?.uname.includes(user)){alert("User Already Exist")}
        else{this.cg.adduser(user,this.gname)}

        console.log(" add user11",user,this.gname)
        
    }

    sendmsg(msg:string){
        console.log(this.gname,"sendmsg","inside component")
        this.cg.sendmsg(this.smgrp,this.smuser,msg)
        this.gname=''
    }

    grp($event:any){
        this.smgrp=$event.target.value
    }

    getgrpchat():any{
        console.log("inside getchat"+this.cg.getchat(this.gname))
        let arr= this.cg.getchat(this.smgrp)
        return arr
    }


    getgrp():any{
       return  this.cg.getgroup(this.smgrp)

    }


    getgrps(){
        return this.cg.groups
    }

    tagchange($event:any){
        this.gname=$event.target.value
        console.log(this.gname,"Tag change")
    }


    tagchangeusr($event:any){
        this.smuser=$event.target.value
        console.log(this.smuser)
    }


   


    }

