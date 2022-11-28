import ecommerce from "../../assets/Mibbyfashions.png"
import rpg from "../../assets/RpgGame.png"
import wordl from "../../assets/WordlSlang.png"
import quiz from "../../assets/Quizzical.png"
import tictactoe from "../../assets/TicTacToe.png"


interface Data { 
    name:string
    src:string
    description:string
    github:string
    live:string
    tools:string[],
}   

const projectData:Data[] = [
    {
        name:"E-Commerce Shop",
        description:"My biggest project to date. A dummy e-commerce website based on a business my lovely wife would like to start. I have noticeably bought a domain name in anticipation that this business will become an actuality.  ",
        src:ecommerce,
        github:"https://github.com/Tales-1/firebase-e-shop",
        live:"https://www.mibbyfashions.co.uk",
        tools:["React","TailwindCSS","Typescript","Redux","RR6","Firebase","Auth","Framer Motion","Cloudinary"]
    },
    {
        name:"RPG Game",
        description:"Fuelled by my love for RPGs, I created a turn-based RPG with different characters and enemy levels. I thoroughly enjoyed this project, whether it was designing the user interface or putting my object-oriented programming skills to the test.",
        src:rpg,
        github:"https://github.com/Tales-1/RPG-Game",
        live:"https://tales-1.github.io/RPG-Game/",
        tools:["HTML5", "CSS3", "Javascript"]
    },
    {
        name:"Wordl Slang Game",
        description:"Back when Wordle went viral. After 2 months of learning Javascript I decided to make my own variant of this popular game, completely from scratch, and without referring to tutorials. One of my favourite projects to date.",
        src:wordl,
        github:"https://github.com/Tales-1/WordlSlangEdition",
        live:"https://tales-1.github.io/WordlSlangEdition/",
        tools:["HTML5","CSS3","Javascript"]
    },
    {
        name:"Quiz App",
        description:"A project featured in Scrimba's React basics course. My first 'major' React project dealing with fetching data and sorting it accordingly.",
        src:quiz,
        github:"https://github.com/Tales-1/MyTriviaAppProject",
        live:"https://tales-1.github.io/MyTriviaAppProject/",
        tools:["React","CSS3"]
    },
    {
        name:"Tic-Tac-Toe",
        description:"1 month into learning React I decided to make a Tic-Tac-Toe game from scratch. Much like the 'Wordl Slang Game' I refused to use a tutorial and conquered this challenge in a few days.",
        src:tictactoe,
        github:"https://github.com/Tales-1/TicTacToe",
        live:"https://tales-1.github.io/TicTacToe/",
        tools:["React", "CSS3"]
    },
]

export default projectData