import { Link } from "react-router-dom"

const Home:React.FC = () => {

    return ( 
            <section className="border-b-2 border-white h-[88vh] grid w-full py-6">
                   <div className="m-auto flex flex-col w-5/6 md:items-center">
                       <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">
                           <span className="block text-base lg:text-lg text-react">HI, I'M </span>
                           JAWAD NAZIR
                       </h1>
                       <span className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
                           Frontend Developer
                       </span>

                       <p className="mt-10 max-w-[75ch] leading-7 md:text-center">I'm a former Arabic Language Teacher and Community Development Officer.
                        <span className="block"> 
                            As a Front-End developer my focus is now geared towards creating simple, appealing and intuitive web applications
                        </span>
                       </p>
                    <Link to="/projects" className="border-2 border-react py-[1.25rem] px-[1.72rem] w-fit mt-10 text-react font-bold">
                        Check out my projects!
                    </Link>
                   </div>
            </section>
    )
}


export default Home