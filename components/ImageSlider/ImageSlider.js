import React  from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ImageSlider extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentSlide: 0
        };
    }

    next = () => {
        this.setState(state => ({
            currentSlide: state.currentSlide + 1
        }));
    }

    prev = () => {
        this.setState(state => ({
            currentSlide: state.currentSlide - 1
        }));
    }

    updateCurrentSlide = (index) => {
        const { currentSlide } = this.state;

        if (currentSlide !== index) {
            this.setState({
                currentSlide: index
            });
        }
    }


    render() {

        const buttonStyle = {visibility: 'hidden', padding:0};
        const images = [
            '../static/img/beach-exotic-holiday-248797.jpg',
            '../static/img/bright-clouds-country-440731.jpg',
            '../static/img/daylight-environment-forest-459225.jpg'].map((image,index) => 
                <div key={index}>
                    <img src={`${image}`} style={{height: 300}}/>
                </div>
            )
        
        return (
            <div>
                
                <Carousel autoPlay 
                        selectedItem={this.state.currentSlide} 
                        onChange={this.updateCurrentSlide} 
                        showThumbs={false}
                        infiniteLoop={true}
                        useKeyboardArrows={true}>
                    {images}
                </Carousel>

                <button onClick={this.prev} style={buttonStyle}>Prev</button>
                <button onClick={this.next} style={buttonStyle}>Next</button>
            </div>
        );
    }
}

export default ImageSlider;