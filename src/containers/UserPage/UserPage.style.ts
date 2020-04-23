import { stylesheet } from "typestyle";

export const style = stylesheet({

    userPage : {
        background: '#EBF2FB',
        width: '100%',
        height: 'calc(100% - 60px)',
        marginTop: '60px'
    },

    userPageHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    h2: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '26px',
        lineHeight: '35px',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '22px',
        marginTop: '24px',
        marginRight: 0, 
        width: 'calc(100% - 535px)'  
    },

    userPageContent: {
        margin: '12px 22px',
        height: '288px',
        width: 'calc(100% - 92px)',
        background: '#FFFFFF',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)',
        borderRadius: '2px',
        padding: '24px 24px 36px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    listContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    label: {
        marginTop: "12px"
    },

    input: {
        marginLeft: "120px",
        marginTop: "12px",
        width: '450px',
        position: 'relative'
    },

    button: {
        marginTop: '30px',
        marginBottom: '18px',
        width: '100px',
        marginRight: '22px'
    }
    
})