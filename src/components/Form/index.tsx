//@ts-nocheck

const Form = ({ generateDoc, setState }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="card mt-5">
              <div className="card-body">
                <div className="card-title">Форма</div>
                <form action="">
                  <div className="form-group">
                    <label htmlFor="myText"></label>
                    <input id="myText" type="text" className={'form-control'} placeholder="text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="myEmail"></label>
                    <input id="myEmail" type="text" className={'form-control'} placeholder="text" />
                  </div>
                  <div className="form-group">
                    <input type="file" onChange={(e) => setState(e.target.value)} />
                  </div>
                  <div className={'form-group form-check'}>
                    <input type="checkbox" className="form-check-input" id={'myCheckbox'} />
                    <label className="form-check-label" htmlFor="myCheckbox">
                      Я согласен получать рассылку
                    </label>
                  </div>
                </form>
                <button className="btn btn-success" onClick={generateDoc}>
                  Получить файл
                </button>
              </div>
            </div>
          </div>
          <div className="col-7"></div>
        </div>
      </div>
    </>
  );
};

export default Form;
