(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{14:function(t,e,n){"use strict";n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return O})),n.d(e,"a",(function(){return v}));var r=n(5),c=n.n(r),a=n(13),u=n(4),o=n(15),i=n.n(o);function s(){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i.a.defaults.baseURL="https://connections-api.herokuapp.com";var p=n(17),h=function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(p.a.fetchContactRequest()),t.prev=1,t.next=4,s();case 4:n=t.sent,e(p.a.fetchContactSucess(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(p.a.fetchContactError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},O=Object(u.c)("/contacts/contactsFetchPost",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.rejectWithValue,a=n.getState,t.prev=1,!a().contacts.entris.find((function(t){var n;return(null===t||void 0===t||null===(n=t.name)||void 0===n?void 0:n.toLowerCase())===e.name.toLowerCase()}))){t.next=6;break}return alert("\u041e\u0448\u0438\u0431\u043a\u0430, \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e.name," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c")),t.abrupt("return",null);case 6:return t.next=8,b(e);case 8:return u=t.sent,t.abrupt("return",u);case 12:return t.prev=12,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()),v=Object(u.c)("/contacts/contactsFetchDelete",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,f(e);case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}())},16:function(t,e,n){"use strict";var r={getIsLogIn:function(t){return t.auth.isLogIn},getUsername:function(t){return t.auth.user.name},getIsLoding:function(t){return t.auth.isLoding}};e.a=r},17:function(t,e,n){"use strict";var r=n(87),c=n(4),a={formSubmit:Object(c.b)("add_Contact",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(r.a)(),name:e,number:n}}})),deleteContact:Object(c.b)("delete_Contact"),filters:Object(c.b)("filter_contact"),fetchContactRequest:Object(c.b)("/contacts/fetchContactRequest"),fetchContactSucess:Object(c.b)("/contacts/fetchContactSucess"),fetchContactError:Object(c.b)("/contacts/fetchContactError")};e.a=a},21:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return h.a})),n.d(e,"b",(function(){return v}));var r=n(5),c=n.n(r),a=n(13),u=n(15),o=n.n(u),i=n(4);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var s,l,b=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},d=function(){o.a.defaults.headers.common.Authorization=""},f=Object(i.c)("auth/register",function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/signup",e);case 3:return n=t.sent,r=n.data,b(r.token),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),j=Object(i.c)("auth/login",function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/login",e);case 3:return n=t.sent,r=n.data,b(r.token),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),p={register:f,logOut:Object(i.c)("auth/logout",Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/logout");case 3:d(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))),logIn:j,fetchCurrentUser:Object(i.c)("auth/refresh",function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u,i,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.getState(),null!==(u=null===a||void 0===a||null===(r=a.auth)||void 0===r?void 0:r.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return t.prev=4,b(u),t.next=8,o.a.get("/users/current");case 8:return i=t.sent,s=i.data,t.abrupt("return",s);case 13:t.prev=13,t.t0=t.catch(4),console.log(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e,n){return t.apply(this,arguments)}}())},h=n(16),O=n(2),v=Object(i.e)((l={name:"auth",initialState:{user:{name:null,email:null},token:null,isLogIn:!1,isLoding:!1},extraReducers:(s={},Object(O.a)(s,p.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLogIn=!0})),Object(O.a)(s,p.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLogIn=!0})),Object(O.a)(s,p.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLogIn=!1})),Object(O.a)(s,p.fetchCurrentUser.pending,(function(t){t.isLoding=!0,t.isLogIn=!0})),s)},Object(O.a)(l,p.fetchCurrentUser.fulfilled,(function(t,e){t.isLogIn=!1,t.user=e.payload,t.isLoding=!1})),Object(O.a)(l,p.fetchCurrentUser.rejected,(function(t){t.isLoding=!1})),l)).reducer},47:function(t,e,n){t.exports={container:"Container_container__3RIox"}},85:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(0),a=n.n(c),u=n(26),o=n.n(u),i=n(19),s=n(7),l=n(46),b=n(6),d=n(16),f={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},j=function(){var t=Object(s.c)(d.a.getIsLogIn);return Object(r.jsxs)("nav",{children:[Object(r.jsx)(i.b,{to:"/",exact:!0,style:f.link,activeStyle:f.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),t&&Object(r.jsx)(i.b,{to:"/contacts",exact:!0,style:f.link,activeStyle:f.activeLink,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"})]})},p=n(21),h=n.p+"static/media/default-avatar.b50d0699.png",O={container:{display:"flex",alignItems:"center"},avatar:{marginRight:8},name:{fontWeight:700,marginRight:12}};function v(){var t=Object(s.b)(),e=Object(s.c)(p.c.getUsername),n=h;return Object(r.jsxs)("div",{style:O.container,children:[Object(r.jsx)("img",{src:n,alt:"",width:"32",style:O.avatar}),Object(r.jsxs)("span",{style:O.name,children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",e]}),Object(r.jsx)("button",{type:"button",onClick:function(){return t(p.a.logOut())},className:"buttonOut",children:"\u0412\u044b\u0439\u0442\u0438"})]})}var g={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}};function x(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(i.b,{to:"/register",exact:!0,style:g.link,activeStyle:g.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(r.jsx)(i.b,{to:"/login",exact:!0,style:g.link,activeStyle:g.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})}var m={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}};function y(){var t=Object(s.c)(d.a.getIsLogIn);return Object(r.jsxs)("header",{style:m.header,children:[Object(r.jsx)(j,{}),t?Object(r.jsx)(v,{}):Object(r.jsx)(x,{})]})}var k=n(47),w=n.n(k);function L(t){var e=t.children;return Object(r.jsx)("div",{className:w.a.container,children:e})}var C=n(23),I=n(28);function S(t){var e=t.children,n=t.redirectTo,c=void 0===n?"/":n,a=Object(I.a)(t,["children","redirectTo"]),u=Object(s.c)(d.a.getIsLogIn);return Object(r.jsx)(b.b,Object(C.a)(Object(C.a)({},a),{},{children:u?e:Object(r.jsx)(b.a,{to:c})}))}function R(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,a=t.redirectTo,u=void 0===a?"/":a,o=Object(I.a)(t,["children","restricted","redirectTo"]),i=Object(s.c)(d.a.getIsLogIn)&&c;return Object(r.jsx)(b.b,Object(C.a)(Object(C.a)({},o),{},{children:i?Object(r.jsx)(b.a,{to:u}):e}))}var E=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,97))})),U=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,94))})),A=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,95))})),T=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,96))}));function _(){var t=Object(s.b)(),e=Object(s.c)(d.a.getIsLoding);return Object(c.useEffect)((function(){t(p.a.fetchCurrentUser())}),[t]),Object(r.jsx)(L,{children:e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y,{}),Object(r.jsx)(b.d,{children:Object(r.jsxs)(c.Suspense,{fallback:Object(r.jsx)("div",{className:"loader",children:Object(r.jsx)("div",{className:"loader_inner"})}),children:[Object(r.jsx)(R,{exact:!0,path:"/",children:Object(r.jsx)(E,{})}),Object(r.jsx)(R,{exact:!0,path:"/register",redirectTo:"/contacts",restricted:!0,children:Object(r.jsx)(U,{})}),Object(r.jsx)(R,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(r.jsx)(A,{})}),Object(r.jsx)(S,{path:"/contacts",redirectTo:"/login",children:Object(r.jsx)(T,{})})]})})]}):Object(r.jsx)("div",{className:"loader",children:Object(r.jsx)("div",{className:"loader_inner"})})})}var z,F,B,N=n(27),W=n(4),q=n(20),D=n(48),V=n.n(D),J=n(2),M=n(8),P=n(17),G=n(14),H=Object(W.d)([],(z={},Object(J.a)(z,P.a.fetchContactSucess,(function(t,e){return e.payload})),Object(J.a)(z,G.b.fulfilled,(function(t,e){var n=e.payload;return n?[].concat(Object(N.a)(t),[n]):t})),Object(J.a)(z,G.a.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),z)),K=Object(W.d)(!1,(F={},Object(J.a)(F,P.a.fetchContactRequest,(function(){return!0})),Object(J.a)(F,P.a.fetchContactSucess,(function(){return!1})),Object(J.a)(F,P.a.fetchContactError,(function(){return!1})),Object(J.a)(F,G.b.pending,(function(){return!0})),Object(J.a)(F,G.b.fulfilled,(function(){return!1})),Object(J.a)(F,G.b.rejected,(function(){return!1})),Object(J.a)(F,G.a.pending,(function(){return!0})),Object(J.a)(F,G.a.fulfilled,(function(){return!1})),Object(J.a)(F,G.a.rejected,(function(){return!1})),F)),Q=Object(W.d)(null,(B={},Object(J.a)(B,P.a.fetchContactError,(function(t,e){return e.payload})),Object(J.a)(B,P.a.fetchContactSucess,(function(){return null})),Object(J.a)(B,G.b.rejected,(function(t,e){return e.payload})),Object(J.a)(B,G.b.fulfilled,(function(){return null})),Object(J.a)(B,G.a.rejected,(function(t,e){return e.payload})),Object(J.a)(B,G.a.fulfilled,(function(){return null})),B)),X=Object(W.d)("",Object(J.a)({},P.a.filters,(function(t,e){return e.payload}))),Y={contactsReduscer:Object(M.c)({entris:H,isLoding:K,error:Q}),reducerFilter:X},Z=Object(N.a)(Object(W.f)({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})),$={key:"auth",storage:V.a,whitelist:["token","user"]},tt=Object(W.a)({reducer:{auth:Object(q.g)($,p.b),contacts:Y.contactsReduscer,filter:Y.reducerFilter},middleware:Z,devTools:!1}),et=Object(q.h)(tt);n(84),n(85);o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(s.a,{store:tt,children:Object(r.jsx)(l.a,{loading:null,persistor:et,children:Object(r.jsx)(i.a,{children:Object(r.jsx)(_,{})})})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.274b734a.chunk.js.map