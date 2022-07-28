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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  color: #fff;\n  background-color: #100E1D;\n}\n\n.sidebar {\n  background-color: #1E213A;\n}\n\nbody,\n* {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 30vw;\n}\n.sidebar__location {\n  display: flex;\n  justify-content: space-between;\n  margin: 2em;\n}\n.sidebar__today {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.sidebar__info {\n  color: #88869d;\n  font-size: 18px;\n  text-align: center;\n  margin: 2em;\n}\n\n.location__btn {\n  border: none;\n  color: #fff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n.location__btn:hover {\n  cursor: pointer;\n}\n.location__btn--search {\n  width: 161px;\n  height: 40px;\n  background: #6e707a;\n}\n.location__btn--crosshair {\n  min-width: 40px;\n  min-height: 40px;\n  line-height: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n}\n\n.today__icon {\n  text-align: center;\n  width: 100%;\n}\n.today__icon img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.today__temp {\n  font-size: 144px;\n}\n.today__cond {\n  font-size: 36px;\n  color: #a09fb1;\n}\n.today .temp__unit {\n  font-size: 48px;\n  color: #a09fb1;\n}\n\n.temp__unit::before {\n  content: \"°\";\n}\n\n.info__date::before {\n  content: \"Today • \";\n}\n.info__name {\n  display: block;\n  margin-top: 1em;\n}\n.info__name::before {\n  content: \"location_on \";\n  font-family: \"Material Icons\";\n  line-height: 100%;\n}\n\n.search {\n  padding: 2em;\n}\n.search__cancel {\n  text-align: right;\n}\n.search__input {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.5em;\n  margin: 2em 0;\n}\n.search__input .input__city {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  gap: 0.5em;\n  padding: 0 1em;\n  outline: 1px solid #ffffff;\n}\n.search__input .input__city input {\n  background: transparent;\n  width: 100%;\n}\n.search__input .input__submit button {\n  padding: 1em;\n  background-color: #3c47e9;\n}\n.search__input input,\n.search__input button {\n  border: none;\n  outline: none;\n  margin: 0;\n  color: white;\n}\n.search__result {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n.search__result > * {\n  padding: 1em;\n}\n.search__result > *:hover {\n  outline: 1px solid white;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 1em;\n  width: 70vw;\n  padding: 5% 10%;\n}\n.main__units {\n  align-self: end;\n}\n.main__forecast {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1em;\n}\n\n.units__btn {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  width: 40px;\n  height: 40px;\n  margin-left: 0.5em;\n  border: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n}\n.units__btn::before {\n  content: \"°\";\n}\n.units__btn--active {\n  background: #e7e7eb;\n  color: #110e3c;\n}\n.units__btn:hover {\n  cursor: pointer;\n}\n\n.forecast__day {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 120px;\n  height: 177px;\n  background: #1e213a;\n}\n\n.day__date {\n  padding-top: 1em;\n}\n.day__icon {\n  max-width: 80px;\n  max-height: 80px;\n}\n.day__icon img {\n  max-height: 100%;\n  max-width: 100%;\n}\n.day__temp {\n  align-self: stretch;\n  padding-bottom: 1em;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-evenly;\n}\n.day__temp .temp--min {\n  color: #a09fb1;\n}\n\n.content__title {\n  font-weight: 700;\n  font-size: 24px;\n  color: #e7e7eb;\n  padding: 0.4em 0 0.8em;\n}\n.content__highlight {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1em;\n}\n\n.highlight {\n  width: 48.7%;\n  text-align: center;\n  background: #1e213a;\n  padding: 1.5em 0 1.5em;\n}\n.highlight__value {\n  font-weight: 700;\n  font-size: 64px;\n  padding: 1rem 0;\n}\n.highlight__value::after {\n  font-weight: 500;\n  font-size: 36px;\n}\n.highlight__value--wind::after {\n  content: \"mps\";\n}\n.highlight__value--humid::after {\n  content: \"%\";\n}\n.highlight__value--vis::after {\n  content: \"m\";\n}\n.highlight__value--air::after {\n  content: \"mb\";\n}\n\nprogress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  width: 80%;\n  height: 0.5em;\n}\nprogress::-webkit-progress-bar {\n  background: #e7e7eb;\n  border-radius: 1em;\n}\nprogress[value]::-webkit-progress-value {\n  background: #ffec65;\n  border-radius: 1em;\n}\n\nfooter {\n  font-weight: 500;\n  font-size: 14px;\n  text-align: center;\n}\nfooter > a {\n  color: inherit;\n  text-decoration: none;\n}\nfooter > a:first-of-type {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n@media (max-width: 1100px) {\n  body {\n    flex-direction: column;\n    align-items: center;\n  }\n  .sidebar {\n    width: 100vw;\n  }\n  .highlight {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/_reset.scss","webpack://./src/scss/_color.scss","webpack://./src/scss/_typo.scss","webpack://./src/scss/_sidebar.scss","webpack://./src/scss/_main.scss","webpack://./src/scss/_mobile.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700\");\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  color: #fff;\n  background-color: #100E1D;\n}\n\n.sidebar {\n  background-color: #1E213A;\n}\n\nbody,\n* {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 30vw;\n}\n.sidebar__location {\n  display: flex;\n  justify-content: space-between;\n  margin: 2em;\n}\n.sidebar__today {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.sidebar__info {\n  color: #88869d;\n  font-size: 18px;\n  text-align: center;\n  margin: 2em;\n}\n\n.location__btn {\n  border: none;\n  color: #fff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n.location__btn:hover {\n  cursor: pointer;\n}\n.location__btn--search {\n  width: 161px;\n  height: 40px;\n  background: #6e707a;\n}\n.location__btn--crosshair {\n  min-width: 40px;\n  min-height: 40px;\n  line-height: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n}\n\n.today__icon {\n  text-align: center;\n  width: 100%;\n}\n.today__icon img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.today__temp {\n  font-size: 144px;\n}\n.today__cond {\n  font-size: 36px;\n  color: #a09fb1;\n}\n.today .temp__unit {\n  font-size: 48px;\n  color: #a09fb1;\n}\n\n.temp__unit::before {\n  content: \"°\";\n}\n\n.info__date::before {\n  content: \"Today • \";\n}\n.info__name {\n  display: block;\n  margin-top: 1em;\n}\n.info__name::before {\n  content: \"location_on \";\n  font-family: \"Material Icons\";\n  line-height: 100%;\n}\n\n.search {\n  padding: 2em;\n}\n.search__cancel {\n  text-align: right;\n}\n.search__input {\n  display: flex;\n  justify-content: space-between;\n  gap: 1.5em;\n  margin: 2em 0;\n}\n.search__input .input__city {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  gap: 0.5em;\n  padding: 0 1em;\n  outline: 1px solid #ffffff;\n}\n.search__input .input__city input {\n  background: transparent;\n  width: 100%;\n}\n.search__input .input__submit button {\n  padding: 1em;\n  background-color: #3c47e9;\n}\n.search__input input,\n.search__input button {\n  border: none;\n  outline: none;\n  margin: 0;\n  color: white;\n}\n.search__result {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n.search__result > * {\n  padding: 1em;\n}\n.search__result > *:hover {\n  outline: 1px solid white;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 1em;\n  width: 70vw;\n  padding: 5% 10%;\n}\n.main__units {\n  align-self: end;\n}\n.main__forecast {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1em;\n}\n\n.units__btn {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  width: 40px;\n  height: 40px;\n  margin-left: 0.5em;\n  border: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n}\n.units__btn::before {\n  content: \"°\";\n}\n.units__btn--active {\n  background: #e7e7eb;\n  color: #110e3c;\n}\n.units__btn:hover {\n  cursor: pointer;\n}\n\n.forecast__day {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 120px;\n  height: 177px;\n  background: #1e213a;\n}\n\n.day__date {\n  padding-top: 1em;\n}\n.day__icon {\n  max-width: 80px;\n  max-height: 80px;\n}\n.day__icon img {\n  max-height: 100%;\n  max-width: 100%;\n}\n.day__temp {\n  align-self: stretch;\n  padding-bottom: 1em;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-evenly;\n}\n.day__temp .temp--min {\n  color: #a09fb1;\n}\n\n.content__title {\n  font-weight: 700;\n  font-size: 24px;\n  color: #e7e7eb;\n  padding: 0.4em 0 0.8em;\n}\n.content__highlight {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1em;\n}\n\n.highlight {\n  width: 48.7%;\n  text-align: center;\n  background: #1e213a;\n  padding: 1.5em 0 1.5em;\n}\n.highlight__value {\n  font-weight: 700;\n  font-size: 64px;\n  padding: 1rem 0;\n}\n.highlight__value::after {\n  font-weight: 500;\n  font-size: 36px;\n}\n.highlight__value--wind::after {\n  content: \"mps\";\n}\n.highlight__value--humid::after {\n  content: \"%\";\n}\n.highlight__value--vis::after {\n  content: \"m\";\n}\n.highlight__value--air::after {\n  content: \"mb\";\n}\n\nprogress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  width: 80%;\n  height: 0.5em;\n}\nprogress::-webkit-progress-bar {\n  background: #e7e7eb;\n  border-radius: 1em;\n}\nprogress[value]::-webkit-progress-value {\n  background: #ffec65;\n  border-radius: 1em;\n}\n\nfooter {\n  font-weight: 500;\n  font-size: 14px;\n  text-align: center;\n}\nfooter > a {\n  color: inherit;\n  text-decoration: none;\n}\nfooter > a:first-of-type {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n@media (max-width: 1100px) {\n  body {\n    flex-direction: column;\n    align-items: center;\n  }\n  .sidebar {\n    width: 100vw;\n  }\n  .highlight {\n    width: 100%;\n  }\n}","/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}","body {\r\n  color: #fff;\r\n  background-color: #100E1D;\r\n}\r\n\r\n.sidebar {\r\n  background-color: #1E213A;\r\n}","@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700\");\r\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\r\n\r\nbody,\r\n* {\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n}\r\n",".sidebar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n\r\n  width: 30vw;\r\n\r\n  &__location {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 2em;\r\n  }\r\n\r\n  &__today {\r\n    flex-grow: 1;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n\r\n    align-items: center;\r\n  }\r\n\r\n  &__info {\r\n    color: #88869d;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    margin: 2em;\r\n  }\r\n}\r\n\r\n.location {\r\n  &__btn {\r\n    border: none;\r\n    color: #fff;\r\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n\r\n    &--search {\r\n      width: 161px;\r\n      height: 40px;\r\n\r\n      background: #6e707a;\r\n    }\r\n\r\n    &--crosshair {\r\n      min-width: 40px;\r\n      min-height: 40px;\r\n      line-height: 100%;\r\n\r\n      background: rgba(255, 255, 255, 0.2);\r\n      border-radius: 50%;\r\n    }\r\n  }\r\n}\r\n\r\n.today {\r\n  &__icon {\r\n    text-align: center;\r\n    width: 100%;\r\n    // z-index: 0;\r\n    // position: relative;\r\n\r\n    // &::before {\r\n    //   content: \"\";\r\n    //   background: no-repeat center url(\"../../src/asset/Cloud-background.png\");\r\n    //   background-size: contain;\r\n\r\n    //   position: absolute;\r\n    //   left: 0;\r\n    //   width: 100%;\r\n    //   height: 100%;\r\n    //   opacity: 0.8;\r\n    //   z-index: -1;\r\n    // }\r\n\r\n    img {\r\n      max-width: 100%;\r\n      max-height: 100%;\r\n    }\r\n  }\r\n\r\n  &__temp {\r\n    font-size: 144px;\r\n  }\r\n\r\n  &__cond {\r\n    font-size: 36px;\r\n    color: #a09fb1;\r\n  }\r\n\r\n  .temp {\r\n    &__unit {\r\n      font-size: 48px;\r\n      color: #a09fb1;\r\n    }\r\n  }\r\n}\r\n\r\n.temp {\r\n  &__unit {\r\n    &::before {\r\n      content: \"°\";\r\n    }\r\n  }\r\n}\r\n\r\n.info {\r\n  &__date {\r\n    &::before {\r\n      content: \"Today • \";\r\n    }\r\n  }\r\n\r\n  &__name {\r\n    display: block;\r\n    margin-top: 1em;\r\n\r\n    &::before {\r\n      content: \"location_on \";\r\n      font-family: \"Material Icons\";\r\n      line-height: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n.search {\r\n  padding: 2em;\r\n\r\n  &__cancel {\r\n    text-align: right;\r\n  }\r\n\r\n  &__input {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 1.5em;\r\n\r\n    margin: 2em 0;\r\n\r\n    .input__city {\r\n      display: flex;\r\n      align-items: center;\r\n      flex-grow: 1;\r\n      gap: 0.5em;\r\n\r\n      padding: 0 1em;\r\n      outline: 1px solid #ffffff;\r\n\r\n      input {\r\n        background: transparent;\r\n        width: 100%;\r\n      }\r\n    }\r\n\r\n    .input__submit {\r\n      button {\r\n        padding: 1em;\r\n        background-color: #3c47e9;\r\n      }\r\n    }\r\n\r\n    input,\r\n    button {\r\n      border: none;\r\n      outline: none;\r\n      margin: 0;\r\n      color: white;\r\n    }\r\n  }\r\n\r\n  &__result {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1em;\r\n\r\n    > * {\r\n      padding: 1em;\r\n\r\n      &:hover {\r\n        outline: 1px solid white;\r\n      }\r\n    }\r\n  }\r\n}\r\n","body {\r\n  height: 100vh;\r\n  display: flex;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  gap: 1em;\r\n\r\n  width: 70vw;\r\n  padding: 5% 10%;\r\n\r\n  &__units {\r\n    align-self: end;\r\n  }\r\n\r\n  &__forecast {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 1em;\r\n    // align-self: space-between;\r\n  }\r\n}\r\n\r\n.units {\r\n  &__btn {\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-left: 0.5em;\r\n\r\n    border: none;\r\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n    background: rgba(255, 255, 255, 0.2);\r\n    border-radius: 50%;\r\n\r\n    &::before {\r\n      content: \"°\";\r\n    }\r\n\r\n    &--active {\r\n      background: #e7e7eb;\r\n      color: #110e3c;\r\n    }\r\n    &:hover {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n\r\n.forecast {\r\n  &__day {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    width: 120px;\r\n    height: 177px;\r\n\r\n    background: #1e213a;\r\n  }\r\n}\r\n\r\n.day {\r\n  &__date {\r\n    padding-top: 1em;\r\n  }\r\n\r\n  &__icon {\r\n    max-width: 80px;\r\n    max-height: 80px;\r\n\r\n    // background-color: #fff;\r\n\r\n    img {\r\n      max-height: 100%;\r\n      max-width: 100%;\r\n      // object-fit: contain;\r\n    }\r\n    // padding: 1em;\r\n  }\r\n\r\n  &__temp {\r\n    align-self: stretch;\r\n    padding-bottom: 1em;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    justify-content: space-evenly;\r\n\r\n    .temp--min {\r\n      color: #a09fb1;\r\n    }\r\n  }\r\n}\r\n\r\n.content {\r\n  &__title {\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    color: #e7e7eb;\r\n    padding: 0.4em 0 0.8em;\r\n  }\r\n\r\n  &__highlight {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 1em;\r\n  }\r\n}\r\n\r\n.highlight {\r\n  width: 48.7%;\r\n  text-align: center;\r\n  background: #1e213a;\r\n\r\n  padding: 1.5em 0 1.5em;\r\n\r\n  &__value {\r\n    font-weight: 700;\r\n    font-size: 64px;\r\n    padding: 1rem 0;\r\n\r\n    &::after {\r\n      font-weight: 500;\r\n      font-size: 36px;\r\n    }\r\n\r\n    &--wind::after {\r\n      content: \"mps\";\r\n    }\r\n\r\n    &--humid::after {\r\n      content: \"%\";\r\n    }\r\n\r\n    &--vis::after {\r\n      content: \"m\";\r\n    }\r\n\r\n    &--air::after {\r\n      content: \"mb\";\r\n    }\r\n  }\r\n}\r\n\r\nprogress {\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 80%;\r\n  height: 0.5em;\r\n\r\n  &::-webkit-progress-bar {\r\n    background: #e7e7eb;\r\n    border-radius: 1em;\r\n  }\r\n\r\n  &[value]::-webkit-progress-value {\r\n    background: #ffec65;\r\n    border-radius: 1em;\r\n  }\r\n}\r\n\r\nfooter {\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  text-align: center;\r\n\r\n  > a {\r\n    color: inherit;\r\n    text-decoration: none;\r\n\r\n    &:first-of-type {\r\n      text-decoration: underline;\r\n      font-weight: bold;\r\n    }\r\n  }\r\n}\r\n","@media (max-width: 1100px) {\r\n  body {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .sidebar {\r\n    width: 100vw;\r\n  }\r\n\r\n  .highlight {\r\n    width: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFV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QUFDO2dCQUNwQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdHMvZGF0YS50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90cy91aS50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NTAwOzcwMCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMEUxRDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXG59XFxuXFxuYm9keSxcXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAzMHZ3O1xcbn1cXG4uc2lkZWJhcl9fbG9jYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMmVtO1xcbn1cXG4uc2lkZWJhcl9fdG9kYXkge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zaWRlYmFyX19pbmZvIHtcXG4gIGNvbG9yOiAjODg4NjlkO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyZW07XFxufVxcblxcbi5sb2NhdGlvbl9fYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuLmxvY2F0aW9uX19idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubG9jYXRpb25fX2J0bi0tc2VhcmNoIHtcXG4gIHdpZHRoOiAxNjFweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQ6ICM2ZTcwN2E7XFxufVxcbi5sb2NhdGlvbl9fYnRuLS1jcm9zc2hhaXIge1xcbiAgbWluLXdpZHRoOiA0MHB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udG9kYXlfX2ljb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50b2RheV9faWNvbiBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuLnRvZGF5X190ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMTQ0cHg7XFxufVxcbi50b2RheV9fY29uZCB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBjb2xvcjogI2EwOWZiMTtcXG59XFxuLnRvZGF5IC50ZW1wX191bml0IHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGNvbG9yOiAjYTA5ZmIxO1xcbn1cXG5cXG4udGVtcF9fdW5pdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLCsFxcXCI7XFxufVxcblxcbi5pbmZvX19kYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlRvZGF5IOKAoiBcXFwiO1xcbn1cXG4uaW5mb19fbmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuLmluZm9fX25hbWU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwibG9jYXRpb25fb24gXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnNcXFwiO1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgcGFkZGluZzogMmVtO1xcbn1cXG4uc2VhcmNoX19jYW5jZWwge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5zZWFyY2hfX2lucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEuNWVtO1xcbiAgbWFyZ2luOiAyZW0gMDtcXG59XFxuLnNlYXJjaF9faW5wdXQgLmlucHV0X19jaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZ2FwOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDAgMWVtO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICNmZmZmZmY7XFxufVxcbi5zZWFyY2hfX2lucHV0IC5pbnB1dF9fY2l0eSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2VhcmNoX19pbnB1dCAuaW5wdXRfX3N1Ym1pdCBidXR0b24ge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjNDdlOTtcXG59XFxuLnNlYXJjaF9faW5wdXQgaW5wdXQsXFxuLnNlYXJjaF9faW5wdXQgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5zZWFyY2hfX3Jlc3VsdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMWVtO1xcbn1cXG4uc2VhcmNoX19yZXN1bHQgPiAqIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLnNlYXJjaF9fcmVzdWx0ID4gKjpob3ZlciB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDFlbTtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgcGFkZGluZzogNSUgMTAlO1xcbn1cXG4ubWFpbl9fdW5pdHMge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG4ubWFpbl9fZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4udW5pdHNfX2J0biB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi51bml0c19fYnRuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIsKwXFxcIjtcXG59XFxuLnVuaXRzX19idG4tLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjZTdlN2ViO1xcbiAgY29sb3I6ICMxMTBlM2M7XFxufVxcbi51bml0c19fYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0X19kYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxNzdweDtcXG4gIGJhY2tncm91bmQ6ICMxZTIxM2E7XFxufVxcblxcbi5kYXlfX2RhdGUge1xcbiAgcGFkZGluZy10b3A6IDFlbTtcXG59XFxuLmRheV9faWNvbiB7XFxuICBtYXgtd2lkdGg6IDgwcHg7XFxuICBtYXgtaGVpZ2h0OiA4MHB4O1xcbn1cXG4uZGF5X19pY29uIGltZyB7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4uZGF5X190ZW1wIHtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4uZGF5X190ZW1wIC50ZW1wLS1taW4ge1xcbiAgY29sb3I6ICNhMDlmYjE7XFxufVxcblxcbi5jb250ZW50X190aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICNlN2U3ZWI7XFxuICBwYWRkaW5nOiAwLjRlbSAwIDAuOGVtO1xcbn1cXG4uY29udGVudF9faGlnaGxpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICB3aWR0aDogNDguNyU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMWUyMTNhO1xcbiAgcGFkZGluZzogMS41ZW0gMCAxLjVlbTtcXG59XFxuLmhpZ2hsaWdodF9fdmFsdWUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuLmhpZ2hsaWdodF9fdmFsdWU6OmFmdGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDM2cHg7XFxufVxcbi5oaWdobGlnaHRfX3ZhbHVlLS13aW5kOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwibXBzXFxcIjtcXG59XFxuLmhpZ2hsaWdodF9fdmFsdWUtLWh1bWlkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiJVxcXCI7XFxufVxcbi5oaWdobGlnaHRfX3ZhbHVlLS12aXM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJtXFxcIjtcXG59XFxuLmhpZ2hsaWdodF9fdmFsdWUtLWFpcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIm1iXFxcIjtcXG59XFxuXFxucHJvZ3Jlc3Mge1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDAuNWVtO1xcbn1cXG5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xcbiAgYmFja2dyb3VuZDogI2U3ZTdlYjtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcXG4gIGJhY2tncm91bmQ6ICNmZmVjNjU7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb290ZXIgPiBhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5mb290ZXIgPiBhOmZpcnN0LW9mLXR5cGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgYm9keSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuc2lkZWJhciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG4gIC5oaWdobGlnaHQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb2xvci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdHlwby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fc2lkZWJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbWFpbi5zY3NzXCIsXCJ3ZWJwYWNr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TTlWQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFTmlXRjtFTTlWQTtJQUNFLFlBQUE7RU5nV0Y7RU03VkE7SUFDRSxXQUFBO0VOK1ZGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANDAwOzUwMDs3MDBcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1xcXCIpO1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwRTFEO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbn1cXG5cXG5ib2R5LFxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDMwdnc7XFxufVxcbi5zaWRlYmFyX19sb2NhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAyZW07XFxufVxcbi5zaWRlYmFyX190b2RheSB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNpZGViYXJfX2luZm8ge1xcbiAgY29sb3I6ICM4ODg2OWQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDJlbTtcXG59XFxuXFxuLmxvY2F0aW9uX19idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG4ubG9jYXRpb25fX2J0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5sb2NhdGlvbl9fYnRuLS1zZWFyY2gge1xcbiAgd2lkdGg6IDE2MXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZDogIzZlNzA3YTtcXG59XFxuLmxvY2F0aW9uX19idG4tLWNyb3NzaGFpciB7XFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50b2RheV9faWNvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRvZGF5X19pY29uIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG4udG9kYXlfX3RlbXAge1xcbiAgZm9udC1zaXplOiAxNDRweDtcXG59XFxuLnRvZGF5X19jb25kIHtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGNvbG9yOiAjYTA5ZmIxO1xcbn1cXG4udG9kYXkgLnRlbXBfX3VuaXQge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgY29sb3I6ICNhMDlmYjE7XFxufVxcblxcbi50ZW1wX191bml0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIsKwXFxcIjtcXG59XFxuXFxuLmluZm9fX2RhdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiVG9kYXkg4oCiIFxcXCI7XFxufVxcbi5pbmZvX19uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG4uaW5mb19fbmFtZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJsb2NhdGlvbl9vbiBcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCI7XFxuICBsaW5lLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICBwYWRkaW5nOiAyZW07XFxufVxcbi5zZWFyY2hfX2NhbmNlbCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLnNlYXJjaF9faW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMS41ZW07XFxuICBtYXJnaW46IDJlbSAwO1xcbn1cXG4uc2VhcmNoX19pbnB1dCAuaW5wdXRfX2NpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBnYXA6IDAuNWVtO1xcbiAgcGFkZGluZzogMCAxZW07XFxuICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZmZmZjtcXG59XFxuLnNlYXJjaF9faW5wdXQgLmlucHV0X19jaXR5IGlucHV0IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zZWFyY2hfX2lucHV0IC5pbnB1dF9fc3VibWl0IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0N2U5O1xcbn1cXG4uc2VhcmNoX19pbnB1dCBpbnB1dCxcXG4uc2VhcmNoX19pbnB1dCBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnNlYXJjaF9fcmVzdWx0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxZW07XFxufVxcbi5zZWFyY2hfX3Jlc3VsdCA+ICoge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG4uc2VhcmNoX19yZXN1bHQgPiAqOmhvdmVyIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogMWVtO1xcbiAgd2lkdGg6IDcwdnc7XFxuICBwYWRkaW5nOiA1JSAxMCU7XFxufVxcbi5tYWluX191bml0cyB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcbi5tYWluX19mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi51bml0c19fYnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLnVuaXRzX19idG46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiwrBcXFwiO1xcbn1cXG4udW5pdHNfX2J0bi0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNlN2U3ZWI7XFxuICBjb2xvcjogIzExMGUzYztcXG59XFxuLnVuaXRzX19idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9yZWNhc3RfX2RheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDE3N3B4O1xcbiAgYmFja2dyb3VuZDogIzFlMjEzYTtcXG59XFxuXFxuLmRheV9fZGF0ZSB7XFxuICBwYWRkaW5nLXRvcDogMWVtO1xcbn1cXG4uZGF5X19pY29uIHtcXG4gIG1heC13aWR0aDogODBweDtcXG4gIG1heC1oZWlnaHQ6IDgwcHg7XFxufVxcbi5kYXlfX2ljb24gaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5kYXlfX3RlbXAge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5kYXlfX3RlbXAgLnRlbXAtLW1pbiB7XFxuICBjb2xvcjogI2EwOWZiMTtcXG59XFxuXFxuLmNvbnRlbnRfX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogI2U3ZTdlYjtcXG4gIHBhZGRpbmc6IDAuNGVtIDAgMC44ZW07XFxufVxcbi5jb250ZW50X19oaWdobGlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIHdpZHRoOiA0OC43JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxZTIxM2E7XFxuICBwYWRkaW5nOiAxLjVlbSAwIDEuNWVtO1xcbn1cXG4uaGlnaGxpZ2h0X192YWx1ZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiA2NHB4O1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uaGlnaGxpZ2h0X192YWx1ZTo6YWZ0ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuLmhpZ2hsaWdodF9fdmFsdWUtLXdpbmQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJtcHNcXFwiO1xcbn1cXG4uaGlnaGxpZ2h0X192YWx1ZS0taHVtaWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIlXFxcIjtcXG59XFxuLmhpZ2hsaWdodF9fdmFsdWUtLXZpczo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIm1cXFwiO1xcbn1cXG4uaGlnaGxpZ2h0X192YWx1ZS0tYWlyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwibWJcXFwiO1xcbn1cXG5cXG5wcm9ncmVzcyB7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMC41ZW07XFxufVxcbnByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLWJhciB7XFxuICBiYWNrZ3JvdW5kOiAjZTdlN2ViO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xcbiAgYmFja2dyb3VuZDogI2ZmZWM2NTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvb3RlciA+IGEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmZvb3RlciA+IGE6Zmlyc3Qtb2YtdHlwZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5zaWRlYmFyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcbiAgLmhpZ2hsaWdodCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cIixcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XCIsXCJib2R5IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMEUxRDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXHJcXG59XCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANDAwOzUwMDs3MDBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1xcXCIpO1xcclxcblxcclxcbmJvZHksXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXCIsXCIuc2lkZWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcblxcclxcbiAgJl9fbG9jYXRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbjogMmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdG9kYXkge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW5mbyB7XFxyXFxuICAgIGNvbG9yOiAjODg4NjlkO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbiB7XFxyXFxuICAmX19idG4ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tc2VhcmNoIHtcXHJcXG4gICAgICB3aWR0aDogMTYxcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcblxcclxcbiAgICAgIGJhY2tncm91bmQ6ICM2ZTcwN2E7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tY3Jvc3NoYWlyIHtcXHJcXG4gICAgICBtaW4td2lkdGg6IDQwcHg7XFxyXFxuICAgICAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50b2RheSB7XFxyXFxuICAmX19pY29uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLy8gei1pbmRleDogMDtcXHJcXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAvLyAmOjpiZWZvcmUge1xcclxcbiAgICAvLyAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAvLyAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgdXJsKFxcXCIuLi8uLi9zcmMvYXNzZXQvQ2xvdWQtYmFja2dyb3VuZC5wbmdcXFwiKTtcXHJcXG4gICAgLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuXFxyXFxuICAgIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAvLyAgIGxlZnQ6IDA7XFxyXFxuICAgIC8vICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8vICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAvLyAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgLy8gICB6LWluZGV4OiAtMTtcXHJcXG4gICAgLy8gfVxcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190ZW1wIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNDRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2NvbmQge1xcclxcbiAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICAgIGNvbG9yOiAjYTA5ZmIxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRlbXAge1xcclxcbiAgICAmX191bml0IHtcXHJcXG4gICAgICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICAgICAgY29sb3I6ICNhMDlmYjE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAge1xcclxcbiAgJl9fdW5pdCB7XFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgY29udGVudDogXFxcIsKwXFxcIjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyB7XFxyXFxuICAmX19kYXRlIHtcXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiVG9kYXkg4oCiIFxcXCI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX25hbWUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcclxcblxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCJsb2NhdGlvbl9vbiBcXFwiO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTWF0ZXJpYWwgSWNvbnNcXFwiO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gge1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcblxcclxcbiAgJl9fY2FuY2VsIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAxLjVlbTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAyZW0gMDtcXHJcXG5cXHJcXG4gICAgLmlucHV0X19jaXR5IHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgIGdhcDogMC41ZW07XFxyXFxuXFxyXFxuICAgICAgcGFkZGluZzogMCAxZW07XFxyXFxuICAgICAgb3V0bGluZTogMXB4IHNvbGlkICNmZmZmZmY7XFxyXFxuXFxyXFxuICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmlucHV0X19zdWJtaXQge1xcclxcbiAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0N2U5O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dCxcXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19yZXN1bHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG5cXHJcXG4gICAgPiAqIHtcXHJcXG4gICAgICBwYWRkaW5nOiAxZW07XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGdhcDogMWVtO1xcclxcblxcclxcbiAgd2lkdGg6IDcwdnc7XFxyXFxuICBwYWRkaW5nOiA1JSAxMCU7XFxyXFxuXFxyXFxuICAmX191bml0cyB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ZvcmVjYXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogMWVtO1xcclxcbiAgICAvLyBhbGlnbi1zZWxmOiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udW5pdHMge1xcclxcbiAgJl9fYnRuIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcclxcblxcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCLCsFxcXCI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tYWN0aXZlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjZTdlN2ViO1xcclxcbiAgICAgIGNvbG9yOiAjMTEwZTNjO1xcclxcbiAgICB9XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3Qge1xcclxcbiAgJl9fZGF5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogMTc3cHg7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQ6ICMxZTIxM2E7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5kYXkge1xcclxcbiAgJl9fZGF0ZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pY29uIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA4MHB4O1xcclxcblxcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgIC8vIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuICAgIH1cXHJcXG4gICAgLy8gcGFkZGluZzogMWVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdGVtcCB7XFxyXFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFxyXFxuICAgIC50ZW1wLS1taW4ge1xcclxcbiAgICAgIGNvbG9yOiAjYTA5ZmIxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBjb2xvcjogI2U3ZTdlYjtcXHJcXG4gICAgcGFkZGluZzogMC40ZW0gMCAwLjhlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2hpZ2hsaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCB7XFxyXFxuICB3aWR0aDogNDguNyU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMWUyMTNhO1xcclxcblxcclxcbiAgcGFkZGluZzogMS41ZW0gMCAxLjVlbTtcXHJcXG5cXHJcXG4gICZfX3ZhbHVlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuXFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS13aW5kOjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogXFxcIm1wc1xcXCI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0taHVtaWQ6OmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiJVxcXCI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdmlzOjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogXFxcIm1cXFwiO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLWFpcjo6YWZ0ZXIge1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCJtYlxcXCI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDAuNWVtO1xcclxcblxcclxcbiAgJjo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTdlN2ViO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmVjNjU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICA+IGEge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2lkZWJhciB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oaWdobGlnaHQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcclxuICB1cGRhdGVDaXR5TmFtZSxcclxuICB1cGRhdGVEYXRlLFxyXG4gIHVwZGF0ZVRlbXBlcmF0dXJlLFxyXG4gIHVwZGF0ZUNvbmRpdGlvbixcclxuICB1cGRhdGVJY29uLFxyXG4gIHVwZGF0ZVdpbmRTdGF0dXMsXHJcbiAgdXBkYXRlV2luZERlZ3JlZSxcclxuICB1cGRhdGVIdW1pZGl0eSxcclxuICB1cGRhdGVWaXNpYmlsaXR5LFxyXG4gIHVwZGF0ZVByZXNzdXJlLFxyXG4gIGdldEZvcmVjYXN0RGF5cyxcclxuICB1cGRhdGVGb3JlY2FzdERhdGUsXHJcbiAgdXBkYXRlTWluVGVtcGVyYXR1cmUsXHJcbiAgdXBkYXRlTWF4VGVtcGVyYXR1cmUsXHJcbiAgdXBkYXRlRm9yZWNhc3RJY29uLFxyXG59IGZyb20gXCIuL3VpXCI7XHJcblxyXG5pbnRlcmZhY2UgV2VhdGhlciB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRhdGVUaW1lOiBzdHJpbmc7XHJcbiAgdGVtcDogbnVtYmVyO1xyXG4gIGNvbmRpdGlvbjogc3RyaW5nO1xyXG4gIGljb246IHN0cmluZztcclxuICB3aW5kOiB7XHJcbiAgICBzcGVlZDogc3RyaW5nO1xyXG4gICAgZGVnOiBudW1iZXI7XHJcbiAgfTtcclxuICBodW1pZGl0eTogc3RyaW5nO1xyXG4gIHZpc2liaWxpdHk6IHN0cmluZztcclxuICBwcmVzc3VyZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRm9yZWNhc3Qge1xyXG4gIGRhdGVUaW1lOiBzdHJpbmc7XHJcbiAgaWNvbjogc3RyaW5nO1xyXG4gIHRlbXBfbWluOiBzdHJpbmc7XHJcbiAgdGVtcF9tYXg6IHN0cmluZztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5TmFtZTogc3RyaW5nLCB1c2VNZXRyaWM6IGJvb2xlYW4pIHtcclxuICBjb25zdCB3ZWF0aGVyVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHtwcm9jZXNzLmVudi5BUElfS0VZfSZ1bml0cz0ke3VzZU1ldHJpYyA/IFwibWV0cmljXCIgOiBcImltcGVyaWFsXCJ9YDtcclxuICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyVXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGNpdHlOYW1lOiBzdHJpbmcsIHVzZU1ldHJpYzogYm9vbGVhbikge1xyXG4gIGNvbnN0IGZvcmVjYXN0VXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7cHJvY2Vzcy5lbnYuQVBJX0tFWX0mdW5pdHM9JHt1c2VNZXRyaWMgPyBcIm1ldHJpY1wiIDogXCJpbXBlcmlhbFwifWA7XHJcbiAgY29uc3QgZm9yZWNhc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoKGZvcmVjYXN0VXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG4gIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IGZvcmVjYXN0UmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiBmb3JlY2FzdERhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGRhdGUudG9EYXRlU3RyaW5nKCkuc2xpY2UoMCwgLTUpLnJlcGxhY2UoXCIgXCIsIFwiLCBcIik7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXIoY2l0eU5hbWU6IHN0cmluZywgdXNlTWV0cmljOmJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHlOYW1lLCB1c2VNZXRyaWMpO1xyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyOiBXZWF0aGVyID0ge1xyXG4gICAgbmFtZTogd2VhdGhlckRhdGEubmFtZSxcclxuICAgIGRhdGVUaW1lOiBzZXREYXRlKG5ldyBEYXRlKHdlYXRoZXJEYXRhLmR0ICogMTAwMCkpLFxyXG4gICAgdGVtcDogTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApLFxyXG4gICAgY29uZGl0aW9uOiB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW4sXHJcbiAgICBpY29uOiB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb24sXHJcbiAgICB3aW5kOiB7XHJcbiAgICAgIHNwZWVkOiB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkLFxyXG4gICAgICBkZWc6IHdlYXRoZXJEYXRhLndpbmQuZGVnLFxyXG4gICAgfSxcclxuICAgIGh1bWlkaXR5OiB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5LFxyXG4gICAgdmlzaWJpbGl0eTogd2VhdGhlckRhdGEudmlzaWJpbGl0eSxcclxuICAgIHByZXNzdXJlOiB3ZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlLFxyXG4gIH07XHJcbiAgdXBkYXRlV2VhdGhlclVJKGN1cnJlbnRXZWF0aGVyKTtcclxuXHJcbiAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgZ2V0Rm9yZWNhc3QoY2l0eU5hbWUsIHVzZU1ldHJpYyk7XHJcbiAgY29uc3QgY3VycmVudEZvcmVjYXN0OiBGb3JlY2FzdFtdID0gZm9yZWNhc3REYXRhLmxpc3RcclxuICAgIC5maWx0ZXIoKGxpc3Q6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gaW5kZXggJSA4ID09PSA1KVxyXG4gICAgLm1hcCgobGlzdDogYW55KSA9PiAoe1xyXG4gICAgICBkYXRlVGltZTogc2V0RGF0ZShuZXcgRGF0ZShsaXN0LmR0ICogMTAwMCkpLFxyXG4gICAgICBpY29uOiBsaXN0LndlYXRoZXJbMF0uaWNvbixcclxuICAgICAgdGVtcF9taW46IE1hdGgucm91bmQobGlzdC5tYWluLnRlbXBfbWluKSxcclxuICAgICAgdGVtcF9tYXg6IE1hdGgucm91bmQobGlzdC5tYWluLnRlbXBfbWF4KSxcclxuICAgIH0pKTtcclxuICB1cGRhdGVGb3JlY2FzdFVJKGN1cnJlbnRGb3JlY2FzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJVSShjdXJyZW50V2VhdGhlcjogV2VhdGhlcikge1xyXG4gIHVwZGF0ZUNpdHlOYW1lKGN1cnJlbnRXZWF0aGVyLm5hbWUpO1xyXG4gIHVwZGF0ZURhdGUoY3VycmVudFdlYXRoZXIuZGF0ZVRpbWUpO1xyXG4gIHVwZGF0ZVRlbXBlcmF0dXJlKGN1cnJlbnRXZWF0aGVyLnRlbXAudG9TdHJpbmcoKSk7XHJcbiAgdXBkYXRlQ29uZGl0aW9uKGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbik7XHJcbiAgdXBkYXRlSWNvbihjdXJyZW50V2VhdGhlci5pY29uKTtcclxuICB1cGRhdGVXaW5kU3RhdHVzKGN1cnJlbnRXZWF0aGVyLndpbmQuc3BlZWQpO1xyXG4gIHVwZGF0ZVdpbmREZWdyZWUoY3VycmVudFdlYXRoZXIud2luZC5kZWcpO1xyXG4gIHVwZGF0ZUh1bWlkaXR5KGN1cnJlbnRXZWF0aGVyLmh1bWlkaXR5KTtcclxuICB1cGRhdGVWaXNpYmlsaXR5KGN1cnJlbnRXZWF0aGVyLnZpc2liaWxpdHkpO1xyXG4gIHVwZGF0ZVByZXNzdXJlKGN1cnJlbnRXZWF0aGVyLnByZXNzdXJlKTtcclxufVxyXG5mdW5jdGlvbiB1cGRhdGVGb3JlY2FzdFVJKGN1cnJlbnRGb3JlY2FzdDogRm9yZWNhc3RbXSkge1xyXG4gIGNvbnN0IGZvcmVjYXN0RGF5cyA9IGdldEZvcmVjYXN0RGF5cygpO1xyXG4gIGZvcmVjYXN0RGF5cy5mb3JFYWNoKChmb3JlY2FzdERheSwgaW5kZXgpID0+IHtcclxuICAgIHVwZGF0ZUZvcmVjYXN0RGF0ZShmb3JlY2FzdERheSwgY3VycmVudEZvcmVjYXN0W2luZGV4XS5kYXRlVGltZSk7XHJcbiAgICB1cGRhdGVNaW5UZW1wZXJhdHVyZShmb3JlY2FzdERheSwgY3VycmVudEZvcmVjYXN0W2luZGV4XS50ZW1wX21pbik7XHJcbiAgICB1cGRhdGVNYXhUZW1wZXJhdHVyZShmb3JlY2FzdERheSwgY3VycmVudEZvcmVjYXN0W2luZGV4XS50ZW1wX21heCk7XHJcbiAgICB1cGRhdGVGb3JlY2FzdEljb24oZm9yZWNhc3REYXksIGN1cnJlbnRGb3JlY2FzdFtpbmRleF0uaWNvbik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHVwZGF0ZVdlYXRoZXIgfTtcclxuIiwiZnVuY3Rpb24gdXBkYXRlQ2l0eU5hbWUoY2l0eU5hbWU6IHN0cmluZykge1xyXG4gIGNvbnN0IF9jaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb19fbmFtZVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICBfY2l0eU5hbWUuaW5uZXJUZXh0ID0gY2l0eU5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZURhdGUoZGF0ZVRpbWU6IHN0cmluZykge1xyXG4gIGNvbnN0IF9kYXRlVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb19fZGF0ZVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICBfZGF0ZVRpbWUuaW5uZXJUZXh0ID0gZGF0ZVRpbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlOiBzdHJpbmcpIHtcclxuICBjb25zdCBfdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBfX3ZhbHVlXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gIF90ZW1wZXJhdHVyZS5pbm5lclRleHQgPSB0ZW1wZXJhdHVyZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ29uZGl0aW9uKGNvbmRpdGlvbjogc3RyaW5nKSB7XHJcbiAgY29uc3QgX2NvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlfX2NvbmRcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgX2NvbmRpdGlvbi5pbm5lclRleHQgPSBjb25kaXRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUljb24oaWNvbjogc3RyaW5nKSB7XHJcbiAgY29uc3QgX2ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5X19pY29uLS1pbWdcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICBfaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUA0eC5wbmdgO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVXaW5kU3RhdHVzKHdpbmRTcGVlZDogc3RyaW5nKSB7XHJcbiAgY29uc3QgX3dpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5oaWdobGlnaHRfX3ZhbHVlLS13aW5kXCJcclxuICApIGFzIEhUTUxFbGVtZW50O1xyXG4gIF93aW5kU3BlZWQuaW5uZXJUZXh0ID0gd2luZFNwZWVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVXaW5kRGVncmVlKHdpbmREZWdyZWU6IG51bWJlcikge1xyXG4gIGNvbnN0IGNhcmRpbmFsUG9pbnQgPSBbXHJcbiAgICBcIk5cIixcclxuICAgIFwiTk5FXCIsXHJcbiAgICBcIk5FXCIsXHJcbiAgICBcIkVORVwiLFxyXG4gICAgXCJFXCIsXHJcbiAgICBcIkVTRVwiLFxyXG4gICAgXCJTRVwiLFxyXG4gICAgXCJTU0VcIixcclxuICAgIFwiU1wiLFxyXG4gICAgXCJTU1dcIixcclxuICAgIFwiU1dcIixcclxuICAgIFwiV1NXXCIsXHJcbiAgICBcIldcIixcclxuICAgIFwiV05XXCIsXHJcbiAgICBcIk5XXCIsXHJcbiAgICBcIk5OV1wiLFxyXG4gIF07XHJcbiAgY29uc3QgZGlyZWN0aW9uID0gTWF0aC5yb3VuZCh3aW5kRGVncmVlIC8gKDM2MCAvIGNhcmRpbmFsUG9pbnQubGVuZ3RoKSk7XHJcbiAgY29uc3QgX3dpbmREZWdyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpcl9fbmFtZVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICBfd2luZERlZ3JlZS5pbm5lclRleHQgPSBjYXJkaW5hbFBvaW50W2RpcmVjdGlvbiAlIGNhcmRpbmFsUG9pbnQubGVuZ3RoXTtcclxuXHJcbiAgY29uc3QgZGlySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlyX192YWx1ZVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICBkaXJJY29uLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHt3aW5kRGVncmVlfWRlZylgO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVIdW1pZGl0eShodW1pZGl0eTogc3RyaW5nKSB7XHJcbiAgY29uc3QgX2h1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmhpZ2hsaWdodF9fdmFsdWUtLWh1bWlkXCJcclxuICApIGFzIEhUTUxFbGVtZW50O1xyXG4gIF9odW1pZGl0eS5pbm5lclRleHQgPSBodW1pZGl0eTtcclxuXHJcbiAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuaGlnaGxpZ2h0LS1odW1pZF9fYmFyXCJcclxuICApIGFzIEhUTUxFbGVtZW50O1xyXG4gIHByb2dyZXNzQmFyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGh1bWlkaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVmlzaWJpbGl0eSh2aXNpYmlsaXR5OiBzdHJpbmcpIHtcclxuICBjb25zdCBfdmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5oaWdobGlnaHRfX3ZhbHVlLS12aXNcIlxyXG4gICkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgX3Zpc2liaWxpdHkuaW5uZXJUZXh0ID0gdmlzaWJpbGl0eTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUHJlc3N1cmUocHJlc3N1cmU6IHN0cmluZykge1xyXG4gIGNvbnN0IF9wcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5oaWdobGlnaHRfX3ZhbHVlLS1haXJcIlxyXG4gICkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgX3ByZXNzdXJlLmlubmVyVGV4dCA9IHByZXNzdXJlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JlY2FzdERheXMoKSB7XHJcbiAgY29uc3QgZm9yZWNhc3REYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdF9fZGF5XCIpO1xyXG4gIHJldHVybiBmb3JlY2FzdERheXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0RGF0ZShmb3JlY2FzdEJsb2NrOiBFbGVtZW50LCBkYXRlVGltZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgX2RhdGVUaW1lID0gZm9yZWNhc3RCbG9jay5xdWVyeVNlbGVjdG9yKFwiLmRheV9fZGF0ZVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICBfZGF0ZVRpbWUuaW5uZXJUZXh0ID0gZGF0ZVRpbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU1pblRlbXBlcmF0dXJlKGZvcmVjYXN0QmxvY2s6IEVsZW1lbnQsIHRlbXBlcmF0dXJlOiBzdHJpbmcpIHtcclxuICBjb25zdCBfbWluVGVtcGVyYXR1cmUgPSBmb3JlY2FzdEJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCIudGVtcF9fdmFsdWUtLW1pblwiKSBhcyBIVE1MRWxlbWVudDtcclxuICBfbWluVGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gdGVtcGVyYXR1cmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU1heFRlbXBlcmF0dXJlKGZvcmVjYXN0QmxvY2s6IEVsZW1lbnQsIHRlbXBlcmF0dXJlOiBzdHJpbmcpIHtcclxuICBjb25zdCBfdGVtcGVyYXR1cmUgPSBmb3JlY2FzdEJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCIudGVtcF9fdmFsdWUtLW1heFwiKSBhcyBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgX3RlbXBlcmF0dXJlLmlubmVyVGV4dCA9IHRlbXBlcmF0dXJlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVGb3JlY2FzdEljb24oZm9yZWNhc3RCbG9jazogRWxlbWVudCwgaWNvbjogc3RyaW5nKSB7XHJcbiAgY29uc3QgX2ljb24gPSBmb3JlY2FzdEJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCIuZGF5X19pY29uLS1pbWdcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICBfaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdgO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHVwZGF0ZUNpdHlOYW1lLFxyXG4gIHVwZGF0ZURhdGUsXHJcbiAgdXBkYXRlVGVtcGVyYXR1cmUsXHJcbiAgdXBkYXRlQ29uZGl0aW9uLFxyXG4gIHVwZGF0ZUljb24sXHJcbiAgdXBkYXRlV2luZFN0YXR1cyxcclxuICB1cGRhdGVXaW5kRGVncmVlLFxyXG4gIHVwZGF0ZUh1bWlkaXR5LFxyXG4gIHVwZGF0ZVZpc2liaWxpdHksXHJcbiAgdXBkYXRlUHJlc3N1cmUsXHJcbiAgZ2V0Rm9yZWNhc3REYXlzLFxyXG4gIHVwZGF0ZUZvcmVjYXN0RGF0ZSxcclxuICB1cGRhdGVNaW5UZW1wZXJhdHVyZSxcclxuICB1cGRhdGVNYXhUZW1wZXJhdHVyZSxcclxuICB1cGRhdGVGb3JlY2FzdEljb24sXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3Njc3Mvc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVXZWF0aGVyIH0gZnJvbSBcIi4vZGF0YVwiO1xyXG5cclxubGV0IGNpdHkgPSBcIkJpZW4gSG9hXCI7XHJcbnVwZGF0ZVdlYXRoZXIoY2l0eSk7XHJcbi8vIHVwZGF0ZUZvcmVjYXN0KGNpdHkpO1xyXG5cclxuY29uc3QgdW5pdHNCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51bml0c19fYnRuXCIpO1xyXG51bml0c0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvLyBXaGVuIGNsaWNrIHRvIGEgYnV0dG9uIHRoYXQgaXMgbm90IGFjdGl2ZVxyXG4gICAgaWYgKCFidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwidW5pdHNfX2J0bi0tYWN0aXZlXCIpKSB7XHJcbiAgICAgIC8vIFRvZ2dsZSBjbGFzc2xpc3RcclxuICAgICAgdW5pdHNCdXR0b25zLmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ1bml0c19fYnRuLS1hY3RpdmVcIikpO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIHdlYXRoZXJcclxuICAgICAgY29uc3QgdXNlTWV0cmljID0gYnV0dG9uLmlubmVySFRNTCA9PSBcIkNcIjtcclxuICAgICAgdXBkYXRlV2VhdGhlcihjaXR5LCB1c2VNZXRyaWMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIFVwZGF0ZSB1bml0XHJcbiAgICAgICAgY29uc3QgdW5pdHNWYWx1ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXBfX3VuaXRcIik7XHJcbiAgICAgICAgdW5pdHNWYWx1ZXMuZm9yRWFjaCgodW5pdCkgPT4ge1xyXG4gICAgICAgICAgdW5pdC5pbm5lckhUTUwgPSBidXR0b24uaW5uZXJIVE1MO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==