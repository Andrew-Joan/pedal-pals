import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// UPDATE: Update an existing product
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const productId = Number(id);

    if (!Number.isInteger(productId) || productId <= 0) {
      return NextResponse.json(
        { message: "Invalid product ID" },
        { status: 400 },
      );
    }

    const body = await request.json();
    const { name, description, price, stock } = body;

    if (
      (name !== undefined && (typeof name !== "string" || !name.trim())) ||
      (price !== undefined && (!Number.isInteger(price) || price < 0)) ||
      (stock !== undefined && (!Number.isInteger(stock) || stock < 0))
    ) {
      return NextResponse.json(
        { message: "Invalid product data" },
        { status: 400 },
      );
    }

    const product = await prisma.product.update({
      where: { id: productId },
      data: {
        ...(name !== undefined && { name: name.trim() }),
        ...(description !== undefined && { description }),
        ...(price !== undefined && { price }),
        ...(stock !== undefined && { stock }),
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to update product" },
      { status: 500 },
    );
  }
}

// DELETE: Delete a product
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const productId = Number(id);

    if (!Number.isInteger(productId) || productId <= 0) {
      return NextResponse.json(
        { message: "Invalid product ID" },
        { status: 400 },
      );
    }

    await prisma.product.delete({
      where: { id: productId },
    });

    return NextResponse.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to delete product" },
      { status: 500 },
    );
  }
}
