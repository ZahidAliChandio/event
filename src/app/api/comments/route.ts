import { NextResponse, NextRequest } from "next/server";

import { connectToDB } from "@/dbConfig/dbConfig";
import Comment from "@/models/comment";

connectToDB();

export async function POST(request: NextRequest) {
    try {
      const { email, name, text, eventId } = await request.json();
      
      if (!email || !email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "") {
        return NextResponse.error();
      }
    
        const newComment = new Comment({ email, name, text, eventId });
        const comment = await newComment.save();
        
        return NextResponse.json({ status: "OK", message: "Comment saved", success: true, comments: comment });

    } catch (error) {
        console.log("Could not connect to DB", error);
    }
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const eventId = searchParams.get('eventId')

        const comments = await Comment.find({ eventId } , { next : {
                revalidate: 60,
            }
        });

        return NextResponse.json({ status: "OK", comments: comments });

    } catch (error) {
        console.log("Could not connect to DB", error);
    }
}