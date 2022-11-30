import { NavLink } from "react-router-dom"

type Props = {
    flex?:string
    mobile?:boolean
    closeMenu?:() => void
}
const NavLinks:React.FC<Props> = ({mobile, closeMenu,flex}) => {
    const activeStyle = {
        borderBottom: mobile ? "0px" : "2px solid #bc9c9e",
        color:"#bc9c9e"
    }
    
    const linkNames = [
        {name:"Home", link:"/"},
        {name:"My Story", link:"/about"}, 
        {name:"Projects", link:"/projects"}, 
        {name:"Contact",link:"/contact"}
    ]

    const displayLinks = linkNames.map((item,i) => {
        return ( 
            <li onClick={closeMenu} key={i}>
                <NavLink
                    to={item.link} 
                    style={({isActive}) => isActive ? activeStyle : undefined}
                    className="mt-auto mx-auto flex justify-center h-full items-center p-4 font-semibold">
                        {item.name}
                </NavLink>
            </li>
        )
    })

    return ( 
            <ul className={`flex justify-evenly w-full h-full text-white ${flex} text-lg md:text-base`}>
                    {displayLinks}
            </ul>
    )
}

export default NavLinks