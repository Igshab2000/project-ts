
const login = (payload: any): any => {
    return {
        type: 'loginUser',
        payload
    }
}

export default login