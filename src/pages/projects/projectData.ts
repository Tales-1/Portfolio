import ecommerce from "../../assets/Mibbyfashions.png"
import rpg from "../../assets/rpg-game.png"
import wordl from "../../assets/WordlSlang.png"
import quiz from "../../assets/Quizzical.png"
import tictactoe from "../../assets/TicTacToe.png"


interface Data { 
    name:string
    pageRoute:string
    src:string
    description:string
    github:string
    live:string
    tools:string[]
    dates:string
    motive:string
    features:string[]
    learnt:string[]
    struggles?:string
}   

const projectData:Data[] = [
    {
        name:"E-Commerce Shop",
        pageRoute:"e-commerce-shop",
        description:"My biggest project to date. A dummy e-commerce website based on a business my lovely wife would like to start. I have noticeably bought a domain name in anticipation that this business will become an actuality.  ",
        src:ecommerce,
        github:"https://github.com/Tales-1/firebase-e-shop",
        live:"https://mibbyfashions.co.uk",
        tools:["React","TailwindCSS","Typescript","Redux","RR6","Firebase","Auth","Framer Motion","Cloudinary"],
        dates:"October 22 - November 16 2022",
        motive:"I was looking for a killer project. One that would really put my React skills to the test. Having just come back from an (unintentional) two month coding break, I was inspired by one person, My wife. For a while she had wanted sell asian clothes. So I thought to myself, why not build a full stack e-commerce website? While the end product is still some ways from initial aim, it definitely comes close and I will surely return to deploy this app once it is ready for production.",
        features:["Shopping cart", "User authentication", "Search bar", "Responsive"],
        learnt:["Redux","Global state management", "TypeScript", "TailwindCSS", "Firebase", "User Authentication", "Cloudinary", "Framer-Motion", "React Router 6", "File structure"],
        struggles:""
    },
    {
        name:"RPG Game",
        pageRoute:"rpg-game",
        description:"Fuelled by my love for RPGs, I created a turn-based RPG with different characters and enemy levels. I thoroughly enjoyed this project, whether it was designing the user interface or putting my object-oriented programming skills to the test.",
        src:rpg,
        github:"https://github.com/Tales-1/RPG-Game",
        live:"https://tales-1.github.io/RPG-Game/",
        tools:["HTML5", "CSS3", "Javascript"],
        dates:"July 20 - July 29 2022",
        motive:"After learning React for 2 months, I felt unsure with my knowledge of Object Oriented Programming (OOP). While peeking through Scrimba's JavaScript course the idea of making a turn based RPG screamed at me. Being a massive fan of RPG's I was extremely excited to take this project head on and thoroughly enjoyed the experience. ",
        features:["Object Oriented Programming", "Character level system", "Turn based", "Magic abilities", "9 level roadmap"],
        learnt:["Object Oriented Programming", "Rendering a SPA using Vanilla JS"],
        struggles:""
    },
    {
        name:"Wordl Slang Game",
        pageRoute:"wordl-slang-game",
        description:"Back when Wordle went viral. After a month of learning Javascript I decided to make my own variant of this popular game, completely from scratch, and without referring to tutorials. This is my favourite projects to date.",
        src:wordl,
        github:"https://github.com/Tales-1/WordlSlangEdition",
        live:"https://tales-1.github.io/WordlSlangEdition/",
        tools:["HTML5","CSS3","Javascript"],
        dates:"Feb 9 - Feb 17 2022",
        motive:"it had only been a month since I began learning JavaScript and I was itching to bring my knowledge of it to life. With the game 'Wordle' going viral I challenged myself to make a slang edition based on words from Urbandictionary.com. After three days of blood, sweat and tears I was presented with, what I will always regard as, my favourite project.",
        features:["Varying word of the days", "Definitions", "Result sharing"],
        learnt:["Local Storage", "asynchronous functions", "creating reusable functions", "exporting modules"],
        struggles:""
    },
    {
        name:"Quiz App",
        pageRoute:"quiz-app",
        description:"A project featured in Scrimba's React basics course. My first 'major' React project dealing with fetching data and sorting it accordingly.",
        src:quiz,
        github:"https://github.com/Tales-1/MyTriviaAppProject",
        live:"https://tales-1.github.io/MyTriviaAppProject/",
        tools:["React","CSS3"],
        dates:"Jun 09 - Jun 12 2022",
        motive:"This project was built in response to a challenge put forth in the React Basics course on Scrimba. It was around this time I was getting to grips with the core concepts relating React and found this extremely challenging to complete. As challenging it was, I found that my understanding of what I had learnt thus far was consolidated.",
        features:["Questions fetched", "State management", "Randomseed", "New questions upon refresh"],
        learnt:["Fetch Api", "Passing states as props", "manipulating state to control UI", "Controlled Components"],
        struggles:""
    },
    {
        name:"Tic-Tac-Toe",
        pageRoute:"tic-tac-toe",
        description:"1 month into learning React I decided to make a Tic-Tac-Toe game from scratch. Much like the 'Wordl Slang Game' I refused to use a tutorial and conquered this challenge in a few days.",
        src:tictactoe,
        github:"https://github.com/Tales-1/TicTacToe",
        live:"https://tales-1.github.io/TicTacToe/",
        tools:["React", "CSS3"],
        dates:"June 17 - June 18 2022",
        motive:"After making the Quiz App in the React Basics course I decided, almost on a whim, to build a tic-tac-toe app from scratch. I felt as though at this stage I had the know how to make an app as simple as tic-tac-toe, right? Well no. It was tough. This realisation led me to a huge shift in the way I viewed and solved problems. It was the first time I sat down with a pen and paper to map out the infrastructure of an app and boy did it help!",
        features:["Algorithm evaluates board on each move"],
        learnt:["Different approaches to problem solving", "Nested looping"],
        struggles:""
    },
]

export default projectData