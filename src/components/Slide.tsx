import Image from "next/image"
import Right from '@/public/icons/right.svg'
import Left from '@/public/icons/left.svg'

const Slide = () => {
    return (
        <div className="flex justify-between items-center gap-3">
            <div className="rounded-lg bg-[#F5F5F5] center-xy p-2 cursor-pointer">
                <Image
                    src={Left}
                    alt='left'
                />
            </div>
            <div className="rounded-lg bg-[#F5F5F5] center-xy p-2 cursor-pointer">
                <Image
                    src={Right}
                    alt='left'
                />
            </div>
        </div>
    )
}

export default Slide