import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import kaggleIcon from '../components/Icon/Kaggle';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  // TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'My Portfolio Website',
  description: 'This is my Portfolio website you can find here everything about my professional career.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Shudanshu .`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Mumbai based <strong className="text-stone-100">Python Developer and Data Scientist</strong>, recently
        worked at <strong className="text-stone-100">Cogoport as Automation Developer</strong> build Workflow for
        freights booking till freights delivery across International Markets.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Calisthenics</strong>,
        playing my <strong className="text-stone-100">playing retro games</strong>, or exploring beautiful Spiritual Books.
        
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hey there! Here's a little about me.I am a passionate technology enthusiast with strong skills in 
  Data Science and Machine Learning. I enjoy working with data and solving complex problems by transforming raw 
  information into meaningful insights.I graduated with a Bachelor of 
  Technology in Electronics and Telecommunications (ENTC) from VJTI (2021–2025). Through hands-on experience with 
  machine learning projects, I have developed a solid foundation in data analysis, model development, and building practical AI solutions.
`,
  aboutItems: [
    {label: 'Location', text: 'Andheri West,Mumbai', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Retro games, Spiritual Books , Calisthenics', Icon: SparklesIcon},
    {label: 'Study', text: 'Veermata Jijabai Technological Institue', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Cogoport.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'Punjabi',
        level: 7,
      },
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      {
        name: 'Tensorflow/keras',
        level: 9,
      },
      {
        name: 'Pipeline Automation using Code Pipeline',
        level: 7,
      },
      {
        name: 'Docker/AWS',
        level: 6,
      },
    ],
  },
  {
    name: 'Python for Web development',
    skills: [
      {
        name: 'FLASK with Rest API',
        level: 8,
      },
      {
        name: 'Django with Rest API ',
        level: 7,
      },
      {
        name: 'Streamlit',
        level: 8,
      },
    ],
  },
  {
    name: 'Data Science',
    skills: [
      {
        name: 'Data Collection/Data Preprocessing / Feature Engineering',
        level: 9,
      },
      {
        name: 'Pandas/Numpy',
        level: 8,
      },
      {
        name: 'Scikit-Learn',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Web Digest AI',
    description:
      'An LLM-powered web application that generates concise digest-style summaries of websites \
Users can register, submit a webpage URL, and receive an AI-generated summary of the page content.',
    url: 'https://github.com/navii-29/WebDigestAI',
    image: porfolioImage1,
  },
  {
    title: 'Mail Shiled',
    description:
      'MailShield is an end-to-end machine learning web application designed to \
    detect phishing and spam emails using Natural Language Processing (NLP) and supervised learning.',
    url: 'https://github.com/navii-29/MailShield',
    image: porfolioImage2,
  },
  {
    title: 'Next Word Predictor',
    description:
      'This project implements a Next Word Prediction system using a Long Short-Term Memory (LSTM) neural network.\
Given an incomplete sentence, the model predicts the most likely next word based on learned language patterns.',
    url: 'https://github.com/navii-29/NextWordPredictor',
    image: porfolioImage3,
  },
  {
    title: 'Netflix Data Analysis Dashboard',
    description:
      'An interactive Tableau dashboard analyzing Netflix’s global content trends using a dataset of 6K+ titles.This project explores Netflix’s catalog to uncover insights \
    into:Content distribution by type, genre, rating, and country Growth of movies and TV shows over time Top genres and audience ratings',
    url: 'https://github.com/navii-29/Dashboards',
    image: porfolioImage4,
  },
  {
    title: 'Image Classification',
    description:
      'A production-style RESTful API for image classification built using Flask, InceptionV3, MongoDB, and Docker.\
This project focuses on understanding the complete backend + ML deployment workflow — from authentication and token control to\
 model inference and containerized deployment.',
    url: 'https://github.com/navii-29/ImgClassifyApi',
    image: porfolioImage5,
  },
  {
    title: 'Multiple Linear Regression -- California Housing Price Prediction',
    description:
      'This project demonstrates Multiple Linear Regression using the California Housing dataset from Scikit-Learn. It includes data loading, \
    exploratory data analysis (EDA), preprocessing, model training, evaluation, and saving the model using Pickle.',
    url: 'https://github.com/navii-29/California_house_prediction',
    image: porfolioImage6,
  },
  {
    title: '🚗 CarDekho Used Car Price Prediction',
    description:
      'This project focuses on predicting the selling price of used cars using the CarDekho dataset.A Random Forest Regressor is trained after proper data cleaning, preprocessing, and feature engineering.\
    Project Overview Problem Type: Regression Algorithm Used: Random Forest Regressor Goal: Predict car selling prices based on features like year, fuel type, transmission, owner, etc.',
    url: 'https://github.com/navii-29/Random_forest',
    image: porfolioImage7,
  },
  {
    title: 'Plagiarism',
    description:
      'A production-style REST API that detects text similarity using  NLP similarity scoring  \
    with secure user authentication, token-based usage control, and Dockerized deployment.Built as a backend-focused\
     NLP project demonstrating secure API design, database integration, and containerized deployment',
    url: 'https://github.com/navii-29/PlagiarismAPI/',
    image: porfolioImage8,
  },
  {
    title: 'Customer Churn Prediction App',
    description:
      'Streamlit web application for predicting customer churn probability using a trained TensorFlow ANN model.\
     Deployed from your churn classification project with churn.csv dataset. ppl-ai-file-upload.s3.amazonaws\
      Loads pre-trained model (model.h5) and preprocessing artifacts for real-time predictions.',
    url: 'https://github.com/navii-29/churn_classification',
    image: porfolioImage9,
  },
  {
    title: 'Movie review analyser',
    description:
      'A web application that predicts the sentiment of movie reviews using a deep learning model built with TensorFlow/Keras and deployed with Streamlit.\
    The model analyzes text reviews and classifies them as Positive or Negative based on learned patterns from the IMDB movie review dataset.',
    url: 'https://github.com/navii-29/ReviewAnalyser',
    image: porfolioImage10,
  },
  {
    title: 'Bank Transaction Api',
    description:
      'A secure RESTful banking API built with Flask, Flask-RESTful, and MongoDB. Supports user registration, account management, transfers, loans, \
    and balance inquiries with bcrypt password hashing and transaction fees.',
    url: 'https://github.com/navii-29/TransactionApi',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'March 2007 - March 2021',
    location: "Little Angels' Hr. Sec. School,Kathua, Jammu and Kashmir",
    title: 'High School',
    content: (
      <p>
        Completed my High School with major in Mathematics and Computer Science , there I learnt very profound things
        that is and will help in life , like interactions , punctuality , honesty , being respectful to others.
      </p>
    ),
  },
  {
    date: 'May 2021 - May 2025',
    location: 'Veermata Jijabia technological Institute,Mumbai,Maharashtra',
    title: 'B.Tech in Electronics and Telecommunications Engineering',
    content: (
      <p>
        Completed my graduation as an ENTC engineer with a Minor in Data Science,where I learnt about Communications
        Technologies,Control Systems,Coding with Python.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2025 - Dec 2025',
    location: 'Cogoport',
    title: 'Workflow Automation Developer',
    content: (
      <p>
        • Built automated workflows to streamline freight booking processes, along with their whole journey from source
        to destination location and standardize business tasks. • Wrote Techinial Documentation on how to build
        Automated Workflows as task given so that upcoming developer can refer that while building workflows.
      </p>
    ),
  },
  {
    date: 'Nov 2025 - Dec 2025',
    location: 'Boston Consultancy Group - X',
    title: 'Data Scientist',
    content: (
      <p>
        • Completed customer churn analysis for a utility client (Power Co.) using Python (Pandas, NumPy) and visual
        analytics. • Engineered and tuned a random forest model achieving 80% recall for churn prediction; delivered
        concise executive insights.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'valoroustruth@gmail.com',
      href: 'mailto:valoroustruth@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Mumbai,Maharashtra',
      href: 'https://maps.app.goo.gl/hcHU1tLRNA53HFLM6',
    },
    {
      type: ContactType.Instagram,
      text: 'Instagram',
      href: 'https://www.instagram.com/shudanshu_rajput_16?igsh=MXc0NGVhMGJwZmRhcw==',
    },
    {
      type: ContactType.Github,
      text: 'Github',
      href: 'https://github.com/navii-29',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/navii-29'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'Kaggle', Icon: kaggleIcon, href: 'https://www.kaggle.com/shudanshurajput'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'www.linkedin.com/in/shudanshu-rajput-292hk5108'},
  {
    label: 'Instagram',
    Icon: InstagramIcon,
    href: 'https://www.instagram.com/shudanshu_rajput_16?igsh=MXc0NGVhMGJwZmRhcw==',
  },
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/RajputShud44848'},
];
