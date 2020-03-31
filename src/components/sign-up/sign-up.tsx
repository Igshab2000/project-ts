import * as React from "react";
import {style} from './sign-up.style';
import Input from '../UI/input/input';
import Button from '../UI/button/button';
import { formValidator } from "../../utils/validator";
import { IProps, TOwnProps, TFormData } from "../sign-in/sign-in.types";
import { MapStateToProps, connect, MapDispatchToProps } from "react-redux";
import { reduxForm, SubmissionError } from "redux-form";
import { Dispatch } from "redux";
import {TRegistrationDispatchProps, ISignUpProps, ISignState, IRegistrationVariables} from './sign-up.types'
import { withMutation, MutateProps } from "@apollo/react-hoc";
import {signupMutation} from '../../query/signupMutation';
import ErrorMessge from '../error-message/error-message';
import Authorization from '../../hoc/Layouts/authorization/authorization';
import { Link } from "react-router-dom";

 
class SignUp extends React.Component<ISignUpProps, ISignState> {

    constructor(props: any) {
        super(props)

        this.state = {
            listInput: props.listInput
        }

    }

    private handleSubmit = (fields: any) => {
        const {mutate, history} = this.props as any;
        return new Promise((resolve, reject) => {
            mutate({
              variables: {
                firstName: fields.firstNameField,
                secondName: fields.lastNameField,
                email: fields.loginField,
                password: fields.passwordField
              }
            })
            .then((res: any) => {
                history.push("/sign-in");
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
                        <h3 className={style.h3}>Регистрация</h3>
                        <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className={style.form}>
                            {this.state.listInput.map((element, index) => {
                                return (
                                    <Input
                                        key={index}
                                        name={element.name}
                                        type={element.type}
                                        styleCss={style.input}
                                        placeholder={element.placeholder}
                                        validate={element.typeValidation ? element.typeValidation : null}
                                    />
                                )
                            })}
                            <Button
                                styleCss={style.button}
                            >
                                Применить и войти
                            </Button>
                        </form>
                        <Link
                            to='/'
                        >Уже зарегистрированы? Войти</Link>
                        {this.props.error ? <ErrorMessge errorMessge={this.props.error}/> : null}
                    </div>
                </div>
            </Authorization>
        )
    }
}

const connectedToReduxForm = reduxForm<
    TFormData,
    TRegistrationDispatchProps
>({
    form: 'registrationForm',
    validate: formValidator
})

const mapStateToProps: MapStateToProps<any, TOwnProps> = (
    state: any,
  ) => {
    return {
        listInput: state.registration.listInput
    }
  };
  

const ConnectedSignUp = connect<
    TRegistrationDispatchProps
>(
    mapStateToProps
)(connectedToReduxForm(SignUp))

export default withMutation< any & MutateProps<string, IRegistrationVariables>>(signupMutation)(ConnectedSignUp);

