export default function CopyPasteInstructions() {
    return (
        <div className="p-6 w-full mx-auto bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Manually Copy And Paste Signature:
            </h3>
            <div className="font-bold mb-8">
                <h4>Manually copy your signature above to paste in your emails</h4>
            </div>
            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                    <span className="w-4 h-4 mt-1 mr-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    {"Highlight your signature above (the actual signature, NOT the HTML code)"}
                </li>
                <li className="flex items-start">
                    <span className="w-4 h-4 mt-1 mr-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    {"Press Control-C to copy the signature to your clipboard"}
                </li>
                <li className="flex items-start">
                    <span className="w-4 h-4 mt-1 mr-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    {"Compose a new email and press Control-V to paste the signature into the email body"}
                </li>
            </ol>
        </div>
    )
}