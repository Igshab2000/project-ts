import { stylesheet } from "typestyle";

export const style = stylesheet({

    processDate: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '13px',
    },

    label: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        display: 'flex',
        alignItems: 'center',
        color: '#999999',
        width: '40px'
    },

    date: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '16px',
        display: 'flex',
        alignItems: 'center',
        color: '#333333',
        marginLeft: '30px'
    }
})