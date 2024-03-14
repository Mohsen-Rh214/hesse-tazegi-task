import Image from 'next/image';

const TopCard = ({ image, title, details }) => {
    return (
        <div className='w-[18.75vw] h-[41.85vh] bg-[#f5f5f5] cursor-pointer' key={title}>
            <Image
                className='rounded-12'
                sizes='100%'
                src={image}
                alt={title}
            />
        </div>
    )
}

export default TopCard;