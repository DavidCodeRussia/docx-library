//@ts-nocheck
import { Formik } from "formik";
import ArrayFormFields from "../ArrayFormFields";
import FormFields from "../FormFields";

const initialValues = {
  myText: "",
  myEmail: "",
};

const Form = ({ setState }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="card mt-5">
              <div className="card-body">
                <div className="card-title">Форма</div>

                <Formik
                  onSubmit={(values) => {
                    setState(values);
                  }}
                  initialValues={initialValues}>
                  {({ values, handleSubmit }) => {
                    return (
                      <form onSubmit={handleSubmit}>
                        {/* <FormFields /> */}
                        <ArrayFormFields />
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
          <div className="col-7"></div>
        </div>
      </div>{" "}
    </>
  );
};

export default Form;
