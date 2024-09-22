import REACT from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface ProgressBarProps {
    nomGroup: string;
    nomModule? : string;
    valueProgress: number;
};

const TutorProgress:React.FC<ProgressBarProps> = ({nomGroup,nomModule,valueProgress}) => {
   
  return (
    <Card>
        <CardContent> 

          {/* afficher et aligner groupe et nom de module */}

            <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="h6">{nomGroup}</Typography>
                <Typography variant="body2" color="textSecondary">{nomModule}</Typography>
            </Box>

          {/*progressbar */}

            <Box display="flex" alignItems="center" width="100%" mr={1}>
                <Box width="100%" mr={1}>
                    <LinearProgress variant="determinate" value={valueProgress}/>
               
                </Box>
                    <Typography variant="body2" color="textSecondary" minWidth={35}>{`${valueProgress}%`}</Typography>
               
            </Box>
        </CardContent>
    </Card>
);
};

export default TutorProgress;