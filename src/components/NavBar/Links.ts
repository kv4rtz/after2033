export interface ILink {
    text: string,
    link: string,
}

const links: ILink[] = [
    // {
    //     text: "TECH SUPPORT",
    //     link: "/techsupport",
    // },
    // {
    //     text: "ABOUT US",
    //     link: "/aboutus",
    // },
    {
        text: "LOGIN",
        link: "/login",
    },
    {
        text: "SIGN UP",
        link: "/register",
    },
    {
        text: "PRE-ORDER",
        link: "https://store.steampowered.com/?l=russian",
    },
]

export default links