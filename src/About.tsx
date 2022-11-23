import Profile from "./pp_hd.png"

const About:React.FC = () => {

    return ( 
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
    )
}

export default About