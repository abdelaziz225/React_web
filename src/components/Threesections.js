// Threesections.js
import React from 'react';
import '../Css/Threesections.css';

class Threesections extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeButton: null
    };
  }
  showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('div[id^="section"]').forEach(section => {
      section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
  }
  handleButtonClick(buttonId) {
    this.setState({
      activeButton: buttonId
    });
  }

  render() {
    const { activeButton } = this.state;
    return (
      <div className='Threesections' >
        <div   className='description'> <h1>My project</h1><p>my name is ahmed abdelaziz  i live in cairo</p> </div>
       <div className='buttons'  >
       <button id='btn1' className={activeButton === 'button1' ? 'active' : ''}  onClick={() => {this.handleButtonClick('button1');this.showSection('section1');}}>Section 1</button>
        <button className={activeButton === 'button2' ? 'active' : ''}                onClick={() => {this.handleButtonClick('button2');this.showSection('section2');}}>Section 2 </button>
        <button id='btn3' className={activeButton === 'button3' ? 'active' : ''}      onClick={() => {this.handleButtonClick('button3');this.showSection('section3');}}>Section 3</button>
       </div>
        <div id="section1">
          <h1 className=' sec'>Section 1</h1>
             <div  className=' prouducts'>
              <div className='div1'>
                <img  className='image'  src='https://media.licdn.com/dms/image/C560DAQH9DHDlH2Ei4g/learning-public-crop_288_512/0/1661965908511?e=2147483647&v=beta&t=U3qiiN88tArbWTlfOUqD09MJtiKQNOMP21fINx1lb-Q'  alt=''/>
              </div>
              <div className='div2'>
              <img  src='https://www.smartdatacollective.com/wp-content/uploads/2019/09/robotics-and-machine-learning-860x731.jpg.webp'  alt=''/>
              </div>
              <div className='div3'>
              <img   src='https://t3.ftcdn.net/jpg/03/70/02/42/360_F_370024269_Vdagu80v6RI6zwh6as7vai6FLeNwPnvl.jpg'  alt=''/>
              </div>
              <div className='div4'>
                <img   src='https://e7.pngegg.com/pngimages/247/432/png-clipart-algorithms-design-and-analysis-design-and-analysis-of-algorithms-divide-and-conquer-algorithm-algoritm-text-label-thumbnail.png'  alt=''/>
              </div>
              <div   className='div5'   >
              <img   src='https://thumbs.dreamstime.com/b/big-data-center-analyzes-data-science-background-presentation-big-data-center-analyzes-data-science-background-159196598.jpg' alt=''/>
              </div>
              <div   className='div6'     >
              <img   src='https://miro.medium.com/v2/resize:fit:600/0*7zMicw-FfThCbN35.png'  alt=''  />
              </div>
            </div>
        </div>
        <div id="section2">
          <h1 className=' sec' ></h1>
        </div>
        <div id="section3">
          <h1  className=' sec'>Section 3</h1>
          <p className='sec3'>There are many options, we hope that you will find what you wanted on our website</p>
        </div>
      </div>
    );
  }
}

export default Threesections;