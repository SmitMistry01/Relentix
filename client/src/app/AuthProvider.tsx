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
      order: 2,
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Authenticator
        formFields={formFields}
        hideSignUp={false}
        components={{
          Header() {
            return (
              <div className="text-center mb-4">
                <h1 className="text-4xl font-extrabold text-blue-600">Relentix</h1>
                <p className="text-gray-500 text-sm mt-1">Sign in to access your workspace</p>
              </div>
            );
          },
          Footer() {
            return (
              <div className="text-center mt-4 text-sm text-gray-400">
                © {new Date().getFullYear()} Relentix. All rights reserved.
              </div>
            );
          },
        }}
      >
        {({ user }: any) =>
          user ? (
            <div className="w-full">{children}</div>
          ) : (
            <div className="text-center text-lg">Please sign in below</div>
          )
        }
      </Authenticator>
    </div>
  );
};

export default AuthProvider;
