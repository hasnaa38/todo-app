(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{261:function(e,t){},270:function(e,t){},272:function(e,t){},287:function(e,t){},289:function(e,t){},317:function(e,t){},319:function(e,t){},320:function(e,t){},325:function(e,t){},327:function(e,t){},333:function(e,t){},335:function(e,t){},354:function(e,t){},366:function(e,t){},369:function(e,t){},407:function(e,t,n){},408:function(e,t,n){},409:function(e,t,n){},410:function(e,t,n){},411:function(e,t,n){},415:function(e,t,n){"use strict";n.r(t);var c=n(182),a=n(183),i=n(192),s=n(191),r=n(0),l=n.n(r),o=n(18),j=n.n(o),b=n(10),u=n(1),d=l.a.createContext();function O(e){var t=Object(r.useState)({displayCompleted:!1,pageLimit:4}),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(!1),s=Object(b.a)(i,2),l=s[0],o=s[1];Object(r.useEffect)((function(){a(JSON.parse(localStorage.getItem("pageSettingsContext"))||c),console.log(c)}),[l]);var j={displayCompleted:c.displayCompleted,pageLimit:c.pageLimit,submitFlag:l,setSubmitFlag:o};return Object(u.jsx)(d.Provider,{value:j,children:e.children})}var p=n(102),m=n.n(p),x=n(184),h=n(185),f=n.n(h),g=n(186),v=n.n(g),C=n(187),S=n.n(C),y=n(70),I=n.n(y),L=l.a.createContext();var k=function(e){var t=Object(r.useState)(!1),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)({email:"",capabilities:[]}),s=Object(b.a)(i,2),l=s[0],o=s[1];l.capabilities=["read","create","update","delete"];var j=function(){var e=Object(x.a)(m.a.mark((function e(t,n){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("".concat("https://jam3ey.herokuapp.com","/signin")).set("authorization","Basic ".concat(v.a.encode("".concat(t,":").concat(n))));case 3:c=e.sent,console.log(c),d(c.body.token),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(e){if(e){var t=S.a.decode(e);a(!0),o(t),I.a.save("token",e)}else a(!1),o({})};Object(r.useEffect)((function(){var e=I.a.load("token");d(e)}),[]);var O={isLoggedIn:c,user:l,lofInFunction:j,logOutFunction:function(){a(!1),o({}),I.a.remove("token")},can:function(e){var t;return null===l||void 0===l||null===(t=l.capabilities)||void 0===t?void 0:t.includes(e)}};return Object(u.jsx)(L.Provider,{value:O,children:e.children})},N=l.a.createContext();function D(e){var t=Object(r.useState)(0),n=Object(b.a)(t,2),c={incomplete:n[0],setIncomplete:n[1]};return Object(u.jsx)(N.Provider,{value:c,children:e.children})}var F=n(35);function w(e){var t=Object(r.useContext)(L),n=t.isLoggedIn,c=t.can(e.capability);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(F.a,{condition:n&&c,children:e.children})})}var J=n(423),P=n(2);function A(e){var t=e.handleCloseDrawer,n=Object(r.useContext)(d),c=Object(r.useState)(n.displayCompleted),a=Object(b.a)(c,2),i=a[0],s=a[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={displayCompleted:i,pageLimit:e.target.pageLimit.value||n.pageLimit};localStorage.setItem("pageSettingsContext",JSON.stringify(c)),n.setSubmitFlag(!n.submitFlag),t()},children:[Object(u.jsx)("h4",{"data-testid":"formHeader",children:"Page Settings"}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)(J.e,{checked:!0===i,label:"Display Completed",onChange:function(){s(!0!==i)}}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{class:"bp3-label",children:[Object(u.jsx)("span",{children:"Items Per Page"}),Object(u.jsx)("input",{class:"bp3-input",name:"pageLimit",type:"number"}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:["Current Items Per Page: ",n.pageLimit]})})]}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:Object(u.jsx)(J.a,{class:"bp3-button",type:"submit",children:"Save Changes"})})]})}function T(){var e=Object(r.useContext)(L),t=Object(r.useContext)(N),n=Object(r.useState)(!1),c=Object(b.a)(n,2),a=c[0],i=c[1],s=function(){i(!1)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(J.d,{class:"bp3-navbar bp3-dark",style:{background:"#008075"},children:[Object(u.jsxs)(J.d.Group,{children:[Object(u.jsx)(J.d.Heading,{children:Object(u.jsx)("strong",{children:"ToDo List Manager"})}),Object(u.jsx)(J.d.Divider,{}),Object(u.jsx)(w,{capability:"read",children:Object(u.jsxs)("strong",{children:[t.incomplete," items pending"]})})]}),Object(u.jsxs)(J.d.Group,{className:"bp3-navbar-group bp3-align-right",children:[Object(u.jsx)(F.a,{condition:!e.isLoggedIn,children:Object(u.jsx)(J.a,{className:"bp3-minimal",icon:"log-in",text:"Login"})}),Object(u.jsxs)(F.a,{condition:e.isLoggedIn,children:[Object(u.jsx)(J.a,{className:"bp3-minimal",icon:"home",text:"Home"}),Object(u.jsx)(J.a,{className:"bp3-minimal ",icon:"cog",text:"Settings",onClick:function(){return i(!0)}}),Object(u.jsx)(J.a,{className:"bp3-minimal",icon:"log-out",text:"Logout",onClick:e.logOutFunction})]})]})]}),Object(u.jsx)(J.c,{style:{left:"30"},isOpen:a,onClose:s,size:"300px",usePortal:!0,hasBackdrop:!0,canOutsideClickClose:!0,children:Object(u.jsx)("div",{className:P.a.DRAWER_BODY,children:Object(u.jsx)("div",{className:P.a.DIALOG_BODY,children:Object(u.jsx)(A,{handleCloseDrawer:s})})})})]})}var B=n(29),E=(n(407),n(45)),H=n(48),G=function(e){var t=Object(r.useState)({}),n=Object(b.a)(t,2),c=n[0],a=n[1];return{handleChange:function(e){e.persist(),a((function(t){return Object(H.a)(Object(H.a)({},t),{},Object(E.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(c)},values:c}},z=n(424);n(408);function M(e){var t=e.addItem,n=G((function(e){e.id=Object(z.a)(),e.complete=!1,e.difficulty||(e.difficulty=3);t(e)})),c=n.handleChange,a=n.handleSubmit;return Object(u.jsxs)("form",{id:"newForm",onSubmit:a,children:[Object(u.jsx)("h4",{"data-testid":"formHeader",children:"Add a New ToDo"}),Object(u.jsxs)("label",{class:"bp3-label",children:[Object(u.jsx)("span",{children:"Title"}),Object(u.jsx)("input",{class:"bp3-input",onChange:c,name:"text",type:"text",placeholder:"Item Details"})]}),Object(u.jsxs)("label",{class:"bp3-label",children:[Object(u.jsx)("span",{children:"Assigned To"}),Object(u.jsx)("input",{class:"bp3-input",onChange:c,name:"assignee",type:"text",placeholder:"Assignee Name"})]}),Object(u.jsxs)("label",{class:"bp3-label",children:[Object(u.jsx)("span",{children:"Difficulty"}),"\xa0",Object(u.jsx)("input",{onChange:c,defaultValue:3,type:"range",min:1,max:5,name:"difficulty"})]}),Object(u.jsx)("label",{children:Object(u.jsx)(J.a,{class:"bp3-button",type:"submit",children:"Add Item"})})]})}var R=n(27);n(409);function W(e){var t=e.item,n=e.toggleComplete;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(J.b,{interactive:!0,elevation:R.a.TWO,children:[Object(u.jsx)("h5",{children:t.text}),Object(u.jsxs)("p",{children:["Assigned to: ",t.assignee]}),Object(u.jsxs)("p",{children:["Difficulty: ",t.difficulty]}),Object(u.jsxs)(w,{capability:"update",children:["Completed: ",Object(u.jsx)(J.a,{class:"bp3-button",onClick:function(){return n(t.id)},children:t.complete.toString()})]})]}),Object(u.jsx)("br",{})]})}var Y=n(420),_=n(421),U=n(422),V=function(){var e=Object(r.useContext)(d),t=Object(r.useContext)(N),n=JSON.parse(localStorage.getItem("list"))||[],c=JSON.parse(localStorage.getItem("completedList"))||[],a=Object(r.useState)(n),i=Object(b.a)(a,2),s=i[0],l=i[1],o=Object(r.useState)(c),j=Object(b.a)(o,2),O=j[0],p=j[1],m=Object(r.useState)([]),x=Object(b.a)(m,2),h=x[0],f=x[1],g=Object(r.useState)([]),v=Object(b.a)(g,2),C=v[0],S=v[1],y=Object(r.useState)([]),I=Object(b.a)(y,2),L=I[0],k=I[1],D=Object(r.useState)(1),F=Object(b.a)(D,2),P=F[0],A=F[1],T=Object(r.useState)(1),E=Object(b.a)(T,2),H=E[0],G=E[1],z=Object(r.useState)([]),R=Object(b.a)(z,2),V=R[0],q=R[1],K=Object(r.useState)([]),Q=Object(b.a)(K,2),X=Q[0],Z=Q[1];function $(e){var t=[].concat(Object(B.a)(s),Object(B.a)(O));t.map((function(t){return t.id===e&&(t.complete=!t.complete),t}));var n=t.filter((function(e){return e.complete}));p(Object(B.a)(n));var c=t.filter((function(e){return!e.complete}));l(Object(B.a)(c)),localStorage.setItem("completedList",JSON.stringify(Object(B.a)(n))),localStorage.setItem("list",JSON.stringify(Object(B.a)(c)))}function ee(t,n,c,a){var i=Math.ceil(t.length/e.pageLimit);n(Array.from({length:i},(function(e,t){return t+1}))),c(function(e,t){for(var n=[],c=Number(t),a=0;a<e.length;a+=c){var i=e.slice(a,a+c);n.push(i)}return n}(t,e.pageLimit)[a-1])}return Object(r.useEffect)((function(){var e=s.length;f(e),t.setIncomplete(e),document.title="To Do List: ".concat(h),ee(s,q,S,P),ee(O,Z,k,H)}),[s,O,P,H]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(Y.a,{id:"homepage",children:Object(u.jsxs)(_.a,{children:[Object(u.jsx)(U.a,{children:Object(u.jsx)(w,{capability:"create",children:Object(u.jsx)(M,{addItem:function(e){l([e].concat(Object(B.a)(s))),function(e){localStorage.setItem("list",JSON.stringify(e))}(s)}})})}),Object(u.jsx)(U.a,{children:Object(u.jsxs)(w,{capability:"read",children:[Object(u.jsx)("h5",{children:"Uncompleted Tasks"}),Object(u.jsx)("div",{id:"pageNumbers",children:null===V||void 0===V?void 0:V.map((function(e){return Object(u.jsx)("div",{style:{padding:"5px"},children:Object(u.jsxs)(J.a,{className:"bp3-button",style:{cursor:"pointer"},onClick:function(){return function(e){A(e)}(e)},children:[" ",e," "]})})}))}),null===C||void 0===C?void 0:C.map((function(e){return Object(u.jsx)(W,{item:e,toggleComplete:$},e.id)})),Object(u.jsx)("br",{}),e.displayCompleted&&Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{children:"Completed Tasks"}),Object(u.jsx)("div",{id:"pageNumbers",children:null===X||void 0===X?void 0:X.map((function(e){return Object(u.jsx)("div",{style:{padding:"5px"},children:Object(u.jsxs)(J.a,{className:"bp3-button",style:{cursor:"pointer"},onClick:function(){return function(e){G(e)}(e)},children:[" ",e," "]})})}))}),null===L||void 0===L?void 0:L.map((function(e){return Object(u.jsx)(W,{item:e,toggleComplete:$},e.id)}))]})]})})]})})})};n(410);function q(){var e=Object(r.useContext)(L),t=Object(r.useState)({username:"",password:""}),n=Object(b.a)(t,2),c=n[0],a=n[1],i=function(e){e.preventDefault(),a(Object(H.a)(Object(H.a)({},c),{},Object(E.a)({},e.target.name,e.target.value)))};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(F.a,{condition:!e.isLoggedIn,children:Object(u.jsxs)("form",{id:"newForm",onSubmit:function(t){t.preventDefault(),e.lofInFunction(c.username,c.password)},children:[Object(u.jsx)("h2",{children:"Log In Form"}),Object(u.jsxs)("label",{class:"bp3-label",children:[Object(u.jsx)("span",{children:"username"}),Object(u.jsx)("input",{class:"bp3-input",type:"text",name:"username",placeholder:"username",onChange:i})]}),Object(u.jsxs)("label",{class:"bp3-label",children:[Object(u.jsx)("span",{children:"password"}),Object(u.jsx)("input",{class:"bp3-input",type:"password",name:"password",placeholder:"password",onChange:i})]}),Object(u.jsx)("label",{children:Object(u.jsx)("button",{class:"bp3-button",type:"submit",children:"login"})})]})})})}n(411),n(412);function K(){return Object(u.jsx)(k,{children:Object(u.jsx)(O,{children:Object(u.jsxs)(D,{children:[Object(u.jsx)(T,{}),Object(u.jsx)(q,{}),Object(u.jsx)(V,{})]})})})}n(413),n(414);var Q=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(u.jsx)(K,{})}}]),n}(l.a.Component),X=document.getElementById("root");j.a.render(Object(u.jsx)(Q,{}),X)}},[[415,1,2]]]);
//# sourceMappingURL=main.f534c802.chunk.js.map