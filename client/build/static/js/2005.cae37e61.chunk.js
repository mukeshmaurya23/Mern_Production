"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[2005],{2005:function(t,e,n){n.r(e);var o=n(2982),a=n(885),c=n(2791),r=n(6871),s=n(4569),l=n.n(s),i=n(9085),u=n(3458),p=n(184);e.default=function(){var t=(0,r.UO)().cId;console.log("cId",t);var e=(0,c.useState)([]),n=(0,a.Z)(e,2),s=n[0],h=n[1],f=(0,c.useState)(!1),d=(0,a.Z)(f,2),m=d[0],g=d[1],x=(0,c.useState)(""),b=(0,a.Z)(x,2),j=(b[0],b[1],(0,c.useState)("")),v=(0,a.Z)(j,2),S=(v[0],v[1],(0,c.useState)("")),C=(0,a.Z)(S,2),y=(C[0],C[1],(0,c.useState)([])),D=(0,a.Z)(y,2),N=D[0],k=D[1],Z=(0,c.useState)([]),w=(0,a.Z)(Z,2),T=w[0],q=w[1],A=s.find((function(e){return e.id===t}));(0,c.useEffect)((function(){g(!0),l().get(u.XH).then((function(t){h(t.data),g(!1)})).catch((function(t){console.log(t)}))}),[]);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{class:"card  w-100",style:{marginTop:"5.3rem"},children:[(0,p.jsx)("h5",{class:"card-header",children:"Update Data"}),(0,p.jsxs)("div",{class:"card-body align-items-center",children:[(0,p.jsx)("h5",{class:"card-title",children:t}),(0,p.jsx)("p",{class:"card-text",children:(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e="".concat(u.Xf,"/").concat(A._id);l().put(e,{problemStatement:N}).then((function(t){console.log(t),i.Am.success("Data Updated Successfully")})).catch((function(t){console.log(t)}))},children:[m&&(0,p.jsx)("div",{children:"Loading..."}),(0,p.jsxs)("div",{class:"form-group p-1",children:[(0,p.jsxs)("button",{onClick:function(t){t.preventDefault();var e=T.length;N.push({id:"",q1:"",topic:"",description:""}),console.log("setpf",e,N),q([].concat((0,o.Z)(T),[(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"p-3",children:[(0,p.jsxs)("div",{class:"form-group",children:[(0,p.jsx)("label",{children:"Id"}),(0,p.jsx)("input",{type:"text",class:"form-control",placeholder:"Enter id for problemStatement",name:"id".concat(e),onChange:function(t){k((function(n){var o=t.target.value;return N[e].id=o,N}),(function(){console.log("setpff",e,N)}))}})]}),(0,p.jsxs)("div",{class:"form-group",children:[(0,p.jsx)("label",{children:"Questions"}),(0,p.jsx)("input",{type:"text",class:"form-control",placeholder:"enter the question",name:"q1".concat(e),onChange:function(t){k((function(n){var o=t.target.value;return N[e].q1=o,N}))}})]}),(0,p.jsxs)("div",{class:"form-group",children:[(0,p.jsx)("label",{children:"Topic"}),(0,p.jsx)("input",{type:"text",class:"form-control",placeholder:"Enter the topic",name:"topic".concat(e),onChange:function(t){k((function(n){var o=t.target.value;return N[e].topic=o,N}))}})]}),(0,p.jsxs)("div",{class:"form-group",children:[(0,p.jsx)("label",{children:"Description"}),(0,p.jsx)("textarea",{id:"mytextarea",class:"form-control",rows:"3",placeholder:"Enter the description of problemStatement",name:"description".concat(e),onChange:function(t){k((function(n){var o=t.target.value;return N[e].description=o,N}))}})]})]})})]))},className:"btn btn-main mt-2",children:[(0,p.jsx)("i",{className:"fab fa-plus"}),"Add problemStatement"]}),T]}),(0,p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"})]})})]})]})})}},3458:function(t,e,n){n.d(e,{AZ:function(){return C},B9:function(){return g},Bp:function(){return A},Bu:function(){return D},DV:function(){return d},Jq:function(){return p},MN:function(){return Z},NW:function(){return w},Np:function(){return T},Ny:function(){return v},S9:function(){return f},T0:function(){return x},Uk:function(){return k},VG:function(){return s},X6:function(){return c},XH:function(){return o},Xf:function(){return r},_A:function(){return l},bP:function(){return b},bw:function(){return q},gK:function(){return N},ib:function(){return i},nb:function(){return y},ok:function(){return m},p:function(){return a},qF:function(){return j},rB:function(){return S},u9:function(){return h},xt:function(){return u}});var o="http://localhost:5000/api/getData",a="http://localhost:5000/api/createData",c="http://localhost:5000/api/deleteData",r="http://localhost:5000/api/updateData",s="http://localhost:5000/api/createCourse",l="http://localhost:5000/api/deleteCourse",i="   http://localhost:5000/api/getCourse",u="http://localhost:5000/api/updateCourse",p="   http://localhost:5000/api/getJobs",h="http://localhost:5000/api/createJobs",f="http://localhost:5000/api/deleteJobs",d="   http://localhost:5000/api/getFavJobs",m="  http://localhost:5000/api/postNewsTicker",g="  http://localhost:5000/api/postTestimonial",x="   http://localhost:5000/api/getTestimonial",b="http://localhost:5000/api/deleteTestimonial",j="   http://localhost:5000/api/getNewsTicker",v="http://localhost:5000/api/setRole",S="http://localhost:5000/api/getAllusers",C=" http://localhost:5000/api/deleteUser",y="http://localhost:5000/api/users",D="http://localhost:5000/api/password-reset",N="http://localhost:5000/api/openAi",k="http://localhost:5000/api/analyzeResume",Z="http://localhost:5000/api/getComments",w="http://localhost:5000/api/postComment",T="http://localhost:5000",q="http://localhost:5000/api/googlelogin",A="http://localhost:5000/api/auth"}}]);
//# sourceMappingURL=2005.cae37e61.chunk.js.map