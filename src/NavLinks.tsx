import { NavLink } from "react-router-dom"

type Props = {
    flex?:string
}
const NavLinks:React.FC<Props> = ({flex}) => {
    const activeStyle = {
        background:"#282D35"
    }

    return ( 
        <ul className={`flex justify-evenly w-full h-full text-white ${flex}`}>
                       <li>
                            <NavLink

                                    to="/" 
                                    style={({isActive}) => isActive ? activeStyle : undefined}
                                    className="mt-auto mx-auto flex justify-center h-full items-center p-4 font-semibold">
                                Home
                            </NavLink>
                        </li> 

                       <li>
                            <NavLink
                                to="/about" 
                                style={({isActive}) => isActive ? activeStyle : undefined}
                                className="mt-auto mx-auto flex justify-center h-full items-center p-4 font-semibold">
                                 My Story
                            </NavLink>
                        </li>   

                       <li>
                            <NavLink
                                to="/projects" 
                                style={({isActive}) => isActive ? activeStyle : undefined}
                                className="mt-auto mx-auto flex justify-center h-full items-center p-4 font-semibold">
                                Projects
                             </NavLink>

                        </li>   
                       <li>
                            <NavLink
                                to="/contact" 
                                style={({isActive}) => isActive ? activeStyle : undefined}
                                className="mt-auto mx-auto flex justify-center h-full items-center p-4 font-semibold">
                                Contact
                            </NavLink>
                        </li>   
                    </ul>
    )
}

export default NavLinks