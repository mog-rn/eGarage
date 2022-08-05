import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    // return NextResponse.redirect(req.url, new URL("/auth"));
}