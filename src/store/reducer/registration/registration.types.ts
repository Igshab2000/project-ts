export interface IStateLogin {
    signup: string,
    listInput: Array<IItemSign>
}

export interface IItemSign {
    name: string,
    placeholder: string,
    type: string,
    typeValidation?: any
}