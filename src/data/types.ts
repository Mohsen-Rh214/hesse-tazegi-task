
export interface data1Types {
    picture: StaticImageData,
    title: string,
    details: string,

}

export interface User {
    name: string,
    avatar: StaticImageData,
    date: string,
}

export interface data2Types {
    picture: StaticImageData,
    title: string,
    details: string,
    user: User,
}