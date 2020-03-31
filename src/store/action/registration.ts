export interface IRegistrationAction {
    type: string
}

const registration = (): IRegistrationAction => {
    return {
        type: 'getState'
    }
}

export default registration