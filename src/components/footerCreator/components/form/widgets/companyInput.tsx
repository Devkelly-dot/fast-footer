import { ChangeEvent } from "react";
import { useFooterData } from "../../../../../context/footerCreatorContext";
import TextFormField from "../../../../common/textFormField";

export default function CompanyInput() {
    const {footerData, setFooterData} = useFooterData();

    function changeInput(e: ChangeEvent<HTMLInputElement>) {
        setFooterData({
            ...footerData,
            company: e.target.value
        });
    }

    return (
        <div>
            <TextFormField
                label="Company"
                value={footerData.company}
                onChange={changeInput}
            />
        </div>
    )
}