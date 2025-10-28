"use client";

const Footer = () => {
    return(
        <main className="bg-black py-8 px-4 flex justify-center items-center gap-2">
            <p className="text-yellow-500 text-2xl font-san text-center ">MovieBox 🎬</p>
            <h1 className="font-bold text-red-600 hover:text-yellow-600">&copy; {new Date().getFullYear()} ShyNaDev</h1>
        </main>
    );
}


export default Footer;