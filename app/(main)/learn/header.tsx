import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
    title: string;
};

export const Header = ({ title }: Props) => {
    return (
        <div className="sticky top-0 bg-gradient-to-r from-red-300 via-red-200 to-[#c8777f] pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">

        <div className="absolute left-1/2 top-1/2 w-[70%] h-[70%] bg-[url('/header-bg.svg')] bg-cover bg-center rounded-lg -translate-x-1/2 -translate-y-1/2 -z-10" />

            <Link href="/courses">
                <Button variant="ghost" size="sm">
                    <ArrowLeft className="h-5 w-5 stroke-2 text-red-900" />
                </Button>
            </Link>
            <h1 className="font-bold text-lg text-white px-1 bg-rose-900 rounded-md shadow-md -translate-y-2">
                {title}
            </h1>
            <div />
        </div>
    );
};