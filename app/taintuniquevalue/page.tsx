"use client";

import { getDBUser } from "@/utils/protect-taintUnique-utils";
import { Mail, VenusAndMars, MapPinHouse } from "lucide-react";
import { use } from "react";

export default function Home() {
  const userPromise = getDBUser();
  const { user } = use(userPromise);

  return (
    <div className="grid items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="container flex flex-row items-center justify-center">
        <h1 className="text-center mt-2 text-2xl">
          React.js taintUniqueValue APIs
        </h1>
      </div>

      <div className="flex flex-col bg-black w-[324px] justify-center text-white items-center rounded py-5 pb-10">
        <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
          {" "}
          {user.firstName} {user.lastName}{" "}
        </h5>
        <span className="text-lg bg-white text-black px-3 py-1 rounded-sm mt-3   ">
          {user.company.department}
        </span>
        <div className="mt-4 inline-flex text-md text-gray-900 dark:text-white items-center">
          {" "}
          <VenusAndMars /> {user.gender}{" "}
        </div>
        <div className="mt-4 inline-flex text-md text-gray-900 dark:text-white items-center">
          {" "}
          <MapPinHouse /> {user.address.address} {user.address.country}{" "}
        </div>
        <div className="my-4 inline-flex text-md text-gray-900 dark:text-white items-center">
          {" "}
          <Mail /> {user.email}{" "}
        </div>
      </div>
    </div>
  );
}
