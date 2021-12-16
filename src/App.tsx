import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GithubRepoResource } from './Service';

const repos = [
  {
    reponame: 'nocapshows/nocap-backstage-api',
    url: 'https://github.com/nocapshows/nocap-backstage-api',
    name: 'backstage-api'
  }
]

function buildTiles() {
  return repos.map(repo => {
    // todo fetching exact properties go here
    return <GithubRepoResource 
      repoName={repo.reponame} 
      serviceType='gh_repo'
      name={repo.name}
      branchList={[]} 
      latestReleaseVersion='1.0.0' 
      language='javascript' 
      url={repo.url} 

    />
  })
}

function App() {

  // const init = async  () => {
  //   const data = await FileAttachment("data/Anonymous Salary Survey (Responses) - Form Responses 1.csv").csv({typed: true});
  // }


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        

        {buildTiles()}

      </header>
    </div>
  );
}

export default App;
