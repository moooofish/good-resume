import*as u from"react";import x,{useState as S,useEffect as G,useRef as j,useCallback as me,lazy as je,forwardRef as Be,createContext as He,Fragment as Pe}from"react";import{jsx as r,jsxs as v}from"react/jsx-runtime";var W=function(e){return function(t){return Math.pow(t,e)}},U=function(e){return function(t){return 1-Math.abs(Math.pow(t-1,e))}},J=function(e){return function(t){return t<.5?W(e)(t*2)/2:U(e)(t*2-1)/2+.5}},We=function(e){return e},Ue=W(2),Fe=U(2),Ve=J(2),Ge=W(3),Ke=U(3),Ye=J(3),Xe=W(4),Qe=U(4),Ze=J(4),Je=W(5),et=U(5),tt=J(5),nt=function(e){return 1+Math.sin(Math.PI/2*e-Math.PI/2)},rt=function(e){return Math.sin(Math.PI/2*e)},ot=function(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2},ce=function(e){var t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?(e-=1.5/n,t*e*e+.75):e<2.5/n?(e-=2.25/n,t*e*e+.9375):(e-=2.625/n,t*e*e+.984375)},Ae=function(e){return 1-ce(1-e)},at=function(e){return e<.5?Ae(e*2)*.5:ce(e*2-1)*.5+.5},it=Object.freeze({linear:We,quadIn:Ue,quadOut:Fe,quadInOut:Ve,cubicIn:Ge,cubicOut:Ke,cubicInOut:Ye,quartIn:Xe,quartOut:Qe,quartInOut:Ze,quintIn:Je,quintOut:et,quintInOut:tt,sineIn:nt,sineOut:rt,sineInOut:ot,bounceOut:ce,bounceIn:Ae,bounceInOut:at}),ee=function(t){var n=t.from,o=t.to,a=t.duration,s=t.delay,c=t.easing,i=t.onStart,l=t.onUpdate,f=t.onFinish;for(var p in n)o[p]===void 0&&(o[p]=n[p]);for(var m in o)n[m]===void 0&&(n[m]=o[m]);this.from=n,this.to=o,this.duration=a||500,this.delay=s||0,this.easing=c||"linear",this.onStart=i,this.onUpdate=l||function(){},this.onFinish=f,this.startTime=Date.now()+this.delay,this.started=!1,this.finished=!1,this.timer=null,this.keys={}};ee.prototype.update=function(){if(this.time=Date.now(),!(this.time<this.startTime)&&!this.finished){if(this.elapsed===this.duration){this.finished||(this.finished=!0,this.onFinish&&this.onFinish(this.keys));return}this.elapsed=this.time-this.startTime,this.elapsed=this.elapsed>this.duration?this.duration:this.elapsed;for(var t in this.to)this.keys[t]=this.from[t]+(this.to[t]-this.from[t])*it[this.easing](this.elapsed/this.duration);this.started||(this.onStart&&this.onStart(this.keys),this.started=!0),this.onUpdate(this.keys)}};ee.prototype.start=function(){var t=this;this.startTime=Date.now()+this.delay;var n=function(){t.update(),t.timer=requestAnimationFrame(n),t.finished&&(cancelAnimationFrame(t.timer),t.timer=null)};n()};ee.prototype.stop=function(){cancelAnimationFrame(this.timer),this.timer=null};var st=typeof global=="object"&&global&&global.Object===Object&&global;const ct=st;var lt=typeof self=="object"&&self&&self.Object===Object&&self,dt=ct||lt||Function("return this")();const Le=dt;var ut=Le.Symbol;const K=ut;var Me=Object.prototype,ft=Me.hasOwnProperty,mt=Me.toString,z=K?K.toStringTag:void 0;function ht(e){var t=ft.call(e,z),n=e[z];try{e[z]=void 0;var o=!0}catch{}var a=mt.call(e);return o&&(t?e[z]=n:delete e[z]),a}var pt=Object.prototype,vt=pt.toString;function gt(e){return vt.call(e)}var bt="[object Null]",_t="[object Undefined]",he=K?K.toStringTag:void 0;function wt(e){return e==null?e===void 0?_t:bt:he&&he in Object(e)?ht(e):gt(e)}function yt(e){return e!=null&&typeof e=="object"}var xt="[object Symbol]";function St(e){return typeof e=="symbol"||yt(e)&&wt(e)==xt}var Et=/\s/;function kt(e){for(var t=e.length;t--&&Et.test(e.charAt(t)););return t}var It=/^\s+/;function Tt(e){return e&&e.slice(0,kt(e)+1).replace(It,"")}function Y(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var pe=0/0,Ot=/^[-+]0x[0-9a-f]+$/i,Nt=/^0b[01]+$/i,Ct=/^0o[0-7]+$/i,Rt=parseInt;function ve(e){if(typeof e=="number")return e;if(St(e))return pe;if(Y(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Y(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Tt(e);var n=Nt.test(e);return n||Ct.test(e)?Rt(e.slice(2),n?2:8):Ot.test(e)?pe:+e}var Pt=function(){return Le.Date.now()};const ne=Pt;var At="Expected a function",Lt=Math.max,Mt=Math.min;function $t(e,t,n){var o,a,s,c,i,l,f=0,p=!1,m=!1,w=!0;if(typeof e!="function")throw new TypeError(At);t=ve(t)||0,Y(n)&&(p=!!n.leading,m="maxWait"in n,s=m?Lt(ve(n.maxWait)||0,t):s,w="trailing"in n?!!n.trailing:w);function b(d){var h=o,I=a;return o=a=void 0,f=d,c=e.apply(I,h),c}function T(d){return f=d,i=setTimeout(g,t),p?b(d):c}function A(d){var h=d-l,I=d-f,fe=t-h;return m?Mt(fe,s-I):fe}function y(d){var h=d-l,I=d-f;return l===void 0||h>=t||h<0||m&&I>=s}function g(){var d=ne();if(y(d))return k(d);i=setTimeout(g,A(d))}function k(d){return i=void 0,w&&o?b(d):(o=a=void 0,c)}function te(){i!==void 0&&clearTimeout(i),f=0,o=l=a=i=void 0}function D(){return i===void 0?c:k(ne())}function q(){var d=ne(),h=y(d);if(o=arguments,a=this,l=d,h){if(i===void 0)return T(l);if(m)return clearTimeout(i),i=setTimeout(g,t),b(l)}return i===void 0&&(i=setTimeout(g,t)),c}return q.cancel=te,q.flush=D,q}var Dt="Expected a function";function qt(e,t,n){var o=!0,a=!0;if(typeof e!="function")throw new TypeError(Dt);return Y(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),$t(e,t,{leading:o,maxWait:t,trailing:a})}function zt({backTop:e}){const t=e!=null?e:!0,n=()=>{const s=document.documentElement,c=s.scrollTop;new ee({from:{scrollTop:c},to:{scrollTop:0},easing:"quadIn",duration:500,onUpdate:l=>{s.scrollTop=Number(l==null?void 0:l.scrollTop)}}).start()},[o,a]=S(!1);return G(()=>{const s=qt(()=>{const i=document.documentElement.scrollTop;a(i>=200)},500);return document.addEventListener("scroll",s),()=>{s.cancel(),document.removeEventListener("scroll",s)}}),t&&o?r("div",{className:"fixed bottom-10 right-30 z-10",display:"none md:block",onClick:n,children:r("button",{className:"w-10 h-10 rounded-full duration-300",style:{backgroundColor:"var(--island-c-bg)"},color:"gray hover:gray-500",bg:"~ gray-200 hover:gray-300",shadow:"sm hover:md",children:r("div",{flex:"~ center",children:r("div",{className:"i-carbon-chevron-up",text:"xl"})})})}):null}const jt="modulepreload",Bt=function(e){return"/"+e},ge={},_=function(t,n,o){return!n||n.length===0?t():Promise.all(n.map(a=>{if(a=Bt(a),a in ge)return;ge[a]=!0;const s=a.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":jt,s||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),s)return new Promise((l,f)=>{i.addEventListener("load",l),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},Ht="_searchInput_y03a3_1",Wt="_searchCommand_y03a3_7",Ut="_focus_y03a3_14",re={searchInput:Ht,searchCommand:Wt,focus:Ut},Ft=e=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",...e},u.createElement("path",{fill:"#888888",d:"m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"})),Vt=e=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 24 24",...e},u.createElement("g",{fill:"none",stroke:"var(--island-c-brand)",strokeLinecap:"round",strokeWidth:2},u.createElement("path",{strokeDasharray:60,strokeDashoffset:60,strokeOpacity:.3,d:"M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"},u.createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"1.3s",values:"60;0"})),u.createElement("path",{strokeDasharray:15,strokeDashoffset:15,d:"M12 3C16.9706 3 21 7.02944 21 12"},u.createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),u.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"}))));function Gt(e){const{suggestion:t,query:n}=e,o=()=>{if(t.type==="header"){const{header:s,headerHighlightIndex:c}=t,i=s.slice(0,c),l=s.slice(c+n.length);return v("div",{font:"medium",children:[r("span",{children:i}),r("span",{bg:"brand-light",p:"y-0.4 x-0.8",rounded:"md",text:"text-1",children:n}),r("span",{children:l})]})}else return r("div",{font:"medium",children:t.header})},a=()=>{if(t.type!=="content")return;const{statementHighlightIndex:s,statement:c}=t,i=c.slice(0,s),l=c.slice(s+n.length);return v("div",{font:"normal",text:"sm gray-light",w:"100%",children:[r("span",{children:i}),r("span",{bg:"brand-light",p:"y-0.4 x-0.8",rounded:"md",text:"[#000]",children:n}),r("span",{children:l})]})};return v("div",{"border-b-1":"","border-t-1":"","table-cell":"",p:"x-3 y-2",hover:"bg-[#f3f4f5] ",text:"#2c3e50",className:`border-right-none border-[#eaecef] ${e.isCurrent?"bg-[#f3f4f5]":"bg-white"}`,transition:"bg duration-200",children:[r("div",{font:"medium",text:"sm",children:o()}),t.type==="content"&&a()]})}const F={ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",ENTER:"Enter",SEARCH:"KeyK"};function Kt(e){const[t,n]=S(""),[o,a]=S([]),[s,c]=S(!1),[i,l]=S(!1),[f,p]=S(!1),[m,w]=S(-1),b=j(),T=j(),[A,y]=S(!0),g=j(null),k=!s||i,te=!k&&o.length===0,D=me(async()=>{if(b.current)return Promise.resolve();{const{PageSearcher:d}=await _(()=>import("./search.43383a25.js"),[]);b.current=new d(e.langRoutePrefix),await b.current.init(),c(!0)}},[e.langRoutePrefix]),q=me(async d=>{const h=d.target.value;n(h),T.current=T.current||D(),await T.current,l(!0);const I=await b.current.match(h);l(!1),a(I)},[D]);return G(()=>{const d=h=>{switch(h.code){case F.SEARCH:(h.ctrlKey||h.metaKey)&&g.current&&(h.preventDefault(),f?(p(!1),g.current.blur()):(p(!0),g.current.focus()));break;case F.ARROW_DOWN:h.preventDefault(),w((m+1)%o.length);break;case F.ARROW_UP:h.preventDefault(),w((m-1+o.length)%o.length);break;case F.ENTER:if(m>=0){const I=o[m];window.location.href=I.link}break}};return document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)}},[m,f,o]),G(()=>{y(!1)},[]),v("div",{flex:"","items-center":"~",relative:"",mr:"2",font:"semibold",children:[r(Ft,{w:"5",h:"5",fill:"currentColor",onClick:()=>{p(!0),g.current.focus()}}),r("input",{disabled:A,cursor:"text focus:auto",placeholder:"Search",height:"8",border:"none",type:"text",text:"sm",p:"t-0 r-2 b-0 l-2",transition:"all duration-200 ease",className:`rounded-sm ${re.searchInput} ${f?re.focus:""}`,"aria-label":"Search",autoComplete:"off",onChange:q,onBlur:()=>setTimeout(()=>p(!1),200),onFocus:()=>{p(!0),T.current=D()},ref:g}),v("div",{m:"r-3",w:"10",h:"6",p:"x-1.5",rounded:"md",border:"1px solid gray-light-3",text:"xs gray-light-3",flex:"~","items-center":"~",justify:"around",className:re.searchCommand,children:[r("span",{children:"\u2318"}),r("span",{children:"K"})]}),f&&t&&v("ul",{pos:"fixed sm:absolute top-12 sm:top-8 left-0",z:"60","border-1":"",p:"2",list:"none",bg:"bg-default",className:"w-100% sm:min-w-500px sm:max-w-700px",children:[o.map((d,h)=>r("li",{rounded:"sm",cursor:"pointer",w:"100%",className:"border-collapse",children:r("a",{block:"",href:d.link,className:"whitespace-normal",children:v("div",{table:"",w:"100%",className:"border-collapse",children:[r("div",{w:"35%","border-t-1":"","border-b-1":"","border-r-1":"","border-left":"none","table-cell":"",align:"middle right",p:"1.2",text:"sm right [#2c3e50]",font:"semibold",className:"bg-[#f5f5f5] border-[#eaecef]",children:d.title}),r(Gt,{suggestion:d,query:t,isCurrent:h===m})]})})},d.title)),te&&r("li",{flex:"center",children:r("div",{p:"2",text:"sm #2c3e50",children:"No results found"})}),k&&r("li",{flex:"center",children:r("div",{p:"2",text:"sm",children:r(Vt,{})})})]})]})}const Yt="_navHamburger_14nz8_1",Xt="_container_14nz8_14",Qt="_top_14nz8_21",Zt="_middle_14nz8_27",Jt="_bottom_14nz8_33",en="_active_14nz8_39",L={navHamburger:Yt,container:Xt,top:Qt,middle:Zt,bottom:Jt,active:en},tn="_navScreen_1mkpq_1",nn="_active_1mkpq_17",rn="_container_1mkpq_21",on="_navMenu_1mkpq_27",an="_navMenuItem_1mkpq_34",sn="_navAppearance_1mkpq_46",cn="_socialAndAppearance_1mkpq_50",O={navScreen:tn,active:nn,container:rn,navMenu:on,navMenuItem:an,navAppearance:sn,socialAndAppearance:cn};function ln(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)}var le=!1;if(typeof window<"u"){var be={get passive(){le=!0}};window.addEventListener("testPassive",null,be),window.removeEventListener("testPassive",null,be)}var X=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),M=[],Q=!1,de=-1,B=void 0,C=void 0,H=void 0,$e=function(t){return M.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(t))})},Z=function(t){var n=t||window.event;return $e(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},dn=function(t){if(H===void 0){var n=!!t&&t.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;if(n&&o>0){var a=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);H=document.body.style.paddingRight,document.body.style.paddingRight=a+o+"px"}}B===void 0&&(B=document.body.style.overflow,document.body.style.overflow="hidden")},un=function(){H!==void 0&&(document.body.style.paddingRight=H,H=void 0),B!==void 0&&(document.body.style.overflow=B,B=void 0)},fn=function(){return window.requestAnimationFrame(function(){if(C===void 0){C={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,n=t.scrollY,o=t.scrollX,a=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-o,setTimeout(function(){return window.requestAnimationFrame(function(){var s=a-window.innerHeight;s&&n>=a&&(document.body.style.top=-(n+s))})},300)}})},mn=function(){if(C!==void 0){var t=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=C.position,document.body.style.top=C.top,document.body.style.left=C.left,window.scrollTo(n,t),C=void 0}},hn=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},pn=function(t,n){var o=t.targetTouches[0].clientY-de;return $e(t.target)?!1:n&&n.scrollTop===0&&o>0||hn(n)&&o<0?Z(t):(t.stopPropagation(),!0)},vn=function(t,n){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!M.some(function(a){return a.targetElement===t})){var o={targetElement:t,options:n||{}};M=[].concat(ln(M),[o]),X?fn():dn(n),X&&(t.ontouchstart=function(a){a.targetTouches.length===1&&(de=a.targetTouches[0].clientY)},t.ontouchmove=function(a){a.targetTouches.length===1&&pn(a,t)},Q||(document.addEventListener("touchmove",Z,le?{passive:!1}:void 0),Q=!0))}},gn=function(){X&&(M.forEach(function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null}),Q&&(document.removeEventListener("touchmove",Z,le?{passive:!1}:void 0),Q=!1),de=-1),X?mn():un(),M=[]};const bn="_navScreenMenuGroup_1xte3_1",_n="_open_1xte3_7",wn="_button_1xte3_12",yn="_buttonSpan_1xte3_25",xn="_items_1xte3_32",Sn="_down_1xte3_40",N={navScreenMenuGroup:bn,open:_n,button:wn,buttonSpan:yn,items:xn,down:Sn},En=e=>u.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",...e},u.createElement("path",{fill:"currentColor",d:"M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"})),kn=e=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",...e},u.createElement("path",{fill:"currentColor",d:"M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6H10z"})),In="_link_r3fql_1",Tn={link:In},ie="island-theme-appearance",On=["https://island-tutorial.sanyuan0704.top","https://island.sanyuan0704.top","https://islandjs.dev"],Nn=()=>typeof window<"u",Cn=/^(https?:)?\/\//;function ue(e){const{href:t="/",children:n,className:o=""}=e,a=Cn.test(t),s=On.some(l=>t.startsWith(l));return r("a",{href:t,target:a&&!s?"_blank":"",rel:a?"noopener noreferrer":void 0,className:`${Tn.link} ${o}`,children:n})}function De(e){const{activeIndex:t}=e,[n,o]=S(!1);return v("div",{relative:"",className:`${n?N.open:""} ${N.navScreenMenuGroup}`,children:[v("button",{className:N.button,onClick:()=>{o(!n)},children:[r("span",{className:N.buttonSpan,children:e.text}),r(En,{className:`${n?N.open:""} ${N.down} `})]}),r("div",{children:r("div",{className:N.items,children:e.items.map((a,s)=>s===t?r("div",{className:"pa-1",children:r("span",{mr:"1",text:"brand",children:a.text})},a.link):r("div",{className:"pa-1",font:"medium",children:r(ue,{href:a.link,children:r("div",{children:v("div",{flex:"",children:[r("span",{mr:"1",children:a.text}),r(kn,{w:"11px",h:"11px",text:"text-3",m:"t-1 r-1"})]})})})},a.link))})})]})}function E(e){const t=je(e);let n,o;const s=Be(function(i,l){const p=j(n!=null?n:t).current;return r(p,{ref:l,...i})});return s.preload=()=>(o||(o=e().then(c=>(n=c.default,c))),o),s}const _e=E(()=>_(()=>import("./achievements.1c6eacd9.js"),[])),we=E(()=>_(()=>import("./base-info.badb655c.js"),[])),ye=E(()=>_(()=>import("./edc.a1726248.js"),[])),xe=E(()=>_(()=>import("./project.3704a138.js"),[])),Se=E(()=>_(()=>import("./self-evaluation.b3a4d6eb.js"),[])),Ee=E(()=>_(()=>import("./skills.8ae805cd.js"),[])),ke=E(()=>_(()=>import("./works.f48998c4.js"),[])),Ie=E(()=>_(()=>import("./index.62c50ba5.js"),[])),Te=E(()=>_(()=>import("./islandjs.c5483720.js"),[])),Oe=E(()=>_(()=>import("./vuepress.e8197411.js"),[])),Ne=E(()=>_(()=>import("./summary.352c2c76.js"),[])),Rn=[{path:"/article/achievements",element:x.createElement(_e),filePath:"/Users/gaowei/workspace/good-resume/docs/article/achievements.md",preload:_e.preload},{path:"/article/base-info",element:x.createElement(we),filePath:"/Users/gaowei/workspace/good-resume/docs/article/base-info.md",preload:we.preload},{path:"/article/edc",element:x.createElement(ye),filePath:"/Users/gaowei/workspace/good-resume/docs/article/edc.md",preload:ye.preload},{path:"/article/project",element:x.createElement(xe),filePath:"/Users/gaowei/workspace/good-resume/docs/article/project.md",preload:xe.preload},{path:"/article/self-evaluation",element:x.createElement(Se),filePath:"/Users/gaowei/workspace/good-resume/docs/article/self-evaluation.md",preload:Se.preload},{path:"/article/skills",element:x.createElement(Ee),filePath:"/Users/gaowei/workspace/good-resume/docs/article/skills.md",preload:Ee.preload},{path:"/article/works",element:x.createElement(ke),filePath:"/Users/gaowei/workspace/good-resume/docs/article/works.md",preload:ke.preload},{path:"/",element:x.createElement(Ie),filePath:"/Users/gaowei/workspace/good-resume/docs/index.md",preload:Ie.preload},{path:"/online-resume/islandjs",element:x.createElement(Te),filePath:"/Users/gaowei/workspace/good-resume/docs/online-resume/islandjs.md",preload:Te.preload},{path:"/online-resume/vuepress",element:x.createElement(Oe),filePath:"/Users/gaowei/workspace/good-resume/docs/online-resume/vuepress.md",preload:Oe.preload},{path:"/others/summary",element:x.createElement(Ne),filePath:"/Users/gaowei/workspace/good-resume/docs/others/summary.md",preload:Ne.preload}];He({data:Nn()?window==null?void 0:window.ISLAND_PAGE_DATA:null,setData:e=>{}});const sr=(e=()=>!0)=>Promise.all(Rn.filter(e).map(async t=>({...await t.preload(),routePath:t.path})));function Pn(e){return e.charAt(0)==="/"?e:"/"+e}function qe(e){if(!e)return"/";if(e.startsWith("http"))return e;let t="";return t+=".html",e.endsWith("/")&&(t="index"+t),Pn(`${e}${t}`)}function An(e){const{pathname:t}=e,n=new RegExp(e.activeMatch||e.link).test(t);return r("div",{text:"sm",font:"medium",m:"x-3",className:`${n?"text-brand":""}`,children:r(ue,{href:qe(e.link),children:e.text})},e.text)}const Ln="_check_1tqe3_17",Mn="_icon_1tqe3_34",$n="_dark_1tqe3_29",oe={switch:"_switch_1tqe3_1",check:Ln,icon:Mn,dark:$n};function Dn(e){var t;return r("button",{className:`${oe.switch} ${e.className}`,id:(t=e.id)!=null?t:"",type:"button",role:"switch",...e.onClick?{onClick:e.onClick}:{},children:r("span",{className:oe.check,children:r("span",{className:oe.icon,children:e.children})})})}const qn="_sun_8e60k_1",zn="_moon_8e60k_5",Ce={sun:qn,moon:zn},jn=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",...e},u.createElement("path",{d:"M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"}),u.createElement("path",{d:"M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"}),u.createElement("path",{d:"M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"}),u.createElement("path",{d:"M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"}),u.createElement("path",{d:"M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"}),u.createElement("path",{d:"M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"}),u.createElement("path",{d:"M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"}),u.createElement("path",{d:"M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"}),u.createElement("path",{d:"M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"})),Bn=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",...e},u.createElement("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"}));let R=!0,V,P,$;typeof window<"u"&&typeof localStorage<"u"&&(P=localStorage.getItem(ie)||"auto",$=window.matchMedia("(prefers-color-scheme: dark)"),R=P==="auto"?$.matches:P==="dark",$.onchange=e=>{P==="auto"&&se(R=e.matches)});const se=e=>{V[e?"add":"remove"]("dark")},Hn=()=>{if(typeof window<"u"&&V===void 0){V=document.documentElement.classList;const e=()=>{const t=localStorage.getItem(ie)||"auto";V&&(se(t==="auto"?$.matches:t==="dark"),R=!R)};window.addEventListener("storage",e)}return()=>{se(R=!R),typeof window<"u"&&typeof localStorage<"u"&&(R?P=$.matches?"auto":"dark":P=$.matches?"light":"auto",localStorage.setItem(ie,P))}};function ze(e){const t=Hn();return v(Dn,{onClick:t,children:[r(jn,{className:Ce.sun}),r(Bn,{className:Ce.moon})]})}const Wn=e=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",...e},u.createElement("path",{fill:"currentColor",d:"M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85zm-7.65-6l2.62-6.56L25.45 23zM18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7z"})),Un=e=>u.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},u.createElement("title",null,"GitHub"),u.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})),Fn={github:Un},Vn=({translationMenuData:e})=>r("div",{className:O.navTranslations,flex:"~",text:"sm",font:"bold",justify:"center",children:r("div",{m:"x-1.5",children:r(De,{...e})})}),Gn=({socialLinks:e})=>r("div",{className:"social-links",flex:"","items-center":"",before:"menu-item-before",children:r("div",{flex:"","items-center":"",w:"9",h:"9",transition:"color duration-300",color:"hover:brand",children:e.map(t=>{const n=Fn[t.icon];return r("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",w:"5",h:"5",children:r(n,{fill:"currentColor"})},t.link)})})});function Kn(e){var A;const{isScreenOpen:t,localeData:n,siteData:o,pathname:a}=e,s=j(null),c=Object.values(o.themeConfig.locales||{}),i=c.length>1,l=n.nav||[],f=((A=o==null?void 0:o.themeConfig)==null?void 0:A.socialLinks)||[],p=o.appearance!==!1,m=f.length>0,w=i?{text:r(Wn,{w:"18px",h:"18px"}),items:c.map(y=>({text:y.label,link:`/${y.lang}`})),activeIndex:c.findIndex(y=>y.lang===n.lang)}:null,b=()=>r("div",{className:`items-center appearance pa-2 ${O.navAppearance}`,flex:"~",justify:"center",children:r(ze,{})}),T=({menuItems:y})=>r("div",{className:O.navMenu,children:y.map((g,k)=>r("div",{w:"100%",className:O.navMenuItem,children:"link"in g?r(An,{pathname:a,...g},k):r("div",{m:"x-3",last:"mr-0",children:r(De,{...g})},k)},k))});return G(()=>(s.current&&t&&vn(s.current,{reserveScrollBarGap:!0}),()=>{gn()}),[t]),r("div",{className:`${O.navScreen} ${t?O.active:""}`,ref:s,id:"navScreen",children:v("div",{className:O.container,children:[r(T,{menuItems:l}),v("div",{className:O.socialAndAppearance,flex:"~",justify:"center","items-center":"center",children:[p&&r(b,{}),m&&r(Gn,{socialLinks:f})]}),i&&r(Vn,{translationMenuData:w})]})})}function Yn(){const[e,t]=S(!1);function n(){t(!0),window.addEventListener("resize",s)}function o(){t(!1),window.removeEventListener("resize",s)}function a(){e?o():n()}function s(){window.outerWidth>=768&&o()}return{isScreenOpen:e,openScreen:n,closeScreen:o,toggleScreen:a}}function Xn(e){const{localeData:t,siteData:n,pathname:o}=e,{isScreenOpen:a,toggleScreen:s}=Yn();return v(Pe,{children:[r("button",{onClick:s,className:`${a?L.active:""} ${L.navHamburger}`,children:v("span",{className:L.container,children:[r("span",{className:L.top}),r("span",{className:L.middle}),r("span",{className:L.bottom})]})}),r(Kn,{isScreenOpen:a,localeData:t,siteData:n,pathname:o})]})}const Qn="_localNav_ncerp_1",Zn="_menu_ncerp_16",Jn="_backDrop_ncerp_28",ae={localNav:Qn,menu:Zn,backDrop:Jn},er="_sidebar_iav29_1",tr="_open_iav29_23",Re={sidebar:er,open:tr};function nr(e,t){return t?t===""||t==="/"?e===t:e.startsWith(t):!1}function rr(e){const{isSidebarOpen:t,langRoutePrefix:n,pathname:o,sidebarData:a}=e,s=(i,l=0)=>{var w;const f=`${l*20}px`;let p=[];"items"in i&&(p=i.items.map(b=>s(b,l+1)));const m=nr(o.replace(n,""),(w=i.link)==null?void 0:w.replace(n,""));return v("div",{style:{marginLeft:f},children:[r("div",{p:"1",block:"~",text:"sm","font-medium":"~",className:`${m?"text-brand":"text-text-2"}`,children:r(ue,{href:qe(i.link),children:i.text})}),p]})},c=i=>{var l;return v("section",{block:"~","not-first":"divider-top mt-4",children:[r("div",{flex:"~",justify:"between","items-start":"~",children:r("h2",{m:"t-3 b-2",text:"1rem text-1",font:"bold",children:i.text})}),r("div",{mb:"1.4 sm:1",children:(l=i==null?void 0:i.items)==null?void 0:l.map(f=>r("div",{children:s(f)},f.link))})]},i.text)};return r("aside",{className:`${Re.sidebar} ${t?Re.open:""}`,children:r("nav",{children:[a].filter(Boolean).flat().map(i=>c(i))})})}function or(e){const{langRoutePrefix:t,pathname:n,sidebarData:o}=e,[a,s]=S(!1);function c(){s(!0)}function i(){s(!1)}return v(Pe,{children:[r("div",{className:ae.localNav,children:v("button",{flex:"center",onClick:c,className:ae.menu,children:[r("div",{text:"md",mr:"2",className:"i-carbon:menu"}),r("span",{text:"md ",children:"Menu"})]})}),r(rr,{langRoutePrefix:t,pathname:n,sidebarData:o,isSidebarOpen:a}),a?r("div",{onClick:i,className:ae.backDrop}):null]})}window.ISLANDS={BackTop:zt,Search:Kt,NavHamburger:Xn,SwitchAppearance:ze,SideMenu:or};window.ISLAND_PROPS=JSON.parse(document.getElementById("island-props").textContent);export{K as S,Y as a,wt as b,yt as c,ct as f,sr as g,St as i,qe as n,Le as r};