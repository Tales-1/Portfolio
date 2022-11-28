import NavLinks from "./NavLinks"

type Props = {
    translateX:string
    close:() => void
    mobile?:boolean
}

const SlidingMenu:React.FC<Props> = ({translateX, close,mobile}) => {

    return (
            <aside className={`fixed left-0 transition-all duration-500 ${translateX} h-screen w-2/3 z-30 bg-dark flex flex-col`}>
                
                <nav className="flex flex-col h-1/2 m-auto w-full">
                    <span className="m-auto text-white text-3xl cursor-pointer relative bottom-20" onClick={close}>x</span>
                    <NavLinks flex="flex-col" closeMenu={close} mobile={mobile} />
                </nav>
            </aside>

    )
}

export default SlidingMenu