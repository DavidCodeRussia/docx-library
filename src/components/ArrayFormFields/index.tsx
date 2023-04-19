import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { TArrayFormFields } from "./types";
import { TBlockOfForm } from "../../types";
import s from "./ArrayFormFields.module.scss";

const initialValues = {
  fields: [{ name: "", surname: "" }],
};

const ArrayFormFields: React.FC<TArrayFormFields> = ({ setState }) => (
  <div>
    <h1>Генератор word файлов</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        setState(values);
      }}
      render={({ values }: { values: { fields: TBlockOfForm[] } }) => (
        <Form>
          <FieldArray
            name="fields"
            render={({ remove, insert, push }) => {
              return (
                <div>
                  {values.fields && values.fields.length > 0 ? (
                    values.fields.map((value, index) => (
                      <div key={index}>
                        <div className="form-group">
                          <label htmlFor="myText"></label>
                          <Field className={"form-control"} name={`fields.${index}.name`} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="myText"></label>
                          <Field className={"form-control"} name={`fields.${index}.surname`} />
                        </div>

                        <button
                          className={s.buttonEditor}
                          type="button"
                          onClick={() => remove(index)}>
                          -
                        </button>
                        <button
                          className={s.buttonEditor}
                          type="button"
                          onClick={() => insert(index + 1, { name: "", surname: "" })}>
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button
                      className={s.buttonAddField}
                      type="button"
                      onClick={() => push({ name: "", surname: "" })}>
                      Добавить поле
                    </button>
                  )}
                  <div>
                    <button className={s.buttonGetFile + " " + "btn btn-success"} type="submit">
                      Получить файл
                    </button>
                  </div>
                </div>
              );
            }}
          />
        </Form>
      )}
    />
  </div>
);

export default ArrayFormFields;
