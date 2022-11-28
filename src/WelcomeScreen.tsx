import ReactOrbit from "./ReactOrbit"

type Props = { 
    visible:boolean
}

const WelcomeScreen:React.FC<Props> = ({visible}) => { 
    return ( 
        <div className={`absolute top-0 bg-dark w-screen h-[100vh] ${visible ? "translate-y-0" : "-translate-y-full"}
                    transition-all text-white duration-500 flex flex-col justify-center items-center gap-4 z-20`}>
                <ReactOrbit 
                    nucleusSize="text-3xl" 
                    electronSize="w-[20px]" 
                    orbitSize="w-[200px]" 
                    orbitOne="var-x"
                    orbitTwo="var-y"
                    styles="col-start-4"
                    />
            </div>
    )
}

export default WelcomeScreen

// 