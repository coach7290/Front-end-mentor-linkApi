import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import chart from "./images/icon-brand-recognition.svg";
import clock from "./images/icon-detailed-records.svg";
import paint from "./images/icon-fully-customizable.svg";


class App extends React.Component {
  constructor (props){
    super(props)

    this.state={
       link:"",
       url:""


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
         url : `https://rel.ink/${hash}`
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
      </section>
      <section className="central"> 
      <hr/>
      <div className="short-link-input">
        <input placeholder="Shorten your link here..." type="text" name="url" value={this.state.link} onChange={this.handleChange}></input>
    <button className="btn" onClick={this.fetchData}>Shorten it!</button>
    <h2>{this.state.link}</h2>
  <h2>{this.state.url}</h2>
      </div>
      <div className="showcase">
        <h1>Advanced Statistics</h1>
        <p> Track how your links are performing across the web with our 
            advanced statistics dashboard.</p>
      </div>
      <div className="container">
        
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

     
    
  
  
    </div>
  );
  }
}

export default App;


