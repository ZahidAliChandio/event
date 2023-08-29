import { NextResponse, NextRequest } from "next/server";

import { connectToDB } from "@/dbConfig/dbConfig";
import Newsletter from "@/models/newsletter";

connectToDB();

export async function POST(request: NextRequest) {
    try {
      const { email } = await request.json();

      if (!email || !email.includes("@")) {
        return NextResponse.error();
      }

      const newNewsletter = new Newsletter({ email });

      const newsletter = await newNewsletter.save();
      
      return NextResponse.json({ status: "OK", message: "Email saved", success: true, data: newsletter });

    } catch (error) {
        console.log("Could not connect to DB", error);
    }

}
