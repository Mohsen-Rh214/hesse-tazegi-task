import { StaticImageData } from "next/image";

export interface User {
    id: number,
    name: string,
    avatar: StaticImageData,
    date: string,
}

export interface data1Types {
    id: number,
    picture: StaticImageData,
    title: string,
    details: string,
    user: User,
}


export interface data2Types {
    id: number,
    picture: StaticImageData,
    title: string,
    details: string,
    user: User,
    singlePic: StaticImageData,
}