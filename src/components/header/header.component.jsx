import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
// connect is higher order component, let's us modify our component to have access to things related to redux
// HIO: function are just take components as arguments and then RETURN new souped up Component

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>

      <Link className='option' to='/contact'>
        CONTACT
      </Link>

      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

// first arg of connect is the function that allows us to access the state with the state being are reducer (root reducer)
// will return object with the name of property will be actual property passed in above ({currentUser}) and the value is the value
// Here the (state) is root reducer - top level ,, finally delete <Header -->currentUser={this.state.currentUser} />
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser, // extracted from root-reducer then user.reducer
});

export default connect(mapStateToProps)(Header);

// connect is higher order component that gets either one of these TWO functions:
// 1st is the mapStateToProps
// 2nd is will be cover next ...
