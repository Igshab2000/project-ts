import * as React from "react";
import {style} from './sign-in.style';
import Input from '../UI/input/input';
import Button from '../UI/button/button';
import Link from '../UI/link/link';
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { reduxForm, SubmissionError } from "redux-form";
import { Dispatch } from "redux";
import login from '../../store/action/login';
import { formValidator} from "../../utils/validator";
import { IProps, ISignState, TLoginDispatchProps, TOwnProps, TFormData, ILogin, ILoginVariables } from "./sign-in.types";
import { withMutation, MutateProps } from "@apollo/react-hoc";
import {loginMutation} from '../../query/loginMutation';
import ErrorMessge from '../error-message/error-message';
import Authorization from '../../hoc/Layouts/authorization/authorization';
  
class SignIn extends React.Component<IProps, ISignState> {

    constructor(props: any) {
        super(props)

        this.state = {
            formControls: props.listInput
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
                this.props.login(res.data.login);
                localStorage.setItem('token', res.data.login.token);
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
                    <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                        {this.state.formControls.map((element, index) => {
                            return (
                                <Input
                                    key={index}
                                    name={element.name}
                                    type={element.type}
                                    styleCss={{
                                        width: '100%',
                                        marginTop: '12px',
                                        position: 'relative'
                                    }}
                                    placeholder={element.placeholder}
                                    validate={[element.typeValidation]}
                                />
                            )
                        })}
                        
                        <Button
                            styleCss={{
                                width: '100%',
                                marginTop: '24px'
                            }}
                        >Войти в систему</Button>
                    </form>
                    <Link
                        styleCss={{
                            marginTop: '18px'
                        }}
                        href='/sing-up'
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

const mapStateToProps: MapStateToProps<any, TOwnProps> = (
    state: any,
  ) => {
    return {
        listInput: state.login.listInput
    };
  };
  

const ConnectedSignIn = connect<
    TLoginDispatchProps
>(
    mapStateToProps,
    mapDispatchToProps
)(connectedToReduxForm(SignIn))

export default withMutation< any & MutateProps<ILogin, ILoginVariables>>(loginMutation)(ConnectedSignIn);

