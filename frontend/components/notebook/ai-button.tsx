"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { BrainIcon } from "lucide-react";

type ChatItem = {
  user: { question: string };
  ai: { answer: string };
  isCode: boolean;
};

const AiButton = () => {
  
  return (
    <Sheet>
      <SheetTrigger>
        <Button id="ai-btn" variant="ghost" size="sm" className="w-fit mt-1 py-1 text-xs text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-800">
          <BrainIcon size={15} className="mr-1" />
          Write with AI
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-900 border-gray-800 text-white">
        <SheetHeader>
          <SheetTitle className="text-white flex items-center">
            <BrainIcon className="mr-2" /> Animate with AI
          </SheetTitle>
          <SheetDescription>
            This AI is specifically designed for Manim animations.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AiButton;