import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./ProgressBar.css";

const ProgressBar = ({ persentage }) => {
  let pColor = "#20c774";
  if (persentage <= 60) {
    pColor = "yellow";
  }
  return (
    <div className="progressBar__Container">
      <CircularProgressbarWithChildren
        background value={persentage}
        styles={buildStyles({ pathColor: pColor, trailColor: "rgb(28 97 147)", backgroundColor: '#032b48' })} >
        <span className='progressBar__Children'>{persentage}<small>%</small></span>
      </CircularProgressbarWithChildren>
    </div>
  );
}
export default ProgressBar;
