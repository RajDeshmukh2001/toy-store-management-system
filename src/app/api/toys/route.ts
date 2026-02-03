import { conn } from "@/lib/db";
import Toy from "@/models/Toy";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await conn();
        const toys = await Toy.find({});
        return NextResponse.json(toys, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const { name, price } = await request.json();
        if (!name || name.length > 50) {
            return NextResponse.json(
                { error: "Name is required and must be less than 50 characters" },
                { status: 400 }
            );
        }

        if (price == null || price < 0 || typeof price !== "number") {
            return NextResponse.json(
                { error: "Price is required and must be a non-negative number" },
                { status: 400 }
            );
        }

        await conn();
        await Toy.create({ name, price });
        return NextResponse.json({ message: "Toy created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}