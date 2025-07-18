import React, {useState} from 'react'
import './Projects.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const cards = [
  {
    id: 1,
    title: 'CardIt',
    shortDescription: 'Web application for users to create virtual visiting cards.',
    details: [
      "Website where users can create their own virtual visiting card by selecting a template and entering details, which can be shared via a link.",
      "Built with Vanilla JavaScript, Firebase Storage, and Firebase Database."
    ]
  },
  {
    id: 2,
    title: 'Real Time Implementation Of Face Mask Detection And Recognition',
    shortDescription: 'Implemented on Nvidia Jetson nano using SSD AND MOBILENET.',
    details: [
        "This face identification system examines and compares patterns on the basis of facial features of a person.",
        " This model is mainly used as a security system in public surveillance and mobile communication to identify a person"
    ]
  }
];

const Projects = () => {
    const [selectedCard, setSelectedCard] = React.useState(0);
    const [open, setOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState({ details: [], technologies: [] });

    const handleClickOpen = (details, technologies) => {
        setSelectedExperience({details, technologies});
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  
    return (
        <div id='projects' className='projects'>
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            <div className="projects-cards">
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        gap: 2,
                    }}
                    >
                    {cards.map((card, index) => (
                        <Card
                             sx={{
                                width: 440,
                                height: 250,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.12)',
                                    boxShadow: 3,
                                },
                                margin: '10px',
                            }}>
                        <CardActionArea
                            onClick={() => setSelectedCard(index)}
                            data-active={selectedCard === index ? '' : undefined}
                            sx={{
                            height: '100%',
                            '&[data-active]': {
                                backgroundColor: 'action.selected',
                                '&:hover': {
                                backgroundColor: 'action.selectedHover',
                                },
                            },
                            }}
                            >
                            <CardContent sx={{ height: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                                    <Typography variant="h5" component="div" className="project-card-title">
                                        {card.title}
                                    </Typography>
                                </div>
                                <Typography variant="body2" color="text.secondary" className="project-card-desc">
                                    <i>{card.shortDescription}</i>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.details}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    ))}
                </Box>
            </div>

        </div>
    )
    }

export default Projects