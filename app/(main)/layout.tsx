import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({
    children,
}: Props) => {
    return (
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex" />
            <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
                <div className="fixed inset-0 bg-gradient-to-r from-red-300 via-rose-300 to-red-950 -z-10" />
                <div className="max-w-[1056px] mx-auto pt-6 h-full">
                    {children}
                </div>
            </main>           
        </>
    );
};

export default MainLayout;