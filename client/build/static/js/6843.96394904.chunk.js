"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6843],{6843:function(e,a,s){s.r(a),s.d(a,{default:function(){return v}});var n=s(2791),i=s(885),l=s(501),r={spanHeading:"Navbar_spanHeading__1MncI",spanHeadingtwo:"Navbar_spanHeadingtwo__qQJXQ",search:"Navbar_search__FBByp",header:"Navbar_header__298b1","profile-dropdown":"Navbar_profile-dropdown__B8hP4",pulse:"Navbar_pulse__ejNKU",email:"Navbar_email__6-4GG",box:"Navbar_box__sAsJq",fa:"Navbar_fa__VlAtt"},t=s(2252),o=s(8890),c=s.n(o),d=(s(2266),function(){var e=(0,n.useState)(!0),a=(0,i.Z)(e,2),s=a[0],l=a[1];return(0,n.useEffect)((function(){var e=function(){l(!0)},a=function(){l(!1)};return window.addEventListener("online",e),window.addEventListener("offline",a),function(){window.removeEventListener("online",e),window.removeEventListener("offline",a)}}),[]),s}),p=s(184),x=[{id:1,categories:"Placement"},{id:2,categories:"Internship"},{id:3,categories:"IT and Cs Jobs"},{id:4,categories:"Development"},{id:5,categories:"It and Services"}],h=function(){var e=(0,n.useContext)(t.V),a=(0,i.Z)(e,2),s=a[0];a[1];console.log(s);var o=localStorage.getItem("token");c()(document).ready((function(){c()(".dropdown").hover((function(){c()(".dropdown-menu",this).stop(!0,!0).slideDown("fast"),c()(this).toggleClass("open")}),(function(){c()(".dropdown-menu",this).stop(!0,!0).slideUp("fast"),c()(this).toggleClass("open")}))}));var h=d();return(0,p.jsx)("div",{className:r.header,children:(0,p.jsx)("nav",{className:" p-3 navbar navbar-expand-sm",style:{boxShadow:" 0 0 5px lightgray"},children:(0,p.jsxs)("div",{className:"container-fluid ",children:[(0,p.jsx)(l.Link,{to:"/",className:"navbar-brand pe-3",children:(0,p.jsxs)("span",{className:r.spanHeading,children:["Tech",(0,p.jsx)("span",{className:r.spanHeadingtwo,children:"Placement"})]})}),(0,p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsibleNavbar",children:(0,p.jsx)("span",{className:"navbar-toggler-icon"})}),(0,p.jsxs)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",children:[(0,p.jsxs)("div",{className:"me-auto navbar-nav mt-1",style:{fontSize:"1.1rem"},children:[!o&&(0,p.jsx)("div",{className:"navbar-nav",children:(0,p.jsxs)("div",{class:"dropdown",children:[(0,p.jsxs)("button",{class:"btn btn-default dropdown-toggle",type:"button",children:["Categories ",(0,p.jsx)("span",{class:"caret"})]}),(0,p.jsx)("ul",{class:"dropdown-menu text-center",style:{border:"1px solid lightgray",borderRadius:"5px"},children:x.map((function(e){return(0,p.jsx)("li",{style:{listStyle:"none",margin:"1rem"},children:(0,p.jsx)(l.Link,{to:"/",style:{textDecoration:"none",color:"black",padding:"10px"},children:e.categories})},e.id)}))})]})}),o&&(0,p.jsx)(l.Link,{to:"/allcomapnies",className:"nav-link ",children:"All Companies"}),o&&(0,p.jsx)(l.Link,{to:"/alljobs",className:"nav-link ",children:"All Jobs"})]}),o?(0,p.jsx)("div",{className:"navbar-nav",children:null!=s&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"half",children:(0,p.jsxs)("label",{htmlFor:"profile2",className:r["profile-dropdown"],children:[(0,p.jsx)("input",{type:"checkbox",id:"profile2"}),s&&s.user&&s.user.picture?(0,p.jsx)("img",{src:s.user.picture,alt:"",className:r.profile,referrerPolicy:"no-referrer"}):(0,p.jsx)("img",{src:"https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png",alt:"profile",className:r.profile}),(0,p.jsx)("span",{children:s&&s.user&&s.user.firstName}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(l.Link,{to:"#",children:(0,p.jsxs)("span",{className:r.email,children:[(0,p.jsx)("i",{class:"fa fa-envelope-o p-1 me-2","aria-hidden":"true"}),s&&s.user&&s.user.email]})})}),(0,p.jsx)("li",{children:(0,p.jsxs)(l.Link,{to:"/logout",className:"nav-link ",children:[(0,p.jsx)("i",{class:"fa fa-sign-out ","aria-hidden":"true",style:{marginLeft:"10px"}}),"Logout"]})}),s&&s.user&&"admin"===s.user.role&&(0,p.jsx)("li",{children:(0,p.jsxs)(l.Link,{to:"/admin/data",className:"nav-link ",children:[(0,p.jsx)("i",{class:"fa fa-lock","aria-hidden":"true",style:{marginLeft:"10px"}}),"Admin"]})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.Link,{to:"/",className:"nav-link ",children:h?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("i",{class:"fa fa-circle",style:{color:"green",fontSize:"10px",marginLeft:"10px"}}),"Online"]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("i",{class:"fa fa-circle",style:{color:"red",fontSize:"10px",marginLeft:"10px"}}),"Offline"]})})})]})]})})})}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"navbar-nav",children:(0,p.jsxs)("div",{class:r.box,children:[(0,p.jsx)("input",{type:"search",placeholder:"What you want to Learn ..."}),(0,p.jsx)("i",{class:"fa fa-search",style:{position:"absolute",top:"15px",right:"15px",color:"gray"}})]})}),(0,p.jsx)("button",{className:"btn btn-outline-success me-2",children:(0,p.jsx)(l.Link,{to:"/login",className:"nav-link ",children:"Login"})}),(0,p.jsx)("button",{className:"btn btn-success",children:(0,p.jsx)(l.Link,{to:"/signup",className:"nav-link ",style:{color:"white"},children:"Signup"})})]})]})]})})})},m=n.memo(h),u=s(6871),f=function(e){return(0,p.jsxs)("div",{children:[(0,p.jsx)(m,{}),(0,p.jsx)("main",{children:e.children}),(0,p.jsx)(u.j3,{})]})},v=n.memo(f)}}]);
//# sourceMappingURL=6843.96394904.chunk.js.map