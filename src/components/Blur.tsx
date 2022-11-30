type Props = {
    func:() => void
    visible:boolean
}

const Blur:React.FC<Props> = ({func,visible}) => {
    return (
        <div className={`fixed h-screen w-screen backdrop-blur-sm bg-dark/30 z-20 ${visible ? "visible" : "hidden"}`}
             onClick={func}>
        </div>
    )
}


export default Blur