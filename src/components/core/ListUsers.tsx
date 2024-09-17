"use client";
import { useState, useEffect } from "react";

import { User } from "@/types/User";
import CardUser from "./CardUser";
import Pagination from "./Pagination";
import SandboxPreview from "./LoadingSkeleton";

export default function ListUsers({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const [users, setUsers] = useState<User[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?results=12&page=${currentPage}&seed=${query}`
        );
        const data = await response.json();
        setUsers(data.results);
        setLoading(false);
        const totalResults = 96; 
        const resultsPerPage = 12;
        setTotalPages(Math.ceil(totalResults / resultsPerPage))
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };
    fetchUsers();
  }, [currentPage, query]);

  if (loading) {
    {
      return <SandboxPreview/>
      //  si esto da error es por que no el skeleton utiliza mal la sintaxis de html de <div> con <p>
    }
  }
  if (error) {
    {
      return <p>Error: {error}</p>;
    }
  }
  console.log(users);
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {users.map((user, index) => (
        <CardUser key={index} value={user} />
      ))}
    </div>
    <Pagination totalPages={totalPages} />
    </>
  );
}
