import React, { Component } from 'react';
import configureStore from '../config/configureStore';
import { Provider } from 'react-redux';
import ScrollToTop from '../utils/ScrollToTop';
import './assets/base.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faTwitter, faVuejs, faReact, faHtml5, faGoogle, faInstagram, faPinterest, faYoutube, faDiscord, faSlack, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons';
import { far, faSquare, faLifeRing, faCheckCircle, faTimesCircle, faDotCircle, faThumbsUp, faComments, faFolderOpen, faTrashAlt, faFileImage, faFileArchive, faCommentDots, faFolder, faKeyboard, faCalendarAlt, faEnvelope, faAddressCard, faMap, faObjectGroup, faImages, faUser, faLightbulb, faGem, faClock, faUserCircle, faQuestionCircle, faBuilding, faBell, faFileExcel, faFileAudio, faFileVideo, faFileWord, faFilePdf, faFileCode, faFileAlt, faEye, faChartBar } from '@fortawesome/free-regular-svg-icons';
import { fas, faExclamation, faAngleDoubleRight, faAngleDoubleLeft, faCheck, faSmile, faHeart, faBatteryEmpty, faBatteryFull, faChevronRight, faSitemap, faPrint, faMapMarkedAlt, faTachometerAlt, faAlignCenter, faExternalLinkAlt, faShareSquare, faInfoCircle, faSync, faQuoteRight, faStarHalfAlt, faShapes, faCarBattery, faTable, faCubes, faPager, faCameraRetro, faBomb, faNetworkWired, faBusAlt, faBirthdayCake, faEyeDropper, faUnlockAlt, faDownload, faAward, faPlayCircle, faReply, faUpload, faBars, faEllipsisV, faSave, faSlidersH, faCaretRight, faChevronUp, faPlus, faLemon, faChevronLeft, faTimes, faChevronDown, faFilm, faSearch, faEllipsisH, faCog, faArrowsAltH, faPlusCircle, faAngleRight, faAngleUp, faAngleLeft, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faArrowLeft, faStar, faSignOutAlt, faLink } from '@fortawesome/free-solid-svg-icons';
library.add( far, faSquare, faLifeRing, faCheckCircle, faTimesCircle, faDotCircle, faThumbsUp, faComments, faFolderOpen, faTrashAlt, faFileImage, faFileArchive, faCommentDots, faFolder, faKeyboard, faCalendarAlt, faEnvelope, faAddressCard, faMap, faObjectGroup, faImages, faUser, faLightbulb, faGem, faClock, faUserCircle, faQuestionCircle, faBuilding, faBell, faFileExcel, faFileAudio, faFileVideo, faFileWord, faFilePdf, faFileCode, faFileAlt, faEye, faChartBar );
library.add( fab, faFacebook, faTwitter, faVuejs, faReact, faHtml5, faGoogle, faInstagram, faPinterest, faYoutube, faDiscord, faSlack, faDribbble, faGithub );
library.add( fas, faExclamation, faAngleDoubleRight, faAngleDoubleLeft, faCheck, faSmile, faHeart, faBatteryEmpty, faBatteryFull, faChevronRight, faSitemap, faPrint, faMapMarkedAlt, faTachometerAlt, faAlignCenter, faExternalLinkAlt, faShareSquare, faInfoCircle, faSync, faQuoteRight, faStarHalfAlt, faShapes, faCarBattery, faTable, faCubes, faPager, faCameraRetro, faBomb, faNetworkWired, faBusAlt, faBirthdayCake, faEyeDropper, faUnlockAlt, faDownload, faAward, faPlayCircle, faReply, faUpload, faBars, faEllipsisV, faSave, faSlidersH, faCaretRight, faChevronUp, faPlus, faLemon, faChevronLeft, faTimes, faChevronDown, faFilm, faSearch, faEllipsisH, faCog, faArrowsAltH, faPlusCircle, faAngleRight, faAngleUp, faAngleLeft, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faArrowLeft, faStar, faSignOutAlt, faLink );
const store = configureStore();
function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ScrollToTop>
        <Component {...pageProps} />
      </ScrollToTop>
    </Provider>
  );
}

export default App;