import express, { Router } from "express";

export class Routes {
    private static registeredRoutes:string[]=[];
    constructor(public path:string, public router:Router){
    if(!path.startsWith("/")){throw new Error("Path must start with '/'");}
}
}