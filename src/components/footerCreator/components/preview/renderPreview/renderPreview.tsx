import { useFooterData } from "../../../../../context/footerCreatorContext";
import { generateFooter } from "../../../../../utils/footerGenerator";

export default function RenderPreview() {
    const { footerData } = useFooterData();

    return (
        <div className="w-full; flex; flex-col; justify-end">
            <div>
                <div 
                    dangerouslySetInnerHTML={{ __html: generateFooter(footerData) }}
                ></div>
            </div>
        </div>
    );
}