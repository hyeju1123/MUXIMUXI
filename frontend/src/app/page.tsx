import { Inter } from "@next/font/google";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Nav />
        </>
    );
}
