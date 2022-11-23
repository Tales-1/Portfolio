import { NavLink } from "react-router-dom"
type Props = {
    toggleTree:() => void
}

const NavigationTree:React.FC<Props> = ({toggleTree}) => {

    let activeStyle = {
        background:"white",
        color:"black",
        fontWeight:"bold"
    }
    const pseudoElementStyles = "relative before:absolute before:left-[49%] before before:w-[2px] before:bg-white before:h-[30%]"
                               
    return ( 
        <div className="row-start-2 row-span-2
            w-full mx-auto max-w-[60rem] text-react h-[70vh] text-[.8rem] md:text-[1.2rem] lg:text-2xl">
            <div className="grid grid-cols-4 grid-rows-5 h-[80%] my-auto">

                <div className="h-[2px] bg-white w-[75%] mx-auto row-start-5 col-start-1 col-span-full"></div>

                <div className={`flex row-start-1 col-start-2 col-span-2 before:-bottom-2 ${pseudoElementStyles}`}>
                     <h1 className="m-auto flex justify-center rounded-md w-1/2 p-2">
                       Document 
                    </h1>
                </div>

                <div className={`flex row-start-2 col-start-2 col-span-2 before:-bottom-2 ${pseudoElementStyles}`}>
                    <h2 className="m-auto flex justify-center rounded-md w-1/2 p-2">
                       &#60;html&gt;
                    </h2>
                </div>

                <div className={`flex row-start-3 col-start-2 col-span-2 before:-bottom-2 ${pseudoElementStyles}`}>
                    <h3 className="m-auto flex justify-center rounded-md w-1/2 p-2">
                        &#60;body&gt;
                    </h3>
                </div>

                <div className={`flex row-start-4 col-start-2 col-span-2 ${pseudoElementStyles}`}>
                    <h3 className="m-auto flex justify-center rounded-md w-1/2 p-2">
                        &#60;App /&gt;
                    </h3>
                </div>

                <div className={`flex row-start-5 col-start-1 before:top-0 ${pseudoElementStyles}`}>
                    <NavLink onClick={toggleTree} 
                            to="/" 
                            style={({isActive}) => isActive ? activeStyle : undefined}
                            className="mt-auto mx-auto flex justify-center rounded-md p-2"
                        >
                        &#60;Home /&gt;
                    </NavLink>
                </div>
                <div className={`flex row-start-5 col-start-2 before:top-0 ${pseudoElementStyles}`}>
                    <NavLink onClick={toggleTree} 
                             to="/about" 
                             style={({isActive}) => isActive ? activeStyle : undefined}
                             className="mt-auto mx-auto flex justify-center rounded-md p-2">
                        &#60;About /&gt;
                    </NavLink>
                </div>
                <div className={`flex row-start-5 col-start-3 before:top-0 ${pseudoElementStyles}`}>
                    <NavLink onClick={toggleTree} 
                             to="/projects" 
                             style={({isActive}) => isActive ? activeStyle : undefined}
                             className="mt-auto mx-auto flex justify-center rounded-md p-2">
                        &#60;Projects /&gt;
                    </NavLink>
                </div>
                <div className={`flex row-start-5 col-start-4 before:top-0 ${pseudoElementStyles}`}>
                    <NavLink onClick={toggleTree} 
                             to="/contact" 
                             style={({isActive}) => isActive ? activeStyle : undefined}
                             className="mt-auto mx-auto flex justify-center rounded-md p-2">
                        &#60;Contact /&gt;
                    </NavLink>
                </div>

            </div>

        </div>
    )
}

export default NavigationTree