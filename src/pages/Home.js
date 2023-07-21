import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import "../styles/Home.css";
import { Link } from "react-router-dom";
import resumePDF from "../assets/Srikanthan_Prakash_Resume.pdf";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Srikanthan</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a
            href="https://www.linkedin.com/in/srikanthan-prakash-a94a81224/"
            target="_blank"
            rel="noopener noreferrer"
          >
            < LinkedInIcon   />
          </a>   
          <a href={resumePDF} download target="_blank" rel="noopener noreferrer">
            <InsertDriveFileIcon />
          </a>
          <a
            href="https://github.com/techwithsrikanth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Development</h2>
            <span>
              ReactJS, Redux, HTML, CSS, Node JS, Express JS, REST, GraphQL, MongoDB, MySQL, Git,GitHub
            </span>
          </li>
          <li className="item">
            <h2>Other Technologies</h2>
            <span>
              AWS S3, EC2, ERM, Athena, Glue Catalog, Apache Kafka, Hive, SnowFlake, Spark, RedShift
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C </span>
          </li>
          <li className="item">
            <h2>Machine Learning</h2>
            <span>Deep Learning, NLP, Tranformers, Computer Vision,  edge detection and contours, Yolo, LSTM, RNN, XgBoost, RandomForest, KNN, Regression, Generative Adversial Networks (GAN's)</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
