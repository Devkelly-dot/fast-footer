import { useState } from "react";
import GmailInstructions from "./widgets/gmailInstructions";
import CopyPasteInstructions from "./widgets/copyPasteInstructions";

const tabs = {
    GMAIL: "GMAIL",
    MANUAL: "MANUAL"
};

export default function Instructions() {
    const [tab, setTab] = useState(tabs.MANUAL);

    return (
        <div style={{minHeight:'40rem'}}>
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How to use signature:</h2>
                <div className="flex border-b border-gray-200">
                    <button
                        onClick={() => setTab(tabs.MANUAL)}
                        className={`py-2 px-4 text-sm font-medium ${tab === tabs.MANUAL ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-600'}`}
                    >
                        Copy/Paste Instructions
                    </button>
                    <button
                        onClick={() => setTab(tabs.GMAIL)}
                        className={`py-2 px-4 -mb-px text-sm font-medium ${tab === tabs.GMAIL ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-600'}`}
                    >
                        Gmail Instructions
                    </button>
                </div>
            </div>
            {tab === tabs.GMAIL ? <GmailInstructions /> : <CopyPasteInstructions />}
        </div>
    );
}