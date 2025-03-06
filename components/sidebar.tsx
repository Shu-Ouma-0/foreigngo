import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import {
    ClerkLoading,
    ClerkLoaded,
    UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
    className?: string;
    onClose?: () => void;
}

export const Sidebar = ({ className, onClose }: Props) => {
    return (
        <div className={cn(
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className,
        )}>
            <Link href="/learn" onClick={onClose}>
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
                    <h1 className="text-2xl font-extrabold text-rose-600 tracking-wide">
                        Foreigngo
                    </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem 
                    label="Học tập" 
                    href="/learn" 
                    iconSrc="/learn.svg"
                    onClick={onClose}
                />
                <SidebarItem 
                    label="Bảng xếp hạng" 
                    href="/leaderboard" 
                    iconSrc="/leaderboard.svg"
                    onClick={onClose} 
                />
                <SidebarItem 
                    label="Thử thách" 
                    href="/quests" 
                    iconSrc="/quests.svg"
                    onClick={onClose} 
                />
                <SidebarItem 
                    label="Cửa hàng" 
                    href="/shop" 
                    iconSrc="/shop.svg"
                    onClick={onClose} 
                />
                <hr className="my-2 border-t-2 border-gray-200" />
                <div className="relative p-4 flex items-center">
                    <span className="mr-8 text-md font-bold text-red-900">TÀI KHOẢN:</span>
                    <ClerkLoading>
                        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <UserButton
                            appearance={{
                                elements: { userButtonPopoverCard: { pointerEvents: "initial" } },
                            }}
                            afterSignOutUrl="/" 
                        />
                    </ClerkLoaded>
                </div>
            </div>           
            <div className="flex justify-center p-4">
                <Image src="/hunre.svg" height={200} width={200} alt="Logo" />
            </div>
            <span className="mb-0 text-center text-md font-bold text-red-900">© Copyright - nghiapq</span>
            <span className="mb-6 text-center text-md font-bold text-red-900">ĐH11C1 - 21111060128</span>
        </div>
    );
};