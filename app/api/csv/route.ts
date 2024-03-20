import { NextRequest, NextResponse } from "next/server";
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

  // const file = await fs.readFile(process.cwd() + "/app/data/data.csv", "utf8");
  const file = await fs.readFile("@/app/data/data.csv", "utf8");

  return new NextResponse(file, {
    headers: {
      "content-type": "text/csv",
    },
  });
}
