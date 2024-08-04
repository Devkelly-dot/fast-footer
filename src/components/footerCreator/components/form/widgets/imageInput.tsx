import { ChangeEvent } from "react";
import { useFooterData } from "../../../../../context/footerCreatorContext";
import TextFormField from "../../../../common/textFormField";

export default function ImageInput() {
    const {footerData, setFooterData} = useFooterData();

    function changeImageUrl(e: ChangeEvent<HTMLInputElement>) {
        setFooterData({
            ...footerData,
            image: e.target.value
        });
    }

    return (
        <div>
            <TextFormField
                label="Your Picture (Url)"
                value={footerData.image}
                onChange={changeImageUrl}
                description={`Enter the URL of the image you would like to use for your email signature. You can upload your image to a site like imgur.com, right click and select "copy image address" and paste the URL here.`}
            />
        </div>
    )
}