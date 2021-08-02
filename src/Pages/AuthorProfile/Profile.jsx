import React, { useEffect } from "react";
import "./Profile.css";
import Navbar from '../../Components/NavBar/CustomNavbar'
import Footer from '../../Components/Footer/Footer'
import pic from '../../assets/bg.png'
import { Image, Row, Col } from "react-bootstrap";
import ProfileSidebar from '../../Components/ProfileSidebar/ProfileSidebar'
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getProfileProducts } from "../../store/actions/otherActions";
// import { connect } from "react-redux";

export default function Profile() {
  const dispatch = useDispatch();
  const authedUser = useSelector(state => state.authedUser)

  useEffect(() => {
    dispatch(getProfileProducts(authedUser.data._id));
  }, [])

  return (
    <React.Fragment>
      <Navbar />
      <Image src={pic} className="pic-style" />


      <ProfileSidebar />


      <Footer />
    </React.Fragment>
  );
}
// function mapStateToProps({ authedUser }) {
//   return {
//     authedUser,
//   };
// }

// export default connect(mapStateToProps)(Profile);

