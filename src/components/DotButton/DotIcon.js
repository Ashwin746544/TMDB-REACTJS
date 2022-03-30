import dotImg from '../../assets/dot.svg';
import './DotIcon.css';

const DotIcon = () => {
  return (
    <div className="dot__container">
      <img src={dotImg} alt="dot" />
    </div>
  );
}

export default DotIcon;