import './styles.css';

import { Face } from '../face/Face.jsx';

export const PortfolioCard = () => {
  return (
    <div className="card-container">
      <div className="img-container">
        <Face />
      </div>
    </div>
  );
};
