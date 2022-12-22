import GithubIcon from "./github.png"
import GmailIcon from "./gmail-white.png"
import LinkedIn from "./linkedin-white.png"
import TwitterIcon from "./twitter-white.png"

interface IconData {
    src:string
    alt:string
    link:string
}

export const iconsArray:IconData[] = [
    {
        src:GithubIcon,
        alt:"Github Logo",
        link:"https://github.com/Tales-1"

    },
    {
        src:GmailIcon,
        alt:"G-mail logo",
        link:"mailto:jawad.nazir124@gmail.com"
    },
    {
        src:LinkedIn,
        alt:"LinkedIn logo",
        link:"https://www.linkedin.com/in/jawad-nazir-31129b240/"
    },
    {
        src:TwitterIcon,
        alt:"Twitter logo",
        link:"https://twitter.com/JayNaz97"
    }
]