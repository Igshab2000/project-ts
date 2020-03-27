import * as React from "react";
import { style } from './user-page.style'
import Label from '../UI/label/label';
import Input from '../UI/input/input';
import Button from '../UI/button/button';
import { MapStateToProps, connect, MapDispatchToProps } from "react-redux";
import { reduxForm } from "redux-form";
import { TFormData, TOwnProps, IProps } from "../sign-in/sign-in.types";
import { formValidator } from "../../utils/validator";
import { TRegistrationDispatchProps } from "../sign-up/sign-up.types";
import { Dispatch } from "redux";
import Registration from "../../store/action/registration";
import { IPropsUserPage, IUserPageState, IUserElement, IUser } from "./user-page.type";

  class UserPage extends React.Component<IPropsUserPage, IUserPageState> {
    constructor(props: any) {
      super(props);
    }
    
    private showListInput() {
      console.log(this.props.listInput);
      return this.props.listInput.map((field, index) => {
        return (
          <div
            className={style.listContent}
            key={index}
          >
            <Label
              styleCss={{
                marginTop: "12px"
              }}
            >
              {field.placeholder}
            </Label>
            <Input
              name={field.name}
              placeholder={field.placeholder}
              type={field.type}
              styleCss={{
                marginLeft: "120px",
                marginTop: "12px",
                width: '450px'
              }}
              validate={field.typeValidation ? field.typeValidation : null}
            />
          </div>
        )
      })
    }

    public render() {
      console.log(this.props.user);
      return (
        <div className={style.userPage}>
          <header className={style.userPageHeader}>
            <h2 className={style.h2}>
              {this.props.user.firstName + ' ' + this.props.user.secondName} . Редактирование
            </h2>
            <Button
              styleCss={{
                marginTop: '30px',
                marginBottom: '18px',
                width: '100px',
                marginRight: '22px'
              }}
            >Сохранить</Button>
          </header>
          <div className={style.userPageContent}>
            {this.showListInput()}
          </div>
        </div>
      )
    }
  }

  const mapDispatchToProps: MapDispatchToProps<
    TRegistrationDispatchProps, 
    IProps
> = (dispatch: Dispatch, ownProps: IProps) => {
    return {
        registration: (firstName: string, lastName: string, email: string, password: string | number) => 
        dispatch(Registration(firstName, lastName, email, password)) 
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
        listInput: state.registration.listInput,
        user: state.login.user,
        initialValues: {
          firstNameField: state.login.user.firstName,
          lastNameField: state.login.user.secondName,
          loginField: state.login.user.email

        }
    }
  };
  

const ConnectedUserPage = connect<
    TRegistrationDispatchProps
>(
    mapStateToProps,
    mapDispatchToProps
)(connectedToReduxForm(UserPage))

export default ConnectedUserPage;