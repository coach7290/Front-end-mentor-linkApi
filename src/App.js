import React from 'react';

import './App.css';
import axios from 'axios';
import chart from "./images/icon-brand-recognition.svg";
import clock from "./images/icon-detailed-records.svg";
import paint from "./images/icon-fully-customizable.svg";
import logo from "./images/logo.svg";
import fb from "./images/icon-facebook.svg";
import twit from "./images/icon-twitter.svg";
import pint from "./images/icon-pinterest.svg";
import inst from "./images/icon-instagram.svg";


class App extends React.Component {
  constructor (props){
    super(props)

    this.state={
       link:"",
       url:"",
       display: "no"


    }

    this.fetchData= this.fetchData.bind(this);
    this.handleChange= this.handleChange.bind(this);
  }

 
  fetchData(){
    axios.post(`https://rel.ink/api/links/`, {
      url: `${this.state.link}`
    })
      .then(res => {
       let hash = res.data.hashid;
       console.log(hash);
       this.setState({
         url : `https://rel.ink/${hash}`,
         display: "block"
       })
       
       
      })
  }

  handleChange(e) {
    this.setState({
      link: e.target.value
    })
  }

  componentDidMount() {

   
   
  }


  

  render(){

    
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <ul className="left">
            <li>Shortly</li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
            </ul>

            <ul className="right">
              <li><a href="#">Login</a></li>
              <li><a href="#"><button className="btn btn-rounded">Sign up</button></a></li>
            </ul>
        </nav>
      </header>
      <section className="main">
        <div className="showcase">
          <h1>More than just shorter links</h1>
          <p>Build your brand’s recognition and get detailed insights 
             on how your links are performing.</p>
          <button className="btn btn-rounded">Get started</button>
        </div>
         <div className="modal" style={{display: this.state.display=="no"? "none": "block"}}>
           <div className="modal-content">
           <span onClick={()=>{this.setState({display: "no"})}}>x</span>
        <h2><a href={this.state.link}>{this.state.link}</a></h2>
        <h2><a href={this.state.url}>{this.state.url}</a></h2>
        </div>
      </div>
      </section>
      <section className="central"> 
      
      <div className="short-link-input">
        <input placeholder="Shorten your link here..." type="text" name="url" value={this.state.link} onChange={this.handleChange}></input>
    <button className="btn" onClick={this.fetchData}>Shorten it!</button>
    
      </div>
     
      <div className="showcase">
        
        <h1>Advanced Statistics</h1>
        <p> Track how your links are performing across the web with our 
            advanced statistics dashboard.</p>
      </div>
      <div className="container">
      <hr/>
        
        <div className="item item-stat">
          <div className="img-item">
             <img src={chart}/>
          </div>
         
          <p>Brand Recognition</p>
          <p> Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div className="item item-clock">
        <div className="img-item">
             <img src={clock}/>
          </div>
          <p>Detailed Records</p>
          <p>Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
        </div>
        <div className="item item-paint">
        <div className="img-item">
             <img src={paint}/>
          </div>
          <p> Fully Customizable</p>
          <p> Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</p>
        </div>
      </div>
      </section>

      <section className="bottom">
        <h1>Boost your links today</h1>
        <button className="btn btn-rounded">Get started</button>
      </section>
      <footer className="footer">
        <div className="content">
          <img className="logo" src={logo}></img>
          <table className="table">
            <tbody>
            <tr>
              <th>Features</th>
              <th>Resources</th>
              <th>Company</th>

            </tr>
            <tr>
              <td>Link Shortening</td>
              <td>Blog</td>
              <td>About</td>
            </tr>
            <tr>
              <td>Branded links</td>
              <td>Developers</td>
              <td>Our Team</td>
            </tr>
            <tr>
              <td>Analytics</td>
              <td>Support</td>
              <td>Careers</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Contact</td>
            </tr>
            </tbody>
          </table>

          <div className="social">
          <img src={fb}/>
          <img src={twit}/>
          <img src={pint}/>
          <img src={inst}/>
          </div>

        </div>

      </footer>

     
    
  
  
    </div>
  );
  }
}

export default App;


