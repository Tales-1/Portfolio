import ReactOrbit from "./ReactOrbit"

type Props = { 
    visible:boolean
}

const WelcomeScreen:React.FC<Props> = ({visible}) => { 
    return ( 
        <div className={`h-screen w-screen absolute top-0 bg-dark ${visible ? "translate-y-0" : "-translate-y-full"} 
                    transition-all duration-1000 grid place-items-center z-30`}>
                <ReactOrbit 
                    nucleusSize="text-3xl" 
                    electronSize="w-[20px]" 
                    orbitSize="w-[200px]" 
                    orbitOne="var-x"
                    orbitTwo="var-y"
                    />
            </div>
    )
}

export default WelcomeScreen