import { ChangeEvent } from "react";
import { useFooterData } from "../../../../../context/footerCreatorContext";
import TextFormField from "../../../../common/textFormField";

export default function EmailInput() {
    const {footerData, setFooterData} = useFooterData();

    function changeEmail(e: ChangeEvent<HTMLInputElement>) {
        setFooterData({
            ...footerData,
            email: e.target.value
        });
    }

    return (
        <div>
            <TextFormField
                label="Email Address"
                value={footerData.email}
                onChange={changeEmail}
            />
        </div>
    )
}