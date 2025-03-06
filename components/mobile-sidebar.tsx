"use client";

import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

import { useState } from "react";

export const MobileSidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger onClick={() => setOpen(true)}>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent className="p-0 z-[100] bg-gradient-to-b from-red-200 via-rose-300 to-red-400 overflow-y-auto" side="left">
                <Sidebar onClose={() => setOpen(false)} />
            </SheetContent>
        </Sheet>
    );
};