import React, { useState } from "react";
import { useFooterData } from "../../../../../context/footerCreatorContext";
import StyledButton from "../../../../common/styledButton";

interface Social {
    name: string;
    url: string;
}

const SocialsInput: React.FC = () => {
    const { footerData, setFooterData } = useFooterData();
    const [socials, setSocials] = useState<Social[]>(footerData.socials);

    const handleAddSocial = () => {
        setSocials([...socials, { name: '', url: '' }]);
    };

    const handleRemoveSocial = (index: number) => {
        const newSocials = socials.filter((_, i) => i !== index);
        setSocials(newSocials);
    };

    const handleChange = (index: number, field: 'name' | 'url', value: string) => {
        const updatedSocials = socials.map((social, i) =>
            i === index ? { ...social, [field]: value } : social
        );
        setSocials(updatedSocials);
    };

    const handleSave = () => {
        setFooterData({ ...footerData, socials });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Social Media Links</h2>
            {socials.map((social, index) => (
                <div key={index} className="mb-4 flex items-center gap-4">
                    <input
                        type="text"
                        value={social.name}
                        onChange={(e) => handleChange(index, 'name', e.target.value)}
                        placeholder="LinkedIn"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="url"
                        value={social.url}
                        onChange={(e) => handleChange(index, 'url', e.target.value)}
                        placeholder="https://www.linkedin.com/"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={() => handleRemoveSocial(index)}
                        className="text-red-500 hover:text-red-700"
                    >
                        Remove
                    </button>
                </div>
            ))}
            <div className="flex gap-4">
                <StyledButton
                    onClick={handleAddSocial}
                    text="Add Social Link"
                />
                <StyledButton
                    onClick={handleSave}
                    text="Save Socials"
                    alt
                />
            </div>
        </div>
    );
};

export default SocialsInput;