"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./components/MyHead.js
var MyHead = __webpack_require__(364);
// EXTERNAL MODULE: ./components/Navbar.js
var Navbar = __webpack_require__(10);
// EXTERNAL MODULE: ./styles/dashboard.module.css
var dashboard_module = __webpack_require__(816);
var dashboard_module_default = /*#__PURE__*/__webpack_require__.n(dashboard_module);
;// CONCATENATED MODULE: external "react-multi-carousel"
const external_react_multi_carousel_namespaceObject = require("react-multi-carousel");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_namespaceObject);
;// CONCATENATED MODULE: external "react-rating-stars-component"
const external_react_rating_stars_component_namespaceObject = require("react-rating-stars-component");
var external_react_rating_stars_component_default = /*#__PURE__*/__webpack_require__.n(external_react_rating_stars_component_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/dist/client/link.js
var client_link = __webpack_require__(418);
;// CONCATENATED MODULE: ./pages/dashboard/index.js










const getServerSideProps = async ()=>{
    const res = await fetch("http://52.88.23.115:4000/api/user/dashboard?user_id=61968d32bdf5460035a89d11");
    const data = await res.json();
    return {
        props: {
            lists: data
        }
    };
};
const index = ({ lists  })=>{
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 4,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {
                max: 500,
                min: 0
            },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MyHead/* default */.Z, {
                title: 'Dashboard'
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: `${(dashboard_module_default()).sliderSection} p-3`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "text-light",
                            children: "Recent Renters"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_multi_carousel_default()), {
                            swipeable: true,
                            draggable: true,
                            infinite: true,
                            arrows: false,
                            itemClass: "carousel-item-padding-40-px",
                            autoPlay: true,
                            autoPlaySpeed: 5000,
                            minimumTouchDrag: 20,
                            responsive: responsive,
                            className: "mt-3",
                            children: lists.recentUsers.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (dashboard_module_default()).profileSection,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (dashboard_module_default()).profileCard,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (dashboard_module_default()).profileCard__imageBox,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: (dashboard_module_default()).profileCard__image,
                                                    src: item.picture_url || 'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png'
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (dashboard_module_default()).profileCard__info,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: (dashboard_module_default()).profileCard__name,
                                                        children: item.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: (dashboard_module_default()).profileCard__userType,
                                                        children: item.user_type
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_rating_stars_component_default()), {
                                                        count: 5,
                                                        size: 24,
                                                        edit: false,
                                                        value: item.userRating,
                                                        isHalf: true,
                                                        emptyIcon: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-star"
                                                        }),
                                                        halfIcon: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-star-half-alt"
                                                        }),
                                                        fullIcon: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-star"
                                                        }),
                                                        activeColor: "#ffd700"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(client_link/* default */.Z, {
                                                        href: `/users/${item._id}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "btn btn-primary mb-4",
                                                            children: "View Profile"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, item._id)
                            )
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const dashboard = (index);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,285,418,10,179], () => (__webpack_exec__(529)));
module.exports = __webpack_exports__;

})();