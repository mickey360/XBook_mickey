import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SearchInput } from "./search-input";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
    return ( 
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#000000a4] to-[#07061dad] flex items-center justify-between h-full w-full">
           <div className="flex gap-3 items-center shrink-0 pl-6">
            <Link href="/">
                <Image src="/logo.svg" alt="logo" width={34} height={34} />
            </Link>
            <h3 className="text-lg font-semibold text-gray-200">NoteX</h3>
           </div>
            <SearchInput />
            <div className="flex gap-3 items-center h-9 pl-1 pr-1 mr-2 bg-gray-300 rounded-full">
                <OrganizationSwitcher
                afterCreateOrganizationUrl="/"
                afterLeaveOrganizationUrl="/"
                afterSelectOrganizationUrl="/"
                afterSelectPersonalUrl="/"
                />   
                <UserButton />
            </div>
            
        </nav>
     );
};
 
