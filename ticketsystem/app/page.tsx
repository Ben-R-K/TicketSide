"use client";
import React, { useEffect, useState } from "react";
import { GetAccounts } from "@/app/pages/api/DataBaseConnection";
import { useRouter } from "next/navigation";

export default function Home() {
  const [accounts, setAccounts] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchAccounts() {
      const result = await GetAccounts();
      if ("error" in result) {
        console.error(result.error);
      } else {
        setAccounts(result);
      }
    }
    fetchAccounts();
  }, []);

  const handleAccountSelection = (account: any) => {
    localStorage.setItem("CreatorID", account.acountid); // Store CreatorID in localStorage
    localStorage.setItem("acount_name", account.acount_name); // Store account name in localStorage
    localStorage.setItem("department", account.department.department); // Store department in localStorage
  
    router.push(`/OpenTickets?acount_name=${account.acount_name}&department=${account.department.department}`);
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Select an Account</h1>
      <ul className="space-y-4">
        {accounts.length > 0 ? (
          accounts.map((acount) => (
            <li
              key={acount.acountid}
              className="p-4 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 cursor-pointer transition duration-200 w-72 text-center"
              onClick={() => handleAccountSelection(acount)}
            >
              <p className="text-lg font-semibold text-blue-800">{acount.account_name}</p>
              <p className="text-sm text-gray-600">Department: {acount.department.department}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No accounts available.</p>
        )}
      </ul>
    </div>
  );
}
