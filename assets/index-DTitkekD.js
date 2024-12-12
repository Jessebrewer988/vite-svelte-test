(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();const At=!1;var Ie=Array.isArray,Le=Array.from,Rt=Object.defineProperty,le=Object.getOwnPropertyDescriptor,It=Object.prototype,Lt=Array.prototype,Ft=Object.getPrototypeOf;function Pt(e){for(var t=0;t<e.length;t++)e[t]()}const W=2,Qe=4,we=8,Fe=16,q=32,me=64,Oe=128,Z=256,de=512,O=1024,j=2048,se=4096,F=8192,z=16384,qt=32768,Pe=65536,Mt=1<<19,Wt=1<<20,Se=Symbol("$state");function Ut(e){return e===this.v}function Bt(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Vt(e){return!Bt(e,this.v)}function Ht(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Yt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function jt(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Kt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $t(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Gt(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Jt(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Xt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Zt=!1;function A(e){return{f:0,v:e,reactions:null,equals:Ut,version:0}}function Ne(e){return Qt(A(e))}function zt(e,t=!1){const n=A(e);return t||(n.equals=Vt),n}function Qt(e){return w!==null&&w.f&W&&(P===null?pn([e]):P.push(e)),e}function S(e,t){return w!==null&&wn()&&w.f&(W|Fe)&&(P===null||!P.includes(e))&&Xt(),et(e,t)}function et(e,t){return e.equals(t)||(e.v=t,e.version=wt(),tt(e,j),h!==null&&h.f&O&&!(h.f&q)&&(x!==null&&x.includes(e)?(M(h,j),Ee(h)):V===null?gn([e]):V.push(e))),t}function tt(e,t){var n=e.reactions;if(n!==null)for(var r=n.length,l=0;l<r;l++){var i=n[l],f=i.f;f&j||(M(i,t),f&(O|Z)&&(f&W?tt(i,se):Ee(i)))}}const en=1,tn=2,nn=16,rn=2,N=Symbol();let nt=!1;function B(e,t=null,n){if(typeof e!="object"||e===null||Se in e)return e;const r=Ft(e);if(r!==It&&r!==Lt)return e;var l=new Map,i=Ie(e),f=A(0);i&&l.set("length",A(e.length));var _;return new Proxy(e,{defineProperty(c,o,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&$t();var s=l.get(o);return s===void 0?(s=A(a.value),l.set(o,s)):S(s,B(a.value,_)),!0},deleteProperty(c,o){var a=l.get(o);if(a===void 0)o in c&&l.set(o,A(N));else{if(i&&typeof o=="string"){var s=l.get("length"),u=Number(o);Number.isInteger(u)&&u<s.v&&S(s,u)}S(a,N),je(f)}return!0},get(c,o,a){var d;if(o===Se)return e;var s=l.get(o),u=o in c;if(s===void 0&&(!u||(d=le(c,o))!=null&&d.writable)&&(s=A(B(u?c[o]:N,_)),l.set(o,s)),s!==void 0){var v=T(s);return v===N?void 0:v}return Reflect.get(c,o,a)},getOwnPropertyDescriptor(c,o){var a=Reflect.getOwnPropertyDescriptor(c,o);if(a&&"value"in a){var s=l.get(o);s&&(a.value=T(s))}else if(a===void 0){var u=l.get(o),v=u==null?void 0:u.v;if(u!==void 0&&v!==N)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return a},has(c,o){var v;if(o===Se)return!0;var a=l.get(o),s=a!==void 0&&a.v!==N||Reflect.has(c,o);if(a!==void 0||h!==null&&(!s||(v=le(c,o))!=null&&v.writable)){a===void 0&&(a=A(s?B(c[o],_):N),l.set(o,a));var u=T(a);if(u===N)return!1}return s},set(c,o,a,s){var R;var u=l.get(o),v=o in c;if(i&&o==="length")for(var d=a;d<u.v;d+=1){var m=l.get(d+"");m!==void 0?S(m,N):d in c&&(m=A(N),l.set(d+"",m))}u===void 0?(!v||(R=le(c,o))!=null&&R.writable)&&(u=A(void 0),S(u,B(a,_)),l.set(o,u)):(v=u.v!==N,S(u,B(a,_)));var k=Reflect.getOwnPropertyDescriptor(c,o);if(k!=null&&k.set&&k.set.call(s,a),!v){if(i&&typeof o=="string"){var p=l.get("length"),y=Number(o);Number.isInteger(y)&&y>=p.v&&S(p,y+1)}je(f)}return!0},ownKeys(c){T(f);var o=Reflect.ownKeys(c).filter(u=>{var v=l.get(u);return v===void 0||v.v!==N});for(var[a,s]of l)s.v!==N&&!(a in c)&&o.push(a);return o},setPrototypeOf(){Gt()}})}function je(e,t=1){S(e,e.v+t)}var Ke,rt,lt;function ln(){if(Ke===void 0){Ke=window;var e=Element.prototype,t=Node.prototype;rt=le(t,"firstChild").get,lt=le(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function it(e=""){return document.createTextNode(e)}function at(e){return rt.call(e)}function qe(e){return lt.call(e)}function E(e,t){return at(e)}function L(e,t=1,n=!1){let r=e;for(;t--;)r=qe(r);return r}function an(e){e.textContent=""}function ot(e){var t=e.children;if(t!==null){e.children=null;for(var n=0;n<t.length;n+=1){var r=t[n];r.f&W?Me(r):K(r)}}}function on(e){for(var t=e.parent;t!==null;){if(!(t.f&W))return t;t=t.parent}return null}function st(e){var t,n=h;Y(on(e));try{ot(e),t=mt(e)}finally{Y(n)}return t}function ut(e){var t=st(e),n=(J||e.f&Z)&&e.deps!==null?se:O;M(e,n),e.equals(t)||(e.v=t,e.version=wt())}function Me(e){ot(e),oe(e,0),M(e,z),e.v=e.children=e.deps=e.ctx=e.reactions=null}function sn(e){h===null&&w===null&&jt(),w!==null&&w.f&Z&&Yt(),Be&&Ht()}function un(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ue(e,t,n,r=!0){var l=(e&me)!==0,i=h,f={ctx:D,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|j,first:null,fn:t,last:null,next:null,parent:l?null:i,prev:null,teardown:null,transitions:null,version:0};if(n){var _=X;try{$e(!0),be(f),f.f|=qt}catch(a){throw K(f),a}finally{$e(_)}}else t!==null&&Ee(f);var c=n&&f.deps===null&&f.first===null&&f.nodes_start===null&&f.teardown===null&&(f.f&Wt)===0;if(!c&&!l&&r&&(i!==null&&un(f,i),w!==null&&w.f&W)){var o=w;(o.children??(o.children=[])).push(f)}return f}function fn(e){const t=ue(we,null,!1);return M(t,O),t.teardown=e,t}function cn(e){sn();var t=h!==null&&(h.f&q)!==0&&D!==null&&!D.m;if(t){var n=D;(n.e??(n.e=[])).push({fn:e,effect:h,reaction:w})}else{var r=ft(e);return r}}function vn(e){const t=ue(me,e,!0);return()=>{K(t)}}function ft(e){return ue(Qe,e,!1)}function Te(e){return We(e)}function We(e,t=0){return ue(we|Fe|t,e,!0)}function ae(e,t=!0){return ue(we|q,e,!0,t)}function ct(e){var t=e.teardown;if(t!==null){const n=Be,r=w;Ge(!0),H(null);try{t.call(null)}finally{Ge(n),H(r)}}}function vt(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var n=0;n<t.length;n+=1)Me(t[n])}}function _t(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var r=n.next;K(n,t),n=r}}function _n(e){for(var t=e.first;t!==null;){var n=t.next;t.f&q||K(t),t=n}}function K(e,t=!0){var n=!1;if((t||e.f&Mt)&&e.nodes_start!==null){for(var r=e.nodes_start,l=e.nodes_end;r!==null;){var i=r===l?null:qe(r);r.remove(),r=i}n=!0}_t(e,t&&!n),vt(e),oe(e,0),M(e,z);var f=e.transitions;if(f!==null)for(const c of f)c.stop();ct(e);var _=e.parent;_!==null&&_.first!==null&&dt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function dt(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Ce(e,t){var n=[];Ue(e,n,!0),ht(n,()=>{K(e),t&&t()})}function ht(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var l of e)l.out(r)}else t()}function Ue(e,t,n){if(!(e.f&F)){if(e.f^=F,e.transitions!==null)for(const f of e.transitions)(f.is_global||n)&&t.push(f);for(var r=e.first;r!==null;){var l=r.next,i=(r.f&Pe)!==0||(r.f&q)!==0;Ue(r,t,i?n:!1),r=l}}}function he(e){pt(e,!0)}function pt(e,t){if(e.f&F){fe(e)&&be(e),e.f^=F;for(var n=e.first;n!==null;){var r=n.next,l=(n.f&Pe)!==0||(n.f&q)!==0;pt(n,l?t:!1),n=r}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let De=!1,Ae=[];function dn(){De=!1;const e=Ae.slice();Ae=[],Pt(e)}function hn(e){De||(De=!0,queueMicrotask(dn)),Ae.push(e)}let _e=!1,pe=!1,ge=null,X=!1,Be=!1;function $e(e){X=e}function Ge(e){Be=e}let Re=[],ie=0;let w=null;function H(e){w=e}let h=null;function Y(e){h=e}let P=null;function pn(e){P=e}let x=null,C=0,V=null;function gn(e){V=e}let gt=0,J=!1,D=null;function wt(){return++gt}function wn(){return!Zt}function fe(e){var f,_;var t=e.f;if(t&j)return!0;if(t&se){var n=e.deps,r=(t&Z)!==0;if(n!==null){var l;if(t&de){for(l=0;l<n.length;l++)((f=n[l]).reactions??(f.reactions=[])).push(e);e.f^=de}for(l=0;l<n.length;l++){var i=n[l];if(fe(i)&&ut(i),r&&h!==null&&!J&&!((_=i==null?void 0:i.reactions)!=null&&_.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}r||M(e,O)}return!1}function mn(e,t){for(var n=t;n!==null;){if(n.f&Oe)try{n.fn(e);return}catch{n.f^=Oe}n=n.parent}throw _e=!1,e}function yn(e){return(e.f&z)===0&&(e.parent===null||(e.parent.f&Oe)===0)}function ye(e,t,n,r){if(_e){if(n===null&&(_e=!1),yn(t))throw e;return}n!==null&&(_e=!0);{mn(e,t);return}}function mt(e){var u;var t=x,n=C,r=V,l=w,i=J,f=P,_=D,c=e.f;x=null,C=0,V=null,w=c&(q|me)?null:e,J=!X&&(c&Z)!==0,P=null,D=e.ctx;try{var o=(0,e.fn)(),a=e.deps;if(x!==null){var s;if(oe(e,C),a!==null&&C>0)for(a.length=C+x.length,s=0;s<x.length;s++)a[C+s]=x[s];else e.deps=a=x;if(!J)for(s=C;s<a.length;s++)((u=a[s]).reactions??(u.reactions=[])).push(e)}else a!==null&&C<a.length&&(oe(e,C),a.length=C);return o}finally{x=t,C=n,V=r,w=l,J=i,P=f,D=_}}function bn(e,t){let n=t.reactions;if(n!==null){var r=n.indexOf(e);if(r!==-1){var l=n.length-1;l===0?n=t.reactions=null:(n[r]=n[l],n.pop())}}n===null&&t.f&W&&(x===null||!x.includes(t))&&(M(t,se),t.f&(Z|de)||(t.f^=de),oe(t,0))}function oe(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)bn(e,n[r])}function be(e){var t=e.f;if(!(t&z)){M(e,O);var n=h,r=D;h=e;try{t&Fe?_n(e):_t(e),vt(e),ct(e);var l=mt(e);e.teardown=typeof l=="function"?l:null,e.version=gt}catch(i){ye(i,e,n,r||e.ctx)}finally{h=n}}}function En(){if(ie>1e3){ie=0;try{Kt()}catch(e){if(ge!==null)ye(e,ge,null);else throw e}}ie++}function xn(e){var t=e.length;if(t!==0){En();var n=X;X=!0;try{for(var r=0;r<t;r++){var l=e[r];l.f&O||(l.f^=O);var i=[];yt(l,i),kn(i)}}finally{X=n}}}function kn(e){var t=e.length;if(t!==0)for(var n=0;n<t;n++){var r=e[n];if(!(r.f&(z|F)))try{fe(r)&&(be(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?dt(r):r.fn=null))}catch(l){ye(l,r,null,r.ctx)}}}function Sn(){if(pe=!1,ie>1001)return;const e=Re;Re=[],xn(e),pe||(ie=0,ge=null)}function Ee(e){pe||(pe=!0,queueMicrotask(Sn)),ge=e;for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(n&(me|q)){if(!(n&O))return;t.f^=O}}Re.push(t)}function yt(e,t){var n=e.first,r=[];e:for(;n!==null;){var l=n.f,i=(l&q)!==0,f=i&&(l&O)!==0,_=n.next;if(!f&&!(l&F))if(l&we){if(i)n.f^=O;else try{fe(n)&&be(n)}catch(s){ye(s,n,null,n.ctx)}var c=n.first;if(c!==null){n=c;continue}}else l&Qe&&r.push(n);if(_===null){let s=n.parent;for(;s!==null;){if(e===s)break e;var o=s.next;if(o!==null){n=o;continue e}s=s.parent}}n=_}for(var a=0;a<r.length;a++)c=r[a],t.push(c),yt(c,t)}function T(e){var a;var t=e.f,n=(t&W)!==0;if(n&&t&z){var r=st(e);return Me(e),r}if(w!==null){P!==null&&P.includes(e)&&Jt();var l=w.deps;x===null&&l!==null&&l[C]===e?C++:x===null?x=[e]:x.push(e),V!==null&&h!==null&&h.f&O&&!(h.f&q)&&V.includes(e)&&(M(h,j),Ee(h))}else if(n&&e.deps===null)for(var i=e,f=i.parent,_=i;f!==null;)if(f.f&W){var c=f;_=c,f=c.parent}else{var o=f;(a=o.deriveds)!=null&&a.includes(_)||(o.deriveds??(o.deriveds=[])).push(_);break}return n&&(i=e,fe(i)&&ut(i)),e.v}const Nn=~(j|se|O);function M(e,t){e.f=e.f&Nn|t}function bt(e,t=!1,n){D={p:D,c:null,e:null,m:!1,s:e,x:null,l:null}}function Et(e){const t=D;if(t!==null){const f=t.e;if(f!==null){var n=h,r=w;t.e=null;try{for(var l=0;l<f.length;l++){var i=f[l];Y(i.effect),H(i.reaction),ft(i.fn)}}finally{Y(n),H(r)}}D=t.p,t.m=!0}return{}}function Tn(e){var t=w,n=h;H(null),Y(null);try{return e()}finally{H(t),Y(n)}}const On=new Set,Je=new Set;function Cn(e,t,n,r){function l(i){if(r.capture||re.call(t,i),!i.cancelBubble)return Tn(()=>n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?hn(()=>{t.addEventListener(e,l,r)}):t.addEventListener(e,l,r),l}function Dn(e,t,n,r,l){var i={capture:r,passive:l},f=Cn(e,t,n,i);(t===document.body||t===window||t===document)&&fn(()=>{t.removeEventListener(e,f,i)})}function re(e){var y;var t=this,n=t.ownerDocument,r=e.type,l=((y=e.composedPath)==null?void 0:y.call(e))||[],i=l[0]||e.target,f=0,_=e.__root;if(_){var c=l.indexOf(_);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var o=l.indexOf(t);if(o===-1)return;c<=o&&(f=c)}if(i=l[f]||e.target,i!==t){Rt(e,"currentTarget",{configurable:!0,get(){return i||n}});var a=w,s=h;H(null),Y(null);try{for(var u,v=[];i!==null;){var d=i.assignedSlot||i.parentNode||i.host||null;try{var m=i["__"+r];if(m!==void 0&&!i.disabled)if(Ie(m)){var[k,...p]=m;k.apply(i,[e,...p])}else m.call(i,e)}catch(R){u?v.push(R):u=R}if(e.cancelBubble||d===t||d===null)break;i=d}if(u){for(let R of v)queueMicrotask(()=>{throw R});throw u}}finally{e.__root=t,delete e.currentTarget,H(a),Y(s)}}}function An(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Rn(e,t){var n=h;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function ce(e,t){var n=(t&rn)!==0,r,l=!e.startsWith("<!>");return()=>{r===void 0&&(r=An(l?e:"<!>"+e),r=at(r));var i=n?document.importNode(r,!0):r.cloneNode(!0);return Rn(i,i),i}}function te(e,t){e!==null&&e.before(t)}const In=["touchstart","touchmove"];function Ln(e){return In.includes(e)}function ne(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function Fn(e,t){return Pn(e,t)}const G=new Map;function Pn(e,{target:t,anchor:n,props:r={},events:l,context:i,intro:f=!0}){ln();var _=new Set,c=s=>{for(var u=0;u<s.length;u++){var v=s[u];if(!_.has(v)){_.add(v);var d=Ln(v);t.addEventListener(v,re,{passive:d});var m=G.get(v);m===void 0?(document.addEventListener(v,re,{passive:d}),G.set(v,1)):G.set(v,m+1)}}};c(Le(On)),Je.add(c);var o=void 0,a=vn(()=>{var s=n??t.appendChild(it());return ae(()=>{if(i){bt({});var u=D;u.c=i}l&&(r.$$events=l),o=e(s,r)||{},i&&Et()}),()=>{var d;for(var u of _){t.removeEventListener(u,re);var v=G.get(u);--v===0?(document.removeEventListener(u,re),G.delete(u)):G.set(u,v)}Je.delete(c),Xe.delete(o),s!==n&&((d=s.parentNode)==null||d.removeChild(s))}});return Xe.set(o,a),o}let Xe=new WeakMap;function Ze(e,t,n=!1){var r=e,l=null,i=null,f=N,_=n?Pe:0,c=!1;const o=(s,u=!0)=>{c=!0,a(u,s)},a=(s,u)=>{f!==(f=s)&&(f?(l?he(l):u&&(l=ae(()=>u(r))),i&&Ce(i,()=>{i=null})):(i?he(i):u&&(i=ae(()=>u(r))),l&&Ce(l,()=>{l=null})))};We(()=>{c=!1,t(o),c||a(null,null)},_)}function qn(e,t){return t}function Mn(e,t,n,r){for(var l=[],i=t.length,f=0;f<i;f++)Ue(t[f].e,l,!0);var _=i>0&&l.length===0&&n!==null;if(_){var c=n.parentNode;an(c),c.append(n),r.clear(),U(e,t[0].prev,t[i-1].next)}ht(l,()=>{for(var o=0;o<i;o++){var a=t[o];_||(r.delete(a.k),U(e,a.prev,a.next)),K(a.e,!_)}})}function Wn(e,t,n,r,l,i=null){var f=e,_={flags:t,items:new Map,first:null};{var c=e;f=c.appendChild(it())}var o=null,a=!1;We(()=>{var s=n(),u=Ie(s)?s:s==null?[]:Le(s),v=u.length;if(!(a&&v===0)){a=v===0;{var d=w;Un(u,_,f,l,t,(d.f&F)!==0,r)}i!==null&&(v===0?o?he(o):o=ae(()=>i(f)):o!==null&&Ce(o,()=>{o=null})),n()}})}function Un(e,t,n,r,l,i,f){var _=e.length,c=t.items,o=t.first,a=o,s,u=null,v=[],d=[],m,k,p,y;for(y=0;y<_;y+=1){if(m=e[y],k=f(m,y),p=c.get(k),p===void 0){var R=a?a.e.nodes_start:n;u=Vn(R,t,u,u===null?t.first:u.next,m,k,y,r,l),c.set(k,u),v=[],d=[],a=u.next;continue}if(Bn(p,m,y),p.e.f&F&&he(p.e),p!==a){if(s!==void 0&&s.has(p)){if(v.length<d.length){var $=d[0],I;u=$.prev;var ve=v[0],Q=v[v.length-1];for(I=0;I<v.length;I+=1)ze(v[I],$,n);for(I=0;I<d.length;I+=1)s.delete(d[I]);U(t,ve.prev,Q.next),U(t,u,ve),U(t,Q,$),a=$,u=Q,y-=1,v=[],d=[]}else s.delete(p),ze(p,a,n),U(t,p.prev,p.next),U(t,p,u===null?t.first:u.next),U(t,u,p),u=p;continue}for(v=[],d=[];a!==null&&a.k!==k;)(i||!(a.e.f&F))&&(s??(s=new Set)).add(a),d.push(a),a=a.next;if(a===null)continue;p=a}v.push(p),u=p,a=p.next}if(a!==null||s!==void 0){for(var ee=s===void 0?[]:Le(s);a!==null;)(i||!(a.e.f&F))&&ee.push(a),a=a.next;var g=ee.length;if(g>0){var b=_===0?n:null;Mn(t,ee,b,c)}}h.first=t.first&&t.first.e,h.last=u&&u.e}function Bn(e,t,n,r){et(e.v,t),e.i=n}function Vn(e,t,n,r,l,i,f,_,c){var o=(c&en)!==0,a=(c&nn)===0,s=o?a?zt(l):A(l):l,u=c&tn?A(f):f,v={i:u,v:s,k:i,a:null,e:null,prev:n,next:r};try{return v.e=ae(()=>_(e,s,u),nt),v.e.prev=n&&n.e,v.e.next=r&&r.e,n===null?t.first=v:(n.next=v,n.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{}}function ze(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,l=t?t.e.nodes_start:n,i=e.e.nodes_start;i!==r;){var f=qe(i);l.before(i),i=f}}function U(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function Hn(e,t){var n=e.__className,r=Yn(t);(n!==r||nt)&&(t==null?e.removeAttribute("class"):e.className=r,e.__className=r)}function Yn(e){return e??""}const jn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(jn);var Kn=ce('<p class="text-sm text-gray-600"> </p>'),$n=ce('<div class="bg-white p-4 rounded-lg shadow"><div class="grid grid-cols-3 gap-4"><div><span class="font-semibold block mb-1">Game Name:</span> <span> </span></div> <div><span class="font-semibold block mb-1">Game Developer:</span> <span> </span></div> <div><span class="font-semibold block mb-1">Release Year:</span> <span> </span></div></div></div>'),Gn=ce('<div class="grid gap-4 text-black"></div>'),Jn=ce('<div class="bg-gray-100 p-8 rounded-lg text-center"><p class="text-gray-600">No games data available</p></div>'),Xn=ce('<main class="container mx-auto p-4 text-black svelte-57hjod"><div class="mb-8"><h1 class="text-3xl font-bold mb-4">Games List</h1> <div class="bg-gray-100 p-4 rounded-lg mb-4"><div class="flex justify-between items-center"><div><p class="font-semibold">WebSocket Status: <span> </span></p> <!></div> <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Refresh Data</button></div></div></div> <!></main>');function Zn(e,t){bt(t,!0);let n=Ne(B([])),r,l=Ne("Disconnected"),i=Ne("");const f=`wss://${window.location.hostname}:8889`,_="https://deafening-retha-jesses-org-14074d50.koyeb.app/electronic_arts/games_list";async function c(){try{const g=await fetch(_);S(n,B(await g.json())),S(i,B(new Date().toLocaleTimeString())),console.log("Data fetched:",T(n))}catch(g){console.error("Error fetching data:",g),S(l,"Error fetching data")}}function o(){try{console.log("Setting up WebSocket connection to:",f),r=new WebSocket(f),r.onopen=()=>{console.log("WebSocket connected"),S(l,"Connected")},r.onmessage=async g=>{console.log("WebSocket message received:",g.data);try{const b=JSON.parse(g.data);b.type==="configUpdate"&&b.orgId==="electronic_arts"&&b.configId==="games_list"?(console.log("Updating data due to WebSocket message"),await c()):b.type==="connected"&&console.log("Connection confirmed:",b.message)}catch(b){console.error("Error processing WebSocket message:",b)}},r.onclose=()=>{console.log("WebSocket connection closed"),S(l,"Disconnected - Reconnecting..."),setTimeout(o,5e3)},r.onerror=g=>{console.error("WebSocket error:",g),S(l,"Error - Check console")}}catch(g){console.error("Failed to establish WebSocket connection:",g),S(l,"Connection Failed"),setTimeout(o,5e3)}}function a(){c()}cn(()=>(console.log("Starting app"),c(),o(),()=>{r&&r.readyState===WebSocket.OPEN&&r.close()}));var s=Xn(),u=E(s),v=L(E(u),2),d=E(v),m=E(d),k=E(m),p=L(E(k)),y=E(p),R=L(k,2);{var $=g=>{var b=Kn(),xe=E(b);Te(()=>ne(xe,`Last updated: ${T(i)??""}`)),te(g,b)};Ze(R,g=>{T(i)&&g($)})}var I=L(m,2),ve=L(u,2);{var Q=g=>{var b=Gn();Wn(b,21,()=>T(n),qn,(xe,ke)=>{var Ve=$n(),xt=E(Ve),He=E(xt),kt=L(E(He),2),St=E(kt),Ye=L(He,2),Nt=L(E(Ye),2),Tt=E(Nt),Ot=L(Ye,2),Ct=L(E(Ot),2),Dt=E(Ct);Te(()=>{ne(St,T(ke).game_name),ne(Tt,T(ke).game_dev),ne(Dt,T(ke).release_year)}),te(xe,Ve)}),te(g,b)},ee=g=>{var b=Jn();te(g,b)};Ze(ve,g=>{T(n).length>0?g(Q):g(ee,!1)})}Te(()=>{Hn(p,T(l)==="Connected"?"text-green-600":"text-red-600"),ne(y,T(l))}),Dn("click",I,a),te(e,s),Et()}Fn(Zn,{target:document.getElementById("app")});