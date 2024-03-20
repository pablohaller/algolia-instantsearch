import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return NextResponse.json(
      { message: "Unauthorized" },
      {
        status: 401,
      }
    );
  }

  const auth = authHeader.split(" ")[1];
  const [user, pwd] = Buffer.from(auth, "base64").toString().split(":");

  if (user !== "4dmin" && pwd !== "testpwd123") {
    return NextResponse.json(
      { message: "Unauthorized" },
      {
        status: 401,
      }
    );
  }

  const csvDirectory = path.join(process.cwd(), "data/data.csv");
  const file = await fs.readFile(csvDirectory, "utf8");

  return new NextResponse(file, {
    headers: {
      "content-type": "text/csv",
    },
  });
}
