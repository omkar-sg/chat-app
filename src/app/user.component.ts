import { Component } from "@angular/core";
import { CreateGroup, Groups } from "./creategrp.service";
import { GroupChat } from "./group.service";

@Component({
    selector:'ca-users',
    templateUrl:"./users.component.html"
})

export class Users{
    user:string=''
    msg:string=''
    smuser:string=''
    gname:string=''
    flag=false
    smgrp=''

    constructor(private gc:GroupChat,public cg :CreateGroup){}

    /*adduser(){
        if (this.gc.user.includes(this.user)) {
            alert("Existing user")
            
        } 
        else {
            this.gc.adduser(this.user)
            
        }
        
    }

    sendmsg1(u:string){
        if(this.gc.user.includes(u)){this.gc.sendmsg(this.msg,this.smuser)}
        else(alert("Please Register First !"))
        

    }


    getusers(){
        return this.gc.getusers()
    }

    getmsg(){
        return this.gc.getmsg()
    }*/

    addgroup(gname:string,){

        this.cg.addgroup(gname)
    }

    adduser(user:string){
        this.cg.adduser(user,this.gname)
    }

    selectgroup(gname:string){
        this.gname=gname
        return this.cg.getgroup(gname)
        
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
        //if(this.flag==true){ return this.cg.getchat(gname)}
        // else{
        //     return ''
        // }
        console.log("inside getchat"+this.cg.getchat(this.gname))
        let arr= this.cg.getchat(this.smgrp)
        return arr
    }


    flagf(){
        this.flag=true
        //this.getgrpchat()
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

