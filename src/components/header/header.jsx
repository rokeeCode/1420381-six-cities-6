import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';

const Header = () => {
  const {authorizationStatus, userInfo} = useSelector((state) => state.USER);
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuthorized ? AppRoute.FAVORITES : AppRoute.LOGIN}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"/>
                  <span className="header__login">{isAuthorized ? userInfo.email : `Sign In`}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
