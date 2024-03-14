import SearchField from "@/components/navbar/SearchField";
import Image from 'next/image';
import SaveIcon from '@/public/icons/icon-save.svg'
import Avatar from '@/public/images/index/avatar.png'

const Navbar = () => {
  return (
    <div className="h-[44px] w-[78vw] flex justify-between">
      <div className="flex gap-4">
        <h1 className="text-[#FC4308] font-bold pr-10">MEGA.news</h1>
        <div>Categories</div>
        <div>Pages</div>
        <div>Contact Us</div>
        <div>About Us</div>
      </div>
      <div className="flex gap-4">
        <SearchField />
        <div className="center-xy gap-1 h-full">
          <div className="h-[44px] w-[44px] rounded-12 bg-[#F5F5F5]">
          <Image
            src={Avatar}
            className="rounded-12 "
          />
          </div>
          <p className="text-[14px] font-semibold">Behzad</p>
        </div>
        <div className="h-[44px] w-[44px] rounded-12 bg-[#F5F5F5] flex justify-center">
          <Image
            src={SaveIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
