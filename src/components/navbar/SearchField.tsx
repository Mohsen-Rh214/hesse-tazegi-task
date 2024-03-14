'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import SearchSvg from '@/public/icons/search.svg'
import ThreeDots from '@/public/icons/three-dots.svg'
import CloseSvg from '@/public/icons/close.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const SearchField = () => {

  const [open, setOpen] = useState(false)
  const onOpenChange = (e) => setOpen(e)

  return (
    <div className="w-[20.7vw] bg-[#F5F5F5] rounded-[12px] flex relative">

      <div className="absolute center-l z-10">
        <DropdownMenu
          open={open}
          onOpenChange={(e) => onOpenChange(e)}
        >
          <DropdownMenuTrigger asChild>
            <button>
              {open ?
                <Image
                  src={CloseSvg}
                  className="cursor-pointer"
                />
                :
                <Image
                  src={ThreeDots}
                  className="cursor-pointer select-none"
                />
              }
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36 mt-3">
            <DropdownMenuItem>
              Item one
            </DropdownMenuItem>
            <DropdownMenuItem>
              Item Two
            </DropdownMenuItem>
            <DropdownMenuItem>
              Item Three
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>


      <Input type="text" placeholder="Search Anything"
        className="pl-10"
      />


      <Image
        src={SearchSvg}
        className="absolute center-r"
      />
    </div >
  )
}

export default SearchField