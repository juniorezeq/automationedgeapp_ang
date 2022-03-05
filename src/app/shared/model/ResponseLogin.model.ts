import { Tenant } from "./Tenant.moldel";

export interface ResponseLogin{
    message: string;
    success: boolean;
    userFirstName:string;
    userLastName: string;
    emailId:string;
    tenant: Tenant;
    sessionToken:string;
    roles: string;
    forceChangePassword:boolean;
    userName:string;
    lastLoginTime:number
}

