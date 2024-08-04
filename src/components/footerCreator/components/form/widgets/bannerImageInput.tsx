import React, { useState} from "react";
import { useFooterData } from "../../../../../context/footerCreatorContext";
import StyledButton from "../../../../common/styledButton";

interface BottomBanner {
    url: string;
    title: string;
    textColor: string;
    backgroundColor: string;
}

const BottomBannerInput: React.FC = () => {
    const { footerData, setFooterData } = useFooterData();
    const [bottomBanner, setBottomBanner] = useState<BottomBanner>({
        url: footerData.bottomBanner.url,
        title: footerData.bottomBanner.title,
        textColor: footerData.bottomBanner.textColor,
        backgroundColor: footerData.bottomBanner.backgroundColor,
    });

    const handleChange = (field: keyof BottomBanner, value: string) => {
        setBottomBanner({
            ...bottomBanner,
            [field]: value,
        });
    };

    const handleSave = () => {
        setFooterData({ ...footerData, bottomBanner });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bottom Banner Settings</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Banner URL</label>
                <input
                    type="url"
                    value={bottomBanner.url}
                    onChange={(e) => handleChange('url', e.target.value)}
                    placeholder="Banner Image URL"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Title</label>
                <input
                    type="text"
                    value={bottomBanner.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="Banner Title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4 flex items-center gap-4">
                <div className="flex-1">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Text Color</label>
                    <input
                        type="color"
                        value={bottomBanner.textColor}
                        onChange={(e) => handleChange('textColor', e.target.value)}
                        className="w-full"
                    />
                </div>
            </div>

            <div className="mb-4 flex items-center gap-4">
                <div className="flex-1">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Background Color</label>
                    <input
                        type="color"
                        value={bottomBanner.backgroundColor}
                        onChange={(e) => handleChange('backgroundColor', e.target.value)}
                        className="w-full"
                    />
                </div>
            </div>
            <div className="text-left">
                <StyledButton
                    onClick={handleSave}
                    text="Save Banner"
                />
            </div>
        </div>
    );
};

export default BottomBannerInput;