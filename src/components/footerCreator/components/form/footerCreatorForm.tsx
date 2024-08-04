import { useState } from "react";
import ShadowBox from "../../../common/shadowBox";
import ImageInput from "./widgets/imageInput";
import NameInput from "./widgets/nameInput";
import RoleInput from "./widgets/roleInput";
import StyledButton from "../../../common/styledButton";
import NumberInput from "./widgets/numberInput";
import EmailInput from "./widgets/emailInput";
import AddressInput from "./widgets/addressInput";

export default function FooterCreatorForm() {
    const [showForm, setShowForm] = useState(true);

    return (
        <div className="mb-10 mt-10">
            <ShadowBox>
                {
                    showForm &&
                    <>
                        <div className="flex flex-col gap-1 mb-4">
                            <h1 className=" text-3xl font-bold">Fill out the form below to create your signature</h1>
                            <p className="">Your data is <b>NOT</b> stored or sent to any servers. It is only used to generate the HTML for your signature below.</p>
                        </div>
                        <ImageInput/>
                        <NameInput/>
                        <RoleInput/>
                        <NumberInput/>
                        <EmailInput/>
                        <AddressInput/>
                    </>
                }
                <StyledButton
                    text={showForm ? 'Hide Form' : 'Show Form'}
                    onClick={() => setShowForm(!showForm)}
                />
            </ShadowBox>
        </div>
    )
}