import React from "react";
import { FaRegHeart } from "react-icons/fa";

export default function CardProduct({ thumbnail, title, desc, price, id }) {
  return (
    <a href={`products/${id}`} className="group relative block overflow-hidden">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>
        <FaRegHeart />
      </button>
      <img
        src={
          thumbnail ||
          "https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
        }
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <p className="text-gray-700">${price ?? "0.0"}</p>

        <h3 className="mt-1.5 text-lg font-medium text-gray-900 line-clamp-1">
          {title || "Default Product title"}
        </h3>

        <p className="mt-1.5 line-clamp-3 text-gray-700">
          {desc || "default description"}
        </p>

        <form className="mt-4 flex gap-4">
          <button className="block w-full rounded bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
            Add to Cart
          </button>

          <button
            type="button"
            className="block w-full rounded bg-blue-700 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Buy Now
          </button>
        </form>
      </div>
    </a>
  );
}
