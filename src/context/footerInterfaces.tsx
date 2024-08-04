export interface colorTheme {
    text: string;
    accent: string;
}


export interface Social {
    name: string;
    url: string;
}

export interface BottomBanner {
    title: string;
    url: string;
    textColor: string;
    backgroundColor: string;
}

export interface FooterData {
    image: string;
    title: string;
    subTitle: string;
    number: string;
    email: string;
    address: string;
    socials: Social[];
    colorTheme: colorTheme;
    bottomBanner: BottomBanner;
    company: string;
}