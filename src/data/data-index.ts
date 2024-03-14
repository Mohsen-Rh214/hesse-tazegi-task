import TechImg from '@/public/images/index/tech-img.png';
import CarImg from '@/public/images/index/card-car.png'
import MusicImg from '@/public/images/index/card-music.png'
import PopCar from '@/public/images/index/pop-car.png'
import PopLake from '@/public/images/index/pop-lake.png'
import PopFood from '@/public/images/index/pop-food.png'
import PopTech from '@/public/images/index/pop-tech.png'
import Avatar2 from '@/public/images/index/avatar2.png'
import Avatar3 from '@/public/images/index/avatar3.png'
import Avatar4 from '@/public/images/index/avatar4.png'
import Avatar5 from '@/public/images/index/avatar5.png'
import { data1Types, data2Types } from './types';
import Top1 from '@/public/images/single/top1.png'
import Top2 from '@/public/images/single/top2.png'
import Top3 from '@/public/images/single/top3.png'
import Top4 from '@/public/images/single/top4.png'
import Top5 from '@/public/images/single/top5.png'

export const data1: Array<data1Types> = [
    {

        id: 1,
        picture: CarImg,
        title: 'How to Drive A Car Safely',
        details: 'Ah, The Joy Of The Open Road-It\'s A Good Feeling. But If You\'re New To Driving, You May...',
        user: {
            id: 1,
            name: 'James',
            date: 'August 18, 2022',
            avatar: Avatar2,
        },
    },
    {

        id: 2,
        picture: MusicImg,
        title: 'How To Make Dance Music',
        details: 'Download Torrents From Verified Or Trusted Uploaders. If You\'re A Bit Torrent User Looking...',
        user: {
            id: 2,
            name: 'Louis Hamilton',
            date: 'July 25, 2022',
            avatar: Avatar3,
        },
    },
    {

        id: 3,
        picture: TechImg,
        title: 'Why I Stopped Using Multiple Monitor',
        details: 'A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like',
        user: {
            id: 4,
            name: 'Jon Kantola',
            date: 'may 5, 2021',
            avatar: Avatar5,
        },
    },
]

export const data2: Array<data2Types> = [
    {

        id: 4,
        picture: PopLake,
        title: 'Opening Day Of Boating Season, Seattle WA',
        details: 'Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge',
        user: {
            id: 1,
            name: 'James',
            date: 'August 18, 2022',
            avatar: Avatar2,
        },
    },
    {

        id: 5,
        picture: PopTech,
        title: 'How to choose the right laptop for programming',
        details: 'Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs',
        user: {
            id: 2,
            name: 'Louis Hamilton',
            date: 'July 25, 2022',
            avatar: Avatar3,
        },
    },
    {

        id: 6,
        picture: PopCar,
        title: 'How we built the first real self-driving car',
        details: 'Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when',
        user: {
            id: 3,
            name: 'Clara Couilicia',
            date: 'June 4, 2023',
            avatar: Avatar4,
        },
    },
    {

        id: 7,
        picture: PopFood,
        title: 'How to Persuade Your Parents to Buy Fast Food',
        details: 'Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.',
        user: {
            id: 4,
            name: 'Jon Kantola',
            date: 'may 5, 2021',
            avatar: Avatar5,
        },
    },
]

export const topPost = [Top1, Top2, Top3, Top4, Top5]