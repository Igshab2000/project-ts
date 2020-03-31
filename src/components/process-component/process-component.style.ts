import { stylesheet } from "typestyle";

export const style = stylesheet({
    container: {
        background: '#FFFFFF',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)',
        borderRadius: '2px',
        margin: '22px',
    },

    containerHeader: {
        borderBottom: '1px solid #D6DCE9',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    header: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '22px',
        lineHeight: '30px',
        display: 'flex',
        alignItems: 'center',
        color: '#6879BB',
        margin: '12px 24px',
    },

    headerLink: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '16px',
        display: 'flex',
        alignItems: 'center',
        color: '#6879BB',
        marginRight: '24px'
    },

    containerContant: {
        display: 'flex',
        flexDirection: 'row',

    },

    containerContantColumn: {
        display: 'flex',
        flexDirection: 'column',
        margin: '36px 26px',
    },

    containerContantProcess: {
        margin: '64px 140px 74px 28px',
    },

    containerContantColumnFirst: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '24px',
    },

    fieldProcessFirst: { 
        fontSize: '26px', 
        lineHeight: '35px' 
    },

    fieldProcessSecond: { 
        fontSize: '18px', 
        lineHeight: '25px' 
    }

})
