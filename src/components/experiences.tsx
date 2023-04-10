import { ExperiencesTitle, P } from "./titles"
import Image from 'next/image'

export default function Experiences({ experiences, tools }: any) {
    return <div>{
        experiences.map((e: any) =>
            <div className='p-4 sm:m-8 my-8 ring-1 sm:rounded-lg sm:px-10 ring-white bg-white flex w-full shadow-md hover:shadow-lg'>
                {/* sm:max-w-lg */}
                <div className='mr-5 w-full'>
                    <ExperiencesTitle title={e.title} />
                    <P text={e.description} />
                    {false &&
                        <div className='flex p-8'>
                            {getToolPaths(e.toolsUsed).map((image) =>
                                <Image src={image.image} alt={image} width={70} height={40} className='hover:p-0.5' />
                            )}
                        </div>
                    }
                </div>
                <div className='flex flex-col'>
                    {e.toolsUsed.map((imageSrc: string) => {
                        { var d = tools.find((e: any) => e.name == imageSrc) }
                        if (d) return <Image src={d.image} alt={imageSrc} width={80} height={40} className='hover:p-0.5' />
                    })}
                </div>
            </div>
        )
    }</div>
    
    function getToolPaths(names: Array<string>): Array<any> {
        var paths: Array<string> = []
        names.forEach((name: string) => {
            var tool: string = tools.find((e: any) => e.name == name)
            if (tool) paths.push(tool)
        }
        )
        return paths
    }
}
