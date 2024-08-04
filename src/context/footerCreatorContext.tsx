import React, { createContext, useState, ReactNode, FC, useContext } from 'react';
import { FooterData } from './footerInterfaces';



interface FooterCreatorContextType {
    footerData: FooterData;
    setFooterData: React.Dispatch<React.SetStateAction<FooterData>>;
}

const FooterCreatorContext = createContext<FooterCreatorContextType | undefined>(undefined);

interface FooterCreatorProviderProps {
    children: ReactNode;
}

const FooterCreatorProvider: FC<FooterCreatorProviderProps> = ({ children }) => {
    const [footerData, setFooterData] = useState<FooterData>({
        image: 'https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/1b0e2f26-3c18-498d-8130-1c3fe7a16d99/DallEGeneratedImages/dalle-65d4dd80-0346-4ec3-af44-a198e453707a0251679543305031941200.jpg&dcHint=WestUS2&fileToken=a383afcd-5bda-4335-80c3-af67a202d927',
        title: 'First Last',
        subTitle: 'CEO',
        number: '111-111-1111',
        email: 'JaneDoe@example.com',
        address: '1234 Example St. City, State 12345',
        socials: [
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/'
            },
            {
                name: 'Twitter',
                url: 'https://twitter.com/'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/'
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/'
            }
        ],
        colorTheme: {
            text: 'black',
            accent: 'blue'
        },
        bottomBanner: {
            url: 'https://i.imgur.com/R3CIHf9.png',
            title: 'Make super awesome email signatures!',
            textColor: 'white',
            backgroundColor: '#800020'
        },
        company: ''
    });

    return (
        <FooterCreatorContext.Provider value={{ footerData, setFooterData }}>
            {children}
        </FooterCreatorContext.Provider>
    );
};

const useFooterData = () => {
    const context = useContext(FooterCreatorContext);
    if (!context) {
        throw new Error('useFooterData must be used within a FooterCreatorProvider');
    }
    return context;
};

export { FooterCreatorProvider, useFooterData };
export default FooterCreatorContext;