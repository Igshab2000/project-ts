import { stylesheet } from "typestyle";

export const style = stylesheet({
    button : {
        background: '#FFCE0C',
        borderRadius: '4px',
        fontSize: '12px',
        lineHeight: '16px',
        alignItems: 'center',
        textAlign: 'center',
        color: '#333333',
        padding: '5px 24px 7px 24px',
        fontStyle: 'normal',
        fontWeight: 'bold',

        $nest: {
            "&:hover": {
                background: '#FFD73B',
                boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.12)'
            },

            "&:active": {
                background: '#FFC40C',
                boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.12)'
            },

            "&:focus": {
                background: '#FFCE0C',
                border: '1px solid #FFFBEA',
                boxSizing: 'border-box',
                boxShadow: '0px 1px 10px #FFD73B'
            }
          }
    },
    
    buttonDisabled: {
        background: '#FFCE0C'
    }
    
})