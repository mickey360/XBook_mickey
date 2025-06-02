import { RemoveDialog } from "@/Components/remove-dialog";
import { RenameDialog } from "@/Components/rename-dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import { Button } from "@/Components/ui/button"
import { Id } from "@/convex/_generated/dataModel"
import { ExternalLinkIcon, FilePenIcon, MoreVertical, TrashIcon } from "lucide-react"

interface DocumentMenuProps {
    documentId: Id<"documents">;
    title: string;
    onNewTab: (id: Id<"documents">) => void;
};

export const DocumentMenu = ({ documentId, title, onNewTab }: DocumentMenuProps ) => {
    return (
    <DropdownMenu >
        <DropdownMenuTrigger className="" asChild>
          <Button variant="ghost" size="icon" className="rounded-full bg-black hover:bg-gray-900">
              <MoreVertical color="white" className="size-4"/>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-black border-gray-800 hover:bg-gray-950">
           <RenameDialog documentId={documentId} initialTitle={title}>
                <DropdownMenuItem className="text-gray-200 focus:bg-gray-900 focus:text-gray-200" onSelect={(e) => e.preventDefault()} onClick={(e) => e.stopPropagation()}>
                    <FilePenIcon color="white" className="size-4 mr-2"/>
                    Rename
                </DropdownMenuItem>
            </RenameDialog>

            <RemoveDialog documentId={documentId}>
                <DropdownMenuItem className="text-gray-200 focus:bg-gray-900 focus:text-gray-200" onSelect={(e) => e.preventDefault()} onClick={(e) => e.stopPropagation()}>
                    <TrashIcon color="white" className="size-4 mr-2"/>
                    Remove
                </DropdownMenuItem>
            </RemoveDialog>
            <DropdownMenuItem className="text-gray-200 focus:bg-gray-900 focus:text-gray-200" onClick={() => onNewTab(documentId)}>
                <ExternalLinkIcon color="white" className="size-4 mr-2 " />
                Open in a new tab
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}