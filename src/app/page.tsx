"use client";

import { Toy } from "@/types/toy";
import { useEffect, useState } from "react";

export default function Home() {
  const [toys, setToys] = useState<Toy[]>([]);

  const fetchToys = async () => {
    try {
      const res = await fetch("/api/toys", { cache: "no-store" });
      if (!res.ok) {
        throw new Error("Failed to fetch toys");
      }
      const data = await res.json();
      return setToys(data);
    } catch (error) {
      console.error("Error fetching toys:", error);
      return [];
    }
  };

  useEffect(() => { fetchToys(); }, []);

  return (
    <div className="w-full">
      <div className="p-4 w-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Toy Store Management System</h1>

        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
              <tr>
                <th scope="col" className="px-6 py-3 font-bold">
                  Toy Name
                </th>
                <th scope="col" className="px-6 py-3 font-bold">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <tr key={toy.name} className="bg-neutral-primary border-b border-default">
                  <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap capitalize">
                    {toy.name}
                  </th>
                  <td className="px-6 py-4">
                    ${toy.price.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
