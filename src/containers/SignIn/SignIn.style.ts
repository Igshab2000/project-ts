import { stylesheet } from "typestyle";

export const style = stylesheet({

    content: {
        paddingTop: '36px',
	    paddingLeft: '48px',
	    paddingRight: '48px',
	    paddingBottom: '24px',
    },
    layout: {
        width: '424px',
        marginTop: '32px',
        background: "#FFFFFF",
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)',
        borderRadius: '2px',
        height: 'calc(100vh - 118px)',
    },

    form: {
        marginBottom: '18px'
    },

    input: {
        width: '100%',
        marginTop: '12px',
        position: 'relative'
    },

    button: {
        width: '100%',
        marginTop: '24px'
    }

})