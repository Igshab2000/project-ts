export interface IStateLogin {
    token?: string,
    listInput: Array<IItemSign>,
    user: IUser
}

export interface IItemSign {
    name: string,
    placeholder: string,
    type: string,
    typeValidation?: any
}

export interface IUser {
    firstName: string,
    secondName: string,
    email: string,
    password: string
}