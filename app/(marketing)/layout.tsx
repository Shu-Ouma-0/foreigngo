import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return(
        <div className="min-h-screen bg-gradient-to-b from-red-300 via-rose-300 to-red-100 flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center">
                {children}
            </main>
            <Footer />           
        </div>
    );
};

export default MarketingLayout;