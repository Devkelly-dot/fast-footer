import { useState } from "react";
import HomeHero from "../components/homeHero/homeHero";
import FooterCreatorApp from "./footerCreatorApp";

export default function HomePage() {
    const [showApp, setShowApp] = useState(false);

    return (
        <>
            {
                showApp ? 
                <FooterCreatorApp/>
                :
                <HomeHero
                    onGetStarted={()=>setShowApp(true)}
                />
            }
        </>
    )
}