import PopularCard from '@/components/containers/PopularCard'
import { data1, data2 } from '@/data/data-index';
import Slider from '@/components/containers/Slider'
import TopCard from '@/components/containers/TopCard';
import Tag from '@/components/Tag';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="h-[41.85vh] flex gap-4">
        {data1.map((item, index) => index !== 2 && <TopCard image={item.picture} title={item.title} details={item.details} />)}

        <Slider data={data1} />

      </div>
      <div className="h-[42.5vh] w-[78.75vw] flex flex-col gap-4">
        <Tag text={'Popular Posts'} />

        <div className='flex gap-3'>
          {data2.map(item =>
            <PopularCard
              pic={item.picture}
              desc={item.title}
              details={item.details}
              user={item.user}
            />
          )}
        </div>
      </div>
    </main>
  );
}
