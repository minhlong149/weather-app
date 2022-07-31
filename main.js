/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  color: #fff;\n  background-color: #100E1D;\n}\n\n.sidebar {\n  background-color: #1E213A;\n}\n\nbody,\n* {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 30vw;\n}\n.sidebar__location {\n  display: flex;\n  justify-content: space-between;\n  padding: 2em;\n}\n.sidebar__today {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.sidebar__info {\n  color: #88869d;\n  font-size: 18px;\n  text-align: center;\n  padding: 2em;\n}\n\n.location__btn {\n  border: none;\n  color: #fff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n.location__btn:hover {\n  cursor: pointer;\n}\n.location__btn--search {\n  width: 161px;\n  height: 40px;\n  background: #6e707a;\n}\n.location__btn--crosshair {\n  min-width: 40px;\n  min-height: 40px;\n  line-height: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n}\n\n.today__icon {\n  text-align: center;\n  width: 100%;\n}\n.today__icon img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.today__temp {\n  font-size: 144px;\n}\n.today__cond {\n  font-size: 36px;\n  color: #a09fb1;\n}\n.today .temp__unit {\n  font-size: 48px;\n  color: #a09fb1;\n}\n\n.temp__unit::before {\n  content: \"°\";\n}\n\n.info__date::before {\n  content: \"Today • \";\n}\n.info__name {\n  display: block;\n  margin-top: 1em;\n}\n.info__name::before {\n  content: \"location_on \";\n  font-family: \"Material Icons\";\n  line-height: 100%;\n}\n\n.search {\n  padding: 2em;\n}\n.search__cancel {\n  text-align: right;\n}\n.search__cancel:hover {\n  cursor: pointer;\n}\n.search__input {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.5em;\n  margin: 2em 0;\n}\n.search__input .input__city {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  gap: 0.5em;\n  padding: 0 1em;\n  outline: 1px solid #ffffff;\n}\n.search__input .input__city input {\n  background: transparent;\n  width: 100%;\n}\n.search__input .input__submit button {\n  padding: 1em;\n  background-color: #3c47e9;\n}\n.search__input input,\n.search__input button {\n  border: none;\n  outline: none;\n  margin: 0;\n  color: white;\n}\n.search__result {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n.search__result > * {\n  padding: 1em;\n}\n.search__result > *:hover {\n  outline: 1px solid white;\n}\n\n.sidebar--search {\n  position: absolute;\n  height: 100vh;\n  width: 24vw;\n}\n\n.search--hidden {\n  display: none;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 1em;\n  width: 70vw;\n  padding: 5% 10%;\n}\n.main__units {\n  align-self: end;\n}\n.main__forecast {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1em;\n}\n\n.units__btn {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  width: 40px;\n  height: 40px;\n  margin-left: 0.5em;\n  border: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n}\n.units__btn::before {\n  content: \"°\";\n}\n.units__btn--active {\n  background: #e7e7eb;\n  color: #110e3c;\n}\n.units__btn:hover {\n  cursor: pointer;\n}\n\n.forecast__day {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 120px;\n  height: 177px;\n  background: #1e213a;\n}\n\n.day__date {\n  padding-top: 1em;\n}\n.day__icon {\n  max-width: 80px;\n  max-height: 80px;\n}\n.day__icon img {\n  max-height: 100%;\n  max-width: 100%;\n}\n.day__temp {\n  align-self: stretch;\n  padding-bottom: 1em;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-evenly;\n}\n.day__temp .temp--min {\n  color: #a09fb1;\n}\n\n.content__title {\n  font-weight: 700;\n  font-size: 24px;\n  color: #e7e7eb;\n  padding: 0.4em 0 0.8em;\n}\n.content__highlight {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1em;\n}\n\n.highlight {\n  width: 48.7%;\n  text-align: center;\n  background: #1e213a;\n  padding: 1.5em 0 1.5em;\n}\n.highlight__value {\n  font-weight: 700;\n  font-size: 64px;\n  padding: 1rem 0;\n}\n.highlight__value::after {\n  font-weight: 500;\n  font-size: 36px;\n}\n.highlight__value--wind::after {\n  content: \"mps\";\n}\n.highlight__value--humid::after {\n  content: \"%\";\n}\n.highlight__value--vis::after {\n  content: \"m\";\n}\n.highlight__value--air::after {\n  content: \"mb\";\n}\n\nprogress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  width: 80%;\n  height: 0.5em;\n}\nprogress::-webkit-progress-bar {\n  background: #e7e7eb;\n  border-radius: 1em;\n}\nprogress[value]::-webkit-progress-value {\n  background: #ffec65;\n  border-radius: 1em;\n}\n\nfooter {\n  font-weight: 500;\n  font-size: 14px;\n  text-align: center;\n}\nfooter > a {\n  color: inherit;\n  text-decoration: none;\n}\nfooter > a:first-of-type {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n@media (max-width: 1100px) {\n  body {\n    flex-direction: column;\n    align-items: center;\n  }\n  .sidebar {\n    width: 100vw;\n  }\n  .highlight {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/_reset.scss","webpack://./src/scss/_color.scss","webpack://./src/scss/_typo.scss","webpack://./src/scss/_sidebar.scss","webpack://./src/scss/_main.scss","webpack://./src/scss/_mobile.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700\");\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  color: #fff;\n  background-color: #100E1D;\n}\n\n.sidebar {\n  background-color: #1E213A;\n}\n\nbody,\n* {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 30vw;\n}\n.sidebar__location {\n  display: flex;\n  justify-content: space-between;\n  padding: 2em;\n}\n.sidebar__today {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.sidebar__info {\n  color: #88869d;\n  font-size: 18px;\n  text-align: center;\n  padding: 2em;\n}\n\n.location__btn {\n  border: none;\n  color: #fff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n.location__btn:hover {\n  cursor: pointer;\n}\n.location__btn--search {\n  width: 161px;\n  height: 40px;\n  background: #6e707a;\n}\n.location__btn--crosshair {\n  min-width: 40px;\n  min-height: 40px;\n  line-height: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n}\n\n.today__icon {\n  text-align: center;\n  width: 100%;\n}\n.today__icon img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.today__temp {\n  font-size: 144px;\n}\n.today__cond {\n  font-size: 36px;\n  color: #a09fb1;\n}\n.today .temp__unit {\n  font-size: 48px;\n  color: #a09fb1;\n}\n\n.temp__unit::before {\n  content: \"°\";\n}\n\n.info__date::before {\n  content: \"Today • \";\n}\n.info__name {\n  display: block;\n  margin-top: 1em;\n}\n.info__name::before {\n  content: \"location_on \";\n  font-family: \"Material Icons\";\n  line-height: 100%;\n}\n\n.search {\n  padding: 2em;\n}\n.search__cancel {\n  text-align: right;\n}\n.search__cancel:hover {\n  cursor: pointer;\n}\n.search__input {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.5em;\n  margin: 2em 0;\n}\n.search__input .input__city {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  gap: 0.5em;\n  padding: 0 1em;\n  outline: 1px solid #ffffff;\n}\n.search__input .input__city input {\n  background: transparent;\n  width: 100%;\n}\n.search__input .input__submit button {\n  padding: 1em;\n  background-color: #3c47e9;\n}\n.search__input input,\n.search__input button {\n  border: none;\n  outline: none;\n  margin: 0;\n  color: white;\n}\n.search__result {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n.search__result > * {\n  padding: 1em;\n}\n.search__result > *:hover {\n  outline: 1px solid white;\n}\n\n.sidebar--search {\n  position: absolute;\n  height: 100vh;\n  width: 24vw;\n}\n\n.search--hidden {\n  display: none;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 1em;\n  width: 70vw;\n  padding: 5% 10%;\n}\n.main__units {\n  align-self: end;\n}\n.main__forecast {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1em;\n}\n\n.units__btn {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  width: 40px;\n  height: 40px;\n  margin-left: 0.5em;\n  border: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n}\n.units__btn::before {\n  content: \"°\";\n}\n.units__btn--active {\n  background: #e7e7eb;\n  color: #110e3c;\n}\n.units__btn:hover {\n  cursor: pointer;\n}\n\n.forecast__day {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 120px;\n  height: 177px;\n  background: #1e213a;\n}\n\n.day__date {\n  padding-top: 1em;\n}\n.day__icon {\n  max-width: 80px;\n  max-height: 80px;\n}\n.day__icon img {\n  max-height: 100%;\n  max-width: 100%;\n}\n.day__temp {\n  align-self: stretch;\n  padding-bottom: 1em;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-evenly;\n}\n.day__temp .temp--min {\n  color: #a09fb1;\n}\n\n.content__title {\n  font-weight: 700;\n  font-size: 24px;\n  color: #e7e7eb;\n  padding: 0.4em 0 0.8em;\n}\n.content__highlight {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1em;\n}\n\n.highlight {\n  width: 48.7%;\n  text-align: center;\n  background: #1e213a;\n  padding: 1.5em 0 1.5em;\n}\n.highlight__value {\n  font-weight: 700;\n  font-size: 64px;\n  padding: 1rem 0;\n}\n.highlight__value::after {\n  font-weight: 500;\n  font-size: 36px;\n}\n.highlight__value--wind::after {\n  content: \"mps\";\n}\n.highlight__value--humid::after {\n  content: \"%\";\n}\n.highlight__value--vis::after {\n  content: \"m\";\n}\n.highlight__value--air::after {\n  content: \"mb\";\n}\n\nprogress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  width: 80%;\n  height: 0.5em;\n}\nprogress::-webkit-progress-bar {\n  background: #e7e7eb;\n  border-radius: 1em;\n}\nprogress[value]::-webkit-progress-value {\n  background: #ffec65;\n  border-radius: 1em;\n}\n\nfooter {\n  font-weight: 500;\n  font-size: 14px;\n  text-align: center;\n}\nfooter > a {\n  color: inherit;\n  text-decoration: none;\n}\nfooter > a:first-of-type {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n@media (max-width: 1100px) {\n  body {\n    flex-direction: column;\n    align-items: center;\n  }\n  .sidebar {\n    width: 100vw;\n  }\n  .highlight {\n    width: 100%;\n  }\n}","/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}","body {\r\n  color: #fff;\r\n  background-color: #100E1D;\r\n}\r\n\r\n.sidebar {\r\n  background-color: #1E213A;\r\n}","@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700\");\r\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\r\n\r\nbody,\r\n* {\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n}\r\n",".sidebar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n\r\n  width: 30vw;\r\n\r\n  &__location {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 2em;\r\n  }\r\n\r\n  &__today {\r\n    flex-grow: 1;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n\r\n    align-items: center;\r\n  }\r\n\r\n  &__info {\r\n    color: #88869d;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n.location {\r\n  &__btn {\r\n    border: none;\r\n    color: #fff;\r\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n\r\n    &--search {\r\n      width: 161px;\r\n      height: 40px;\r\n\r\n      background: #6e707a;\r\n    }\r\n\r\n    &--crosshair {\r\n      min-width: 40px;\r\n      min-height: 40px;\r\n      line-height: 100%;\r\n\r\n      background: rgba(255, 255, 255, 0.2);\r\n      border-radius: 50%;\r\n    }\r\n  }\r\n}\r\n\r\n.today {\r\n  &__icon {\r\n    text-align: center;\r\n    width: 100%;\r\n    // z-index: 0;\r\n    // position: relative;\r\n\r\n    // &::before {\r\n    //   content: \"\";\r\n    //   background: no-repeat center url(\"../../src/asset/Cloud-background.png\");\r\n    //   background-size: contain;\r\n\r\n    //   position: absolute;\r\n    //   left: 0;\r\n    //   width: 100%;\r\n    //   height: 100%;\r\n    //   opacity: 0.8;\r\n    //   z-index: -1;\r\n    // }\r\n\r\n    img {\r\n      max-width: 100%;\r\n      max-height: 100%;\r\n    }\r\n  }\r\n\r\n  &__temp {\r\n    font-size: 144px;\r\n  }\r\n\r\n  &__cond {\r\n    font-size: 36px;\r\n    color: #a09fb1;\r\n  }\r\n\r\n  .temp {\r\n    &__unit {\r\n      font-size: 48px;\r\n      color: #a09fb1;\r\n    }\r\n  }\r\n}\r\n\r\n.temp {\r\n  &__unit {\r\n    &::before {\r\n      content: \"°\";\r\n    }\r\n  }\r\n}\r\n\r\n.info {\r\n  &__date {\r\n    &::before {\r\n      content: \"Today • \";\r\n    }\r\n  }\r\n\r\n  &__name {\r\n    display: block;\r\n    margin-top: 1em;\r\n\r\n    &::before {\r\n      content: \"location_on \";\r\n      font-family: \"Material Icons\";\r\n      line-height: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n.search {\r\n  padding: 2em;\r\n\r\n  &__cancel {\r\n    text-align: right;\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  &__input {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 1.5em;\r\n\r\n    margin: 2em 0;\r\n\r\n    .input__city {\r\n      display: flex;\r\n      align-items: center;\r\n      flex-grow: 1;\r\n      gap: 0.5em;\r\n\r\n      padding: 0 1em;\r\n      outline: 1px solid #ffffff;\r\n\r\n      input {\r\n        background: transparent;\r\n        width: 100%;\r\n      }\r\n    }\r\n\r\n    .input__submit {\r\n      button {\r\n        padding: 1em;\r\n        background-color: #3c47e9;\r\n      }\r\n    }\r\n\r\n    input,\r\n    button {\r\n      border: none;\r\n      outline: none;\r\n      margin: 0;\r\n      color: white;\r\n    }\r\n  }\r\n\r\n  &__result {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1em;\r\n\r\n    > * {\r\n      padding: 1em;\r\n\r\n      &:hover {\r\n        outline: 1px solid white;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.sidebar--search {\r\n  position: absolute;\r\n  height: 100vh;\r\n  width: 24vw;\r\n}\r\n\r\n.search--hidden {\r\n  display: none;\r\n}\r\n","body {\r\n  height: 100vh;\r\n  display: flex;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  gap: 1em;\r\n\r\n  width: 70vw;\r\n  padding: 5% 10%;\r\n\r\n  &__units {\r\n    align-self: end;\r\n  }\r\n\r\n  &__forecast {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 1em;\r\n    // align-self: space-between;\r\n  }\r\n}\r\n\r\n.units {\r\n  &__btn {\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-left: 0.5em;\r\n\r\n    border: none;\r\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n    background: rgba(255, 255, 255, 0.2);\r\n    border-radius: 50%;\r\n\r\n    &::before {\r\n      content: \"°\";\r\n    }\r\n\r\n    &--active {\r\n      background: #e7e7eb;\r\n      color: #110e3c;\r\n    }\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n\r\n.forecast {\r\n  &__day {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    width: 120px;\r\n    height: 177px;\r\n\r\n    background: #1e213a;\r\n  }\r\n}\r\n\r\n.day {\r\n  &__date {\r\n    padding-top: 1em;\r\n  }\r\n\r\n  &__icon {\r\n    max-width: 80px;\r\n    max-height: 80px;\r\n\r\n    // background-color: #fff;\r\n\r\n    img {\r\n      max-height: 100%;\r\n      max-width: 100%;\r\n      // object-fit: contain;\r\n    }\r\n    // padding: 1em;\r\n  }\r\n\r\n  &__temp {\r\n    align-self: stretch;\r\n    padding-bottom: 1em;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    justify-content: space-evenly;\r\n\r\n    .temp--min {\r\n      color: #a09fb1;\r\n    }\r\n  }\r\n}\r\n\r\n.content {\r\n  &__title {\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    color: #e7e7eb;\r\n    padding: 0.4em 0 0.8em;\r\n  }\r\n\r\n  &__highlight {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 1em;\r\n  }\r\n}\r\n\r\n.highlight {\r\n  width: 48.7%;\r\n  text-align: center;\r\n  background: #1e213a;\r\n\r\n  padding: 1.5em 0 1.5em;\r\n\r\n  &__value {\r\n    font-weight: 700;\r\n    font-size: 64px;\r\n    padding: 1rem 0;\r\n\r\n    &::after {\r\n      font-weight: 500;\r\n      font-size: 36px;\r\n    }\r\n\r\n    &--wind::after {\r\n      content: \"mps\";\r\n    }\r\n\r\n    &--humid::after {\r\n      content: \"%\";\r\n    }\r\n\r\n    &--vis::after {\r\n      content: \"m\";\r\n    }\r\n\r\n    &--air::after {\r\n      content: \"mb\";\r\n    }\r\n  }\r\n}\r\n\r\nprogress {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 80%;\r\n  height: 0.5em;\r\n\r\n  &::-webkit-progress-bar {\r\n    background: #e7e7eb;\r\n    border-radius: 1em;\r\n  }\r\n\r\n  &[value]::-webkit-progress-value {\r\n    background: #ffec65;\r\n    border-radius: 1em;\r\n  }\r\n}\r\n\r\nfooter {\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  text-align: center;\r\n\r\n  > a {\r\n    color: inherit;\r\n    text-decoration: none;\r\n\r\n    &:first-of-type {\r\n      text-decoration: underline;\r\n      font-weight: bold;\r\n    }\r\n  }\r\n}\r\n","@media (max-width: 1100px) {\r\n  body {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .sidebar {\r\n    width: 100vw;\r\n  }\r\n\r\n  .highlight {\r\n    width: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ts/data.ts":
/*!************************!*\
  !*** ./src/ts/data.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateWeather": () => (/* binding */ updateWeather)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ts/ui.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

function getWeather(cityName, useMetric) {
    return __awaiter(this, void 0, void 0, function () {
        var weatherUrl, weatherResponse, weatherData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(cityName, "&appid=").concat("b1e9a81c0c54b200746a538873670a12", "&units=").concat(useMetric ? "metric" : "imperial");
                    return [4 /*yield*/, fetch(weatherUrl, { mode: "cors" })];
                case 1:
                    weatherResponse = _a.sent();
                    return [4 /*yield*/, weatherResponse.json()];
                case 2:
                    weatherData = _a.sent();
                    return [2 /*return*/, weatherData];
            }
        });
    });
}
function getForecast(cityName, useMetric) {
    return __awaiter(this, void 0, void 0, function () {
        var forecastUrl, forecastResponse, forecastData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=".concat(cityName, "&appid=").concat("b1e9a81c0c54b200746a538873670a12", "&units=").concat(useMetric ? "metric" : "imperial");
                    return [4 /*yield*/, fetch(forecastUrl, { mode: "cors" })];
                case 1:
                    forecastResponse = _a.sent();
                    return [4 /*yield*/, forecastResponse.json()];
                case 2:
                    forecastData = _a.sent();
                    return [2 /*return*/, forecastData];
            }
        });
    });
}
function setDate(date) {
    return date.toDateString().slice(0, -5).replace(" ", ", ");
}
function updateWeather(cityName, useMetric) {
    if (useMetric === void 0) { useMetric = true; }
    return __awaiter(this, void 0, void 0, function () {
        var weatherData, currentWeather, forecastData, currentForecast;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getWeather(cityName, useMetric)];
                case 1:
                    weatherData = _a.sent();
                    currentWeather = {
                        name: weatherData.name,
                        dateTime: setDate(new Date(weatherData.dt * 1000)),
                        temp: Math.round(weatherData.main.temp),
                        condition: weatherData.weather[0].main,
                        icon: weatherData.weather[0].icon,
                        wind: {
                            speed: weatherData.wind.speed,
                            deg: weatherData.wind.deg,
                        },
                        humidity: weatherData.main.humidity,
                        visibility: weatherData.visibility,
                        pressure: weatherData.main.pressure,
                    };
                    updateWeatherUI(currentWeather);
                    return [4 /*yield*/, getForecast(cityName, useMetric)];
                case 2:
                    forecastData = _a.sent();
                    currentForecast = forecastData.list
                        .filter(function (list, index) { return index % 8 === 5; })
                        .map(function (list) { return ({
                        dateTime: setDate(new Date(list.dt * 1000)),
                        icon: list.weather[0].icon,
                        temp_min: Math.round(list.main.temp_min),
                        temp_max: Math.round(list.main.temp_max),
                    }); });
                    updateForecastUI(currentForecast);
                    return [2 /*return*/];
            }
        });
    });
}
function updateWeatherUI(currentWeather) {
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateCityName)(currentWeather.name);
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateDate)(currentWeather.dateTime);
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateTemperature)(currentWeather.temp.toString());
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateCondition)(currentWeather.condition);
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateIcon)(currentWeather.icon);
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateWindStatus)(currentWeather.wind.speed);
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateWindDegree)(currentWeather.wind.deg);
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateHumidity)(currentWeather.humidity);
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateVisibility)(currentWeather.visibility);
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updatePressure)(currentWeather.pressure);
}
function updateForecastUI(currentForecast) {
    var forecastDays = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.getForecastDays)();
    forecastDays.forEach(function (forecastDay, index) {
        (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateForecastDate)(forecastDay, currentForecast[index].dateTime);
        (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateMinTemperature)(forecastDay, currentForecast[index].temp_min);
        (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateMaxTemperature)(forecastDay, currentForecast[index].temp_max);
        (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateForecastIcon)(forecastDay, currentForecast[index].icon);
    });
}



/***/ }),

/***/ "./src/ts/ui.ts":
/*!**********************!*\
  !*** ./src/ts/ui.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getForecastDays": () => (/* binding */ getForecastDays),
/* harmony export */   "updateCityName": () => (/* binding */ updateCityName),
/* harmony export */   "updateCondition": () => (/* binding */ updateCondition),
/* harmony export */   "updateDate": () => (/* binding */ updateDate),
/* harmony export */   "updateForecastDate": () => (/* binding */ updateForecastDate),
/* harmony export */   "updateForecastIcon": () => (/* binding */ updateForecastIcon),
/* harmony export */   "updateHumidity": () => (/* binding */ updateHumidity),
/* harmony export */   "updateIcon": () => (/* binding */ updateIcon),
/* harmony export */   "updateMaxTemperature": () => (/* binding */ updateMaxTemperature),
/* harmony export */   "updateMinTemperature": () => (/* binding */ updateMinTemperature),
/* harmony export */   "updatePressure": () => (/* binding */ updatePressure),
/* harmony export */   "updateTemperature": () => (/* binding */ updateTemperature),
/* harmony export */   "updateVisibility": () => (/* binding */ updateVisibility),
/* harmony export */   "updateWindDegree": () => (/* binding */ updateWindDegree),
/* harmony export */   "updateWindStatus": () => (/* binding */ updateWindStatus)
/* harmony export */ });
function updateCityName(cityName) {
    var _cityName = document.querySelector(".info__name");
    _cityName.innerText = cityName;
}
function updateDate(dateTime) {
    var _dateTime = document.querySelector(".info__date");
    _dateTime.innerText = dateTime;
}
function updateTemperature(temperature) {
    var _temperature = document.querySelector(".temp__value");
    _temperature.innerText = temperature;
}
function updateCondition(condition) {
    var _condition = document.querySelector(".today__cond");
    _condition.innerText = condition;
}
function updateIcon(icon) {
    var _icon = document.querySelector(".today__icon--img");
    _icon.src = "http://openweathermap.org/img/wn/".concat(icon, "@4x.png");
}
function updateWindStatus(windSpeed) {
    var _windSpeed = document.querySelector(".highlight__value--wind");
    _windSpeed.innerText = windSpeed;
}
function updateWindDegree(windDegree) {
    var cardinalPoint = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
    ];
    var direction = Math.round(windDegree / (360 / cardinalPoint.length));
    var _windDegree = document.querySelector(".dir__name");
    _windDegree.innerText = cardinalPoint[direction % cardinalPoint.length];
    var dirIcon = document.querySelector(".dir__value");
    dirIcon.style.transform = "rotate(".concat(windDegree, "deg)");
}
function updateHumidity(humidity) {
    var _humidity = document.querySelector(".highlight__value--humid");
    _humidity.innerText = humidity;
    var progressBar = document.querySelector(".highlight--humid__bar");
    progressBar.setAttribute("value", humidity);
}
function updateVisibility(visibility) {
    var _visibility = document.querySelector(".highlight__value--vis");
    _visibility.innerText = visibility;
}
function updatePressure(pressure) {
    var _pressure = document.querySelector(".highlight__value--air");
    _pressure.innerText = pressure;
}
function getForecastDays() {
    var forecastDays = document.querySelectorAll(".forecast__day");
    return forecastDays;
}
function updateForecastDate(forecastBlock, dateTime) {
    var _dateTime = forecastBlock.querySelector(".day__date");
    _dateTime.innerText = dateTime;
}
function updateMinTemperature(forecastBlock, temperature) {
    var _minTemperature = forecastBlock.querySelector(".temp__value--min");
    _minTemperature.innerText = temperature;
}
function updateMaxTemperature(forecastBlock, temperature) {
    var _temperature = forecastBlock.querySelector(".temp__value--max");
    _temperature.innerText = temperature;
}
function updateForecastIcon(forecastBlock, icon) {
    var _icon = forecastBlock.querySelector(".day__icon--img");
    _icon.src = "http://openweathermap.org/img/wn/".concat(icon, "@2x.png");
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/ts/data.ts");


var city = "Bien Hoa";
(0,_data__WEBPACK_IMPORTED_MODULE_1__.updateWeather)(city);
// updateForecast(city);
var unitsButtons = document.querySelectorAll(".units__btn");
unitsButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // When click to a button that is not active
        if (!button.classList.contains("units__btn--active")) {
            // Toggle classlist
            unitsButtons.forEach(function (btn) { return btn.classList.toggle("units__btn--active"); });
            // Update weather
            var useMetric = button.innerHTML == "C";
            (0,_data__WEBPACK_IMPORTED_MODULE_1__.updateWeather)(city, useMetric).then(function () {
                // Update unit
                var unitsValues = document.querySelectorAll(".temp__unit");
                unitsValues.forEach(function (unit) {
                    unit.innerHTML = button.innerHTML;
                });
            });
        }
    });
});
var sidebarSearch = document.querySelector(".sidebar--search");
var cancelSearchButton = sidebarSearch.querySelector(".search__cancel");
cancelSearchButton.addEventListener("click", function () {
    sidebarSearch.classList.add("search--hidden");
});
var inputSearchButton = sidebarSearch.querySelector(".input__btn");
inputSearchButton.addEventListener("click", function () {
    var newCity = sidebarSearch.querySelector(".city__value");
    (0,_data__WEBPACK_IMPORTED_MODULE_1__.updateWeather)(newCity.value);
    sidebarSearch.classList.add("search--hidden");
});
var searchButton = document.querySelector(".location__btn--search");
searchButton.addEventListener("click", function () {
    sidebarSearch.classList.remove("search--hidden");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFB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Q3pDLHdCQUF3QixDQUNKLENBQUM7QUFDdkIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNyQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdHMvZGF0YS50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90cy91aS50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NTAwOzcwMCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMEUxRDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXG59XFxuXFxuYm9keSxcXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAzMHZ3O1xcbn1cXG4uc2lkZWJhcl9fbG9jYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDJlbTtcXG59XFxuLnNpZGViYXJfX3RvZGF5IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2lkZWJhcl9faW5mbyB7XFxuICBjb2xvcjogIzg4ODY5ZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJlbTtcXG59XFxuXFxuLmxvY2F0aW9uX19idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG4ubG9jYXRpb25fX2J0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5sb2NhdGlvbl9fYnRuLS1zZWFyY2gge1xcbiAgd2lkdGg6IDE2MXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZDogIzZlNzA3YTtcXG59XFxuLmxvY2F0aW9uX19idG4tLWNyb3NzaGFpciB7XFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50b2RheV9faWNvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRvZGF5X19pY29uIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG4udG9kYXlfX3RlbXAge1xcbiAgZm9udC1zaXplOiAxNDRweDtcXG59XFxuLnRvZGF5X19jb25kIHtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGNvbG9yOiAjYTA5ZmIxO1xcbn1cXG4udG9kYXkgLnRlbXBfX3VuaXQge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgY29sb3I6ICNhMDlmYjE7XFxufVxcblxcbi50ZW1wX191bml0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIsKwXFxcIjtcXG59XFxuXFxuLmluZm9fX2RhdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiVG9kYXkg4oCiIFxcXCI7XFxufVxcbi5pbmZvX19uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG4uaW5mb19fbmFtZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJsb2NhdGlvbl9vbiBcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCI7XFxuICBsaW5lLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICBwYWRkaW5nOiAyZW07XFxufVxcbi5zZWFyY2hfX2NhbmNlbCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLnNlYXJjaF9fY2FuY2VsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNlYXJjaF9faW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMS41ZW07XFxuICBtYXJnaW46IDJlbSAwO1xcbn1cXG4uc2VhcmNoX19pbnB1dCAuaW5wdXRfX2NpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBnYXA6IDAuNWVtO1xcbiAgcGFkZGluZzogMCAxZW07XFxuICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZmZmZjtcXG59XFxuLnNlYXJjaF9faW5wdXQgLmlucHV0X19jaXR5IGlucHV0IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zZWFyY2hfX2lucHV0IC5pbnB1dF9fc3VibWl0IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0N2U5O1xcbn1cXG4uc2VhcmNoX19pbnB1dCBpbnB1dCxcXG4uc2VhcmNoX19pbnB1dCBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnNlYXJjaF9fcmVzdWx0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxZW07XFxufVxcbi5zZWFyY2hfX3Jlc3VsdCA+ICoge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG4uc2VhcmNoX19yZXN1bHQgPiAqOmhvdmVyIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXItLXNlYXJjaCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDI0dnc7XFxufVxcblxcbi5zZWFyY2gtLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiAxZW07XFxuICB3aWR0aDogNzB2dztcXG4gIHBhZGRpbmc6IDUlIDEwJTtcXG59XFxuLm1haW5fX3VuaXRzIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuLm1haW5fX2ZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLnVuaXRzX19idG4ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4udW5pdHNfX2J0bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLCsFxcXCI7XFxufVxcbi51bml0c19fYnRuLS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2U3ZTdlYjtcXG4gIGNvbG9yOiAjMTEwZTNjO1xcbn1cXG4udW5pdHNfX2J0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdF9fZGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTc3cHg7XFxuICBiYWNrZ3JvdW5kOiAjMWUyMTNhO1xcbn1cXG5cXG4uZGF5X19kYXRlIHtcXG4gIHBhZGRpbmctdG9wOiAxZW07XFxufVxcbi5kYXlfX2ljb24ge1xcbiAgbWF4LXdpZHRoOiA4MHB4O1xcbiAgbWF4LWhlaWdodDogODBweDtcXG59XFxuLmRheV9faWNvbiBpbWcge1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuLmRheV9fdGVtcCB7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLmRheV9fdGVtcCAudGVtcC0tbWluIHtcXG4gIGNvbG9yOiAjYTA5ZmIxO1xcbn1cXG5cXG4uY29udGVudF9fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjZTdlN2ViO1xcbiAgcGFkZGluZzogMC40ZW0gMCAwLjhlbTtcXG59XFxuLmNvbnRlbnRfX2hpZ2hsaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgd2lkdGg6IDQ4LjclO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzFlMjEzYTtcXG4gIHBhZGRpbmc6IDEuNWVtIDAgMS41ZW07XFxufVxcbi5oaWdobGlnaHRfX3ZhbHVlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDY0cHg7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcbi5oaWdobGlnaHRfX3ZhbHVlOjphZnRlciB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG4uaGlnaGxpZ2h0X192YWx1ZS0td2luZDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIm1wc1xcXCI7XFxufVxcbi5oaWdobGlnaHRfX3ZhbHVlLS1odW1pZDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiVcXFwiO1xcbn1cXG4uaGlnaGxpZ2h0X192YWx1ZS0tdmlzOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwibVxcXCI7XFxufVxcbi5oaWdobGlnaHRfX3ZhbHVlLS1haXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJtYlxcXCI7XFxufVxcblxcbnByb2dyZXNzIHtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAwLjVlbTtcXG59XFxucHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcXG4gIGJhY2tncm91bmQ6ICNlN2U3ZWI7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcbnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZlYzY1O1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZm9vdGVyID4gYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuZm9vdGVyID4gYTpmaXJzdC1vZi10eXBlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLnNpZGViYXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuICAuaGlnaGxpZ2h0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fY29sb3Iuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3R5cG8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3NpZGViYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX21vYmlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjs7O0NBQUE7QUFLQTs7Ozs7Ozs7Ozs7OztFQWFDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QURHRDs7QUNEQSxnREFBQTtBQUNBOztFQUVDLGNBQUE7QURJRDs7QUNGQTtFQUNDLGNBQUE7QURLRDs7QUNIQTtFQUNDLGdCQUFBO0FETUQ7O0FDSkE7RUFDQyxZQUFBO0FET0Q7O0FDTEE7O0VBRUMsV0FBQTtFQUNBLGFBQUE7QURRRDs7QUNOQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QURTRDs7QUV2REE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUYwREY7O0FFdkRBO0VBQ0UseUJBQUE7QUYwREY7O0FHN0RBOztFQUVFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FIZ0VGOztBSXZFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsV0FBQTtBSnlFRjtBSXZFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUp5RUo7QUl0RUU7RUFDRSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFFQSxtQkFBQTtBSnNFSjtBSW5FRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FKcUVKOztBSWhFRTtFQUNFLFlBQUE7RUFDQSxX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QUt6TEk7RUFDRSxZQUFBO0FMMkxOO0FLeExJO0VBQ0UsWUFBQTtBTDBMTjtBS3ZMSTtFQUNFLGFBQUE7QUx5TE47O0FLcExBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUx1TEY7QUtyTEU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FMdUxKO0FLcExFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBTHNMSjs7QUtsTEE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBTHFMRjtBS25MRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBTHFMSjtBS25MSTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUxxTE47O0FNM1dBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0VOOFdGO0VNM1dBO0lBQ0UsWUFBQTtFTjZXRjtFTTFXQTtJQUNFLFdBQUE7RU40V0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NTAwOzcwMFxcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXFxcIik7XFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDBFMUQ7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRTIxM0E7XFxufVxcblxcbmJvZHksXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMzB2dztcXG59XFxuLnNpZGViYXJfX2xvY2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyZW07XFxufVxcbi5zaWRlYmFyX190b2RheSB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNpZGViYXJfX2luZm8ge1xcbiAgY29sb3I6ICM4ODg2OWQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyZW07XFxufVxcblxcbi5sb2NhdGlvbl9fYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuLmxvY2F0aW9uX19idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubG9jYXRpb25fX2J0bi0tc2VhcmNoIHtcXG4gIHdpZHRoOiAxNjFweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQ6ICM2ZTcwN2E7XFxufVxcbi5sb2NhdGlvbl9fYnRuLS1jcm9zc2hhaXIge1xcbiAgbWluLXdpZHRoOiA0MHB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udG9kYXlfX2ljb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50b2RheV9faWNvbiBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuLnRvZGF5X190ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMTQ0cHg7XFxufVxcbi50b2RheV9fY29uZCB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBjb2xvcjogI2EwOWZiMTtcXG59XFxuLnRvZGF5IC50ZW1wX191bml0IHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGNvbG9yOiAjYTA5ZmIxO1xcbn1cXG5cXG4udGVtcF9fdW5pdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLCsFxcXCI7XFxufVxcblxcbi5pbmZvX19kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlRvZGF5IOKAoiBcXFwiO1xcbn1cXG4uaW5mb19fbmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuLmluZm9fX25hbWU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwibG9jYXRpb25fb24gXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnNcXFwiO1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgcGFkZGluZzogMmVtO1xcbn1cXG4uc2VhcmNoX19jYW5jZWwge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5zZWFyY2hfX2NhbmNlbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zZWFyY2hfX2lucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEuNWVtO1xcbiAgbWFyZ2luOiAyZW0gMDtcXG59XFxuLnNlYXJjaF9faW5wdXQgLmlucHV0X19jaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZ2FwOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDAgMWVtO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICNmZmZmZmY7XFxufVxcbi5zZWFyY2hfX2lucHV0IC5pbnB1dF9fY2l0eSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2VhcmNoX19pbnB1dCAuaW5wdXRfX3N1Ym1pdCBidXR0b24ge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjNDdlOTtcXG59XFxuLnNlYXJjaF9faW5wdXQgaW5wdXQsXFxuLnNlYXJjaF9faW5wdXQgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5zZWFyY2hfX3Jlc3VsdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMWVtO1xcbn1cXG4uc2VhcmNoX19yZXN1bHQgPiAqIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLnNlYXJjaF9fcmVzdWx0ID4gKjpob3ZlciB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyLS1zZWFyY2gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAyNHZ3O1xcbn1cXG5cXG4uc2VhcmNoLS1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogMWVtO1xcbiAgd2lkdGg6IDcwdnc7XFxuICBwYWRkaW5nOiA1JSAxMCU7XFxufVxcbi5tYWluX191bml0cyB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcbi5tYWluX19mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi51bml0c19fYnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnVuaXRzX19idG46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiwrBcXFwiO1xcbn1cXG4udW5pdHNfX2J0bi0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNlN2U3ZWI7XFxuICBjb2xvcjogIzExMGUzYztcXG59XFxuLnVuaXRzX19idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9yZWNhc3RfX2RheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDE3N3B4O1xcbiAgYmFja2dyb3VuZDogIzFlMjEzYTtcXG59XFxuXFxuLmRheV9fZGF0ZSB7XFxuICBwYWRkaW5nLXRvcDogMWVtO1xcbn1cXG4uZGF5X19pY29uIHtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIG1heC1oZWlnaHQ6IDgwcHg7XFxufVxcbi5kYXlfX2ljb24gaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5kYXlfX3RlbXAge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5kYXlfX3RlbXAgLnRlbXAtLW1pbiB7XFxuICBjb2xvcjogI2EwOWZiMTtcXG59XFxuXFxuLmNvbnRlbnRfX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogI2U3ZTdlYjtcXG4gIHBhZGRpbmc6IDAuNGVtIDAgMC44ZW07XFxufVxcbi5jb250ZW50X19oaWdobGlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIHdpZHRoOiA0OC43JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxZTIxM2E7XFxuICBwYWRkaW5nOiAxLjVlbSAwIDEuNWVtO1xcbn1cXG4uaGlnaGxpZ2h0X192YWx1ZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiA2NHB4O1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uaGlnaGxpZ2h0X192YWx1ZTo6YWZ0ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuLmhpZ2hsaWdodF9fdmFsdWUtLXdpbmQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJtcHNcXFwiO1xcbn1cXG4uaGlnaGxpZ2h0X192YWx1ZS0taHVtaWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIlXFxcIjtcXG59XFxuLmhpZ2hsaWdodF9fdmFsdWUtLXZpczo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIm1cXFwiO1xcbn1cXG4uaGlnaGxpZ2h0X192YWx1ZS0tYWlyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwibWJcXFwiO1xcbn1cXG5cXG5wcm9ncmVzcyB7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMC41ZW07XFxufVxcbnByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLWJhciB7XFxuICBiYWNrZ3JvdW5kOiAjZTdlN2ViO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xcbiAgYmFja2dyb3VuZDogI2ZmZWM2NTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvb3RlciA+IGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmZvb3RlciA+IGE6Zmlyc3Qtb2YtdHlwZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbiAgLmhpZ2hsaWdodCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XCIsXCJib2R5IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMEUxRDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXHJcXG59XCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANDAwOzUwMDs3MDBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1xcXCIpO1xcclxcblxcclxcbmJvZHksXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXCIsXCIuc2lkZWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcblxcclxcbiAgJl9fbG9jYXRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3RvZGF5IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2luZm8ge1xcclxcbiAgICBjb2xvcjogIzg4ODY5ZDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uIHtcXHJcXG4gICZfX2J0biB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1zZWFyY2gge1xcclxcbiAgICAgIHdpZHRoOiAxNjFweDtcXHJcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuXFxyXFxuICAgICAgYmFja2dyb3VuZDogIzZlNzA3YTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1jcm9zc2hhaXIge1xcclxcbiAgICAgIG1pbi13aWR0aDogNDBweDtcXHJcXG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5IHtcXHJcXG4gICZfX2ljb24ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvLyB6LWluZGV4OiAwO1xcclxcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIC8vICY6OmJlZm9yZSB7XFxyXFxuICAgIC8vICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIC8vICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciB1cmwoXFxcIi4uLy4uL3NyYy9hc3NldC9DbG91ZC1iYWNrZ3JvdW5kLnBuZ1xcXCIpO1xcclxcbiAgICAvLyAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG5cXHJcXG4gICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIC8vICAgbGVmdDogMDtcXHJcXG4gICAgLy8gICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLy8gICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8vICAgb3BhY2l0eTogMC44O1xcclxcbiAgICAvLyAgIHotaW5kZXg6IC0xO1xcclxcbiAgICAvLyB9XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3RlbXAge1xcclxcbiAgICBmb250LXNpemU6IDE0NHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fY29uZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gICAgY29sb3I6ICNhMDlmYjE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGVtcCB7XFxyXFxuICAgICZfX3VuaXQge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gICAgICBjb2xvcjogI2EwOWZiMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGVtcCB7XFxyXFxuICAmX191bml0IHtcXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiwrBcXFwiO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5pbmZvIHtcXHJcXG4gICZfX2RhdGUge1xcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCJUb2RheSDigKIgXFxcIjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgY29udGVudDogXFxcImxvY2F0aW9uX29uIFxcXCI7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCI7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCB7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuXFxyXFxuICAmX19jYW5jZWwge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxLjVlbTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAyZW0gMDtcXHJcXG5cXHJcXG4gICAgLmlucHV0X19jaXR5IHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgIGdhcDogMC41ZW07XFxyXFxuXFxyXFxuICAgICAgcGFkZGluZzogMCAxZW07XFxyXFxuICAgICAgb3V0bGluZTogMXB4IHNvbGlkICNmZmZmZmY7XFxyXFxuXFxyXFxuICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmlucHV0X19zdWJtaXQge1xcclxcbiAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0N2U5O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dCxcXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19yZXN1bHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG5cXHJcXG4gICAgPiAqIHtcXHJcXG4gICAgICBwYWRkaW5nOiAxZW07XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLS1zZWFyY2gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAyNHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLS1oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCJib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuXFxyXFxuICB3aWR0aDogNzB2dztcXHJcXG4gIHBhZGRpbmc6IDUlIDEwJTtcXHJcXG5cXHJcXG4gICZfX3VuaXRzIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZm9yZWNhc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAxZW07XFxyXFxuICAgIC8vIGFsaWduLXNlbGY6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi51bml0cyB7XFxyXFxuICAmX19idG4ge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcblxcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgY29udGVudDogXFxcIsKwXFxcIjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1hY3RpdmUge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICNlN2U3ZWI7XFxyXFxuICAgICAgY29sb3I6ICMxMTBlM2M7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdCB7XFxyXFxuICAmX19kYXkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNzdweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZDogIzFlMjEzYTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmRheSB7XFxyXFxuICAmX19kYXRlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ljb24ge1xcclxcbiAgICBtYXgtd2lkdGg6IDgwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDgwcHg7XFxyXFxuXFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgLy8gb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG4gICAgfVxcclxcbiAgICAvLyBwYWRkaW5nOiAxZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190ZW1wIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHJcXG4gICAgLnRlbXAtLW1pbiB7XFxyXFxuICAgICAgY29sb3I6ICNhMDlmYjE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiAjZTdlN2ViO1xcclxcbiAgICBwYWRkaW5nOiAwLjRlbSAwIDAuOGVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faGlnaGxpZ2h0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogMWVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGxpZ2h0IHtcXHJcXG4gIHdpZHRoOiA0OC43JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICMxZTIxM2E7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxLjVlbSAwIDEuNWVtO1xcclxcblxcclxcbiAgJl9fdmFsdWUge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDY0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG5cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXdpbmQ6OmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwibXBzXFxcIjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1odW1pZDo6YWZ0ZXIge1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCIlXFxcIjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS12aXM6OmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwibVxcXCI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tYWlyOjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogXFxcIm1iXFxcIjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5wcm9ncmVzcyB7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogMC41ZW07XFxyXFxuXFxyXFxuICAmOjotd2Via2l0LXByb2dyZXNzLWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlN2U3ZWI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZWM2NTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gID4gYSB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaWRlYmFyIHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhpZ2hsaWdodCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xyXG4gIHVwZGF0ZUNpdHlOYW1lLFxyXG4gIHVwZGF0ZURhdGUsXHJcbiAgdXBkYXRlVGVtcGVyYXR1cmUsXHJcbiAgdXBkYXRlQ29uZGl0aW9uLFxyXG4gIHVwZGF0ZUljb24sXHJcbiAgdXBkYXRlV2luZFN0YXR1cyxcclxuICB1cGRhdGVXaW5kRGVncmVlLFxyXG4gIHVwZGF0ZUh1bWlkaXR5LFxyXG4gIHVwZGF0ZVZpc2liaWxpdHksXHJcbiAgdXBkYXRlUHJlc3N1cmUsXHJcbiAgZ2V0Rm9yZWNhc3REYXlzLFxyXG4gIHVwZGF0ZUZvcmVjYXN0RGF0ZSxcclxuICB1cGRhdGVNaW5UZW1wZXJhdHVyZSxcclxuICB1cGRhdGVNYXhUZW1wZXJhdHVyZSxcclxuICB1cGRhdGVGb3JlY2FzdEljb24sXHJcbn0gZnJvbSBcIi4vdWlcIjtcclxuXHJcbmludGVyZmFjZSBXZWF0aGVyIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGF0ZVRpbWU6IHN0cmluZztcclxuICB0ZW1wOiBudW1iZXI7XHJcbiAgY29uZGl0aW9uOiBzdHJpbmc7XHJcbiAgaWNvbjogc3RyaW5nO1xyXG4gIHdpbmQ6IHtcclxuICAgIHNwZWVkOiBzdHJpbmc7XHJcbiAgICBkZWc6IG51bWJlcjtcclxuICB9O1xyXG4gIGh1bWlkaXR5OiBzdHJpbmc7XHJcbiAgdmlzaWJpbGl0eTogc3RyaW5nO1xyXG4gIHByZXNzdXJlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBGb3JlY2FzdCB7XHJcbiAgZGF0ZVRpbWU6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgdGVtcF9taW46IHN0cmluZztcclxuICB0ZW1wX21heDogc3RyaW5nO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHlOYW1lOiBzdHJpbmcsIHVzZU1ldHJpYzogYm9vbGVhbikge1xyXG4gIGNvbnN0IHdlYXRoZXJVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD0ke3Byb2Nlc3MuZW52LkFQSV9LRVl9JnVuaXRzPSR7dXNlTWV0cmljID8gXCJtZXRyaWNcIiA6IFwiaW1wZXJpYWxcIn1gO1xyXG4gIGNvbnN0IHdlYXRoZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJVcmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyUmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QoY2l0eU5hbWU6IHN0cmluZywgdXNlTWV0cmljOiBib29sZWFuKSB7XHJcbiAgY29uc3QgZm9yZWNhc3RVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHtwcm9jZXNzLmVudi5BUElfS0VZfSZ1bml0cz0ke3VzZU1ldHJpYyA/IFwibWV0cmljXCIgOiBcImltcGVyaWFsXCJ9YDtcclxuICBjb25zdCBmb3JlY2FzdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZm9yZWNhc3RVcmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XHJcbiAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgZm9yZWNhc3RSZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGZvcmVjYXN0RGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICByZXR1cm4gZGF0ZS50b0RhdGVTdHJpbmcoKS5zbGljZSgwLCAtNSkucmVwbGFjZShcIiBcIiwgXCIsIFwiKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlV2VhdGhlcihjaXR5TmFtZTogc3RyaW5nLCB1c2VNZXRyaWM6Ym9vbGVhbiA9IHRydWUpIHtcclxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoY2l0eU5hbWUsIHVzZU1ldHJpYyk7XHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXI6IFdlYXRoZXIgPSB7XHJcbiAgICBuYW1lOiB3ZWF0aGVyRGF0YS5uYW1lLFxyXG4gICAgZGF0ZVRpbWU6IHNldERhdGUobmV3IERhdGUod2VhdGhlckRhdGEuZHQgKiAxMDAwKSksXHJcbiAgICB0ZW1wOiBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCksXHJcbiAgICBjb25kaXRpb246IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbixcclxuICAgIGljb246IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbixcclxuICAgIHdpbmQ6IHtcclxuICAgICAgc3BlZWQ6IHdlYXRoZXJEYXRhLndpbmQuc3BlZWQsXHJcbiAgICAgIGRlZzogd2VhdGhlckRhdGEud2luZC5kZWcsXHJcbiAgICB9LFxyXG4gICAgaHVtaWRpdHk6IHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICB2aXNpYmlsaXR5OiB3ZWF0aGVyRGF0YS52aXNpYmlsaXR5LFxyXG4gICAgcHJlc3N1cmU6IHdlYXRoZXJEYXRhLm1haW4ucHJlc3N1cmUsXHJcbiAgfTtcclxuICB1cGRhdGVXZWF0aGVyVUkoY3VycmVudFdlYXRoZXIpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCBnZXRGb3JlY2FzdChjaXR5TmFtZSwgdXNlTWV0cmljKTtcclxuICBjb25zdCBjdXJyZW50Rm9yZWNhc3Q6IEZvcmVjYXN0W10gPSBmb3JlY2FzdERhdGEubGlzdFxyXG4gICAgLmZpbHRlcigobGlzdDogYW55LCBpbmRleDogbnVtYmVyKSA9PiBpbmRleCAlIDggPT09IDUpXHJcbiAgICAubWFwKChsaXN0OiBhbnkpID0+ICh7XHJcbiAgICAgIGRhdGVUaW1lOiBzZXREYXRlKG5ldyBEYXRlKGxpc3QuZHQgKiAxMDAwKSksXHJcbiAgICAgIGljb246IGxpc3Qud2VhdGhlclswXS5pY29uLFxyXG4gICAgICB0ZW1wX21pbjogTWF0aC5yb3VuZChsaXN0Lm1haW4udGVtcF9taW4pLFxyXG4gICAgICB0ZW1wX21heDogTWF0aC5yb3VuZChsaXN0Lm1haW4udGVtcF9tYXgpLFxyXG4gICAgfSkpO1xyXG4gIHVwZGF0ZUZvcmVjYXN0VUkoY3VycmVudEZvcmVjYXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlV2VhdGhlclVJKGN1cnJlbnRXZWF0aGVyOiBXZWF0aGVyKSB7XHJcbiAgdXBkYXRlQ2l0eU5hbWUoY3VycmVudFdlYXRoZXIubmFtZSk7XHJcbiAgdXBkYXRlRGF0ZShjdXJyZW50V2VhdGhlci5kYXRlVGltZSk7XHJcbiAgdXBkYXRlVGVtcGVyYXR1cmUoY3VycmVudFdlYXRoZXIudGVtcC50b1N0cmluZygpKTtcclxuICB1cGRhdGVDb25kaXRpb24oY3VycmVudFdlYXRoZXIuY29uZGl0aW9uKTtcclxuICB1cGRhdGVJY29uKGN1cnJlbnRXZWF0aGVyLmljb24pO1xyXG4gIHVwZGF0ZVdpbmRTdGF0dXMoY3VycmVudFdlYXRoZXIud2luZC5zcGVlZCk7XHJcbiAgdXBkYXRlV2luZERlZ3JlZShjdXJyZW50V2VhdGhlci53aW5kLmRlZyk7XHJcbiAgdXBkYXRlSHVtaWRpdHkoY3VycmVudFdlYXRoZXIuaHVtaWRpdHkpO1xyXG4gIHVwZGF0ZVZpc2liaWxpdHkoY3VycmVudFdlYXRoZXIudmlzaWJpbGl0eSk7XHJcbiAgdXBkYXRlUHJlc3N1cmUoY3VycmVudFdlYXRoZXIucHJlc3N1cmUpO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0VUkoY3VycmVudEZvcmVjYXN0OiBGb3JlY2FzdFtdKSB7XHJcbiAgY29uc3QgZm9yZWNhc3REYXlzID0gZ2V0Rm9yZWNhc3REYXlzKCk7XHJcbiAgZm9yZWNhc3REYXlzLmZvckVhY2goKGZvcmVjYXN0RGF5LCBpbmRleCkgPT4ge1xyXG4gICAgdXBkYXRlRm9yZWNhc3REYXRlKGZvcmVjYXN0RGF5LCBjdXJyZW50Rm9yZWNhc3RbaW5kZXhdLmRhdGVUaW1lKTtcclxuICAgIHVwZGF0ZU1pblRlbXBlcmF0dXJlKGZvcmVjYXN0RGF5LCBjdXJyZW50Rm9yZWNhc3RbaW5kZXhdLnRlbXBfbWluKTtcclxuICAgIHVwZGF0ZU1heFRlbXBlcmF0dXJlKGZvcmVjYXN0RGF5LCBjdXJyZW50Rm9yZWNhc3RbaW5kZXhdLnRlbXBfbWF4KTtcclxuICAgIHVwZGF0ZUZvcmVjYXN0SWNvbihmb3JlY2FzdERheSwgY3VycmVudEZvcmVjYXN0W2luZGV4XS5pY29uKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgdXBkYXRlV2VhdGhlciB9O1xyXG4iLCJmdW5jdGlvbiB1cGRhdGVDaXR5TmFtZShjaXR5TmFtZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgX2NpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvX19uYW1lXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gIF9jaXR5TmFtZS5pbm5lclRleHQgPSBjaXR5TmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRGF0ZShkYXRlVGltZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgX2RhdGVUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvX19kYXRlXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gIF9kYXRlVGltZS5pbm5lclRleHQgPSBkYXRlVGltZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGVtcGVyYXR1cmUodGVtcGVyYXR1cmU6IHN0cmluZykge1xyXG4gIGNvbnN0IF90ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcF9fdmFsdWVcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgX3RlbXBlcmF0dXJlLmlubmVyVGV4dCA9IHRlbXBlcmF0dXJlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDb25kaXRpb24oY29uZGl0aW9uOiBzdHJpbmcpIHtcclxuICBjb25zdCBfY29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheV9fY29uZFwiKSBhcyBIVE1MRWxlbWVudDtcclxuICBfY29uZGl0aW9uLmlubmVyVGV4dCA9IGNvbmRpdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlSWNvbihpY29uOiBzdHJpbmcpIHtcclxuICBjb25zdCBfaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlfX2ljb24tLWltZ1wiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIF9pY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDR4LnBuZ2A7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVdpbmRTdGF0dXMod2luZFNwZWVkOiBzdHJpbmcpIHtcclxuICBjb25zdCBfd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmhpZ2hsaWdodF9fdmFsdWUtLXdpbmRcIlxyXG4gICkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgX3dpbmRTcGVlZC5pbm5lclRleHQgPSB3aW5kU3BlZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVdpbmREZWdyZWUod2luZERlZ3JlZTogbnVtYmVyKSB7XHJcbiAgY29uc3QgY2FyZGluYWxQb2ludCA9IFtcclxuICAgIFwiTlwiLFxyXG4gICAgXCJOTkVcIixcclxuICAgIFwiTkVcIixcclxuICAgIFwiRU5FXCIsXHJcbiAgICBcIkVcIixcclxuICAgIFwiRVNFXCIsXHJcbiAgICBcIlNFXCIsXHJcbiAgICBcIlNTRVwiLFxyXG4gICAgXCJTXCIsXHJcbiAgICBcIlNTV1wiLFxyXG4gICAgXCJTV1wiLFxyXG4gICAgXCJXU1dcIixcclxuICAgIFwiV1wiLFxyXG4gICAgXCJXTldcIixcclxuICAgIFwiTldcIixcclxuICAgIFwiTk5XXCIsXHJcbiAgXTtcclxuICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLnJvdW5kKHdpbmREZWdyZWUgLyAoMzYwIC8gY2FyZGluYWxQb2ludC5sZW5ndGgpKTtcclxuICBjb25zdCBfd2luZERlZ3JlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlyX19uYW1lXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gIF93aW5kRGVncmVlLmlubmVyVGV4dCA9IGNhcmRpbmFsUG9pbnRbZGlyZWN0aW9uICUgY2FyZGluYWxQb2ludC5sZW5ndGhdO1xyXG5cclxuICBjb25zdCBkaXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXJfX3ZhbHVlXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gIGRpckljb24uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3dpbmREZWdyZWV9ZGVnKWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUh1bWlkaXR5KGh1bWlkaXR5OiBzdHJpbmcpIHtcclxuICBjb25zdCBfaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuaGlnaGxpZ2h0X192YWx1ZS0taHVtaWRcIlxyXG4gICkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgX2h1bWlkaXR5LmlubmVyVGV4dCA9IGh1bWlkaXR5O1xyXG5cclxuICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5oaWdobGlnaHQtLWh1bWlkX19iYXJcIlxyXG4gICkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgcHJvZ3Jlc3NCYXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaHVtaWRpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVWaXNpYmlsaXR5KHZpc2liaWxpdHk6IHN0cmluZykge1xyXG4gIGNvbnN0IF92aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmhpZ2hsaWdodF9fdmFsdWUtLXZpc1wiXHJcbiAgKSBhcyBIVE1MRWxlbWVudDtcclxuICBfdmlzaWJpbGl0eS5pbm5lclRleHQgPSB2aXNpYmlsaXR5O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQcmVzc3VyZShwcmVzc3VyZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgX3ByZXNzdXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmhpZ2hsaWdodF9fdmFsdWUtLWFpclwiXHJcbiAgKSBhcyBIVE1MRWxlbWVudDtcclxuICBfcHJlc3N1cmUuaW5uZXJUZXh0ID0gcHJlc3N1cmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0RGF5cygpIHtcclxuICBjb25zdCBmb3JlY2FzdERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0X19kYXlcIik7XHJcbiAgcmV0dXJuIGZvcmVjYXN0RGF5cztcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlRm9yZWNhc3REYXRlKGZvcmVjYXN0QmxvY2s6IEVsZW1lbnQsIGRhdGVUaW1lOiBzdHJpbmcpIHtcclxuICBjb25zdCBfZGF0ZVRpbWUgPSBmb3JlY2FzdEJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCIuZGF5X19kYXRlXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gIF9kYXRlVGltZS5pbm5lclRleHQgPSBkYXRlVGltZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTWluVGVtcGVyYXR1cmUoZm9yZWNhc3RCbG9jazogRWxlbWVudCwgdGVtcGVyYXR1cmU6IHN0cmluZykge1xyXG4gIGNvbnN0IF9taW5UZW1wZXJhdHVyZSA9IGZvcmVjYXN0QmxvY2sucXVlcnlTZWxlY3RvcihcIi50ZW1wX192YWx1ZS0tbWluXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gIF9taW5UZW1wZXJhdHVyZS5pbm5lclRleHQgPSB0ZW1wZXJhdHVyZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTWF4VGVtcGVyYXR1cmUoZm9yZWNhc3RCbG9jazogRWxlbWVudCwgdGVtcGVyYXR1cmU6IHN0cmluZykge1xyXG4gIGNvbnN0IF90ZW1wZXJhdHVyZSA9IGZvcmVjYXN0QmxvY2sucXVlcnlTZWxlY3RvcihcIi50ZW1wX192YWx1ZS0tbWF4XCIpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICBfdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gdGVtcGVyYXR1cmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0SWNvbihmb3JlY2FzdEJsb2NrOiBFbGVtZW50LCBpY29uOiBzdHJpbmcpIHtcclxuICBjb25zdCBfaWNvbiA9IGZvcmVjYXN0QmxvY2sucXVlcnlTZWxlY3RvcihcIi5kYXlfX2ljb24tLWltZ1wiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIF9pY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2A7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgdXBkYXRlQ2l0eU5hbWUsXHJcbiAgdXBkYXRlRGF0ZSxcclxuICB1cGRhdGVUZW1wZXJhdHVyZSxcclxuICB1cGRhdGVDb25kaXRpb24sXHJcbiAgdXBkYXRlSWNvbixcclxuICB1cGRhdGVXaW5kU3RhdHVzLFxyXG4gIHVwZGF0ZVdpbmREZWdyZWUsXHJcbiAgdXBkYXRlSHVtaWRpdHksXHJcbiAgdXBkYXRlVmlzaWJpbGl0eSxcclxuICB1cGRhdGVQcmVzc3VyZSxcclxuICBnZXRGb3JlY2FzdERheXMsXHJcbiAgdXBkYXRlRm9yZWNhc3REYXRlLFxyXG4gIHVwZGF0ZU1pblRlbXBlcmF0dXJlLFxyXG4gIHVwZGF0ZU1heFRlbXBlcmF0dXJlLFxyXG4gIHVwZGF0ZUZvcmVjYXN0SWNvbixcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vc2Nzcy9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVwZGF0ZVdlYXRoZXIgfSBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5sZXQgY2l0eSA9IFwiQmllbiBIb2FcIjtcclxudXBkYXRlV2VhdGhlcihjaXR5KTtcclxuLy8gdXBkYXRlRm9yZWNhc3QoY2l0eSk7XHJcblxyXG5jb25zdCB1bml0c0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVuaXRzX19idG5cIik7XHJcbnVuaXRzQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vIFdoZW4gY2xpY2sgdG8gYSBidXR0b24gdGhhdCBpcyBub3QgYWN0aXZlXHJcbiAgICBpZiAoIWJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJ1bml0c19fYnRuLS1hY3RpdmVcIikpIHtcclxuICAgICAgLy8gVG9nZ2xlIGNsYXNzbGlzdFxyXG4gICAgICB1bml0c0J1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uY2xhc3NMaXN0LnRvZ2dsZShcInVuaXRzX19idG4tLWFjdGl2ZVwiKSk7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgd2VhdGhlclxyXG4gICAgICBjb25zdCB1c2VNZXRyaWMgPSBidXR0b24uaW5uZXJIVE1MID09IFwiQ1wiO1xyXG4gICAgICB1cGRhdGVXZWF0aGVyKGNpdHksIHVzZU1ldHJpYykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gVXBkYXRlIHVuaXRcclxuICAgICAgICBjb25zdCB1bml0c1ZhbHVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcF9fdW5pdFwiKTtcclxuICAgICAgICB1bml0c1ZhbHVlcy5mb3JFYWNoKCh1bml0KSA9PiB7XHJcbiAgICAgICAgICB1bml0LmlubmVySFRNTCA9IGJ1dHRvbi5pbm5lckhUTUw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuY29uc3Qgc2lkZWJhclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci0tc2VhcmNoXCIpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuY29uc3QgY2FuY2VsU2VhcmNoQnV0dG9uID0gc2lkZWJhclNlYXJjaC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnNlYXJjaF9fY2FuY2VsXCJcclxuKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY2FuY2VsU2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgc2lkZWJhclNlYXJjaC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLS1oaWRkZW5cIik7XHJcbn0pO1xyXG5cclxuY29uc3QgaW5wdXRTZWFyY2hCdXR0b24gPSBzaWRlYmFyU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuaW5wdXRfX2J0blwiXHJcbikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmlucHV0U2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgbmV3Q2l0eSA9IHNpZGViYXJTZWFyY2gucXVlcnlTZWxlY3RvcihcIi5jaXR5X192YWx1ZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHVwZGF0ZVdlYXRoZXIobmV3Q2l0eS52YWx1ZSk7XHJcbiAgc2lkZWJhclNlYXJjaC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLS1oaWRkZW5cIik7XHJcbn0pO1xyXG5cclxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5sb2NhdGlvbl9fYnRuLS1zZWFyY2hcIlxyXG4pIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBzaWRlYmFyU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWFyY2gtLWhpZGRlblwiKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==