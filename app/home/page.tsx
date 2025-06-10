'use client';

import { usePaginatedQuery } from "convex/react";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { api } from "@/convex/_generated/api";
import { DocumentsTable } from "./documents-table";
import { useSearchParam } from "../hooks/use-search-params";

const Home = () => {
    const [search] = useSearchParam();
    const { results, status, loadMore } = usePaginatedQuery(api.documents.get, { search }, { initialNumItems: 5 });

    return ( 
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-black to-gray-950">
            <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-gradient-to-r from-black to-gray-950">
                <Navbar />
            </div>
            <div className="mt-16">
               <TemplatesGallery />
               <DocumentsTable
               documents={results}
               loadMore={loadMore}
               status={status}
               />
            </div>
        </div>
     );
}
 
export default Home;