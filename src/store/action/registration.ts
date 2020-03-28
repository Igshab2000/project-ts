const registration = (payload: any): any => {
    return {
        type: 'userRegistration',
        payload
    }
}

export default registration