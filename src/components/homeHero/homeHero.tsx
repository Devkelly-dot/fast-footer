import React from "react";

interface HomeHeroProps {
    onGetStarted: () => void;
}

const HomeHero: React.FC<HomeHeroProps> = ({ onGetStarted }) => {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://i.imgur.com/R3CIHf9.png')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Fast Footer</h1>
                <p className="text-lg md:text-2xl mb-6">Create An Email Signature In Minutes</p>
                <button 
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg"
                    onClick={onGetStarted}
                >
                    Get Started
                </button>
                <div className=" mt-20">
                    <p className="text-md md:text-xl mb-6">
                        Fast Footer is a simple and free tool for creating email signatures as quickly as possible for your business or for personal use
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HomeHero;