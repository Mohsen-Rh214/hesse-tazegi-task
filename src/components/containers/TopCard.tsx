import Image from 'next/image';

const TopCard = ({image,title,details}) => {
    return (
        <div className='max-w-[18.75vw] max-h-[38.5vh] bg-[#f5f5f5]' key={title}>
            <Image
                className='h-full w-full rounded-12'
                sizes='100%'
                src={image}
                alt='Car Image'
            />
        </div>
    )
}

export default TopCard