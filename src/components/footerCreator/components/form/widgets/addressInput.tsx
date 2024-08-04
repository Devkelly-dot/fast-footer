import { ChangeEvent } from "react";
import { useFooterData } from "../../../../../context/footerCreatorContext";
import TextFormField from "../../../../common/textFormField";

export default function AddressInput() {
    const {footerData, setFooterData} = useFooterData();

    function changeAddress(e: ChangeEvent<HTMLInputElement>) {
        setFooterData({
            ...footerData,
            address: e.target.value
        });
    }

    return (
        <div>
            <TextFormField
                label="Address"
                value={footerData.address}
                onChange={changeAddress}
            />
        </div>
    )
}