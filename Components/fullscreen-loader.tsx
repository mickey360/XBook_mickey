// import { LoaderIcon } from "lucide-react";
import Image from "next/image";

interface FullscreenLoaderProps{
    label?: string;
};

export const FullscreenLoader = ({ label }: FullscreenLoaderProps) => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-2">
            <Image src="/logo.svg" alt="logo" width={36} height={36} className=" animate-pulse " />
            {/* <LoaderIcon color="white" className="size-6 text-muted-foreground animate-spin" /> */}
            {label && <p className="text-sm text-gray-100 text-muted-foreground">{label}</p>}
        </div>
    );
};