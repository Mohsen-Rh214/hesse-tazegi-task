import Image from 'next/image';

const Slider = ({ data }) => {

  return (
    <div className='w-[38.75vw]'>
      <Image
        className='rounded-12'
        src={data[2].picture}
        alt='Tech Image'
        objectFit='contain'
      />
    </div>
  )
}

export default Slider;