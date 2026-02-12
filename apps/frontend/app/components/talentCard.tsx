import { IoPersonSharp } from "react-icons/io5";
import Image from "next/image";



interface Talent {
    image:string,
    title:string,
    level:string,
    name:string,
    salary:string,
    skills:String[],
    skillsSummary:string,
    id:number
}


const talents:Talent[] = [
    {
        image:'/talent.jpg',
        title:'Software Developer',
        level:'Senior',
        name:'Bizzy',
        salary:'$5000/month',
        skills:['React', 'TypeScript','Python','Java'],
        skillsSummary:'Bizzy is a skilled developer who has over 5 years of experience in the tech field',
        id:1
    },
        {
        image:'/talent.jpg',
        title:'Software Developer',
        level:'Senior',
        name:'Bizzy',
        salary:'$5000/month',
        skills:['React', 'TypeScript','Python','Java'],
        skillsSummary:'Bizzy is a skilled developer who has over 5 years of experience in the tech field',
        id:2
    },
        {
        image:'/talent.jpg',
        title:'Software Developer',
        level:'Senior',
        name:'Bizzy',
        salary:'$5000/month',
        skills:['React', 'TypeScript','Python','Java'],
        skillsSummary:'Bizzy is a skilled developer who has over 5 years of experience in the tech field',
        id:3
    },
]


export default function TalentSection() {

    return(
        <section className="my-5">
             <div className="max-w-6xl mx-auto mt-10">
                <h1 className='text-center text-2xl p-3 mb-8 sm:text-3xl md:text-4xl  font-bold opacity-90'>
                    Access top talent with industry specific expertise

                </h1>
                <p className="lg:text-[18px]  w-100 sm:w-150 opacity-80 text-center mx-auto mb-10 px-3 lg:max-w-4xl ">By integrating elite talent from emerging markets with robust remote infrastructure, we enable your business to expand efficiently while maintaining the highest standards of quality.</p>
                <div className="max-w-6xl flex flex-col mx-auto items-center justify-center  gap-4 md:flex-row md:flex-wrap  md:pl-5" >
                    {
                        talents.map((talent) => {
                            let remainingSkills:String[] = []
                            
                            return <div key={talent.id} className='w-82.5 flex flex-col shadow-md p-4 bg-gray-100 rounded-lg '>
                                        <div className='flex items-center justify-center'>
                                            <Image alt='Image' src={talent.image} width={100} height={5} className="rounded-full"/>
                                        </div>
                                        <div className="flex flex-col  justify-center items-center pt-3">
                                            <p className="font-bold text-gray-900 lg:text-[18px]">{talent.name}</p>
                                            <p className="text-gray-500">{talent.title}</p>
                                            <p className="flex items-center gap-3 text-orange-600 font-bold"> <IoPersonSharp /> {talent.level}</p>
                                            <p className="text-gray-700">{talent.salary}</p>
                                        </div>
                                        <div className="flex items-center gap-2 pt-2.5 pb-4">
                                            {talent.skills.map((skill,index) => {
                                                if (index < 3) {
                                                    return <div key={index} className="border border-gray-400 py-1 px-2 rounded-full">
                                                        <p className="font-semibold text-gray-900">{skill}</p>
                                                    </div>
                                                }
                                                if (index === 3) {
                                                const remainingCount = talent.skills.length - 3;
                                                return (
                                                    <div key="remaining" className="border py-1 px-3 rounded-full bg-blue-900 text-white hover:bg-white hover:text-blue-900">
                                                        <p>+{remainingCount}</p>
                                                    </div>
                                                    );
                                                }

                                                return null;

                                            })}
                                        </div> 
                                        <p className="px-2 text-center text-gray-700">
                                            {talent.skillsSummary}
                                        </p>
                                        <button className=" font-bold w-full mt-3 p-2 text-gray-900 hover:bg-blue-900 hover:text-white lg:text-[18px]">
                                            VIEW PROFILE
                                        </button>
                               
                                    </div>
                        })
                    } 

                </div> 
                <div className="w-45 mx-auto text-center mt-8">
                    <button className="w-45 py-2 rounded-full bg-blue-900 text-white">View More</button>
                </div>
            </div> 

        </section>
    )
    
}





                                   