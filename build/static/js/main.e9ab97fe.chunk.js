(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{10:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"i",(function(){return d})),n.d(e,"g",(function(){return f})),n.d(e,"j",(function(){return l})),n.d(e,"h",(function(){return p}));var r=n(27),a="FETCH_DATA_REQUEST",c="FETCH_DATA_SUCCESS",i="FETCH_DATA_ERROR",o="CREATE_DATA",u="UPDATE_DATA",s="DELETE_DATA";function d(t){return function(e){return e({type:a}),r.a.get("/to-do-list",{params:t}).then((function(t){if(t)return e({type:c,payload:t.data}),t;e({type:i})}))}}function f(t){return function(e){e({type:o,payload:t})}}function l(t){return function(e){e({type:u,payload:t})}}function p(t){return function(e){e({type:s,payload:t})}}},27:function(t,e,n){"use strict";var r=n(13),a=n.n(r),c=n(21),i=n(40),o=n.n(i),u=n(74),s=n(36),d=n(18),f=n.n(d),l=new u.a,p=o.a.create({baseURL:s.URL_API,timeout:2e4,headers:{"content-type":"application/json"}});p.interceptors.request.use((function(t){var e=l.get("id_token")||null;return e&&(t.headers.Authorization=e),t}),(function(t){return Promise.reject(t)})),p.interceptors.response.use(function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(401!==e.response.status){t.next=3;break}return f.a.fire("Error!","Unauthorized","error"),t.abrupt("return",!1);case 3:e.response.status>=500?f.a.fire("Error!","something error with server","error"):f.a.fire("Error!",e.response.data.messages.toString(),"error"),Promise.reject(e);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.a=p},36:function(t,e){t.exports={URL_API:"https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0",KEY_API_MOVIE:"ae1289e7e54981917cf14c16d013c9b8",URL_API_MOVIE:"https://api.themoviedb.org/3/",DUMMY_TOKEN:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTEyODllN2U1NDk4MTkxN2NmMTRjMTZkMDEzYzliOCIsInN1YiI6IjYxNWQ1OGIyZDE0NDQzMDA0MzY0OTU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3NZo5uBR3fXTmdKqdSPIffzOfAq5qpVS3YO2JnXAZ6s"}},49:function(t,e,n){},50:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var r=n(5),a=n(0),c=n.n(a),i=n(15),o=n.n(i),u=n(16),s=(n(49),n(50),function(t){t&&t instanceof Function&&n.e(10).then(n.bind(null,354)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))}),d=n(26),f=n(1),l=n(38),p=n(8),h=n(39),b=n(2);function j(t,e){var n=new Date(t.createdAt),r=new Date(e.createdAt);return n<r?-1:n>r?1:0}function O(t,e){var n=new Date(t.createdAt),r=new Date(e.createdAt);return n>r?-1:n<r?1:0}var D=n(10),y={isLoading:!1,listDataDone:[],listDataUnFinished:[]};function m(t,e,n){var r=t;return n===e.status&&r.push(e),r}function A(t,e,n){var r=t,a=r.findIndex((function(t){return t.id===e.id}));return-1!==a&&r.splice(a,1),n===e.status&&r.push(e),r}function v(t,e){var n=t,r=n.findIndex((function(t){return t.id===e.id}));return n.splice(r,1),n}var x=Object(p.combineReducers)({app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D.d:return Object(b.a)(Object(b.a)({},t),{},{isLoading:!0});case D.e:return Object(b.a)(Object(b.a)({},t),{},{isLoading:!1,listDataDone:e.payload.filter((function(t){return 1===t.status})).sort(O),listDataUnFinished:e.payload.filter((function(t){return 0===t.status})).sort(j)});case D.c:return Object(b.a)(Object(b.a)({},t),{},{isLoading:!1});case D.a:return Object(b.a)(Object(b.a)({},t),{},{listDataDone:m(t.listDataDone,e.payload,1),listDataUnFinished:m(t.listDataUnFinished,e.payload,0)});case D.f:return Object(b.a)(Object(b.a)({},t),{},{listDataDone:A(t.listDataDone,e.payload,1),listDataUnFinished:A(t.listDataUnFinished,e.payload,0)});case D.b:return Object(b.a)(Object(b.a)({},t),{},{listDataUnFinished:v(t.listDataUnFinished,e.payload)});default:return t}}}),E=Object(p.createStore)(x,Object(h.composeWithDevTools)(Object(p.applyMiddleware)(l.a))),g=[{path:"/welcome",exact:!0,component:Object(a.lazy)((function(){return n.e(8).then(n.bind(null,355))}))},{path:"/to-do",exact:!0,component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(6)]).then(n.bind(null,363))}))},{path:"/dummy",exact:!0,component:Object(a.lazy)((function(){return n.e(7).then(n.bind(null,362))}))},{path:"/",exact:!0,component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(9)]).then(n.bind(null,359))}))}],T=function(t){return Object(r.jsx)(a.Fragment,{children:g.map((function(e){return Object(r.jsx)(f.a,{path:e.path,exact:e.exact,render:function(n){return Object(r.jsx)(a.Suspense,{fallback:null,children:Object(r.jsx)(e.component,Object(b.a)(Object(b.a)({},n),t))})}},e.path)}))})},I=function(){var t=Object(f.g)();return console.log(t),Object(a.useEffect)((function(){}),[]),Object(r.jsx)(d.a,{store:E,children:Object(r.jsx)(f.c,{children:Object(r.jsx)(T,{})})})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(u.a,{children:Object(r.jsx)(I,{})})}),document.getElementById("root")),s()}},[[73,2,4]]]);
//# sourceMappingURL=main.e9ab97fe.chunk.js.map