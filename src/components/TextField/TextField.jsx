import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const TextField = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="bg-red"></div>
      <FormControl isInvalid={meta.error && meta.touched}>
        {props.label && <FormLabel>{props.label}</FormLabel>}
        <Field as={Input} {...field} {...props} />
        <FormHelperText>
          <span className="text-[#FF0000]">{meta.error}</span>
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default TextField;
