import React, {useState} from 'react'
import './Experience.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import wflogo from '../../assets/wells-logo.png'
import axislogo from '../../assets/axis-logo.png'
import pfizerlogo from '../../assets/pfizer-logo.png'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const cards = [
  {
    id: 1,
    title: 'Wells Fargo',
    role: 'Senior Software Engineer',
    period: 'July 2022 - Present',
    logo: wflogo,
    shortDescription: 'Blockchain development, React frontend development and Ansible automation.',
    details: [
      "Developed and deployed blockchain solutions using Corda and Cosmos with security-focused architecture",
      "Built intuitive React-based UIs for blockchain applications using modern HTML/CSS/JavaScript",
      "Designed wireframes and implemented a payment proof-of-concept (PoC) for Cosmos ecosystem",
      "Automated infrastructure deployment using Ansible for multi-validator blockchain setups",
      "Created custom scripts and playbooks to standardize node deployment processes",
      "Optimized verifiable log systems using Trillian (Go) with tile-based storage approach",
      "Developed automated UI test suites with Playwright for cross-browser compatibility",
      "Implemented Kubernetes solutions for container orchestration and scalable infrastructure",
      "Created CI/CD pipelines using GitHub Actions for automated testing and deployment"
    ],
    technologies: [
      'React', 'TypeScript', 'Corda', 'Cosmos SDK', 'Ansible', 
      'Kubernetes', 'Go', 'Playwright', 'GitHub Actions'
    ]
  },
  {
    id: 2,
    title: 'Axis Bank',
    role: 'Digital Product Owner Intern',
    period: 'May 2021- July 2021',
    shortDescription: 'Digitization of Core services for Corporate Banking.',
    logo: axislogo,
    details: [
        "Reviewed and analyzed key banking service pages to identify opportunities for digital improvement",
        "Designed modern, user-friendly UX prototypes using Figma to enhance customer experience",
        "Collaborated with stakeholders to present design solutions and implementation strategies"
    ],
    technologies: [ 'Figma', 'PowerPoint']
  },
  {
    id: 3,
    title: 'Pfizer Healthcare India Pvt.Ltd',
    role: 'Industrial Training Intern',
    period: 'July 2019 - July 2019',
    shortDescription: ' Completed a 3-week industrial training program in the Manufacturing Department.',
    logo: pfizerlogo,
    details: [ 
        "Understood the architecture and workflow of key manufacturing processes",
        "Observed machine operations and safety protocols on the shop floor",
        "Prepared a detailed report documenting process insights and improvement suggestions"
    ],
    technologies: [ 'Microsoft Word', 'PowerPoint']
  },
];

const Experience = () => {
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
        <div id = 'experience' className='experience'>
            <div className="experience-title">
                <h1>Experience</h1>
            </div>
            <div className="experience-cards">
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
                                height: 220,
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
                                <img src={card.logo} style={{ width: '50px', height: '50px', marginRight: '20px'}} />
                                <Typography variant="h5" component="div">
                                    {card.title}
                                </Typography>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                {card.shortDescription}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {card.role} ({card.period})
                            </Typography>
                            <button
                                onClick={() => handleClickOpen(card.details, card.technologies)}
                                className='experience-buttons'>More about the role</button>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    ))}
                </Box>
            </div>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>Role Details</DialogTitle>
                <DialogContent dividers>
                    <Typography variant="h6" gutterBottom>Work Details:</Typography>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        {selectedExperience.details && selectedExperience.details.map((item, idx) => (
                            <li key={idx} style={{paddingBottom: '10px'}}>{item}</li>
                        ))}
                    </ul>
                    <Typography variant="h6" gutterBottom>Technologies Used:</Typography>
                    <ul  style={{ listStyleType: 'disc', paddingLeft: '20px'}}>
                        {selectedExperience.technologies && selectedExperience.technologies.map((tech, idx) => (
                            <li key={idx} style={{paddingBottom: '10px'}}>{tech}</li>
                        ))}
                    </ul>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} className='experience-buttons'>
                        Close
                    </button>
                </DialogActions>
            </Dialog>

        </div>
    )
    }

export default Experience