(function(){"use strict";var t={7034:function(t,e,r){var n=r(144),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[r("v-container",{staticClass:"py-0 fill-height"},[r("v-avatar",{staticClass:"mr-10",attrs:{color:"grey darken-1",size:"32"}}),t._l(t.$store.getters.getApps,(function(e,n){return r("v-btn",{key:n,attrs:{to:{name:e.name},depressed:"",plain:"",text:""}},[t._v(" "+t._s(e.title)+" ")])})),t.$store.getters.isAuthenticated?r("v-btn",{attrs:{depressed:"",plain:"",text:""},on:{click:t.logout}},[t._v("Logout")]):t._e(),r("v-spacer"),r("v-responsive",{attrs:{"max-width":"260"}},[r("v-text-field",{attrs:{dense:"",flat:"","hide-details":"",rounded:"","solo-inverted":""}})],1)],2)],1),r("v-main",{staticClass:"grey lighten-3"},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"2"}},[r("v-sheet",{attrs:{rounded:"lg"}},[r("v-list",{attrs:{color:"transparent"}},[t._l(5,(function(e){return r("v-list-item",{key:e,attrs:{link:""}},[r("v-list-item-content",[r("v-list-item-title",[t._v(" List Item "+t._s(e)+" ")])],1)],1)})),r("v-divider",{staticClass:"my-2"}),r("v-list-item",{attrs:{link:"",color:"grey lighten-4"}},[r("v-list-item-content",[r("v-list-item-title",[t._v(" Refresh ")])],1)],1)],2)],1)],1),r("v-col",[r("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}},[r("router-view")],1)],1)],1)],1)],1)],1)},o=[],a={data(){return{}},methods:{logout(){this.$store.dispatch("logout")}}},i=a,u=r(1001),l=r(3453),c=r.n(l),d=r(7524),p=r(6347),m=r(6370),h=r(680),f=r(2102),g=r(9846),v=r(1418),b=r(6816),w=r(7620),k=r(1311),y=r(7877),T=r(3857),A=r(2877),x=r(3385),_=r(9762),S=r(4020),E=(0,u.Z)(i,s,o,!1,null,null,null),Z=E.exports;c()(E,{VApp:d.Z,VAppBar:p.Z,VAvatar:m.Z,VBtn:h.Z,VCol:f.Z,VContainer:g.Z,VDivider:v.Z,VList:b.Z,VListItem:w.Z,VListItemContent:k.km,VListItemTitle:k.V9,VMain:y.Z,VResponsive:T.Z,VRow:A.Z,VSheet:x.Z,VSpacer:_.Z,VTextField:S.Z});var V=r(8345),R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-col"),r("v-card",{staticClass:"mx-auto",attrs:{loading:t.formLogin.loading,"max-width":"500"}},[r("template",{slot:"progress"},[r("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),r("v-card-title",[t._v("Login to your account")]),r("v-card-text",[r("v-text-field",{attrs:{type:"text",name:"input-10-1",label:"Username"},model:{value:t.formLogin.username,callback:function(e){t.$set(t.formLogin,"username",e)},expression:"formLogin.username"}}),r("v-text-field",{attrs:{type:"password",name:"input-10-1",label:"Password"},model:{value:t.formLogin.password,callback:function(e){t.$set(t.formLogin,"password",e)},expression:"formLogin.password"}})],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:""},on:{click:t.login}},[t._v("Login")])],1)],2),r("v-col"),r("v-card",{staticClass:"mx-auto",attrs:{loading:t.formRegister.loading,"max-width":"500"}},[r("template",{slot:"progress"},[r("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),r("v-card-title",[t._v("Register your account")]),r("v-card-text",[r("v-text-field",{attrs:{type:"text",name:"input-10-1",label:"Username"},model:{value:t.formRegister.username,callback:function(e){t.$set(t.formRegister,"username",e)},expression:"formRegister.username"}}),r("v-text-field",{attrs:{type:"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:""},model:{value:t.formRegister.password,callback:function(e){t.$set(t.formRegister,"password",e)},expression:"formRegister.password"}}),r("v-text-field",{attrs:{type:"password",name:"input-10-1",label:"Confirm Password",hint:"At least 8 characters",counter:""},model:{value:t.formRegister.password2,callback:function(e){t.$set(t.formRegister,"password2",e)},expression:"formRegister.password2"}})],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:""},on:{click:t.registration}},[t._v("Register")])],1)],2),r("v-snackbar",{attrs:{timeout:t.snackbar.timeout,"multi-line":""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[r("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v("Close ")])]}}]),model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v(t._s(t.snackbar.text)+" ")])],1)},C=[],L={data(){return{snackbar:{show:!1,timeout:2e3,text:""},formLogin:{loading:!1,password:"",username:""},formRegister:{loading:!1,password:"",password2:"",username:""}}},created(){this.$store.getters.isAuthenticated&&this.$router.push({name:"home"})},methods:{login(){this.formLogin.loading=!0,this.$store.dispatch("login",{username:this.formLogin.username,password:this.formLogin.password}).then((()=>this.$router.push({name:"home"}))).catch((t=>this.showSnackbar(t.response.data.message))).finally((()=>this.formLogin.loading=!1))},registration(){this.formRegister.password===this.formRegister.password2?(this.formRegister.loading=!0,this.$store.dispatch("registration",{username:this.formRegister.username,password:this.formRegister.password}).then((t=>{this.showSnackbar(t.message)})).catch((t=>this.showSnackbar(t.response.data.message))).finally((()=>this.formRegister.loading=!1))):this.showSnackbar("Error: Passwords do not match!")},showSnackbar(t){this.snackbar.text=t,this.snackbar.show=!0}}},j=L,P=r(3237),$=r(7118),O=r(7003),I=r(3202),U=(0,u.Z)(j,R,C,!1,null,null,null),q=U.exports;c()(U,{VBtn:h.Z,VCard:P.Z,VCardActions:$.h7,VCardText:$.ZB,VCardTitle:$.EB,VCol:f.Z,VProgressLinear:O.Z,VSnackbar:I.Z,VSpacer:_.Z,VTextField:S.Z});var B=r(629),N=r(9669),H=r.n(N);const M=H().create({baseURL:String("https://thshopapi.node5.de:3333")});M.interceptors.request.use((t=>{const e=localStorage.getItem("jwt.token");return t&&t.headers&&null!==e&&(t.headers.Authorization="Bearer "+e),t})),M.interceptors.response.use((t=>t),(t=>(401===t.response.status&&J.dispatch("logout"),Promise.reject(t))));var W=M,D={state:{isAuthenticated:!1,jwt:null,user:null,apps:[]},mutations:{SET_AUTHENTICATED(t,e){t.isAuthenticated=e},SET_JWT(t,e){localStorage.setItem("jwt.token",e),t.jwt=e},REMOVE_JWT(t){localStorage.removeItem("jwt.token"),t.jwt=null},SET_USER(t,e){t.user=e},SET_APPS(t,e){t.apps=e}},actions:{autologin({commit:t},e){t("SET_AUTHENTICATED",!0),t("SET_JWT",e)},async login({commit:t},e){const r=await W.post("/auth/login",e);return t("SET_AUTHENTICATED",!0),t("SET_JWT",r.data.token),r.data},logout({commit:t}){t("SET_AUTHENTICATED",!1),t("SET_USER",null),t("REMOVE_JWT"),G.push({name:"start"})},async setApps({commit:t,getters:e}){let r=[];r=e.isAuthenticated?await W.get("/user/apps"):await W.get("/public/apps"),t("SET_APPS",r.data.apps)},async registration(t,e){const r=await W.post("/auth/registration",e);return r.data}},getters:{isAuthenticated(t){return t.isAuthenticated},getUser(t){return t.user},getApps(t){return t.apps}}};n.Z.use(B.ZP);var J=new B.ZP.Store({modules:{auth:D}});n.Z.use(V.Z);const F=[{path:"/",name:"start",component:q,meta:{title:"Landing Page",requiresAuth:!1}},{path:"/about",name:"about",component:()=>r.e(443).then(r.bind(r,9030)),meta:{title:"About",requiresAuth:!1}},{path:"/home",name:"home",component:()=>r.e(443).then(r.bind(r,9112)),meta:{title:"Home",requiresAuth:!0}},{path:"/profile",name:"profile",component:()=>r.e(443).then(r.bind(r,9397)),meta:{title:"Profile",requiresAuth:!0}}],z=new V.Z({mode:"history",base:"/",routes:F});z.beforeEach((async(t,e,r)=>{const n=localStorage.getItem("jwt.token");!J.getters.isAuthenticated&&n&&J.dispatch("autologin",n),await J.dispatch("setApps"),t.matched.some((t=>t.meta.requiresAuth))&&(J.getters.isAuthenticated?r():r({name:"start"})),r()})),z.afterEach((t=>{document.title=String(t.meta.title||"Website")+" - TH-Shop"}));var G=z,K=r(1910);n.Z.use(K.Z);var Q=new K.Z({});n.Z.config.productionTip=!1,n.Z.prototype.$axios=W,new n.Z({router:G,store:J,vuetify:Q,render:t=>t(Z)}).$mount("#app")}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,n,s,o){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],o=t[c][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[u])}))?n.splice(u--,1):(i=!1,o<a&&(a=o));if(i){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,s,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,n){return r.f[n](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/about.9b4741a4.js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="thshop:";r.l=function(n,s,o,a){if(t[n])t[n].push(s);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+o){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+o),i.src=n),t[n]=[s];var p=function(e,r){i.onerror=i.onload=null,clearTimeout(m);var s=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(t){return t(r)})),e)return e(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.f.j=function(e,n){var s=r.o(t,e)?t[e]:void 0;if(0!==s)if(s)n.push(s[2]);else{var o=new Promise((function(r,n){s=t[e]=[r,n]}));n.push(s[2]=o);var a=r.p+r.u(e),i=new Error,u=function(n){if(r.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,s[1](i)}};r.l(a,u,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,a=n[0],i=n[1],u=n[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(u)var c=u(r)}for(e&&e(n);l<a.length;l++)o=a[l],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(c)},n=self["webpackChunkthshop"]=self["webpackChunkthshop"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(7034)}));n=r.O(n)})();
//# sourceMappingURL=app.e2f30253.js.map