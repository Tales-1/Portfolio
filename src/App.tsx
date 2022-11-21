import ReactOrbit from "./ReactOrbit"
import { useState } from "react"
import Profile from "./profile.png"
const App:React.FC = () => {
    const [visible, setVisible] = useState(true)

    setTimeout(()=>setVisible(false), 2000)
    return (
        <div className="text-white grid">
            <div className={`h-screen w-screen fixed top-0 bg-dark ${visible ? "translate-y-0" : "-translate-y-full"} 
                    transition-all duration-1000 grid place-items-center z-100`}>
                <ReactOrbit />
            </div>
            <header className="w-screen flex p-2 text-react sticky top-0 bg-dark -z-10"> 
                <ul className="flex gap-4 m-auto p-2 font-poppins justify-evenly w-3/4">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </header>

            <main className="h-full bg-light -z-20 flex flex-col items-center">
                <section className="border-b-2 border-white h-screen grid w-3/4">
                    <div className="grid place-items-center gap-16 
                        grid-rows-2 lg:grid-cols-3 h-5/6">
                        <div className="col-start-1 row-start-1 px-8 lg:col-span-2 lg:row-span-2 grid gap-12">
                            <h1 className="text-6xl lg:text-8xl font-bold lg:grid-cols-2 lg:col-span-2">
                                <span className="block text-base font-base text-react">HI, I'M </span>
                                JAWAD NAZIR
                            </h1>
                            <span className="text-2xl font-bold">
                                Frontend Developer
                            </span>
                        </div>

                        <ReactOrbit styles = "row-start-2 col-start-1 row-span-2 self-start lg:col-start-3 h-full"/>
                    </div>
                    
                </section>

                <section className="border-b-2 border-white h-screen flex w-3/4">
                    <div className="flex flex-col gap-12 w-3/4 m-auto lg:flex-row">
                        <img src={Profile} alt="me" className="object-cover" />
                        <div className="grid gap-2">
                            <h2 className="">I'm Jawad, Nice to meet you!</h2>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi accusantium, distinctio dolores, voluptatum tempora labore veritatis, repudiandae ducimus totam dolorem. Cumque alias, enim odit inventore vitae sit minima quisquam.
                             riam dolores, sequi porro. Voluptas quis illum alias dolore aperiam suscipit laudantium porro?</p>
                        </div>
                    </div>
                    
                </section>

                <section className="border-b-2 border-white flex flex-col justify-center gap-12 h-fit py-12 w-3/4">
                    <h2 className="text-3xl lg:text-4xl text-center">PROJECTS</h2>
                    <div className="w-full flex justify-center">
                        <ul className="w-3/4 mx -auto flex flex-row flex-wrap justify-center gap-12">
                            <li className="grid grid-cols-2 grid-rows-3 gap-2 place-items-center w-[20rem] border-2 border-white aspect-square">
                                <h3 className="row-start-1 col-span-full">Project name:</h3>
                                <div className="row-start-2 col-span-full">project img</div>
                                <button className="row-start-3 col-start-1">Repo</button>
                                <button className="row-start-3 col-start-2">Live</button>

                            </li>
                            <li className="grid grid-cols-2 grid-rows-3 gap-2 place-items-center w-[20rem] border-2 border-white aspect-square">
                                <h3 className="row-start-1 col-span-full">Project name:</h3>
                                <div className="row-start-2 col-span-full">project img</div>
                                <button className="row-start-3 col-start-1">Repo</button>
                                <button className="row-start-3 col-start-2">Live</button>

                            </li>
                            <li className="grid grid-cols-2 grid-rows-3 gap-2 place-items-center w-[20rem] border-2 border-white aspect-square">
                                <h3 className="row-start-1 col-span-full">Project name:</h3>
                                <div className="row-start-2 col-span-full">project img</div>
                                <button className="row-start-3 col-start-1">Repo</button>
                                <button className="row-start-3 col-start-2">Live</button>

                            </li>
                            <li className="grid grid-cols-2 grid-rows-3 gap-2 place-items-center w-[20rem] border-2 border-white aspect-square">
                                <h3 className="row-start-1 col-span-full">Project name:</h3>
                                <div className="row-start-2 col-span-full">project img</div>
                                <button className="row-start-3 col-start-1">Repo</button>
                                <button className="row-start-3 col-start-2">Live</button>

                            </li>
                            <li className="grid grid-cols-2 grid-rows-3 gap-2 place-items-center w-[20rem] border-2 border-white aspect-square">
                                <h3 className="row-start-1 col-span-full">Project name:</h3>
                                <div className="row-start-2 col-span-full">project img</div>
                                <button className="row-start-3 col-start-1">Repo</button>
                                <button className="row-start-3 col-start-2">Live</button>

                            </li>
                        </ul>
                    </div>
                </section>

                <section className="border-b-2 border-white h-screen flex w-3/4">
                    <div className="m-auto text-center w-3/4 flex flex-col gap-6">
                        <h2 className="text-3xl lg:text-4xl">Get in Touch</h2>
                        <p className="text-lg">I'm currently looking for new opportunities. Feel free to get in touch </p>
                        <p>icon:jawad.nazir124@gmail.com</p>
                        <p>icon: +447710445094</p>
                    </div>

                </section>
            </main>
        </div>
    )
}

export default App