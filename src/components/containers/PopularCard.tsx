import { User } from '@/data/types';
import Image, { StaticImageData } from 'next/image';
import SaveSvg from '@/public/icons/save-light.svg'
interface props {
    pic: StaticImageData,
    desc: string,
    details: string,
    user: User,
}

const PopularCard = ({ pic, desc, details, user }: props) => {
    return (
        <div className='w-[18.75vw] py-2 min-h-[36vh] rounded-12 bg-[#FFFF] shadow-md flex flex-col justify-between items-center gap-2 mb-10 cursor-pointer'>
            <div className='w-[95%] h-[48.84%] '>
                <Image
                    src={pic}
                    className='rounded-12 mb-5'
                />
            </div>
            <div className='max-h-42px max-w-[95%]'>
                <p className='text-[13px] text-start truncate'>
                    {desc}
                </p>
            </div>
            <div className='max-w-[95%]'>
                <p className='text-[11.4px] opacity-75 text-justify line-ellipsis'>
                    {details}
                </p>
            </div>
            <div className='h-[50px] w-[97%] rounded-12 bg-[#F5F5F5] flex justify-between items-center gap-1.5 p-3'>
                <Image
                    src={user.avatar}
                    className='rounded-12'
                />

                <div className='flex flex-col w-[70%] gap-2 justify-start items-start'>
                    <p className='text-[12px]'>Josshua Brown</p>
                    <p className='text-[11px] opacity-75'>22 August, 2022</p>
                </div>
                <div className="h-[44px] w-[44px] center-xy">
                    <Image
                        src={SaveSvg}
                    />
                </div>
            </div>
        </div>
    )
}

export default PopularCard