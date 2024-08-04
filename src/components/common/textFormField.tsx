import { FC, ChangeEvent } from "react";

interface TextFormFieldProps {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    renderField?: () => JSX.Element;
    description?: string; // Optional description
}

const TextFormField: FC<TextFormFieldProps> = ({ label, value, onChange, renderField, description }) => {
    return (
        <div className="mb-4 text-left">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
                {label}
            </label>
            {description && (
                <p className="text-gray-600 text-xs mb-2">{description}</p>
            )}
            {renderField ? (
                renderField()
            ) : (
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            )}
        </div>
    );
};

export default TextFormField;