import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports as any);


const formFields = {
  signUp: {
    username: {
      order: 1,
      placeholder: "Choose a username",
      label: "Username",
      inputProps: { required: true },
    },
    email: {
      order: 1,
      placeholder: "Enter your email address",
      label: "Email",
      inputProps: { type: "email", required: true },
    },
    password: {
      order: 3,
      placeholder: "Enter your password",
      label: "Password",
      inputProps: { type: "password", required: true },
    },
    confirm_password: {
      order: 4,
      placeholder: "Confirm your password",
      label: "Confirm Password",
      inputProps: { type: "password", required: true },
    },
  },
};
const AuthProvider = ({ children }: any) => {
  return (
    <div>
      <Authenticator formFields={formFields}>{({user} : any) => 
      user ? (<div>{children}</div>) : (<div>Please sign in below:</div>)
        }</Authenticator>
    </div>
  );
};

export default AuthProvider;