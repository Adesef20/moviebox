"use client";
import Link from "next/link";

const Footer = () => {
    return(
        <main className="bg-black py-8 px-4 flex justify-center items-center gap-2">
            <div className="max-w-7xl mx-auto flex justify-center py-4">
                <Link href="/" className="text-3xl font-bold text-yellow-400 tracking-wide"> 
                      MovieBox🎬
                 </Link>
                 <h1 className="font-bold text-red-600 hover:text-yellow-600">&copy; {new Date().getFullYear()} ShyNaDev</h1>
            </div>
        </main>
    );
}


export default Footer;