'use client';

import { useEffect, useState } from "react";

interface Property {
  id: string;
  title: string;
  image: string;
  location: string;
  price: number;
  description: string;
}

export default function Home() {
  const api = process.env.NEXT_PUBLIC_API;

  const [userId, setUserId] = useState("user1");
  const [properties, setProperties] = useState<Property[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`${api}/properties`);
        const data = await response.json();
        setProperties(data);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
      }
    };

    fetchProperties();
  }, []);

  // Load favorites when userId changes
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch(`${api}/favorites/${userId}`);
        const data = await response.json();
        setFavorites(data);
      } catch (err) {
        console.error("Failed to fetch favorites:", err);
      }
    };

    fetchFavorites();
  }, [userId]);

  const toggleFavorite = async (propertyId: string) => {
    const res = await fetch(`${api}/favorites/${userId}/toggle`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ propertyId })
    });

    const updated = await res.json();
    setFavorites(updated);
  };
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Real Estate Listings</h1>

      {/* User Selector */}
      <div className="mb-6">
        <label className="font-medium mr-2">User:</label>
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border border-slate-300 rounded px-3 py-2"
        >
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
          <option value="user3">User 3</option>
        </select>
      </div>

      {/* Properties List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p) => {
          const isFav = favorites.includes(p.id);
          return (
            <div
              key={p.id}
              className="border border-slate-300 rounded-lg shadow-sm p-4 bg-white hover:drop-shadow-2xl transition-shadow"
            >
              <div className="flex justify-between mb-3">
                <span className="text-xl font-semibold my-auto">{p.title}</span>
                <button
                  onClick={() => toggleFavorite(p.id)}
                  className={`w-content px-3 py-2 rounded 
                  ${isFav ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}
                  hover:opacity-90 transition cursor-pointer`}
                >
                  {isFav ?
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-star">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-star">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>}
                </button>
              </div>
              <div className="w-full h-40 bg-gray-200 rounded overflow-hidden mb-3">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-between">
                <span className="font-semibold my-auto">{p.location}</span>
                <span className="text-blue-600 font-bold mt-1">
                  ${p.price.toLocaleString()} THB
                </span>
              </div>
              <span className="text-gray-600">{p.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
