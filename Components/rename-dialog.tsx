'use client';

import { Id } from "@/convex/_generated/dataModel";
import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { toast } from "sonner";

interface RenameDialogProps {
    documentId: Id<"documents">;
    initialTitle: string;
    children: React.ReactNode;
};

export const RenameDialog = ({ documentId, initialTitle, children}: RenameDialogProps) => {
    const update = useMutation(api.documents.updateById);
    const [isUpdating, setIsUpdating] = useState(false);

    const [title, setTitle] = useState(initialTitle);
    const [open, setOpen] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsUpdating(true);

        update({ id: documentId, title: title.trim() || "Untitled" })
          .catch(() => toast.error("something went wrong"))
          .then(() => toast.success("Document updated"))
          .finally(() => {
             setIsUpdating(false);
             setOpen(false);
        });
    };
    
    return (
       <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent className="bg-black border border-gray-800" >
            <form onSubmit={onSubmit}>
                <DialogHeader >
                    <DialogTitle className="text-gray-200" >Rename document</DialogTitle>
                    <DialogDescription className="text-gray-400">
                        Enter a new name for this document
                    </DialogDescription>
                </DialogHeader>
                <div className="my-4">
                    <Input
                    className=" text-gray-500 border-gray-800 bg-gray-950/5 rounded-lg h-13 focus:bg-gray-900"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Document Name"
                    onClick={(e) => e.stopPropagation()}
                    />
                </div>
                <DialogFooter>
                    <Button 
                    className="bg-black hover:bg-gray-950 hover:text-gray-200 text-gray-200 border border-gray-800"
                    type="button"
                    variant="ghost"
                    disabled={isUpdating}
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen(false);
                    }}
                    >
                        Cancel
                    </Button>
                    <Button 
                    className="bg-gray-950 hover:bg-gray-900 hover:text-gray-200 text-gray-200 border border-gray-800"
                    type="submit"
                    disabled={isUpdating}
                    onClick={(e) => e.stopPropagation()}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
       </Dialog>
    );
};