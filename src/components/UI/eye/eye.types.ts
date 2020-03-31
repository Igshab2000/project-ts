export interface IEyeProps {
    style?: IPasswordFieldIconStyle,
    onClick?(): void,
    className?: string 
    closed?: boolean
}

export interface IPasswordFieldIconStyle {
    [key: string]: string
}