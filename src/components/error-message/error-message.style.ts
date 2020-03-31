import { stylesheet } from "typestyle";

export const style = stylesheet({
    errorContainer: {   
        background: 'rgb(255, 233, 219)',
        display: 'flex',
        marginTop: '24px',
        padding: '27px'
    },

    messge: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '14px',
        lineHeight: '19px',
        color: '#333333',
        marginLeft: '27px'
    }
})
