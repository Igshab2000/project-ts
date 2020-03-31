import { stylesheet } from "typestyle";


export const style = stylesheet({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',	
    },

    headerText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal', 
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '15px',
        color: '#535374'
    },

    floor: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    text: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal', 
        fontWeight: 'bold',        
        fontSize: '12px',
        lineHeight: '16px',
        display: 'flex',
        alignItems: 'center',
        color: '#999999'
    }
})