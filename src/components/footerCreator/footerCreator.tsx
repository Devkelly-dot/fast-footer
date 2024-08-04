import { FooterCreatorProvider } from "../../context/footerCreatorContext";
import FooterCreatorForm from "./components/form/footerCreatorForm";
import Preview from "./components/preview/preview";

export default function FooterCreator() {

    return (
        <FooterCreatorProvider>
            <div className="flex justify-center">
                <div style={{width: '1280px'}}>
                    <h1>Footer Creator</h1>
                    <FooterCreatorForm/>
                    <Preview/>
                </div>
            </div>
        </FooterCreatorProvider>
    )
}