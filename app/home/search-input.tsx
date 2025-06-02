'use client';

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { SearchIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";
import { useSearchParam } from "../hooks/use-search-params";

export const SearchInput= () => {
    const [search, setSearch] = useSearchParam()
    const [value, setValue] = useState(search);

    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleClear = () => {
        setValue('');
        setSearch("");
        inputRef.current?.blur();
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch(value);
        inputRef.current?.blur();
    };

    return ( 
        <div className="flex-1 flex border-gray-800 items-center justify-center">
            <form onSubmit={handleSubmit} className="relative max-w-[720px] w-full">

                <Input 
                value={value} 
                onChange={handleChange} 
                ref={inputRef} 
                placeholder="Search" 
                className="md:text-base text-gray-200 focus-visible:ring-5 placeholder:text-gray-200 px-14 w-full border-gray-800 bg-black rounded-full h-[48px]  focus:bg-gray-950"
                />
                <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute hover:bg-gray-900 bg-gray-950 border-gray-800 left-3 top-1/2 -translate-y-1/2 rounded-full" 
                >
                    <SearchIcon color="white"/>  
                     {/* [&_svg]:size-5  [&_svg]:size-5 focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px_1px_rgba(65,69,73,.15)] */}
                </Button>

                {value && (
                 <Button 
                 onClick={handleClear} 
                 type="button" 
                 variant="ghost" 
                 size="icon" 
                 className="absolute  hover:bg-gray-900 bg-gray-950 border-gray-800 right-3 top-1/2 -translate-y-1/2  rounded-full" >
                    <XIcon color="white"/>
                 </Button>
                )}
            </form>

        </div>
     );
}
 
