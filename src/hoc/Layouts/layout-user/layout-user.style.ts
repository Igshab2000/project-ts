import { stylesheet } from "typestyle";

export const style = stylesheet({
    layout : {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        margin: 0
    },

    layoutHeader: {
        height: '60px',
        backgroundColor: 'white',
        boxShadow: '0px 1px 10px rgba(104, 121, 187, 0.1)',
        padding: '18px 24px 18px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    h2: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '19px',
        display: 'flex',
        alignItems: 'center',
        color: '#6879BB',
        marginLeft: '12px'   
    },

    menuToggle: {
        zIndex: 100,
    },

    isOpen: {
        color: 'white'
    },

    main: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    }
    
})