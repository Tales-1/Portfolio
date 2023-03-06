import { useParams, Link } from "react-router-dom"
import projectData from "./projectData"

const ViewProject:React.FC = () => { 
    const params = useParams()
    const { pageRoute } = params
    const currentProject = projectData.find(project => project.pageRoute === pageRoute)
     
    return ( 
        <section className="flex flex-col w-full m-auto items-center h-fit gap-12 pb-12">
            <h1 className="text-2xl xl:text-3xl mt-12 text-react underline underline-offset-8">{currentProject?.name}</h1>
            <div className="flex flex-col w-3/4 gap-6">
                <p className="text-sm lg:text-base font-bold">Duration: {currentProject?.dates}</p>
                <p className="text-sm lg:text-base font-body leading-[24px]">
                    <span className="block underline font-semibold mb-4">Why this project?</span>
                    {currentProject?.motive}
                </p>
                <div className="text-sm lg:text-base flex flex-col gap-6 mt-4 font-body">
                    <p className=""><span className="block underline font-semibold mb-4">Features: </span>{currentProject?.features.join(", ")}</p>
                    <p className=""><span className="block underline font-semibold mb-4">What I learnt:</span> {currentProject?.learnt.join(", ")}</p>
                    <p className=""><span className="block underline font-semibold mb-4">What I used:</span> {currentProject?.tools.join(", ")}</p>
                </div>
            </div>
            <Link to="/projects" className="underline hover:opacity-80"> Back to projects</Link>
        </section>
    )
}

export default ViewProject