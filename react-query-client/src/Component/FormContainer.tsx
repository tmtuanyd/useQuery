import { Form, Formik, FormikProps } from "formik";
import React, { ReactChild } from "react";
import { Children } from "react";
import { ReactNode } from "react";

export interface Dictionary {
  [k: string]: any;
}

type FunctionChildren = (props: FormikProps<Dictionary>) => ReactNode;

interface BookForm {
  initialValue: Dictionary;
  onSubmit: () => void | Promise<void>;
  children?: FunctionChildren | ReactNode;
  innerRef?: React.Ref<FormikProps<any>>;
}

const FormContainer = ({ initialValue, onSubmit, children }: BookForm) => {
  return (
    <Formik initialValues={initialValue} onSubmit={onSubmit}>
      {(formPros: FormikProps<Dictionary>) =>
        typeof children !== "function" ? (
          <Form>{children}</Form>
        ) : (
          children(formPros)
        )
      }
    </Formik>
  );
};

export default FormContainer;
