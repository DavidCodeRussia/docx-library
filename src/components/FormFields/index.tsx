import React from "react";
import { Field, useFormikContext } from "formik";

const FormFields = () => {
  const { handleChange } = useFormikContext();

  return (
    <>
      <div className="form-group">
        <Field
          id={"myText"}
          name={"myText"}
          type="text"
          className={"form-control"}
          onChange={handleChange}
          placeholder="text"
        />
      </div>
      <div className="form-group">
        <Field
          id={"myEmail"}
          name={"myEmail"}
          type="text"
          className={"form-control"}
          onChange={handleChange}
          placeholder="text"
        />
      </div>
      <div className="form-group">
        <input type="file" />
      </div>
      <div className={"form-group form-check"}>
        <input type="checkbox" className="form-check-input" id={"myCheckbox"} />
        <label className="form-check-label" htmlFor="myCheckbox">
          Я согласен получать рассылку
        </label>
      </div>
      <button className="btn btn-success" type="submit">
        Получить файл
      </button>
    </>
  );
};

export default FormFields;
