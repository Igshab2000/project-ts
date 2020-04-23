import * as React from "react";
import {style} from './SignIn.style';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { connect, MapDispatchToProps } from "react-redux";
import { reduxForm, SubmissionError } from "redux-form";
import { Dispatch } from "redux";
import login from '../../store/action/login';
import { formValidator} from "../../utils/validator";
import { IProps, ISignState, TLoginDispatchProps, TFormData, ILogin, ILoginVariables } from "./SignIn.types";
import { withMutation, MutateProps } from "@apollo/react-hoc";
import {loginMutation} from '../../query/loginMutation';
import ErrorMessge from '../../components/ErrorMessage/ErrorMessage';
import Authorization from '../../hoc/Layouts/authorization/authorization';
import { Link } from "react-router-dom";
import { onlyEmail, passLength } from "../../utils/validator";
  
class SignIn extends React.Component<IProps, ISignState> {

    constructor(props: any) {
        super(props)

        this.state = {
            formControls: [
                {
                    type: 'email',
                    placeholder: 'Электронная почта',
                    name: 'loginField',
                    typeValidation: onlyEmail
                },
                {
                    type: 'password',
                    placeholder: 'Пароль',
                    name: 'passwordField',
                    typeValidation: passLength(8)
        
                }
            ]
        }
    }

    private handleSubmit = (fields: any) => {
        const {mutate, history} = this.props as any;
        return new Promise((resolve, reject) => {
            mutate({
              variables: {
                email: fields.loginField,
                password: fields.passwordField
              }
            })
            .then((res: any) => {
                const {token, user} = res.data.login;
                this.props.login({token, user});
                localStorage.setItem('token', token);
                history.push("/user-page");
                resolve(res);
            })
            .catch((e: any) => {
                reject(new SubmissionError({ _error: e?.message }));
            });
        })
    }
    
    public render() {
        return (
        <Authorization>    
            <div className={style.layout}>
                <div className={style.content}>
                    <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className={style.form}>
                        {this.state.formControls.map((element, index) => {
                            return (
                                <Input
                                    key={index}
                                    name={element.name}
                                    type={element.type}
                                    styleCss={style.input}
                                    placeholder={element.placeholder}
                                    validate={[element.typeValidation]}
                                />
                            )
                        })}
                        
                        <Button
                            styleCss={style.button}
                        >Войти в систему</Button>
                    </form>
                    <Link
                        to='/sign-up'
                    >Зарегистрироваться</Link>
                    {this.props.error ? <ErrorMessge errorMessge={this.props.error}/> : null}
                </div>
            </div>
        </Authorization>
        )
    }
}

const mapDispatchToProps: MapDispatchToProps<
    TLoginDispatchProps, 
    IProps
> = (dispatch: Dispatch) => {
    return {
        login: (payload) => dispatch(login(payload)) 
    }
}

const connectedToReduxForm = reduxForm<
    TFormData,
    TLoginDispatchProps
>({
    form: 'loginForm',
    validate: formValidator
})
  

const ConnectedSignIn = connect<
    TLoginDispatchProps
>(
    null,
    mapDispatchToProps
)(connectedToReduxForm(SignIn))

export default withMutation< any & MutateProps<ILogin, ILoginVariables>>(loginMutation)(ConnectedSignIn);

