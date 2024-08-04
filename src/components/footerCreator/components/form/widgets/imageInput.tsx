import { ChangeEvent } from "react";
import { useFooterData } from "../../../../../context/footerCreatorContext";

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
            <label htmlFor="image">Image URL</label>
            <input type="text" id="image" value={footerData.image} onChange={changeImageUrl}/>
        </div>
    )
}