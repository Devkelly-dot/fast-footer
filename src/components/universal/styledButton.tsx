import { FC } from "react";

interface StyledButtonProps {
    onClick: () => void;
    text: string;
    alt?: boolean;
}

const StyledButton: FC<StyledButtonProps> = ({ onClick, text, alt }) => {

    return (
        <button 
            onClick={onClick} 
            className={`px-6 py-3 ${alt?"bg-gray-700":"bg-blue-600"} text-white font-medium rounded-lg shadow-md ${alt?"hover:bg-gray-800":"hover:bg-blue-700"}transition duration-300 ease-in-out`}
        >
            {text}
        </button>
    )
}

export default StyledButton;