"use client";

import { Toy } from "@/types/toy";
import { useEffect, useState } from "react";

export default function Home() {
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
              <tr key="toy1" className="bg-neutral-primary border-b border-default">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap capitalize">
                  Toy1
                </th>
                <td className="px-6 py-4">
                  $19.99
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
