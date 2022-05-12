import configureStore from '../config/configureStore';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from '../utils/ScrollToTop';
import '../assets/base.scss';
import MuiTheme from '../theme';
import { MinimalLayout } from '../layout-blueprints';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faTwitter, faVuejs, faReact, faHtml5, faGoogle, faInstagram, faPinterest, faYoutube, faDiscord, faSlack, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons';
import { far, faSquare, faLifeRing, faCheckCircle, faTimesCircle, faDotCircle, faThumbsUp, faComments, faFolderOpen, faTrashAlt, faFileImage, faFileArchive, faCommentDots, faFolder, faKeyboard, faCalendarAlt, faEnvelope, faAddressCard, faMap, faObjectGroup, faImages, faUser, faLightbulb, faGem, faClock, faUserCircle, faQuestionCircle, faBuilding, faBell, faFileExcel, faFileAudio, faFileVideo, faFileWord, faFilePdf, faFileCode, faFileAlt, faEye, faChartBar } from '@fortawesome/free-regular-svg-icons';
import { fas, faExclamation, faAngleDoubleRight, faAngleDoubleLeft, faCheck, faSmile, faHeart, faBatteryEmpty, faBatteryFull, faChevronRight, faSitemap, faPrint, faMapMarkedAlt, faTachometerAlt, faAlignCenter, faExternalLinkAlt, faShareSquare, faInfoCircle, faSync, faQuoteRight, faStarHalfAlt, faShapes, faCarBattery, faTable, faCubes, faPager, faCameraRetro, faBomb, faNetworkWired, faBusAlt, faBirthdayCake, faEyeDropper, faUnlockAlt, faDownload, faAward, faPlayCircle, faReply, faUpload, faBars, faEllipsisV, faSave, faSlidersH, faCaretRight, faChevronUp, faPlus, faLemon, faChevronLeft, faTimes, faChevronDown, faFilm, faSearch, faEllipsisH, faCog, faArrowsAltH, faPlusCircle, faAngleRight, faAngleUp, faAngleLeft, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faArrowLeft, faStar, faSignOutAlt, faLink } from '@fortawesome/free-solid-svg-icons';
library.add( far, faSquare, faLifeRing, faCheckCircle, faTimesCircle, faDotCircle, faThumbsUp, faComments, faFolderOpen, faTrashAlt, faFileImage, faFileArchive, faCommentDots, faFolder, faKeyboard, faCalendarAlt, faEnvelope, faAddressCard, faMap, faObjectGroup, faImages, faUser, faLightbulb, faGem, faClock, faUserCircle, faQuestionCircle, faBuilding, faBell, faFileExcel, faFileAudio, faFileVideo, faFileWord, faFilePdf, faFileCode, faFileAlt, faEye, faChartBar );
library.add( fab, faFacebook, faTwitter, faVuejs, faReact, faHtml5, faGoogle, faInstagram, faPinterest, faYoutube, faDiscord, faSlack, faDribbble, faGithub );
library.add( fas, faExclamation, faAngleDoubleRight, faAngleDoubleLeft, faCheck, faSmile, faHeart, faBatteryEmpty, faBatteryFull, faChevronRight, faSitemap, faPrint, faMapMarkedAlt, faTachometerAlt, faAlignCenter, faExternalLinkAlt, faShareSquare, faInfoCircle, faSync, faQuoteRight, faStarHalfAlt, faShapes, faCarBattery, faTable, faCubes, faPager, faCameraRetro, faBomb, faNetworkWired, faBusAlt, faBirthdayCake, faEyeDropper, faUnlockAlt, faDownload, faAward, faPlayCircle, faReply, faUpload, faBars, faEllipsisV, faSave, faSlidersH, faCaretRight, faChevronUp, faPlus, faLemon, faChevronLeft, faTimes, faChevronDown, faFilm, faSearch, faEllipsisH, faCog, faArrowsAltH, faPlusCircle, faAngleRight, faAngleUp, faAngleLeft, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faArrowLeft, faStar, faSignOutAlt, faLink );
const store = configureStore();
function App({ Component, pageProps }) {
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.3
  };

  return (
    <Provider store={store}>
      <ScrollToTop>
        <ThemeProvider theme={MuiTheme}>
          <AnimatePresence>
            <MinimalLayout>
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}>
                <Component {...pageProps} />
              </motion.div>
            </MinimalLayout>
          </AnimatePresence>
        </ThemeProvider>
      </ScrollToTop>
    </Provider>
  );
}

export default App;