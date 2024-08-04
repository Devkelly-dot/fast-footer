import { ChangeEvent } from "react";
import { useFooterData } from "../../../../../context/footerCreatorContext";
import TextFormField from "../../../../common/textFormField";

export default function RoleInput() {
    const {footerData, setFooterData} = useFooterData();

    function changeRole(e: ChangeEvent<HTMLInputElement>) {
        setFooterData({
            ...footerData,
            subTitle: e.target.value
        });
    }

    return (
        <div>
            <TextFormField
                label="Role"
                value={footerData.subTitle}
                onChange={changeRole}
                description="Your role at the company"
            />
        </div>
    )
}