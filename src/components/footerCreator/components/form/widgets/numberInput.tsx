import { ChangeEvent } from "react";
import { useFooterData } from "../../../../../context/footerCreatorContext";
import TextFormField from "../../../../common/textFormField";

export default function NumberInput() {
    const {footerData, setFooterData} = useFooterData();

    function changeNumber(e: ChangeEvent<HTMLInputElement>) {
        setFooterData({
            ...footerData,
            number: e.target.value
        });
    }

    return (
        <div>
            <TextFormField
                label="Phone Number"
                value={footerData.number}
                onChange={changeNumber}
            />
        </div>
    )
}