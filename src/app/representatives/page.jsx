import { speakerData } from "@/lib/data"


const RepresentativePage = () => {
    return (
        <div>
            {
                speakerData.map ((speakerData, index) =>{
                    return <Card key={index} {...speakerData} />
                })
            }
        </div>
    )
}

export default RepresentativePage