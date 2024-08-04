import HtmlPreview from "./htmlPreview/htmlPreview";
import Instructions from "./instructions/instructions";
import RenderPreview from "./renderPreview/renderPreview";

export default function Preview() {
    return (
        <div className="flex flex-col gap-2 mb-10">
            <RenderPreview/>
            <HtmlPreview/>
            <Instructions/>
        </div>
    )
}