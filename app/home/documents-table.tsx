import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { Doc } from "@/convex/_generated/dataModel";
import { PaginationStatus } from "convex/react";
import { LoaderIcon } from "lucide-react";
import { DocumentRow } from "./document-row";
import { Button } from "@/Components/ui/button";

interface DocumentsTableProps {
    documents: Doc<"documents"> [] | undefined;
    loadMore: (numItems: number) => void;
    status: PaginationStatus;

}

export const DocumentsTable = ({
    documents,
    loadMore,
    status,
}: DocumentsTableProps) => {
    return ( 
        <div className="max-w-screen bg-gradient-to-r from-black to-gray-950 mx-auto px-16 flex flex-col gap-5">
            {documents == undefined ? (
                <div className="flex justify-center items-center h-24">
                    <LoaderIcon color="white" className="animate-spin text-muted-foreground size-5" />
                </div>
            ): (
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent border-none">
                            <TableHead>Name</TableHead>
                            <TableHead>&nbsp;</TableHead>
                            <TableHead className="hidden md:table-cell">Shared</TableHead>
                            <TableHead className="hidden md:table-cell">Created At</TableHead>
                        </TableRow>
                    </TableHeader>
                    {documents.length === 0 ? (
                        <TableBody>
                            <TableRow className="hover:bg-transparent">
                                <TableCell colSpan={4} className="h-24 text-center text-gray-100 text-muted-foreground" >
                                    No documents found
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    ) : (
                        <TableBody>
                            {documents.map((document) => (
                                <DocumentRow key={document._id} document={document}/>
                            ))}
                        </TableBody>
                    ) }
                </Table>
            )}
            <div className="flex items-center justify-center">
                <Button 
                className="bg-gray-950 text-gray-200 hover:bg-gray-900 hover:text-gray-200 border-gray-700 hover mb-10"
                variant="ghost" 
                size="sm" 
                onClick={() => loadMore(5)} 
                disabled={status !== "CanLoadMore"}
                >
                    {status === "CanLoadMore" ? "Load more" : "End of results"}
                </Button>
            </div>
        </div>
     );
}
 
