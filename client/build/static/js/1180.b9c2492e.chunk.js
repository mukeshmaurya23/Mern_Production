(self.webpackChunkclient=self.webpackChunkclient||[]).push([[1180],{1180:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var o=t(4165),a=t(5861),i=t(885),r=t(2791),s=t(4569),l=t.n(s),c={language:"Compiler_language__hrl+r",input:"Compiler_input__cNp2U",app:"Compiler_app__NXfBQ",main:"Compiler_main__dNTm0","left-container":"Compiler_left-container__NyAah","right-container":"Compiler_right-container__y8HKV","input-box":"Compiler_input-box__ltcNA","output-box":"Compiler_output-box__FdoBo",output:"Compiler_output__JUCzC","clear-btn":"Compiler_clear-btn__Oh3S9","run-btn":"Compiler_run-btn__ImMvs",tags:"Compiler_tags__xi6S7",editor:"Compiler_editor__SfGqC"},u=t(3504),d=t(6871),m=t(5415),p=t(2389),h={navbar:"NavbarCompiler_navbar__-FDMX",no:"NavbarCompiler_no__jh9D1",headerLogo:"NavbarCompiler_headerLogo__61npt"},g=t(9437),b=t(184),j=function(e){var n=e.handleThemeChange,t=e.theme,o=e.fontSize,a=e.setFontSize;e.handleLangChange,e.valueLang;return(0,b.jsxs)("div",{className:h.navbar,children:[(0,b.jsx)(p.ZP,{options:Object.entries(g).map((function(e){var n=(0,i.Z)(e,2),t=n[0];return{label:n[1],value:t,key:t}})),value:t,className:h.select,onChange:n,placeholder:"Select Theme"}),(0,b.jsx)("label",{children:"Font Size"}),(0,b.jsx)("input",{type:"range",min:"18",max:"40",value:o,step:"2",onChange:function(e){a(e.target.value)}})]})},v=r.memo(j),f={active4d:"Active4D","all-hallows-eve":"All Hallows Eve",amy:"Amy","birds-of-paradise":"Birds of Paradise",blackboard:"Blackboard","brilliance-black":"Brilliance Black","brilliance-dull":"Brilliance Dull","chrome-devtools":"Chrome DevTools","clouds-midnight":"Clouds Midnight",clouds:"Clouds",cobalt:"Cobalt",dawn:"Dawn",dreamweaver:"Dreamweaver",eiffel:"Eiffel","espresso-libre":"Espresso Libre",github:"GitHub",idle:"IDLE",katzenmilch:"Katzenmilch","kuroir-theme":"Kuroir Theme",lazy:"LAZY","magicwb--amiga-":"MagicWB (Amiga)","merbivore-soft":"Merbivore Soft",merbivore:"Merbivore","monokai-bright":"Monokai Bright",monokai:"Monokai","night-owl":"Night Owl","oceanic-next":"Oceanic Next","pastels-on-dark":"Pastels on Dark","slush-and-poppies":"Slush and Poppies","solarized-dark":"Solarized-dark","solarized-light":"Solarized-light",spacecadet:"SpaceCadet",sunburst:"Sunburst","textmate--mac-classic-":"Textmate (Mac Classic)","tomorrow-night-blue":"Tomorrow-Night-Blue","tomorrow-night-bright":"Tomorrow-Night-Bright","tomorrow-night-eighties":"Tomorrow-Night-Eighties","tomorrow-night":"Tomorrow-Night",tomorrow:"Tomorrow",twilight:"Twilight","upstream-sunburst":"Upstream Sunburst","vibrant-ink":"Vibrant Ink","xcode-default":"Xcode_default",zenburnesque:"Zenburnesque",iplastic:"iPlastic",idlefingers:"idleFingers",krtheme:"krTheme",monoindustrial:"monoindustrial"},x=function(e){return new Promise((function(n){Promise.all([m._m.init(),t(7615)("./".concat(f[e],".json"))]).then((function(t){var o=(0,i.Z)(t,2),a=o[0],r=o[1];a.editor.defineTheme(e,r),n()}))}))};t(8890);function _(){var e=(0,r.useState)(localStorage.getItem("input")),n=(0,i.Z)(e,2),t=n[0],s=n[1],p=(0,r.useState)(localStorage.getItem("user_input")),h=(0,i.Z)(p,2),g=h[0],j=h[1],f=(0,r.useState)(localStorage.getItem("language_Id")),_=(0,i.Z)(f,2),k=_[0],C=_[1],S=(0,r.useState)("cobalt"),w=(0,i.Z)(S,2),T=w[0],N=w[1],y=(0,r.useState)([]),M=(0,i.Z)(y,2),D=M[0],L=M[1],H=(0,r.useState)(""),B=(0,i.Z)(H,2),E=(B[0],B[1],(0,r.useState)("")),z=(0,i.Z)(E,2);z[0],z[1];(0,r.useEffect)((function(){l().get("/api/getData").then((function(e){L(e.data)})).catch((function(e){console.log(e)}))}),[]);var Z=(0,d.UO)();console.log("mukesh",Z.problemId),(0,r.useEffect)((function(){x("oceanic-next").then((function(e){return N({value:"oceanic-next",label:"Oceanic Next"})}))}),[]);var P=(0,r.useState)(20),I=(0,i.Z)(P,2),O=I[0],A=I[1],F={fontSize:O},U=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n){var a,i,r,s,l,u,d,m,p;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(t),console.log(g),console.log(k),(a=document.getElementById(c.output)).innerHTML="",a.innerHTML+=" Compiling ...\n",e.next=9,fetch("https://judge0-ce.p.rapidapi.com/submissions",{method:"POST",headers:{"x-rapidapi-host":"judge0-ce.p.rapidapi.com","x-rapidapi-key":"f6dd720592msh50d5a6bd181739cp1ba9b8jsnb5b250673e70","content-type":"application/json",accept:"application/json"},body:JSON.stringify({language_id:k,source_code:t,stdin:g})});case 9:return i=e.sent,a.innerHTML+="Submission Created ...\n",e.next=13,i.json();case 13:r=e.sent,s={status:{description:"Queue"},stderr:null,compile_output:null};case 15:if("Accepted"===s.status.description||null!=s.stderr||null!=s.compile_output){e.next=27;break}if(a.innerHTML="Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ".concat(s.status.description),!r.token){e.next=25;break}return l="https://judge0-ce.p.rapidapi.com/submissions/".concat(r.token,"?base64_encoded=true"),e.next=21,fetch(l,{method:"GET",headers:{"x-rapidapi-host":"judge0-ce.p.rapidapi.com","x-rapidapi-key":"f6dd720592msh50d5a6bd181739cp1ba9b8jsnb5b250673e70","content-type":"application/json"}});case 21:return u=e.sent,e.next=24,u.json();case 24:s=e.sent;case 25:e.next=15;break;case 27:s.stdout?(d=atob(s.stdout),a.innerHTML="",a.innerHTML+="".concat(d,"\nExecution Time : ").concat(s.time," Secs\nMemory used : ").concat(s.memory," bytes")):s.stderr?(m=atob(s.stderr),a.innerHTML="",a.innerHTML+="\n Error :".concat(m)):(p=atob(s.compile_output),a.innerHTML="",a.innerHTML+="\n Error :".concat(p));case 28:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:c.app,children:[(0,b.jsx)(v,{handleThemeChange:function(e){var n=e;console.log("theme...",n),["light","vs-dark"].includes(n.value)?N(n):x(n.value).then((function(e){return N(n)}))},theme:T,fontSize:O,setFontSize:A}),(0,b.jsxs)("div",{className:c.main,children:[(0,b.jsx)("div",{className:c["right-container"],children:(0,b.jsx)("div",{className:c["code-box"],children:D.map((function(e){return(0,b.jsx)("div",{children:e.problemStatement.map((function(e){if(e._id===Z.problemId)return(0,b.jsxs)("div",{children:[(0,b.jsxs)("label",{htmlFor:"code",style:{border:"1px solid black"},children:[(0,b.jsxs)("b",{className:"heading p-2 mt-2",children:["Question:",e.q1]}),(0,b.jsxs)("b",{className:"heading p-2 mt-2",children:["Topic :",e.topic]})]}),(0,b.jsx)("pre",{className:"mt-2",style:{background:"#ccc",padding:"1rem",border:"1px solid black",fontSize:"0.9rem",color:"black"},children:e.description})]})}))})}))})}),(0,b.jsxs)("div",{className:c["left-container"],children:[(0,b.jsxs)("div",{className:c.tags,children:[(0,b.jsx)("label",{htmlFor:"tags",children:(0,b.jsx)("b",{className:"heading",children:"Language:"})}),(0,b.jsxs)("select",{value:k,onChange:function(e){var n;e.preventDefault(),C(e.target.value);var t=e.target.value;switch(t){case"71":n='print("Hello World")';break;case"54":n='#include <iostream> \n using namespace std; \n int main() { \n cout << "Hello World" << endl; \n return 0; \n }';break;case"50":n='#include <stdio.h> \n int main() { \n printf("Hello World"); \n return 0; \n }';break;case"62":n='import java.io.*;\nimport java.util.*;\n public class Main { \n\t\t public static void main(String[] args) { \n\t\t System.out.println("Hello World"); \n\t } \n }';break;case"63":n='console.log("Hello World");';default:""===t&&(n="# Enter your code here")}s(n),localStorage.setItem("input",n)},id:"tags",style:{margin:"0 0.5rem"},children:[(0,b.jsx)("option",{value:"54",children:"C++"}),(0,b.jsx)("option",{value:"50",children:"C"}),(0,b.jsx)("option",{value:"62",children:"Java"}),(0,b.jsx)("option",{value:"71",children:"Python"}),(0,b.jsx)("option",{value:"63",children:"Javascript"})]}),(0,b.jsxs)("button",{type:"submit",className:c["run-btn"],onClick:U,style:{margin:"0 0.5rem"},children:[(0,b.jsx)("i",{className:"fas fa-cog fa-fw"})," Run"]})]}),(0,b.jsx)(m.ZP,{height:"100%",required:!0,name:"solution",className:c.editor,options:F,theme:T.value,onChange:function(e){s(e)},value:t})]})]})]}),(0,b.jsxs)("footer",{class:"bg-light text-center text-lg-start",children:[(0,b.jsx)("div",{class:"container p-4",children:(0,b.jsxs)("div",{class:"row",children:[(0,b.jsxs)("div",{class:"col-lg-6 col-md-12 mb-4 mb-md-0",children:[(0,b.jsx)("h5",{class:"text-uppercase",children:"Input"}),(0,b.jsx)("p",{children:(0,b.jsx)("textarea",{id:c.input,onChange:function(e){e.preventDefault(),j(e.target.value)},rows:10,cols:40})})]}),(0,b.jsxs)("div",{class:"col-lg-6 col-md-12 mb-4 mb-md-0",children:[(0,b.jsx)("h5",{class:"text-uppercase",children:"Output"}),(0,b.jsxs)("p",{children:[(0,b.jsx)("textarea",{id:c.output,rows:10,cols:40}),(0,b.jsx)("button",{className:"btn btn-primary",onClick:function(){document.getElementById(".".concat(c.output)).innerHTML=""},children:"Clear"})]})]})]})}),(0,b.jsxs)("div",{class:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["\xa9 2022 Copyright:",(0,b.jsx)(u.rU,{class:"text-dark",to:"/",style:{textDecoration:"none",color:"black"},children:"TechPlacement"})]})]})]})}var k=r.memo(_)},7615:function(e,n,t){var o={"./Active4D.json":[266,266],"./All Hallows Eve.json":[4450,4450],"./Amy.json":[8849,8849],"./Birds of Paradise.json":[8097,8097],"./Blackboard.json":[8018,6115],"./Brilliance Black.json":[3835,3835],"./Brilliance Dull.json":[6507,6507],"./Chrome DevTools.json":[2508,2508],"./Clouds Midnight.json":[9566,9566],"./Clouds.json":[7951,7951],"./Cobalt.json":[826,826],"./Cobalt2.json":[8256,8256],"./Dawn.json":[6958,6958],"./Dominion Day.json":[9307,9307],"./Dracula.json":[3453,3453],"./Dreamweaver.json":[9363,9363],"./Eiffel.json":[2481,2481],"./Espresso Libre.json":[4776,4776],"./GitHub Dark.json":[792,792],"./GitHub Light.json":[1450,1450],"./GitHub.json":[739,739],"./IDLE.json":[7947,7947],"./Katzenmilch.json":[1240,1240],"./Kuroir Theme.json":[4388,4388],"./LAZY.json":[5164,5164],"./MagicWB (Amiga).json":[6443,6443],"./Merbivore Soft.json":[9361,9361],"./Merbivore.json":[6042,6042],"./Monokai Bright.json":[4883,4883],"./Monokai.json":[4454,4454],"./Night Owl.json":[261,261],"./Nord.json":[9785,9785],"./Oceanic Next.json":[8920,8920],"./Pastels on Dark.json":[8901,8901],"./Slush and Poppies.json":[6434,6434],"./Solarized-dark.json":[6116,6116],"./Solarized-light.json":[5008,5008],"./SpaceCadet.json":[440,440],"./Sunburst.json":[7172,8018],"./Textmate (Mac Classic).json":[5824,5824],"./Tomorrow-Night-Blue.json":[1150,1150],"./Tomorrow-Night-Bright.json":[8762,8762],"./Tomorrow-Night-Eighties.json":[2545,2545],"./Tomorrow-Night.json":[9855,9855],"./Tomorrow.json":[4092,4092],"./Twilight.json":[3898,3898],"./Upstream Sunburst.json":[8807,8807],"./Vibrant Ink.json":[9927,9927],"./Xcode_default.json":[4042,4042],"./Zenburnesque.json":[3467,3467],"./iPlastic.json":[8277,8277],"./idleFingers.json":[5104,5104],"./krTheme.json":[9633,9633],"./monoindustrial.json":[5729,5729],"./themelist.json":[9437]};function a(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t.t(a,19)}))}a.keys=function(){return Object.keys(o)},a.id=7615,e.exports=a}}]);
//# sourceMappingURL=1180.b9c2492e.chunk.js.map