import Image from 'next/image';

const Slider = ({data}) => {

    return (
          <Image
            className='w-[33vw] h-[38.5vh] rounded-12'
            src={data[2].picture}
            alt='Tech Image'
          />
    )
}

export default Slider;