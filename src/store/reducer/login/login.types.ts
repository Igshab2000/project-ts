export interface IStateLogin {
    token?: string,
    user: IUser
}

export interface IItemSign {
    name: string,
    placeholder: string,
    type: string,
    typeValidation?: any
}

export interface IUser {
    id: number
    firstName: string,
    secondName: string,
    email: string,
}