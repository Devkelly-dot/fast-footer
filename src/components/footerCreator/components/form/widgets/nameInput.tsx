import { ChangeEvent } from "react";
import { useFooterData } from "../../../../../context/footerCreatorContext";
import TextFormField from "../../../../common/textFormField";

export default function NameInput() {
    const {footerData, setFooterData} = useFooterData();

    function changeName(e: ChangeEvent<HTMLInputElement>) {
        setFooterData({
            ...footerData,
            title: e.target.value
        });
    }

    return (
        <div>
            <TextFormField
                label="Name"
                value={footerData.title}
                onChange={changeName}
            />
        </div>
    )
}