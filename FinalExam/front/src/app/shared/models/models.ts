export interface IUser {
    id: number, 
    username: string,
    email: string
}

export interface IProduct {
    id: number,
    name: string, 
    price: number, 
    quantity: number, 
    created_by: IUser
}

export interface IAuthResponse {
    token: string
}