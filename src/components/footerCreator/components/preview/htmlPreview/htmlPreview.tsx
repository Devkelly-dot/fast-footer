import { useState } from "react";
import { useFooterData } from "../../../../../context/footerCreatorContext";
import { generateFooter } from "../../../../../utils/footerGenerator";
import StyledButton from "../../../../common/styledButton";

export default function HtmlPreview() {
    const {footerData} = useFooterData();

    const [showHtml, setShowHtml] = useState(false);


    return (
        <div>
            {showHtml ? (
                <div className="flex flex-col items-start">
                    <textarea 
                        value={generateFooter(footerData)} 
                        readOnly 
                        className="w-full h-48 p-3 border border-gray-300 rounded-lg shadow-sm mb-4 resize-none"
                    />
                    <StyledButton
                        onClick={() => setShowHtml(false)} 
                        text="Hide HTML"
                        alt
                    />
                </div>
            ) : (
                <div className="flex flex-col items-start">
                    <StyledButton 
                        onClick={() => setShowHtml(true)} 
                        text="Show HTML"
                    />
                </div>
            )}
        </div>
    )
}