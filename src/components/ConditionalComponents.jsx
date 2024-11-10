import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export const ConditionalNavbar = () => {
  const location = useLocation();

  const showNavbar = !["/login", "/sign-up","/checkout"].includes(location.pathname);;

  return  showNavbar ? <Navbar /> : null;
};

export const ConditionalFooter = () => {
  const location = useLocation();

  const showFooter = !["/login", "/sign-up"].includes(location.pathname);

  return showFooter ? <Footer /> : null;
};
