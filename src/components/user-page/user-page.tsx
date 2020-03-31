import * as React from "react";
import { style } from './user-page.style'
import Label from '../UI/label/label';
import Input from '../UI/input/input';
import Button from '../UI/button/button';
import { MapStateToProps, connect, MapDispatchToProps } from "react-redux";
import { reduxForm, SubmissionError } from "redux-form";
import { TFormData, TOwnProps, TLoginDispatchProps } from "../sign-in/sign-in.types";
import { formValidator } from "../../utils/validator";
import { TRegistrationDispatchProps } from "../sign-up/sign-up.types";
import { Dispatch } from "redux";
import { IPropsUserPage, IUserPageState, IEditUserVariables, IEditUser, TEditUserDispatchProps} from "./user-page.type";
import { editMutation } from '../../query/editUserMutation';
import { MutateProps, withMutation } from "@apollo/react-hoc";
import LayoutUser from '../../hoc/Layouts/layout-user/layout-user';
import editUser from "../../store/action/edit-user";

  class UserPage extends React.Component<IPropsUserPage, IUserPageState> {
    constructor(props: any) {
      super(props);
    }

    private handleSubmit = (fields: any) => {
      const {mutate, user} = this.props as any;
      const id = user.id;

      return new Promise((resolve, reject) => {
          mutate({
            variables: {
              id,
              email: fields.loginField,
              firstName: fields.firstNameField,
              secondName: fields.lastNameField,
              password: fields.passwordField
            }
          })

          .then((res: any) => {
              this.props.editUser(res.data.editUser);
              resolve(res);
          })

          .catch((e: any) => {
              reject(new SubmissionError({ _error: e?.message }));
          });
      })
  }
    
    private showListInput() {
      return this.props.listInput.map((field, index) => {

        return (
          <div
            className={style.listContent}
            key={index}
          >
            <Label
              styleCss={style.label}
            >
              {field.placeholder}
            </Label>
            <Input
              name={field.name}
              placeholder={field.placeholder}
              type={field.type}
              styleCss={style.input}
              validate={field.typeValidation ? field.typeValidation : null}
            />
          </div>
        )
      })
    }

    public render() {
      return (
        <LayoutUser>
          <form className={style.userPage} onSubmit={this.props.handleSubmit(this.handleSubmit)}>
            <header className={style.userPageHeader}>
              <h2 className={style.h2}>
                {this.props.user.firstName + ' ' + this.props.user.secondName} . Редактирование
              </h2>
              <Button
                styleCss={style.button}
              >Сохранить</Button>
            </header>
            <div className={style.userPageContent}>
              {this.showListInput()}
            </div>
          </form>
        </LayoutUser>
      )
    }
  }

  const mapDispatchToProps: MapDispatchToProps<
    TEditUserDispatchProps, 
    IPropsUserPage
> = (dispatch: Dispatch) => {
    return {
         editUser: (payload) => dispatch(editUser(payload)) 
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
        user: state.editUser.user ? state.editUser.user : state.login.user,
        initialValues: {
          firstNameField: state.login.user.firstName,
          lastNameField: state.login.user.secondName,
          loginField: state.login.user.email

        }
    }
  };
  

const ConnectedUserPage = connect<
  TEditUserDispatchProps
>(
    mapStateToProps,
    mapDispatchToProps
)(connectedToReduxForm(UserPage))

export default withMutation< any & MutateProps<IEditUser, IEditUserVariables>>(editMutation)(ConnectedUserPage);