(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{38:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){"use strict";t.r(c);var s=t(0),n=t(1),i=t.n(n),a=t(31),j=t.n(a),l=(t(38),t(12)),r=t(5),d=t(6),b=t(11),h=t.n(b),o=function(){var e=Object(n.useState)(null),c=Object(l.a)(e,2),t=c[0],i=c[1];return Object(n.useEffect)((function(){h.a.get("http://localhost:8080/api/about-me").then((function(e){return i(e.data)}))}),[]),null===t?Object(s.jsx)("p",{children:"Loading"}):Object(s.jsxs)("div",{className:"header",children:[t.map((function(e){return Object(s.jsxs)("div",{className:"about-me-container",children:[Object(s.jsxs)("h1",{className:"my-firstname",children:[e.firstname," ",e.lastname]}),Object(s.jsx)("h2",{className:"my-lastname",children:e.title}),Object(s.jsx)("span",{className:"subtitle",children:e.subtitle}),Object(s.jsx)("h3",{className:"my-description",children:e.description})]},e.id)})),Object(s.jsxs)("div",{className:"my-stack-container",children:[Object(s.jsxs)("div",{className:"my-stack",children:[Object(s.jsx)("span",{children:Object(s.jsx)(r.a,{icon:d.e,size:"3x"})}),Object(s.jsx)("div",{className:"stack-name",children:"JavaScript"})]}),Object(s.jsxs)("div",{className:"my-stack",children:[Object(s.jsx)("span",{children:Object(s.jsx)(r.a,{icon:d.h,size:"3x"})}),Object(s.jsx)("div",{className:"stack-name",children:"Node.js"})]}),Object(s.jsxs)("div",{className:"my-stack",children:[Object(s.jsx)("span",{children:Object(s.jsx)(r.a,{icon:d.j,size:"3x"})}),Object(s.jsx)("div",{className:"stack-name",children:"ReactJS"})]}),Object(s.jsxs)("div",{className:"my-stack",children:[Object(s.jsx)("span",{children:Object(s.jsx)(r.a,{icon:d.m,size:"3x"})}),Object(s.jsx)("div",{className:"stack-name",children:"Vue.js"})]}),Object(s.jsxs)("div",{className:"my-stack",children:[Object(s.jsx)("span",{children:Object(s.jsx)(r.a,{icon:d.i,size:"3x"})}),Object(s.jsx)("div",{className:"stack-name",children:"PHP"})]}),Object(s.jsxs)("div",{className:"my-stack",children:[Object(s.jsx)("span",{children:Object(s.jsx)(r.a,{icon:d.f,size:"3x"})}),Object(s.jsx)("div",{className:"stack-name",children:"Laravel"})]}),Object(s.jsxs)("div",{className:"my-stack",children:[Object(s.jsx)("span",{children:Object(s.jsx)(r.a,{icon:d.b,size:"3x"})}),Object(s.jsx)("div",{className:"stack-name",children:"Git"})]}),Object(s.jsxs)("div",{className:"my-stack",children:[Object(s.jsx)("span",{children:Object(s.jsx)(r.a,{icon:d.c,size:"3x"})}),Object(s.jsx)("div",{className:"stack-name",children:"Github"})]}),Object(s.jsxs)("div",{className:"my-stack",children:[Object(s.jsx)("span",{children:Object(s.jsx)(r.a,{icon:d.d,size:"3x"})}),Object(s.jsx)("div",{className:"stack-name",children:"Gitlab"})]}),Object(s.jsxs)("div",{className:"my-stack",children:[Object(s.jsx)("span",{children:Object(s.jsx)(r.a,{icon:d.a,size:"3x"})}),Object(s.jsx)("div",{className:"stack-name",children:"Figma"})]}),Object(s.jsxs)("div",{className:"my-stack",children:[Object(s.jsx)("span",{children:Object(s.jsx)(r.a,{icon:d.l,size:"3x"})}),Object(s.jsx)("div",{className:"stack-name",children:"Trello"})]}),Object(s.jsxs)("div",{className:"my-stack",children:[Object(s.jsx)("span",{children:Object(s.jsx)(r.a,{icon:d.k,size:"3x"})}),Object(s.jsx)("div",{className:"stack-name",children:"Slack"})]})]})]})},x=t(13),O=function(){var e=Object(n.useState)(null),c=Object(l.a)(e,2),t=c[0],i=c[1];return Object(n.useEffect)((function(){h.a.get("http://localhost:8080/api/projects").then((function(e){return i(e.data)}))}),[]),null===t?Object(s.jsx)("p",{children:"Loading"}):Object(s.jsx)("div",{className:"project-list",children:t.map((function(e){return Object(s.jsx)("div",{className:"project-info-container",children:Object(s.jsx)(x.b,{to:"project",className:"project-link",children:Object(s.jsxs)("figure",{children:[Object(s.jsx)("img",{src:e.project_img,alt:e.project_title}),Object(s.jsx)("figcaption",{children:e.project_title})]})},e.id)},e.id)}))})},m=function(){var e=Object(n.useState)(null),c=Object(l.a)(e,2),t=c[0],i=c[1];return Object(n.useEffect)((function(){h.a.get("http://localhost:8080/api/about-me/links").then((function(e){return i(e.data)}))}),[]),null===t?Object(s.jsx)("div",{children:"Loading ..."}):Object(s.jsxs)("div",{className:"footer",children:["Vous d\xe9sirez en savoir plus sur mon profil et mes motivations ?",t.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsxs)("a",{href:"mailto:".concat(e.email),children:["N'h\xe9sitez pas \xe0 me contacter ",Object(s.jsx)("span",{className:"email",children:e.email})]})},"mail"),Object(s.jsxs)("span",{className:"logo-container",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:e.linkedin_profil,target:"blank",children:Object(s.jsx)(r.a,{icon:d.g,size:"2x"})})},"likedin"),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:e.github_profil,target:"blank",children:Object(s.jsx)(r.a,{icon:d.c,size:"2x"})})},"github")]})]})},e.id)}))]})},u=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{}),Object(s.jsx)(O,{}),Object(s.jsx)(m,{})]})},p=function(){var e=Object(n.useState)(null),c=Object(l.a)(e,2),t=c[0],i=c[1];return Object(n.useEffect)((function(){h.a.get("http://localhost:8080/api/projects").then((function(e){return i(e.data)}))}),[]),null===t?Object(s.jsx)("p",{children:"Loading"}):Object(s.jsxs)("div",{className:"container-getProject",children:[Object(s.jsx)(x.b,{className:"back-dashboard",to:"/",children:Object(s.jsx)("div",{class:"box-2",children:Object(s.jsx)("div",{class:"btn btn-two",children:Object(s.jsx)("span",{children:"RETOUR"})})})}),t.map((function(e){return Object(s.jsx)("div",{className:"container-project",children:Object(s.jsxs)("figure",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.project_title}),Object(s.jsx)("img",{src:e.project_img,alt:e.project_title})]}),Object(s.jsx)("h4",{children:e.project_stack}),Object(s.jsx)("h5",{children:Object(s.jsxs)("a",{href:e.project_github,target:"blank",children:[Object(s.jsx)(r.a,{icon:d.c,size:"2x"}),"Voir le lien Github"]})}),Object(s.jsx)("h5",{children:Object(s.jsx)("a",{href:e.project_link,target:"blank",children:e.project_link})}),Object(s.jsxs)("h5",{children:["cr\xe9\xe9 le : ",e.project_creation_date]}),Object(s.jsx)("figcaption",{children:e.project_description})]})},e.id)}))]})},f=t(3);t(61);var v=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(f.c,{children:[Object(s.jsx)(f.a,{exact:!0,path:"/",component:u}),Object(s.jsx)(f.a,{path:"/project",component:p})]})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,i=c.getLCP,a=c.getTTFB;t(e),s(e),n(e),i(e),a(e)}))};j.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(x.a,{children:Object(s.jsx)(v,{})})}),document.getElementById("root")),N()}},[[62,1,2]]]);
//# sourceMappingURL=main.8eeef6ee.chunk.js.map