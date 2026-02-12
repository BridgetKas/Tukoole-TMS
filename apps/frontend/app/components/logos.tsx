import Image from "next/image"

const logosArray:string[] = [
    '/derimod.svg',
    '/hornet-agency.svg',
    '/kra-1.svg',
    '/loewe-2.svg',
    '/patagonia-1.svg',
    '/puma-logo.svg',
    '/tamiya-logo-1.svg',
    '/thrush.svg'
]

export default function LogosSection(){
    return (
        <div className="bg-linear-to-b from-purple-50 to-white">
            <p className="text-center px-2 pt-4 pb-9 text-gray-900 leading-0">We are trusted by startups, government agencies and NGOs worldwide to deliver exceptional talent.</p>
            <div className="flex items-center justify-center flex-wrap px-3 gap-4 md:justify-between md:px-5">
                {
                    logosArray.map((logo,index) =>{
                        return <div key={index}>
                            <Image src={logo} width={50} height={50} alt='logo of a company'/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}