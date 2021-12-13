(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{118:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var c=n(47),a=n(48),i=n(53),s=n(52),r=n(0),l=n.n(r),j=n(7),b=n.n(j),o=n(9),u=n(1),d=l.a.createContext();function p(e){var t=Object(r.useState)({displayCompleted:!1,pageLimit:4}),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(!1),s=Object(o.a)(i,2),l=s[0],j=s[1];Object(r.useEffect)((function(){a(JSON.parse(localStorage.getItem("pageSettingsContext"))||c),console.log(c)}),[l]);var b={displayCompleted:c.displayCompleted,pageLimit:c.pageLimit,submitFlag:l,setSubmitFlag:j};return Object(u.jsx)(d.Provider,{value:b,children:e.children})}var O=n(22);n(118);var m=function(e){var t=e.incomplete;return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"ToDo List Manager"}),Object(u.jsxs)("h2",{children:["To Do List: ",t," items pending"]})]})},h=n(21),f=n(29),x=function(e){var t=Object(r.useState)({}),n=Object(o.a)(t,2),c=n[0],a=n[1];return{handleChange:function(e){e.persist(),a((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(h.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(c)},values:c}},g=n(149),v=n(148);function C(e){var t=e.addItem,n=x((function(e){e.id=Object(g.a)(),e.complete=!1,e.difficulty||(e.difficulty=3);t(e)})),c=n.handleChange,a=n.handleSubmit;return Object(u.jsxs)("form",{onSubmit:a,children:[Object(u.jsx)("h2",{"data-testid":"formHeader",children:"Add To Do Item"}),Object(u.jsxs)("label",{class:"bp3-label",children:[Object(u.jsx)("span",{children:"To Do Item"}),Object(u.jsx)("input",{class:"bp3-input",onChange:c,name:"text",type:"text",placeholder:"Item Details"})]}),Object(u.jsxs)("label",{class:"bp3-label",children:[Object(u.jsx)("span",{children:"Assigned To"}),Object(u.jsx)("input",{class:"bp3-input",onChange:c,name:"assignee",type:"text",placeholder:"Assignee Name"})]}),Object(u.jsxs)("label",{class:"bp3-label",children:[Object(u.jsx)("span",{children:"Difficulty"}),Object(u.jsx)("input",{onChange:c,defaultValue:3,type:"range",min:1,max:5,name:"difficulty"})]}),Object(u.jsx)("label",{children:Object(u.jsx)(v.a,{class:"bp3-button",type:"submit",children:"Add Item"})})]})}var y=n(11);function S(e){var t=e.item,n=e.toggleComplete;return Object(u.jsxs)("div",{children:[Object(u.jsxs)(v.b,{interactive:!0,elevation:y.a.TWO,children:[Object(u.jsx)("h5",{children:Object(u.jsx)("a",{href:"#",children:t.text})}),Object(u.jsxs)("p",{children:["Assigned to: ",t.assignee]}),Object(u.jsxs)("p",{children:["Difficulty: ",t.difficulty]}),"Completed: ",Object(u.jsx)(v.a,{class:"bp3-button",onClick:function(){return n(t.id)},children:t.complete.toString()})]}),Object(u.jsx)("br",{})]})}function D(){var e=Object(r.useContext)(d),t=Object(r.useState)(e.displayCompleted),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={displayCompleted:c,pageLimit:t.target.pageLimit.value};localStorage.setItem("pageSettingsContext",JSON.stringify(n)),e.setSubmitFlag(!e.submitFlag)},children:[Object(u.jsx)("h2",{"data-testid":"formHeader",children:"Page Settings"}),Object(u.jsx)(v.c,{checked:!0===c,label:"Display Completed",onChange:function(){a(!0!==c)}}),Object(u.jsxs)("label",{class:"bp3-label",children:[Object(u.jsx)("span",{children:"Items Per Page"}),Object(u.jsx)("input",{class:"bp3-input",name:"pageLimit",type:"number"})]}),Object(u.jsx)("label",{children:Object(u.jsx)(v.a,{class:"bp3-button",type:"submit",children:"Save Changes"})})]})})}var L=function(){var e=Object(r.useContext)(d),t=Object(r.useState)([]),n=Object(o.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)([]),s=Object(o.a)(i,2),l=s[0],j=s[1],b=Object(r.useState)([]),p=Object(o.a)(b,2),h=p[0],f=p[1],x=Object(r.useState)([]),g=Object(o.a)(x,2),v=g[0],y=g[1],L=Object(r.useState)(1),I=Object(o.a)(L,2),T=I[0],k=I[1],A=Object(r.useState)([]),F=Object(o.a)(A,2),J=F[0],N=F[1];function P(e){c.map((function(t){return t.id===e&&(t.complete=!t.complete),t}));var t=c.filter((function(e){return e.complete}));f([].concat(Object(O.a)(t),Object(O.a)(h)));var n=c.filter((function(e){return!e.complete}));a(n)}return Object(r.useEffect)((function(){var t=c.length;j(t),document.title="To Do List: ".concat(l);var n=Math.ceil(c.length/e.pageLimit),a=Array.from({length:n},(function(e,t){return t+1}));y(a);var i=function(e,t){for(var n=[],c=0;c<e.length;c+=t){var a=e.slice(c,c+t);n.push(a)}return n}(c,e.pageLimit);N(i[T-1])}),[c,T]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{incomplete:l}),Object(u.jsx)(C,{addItem:function(e){a([e].concat(Object(O.a)(c)))}}),null===J||void 0===J?void 0:J.map((function(e){return Object(u.jsx)(S,{item:e,toggleComplete:P},e.id)})),Object(u.jsx)("dev",{id:"pageNumbers",children:v.map((function(e){return Object(u.jsxs)("p",{style:{cursor:"pointer"},onClick:function(){return function(e){k(e)}(e)},children:[e,"  \xa0"]})}))}),e.displayCompleted&&Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Completed list:"}),h.map((function(e){return Object(u.jsx)(S,{item:e,toggleComplete:P},e.id)}))]}),Object(u.jsx)(D,{})]})};function I(){return Object(u.jsx)(p,{children:Object(u.jsx)(L,{})})}n(142),n(143);var T=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(u.jsx)(I,{})}}]),n}(l.a.Component),k=document.getElementById("root");b.a.render(Object(u.jsx)(T,{}),k)}},[[144,1,2]]]);
//# sourceMappingURL=main.1f6d6e49.chunk.js.map