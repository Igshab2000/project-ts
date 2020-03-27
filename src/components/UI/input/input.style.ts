import { stylesheet } from "typestyle";

export const style = stylesheet({
    input: {
        background: '#FFFFFF',
        border: '1px solid #D6DCE9',
        boxSizing: 'border-box',
        borderRadius: '4px',
        padding: '12px 6px',
        fontSize: '14px',
        lineHeight: '18px',
        display: 'flex',
        alignItems: 'center',
        color: '#6879BB',
        outline: 'none',

        $nest: {
            "&:hover": {
                color: '#415FD5',
                outline: '#415FD5'
            },

            "&:default": {
                color: '#CCCCCC',
            }
    
        }

    },

    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    span: {
        color: '#EE4141',
        fontSize: '15px',
        fontWeight: 'normal',
    }
})