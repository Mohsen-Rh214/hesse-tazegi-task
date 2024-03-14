import { User } from '@/data/types';
import Image, { StaticImageData } from 'next/image';

interface props {
    pic: StaticImageData,
    desc: string,
    details: string,
    user: User,
}

const PopularCard = ({ pic, desc, details, user }: props) => {
    return (
        <div className='w-[18.75vw] h-[36vh] rounded-12 bg-[#FFFF] shadow-md flex flex-col items-center gap-2'>
            <Image
                src={pic}
                className='w-[97%] pt-1 h-[48.84%] rounded-12'
            />
            <div className='max-h-42px max-w-[95%]'>
                <p className='text-[13px] text-[##3E3232] text-start truncate'>
                    {desc}
                </p>
            </div>
            <div className='max-h-[46px] max-w-[95%]'>
                <p className='text-[11.4px] text-[##3E3232] opacity-75 text-justify line-ellipsis'>
                    {details}
                </p>
            </div>
            <div className='h-[50px] w-[97%] bg-[#F5F5F5]'>

            </div>
        </div>
    )
}

export default PopularCard