import { FooterData } from "../context/footerInterfaces";

function generateSource(social: string) {
    switch (social) {
        case 'Facebook':
            return 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png';
        case 'Twitter':
            return 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png';
        case 'Instagram':
            return 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png';
        case 'LinkedIn':
            return 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png';
        default:
            return '';
    }
}

export function generateFooter(footerData: FooterData) {
    
    return `
        <div style="max-width: 650px;">
            <div style="display: flex; align-items: center; font-family: Arial, sans-serif; width: 100%; margin-bottom: 1rem">
                <div style="width: 25%;">
                    <img src="${footerData?.image}" alt="${footerData?.title}" style="width: 100%; max-height: 150px; border-radius: 50%; object-fit: cover;"/>
                </div>
                <div style="width: 2px; height: 150px; background-color: ${footerData?.colorTheme?.text}; margin: 0 20px;"></div>
                <div>
                    <div
                        style="display: flex; gap: 10px; align-items: center;"
                    >
                        <h2 style="margin: 0; font-weight: bold; font-size: 16px; color: ${footerData?.colorTheme?.text};">${footerData?.title}</h2>
                        <h3 style="margin: 0; font-size: 14px; color: ${footerData?.colorTheme?.text};">${footerData?.subTitle}</h3>
                    </div>
                    <div>
                        <p style="padding-bottom: 1px; text-align: left;">${footerData?.company}</p>
                    </div>
                    <div style="margin-top: 10px; font-size: 12px; color: ${footerData.colorTheme.text}; text-align: left;">
                        <p style="padding-bottom: 1px;">${footerData?.number}</p>
                        <p style="padding-bottom: 1px;">${footerData?.email}</p>
                        <p style="padding-bottom: 1px;">${footerData?.address}</p>
                    </div>
                    <div style="margin-top: 10px; display: flex">
                        ${footerData.socials?.map(social => `
                            <a href="${social.url}" target="_blank" style="text-decoration: none; margin-right: 10px;">
                                ${
                                    generateSource(social?.name) !== '' ?
                                    `<img src="${generateSource(social?.name)}" alt="${social?.name}" style="width: 24px; height: 24px;"/>`
                                    :
                                    `<a href=${social.url}>${social?.name}</a>`
                                }
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div style="background-color: ${footerData?.bottomBanner?.backgroundColor}; padding: 0 0.5rem; display: flex; justify-content: space-around; align-items: center; width: 100%">
                <img src="${footerData?.bottomBanner?.url}" alt="${footerData?.bottomBanner?.title}" style="max-height: 150px; width: 100%; object-fit: cover;"/>
                <div style="width: 100%; text-align: center;">
                    <h2 style="font-weight: bold; font-size: 21px; color: ${footerData?.bottomBanner?.textColor};">${footerData?.bottomBanner?.title}</h2>
                </div>
            </div>
        </div>
    `;
}