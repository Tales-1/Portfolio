
const App:React.FC = () => {
    return (
        <div className="bg-black text-white grid">
            <header className="w-screen flex p-2"> 
                <ul className="flex gap-4 m-auto p-2 font-poppins justify-evenly w-3/4">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </header>

            <main className="h-full">
                <section className="grid place-items-center grid-rows-4 h-screen my-auto">
                    <h1 className="text-3xl font-bold row-start-2">HI, I'M JAWAD NAZIR</h1>
                    <span className="text-xl row-start-3 self-start">Frontend React Developer</span>
                </section>

                <section className="h-screen flex">
                    <div className="flex flex-col gap-12 w-3/4 m-auto lg:flex-row">
                        <img src="https://via.placeholder.com/400" alt="me" className="" />
                        <div className="grid gap-2">
                            <h2 className="">I'm Jawad, Nice to meet you!</h2>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi accusantium, distinctio dolores, voluptatum tempora labore veritatis, repudiandae ducimus totam dolorem. Cumque alias, enim odit inventore vitae sit minima quisquam.
                             riam dolores, sequi porro. Voluptas quis illum alias dolore aperiam suscipit laudantium porro?</p>
                        </div>
                    </div>
                    
                </section>

                <section className="h-fit flex flex-col justify-center gap-12">
                    <h2 className="text-3xl text-center">PROJECTS</h2>
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

                <section className="h-screen flex ">
                    <div className="m-auto text-center w-3/4 flex flex-col gap-6">
                        <h2 className="text-3xl">Get in Touch</h2>
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