import REACT from 'react';
import { ProgressBar} from 'react-bootstrap';

interface ProgressBarProps {
    nomGroup: string;
    nomModule? : string;
    valueProgress: number;
};

const TutorProgress:React.FC<ProgressBarProps> = ({nomGroup,nomModule,valueProgress}) => {
   
   return(

    <div style={{ marginBottom: '20px' }}>
      {/* Aligner le nom du groupe à gauche et le niveau à droite */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span>{nomGroup}</span>
        <span>{nomModule}</span>
      </div>
      {/* Afficher la barre de progression */}
      <ProgressBar now={valueProgress} label={`${valueProgress}%`} />
    </div>
   );
};

export default TutorProgress;