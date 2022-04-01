import "./TrailerModal.css";
import closeIcon from '../../assets/close.svg';
import reactDOM from 'react-dom';

const TrailerModal = ({ trailerName, ytKey, closeModalHandler }) => {
  console.log("trailerName", trailerName);
  return (
    <>
      {/* {reactDOM.createPortal(<div className="modal_backdrop" onClick={closeModalHandler}></div>, document.getElementById("backdrop_container"))} */}
      <div className="modal_backdrop" onClick={closeModalHandler}></div>
      <div className="Modal position-fixed" onClick={closeModalHandler}>
        <div className="Modal__header container py-2 px-3">
          <div className="row trailer_name">
            <div className="col-10 d-flex justify-content-start">{trailerName}</div>
            <div className="col-2 d-flex justify-content-end"><img src={closeIcon} alt="close" /></div>
          </div>
        </div>
        <div className="Modal__body container px-0">
          <div className="row mx-0">
            <div className="col-12 px-0">
              <iframe src={`https://www.youtube.com/embed/${ytKey}`} title="Trailer">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </>);
}

export default TrailerModal;