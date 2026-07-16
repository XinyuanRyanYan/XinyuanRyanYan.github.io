// import './App.css';
import './index.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import myPhoto from './Xinyuan.JPG'; // Adjust the path as necessary
import { grey } from '@mui/material/colors';
import Link from '@mui/material/Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'EB Garamond, serif',
    fontStyle: 'italic',
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#1a7e80', // Replace with your desired color
            textDecoration: 'none', // Add underline
            // textDecorationColor: '#1a7e80', // Keep the color the same
          '&:hover': {
            textDecoration: 'underline', // Optional: Add underline on hover
          },
        },
      },
    },
  },
});

function StyledLinks(props) {
  return (
    <Link
      textDecoration='none'
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
    'title': 'Explainable Mapper: Charting LLM Embedding Spaces Using Perturbation-Based Exploration, Explanation, and Verification Agents.',
    'authors': ['Xinyuan Yan', 'Rita Sevastjanova', 'Sinie van der Ben', 'Mennatallah El-Assady', 'Bei Wang'],
    'place': 'IEEE Visualization Conference (VIS), 2026.',
    'link': '/explainable-mapper/VIS2026_Explainable_Mapper_full_paper.pdf',
    'supplement': '/explainable-mapper/VIS2026_Explainable_Mapper_Appendix.pdf',
    'video': '/explainable-mapper/explainer-mapper.mp4'
  },
  {
    'title': 'Teaching People LLM\'s Errors and Getting it Right.',
    'authors': ['Nathan Stringham', 'Fateme Hashemi Chaleshtori', 'Xinyuan Yan', 'Zhichao Xu', 'Bei Wang', 'Ana Marasovic'],
    'place': '6th Workshop on Trustworthy Natural Language Processing (TrustNLP), colocated with the 2026 Annual Conference of the Association for Computational Linguistics (ACL), 2026.',
    'link': 'https://www.arxiv.org/pdf/2512.21422' 
  },
  {
    'title': 'Visual Exploration of Feature Relationships in Sparse Autoencoders with Curated Concepts.',
    'authors': ['Xinyuan Yan', 'Shusen Liu', 'Kowshik Thopalli', 'Bei Wang'],
    'place': 'Mechanistic Interpretability Workshop at NeurIPS, 2025',
    'code': 'https://github.com/tdavislab/SAEExploration.git',
    'link': 'https://arxiv.org/pdf/2511.06048',
    'video': '/SAE-Explorer-demo.mp4'
  },
  {
    'title': 'VISLIX: An XAI Framework for Validating Vision Models with Slice Discovery and Analysis.',
    'authors': ['Xinyuan Yan', 'Xiwei Xuan', 'Jorge Piazentin Ono', 'Jiajing Guo', 'Vikram Mohanty', 'Shekar Arvind Kumar', 'Liang Gou', 'Bei Wang', 'Liu Ren'],
    'place': 'Eurographics Conference on Visualization (EuroVis), 2025',
    'link': 'https://www.sci.utah.edu/~beiwang/publications/VISLIX_BeiWang_2025.pdf',
    'supplement': 'https://www.sci.utah.edu/~beiwang/publications/VISLIX_Supplement_BeiWang_2025.pdf',
    'video': 'https://www.sci.utah.edu/~beiwang/publications/videos/VISLIX-Video.mp4',
  },
  {
    'title': 'Flexible Topology Tracking with Partial Optimal Transport.',
    'authors': ['Mingzhe Li', 'Xinyuan Yan', 'Lin Yan', 'Tom Needham', 'Bei Wang'],
    'place': 'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2025',
    'link': 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10965933',
    'code': 'https://github.com/tdavislab/GWMT'
  },
  {
    'title': 'EulerMerge: Simplifying Euler Diagrams Through Set Merges.',
    'authors': ['Xinyuan Yan', 'Peter Rodgers', 'Peter Rottmann', 'Daniel Archambault', 'Jan-Henrik Haunert', 'Bei Wang'],
    'place': 'International Conference on the Theory and Application of Diagrams (DIAGRAMS), 2024.',
    'link': 'https://www.sci.utah.edu/~beiwang/publications/EulerMerge_BeiWang_2024.pdf',
    'code': 'https://github.com/tdavislab/EulerMerge',
    'arXiv': 'https://arxiv.org/pdf/2311.15396'
  },
  {
    'title': 'Exploring Visualization for Fairness in AI Education.',
    'authors': ['Xinyuan Yan', 'Youjia Zhou', 'Arul Mishra', 'Himanshu Mishra', 'Bei Wang'],
    'place': 'IEEE Pacific Visualization Conference (PacificVis), 2024.',
    'link': 'https://www.sci.utah.edu/~beiwang/publications/Fairness_BeiWang_2024.pdf',
    'supplement': 'https://www.sci.utah.edu/~beiwang/publications/Fairness_BeiWang_2024_Supplement.pdf',
    'code': 'https://github.com/tdavislab/FairAI-Education-VisTool'
  },
  {
    'title': 'Generating Euler Diagrams Through Combinatorial Optimization.',
    'authors': ['Peter Rottmann', 'Peter Rodgers', 'Xinyuan Yan', 'Daniel Archambault', 'Bei Wang', 'Jan-Henrik Haunert'],
    'place': 'Eurographics Conference on Visualization (EuroVis), 2024.',
    'link': 'https://www.sci.utah.edu/~beiwang/publications/Euler_optimize_BeiWang_2024.pdf'
  },
  {
    'title': 'Enable Decision Making for Battery Electric Bus Deployment Using Robust High-Resolution Interdependent Visualization.',
    'authors': ['Gabrielius A. Kudirka', 'Xinyuan Yan', 'Sarah Kunzler', 'Yirong Zhou', 'Bei Wang', 'Xiaoyue Cathy Liu'],
    'place': 'Transportation Research Board (TRB) 102nd Annual Meeting, 2023.',
    'link': 'https://ppms.trec.pdx.edu/media/project_files/1519_-_Enable_Decision_Making_for_Battery_Electric_Bus_Deployment_-_Paper.pdf'
  }
];

const preprint_lst = [
  {
    'title': 'TopoAlign: Topology-Aware Visual Representation Alignment.',
    'authors': ['Xinyuan Yan', 'Rita Sevastjanova', 'Mennatallah El-Assady', 'Bei Wang'],
    'link': 'https://arxiv.org/pdf/2605.25541',
    'year': 2026
  },
  {
    'title': 'See or Recall: A Sanity Check for the Role of Vision in Solving Visualization Question Answer Tasks with Multimodal LLMs.',
    'authors': ['Zhimin Li', 'Haichao Miao', 'Xinyuan Yan', 'Valerio Pascucci', 'Matthew Berger', 'Shusen Liu'],
    'link': 'https://arxiv.org/pdf/2504.09809',
    'year': 2025
  }
];

const poster_lst = [
  {'title': 'Turing Galaxy: Visualizing Turing Award Laureates',
    'authors': ['Xinyuan Yan', 'Yifang Ma'],
    'place': 'IEEE VIS 2021',
    'link': 'https://ieeevis.b-cdn.net/vis_2021/posters/v-vis-posters-1044-summary.pdf',
    'poster': 'https://ieeevis.b-cdn.net/vis_2021/posters/v-vis-posters-1044.pdf'
  },
  {'title': 'Elastic Tree Layouts for Interactive Exploration of Mentorship',
    'authors': ['Xinyuan Yan', 'Yifang Ma'],
    'place': 'EuroVis 2021',
    'link': '/Elastic%20Tree%20Layouts%20for%20Interactive%20Exploration%20of%20Mentorship.pdf',
    'award': 'Best Poster Award'
  }
]


function App() { 

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', maxWidth: 900 }}> 
        <Typography variant="h3" gutterBottom sx={{fontWeight: 200, fontSize: '2.7em'}}>
          Xinyuan Yan
        </Typography>
        <SeparationLine></SeparationLine>

        <div id='intro-image-div'>
          <div>
          <Typography variant="body1" gutterBottom sx={{fontWeight: 300, fontSize: '1.15em'}}>
          Hello! I’m Xinyuan Yan (闫心愿), a fifth-year PhD student at the <Link href={"https://www.sci.utah.edu/"}>SCI Institute</Link>, University of Utah, 
          advised by <Link href={"https://www.sci.utah.edu/~beiwang/"}>Prof. Bei Wang Phillips</Link>. 
          My research interests focus on the fairness, explainability, and interpretability of AI systems.
          I aim to advance these areas through the development of human-centered visual analytics, Topological Data Analysis (TDA), and agentic AI techniques.
          </Typography>

          <Typography variant="body1" sx={{fontWeight: 300, fontFamily: 'EB Garamond', fontSize: '1.15em'}}>
          Before pursuing my PhD, I obtained my bachelor's degree in Computer Science from Shandong University. 
          Outside of research, I enjoy reading and watching movies. My recently favorite book is <em>Why Fish Don't Exist</em> by Lulu Miller.
          </Typography>

          <Typography variant="body2" sx={{fontWeight: 400, paddingTop: '10px'}}>
          <StyledLinks sx={{fontWeight: 200, margin: '0 10px 0 0', fontSize: '1.15em'}} href='https://scholar.google.com/citations?user=zVBCLa8AAAAJ&hl=en'>Google Scholar</StyledLinks> | 
          <StyledLinks sx={{fontWeight: 200, margin: '0 10px', fontSize: '1.15em'}} href='https://github.com/XinyuanRyanYan'>Github</StyledLinks> |
          <StyledLinks sx={{fontWeight: 200, margin: '0 10px', fontSize: '1.15em'}} href='https://www.linkedin.com/in/xinyuan-yan-990b681b9/'>LinkedIn</StyledLinks> |
          <StyledLinks sx={{fontWeight: 200, margin: '0 10px', fontSize: '1.15em'}} href='mailto:xyan@cs.utah.edu'>Email</StyledLinks> |
          <StyledLinks sx={{fontWeight: 200, margin: '0 10px', fontSize: '1.15em'}} href='/CV.pdf'>CV</StyledLinks>
          </Typography>
          </div>

          <div>
            <img 
              src={myPhoto} 
              alt="Xinyuan Yan" 
              style={{ width: '170px', borderRadius: '50%' , border: '2px solid #e9e8e4'}} // Adjust the size and style as needed #e9e8e4
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

        {/* The PREPRINTS  */}
        <div className='subsection'>
        <Typography variant="h5" gutterBottom sx={{fontWeight:200}}>
          Preprints
        </Typography>
        <SeparationLine></SeparationLine>
        <div>
        {
            preprint_lst.map((paper)=>{
              return(
                <div className='paperslot'>
                <Typography variant="subtitle1" sx={{fontSize: '1.15em'}}>
                  {paper['title']}
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
                  <span style={{fontStyle: 'italic', color: grey[800]}}>. {paper['status'] || 'Under submission'}, {paper['year']}.</span>
                  {paper['link'] && <span> <Link sx={{ fontWeight: 200 }} href={paper['link']}>arXiv</Link></span>}
                </Typography>
                </div>
              )
            })
          }
        </div>
        </div>

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
                <Typography variant="subtitle1" sx={{fontSize: '1.15em'}}>
                  {paper['title']}
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
                <Typography variant="body1" sx={{fontWeight: 300, color: grey[800], fontStyle: 'italic'}} >
                  {paper['place']}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 300, color: grey[800], fontSize: '0.9em' }}>
                  {paper['link'] && <Link sx={{ fontWeight: 200 }} href={paper['link']}>paper</Link>}
                  {paper['supplement'] && <span> | <Link sx={{ fontWeight: 200 }} href={paper['supplement']}>supplement</Link></span>}
                  {paper['arXiv'] && <span> | <Link sx={{ fontWeight: 200 }} href={paper['arXiv']}>arXiv</Link></span>}
                  {paper['video'] && <span> | <Link sx={{ fontWeight: 200 }} href={paper['video']}>video</Link></span>}
                  {paper['code'] && <span> | <Link sx={{ fontWeight: 200 }} href={paper['code']}>code</Link></span>} 
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
                <Typography variant="subtitle1" sx={{fontSize: '1.15em'}}> 
                  {paper['title']}  
                  <Link sx={{fontWeight: 200}} href={paper['link']}>[pdf]</Link>
                  {paper['poster']&&<Link sx={{fontWeight: 200}} href={paper['poster']}>[poster]</Link>}
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
                <Typography variant="body1" sx={{fontWeight: 300, color: grey[800], fontStyle: 'italic'}} >
                  {paper['place']}
                  {paper['award'] && <span style={{fontWeight: 600, color:'#e2931f'}}>{` ${paper['award']}`}</span>}
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


        <Typography variant="body1" gutterBottom sx={{fontSize: '1.15em'}}>
        Research Assistant, SCI Institute, University of Utah  						 
        <span style={{marginLeft: '30px'}}>01/2022 – present</span>
        </Typography>
        <Typography variant="body1" gutterBottom sx={{fontSize: '1.15em'}}>
        Visiting Student, IVIA Lab, ETH Zurich, Switzerland
        <span style={{marginLeft: '30px'}}>08/2025 – 09/2025 </span>
        </Typography>
        <Typography variant="body1" gutterBottom sx={{fontSize: '1.15em'}}>
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

        <Typography variant="body1" gutterBottom sx={{fontSize: '1.15em'}}>
        Guest Lecturer, CS 3090: Ethics in Computing, 2025 Fall, University of Utah, lectured by Prof. Bei Wang Philips.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{fontSize: '1.15em'}}>
        Guest Lecturer, CS 3090: Ethics in Computing, 2025 Spring, University of Utah, lectured by Prof. Noelle Brown.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{fontSize: '1.15em'}}>
          TA, CS 3960 Algorithm Fairness in Machine Learning, 2023 Spring, University of Utah, lectured by Prof. Bei Wang Philips.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{fontSize: '1.15em'}}>
          TA, CS 3190 Foundations of Data Analysis, 2022 Fall, University of Utah, lectured by Prof. Jeff Philips.
        </Typography>
        </div>
      </Box>
    </ThemeProvider>
  );
}


export default App;
