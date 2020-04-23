import * as React from "react";
import {style} from './SignUp.style';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { formValidator } from "../../utils/validator";
import { TFormData } from "../SignIn/SignIn.types";
import { reduxForm, SubmissionError } from "redux-form";
import {TRegistrationDispatchProps, ISignUpProps, ISignState, IRegistrationVariables} from './SignUp.types'
import { withMutation, MutateProps } from "@apollo/react-hoc";
import {signupMutation} from '../../query/signupMutation';
import ErrorMessge from '../../components/ErrorMessage/ErrorMessage';
import Authorization from '../../hoc/Layouts/authorization/authorization';
import { Link } from "react-router-dom";
import { onlyEmail, passLength } from "../../utils/validator";

 
class SignUp extends React.Component<ISignUpProps, ISignState> {

    constructor(props: any) {
        super(props)

        this.state = {
            listInput: [
                {name: 'firstNameField', placeholder: 'Имя', type: 'text'},
                {name: 'lastNameField', placeholder: 'Фамилия', type: 'text'},
                {name: 'loginField', placeholder: 'Электронная почта', type: 'email', typeValidation: onlyEmail},
                {name: 'passwordField', placeholder: 'Новый пароль', type: 'password', typeValidation: passLength(8)},
                {name: 'newPasswordField', placeholder: 'Повторите пароль', type: 'password', typeValidation: passLength(8)}
            ]
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



export default withMutation< 
    any & MutateProps<string, IRegistrationVariables>
>(signupMutation)(connectedToReduxForm(SignUp));

