import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import styles from "./Header.module.sass";
import CONSTANTS from "../../constants";
import HeaderNav from "../HeaderNav/HeaderNav";
import {
  getUserAction,
  clearUserStore,
  headerRequest,
} from "../../actions/actionCreator";

class Header extends React.Component {
  componentDidMount() {
    if (!this.props.data) {
      this.props.getUser();
    }
  }

  logOut = () => {
    localStorage.clear();
    this.props.clearUserStore();
    this.props.history.replace("/login");
  };

  startContests = () => {
    this.props.history.push("/startContest");
  };

  renderLoginButtons = () => {
    if (this.props.data) {
      return (
        <>
          <div className={styles.userInfo}>
            <img
              src={
                this.props.data.avatar === "anon.png"
                  ? CONSTANTS.ANONYM_IMAGE_PATH
                  : `${CONSTANTS.publicURL}${this.props.data.avatar}`
              }
              alt="user"
            />
            <span>{`Hi, ${this.props.data.displayName}`}</span>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
              alt="menu"
            />
            <ul>
              <li>
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <span>View Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/account" style={{ textDecoration: "none" }}>
                  <span>My Account</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: "none" }}
                >
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: "none" }}
                >
                  <span>Affiliate Dashboard</span>
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }}>
                  <span onClick={this.logOut}>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`}
            className={styles.emailIcon}
            alt="email"
          />
        </>
      );
    }
    return (
      <>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div
            style={{ display: "flex", alignItems: "center", height: "40px" }}
          >
            <span className={styles.btn}>LOGIN</span>
          </div>
        </Link>
        <Link to="/registration" style={{ textDecoration: "none" }}>
          <div
            style={{ display: "flex", alignItems: "center", height: "40px" }}
          >
            <span className={styles.btn}>SIGN UP</span>
          </div>
        </Link>
      </>
    );
  };

  render() {
    if (this.props.isFetching) {
      return null;
    }
    return (
      <div className={styles.headerContainer}>
        <div className={styles.fixedHeader}>
          <span className={styles.info}>
            Squadhelp recognized as one of the Most Innovative Companies by Inc
            Magazine.
          </span>
          <a href="http://www.google.com">Read Announcement</a>
        </div>
        <div className={styles.loginSignnUpHeaders}>
          <div className={styles.numberContainer}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
            <a style={{ textDecoration: "none" }} href="tel:1-877-355-3585">
              (877)&nbsp;355-3585
            </a>
          </div>
          <div className={styles.userButtonsContainer}>
            {this.renderLoginButtons()}
          </div>
        </div>
        <div className={styles.navContainer}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
                className={styles.logo}
                alt="blue_logo"
              />
          </Link>
          <div className={styles.leftNav}>
            <HeaderNav/>
            {this.props.data && this.props.data.role !== CONSTANTS.CREATOR && (
              <div
                className={styles.startContestBtn}
                onClick={this.startContests}
              >
                START CONTEST
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
