import { FC, ReactNode } from "react";

interface ShadowBoxProps {
    children: ReactNode;
}

const ShadowBox: FC<ShadowBoxProps> = ({ children }) => {
    return (
        <div className="p-6 w-full mx-auto bg-white shadow-lg rounded-lg">
            {children}
        </div>
    )
}

export default ShadowBox;