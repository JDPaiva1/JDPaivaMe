(function(t){function a(a){for(var s,r,o=a[0],c=a[1],l=a[2],u=0,v=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&v.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(v.length)v.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(s=!1)}s&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},n={app:0},i=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var d=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0240":function(t,a,e){"use strict";var s=e("731e"),n=e.n(s);n.a},2593:function(t,a,e){},"2c29":function(t,a,e){"use strict";var s=e("3b61"),n=e.n(s);n.a},"3b61":function(t,a,e){},4778:function(t,a,e){"use strict";var s=e("b36b"),n=e.n(s);n.a},"50c4":function(t,a,e){"use strict";var s=e("6ed2"),n=e.n(s);n.a},"50f7":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),n=e("ecee"),i=e("ad3d"),r=e("f2d1"),o=e("c074"),c=e("33bc"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[""===t.data?e("Loader"):""!=t.data?[e("Navigation",{attrs:{navbar:t.data.main.navbar,path:t.path}}),e("Masthead",{attrs:{main:t.data.main}}),e("section",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy",value:{offset:55,allowNoActive:!0,time:1e3,steps:30},expression:"{offset: 55, allowNoActive: true, time: 1000, steps: 30}"}],staticClass:"p-0"},[e("About",{attrs:{about:t.data.about}}),e("Services",{attrs:{services:t.data.services}}),e("Portfolio",{attrs:{portfolio:t.data.portfolio}}),e("Contact",{attrs:{contact:t.data.contact}})],1),e("FooterNav")]:t._e()],2)},d=[],u=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"loader-box col-12"},[e("div",{staticClass:"loader is-loader",attrs:{id:"loader"}})])])])}],p={name:"Loader"},f=p,m=(e("a071"),e("2877")),b=Object(m["a"])(f,u,v,!1,null,null,null),h=b.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top",class:{"navbar-shrink":t.isActive},attrs:{id:"mainNav"}},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#app"}},[t._v("\n      JDPaiva1\n    ")]),e("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-expanded":""+t.ariaExpanded,"aria-controls":"navbarResponsive","aria-label":"Toggle navigation"},on:{click:t.toggleButton}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{staticClass:"collapse navbar-collapse",class:{show:t.ariaExpanded},attrs:{id:"navbarResponsive"}},[e("ul",{directives:[{name:"scroll-spy-active",rawName:"v-scroll-spy-active",value:{selector:"a.nav-link"},expression:"{selector: 'a.nav-link'}"},{name:"scroll-spy-link",rawName:"v-scroll-spy-link"}],staticClass:"navbar-nav ml-auto"},t._l(t.navbar.items,(function(a,s){return e("li",{key:s,staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:a.ref},on:{click:t.removeHash}},[t._v("\n            "+t._s(a.title)+"\n          ")])])})),0),e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link d-inline-block pr-1",class:["/"===t.path?t.languageActive:""],attrs:{href:t.origin}},[t._v("\n            ES\n          ")]),e("strong",{staticClass:"nav-link d-inline-block p-0"},[t._v("/")]),e("a",{staticClass:"nav-link d-inline-block pl-1",class:["/"!=t.path?t.languageActive:""],attrs:{href:t.origin+"/en/"}},[t._v("\n            EN\n          ")])])])])])])},C=[],_={name:"Navigation",props:{navbar:Object,path:String},data:function(){return{isActive:!1,widthLogo:100,languageActive:"language-active",origin:window.location.origin,ariaExpanded:!1}},methods:{handleScroll:function(){window.scrollY>=100?(this.isActive=!0,this.widthLogo=31):this.isActive=!1},removeHash:function(){window.onhashchange=function(){window.history.pushState("",document.title,window.location.pathname)}},toggleButton:function(){this.ariaExpanded?this.ariaExpanded=!1:this.ariaExpanded=!0}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},w=_,x=(e("a4e1"),Object(m["a"])(w,g,C,!1,null,null,null)),y=x.exports,k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"masthead text-center text-white d-flex",style:t.defineBackgroundImg},[e("div",{staticClass:"container my-auto"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-10 mx-auto"},[e("img",{staticClass:"mb-4",attrs:{src:t.main.logoPNG,srcset:t.main.logoSVG,alt:"logotipo",width:"100"}}),e("h1",{staticClass:"text-uppercase"},[e("strong",[t._v(t._s(t.main.name))])]),e("div",{staticClass:"col-lg-8 mx-auto"},[e("h2",{staticClass:"text-faded mb-5"},[t._v(t._s(t.main.headline))])]),e("hr")]),e("div",{staticClass:"col-lg-8 mx-auto"},[e("p",{staticClass:"text-faded mb-5"},[t._v(t._s(t.main.text))])])])])])},j=[],O=(e("386d"),{name:"Masthead",props:{main:Object},computed:{defineBackgroundImg:function(){var t=function(t){return navigator.userAgent.search(t)},a=t("Safari")>=0&&t("Chrome")<0,e="";return e=a||t("MSIE")>=0?this.main.backgroundJPG:this.main.backgroundWebp,"background-image: url(".concat(e,")")}}}),A=O,E=(e("6430"),Object(m["a"])(A,k,j,!1,null,null,null)),S=E.exports,I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"bg-primary",attrs:{id:"about"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 mx-auto text-center"},[e("h2",{staticClass:"section-heading text-white"},[t._v(t._s(t.about.title))]),e("hr",{staticClass:"light my-4"}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("p",{staticClass:"text-faded mb-4 mt-4"},[t._v("\n              "+t._s(t.about.textTop)+"\n              "),e("a",{attrs:{href:"https://platzi.com/@jdpaiva1/",target:"_blank",rel:"noopener"}},[e("strong",[t._v(t._s(t.about.anchorTop))])])]),e("p",{staticClass:"text-faded mb-4"},[t._v("\n              "+t._s(t.about.textMiddle)+"\n            ")]),e("p",{staticClass:"text-faded mb-4"},[t._v("\n              "+t._s(t.about.textBottom)+"\n              "),e("a",{attrs:{href:"https://www.instagram.com/jdpaiva1/",target:"_blank",rel:"noopener"}},[e("strong",[t._v(t._s(t.about.anchorBottom))])])])]),e("div",{staticClass:"col-lg-6"},t._l(t.about.skills,(function(a,s){return e("div",{key:s,staticClass:"mb-4"},[e("div",{staticClass:"progress-title text-faded"},[t._v(t._s(a.skill))]),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",style:"width: "+a.progress+"%",attrs:{role:"progressbar","aria-valuenow":a.progress,"aria-valuemin":"0","aria-valuemax":"100"}})])])})),0),e("div",{staticClass:"col-sm-6 mx-auto mt-5"},[e("a",{staticClass:"btn btn-light btn-xl mb-5",attrs:{href:"https://www.linkedin.com/in/jdpaiva1/",target:"_blank",rel:"noopener"}},[t._v("\n              "+t._s(t.about.button)+"\n            ")]),e("img",{staticClass:"lazyload image rounded-circle img-fluid",attrs:{"data-src":t.about.image,alt:t.about.alt}})])])])])])])},P=[],N={name:"About",props:{about:Object}},$=N,J=(e("50c4"),Object(m["a"])($,I,P,!1,null,null,null)),L=J.exports,M=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"services"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 text-center"},[e("h2",{staticClass:"section-heading"},[t._v(t._s(t.services.title))]),e("hr",{staticClass:"my-4"})])])]),e("div",{staticClass:"container"},[e("div",{ref:"srIcon",staticClass:"row"},t._l(t.services.service,(function(a,s){return e("div",{key:s,staticClass:"col-lg-3 col-md-6 text-center"},[e("div",{staticClass:"service-box mt-5 mx-auto"},[e("font-awesome-icon",{staticClass:"text-primary mb-3 sr-icon",class:[{active:t.isActive},t.addClass(s)],attrs:{icon:[a.icon.type,a.icon.name]}}),e("h3",{staticClass:"mb-3"},[t._v(t._s(a.title))])],1)])})),0)])])},B=[],D={name:"Services",props:{services:Object},data:function(){return{observer:null,options:{threshold:1},isActive:!1}},methods:{addClass:function(t){return"sr-icon-".concat(t+1)},callback:function(t){t[0].isIntersecting&&(this.isActive=!0)}},mounted:function(){this.observer=new IntersectionObserver(this.callback,this.options),this.observer.observe(this.$refs.srIcon)}},T=D,z=(e("2c29"),Object(m["a"])(T,M,B,!1,null,null,null)),G=z.exports,R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"p-0",attrs:{id:"portfolio"}},[e("div",{staticClass:"container-fluid p-0"},[e("div",{staticClass:"row no-gutters popup-gallery"},t._l(t.portfolio.projects,(function(a,s){return e("div",{key:s,staticClass:"col-lg-4 col-sm-6"},[e("a",{staticClass:"portfolio-box",attrs:{target:"_blank",rel:"noopener","aria-label":a.alt,href:a.url}},[e("img",{staticClass:"lazyload img-fluid",attrs:{"data-src":a.image,alt:a.alt}}),e("div",{staticClass:"portfolio-box-caption"},[e("div",{staticClass:"portfolio-box-caption-content"},[e("div",{staticClass:"project-category text-faded"},[t._v("\n                "+t._s(a.category)+"\n              ")]),e("div",{staticClass:"project-name"},[t._v("\n                "+t._s(a.name)+"\n              ")])])])])])})),0)])])},F=[],H={name:"Portfolio",props:{portfolio:Object}},V=H,K=(e("0240"),Object(m["a"])(V,R,F,!1,null,null,null)),Q=K.exports,U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"contact"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 mx-auto text-center"},[e("h2",{staticClass:"section-heading"},[t._v(t._s(t.contact.title))]),e("hr",{staticClass:"my-4"}),e("p",{staticClass:"mb-5"},[t._v(t._s(t.contact.text))])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 mx-auto text-center"},[e("font-awesome-icon",{ref:"srContact",staticClass:"mb-3 sr-contact",class:{active:t.isActive},attrs:{icon:["fas","envelope"]}}),e("p",[e("a",{attrs:{href:"mailto:"+t.contact.email}},[t._v(t._s(t.contact.email))])])],1)])])])},W=[],X={name:"Contact",props:{contact:Object},data:function(){return{observer:null,options:{threshold:1},isActive:!1}},methods:{callback:function(t){t[0].isIntersecting&&(this.isActive=!0)}},mounted:function(){this.observer=new IntersectionObserver(this.callback,this.options),this.observer.observe(this.$refs.srContact)}},Y=X,Z=(e("7a5a"),Object(m["a"])(Y,U,W,!1,null,null,null)),q=Z.exports,tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"main-footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 text-center text-lg-left"},[e("p",{staticClass:"social"},[e("a",{attrs:{"aria-label":"LinkedIn",href:"https://www.linkedin.com/in/jdpaiva1/"}},[e("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1),e("a",{attrs:{"aria-label":"GitHub",href:"https://github.com/JDPaiva1"}},[e("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),e("a",{attrs:{"aria-label":"Twitter",href:"https://twitter.com/JDPaiva1"}},[e("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),e("a",{attrs:{"aria-label":"Instagram",href:"https://www.instagram.com/jdpaiva1/"}},[e("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),e("a",{attrs:{"aria-label":"500px",href:"https://500px.com/jdpaiva1"}},[e("font-awesome-icon",{attrs:{icon:["fab","500px"]}})],1)])]),t._m(0)])])])},at=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-6 text-center text-lg-right mt-4 mt-lg-0 text-faded"},[e("p",[t._v("© 2019 JDPaiva1.")])])}],et={name:"FooterNav"},st=et,nt=(e("4778"),Object(m["a"])(st,tt,at,!1,null,null,null)),it=nt.exports,rt=e("59ca"),ot=e.n(rt),ct=(e("66ce"),{apiKey:"AIzaSyA4Q8HzJKkPVGvXQxUvf4mp4x1g5F_12Jc",authDomain:"jdpaiva1-me.firebaseapp.com",databaseURL:"https://jdpaiva1-me.firebaseio.com",projectId:"jdpaiva1-me",storageBucket:"jdpaiva1-me.appspot.com",messagingSenderId:"695721555391",appId:"1:695721555391:web:13b8cbaf6c12b7ea775d0a",measurementId:"G-ZBRR009NV9"});ot.a.initializeApp(ct);var lt=ot.a.database(),dt={name:"app",components:{Loader:h,Navigation:y,Masthead:S,About:L,Services:G,Portfolio:Q,Contact:q,FooterNav:it},data:function(){return{data:"",path:window.location.pathname,reference:"es/"}},methods:{readDatabase:function(){var t=this;this.reference="/"===this.path?"es/":"en/",lt.ref(this.reference).once("value",(function(a){t.data=a.val()}))}},created:function(){this.readDatabase()}},ut=dt,vt=(e("5c0b"),Object(m["a"])(ut,l,d,!1,null,null,null)),pt=vt.exports;e("b3e9");s["a"].config.productionTip=!1,n["c"].add(o["a"],o["c"],o["d"],r["f"],r["b"],r["d"],r["e"],r["c"],r["a"],o["b"]),s["a"].component("font-awesome-icon",i["a"]),s["a"].use(c["b"],{easing:c["a"].Circular.InOut}),new s["a"]({render:function(t){return t(pt)}}).$mount("#app")},"5c0a":function(t,a,e){},"5c0b":function(t,a,e){"use strict";var s=e("e332"),n=e.n(s);n.a},6430:function(t,a,e){"use strict";var s=e("5c0a"),n=e.n(s);n.a},"6ed2":function(t,a,e){},"731e":function(t,a,e){},"7a5a":function(t,a,e){"use strict";var s=e("50f7"),n=e.n(s);n.a},a071:function(t,a,e){"use strict";var s=e("2593"),n=e.n(s);n.a},a4e1:function(t,a,e){"use strict";var s=e("d330"),n=e.n(s);n.a},b36b:function(t,a,e){},d330:function(t,a,e){},e332:function(t,a,e){}});
//# sourceMappingURL=app.f90282e3.js.map