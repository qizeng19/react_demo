import React, { useEffect, useState, useCallback } from "react";
import Schema from "async-validator";
const App = () => {
  const fntest = () => {
    const descriptor = {
      name: {
        type: "string",
        required: true,
        validator: (rule, value) => value === "muji",
      },
      age: {
        type: "number",
        asyncValidator: (rule, value) => {
            console.log('value===>',value);
            console.log('rule===>',rule);
          return new Promise((resolve, reject) => {
            if (value < 18) {
              reject("too young"); // reject with error message
            } else {
              resolve();
            }
          });
        },
      },
    };
    const validator = new Schema(descriptor);
    // validator.validate({ name: "muji" }, (errors, fields) => {
    //   if (errors) {
    //     // validation failed, errors is an array of all errors
    //     // fields is an object keyed by field name with an array of
    //     // errors per field
    //     return handleErrors(errors, fields);
    //   }
    //   // validation passed
    // });

    // PROMISE USAGE
    validator
      .validate({ name: "muji", age: 19 })
      .then(() => {
          console.log('通过===>');
        // validation passed or without error message
      })
      .catch(({ errors, fields }) => {
        return handleErrors(errors, fields);
      });
  };

  const handleErrors = (err, fields)=>{
      console.log('err===>',err);
      console.log('fields===>',fields);
  }
  return <div onClick={fntest}>12332323</div>;
};
export default App;
