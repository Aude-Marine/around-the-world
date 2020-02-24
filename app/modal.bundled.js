(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal"],{

/***/ "./app/assets/scripts/modules/Modal.js":
/*!*********************************************!*\
  !*** ./app/assets/scripts/modules/Modal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Modal {\n  constructor() {\n    this.injectHTML()\n    this.modal = document.querySelector(\".modal\")\n    this.closeIcon = document.querySelector(\".modal__close\")\n    //this.openModalButtons = document.querySelectorAll(\".open-modal\")\n    this.events()\n  }\n\n  events() {\n    // listen for open click\n    //this.openModalButtons.forEach(el => el.addEventListener(\"click\", e => this.openTheModal(e)))\n\n    // listen for close click\n    this.closeIcon.addEventListener(\"click\", () => this.closeTheModal())\n\n    // pushes any key\n    document.addEventListener(\"keyup\", e => this.keyPressHandler(e))\n  }\n\n  keyPressHandler(e) {\n    if (e.keyCode == 27) {\n      this.closeTheModal()\n    }\n  }\n\n  openTheModal(/*e*/) {\n    //e.preventDefault() because it's handled in the main js file\n    this.modal.classList.add(\"modal--is-visible\")\n  }\n\n  closeTheModal() {\n    this.modal.classList.remove(\"modal--is-visible\")\n  }\n\n  injectHTML() {\n    document.body.insertAdjacentHTML('beforeend', `\n    <div class=\"modal\">\n    <div class=\"modal__inner\">\n      <h2 class=\"section-title section-title--blue section-title--less-margin\"><img src=\"assets/images/icons/mail.svg\" class=\"section-title__icon\"> Get in <strong>Touch</strong></h2>\n      <div class=\"wrapper wrapper--narrow\">\n        <p class=\"modal__description\">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n      </div>\n\n      <div class=\"social-icons\">\n        <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/facebook.svg\" alt=\"Facebook\"></a>\n        <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/twitter.svg\" alt=\"Twitter\"></a>\n        <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/instagram.svg\" alt=\"Instagram\"></a>\n        <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/youtube.svg\" alt=\"YouTube\"></a>\n      </div>\n    </div>\n    <div class=\"modal__close\">X</div>\n  </div>\n    `)\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Modal.js?");

/***/ })

}]);