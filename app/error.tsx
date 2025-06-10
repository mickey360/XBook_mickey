"use client";

import { Button } from "@/Components/ui/button";
import { AlertTriangleIcon } from "lucide-react";
import Link from "next/link";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-black p-3 rounded-full">
            <AlertTriangleIcon className="size-10 text-orange-500" />
          </div>
        </div>
        <div className="space-y-2 ">
          <h2 className="text-xl font-semibold text-gray-300">
            Something went wrong
          </h2>
          <p className="text-gray-400">{error.message}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <Button onClick={reset} className="font-medium bg-gray-950 hover:bg-gray-900 border border-gray-800 text-gray-200 hover:text-gray-200 px-6">
          Try again
        </Button>
        <Button asChild variant="ghost" className="font-medium bg-black hover:bg-gray-900 border border-gray-800 text-gray-200 hover:text-gray-200">
          <Link href="/">Go back</Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
