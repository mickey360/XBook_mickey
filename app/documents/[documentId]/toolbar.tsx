"use client";

import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ChevronDownIcon,
  HighlighterIcon,
  ImageIcon,
  ItalicIcon,
  Link2Icon,
  ListIcon,
  ListOrderedIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  RedoIcon,
  RemoveFormattingIcon,
  SearchIcon,
  SpellCheckIcon,
  UnderlineIcon,
  UndoIcon,
  UploadIcon,
} from "lucide-react";
import { type Level } from "@tiptap/extension-heading";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { type ColorResult, SketchPicker } from "react-color";
import { useState } from "react";
import { Separator } from "@/Components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";

const ListButton = () => {
  const { editor } = useEditorStore();

  const lists = [
    {
      label: "Bullet List",
      Icon: ListIcon,
      isActive: () => editor?.isActive("bulletList"),
      onClick: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Ordered List",
      Icon: ListOrderedIcon,
      isActive: () => editor?.isActive("orderedList"),
      onClick: () => editor?.chain().focus().toggleOrderedList().run(),
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm bg-gray-950 hover:bg-gray-800 px-1.5 overflow-hidden text-sm">
          <ListIcon color="white" className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent  className="p-1 flex flex-col gap-y-1 bg-gray-950 border-gray-800 text-gray-200 focus:text-gray-200">
        {lists.map(({ label, Icon: Icon, onClick, isActive }) => (
          <button
            key={label}
            onClick={onClick}
            className={cn(
              "flex items-center gap-x-2 px-2 py-2 rounded-sm hover:bg-gray-900",
              isActive() && "bg-gray-900"
            )}
          >
            <Icon color="white" className="size-4" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const AlignButton = () => {
  const { editor } = useEditorStore();

  const alignments = [
    {
      label: "Align Left",
      value: "left",
      icon: AlignLeftIcon,
    },
    {
      label: "Align Center",
      value: "center",
      icon: AlignCenterIcon,
    },
    {
      label: "Align Right",
      value: "right",
      icon: AlignRightIcon,
    },
    {
      label: "Align Justify",
      value: "justify",
      icon: AlignJustifyIcon,
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm bg-gray-950 hover:bg-gray-800 px-1.5 overflow-hidden text-sm">
          <AlignLeftIcon color="white" className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-1 flex flex-col gap-y-1 bg-gray-950 border-gray-800 text-gray-200 focus:text-gray-200">
        {alignments.map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => editor?.chain().setTextAlign(value).run()}
            className={cn(
              "flex items-center gap-x-2 px-2 py-2 rounded-sm hover:bg-gray-900",
              editor?.isActive({ textAlign: value }) && "bg-gray-900"
            )}
          >
            <Icon color="white" className="size-4" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ImageButton = () => {
  const { editor } = useEditorStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [imageUrl, setImageUrl] = useState("");

  const onChange = (src: string) => {
    editor?.chain().focus().setImage({ src }).run();
  };

  const onUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        onChange(imageUrl);
      }
    };

    input.click();
  };

  const handleImageUrlSubmit = () => {
    if (imageUrl) {
      onChange(imageUrl);
      setImageUrl("");
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm bg-gray-950 hover:bg-gray-800 px-1.5 overflow-hidden text-sm">
            <ImageIcon color="white" className="size-4" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-gray-950 border border-gray-800 text-gray-200 focus:text-gray-200">
          <DropdownMenuItem className="bg-gray-950 border-gray-800 text-gray-200 focus:text-gray-200 focus:bg-gray-900" onClick={onUpload}>
            <UploadIcon color="white" className="size-4 mr-2" />
            Upload
          </DropdownMenuItem>

          <DropdownMenuItem className="bg-gray-950 border-gray-800 text-gray-200 focus:text-gray-200 focus:bg-gray-900" onClick={() => setIsDialogOpen(true)}>
            <SearchIcon color="white" className="size-4 mr-2" />
            Image Url
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-black border-gray-800 text-gray-200 focus:text-gray-200">
          <DialogHeader>
            <DialogTitle className="text-gray-200">Insert Image Url</DialogTitle>
          </DialogHeader>

          <Input
            placeholder="Insert Image Url"
            className=" bg-gray-900 text-gray-400 border-gray-800"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleImageUrlSubmit();
              }
            }}
          />
          <DialogFooter>
            <Button className="bg-gray-950 border-gray-800 hover:bg-gray-900" onClick={handleImageUrlSubmit}>Insert</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

const LinkButton = () => {
  const { editor } = useEditorStore();
  const [value, setValue] = useState("");

  const onChange = (href: string) => {
    editor?.chain().focus().extendMarkRange("link").setLink({ href }).run();
    setValue("");
  };

  return (
    <DropdownMenu
      onOpenChange={(open) => {
        if (open) {
          setValue(editor?.getAttributes("link").href || "");
        }
      }}
    >
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm bg-gray-950 hover:bg-gray-800 px-1.5 overflow-hidden text-sm">
          <Link2Icon color="white" className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-2.5 flex items-center bg-gray-950 border-gray-800 text-gray-200 focus:text-gray-200 gap-x-2">
        <Input
          placeholder="https://github/mickey_360.com"
          className=" bg-gray-900 text-gray-400 border-gray-800"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className="bg-gray-950 border border-gray-800 hover:bg-gray-900" onClick={() => onChange(value)}> Apply </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const HighlightColorButton = () => {
  const { editor } = useEditorStore();
  const value = editor?.getAttributes("highlight").color || "#FFFFFF";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm bg-gray-950 hover:bg-gray-800 px-1.5 overflow-hidden text-sm">
          <HighlighterIcon color='white' className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-0">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const TextColorButton = () => {
  const { editor } = useEditorStore();

  const value = editor?.getAttributes("textStyle").color || "#000000";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm bg-gray-950 hover:bg-gray-800 px-1.5 overflow-hidden text-sm">
          <span className="text-xs text-white">A</span>
          <div className="h-0.5 w-full" style={{ backgroundColor: value }} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-0">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const HeadingLevelButton = () => {
  const { editor } = useEditorStore();

  const headings = [
    { label: "Text size", value: 0, fontSize: "16px" },
    { label: "Heading 1", value: 1, fontSize: "32px" },
    { label: "Heading 2", value: 2, fontSize: "24px" },
    { label: "Heading 3", value: 3, fontSize: "20px" },
    { label: "Heading 4", value: 4, fontSize: "18px" },
    { label: "Heading 5", value: 5, fontSize: "16px" },
  ];

  const getCurrentHeading = () => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive("heading", { level })) {
        return "Heading";
      }
    }

    return "Text size";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm bg-gray-950 hover:bg-gray-800 px-1.5 overflow-hidden text-sm">
          <span className="truncate text-gray-200">{getCurrentHeading()}</span>
          <ChevronDownIcon color="white" className="ml-2 size-4 shrink-0 " />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-1 flex flex-col gap-y-1 bg-gray-950 border-gray-800 text-gray-200 focus:text-gray-200">
        {headings.map(({ label, value, fontSize }) => (
          <button
            key={value}
            style={{ fontSize }}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-gray-900",
              (value === 0 && !editor?.isActive("heading")) ||
                (editor?.isActive("heading", { level: value }) &&
                  "bg-gray-900")
            )}
            onClick={() => {
              if (value === 0) {
                editor?.chain().focus().setParagraph().run();
              } else {
                editor
                  ?.chain()
                  .focus()
                  .toggleHeading({ level: value as Level })
                  .run();
              }
            }}
          >
            {label}
          </button>
        ))}

      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const FontFamilyButton = () => {
  const { editor } = useEditorStore();

  const fonts = [
    { label: "Arial", value: "Arial" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Courier New", value: "Courier New" },
    { label: "Georgia", value: "Georgia" },
    { label: "Verdana", value: "verdana" },
    { label: "Dm Sans", value: "Dm Sans" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm bg-gray-950 hover:bg-gray-800 px-1.5 overflow-hidden text-sm">
          <span className="truncate text-gray-200">
            {editor?.getAttributes("textStyle").FontFamily || "Arial"}
          </span>
          <ChevronDownIcon color="white" className="ml-2 size-4 shrink-0 " />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1 bg-gray-950 border-gray-800 text-gray-200 focus:text-gray-200">
        {fonts.map(({ label, value }) => (
          <button
            onClick={() => editor?.chain().focus().setFontFamily(value).run()}
            key={value}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-gray-900",
              editor?.getAttributes("textStyle").FontFamily === value &&
                "bg-gray-900"
            )}
            style={{ fontFamily: value }}
          >
            <span className="text-sm"> {label} </span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 hover:bg-gray-900 bg-gray-950 flex items-center justify-center rounded-sm",
        isActive && "hover:bg-gray-700"
      )}
    >
      <Icon color="white" className="size-4" />
    </button>
  );
};

export const Toolbar = () => {
  const { editor } = useEditorStore();

  const sections: {
    label: string;
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon;
  }[][] = [
    [
      {
        label: "Undo",
        icon: UndoIcon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: RedoIcon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Checker",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        isActive: editor?.isActive("liveblocksCommentMark"),
        onClick: () => editor?.chain().focus().addPendingComment().run(),
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        isActive: editor?.isActive("tasklist"),
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
      },
      {
        label: "remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="px-2.5 py-0.5 bg-black border border-gray-800 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto print:hidden ">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}

      <Separator orientation="vertical" className="h-6 bg-gray-700 " />
      <FontFamilyButton />
      <Separator orientation="vertical" className="h-6 bg-gray-700 " />
      <HeadingLevelButton />

      <Separator orientation="vertical" className="h-6 bg-gray-700 " />
      {/* todo font size */}

      <Separator orientation="vertical" className="h-6 bg-gray-700 " />

      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}

      <TextColorButton  />
      <HighlightColorButton />

      <Separator orientation="vertical" className="h-6 bg-gray-700 " />
      <LinkButton />
      <ImageButton />
      <AlignButton /> 
      {/* todo line height */}
      <ListButton />

      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};
