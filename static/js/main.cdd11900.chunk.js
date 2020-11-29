(this.webpackJsonpignite=this.webpackJsonpignite||[]).push([[0],{72:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t(0),c=t.n(r),i=t(23),o=t.n(i),s=t(20),d=t(4),u=t(5),b=t(6);function l(){var n=Object(u.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html {\n    &::-webkit-scrollbar {\n      width: 0.5rem;\n    }\n    &::-webkit-scrollbar-thumb {\n      border-radius: 3px;\n      background-color: darkgrey;\n    }\n    &::-webkit-scrollbar-track {\n      background-color: #fff;\n    }\n  }\n  body {\n    font-family: 'Montserrat', sans-serif;\n    width: 100%;\n  }\n  // page title\n  h2 {\n    font-size: 3rem;\n    font-family: 'Abril Fatface', cursive;\n    font-weight: lighter;\n    color: #333;\n  }\n  // card title\n  h3 {\n    font-size: 1.3rem;\n    color: #333;\n    padding: 1.5rem 0;\n  }\n  // content & description\n  p {\n    font-size: 1.2rem;\n    line-height: 200%;\n    color: #696969;\n  }\n  a {\n    text-decoration: none;\n    color: #333;\n  }\n  img {\n    display: block;\n  }\n  input {\n    font-weight: bold;\n    font-family: 'Montserrat', sans-serif;\n  }\n"]);return l=function(){return n},n}var j=Object(b.a)(l()),p=t(14),g=t(10),m=t.n(g),f=t(15),h=t(18),O=t(19),A=t.n(O),x="https://api.rawg.io/api/",v=(new Date).getFullYear(),w=function(){var n=(new Date).getMonth()+1;return n<10?"0".concat(n):n}(),y=function(){var n=(new Date).getDate();return n<10?"0".concat(n):n}(),E="".concat(v,"-").concat(w,"-").concat(y),I="".concat(v-1,"-").concat(w,"-").concat(y),k="".concat(v+1,"-").concat(w,"-").concat(y),C="games?dates=".concat(I,",").concat(E,"&ordering=-rating&page_size=10"),S="games?dates=".concat(E,",").concat(k,"&ordering=-added&page_size=10"),D="games?dates=".concat(I,",").concat(E,"&ordering=-released&page_size=10"),R=function(n){return"".concat(x,"games/").concat(n)},U=function(n){return"".concat(x,"games/").concat(n,"/screenshots")},T=function(n){return"".concat(x,"games?search=").concat(n,"&page_size=9")},B=t(3),G={hidden:{opacity:0},show:{opacity:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},L={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75}},exit:{opacity:0,transition:{duration:.75}}},z=function(n){return function(){var e=Object(h.a)(m.a.mark((function e(t){var a,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING_DETAIL"}),e.next=3,Promise.all([A.a.get(R(n)),A.a.get(U(n))]);case 3:a=e.sent,r=Object(f.a)(a,2),c=r[0],i=r[1],t({type:"GET_DETAIL",payload:{game:c.data,screen:i.data}});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},N=function(n,e){if(n)return n.match(/media\/screenshots/)?n.replace("media/screenshots","media/resize/".concat(e,"/-/screenshots")):n.replace("/media/games/","/media/resize/".concat(e,"/-/games/"))};function H(){var n=Object(u.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  border-radius: 1rem;\n  cursor: pointer;\n  overflow: hidden;\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n  }\n"]);return H=function(){return n},n}var F=Object(b.b)(B.c.div)(H()),P=function(n){var e=n.name,t=n.released,c=n.image,i=n.id,o=n.pathId,d=Object(r.useState)(!0),u=Object(f.a)(d,2),b=u[0],l=u[1],j=i.toString(),g=Object(p.b)(),O=function(){var n=Object(h.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(z(i));case 2:document.body.style.overflow="hidden";case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),A=Object(r.useCallback)(Object(h.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(z(i));case 2:document.body.style.overflow="hidden";case 3:case"end":return n.stop()}}),n)}))),[g,i]);return Object(r.useEffect)((function(){o&&j===o&&b&&(A(),l(!1))}),[j,o,b,A]),Object(a.jsx)(F,{variants:L,initial:"hidden",animate:"show",layoutId:j,onClick:O,children:Object(a.jsxs)(s.b,{to:"/game/".concat(i),children:[Object(a.jsx)(B.c.h3,{layoutId:"title ".concat(j),children:e}),Object(a.jsx)("p",{children:t}),Object(a.jsx)(B.c.img,{layoutId:"image ".concat(j),src:N(c,640),alt:e})]})})},_=t.p+"static/media/playstation.18cc4b9c.svg",X=t.p+"static/media/steam.d7b8819f.svg",Z=t.p+"static/media/xbox.3e7db735.svg",M=t.p+"static/media/nintendo.f579be04.svg",V=t.p+"static/media/apple.5757c37e.svg",J=t.p+"static/media/gamepad.c9269ef5.svg";function W(){var n=Object(u.a)(["\n  margin: 5rem 0;\n"]);return W=function(){return n},n}function Q(){var n=Object(u.a)(["\n  margin-top: 5rem;\n  img {\n    width: 100%;\n  }\n"]);return Q=function(){return n},n}function Y(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  width: 12rem;\n"]);return Y=function(){return n},n}function K(){var n=Object(u.a)(["\n  text-align: center;\n"]);return K=function(){return n},n}function q(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  img {\n    display: inline-block;\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n"]);return q=function(){return n},n}function $(){var n=Object(u.a)(["\n  width: 90%;\n  max-width: 1024px;\n  border-radius: 1rem;\n  padding: 2rem 5rem;\n  background: #fff;\n  position: absolute;\n  left: 10%;\n  color: #000;\n  z-index: 10;\n  img {\n    width: 100%;\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(u.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 3px;\n    background-color: rebeccapurple;\n  }\n  &::-webkit-scrollbar-track {\n    background-color: #fff;\n  }\n"]);return nn=function(){return n},n}var en=Object(b.b)(B.c.div)(nn()),tn=Object(b.b)(B.c.div)($()),an=Object(b.b)(B.c.div)(q()),rn=Object(b.b)(B.c.div)(K()),cn=Object(b.b)(B.c.div)(Y()),on=Object(b.b)(B.c.div)(Q()),sn=Object(b.b)(B.c.p)(W()),dn=function(n){var e=n.pathId,t=Object(d.e)(),r=function(n){switch(n){case"PlayStation 4":case"PlayStation 5":return _;case"Xbox One":case"Xbox Series S/X":return Z;case"PC":return X;case"Nintendo Switch":return M;case"iOS":return V;default:return J}},c=Object(p.c)((function(n){return n.detail})),i=c.screen,o=c.game,s=c.isLoading;return Object(a.jsx)(a.Fragment,{children:!s&&Object(a.jsx)(en,{className:"shadow",onClick:function(n){n.target.classList.contains("shadow")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(a.jsxs)(tn,{layoutId:e,children:[Object(a.jsxs)(an,{children:[Object(a.jsxs)("div",{className:"rating",children:[Object(a.jsx)(B.c.h3,{layoutId:"title ".concat(e),children:o.name}),Object(a.jsxs)("p",{children:["Rating: ",o.rating]}),function(n){for(var e=[],t=Math.floor(n),r=1;r<=5;r++)r<=t?e.push(Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg==",alt:"full star"},r)):e.push(Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII=",alt:"empty star"},r));return e}(o.rating)]}),Object(a.jsxs)(rn,{children:[Object(a.jsx)("h3",{children:"Platform"}),Object(a.jsx)(cn,{children:o.platforms.map((function(n){return Object(a.jsx)("img",{src:r(n.platform.name),alt:n.platform.name},n.platform.id)}))})]})]}),Object(a.jsx)(on,{children:Object(a.jsx)(B.c.img,{layoutId:"image ".concat(e),src:N(o.background_image,1280),alt:o.slug})}),Object(a.jsx)(sn,{children:o.description_raw}),Object(a.jsx)("div",{className:"gallery",children:i.results.map((function(n,e){return Object(a.jsx)("img",{src:N(n.image,1280),alt:"".concat(o.slug," screenshot ").concat(e+1)},n.id)}))})]})})})};function un(){var n=Object(u.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n"]);return un=function(){return n},n}function bn(){var n=Object(u.a)(["\n  padding: 0rem 5rem;\n  h2 {\n    padding: 5rem 0rem;\n  }\n"]);return bn=function(){return n},n}var ln=Object(b.b)(B.c.div)(bn()),jn=Object(b.b)(B.c.div)(un()),pn=function(){var n=Object(d.f)().pathname.split("/")[2],e=Object(p.b)();Object(r.useEffect)((function(){e(function(){var n=Object(h.a)(m.a.mark((function n(e){var t,a,r,c,i,o,s,d;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=A.a.get("".concat(x).concat(C)),a=A.a.get("".concat(x).concat(S)),r=A.a.get("".concat(x).concat(D)),n.next=5,Promise.all([t,a,r]);case 5:c=n.sent,i=Object(f.a)(c,3),o=i[0],s=i[1],d=i[2],e({type:"FETCH_GAMES",payload:{popular:o.data.results,upcoming:s.data.results,newGames:d.data.results}});case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[e]);var t=Object(p.c)((function(n){return n.games})),c=t.popular,i=t.upcoming,o=t.newGames,s=t.searched,u=!!s.length&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Searched Games"}),Object(a.jsx)(jn,{children:s.map((function(e){return Object(a.jsx)(P,{name:e.name,released:e.released,id:e.id,image:e.background_image,pathId:n},e.id)}))})]});return Object(a.jsx)(ln,{variants:G,initial:"hidden",animate:"show",children:Object(a.jsxs)(B.b,{type:"crossfade",children:[Object(a.jsx)(B.a,{children:n&&Object(a.jsx)(dn,{pathId:n})}),u,Object(a.jsx)("h2",{children:"Upcoming Games"}),Object(a.jsx)(jn,{children:i.map((function(e){return Object(a.jsx)(P,{name:e.name,released:e.released,id:e.id,image:e.background_image,pathId:n},e.id)}))}),Object(a.jsx)("h2",{children:"Popular Games"}),Object(a.jsx)(jn,{children:c.map((function(e){return Object(a.jsx)(P,{name:e.name,released:e.released,id:e.id,image:e.background_image,pathId:n},e.id)}))}),Object(a.jsx)("h2",{children:"New Games"}),Object(a.jsx)(jn,{children:o.map((function(e){return Object(a.jsx)(P,{name:e.name,released:e.released,id:e.id,image:e.background_image,pathId:n},e.id)}))})]})})},gn=t.p+"static/media/logo.9b6b8655.svg";function mn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  cursor: pointer;\n  img {\n    width: 2rem;\n    height: 2rem;\n  }\n"]);return mn=function(){return n},n}function fn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  input {\n    width: 30%;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    border: none;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n  }\n  button {\n    font-size: 1rem;\n    border: none;\n    outline: none;\n    padding: 0 2rem;\n    cursor: pointer;\n    background: rebeccapurple;\n    color: #fff;\n    transition: all 0.2s;\n    &:hover {\n      background: #b43cc9;\n    }\n  }\n"]);return fn=function(){return n},n}function hn(){var n=Object(u.a)(["\n  padding: 3rem 5rem;\n  text-align: center;\n"]);return hn=function(){return n},n}var On=Object(b.b)(B.c.div)(hn()),An=Object(b.b)(B.c.form)(fn()),xn=Object(b.b)(B.c.div)(mn()),vn=function(){var n=Object(p.b)(),e=Object(r.useState)(""),t=Object(f.a)(e,2),c=t[0],i=t[1];return Object(a.jsxs)(On,{variants:G,initial:"hidden",animate:"show",children:[Object(a.jsxs)(xn,{onClick:function(){n({type:"CLEAR_SEARCHED"})},children:[Object(a.jsx)("img",{src:gn,alt:""}),Object(a.jsx)("h1",{children:"Ignite"})]}),Object(a.jsxs)(An,{onSubmit:function(e){var t;e.preventDefault(),n((t=c,function(){var n=Object(h.a)(m.a.mark((function n(e){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.a.get(T(t));case 2:a=n.sent,e({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())),i("")},children:[Object(a.jsx)("input",{type:"text",value:c,onChange:function(n){i(n.target.value)}}),Object(a.jsx)("button",{type:"submit",children:"Search"})]})]})};var wn=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(vn,{}),Object(a.jsx)(d.a,{path:["/game/:id","/"],children:Object(a.jsx)(pn,{})})]})},yn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),c(n),i(n)}))},En=t(17),In=t(8),kn={popular:[],newGames:[],upcoming:[],searched:[]},Cn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_GAMES":return Object(In.a)(Object(In.a)({},n),{},{popular:e.payload.popular,upcoming:e.payload.upcoming,newGames:e.payload.newGames});case"FETCH_SEARCHED":return Object(In.a)(Object(In.a)({},n),{},{searched:e.payload.searched});case"CLEAR_SEARCHED":return Object(In.a)(Object(In.a)({},n),{},{searched:[]});default:return Object(In.a)({},n)}},Sn={game:{},screen:{},isLoading:!0},Dn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Sn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_DETAIL":return Object(In.a)(Object(In.a)({},n),{},{game:e.payload.game,screen:e.payload.screen,isLoading:!1});case"LOADING_DETAIL":return Object(In.a)(Object(In.a)({},n),{},{isLoading:!0});default:return Object(In.a)({},n)}},Rn=Object(En.c)({games:Cn,detail:Dn}),Un=t(44),Tn="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||En.d,Bn=Object(En.e)(Rn,Tn(Object(En.a)(Un.a)));o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p.a,{store:Bn,children:Object(a.jsx)(s.a,{children:Object(a.jsx)(wn,{})})})}),document.getElementById("root")),yn()}},[[72,1,2]]]);
//# sourceMappingURL=main.cdd11900.chunk.js.map