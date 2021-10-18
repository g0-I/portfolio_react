import React from 'react'
import posed from 'react-pose'
import Animation from './Animation'
import BorderGreen from './Border'
import './Home.css';

const props = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}
const Box = posed.div(props)

class Home extends React.Component {
  state = { isVisible: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }
  render(){
    return(
      <div  className="wrapper">
        <BorderGreen display="true"/>
        <div className="home__main">
          <Animation className="animation" />
          <div className="home__name">
            <Box className="name" pose={this.state.isVisible ? 'visible' : 'hidden'} >Go Itayama</Box>
            <div className="home__description">
              I am a Test Automation Engineer based in Fukuoka.
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Home;
