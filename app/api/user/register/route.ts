import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/utils/connect";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // check if the user exits in the db
    let user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId: userId,
        },
      });
    } else {
      console.log("User already exists");
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log("Error starting quiz: ", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Error creating user: ${error.message}` },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
