'use client';

import { Id } from "@/convex/_generated/dataModel";
import React, { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
};

export const RemoveDialog = ({ documentId, children}: RemoveDialogProps) => {
    const router = useRouter();
    const remove = useMutation(api.documents.removeById);
    const [isRemoving, setIsRemoving] = useState(false);
    
    return (
        <AlertDialog >
            <AlertDialogTrigger  asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-black border border-gray-800" onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader >
                    <AlertDialogTitle className="text-gray-200">Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-400">
                        This cannot be undone. this will permanently delete your document.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter >
                    <AlertDialogCancel className="bg-black hover:bg-gray-950 hover:text-gray-200 text-gray-200 border border-gray-800" onClick={(e) => e.stopPropagation()} >
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction 
                    className="bg-gray-950 hover:bg-gray-900 border border-gray-800"
                    disabled={isRemoving} 
                    onClick={(e) => { e.stopPropagation(); 
                    setIsRemoving(true); 
                    remove({ id: documentId })
                      .catch(() => toast.error("something went wrong"))
                      .then(() => {
                        toast.success("Document removed");
                        router.push("/")
                    })
                      .finally(() => setIsRemoving(false)); }}
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};