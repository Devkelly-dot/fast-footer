import ShadowBox from "../../../../../common/shadowBox";

export default function GmailInstructions() {
    return (
        <ShadowBox>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Gmail And Other Email Clients Auto Signature:
            </h3>
            <div className="font-bold mb-8">
                <h4>Copy / Pasting the signature into the signature settings of your email client may work, but sometimes the formatting will get messed up</h4>
                <h4>If this happens, follow the steps below to copy a properly formatted version of the signature for your email client</h4>
            </div>
            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                    <span className="w-4 h-4 mt-1 mr-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    Click the "Show HTML" button above
                </li>
                <li className="flex items-start">
                    <span className="w-4 h-4 mt-1 mr-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    Copy the entire HTML code in the text area that appears
                </li>
                <li className="flex items-start">
                    <span className="w-4 h-4 mt-1 mr-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    Create a new text file on your Desktop named "signature.txt"
                </li>
                <li className="flex items-start">
                    <span className="w-4 h-4 mt-1 mr-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    Open the text file and press Control-V to paste the HTML code
                </li>
                <li className="flex items-start">
                    <span className="w-4 h-4 mt-1 mr-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    Rename the signature.txt file to signature.html and double click the file to open it in your browser
                </li>
                <li className="flex items-start">
                    <span className="w-4 h-4 mt-1 mr-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    The browser will display your signature. Press control-a to highlight the entire browser page 
                </li>
                <li className="flex items-start">
                    <span className="w-4 h-4 mt-1 mr-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    Now you can paste this signature into your Gmail's signature settings
                </li>
            </ol>
        </ShadowBox>
    )
}