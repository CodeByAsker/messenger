import Oe from"./D750BFo1.js";import{r as w,i as x,D as H,o as U,T as Se,h as q,K as Y,d as _,U as ue,V as se,F as de,W as G,X as Le,Y as E,S as j,u as De,v as z,x as T,z as I,A as F,J as R,O as Pe,t as B,y as ee,Z as Ee,L as $e,$ as ke,R as te,Q as Te}from"./D1Ovq820.js";import{a as Re}from"./AJK-pmH7.js";function Ae(e,n,l){let r=w(l==null?void 0:l.value),a=x(()=>e.value!==void 0);return[x(()=>a.value?e.value:r.value),function(o){return a.value||(r.value=o),n==null?void 0:n(o)}]}function g(e){var n;if(e==null||e.value==null)return null;let l=(n=e.value.$el)!=null?n:e.value;return l instanceof Node?l:null}function $(e,n,...l){if(e in n){let a=n[e];return typeof a=="function"?a(...l):a}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,$),r}var Ne=Object.defineProperty,je=(e,n,l)=>n in e?Ne(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,ne=(e,n,l)=>(je(e,typeof n!="symbol"?n+"":n,l),l);let Ie=class{constructor(){ne(this,"current",this.detect()),ne(this,"currentId",0)}set(n){this.current!==n&&(this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},X=new Ie;function Fe(e){if(X.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let n=g(e);if(n)return n.ownerDocument}return document}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Ce=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Ce||{}),_e=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(_e||{}),Ve=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ve||{}),J=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(J||{});function ce(e,n=0){var l;return e===((l=Fe(e))==null?void 0:l.body)?!1:$(n,{0(){return e.matches(le)},1(){let r=e;for(;r!==null;){if(r.matches(le))return!0;r=r.parentElement}return!1}})}var Be=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Be||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Me(e,n=l=>l){return e.slice().sort((l,r)=>{let a=n(l),o=n(r);if(a===null||o===null)return 0;let t=a.compareDocumentPosition(o);return t&Node.DOCUMENT_POSITION_FOLLOWING?-1:t&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ue(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function He(){return/Android/gi.test(window.navigator.userAgent)}function Ke(){return Ue()||He()}function M(e,n,l){X.isServer||H(r=>{document.addEventListener(e,n,l),r(()=>document.removeEventListener(e,n,l))})}function ze(e,n,l){X.isServer||H(r=>{window.addEventListener(e,n,l),r(()=>window.removeEventListener(e,n,l))})}function We(e,n,l=x(()=>!0)){function r(o,t){if(!l.value||o.defaultPrevented)return;let s=t(o);if(s===null||!s.getRootNode().contains(s))return;let f=function d(p){return typeof p=="function"?d(p()):Array.isArray(p)||p instanceof Set?p:[p]}(e);for(let d of f){if(d===null)continue;let p=d instanceof HTMLElement?d:g(d);if(p!=null&&p.contains(s)||o.composed&&o.composedPath().includes(p))return}return!ce(s,J.Loose)&&s.tabIndex!==-1&&o.preventDefault(),n(o,s)}let a=w(null);M("pointerdown",o=>{var t,s;l.value&&(a.value=((s=(t=o.composedPath)==null?void 0:t.call(o))==null?void 0:s[0])||o.target)},!0),M("mousedown",o=>{var t,s;l.value&&(a.value=((s=(t=o.composedPath)==null?void 0:t.call(o))==null?void 0:s[0])||o.target)},!0),M("click",o=>{Ke()||a.value&&(r(o,()=>a.value),a.value=null)},!0),M("touchend",o=>r(o,()=>o.target instanceof HTMLElement?o.target:null),!0),ze("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function oe(e,n){if(e)return e;let l=n??"button";if(typeof l=="string"&&l.toLowerCase()==="button")return"button"}function qe(e,n){let l=w(oe(e.value.type,e.value.as));return U(()=>{l.value=oe(e.value.type,e.value.as)}),H(()=>{var r;l.value||g(n)&&g(n)instanceof HTMLButtonElement&&!((r=g(n))!=null&&r.hasAttribute("type"))&&(l.value="button")}),l}function ae(e){return[e.screenX,e.screenY]}function Qe(){let e=w([-1,-1]);return{wasMoved(n){let l=ae(n);return e.value[0]===l[0]&&e.value[1]===l[1]?!1:(e.value=l,!0)},update(n){e.value=ae(n)}}}var Q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Q||{}),Ye=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Ye||{});function V({visible:e=!0,features:n=0,ourProps:l,theirProps:r,...a}){var o;let t=pe(r,l),s=Object.assign(a,{props:t});if(e||n&2&&t.static)return W(s);if(n&1){let f=(o=t.unmount)==null||o?0:1;return $(f,{0(){return null},1(){return W({...a,props:{...t,hidden:!0,style:{display:"none"}}})}})}return W(s)}function W({props:e,attrs:n,slots:l,slot:r,name:a}){var o,t;let{as:s,...f}=fe(e,["unmount","static"]),d=(o=l.default)==null?void 0:o.call(l,r),p={};if(r){let u=!1,v=[];for(let[S,O]of Object.entries(r))typeof O=="boolean"&&(u=!0),O===!0&&v.push(S);u&&(p["data-headlessui-state"]=v.join(" "))}if(s==="template"){if(d=ve(d??[]),Object.keys(f).length>0||Object.keys(n).length>0){let[u,...v]=d??[];if(!Xe(u)||v.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(n)).map(m=>m.trim()).filter((m,P,k)=>k.indexOf(m)===P).sort((m,P)=>m.localeCompare(P)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let S=pe((t=u.props)!=null?t:{},f,p),O=Se(u,S,!0);for(let m in S)m.startsWith("on")&&(O.props||(O.props={}),O.props[m]=S[m]);return O}return Array.isArray(d)&&d.length===1?d[0]:d}return q(s,Object.assign({},f,p),{default:()=>d})}function ve(e){return e.flatMap(n=>n.type===Y?ve(n.children):[n])}function pe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},l={};for(let r of e)for(let a in r)a.startsWith("on")&&typeof r[a]=="function"?(l[a]!=null||(l[a]=[]),l[a].push(r[a])):n[a]=r[a];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(l).map(r=>[r,void 0])));for(let r in l)Object.assign(n,{[r](a,...o){let t=l[r];for(let s of t){if(a instanceof Event&&a.defaultPrevented)return;s(a,...o)}}});return n}function Ge(e){let n=Object.assign({},e);for(let l in n)n[l]===void 0&&delete n[l];return n}function fe(e,n=[]){let l=Object.assign({},e);for(let r of n)r in l&&delete l[r];return l}function Xe(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var be=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(be||{});let Je=_({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:n,attrs:l}){return()=>{var r;let{features:a,...o}=e,t={"aria-hidden":(a&2)===2?!0:(r=o["aria-hidden"])!=null?r:void 0,hidden:(a&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(a&4)===4&&(a&2)!==2&&{display:"none"}}};return V({ourProps:t,theirProps:o,slot:{},attrs:l,slots:n,name:"Hidden"})}}}),me=Symbol("Context");var C=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(C||{});function Ze(){return ue(me,null)}function et(e){se(me,e)}var y=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(y||{});function tt(e){throw new Error("Unexpected object: "+e)}var L=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(L||{});function nt(e,n){let l=n.resolveItems();if(l.length<=0)return null;let r=n.resolveActiveIndex(),a=r??-1;switch(e.focus){case 0:{for(let o=0;o<l.length;++o)if(!n.resolveDisabled(l[o],o,l))return o;return r}case 1:{a===-1&&(a=l.length);for(let o=a-1;o>=0;--o)if(!n.resolveDisabled(l[o],o,l))return o;return r}case 2:{for(let o=a+1;o<l.length;++o)if(!n.resolveDisabled(l[o],o,l))return o;return r}case 3:{for(let o=l.length-1;o>=0;--o)if(!n.resolveDisabled(l[o],o,l))return o;return r}case 4:{for(let o=0;o<l.length;++o)if(n.resolveId(l[o],o,l)===e.id)return o;return r}case 5:return null;default:tt(e)}}function he(e={},n=null,l=[]){for(let[r,a]of Object.entries(e))ye(l,ge(n,r),a);return l}function ge(e,n){return e?e+"["+n+"]":n}function ye(e,n,l){if(Array.isArray(l))for(let[r,a]of l.entries())ye(e,ge(n,r.toString()),a);else l instanceof Date?e.push([n,l.toISOString()]):typeof l=="boolean"?e.push([n,l?"1":"0"]):typeof l=="string"?e.push([n,l]):typeof l=="number"?e.push([n,`${l}`]):l==null?e.push([n,""]):he(l,n,e)}let re=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ie(e){var n,l;let r=(n=e.innerText)!=null?n:"",a=e.cloneNode(!0);if(!(a instanceof HTMLElement))return r;let o=!1;for(let s of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),o=!0;let t=o?(l=a.innerText)!=null?l:"":r;return re.test(t)&&(t=t.replace(re,"")),t}function lt(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let l=e.getAttribute("aria-labelledby");if(l){let r=l.split(" ").map(a=>{let o=document.getElementById(a);if(o){let t=o.getAttribute("aria-label");return typeof t=="string"?t.trim():ie(o).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return ie(e).trim()}function ot(e){let n=w(""),l=w("");return()=>{let r=g(e);if(!r)return"";let a=r.innerText;if(n.value===a)return l.value;let o=lt(r).trim().toLowerCase();return n.value=a,l.value=o,o}}function at(e,n){return e===n}var rt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(rt||{}),it=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(it||{}),ut=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ut||{});function st(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let xe=Symbol("ListboxContext");function K(e){let n=ue(xe,null);if(n===null){let l=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,K),l}return n}let dt=_({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>at},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:n,attrs:l,emit:r}){let a=w(1),o=w(null),t=w(null),s=w(null),f=w([]),d=w(""),p=w(null),u=w(1);function v(i=c=>c){let c=p.value!==null?f.value[p.value]:null,b=Me(i(f.value.slice()),D=>g(D.dataRef.domRef)),h=c?b.indexOf(c):null;return h===-1&&(h=null),{options:b,activeOptionIndex:h}}let S=x(()=>e.multiple?1:0),[O,m]=Ae(x(()=>e.modelValue),i=>r("update:modelValue",i),x(()=>e.defaultValue)),P=x(()=>O.value===void 0?$(S.value,{1:[],0:void 0}):O.value),k={listboxState:a,value:P,mode:S,compare(i,c){if(typeof e.by=="string"){let b=e.by;return(i==null?void 0:i[b])===(c==null?void 0:c[b])}return e.by(i,c)},orientation:x(()=>e.horizontal?"horizontal":"vertical"),labelRef:o,buttonRef:t,optionsRef:s,disabled:x(()=>e.disabled),options:f,searchQuery:d,activeOptionIndex:p,activationTrigger:u,closeListbox(){e.disabled||a.value!==1&&(a.value=1,p.value=null)},openListbox(){e.disabled||a.value!==0&&(a.value=0)},goToOption(i,c,b){if(e.disabled||a.value===1)return;let h=v(),D=nt(i===L.Specific?{focus:L.Specific,id:c}:{focus:i},{resolveItems:()=>h.options,resolveActiveIndex:()=>h.activeOptionIndex,resolveId:N=>N.id,resolveDisabled:N=>N.dataRef.disabled});d.value="",p.value=D,u.value=b??1,f.value=h.options},search(i){if(e.disabled||a.value===1)return;let c=d.value!==""?0:1;d.value+=i.toLowerCase();let b=(p.value!==null?f.value.slice(p.value+c).concat(f.value.slice(0,p.value+c)):f.value).find(D=>D.dataRef.textValue.startsWith(d.value)&&!D.dataRef.disabled),h=b?f.value.indexOf(b):-1;h===-1||h===p.value||(p.value=h,u.value=1)},clearSearch(){e.disabled||a.value!==1&&d.value!==""&&(d.value="")},registerOption(i,c){let b=v(h=>[...h,{id:i,dataRef:c}]);f.value=b.options,p.value=b.activeOptionIndex},unregisterOption(i){let c=v(b=>{let h=b.findIndex(D=>D.id===i);return h!==-1&&b.splice(h,1),b});f.value=c.options,p.value=c.activeOptionIndex,u.value=1},theirOnChange(i){e.disabled||m(i)},select(i){e.disabled||m($(S.value,{0:()=>i,1:()=>{let c=E(k.value.value).slice(),b=E(i),h=c.findIndex(D=>k.compare(b,E(D)));return h===-1?c.push(b):c.splice(h,1),c}}))}};We([t,s],(i,c)=>{var b;k.closeListbox(),ce(c,J.Loose)||(i.preventDefault(),(b=g(t))==null||b.focus())},x(()=>a.value===0)),se(xe,k),et(x(()=>$(a.value,{0:C.Open,1:C.Closed})));let A=x(()=>{var i;return(i=g(t))==null?void 0:i.closest("form")});return U(()=>{de([A],()=>{if(!A.value||e.defaultValue===void 0)return;function i(){k.theirOnChange(e.defaultValue)}return A.value.addEventListener("reset",i),()=>{var c;(c=A.value)==null||c.removeEventListener("reset",i)}},{immediate:!0})}),()=>{let{name:i,modelValue:c,disabled:b,form:h,...D}=e,N={open:a.value===0,disabled:b,value:P.value};return q(Y,[...i!=null&&P.value!=null?he({[i]:P.value}).map(([Z,we])=>q(Je,Ge({features:be.Hidden,key:Z,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:h,disabled:b,name:Z,value:we}))):[],V({ourProps:{},theirProps:{...l,...fe(D,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:N,slots:n,attrs:l,name:"Listbox"})])}}}),ct=_({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:n,slots:l,expose:r}){var a;let o=(a=e.id)!=null?a:`headlessui-listbox-button-${G()}`,t=K("ListboxButton");r({el:t.buttonRef,$el:t.buttonRef});function s(u){switch(u.key){case y.Space:case y.Enter:case y.ArrowDown:u.preventDefault(),t.openListbox(),j(()=>{var v;(v=g(t.optionsRef))==null||v.focus({preventScroll:!0}),t.value.value||t.goToOption(L.First)});break;case y.ArrowUp:u.preventDefault(),t.openListbox(),j(()=>{var v;(v=g(t.optionsRef))==null||v.focus({preventScroll:!0}),t.value.value||t.goToOption(L.Last)});break}}function f(u){switch(u.key){case y.Space:u.preventDefault();break}}function d(u){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),j(()=>{var v;return(v=g(t.buttonRef))==null?void 0:v.focus({preventScroll:!0})})):(u.preventDefault(),t.openListbox(),st(()=>{var v;return(v=g(t.optionsRef))==null?void 0:v.focus({preventScroll:!0})})))}let p=qe(x(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var u,v;let S={open:t.listboxState.value===0,disabled:t.disabled.value,value:t.value.value},{...O}=e,m={ref:t.buttonRef,id:o,type:p.value,"aria-haspopup":"listbox","aria-controls":(u=g(t.optionsRef))==null?void 0:u.id,"aria-expanded":t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(v=g(t.labelRef))==null?void 0:v.id,o].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:s,onKeyup:f,onClick:d};return V({ourProps:m,theirProps:O,slot:S,attrs:n,slots:l,name:"ListboxButton"})}}}),vt=_({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:n,slots:l,expose:r}){var a;let o=(a=e.id)!=null?a:`headlessui-listbox-options-${G()}`,t=K("ListboxOptions"),s=w(null);r({el:t.optionsRef,$el:t.optionsRef});function f(u){switch(s.value&&clearTimeout(s.value),u.key){case y.Space:if(t.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),t.search(u.key);case y.Enter:if(u.preventDefault(),u.stopPropagation(),t.activeOptionIndex.value!==null){let v=t.options.value[t.activeOptionIndex.value];t.select(v.dataRef.value)}t.mode.value===0&&(t.closeListbox(),j(()=>{var v;return(v=g(t.buttonRef))==null?void 0:v.focus({preventScroll:!0})}));break;case $(t.orientation.value,{vertical:y.ArrowDown,horizontal:y.ArrowRight}):return u.preventDefault(),u.stopPropagation(),t.goToOption(L.Next);case $(t.orientation.value,{vertical:y.ArrowUp,horizontal:y.ArrowLeft}):return u.preventDefault(),u.stopPropagation(),t.goToOption(L.Previous);case y.Home:case y.PageUp:return u.preventDefault(),u.stopPropagation(),t.goToOption(L.First);case y.End:case y.PageDown:return u.preventDefault(),u.stopPropagation(),t.goToOption(L.Last);case y.Escape:u.preventDefault(),u.stopPropagation(),t.closeListbox(),j(()=>{var v;return(v=g(t.buttonRef))==null?void 0:v.focus({preventScroll:!0})});break;case y.Tab:u.preventDefault(),u.stopPropagation();break;default:u.key.length===1&&(t.search(u.key),s.value=setTimeout(()=>t.clearSearch(),350));break}}let d=Ze(),p=x(()=>d!==null?(d.value&C.Open)===C.Open:t.listboxState.value===0);return()=>{var u,v;let S={open:t.listboxState.value===0},{...O}=e,m={"aria-activedescendant":t.activeOptionIndex.value===null||(u=t.options.value[t.activeOptionIndex.value])==null?void 0:u.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(v=g(t.buttonRef))==null?void 0:v.id,"aria-orientation":t.orientation.value,id:o,onKeydown:f,role:"listbox",tabIndex:0,ref:t.optionsRef};return V({ourProps:m,theirProps:O,slot:S,attrs:n,slots:l,features:Q.RenderStrategy|Q.Static,visible:p.value,name:"ListboxOptions"})}}}),pt=_({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:n,attrs:l,expose:r}){var a;let o=(a=e.id)!=null?a:`headlessui-listbox-option-${G()}`,t=K("ListboxOption"),s=w(null);r({el:s,$el:s});let f=x(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===o:!1),d=x(()=>$(t.mode.value,{0:()=>t.compare(E(t.value.value),E(e.value)),1:()=>E(t.value.value).some(i=>t.compare(E(i),E(e.value)))})),p=x(()=>$(t.mode.value,{1:()=>{var i;let c=E(t.value.value);return((i=t.options.value.find(b=>c.some(h=>t.compare(E(h),E(b.dataRef.value)))))==null?void 0:i.id)===o},0:()=>d.value})),u=ot(s),v=x(()=>({disabled:e.disabled,value:e.value,get textValue(){return u()},domRef:s}));U(()=>t.registerOption(o,v)),Le(()=>t.unregisterOption(o)),U(()=>{de([t.listboxState,d],()=>{t.listboxState.value===0&&d.value&&$(t.mode.value,{1:()=>{p.value&&t.goToOption(L.Specific,o)},0:()=>{t.goToOption(L.Specific,o)}})},{immediate:!0})}),H(()=>{t.listboxState.value===0&&f.value&&t.activationTrigger.value!==0&&j(()=>{var i,c;return(c=(i=g(s))==null?void 0:i.scrollIntoView)==null?void 0:c.call(i,{block:"nearest"})})});function S(i){if(e.disabled)return i.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),j(()=>{var c;return(c=g(t.buttonRef))==null?void 0:c.focus({preventScroll:!0})}))}function O(){if(e.disabled)return t.goToOption(L.Nothing);t.goToOption(L.Specific,o)}let m=Qe();function P(i){m.update(i)}function k(i){m.wasMoved(i)&&(e.disabled||f.value||t.goToOption(L.Specific,o,0))}function A(i){m.wasMoved(i)&&(e.disabled||f.value&&t.goToOption(L.Nothing))}return()=>{let{disabled:i}=e,c={active:f.value,selected:d.value,disabled:i},{value:b,disabled:h,...D}=e,N={id:o,ref:s,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-selected":d.value,disabled:void 0,onClick:S,onFocus:O,onPointerenter:P,onMouseenter:P,onPointermove:k,onMousemove:k,onPointerleave:A,onMouseleave:A};return V({ourProps:N,theirProps:D,slot:c,attrs:l,slots:n,name:"ListboxOption"})}}});const ft={class:"flex justify-center items-center h-screen w-full"},bt={class:"flex relative bottom-16 flex-col items-center"},mt={class:"w-72 mt-10 mb-8"},ht={class:"relative mt-1"},gt={class:"block truncate"},yt={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},xt={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"},Dt={__name:"index",setup(e){const n=Re(),l=De(),r=n.users,a=t=>{n.setCurrentUser(t),l.push("/chat")},o=w(r[0]);return(t,s)=>{const f=Oe;return B(),z("div",ft,[T("div",bt,[s[2]||(s[2]=T("h1",{class:"text-4xl font-semibold"},"Добро пожаловать",-1)),T("div",mt,[I(R(dt),{modelValue:R(o),"onUpdate:modelValue":s[0]||(s[0]=d=>Pe(o)?o.value=d:null)},{default:F(()=>[T("div",ht,[I(R(ct),{class:"relative h-12 w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"},{default:F(()=>[T("span",gt,ee(R(o)),1),T("span",yt,[I(f,{name:"heroicons:arrows-up-down",class:"h-32 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),I(Ee,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:F(()=>[I(R(vt),{class:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"},{default:F(()=>[(B(!0),z(Y,null,$e(R(r),d=>(B(),ke(R(pt),{key:d,value:d,as:"template",class:"cursor-pointer"},{default:F(({active:p,selected:u})=>[T("li",{class:te([p?"bg-sky-100 text-sky-900":"text-gray-900","relative select-none py-2 pl-10 pr-4"])},[T("span",{class:te([u?"font-medium text-sky-900":"font-normal","block truncate"])},ee(d),3),u?(B(),z("span",xt)):Te("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),T("button",{onClick:s[1]||(s[1]=d=>a(R(o))),class:"px-14 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600"}," Войти ")])])}}};export{Dt as default};
