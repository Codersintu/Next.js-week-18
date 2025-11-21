import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const client=new PrismaClient();
export async function POST(req:NextRequest){
   const data=await req.json();
   await client.user.create({data:{
    username: data.username,
    password: data.password
   }});
   
   console.log("Received user details:", data);
    return NextResponse.json({message: "User details endpoint"})
}