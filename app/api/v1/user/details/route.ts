import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
   const data=await req.json();
   console.log("Received user details:", data);
    return NextResponse.json({message: "User details endpoint"})
}