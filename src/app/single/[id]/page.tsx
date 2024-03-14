import Tag from "@/components/Tag";
import { data1, data2, topPost } from "@/data/data-index";
import Image from "next/image";
import Advertise1 from '@/public/images/single/advertise1.png'
import Advertise2 from '@/public/images/single/advertise2.png'

const tags = ['Montenegro', 'Visit Croatia', 'Luxury Travel', 'Travel Log', 'Paradise Island', 'Travel Info']

const getData = (id) => {
    if (!id) return
    let obj = null;

    if (id < 4) {
        obj = data1.filter(item => item.id == id)
    } else {
        obj = data2.filter(item => item.id == id)
    }

    return obj[0]
}

const Single = ({ params }) => {

    if (!params.id) alert('Invalid Id')

    const obj = getData(params.id)

    return (
        <div className="h-full w-full">
            <div className="w-full flex gap-2 pb-12 text-[12px] font-normal">
                <p>{'Home  >  Featured  > '}</p>
                <p className="opacity-50">{'How to spend a night in ghana'}</p>
            </div>
            <div className="h-full w-full flex gap-4 justify-between">

                <div className="h-full w-[74.6%] flex flex-col">
                    {/* Header */}
                    <div className="h-[65vh]">
                        <div className="h-[55vh] w-full bg-[#F5F5F5] rounded-12">

                        </div>
                    </div>

                    <div className="">Content</div>
                </div>

                {/* Right Column */}
                <div className="h-full w-[23.8%] flex flex-col gap-5">
                    <div className="flex justify-between text-[11px] opacity-75">
                        <div className="h-9 w-[90px] rounded-12 bg-[#F5F5F5] center-xy">Share</div>
                        <div className="h-9 w-[90px] rounded-12 bg-[#F5F5F5] center-xy">Marketing</div>
                        <div className="h-9 w-[90px] rounded-12 bg-[#F5F5F5] center-xy">Comment</div>
                    </div>

                    {/* User */}
                    <div className="h-[117px] w-full rounded-12 bg-[#F5F5F5] p-3 flex gap-2 justify-start">
                        <div className="h-[72px] w-[72px] bg-white rounded-12">
                            <Image
                                src={obj.user.avatar}
                                className="h-full w-full"
                            />
                        </div>
                        <div className="flex flex-col justify-between w-[68%]">
                            <div className="flex justify-between">
                                <p className="text-[14px]">{obj.user.name || 'Joshua Himmich'}</p>
                                <p className="text-[12px] opacity-75">27 Posts</p>
                            </div>
                            <button className="bg-[#F81539BF] rounded-12 h-10 w-20 gap-1 center-xy cursor-pointer">
                                <p className="text-[20px] text-white">+</p>
                                <p className="text-[14px] text-white">Follow</p>
                            </button>
                        </div>
                    </div>

                    <div className="h-[150px] flex flex-col justify-between w-full rounded-12 bg-[#F5F5F5] px-3 py-4">
                        <Tag text={'Tag'} style={'text-[16px]'} />
                        <div className="flex flex-wrap gap-2 pt-2 opacity-75 font-medium overflow-hidden text-[12px]">
                            {tags.map(i => <p>{i}</p>)}
                        </div>
                    </div>

                    {/* Top Posts */}
                    <div className="p-3 w-full rounded-12 bg-[#F5F5F5]">
                        <Tag text={'Top Post'} style={'text-[16px]'} />

                        {topPost.map(item => (
                            <div className="h-[117px] w-full rounded-12 bg-[#F5F5F5] p-3 flex gap-2 justify-start">
                                <div className="h-[72px] w-[72px] bg-white rounded-12">
                                    <Image
                                        src={item}
                                        className="rounded-12"
                                    />
                                </div>
                                <div className="flex flex-col justify-between w-[68%]">
                                    <div className="flex flex-col justify-between gap-2">
                                        <p className="text-[11px]">How to Spend the Perfect Day on Croatia’s Most Magical Island</p>
                                        <p className="text-[9px] opacity-75">Subhead</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="w-full rounded-12 bg-[#F5F5F5] relative">
                        <Image
                            src={Advertise1}
                            className="rounded-12"
                            alt="advertise"
                        />
                        <div className="absolute center-tr">
                            <p className="text-white text-[16px]">Advertising</p>
                            <p className="text-white text-[12px]">360 px * 180px</p>
                        </div>
                    </div>
                    <div className="w-full rounded-12 bg-[#F5F5F5] relative">
                        <Image
                            src={Advertise2}
                            className="rounded-12"
                            alt="advertise"
                        />
                        <div className="absolute center-tr">
                            <p className="text-white text-[16px]">Advertising</p>
                            <p className="text-white text-[12px]">360 px * 180px</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Single;