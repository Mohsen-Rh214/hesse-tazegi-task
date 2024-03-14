import SearchField from "@/components/navbar/SearchField";
import Image from 'next/image';
import SaveIcon from '@/public/icons/icon-save.svg'

const Navbar = () => {
  return (
    <div className="h-[44px] w-[78vw] flex justify-between">
      <div className="flex gap-3">
        <h1 className="text-[#FC4308] font-bold">MEGA.news</h1>
        <div>link 1</div>
        <div>link 2</div>
        <div>link 3</div>
        <div>link 4</div>
      </div>
      <div className="flex">
        <SearchField />
        <div className="flex justify-center align-middle h-full">
          <div className="h-[44px] w-[44px] rounded-12 bg-[#F5F5F5]"></div>
          <p>

            Behzad
          </p>
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
