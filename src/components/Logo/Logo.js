import logo from 'assets/images/smartKita/smartKita.svg'
import { Link } from '../../../node_modules/react-router-dom/dist/index';
// material-ui

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     *
     */
    <>
      <Link to ='/overview/default'>
        <img src={logo} alt="smartKita" />

      </Link>


    </>
  );
};

export default Logo;
