import { Fragment } from "react";

import profil from '../../../assets/images/Profile.jpg';

const ImageProfile = (props) => {
  return (
    <Fragment>
      <img className="img-profile" src={profil} alt="" />
    </Fragment>
  )
}

export default ImageProfile;