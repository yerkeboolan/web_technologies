export interface IUser {
    id: number,
    username: string,
    email: string
}
export interface ICategoryImage{
    id: number,
    category: ICategory,
    image: string
}
export interface IAuthResponse {
    token: string;
}

export interface ICategoryList {
    id: number,
    description:string,
    image: string,
    name: string
}
export interface ICategoryDetail{
    
}

export interface ICategory {
    id: number,
    name: string,
    description: string
}

export interface ISection {
    id:number,
    name: string,
    image: string,
    description: string,
    address: string,
    category: ICategory
}

export interface ICommentNew {
    author: IUser,
    section: ISection,
    date: Date,
    content: string,
}

export interface IArticle {
    title: string, 
    author: IUser,
    section: ISection,
    image: string,
    content: string,
}
export interface ITrainers {
    name: string, 
    section: ISection,
    image: string,
    description: string,
    rating: number,
}
export interface IComment{
    author:IUser,
    section: ISection,
    content:string,
    date: string

}
export interface ITrainerComment{
    author:IUser,
    trainer: ITrainers,
    content:string,
    date: string
}