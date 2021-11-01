import { Fragment } from "react";
import Slider from "react-slick";

const customStyle = {
  top: '80vh',
  width: 460,
  position: 'fixed',
  backgroundColor: '#08100885',
  height: 150
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000
}

const ContentDetail = () => {
  return (
    <div style={customStyle}>
      <Slider {...settings}>
        <div>
          <h3>Nur Ikhwan Annafis</h3>
          <p>Frontend Developer</p>
        </div>
        <div>
          <h3>Skills</h3>
          <p>• ReactJS/NextJS + Redux • Javascript • html5 • css • unity3D •</p>
        </div>
        <div>
          <h3>Interests</h3>
          <p>• Dota 2 • Travelling •</p>
        </div>
        <div>
          <h3>Contact Detail</h3>
          <p className="m-0">+62 81517569623</p>
          <p>nur.ikhwan.annafis@gmail.com</p>
        </div>
      </Slider>
    </div>
  )
}

export default ContentDetail;