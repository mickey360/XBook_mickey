"use client";

import Image from "next/image";
import Link from "next/link";
import { DocumentInput } from "./document-input";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/Components/ui/menubar";
import { BsFilePdf } from "react-icons/bs";
import { useEditorStore } from "@/store/use-editor-store";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Avatars } from "./avatars";
import { Inbox } from "./inbox";
import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { RemoveDialog } from "@/Components/remove-dialog";
import { RenameDialog } from "@/Components/rename-dialog";

interface NavbarProps {
  data: Doc<"documents">;
}

export const Navbar = ({ data }: NavbarProps) => {
  const router = useRouter();
  const { editor } = useEditorStore();
  const mutation = useMutation(api.documents.create);

  const onNewDocument = () => {
    mutation({
      title: "Untitled document",
      initialContent: "",
    })
      .catch(() => toast.error("Something went wrong"))
      .then((id) => {
        toast.success("Document created");
        router.push(`/documents/${id}`);
      });
  };

  const insertTable = ({ rows, cols}: { rows: number , cols: number }) => {
      editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false})
      .run();
  };

  const onDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  const onSaveJSON = () => {
    if (!editor) return;

    const content = editor.getJSON();
    const blob = new Blob([JSON.stringify(content)], {
      type: "application/json",
    });
    onDownload(blob, `${data.title}.json`);
  };

  const onSaveHTML = () => {
    if (!editor) return;

    const content = editor.getHTML();
    const blob = new Blob([content], {
      type: "text/html",
    });
    onDownload(blob, `${data.title}.html`);
  };

  const onSaveText = () => {
    if (!editor) return;

    const content = editor.getText();
    const blob = new Blob([content], {
      type: "text/plain",
    });
    onDownload(blob, `${data.title}.txt`);
  };

  return (
    <nav className="flex items-center bg-gradient-to-r from-black to-gray-950 justify-between h-full w-full print:hidden">
      <div className="flex gap-2 ml-3 pl-3 mr-6 pr-6 items-center">
        <Link href="/" >
          <Image src="/logo.svg" alt="logo" width={36} height={36} />
        </Link>
        <div className="flex flex-col gap-2 ml-3 pl-3 ">
          <DocumentInput title={data.title} id={data._id} />

          <div className="flex">
            <Menubar className="border-none gap-y-0.5 gap-x-1 bg-transparent shadow-none mt-1 pt-1 h-auto p-0">
              <MenubarMenu >
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] gap-x-1 rounded-sm focus:text-gray-300 data-[state=open]:bg-gray-900 data-[state=open]:text-gray-300 border border-gray-800 focus:border-gray-600 hover:border-gray-600 text-gray-200 h-auto ">
                  File
                </MenubarTrigger >
                <MenubarContent className="bg-gray-950 border-gray-700">
                  <MenubarSub>
                    <MenubarSubTrigger className="bg-gray-950 hover:bg-gray-900 hover:text-gray-200 text-gray-200">
                      <FileIcon color="white" className="size-4 mr-2" />
                      Save
                    </MenubarSubTrigger>
                    <MenubarSubContent className="bg-gray-950 border-gray-700">
                      <MenubarItem onClick={onSaveJSON} className="bg-gray-950 focus:bg-gray-900 focus:text-gray-200 text-gray-200">
                        <FileJsonIcon color="white" className="size-4 mr-2" />
                        JSON
                      </MenubarItem>
                      <MenubarItem onClick={onSaveHTML} className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200">
                        <GlobeIcon color="white" className="size-4 mr-2" />
                        HTML
                      </MenubarItem>
                      <MenubarItem onClick={() => window.print()} className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200">
                        <BsFilePdf color="white" className="size-4 mr-2" />
                        PDF
                      </MenubarItem>
                      <MenubarItem className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200" onClick={onSaveText}>
                        <FileTextIcon color="white" className="size-4 mr-2" />
                        Text
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarItem onClick={onNewDocument} className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200">
                    <RemoveFormattingIcon color="white" className="size-4 mr-2" />
                    New Document
                  </MenubarItem>
                  <MenubarSeparator className="bg-gray-800" />

                  <RenameDialog documentId={data._id} initialTitle={data.title} >
                    <MenubarItem onClick={(e) => e.stopPropagation()} onSelect={(e) => e.preventDefault()} className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200" > 
                    <FilePenIcon color="white" className="size-4 mr-2" />
                    Rename
                  </MenubarItem>
                  </RenameDialog>

                  <RemoveDialog documentId={data._id}>
                    <MenubarItem onClick={(e) => e.stopPropagation()} onSelect={(e) => e.preventDefault()} className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200">
                      <TrashIcon color="white" className="size-4 mr-2" />
                      Remove 
                    </MenubarItem>
                  </RemoveDialog>

                  <MenubarSeparator className="bg-gray-800" />
                  <MenubarItem onClick={() => window.print()} className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200 ">
                    <PrinterIcon color="white" className="size-4 mr-2" />
                    Print <MenubarShortcut className="text-gray-300">&nbsp;&nbsp;ctrl+P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="text-sm focus:text-gray-300 data-[state=open]:bg-gray-900 data-[state=open]:text-gray-300 border border-gray-800 focus:border-gray-600 hover:focus:border-gray-600 text-gray-200 font-normal py-0.5 px-[7px] gap-x-1 rounded-sm h-auto ">
                  Edit
                </MenubarTrigger>
                <MenubarContent className="bg-gray-950 border-gray-700">
                  <MenubarItem
                    onClick={() => editor?.chain().focus().undo().run() }
                    className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200"
                  >
                    <Undo2Icon color="white" className="size-4 mr-4" />
                    Undo <MenubarShortcut className="text-gray-200">&nbsp;&nbsp;ctrl+Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => editor?.chain().focus().redo().run()}
                    className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200"
                  >
                    <Redo2Icon color="white" className="size-4 mr-4" />
                    Redo <MenubarShortcut className="text-gray-200">&nbsp;&nbsp;ctrl+Y</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="text-sm focus:text-gray-300 data-[state=open]:bg-gray-900 data-[state=open]:text-gray-300 border border-gray-800 focus:border-gray-600 hover:focus:border-gray-600 text-gray-200 font-normal py-0.5 px-[7px] gap-x-1 rounded-sm h-auto ">
                  Insert
                </MenubarTrigger>
                <MenubarContent className="bg-gray-950 border-gray-700"> 
                  <MenubarSub>
                    <MenubarSubTrigger className="focus:text-gray-300 data-[state=open]:bg-gray-900 data-[state=open]:text-gray-300 bg-gray-950 hover:bg-gray-900 text-gray-200 focus:bg-gray-900">
                      Table
                      </MenubarSubTrigger>
                    <MenubarSubContent className="bg-gray-950 border-gray-700">
                      <MenubarItem
                        className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200"
                        onClick={() => insertTable({ rows: 1, cols: 1 })}
                      >
                        1 x 1
                      </MenubarItem>
                      <MenubarItem
                      className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200"
                        onClick={() => insertTable({ rows: 2, cols: 2 })}
                      >
                        2 x 2
                      </MenubarItem>
                      <MenubarItem
                      className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200"
                        onClick={() => insertTable({ rows: 3, cols: 3 })}
                      >
                        3 x 3
                      </MenubarItem>
                      <MenubarItem
                      className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200"
                        onClick={() => insertTable({ rows: 4, cols: 4 })}
                      >
                        4 x 4
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="text-sm focus:text-gray-300 data-[state=open]:bg-gray-900 data-[state=open]:text-gray-300  text-gray-200 border border-gray-800 focus:border-gray-600 hover:focus:border-gray-600 font-normal py-0.5 px-[7px] gap-x-1 rounded-sm h-auto ">
                  Format
                </MenubarTrigger>
                <MenubarContent className="bg-gray-950 border-gray-700">
                  <MenubarSub>
                    <MenubarSubTrigger className="bg-gray-950 focus:bg-gray-900 active:bg-gray-900 hover:bg-gray-900 text-gray-200 focus:text-gray-200">
                    <FileTextIcon color="white" className="size-4 mr-2" />
                      Text Format
                    </MenubarSubTrigger>
                    <MenubarSubContent className="bg-gray-950 border-gray-700">
                      <MenubarItem
                      className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200"
                        onClick={() =>
                          editor?.chain().focus().toggleBold().run()
                        }
                      >
                        <BoldIcon color="white" className="size-4 mr-2" />
                        Bold <MenubarShortcut className="text-gray-200">&nbsp;&nbsp;ctrl+B</MenubarShortcut>
                      </MenubarItem>

                      <MenubarItem
                      className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200"
                        onClick={() =>
                          editor?.chain().focus().toggleItalic().run()
                        }
                      >
                        <ItalicIcon color="white" className="size-4 mr-2" />
                        Italic <MenubarShortcut className="text-gray-200">&nbsp;&nbsp;ctrl+I</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem
                      className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200"
                        onClick={() =>
                          editor?.chain().focus().toggleUnderline().run()
                        }
                      >
                        <UnderlineIcon color="white" className="size-4 mr-2" />
                        <span>Underline&nbsp;&nbsp;</span>
                        <MenubarShortcut className="text-gray-200">&nbsp;&nbsp;ctrl+U</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem
                      className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200"
                        onClick={() =>
                          editor?.chain().focus().toggleStrike().run()
                        }
                      >
                        <StrikethroughIcon color="white" className="size-4 mr-2" />
                        Strike <MenubarShortcut className="text-gray-200">&nbsp;&nbsp;ctrl+S</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem
                  className="bg-gray-950 focus:bg-gray-900 text-gray-200 focus:text-gray-200"
                    onClick={() =>
                      editor?.chain().focus().unsetAllMarks().run()
                    }
                  >
                    <RemoveFormattingIcon color="white" className="size-4 mr-2" />
                    Clear Format
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div> 
      <div className="hidden md:flex gap-3 items-center h-10 pl-1 pr-1 mr-1 bg-neutral-500 rounded-full">
        <Avatars />
        <Inbox />
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
