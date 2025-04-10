// import './App.css';
import './index.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import myPhoto from './Xinyuan.JPG'; // Adjust the path as necessary
import { grey, orange } from '@mui/material/colors';
import Link from '@mui/material/Link';

function StyledLinks(props) {
  return (
    <Link
      underline='none'
      sx={{
      }}
      {...props}
    />
  );
}

function SeparationLine() {
  return (
    <div className='separateLine'
      style={{
        borderTopColor: grey[400]
      }}
    >
    </div>
  )
}

const pub_lst = [
  {
    'title': 'VISLIX: An XAI Framework for Validating Vision Models with Slice Discovery and Analysis.',
    'authors': ['Xinyuan Yan', 'Xiwei Xuan', 'Jorge H Piazentin Ono', 'Jiajing Guo', 'Vikram Mohanty', 'Shekar Arvind Kumar', 'Liang Gou', 'Bei Wang', 'Liu Ren'],
    'place': 'Eurographics Conference on Visualization (EuroVis), 2025',
    'link': ''
  },
  {
    'title': 'Flexible Topology Tracking with Partial Optimal Transport.',
    'authors': ['Mingzhe Li', 'Xinyuan Yan', 'Lin Yan', 'Tom Needham', 'Bei Wang'],
    'place': 'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2025',
    'link': 'https://arxiv.org/pdf/2302.02895'
  },
  {
    'title': 'EulerMerge: Simplifying Euler Diagrams Through Set Merges.',
    'authors': ['Xinyuan Yan', 'Peter Rodgers', 'Peter Rottmann', 'Daniel Archambault', 'Jan-Henrik Haunert', 'Bei Wang'],
    'place': 'International Conference on the Theory and Application of Diagrams (DIAGRAMS), 2024.',
    'link': 'https://www.sci.utah.edu/~beiwang/publications/EulerMerge_BeiWang_2024.pdf'
  },
  {
    'title': 'Generating Euler Diagrams Through Combinatorial Optimization.',
    'authors': ['Peter Rottmann', 'Peter Rodgers', 'Xinyuan Yan', 'Daniel Archambault', 'Bei Wang', 'Jan-Henrik Haunert'],
    'place': 'Eurographics Conference on Visualization (EuroVis), 2024.',
    'link': 'https://www.sci.utah.edu/~beiwang/publications/Euler_optimize_BeiWang_2024.pdf'
  },
  {
    'title': 'Exploring Visualization for Fairness in AI Education.',
    'authors': ['Xinyuan Yan', 'Youjia Zhou', 'Arul Mishra', 'Himanshu Mishra', 'Bei Wang'],
    'place': 'IEEE Pacific Visualization Conference (PacificVis), 2024.',
    'link': 'https://www.sci.utah.edu/~beiwang/publications/Fairness_BeiWang_2024.pdf'
  },
  {
    'title': 'Enable Decision Making for Battery Electric Bus Deployment Using Robust High-Resolution Interdependent Visualization.',
    'authors': ['Gabrielius A. Kudirka', 'Xinyuan Yan', 'Sarah Kunzler', 'Yirong Zhou', 'Bei Wang', 'Xiaoyue Cathy Liu'],
    'place': 'Transportation Research Board (TRB) 102nd Annual Meeting, 2023.',
    'link': 'https://ppms.trec.pdx.edu/media/project_files/1519_-_Enable_Decision_Making_for_Battery_Electric_Bus_Deployment_-_Paper.pdf'
  }
];

const poster_lst = [
  {'title': 'Turing Galaxy: Visualizing Turing Award Laureates',
    'authors': ['Xinyuan Yan', 'Yifang Ma'],
    'place': 'IEEE VIS 2021',
    'link': 'https://ieeevis.b-cdn.net/vis_2021/posters/v-vis-posters-1044-summary.pdf'
  },
  {'title': 'Elastic Tree Layouts for Interactive Exploration of Mentorship',
    'authors': ['Xinyuan Yan', 'Yifang Ma'],
    'place': 'EuroVis 2021',
    'link': 'https://diglib.eg.org/items/4d3b3c84-7e08-4f7f-89e2-5ae7921fd2a2',
    'award': 'Best Poster Award'
  }
]


function App() { 

  return (
    <Box sx={{ width: '100%', maxWidth: 800 }}> 
      <Typography variant="h3" gutterBottom sx={{fontWeight: 200}}>
        Xinyuan Yan
      </Typography>
      <SeparationLine></SeparationLine>

      <div id='intro-image-div'>
        <div>
        <Typography variant="body1" gutterBottom sx={{fontWeight: 300}}>
        Hello! I’m Xinyuan Yan (闫心愿), a fourth-year PhD student at the <Link href={"https://www.sci.utah.edu/"}>SCI Institute</Link>, University of Utah, 
        advised by <Link href={"https://www.sci.utah.edu/~beiwang/"}>Prof. Bei Wang Phillips</Link>. 
        My research interests focus on the fairness, biases, and interpretation of AI models. 
        I aim to advance this field through visual analytics and topological data analysis. 
        I also conduct research around hypergraph visualization.
        </Typography>

        <Typography variant="body1" sx={{fontWeight: 300}}>
        Before pursuing my PhD, I obtained my bachelor's degree in Computer Science from Shandong University in 2019. 
        Beyond doing academic research, I like reading and cooking!
        </Typography>

        <Typography variant="body2" sx={{fontWeight: 400, paddingTop: '10px'}}>
        <StyledLinks sx={{fontWeight: 200, margin: '0 10px 0 0'}} href='https://scholar.google.com/citations?user=zVBCLa8AAAAJ&hl=en'>Google Scholar</StyledLinks> | 
        <StyledLinks sx={{fontWeight: 200, margin: '0 10px'}} href='https://github.com/XinyuanRyanYan'>Github</StyledLinks> |
        <StyledLinks sx={{fontWeight: 200, margin: '0 10px'}} href='https://www.linkedin.com/in/xinyuan-yan-990b681b9/'>LinkedIn</StyledLinks> |
        <StyledLinks sx={{fontWeight: 200, margin: '0 10px'}} href='mailto:xyan@cs.utah.edu'>Email</StyledLinks>
        </Typography>
        </div>

        <div>
          <img 
            src={myPhoto} 
            alt="Xinyuan Yan" 
            style={{ width: '170px', borderRadius: '50%' }} // Adjust the size and style as needed
          />
          </div>
      </div>

      {/* <div className='subsection'>
      <Typography variant="h4" gutterBottom sx={{fontWeight: 300}}>
        News
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{color: grey[600]}}>
        [To be announced]
      </Typography>
      </div> */}

      {/* The PUBLICATIONS  */}
      <div className='subsection'>
      <Typography variant="h5" gutterBottom sx={{fontWeight:200}}>
        Selected Publications
      </Typography>
      <SeparationLine></SeparationLine>
      <div>
      {
          pub_lst.map((paper)=>{
            return(
              <div className='paperslot'>
              <Typography variant="subtitle1">
                {paper['title']}  <Link sx={{fontWeight: 200}} href={paper['link']}>[pdf]</Link>
              </Typography>
              <Typography variant="body1" sx={{fontWeight: 300, color: grey[600]}}>
                {paper['authors'].map((name, index)=>(
                  <span key={index}>
                  <span style={{ fontWeight: name === 'Xinyuan Yan' ? '500' : '300',
                    color: name === 'Xinyuan Yan' ?  grey[800]: grey[600]
                  }}>
                    {name}
                  </span>
                 {index !== paper['authors'].length - 1 && ', '}
              </span>
                ))}
              </Typography>
              <Typography variant="body1" sx={{fontWeight: 300, color: grey[800]}}>
                {paper['place']}
              </Typography>
              </div>
            )
          })
        }
      </div>
      </div>

      {/* The POSTERS  */}
      <div className='subsection'>
      <Typography variant="h5" gutterBottom sx={{fontWeight:200}}>
        Posters
      </Typography>
      <SeparationLine></SeparationLine>
      <div>
      {
          poster_lst.map((paper, index)=>{
            return(
              <div className='paperslot'>
              <Typography variant="subtitle1">
                {paper['title']}  <Link sx={{fontWeight: 200}} href={paper['link']}>[pdf]</Link>
              </Typography>
              <Typography variant="body1" sx={{fontWeight: 300, color: grey[600]}}>
                {paper['authors'].map((name, index)=>(
                  <span key={index}>
                  <span style={{ fontWeight: name === 'Xinyuan Yan' ? '500' : '300',
                    color: name === 'Xinyuan Yan' ?  grey[800]: grey[600]
                  }}>
                    {name}
                  </span>
                 {index !== paper['authors'].length - 1 && ', '}
              </span>
                ))}
              </Typography>
              <Typography variant="body1" sx={{fontWeight: 300, color: grey[800]}}>
                {paper['place']}
                {paper['award'] && <span style={{fontWeight: 400, color:orange[500]}}>{` ${paper['award']}`}</span>}
              </Typography>
              </div>
            )
          })
        }
      </div>
      </div>

      <div className='subsection'>
      <Typography variant="h5" gutterBottom sx={{fontWeight: 200}}>
        Professional Experiences
      </Typography> 
      <SeparationLine></SeparationLine>
      <div style={{height: '15px'}}></div>


      <Typography variant="body1" gutterBottom >
      Research Assistant, SCI Institute, University of Utah  						 
      <span style={{marginLeft: '30px'}}>01/2022 – present</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
      Research Intern, Bosch Research, Sunnyvale, California, United States  
      <span style={{marginLeft: '30px'}}>05/2023 – 08/2023 </span>
      </Typography>
      </div>

      <div className='subsection'> 
      <Typography variant="h5" gutterBottom sx={{fontWeight: 200}}>
        Teaching
      </Typography>
      <SeparationLine></SeparationLine>
      <div style={{height: '15px'}}></div>

      <Typography variant="body1" gutterBottom >
        TA, CS 3960 Algorithm Fairness in Machine Learning, 2023 Spring, University of Utah, lectured by Prof. Bei Wang Philips.
      </Typography>
      <Typography variant="body1" gutterBottom>
        TA, CS 3190 Foundations of Data Analysis, 2022 Fall, University of Utah, lectured by Prof. Jeff Philips.
      </Typography>
      </div>
    </Box>
  );
}


export default App;
