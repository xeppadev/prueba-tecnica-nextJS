"use client";

import * as React from "react";
import Link from "next/link"; 

export function MainNav(): React.JSX.Element {
  return (
    <React.Fragment>
      <header className="sticky top-0 z-10 border-b bg-white border-[#dcdfe4]">
        <div className="flex flex-row space-x-2 items-center justify-between min-h-[64px] px-8">
          <div className="flex flex-row space-x-2 lg:space-x-0 items-center">
           
            <Link href="/" className="text-lg font-semibold ">
              Inicio
            </Link>
          </div>
          <div className="flex flex-row space-x-5 items-center">
            
          </div>
        </div>
      </header>

   
    </React.Fragment>
  );
}
