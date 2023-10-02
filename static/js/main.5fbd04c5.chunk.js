(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(22),a=(n(31),n(32),n(6)),r=n(3),s=(n(33),n(7)),i=n.n(s),j=n(2),o=function(){var e=function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})};return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(a.c,{className:e,to:"/",children:"Home"}),Object(j.jsx)(a.c,{className:e,to:"/people",children:"People"})]})})})},l=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(o,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(r.b,{})})})]})},b=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},d=n(4),h=n(0),u=(n(35),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var x=function(e){var t=e.person;return Object(j.jsx)(a.b,{to:"../".concat(null===t||void 0===t?void 0:t.slug),className:i()({"has-text-danger":"f"===(null===t||void 0===t?void 0:t.sex)}),children:null===t||void 0===t?void 0:t.name})},p=function(e){var t=e.person,n=e.personMother,c=e.personFather,a=t.slug,s=t.sex,o=t.born,l=t.died,b=t.motherName,d=t.fatherName,h=Object(r.r)().slug;return Object(j.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":h===a}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(x,{person:t})}),Object(j.jsx)("td",{children:s}),Object(j.jsx)("td",{children:o}),Object(j.jsx)("td",{children:l}),Object(j.jsx)("td",{children:n?Object(j.jsx)(x,{person:n}):null!==b&&void 0!==b?b:"-"}),Object(j.jsx)("td",{children:c?Object(j.jsx)(x,{person:c}):null!==d&&void 0!==d?d:"-"})]},a)},m=function(e){var t=e.people;return Object(j.jsx)("tbody",{children:t.map((function(e){var n=e.slug,c=e.motherName,a=e.fatherName,r=t.find((function(e){return e.name===c})),s=t.find((function(e){return e.name===a}));return Object(j.jsx)(p,{person:e,personMother:r,personFather:s},n)}))})},f=function(e){var t=e.people;return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:i()("table","is-striped","is-hoverable","is-narrow","is-fullwidth"),children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:["Name","Sex","Born","Died","Mother","Father"].map((function(e){return Object(j.jsx)("th",{children:e},e)}))})}),Object(j.jsx)(m,{people:t})]})},v=function(){var e=Object(h.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(h.useState)(!1),r=Object(d.a)(a,2),s=r[0],i=r[1],o=Object(h.useState)(!1),l=Object(d.a)(o,2),b=l[0],x=l[1];Object(h.useEffect)((function(){i(!0),O().then(c).catch((function(){x(!0)})).finally((function(){return i(!1)}))}),[]);var p=b&&!s,m=!n.length&&!s&&!b,v=!!n.length&&!b;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[s&&Object(j.jsx)(u,{}),p&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),m&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),v&&Object(j.jsx)(f,{people:n})]})})]})},g=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},N=function(){return Object(j.jsx)(a.a,{children:Object(j.jsx)(r.e,{children:Object(j.jsxs)(r.c,{path:"/",element:Object(j.jsx)(l,{}),children:[Object(j.jsx)(r.c,{index:!0,element:Object(j.jsx)(g,{})}),Object(j.jsx)(r.c,{path:"people",children:Object(j.jsx)(r.c,{path:":slug?",element:Object(j.jsx)(v,{})})}),Object(j.jsx)(r.c,{path:"*",element:Object(j.jsx)(b,{})}),Object(j.jsx)(r.c,{path:"home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})})]})})})};Object(c.createRoot)(document.getElementById("root")).render(Object(j.jsx)(N,{}))}},[[36,1,2]]]);
//# sourceMappingURL=main.5fbd04c5.chunk.js.map