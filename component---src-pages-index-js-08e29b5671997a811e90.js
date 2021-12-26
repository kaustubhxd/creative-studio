"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{5065:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a,i,r,l=n(7294),o=n(4487),c=n(7653),s=n(1112),u=function(){var e,t,a,i=(0,s.mX)().currentTheme,r=(0,l.useRef)(null),o=(0,l.useRef)(null),u="dark"===i?"rgba(0,0,0,0.9)":"rgba(255,255,255,0.9)",m=[],d=function(n){t.globalCompositeOperation="destination-out",t.lineJoin="round",t.lineCap="round",t.lineWidth=150,t.beginPath();var a={x:n.clientX-e.offsetLeft,y:n.clientY-e.offsetTop+document.scrollingElement.scrollTop};t.lineTo(a.x,a.y),t.moveTo(a.x,a.y),t.stroke()};(0,l.useEffect)((function(){localStorage.setItem("ERASE_CORDS",m),e=r.current,t=e.getContext("2d");var n=o.current;return e.width=n.clientWidth,e.height=n.clientHeight+2,function(){e.removeEventListener("mousemove",d),cancelAnimationFrame(a)}}),[]),(0,l.useEffect)((function(){u="dark"===i?"black":"white",e=r.current,(t=e.getContext("2d")).globalCompositeOperation="source-in",t.fillStyle=u,t.fillRect(0,0,e.width,e.height)}),[i]);var f={initial:{y:800},animate:{y:0,transition:{duration:1,ease:[.6,.05,-.01,.9]}}};return l.createElement("div",null,l.createElement(c.jL,{exit:{opacity:0,transition:{duration:.2}}},l.createElement(c.nk,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.2,ease:[.6,.05,-.01,.9]},exit:{opacity:0}},l.createElement("video",{ref:o,onLoadedData:function(){console.log("video loaded")},src:n(4668).default,autoPlay:!0,loop:!0,muted:!0})),l.createElement(c.Xz,{ref:r}),l.createElement(c.TR,{variants:{initial:{y:800},animate:{y:0,transition:{staggerChildren:.2}}},initial:"initial",animate:"animate"},l.createElement(c.s0,{variants:f},"DIG"),l.createElement(c.s0,{variants:f},"DEEP"))))},m=n(660),d=n(1575),f=function(){var e=(0,d._)(),t=(0,m.YD)({triggerOnce:!0,rootMargin:"-200px"}),n=t[0],a=t[1];return(0,l.useEffect)((function(){a&&e.start("visible")}),[a]),l.createElement(c.mn,null,l.createElement(c.wP,{ref:n,animate:e,initial:"hidden",variants:{hidden:{opacity:0,y:-150},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.6,.05,-.01,.9]}},exit:{opacity:0,transition:{duration:.2}}},exit:"exit"},"Great stories don’t just happen— they need to be uncovered. And we dig deep to discover the great stories that lie just below the surface. Dirt under our fingernails and all."))},p=n(4258),E=n(5701),v=n(7031),h=n(8457),g=function(){var e=(0,l.useState)(h.m[0].fname),t=e[0],a=e[1],i=(0,l.useRef)(null),r=(0,d._)(),o=(0,m.YD)({triggerOnce:!0,rootMargin:"-200px"}),c=o[0],s=o[1];(0,l.useEffect)((function(){s&&(console.log("in view!"),r.start("animate"))}),[s]);var u={initial:{opacity:0,left:-150},animate:{opacity:1,left:0,transition:{duration:.3,ease:[.6,.05,-.01,.9]}}};return l.createElement(p.IK,{id:"project"},l.createElement(p.dI,{transition:{duration:1.2,ease:[.6,.05,-.01,.9]}},l.createElement("div",{className:"pro-titles"},l.createElement(v.E.ul,{ref:c,animate:r,variants:{initial:{opacity:0,left:-150},animate:{opacity:1,left:0,transition:{staggerChildren:.2}},exit:{opacity:0,transition:{duration:.3}}},initial:"initial",exit:"exit"},h.m.map((function(e){return l.createElement(v.E.span,{variants:u,key:e.path},l.createElement(p.OL,{onHoverStart:function(n){return function(e,n){a(n.fname),console.log("hovering ",t)}(0,e)},initial:{left:"-50px"},whileHover:{left:"0"},animate:{left:t===e.fname?"-15px":"-50px"},transition:{duration:t===e.fname?.6:.2,ease:[.6,.05,-.01,.9]},exit:{opacity:0}},l.createElement(E.Fg,{to:"/project/"+e.path,key:e.fname},l.createElement(v.E.span,{id:"space",exit:{width:t===e.fname?"150px":0},transition:{duration:1.2,ease:[.6,.05,-.01,.9]}}),l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 101 57"},l.createElement("path",{d:"M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z",fillRule:"evenodd"})),l.createElement("span",{id:"video-title"},e.title))))}))))),l.createElement(p.Kc,{exit:function(){return{left:"0%",top:-i.current.getBoundingClientRect().top,opacity:0,width:"100%"}},transition:{duration:1.2,ease:[.6,.05,-.01,.9]}},l.createElement(v.E.video,{ref:i,key:t,style:{width:t?"100%":0},initial:{width:0},animate:{width:"100%"},transition:{duration:.4,ease:"easeInOut"},src:t?n(1366)("./"+t).default:null,autoPlay:!0,loop:!0,muted:!0})))},y=function(){var e=(0,l.useState)(0),t=e[0],n=e[1],a=(0,d._)(),i=(0,m.YD)({triggerOnce:!0,rootMargin:"-200px"}),r=i[0],o=i[1];(0,l.useEffect)((function(){o&&(console.log("in view!"),a.start("visible"))}),[o]);return l.createElement(c.M7,{ref:r,animate:a,initial:"hidden",variants:{hidden:{opacity:0,y:-150},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.6,.05,-.01,.9]}},exit:{opacity:0,transition:{duration:.2}}},exit:"exit"},l.createElement(c.EI,null,l.createElement("div",{className:"about-text-head"},l.createElement("p",null,"Icebox is an integrated, full-service creative studio offering video production, creative development, and post-production services.")),l.createElement("div",{className:"about-text-foot"},l.createElement("p",null,"Everybody’s got a story. And we don’t stop until we’ve uncovered what makes yours worth telling. Whether it’s working directly with you, an agency partner, or putting the finishing touches on something special, we’re ready to dig in and get our hands dirty—are you?"))),l.createElement(c.$B,null,l.createElement("div",{className:"accordion-head"},"Services"),h._.map((function(e){return l.createElement("div",{className:"service",key:e.id,onClick:function(){return a=e.id,console.log(a),void n(t===a?-1:a);var a}},l.createElement(c.Hd,{expand:t===e.id},l.createElement("div",{className:"arrow"},l.createElement("span",{id:"span-one"}),l.createElement("span",{id:"span-two"})),l.createElement("p",{className:"service-title"},e.title)),l.createElement(c.$4,{expand:t===e.id},l.createElement("ul",null,e.results.map((function(e){return l.createElement("li",{key:e},e)})))))}))))},x=n(1880),w=n(9692),M=w.default.div(a||(a=(0,x.Z)(["\n  display: flex;\n  margin-bottom: 4rem;\n  align-items: center;\n\n  @media (max-width: 600px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),b=w.default.div(i||(i=(0,x.Z)(["\n  flex: 6;\n  display: flex;\n  justify-content: space-around;\n  font-size: 1.4rem;\n  transition: all 0.6s ease-in-out;\n\n  @media (max-width: 600px) {\n    flex-direction: column;\n    align-items: center;\n    & > * {\n      margin: 0.5rem 0;\n    }\n  }\n\n  .content-one {\n    #email {\n      transition: color 0.4s ease-in-out;\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n"])),(function(e){return e.theme.current.red})),z=w.default.div(r||(r=(0,x.Z)(["\n  flex: 2;\n  margin: 0.5rem 0;\n\n  svg {\n    margin: 0 8px 0 8px;\n    &:hover > g > path {\n      fill: ",";\n    }\n  }\n\n  path {\n    transition: all 0.4s ease-in-out;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.current.red}),(function(e){return e.theme.current.color})),k=function(e){e.fillColor;var t=e.width,n=e.onMouseEnter,a=e.onMouseLeave;return l.createElement("svg",{onMouseEnter:n,onMouseLeave:a,version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:t,viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet"},l.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},l.createElement("path",{d:"M2315 5109 c-800 -83 -1501 -518 -1927 -1196 -604 -960 -491 -2229 272 -3065 423 -463 951 -740 1585 -830 118 -17 511 -16 635 0 579 80 1097 337 1491 739 130 132 157 163 243 277 256 341 423 757 488 1211 17 118 17 512 0 630 -43 303 -122 561 -247 814 -134 268 -270 459 -483 674 -395 400 -889 649 -1457 733 -123 18 -478 26 -600 13z m848 -1089 c288 -19 456 -82 610 -228 156 -149 228 -332 247 -629 13 -195 13 -1006 0 -1204 -19 -300 -93 -485 -253 -636 -149 -141 -321 -205 -604 -223 -192 -12 -1014 -12 -1206 0 -288 19 -456 82 -610 228 -156 149 -228 332 -247 629 -13 194 -12 1028 0 1212 20 293 92 475 247 623 148 140 325 210 582 227 169 12 1061 12 1234 1z"}),l.createElement("path",{d:"M2195 3759 c-300 -6 -349 -9 -416 -27 -213 -58 -334 -178 -391 -391 -18 -67 -21 -117 -27 -429 -3 -193 -3 -511 0 -705 6 -311 9 -361 27 -428 57 -213 178 -334 391 -391 67 -18 117 -21 429 -27 193 -3 511 -3 705 0 313 6 361 9 430 28 207 55 333 180 389 388 18 70 21 116 27 431 3 193 3 511 0 705 -6 312 -9 361 -27 428 -57 213 -179 335 -391 391 -78 20 -98 21 -661 31 -80 1 -298 -1 -485 -4z m1212 -250 c38 -14 83 -57 99 -96 49 -113 -38 -243 -161 -243 -94 0 -175 80 -175 174 0 121 124 208 237 165z m-604 -236 c121 -42 188 -85 283 -178 92 -91 149 -181 191 -300 26 -74 28 -91 28 -235 0 -144 -2 -161 -28 -235 -40 -115 -100 -209 -186 -296 -87 -86 -181 -146 -296 -186 -74 -26 -91 -28 -235 -28 -144 0 -161 2 -235 28 -119 42 -209 99 -300 191 -93 95 -135 162 -179 283 -30 85 -31 94 -31 243 1 141 3 162 28 235 52 155 163 301 297 390 146 97 251 126 440 122 120 -3 144 -7 223 -34z"}),l.createElement("path",{d:"M2442 3034 c-263 -70 -423 -334 -357 -588 48 -183 178 -313 362 -361 344 -90 678 244 588 588 -70 267 -337 430 -593 361z"})))},C=function(e){e.fillColor;var t=e.width,n=e.onMouseEnter,a=e.onMouseLeave;return l.createElement("svg",{onMouseEnter:n,onMouseLeave:a,version:"1.0",width:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet"},l.createElement("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},l.createElement("path",{d:"M2321 5110 c-497 -48 -990 -251 -1376 -565 -114 -92 -294 -274 -384 -387 -229 -287 -417 -675 -495 -1023 -49 -218 -60 -325 -60 -575 0 -250 11 -357 60 -575 79 -355 272 -749 509 -1040 92 -114 274 -294 387 -384 287 -229 675 -417 1023 -495 218 -49 325 -60 575 -60 250 0 357 11 575 60 261 58 603 204 828 353 389 259 688 599 893 1016 125 255 196 484 241 775 24 161 24 539 0 700 -45 291 -116 520 -241 775 -134 272 -283 480 -498 692 -211 209 -404 346 -673 478 -252 124 -486 197 -765 240 -126 19 -468 27 -599 15z m-591 -897 c5 -21 36 -134 68 -252 l59 -215 17 65 c9 35 39 147 65 249 l48 185 96 3 c54 1 97 0 97 -4 0 -4 -52 -178 -115 -387 l-115 -379 0 -259 0 -259 -95 0 -95 0 0 261 c0 311 1 303 -145 739 -52 157 -95 286 -95 288 0 1 45 2 100 2 l99 0 11 -37z m801 -295 c56 -16 112 -69 140 -130 24 -52 24 -58 24 -348 0 -290 0 -296 -24 -348 -42 -92 -121 -142 -226 -142 -70 0 -121 19 -169 62 -77 67 -80 83 -84 406 -3 237 -1 291 13 337 39 137 180 207 326 163z m489 -391 c0 -292 3 -396 12 -405 23 -23 66 -14 103 23 l35 36 0 369 0 370 90 0 90 0 0 -480 0 -480 -90 0 -90 0 0 51 0 52 -46 -42 c-54 -51 -99 -71 -156 -71 -53 0 -85 21 -106 69 -14 31 -17 99 -20 469 l-4 432 91 0 91 0 0 -393z m160 -677 c463 -21 555 -39 654 -130 60 -55 92 -124 116 -246 53 -273 53 -930 0 -1214 -25 -131 -56 -195 -125 -259 -79 -72 -129 -87 -352 -108 -278 -26 -1548 -26 -1826 0 -225 21 -278 38 -354 110 -67 63 -98 128 -123 253 -68 351 -45 1171 38 1355 30 68 95 134 166 169 54 27 85 34 202 46 77 8 222 18 324 23 275 12 1011 12 1280 1z"}),l.createElement("path",{d:"M2412 3769 c-46 -18 -52 -58 -52 -327 0 -148 4 -261 10 -279 21 -59 96 -71 134 -20 19 26 21 44 25 239 4 256 -3 330 -32 363 -27 28 -54 37 -85 24z"}),l.createElement("path",{d:"M1342 2463 l3 -88 103 -3 102 -3 0 -549 0 -550 95 0 95 0 0 550 0 550 105 0 105 0 0 90 0 90 -305 0 -306 0 3 -87z"}),l.createElement("path",{d:"M2620 1910 l0 -640 85 0 85 0 0 47 0 47 38 -36 c95 -93 208 -88 266 12 20 34 21 50 21 405 0 362 0 371 -22 411 -29 54 -65 76 -123 76 -53 0 -101 -21 -147 -65 l-33 -31 0 207 0 207 -85 0 -85 0 0 -640z m290 160 c34 -18 40 -65 40 -329 0 -238 -2 -258 -20 -288 -16 -27 -26 -33 -54 -33 -19 0 -45 9 -60 21 l-26 20 0 289 0 289 26 20 c29 23 64 27 94 11z"}),l.createElement("path",{d:"M3463 2230 c-55 -11 -91 -31 -130 -72 -64 -66 -67 -85 -71 -375 -4 -296 3 -348 51 -419 78 -113 258 -137 373 -49 49 37 81 115 87 208 l4 77 -89 0 -88 0 0 -50 c0 -67 -22 -118 -53 -125 -43 -11 -71 -1 -94 34 -21 30 -23 46 -23 147 l0 114 177 0 176 0 -6 148 c-7 166 -23 230 -67 284 -53 64 -155 96 -247 78z m108 -176 c21 -22 24 -37 28 -110 l3 -84 -86 0 -86 0 0 65 c0 72 18 127 47 144 31 18 68 12 94 -15z"}),l.createElement("path",{d:"M1974 2216 c-3 -7 -4 -204 -2 -437 3 -407 4 -425 24 -459 49 -84 150 -80 247 9 24 23 47 41 51 41 3 0 6 -22 6 -50 l0 -50 85 0 85 0 -2 478 -3 477 -82 3 -83 3 0 -367 0 -366 -39 -40 c-33 -32 -46 -39 -73 -36 -31 3 -33 6 -40 48 -3 25 -7 206 -7 403 l-1 357 -80 0 c-59 0 -82 -4 -86 -14z"})))},L=function(){var e=(0,s.DI)(),t=function(t){e({type:"CURSOR_TYPE",value:t})};return l.createElement(M,null,l.createElement(b,null,l.createElement("div",{className:"content-one",onMouseEnter:function(){return t("melt")},onMouseLeave:t},l.createElement("p",{id:"email"},"hello@kaustubh.app")),l.createElement("div",{className:"content-two"},l.createElement("p",{id:"address"},"Pune, India"))),l.createElement(z,null,l.createElement(C,{onMouseEnter:function(){return t("melt")},onMouseLeave:t,fillColor:"crimson",width:"48px"}),l.createElement(k,{onMouseEnter:function(){return t("melt")},onMouseLeave:t,fillColor:"crimson",width:"48px"})))},R=n(3751),_=function(e){return l.createElement(o.Z,null,l.createElement(R.Z,{title:"Home"}),l.createElement(u,null),l.createElement(f,null),l.createElement(g,null),l.createElement(y,null),l.createElement(L,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-08e29b5671997a811e90.js.map