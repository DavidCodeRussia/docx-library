import ArrayFormFields from "../ArrayFormFields";
import { TFormProps } from "./types/index";

const Form: React.FC<TFormProps> = ({ setState }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="card mt-5">
              <div className="card-body">
                <div className="card-title">Форма</div>
                <ArrayFormFields setState={setState} />
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
