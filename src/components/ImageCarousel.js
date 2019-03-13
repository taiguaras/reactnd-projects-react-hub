import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container } from 'semantic-ui-react';

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={120}
        naturalSlideHeight={40}
        totalSlides={3}
      >  
      <Container>
            <Slider>
            <Slide index={0}>
                <Image src="http://wowslider.com/sliders/demo-11/data/images/krasivyi_korabl_-1024x768.jpg" />
            </Slide>
            <Slide index={1}>
            <Image src="http://wowslider.com/sliders/demo-11/data/images/krasivyi_korabl_-1024x768.jpg" />
            </Slide>
            <Slide index={2}>
            <Image src="http://wowslider.com/sliders/demo-11/data/images/krasivyi_korabl_-1024x768.jpg" />
            </Slide>
            </Slider>
        </Container>     
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}