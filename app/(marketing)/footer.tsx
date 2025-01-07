import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/vn.svg" 
                        alt="Vietnamese" 
                        height={32} 
                        width={40}
                        className="mr-4 rounded-md" 
                    />
                    Vietnamese
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/uk.svg" 
                        alt="England" 
                        height={32} 
                        width={40}
                        className="mr-4 rounded-md" 
                    />
                    England
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/jp.svg" 
                        alt="Japanese" 
                        height={32} 
                        width={40}
                        className="mr-4 rounded-md" 
                    />
                    Japanese
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/sw.svg" 
                        alt="Sweden" 
                        height={32} 
                        width={40}
                        className="mr-4 rounded-md" 
                    />
                    Sweden
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="/ca.svg" 
                        alt="Canadian" 
                        height={32} 
                        width={40}
                        className="mr-4 rounded-md" 
                    />
                    Canadian
                </Button>
            </div>
        </footer>
    );
};