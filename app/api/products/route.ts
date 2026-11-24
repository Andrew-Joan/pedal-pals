import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// READ: Get all products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 },
    );
  }
}

// CREATE: Add a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, description, price, stock } = body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      !Number.isInteger(price) ||
      price < 0 ||
      !Number.isInteger(stock ?? 0) ||
      (stock ?? 0) < 0
    ) {
      return NextResponse.json(
        { message: "Invalid product data" },
        { status: 400 },
      );
    }

    const product = await prisma.product.create({
      data: {
        name: name.trim(),
        description,
        price,
        stock: stock ?? 0,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to create product" },
      { status: 500 },
    );
  }
}
