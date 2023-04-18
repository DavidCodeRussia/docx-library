//@ts-nocheck
import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

const ArrayFormFields = () => (
  <div>
    <h1>Friend List</h1>
    <Formik
      initialValues={{ friends: ["jared", "ian", "brent"] }}
      onSubmit={(values) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values }) => (
        <Form>
          <FieldArray
            name="friends"
            render={({ remove, insert, push }) => (
              <div>
                {values.friends && values.friends.length > 0 ? (
                  values.friends.map((friend, index) => (
                    <div key={index}>
                      <Field name={`friends.${index}.name`} />
                      <Field name={`friends.${index}.surname`} />
                      <button
                        type="button"
                        onClick={() => remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => insert({ name: "", surname: "" })} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => push("")}>
                    {/* show this when user has removed all friends from the list */}
                    Add a friend
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);

export default ArrayFormFields;
