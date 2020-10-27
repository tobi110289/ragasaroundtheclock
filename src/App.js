import './App.css';
import { Component } from 'react';
import bgImage from './assets/bg.png';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { time: new Date(Date.now()).getHours(), };
  }

  timeCheck (hour) {
    let selector = 'earlymorning';
    console.log('hour inside timecheck', hour);
    if (hour < 3) selector = 'latenight';
    if (hour >= 3 && hour < 6) selector = 'earlymorning';
    if (hour >= 6 && hour < 9) selector = 'morning';
    if (hour >= 9 && hour < 12) selector = 'forenoon';
    if (hour >= 12 && hour < 15) selector = 'afternoon';
    if (hour >= 15 && hour < 18) selector = 'evening';
    if (hour >= 18 && hour < 21) selector = 'lateevening';
    if (hour >= 21 && hour < 24) selector = 'night';
    return selector;
  }

  scrollMap (daytime) {
    let coordinate = 0;
    switch (daytime) {
      case 'latenight': coordinate = 3760;
        break;
      case 'earlymorning': coordinate = 190;
        break;
      case 'morning': coordinate = 700;
        break;
      case 'forenoon': coordinate = 1210;
        break;
      case 'afternoon': coordinate = 1720;
        break;
      case 'evening': coordinate = 2235;
        break;
      case 'lateevening': coordinate = 2745;
        break;
      case 'night': coordinate = 3260;
        break;
      default: coordinate = 0;
        break;
    }
    return coordinate;
  }

  scrollPlease (y) {
    window.scrollTo(0, y);
  }
  componentDidMount () {
    this.scrollPlease(this.scrollMap(this.timeCheck(this.state.time)));
  }

  render () {
    console.log(this.timeCheck(this.state.time));
    return (<div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} className="container">
      <h1>Ragas Around The Clock</h1>
      <span onClick={e => this.scrollPlease(e)} id="earlymorning">Early Morning: 3am to 6am</span>
      <iframe title="earlymorning" src="https://open.spotify.com/embed/playlist/0qOibXTlBLpx3jA8S5isVy" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <span id="morning">Morning: 6am to 9am</span>
      <iframe title="morning" src="https://open.spotify.com/embed/playlist/5H9eS9VuerMbl66utlc4ok" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <span id="forenoon">Forenoon: 9am to 12pm</span>
      <iframe title="forenoon" src="https://open.spotify.com/embed/playlist/0vAO3i2PVvRG9S31gcenxC" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <span id="afternoon">Afternoon: 12pm to 3pm</span>
      <iframe title="afternoon" src="https://open.spotify.com/embed/playlist/56yTG7BTH4JjHASV4JGmnl" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <span id="evening">Evening: 3pm to 6pm</span>
      <iframe title="evening" src="https://open.spotify.com/embed/playlist/0vfjqbbpV97lvPxCkEK3u7" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <span id="lateevening">Late Evening: 6pm to 9pm</span>
      <iframe title="lateevening" src="https://open.spotify.com/embed/playlist/2J42xrLTNM2pmCGKmaigd3" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <span id="night">Night: 9pm to 12am</span>
      <iframe title="night" src="https://open.spotify.com/embed/playlist/5RZ1rK5oZ6LtKwfvH8bvhR" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <span id="latenight">Late Night: 12am to 3am</span>
      <iframe title="latenight" src="https://open.spotify.com/embed/playlist/3a8Cfn9sAaVKuA0v3YZ4Mi" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
    );
  }
}

export default App;
