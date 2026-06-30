(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _o(t){const n=Object.create(null);for(const e of t.split(","))n[e]=1;return e=>e in n}const it={},Fn=[],Qt=()=>{},ss=()=>!1,Ie=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),xo=t=>t.startsWith("onUpdate:"),_t=Object.assign,yo=(t,n)=>{const e=t.indexOf(n);e>-1&&t.splice(e,1)},ls=Object.prototype.hasOwnProperty,W=(t,n)=>ls.call(t,n),V=Array.isArray,zn=t=>Ee(t)==="[object Map]",Hi=t=>Ee(t)==="[object Set]",N=t=>typeof t=="function",at=t=>typeof t=="string",_n=t=>typeof t=="symbol",rt=t=>t!==null&&typeof t=="object",$i=t=>(rt(t)||N(t))&&N(t.then)&&N(t.catch),Bi=Object.prototype.toString,Ee=t=>Bi.call(t),as=t=>Ee(t).slice(8,-1),ji=t=>Ee(t)==="[object Object]",wo=t=>at(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xn=_o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Le=t=>{const n=Object.create(null);return e=>n[e]||(n[e]=t(e))},cs=/-(\w)/g,Ot=Le(t=>t.replace(cs,(n,e)=>e?e.toUpperCase():"")),ds=/\B([A-Z])/g,Pn=Le(t=>t.replace(ds,"-$1").toLowerCase()),Oe=Le(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ge=Le(t=>t?`on${Oe(t)}`:""),mn=(t,n)=>!Object.is(t,n),qe=(t,...n)=>{for(let e=0;e<t.length;e++)t[e](...n)},ro=(t,n,e,o=!1)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,writable:o,value:e})},us=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let Uo;const Fe=()=>Uo||(Uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ze(t){if(V(t)){const n={};for(let e=0;e<t.length;e++){const o=t[e],i=at(o)?hs(o):ze(o);if(i)for(const r in i)n[r]=i[r]}return n}else if(at(t)||rt(t))return t}const ps=/;(?![^(]*\))/g,gs=/:([^]+)/,fs=/\/\*[^]*?\*\//g;function hs(t){const n={};return t.replace(fs,"").split(ps).forEach(e=>{if(e){const o=e.split(gs);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function en(t){let n="";if(at(t))n=t;else if(V(t))for(let e=0;e<t.length;e++){const o=en(t[e]);o&&(n+=o+" ")}else if(rt(t))for(const e in t)t[e]&&(n+=e+" ");return n.trim()}const ms="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bs=_o(ms);function Vi(t){return!!t||t===""}const Ni=t=>!!(t&&t.__v_isRef===!0),nt=t=>at(t)?t:t==null?"":V(t)||rt(t)&&(t.toString===Bi||!N(t.toString))?Ni(t)?nt(t.value):JSON.stringify(t,Ki,2):String(t),Ki=(t,n)=>Ni(n)?Ki(t,n.value):zn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((e,[o,i],r)=>(e[We(o,r)+" =>"]=i,e),{})}:Hi(n)?{[`Set(${n.size})`]:[...n.values()].map(e=>We(e))}:_n(n)?We(n):rt(n)&&!V(n)&&!ji(n)?String(n):n,We=(t,n="")=>{var e;return _n(t)?`Symbol(${(e=t.description)!=null?e:n})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class Ui{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=At,!n&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,e;if(this.scopes)for(n=0,e=this.scopes.length;n<e;n++)this.scopes[n].pause();for(n=0,e=this.effects.length;n<e;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,e;if(this.scopes)for(n=0,e=this.scopes.length;n<e;n++)this.scopes[n].resume();for(n=0,e=this.effects.length;n<e;n++)this.effects[n].resume()}}run(n){if(this._active){const e=At;try{return At=this,n()}finally{At=e}}}on(){++this._on===1&&(this.prevScope=At,At=this)}off(){this._on>0&&--this._on===0&&(At=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let e,o;for(e=0,o=this.effects.length;e<o;e++)this.effects[e].stop();for(this.effects.length=0,e=0,o=this.cleanups.length;e<o;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,o=this.scopes.length;e<o;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function vs(t){return new Ui(t)}function _s(){return At}let ot;const Xe=new WeakSet;class Gi{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,At&&At.active&&At.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xe.has(this)&&(Xe.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Go(this),Xi(this);const n=ot,e=zt;ot=this,zt=!0;try{return this.fn()}finally{Qi(this),ot=n,zt=e,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)ko(n);this.deps=this.depsTail=void 0,Go(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xe.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){so(this)&&this.run()}get dirty(){return so(this)}}let qi=0,Qn,Jn;function Wi(t,n=!1){if(t.flags|=8,n){t.next=Jn,Jn=t;return}t.next=Qn,Qn=t}function Co(){qi++}function So(){if(--qi>0)return;if(Jn){let n=Jn;for(Jn=void 0;n;){const e=n.next;n.next=void 0,n.flags&=-9,n=e}}let t;for(;Qn;){let n=Qn;for(Qn=void 0;n;){const e=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(o){t||(t=o)}n=e}}if(t)throw t}function Xi(t){for(let n=t.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Qi(t){let n,e=t.depsTail,o=e;for(;o;){const i=o.prevDep;o.version===-1?(o===e&&(e=i),ko(o),xs(o)):n=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=i}t.deps=n,t.depsTail=e}function so(t){for(let n=t.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Ji(n.dep.computed)||n.dep.version!==n.version))return!0;return!!t._dirty}function Ji(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ie)||(t.globalVersion=ie,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!so(t))))return;t.flags|=2;const n=t.dep,e=ot,o=zt;ot=t,zt=!0;try{Xi(t);const i=t.fn(t._value);(n.version===0||mn(i,t._value))&&(t.flags|=128,t._value=i,n.version++)}catch(i){throw n.version++,i}finally{ot=e,zt=o,Qi(t),t.flags&=-3}}function ko(t,n=!1){const{dep:e,prevSub:o,nextSub:i}=t;if(o&&(o.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=o,t.nextSub=void 0),e.subs===t&&(e.subs=o,!o&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)ko(r,!0)}!n&&!--e.sc&&e.map&&e.map.delete(e.key)}function xs(t){const{prevDep:n,nextDep:e}=t;n&&(n.nextDep=e,t.prevDep=void 0),e&&(e.prevDep=n,t.nextDep=void 0)}let zt=!0;const Yi=[];function rn(){Yi.push(zt),zt=!1}function sn(){const t=Yi.pop();zt=t===void 0?!0:t}function Go(t){const{cleanup:n}=t;if(t.cleanup=void 0,n){const e=ot;ot=void 0;try{n()}finally{ot=e}}}let ie=0;class ys{constructor(n,e){this.sub=n,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ao{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!ot||!zt||ot===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ot)e=this.activeLink=new ys(ot,this),ot.deps?(e.prevDep=ot.depsTail,ot.depsTail.nextDep=e,ot.depsTail=e):ot.deps=ot.depsTail=e,Zi(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const o=e.nextDep;o.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=o),e.prevDep=ot.depsTail,e.nextDep=void 0,ot.depsTail.nextDep=e,ot.depsTail=e,ot.deps===e&&(ot.deps=o)}return e}trigger(n){this.version++,ie++,this.notify(n)}notify(n){Co();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{So()}}}function Zi(t){if(t.dep.sc++,t.sub.flags&4){const n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let o=n.deps;o;o=o.nextDep)Zi(o)}const e=t.dep.subs;e!==t&&(t.prevSub=e,e&&(e.nextSub=t)),t.dep.subs=t}}const we=new WeakMap,Sn=Symbol(""),lo=Symbol(""),re=Symbol("");function bt(t,n,e){if(zt&&ot){let o=we.get(t);o||we.set(t,o=new Map);let i=o.get(e);i||(o.set(e,i=new Ao),i.map=o,i.key=e),i.track()}}function on(t,n,e,o,i,r){const s=we.get(t);if(!s){ie++;return}const l=a=>{a&&a.trigger()};if(Co(),n==="clear")s.forEach(l);else{const a=V(t),p=a&&wo(e);if(a&&e==="length"){const c=Number(o);s.forEach((g,f)=>{(f==="length"||f===re||!_n(f)&&f>=c)&&l(g)})}else switch((e!==void 0||s.has(void 0))&&l(s.get(e)),p&&l(s.get(re)),n){case"add":a?p&&l(s.get("length")):(l(s.get(Sn)),zn(t)&&l(s.get(lo)));break;case"delete":a||(l(s.get(Sn)),zn(t)&&l(s.get(lo)));break;case"set":zn(t)&&l(s.get(Sn));break}}So()}function ws(t,n){const e=we.get(t);return e&&e.get(n)}function En(t){const n=U(t);return n===t?n:(bt(n,"iterate",re),Lt(t)?n:n.map(gt))}function De(t){return bt(t=U(t),"iterate",re),t}const Cs={__proto__:null,[Symbol.iterator](){return Qe(this,Symbol.iterator,gt)},concat(...t){return En(this).concat(...t.map(n=>V(n)?En(n):n))},entries(){return Qe(this,"entries",t=>(t[1]=gt(t[1]),t))},every(t,n){return Zt(this,"every",t,n,void 0,arguments)},filter(t,n){return Zt(this,"filter",t,n,e=>e.map(gt),arguments)},find(t,n){return Zt(this,"find",t,n,gt,arguments)},findIndex(t,n){return Zt(this,"findIndex",t,n,void 0,arguments)},findLast(t,n){return Zt(this,"findLast",t,n,gt,arguments)},findLastIndex(t,n){return Zt(this,"findLastIndex",t,n,void 0,arguments)},forEach(t,n){return Zt(this,"forEach",t,n,void 0,arguments)},includes(...t){return Je(this,"includes",t)},indexOf(...t){return Je(this,"indexOf",t)},join(t){return En(this).join(t)},lastIndexOf(...t){return Je(this,"lastIndexOf",t)},map(t,n){return Zt(this,"map",t,n,void 0,arguments)},pop(){return Un(this,"pop")},push(...t){return Un(this,"push",t)},reduce(t,...n){return qo(this,"reduce",t,n)},reduceRight(t,...n){return qo(this,"reduceRight",t,n)},shift(){return Un(this,"shift")},some(t,n){return Zt(this,"some",t,n,void 0,arguments)},splice(...t){return Un(this,"splice",t)},toReversed(){return En(this).toReversed()},toSorted(t){return En(this).toSorted(t)},toSpliced(...t){return En(this).toSpliced(...t)},unshift(...t){return Un(this,"unshift",t)},values(){return Qe(this,"values",gt)}};function Qe(t,n,e){const o=De(t),i=o[n]();return o!==t&&!Lt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=e(r.value)),r}),i}const Ss=Array.prototype;function Zt(t,n,e,o,i,r){const s=De(t),l=s!==t&&!Lt(t),a=s[n];if(a!==Ss[n]){const g=a.apply(t,r);return l?gt(g):g}let p=e;s!==t&&(l?p=function(g,f){return e.call(this,gt(g),f,t)}:e.length>2&&(p=function(g,f){return e.call(this,g,f,t)}));const c=a.call(s,p,o);return l&&i?i(c):c}function qo(t,n,e,o){const i=De(t);let r=e;return i!==t&&(Lt(t)?e.length>3&&(r=function(s,l,a){return e.call(this,s,l,a,t)}):r=function(s,l,a){return e.call(this,s,gt(l),a,t)}),i[n](r,...o)}function Je(t,n,e){const o=U(t);bt(o,"iterate",re);const i=o[n](...e);return(i===-1||i===!1)&&Mo(e[0])?(e[0]=U(e[0]),o[n](...e)):i}function Un(t,n,e=[]){rn(),Co();const o=U(t)[n].apply(t,e);return So(),sn(),o}const ks=_o("__proto__,__v_isRef,__isVue"),tr=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_n));function As(t){_n(t)||(t=String(t));const n=U(this);return bt(n,"has",t),n.hasOwnProperty(t)}class nr{constructor(n=!1,e=!1){this._isReadonly=n,this._isShallow=e}get(n,e,o){if(e==="__v_skip")return n.__v_skip;const i=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return r;if(e==="__v_raw")return o===(i?r?zs:rr:r?ir:or).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(o)?n:void 0;const s=V(n);if(!i){let a;if(s&&(a=Cs[e]))return a;if(e==="hasOwnProperty")return As}const l=Reflect.get(n,e,ut(n)?n:o);return(_n(e)?tr.has(e):ks(e))||(i||bt(n,"get",e),r)?l:ut(l)?s&&wo(e)?l:l.value:rt(l)?i?lr(l):He(l):l}}class er extends nr{constructor(n=!1){super(!1,n)}set(n,e,o,i){let r=n[e];if(!this._isShallow){const a=bn(r);if(!Lt(o)&&!bn(o)&&(r=U(r),o=U(o)),!V(n)&&ut(r)&&!ut(o))return a?!1:(r.value=o,!0)}const s=V(n)&&wo(e)?Number(e)<n.length:W(n,e),l=Reflect.set(n,e,o,ut(n)?n:i);return n===U(i)&&(s?mn(o,r)&&on(n,"set",e,o):on(n,"add",e,o)),l}deleteProperty(n,e){const o=W(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&o&&on(n,"delete",e,void 0),i}has(n,e){const o=Reflect.has(n,e);return(!_n(e)||!tr.has(e))&&bt(n,"has",e),o}ownKeys(n){return bt(n,"iterate",V(n)?"length":Sn),Reflect.ownKeys(n)}}class Ps extends nr{constructor(n=!1){super(!0,n)}set(n,e){return!0}deleteProperty(n,e){return!0}}const Rs=new er,Ms=new Ps,Ts=new er(!0);const ao=t=>t,he=t=>Reflect.getPrototypeOf(t);function Is(t,n,e){return function(...o){const i=this.__v_raw,r=U(i),s=zn(r),l=t==="entries"||t===Symbol.iterator&&s,a=t==="keys"&&s,p=i[t](...o),c=e?ao:n?Ce:gt;return!n&&bt(r,"iterate",a?lo:Sn),{next(){const{value:g,done:f}=p.next();return f?{value:g,done:f}:{value:l?[c(g[0]),c(g[1])]:c(g),done:f}},[Symbol.iterator](){return this}}}}function me(t){return function(...n){return t==="delete"?!1:t==="clear"?void 0:this}}function Es(t,n){const e={get(i){const r=this.__v_raw,s=U(r),l=U(i);t||(mn(i,l)&&bt(s,"get",i),bt(s,"get",l));const{has:a}=he(s),p=n?ao:t?Ce:gt;if(a.call(s,i))return p(r.get(i));if(a.call(s,l))return p(r.get(l));r!==s&&r.get(i)},get size(){const i=this.__v_raw;return!t&&bt(U(i),"iterate",Sn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,s=U(r),l=U(i);return t||(mn(i,l)&&bt(s,"has",i),bt(s,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const s=this,l=s.__v_raw,a=U(l),p=n?ao:t?Ce:gt;return!t&&bt(a,"iterate",Sn),l.forEach((c,g)=>i.call(r,p(c),p(g),s))}};return _t(e,t?{add:me("add"),set:me("set"),delete:me("delete"),clear:me("clear")}:{add(i){!n&&!Lt(i)&&!bn(i)&&(i=U(i));const r=U(this);return he(r).has.call(r,i)||(r.add(i),on(r,"add",i,i)),this},set(i,r){!n&&!Lt(r)&&!bn(r)&&(r=U(r));const s=U(this),{has:l,get:a}=he(s);let p=l.call(s,i);p||(i=U(i),p=l.call(s,i));const c=a.call(s,i);return s.set(i,r),p?mn(r,c)&&on(s,"set",i,r):on(s,"add",i,r),this},delete(i){const r=U(this),{has:s,get:l}=he(r);let a=s.call(r,i);a||(i=U(i),a=s.call(r,i)),l&&l.call(r,i);const p=r.delete(i);return a&&on(r,"delete",i,void 0),p},clear(){const i=U(this),r=i.size!==0,s=i.clear();return r&&on(i,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Is(i,t,n)}),e}function Po(t,n){const e=Es(t,n);return(o,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?o:Reflect.get(W(e,i)&&i in o?e:o,i,r)}const Ls={get:Po(!1,!1)},Os={get:Po(!1,!0)},Fs={get:Po(!0,!1)};const or=new WeakMap,ir=new WeakMap,rr=new WeakMap,zs=new WeakMap;function Ds(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hs(t){return t.__v_skip||!Object.isExtensible(t)?0:Ds(as(t))}function He(t){return bn(t)?t:Ro(t,!1,Rs,Ls,or)}function sr(t){return Ro(t,!1,Ts,Os,ir)}function lr(t){return Ro(t,!0,Ms,Fs,rr)}function Ro(t,n,e,o,i){if(!rt(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const r=Hs(t);if(r===0)return t;const s=i.get(t);if(s)return s;const l=new Proxy(t,r===2?o:e);return i.set(t,l),l}function Dn(t){return bn(t)?Dn(t.__v_raw):!!(t&&t.__v_isReactive)}function bn(t){return!!(t&&t.__v_isReadonly)}function Lt(t){return!!(t&&t.__v_isShallow)}function Mo(t){return t?!!t.__v_raw:!1}function U(t){const n=t&&t.__v_raw;return n?U(n):t}function ar(t){return!W(t,"__v_skip")&&Object.isExtensible(t)&&ro(t,"__v_skip",!0),t}const gt=t=>rt(t)?He(t):t,Ce=t=>rt(t)?lr(t):t;function ut(t){return t?t.__v_isRef===!0:!1}function ft(t){return cr(t,!1)}function $s(t){return cr(t,!0)}function cr(t,n){return ut(t)?t:new Bs(t,n)}class Bs{constructor(n,e){this.dep=new Ao,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?n:U(n),this._value=e?n:gt(n),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(n){const e=this._rawValue,o=this.__v_isShallow||Lt(n)||bn(n);n=o?n:U(n),mn(n,e)&&(this._rawValue=n,this._value=o?n:gt(n),this.dep.trigger())}}function J(t){return ut(t)?t.value:t}const js={get:(t,n,e)=>n==="__v_raw"?t:J(Reflect.get(t,n,e)),set:(t,n,e,o)=>{const i=t[n];return ut(i)&&!ut(e)?(i.value=e,!0):Reflect.set(t,n,e,o)}};function dr(t){return Dn(t)?t:new Proxy(t,js)}class Vs{constructor(n,e,o){this._object=n,this._key=e,this._defaultValue=o,this.__v_isRef=!0,this._value=void 0}get value(){const n=this._object[this._key];return this._value=n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return ws(U(this._object),this._key)}}class Ns{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Wo(t,n,e){return ut(t)?t:N(t)?new Ns(t):rt(t)&&arguments.length>1?Ks(t,n,e):ft(t)}function Ks(t,n,e){const o=t[n];return ut(o)?o:new Vs(t,n,e)}class Us{constructor(n,e,o){this.fn=n,this.setter=e,this._value=void 0,this.dep=new Ao(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ie-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&ot!==this)return Wi(this,!0),!0}get value(){const n=this.dep.track();return Ji(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Gs(t,n,e=!1){let o,i;return N(t)?o=t:(o=t.get,i=t.set),new Us(o,i,e)}const be={},Se=new WeakMap;let Cn;function qs(t,n=!1,e=Cn){if(e){let o=Se.get(e);o||Se.set(e,o=[]),o.push(t)}}function Ws(t,n,e=it){const{immediate:o,deep:i,once:r,scheduler:s,augmentJob:l,call:a}=e,p=L=>i?L:Lt(L)||i===!1||i===0?hn(L,1):hn(L);let c,g,f,m,k=!1,M=!1;if(ut(t)?(g=()=>t.value,k=Lt(t)):Dn(t)?(g=()=>p(t),k=!0):V(t)?(M=!0,k=t.some(L=>Dn(L)||Lt(L)),g=()=>t.map(L=>{if(ut(L))return L.value;if(Dn(L))return p(L);if(N(L))return a?a(L,2):L()})):N(t)?n?g=a?()=>a(t,2):t:g=()=>{if(f){rn();try{f()}finally{sn()}}const L=Cn;Cn=c;try{return a?a(t,3,[m]):t(m)}finally{Cn=L}}:g=Qt,n&&i){const L=g,Z=i===!0?1/0:i;g=()=>hn(L(),Z)}const I=_s(),z=()=>{c.stop(),I&&I.active&&yo(I.effects,c)};if(r&&n){const L=n;n=(...Z)=>{L(...Z),z()}}let E=M?new Array(t.length).fill(be):be;const $=L=>{if(!(!(c.flags&1)||!c.dirty&&!L))if(n){const Z=c.run();if(i||k||(M?Z.some((pt,st)=>mn(pt,E[st])):mn(Z,E))){f&&f();const pt=Cn;Cn=c;try{const st=[Z,E===be?void 0:M&&E[0]===be?[]:E,m];E=Z,a?a(n,3,st):n(...st)}finally{Cn=pt}}}else c.run()};return l&&l($),c=new Gi(g),c.scheduler=s?()=>s($,!1):$,m=L=>qs(L,!1,c),f=c.onStop=()=>{const L=Se.get(c);if(L){if(a)a(L,4);else for(const Z of L)Z();Se.delete(c)}},n?o?$(!0):E=c.run():s?s($.bind(null,!0),!0):c.run(),z.pause=c.pause.bind(c),z.resume=c.resume.bind(c),z.stop=z,z}function hn(t,n=1/0,e){if(n<=0||!rt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),n--,ut(t))hn(t.value,n,e);else if(V(t))for(let o=0;o<t.length;o++)hn(t[o],n,e);else if(Hi(t)||zn(t))t.forEach(o=>{hn(o,n,e)});else if(ji(t)){for(const o in t)hn(t[o],n,e);for(const o of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,o)&&hn(t[o],n,e)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ue(t,n,e,o){try{return o?t(...o):t()}catch(i){$e(i,n,e)}}function Jt(t,n,e,o){if(N(t)){const i=ue(t,n,e,o);return i&&$i(i)&&i.catch(r=>{$e(r,n,e)}),i}if(V(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Jt(t[r],n,e,o));return i}}function $e(t,n,e,o=!0){const i=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||it;if(n){let l=n.parent;const a=n.proxy,p=`https://vuejs.org/error-reference/#runtime-${e}`;for(;l;){const c=l.ec;if(c){for(let g=0;g<c.length;g++)if(c[g](t,a,p)===!1)return}l=l.parent}if(r){rn(),ue(r,null,10,[t,a,p]),sn();return}}Xs(t,e,i,o,s)}function Xs(t,n,e,o=!0,i=!1){if(i)throw t;console.error(t)}const wt=[];let qt=-1;const Hn=[];let pn=null,Ln=0;const ur=Promise.resolve();let ke=null;function pr(t){const n=ke||ur;return t?n.then(this?t.bind(this):t):n}function Qs(t){let n=qt+1,e=wt.length;for(;n<e;){const o=n+e>>>1,i=wt[o],r=se(i);r<t||r===t&&i.flags&2?n=o+1:e=o}return n}function To(t){if(!(t.flags&1)){const n=se(t),e=wt[wt.length-1];!e||!(t.flags&2)&&n>=se(e)?wt.push(t):wt.splice(Qs(n),0,t),t.flags|=1,gr()}}function gr(){ke||(ke=ur.then(hr))}function Js(t){V(t)?Hn.push(...t):pn&&t.id===-1?pn.splice(Ln+1,0,t):t.flags&1||(Hn.push(t),t.flags|=1),gr()}function Xo(t,n,e=qt+1){for(;e<wt.length;e++){const o=wt[e];if(o&&o.flags&2){if(t&&o.id!==t.uid)continue;wt.splice(e,1),e--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function fr(t){if(Hn.length){const n=[...new Set(Hn)].sort((e,o)=>se(e)-se(o));if(Hn.length=0,pn){pn.push(...n);return}for(pn=n,Ln=0;Ln<pn.length;Ln++){const e=pn[Ln];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}pn=null,Ln=0}}const se=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hr(t){try{for(qt=0;qt<wt.length;qt++){const n=wt[qt];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),ue(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;qt<wt.length;qt++){const n=wt[qt];n&&(n.flags&=-2)}qt=-1,wt.length=0,fr(),ke=null,(wt.length||Hn.length)&&hr()}}let Ft=null,mr=null;function Ae(t){const n=Ft;return Ft=t,mr=t&&t.type.__scopeId||null,n}function ht(t,n=Ft,e){if(!n||t._n)return t;const o=(...i)=>{o._d&&ri(-1);const r=Ae(n);let s;try{s=t(...i)}finally{Ae(r),o._d&&ri(1)}return s};return o._n=!0,o._c=!0,o._d=!0,o}function yn(t,n,e,o){const i=t.dirs,r=n&&n.dirs;for(let s=0;s<i.length;s++){const l=i[s];r&&(l.oldValue=r[s].value);let a=l.dir[o];a&&(rn(),Jt(a,e,8,[t.el,l,t,n]),sn())}}const Ys=Symbol("_vte"),Zs=t=>t.__isTeleport;function Io(t,n){t.shapeFlag&6&&t.component?(t.transition=n,Io(t.component.subTree,n)):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}/*! #__NO_SIDE_EFFECTS__ */function xt(t,n){return N(t)?_t({name:t.name},n,{setup:t}):t}function br(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Yn(t,n,e,o,i=!1){if(V(t)){t.forEach((k,M)=>Yn(k,n&&(V(n)?n[M]:n),e,o,i));return}if(Zn(o)&&!i){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&Yn(t,n,e,o.component.subTree);return}const r=o.shapeFlag&4?Do(o.component):o.el,s=i?null:r,{i:l,r:a}=t,p=n&&n.r,c=l.refs===it?l.refs={}:l.refs,g=l.setupState,f=U(g),m=g===it?()=>!1:k=>W(f,k);if(p!=null&&p!==a&&(at(p)?(c[p]=null,m(p)&&(g[p]=null)):ut(p)&&(p.value=null)),N(a))ue(a,l,12,[s,c]);else{const k=at(a),M=ut(a);if(k||M){const I=()=>{if(t.f){const z=k?m(a)?g[a]:c[a]:a.value;i?V(z)&&yo(z,r):V(z)?z.includes(r)||z.push(r):k?(c[a]=[r],m(a)&&(g[a]=c[a])):(a.value=[r],t.k&&(c[t.k]=a.value))}else k?(c[a]=s,m(a)&&(g[a]=s)):M&&(a.value=s,t.k&&(c[t.k]=s))};s?(I.id=-1,Tt(I,e)):I()}}}Fe().requestIdleCallback;Fe().cancelIdleCallback;const Zn=t=>!!t.type.__asyncLoader,vr=t=>t.type.__isKeepAlive;function tl(t,n){_r(t,"a",n)}function nl(t,n){_r(t,"da",n)}function _r(t,n,e=vt){const o=t.__wdc||(t.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Be(n,o,e),e){let i=e.parent;for(;i&&i.parent;)vr(i.parent.vnode)&&el(o,n,e,i),i=i.parent}}function el(t,n,e,o){const i=Be(n,t,o,!0);Lo(()=>{yo(o[n],i)},e)}function Be(t,n,e=vt,o=!1){if(e){const i=e[t]||(e[t]=[]),r=n.__weh||(n.__weh=(...s)=>{rn();const l=ge(e),a=Jt(n,e,t,s);return l(),sn(),a});return o?i.unshift(r):i.push(r),r}}const ln=t=>(n,e=vt)=>{(!ae||t==="sp")&&Be(t,(...o)=>n(...o),e)},ol=ln("bm"),pe=ln("m"),il=ln("bu"),rl=ln("u"),Eo=ln("bum"),Lo=ln("um"),sl=ln("sp"),ll=ln("rtg"),al=ln("rtc");function cl(t,n=vt){Be("ec",t,n)}const dl="components";function Rn(t,n){return pl(dl,t,!0,n)||t}const ul=Symbol.for("v-ndc");function pl(t,n,e=!0,o=!1){const i=Ft||vt;if(i){const r=i.type;{const l=Zl(r,!1);if(l&&(l===n||l===Ot(n)||l===Oe(Ot(n))))return r}const s=Qo(i[t]||r[t],n)||Qo(i.appContext[t],n);return!s&&o?r:s}}function Qo(t,n){return t&&(t[n]||t[Ot(n)]||t[Oe(Ot(n))])}function An(t,n,e,o){let i;const r=e,s=V(t);if(s||at(t)){const l=s&&Dn(t);let a=!1,p=!1;l&&(a=!Lt(t),p=bn(t),t=De(t)),i=new Array(t.length);for(let c=0,g=t.length;c<g;c++)i[c]=n(a?p?Ce(gt(t[c])):gt(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=n(l+1,l,void 0,r)}else if(rt(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>n(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,p=l.length;a<p;a++){const c=l[a];i[a]=n(t[c],c,a,r)}}else i=[];return i}const co=t=>t?Br(t)?Do(t):co(t.parent):null,te=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>co(t.parent),$root:t=>co(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>yr(t),$forceUpdate:t=>t.f||(t.f=()=>{To(t.update)}),$nextTick:t=>t.n||(t.n=pr.bind(t.proxy)),$watch:t=>Ll.bind(t)}),Ye=(t,n)=>t!==it&&!t.__isScriptSetup&&W(t,n),gl={get({_:t},n){if(n==="__v_skip")return!0;const{ctx:e,setupState:o,data:i,props:r,accessCache:s,type:l,appContext:a}=t;let p;if(n[0]!=="$"){const m=s[n];if(m!==void 0)switch(m){case 1:return o[n];case 2:return i[n];case 4:return e[n];case 3:return r[n]}else{if(Ye(o,n))return s[n]=1,o[n];if(i!==it&&W(i,n))return s[n]=2,i[n];if((p=t.propsOptions[0])&&W(p,n))return s[n]=3,r[n];if(e!==it&&W(e,n))return s[n]=4,e[n];uo&&(s[n]=0)}}const c=te[n];let g,f;if(c)return n==="$attrs"&&bt(t.attrs,"get",""),c(t);if((g=l.__cssModules)&&(g=g[n]))return g;if(e!==it&&W(e,n))return s[n]=4,e[n];if(f=a.config.globalProperties,W(f,n))return f[n]},set({_:t},n,e){const{data:o,setupState:i,ctx:r}=t;return Ye(i,n)?(i[n]=e,!0):o!==it&&W(o,n)?(o[n]=e,!0):W(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(r[n]=e,!0)},has({_:{data:t,setupState:n,accessCache:e,ctx:o,appContext:i,propsOptions:r}},s){let l;return!!e[s]||t!==it&&W(t,s)||Ye(n,s)||(l=r[0])&&W(l,s)||W(o,s)||W(te,s)||W(i.config.globalProperties,s)},defineProperty(t,n,e){return e.get!=null?t._.accessCache[n]=0:W(e,"value")&&this.set(t,n,e.value,null),Reflect.defineProperty(t,n,e)}};function Jo(t){return V(t)?t.reduce((n,e)=>(n[e]=null,n),{}):t}let uo=!0;function fl(t){const n=yr(t),e=t.proxy,o=t.ctx;uo=!1,n.beforeCreate&&Yo(n.beforeCreate,t,"bc");const{data:i,computed:r,methods:s,watch:l,provide:a,inject:p,created:c,beforeMount:g,mounted:f,beforeUpdate:m,updated:k,activated:M,deactivated:I,beforeDestroy:z,beforeUnmount:E,destroyed:$,unmounted:L,render:Z,renderTracked:pt,renderTriggered:st,errorCaptured:$t,serverPrefetch:an,expose:Bt,inheritAttrs:cn,components:xn,directives:jt,filters:Nn}=n;if(p&&hl(p,o,null),s)for(const Y in s){const G=s[Y];N(G)&&(o[Y]=G.bind(e))}if(i){const Y=i.call(e,e);rt(Y)&&(t.data=He(Y))}if(uo=!0,r)for(const Y in r){const G=r[Y],Yt=N(G)?G.bind(e,e):N(G.get)?G.get.bind(e,e):Qt,dn=!N(G)&&N(G.set)?G.set.bind(e):Qt,Vt=lt({get:Yt,set:dn});Object.defineProperty(o,Y,{enumerable:!0,configurable:!0,get:()=>Vt.value,set:Ct=>Vt.value=Ct})}if(l)for(const Y in l)xr(l[Y],o,e,Y);if(a){const Y=N(a)?a.call(e):a;Reflect.ownKeys(Y).forEach(G=>{ve(G,Y[G])})}c&&Yo(c,t,"c");function dt(Y,G){V(G)?G.forEach(Yt=>Y(Yt.bind(e))):G&&Y(G.bind(e))}if(dt(ol,g),dt(pe,f),dt(il,m),dt(rl,k),dt(tl,M),dt(nl,I),dt(cl,$t),dt(al,pt),dt(ll,st),dt(Eo,E),dt(Lo,L),dt(sl,an),V(Bt))if(Bt.length){const Y=t.exposed||(t.exposed={});Bt.forEach(G=>{Object.defineProperty(Y,G,{get:()=>e[G],set:Yt=>e[G]=Yt,enumerable:!0})})}else t.exposed||(t.exposed={});Z&&t.render===Qt&&(t.render=Z),cn!=null&&(t.inheritAttrs=cn),xn&&(t.components=xn),jt&&(t.directives=jt),an&&br(t)}function hl(t,n,e=Qt){V(t)&&(t=po(t));for(const o in t){const i=t[o];let r;rt(i)?"default"in i?r=Dt(i.from||o,i.default,!0):r=Dt(i.from||o):r=Dt(i),ut(r)?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:s=>r.value=s}):n[o]=r}}function Yo(t,n,e){Jt(V(t)?t.map(o=>o.bind(n.proxy)):t.bind(n.proxy),n,e)}function xr(t,n,e,o){let i=o.includes(".")?Or(e,o):()=>e[o];if(at(t)){const r=n[t];N(r)&&kn(i,r)}else if(N(t))kn(i,t.bind(e));else if(rt(t))if(V(t))t.forEach(r=>xr(r,n,e,o));else{const r=N(t.handler)?t.handler.bind(e):n[t.handler];N(r)&&kn(i,r,t)}}function yr(t){const n=t.type,{mixins:e,extends:o}=n,{mixins:i,optionsCache:r,config:{optionMergeStrategies:s}}=t.appContext,l=r.get(n);let a;return l?a=l:!i.length&&!e&&!o?a=n:(a={},i.length&&i.forEach(p=>Pe(a,p,s,!0)),Pe(a,n,s)),rt(n)&&r.set(n,a),a}function Pe(t,n,e,o=!1){const{mixins:i,extends:r}=n;r&&Pe(t,r,e,!0),i&&i.forEach(s=>Pe(t,s,e,!0));for(const s in n)if(!(o&&s==="expose")){const l=ml[s]||e&&e[s];t[s]=l?l(t[s],n[s]):n[s]}return t}const ml={data:Zo,props:ti,emits:ti,methods:Wn,computed:Wn,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Wn,directives:Wn,watch:vl,provide:Zo,inject:bl};function Zo(t,n){return n?t?function(){return _t(N(t)?t.call(this,this):t,N(n)?n.call(this,this):n)}:n:t}function bl(t,n){return Wn(po(t),po(n))}function po(t){if(V(t)){const n={};for(let e=0;e<t.length;e++)n[t[e]]=t[e];return n}return t}function yt(t,n){return t?[...new Set([].concat(t,n))]:n}function Wn(t,n){return t?_t(Object.create(null),t,n):n}function ti(t,n){return t?V(t)&&V(n)?[...new Set([...t,...n])]:_t(Object.create(null),Jo(t),Jo(n??{})):n}function vl(t,n){if(!t)return n;if(!n)return t;const e=_t(Object.create(null),t);for(const o in n)e[o]=yt(t[o],n[o]);return e}function wr(){return{app:null,config:{isNativeTag:ss,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _l=0;function xl(t,n){return function(o,i=null){N(o)||(o=_t({},o)),i!=null&&!rt(i)&&(i=null);const r=wr(),s=new WeakSet,l=[];let a=!1;const p=r.app={_uid:_l++,_component:o,_props:i,_container:null,_context:r,_instance:null,version:na,get config(){return r.config},set config(c){},use(c,...g){return s.has(c)||(c&&N(c.install)?(s.add(c),c.install(p,...g)):N(c)&&(s.add(c),c(p,...g))),p},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),p},component(c,g){return g?(r.components[c]=g,p):r.components[c]},directive(c,g){return g?(r.directives[c]=g,p):r.directives[c]},mount(c,g,f){if(!a){const m=p._ceVNode||X(o,i);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(m,c,f),a=!0,p._container=c,c.__vue_app__=p,Do(m.component)}},onUnmount(c){l.push(c)},unmount(){a&&(Jt(l,p._instance,16),t(null,p._container),delete p._container.__vue_app__)},provide(c,g){return r.provides[c]=g,p},runWithContext(c){const g=$n;$n=p;try{return c()}finally{$n=g}}};return p}}let $n=null;function ve(t,n){if(vt){let e=vt.provides;const o=vt.parent&&vt.parent.provides;o===e&&(e=vt.provides=Object.create(o)),e[t]=n}}function Dt(t,n,e=!1){const o=Wl();if(o||$n){let i=$n?$n._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return e&&N(n)?n.call(o&&o.proxy):n}}const Cr={},Sr=()=>Object.create(Cr),kr=t=>Object.getPrototypeOf(t)===Cr;function yl(t,n,e,o=!1){const i={},r=Sr();t.propsDefaults=Object.create(null),Ar(t,n,i,r);for(const s in t.propsOptions[0])s in i||(i[s]=void 0);e?t.props=o?i:sr(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function wl(t,n,e,o){const{props:i,attrs:r,vnode:{patchFlag:s}}=t,l=U(i),[a]=t.propsOptions;let p=!1;if((o||s>0)&&!(s&16)){if(s&8){const c=t.vnode.dynamicProps;for(let g=0;g<c.length;g++){let f=c[g];if(je(t.emitsOptions,f))continue;const m=n[f];if(a)if(W(r,f))m!==r[f]&&(r[f]=m,p=!0);else{const k=Ot(f);i[k]=go(a,l,k,m,t,!1)}else m!==r[f]&&(r[f]=m,p=!0)}}}else{Ar(t,n,i,r)&&(p=!0);let c;for(const g in l)(!n||!W(n,g)&&((c=Pn(g))===g||!W(n,c)))&&(a?e&&(e[g]!==void 0||e[c]!==void 0)&&(i[g]=go(a,l,g,void 0,t,!0)):delete i[g]);if(r!==l)for(const g in r)(!n||!W(n,g))&&(delete r[g],p=!0)}p&&on(t.attrs,"set","")}function Ar(t,n,e,o){const[i,r]=t.propsOptions;let s=!1,l;if(n)for(let a in n){if(Xn(a))continue;const p=n[a];let c;i&&W(i,c=Ot(a))?!r||!r.includes(c)?e[c]=p:(l||(l={}))[c]=p:je(t.emitsOptions,a)||(!(a in o)||p!==o[a])&&(o[a]=p,s=!0)}if(r){const a=U(e),p=l||it;for(let c=0;c<r.length;c++){const g=r[c];e[g]=go(i,a,g,p[g],t,!W(p,g))}}return s}function go(t,n,e,o,i,r){const s=t[e];if(s!=null){const l=W(s,"default");if(l&&o===void 0){const a=s.default;if(s.type!==Function&&!s.skipFactory&&N(a)){const{propsDefaults:p}=i;if(e in p)o=p[e];else{const c=ge(i);o=p[e]=a.call(null,n),c()}}else o=a;i.ce&&i.ce._setProp(e,o)}s[0]&&(r&&!l?o=!1:s[1]&&(o===""||o===Pn(e))&&(o=!0))}return o}const Cl=new WeakMap;function Pr(t,n,e=!1){const o=e?Cl:n.propsCache,i=o.get(t);if(i)return i;const r=t.props,s={},l=[];let a=!1;if(!N(t)){const c=g=>{a=!0;const[f,m]=Pr(g,n,!0);_t(s,f),m&&l.push(...m)};!e&&n.mixins.length&&n.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!r&&!a)return rt(t)&&o.set(t,Fn),Fn;if(V(r))for(let c=0;c<r.length;c++){const g=Ot(r[c]);ni(g)&&(s[g]=it)}else if(r)for(const c in r){const g=Ot(c);if(ni(g)){const f=r[c],m=s[g]=V(f)||N(f)?{type:f}:_t({},f),k=m.type;let M=!1,I=!0;if(V(k))for(let z=0;z<k.length;++z){const E=k[z],$=N(E)&&E.name;if($==="Boolean"){M=!0;break}else $==="String"&&(I=!1)}else M=N(k)&&k.name==="Boolean";m[0]=M,m[1]=I,(M||W(m,"default"))&&l.push(g)}}const p=[s,l];return rt(t)&&o.set(t,p),p}function ni(t){return t[0]!=="$"&&!Xn(t)}const Oo=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",Fo=t=>V(t)?t.map(Wt):[Wt(t)],Sl=(t,n,e)=>{if(n._n)return n;const o=ht((...i)=>Fo(n(...i)),e);return o._c=!1,o},Rr=(t,n,e)=>{const o=t._ctx;for(const i in t){if(Oo(i))continue;const r=t[i];if(N(r))n[i]=Sl(i,r,o);else if(r!=null){const s=Fo(r);n[i]=()=>s}}},Mr=(t,n)=>{const e=Fo(n);t.slots.default=()=>e},Tr=(t,n,e)=>{for(const o in n)(e||!Oo(o))&&(t[o]=n[o])},kl=(t,n,e)=>{const o=t.slots=Sr();if(t.vnode.shapeFlag&32){const i=n.__;i&&ro(o,"__",i,!0);const r=n._;r?(Tr(o,n,e),e&&ro(o,"_",r,!0)):Rr(n,o)}else n&&Mr(t,n)},Al=(t,n,e)=>{const{vnode:o,slots:i}=t;let r=!0,s=it;if(o.shapeFlag&32){const l=n._;l?e&&l===1?r=!1:Tr(i,n,e):(r=!n.$stable,Rr(n,i)),s=n}else n&&(Mr(t,n),s={default:1});if(r)for(const l in i)!Oo(l)&&s[l]==null&&delete i[l]},Tt=Bl;function Pl(t){return Rl(t)}function Rl(t,n){const e=Fe();e.__VUE__=!0;const{insert:o,remove:i,patchProp:r,createElement:s,createText:l,createComment:a,setText:p,setElementText:c,parentNode:g,nextSibling:f,setScopeId:m=Qt,insertStaticContent:k}=t,M=(d,u,h,b=null,x=null,_=null,A=void 0,S=null,C=!!u.dynamicChildren)=>{if(d===u)return;d&&!Gn(d,u)&&(b=v(d),Ct(d,x,_,!0),d=null),u.patchFlag===-2&&(C=!1,u.dynamicChildren=null);const{type:w,ref:H,shapeFlag:R}=u;switch(w){case Ve:I(d,u,h,b);break;case vn:z(d,u,h,b);break;case _e:d==null&&E(u,h,b,A);break;case ct:xn(d,u,h,b,x,_,A,S,C);break;default:R&1?Z(d,u,h,b,x,_,A,S,C):R&6?jt(d,u,h,b,x,_,A,S,C):(R&64||R&128)&&w.process(d,u,h,b,x,_,A,S,C,O)}H!=null&&x?Yn(H,d&&d.ref,_,u||d,!u):H==null&&d&&d.ref!=null&&Yn(d.ref,null,_,d,!0)},I=(d,u,h,b)=>{if(d==null)o(u.el=l(u.children),h,b);else{const x=u.el=d.el;u.children!==d.children&&p(x,u.children)}},z=(d,u,h,b)=>{d==null?o(u.el=a(u.children||""),h,b):u.el=d.el},E=(d,u,h,b)=>{[d.el,d.anchor]=k(d.children,u,h,b,d.el,d.anchor)},$=({el:d,anchor:u},h,b)=>{let x;for(;d&&d!==u;)x=f(d),o(d,h,b),d=x;o(u,h,b)},L=({el:d,anchor:u})=>{let h;for(;d&&d!==u;)h=f(d),i(d),d=h;i(u)},Z=(d,u,h,b,x,_,A,S,C)=>{u.type==="svg"?A="svg":u.type==="math"&&(A="mathml"),d==null?pt(u,h,b,x,_,A,S,C):an(d,u,x,_,A,S,C)},pt=(d,u,h,b,x,_,A,S)=>{let C,w;const{props:H,shapeFlag:R,transition:D,dirs:j}=d;if(C=d.el=s(d.type,_,H&&H.is,H),R&8?c(C,d.children):R&16&&$t(d.children,C,null,b,x,Ze(d,_),A,S),j&&yn(d,null,b,"created"),st(C,d,d.scopeId,A,b),H){for(const et in H)et!=="value"&&!Xn(et)&&r(C,et,null,H[et],_,b);"value"in H&&r(C,"value",null,H.value,_),(w=H.onVnodeBeforeMount)&&Gt(w,b,d)}j&&yn(d,null,b,"beforeMount");const K=Ml(x,D);K&&D.beforeEnter(C),o(C,u,h),((w=H&&H.onVnodeMounted)||K||j)&&Tt(()=>{w&&Gt(w,b,d),K&&D.enter(C),j&&yn(d,null,b,"mounted")},x)},st=(d,u,h,b,x)=>{if(h&&m(d,h),b)for(let _=0;_<b.length;_++)m(d,b[_]);if(x){let _=x.subTree;if(u===_||zr(_.type)&&(_.ssContent===u||_.ssFallback===u)){const A=x.vnode;st(d,A,A.scopeId,A.slotScopeIds,x.parent)}}},$t=(d,u,h,b,x,_,A,S,C=0)=>{for(let w=C;w<d.length;w++){const H=d[w]=S?gn(d[w]):Wt(d[w]);M(null,H,u,h,b,x,_,A,S)}},an=(d,u,h,b,x,_,A)=>{const S=u.el=d.el;let{patchFlag:C,dynamicChildren:w,dirs:H}=u;C|=d.patchFlag&16;const R=d.props||it,D=u.props||it;let j;if(h&&wn(h,!1),(j=D.onVnodeBeforeUpdate)&&Gt(j,h,u,d),H&&yn(u,d,h,"beforeUpdate"),h&&wn(h,!0),(R.innerHTML&&D.innerHTML==null||R.textContent&&D.textContent==null)&&c(S,""),w?Bt(d.dynamicChildren,w,S,h,b,Ze(u,x),_):A||G(d,u,S,null,h,b,Ze(u,x),_,!1),C>0){if(C&16)cn(S,R,D,h,x);else if(C&2&&R.class!==D.class&&r(S,"class",null,D.class,x),C&4&&r(S,"style",R.style,D.style,x),C&8){const K=u.dynamicProps;for(let et=0;et<K.length;et++){const Q=K[et],St=R[Q],kt=D[Q];(kt!==St||Q==="value")&&r(S,Q,St,kt,x,h)}}C&1&&d.children!==u.children&&c(S,u.children)}else!A&&w==null&&cn(S,R,D,h,x);((j=D.onVnodeUpdated)||H)&&Tt(()=>{j&&Gt(j,h,u,d),H&&yn(u,d,h,"updated")},b)},Bt=(d,u,h,b,x,_,A)=>{for(let S=0;S<u.length;S++){const C=d[S],w=u[S],H=C.el&&(C.type===ct||!Gn(C,w)||C.shapeFlag&198)?g(C.el):h;M(C,w,H,null,b,x,_,A,!0)}},cn=(d,u,h,b,x)=>{if(u!==h){if(u!==it)for(const _ in u)!Xn(_)&&!(_ in h)&&r(d,_,u[_],null,x,b);for(const _ in h){if(Xn(_))continue;const A=h[_],S=u[_];A!==S&&_!=="value"&&r(d,_,S,A,x,b)}"value"in h&&r(d,"value",u.value,h.value,x)}},xn=(d,u,h,b,x,_,A,S,C)=>{const w=u.el=d?d.el:l(""),H=u.anchor=d?d.anchor:l("");let{patchFlag:R,dynamicChildren:D,slotScopeIds:j}=u;j&&(S=S?S.concat(j):j),d==null?(o(w,h,b),o(H,h,b),$t(u.children||[],h,H,x,_,A,S,C)):R>0&&R&64&&D&&d.dynamicChildren?(Bt(d.dynamicChildren,D,h,x,_,A,S),(u.key!=null||x&&u===x.subTree)&&Ir(d,u,!0)):G(d,u,h,H,x,_,A,S,C)},jt=(d,u,h,b,x,_,A,S,C)=>{u.slotScopeIds=S,d==null?u.shapeFlag&512?x.ctx.activate(u,h,b,A,C):Nn(u,h,b,x,_,A,C):Mn(d,u,C)},Nn=(d,u,h,b,x,_,A)=>{const S=d.component=ql(d,b,x);if(vr(d)&&(S.ctx.renderer=O),Xl(S,!1,A),S.asyncDep){if(x&&x.registerDep(S,dt,A),!d.el){const C=S.subTree=X(vn);z(null,C,u,h),d.placeholder=C.el}}else dt(S,d,u,h,x,_,A)},Mn=(d,u,h)=>{const b=u.component=d.component;if(Hl(d,u,h))if(b.asyncDep&&!b.asyncResolved){Y(b,u,h);return}else b.next=u,b.update();else u.el=d.el,b.vnode=u},dt=(d,u,h,b,x,_,A)=>{const S=()=>{if(d.isMounted){let{next:R,bu:D,u:j,parent:K,vnode:et}=d;{const Kt=Er(d);if(Kt){R&&(R.el=et.el,Y(d,R,A)),Kt.asyncDep.then(()=>{d.isUnmounted||S()});return}}let Q=R,St;wn(d,!1),R?(R.el=et.el,Y(d,R,A)):R=et,D&&qe(D),(St=R.props&&R.props.onVnodeBeforeUpdate)&&Gt(St,K,R,et),wn(d,!0);const kt=oi(d),Nt=d.subTree;d.subTree=kt,M(Nt,kt,g(Nt.el),v(Nt),d,x,_),R.el=kt.el,Q===null&&$l(d,kt.el),j&&Tt(j,x),(St=R.props&&R.props.onVnodeUpdated)&&Tt(()=>Gt(St,K,R,et),x)}else{let R;const{el:D,props:j}=u,{bm:K,m:et,parent:Q,root:St,type:kt}=d,Nt=Zn(u);wn(d,!1),K&&qe(K),!Nt&&(R=j&&j.onVnodeBeforeMount)&&Gt(R,Q,u),wn(d,!0);{St.ce&&St.ce._def.shadowRoot!==!1&&St.ce._injectChildStyle(kt);const Kt=d.subTree=oi(d);M(null,Kt,h,b,d,x,_),u.el=Kt.el}if(et&&Tt(et,x),!Nt&&(R=j&&j.onVnodeMounted)){const Kt=u;Tt(()=>Gt(R,Q,Kt),x)}(u.shapeFlag&256||Q&&Zn(Q.vnode)&&Q.vnode.shapeFlag&256)&&d.a&&Tt(d.a,x),d.isMounted=!0,u=h=b=null}};d.scope.on();const C=d.effect=new Gi(S);d.scope.off();const w=d.update=C.run.bind(C),H=d.job=C.runIfDirty.bind(C);H.i=d,H.id=d.uid,C.scheduler=()=>To(H),wn(d,!0),w()},Y=(d,u,h)=>{u.component=d;const b=d.vnode.props;d.vnode=u,d.next=null,wl(d,u.props,b,h),Al(d,u.children,h),rn(),Xo(d),sn()},G=(d,u,h,b,x,_,A,S,C=!1)=>{const w=d&&d.children,H=d?d.shapeFlag:0,R=u.children,{patchFlag:D,shapeFlag:j}=u;if(D>0){if(D&128){dn(w,R,h,b,x,_,A,S,C);return}else if(D&256){Yt(w,R,h,b,x,_,A,S,C);return}}j&8?(H&16&&Et(w,x,_),R!==w&&c(h,R)):H&16?j&16?dn(w,R,h,b,x,_,A,S,C):Et(w,x,_,!0):(H&8&&c(h,""),j&16&&$t(R,h,b,x,_,A,S,C))},Yt=(d,u,h,b,x,_,A,S,C)=>{d=d||Fn,u=u||Fn;const w=d.length,H=u.length,R=Math.min(w,H);let D;for(D=0;D<R;D++){const j=u[D]=C?gn(u[D]):Wt(u[D]);M(d[D],j,h,null,x,_,A,S,C)}w>H?Et(d,x,_,!0,!1,R):$t(u,h,b,x,_,A,S,C,R)},dn=(d,u,h,b,x,_,A,S,C)=>{let w=0;const H=u.length;let R=d.length-1,D=H-1;for(;w<=R&&w<=D;){const j=d[w],K=u[w]=C?gn(u[w]):Wt(u[w]);if(Gn(j,K))M(j,K,h,null,x,_,A,S,C);else break;w++}for(;w<=R&&w<=D;){const j=d[R],K=u[D]=C?gn(u[D]):Wt(u[D]);if(Gn(j,K))M(j,K,h,null,x,_,A,S,C);else break;R--,D--}if(w>R){if(w<=D){const j=D+1,K=j<H?u[j].el:b;for(;w<=D;)M(null,u[w]=C?gn(u[w]):Wt(u[w]),h,K,x,_,A,S,C),w++}}else if(w>D)for(;w<=R;)Ct(d[w],x,_,!0),w++;else{const j=w,K=w,et=new Map;for(w=K;w<=D;w++){const Mt=u[w]=C?gn(u[w]):Wt(u[w]);Mt.key!=null&&et.set(Mt.key,w)}let Q,St=0;const kt=D-K+1;let Nt=!1,Kt=0;const Kn=new Array(kt);for(w=0;w<kt;w++)Kn[w]=0;for(w=j;w<=R;w++){const Mt=d[w];if(St>=kt){Ct(Mt,x,_,!0);continue}let Ut;if(Mt.key!=null)Ut=et.get(Mt.key);else for(Q=K;Q<=D;Q++)if(Kn[Q-K]===0&&Gn(Mt,u[Q])){Ut=Q;break}Ut===void 0?Ct(Mt,x,_,!0):(Kn[Ut-K]=w+1,Ut>=Kt?Kt=Ut:Nt=!0,M(Mt,u[Ut],h,null,x,_,A,S,C),St++)}const Vo=Nt?Tl(Kn):Fn;for(Q=Vo.length-1,w=kt-1;w>=0;w--){const Mt=K+w,Ut=u[Mt],No=u[Mt+1],Ko=Mt+1<H?No.el||No.placeholder:b;Kn[w]===0?M(null,Ut,h,Ko,x,_,A,S,C):Nt&&(Q<0||w!==Vo[Q]?Vt(Ut,h,Ko,2):Q--)}}},Vt=(d,u,h,b,x=null)=>{const{el:_,type:A,transition:S,children:C,shapeFlag:w}=d;if(w&6){Vt(d.component.subTree,u,h,b);return}if(w&128){d.suspense.move(u,h,b);return}if(w&64){A.move(d,u,h,O);return}if(A===ct){o(_,u,h);for(let R=0;R<C.length;R++)Vt(C[R],u,h,b);o(d.anchor,u,h);return}if(A===_e){$(d,u,h);return}if(b!==2&&w&1&&S)if(b===0)S.beforeEnter(_),o(_,u,h),Tt(()=>S.enter(_),x);else{const{leave:R,delayLeave:D,afterLeave:j}=S,K=()=>{d.ctx.isUnmounted?i(_):o(_,u,h)},et=()=>{R(_,()=>{K(),j&&j()})};D?D(_,K,et):et()}else o(_,u,h)},Ct=(d,u,h,b=!1,x=!1)=>{const{type:_,props:A,ref:S,children:C,dynamicChildren:w,shapeFlag:H,patchFlag:R,dirs:D,cacheIndex:j}=d;if(R===-2&&(x=!1),S!=null&&(rn(),Yn(S,null,h,d,!0),sn()),j!=null&&(u.renderCache[j]=void 0),H&256){u.ctx.deactivate(d);return}const K=H&1&&D,et=!Zn(d);let Q;if(et&&(Q=A&&A.onVnodeBeforeUnmount)&&Gt(Q,u,d),H&6)fe(d.component,h,b);else{if(H&128){d.suspense.unmount(h,b);return}K&&yn(d,null,u,"beforeUnmount"),H&64?d.type.remove(d,u,h,O,b):w&&!w.hasOnce&&(_!==ct||R>0&&R&64)?Et(w,u,h,!1,!0):(_===ct&&R&384||!x&&H&16)&&Et(C,u,h),b&&Tn(d)}(et&&(Q=A&&A.onVnodeUnmounted)||K)&&Tt(()=>{Q&&Gt(Q,u,d),K&&yn(d,null,u,"unmounted")},h)},Tn=d=>{const{type:u,el:h,anchor:b,transition:x}=d;if(u===ct){In(h,b);return}if(u===_e){L(d);return}const _=()=>{i(h),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:A,delayLeave:S}=x,C=()=>A(h,_);S?S(d.el,_,C):C()}else _()},In=(d,u)=>{let h;for(;d!==u;)h=f(d),i(d),d=h;i(u)},fe=(d,u,h)=>{const{bum:b,scope:x,job:_,subTree:A,um:S,m:C,a:w,parent:H,slots:{__:R}}=d;ei(C),ei(w),b&&qe(b),H&&V(R)&&R.forEach(D=>{H.renderCache[D]=void 0}),x.stop(),_&&(_.flags|=8,Ct(A,d,u,h)),S&&Tt(S,u),Tt(()=>{d.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Et=(d,u,h,b=!1,x=!1,_=0)=>{for(let A=_;A<d.length;A++)Ct(d[A],u,h,b,x)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const u=f(d.anchor||d.el),h=u&&u[Ys];return h?f(h):u};let T=!1;const P=(d,u,h)=>{d==null?u._vnode&&Ct(u._vnode,null,null,!0):M(u._vnode||null,d,u,null,null,null,h),u._vnode=d,T||(T=!0,Xo(),fr(),T=!1)},O={p:M,um:Ct,m:Vt,r:Tn,mt:Nn,mc:$t,pc:G,pbc:Bt,n:v,o:t};return{render:P,hydrate:void 0,createApp:xl(P)}}function Ze({type:t,props:n},e){return e==="svg"&&t==="foreignObject"||e==="mathml"&&t==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:e}function wn({effect:t,job:n},e){e?(t.flags|=32,n.flags|=4):(t.flags&=-33,n.flags&=-5)}function Ml(t,n){return(!t||t&&!t.pendingBranch)&&n&&!n.persisted}function Ir(t,n,e=!1){const o=t.children,i=n.children;if(V(o)&&V(i))for(let r=0;r<o.length;r++){const s=o[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=gn(i[r]),l.el=s.el),!e&&l.patchFlag!==-2&&Ir(s,l)),l.type===Ve&&(l.el=s.el),l.type===vn&&!l.el&&(l.el=s.el)}}function Tl(t){const n=t.slice(),e=[0];let o,i,r,s,l;const a=t.length;for(o=0;o<a;o++){const p=t[o];if(p!==0){if(i=e[e.length-1],t[i]<p){n[o]=i,e.push(o);continue}for(r=0,s=e.length-1;r<s;)l=r+s>>1,t[e[l]]<p?r=l+1:s=l;p<t[e[r]]&&(r>0&&(n[o]=e[r-1]),e[r]=o)}}for(r=e.length,s=e[r-1];r-- >0;)e[r]=s,s=n[s];return e}function Er(t){const n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Er(n)}function ei(t){if(t)for(let n=0;n<t.length;n++)t[n].flags|=8}const Il=Symbol.for("v-scx"),El=()=>Dt(Il);function kn(t,n,e){return Lr(t,n,e)}function Lr(t,n,e=it){const{immediate:o,deep:i,flush:r,once:s}=e,l=_t({},e),a=n&&o||!n&&r!=="post";let p;if(ae){if(r==="sync"){const m=El();p=m.__watcherHandles||(m.__watcherHandles=[])}else if(!a){const m=()=>{};return m.stop=Qt,m.resume=Qt,m.pause=Qt,m}}const c=vt;l.call=(m,k,M)=>Jt(m,c,k,M);let g=!1;r==="post"?l.scheduler=m=>{Tt(m,c&&c.suspense)}:r!=="sync"&&(g=!0,l.scheduler=(m,k)=>{k?m():To(m)}),l.augmentJob=m=>{n&&(m.flags|=4),g&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const f=Ws(t,n,l);return ae&&(p?p.push(f):a&&f()),f}function Ll(t,n,e){const o=this.proxy,i=at(t)?t.includes(".")?Or(o,t):()=>o[t]:t.bind(o,o);let r;N(n)?r=n:(r=n.handler,e=n);const s=ge(this),l=Lr(i,r.bind(o),e);return s(),l}function Or(t,n){const e=n.split(".");return()=>{let o=t;for(let i=0;i<e.length&&o;i++)o=o[e[i]];return o}}const Ol=(t,n)=>n==="modelValue"||n==="model-value"?t.modelModifiers:t[`${n}Modifiers`]||t[`${Ot(n)}Modifiers`]||t[`${Pn(n)}Modifiers`];function Fl(t,n,...e){if(t.isUnmounted)return;const o=t.vnode.props||it;let i=e;const r=n.startsWith("update:"),s=r&&Ol(o,n.slice(7));s&&(s.trim&&(i=e.map(c=>at(c)?c.trim():c)),s.number&&(i=e.map(us)));let l,a=o[l=Ge(n)]||o[l=Ge(Ot(n))];!a&&r&&(a=o[l=Ge(Pn(n))]),a&&Jt(a,t,6,i);const p=o[l+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Jt(p,t,6,i)}}function Fr(t,n,e=!1){const o=n.emitsCache,i=o.get(t);if(i!==void 0)return i;const r=t.emits;let s={},l=!1;if(!N(t)){const a=p=>{const c=Fr(p,n,!0);c&&(l=!0,_t(s,c))};!e&&n.mixins.length&&n.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(rt(t)&&o.set(t,null),null):(V(r)?r.forEach(a=>s[a]=null):_t(s,r),rt(t)&&o.set(t,s),s)}function je(t,n){return!t||!Ie(n)?!1:(n=n.slice(2).replace(/Once$/,""),W(t,n[0].toLowerCase()+n.slice(1))||W(t,Pn(n))||W(t,n))}function oi(t){const{type:n,vnode:e,proxy:o,withProxy:i,propsOptions:[r],slots:s,attrs:l,emit:a,render:p,renderCache:c,props:g,data:f,setupState:m,ctx:k,inheritAttrs:M}=t,I=Ae(t);let z,E;try{if(e.shapeFlag&4){const L=i||o,Z=L;z=Wt(p.call(Z,L,c,g,m,f,k)),E=l}else{const L=n;z=Wt(L.length>1?L(g,{attrs:l,slots:s,emit:a}):L(g,null)),E=n.props?l:zl(l)}}catch(L){ne.length=0,$e(L,t,1),z=X(vn)}let $=z;if(E&&M!==!1){const L=Object.keys(E),{shapeFlag:Z}=$;L.length&&Z&7&&(r&&L.some(xo)&&(E=Dl(E,r)),$=Bn($,E,!1,!0))}return e.dirs&&($=Bn($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(e.dirs):e.dirs),e.transition&&Io($,e.transition),z=$,Ae(I),z}const zl=t=>{let n;for(const e in t)(e==="class"||e==="style"||Ie(e))&&((n||(n={}))[e]=t[e]);return n},Dl=(t,n)=>{const e={};for(const o in t)(!xo(o)||!(o.slice(9)in n))&&(e[o]=t[o]);return e};function Hl(t,n,e){const{props:o,children:i,component:r}=t,{props:s,children:l,patchFlag:a}=n,p=r.emitsOptions;if(n.dirs||n.transition)return!0;if(e&&a>=0){if(a&1024)return!0;if(a&16)return o?ii(o,s,p):!!s;if(a&8){const c=n.dynamicProps;for(let g=0;g<c.length;g++){const f=c[g];if(s[f]!==o[f]&&!je(p,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:o===s?!1:o?s?ii(o,s,p):!0:!!s;return!1}function ii(t,n,e){const o=Object.keys(n);if(o.length!==Object.keys(t).length)return!0;for(let i=0;i<o.length;i++){const r=o[i];if(n[r]!==t[r]&&!je(e,r))return!0}return!1}function $l({vnode:t,parent:n},e){for(;n;){const o=n.subTree;if(o.suspense&&o.suspense.activeBranch===t&&(o.el=t.el),o===t)(t=n.vnode).el=e,n=n.parent;else break}}const zr=t=>t.__isSuspense;function Bl(t,n){n&&n.pendingBranch?V(t)?n.effects.push(...t):n.effects.push(t):Js(t)}const ct=Symbol.for("v-fgt"),Ve=Symbol.for("v-txt"),vn=Symbol.for("v-cmt"),_e=Symbol.for("v-stc"),ne=[];let It=null;function F(t=!1){ne.push(It=t?null:[])}function jl(){ne.pop(),It=ne[ne.length-1]||null}let le=1;function ri(t,n=!1){le+=t,t<0&&It&&n&&(It.hasOnce=!0)}function Dr(t){return t.dynamicChildren=le>0?It||Fn:null,jl(),le>0&&It&&It.push(t),t}function B(t,n,e,o,i,r){return Dr(y(t,n,e,o,i,r,!0))}function Xt(t,n,e,o,i){return Dr(X(t,n,e,o,i,!0))}function Re(t){return t?t.__v_isVNode===!0:!1}function Gn(t,n){return t.type===n.type&&t.key===n.key}const Hr=({key:t})=>t??null,xe=({ref:t,ref_key:n,ref_for:e})=>(typeof t=="number"&&(t=""+t),t!=null?at(t)||ut(t)||N(t)?{i:Ft,r:t,k:n,f:!!e}:t:null);function y(t,n=null,e=null,o=0,i=null,r=t===ct?0:1,s=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Hr(n),ref:n&&xe(n),scopeId:mr,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ft};return l?(zo(a,e),r&128&&t.normalize(a)):e&&(a.shapeFlag|=at(e)?8:16),le>0&&!s&&It&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&It.push(a),a}const X=Vl;function Vl(t,n=null,e=null,o=0,i=null,r=!1){if((!t||t===ul)&&(t=vn),Re(t)){const l=Bn(t,n,!0);return e&&zo(l,e),le>0&&!r&&It&&(l.shapeFlag&6?It[It.indexOf(t)]=l:It.push(l)),l.patchFlag=-2,l}if(ta(t)&&(t=t.__vccOpts),n){n=Nl(n);let{class:l,style:a}=n;l&&!at(l)&&(n.class=en(l)),rt(a)&&(Mo(a)&&!V(a)&&(a=_t({},a)),n.style=ze(a))}const s=at(t)?1:zr(t)?128:Zs(t)?64:rt(t)?4:N(t)?2:0;return y(t,n,e,o,i,s,r,!0)}function Nl(t){return t?Mo(t)||kr(t)?_t({},t):t:null}function Bn(t,n,e=!1,o=!1){const{props:i,ref:r,patchFlag:s,children:l,transition:a}=t,p=n?Kl(i||{},n):i,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:p,key:p&&Hr(p),ref:n&&n.ref?e&&r?V(r)?r.concat(xe(n)):[r,xe(n)]:xe(n):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==ct?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bn(t.ssContent),ssFallback:t.ssFallback&&Bn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&o&&Io(c,a.clone(c)),c}function Pt(t=" ",n=0){return X(Ve,null,t,n)}function $r(t,n){const e=X(_e,null,t);return e.staticCount=n,e}function mt(t="",n=!1){return n?(F(),Xt(vn,null,t)):X(vn,null,t)}function Wt(t){return t==null||typeof t=="boolean"?X(vn):V(t)?X(ct,null,t.slice()):Re(t)?gn(t):X(Ve,null,String(t))}function gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bn(t)}function zo(t,n){let e=0;const{shapeFlag:o}=t;if(n==null)n=null;else if(V(n))e=16;else if(typeof n=="object")if(o&65){const i=n.default;i&&(i._c&&(i._d=!1),zo(t,i()),i._c&&(i._d=!0));return}else{e=32;const i=n._;!i&&!kr(n)?n._ctx=Ft:i===3&&Ft&&(Ft.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else N(n)?(n={default:n,_ctx:Ft},e=32):(n=String(n),o&64?(e=16,n=[Pt(n)]):e=8);t.children=n,t.shapeFlag|=e}function Kl(...t){const n={};for(let e=0;e<t.length;e++){const o=t[e];for(const i in o)if(i==="class")n.class!==o.class&&(n.class=en([n.class,o.class]));else if(i==="style")n.style=ze([n.style,o.style]);else if(Ie(i)){const r=n[i],s=o[i];s&&r!==s&&!(V(r)&&r.includes(s))&&(n[i]=r?[].concat(r,s):s)}else i!==""&&(n[i]=o[i])}return n}function Gt(t,n,e,o=null){Jt(t,n,7,[e,o])}const Ul=wr();let Gl=0;function ql(t,n,e){const o=t.type,i=(n?n.appContext:t.appContext)||Ul,r={uid:Gl++,vnode:t,type:o,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ui(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pr(o,i),emitsOptions:Fr(o,i),emit:null,emitted:null,propsDefaults:it,inheritAttrs:o.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Fl.bind(null,r),t.ce&&t.ce(r),r}let vt=null;const Wl=()=>vt||Ft;let Me,fo;{const t=Fe(),n=(e,o)=>{let i;return(i=t[e])||(i=t[e]=[]),i.push(o),r=>{i.length>1?i.forEach(s=>s(r)):i[0](r)}};Me=n("__VUE_INSTANCE_SETTERS__",e=>vt=e),fo=n("__VUE_SSR_SETTERS__",e=>ae=e)}const ge=t=>{const n=vt;return Me(t),t.scope.on(),()=>{t.scope.off(),Me(n)}},si=()=>{vt&&vt.scope.off(),Me(null)};function Br(t){return t.vnode.shapeFlag&4}let ae=!1;function Xl(t,n=!1,e=!1){n&&fo(n);const{props:o,children:i}=t.vnode,r=Br(t);yl(t,o,r,n),kl(t,i,e||n);const s=r?Ql(t,n):void 0;return n&&fo(!1),s}function Ql(t,n){const e=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gl);const{setup:o}=e;if(o){rn();const i=t.setupContext=o.length>1?Yl(t):null,r=ge(t),s=ue(o,t,0,[t.props,i]),l=$i(s);if(sn(),r(),(l||t.sp)&&!Zn(t)&&br(t),l){if(s.then(si,si),n)return s.then(a=>{li(t,a)}).catch(a=>{$e(a,t,0)});t.asyncDep=s}else li(t,s)}else jr(t)}function li(t,n,e){N(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:rt(n)&&(t.setupState=dr(n)),jr(t)}function jr(t,n,e){const o=t.type;t.render||(t.render=o.render||Qt);{const i=ge(t);rn();try{fl(t)}finally{sn(),i()}}}const Jl={get(t,n){return bt(t,"get",""),t[n]}};function Yl(t){const n=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Jl),slots:t.slots,emit:t.emit,expose:n}}function Do(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(dr(ar(t.exposed)),{get(n,e){if(e in n)return n[e];if(e in te)return te[e](t)},has(n,e){return e in n||e in te}})):t.proxy}function Zl(t,n=!0){return N(t)?t.displayName||t.name:t.name||n&&t.__name}function ta(t){return N(t)&&"__vccOpts"in t}const lt=(t,n)=>Gs(t,n,ae);function Vr(t,n,e){const o=arguments.length;return o===2?rt(n)&&!V(n)?Re(n)?X(t,null,[n]):X(t,n):X(t,null,n):(o>3?e=Array.prototype.slice.call(arguments,2):o===3&&Re(e)&&(e=[e]),X(t,n,e))}const na="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ho;const ai=typeof window<"u"&&window.trustedTypes;if(ai)try{ho=ai.createPolicy("vue",{createHTML:t=>t})}catch{}const Nr=ho?t=>ho.createHTML(t):t=>t,ea="http://www.w3.org/2000/svg",oa="http://www.w3.org/1998/Math/MathML",nn=typeof document<"u"?document:null,ci=nn&&nn.createElement("template"),ia={insert:(t,n,e)=>{n.insertBefore(t,e||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,e,o)=>{const i=n==="svg"?nn.createElementNS(ea,t):n==="mathml"?nn.createElementNS(oa,t):e?nn.createElement(t,{is:e}):nn.createElement(t);return t==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:t=>nn.createTextNode(t),createComment:t=>nn.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nn.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,e,o,i,r){const s=e?e.previousSibling:n.lastChild;if(i&&(i===r||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),e),!(i===r||!(i=i.nextSibling)););else{ci.innerHTML=Nr(o==="svg"?`<svg>${t}</svg>`:o==="mathml"?`<math>${t}</math>`:t);const l=ci.content;if(o==="svg"||o==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}n.insertBefore(l,e)}return[s?s.nextSibling:n.firstChild,e?e.previousSibling:n.lastChild]}},ra=Symbol("_vtc");function sa(t,n,e){const o=t[ra];o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?t.removeAttribute("class"):e?t.setAttribute("class",n):t.className=n}const di=Symbol("_vod"),la=Symbol("_vsh"),aa=Symbol(""),ca=/(^|;)\s*display\s*:/;function da(t,n,e){const o=t.style,i=at(e);let r=!1;if(e&&!i){if(n)if(at(n))for(const s of n.split(";")){const l=s.slice(0,s.indexOf(":")).trim();e[l]==null&&ye(o,l,"")}else for(const s in n)e[s]==null&&ye(o,s,"");for(const s in e)s==="display"&&(r=!0),ye(o,s,e[s])}else if(i){if(n!==e){const s=o[aa];s&&(e+=";"+s),o.cssText=e,r=ca.test(e)}}else n&&t.removeAttribute("style");di in t&&(t[di]=r?o.display:"",t[la]&&(o.display="none"))}const ui=/\s*!important$/;function ye(t,n,e){if(V(e))e.forEach(o=>ye(t,n,o));else if(e==null&&(e=""),n.startsWith("--"))t.setProperty(n,e);else{const o=ua(t,n);ui.test(e)?t.setProperty(Pn(o),e.replace(ui,""),"important"):t[o]=e}}const pi=["Webkit","Moz","ms"],to={};function ua(t,n){const e=to[n];if(e)return e;let o=Ot(n);if(o!=="filter"&&o in t)return to[n]=o;o=Oe(o);for(let i=0;i<pi.length;i++){const r=pi[i]+o;if(r in t)return to[n]=r}return n}const gi="http://www.w3.org/1999/xlink";function fi(t,n,e,o,i,r=bs(n)){o&&n.startsWith("xlink:")?e==null?t.removeAttributeNS(gi,n.slice(6,n.length)):t.setAttributeNS(gi,n,e):e==null||r&&!Vi(e)?t.removeAttribute(n):t.setAttribute(n,r?"":_n(e)?String(e):e)}function hi(t,n,e,o,i){if(n==="innerHTML"||n==="textContent"){e!=null&&(t[n]=n==="innerHTML"?Nr(e):e);return}const r=t.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=e==null?t.type==="checkbox"?"on":"":String(e);(l!==a||!("_value"in t))&&(t.value=a),e==null&&t.removeAttribute(n),t._value=e;return}let s=!1;if(e===""||e==null){const l=typeof t[n];l==="boolean"?e=Vi(e):e==null&&l==="string"?(e="",s=!0):l==="number"&&(e=0,s=!0)}try{t[n]=e}catch{}s&&t.removeAttribute(i||n)}function pa(t,n,e,o){t.addEventListener(n,e,o)}function ga(t,n,e,o){t.removeEventListener(n,e,o)}const mi=Symbol("_vei");function fa(t,n,e,o,i=null){const r=t[mi]||(t[mi]={}),s=r[n];if(o&&s)s.value=o;else{const[l,a]=ha(n);if(o){const p=r[n]=va(o,i);pa(t,l,p,a)}else s&&(ga(t,l,s,a),r[n]=void 0)}}const bi=/(?:Once|Passive|Capture)$/;function ha(t){let n;if(bi.test(t)){n={};let o;for(;o=t.match(bi);)t=t.slice(0,t.length-o[0].length),n[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pn(t.slice(2)),n]}let no=0;const ma=Promise.resolve(),ba=()=>no||(ma.then(()=>no=0),no=Date.now());function va(t,n){const e=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=e.attached)return;Jt(_a(o,e.value),n,5,[o])};return e.value=t,e.attached=ba(),e}function _a(t,n){if(V(n)){const e=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{e.call(t),t._stopped=!0},n.map(o=>i=>!i._stopped&&o&&o(i))}else return n}const vi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xa=(t,n,e,o,i,r)=>{const s=i==="svg";n==="class"?sa(t,o,s):n==="style"?da(t,e,o):Ie(n)?xo(n)||fa(t,n,e,o,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):ya(t,n,o,s))?(hi(t,n,o),!t.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&fi(t,n,o,s,r,n!=="value")):t._isVueCE&&(/[A-Z]/.test(n)||!at(o))?hi(t,Ot(n),o,r,n):(n==="true-value"?t._trueValue=o:n==="false-value"&&(t._falseValue=o),fi(t,n,o,s))};function ya(t,n,e,o){if(o)return!!(n==="innerHTML"||n==="textContent"||n in t&&vi(n)&&N(e));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return vi(n)&&at(e)?!1:n in t}const wa=["ctrl","shift","alt","meta"],Ca={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,n)=>wa.some(e=>t[`${e}Key`]&&!n.includes(e))},Sa=(t,n)=>{const e=t._withMods||(t._withMods={}),o=n.join(".");return e[o]||(e[o]=(i,...r)=>{for(let s=0;s<n.length;s++){const l=Ca[n[s]];if(l&&l(i,n))return}return t(i,...r)})},ka=_t({patchProp:xa},ia);let _i;function Aa(){return _i||(_i=Pl(ka))}const Pa=(...t)=>{const n=Aa().createApp(...t),{mount:e}=n;return n.mount=o=>{const i=Ma(o);if(!i)return;const r=n._component;!N(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const s=e(i,!1,Ra(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},n};function Ra(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ma(t){return at(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ta=Symbol();var xi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xi||(xi={}));function Ia(){const t=vs(!0),n=t.run(()=>ft({}));let e=[],o=[];const i=ar({install(r){i._a=r,r.provide(Ta,i),r.config.globalProperties.$pinia=i,o.forEach(s=>e.push(s)),o=[]},use(r){return this._a?e.push(r):o.push(r),this},_p:e,_a:null,_e:t,_s:new Map,state:n});return i}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const On=typeof document<"u";function Kr(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ea(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Kr(t.default)}const q=Object.assign;function eo(t,n){const e={};for(const o in n){const i=n[o];e[o]=Ht(i)?i.map(t):t(i)}return e}const ee=()=>{},Ht=Array.isArray,Ur=/#/g,La=/&/g,Oa=/\//g,Fa=/=/g,za=/\?/g,Gr=/\+/g,Da=/%5B/g,Ha=/%5D/g,qr=/%5E/g,$a=/%60/g,Wr=/%7B/g,Ba=/%7C/g,Xr=/%7D/g,ja=/%20/g;function Ho(t){return encodeURI(""+t).replace(Ba,"|").replace(Da,"[").replace(Ha,"]")}function Va(t){return Ho(t).replace(Wr,"{").replace(Xr,"}").replace(qr,"^")}function mo(t){return Ho(t).replace(Gr,"%2B").replace(ja,"+").replace(Ur,"%23").replace(La,"%26").replace($a,"`").replace(Wr,"{").replace(Xr,"}").replace(qr,"^")}function Na(t){return mo(t).replace(Fa,"%3D")}function Ka(t){return Ho(t).replace(Ur,"%23").replace(za,"%3F")}function Ua(t){return t==null?"":Ka(t).replace(Oa,"%2F")}function ce(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ga=/\/$/,qa=t=>t.replace(Ga,"");function oo(t,n,e="/"){let o,i={},r="",s="";const l=n.indexOf("#");let a=n.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(o=n.slice(0,a),r=n.slice(a+1,l>-1?l:n.length),i=t(r)),l>-1&&(o=o||n.slice(0,l),s=n.slice(l,n.length)),o=Ja(o??n,e),{fullPath:o+(r&&"?")+r+s,path:o,query:i,hash:ce(s)}}function Wa(t,n){const e=n.query?t(n.query):"";return n.path+(e&&"?")+e+(n.hash||"")}function yi(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function Xa(t,n,e){const o=n.matched.length-1,i=e.matched.length-1;return o>-1&&o===i&&jn(n.matched[o],e.matched[i])&&Qr(n.params,e.params)&&t(n.query)===t(e.query)&&n.hash===e.hash}function jn(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Qr(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const e in t)if(!Qa(t[e],n[e]))return!1;return!0}function Qa(t,n){return Ht(t)?wi(t,n):Ht(n)?wi(n,t):t===n}function wi(t,n){return Ht(n)?t.length===n.length&&t.every((e,o)=>e===n[o]):t.length===1&&t[0]===n}function Ja(t,n){if(t.startsWith("/"))return t;if(!t)return n;const e=n.split("/"),o=t.split("/"),i=o[o.length-1];(i===".."||i===".")&&o.push("");let r=e.length-1,s,l;for(s=0;s<o.length;s++)if(l=o[s],l!==".")if(l==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+o.slice(s).join("/")}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var de;(function(t){t.pop="pop",t.push="push"})(de||(de={}));var oe;(function(t){t.back="back",t.forward="forward",t.unknown=""})(oe||(oe={}));function Ya(t){if(!t)if(On){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qa(t)}const Za=/^[^#]+#/;function tc(t,n){return t.replace(Za,"#")+n}function nc(t,n){const e=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:n.behavior,left:o.left-e.left-(n.left||0),top:o.top-e.top-(n.top||0)}}const Ne=()=>({left:window.scrollX,top:window.scrollY});function ec(t){let n;if("el"in t){const e=t.el,o=typeof e=="string"&&e.startsWith("#"),i=typeof e=="string"?o?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!i)return;n=nc(i,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Ci(t,n){return(history.state?history.state.position-n:-1)+t}const bo=new Map;function oc(t,n){bo.set(t,n)}function ic(t){const n=bo.get(t);return bo.delete(t),n}let rc=()=>location.protocol+"//"+location.host;function Jr(t,n){const{pathname:e,search:o,hash:i}=n,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),yi(a,"")}return yi(e,t)+o+i}function sc(t,n,e,o){let i=[],r=[],s=null;const l=({state:f})=>{const m=Jr(t,location),k=e.value,M=n.value;let I=0;if(f){if(e.value=m,n.value=f,s&&s===k){s=null;return}I=M?f.position-M.position:0}else o(m);i.forEach(z=>{z(e.value,k,{delta:I,type:de.pop,direction:I?I>0?oe.forward:oe.back:oe.unknown})})};function a(){s=e.value}function p(f){i.push(f);const m=()=>{const k=i.indexOf(f);k>-1&&i.splice(k,1)};return r.push(m),m}function c(){const{history:f}=window;f.state&&f.replaceState(q({},f.state,{scroll:Ne()}),"")}function g(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:a,listen:p,destroy:g}}function Si(t,n,e,o=!1,i=!1){return{back:t,current:n,forward:e,replaced:o,position:window.history.length,scroll:i?Ne():null}}function lc(t){const{history:n,location:e}=window,o={value:Jr(t,e)},i={value:n.state};i.value||r(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(a,p,c){const g=t.indexOf("#"),f=g>-1?(e.host&&document.querySelector("base")?t:t.slice(g))+a:rc()+t+a;try{n[c?"replaceState":"pushState"](p,"",f),i.value=p}catch(m){console.error(m),e[c?"replace":"assign"](f)}}function s(a,p){const c=q({},n.state,Si(i.value.back,a,i.value.forward,!0),p,{position:i.value.position});r(a,c,!0),o.value=a}function l(a,p){const c=q({},i.value,n.state,{forward:a,scroll:Ne()});r(c.current,c,!0);const g=q({},Si(o.value,a,null),{position:c.position+1},p);r(a,g,!1),o.value=a}return{location:o,state:i,push:l,replace:s}}function ac(t){t=Ya(t);const n=lc(t),e=sc(t,n.state,n.location,n.replace);function o(r,s=!0){s||e.pauseListeners(),history.go(r)}const i=q({location:"",base:t,go:o,createHref:tc.bind(null,t)},n,e);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>n.state.value}),i}function cc(t){return typeof t=="string"||t&&typeof t=="object"}function Yr(t){return typeof t=="string"||typeof t=="symbol"}const Zr=Symbol("");var ki;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ki||(ki={}));function Vn(t,n){return q(new Error,{type:t,[Zr]:!0},n)}function tn(t,n){return t instanceof Error&&Zr in t&&(n==null||!!(t.type&n))}const Ai="[^/]+?",dc={sensitive:!1,strict:!1,start:!0,end:!0},uc=/[.+*?^${}()[\]/\\]/g;function pc(t,n){const e=q({},dc,n),o=[];let i=e.start?"^":"";const r=[];for(const p of t){const c=p.length?[]:[90];e.strict&&!p.length&&(i+="/");for(let g=0;g<p.length;g++){const f=p[g];let m=40+(e.sensitive?.25:0);if(f.type===0)g||(i+="/"),i+=f.value.replace(uc,"\\$&"),m+=40;else if(f.type===1){const{value:k,repeatable:M,optional:I,regexp:z}=f;r.push({name:k,repeatable:M,optional:I});const E=z||Ai;if(E!==Ai){m+=10;try{new RegExp(`(${E})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${k}" (${E}): `+L.message)}}let $=M?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;g||($=I&&p.length<2?`(?:/${$})`:"/"+$),I&&($+="?"),i+=$,m+=20,I&&(m+=-8),M&&(m+=-20),E===".*"&&(m+=-50)}c.push(m)}o.push(c)}if(e.strict&&e.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}e.strict||(i+="/?"),e.end?i+="$":e.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const s=new RegExp(i,e.sensitive?"":"i");function l(p){const c=p.match(s),g={};if(!c)return null;for(let f=1;f<c.length;f++){const m=c[f]||"",k=r[f-1];g[k.name]=m&&k.repeatable?m.split("/"):m}return g}function a(p){let c="",g=!1;for(const f of t){(!g||!c.endsWith("/"))&&(c+="/"),g=!1;for(const m of f)if(m.type===0)c+=m.value;else if(m.type===1){const{value:k,repeatable:M,optional:I}=m,z=k in p?p[k]:"";if(Ht(z)&&!M)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const E=Ht(z)?z.join("/"):z;if(!E)if(I)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):g=!0);else throw new Error(`Missing required param "${k}"`);c+=E}}return c||"/"}return{re:s,score:o,keys:r,parse:l,stringify:a}}function gc(t,n){let e=0;for(;e<t.length&&e<n.length;){const o=n[e]-t[e];if(o)return o;e++}return t.length<n.length?t.length===1&&t[0]===80?-1:1:t.length>n.length?n.length===1&&n[0]===80?1:-1:0}function ts(t,n){let e=0;const o=t.score,i=n.score;for(;e<o.length&&e<i.length;){const r=gc(o[e],i[e]);if(r)return r;e++}if(Math.abs(i.length-o.length)===1){if(Pi(o))return 1;if(Pi(i))return-1}return i.length-o.length}function Pi(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const fc={type:0,value:""},hc=/[a-zA-Z0-9_]/;function mc(t){if(!t)return[[]];if(t==="/")return[[fc]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(m){throw new Error(`ERR (${e})/"${p}": ${m}`)}let e=0,o=e;const i=[];let r;function s(){r&&i.push(r),r=[]}let l=0,a,p="",c="";function g(){p&&(e===0?r.push({type:0,value:p}):e===1||e===2||e===3?(r.length>1&&(a==="*"||a==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):n("Invalid state to consume buffer"),p="")}function f(){p+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&e!==2){o=e,e=4;continue}switch(e){case 0:a==="/"?(p&&g(),s()):a===":"?(g(),e=1):f();break;case 4:f(),e=o;break;case 1:a==="("?e=2:hc.test(a)?f():(g(),e=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:e=3:c+=a;break;case 3:g(),e=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,c="";break;default:n("Unknown state");break}}return e===2&&n(`Unfinished custom RegExp for param "${p}"`),g(),s(),i}function bc(t,n,e){const o=pc(mc(t.path),e),i=q(o,{record:t,parent:n,children:[],alias:[]});return n&&!i.record.aliasOf==!n.record.aliasOf&&n.children.push(i),i}function vc(t,n){const e=[],o=new Map;n=Ii({strict:!1,end:!0,sensitive:!1},n);function i(g){return o.get(g)}function r(g,f,m){const k=!m,M=Mi(g);M.aliasOf=m&&m.record;const I=Ii(n,g),z=[M];if("alias"in g){const L=typeof g.alias=="string"?[g.alias]:g.alias;for(const Z of L)z.push(Mi(q({},M,{components:m?m.record.components:M.components,path:Z,aliasOf:m?m.record:M})))}let E,$;for(const L of z){const{path:Z}=L;if(f&&Z[0]!=="/"){const pt=f.record.path,st=pt[pt.length-1]==="/"?"":"/";L.path=f.record.path+(Z&&st+Z)}if(E=bc(L,f,I),m?m.alias.push(E):($=$||E,$!==E&&$.alias.push(E),k&&g.name&&!Ti(E)&&s(g.name)),ns(E)&&a(E),M.children){const pt=M.children;for(let st=0;st<pt.length;st++)r(pt[st],E,m&&m.children[st])}m=m||E}return $?()=>{s($)}:ee}function s(g){if(Yr(g)){const f=o.get(g);f&&(o.delete(g),e.splice(e.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=e.indexOf(g);f>-1&&(e.splice(f,1),g.record.name&&o.delete(g.record.name),g.children.forEach(s),g.alias.forEach(s))}}function l(){return e}function a(g){const f=yc(g,e);e.splice(f,0,g),g.record.name&&!Ti(g)&&o.set(g.record.name,g)}function p(g,f){let m,k={},M,I;if("name"in g&&g.name){if(m=o.get(g.name),!m)throw Vn(1,{location:g});I=m.record.name,k=q(Ri(f.params,m.keys.filter($=>!$.optional).concat(m.parent?m.parent.keys.filter($=>$.optional):[]).map($=>$.name)),g.params&&Ri(g.params,m.keys.map($=>$.name))),M=m.stringify(k)}else if(g.path!=null)M=g.path,m=e.find($=>$.re.test(M)),m&&(k=m.parse(M),I=m.record.name);else{if(m=f.name?o.get(f.name):e.find($=>$.re.test(f.path)),!m)throw Vn(1,{location:g,currentLocation:f});I=m.record.name,k=q({},f.params,g.params),M=m.stringify(k)}const z=[];let E=m;for(;E;)z.unshift(E.record),E=E.parent;return{name:I,path:M,params:k,matched:z,meta:xc(z)}}t.forEach(g=>r(g));function c(){e.length=0,o.clear()}return{addRoute:r,resolve:p,removeRoute:s,clearRoutes:c,getRoutes:l,getRecordMatcher:i}}function Ri(t,n){const e={};for(const o of n)o in t&&(e[o]=t[o]);return e}function Mi(t){const n={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:_c(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function _c(t){const n={},e=t.props||!1;if("component"in t)n.default=e;else for(const o in t.components)n[o]=typeof e=="object"?e[o]:e;return n}function Ti(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xc(t){return t.reduce((n,e)=>q(n,e.meta),{})}function Ii(t,n){const e={};for(const o in t)e[o]=o in n?n[o]:t[o];return e}function yc(t,n){let e=0,o=n.length;for(;e!==o;){const r=e+o>>1;ts(t,n[r])<0?o=r:e=r+1}const i=wc(t);return i&&(o=n.lastIndexOf(i,o-1)),o}function wc(t){let n=t;for(;n=n.parent;)if(ns(n)&&ts(t,n)===0)return n}function ns({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Cc(t){const n={};if(t===""||t==="?")return n;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<o.length;++i){const r=o[i].replace(Gr," "),s=r.indexOf("="),l=ce(s<0?r:r.slice(0,s)),a=s<0?null:ce(r.slice(s+1));if(l in n){let p=n[l];Ht(p)||(p=n[l]=[p]),p.push(a)}else n[l]=a}return n}function Ei(t){let n="";for(let e in t){const o=t[e];if(e=Na(e),o==null){o!==void 0&&(n+=(n.length?"&":"")+e);continue}(Ht(o)?o.map(r=>r&&mo(r)):[o&&mo(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+e,r!=null&&(n+="="+r))})}return n}function Sc(t){const n={};for(const e in t){const o=t[e];o!==void 0&&(n[e]=Ht(o)?o.map(i=>i==null?null:""+i):o==null?o:""+o)}return n}const kc=Symbol(""),Li=Symbol(""),Ke=Symbol(""),$o=Symbol(""),vo=Symbol("");function qn(){let t=[];function n(o){return t.push(o),()=>{const i=t.indexOf(o);i>-1&&t.splice(i,1)}}function e(){t=[]}return{add:n,list:()=>t.slice(),reset:e}}function fn(t,n,e,o,i,r=s=>s()){const s=o&&(o.enterCallbacks[i]=o.enterCallbacks[i]||[]);return()=>new Promise((l,a)=>{const p=f=>{f===!1?a(Vn(4,{from:e,to:n})):f instanceof Error?a(f):cc(f)?a(Vn(2,{from:n,to:f})):(s&&o.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),l())},c=r(()=>t.call(o&&o.instances[i],n,e,p));let g=Promise.resolve(c);t.length<3&&(g=g.then(p)),g.catch(f=>a(f))})}function io(t,n,e,o,i=r=>r()){const r=[];for(const s of t)for(const l in s.components){let a=s.components[l];if(!(n!=="beforeRouteEnter"&&!s.instances[l]))if(Kr(a)){const c=(a.__vccOpts||a)[n];c&&r.push(fn(c,e,o,s,l,i))}else{let p=a();r.push(()=>p.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);const g=Ea(c)?c.default:c;s.mods[l]=c,s.components[l]=g;const m=(g.__vccOpts||g)[n];return m&&fn(m,e,o,s,l,i)()}))}}return r}function Oi(t){const n=Dt(Ke),e=Dt($o),o=lt(()=>{const a=J(t.to);return n.resolve(a)}),i=lt(()=>{const{matched:a}=o.value,{length:p}=a,c=a[p-1],g=e.matched;if(!c||!g.length)return-1;const f=g.findIndex(jn.bind(null,c));if(f>-1)return f;const m=Fi(a[p-2]);return p>1&&Fi(c)===m&&g[g.length-1].path!==m?g.findIndex(jn.bind(null,a[p-2])):f}),r=lt(()=>i.value>-1&&Tc(e.params,o.value.params)),s=lt(()=>i.value>-1&&i.value===e.matched.length-1&&Qr(e.params,o.value.params));function l(a={}){if(Mc(a)){const p=n[J(t.replace)?"replace":"push"](J(t.to)).catch(ee);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:o,href:lt(()=>o.value.href),isActive:r,isExactActive:s,navigate:l}}function Ac(t){return t.length===1?t[0]:t}const Pc=xt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Oi,setup(t,{slots:n}){const e=He(Oi(t)),{options:o}=Dt(Ke),i=lt(()=>({[zi(t.activeClass,o.linkActiveClass,"router-link-active")]:e.isActive,[zi(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=n.default&&Ac(n.default(e));return t.custom?r:Vr("a",{"aria-current":e.isExactActive?t.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:i.value},r)}}}),Rc=Pc;function Mc(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function Tc(t,n){for(const e in n){const o=n[e],i=t[e];if(typeof o=="string"){if(o!==i)return!1}else if(!Ht(i)||i.length!==o.length||o.some((r,s)=>r!==i[s]))return!1}return!0}function Fi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zi=(t,n,e)=>t??n??e,Ic=xt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:e}){const o=Dt(vo),i=lt(()=>t.route||o.value),r=Dt(Li,0),s=lt(()=>{let p=J(r);const{matched:c}=i.value;let g;for(;(g=c[p])&&!g.components;)p++;return p}),l=lt(()=>i.value.matched[s.value]);ve(Li,lt(()=>s.value+1)),ve(kc,l),ve(vo,i);const a=ft();return kn(()=>[a.value,l.value,t.name],([p,c,g],[f,m,k])=>{c&&(c.instances[g]=p,m&&m!==c&&p&&p===f&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),p&&c&&(!m||!jn(c,m)||!f)&&(c.enterCallbacks[g]||[]).forEach(M=>M(p))},{flush:"post"}),()=>{const p=i.value,c=t.name,g=l.value,f=g&&g.components[c];if(!f)return Di(e.default,{Component:f,route:p});const m=g.props[c],k=m?m===!0?p.params:typeof m=="function"?m(p):m:null,I=Vr(f,q({},k,n,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(g.instances[c]=null)},ref:a}));return Di(e.default,{Component:I,route:p})||I}}});function Di(t,n){if(!t)return null;const e=t(n);return e.length===1?e[0]:e}const Ec=Ic;function Lc(t){const n=vc(t.routes,t),e=t.parseQuery||Cc,o=t.stringifyQuery||Ei,i=t.history,r=qn(),s=qn(),l=qn(),a=$s(un);let p=un;On&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=eo.bind(null,v=>""+v),g=eo.bind(null,Ua),f=eo.bind(null,ce);function m(v,T){let P,O;return Yr(v)?(P=n.getRecordMatcher(v),O=T):O=v,n.addRoute(O,P)}function k(v){const T=n.getRecordMatcher(v);T&&n.removeRoute(T)}function M(){return n.getRoutes().map(v=>v.record)}function I(v){return!!n.getRecordMatcher(v)}function z(v,T){if(T=q({},T||a.value),typeof v=="string"){const h=oo(e,v,T.path),b=n.resolve({path:h.path},T),x=i.createHref(h.fullPath);return q(h,b,{params:f(b.params),hash:ce(h.hash),redirectedFrom:void 0,href:x})}let P;if(v.path!=null)P=q({},v,{path:oo(e,v.path,T.path).path});else{const h=q({},v.params);for(const b in h)h[b]==null&&delete h[b];P=q({},v,{params:g(h)}),T.params=g(T.params)}const O=n.resolve(P,T),tt=v.hash||"";O.params=c(f(O.params));const d=Wa(o,q({},v,{hash:Va(tt),path:O.path})),u=i.createHref(d);return q({fullPath:d,hash:tt,query:o===Ei?Sc(v.query):v.query||{}},O,{redirectedFrom:void 0,href:u})}function E(v){return typeof v=="string"?oo(e,v,a.value.path):q({},v)}function $(v,T){if(p!==v)return Vn(8,{from:T,to:v})}function L(v){return st(v)}function Z(v){return L(q(E(v),{replace:!0}))}function pt(v){const T=v.matched[v.matched.length-1];if(T&&T.redirect){const{redirect:P}=T;let O=typeof P=="function"?P(v):P;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=E(O):{path:O},O.params={}),q({query:v.query,hash:v.hash,params:O.path!=null?{}:v.params},O)}}function st(v,T){const P=p=z(v),O=a.value,tt=v.state,d=v.force,u=v.replace===!0,h=pt(P);if(h)return st(q(E(h),{state:typeof h=="object"?q({},tt,h.state):tt,force:d,replace:u}),T||P);const b=P;b.redirectedFrom=T;let x;return!d&&Xa(o,O,P)&&(x=Vn(16,{to:b,from:O}),Vt(O,O,!0,!1)),(x?Promise.resolve(x):Bt(b,O)).catch(_=>tn(_)?tn(_,2)?_:dn(_):G(_,b,O)).then(_=>{if(_){if(tn(_,2))return st(q({replace:u},E(_.to),{state:typeof _.to=="object"?q({},tt,_.to.state):tt,force:d}),T||b)}else _=xn(b,O,!0,u,tt);return cn(b,O,_),_})}function $t(v,T){const P=$(v,T);return P?Promise.reject(P):Promise.resolve()}function an(v){const T=In.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(v):v()}function Bt(v,T){let P;const[O,tt,d]=Oc(v,T);P=io(O.reverse(),"beforeRouteLeave",v,T);for(const h of O)h.leaveGuards.forEach(b=>{P.push(fn(b,v,T))});const u=$t.bind(null,v,T);return P.push(u),Et(P).then(()=>{P=[];for(const h of r.list())P.push(fn(h,v,T));return P.push(u),Et(P)}).then(()=>{P=io(tt,"beforeRouteUpdate",v,T);for(const h of tt)h.updateGuards.forEach(b=>{P.push(fn(b,v,T))});return P.push(u),Et(P)}).then(()=>{P=[];for(const h of d)if(h.beforeEnter)if(Ht(h.beforeEnter))for(const b of h.beforeEnter)P.push(fn(b,v,T));else P.push(fn(h.beforeEnter,v,T));return P.push(u),Et(P)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),P=io(d,"beforeRouteEnter",v,T,an),P.push(u),Et(P))).then(()=>{P=[];for(const h of s.list())P.push(fn(h,v,T));return P.push(u),Et(P)}).catch(h=>tn(h,8)?h:Promise.reject(h))}function cn(v,T,P){l.list().forEach(O=>an(()=>O(v,T,P)))}function xn(v,T,P,O,tt){const d=$(v,T);if(d)return d;const u=T===un,h=On?history.state:{};P&&(O||u?i.replace(v.fullPath,q({scroll:u&&h&&h.scroll},tt)):i.push(v.fullPath,tt)),a.value=v,Vt(v,T,P,u),dn()}let jt;function Nn(){jt||(jt=i.listen((v,T,P)=>{if(!fe.listening)return;const O=z(v),tt=pt(O);if(tt){st(q(tt,{replace:!0,force:!0}),O).catch(ee);return}p=O;const d=a.value;On&&oc(Ci(d.fullPath,P.delta),Ne()),Bt(O,d).catch(u=>tn(u,12)?u:tn(u,2)?(st(q(E(u.to),{force:!0}),O).then(h=>{tn(h,20)&&!P.delta&&P.type===de.pop&&i.go(-1,!1)}).catch(ee),Promise.reject()):(P.delta&&i.go(-P.delta,!1),G(u,O,d))).then(u=>{u=u||xn(O,d,!1),u&&(P.delta&&!tn(u,8)?i.go(-P.delta,!1):P.type===de.pop&&tn(u,20)&&i.go(-1,!1)),cn(O,d,u)}).catch(ee)}))}let Mn=qn(),dt=qn(),Y;function G(v,T,P){dn(v);const O=dt.list();return O.length?O.forEach(tt=>tt(v,T,P)):console.error(v),Promise.reject(v)}function Yt(){return Y&&a.value!==un?Promise.resolve():new Promise((v,T)=>{Mn.add([v,T])})}function dn(v){return Y||(Y=!v,Nn(),Mn.list().forEach(([T,P])=>v?P(v):T()),Mn.reset()),v}function Vt(v,T,P,O){const{scrollBehavior:tt}=t;if(!On||!tt)return Promise.resolve();const d=!P&&ic(Ci(v.fullPath,0))||(O||!P)&&history.state&&history.state.scroll||null;return pr().then(()=>tt(v,T,d)).then(u=>u&&ec(u)).catch(u=>G(u,v,T))}const Ct=v=>i.go(v);let Tn;const In=new Set,fe={currentRoute:a,listening:!0,addRoute:m,removeRoute:k,clearRoutes:n.clearRoutes,hasRoute:I,getRoutes:M,resolve:z,options:t,push:L,replace:Z,go:Ct,back:()=>Ct(-1),forward:()=>Ct(1),beforeEach:r.add,beforeResolve:s.add,afterEach:l.add,onError:dt.add,isReady:Yt,install(v){const T=this;v.component("RouterLink",Rc),v.component("RouterView",Ec),v.config.globalProperties.$router=T,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>J(a)}),On&&!Tn&&a.value===un&&(Tn=!0,L(i.location).catch(tt=>{}));const P={};for(const tt in un)Object.defineProperty(P,tt,{get:()=>a.value[tt],enumerable:!0});v.provide(Ke,T),v.provide($o,sr(P)),v.provide(vo,a);const O=v.unmount;In.add(v),v.unmount=function(){In.delete(v),In.size<1&&(p=un,jt&&jt(),jt=null,a.value=un,Tn=!1,Y=!1),O()}}};function Et(v){return v.reduce((T,P)=>T.then(()=>an(P)),Promise.resolve())}return fe}function Oc(t,n){const e=[],o=[],i=[],r=Math.max(n.matched.length,t.matched.length);for(let s=0;s<r;s++){const l=n.matched[s];l&&(t.matched.find(p=>jn(p,l))?o.push(l):e.push(l));const a=t.matched[s];a&&(n.matched.find(p=>jn(p,a))||i.push(a))}return[e,o,i]}function Bo(){return Dt(Ke)}function es(t){return Dt($o)}const Fc={class:"nav-container tabs-container"},zc={class:"nav nav-pills"},Dc={role:"presentation"},Hc={role:"presentation"},$c={role:"presentation"},Bc={role:"presentation"},jc={role:"presentation"},Vc=xt({__name:"AppHeader",setup(t){const n=es();return(e,o)=>{const i=Rn("router-link");return F(),B("nav",null,[o[5]||(o[5]=y("div",{class:"nav-container brand-container"},[y("span",{class:"brand"},"Welcome to my website!")],-1)),y("div",Fc,[y("ul",zc,[y("li",Dc,[X(i,{to:"/",class:en({active:J(n).path==="/"})},{default:ht(()=>o[0]||(o[0]=[Pt(" Home ",-1)])),_:1,__:[0]},8,["class"])]),y("li",Hc,[X(i,{to:"/biography",class:en({active:J(n).path==="/biography"})},{default:ht(()=>o[1]||(o[1]=[Pt(" Resume ",-1)])),_:1,__:[1]},8,["class"])]),y("li",$c,[X(i,{to:"/project",class:en({active:J(n).path==="/project"})},{default:ht(()=>o[2]||(o[2]=[Pt(" Projects ",-1)])),_:1,__:[2]},8,["class"])]),y("li",Bc,[X(i,{to:"/blog",class:en({active:J(n).path==="/blog"})},{default:ht(()=>o[3]||(o[3]=[Pt(" Blogs ",-1)])),_:1,__:[3]},8,["class"])]),y("li",jc,[X(i,{to:"/album",class:en({active:J(n).path==="/album"})},{default:ht(()=>o[4]||(o[4]=[Pt(" Album ",-1)])),_:1,__:[4]},8,["class"])])])]),o[6]||(o[6]=y("div",{class:"nav-spacer","aria-hidden":"true"},null,-1))])}}}),Rt=(t,n)=>{const e=t.__vccOpts||t;for(const[o,i]of n)e[o]=i;return e},Nc=Rt(Vc,[["__scopeId","data-v-857ca258"]]),Kc={class:"app-layout"},Uc={class:"main-content"},Gc=xt({__name:"AppLayout",setup(t){return(n,e)=>{const o=Rn("router-view");return F(),B("div",Kc,[X(Nc),y("main",Uc,[X(o)])])}}}),qc=Rt(Gc,[["__scopeId","data-v-90f01ffa"]]),Wc=xt({__name:"App",setup(t){return(n,e)=>(F(),Xt(qc))}}),Xc="/images/myphoto.jpg",Qc="/icons/email.png",Jc="/icons/github.png",Yc="/icons/gitee.png",Zc="/icons/feishu.png",td={class:"my-box"},nd=xt({__name:"HomeView",setup(t){return(n,e)=>(F(),B("div",td,e[0]||(e[0]=[$r('<div class="container" data-v-509c37d8><div class="sidebar" data-v-509c37d8><div class="sidebar-image" data-v-509c37d8><img src="'+Xc+'" alt="个人照片" data-v-509c37d8></div><div class="sidebar-text" data-v-509c37d8><b data-v-509c37d8>Add:</b> Hangzhou Dianzi University, No.1158, the 2nd Street in Baiyang Street, Hangzhou Economic Development Zone, Hangzhou, China <br data-v-509c37d8><b data-v-509c37d8>E-mail:</b> haolanhe@hdu.edu.cn </div></div><div class="main-content" data-v-509c37d8><div class="head" data-v-509c37d8><span data-v-509c37d8>HaoLan He</span><span data-v-509c37d8>（何昊蓝）</span></div><div class="subhead" data-v-509c37d8><i data-v-509c37d8>AI Research Student • ENFJ </i></div><ul class="related-link" data-v-509c37d8><li data-v-509c37d8><a href="https://www.cs.zju.edu.cn/" target="_blank" data-v-509c37d8> Zhejiang University（浙江大学） </a></li><li data-v-509c37d8><a href="https://www.cst.zju.edu.cn/" target="_blank" data-v-509c37d8> College of Software（软件学院） </a></li></ul><div class="introduction" data-v-509c37d8><b style="font-size:24px;" data-v-509c37d8>Self-introduction: </b><ul data-v-509c37d8><li style="margin:2% 0;" data-v-509c37d8> I graduated from Hangzhou Dianzi University with a degree in Intelligent Science and Technology, ranking <b data-v-509c37d8>#1</b> in my major and securing a recommended place at Zhejiang University. </li><li style="margin:2% 0;" data-v-509c37d8> Currently, I am a graduate student in Artificial Intelligence at the <b data-v-509c37d8>College of Software, Zhejiang University</b>. My research focuses on <b data-v-509c37d8>AI Agent</b> and <b data-v-509c37d8>HCI</b>, with additional interests in <b data-v-509c37d8>CV</b> and <b data-v-509c37d8>AR&amp;VR</b>. </li><li style="margin:2% 0;" data-v-509c37d8> I always aspire to <i data-v-509c37d8>&quot;build valuable, warm products and technologies that truly serve people.&quot;</i></li></ul></div></div></div>',1),y("div",{class:"my-links"},[y("div",{class:"link-butt"},[y("a",{href:"mailto:haolanhe@hdu.edu.cn"},[y("img",{src:Qc,alt:"Email",style:{height:"40px",width:"40px"}})])]),y("div",{class:"link-butt"},[y("a",{href:"https://github.com/BLUE-coconut"},[y("img",{src:Jc,alt:"GitHub",style:{height:"40px",width:"40px"}})])]),y("div",{class:"link-butt"},[y("a",{href:"https://gitee.com/bluecoconut"},[y("img",{src:Yc,alt:"Gitee",style:{height:"40px",width:"40px"}})])]),y("div",{class:"link-butt"},[y("a",{href:"javascript:void(0);",onclick:"openImagePopup()"},[y("img",{src:Zc,alt:"Feishu",style:{height:"40px",width:"40px"}})])])],-1)])))}}),ed=Rt(nd,[["__scopeId","data-v-509c37d8"]]),od={},id={class:"my-box"};function rd(t,n){return F(),B("div",id,n[0]||(n[0]=[$r('<div class="container" data-v-505a7856><div class="two-column resume" data-v-505a7856><section class="resume__section resume__header" data-v-505a7856><div class="resume__content" data-v-505a7856><h1 data-v-505a7856>Haolan He (何昊蓝)</h1><div class="info-item" data-v-505a7856><span class="info-label" data-v-505a7856><i class="fa fa-location-arrow" data-v-505a7856></i></span><span class="info-text" data-v-505a7856>Hangzhou Dianzi University, No.1158, the 2nd Street in Baiyang Street, Hangzhou Economic Development Zone, Hangzhou, China</span></div><div class="info-item" data-v-505a7856><span class="info-label" data-v-505a7856><i class="fa fa-envelope" data-v-505a7856></i></span><span class="info-text" data-v-505a7856>haolanhe@hdu.edu.cn</span></div></div></section><div class="resume__columns" data-v-505a7856><div class="resume__main" data-v-505a7856><section class="resume__section resume__summary" data-v-505a7856><div class="resume__content" data-v-505a7856><div class="resume__section-title" data-v-505a7856><i class="fa fa-pencil-square-o" data-v-505a7856></i><h2 data-v-505a7856>Professional Summary</h2></div><div class="other" data-v-505a7856><div class="other-info" data-v-505a7856><p data-v-505a7856> Computer science learner and resercher. Researching interests include artificial intellegence, computer vision and human computer interaction. </p></div></div></div></section><section class="resume__section resume__summary" data-v-505a7856><div class="resume__content" data-v-505a7856><div class="resume__section-title" data-v-505a7856><i class="fa fa-mortar-board" data-v-505a7856></i><h2 data-v-505a7856>Education</h2></div><div class="xp-item" data-v-505a7856><div class="xp-job" data-v-505a7856> HangzhouDianzi University, Zhuoyue Honors College </div><span data-v-505a7856>Undergraduate</span><div class="xp-date" style="float:right;font-weight:400;" data-v-505a7856>Sept. 2021 – June 2025</div><div class="xp-detail" data-v-505a7856><ul data-v-505a7856><li data-v-505a7856>Major: Intelligent science and technology</li><li data-v-505a7856>GPA: 4.79/5.0</li><li data-v-505a7856>Rank: 1/114</li></ul></div></div><div class="xp-item" data-v-505a7856><div class="xp-job" data-v-505a7856> Zhejiang University </div><span data-v-505a7856>Master</span><div class="xp-date" style="float:right;font-weight:400;" data-v-505a7856>Pre-admission for Recommended Exemption</div><div class="xp-detail" data-v-505a7856><ul data-v-505a7856><li data-v-505a7856>Major: Artificial intellegence</li></ul></div></div></div></section><section class="resume__section resume__experience" data-v-505a7856><div class="resume__content" data-v-505a7856><div class="resume__section-title" data-v-505a7856><i class="fa fa-briefcase" data-v-505a7856></i><h2 data-v-505a7856>Researches</h2></div><div class="xp-item" data-v-505a7856><div class="xp-job" data-v-505a7856> Interactive Fusion and Correlation Network for Three-Modal Images Few-Shot Semantic Segmentation </div><div class="xp-detail" data-v-505a7856><b data-v-505a7856>Haolan He</b>; Xianguo Dong; Xiaofei Zhou; Bo Wang; Jiyong Zhang; <ul data-v-505a7856><li data-v-505a7856> Published in IEEE Signal Processing Letters, 2024 [<a href="https://ieeexplore.ieee.org/document/10669915/authors#authors" data-v-505a7856>Paper</a>] [<a href="https://github.com/BLUE-coconut/Fewshot-VDT" data-v-505a7856>Code</a>] </li></ul></div></div><div class="xp-item" data-v-505a7856><div class="xp-job" data-v-505a7856> Efficient Object Detection Based on Multimodal Remote Sensing Images <small data-v-505a7856>, &quot;Xinmiao&quot; Talents Plan of Zhejiang Province</small></div><div class="xp-detail" data-v-505a7856><b data-v-505a7856>Project Leader</b><div class="xp-date" style="float:right;font-weight:400;" data-v-505a7856>ongoing</div></div></div></div></section><section class="resume__section resume__experience" data-v-505a7856><div class="resume__content" data-v-505a7856><div class="resume__section-title" data-v-505a7856><i class="fa fa-trophy" data-v-505a7856></i><h2 data-v-505a7856>Scholarships &amp; Awards</h2></div><div class="xp-item" data-v-505a7856><ul data-v-505a7856><li class="list-item" data-v-505a7856> National Scholarships, <span class="date" data-v-505a7856>2024</span></li><li class="list-item" data-v-505a7856> Zhejiang Provincial Government Scholarship, <span class="date" data-v-505a7856>2023</span></li><li class="list-item" data-v-505a7856> Zhejiang Provincial Government Scholarship, <span class="date" data-v-505a7856>2022</span></li><li class="list-item" data-v-505a7856> Outstanding Individual of the 19th Asian Games, <span class="date" data-v-505a7856>2024</span></li></ul></div></div></section></div><div class="resume__side" data-v-505a7856><section class="resume__section resume__skills" data-v-505a7856><div class="resume__content" data-v-505a7856><div class="resume__section-title" data-v-505a7856><i class="fa fa-align-center" data-v-505a7856></i><h2 data-v-505a7856>Skills</h2></div><div class="resume__text" data-v-505a7856><div class="extra" data-v-505a7856><div class="extra-info" data-v-505a7856>Python</div><div class="extra-details" data-v-505a7856><div class="extra-details__progress" style="width:95%;" data-v-505a7856></div></div></div><div class="extra" data-v-505a7856><div class="extra-info" data-v-505a7856>Deeplearning<br data-v-505a7856><small data-v-505a7856>ML · DL · CV · NLP</small></div><div class="extra-details" data-v-505a7856><div class="extra-details__progress" style="width:80%;" data-v-505a7856></div></div></div><div class="extra" data-v-505a7856><div class="extra-info" data-v-505a7856>AI framework<br data-v-505a7856><small data-v-505a7856>Pytorch · Tensflow · Mindspore · Paddle</small></div><div class="extra-details" data-v-505a7856><div class="extra-details__progress" style="width:75%;" data-v-505a7856></div></div></div><div class="extra" data-v-505a7856><div class="extra-info" data-v-505a7856>HTML</div><div class="extra-details" data-v-505a7856><div class="extra-details__progress" style="width:90%;" data-v-505a7856></div></div></div><div class="extra" data-v-505a7856><div class="extra-info" data-v-505a7856>CSS</div><div class="extra-details" data-v-505a7856><div class="extra-details__progress" style="width:75%;" data-v-505a7856></div></div></div><div class="extra" data-v-505a7856><div class="extra-info" data-v-505a7856>JavaScript<br data-v-505a7856><small data-v-505a7856>React · Vue</small></div><div class="extra-details" data-v-505a7856><div class="extra-details__progress" style="width:50%;" data-v-505a7856></div></div></div><div class="extra" data-v-505a7856><div class="extra-info" data-v-505a7856>IOS Development</div><div class="extra-details" data-v-505a7856><div class="extra-details__progress" style="width:15%;" data-v-505a7856></div></div></div></div></div></section><section class="resume__section resume__languages" data-v-505a7856><div class="resume__content" data-v-505a7856><div class="resume__section-title" data-v-505a7856><i class="fa fa-globe" data-v-505a7856></i><h2 data-v-505a7856>Languages</h2></div><div class="extra" data-v-505a7856><div class="extra-info" data-v-505a7856>Chinese <small data-v-505a7856>(native)</small></div><div class="extra-details" data-v-505a7856><div class="extra-details__progress" style="width:100%;" data-v-505a7856></div></div></div><div class="extra" data-v-505a7856><div class="extra-info" data-v-505a7856>English <small data-v-505a7856>(IELTS 7.5)</small></div><div class="extra-details" data-v-505a7856><div class="extra-details__progress" style="width:80%;" data-v-505a7856></div></div></div></div></section></div></div></div></div>',1)]))}const sd=Rt(od,[["render",rd],["__scopeId","data-v-505a7856"]]),os=[{id:"ai-app",name:"AI 应用干货",icon:"✨",color:"#3498db",order:1,description:"Claude Code 高阶技巧、Agent Team 实操与日常 AI 提效记录"},{id:"llm-agent",name:"LLM & Agent",icon:"🧠",color:"#9b59b6",order:2,description:"RAG、MCP、KV Cache、Harness 等大模型与 Agent 底层原理"},{id:"rl",name:"强化学习",icon:"🎯",color:"#16a085",order:3,description:"MDP、策略分类、马尔可夫过程等强化学习核心概念"},{id:"dev-basics",name:"各类开发&计算机基础",icon:"💻",color:"#e67e22",order:4,description:"Dart、Flutter、Unity XR 等工程实践笔记"},{id:"english",name:"英语学习",icon:"📚",color:"#e74c3c",order:5,description:"雅思备考经验与英语学习方法论"}],Te=[{id:"claude-code-tips",categoryId:"ai-app",title:"Claude Code 高阶实用技巧",description:"/rewind、/rename、/statusline、/compact、/stats 等 6 个让 Claude Code 日常体验明显提升的高阶技巧。",coverImage:"/images/blog/claude-code-tips.png",updateTime:"2026-06-29",readTime:"12 min",tags:["Claude Code","AI 提效","工作流"],htmlPath:"./ai-app/claude-code-tips.html"},{id:"agent-team",categoryId:"ai-app",title:"Agent Team 使用实录",description:"OpenClaw SubAgent、Claude Agent Team、claude-code-bridge 三种多 Agent 协作方案实操对比。",coverImage:"/images/blog/agent-team.png",updateTime:"2026-03-08",readTime:"15 min",tags:["SubAgent","Agent Team","ccb"],htmlPath:"./ai-app/agent-team.html"},{id:"rag-concepts",categoryId:"llm-agent",title:"RAG 基本概念",description:"RAG 理论、数据爬取与预处理、向量存储与检索、RAG 链构造与测试优化的完整笔记。",coverImage:"/images/blog/rag-concepts.png",updateTime:"2025-09-20",readTime:"25 min",tags:["RAG","Embedding","向量检索"],htmlPath:"./llm-agent/rag-concepts.html"},{id:"mcp-cli-skill-plugin",categoryId:"llm-agent",title:"MCP & CLI & Skill & Plugin 概念原理辨析",description:"Claude Code 能力组合的四种机制：MCP、CLI、Skill、Plugin 的概念、原理与对比。",coverImage:"/images/blog/mcpcliskillplugin.png",updateTime:"2026-04-15",readTime:"18 min",tags:["MCP","Skill","Plugin"],htmlPath:"./llm-agent/mcp-cli-skill-plugin.html"},{id:"kv-cache",categoryId:"llm-agent",title:"缓存命中率 & KV Cache",description:"KV Cache（机制层）、Prefix Cache（工程层）、缓存命中率（指标层）三个层次的概念辨析。",coverImage:"/images/blog/kvcache.jpg",updateTime:"2026-05-15",readTime:"22 min",tags:["KV Cache","Prefix Cache","成本优化"],htmlPath:"./llm-agent/kv-cache.html"},{id:"harness-intro",categoryId:"llm-agent",title:"Harness 导论：从 LLM 到 Agent Harness",description:"从 Prompt Engineering 到 Context Engineering 再到 Harness Engineering 的方法论演进。",coverImage:"/images/blog/Harness.png",updateTime:"2026-02-20",readTime:"20 min",tags:["Harness","Agent","工程化"],htmlPath:"./llm-agent/harness-intro.html"},{id:"rl-basics",categoryId:"rl",title:"强化学习基础概念与分类",description:"强化学习定义、智能体要素、与监督学习的区别，以及 Model-Free / On-Policy / Policy-Based 等分类。",coverImage:"/images/blog/RL.png",updateTime:"2025-09-28",readTime:"18 min",tags:["MDP","策略","价值函数"],htmlPath:"./reinforcement-learning/rl-basics.html"},{id:"markov-process",categoryId:"rl",title:"马尔可夫过程",description:"从马尔可夫性到马尔可夫链、奖励过程，再到马尔可夫决策过程（MDP）的完整数学框架。",coverImage:"/images/blog/markov-process.png",updateTime:"2025-09-30",readTime:"16 min",tags:["MDP","Bellman","价值函数"],htmlPath:"./reinforcement-learning/markov-process.html"},{id:"dart",categoryId:"dev-basics",title:"Dart 语言核心要点",description:"Dart 变量定义（var / dynamic / final / const）、异步编程（Future / async / await）的核心要点。",coverImage:"/images/blog/Dart.jpg",updateTime:"2025-08-18",readTime:"15 min",tags:["Dart","异步编程","Flutter"],htmlPath:"./dev-basics/dart.html"},{id:"flutter",categoryId:"dev-basics",title:"Flutter 跨平台开发笔记",description:"Widget 四棵树、状态管理、路由管理、Key 原理、Provider 状态共享等 Flutter 核心模块。",coverImage:"/images/blog/Flutter.png",updateTime:"2025-08-25",readTime:"22 min",tags:["Flutter","Widget","Provider"],htmlPath:"./dev-basics/flutter.html"},{id:"unity-xr",categoryId:"dev-basics",title:"Unity XR 开发笔记",description:"XRI（XR Interaction Toolkit）、Input System、物理模拟的 Unity XR 开发核心模块笔记。",coverImage:"/images/blog/unity-xr.png",updateTime:"2025-04-25",readTime:"15 min",tags:["Unity","OpenXR","XRI"],htmlPath:"./dev-basics/unity-xr.html"},{id:"ielts",categoryId:"english",title:"雅思备考经验分享",description:"听力、阅读、写作、口语四科的备考方法与应试技巧总结。",coverImage:"/images/blog/IELTS.jpg",updateTime:"2023-04-25",readTime:"12 min",tags:["IELTS","English","备考"],htmlPath:"./english/ielts.html"}];function Ue(t){return os.find(n=>n.id===t)}function is(t){return Te.filter(n=>n.categoryId===t).sort((n,e)=>e.updateTime.localeCompare(n.updateTime))}function ld(t,n){const e=is(t),o=e.findIndex(i=>i.id===n);return{prev:o>0?e[o-1]:null,next:o>=0&&o<e.length-1?e[o+1]:null}}const ad={class:"post-card__cover"},cd=["src","alt"],dd={key:1,class:"post-card__placeholder"},ud={class:"post-card__meta"},pd={key:0,class:"post-card__category"},gd={class:"post-card__date"},fd={class:"post-card__readtime"},hd={class:"post-card__title"},md={key:0,class:"post-card__desc"},bd=xt({__name:"BlogCard",props:{post:{}},setup(t){const n=t,e=Bo(),o=lt(()=>Ue(n.post.categoryId));function i(){e.push(`/blog/${n.post.categoryId}/${n.post.id}`)}return(r,s)=>(F(),B("article",{class:"post-card",onClick:i},[y("div",ad,[r.post.coverImage?(F(),B("img",{key:0,src:r.post.coverImage,alt:r.post.title,loading:"lazy"},null,8,cd)):(F(),B("div",dd,s[0]||(s[0]=[y("span",{class:"post-card__placeholder-text"},"No Cover",-1)])))]),y("div",ud,[o.value?(F(),B("span",pd,nt(o.value.name),1)):mt("",!0),s[2]||(s[2]=y("span",{class:"post-card__sep"},"·",-1)),y("time",gd,nt(r.post.updateTime),1),r.post.readTime?(F(),B(ct,{key:1},[s[1]||(s[1]=y("span",{class:"post-card__sep"},"·",-1)),y("span",fd,nt(r.post.readTime),1)],64)):mt("",!0)]),y("h3",hd,nt(r.post.title),1),r.post.description?(F(),B("p",md,nt(r.post.description),1)):mt("",!0)]))}}),rs=Rt(bd,[["__scopeId","data-v-172559d9"]]),vd={class:"my-box"},_d={class:"container"},xd={class:"hero"},yd={class:"hero__subtitle"},wd={class:"topics","aria-label":"Topics"},Cd={class:"latest"},Sd={class:"latest__grid"},kd=xt({__name:"BlogView",setup(t){const n=lt(()=>[...os].sort((i,r)=>i.order-r.order)),e=lt(()=>[...Te].sort((i,r)=>r.updateTime.localeCompare(i.updateTime))),o=lt(()=>`${e.value.length} selected writings on AI, LLM, Reinforcement Learning, development, and English learning.`);return(i,r)=>{const s=Rn("router-link");return F(),B("div",vd,[y("div",_d,[y("header",xd,[r[0]||(r[0]=y("h1",{class:"hero__title"},"Blogs",-1)),y("p",yd,nt(o.value),1)]),y("nav",wd,[X(s,{to:"/blog",class:"topics__item topics__item--active"},{default:ht(()=>r[1]||(r[1]=[Pt(" All ",-1)])),_:1,__:[1]}),r[2]||(r[2]=y("span",{class:"topics__sep","aria-hidden":"true"},"·",-1)),(F(!0),B(ct,null,An(n.value,l=>(F(),Xt(s,{key:l.id,to:`/blog/${l.id}`,class:"topics__item"},{default:ht(()=>[Pt(nt(l.name),1)]),_:2},1032,["to"]))),128))]),r[4]||(r[4]=y("hr",{class:"divider"},null,-1)),y("section",Cd,[r[3]||(r[3]=y("h2",{class:"latest__heading"},"Latest",-1)),y("div",Sd,[(F(!0),B(ct,null,An(e.value,l=>(F(),Xt(rs,{key:l.id,post:l},null,8,["post"]))),128))])])])])}}}),Ad=Rt(kd,[["__scopeId","data-v-aae09b52"]]),Pd={class:"my-box"},Rd={class:"container"},Md={class:"back-nav","aria-label":"Breadcrumb"},Td={key:0,class:"section"},Id={class:"hero"},Ed={class:"hero__title"},Ld={key:0,class:"hero__subtitle"},Od={class:"hero__meta"},Fd={key:0,class:"latest__grid"},zd={key:1,class:"empty"},Dd={key:1,class:"section"},Hd={class:"not-found"},$d=xt({__name:"BlogCategoryView",props:{categoryId:{}},setup(t){const n=t,e=lt(()=>Ue(n.categoryId)),o=lt(()=>is(n.categoryId));return(i,r)=>{const s=Rn("router-link");return F(),B("div",Pd,[y("div",Rd,[y("nav",Md,[X(s,{to:"/blog",class:"back-nav__link"},{default:ht(()=>r[0]||(r[0]=[y("span",{class:"back-nav__arrow"},"←",-1),y("span",null,"All topics",-1)])),_:1,__:[0]})]),e.value?(F(),B("section",Td,[y("header",Id,[y("h1",Ed,nt(e.value.name),1),e.value.description?(F(),B("p",Ld,nt(e.value.description),1)):mt("",!0),y("p",Od,nt(o.value.length)+" article"+nt(o.value.length===1?"":"s"),1)]),r[2]||(r[2]=y("hr",{class:"divider"},null,-1)),o.value.length>0?(F(),B("div",Fd,[(F(!0),B(ct,null,An(o.value,l=>(F(),Xt(rs,{key:l.id,post:l},null,8,["post"]))),128))])):(F(),B("div",zd,r[1]||(r[1]=[y("p",null,"该分类下暂无文章。",-1)])))])):(F(),B("section",Dd,[y("div",Hd,[r[4]||(r[4]=y("h1",{class:"not-found__title"},"Topic not found",-1)),X(s,{to:"/blog",class:"not-found__link"},{default:ht(()=>r[3]||(r[3]=[Pt(" Back to blogs → ",-1)])),_:1,__:[3]})])]))])])}}}),Bd=Rt($d,[["__scopeId","data-v-fc6867be"]]),jd=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agent Team 使用实录</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; line-height: 1.3; }
    h2 {
      font-size: 26px; font-weight: 700;
      margin: 48px 0 16px;
      padding-left: 14px;
      border-left: 4px solid #3498db;
      scroll-margin-top: 24px;
    }
    h3 {
      font-size: 20px; font-weight: 600;
      margin: 32px 0 12px;
      color: #2c3e50;
      scroll-margin-top: 24px;
    }
    p { margin: 16px 0; }
    a { color: #3498db; }
    code {
      background: rgba(52, 152, 219, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
      color: #2980b9;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre {
      background: #1e293b; color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 14px; line-height: 1.6;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre code { background: none; color: inherit; padding: 0; font-size: 13px; }
    blockquote {
      border-left: 3px solid #3498db;
      padding: 8px 16px;
      margin: 20px 0;
      color: #7f8c8d;
      background: #f8fafc;
      border-radius: 0 8px 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
    }
    th, td {
      border: 1px solid #e5e5e5;
      padding: 8px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #fafafa;
      font-weight: 600;
    }
    ul, ol { padding-left: 1.6em; margin: 16px 0; }
    li { margin: 4px 0; }
    .lead {
      font-size: 17px;
      color: #7f8c8d;
      margin-bottom: 28px;
    }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">
      本文是我近一段时间对 SubAgent、Claude Agent Team、claude-code-bridge 三种「多 Agent 协作」方案的实操记录与总结，
      包含各类 AI CLI 的使用经验、MEMORY.md 配置范式，以及一些踩坑后的建议。
    </p>

    <h2 id="openclaw-subagent">一、OpenClaw SubAgent</h2>
    <p>
      闲暇之余我也开始养龙虾。最让人难受的是，<strong>小龙虾遇到复杂问题时，往往要干等很久才收到回复</strong>。
      针对这个问题这两天我进行了一些探索，最终探出一套<strong>简单好用的方法——使用 SubAgent</strong>。
    </p>
    <img src="/images/blog/feishu/Mrb3b2QP7ogivnxd0a4cPowSnuf.png" alt="OpenClaw 主 Agent 阻塞问题示例">
    <img src="/images/blog/feishu/HMcBbsWExof5ZaxLTOEcrXG2nof.png" alt="OpenClaw SubAgent 分发任务示例">
    <p>
      在复杂任务中，OpenClaw 长时间不回复的根因是 OpenClaw <strong>主 Agent</strong> 在复杂任务中自行进行检索、指令运行、文件编写等工作的时候，
      默认的设置是它得到检索或者运行结论后才会进行消息回复，而<strong>在此过程中它忙于处理手头上的检索或者运行任务，是处于「阻塞」的状态</strong>，
      即使你跟他发送新消息也无法回复。
    </p>
    <p>
      所以解决复杂任务长时间不回复的关键在于<strong>把检索、指令运行、文件编写等这些具体的执行任务下发给 SubAgent</strong>，
      主 Agent 只需接受信息进行规划并下发任务即可，<strong>在 SubAgent 执行任务的过程中，主 Agent 还可以继续向你汇报进度以及回复你的问题</strong>。
    </p>
    <p>
      此外，我还做了一些流程上的优化，要求它<strong>先分辨是简单提问还是复杂任务</strong>。若为复杂任务，
      则需要<strong>先进行实施规划（包括拆分子任务）并征求我的意见</strong>，当我批准后<strong>将任务分配给 SubAgent</strong>，
      并且在「开始」、「任务过程中（有阶段性成果或者达到设定的时间间隔）」、「完成」时<strong>向我汇报任务进展</strong>。
    </p>
    <blockquote>
      <p>需要实现上述功能，只需将规则梳理好<strong>写到 OpenClaw 的 MEMORY.md 文档中</strong>作为它的长期记忆即可，非常简单。</p>
    </blockquote>

    <h2 id="claude-agent-team">二、Claude Agent Team</h2>
    <p>
      Claude 团队在今年年初发布的一款实验产品——Claude Agent Team，当时技术圈讨论的很多，尤其是它的架构想法很不错。
    </p>
    <img src="/images/blog/feishu/L5bbbLb0Fo3ScAxJ9a0cdKGDnNd.png" alt="Claude Agent Team 架构示意图">
    <p>
      简而言之，原本 SubAgent 的架构，<strong>所有 SubAgent 只能和 main agent 通讯</strong>，
      相当于几个干活的员工只跟上级汇报，员工之间无法沟通。而新的 Agent Team 则是把 SubAgent 升级成 teammate，
      它们不再只是各自干活，<strong>teammate agent 之间也能相互交流，并且共享一个 task list</strong>。
    </p>
    <p>
      我在过年放假时，就尝试配置和使用。<strong>总体来说，我觉得架构想法很好，但还有待优化。</strong>
    </p>
    <p>
      主要原因是 Claude Agent Team 暂时没提供不同模型配置的功能（可能最近有三方工具支持，我没留意），
      这导致如果使用 Claude 模型，效果是很棒，但花费也会很高，不太划算。为了节省成本，使用国产模型则效果不尽人意，
      这种 teamwork 的模式反而加重了上下文的复杂度，整个 Agent Team 协作得很乱，需要设定 Rule 进行约束。
    </p>

    <h2 id="ccb">三、Tmux + claude-code-bridge</h2>
    <p>
      在 GitHub 上有个很不错的开源工具 <a href="#">claude-code-bridge</a>（简称 ccb），
      让 Claude Code 能够调用 Codex、Gemini、OpenCode 等进行分工开发。
      相比 Claude Agent Team 它的缺点是 main agent 目前只能是 Claude（即只能 Claude 单向询问/请求其他 CLI），
      且其他 CLI 之间无法通讯（类似 SubAgent 那套方式），但好处在于不同 CLI 里配置不同模型进行开发，可以博采众长。
    </p>

    <h3 id="ccb-experience">我对于各 AI CLI 的使用经验如下：</h3>
    <img src="/images/blog/feishu/DCG5b6sjWoobkBx57mXcRGaonYc.png" alt="claude-code-bridge 协作示意">
    <ul>
      <li><strong>Codex</strong> 擅长分析，我一般用作<strong>代码审查和方案规划与分工</strong></li>
      <li><strong>Gemini</strong> 擅长<strong>前端开发</strong>，负责复杂的前端 UI 优化问题</li>
      <li>一般开发任务，<strong>优先</strong>使用 OpenCode 中接入<strong>MiniMax</strong>（性价比高，降低整体开销）</li>
      <li><strong>Claude</strong> 开发能力全面，适合解决复杂问题，作为<strong>兜底</strong>。当上述模型解决不了时，进行<strong>问题分析和修复</strong></li>
      <li>在完成一项重大修改或者遇到难以解决的问题时，可以要求各 AI CLI 都全面分析整个项目，针对存在的问题现象给出原因分析和解决方案，整合各 CLI 的分析进行下一步规划</li>
    </ul>

    <h2 id="recommendations">四、其他建议</h2>

    <h3 id="recommendations-models">1) 关于 coding 模型的推荐</h3>
    <ul>
      <li>我认为目前最好用且较耐用的是 Codex，可以找朋友两个人一起开个 Business 会员。最近开始限制用量了，略微有点不够用。我最近用的比较狠，差不多两三个项目同步开发在用，以及 OpenClaw 主模型也是接的 Codex，一周的配额差不多 6 天用完了。</li>
      <li>Claude 会员不建议自己开，封号风险较大。最好是找国内中转平台购买 token，没啥缺点就是烧钱。</li>
      <li>Gemini 可以某鱼买个一年学生号，先用着，Gemini 在前端类的开发中跟前两者差不多，但有些后端或者复杂架构、性能的问题它解决不了。</li>
      <li>国产模型里面我用的比较多 MiniMax，在我的开发场景（Python、Flutter、Web 应用）中整体表现不错，速度也快，个人觉得是国内性价比 Top2 以内吧。</li>
    </ul>

    <h3 id="recommendations-openclaw">2) 关于 OpenClaw 的使用</h3>
    <p>
      因为没个人主机，我是部署在腾讯云服务器上，之前搞活动服务器一年才 79¥。
    </p>
    <p>
      我的配置是主模型用 OpenAI-Codex（要配置 proxy），SubAgent 使用 MiniMax（也可以选用其他模型），
      需要注意 SubAgent 的并发数，建议同时并行不超过 3 个同一 Provider 的 SubAgent（也在 MEMORY.md 规则里进行约束），
      否则容易触发限流，导致 OpenClaw 的 cooldown（不是模型服务商的问题，而是 OpenClaw 设定的机制）。
    </p>

    <h3 id="memory-md">3) MEMORY.md 范式</h3>
    <p>我在 AGENTS.md 中的设定如下：</p>
    <pre><code># MEMORY.md - Your LongTerm Memory

## Main Rules

Before doing anything in Main Session (direct chat with your human):

1. First determine whether the task is **simple** or **complex** based on the rules in **Scope of Application**.
   - **Complex tasks** are long-running, exploratory, or multi-step.
   - **Simple tasks** can be completed quickly and safely in the main session.

2. Always provide an **opening report before execution**, including the objective, approach, task breakdown, risks, and acceptance criteria.
   - For complex tasks, wait for user confirmation before starting.

3. Use **sub-agent-first orchestration** for any complex task, including search/research, local tool execution, development/coding/debugging, environment setup, build/run/deploy, and other multi-step workflows.
   - Only handle tasks directly in the main session when they are simple and can finish quickly.
   - The main agent is responsible for requirement clarification, task decomposition, quality control, progress reporting, and final delivery.

4. Decompose complex work into **independent subtasks** that do not interfere with each other (for example, no overlapping file changes and no conflicting dependencies).
   - Use clear task definitions with **goal, constraints, and verifiable acceptance criteria**.
   - During execution, provide progress updates at **start**, **milestone**, and **completion**.
   - For long tasks, report periodically based on sub-agent status (roughly every 2-3 minutes or on major state changes), instead of waiting until everything is finished.

5. Prefer **MiniMax** by default for routine development, small changes, and stable implementation.
   - Escalate to **OpenAI Codex** only when MiniMax cannot solve the issue, or when the task involves complex errors, architectural conflicts, or system/environment dependency problems.
   - At any given time, run no more than **1 Codex sub-agent** and no more than **3 MiniMax sub-agents** in parallel.

6. Do not perform potentially risky actions without explicit user approval.
   - This includes installing or uninstalling software, changing environment configuration, deleting files, committing code, pushing changes, or any other external or destructive action.
   - By default, first show the proposed changes or plan, then wait for approval before executing.

7. When handling a complicated task, find and use relevant skills in \`skills\` whenever applicable.

---

## Scope of Application

The following should generally be treated as **complex tasks** and executed through sub-agents with staged reporting:

- **Search and research tasks**: web research, solution comparison, technical evaluation, document reading and summarization
- **Local tool execution tasks**: multi-command troubleshooting, environment inspection, log analysis, script-based batch processing
- **Development tasks**: coding, refactoring, debugging, testing, code review, PR preparation
- **Engineering execution tasks**: installation, configuration, build, startup, deployment, integration, regression validation
- **Other complex tasks**: any task expected to take more than 2 minutes or involve 3 or more major steps

Only tasks that are **simple and can be completed quickly** may be handled directly by the main agent.

---

## Reporting Format

Every progress update should follow this format:

- **Status**: running / blocked / done
- **Completed**: 1-3 completed items
- **Current**: what is being worked on now
- **ETA**: estimated remaining time
- **SubAgent**: basic information about the sub-agent, including which model is being used
- **Need you**: only fill this in when a user decision is required</code></pre>

    <h2 id="summary">小结</h2>
    <p>
      三种 Agent 协作方案各有取舍：
    </p>
    <table>
      <thead>
        <tr><th>方案</th><th>优势</th><th>劣势</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>SubAgent</td>
          <td>架构简单，MEMORY.md 即可配置，资源开销低</td>
          <td>SubAgent 之间无法通信，全部依赖主 Agent 中转</td>
        </tr>
        <tr>
          <td>Claude Agent Team</td>
          <td>teammate 共享 task list、可互通讯</td>
          <td>模型选择受限于 Claude，成本高；国产模型协作混乱</td>
        </tr>
        <tr>
          <td>claude-code-bridge</td>
          <td>可接入不同模型 CLI（Codex / Gemini / OpenCode），按场景分工</td>
          <td>main agent 只能是 Claude，CLI 之间不通讯</td>
        </tr>
      </tbody>
    </table>
    <p>
      综合下来，<strong>个人开发者最实用的是 SubAgent + claude-code-bridge 组合</strong>：
      主 Agent 用 Claude 做规划，子任务按「代码审查→Codex，前端→Gemini，日常开发→MiniMax」分流，
      既兼顾效果又把成本压在可控范围。
    </p>
  </article>
</body>
</html>`,Vd=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Claude Code 高阶实用技巧</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; line-height: 1.3; }
    h2 {
      font-size: 26px; font-weight: 700;
      margin: 48px 0 16px;
      padding-left: 14px;
      border-left: 4px solid #3498db;
      scroll-margin-top: 24px;
    }
    h3 {
      font-size: 20px; font-weight: 600;
      margin: 32px 0 12px;
      color: #2c3e50;
      scroll-margin-top: 24px;
    }
    p { margin: 16px 0; }
    a { color: #3498db; }
    code {
      background: rgba(52, 152, 219, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
      color: #2980b9;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre {
      background: #1e293b; color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 14px; line-height: 1.6;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre code { background: none; color: inherit; padding: 0; }
    blockquote {
      border-left: 3px solid #3498db;
      padding: 8px 16px;
      margin: 20px 0;
      color: #7f8c8d;
      background: #f8fafc;
      border-radius: 0 8px 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
    }
    th, td {
      border: 1px solid #e5e5e5;
      padding: 8px 12px;
      text-align: left;
    }
    th {
      background: #fafafa;
      font-weight: 600;
    }
    ul, ol { padding-left: 1.6em; margin: 16px 0; }
    li { margin: 4px 0; }
    .lead {
      font-size: 17px;
      color: #7f8c8d;
      margin-bottom: 28px;
    }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">
      Claude Code 不只是「写代码的 ChatGPT」——它内置了一套成熟的会话管理、上下文控制、可观测性能力。
      本文整理 6 个让日常体验明显提升的高阶技巧：撤销、重命名、洞察、状态栏、压缩、配额。
    </p>

    <h2 id="rewind">一、撤销对话与代码（/rewind）</h2>
    <p>
      写到一半发现「刚才那个改动方向错了」——以前只能 <code>git checkout</code>，
      现在 Claude Code 自带会话级时光机。
    </p>

    <h3 id="rewind-trigger">触发方式（任选其一）</h3>
    <ul>
      <li>连按两次 <code>Esc</code>（最快）</li>
      <li>输入 <code>/rewind</code>（别名 <code>/checkpoint</code>、<code>/undo</code>）</li>
    </ul>
    <p>
      打开一个可滚动菜单，列出会话中你的每一条消息作为 checkpoint，选中后有四种回退方式：
    </p>
    <table>
      <thead>
        <tr><th>选项</th><th>行为</th></tr>
      </thead>
      <tbody>
        <tr><td>Restore code and conversation</td><td>对话和代码都回到该点</td></tr>
        <tr><td>Restore conversation</td><td>只回退对话，代码保留</td></tr>
        <tr><td>Restore code</td><td>只回退代码，对话保留</td></tr>
        <tr><td>Summarize from here</td><td>从该点起，把后续消息压缩成摘要（保留上文完整）</td></tr>
      </tbody>
    </table>

    <h3 id="rewind-pitfalls">重要陷阱</h3>
    <ul>
      <li>只追踪 Claude 用编辑工具改的文件。<strong>Bash 命令改动的文件（rm、mv、脚本生成）不会被追踪</strong>——这种场景仍要靠 git</li>
      <li>Checkpoint 默认 30 天后自动清理（可在 settings 里改）</li>
      <li>Checkpoint ≠ Git。它是会话内的本地撤销，不是版本控制；离开会话后，git 才是唯一靠谱的历史</li>
    </ul>

    <h2 id="rename">二、会话重命名（/rename）</h2>
    <p>
      默认 session 在 <code>/resume</code> 里只有 UUID 和首条消息预览，多了之后完全分不清谁是谁。
      <code>/rename</code> 命令能够自行定义会话名称，可以将一些重要会话进行标识，方便后续 <code>/resume</code> 时快速找到。
    </p>
    <img src="/images/blog/feishu/XtIDbG0RQoAUMjxkQShc9guHnUf.png" alt="/rename 会话重命名示例">

    <h3 id="rename-usage">用法</h3>
    <pre><code># 会话中
/rename                     # 不带参数：基于内容自动生成
/rename feishu-doc-refactor # 显式指定名字

# 启动时
claude -n "feishu-doc-refactor"
claude --name "feishu-doc-refactor"</code></pre>

    <h3 id="rename-locations">显示位置</h3>
    <ul>
      <li>prompt bar 顶端</li>
      <li><code>/resume</code> 选择器列表（在选择器中按 <code>R</code> 也能快速重命名）</li>
      <li>statusline JSON 字段 <code>session_name</code>（可被自定义状态栏脚本读取）</li>
    </ul>
    <blockquote>
      <p>小技巧：重要的会话记得 <code>/rename</code>，方便后续定位找到要继续的对话。</p>
    </blockquote>

    <h2 id="insights">三、会话洞察（/insights）</h2>
    <p>这是个相对冷门但很有意思的功能：让 Claude 分析你最近的使用习惯。</p>

    <h3 id="insights-trigger">触发</h3>
    <pre><code>/insights</code></pre>

    <h3 id="insights-content">做什么</h3>
    <p>
      扫描本地最近 30 天的会话历史，生成一份<strong>交互式 HTML 报告</strong>，
      会放在 <code>~/.claude/usage-data/report.html</code>（若没有自动跳转，可手动打开），自动在浏览器打开。
      报告内容大致有：
    </p>
    <ul>
      <li>你最常处理的项目区域</li>
      <li>高频交互模式</li>
      <li>「摩擦点」——比如某类指令反复需要 3-5 轮纠正才能达到目的</li>
      <li>建议：把重复出现的指令沉淀进 CLAUDE.md</li>
    </ul>
    <img src="/images/blog/feishu/DCnWbczxOoWIdDxWeTgcEjyOn8c.png" alt="/insights 报告示例">
    <blockquote>
      <p>纯本地处理，不上传任何数据。每月/每季度回顾一次，能发现自己没意识到的习惯，进而沉淀成 CLAUDE.md 或 skills。</p>
    </blockquote>

    <h2 id="statusline">四、自定义状态栏（/statusline）</h2>
    <p>
      可自定义终端对话输入框下方的状态栏所陈列的信息，例如 token 用量、当前模型、上下文用量等。
    </p>

    <h3 id="statusline-quick">最快配置：自然语言让 Claude Code 自行生成</h3>
    <pre><code>/statusline show model name, context usage percentage, git branch, and total cost</code></pre>
    <p>Claude 会自动写一个脚本并更新 <code>~/.claude/settings.json</code>。</p>

    <h3 id="statusline-manual">手动配置</h3>
    <p>在 <code>~/.claude/settings.json</code> 里加：</p>
    <pre><code>{
  "statusLine": {
    "type": "command",
    "command": "~/.claude/statusline.sh",
    "padding": 2,
    "refreshInterval": 5
  }
}</code></pre>

    <h3 id="statusline-fields">脚本能拿到的关键 JSON 字段</h3>
    <table>
      <thead>
        <tr><th>字段</th><th>含义</th></tr>
      </thead>
      <tbody>
        <tr><td><code>model.display_name</code></td><td>当前模型名</td></tr>
        <tr><td><code>cwd</code> / <code>workspace.project_dir</code></td><td>当前目录</td></tr>
        <tr><td><code>cost.total_cost_usd</code></td><td>累计花费</td></tr>
        <tr><td><code>context_window.used_percentage</code></td><td>上下文已用百分比（看是否该 /compact 的关键指标）</td></tr>
        <tr><td><code>rate_limits.five_hour.used_percentage</code></td><td>5 小时配额使用率</td></tr>
        <tr><td><code>session_id</code> / <code>session_name</code></td><td>会话 ID 和你 /rename 设置的名字</td></tr>
      </tbody>
    </table>
    <blockquote>
      <p>状态栏脚本会在每条新消息后跑一次，避免里面调慢命令。git 之类的输出建议加缓存。</p>
    </blockquote>

    <h2 id="compact">五、上下文压缩（/compact）</h2>
    <p><code>/compact</code> 和 <code>/clear</code> 经常被混用，但行为完全不同。</p>
    <table>
      <thead>
        <tr><th>命令</th><th>对话历史</th><th>代码改动</th><th>适用场景</th></tr>
      </thead>
      <tbody>
        <tr><td><code>/clear</code></td><td><strong>完全清空</strong>重开</td><td>不动</td><td>任务彻底切换、和当前没有上下文关联</td></tr>
        <tr><td><code>/compact [指令]</code></td><td><strong>压缩成摘要</strong>保留要点</td><td>不动</td><td>同一任务继续做，但上下文已经吃紧</td></tr>
      </tbody>
    </table>

    <h3 id="compact-manual">手动用法</h3>
    <pre><code>/compact 重点保留架构决策和未完成的 TODO，可以丢弃中间调试细节</code></pre>
    <p>带参数会指导摘要的侧重点，不带参数走默认策略。</p>
    <blockquote>
      <p>上下文用到约 <strong>83.5%</strong> 时（剩约 33K tokens 缓冲区）会自动 compact。</p>
    </blockquote>

    <h3 id="compact-best-practice">最佳实践</h3>
    <ul>
      <li>别等自动触发——质量会明显下滑。<strong>养成在 ~60% 主动 /compact 的习惯</strong>（看状态栏百分比）</li>
      <li>关键规则放在 CLAUDE.md，不要只口头告诉 Claude——<code>/compact</code> 后口头指令可能丢失，但 CLAUDE.md 永远在</li>
      <li>单文件过大时频繁 compact 会引发 thrashing，这种情况下 <code>/clear</code> 更干脆</li>
    </ul>

    <h2 id="stats">六、查看用量与配额（/stats）</h2>
    <p><code>/stats</code> 查看 Claude Code 近期活动统计：</p>
    <img src="/images/blog/feishu/BhlGbcItNodRmJx7wfacVjxbnVd.png" alt="/stats 用量统计示例">
    <ul>
      <li><strong>所用对话</strong>累计成本（API 计费用户看 USD 数字；订阅用户看不到具体金额）</li>
      <li><strong>5 小时配额</strong>已用百分比 + 下次重置时间</li>
      <li><strong>7 天配额</strong>已用百分比（订阅用户最重要的指标）</li>
      <li><strong>活动统计</strong>：消息数、各模型的 token 分布、工具调用次数</li>
    </ul>
    <blockquote>
      <p>输入 <code>r</code> 可切换统计的时间段</p>
    </blockquote>

    <h2 id="summary">小结</h2>
    <p>
      Claude Code 的这些「隐形功能」反映出一个核心设计哲学：<strong>把可观测性和可回滚性做进工具本身</strong>。
      习惯使用 <code>/rewind</code>、<code>/rename</code>、<code>/statusline</code>、<code>/compact</code> 这四条之后，
      日常开发的「摩擦成本」会明显降低——尤其是复杂长任务场景。
    </p>
    <p>
      最后，把重复指令沉淀进 CLAUDE.md、每季度跑一次 <code>/insights</code> 复盘自己的工作流，
      是真正能让 Claude Code 从「能用的工具」变成「值得托付的工具」的两个关键习惯。
    </p>
  </article>
</body>
</html>`,Nd=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dart 语言核心要点</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; line-height: 1.3; }
    h2 {
      font-size: 26px; font-weight: 700;
      margin: 48px 0 16px;
      padding-left: 14px;
      border-left: 4px solid #e67e22;
      scroll-margin-top: 24px;
    }
    h3 {
      font-size: 20px; font-weight: 600;
      margin: 32px 0 12px;
      color: #2c3e50;
      scroll-margin-top: 24px;
    }
    h4 {
      font-size: 17px; font-weight: 600;
      margin: 24px 0 8px;
      color: #2c3e50;
    }
    p { margin: 16px 0; }
    a { color: #3498db; }
    code {
      background: rgba(230, 126, 34, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
      color: #af601a;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre {
      background: #1e293b; color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 13px; line-height: 1.65;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
    blockquote {
      border-left: 3px solid #e67e22;
      padding: 8px 16px;
      margin: 20px 0;
      color: #7f8c8d;
      background: #fdf6ee;
      border-radius: 0 8px 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
    }
    th, td {
      border: 1px solid #e5e5e5;
      padding: 8px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #fafafa;
      font-weight: 600;
    }
    ul, ol { padding-left: 1.6em; margin: 16px 0; }
    li { margin: 4px 0; }
    .lead {
      font-size: 17px;
      color: #7f8c8d;
      margin-bottom: 28px;
    }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">
      Dart 是 Flutter 的底层语言。本文整理 Dart 中最易混淆的<strong>变量定义</strong>（var / dynamic / final / const）和<strong>异步编程</strong>（Future / async / await）的核心要点，
      并附带 Flutter 场景下的最佳实践。
    </p>

    <h2 id="variables">一、变量定义</h2>
    <p>Dart 提供了四种变量声明方式：<code>var</code>、<code>dynamic</code>、<code>const</code>、<code>final</code>，关键区分如下：</p>

    <h3 id="var-vs-dynamic">var vs dynamic</h3>
    <p>简单来说，<strong><code>var</code> 是「类型推断」，而 <code>dynamic</code> 是「关闭类型检查」</strong>。</p>

    <h4>var 的使用场景（首选）</h4>
    <p>在绝大多数情况下使用 <code>var</code> 来声明局部变量，前提是你能从赋值中清晰地看出变量的类型。这让代码更简洁，同时保持了类型安全。</p>
    <pre><code>@override
Widget build(BuildContext context) {
  // 类型清晰，使用 var
  var title = 'My Awesome App';
  // title = 123; // 编译时报错

  // 从 Flutter API 获取的对象
  var theme = Theme.of(context);  // 推断为 ThemeData

  var numbers = [10.0, 20.0, 30.0];
  for (var number in numbers) {
    // number 被推断为 double
    print(number.toStringAsFixed(1));
  }

  return Scaffold(
    appBar: AppBar(title: Text(title)),
    body: Container(color: theme.primaryColor),
  );
}</code></pre>

    <h4>dynamic 的使用场景（慎用）</h4>
    <p>只有当你<strong>无法在编译时确定变量的类型</strong>时，才应该使用 <code>dynamic</code>。最常见的场景是处理来自外部的数据，比如 JSON。</p>
    <pre><code>import 'dart:convert';

void processResponse(String jsonString) {
  // 这里使用 Map&lt;String, dynamic&gt; 是更规范的写法
  Map&lt;String, dynamic&gt; decodedJson = json.decode(jsonString);

  // data 的类型不确定，所以它是 dynamic
  dynamic data = decodedJson['data'];

  // 在运行时检查 data 的实际类型
  if (data is String) {
    print('Data is a string: $data');
  } else if (data is List) {
    print('Data is a list with \${data.length} items.');
  }

  // 错误示范：不检查直接当 String 用，可能运行时崩溃
  // print(data.toUpperCase()); // 如果 data 是 List，这里会 Crash!
}</code></pre>

    <h3 id="final-vs-const">final vs const：初始化时机不同</h3>
    <p>这两者都用于声明<strong>不可变变量</strong>，但核心区别在于：<strong><code>const</code> 必须在编译时确定其值，而 <code>final</code> 可以在运行时确定其值</strong>。</p>

    <h4>final 的使用场景</h4>
    <p>当一个变量只会被初始化一次，但它的值需要通过计算或在程序运行时才能得到时，就用 <code>final</code>。</p>
    <pre><code>class UserProfile extends StatelessWidget {
  // name 和 avatarUrl 在创建实例时才确定, 必须用 final
  final String name;
  final String avatarUrl;

  const UserProfile({super.key, required this.name, required this.avatarUrl});

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Text(name),
      CircleAvatar(backgroundImage: NetworkImage(avatarUrl)),
    ]);
  }
}</code></pre>

    <pre><code>class _MyAnimationState extends State&lt;MyAnimation&gt; with SingleTickerProviderStateMixin {
  // controller 在运行时才被初始化,所以用 final
  late final AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: Duration(seconds: 1));
  }
}</code></pre>

    <h4>const 的使用场景</h4>
    <p>当一个值在写代码的时候就已经完全确定，并且永远不会改变时，就用 <code>const</code>。<strong>在 Flutter 中，<code>const</code> 是最重要的性能优化工具之一</strong>。</p>
    <pre><code>class _MyDashboardState extends State&lt;MyDashboard&gt; {
  int _counter = 0;

  void _increment() {
    setState(() { _counter++; });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          // 优化点 1: 常量 Widget —— setState 时 Flutter 会跳过它
          const Text('You have pushed the button:'),

          // 变量 Widget，依赖 _counter
          Text('$_counter'),

          // 优化点 2: 整个复杂 Widget 树都可以是 const
          const FooterWidget(),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _increment,
        // 优化点 3: 图标也是常量
        child: const Icon(Icons.add),
      ),
    );
  }
}</code></pre>

    <h4>总结</h4>
    <ul>
      <li><strong>黄金法则</strong>：尽可能地使用 <code>const</code>。在你的 Flutter 代码中，只要 IDE 提示你可以添加 <code>const</code>（通常会显示蓝色波浪线），就毫不犹豫地加上它。</li>
      <li><strong><code>final</code></strong> 用于那些<strong>在运行时初始化一次</strong>就不再改变的变量（如 Widget 的属性、<code>initState</code> 里的控制器）。</li>
      <li><strong><code>const</code></strong> 用于那些<strong>在编译时就已经完全确定</strong>的值（如颜色、固定文本、边距、图标），是 Flutter 的免费性能优化器。</li>
    </ul>

    <h2 id="async">二、异步编程</h2>
    <p>异步编程是现代编程的基石，尤其在需要网络请求和用户交互的前端/客户端开发中。掌握它不仅是学习语法，更是一种<strong>编程思维的转变</strong>。</p>

    <h3 id="async-stages">Part 1：演进的三个阶段</h3>
    <ol>
      <li><strong>回调函数（Callbacks）</strong>：最早的方式。你发起一个任务，并传递一个函数（回调）给它，告诉它任务完成后该做什么。这会导致「回调地狱（Callback Hell）」，代码难以阅读和维护。</li>
      <li><strong>Promise / Future</strong>：一个巨大的进步。异步任务不再直接接收回调，而是立即返回一个「凭证」对象（在 Dart/Python 中叫 <code>Future</code>，在 JavaScript 中叫 <code>Promise</code>）。它有三种状态：pending、fulfilled/resolved、rejected/rejected。</li>
      <li><strong><code>async / await</code> 语法糖</strong>：现代的终极形态。它本质上是建立在 <code>Promise/Future</code> 之上的语法糖，让你能用<strong>看起来像同步代码的方式去编写异步代码</strong>，从而彻底告别回调地狱。</li>
    </ol>

    <h3 id="async-comparison">Part 2：四大语言横向对比</h3>
    <p>统一的任务：<strong>模拟从服务器获取用户信息</strong>，对比四种语言的实现。</p>

    <h4>Dart（用于 Flutter）</h4>
    <pre><code>// 模拟一个耗时2秒的网络请求
Future&lt;String&gt; fetchUserData() {
  return Future.delayed(Duration(seconds: 2), () {
    return '{"name": "Alice", "id": 1}';
  });
}

// 推荐方式: async / await
Future&lt;void&gt; displayUser() async {
  print('开始获取用户数据...');
  try {
    // await 关键字"暂停"此函数的执行,但不会阻塞整个程序
    String userDataJson = await fetchUserData();
    print('数据获取成功: $userDataJson');
  } catch (e) {
    // 如果 Future 以 error 结束,await 会抛出异常,可以被 try/catch 捕获
    print('捕获到错误: $e');
  }
  print('函数执行完毕。');
}</code></pre>

    <h4>Swift（用于 iOS/macOS）</h4>
    <pre><code>import Foundation

func fetchUserData() async throws -&gt; String {
  try await Task.sleep(nanoseconds: 2_000_000_000) // 2秒
  return "{\\"name\\": \\"Bob\\", \\"id\\": 2}"
}

func displayUser() async {
  print("开始获取用户数据...")
  do {
    let userDataJson = try await fetchUserData()
    print("数据获取成功: \\(userDataJson)")
  } catch {
    print("捕获到错误: \\(error)")
  }
  print("函数执行完毕。")
}</code></pre>

    <h4>JavaScript（用于 Web 前端 / Node.js）</h4>
    <pre><code>function fetchUserData() {
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      resolve('{"name": "Charlie", "id": 3}');
    }, 2000);
  });
}

async function displayUser() {
  console.log('开始获取用户数据...');
  try {
    const userDataJson = await fetchUserData();
    console.log(\`数据获取成功: \${userDataJson}\`);
  } catch (error) {
    console.error(\`捕获到错误: \${error.message}\`);
  }
  console.log('函数执行完毕。');
}</code></pre>

    <h4>Python（用于后端 / 脚本）</h4>
    <pre><code>import asyncio

async def fetch_user_data() -&gt; str:
    print("挂起任务，等待 I/O...")
    await asyncio.sleep(2)
    return '{"name": "David", "id": 4}'

async def display_user():
    print('开始获取用户数据...')
    try:
        user_data_json = await fetch_user_data()
        print(f'数据获取成功: {user_data_json}')
    except Exception as e:
        print(f'捕获到错误: {e}')
    print('函数执行完毕。')

if __name__ == "__main__":
    asyncio.run(display_user())</code></pre>

    <h3 id="async-best">Part 3：最佳实现</h3>
    <p>使用异步编程，只需记住三步：</p>
    <ol>
      <li><strong>识别耗时操作</strong>：任何涉及网络、文件读写、数据库访问、或者需要长时间计算的任务，都应该是异步的。</li>
      <li><strong>封装成 <code>async</code> 函数</strong>：将这些耗时操作封装在一个函数里，并用 <code>async</code>（或 <code>async def</code>）关键字标记它。</li>
      <li><strong>使用 <code>await</code> 调用并处理</strong>：
        <ul>
          <li>它会「暂停」当前函数的执行。</li>
          <li>它会等待「凭证」兑现。</li>
          <li>它会将结果从「凭证」中解包出来。</li>
          <li><strong>最重要的是</strong>：用 <code>try...catch</code> 块把 <code>await</code> 包起来，处理可能发生的错误。</li>
        </ul>
      </li>
    </ol>

    <h2 id="static">三、关于 static 的使用</h2>
    <p>一句精要：<strong>「跟对象实例无关、只跟类本身有关」</strong>的东西就加 <code>static</code>——否则别加。</p>

    <h3 id="static-must">必须加</h3>
    <ol>
      <li><strong>类变量（静态字段）</strong>——变量属于类本身</li>
      <li><strong>类方法（静态方法）</strong>——方法内部不依赖实例字段（<code>this</code>.xxx）</li>
      <li><strong>静态工厂构造函数</strong>——用 <code>factory</code> 返回缓存、单例时</li>
      <li><strong>顶层入口</strong>——放在类里就必须显式 <code>static</code></li>
    </ol>

    <h3 id="static-recommend">推荐加</h3>
    <ol>
      <li>纯工具方法 / 全局帮助函数——比散在顶层更可读</li>
      <li>与实例无关的常量列表 / 映射</li>
    </ol>

    <h3 id="static-never">绝不加</h3>
    <ol>
      <li>实例字段 / 实例方法 / 普通命名构造函数</li>
      <li>重写父类方法（如 <code>toString</code>）</li>
      <li>Widget 生命周期回调（如 <code>build</code> 方法）</li>
    </ol>
  </article>
</body>
</html>`,Kd=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flutter 跨平台开发笔记</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; line-height: 1.3; }
    h2 {
      font-size: 26px; font-weight: 700;
      margin: 48px 0 16px;
      padding-left: 14px;
      border-left: 4px solid #e67e22;
      scroll-margin-top: 24px;
    }
    h3 {
      font-size: 20px; font-weight: 600;
      margin: 32px 0 12px;
      color: #2c3e50;
      scroll-margin-top: 24px;
    }
    h4 {
      font-size: 17px; font-weight: 600;
      margin: 24px 0 8px;
      color: #2c3e50;
    }
    p { margin: 16px 0; }
    a { color: #3498db; }
    code {
      background: rgba(230, 126, 34, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
      color: #af601a;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre {
      background: #1e293b; color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 13px; line-height: 1.65;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
    blockquote {
      border-left: 3px solid #e67e22;
      padding: 8px 16px;
      margin: 20px 0;
      color: #7f8c8d;
      background: #fdf6ee;
      border-radius: 0 8px 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 13.5px;
    }
    th, td {
      border: 1px solid #e5e5e5;
      padding: 8px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #fafafa;
      font-weight: 600;
    }
    ul, ol { padding-left: 1.6em; margin: 16px 0; }
    li { margin: 4px 0; }
    .lead {
      font-size: 17px;
      color: #7f8c8d;
      margin-bottom: 28px;
    }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">
      Flutter 跨端开发的核心要点整理：<strong>Widget 体系与四棵树、状态管理、路由管理、Key 原理、Provider 状态共享</strong>，
      附上常用学习资料链接。
    </p>

    <h2 id="resources">学习资料</h2>
    <ul>
      <li>Flutter 环境配置：<a href="https://blog.csdn.net/z119901214/article/details/95540557">CSDN 配置教程</a></li>
      <li>Flutter 热重载（保存时更新预览）：<a href="https://docs.flutter.cn/tools/hot-reload/">官方文档</a></li>
      <li>Flutter 实战（第二版）：<a href="https://book.flutterchina.club/">在线阅读</a></li>
      <li>Flutter 中文网文档：<a href="https://doc.flutterchina.club/">doc.flutterchina.club</a></li>
      <li>Flutter 官方中文版文档：<a href="https://docs.flutter.cn/">docs.flutter.cn</a></li>
      <li>Material Design 图标：<a href="https://material.io/tools/icons/">material.io/icons</a></li>
    </ul>

    <h2 id="widget">一、Widget 基础</h2>

    <h3 id="four-trees">Flutter 中的四棵树</h3>
    <img src="/images/blog/feishu/Vh2YbJsV1oNDH3xe6FecUAJMn1e.png" alt="Flutter 四棵树：Widget / Element / Render / Layer">
    <ol>
      <li><strong>Widget</strong>：描述 UI 的配置信息</li>
      <li><strong>Element</strong>：根据 Widget 的描述生成真正的实例</li>
      <li><strong>Render</strong>：应用界面的布局和绘制，保存了元素的大小、布局、颜色等信息</li>
      <li><strong>Layer</strong></li>
    </ol>

    <h3 id="widget-classification">Widget 分类</h3>
    <p>在 Flutter 中，widget 用来描述一个 UI 的配置信息（包括内容、布局信息等），是<strong>不可变的</strong>（immutable）。</p>
    <p>Widget 有两类：</p>
    <ul>
      <li><strong>StatelessWidget</strong>：无状态</li>
      <li><strong>StatefulWidget</strong>：有状态。由于 widget 是不可变的，对于有状态的组件，需要引入 <code>state</code> 来描述其布局和内容。可以跟随状态（即变量）进行变化，然后根据该 state 生成 widget，再进行页面更新。</li>
    </ul>
    <blockquote>
      <p>当 widget 发生改变时，会触发框架重建 widget 树。Flutter 会遍历 widget 树中每个节点，逐一比较新的 widget 和原先的 widget：</p>
      <ul>
        <li>如果新老 widget 为同一类型，但配置改变，仅修改对应 RenderObject 的配置</li>
        <li>如果新老 widget 不为同一类型，则将对应的 widget、element、RenderObject 节点从树上移除，并用新的对象替换</li>
      </ul>
    </blockquote>

    <h2 id="state-management">二、状态管理</h2>

    <h3 id="state-management-ways">状态管理方式</h3>
    <ol>
      <li><strong>组件管理自己的状态</strong>：一个组件的颜色、动画等外观属性最好采取这种方式</li>
      <li><strong>由父组件管理状态</strong>：全局的用户信息（例如：表单中复选框的选中状态、滑块的位置）&amp; 有些状态需要几个组件共享使用的情况</li>
      <li><strong>混合管理</strong>：既有自己管理的部分，也有父组件管理的部分</li>
    </ol>

    <h3 id="state-management-impl">状态管理实现</h3>
    <ol>
      <li>管理自身状态：使用 <code>setState()</code> 更新 UI 状态</li>
      <li>管理子组件状态：用<strong>回调函数</strong>。将包含状态更新（即 <code>setState</code>）功能的函数传递给子组件，让子组件在合适的地方调用。</li>
    </ol>

    <h4>关于回调函数</h4>
    <p>除了使用普通的 <code>Function(传参类型)</code> 外，Flutter 中有以下预定义的回调函数类型：</p>
    <table>
      <thead>
        <tr><th>类型（typedef）</th><th>实际签名</th><th>典型场景举例</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>VoidCallback</strong></td><td><code>void Function()</code></td><td>按钮点击、动画完成</td></tr>
        <tr><td><strong>ValueChanged&lt;T&gt;</strong></td><td><code>void Function(T value)</code></td><td>值变化回传（如 <code>Switch.onChanged</code>）</td></tr>
        <tr><td><strong>ValueSetter&lt;T&gt;</strong></td><td><code>void Function(T value)</code></td><td>语义上强调「设置」而非「变化」</td></tr>
        <tr><td><strong>ValueGetter&lt;T&gt;</strong></td><td><code>T Function()</code></td><td>懒取值</td></tr>
        <tr><td><strong>AsyncCallback</strong></td><td><code>Future&lt;void&gt; Function()</code></td><td>异步操作完成回调</td></tr>
        <tr><td><strong>GestureTapCallback</strong></td><td><code>void Function()</code></td><td>点击手势回调</td></tr>
        <tr><td><strong>GestureLongPressCallback</strong></td><td><code>void Function()</code></td><td>长按手势回调</td></tr>
        <tr><td><strong>GestureDragStartCallback</strong></td><td><code>void Function(DragStartDetails)</code></td><td>拖动开始</td></tr>
        <tr><td><strong>GestureDragUpdateCallback</strong></td><td><code>void Function(DragUpdateDetails)</code></td><td>拖动中</td></tr>
        <tr><td><strong>GestureDragEndCallback</strong></td><td><code>void Function(DragEndDetails)</code></td><td>拖动结束</td></tr>
        <tr><td><strong>RouteFactory</strong></td><td><code>Route&lt;dynamic&gt; Function(RouteSettings)</code></td><td>路由生成器</td></tr>
        <tr><td><strong>LocaleChangedCallback</strong></td><td><code>void Function(Locale? locale)</code></td><td>语言切换监听</td></tr>
      </tbody>
    </table>

    <h2 id="routing">三、路由管理</h2>

    <h3 id="route-basic">使用路由跳转页面</h3>
    <ol>
      <li>Navigator 是路由管理组件，提供打开和退出路由的方法：
        <ul>
          <li><code>Navigator.push(context, route)</code>：路由入栈，打开一个新页面，返回值是一个 Future 对象</li>
          <li><code>Navigator.pop(context, [result])</code>：路由出栈，关闭页面</li>
        </ul>
      </li>
      <li><code>MaterialPageRoute</code> 继承自 <code>PageRoute</code>，定义了路由构建及切换时过渡动画的相关接口。能够针对不同平台实现与平台页面切换动画风格一致的过渡：Android 是上下滑动，iOS 是左右滑动。</li>
    </ol>

    <h4>示例</h4>
    <pre><code>class TipRoute extends StatelessWidget {
  TipRoute({Key key, required this.text}) : super(key: key);
  final String text;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("提示")),
      body: Padding(
        padding: EdgeInsets.all(18),
        child: Center(
          child: Column(
            children: &lt;Widget&gt;[
              Text(text),
              ElevatedButton(
                onPressed: () =&gt; Navigator.pop(context, "我是返回值"),
                child: Text("返回"),
              )
            ],
          ),
        ),
      ),
    );
  }
}</code></pre>

    <h3 id="named-route">命名路由</h3>
    <p>注册路由表：</p>
    <pre><code>MaterialApp(
  title: 'Flutter Demo',
  initialRoute: "/",
  theme: ThemeData(primarySwatch: Colors.blue),
  routes: {
    "new_page": (context) =&gt; NewRoute(),
    "/": (context) =&gt; MyHomePage(title: 'Flutter Demo Home Page'),
  }
);</code></pre>

    <p>用路由名打开页面：</p>
    <pre><code>onPressed: () {
  Navigator.pushNamed(context, "new_page");
},</code></pre>

    <h3 id="route-args">路由传参</h3>
    <p>对于命名路由，通过 <code>arguments</code> 传参：</p>
    <pre><code>Navigator.of(context).pushNamed("new_page", arguments: "hi");

class EchoRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 获取路由参数
    var args = ModalRoute.of(context).settings.arguments;
    // ...
  }
}</code></pre>

    <h3 id="route-guard">路由跳转前置处理</h3>
    <p>典型适用场景：访问需要登录的页面，在 <code>onGenerateRoute</code> 中判断并拦截：</p>
    <pre><code>MaterialApp(
  initialRoute: "index",
  onGenerateRoute: myGenerateRoute,
);

String routeBeforeHook(RouteSettings settings) {
  final token = Global.prefs.getString('token') ?? '';
  if (token != '') {
    if (settings.name == 'login') return 'index';
    return settings.name;
  }
  return 'login';
}

Route&lt;dynamic&gt; myGenerateRoute(RouteSettings settings) {
  String routeName = routeBeforeHook(settings);
  return MaterialPageRoute(builder: (context) {
    switch (routeName) {
      case "index": return MyHomePage();
      case "login": return LoginScreen();
      default: return Scaffold(body: Center(child: Text("页面不存在")));
    }
  });
}</code></pre>

    <h2 id="key">四、Key 的原理和用法</h2>

    <h3 id="key-purpose">Key 的作用</h3>
    <p>每个 widget 都有一个 Key，能够解决类似「不同 widget 混淆」的问题。</p>

    <h3 id="key-types">Key 的种类</h3>
    <ul>
      <li><strong>LocalKey（局部键）</strong>：在同一级中（对于 widget）要唯一，可以理解为「同级唯一性」。
        <ul>
          <li><code>ValueKey</code>、<code>ObjectKey</code>、<code>UniqueKey</code></li>
        </ul>
      </li>
      <li><strong>GlobalKey（全局键）</strong>：在整个 App 中必须唯一。即使 widget 树的节点改变，其内容（GlobalKey 定义的变量）不改变。</li>
    </ul>
    <blockquote>
      <p>使用 <code>GlobalKey</code> 不应该在每次 <code>build</code> 的时候重建 <code>GlobalKey</code>，它应该是 State 拥有的长期存在的对象。</p>
    </blockquote>

    <h4>获取对应的 State</h4>
    <pre><code>// 获取当前组件的 count 变量
floatingActionButton: FloatingActionButton(
  onPressed: () {
    print((_globalKey.currentState as _BoxState).count);
  },
  child: Icon(Icons.wifi_protected_setup),
)

// 修改组件的 count 变量
onPressed: () {
  final state = _globalKey.currentState as _BoxState;
  state.setState(() {
    state.count++;
  });
}</code></pre>
    <p><strong>注意</strong>：修改 state 时，记得使用 setState 来触发 UI 的刷新。</p>

    <h4>获取对应的 context（用于获取 widget 的尺寸、位置）</h4>
    <pre><code>final renderBox = _globalKey.currentContext!.findRenderObject() as RenderBox;
renderBox.size;                        // 获取尺寸
renderBox.localToGlobal(Offset.zero);  // 获取位置</code></pre>

    <h4>获取对应的 widget（如颜色等属性）</h4>
    <pre><code>onPressed: () {
  final widget = _globalKey.currentWidget as Box;
  print(widget.color);
}</code></pre>

    <h2 id="provider">五、Provider 库的使用</h2>

    <p>Provider 库用于「<strong>跨页面、跨组件共享 + 会变化</strong>」的场景。</p>

    <h3 id="provider-scenarios">典型场景</h3>
    <ol>
      <li><strong>全局状态 / 会话级</strong>
        <ul>
          <li>用户登录态（AuthProvider）</li>
          <li>主题 / 国际化（ThemeProvider、LocaleProvider）</li>
          <li>环境配置（FlavorProvider、FeatureFlagProvider）</li>
        </ul>
      </li>
      <li><strong>页面级共享</strong>
        <ul>
          <li>购物车（CartProvider）</li>
          <li>筛选条件（FilterProvider）</li>
          <li>分页列表控制器（PagingProvider）</li>
        </ul>
      </li>
      <li><strong>复杂表单 / 多步向导</strong>
        <ul>
          <li>表单数据模型（FormProvider）</li>
          <li>步骤状态机（WizardProvider）</li>
        </ul>
      </li>
      <li><strong>异步一次性数据</strong>
        <ul>
          <li>网络请求结果（FutureProvider）</li>
          <li>WebSocket 消息流（StreamProvider）</li>
        </ul>
      </li>
      <li><strong>需要 dispose 的资源</strong>
        <ul>
          <li>蓝牙连接（BleClient）</li>
          <li>数据库 DAO（AppDatabase）</li>
          <li>计时器 / 动画控制器</li>
        </ul>
      </li>
    </ol>

    <h3 id="provider-usage">三种使用方法</h3>
    <pre><code>// 1. Consumer —— 监听状态变化，自动重建
Consumer&lt;VocabularyProvider&gt;(
  builder: (context, provider, child) {
    return Text('单词数量: \${provider.words.length}');
  },
)

// 2. context.watch —— 简洁的监听方式
Widget build(BuildContext context) {
  final provider = context.watch&lt;VocabularyProvider&gt;();
  return Text('单词数量: \${provider.words.length}');
}

// 3. context.read —— 不监听，只获取实例（用于事件处理）
void _addWord() {
  final provider = context.read&lt;VocabularyProvider&gt;();
  provider.addWord(newWord); // 不会重建当前 Widget
}</code></pre>

    <h2 id="summary">小结</h2>
    <p>
      Flutter 的核心心智模型可以总结为「<strong>声明式 UI + 不可变 Widget + 状态驱动重建</strong>」。
      理解四棵树（Widget / Element / Render / Layer）以及它们之间的对应关系，是理解 Flutter 性能与渲染管线的基础；
      状态管理的关键不在于选择哪种库（<code>setState</code>、<code>Provider</code>、<code>Riverpod</code> 等），而在于「<strong>状态属于谁、由谁负责更新</strong>」的设计划分。
    </p>
  </article>
</body>
</html>`,Ud=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unity XR 开发笔记</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; line-height: 1.3; }
    h2 {
      font-size: 26px; font-weight: 700;
      margin: 48px 0 16px;
      padding-left: 14px;
      border-left: 4px solid #e67e22;
      scroll-margin-top: 24px;
    }
    h3 {
      font-size: 20px; font-weight: 600;
      margin: 32px 0 12px;
      color: #2c3e50;
      scroll-margin-top: 24px;
    }
    h4 {
      font-size: 17px; font-weight: 600;
      margin: 24px 0 8px;
      color: #2c3e50;
    }
    p { margin: 16px 0; }
    a { color: #3498db; }
    code {
      background: rgba(230, 126, 34, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
      color: #af601a;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre {
      background: #1e293b; color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 13px; line-height: 1.65;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
    blockquote {
      border-left: 3px solid #e67e22;
      padding: 8px 16px;
      margin: 20px 0;
      color: #7f8c8d;
      background: #fdf6ee;
      border-radius: 0 8px 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
    }
    th, td {
      border: 1px solid #e5e5e5;
      padding: 8px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #fafafa;
      font-weight: 600;
    }
    ul, ol { padding-left: 1.6em; margin: 16px 0; }
    li { margin: 4px 0; }
    .lead {
      font-size: 17px;
      color: #7f8c8d;
      margin-bottom: 28px;
    }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">
      本文整理 Unity XR 开发中的核心模块：<strong>基本操作、XR Interaction Toolkit（XRI）、Input System、物理模拟</strong>，
      附上常用学习资料链接。
    </p>

    <h2 id="resources">一、学习资料</h2>
    <ul>
      <li>Unity 基本操作学习：<a href="https://www.bilibili.com/video/BV1gQ4y1e7SS">B 站视频链接</a></li>
      <li>HTC 环境配置：<a href="https://www.bilibili.com/video/BV1mS421R7be">B 站视频链接</a></li>
      <li>Vision Pro 开发配置：<a href="https://www.bilibili.com/cheese/play/ep1120469">B 站视频链接</a></li>
      <li>XRI 参考视频：<a href="https://www.bilibili.com/video/BV14pSbYsEPz">B 站视频链接</a></li>
    </ul>

    <h2 id="xri">二、XR Interaction Toolkit（XRI）</h2>

    <h3 id="xr-origin">XR Origin（玩家原点）</h3>
    <p>
      XR Origin 是 XR 场景中<strong>代表玩家的坐标原点</strong>，承载相机、手柄等设备的位置与朝向。
      所有的交互（射线、抓取、传送）都基于 XR Origin 坐标系计算。
    </p>

    <h3 id="input-system-xr">输入系统</h3>
    <p>Unity 推荐使用新的 <strong>Input System Package</strong> 来处理 XR 设备输入：</p>
    <img src="/images/blog/feishu/OCekbz53do0AcIxEHxDcA1OVnec.png" alt="XR Interaction Toolkit 输入系统">
    <ul>
      <li>Unity Input System 使用方法：<a href="https://docs.unity3d.com/Packages/com.unity.inputsystem@1.14/manual/index.html">官方文档</a></li>
      <li>Unity XR 输入设备信息：<a href="https://docs.unity.cn/Manual/xr_input.html">官方文档</a></li>
      <li>Unity VR + XRI 3 输入系统配置：<a href="https://blog.csdn.net/qq_46044366/article/details/132319756">CSDN 博客</a></li>
    </ul>
    <img src="/images/blog/feishu/UlQ5bHl3xoCBAHxDwf6cdgtwnog.png" alt="XR 输入设备绑定示意">
    <img src="/images/blog/feishu/ZLWHbtEKgo4B83x3vX9cgMMinnh.png" alt="XR 控制器按键映射">
    <p>
      在 XR 场景中，常见的输入需求包括：
    </p>
    <ul>
      <li>手柄按钮（Trigger / Grip / Menu）</li>
      <li>手柄摇杆（Thumbstick）</li>
      <li>手柄位姿（Position + Rotation）</li>
      <li>手势识别（Hand Tracking）</li>
    </ul>

    <h3 id="htc-vive">HTC VIVE Basic Input for OpenXR</h3>
    <p>通过 OpenXR 接入 VIVE 头显与手柄，参考：<a href="https://developer.vive.com/resources/openxr/unity/tutorials/basic-input-for-openxr/">HTC VIVE Basic Input for OpenXR</a>。</p>
    <blockquote>
      <p>
        XRI（XR Interaction Toolkit）封装了常见的 XR 交互模式：<strong>近距抓取（Near Grab）、远距射线抓取（Far Ray Grab）、UI 交互、传送（Teleport）</strong>等，
        大幅简化了 XR 应用开发。
      </p>
    </blockquote>

    <h2 id="input-system">三、Input System（输入系统）</h2>

    <h3 id="input-action">Input Action Asset</h3>
    <p>
      建议使用 <strong>Input Action Asset</strong>（.inputactions 文件）来统一管理输入配置，把输入「数据化」：
    </p>
    <ul>
      <li><strong>Action Map</strong>：按场景/角色分组（如 Player、UI）</li>
      <li><strong>Action</strong>：具体的输入动作（如 Jump、Move）</li>
      <li><strong>Binding</strong>：动作到具体输入设备的映射（如键盘 Space、XRI 手柄 Trigger）</li>
    </ul>

    <h3 id="xr-input-types">XR 输入类型</h3>
    <table>
      <thead>
        <tr><th>输入类型</th><th>XR 中的获取方式</th><th>典型用途</th></tr>
      </thead>
      <tbody>
        <tr><td>Vector2</td><td>Thumbstick / Touchpad</td><td>移动、转向</td></tr>
        <tr><td>Button</td><td>Trigger / Grip / Face Button</td><td>抓取、确认、射击</td></tr>
        <tr><td>Pose</td><td>设备位姿 (Position + Rotation)</td><td>射线、手部 IK</td></tr>
        <tr><td>Trigger (float)</td><td>扳机按压程度</td><td>力度交互、握力反馈</td></tr>
      </tbody>
    </table>

    <h2 id="physics">四、Unity 物理模拟</h2>
    <img src="/images/blog/feishu/PyjJbekQnob2tyxnuA9cWpdcn7d.png" alt="Unity 碰撞与触发条件示意图">

    <h3 id="collision-conditions">产生碰撞的条件</h3>
    <ol>
      <li>若要产生碰撞，<strong>双方都要有碰撞器</strong></li>
      <li>运动的一方<strong>一定要有刚体</strong>，另一方有无刚体无所谓</li>
    </ol>
    <blockquote>
      <p>注：如果运动的一方无刚体，它去碰撞静止的刚体，相当于没撞上。</p>
    </blockquote>

    <h3 id="contact-types">接触的两种方式</h3>
    <ol>
      <li><strong>Collision 碰撞</strong>：造成物理碰撞，可以在碰撞时执行 <code>OnCollision</code> 事件</li>
      <li><strong>Trigger 触发</strong>：取消所有的物理碰撞，可以在触发时执行 <code>OnTrigger</code> 事件</li>
    </ol>
    <blockquote>
      <p>注：两个物体接触不可能同时产生碰撞 + 接触，最多产生一种。但是可以 A、B 产生碰撞，A、C 产生触发。</p>
    </blockquote>

    <h3 id="condition-detail">产生不同方式接触的条件</h3>
    <table>
      <thead>
        <tr><th>方式</th><th>条件</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Collision 碰撞</strong></td>
          <td>
            1. 双方都有碰撞体<br>
            2. 运动的一方必须有刚体<br>
            3. 双方不可同时勾选 Kinematic 运动学<br>
            4. 双方都不可勾选 Trigger 触发器
          </td>
        </tr>
        <tr>
          <td><strong>Trigger 触发</strong></td>
          <td>
            1. 双方都有碰撞体<br>
            2. 运动的一方必须是刚体<br>
            3. 至少一方勾选 Trigger 触发器
          </td>
        </tr>
      </tbody>
    </table>

    <p>参考：<a href="https://blog.csdn.net/renatqiang/article/details/47682449">CSDN 博客</a></p>

    <h2 id="xr-tips">五、XR 开发小贴士</h2>
    <ul>
      <li><strong>性能优先</strong>：XR 应用对帧率要求严格（一般要求 90 FPS），场景多边形数、shader 复杂度都要严格控制</li>
      <li><strong>空间音频</strong>：XR 体验强烈依赖空间音频，建议尽早集成 <code>AudioSource</code> 的 Spatial Blend 设置</li>
      <li><strong>舒适度</strong>：避免强制瞬移、避免持续高速运动、避免立体视觉冲突</li>
      <li><strong>输入抽象</strong>：用 Input Action Asset 抽象所有输入，方便跨平台（Quest / Vision Pro / PC VR）切换</li>
    </ul>
  </article>
</body>
</html>`,Gd=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>雅思备考经验分享</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; line-height: 1.3; }
    h2 {
      font-size: 26px; font-weight: 700;
      margin: 48px 0 16px;
      padding-left: 14px;
      border-left: 4px solid #e74c3c;
      scroll-margin-top: 24px;
    }
    h3 {
      font-size: 20px; font-weight: 600;
      margin: 32px 0 12px;
      color: #2c3e50;
      scroll-margin-top: 24px;
    }
    h4 {
      font-size: 17px; font-weight: 600;
      margin: 24px 0 8px;
      color: #2c3e50;
    }
    p { margin: 16px 0; }
    a { color: #3498db; }
    code {
      background: rgba(231, 76, 60, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
      color: #c0392b;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre {
      background: #1e293b; color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 13px; line-height: 1.65;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
    blockquote {
      border-left: 3px solid #e74c3c;
      padding: 8px 16px;
      margin: 20px 0;
      color: #7f8c8d;
      background: #fdf2ef;
      border-radius: 0 8px 8px 0;
    }
    ul, ol { padding-left: 1.6em; margin: 16px 0; }
    li { margin: 4px 0; }
    .lead {
      font-size: 17px;
      color: #7f8c8d;
      margin-bottom: 28px;
    }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">
      分享一些雅思<strong>纸笔考试</strong>的技巧和准备方法，按照考试顺序来讲：听力 → 阅读 → 写作 → 口语。
      本文以经验总结为主，适合「英语基础尚可但需要冲刺 7+」的同学参考。
    </p>

    <h2 id="listening">一、听力（40 题）</h2>

    <h3 id="listening-sense">1. 听感反应：需日常积累</h3>
    <ul>
      <li>推荐王陆的《<strong>雅思王听力</strong>》，跟着音频进行默写，训练听到词语的快速反应，并且能够巩固单词拼写。内容很多，都是以前雅思听力真题出现的单词，可以有针对性地练。比如：对英语数字反应不行，就专门练数字专题。</li>
      <li>平时碎片时间多听英语：每日英语听力 app、Podcast、英语电台、英语公众号（中国日报学霸课堂）等都有很好的英语音频资源，而且内容也挺有趣的。这一过程可以锻炼抓住或者推测听力核心内容的能力。</li>
      <li>考试前保持听力做题手感。做错很多的篇章可以进行<strong>精听训练</strong>——循环播放语句 3-5 遍，进行默写。精听默写的过程追求准确复现原文，这样才能锻炼听语篇细节的能力。</li>
    </ul>

    <h3 id="listening-scan">2. 审题</h3>
    <p>以前我做题最难受的地方在于来不及把题目读完就开始了，以至于做的时候又要看题又要听题，很难做到抓住关键。对于这一问题，一方面要锻炼阅读的速度，另一方面要学会抓关键词。</p>

    <h4>对于选择题</h4>
    <ul>
      <li>先看题干问的对象是关于什么（人？事？物？），问的是什么方面（Why/reason？How？Who？When？....）</li>
      <li>再看选项，根据选项的内容可以大致推断听力所述事件的一个情景</li>
    </ul>
    <blockquote>
      <p>时间紧张的情况下，选项短的题目我会先不看选项，因为在听的时候同步进行短的选项阅读我的脑子还是能够 handle 的。而选项比较长的建议在听力给的间隙时间中阅读。注意：不要忽略一些表示时间或者程度等的词语，可能会成为混淆项。</p>
    </blockquote>

    <h4>对于填空题</h4>
    <ul>
      <li>先看最上方要求，是要填几个词？大部分是 <code>no more than one word</code>，也有 <code>no more than two words AND/OR a number</code>。</li>
      <li>先阅读前后语句，大致看一下此处所讲的内容</li>
      <li>根据前后文以及篇章的主题推测该空大概关于什么。比如，说到砍树破坏生态，使得 XX 丧失 habitat，那么很有可能这个 XX 就是 bird 之类的动物。</li>
      <li>注意关注空前后的词语，从而推断该空的词性。比如，空后面是一个物品，那么这个空估计是个形容词。</li>
    </ul>

    <h4>所有题型通用的技巧：抓 keyword 用于定位</h4>
    <p>keyword 是一句话的核心对象。此外，时间节点、人名、专有名词往往也是重要的 keyword。听的时候可以根据这些词来知道，目前音频讲到哪里了（雅思听力的题目答案是按顺序出现在音频中的）。</p>

    <h3 id="listening-practice">3. 做题</h3>
    <ul>
      <li>只做<strong>剑桥雅思官方真题集</strong>，每年会出一本。可以从最新的开始做。音频可以在「小站雅思」app 上听，这个 app 可以进行精听训练等，可以计算和记录得分，还是很好用的。</li>
      <li>对于做得很不好的几篇，建议进行<strong>精听</strong>，一句循环播放 3-5 遍，默写下来再对照原文，看看自己容易听漏什么内容。是因为连读、口音等听不清，还是单词不熟，有针对性地去改进。</li>
      <li>听力这个是需要磨练的，阅读也是。考前的冲刺阶段，每天早上抽 30 分钟做一篇听力或阅读。限时完成，提升速度和专注度。</li>
    </ul>

    <h2 id="reading">二、阅读（40 题）</h2>
    <p>阅读主要是篇幅比较大，题也比较多，对我来说<strong>做题速度是主要的挑战</strong>。方法就是多练 + 技巧。</p>

    <h3 id="reading-skill">做题技巧</h3>
    <ul>
      <li><strong>找定位词和关键词</strong>。我是先看题再看文章的。以前是先把题目全看完，但后来发现划不来，做到后面忘了之前读的题。所以我现在是看一部分题读一下文章做掉一部分再往下看。</li>
      <li>要注意的是雅思阅读有的题型答案是按顺序出现在文章中的（填空题、判断题），但有些不是（人名段落匹配题、段落小标题匹配题）。</li>
      <li>定位词有些不是一模一样地出现在文中，很有可能是用了近义词或者替换的表达，这种就比较难，需要仔细读。有些定位词是非常 nice 的，比如：时间节点、人名、专有名词等，这种数字、大写的东东之类的，眼睛扫过去就能找到在文中的位置。</li>
    </ul>

    <h3 id="reading-prep">备考方法</h3>
    <ul>
      <li>关于词汇量，实话说我没有坚持背完任何一本单词书，我就有时候刷刷百词斩。总体上，雅思词汇比托福少而且相对简单一些（都说托福有好多是学术词语）。英语基础不错的同学在词汇上可以少花时间。</li>
      <li>关于刷题，建议做<strong>剑桥雅思真题 9-17</strong>，再往前就太老了。</li>
      <li>和听力一样，错题很多的文章建议做<strong>精读</strong>，把关键的语句进行对照翻译，看看自己是由于句式复杂看不懂，还是单词理解上出问题等等。然后吸取经验，争取下一次不犯同样的错误。</li>
    </ul>

    <h2 id="writing">三、写作（小作文 + 大作文）</h2>
    <p>写作时间蛮紧张的，反正对我这种脑子慢的人很不友好。需要加强训练，熟练掌握审题和答题技巧。</p>

    <h3 id="writing-prep">备考方法</h3>
    <ul>
      <li>不同类型有不同的答题技巧，可以看一些网上资料。</li>
      <li>考前可以准备的一是<strong>固定表达</strong>，比如小作文中如何描述数据震荡或者趋于平稳、大作文的一些固搭词组等；二是<strong>大作文语料</strong>，即常见话题有哪些观点是可以作为论点的；三是<strong>句型</strong>，要牢记常用的句式用法，最好能够熟练地交替运用在作文中，句式的变化也是雅思作文的一个踩分点。</li>
      <li><strong>不建议背模板</strong>，雅思考官看够了大陆考生的模板句式，有一些他们非常不喜欢见到。</li>
      <li>有些不是地道的书面语，是雅思写作的忌讳。比如：<code>more and more people</code> 错错错，用 <code>an increasing number of people</code> 比较好。</li>
      <li>小作文出现地图和流程图的概率虽然较小，但是备考时也需要积累一些固定句型和搭配。</li>
      <li>备考的时候建议写作也要像阅读和听力一样多练手，最好掐时间做。刚开始了解写作题型的时候可以分题型进行练习，掌握各类题型的套路。</li>
      <li>考试时，一定要先审清楚题目，看看问题的核心是什么，到底要讨论的有哪几个问题（大作文可能是只问观点类型，也有可能是既问原因、又问措施......），构思一个大纲。虽然写作没有提供草稿纸，但是可以在问卷上大致地先写一下框架。</li>
      <li>推荐资料：《<strong>顾家北手把手教你雅思写作</strong>》、《<strong>顾家北词伙</strong>》</li>
    </ul>

    <h2 id="speaking">四、口语</h2>

    <h3 id="speaking-practice">练习和备考方法</h3>
    <ul>
      <li>我们<strong>缺乏语言环境</strong>是口语训练的主要问题。我是在备考期间根据口语话题库自己对自己说（可以对镜子，会比较有感觉），觉得难的问题就去网上搜一搜相关的分享视频等。如果能够找到 partner 对练是最好的。</li>
      <li>自己练习的时候可以<strong>录下来</strong>，后续回放去了解自己的问题。</li>
      <li>各种类型的题，回答也是有一定的技巧的，可以上网查。</li>
      <li>关于准备口语题库。每 <strong>4 个月</strong>口语换一次新题，题库在网上都能找到，各大机构也都有。准备的策略是<strong>串题</strong>，尤其是 part 2 的问题，要求考生 describe 一个人/事/物，可以根据自身经历把题库中几个相关的问题当成一个话题来准备，这样就只需要想好一件经历，准备好相应的语料就可以解决好几个问题。（比如，1-4 月有几个 part 2 题分别是：Describe an interesting old person you met、Describe an interesting neighbor、Describe a person you know who loves to grow vegetables/fruits，就可以构思一个有趣的老年邻居，而且他喜欢侍弄花草）。只是个例子，串题主要看自己喜好，怎么舒服怎么来。</li>
      <li>事实上，<strong>雅思考试考官不会追究你说的内容真不真实</strong>，只要是积极向上、不涉及政治敏感都可以。这也就意味着对于一些奇奇怪怪的问题我们可能真的没什么相关经历，那准备的时候可以虚构一个情景，到时候能够表述出来即可。</li>
      <li>考试时为了表现出你用语的自然，可以多一些 <strong>facial expression</strong>，表情开心点、丰富点，我觉得也能够给考官留下比较好的印象，毕竟口语的给分还是比较主观的。</li>
      <li>另外，口语讲的内容最好是比较 special，应该是能够突出你的个性的回答，这样一来能够给考官深刻的印象，二来也能让考官确定你不是在背百搭模板。</li>
      <li>推荐资料和平台：微信公众号——「早安英文」、「跟杨帅说英语」，B 站 up 主视频（好多分享新题高分回答）</li>
    </ul>

    <h2 id="summary">小结</h2>
    <p>
      雅思备考的核心是<strong>「方法 + 持续」</strong>：
      听力靠精听与反应训练、阅读靠限时刷题与定位、写作靠句型与语料积累、口语靠录音回放与串题。
      没有捷径，但每一项都可以<strong>通过刻意练习在 2-3 个月内显著提升</strong>。
    </p>
    <p>祝各位烤鸭收获满意的成绩！</p>
  </article>
</body>
</html>`,qd=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Harness 导论：从 LLM 到 Agent Harness</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; line-height: 1.3; }
    h2 {
      font-size: 26px; font-weight: 700;
      margin: 48px 0 16px;
      padding-left: 14px;
      border-left: 4px solid #9b59b6;
      scroll-margin-top: 24px;
    }
    h3 {
      font-size: 20px; font-weight: 600;
      margin: 32px 0 12px;
      color: #2c3e50;
      scroll-margin-top: 24px;
    }
    p { margin: 16px 0; }
    a { color: #3498db; }
    code {
      background: rgba(155, 89, 182, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
      color: #7d3c98;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre {
      background: #1e293b; color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 13px; line-height: 1.65;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
    blockquote {
      border-left: 3px solid #9b59b6;
      padding: 8px 16px;
      margin: 20px 0;
      color: #7f8c8d;
      background: #faf6fc;
      border-radius: 0 8px 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
    }
    th, td {
      border: 1px solid #e5e5e5;
      padding: 8px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #fafafa;
      font-weight: 600;
    }
    ul, ol { padding-left: 1.6em; margin: 16px 0; }
    li { margin: 4px 0; }
    .lead {
      font-size: 17px;
      color: #7f8c8d;
      margin-bottom: 28px;
    }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">
      单次调用能解决的不上 Workflow，Workflow 能解决的不上 Agent。
      每一级复杂度都带来更高的延迟、成本和调试难度。
      选择依据是任务是否真正需要那个级别的自主性。
    </p>
    <blockquote>
      <p>"Start with the simplest solution possible, and only increase complexity when needed." — Anthropic</p>
    </blockquote>

    <h2 id="evolution">一、方法论的演进：从 Prompt Engineering 到 Harness Engineering</h2>
    <p>LLM 应用工程经历了三个阶段，每个阶段的出现都由新的任务需求催生。</p>

    <h3 id="prompt-eng">1.1 Prompt Engineering（2022—2023）</h3>
    <p>
      Prompt Engineering 关注<strong>优化单次调用 LLM 的文本指令</strong>：Role 设定、few-shot 示例、Chain-of-Thought 引导。
    </p>
    <p>
      <strong>局限</strong>：随着 Agent 进入多轮交互、工具调用、长会话，「一段精心写好的 prompt」不再够用——
      模型在不同步骤需要的信息是<strong>动态变化</strong>的。
    </p>

    <h3 id="context-eng">1.2 Context Engineering（2025 上半年）</h3>
    <p>
      2025 年 6 月，Tobi Lütke（Shopify CEO）和 Andrej Karpathy 几乎同时提出 "Context Engineering"，
      随后被 Simon Willison、LangChain（Harrison Chase）、Anthropic 共同认可。
      Anthropic 在 <a href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents">Effective Context Engineering for AI Agents</a>（2025-09-29）中给出权威定义：
    </p>
    <blockquote>
      <p>"the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference"</p>
    </blockquote>
    <p>
      Context Engineering 关注<strong>整个上下文窗口的内容</strong>：系统提示、工具定义、检索结果、历史消息、状态、压缩策略——
      确保模型在每一步都看到「刚好够用的信息」。
    </p>
    <p>
      <strong>局限</strong>：上下文工程仍然停留在单个上下文窗口内。而当 Agent 需要<strong>跨会话</strong>、<strong>跨上下文窗口</strong>持续执行任务时，
      需要在复杂的任务环节中稳定地运行，只对上下文内容进行优化是不够的。
    </p>

    <h3 id="harness-eng">1.3 Harness Engineering（2025 末—2026）</h3>
    <p>
      2025 年 11 月，Anthropic 在 <a href="https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents">Effective Harnesses for Long-Running Agents</a> 中首次将 Harness 概念体系化。
    </p>
    <p>
      2026 年 2 月 5 日，Mitchell Hashimoto（HashiCorp 创始人）在 <a href="https://mitchellh.com/writing/my-ai-adoption-journey">My AI Adoption Journey</a> 中给出了 Harness Engineering 的实践哲学：
    </p>
    <blockquote>
      <p>"anytime you find an agent makes a mistake, you take the time to engineer a solution such that the agent never makes that mistake again."</p>
    </blockquote>
    <p>
      6 天后，OpenAI 的 Ryan Lopopolo 发表 <a href="https://openai.com/index/harness-engineering/">Harness Engineering: Leveraging Codex in an Agent-First World</a>，
      记录用 Codex 写出约 100 万行代码、零人类编写的实验，从工程实践层面正式确立 Harness Engineering 的地位。
    </p>
    <p>
      Harness Engineering 关注<strong>模型外围的整套基础设施</strong>：工具集、AGENTS.md、结构性测试、验证脚本、子 Agent 编排、运行环境、权限边界、跨会话状态。
      <strong>目的是「让 Agent 长期、自主、安全地运行」</strong>。
    </p>
    <blockquote>
      <p>
        Harness Engineering 仍然包括 Prompt 和 Context 的设计，只是进一步在更高层面思考问题：<br>
        <strong>怎么让模型可以一直自主运行？怎么让出错的概率下降或者让 Agent 能够有效纠正错误？以及怎么让用户更好地能「驾驭」模型？</strong>
      </p>
    </blockquote>

    <h2 id="two-types">二、当前 Agent 的两大类型</h2>

    <h3 id="workflow-agent">2.1 编排型 Agent（Workflow Agents）</h3>
    <p><strong>代表项目</strong>：LangChain / LangGraph、Dify、n8n、Coze</p>
    <p>
      <strong>特征</strong>：开发者用图（DAG / StateGraph）搭好执行路径，模型在指定节点做单步推理。
      控制流由人为设定，模型不参与路由判断。适合用在<strong>专业性的应用</strong>中，人为搭建<strong>稳定可靠</strong>的工作流。
    </p>

    <h3 id="autonomous-agent">2.2 自主型 Agent（Autonomous Agents）</h3>
    <p><strong>代表项目</strong>：Claude Code、OpenAI Codex、OpenClaw、Hermes Agent</p>
    <p>
      <strong>特征</strong>：模型在一个 <strong>loop</strong> 中自主完成「plan → 调用工具 → 观察结果 → 反思 → 继续或停止」的循环。
      控制流由模型在运行时根据任务进展动态决定。适用于<strong>探索性、开放性、灵活性强</strong>的任务场景中。
    </p>

    <h3 id="harness-relation">2.3 两者与 Harness 的关系</h3>
    <blockquote>
      <p>
        个人观点：编排型 Agent 关键在于人为编排工作流和优化每个节点的执行效果——这是 Harness 的一部分实现方式，<strong>但不是 Harness 的全貌</strong>。
        Harness Engineering 更多地是针对<strong>自主型 Agent 要如何设计其工具调用、运行环境、记忆加载、任务编排、安全权限机制</strong>等的工程性实现方法，以提升用户对 Agent 的「驾驭」。
      </p>
    </blockquote>
    <ul>
      <li>编排型 Agent 根据人为搭建的工作流做决策——<strong>把约束和流程编排人为写死在流程图里</strong>。</li>
      <li>自主型 Agent <strong>给模型决策权</strong>——需要通过工具设计、上下文管理、权限边界、可观测性等来引导模型行为。</li>
    </ul>

    <h2 id="augmented-llm">三、Agent 构建基石：增强型 LLM（Augmented LLM）</h2>
    <p>在讨论 Workflow 和 Agent 之前，先理解它们共同的基础构件。增强型 LLM 是在基础模型之上叠加三种能力的系统：</p>
    <ul>
      <li><strong>工具调用（Tool Use）</strong>：让模型能够主动调用外部函数（搜索、计算、文件操作）</li>
      <li><strong>记忆（Memory）</strong>：会话内的短期记忆 + 跨会话的长期记忆（向量库 / 文件 / KV）</li>
      <li><strong>检索（Retrieval）</strong>：从外部知识库中拉取与当前任务相关的信息</li>
    </ul>
    <p>这三种能力是 Workflow 与 Agent 的共同底座——无论上层走「编排」还是「自主」路线，都依赖它们之中的至少一种来突破「纯文本对话」的局限。</p>

    <h2 id="architecture">四、架构详解</h2>

    <h3 id="basic">1️⃣ 基础架构：LLM 单次调用</h3>
    <p>
      最简单的 LLM 应用就是一次 prompt → response 的单次调用。
      适合<strong>单步推理任务</strong>：摘要、翻译、改写、问答、分类等。
      <strong>优势</strong>：最简单、可预测、易调试；<strong>劣势</strong>：没有外部信息源、没有迭代修正。
    </p>
    <pre><code>user ──prompt──&gt; LLM ──response──&gt; user</code></pre>

    <h3 id="workflow">2️⃣ 工作流（Workflows）架构</h3>
    <p>
      把 LLM 调用嵌入到预先设计好的执行流程中，<strong>控制流由开发者定义</strong>，模型只负责在指定节点做单步推理。
      典型范式包括：Prompt Chaining、Parallelization、Orchestrator-Workers、Evaluator-Optimizer。
    </p>
    <pre><code>            ┌─→ LLM ──┐
input ──→   ├─→ LLM ──┼──→ aggregator ──→ output
            └─→ LLM ──┘
   (Parallelization 示意)</code></pre>
    <p><strong>适用场景</strong>：流程固定、可拆解、可验证的任务，例如多阶段文档处理、并行多角度分析等。</p>

    <h3 id="autonomous">3️⃣ 自主 Agent（Agents）架构</h3>
    <p>
      模型在一个 <strong>loop</strong> 中自主完成「plan → 调用工具 → 观察结果 → 反思 → 继续或停止」的循环。
      工具调用、状态推进、终止决策全部交给模型。
    </p>
    <pre><code>            ┌──────────────────────────┐
            ↓                          │
goal ──→ LLM ──plan──→ tool call ──→ env
            ↑                          │
            └────── observation ←──────┘
                  (until stop or done)</code></pre>
    <p><strong>适用场景</strong>：开放式、探索性、步骤不可预知的任务，例如代码 Agent、调研 Agent 等。</p>

    <h3 id="hybrid">4️⃣ 两者的结合</h3>
    <p>
      实践中两者经常<strong>混合使用</strong>：外层是 Workflow（保证主流程可控），内层关键决策用自主 Agent（处理开放子任务）。
      这种 hybrid 模式能兼顾<strong>稳定性</strong>与<strong>灵活性</strong>，是大多数生产级 Agent 系统的真实形态。
    </p>

    <h2 id="outlook">五、Harness 展望</h2>

    <h3 id="two-paths">5.1 两条方法路径</h3>
    <ul>
      <li><strong>Orchestration-first（编排优先）</strong>：通过更精细的流程设计来约束 Agent 行为，LangGraph 是代表</li>
      <li><strong>Harness-first（Harness 优先）</strong>：通过 AGENTS.md、Skills、结构化测试、运行环境等基础设施来引导 Agent 行为，Claude Code / OpenAI Codex 是代表</li>
    </ul>
    <p>两条路径并非对立，而是<strong>互补</strong>——前者解决「流程的稳定性」，后者解决「长会话的自主性」。</p>

    <h3 id="consensus">5.2 Agent 架构的设计共识</h3>
    <ol>
      <li><strong>简单优先</strong>：能单次调用解决的不上 Workflow，能 Workflow 解决的不上 Agent</li>
      <li><strong>可观测性</strong>：任何 Agent 决策都必须能被 trace、复现、回滚</li>
      <li><strong>权限最小化</strong>：默认禁止 destructive / external action，需显式批准</li>
      <li><strong>上下文可控</strong>：Prefix Cache、压缩、摘要等机制保证上下文不爆炸</li>
      <li><strong>错误纠正</strong>：让 Agent 在出错时能识别、汇报、修复，而不是崩溃</li>
    </ol>

    <h3 id="my-view">5.3 个人理解</h3>
    <p>
      Harness Engineering 不是取代 Prompt 或 Context Engineering，而是<strong>在更高层面回答同一个问题</strong>：
      「怎么让 LLM 真正有用？」Prompt 解决单次调用质量，Context 解决单次会话质量，Harness 解决长期、自主、安全运行的质量。
    </p>
    <p>
      对开发者来说，把「Agent 会犯错」这件事<strong>当作可工程化问题</strong>（而非随机事件）来对待，是 Harness Engineering 的核心心态——
      每一次错误都问：「是 prompt 不够好？是上下文不够？还是缺少工具/验证/权限设计？」
      然后用工程手段让它<strong>下次不会再犯</strong>。
    </p>

    <h2 id="references">六、参考资料</h2>
    <ul>
      <li><a href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents">Anthropic — Effective Context Engineering for AI Agents</a></li>
      <li><a href="https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents">Anthropic — Effective Harnesses for Long-Running Agents</a></li>
      <li><a href="https://openai.com/index/harness-engineering/">OpenAI — Harness Engineering: Leveraging Codex in an Agent-First World</a></li>
      <li><a href="https://mitchellh.com/writing/my-ai-adoption-journey">Mitchell Hashimoto — My AI Adoption Journey</a></li>
      <li><a href="https://simonwillison.net/2025/Oct/16/claude-skills/">Simon Willison — Claude Skills are awesome</a></li>
    </ul>
  </article>
</body>
</html>`,Wd=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>缓存命中率 &amp; KV Cache</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; line-height: 1.3; }
    h2 {
      font-size: 26px; font-weight: 700;
      margin: 48px 0 16px;
      padding-left: 14px;
      border-left: 4px solid #9b59b6;
      scroll-margin-top: 24px;
    }
    h3 {
      font-size: 20px; font-weight: 600;
      margin: 32px 0 12px;
      color: #2c3e50;
      scroll-margin-top: 24px;
    }
    p { margin: 16px 0; }
    a { color: #3498db; }
    code {
      background: rgba(155, 89, 182, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
      color: #7d3c98;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre {
      background: #1e293b; color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 13px; line-height: 1.65;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
    blockquote {
      border-left: 3px solid #9b59b6;
      padding: 8px 16px;
      margin: 20px 0;
      color: #7f8c8d;
      background: #faf6fc;
      border-radius: 0 8px 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 13.5px;
    }
    th, td {
      border: 1px solid #e5e5e5;
      padding: 8px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #fafafa;
      font-weight: 600;
    }
    ul, ol { padding-left: 1.6em; margin: 16px 0; }
    li { margin: 4px 0; }
    .lead {
      font-size: 17px;
      color: #7f8c8d;
      margin-bottom: 28px;
    }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">
      「缓存命中率」和「KV Cache」涉及到<strong>三个不同层次</strong>的概念：
      <strong>KV Cache</strong>（机制层）、<strong>Prefix Cache</strong>（工程层）和<strong>缓存命中率</strong>（指标层）。
      本文逐一辨析这三个概念的边界与关系，并讨论影响命中率的工程因素。
    </p>

    <h2 id="concepts">一、缓存命中率 vs KV Cache：三个层次的概念边界</h2>

    <h3 id="three-concepts">❓ 什么是 KV Cache、Prefix Cache 与缓存命中率</h3>
    <p>
      <strong>KV Cache（Key-Value Cache）</strong> 指 Transformer 在自回归生成过程中，
      把已处理 token 的 Key 和 Value 投影张量缓存在显存中，使后续 token 的注意力计算无需对历史 token 重新做 K/V 投影。
      它存在于<strong>单个推理请求的生命周期内</strong>，请求结束即释放。
    </p>
    <p>
      <strong>Prefix Cache（前缀缓存，亦称 Prompt Cache）</strong> 指把不同请求间共享的 token 前缀对应的 KV 张量持久化保存，
      使后续命中相同前缀的请求能跳过这部分的 Prefill 计算。它是 KV Cache 在<strong>跨请求维度</strong>的工程化延展。
    </p>
    <p>
      <strong>缓存命中率（Cache Hit Rate）</strong> 指一次请求中，
      通过 Prefix Cache 直接读取（而非重新计算）的 input token 占总 input token 的比例，
      是衡量 Prefix Cache 复用效果的<strong>定量指标</strong>。
    </p>

    <h3 id="three-layers">➡️ 三层关系总览</h3>
    <table>
      <thead>
        <tr>
          <th>层次</th><th>KV Cache（机制层）</th><th>Prefix Cache（工程层）</th><th>命中率（指标层）</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>作用域</td><td>单个请求内</td><td>跨请求</td><td>单个请求的统计量</td></tr>
        <tr><td>是否可选</td><td><strong>必备</strong>，所有 LLM 推理引擎默认启用</td><td>可选，需要框架/服务支持</td><td>可选，需 API 暴露</td></tr>
        <tr><td>典型实现</td><td>HuggingFace <code>past_key_values</code>、PagedAttention</td><td>vLLM APC、SGLang RadixAttention、Anthropic Prompt Caching</td><td><code>cache_read_input_tokens</code>（Anthropic）、<code>prompt_cache_hit_tokens</code>（DeepSeek）</td></tr>
        <tr><td>主要收益</td><td>把 Decode 复杂度从 O(n²) 降到 O(n)</td><td>跳过重复前缀的 Prefill 计算</td><td>直接折算成 token 计费折扣与 TTFT 下降</td></tr>
        <tr><td>失效条件</td><td>请求结束</td><td>TTL 到期、被 LRU 淘汰、前缀不匹配</td><td>当次请求未命中 Prefix Cache</td></tr>
      </tbody>
    </table>
    <blockquote>
      <p>
        「缓存命中率」对应的<strong>不是</strong> KV Cache 本身。在 KV Cache 视角下，单请求内 100% 的 token 都「命中」——这是它的定义，讨论命中率毫无意义。
        <strong>命中率</strong>衡量的对象是 Prefix Cache，即跨请求复用的那部分 KV。
      </p>
    </blockquote>

    <h2 id="kv-mechanism">二、KV Cache 的工作机制：单请求内的 token 间复用</h2>

    <h3 id="kv-what">❓ 什么是 KV Cache</h3>
    <p>在 Transformer Decoder 的自回归生成中，第 t 步生成 token x_t 时，需要计算注意力：</p>
    <pre><code>Attention(t) = softmax(Q_t · K_{1:t}^T / √d_h) · V_{1:t}

其中:
  Q_t = x_t · W_Q          ← 当前 token 的 Query
  K_{1:t} = X_{1:t} · W_K  ← 历史所有 token 的 Key
  V_{1:t} = X_{1:t} · W_V  ← 历史所有 token 的 Value</code></pre>
    <p>
      由于历史 token 的 K_{1:t-1}、V_{1:t-1} 在每一步都<strong>不会发生变化</strong>，把它们缓存在显存中，
      每一步只需对新 token 计算 K_t、V_t 并追加到缓存末尾，即可避免 O(t) 次冗余的 K/V 投影。这就是 KV Cache。
    </p>

    <h3 id="kv-memory">💻 显存占用公式</h3>
    <p><strong>单 token KV Cache 显存公式</strong>：</p>
    <pre><code>KV(per token) = 2 × L × H_kv × d_head × bytes

      2       = K 与 V 各一份
      L       = Transformer 层数
      H_kv    = KV 头数(MHA 时 = H_q, MQA 时 = 1, GQA 时 = H_q / G)
      d_head  = 单头维度
      bytes   = 数据类型字节数(FP16 / BF16 = 2)</code></pre>
    <p>
      以 Llama 3-70B 为例，8K 上下文的单请求 KV Cache 约为 8192 × 320 KB ≈ 2.5 GB，直接挤占了模型权重之外的可用显存。
      这便是提出 PagedAttention、MQA/GQA、MLA 等优化方法的根本动因。
    </p>
    <blockquote>
      <p>
        KV Cache <strong>不是显存优化技术，而是用显存换计算的技术</strong>。
        它把「对历史 token 重复做 O(n) 次 K/V 投影」换成「在 HBM 中常驻 O(n) 字节」，
        在 Decode 阶段反而成为 Memory-Bound 的根因——Decode 每步要把整份 KV 从 HBM 读出参与 attention，带宽即瓶颈。
      </p>
    </blockquote>
    <p>
      围绕显存压力，催生了三条主线优化：<strong>头部维度压缩</strong>（MQA/GQA/MLA，DeepSeek-V2 通过 MLA 把 KV Cache 压到原始 MHA 的 6.7%）；
      <strong>显存管理</strong>（PagedAttention 用 OS 页式管理思路打散物理显存，vLLM 是其代表）；
      <strong>跨请求复用</strong>（下一节将展开的 Prefix Cache）。
    </p>

    <h3 id="kv-value">⭐️ KV Cache 核心价值</h3>
    <p>把 Decode 阶段的 attention 计算从 O(n²) 降到 O(n)，是 LLM 能做长文本推理的根基。</p>

    <h2 id="prefix">三、从 KV Cache 到 Prefix Cache：跨请求复用的工程化</h2>

    <h3 id="prefix-what">❓ 什么是 Prefix Cache：定义与命中条件</h3>
    <p>
      原生 KV Cache 的复用边界是<strong>单个请求</strong>：请求结束，KV 张量被释放，下一个请求即使带有完全相同的 system prompt，也要从零做一遍 Prefill。
      <strong>Prefix Cache</strong> 把这个边界扩展到了请求之间——以 token 序列为 key 把 KV 张量持久化保存，
      后续请求若前缀（prefix）与已缓存序列<strong>逐 token 完全一致</strong>，即可直接复用，跳过这部分的 Prefill 计算。
    </p>
    <p>这里的「前缀」严格按 token 序列从位置 0 起逐位匹配，无论语义内容是什么。</p>

    <p><strong>典型应用场景</strong>：</p>
    <ul>
      <li><strong>多轮对话</strong>：第 N+1 轮 prompt 的前 N 轮历史已在上次请求处理过，整段可作为 prefix 命中</li>
      <li><strong>Agent 自循环</strong>：system prompt + 工具定义 + 项目背景几乎不变，仅尾部追加新一步 observation/action</li>
      <li><strong>RAG / Few-shot</strong>：多个用户共享同一组检索片段或 few-shot 示例，仅在尾部插入各自 query</li>
      <li><strong>Self-consistency / Tree-of-Thought</strong>：同一 prompt 采样多次或分支多路径，分叉点之前完全一致</li>
      <li><strong>批量评测</strong>：同一组指令配不同测试数据，指令部分跨样本共享</li>
    </ul>
    <p>
      <strong>反例</strong>（会破坏前缀）：相同 system prompt 中嵌入变化的时间戳；
      工具定义顺序被随机化；对话历史被重排——<strong>任意位置 token 不一致都会让从该位置往后的所有缓存失效</strong>。
    </p>

    <h3 id="prefix-mechanism">🔵 工作机制：缓存什么、何时工作</h3>
    <blockquote>
      <p><strong>两个常见误区：</strong></p>
      <ul>
        <li><strong>缓存的是 K/V 张量，不是答案</strong>。Prefix Cache 不像 HTTP 缓存那样直接保存「输入 → 输出」映射。它的逻辑是：当新请求的 input 前缀与先前请求完全相同时，直接复用先前请求中命中的这段前缀的 K/V 张量，从而省掉对这段相同前缀的重复 Prefill 计算。</li>
        <li><strong>机制只在 Prefill 阶段触发</strong>。新请求进入 Prefill 时做 lookup，输入 prompt 的前缀出现命中后，把缓存的 K/V 挂载进当前工作 KV Cache。其后的 Decode 阶段不经过 Prefix Cache 的查找 / 匹配流程。</li>
      </ul>
    </blockquote>

    <table>
      <thead>
        <tr><th>维度</th><th>KV Cache（单请求内）</th><th>Prefix Cache（跨请求）</th></tr>
      </thead>
      <tbody>
        <tr><td>存什么</td><td>K/V 张量</td><td>K/V 张量（<strong>同一种东西</strong>）</td></tr>
        <tr><td>数据来源</td><td>当前请求自己在 Prefill / Decode 阶段算出来的</td><td>先前请求中算出后被保留下来的</td></tr>
        <tr><td>机制工作时机</td><td>Prefill 写入、Decode 读取并追加</td><td><strong>仅 Prefill</strong>：开始时做 lookup，命中即把缓存 K/V 挂载到工作 KV Cache</td></tr>
        <tr><td>消除的冗余</td><td>当前请求 Decode 时不重算历史 token 的 K/V</td><td>当前请求 Prefill 时不重算与先前请求共享前缀那部分的 K/V</td></tr>
        <tr><td>寿命</td><td>当前请求生命周期内</td><td>跨请求，受 TTL / LRU 控制</td></tr>
      </tbody>
    </table>

    <h3 id="prefix-impl">🔧 Prefix Cache 典型实现与 API 封装</h3>
    <p><strong>推理框架层（自动管理）</strong>：</p>
    <ul>
      <li><strong>vLLM Automatic Prefix Caching</strong>：基于 PagedAttention 的固定 block（默认 16 token/块）做哈希，<strong>从 prompt 起点起按 block 边界对齐</strong>才能命中。命中粒度 = block_size。</li>
      <li><strong>SGLang RadixAttention</strong>：用 radix tree 维护已缓存 token 序列，做最长前缀匹配，命中粒度细到 token 级。在多分支场景（self-consistency、tree-of-thought）下复用率比 block-hash 更高。</li>
    </ul>

    <p><strong>API 服务层（暴露给开发者）</strong>：</p>
    <ul>
      <li><strong>隐式</strong>（DeepSeek、OpenAI）：自动检测前缀，用户无感，无需改 prompt 结构</li>
      <li><strong>显式</strong>（Anthropic）：开发者通过 <code>cache_control: {type: "ephemeral"}</code> 主动标记 cache breakpoint，最多 4 个</li>
    </ul>

    <blockquote>
      <p><strong>什么是 cache breakpoint？</strong></p>
      <p>
        它是开发者在 prompt 中手动插入的「缓存终点」标记——给请求体某条内容（可以是 <code>system</code>、<code>tools</code> 数组里的一项，
        或 <code>messages</code> 中的某条 message）加上 <code>cache_control: {type: "ephemeral"}</code> 字段，
        相当于告诉模型服务：「<strong>从 prompt 起点到这条内容为止的所有 token，我希望作为一个整体被缓存。</strong>」
      </p>
      <p>
        每次请求最多打 <strong>4 个 breakpoint</strong>，每个 breakpoint 产生一份独立的、覆盖「位置 0 → 该 breakpoint 位置」的缓存条目。
        <strong>典型用法</strong>：把 system prompt + 工具定义打一个 breakpoint（最稳定）、把固定的会话历史再打一个（次稳定），
        而<strong>变化频繁的当前用户消息留在最后不打 breakpoint</strong>——这样既最大化命中率，又避免动态内容污染缓存。
      </p>
    </blockquote>

    <h3 id="prefix-value">⭐️ Prefix Cache 核心价值</h3>
    <p>
      把「反复处理同一段 system prompt / 工具定义 / few-shot 示例」的冗余消除，
      在<strong>稳定前缀长 + 动态尾部短</strong>的场景（Agent 多轮调用、RAG 共享检索结果、长 system prompt）下作用尤为突出——
      这也是 Agent 系统能把单次调用成本压到 input 全价的 1/10 量级的关键工程基础。
    </p>

    <h2 id="hitrate">四、缓存命中率的量化定义：Anthropic 与 DeepSeek 字段辨析</h2>

    <h3 id="hitrate-what">❓ 缓存命中率衡量的是什么</h3>
    <p>缓存命中率衡量的是「<strong>本次请求的 input 中，有多少 token 是从 Prefix Cache 直接读取的</strong>」：</p>
    <pre><code>hit_rate = cache_read_tokens / total_input_tokens

其中:
  cache_read_tokens   = 命中并复用 Prefix Cache 的 input token 数
  total_input_tokens  = 本次请求总的 input token 数(含命中 + 未命中 + 写入)</code></pre>

    <p>不同厂商把这套语义拆成了不同的字段。<strong>同样是「缓存命中」</strong>，Anthropic 与 DeepSeek 的 <code>usage</code> 返回字段语义不可直接互换，这是 LiteLLM 等聚合层框架最常踩的坑。</p>

    <h3 id="anthropic-fields">Anthropic 的三字段模型</h3>
    <pre><code>{
  "input_tokens":               194,    // 既不命中也不写缓存的普通 input
  "cache_creation_input_tokens": 9474,  // 本次写入缓存的 input（首次创建）
  "cache_read_input_tokens":     0,     // 本次命中并读取缓存的 input
  "output_tokens":               7      // 模型生成的 output token 数（按 output 价计费）
}

总 input = input_tokens + cache_creation_input_tokens + cache_read_input_tokens</code></pre>

    <h3 id="deepseek-fields">DeepSeek 的二字段模型</h3>
    <pre><code>{
  "prompt_tokens":             21530,   // 总 input，等价于 hit + miss
  "prompt_cache_hit_tokens":   320,     // 命中缓存的 input
  "prompt_cache_miss_tokens":  21210,   // 未命中（走完整 Prefill）的 input
  "completion_tokens":         9        // 模型生成的 output token 数
}

总 input = prompt_tokens = hit + miss（无独立"写入"字段，写入计入 miss）</code></pre>

    <h3 id="fields-difference">两种字段模型的核心差异</h3>
    <table>
      <thead>
        <tr><th>维度</th><th>Anthropic</th><th>DeepSeek</th></tr>
      </thead>
      <tbody>
        <tr><td>命中字段</td><td><code>cache_read_input_tokens</code></td><td><code>prompt_cache_hit_tokens</code></td></tr>
        <tr><td>"写入"是否独立</td><td><strong>独立计费</strong>（<code>cache_creation_input_tokens</code> × 1.25）</td><td>写入计入 miss，与普通 input 同价</td></tr>
        <tr><td>命中读取计费</td><td>基价 × <strong>0.1</strong>（节省 90%）</td><td>基价 × <strong>0.1</strong>（节省 90%）</td></tr>
        <tr><td>控制粒度</td><td><strong>显式</strong>：用户用 <code>cache_control</code> 标记 breakpoint</td><td><strong>隐式</strong>：自动按前缀检测</td></tr>
        <tr><td>TTL</td><td>5 分钟（默认）/ 1 小时（付费，× 2 写入溢价）</td><td>无固定 TTL，LRU 自然淘汰</td></tr>
        <tr><td>命中率分母</td><td><code>input + creation + read</code></td><td><code>prompt_tokens</code> = <code>hit + miss</code></td></tr>
      </tbody>
    </table>

    <h3 id="hitrate-value">⭐️ 命中率核心价值</h3>
    <p>
      命中率不仅是性能指标，<strong>更是直接的成本指标</strong>。把它纳入 SLO（Service Level Objective）监控是 LLM 服务工程化的关键一步——
      一旦命中率从 90% 跌到 50%，意味着 input token 成本接近翻倍。
    </p>

    <h2 id="cache-friendly">五、影响命中率的工程因素：Cache-Friendly Prompt 设计</h2>

    <h3 id="static-first">核心原则：静态在前、动态在后</h3>
    <p>Prefix Cache 的命中条件是「逐 token 完全一致的前缀」，这意味着 prompt 的<strong>书写顺序</strong>直接决定了命中率。Cache-Friendly Prompt 的通用结构：</p>
    <pre><code>① system prompt          ← 跨会话稳定,放最前面
② tools / function 定义   ← 长期稳定,放在 system 之后
③ 项目规则 / few-shot     ← 偶尔变更,放在工具之后
④ 历史对话                ← 单次会话内追加,放在规则之后
⑤ 当前用户消息            ← 每轮变化,放最后
   ↑ cache_breakpoint     ← Anthropic 在此打 breakpoint</code></pre>
    <p>核心规则：<strong>越靠后，变更频率越高</strong>。任何「动态内容前置」都会让该位置之后的所有静态内容跟着失效。</p>

    <h3 id="anti-patterns">破坏命中的反模式</h3>
    <table>
      <thead>
        <tr><th>反模式</th><th>为什么破坏命中</th></tr>
      </thead>
      <tbody>
        <tr><td>system prompt 中嵌入当前时间</td><td>每次请求时间戳都不同，整个 system prefix 失效</td></tr>
        <tr><td>工具列表顺序随机化</td><td>token 序列改变，从工具定义之后全部 miss</td></tr>
        <tr><td>对话历史插入到 system 之后</td><td>每轮历史增长，把工具定义和 few-shot 一起拖入失效</td></tr>
        <tr><td>引入随机 UUID / nonce 在前缀中</td><td>每次必 miss，缓存形同虚设</td></tr>
        <tr><td>同一会话频繁切换 system prompt</td><td>每次切换都触发一次完整 cache_creation</td></tr>
      </tbody>
    </table>

    <h3 id="ttl">TTL 的工程含义</h3>
    <p>
      Anthropic 默认 TTL 为 5 分钟，意味着<strong>低频调用</strong>（如人工对话间隔超过 5 分钟）会反复触发 cache_creation，反而比无缓存更贵（写入有 1.25x 溢价）。两种应对：
    </p>
    <ul>
      <li><strong>高频场景</strong>（Agent 自动循环、连续编辑会话）：默认 5min TTL 即可，实际间隔远小于 TTL</li>
      <li><strong>低频场景</strong>（人工偶发请求）：评估「5min 内复用次数」——若 &lt; 1.25 / 0.9 ≈ 1.4 次，缓存反而亏损；若 ≥ 2 次，即便偶尔超 TTL 也大概率盈利。极低频可买 1h TTL（2x 写入溢价，但单次可摊到 12 倍读取）</li>
    </ul>

    <h3 id="monitor">命中率监控</h3>
    <blockquote>
      <p><strong>推荐 SLO 指标</strong>：把 <code>hit_rate = cache_read_tokens / (cache_read + cache_creation + input)</code> 作为<strong>跟 P99 延迟同级</strong>的关键指标。</p>
      <ul>
        <li>健康基线：Agent 类应用 ≥ 80%，长 system prompt 的 chatbot ≥ 60%</li>
        <li>异常告警：连续多个时间窗 hit_rate 跌幅 &gt; 20%，通常意味着 prompt 模板被改坏了</li>
        <li>成本归因：input 成本异动 → 先查 hit_rate，再查 token 量</li>
      </ul>
    </blockquote>
    <blockquote>
      <p><strong>注意：命中率并非越接近 100% 越好</strong>。100% 命中意味着所有 input 都来自缓存，通常说明系统在反复发送完全相同的请求（无新增内容），这要么是业务逻辑死循环，要么是测试桩泄漏。健康的 Agent 系统应呈现「<strong>高基线命中率</strong>（80%-95%）<strong>+ 稳定的少量新增 token</strong>」模式。</p>
    </blockquote>

    <h2 id="summary">小结</h2>
    <p>
      从工程角度看，<strong>Agent 系统</strong>的成本治理本质上就是 cache hit rate 治理——
      一段稳定的 system prompt + 工具定义动辄 10K-20K token，在 50-100 轮长会话中，
      这部分若反复全价计算，会占据账单的 80%+；若被稳定缓存，边际成本仅是 dynamic suffix。
      这个事实把「<strong>prompt 工程</strong>」从单纯的「写好提示词」扩展到了「<strong>设计可缓存的</strong>会话结构」，
      成为现代 LLM 应用的基础设施级能力。
    </p>
  </article>
</body>
</html>`,Xd=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MCP &amp; CLI &amp; Skill &amp; Plugin 概念原理辨析</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; line-height: 1.3; }
    h2 {
      font-size: 26px; font-weight: 700;
      margin: 48px 0 16px;
      padding-left: 14px;
      border-left: 4px solid #9b59b6;
      scroll-margin-top: 24px;
    }
    h3 {
      font-size: 20px; font-weight: 600;
      margin: 32px 0 12px;
      color: #2c3e50;
      scroll-margin-top: 24px;
    }
    p { margin: 16px 0; }
    a { color: #3498db; }
    code {
      background: rgba(155, 89, 182, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
      color: #7d3c98;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre {
      background: #1e293b; color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 13px; line-height: 1.65;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
    blockquote {
      border-left: 3px solid #9b59b6;
      padding: 8px 16px;
      margin: 20px 0;
      color: #7f8c8d;
      background: #faf6fc;
      border-radius: 0 8px 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 13.5px;
    }
    th, td {
      border: 1px solid #e5e5e5;
      padding: 8px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #fafafa;
      font-weight: 600;
    }
    ul, ol { padding-left: 1.6em; margin: 16px 0; }
    li { margin: 4px 0; }
    .lead {
      font-size: 17px;
      color: #7f8c8d;
      margin-bottom: 28px;
    }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">
      Claude Code 的能力组合由多种机制叠加而成：内置 <strong>Tool</strong> 是执行底座，
      <strong>MCP</strong> 与 <strong>CLI</strong> 分别以「结构化协议」和「shell 调用」两种方式接入外部能力，
      <strong>Skill</strong> 为 Agent 注入程序性知识以编排上述能力，Claude Code <strong>Plugin</strong> 把多种组件打包以便分发与共享。
    </p>

    <h2 id="mcp">一、MCP —— 连接外部工具</h2>

    <h3 id="mcp-what">什么是 MCP</h3>
    <p>
      MCP（Model Context Protocol）是一个开放标准协议，<strong>定义了 AI 应用与外部工具/数据源之间的通信方式</strong>。
      它一般由第三方服务平台（例如 GitHub、数据库、Slack、飞书 等）提供，
      以方便任意外部系统的能力能够快速接入 Agent 系统中被 AI 调用。
    </p>

    <h3 id="mcp-arch">基本架构：Host → Client → Server</h3>
    <p>MCP 采用三层架构：</p>
    <ul>
      <li><strong>Host</strong>：AI 应用（如 Claude Code），负责协调多个 Client</li>
      <li><strong>Client</strong>：Host 内部组件，每个 Client 维护与一个 Server 的专属连接</li>
      <li><strong>Server</strong>：独立进程，向 Client 暴露工具（Tools）、资源（Resources）、提示词模板（Prompts）</li>
    </ul>
    <p>所有通信基于 <strong>JSON-RPC 2.0</strong> 协议，与传输方式无关。</p>

    <h3 id="mcp-mechanism">MCP 的调用机制</h3>
    <h4>Server 端：用 JSON Schema 声明工具</h4>
    <p>
      Server 在响应 <code>tools/list</code> 时返回工具列表，每项包含 <code>name</code>、<code>description</code>、<code>inputSchema</code>（标准 JSON Schema）。
      其中，<code>description</code> 是模型决定何时调用该工具的<strong>唯一线索</strong>——写得越具体准确，误调用与漏调用越少。
    </p>

    <h4>Agent 端：加载与路由工具</h4>
    <p>Claude Code 启动后的工具加载流程：</p>
    <ol>
      <li>读取 <code>.mcp.json</code> / <code>settings.json</code> 中的 Server 配置</li>
      <li>为每个 Server 建立连接（STDIO 拉起子进程 / HTTP 建立 SSE 长连）</li>
      <li>发送 <code>initialize</code> 协商协议版本与 capabilities</li>
      <li>调用 <code>tools/list</code> 拉取所有工具的完整 schema</li>
      <li>按 <code>mcp__&lt;server名&gt;__&lt;tool名&gt;</code> 重命名每个工具（避免跨 Server 冲突）</li>
      <li>将转换后的工具列表注入到每次发往 Claude API 的 <code>tools</code> 字段中</li>
    </ol>
    <p><strong>特点：启动时全量加载，运行时全量注入。</strong></p>

    <h4>模型调用工具的流程</h4>
    <p>
      返回 <code>tool_use</code> block → Claude Code 按前缀路由到对应 Server 发送 <code>tools/call</code> →
      Server 返回 <code>content</code> → Claude Code 包装成 <code>tool_result</code> 注入下一轮对话。
      <strong>MCP 协议只存在于 Claude Code 与 Server 之间</strong>——这种「协议在 Host 内消化」的设计，是 MCP 能成为跨厂标准的关键。
    </p>
    <p>
      代价是 token 开销：所有工具的 schema 必须<strong>常驻在每次请求的 tools 字段中</strong>，
      否则模型就「看不到」这些工具——这与下一节 CLI 的按需发现形成对比。
    </p>

    <h3 id="mcp-transport">两种连接方式</h3>
    <p>核心区别在于：<strong>谁来管理 Server 的生命周期</strong>。</p>

    <h4>STDIO — 本地子进程模式</h4>
    <p>
      Claude Code 在本地拉起 Server 作为子进程，通过 stdin/stdout 通信。Server 的整个生命周期由 Claude Code 管理——会话开始时启动，会话结束时终止。
      Server 程序可以预先安装在本地，也可以通过 <code>npx</code>、<code>uvx</code> 等工具临时下载运行（无需持久安装）。
    </p>
    <ul>
      <li>一个 Server 实例只服务一个 Client</li>
      <li>无网络开销，性能最优</li>
      <li>典型场景：日常使用的大多数 MCP Server</li>
    </ul>
    <pre><code>claude mcp add github -- npx -y @modelcontextprotocol/server-github</code></pre>

    <h4>Streamable HTTP — 独立服务模式</h4>
    <p>Server 是一个独立运行的 HTTP 服务，不由 Claude Code 管理生命周期。Claude Code 作为 HTTP 客户端去连接它。服务可以运行在本地、内网或云端。</p>
    <ul>
      <li>一个 Server 可同时服务多个 Client</li>
      <li>支持标准 HTTP 认证和会话管理</li>
      <li>典型场景：企业级部署、多用户共享、第三方平台集成</li>
    </ul>
    <pre><code>claude mcp add my-server --transport sse --url http://localhost:3001/sse</code></pre>

    <h3 id="mcp-value">MCP 的价值</h3>
    <p>
      MCP 解决了「<strong>能力边界</strong>」问题——通过<strong>开放协议</strong>把外部系统的能力转译为 Agent 可调用的工具，
      让任何模型供应商都能接入同一个生态。但 MCP 只提供工具，不提供使用方法——「怎么用好这些工具」是 Skill 的职责。
    </p>

    <h2 id="cli">二、CLI —— 命令行接口</h2>

    <h3 id="cli-what">什么是 CLI</h3>
    <p>
      CLI 即服务方提供的<strong>命令行可执行接口</strong>，例如 <code>gh</code>（GitHub 命令行工具）、<code>lark-cli</code>（飞书命令行工具）等。
      在 Agent 语境下，CLI 是另一种把「外部能力」暴露给 LLM 的工程范式：<strong>通过 shell 而非 RPC 协议</strong>。
    </p>

    <h3 id="cli-call">Agent 如何调用 CLI</h3>
    <p>Agent 调用 CLI 不引入任何新协议——所有交互都借由 Agent 内置的 <strong>Bash Tool</strong> 完成：</p>
    <ol>
      <li><strong>执行</strong>：模型在响应中返回一次 <code>Bash</code> 工具调用，命令字符串作为参数</li>
      <li><strong>捕获</strong>：Bash Tool 在子进程中执行该命令，把 stdout / stderr 文本与 exit code 一并回传给 Agent</li>
      <li><strong>判断</strong>：Agent 把这些文本作为 <code>tool_result</code> 注入下一轮上下文，依据 exit code 决定继续推理或重试</li>
    </ol>
    <p>整个过程对模型而言与调用任意其它工具完全一致——它只需要会写正确的 shell 命令。</p>

    <h3 id="cli-lazy">关键机制：按需发现（lazy discovery）</h3>
    <p>
      这是 CLI 与 MCP 在工具发现机制上的根本分歧。
      MCP 客户端在启动时通过 <code>tools/list</code> 把所有工具的完整 schema 一次性注入系统提示；
      CLI 则是让 Agent 通过 <code>--help</code> 在执行过程中<strong>递归</strong>探索命令树：
    </p>
    <pre><code>$ gh --help              # Agent 先看顶级命令分类
$ gh pr --help           # 选定 pr 域后看 pr 的子命令
$ gh pr create --help    # 选定 create 后看具体参数</code></pre>
    <p>只有 Agent 当前任务真正需要的子命令的 <code>--help</code> 输出才会进入上下文。例如，在一个仅需创建 issue 的任务中，PR、release、actions 等命令的 schema 不会全部一次性传给 Agent。</p>
    <p>这是 CLI 在 token 经济性上根本优势的来源。</p>

    <h3 id="cli-vs-mcp">CLI 与 MCP 的区别</h3>
    <p>CLI 与 MCP 在「为 Agent 提供外部能力」这一职能上是同位的，但走了不同的工程路径。最核心的差异点在于：<strong>「工具的描述」什么时候被 LLM 看到？</strong></p>
    <ul>
      <li><strong>MCP：会话开始时全量注入。</strong>客户端启动时调用 <code>tools/list</code> 拉取所有工具完整 schema，注入每次请求的 <code>tools</code> 字段。<strong>未在启动时加载的工具，模型完全感知不到。</strong></li>
      <li><strong>CLI：任务真正需要时按需发现。</strong>Agent 通过 <code>--help</code> 在 Bash 调用中递归探索命令树。</li>
    </ul>

    <h3 id="cli-value">CLI 的价值</h3>
    <p>
      CLI 不是对 MCP 完全的替代——而是「如何让 Agent 调用外部能力」的两种工程答案：
      <strong>MCP 通过协议把外部系统的能力结构化暴露给 LLM；而 CLI 让 LLM 用最熟悉的 shell 调用第三方服务的命令行接口</strong>。
      前者是为 Agent 重新设计的外部系统接口标准，后者是依托 shell 这一同时服务人类与 Agent 的通用接口范式。
    </p>

    <h2 id="skill">三、Skill —— 注入领域知识</h2>

    <h3 id="skill-what">什么是 Skill</h3>
    <p>
      Skill 是一个<strong>装载领域知识与可执行资源的目录</strong>——它不是单个 Markdown 文件，
      而是包含 <code>SKILL.md</code> 元数据 + 可选的脚本、参考文档、模板资源的<strong>包</strong>。
      Anthropic 工程团队对 Skill 的官方定义：
    </p>
    <blockquote>
      <p>"A skill is a directory containing a SKILL.md file that contains organized folders of instructions, scripts, and resources that give agents additional capabilities."</p>
    </blockquote>
    <p>
      该格式由 Anthropic 在 2025 年 10 月推出，2025 年 12 月作为<strong>开放标准</strong>发布于 <a href="https://agentskills.io">agentskills.io</a>。
      已被 <strong>30+ 个 Agent 框架</strong> 原生支持，包括 Claude Code、OpenAI Codex CLI、Google Gemini CLI、GitHub Copilot、Cursor 等——是继 MCP 之后又一个被业界广泛接纳的 Agent 扩展标准。
    </p>

    <h3 id="skill-progressive">⭐️ 核心机制：渐进式披露</h3>
    <p>Skill 的设计目标是解决一个根本矛盾：<strong>Agent 需要尽可能多的领域知识，但又不能让所有知识常驻在上下文中</strong>。</p>
    <p>核心方法是 <strong>Progressive Disclosure（渐进式披露）</strong>——把信息分成三层，按需逐级加载：</p>
    <table>
      <thead>
        <tr><th>层级</th><th>API 调用</th><th>加载内容</th><th>Token 消耗</th></tr>
      </thead>
      <tbody>
        <tr><td>Level 0</td><td><code>skills_list()</code></td><td>所有技能的 name + description</td><td>约 3K（固定）</td></tr>
        <tr><td>Level 1</td><td><code>skill_view(name)</code></td><td>完整 SKILL.md</td><td>按需</td></tr>
        <tr><td>Level 2</td><td><code>skill_view(name, path)</code></td><td>特定 reference/script 文件</td><td>按需</td></tr>
      </tbody>
    </table>
    <p>
      其结果是：<strong>Skill 中可承载的知识量在工程上是无界的</strong>——
      只要分层组织得当，Agent 总能在需要时找到需要的信息。
    </p>

    <h3 id="skill-structure">Agent Skills 标准结构</h3>
    <p>一个技能就是一个文件夹，最简单的只需要一个 <code>SKILL.md</code> 文件：</p>
    <pre><code>skill-name/
├── SKILL.md              # 必需：元数据 + 指令
├── scripts/              # 可选：可执行脚本
├── references/           # 可选：参考文档
└── assets/               # 可选：模板、资源文件</code></pre>
    <p><strong>硬性约束</strong>：<code>SKILL.md</code> 文件名大小写敏感；frontmatter 中的 <code>name</code> 字段<strong>必须严格等于所在目录名</strong>。</p>
    <p>标准 frontmatter 仅有 <strong>6 个字段</strong>，其中 2 个必需：</p>
    <table>
      <thead>
        <tr><th>字段</th><th>必需</th><th>说明</th></tr>
      </thead>
      <tbody>
        <tr><td><code>name</code></td><td>✓</td><td>技能名；仅小写字母 / 数字 / 连字符；<strong>必须等于目录名</strong></td></tr>
        <tr><td><code>description</code></td><td>✓</td><td><strong>必须同时说明「做什么」和「何时使用」</strong>——是 Agent 决定调用技能的关键信息</td></tr>
        <tr><td><code>license</code></td><td>✗</td><td>协议名或 license 文件引用，如 <code>Apache-2.0</code></td></tr>
        <tr><td><code>compatibility</code></td><td>✗</td><td>环境要求（适配产品、系统包、网络访问等）</td></tr>
        <tr><td><code>metadata</code></td><td>✗</td><td>通用扩展点；<code>version</code>、<code>author</code> 等放此处</td></tr>
        <tr><td><code>allowed-tools</code></td><td>✗</td><td>预批准的工具，如 <code>Bash(git:*) Read</code></td></tr>
      </tbody>
    </table>

    <h3 id="skill-value">Skill 的价值</h3>
    <p>
      Simon Willison 的判断是 <em>"Claude Skills are awesome, maybe a bigger deal than MCP"</em>——
      他给出的核心理由是：<strong>Skill 把「如何做事」的工程实践外化为标准化、可移植的工件</strong>，
      而 MCP 只解决了「能调用什么」。
    </p>

    <h2 id="plugin">四、Plugin —— 打包分发能力集合</h2>

    <h3 id="plugin-what">什么是 Plugin</h3>
    <p>Plugin 是一个 Claude code 中的<strong>「能力合集的安装包」</strong>，把 Skills、Hooks、MCP 配置、自定义 Agent 等多种组件打包成一个可安装的包。</p>
    <table>
      <thead>
        <tr><th>组件</th><th>目录</th><th>作用</th></tr>
      </thead>
      <tbody>
        <tr><td>Skills</td><td><code>skills/</code></td><td>领域知识和操作流程</td></tr>
        <tr><td>Agents</td><td><code>agents/</code></td><td>自定义 Subagent 人格/工具集</td></tr>
        <tr><td>Hooks</td><td><code>hooks/</code></td><td>生命周期自动化（格式化、安全检查）</td></tr>
        <tr><td>MCP</td><td><code>.mcp.json</code></td><td>外部工具连接配置</td></tr>
        <tr><td>可执行文件</td><td><code>bin/</code></td><td>加入 PATH 的原生工具</td></tr>
      </tbody>
    </table>
    <p>它解决的是「如何把一套能力共享给团队或社区」的问题。安装一个 Plugin，就同时获得了它包含的所有 Skill、Hook、MCP Server 等。</p>

    <h3 id="plugin-dir">目录结构</h3>
    <pre><code>my-plugin/
├── .claude-plugin/
│   └── plugin.json        # 清单文件（必需）
├── skills/                # Skill 集合
│   ├── code-review/
│   │   └── SKILL.md
│   └── security-audit/
│       └── SKILL.md
├── agents/                # 自定义 Subagent
│   └── reviewer.md
├── hooks/                 # Hook 配置
│   └── hooks.json
├── .mcp.json              # MCP Server 配置
├── bin/                   # 可执行工具（加入 PATH）
│   └── my-tool
└── README.md</code></pre>

    <h3 id="plugin-manifest">清单文件（plugin.json）</h3>
    <pre><code>{
  "name": "team-standards",
  "description": "团队开发规范：代码审查、安全检查、提交规范",
  "version": "1.0.0",
  "author": { "name": "DevTeam" },
  "tags": ["code-review", "security"]
}</code></pre>

    <h3 id="plugin-essence">Plugin 的本质</h3>
    <p>
      Plugin 解决的是「<strong>分发</strong>」问题——它不引入新概念，
      只是把已有的 Skill、Hook、MCP 等组件打包在一起，加上版本管理和命名空间隔离，使其可以在团队和社区间共享。
    </p>

    <h2 id="summary">五、总结</h2>

    <h3 id="comparison">综合对比</h3>
    <table>
      <thead>
        <tr>
          <th>维度</th><th><strong>Tool</strong></th><th><strong>MCP</strong></th>
          <th><strong>CLI</strong></th><th><strong>Skill</strong></th><th><strong>Plugin</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr><td>定义</td><td>模型可直接调用的原子能力</td><td>Agent 与外部系统通信的开放协议</td><td>服务方提供的命令行接口</td><td>装载程序性知识与可执行资源的目录</td><td>多种能力组件的打包分发单元</td></tr>
        <tr><td>解决的核心问题</td><td>模型如何执行单步动作</td><td>Agent 能调用哪些外部能力（结构化）</td><td>Agent 如何复用既有 shell 生态</td><td>Agent 应当如何完成某类任务</td><td>能力如何在团队 / 社区间共享</td></tr>
        <tr><td>形态载体</td><td>函数 schema + 后端实现</td><td>服务进程 + JSON-RPC 协议</td><td>二进制 / 脚本 + stdin/stdout/exit code</td><td>目录（SKILL.md + scripts/ + assets/）</td><td>目录（plugin.json + 子组件）</td></tr>
        <tr><td>加载与触发</td><td>上下文预置 schema；模型自主调用</td><td>启动时全量加载工具 schema</td><td>不预加载；按需 <code>--help</code> 发现</td><td>元数据预加载；渐进加载</td><td>用户显式安装；子组件按各自机制触发</td></tr>
        <tr><td>标准化程度</td><td>厂商各自定义 API</td><td>开放标准（modelcontextprotocol.io）</td><td>POSIX 命令行约定</td><td>开放标准（agentskills.io）</td><td>Claude Code 专属</td></tr>
      </tbody>
    </table>

    <h3 id="layers">层次关系</h3>
    <p>五者构成由「原子能力」到「分发单元」的递进层级，互补协作而非彼此替代：</p>
    <ul>
      <li><strong>Tool</strong> 是 Agent 的基础执行单位（Bash、Read、Edit），构成所有外部交互最终落地的「硬件层」</li>
      <li><strong>MCP</strong> 通过开放协议把外部系统封装为结构化工具，适合需要类型安全与协议级特性的场景</li>
      <li><strong>CLI</strong> 通过 Bash Tool 调用既有的命令行程序，是当前 Token 经济性最优、生态覆盖最广的接外部能力路径</li>
      <li><strong>Skill</strong> 以程序性知识告诉 Agent 应当如何编排上述 Tool / MCP / CLI，沉淀为可复用工序</li>
      <li><strong>Plugin</strong> 把若干 Skill、Hook、MCP 配置打包并加上版本与命名空间，使能力可分发到团队与社区</li>
    </ul>
  </article>
</body>
</html>`,Qd=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RAG 基本概念</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; line-height: 1.3; }
    h2 {
      font-size: 26px; font-weight: 700;
      margin: 48px 0 16px;
      padding-left: 14px;
      border-left: 4px solid #9b59b6;
      scroll-margin-top: 24px;
    }
    h3 {
      font-size: 20px; font-weight: 600;
      margin: 32px 0 12px;
      color: #2c3e50;
      scroll-margin-top: 24px;
    }
    h4 {
      font-size: 17px; font-weight: 600;
      margin: 24px 0 8px;
      color: #2c3e50;
    }
    p { margin: 16px 0; }
    a { color: #3498db; }
    code {
      background: rgba(155, 89, 182, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
      color: #7d3c98;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre {
      background: #1e293b; color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 13px; line-height: 1.65;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
    blockquote {
      border-left: 3px solid #9b59b6;
      padding: 8px 16px;
      margin: 20px 0;
      color: #7f8c8d;
      background: #faf6fc;
      border-radius: 0 8px 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
    }
    th, td {
      border: 1px solid #e5e5e5;
      padding: 8px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #fafafa;
      font-weight: 600;
    }
    ul, ol { padding-left: 1.6em; margin: 16px 0; }
    li { margin: 4px 0; }
    .lead {
      font-size: 17px;
      color: #7f8c8d;
      margin-bottom: 28px;
    }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">
      RAG（Retrieval-Augmented Generation，检索增强生成）是当下 LLM 应用最主流的工程范式之一。
      本文梳理 RAG 的基础理论、文档预处理、向量存储与检索、构造 RAG 链以及测试优化等核心内容。
    </p>

    <h2 id="theory">一、RAG 基本理论</h2>

    <h3 id="definition">RAG 定义</h3>
    <p>
      以检索增强生成为核心，将用户问题转化为检索请求，选出相关文档片段注入上下文，再由生成模型作答。
    </p>

    <h3 id="when">何时用 RAG</h3>
    <p>
      知识需要可溯源、常更新、规模大且无法完全「内化」到模型；希望减少幻觉并支持引用。
    </p>

    <h3 id="why">为什么引入 RAG</h3>
    <p>
      检索增强生成（RAG）通过语义相似性计算从外部知识库中检索相关文档块，从而增强了 LLM。
      通过引用外部知识，RAG 可有效减少生成与事实不符内容的问题。
    </p>

    <h3 id="classification">RAG 分类</h3>

    <h4>根据技术实施阶段来分</h4>
    <p>分为 fine-tune、pre-training、inference 三种，即在模型的不同阶段引入 RAG 技术。</p>

    <h4>根据技术实施阶段来分</h4>
    <p>分为 fine-tune、pre-training、inference 三种，即在模型的不同阶段引入 RAG 技术。</p>
    <img src="/images/blog/feishu/BQVIbe19Io6cCVx12nVc6pW5n3e.png" alt="RAG 按技术实施阶段分类示意图">

    <h4>根据方法结构来分</h4>
    <ul>
      <li><strong>朴素 RAG</strong>：最基础的 RAG 实施方式。
        <ol>
          <li>对文档进行划分</li>
          <li>对文档分模块进行特征编码（embedding）</li>
          <li>根据用户输入对文档内容进行检索</li>
          <li>将匹配的文档内容取出，与用户提示词一起，形成增强的 prompt 再输给 LLM</li>
          <li>LLM 生成答案</li>
        </ol>
      </li>
      <li><strong>高级 RAG</strong>：围绕检索前和检索后提出了多种优化策略，其过程与朴素 RAG 相似，仍然遵循链状结构。</li>
      <li><strong>模块化 RAG</strong>：有更大灵活性，引入多个特定功能模块。</li>
    </ul>
    <img src="/images/blog/feishu/EWRZb5vYzoCbdDx8CPccDBZNnAe.png" alt="RAG 三种方法结构对比示意图">

    <h3 id="paradigms">两大实现范式</h3>
    <ul>
      <li><strong>Retrieval-then-Generate（最常见）</strong>：先检索再生成，把检索的 top-k 文本作为 context 传入 LLM，然后生成答案。</li>
      <li><strong>Generate-then-Retrieve / Iterative</strong>：先生成检索提示（如检索关键词或子问题），再检索并生成（用于复杂多步检索）。</li>
    </ul>

    <h3 id="modules">RAG 基本模块</h3>

    <h4>文档预处理与 chunking（切片）</h4>
    <p>对数据进行清洗，然后把大文档分成合理大小的片段。</p>
    <ul>
      <li>把大文档分成合理大小的片段（chunk），常见策略：
        <ul>
          <li>固定 token/字符长度（例如 200-600 tokens）并重叠（overlap 50-100 tokens）</li>
          <li>基于语义边界（段落 / 小节 / 句子聚合）</li>
        </ul>
      </li>
      <li>目标：每个 chunk 能保持语义完整且适配 LLM 的上下文窗口与检索精度</li>
      <li>注意：过短会丢失语义，过长会增加向量相似性噪音与 cost</li>
    </ul>

    <h4>Embeddings</h4>
    <p>将文本映射为向量。</p>
    <ul>
      <li>常用模型：<code>sentence-transformers</code> 系列（如 all-MiniLM-L6-v2）、OpenAI embedding（text-embedding-3-small）、Mistral/Anthropic embedding 等</li>
      <li>选择 embedding 时要考虑：语义质量、吞吐、GPU/CPU 适配、成本</li>
      <li>批量向量化时注意并发、batch-size、token 限制</li>
    </ul>

    <h4>Vector Store</h4>
    <p>向量存储方法。</p>
    <ul>
      <li>常见选项：FAISS（本地，高性能）、Chroma（易用）、Milvus（分布式）、Pinecone（托管）、Weaviate</li>
      <li>选择原则：数据量、延迟要求、是否需要持久化/并发、预算</li>
      <li>Index 类型：flat / HNSW / IVF 等，通常 HNSW 适合低延迟高召回</li>
    </ul>

    <h4>Retriever</h4>
    <p>封装检索策略。</p>
    <ul>
      <li><strong>Dense Retriever（向量检索）</strong>：基于向量相似度（cosine / dot）匹配，MMR 最大边际相关性</li>
      <li><strong>Sparse Retriever（词袋/BM25）</strong>：基于关键字匹配，常用于初筛或混合策略</li>
      <li><strong>Hybrid Retriever</strong>：词袋 + 向量混合，兼顾精确与泛化</li>
      <li><strong>Cross-encoder Re-ranker</strong>（可选）：用 cross-encoder 模型对 top-n 再打分，提高精确度（代价大）</li>
    </ul>

    <h4>Context Injection</h4>
    <p>将检索的内容注入上下文，引导 LLM 生成回答。</p>
    <ul>
      <li>Prompt 需约束「只用给定上下文」</li>
      <li>要确保注入的上下文 + query 不超模型上下文窗口。使用摘要或压缩上下文的方法来解决</li>
    </ul>
    <pre><code>SYSTEM: 你是雅思教师...
USER: {query}
CONTEXT: 【1】{doc1_summary} ... 【k】{dock_summary}
INSTRUCTIONS: 基于 above context 回答，并在答案末尾给出来源编号。</code></pre>

    <h4>LLM Generator 的 tips</h4>
    <ul>
      <li>直接生成（让 LLM 基于注入内容回答）</li>
      <li>验证/二次检索（LLM 回答后，再检索确认或补充）</li>
      <li>引用标注：使用「指令 + 强制引用」或「要求给出来源句子/段落」</li>
    </ul>

    <h3 id="challenges">常见挑战与解决策略</h3>
    <table>
      <thead>
        <tr><th>挑战</th><th>策略</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>上下文太长 / Token 超限</td>
          <td>对 chunks 摘要、优先保留高置信段落、动态截断；或检索-生成分步策略</td>
        </tr>
        <tr>
          <td>信息冗余 vs 噪声</td>
          <td>引入 re-ranker；或者把 chunk 中的关键句抽取后再注入</td>
        </tr>
        <tr>
          <td>低召回</td>
          <td>增大 chunk 多样性、使用 hybrid retriever、调节 embedding 模型</td>
        </tr>
        <tr>
          <td>Hallucination（编造）</td>
          <td>强制模型只基于 context 回答、要求「仅基于下列来源回答」，并在回答中附上来源句子或编号</td>
        </tr>
        <tr>
          <td>延迟</td>
          <td>本地 FAISS + HNSW，减少 re-ranker；缓存常见 query 的检索结果或生成结果</td>
        </tr>
        <tr>
          <td>成本</td>
          <td>减少 prompt 长度、减少 LLM token 使用、使用小模型在生成前做初筛/摘要</td>
        </tr>
      </tbody>
    </table>

    <h2 id="crawl">二、数据爬取</h2>

    <h3 id="robots">Step1：检查可抓取性（Robots 协议）</h3>
    <p>
      Robots 协议（Robots Exclusion Protocol）用来告诉爬虫和搜索引擎哪些页面可以抓取、哪些不可以。
      一般放在网站根目录下的 <code>robots.txt</code> 中。
    </p>
    <pre><code>import urllib.robotparser as rp

def can_fetch(base_url: str, path: str, ua="Mozilla/5.0 (Macintosh; Intel Mac OS X)"):
    robots = rp.RobotFileParser()
    robots.set_url(base_url.rstrip("/") + "/robots.txt")
    try:
        robots.read()
    except:
        return True
    return robots.can_fetch(ua, path)</code></pre>

    <h3 id="http">Step2：建立 http 会话，抓取页面内容</h3>
    <pre><code>import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

def build_session():
    session = requests.Session()
    retry = Retry(total=4, backoff_factor=0.5,
                  status_forcelist=[429, 500, 502, 503, 504],
                  allowed_methods=["GET"])
    adapter = HTTPAdapter(max_retries=retry)
    session.mount("http://", adapter)
    session.mount("https://", adapter)
    return session

def fetch_page(url: str) -&gt; str:
    session = build_session()
    headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X) Safari/605.1.15"}
    resp = session.get(url, headers=headers, timeout=15)
    resp.raise_for_status()
    return resp.text</code></pre>

    <h3 id="bs4">Step3：使用 BeautifulSoup 解析 HTML</h3>
    <p><strong>recursive 的作用</strong>：<code>recursive=True</code> 表示递归向下遍历所有后代节点（默认）；<code>recursive=False</code> 则只在直接子节点里匹配。</p>
    <pre><code>from bs4 import BeautifulSoup

html = """
&lt;div id="content"&gt;
  &lt;ul class="outer"&gt;
    &lt;li&gt;Top-level 1&lt;/li&gt;
    &lt;li&gt;Top-level 2
      &lt;ul class="inner"&gt;
        &lt;li&gt;Nested A&lt;/li&gt;
        &lt;li&gt;Nested B&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
"""

soup = BeautifulSoup(html, "lxml")
ul = soup.select_one("ul.outer")
print([li.get_text(strip=True) for li in ul.find_all("li", recursive=False)])
# ['Top-level 1', 'Top-level 2']
print([li.get_text(strip=True) for li in ul.find_all("li", recursive=True)])
# ['Top-level 1', 'Top-level 2', 'Nested A', 'Nested B']</code></pre>

    <h4>常用入口与解析器</h4>
    <ul>
      <li><strong>构造 Soup</strong>：<code>BeautifulSoup(html, "lxml")</code> 更快更稳；<code>html.parser</code> 内置但性能稍弱</li>
      <li><strong>find / find_all</strong>：根据标签名或属性查找元素</li>
      <li><strong>select / select_one</strong>：根据 CSS 选择器查找（如 <code>soup.select("div.question-item")</code>）</li>
      <li><strong>节点访问</strong>：<code>tag.name</code>、<code>tag.attrs</code>、<code>tag.parent</code>、<code>tag.children</code>、<code>tag.get_text(separator=" ", strip=True)</code></li>
      <li><strong>提取与清理</strong>：<code>tag.decompose()</code> 从树中删除；<code>tag.extract()</code> 摘除并返回</li>
    </ul>

    <h2 id="preprocess">三、数据预处理</h2>
    <h4>数据清洗</h4>
    <ul>
      <li>统一格式（去除无关序号、空格、特殊符号）</li>
      <li>去除垃圾信息（网页中的广告、导航信息等）</li>
      <li>可选：信息归类</li>
    </ul>

    <h4>数据 Chunk</h4>
    <ul>
      <li>对于独立性高的短文本（如题目）一个片段对应一段文本</li>
      <li>段落/句子切分：对较长 sample_answer 按段落或句子分割</li>
      <li>字符长度切分：固定 chunk_size 与 overlap（如 600/80）</li>
      <li>Token 长度切分：用近似 token 计数控制上下文长度</li>
      <li>语义切分（可选）：按语义边界拆分或聚类</li>
      <li>结构切分：按 Part/Topic 建层级或聚合</li>
    </ul>

    <h2 id="vectorize">四、数据向量化、向量存储与检索</h2>

    <h3 id="choose">第 1 步：选型</h3>
    <ul>
      <li><strong>Embedding 选项</strong>：<code>all-MiniLM-L6-v2</code>（小、快、本地）、OpenAI <code>text-embedding-3-small</code>（语义质量高但有成本）</li>
      <li><strong>Vector DB 选项</strong>：FAISS（本地）、Chroma（易用）、Milvus/Weaviate（分布式）、Pinecone（托管）</li>
      <li>开发建议：MiniLM + FAISS，或 OpenAI + Chroma</li>
    </ul>

    <h3 id="embed">第 2 步：文本向量化 Embedding</h3>
    <pre><code>from sentence_transformers import SentenceTransformer
model = SentenceTransformer("all-MiniLM-L6-v2")

def chunk_batches(chunks, batch_size=32):
    for i in range(0, len(chunks), batch_size):
        yield chunks[i:i+batch_size]

for batch in chunk_batches(chunks, batch_size=64):
    texts = [c["text"] for c in batch]
    embeddings = model.encode(texts, show_progress_bar=False, convert_to_numpy=True)</code></pre>

    <h3 id="store">第 3 步：向量存储</h3>
    <pre><code>import faiss, numpy as np

dim = 384  # MiniLM 的维度
index = faiss.IndexHNSWFlat(dim, 32)  # HNSW, M=32
index = faiss.IndexIDMap(index)

vectors = np.array(list_of_embeddings).astype('float32')
ids = np.array(list_of_ids).astype('int64')
index.add_with_ids(vectors, ids)

faiss.write_index(index, "index_hnsw_ivf.bin")  # 持久化

# 检索
k = 5
D, I = index.search(np.array([q_emb]).astype('float32'), k)</code></pre>

    <h3 id="metadata">第 5 步：Metadata 设计</h3>
    <p>向量数据库里不仅要存 embedding，还要存 metadata（用于展示与引用）。</p>
    <pre><code>{
  "id": "chunk-id",
  "source": "file.pdf",
  "page": 3,
  "start_offset": 120,
  "end_offset": 520,
  "title": "Article Title",
  "summary": "optional short summary",
  "created_at": "2025-10-10T12:00:00"
}</code></pre>

    <h3 id="update">第 6 步：向量存储更新</h3>
    <p>为防止数据重复导入，需要为每个 document 片段分配 id（推荐 UUID 或 hash，如 <code>sha1(source+start_offset)</code>）。</p>
    <pre><code>collection.delete(ids=["id1", "id2"])
# 或
collection.delete(where={"source": "old_dataset"})
collection.persist()</code></pre>

    <h3 id="retrieve">第 7 步：数据检索方法</h3>

    <h4>相似度检索</h4>
    <pre><code>from langchain_chroma import Chroma
from langchain.embeddings import OpenAIEmbeddings

emb = OpenAIEmbeddings()
vectordb = Chroma(persist_directory="chroma_store", embedding_function=emb)

docs = vectordb.similarity_search("how to use moreover in essay?", k=5)
docs_with_scores = vectordb.similarity_search_with_score("how to use moreover?", k=10)</code></pre>

    <h4>MMR（Maximum Marginal Relevance）</h4>
    <pre><code>retriever = vectordb.as_retriever(
    search_type="mmr",
    search_kwargs={"k": 5, "fetch_k": 50, "lambda_mult": 0.5}
)
docs = retriever.get_relevant_documents("compare affect vs effect")</code></pre>
    <ul>
      <li><code>fetch_k</code>：先从向量库取多少候选</li>
      <li><code>lambda_mult</code>：多样性系数（0→只按相似度；1→更注重多样性）</li>
    </ul>

    <h2 id="chain">六、构造 RAG 链</h2>
    <img src="/images/blog/feishu/Vmb9b8rkHoE2X0x2rULcg33snTh.png" alt="RAG 链构造流程图">
    <pre><code>retriever = vectordb.as_retriever(search_type="similarity", search_kwargs={"k":4})
from langchain.chains import RetrievalQA
qa_chain = RetrievalQA.from_chain_type(llm=chat_model, chain_type="stuff", retriever=retriever)
answer = qa_chain.run("如何在作文中使用 moreover？")</code></pre>

    <h2 id="test">七、测试优化方法</h2>

    <h3 id="monitor">质量检测与监控建议</h3>
    <ul>
      <li><strong>Sanity checks</strong>：检索返回的 top1 distance 是否在合理范围</li>
      <li><strong>Sample verification</strong>：抽样 5% 检索结果，人工标注相关性</li>
      <li><strong>Logging</strong>：记录 query、retrieved_ids、retrieved_scores、response_time</li>
      <li><strong>Alerting</strong>：当平均 top1 distance &gt; 阈值 或 检索失败率上升时报警</li>
      <li><strong>Caching</strong>：对高频 query 缓存 top-k 结果（如 Redis）</li>
    </ul>

    <h3 id="perf">性能与成本优化</h3>
    <ul>
      <li>减少 embedding 成本：先用小模型做 candidate filtering</li>
      <li>降低延迟：本地 FAISS + HNSW；并发查询（注意锁与线程安全）</li>
      <li>压缩索引：使用 PQ/IVF 进行量化</li>
      <li>批量处理：embedding 批量化，入库批量化</li>
      <li>GPU：FAISS-GPU 或 Milvus GPU 实例</li>
    </ul>

    <h2 id="summary">小结</h2>
    <p>
      RAG 的核心价值是<strong>把检索能力嵌入生成链路</strong>——让 LLM 在生成时获得准确、可追溯、可更新的外部知识。
      工程上的关键点不在某一个具体环节，而在于<strong>各环节之间的协同</strong>：chunking 决定 Embedding 语义质量，
      Embedding 与 Vector Store 决定召回率，Retriever 策略决定 top-k 相关性，Context Injection 决定 LLM 能否合理利用检索结果。
    </p>
    <p>
      高质量数据 + 合理切分 + 可解释的检索 + 严格的生成约束 + 持续评估，是 RAG 系统从 demo 走向生产的关键。
    </p>
  </article>
</body>
</html>`,Jd=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>马尔可夫过程</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; line-height: 1.3; }
    h2 {
      font-size: 26px; font-weight: 700;
      margin: 48px 0 16px;
      padding-left: 14px;
      border-left: 4px solid #16a085;
      scroll-margin-top: 24px;
    }
    h3 {
      font-size: 20px; font-weight: 600;
      margin: 32px 0 12px;
      color: #2c3e50;
      scroll-margin-top: 24px;
    }
    p { margin: 16px 0; }
    a { color: #3498db; }
    code {
      background: rgba(22, 160, 133, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
      color: #117864;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre {
      background: #1e293b; color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 13px; line-height: 1.65;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
    blockquote {
      border-left: 3px solid #16a085;
      padding: 8px 16px;
      margin: 20px 0;
      color: #7f8c8d;
      background: #f4faf7;
      border-radius: 0 8px 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
    }
    th, td {
      border: 1px solid #e5e5e5;
      padding: 8px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #fafafa;
      font-weight: 600;
    }
    ul, ol { padding-left: 1.6em; margin: 16px 0; }
    li { margin: 4px 0; }
    .lead {
      font-size: 17px;
      color: #7f8c8d;
      margin-bottom: 28px;
    }
    em { font-style: italic; }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">
      马尔可夫过程（Markov Process）是强化学习<strong>数学建模</strong>的起点。
      从最简单的马尔可夫链到完整的马尔可夫决策过程（MDP），每一步扩展都为强化学习引入一类新的问题。
    </p>

    <h2 id="markov-property">一、马尔可夫性</h2>
    <img src="/images/blog/feishu/SOaDbn53goONthxQZezc27Byndb.png" alt="马尔可夫性：下一状态只与当前状态有关">
    <p>
      <strong>马尔可夫性</strong>是指<strong>系统的下一状态仅与当前状态有关，与之前的状态无关</strong>。
      用数学语言表述为：
    </p>
    <pre><code>P(S_{t+1} | S_t) = P(S_{t+1} | S_1, S_2, ..., S_t)</code></pre>
    <p>
      即：给定当前状态 <code>S_t</code>，下一状态 <code>S_{t+1}</code> 的条件概率与更早的历史 <code>S_1, ..., S_{t-1}</code> 无关。
      <strong>「现在决定未来，过去不决定未来」</strong>——这是马尔可夫性的核心直觉。
    </p>
    <p>
      具备马尔可夫性的<strong>状态</strong>称为<strong>马尔可夫状态</strong>。
      在强化学习中，状态是否满足马尔可夫性，直接决定了能否套用 MDP 框架进行求解。
    </p>

    <h2 id="markov-chain">二、马尔可夫过程（Markov Process, MP）</h2>
    <p>
      <strong>马尔可夫过程</strong>（又叫<strong>马尔可夫链</strong>，Markov Chain）是满足<strong>马尔可夫性</strong>的<strong>随机过程</strong>，
      由二元组 <code>&lt;S, P&gt;</code> 组成：
    </p>
    <ul>
      <li><strong>S</strong>：有限状态集合</li>
      <li><strong>P</strong>：状态转移概率矩阵，<code>P(s, s') = P(S_{t+1} = s' | S_t = s)</code></li>
    </ul>
    <p>从某一状态出发，根据状态转移概率生成完整的状态序列：<code>S_1, S_2, ..., S_t, ...</code>，这叫做<strong>采样（sampling）</strong>。</p>

    <h3 id="mp-example">示例</h3>
    <p>以「学生一天」为例（无动作、无奖励），状态集合与转移关系：</p>
    <table>
      <thead>
        <tr><th>状态</th><th>含义</th></tr>
      </thead>
      <tbody>
        <tr><td>class 1</td><td>第一节课</td></tr>
        <tr><td>class 2</td><td>第二节课</td></tr>
        <tr><td>class 3</td><td>第三节课</td></tr>
        <tr><td>sleep</td><td>睡觉</td></tr>
      </tbody>
    </table>
    <p>所有状态间的转移概率构成一个 4×4 的矩阵 P，从初始状态出发反复采样，可以得到无数条「状态序列」。</p>

    <h2 id="mrp">三、马尔可夫奖励过程（Markov Reward Process, MRP）</h2>
    <p>
      在马尔可夫过程的基础上<strong>加入奖励函数 R 和折扣因子 γ</strong>，得到四元组 <code>&lt;S, P, R, γ&gt;</code>：
    </p>
    <ul>
      <li><strong>R</strong>：奖励函数，<code>R(s) = E[R_{t+1} | S_t = s]</code>，表示在某状态下获得的即时奖励的期望</li>
      <li><strong>γ</strong>：折扣因子，<code>γ ∈ [0, 1]</code>，权衡「即时奖励」与「未来奖励」的重要性</li>
    </ul>

    <h3 id="return">回报（Return）</h3>
    <p>
      从时刻 t 开始到过程结束的所有奖励的<strong>折扣累加和</strong>称为<strong>回报</strong> <em>G_t</em>：
    </p>
    <pre><code>G_t = R_{t+1} + γ · R_{t+2} + γ² · R_{t+3} + ...
    = Σ_{k=0}^∞ γ^k · R_{t+k+1}</code></pre>
    <p>
      γ 接近 0：更关注「即时奖励」（短视）<br>
      γ 接近 1：更关注「长期奖励」（远视）
    </p>

    <h3 id="value-function-mrp">价值函数（Value Function）</h3>
    <p>
      状态 s 的<strong>价值</strong>定义为从该状态出发的<strong>回报的期望</strong>：
    </p>
    <img src="/images/blog/feishu/K38ebVzz0otpE3xXsYFcMqiQndh.png" alt="采样多条轨迹计算平均回报">
    <img src="/images/blog/feishu/OdsabKeseoFdwkxSsmmcsKmcn1s.png" alt="价值函数与回报的关系">
    <pre><code>V(s) = E[G_t | S_t = s]</code></pre>
    <p>它满足<strong>贝尔曼方程（Bellman Equation）</strong>：</p>
    <pre><code>V(s) = R(s) + γ · Σ_{s'∈S} P(s, s') · V(s')</code></pre>
    <p>
      即：当前状态的价值 = 即时奖励 + 折扣后的下一状态价值的期望。
      通过联立所有状态的方程可以求解出 V(s)，但实际中常用迭代法（动态规划 / 蒙特卡洛 / TD 学习）。
    </p>

    <h2 id="mdp">四、马尔可夫决策过程（MDP）</h2>
    <img src="/images/blog/feishu/KzI3buy1loMtKaxY4N9cotevnkg.png" alt="马尔可夫决策过程示意">
    <p>
      在 MRP 的基础上<strong>再加入动作 A</strong>，就得到了<strong>马尔可夫决策过程</strong>，由五元组 <code>&lt;S, A, P, R, γ&gt;</code> 组成：
    </p>
    <ul>
      <li><strong>S</strong>：状态集合</li>
      <li><strong>A</strong>：动作集合</li>
      <li><strong>P</strong>：状态转移概率，<code>P(s'|s, a) = P(S_{t+1}=s' | S_t=s, A_t=a)</code></li>
      <li><strong>R</strong>：奖励函数，<code>R(s, a) = E[R_{t+1} | S_t=s, A_t=a]</code></li>
      <li><strong>γ</strong>：折扣因子</li>
    </ul>
    <p>
      MDP 是强化学习<strong>最经典、最核心</strong>的数学框架。
      在 MDP 中，<strong>策略 π</strong> 决定智能体在不同状态下如何选择动作：
    </p>
    <pre><code>π(a | s) = P(A_t = a | S_t = s)</code></pre>
    <p>给定策略 π 后，MDP 就退化为一个 MRP，因此<strong>策略 + MRP = 采样轨迹</strong>。</p>

    <h3 id="policy-value">策略下的价值函数</h3>
    <p>
      在策略 π 下，状态价值函数和行为价值函数定义为：
    </p>
    <pre><code>V_π(s) = E_π[G_t | S_t = s]
Q_π(s, a) = E_π[G_t | S_t = s, A_t = a]</code></pre>
    <p>两者满足关系：</p>
    <pre><code>V_π(s) = Σ_{a∈A} π(a|s) · Q_π(s, a)
Q_π(s, a) = R(s, a) + γ · Σ_{s'∈S} P(s'|s, a) · V_π(s')</code></pre>

    <h3 id="bellman-optimality">贝尔曼最优方程</h3>
    <p>
      强化学习的最终目标是找到<strong>最优策略</strong> π*，使得价值最大化。最优价值函数满足<strong>贝尔曼最优方程</strong>：
    </p>
    <pre><code>V*(s) = max_a [ R(s, a) + γ · Σ_{s'∈S} P(s'|s, a) · V*(s') ]
Q*(s, a) = R(s, a) + γ · Σ_{s'∈S} P(s'|s, a) · max_{a'} Q*(s', a')</code></pre>
    <p>
      一旦解出 V* 或 Q*，最优策略可以立即给出：
    </p>
    <pre><code>π*(a|s) = 1  if a = argmax_a Q*(s, a)
        0  otherwise</code></pre>

    <h2 id="evolution">五、概念演进总结</h2>
    <img src="/images/blog/feishu/MA0mbCPynocpj6xX0KIc2KegnQc.png" alt="MDP 求解：策略迭代与价值迭代">
    <img src="/images/blog/feishu/FrTAbpXxaovQvexnPONcZB5Bn3f.png" alt="动态规划求解贝尔曼方程">
    <table>
      <thead>
        <tr>
          <th>概念</th><th>组成</th><th>引入的关键要素</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>马尔可夫过程（MP）</td><td><code>&lt;S, P&gt;</code></td><td>状态 + 转移概率</td></tr>
        <tr><td>马尔可夫奖励过程（MRP）</td><td><code>&lt;S, P, R, γ&gt;</code></td><td>+ 奖励函数、折扣因子</td></tr>
        <tr><td>马尔可夫决策过程（MDP）</td><td><code>&lt;S, A, P, R, γ&gt;</code></td><td>+ 动作、策略</td></tr>
      </tbody>
    </table>
    <img src="/images/blog/feishu/K80PbmPocoaWHRxOX7BcH8u2nRb.png" alt="策略迭代与价值迭代对比">
    <img src="/images/blog/feishu/QeTOb6sj3oqPVuxmZsncD2twngd.png" alt="价值迭代过程示意">
    <img src="/images/blog/feishu/SGeObDF77oBgRax2E42c4IOsnGd.png" alt="策略评估与策略提升">
    <img src="/images/blog/feishu/NA9hbSOvSo33qdxqLgPcNbmenSb.png" alt="贝尔曼最优方程求解">
    <p>
      可以看到，从 MP 到 MRP 到 MDP 是一个<strong>逐步引入决策与价值</strong>的过程：
      MP 描述「环境的随机演化」，MRP 描述「环境演化 + 目标信号」，MDP 描述「环境 + 目标 + 智能体的决策」。
      强化学习的所有算法（Q-learning、Policy Gradient、Actor-Critic 等）本质上都是在<strong>不知道完整 P 或 R 的情况下，对贝尔曼最优方程做近似求解</strong>。
    </p>

    <h2 id="summary">小结</h2>
    <p>
      马尔可夫过程为强化学习提供了<strong>形式化语言</strong>：状态、动作、奖励、折扣因子、策略、价值函数。
      所有强化学习算法都是在<strong>这些变量的不同组合</strong>上做文章——
      有的已知环境模型（Model-Based），有的未知模型只能与环境交互（Model-Free）；
      有的直接优化策略（Policy Gradient），有的先学价值再导出策略（Value-Based / Actor-Critic）。
    </p>
    <p>
      理解 MDP 五元组与贝尔曼最优方程，是理解后续所有 RL 算法的<strong>地基</strong>。
    </p>
  </article>
</body>
</html>`,Yd=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>强化学习基础概念与分类</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      font-family: 'Century Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
      max-width: 760px;
      margin: 40px auto;
      padding: 24px;
      line-height: 1.8;
      color: #2c3e50;
      background: #fff;
    }
    h1 { font-size: 32px; margin-bottom: 16px; color: #2c3e50; line-height: 1.3; }
    h2 {
      font-size: 26px; font-weight: 700;
      margin: 48px 0 16px;
      padding-left: 14px;
      border-left: 4px solid #16a085;
      scroll-margin-top: 24px;
    }
    h3 {
      font-size: 20px; font-weight: 600;
      margin: 32px 0 12px;
      color: #2c3e50;
      scroll-margin-top: 24px;
    }
    p { margin: 16px 0; }
    a { color: #3498db; }
    code {
      background: rgba(22, 160, 133, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
      color: #117864;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre {
      background: #1e293b; color: #e2e8f0;
      padding: 16px 20px;
      border-radius: 12px;
      overflow-x: auto;
      font-size: 13px; line-height: 1.65;
      font-family: 'SF Mono', Monaco, Consolas, monospace;
    }
    pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
    blockquote {
      border-left: 3px solid #16a085;
      padding: 8px 16px;
      margin: 20px 0;
      color: #7f8c8d;
      background: #f4faf7;
      border-radius: 0 8px 8px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
    }
    th, td {
      border: 1px solid #e5e5e5;
      padding: 8px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #fafafa;
      font-weight: 600;
    }
    ul, ol { padding-left: 1.6em; margin: 16px 0; }
    li { margin: 4px 0; }
    .lead {
      font-size: 17px;
      color: #7f8c8d;
      margin-bottom: 28px;
    }
    em { font-style: italic; }
    @media (max-width: 768px) {
      body { padding: 16px; margin: 20px auto; font-size: 15px; }
      h1 { font-size: 26px; }
      h2 { font-size: 22px; }
      h3 { font-size: 18px; }
    }
  </style>
</head>
<body>
  <article>
    <p class="lead">
      强化学习（Reinforcement Learning，RL）是机器学习的一个重要分支：<strong>序贯决策任务的机器学习方法——强化学习（涉及多轮交互）</strong>。
      本文整理其基础概念、关键要素、与监督学习的区别，以及常见的学习范式分类。
    </p>

    <h2 id="definition">一、强化学习的定义</h2>
    <p>
      强化学习是<strong>机器通过与环境交互来实现目标的一种计算方法</strong>。
    </p>
    <img src="/images/blog/feishu/WlsBboLyQottAJxbyS4cUf0rnXf.png" alt="强化学习基本概念示意图">
    <p>
      因为决策任务是多轮的，智能体就需要在每轮做决策时考虑未来环境相应的改变，而不是单步最优决策。
    </p>

    <h3 id="agent">智能体（Agent）</h3>
    <p>强化学习用「智能体（agent）」这个概念来表示做决策的机器。</p>
    <img src="/images/blog/feishu/ZOdYbZrSpo5ao8xQh0ZcOj8bnSd.png" alt="智能体三要素：感知、行动、目标">
    <ul>
      <li><strong>每一轮交互</strong>：智能体在环境中的某一状态下做出动作决策，把这个动作用到环境中，环境发生相应的改变，并将相应的反馈和下一轮状态传回机器。</li>
      <li><strong>优化目标</strong>：最大化在多轮交互中获得累计奖励反馈的<strong>期望</strong></li>
    </ul>
    <p>
      相比于有监督学习中的「模型」，强化学习中的「智能体」强调机器<strong>不但可以感知周围的环境信息，还可以通过做决策来直接改变这个环境</strong>，
      而不只是给出一些预测信号。
    </p>

    <h3 id="key-elements">智能体的关键要素</h3>
    <p>智能体的关键要素可以概括为三个：<strong>感知、行动、目标</strong>。</p>

    <h2 id="elements">二、强化学习系统的要素</h2>

    <h3 id="history">历史（History）</h3>
    <p>
      历史是<strong>观察、行动和奖励的序列</strong>，即智能体到目前为止所经历的全部信息。
      是强化学习最原始的视角——所有后续概念都是对历史的压缩。
    </p>
    <img src="/images/blog/feishu/QWv4buzaeoUyZUxMXfTcJEIUn9b.png" alt="历史：观察、行动、奖励序列">

    <h3 id="state">状态（State）</h3>
    <p>
      状态是<strong>关于历史的函数</strong>，用于确定接下来会发生的事情（行动、观察、奖励）的信息。
      状态是对历史的提炼，是决策与预测的基础。
    </p>
    <img src="/images/blog/feishu/Ez20barmyoa3cvxQgIWc2qtHnJe.png" alt="状态是关于历史的函数">

    <h3 id="policy">策略（Policy）</h3>
    <p>
      策略是<strong>从状态到行动的映射</strong> <em>A = F(S)</em>，用来学习智能体在特定时间的行为方式。
      策略有两种基本形式：
    </p>
    <img src="/images/blog/feishu/Xh4bbcvv2oAPPIxxB0WcuF9zn1f.png" alt="策略：状态到行动的映射">
    <ul>
      <li><strong>确定性策略</strong>：给定状态输出唯一动作</li>
      <li><strong>随机策略</strong>：给定状态输出动作的概率分布</li>
    </ul>

    <h3 id="reward">奖励（Reward）</h3>
    <p>
      一个定义强化学习目标的<strong>标量</strong> <em>R(s, a)</em>。
      奖励是<strong>即时的</strong>反馈信号，用来评价当前这一步动作的好坏。
    </p>

    <h3 id="value-function">价值函数（Value Function）</h3>
    <p>
      价值函数也是一个<strong>标量</strong>，用于对未来累积奖励的预测（对于长期来说什么是好的）。
      与奖励的区别在于：<strong>奖励是即时的，价值是对未来收益的估计</strong>。
    </p>
    <img src="/images/blog/feishu/BZsWbIMxWobmvPx8W31cu34snBe.png" alt="价值函数：未来累积奖励的预测">

    <h2 id="vs-sl">三、强化学习与有监督学习的区别</h2>
    <img src="/images/blog/feishu/VKDBbWNwzoe9mUxSkGEcKDgWnKh.png" alt="有监督学习训练数据分布固定">
    <table>
      <thead>
        <tr><th>维度</th><th>有监督学习</th><th>强化学习</th></tr>
      </thead>
      <tbody>
        <tr><td>训练数据分布</td><td>固定不变</td><td>随智能体的学习而改变</td></tr>
        <tr><td>数据来源</td><td>预先标注的样本</td><td>智能体与环境交互产生</td></tr>
        <tr><td>优化目标</td><td>在给定数据分布下使损失函数期望最小</td><td>在交互数据分布下使奖励期望最大</td></tr>
        <tr><td>反馈形式</td><td>标签（正确答案）</td><td>奖励（仅评价，不直接告诉怎么做）</td></tr>
      </tbody>
    </table>

    <h3 id="occupancy">占用度量（关于 RL 中数据分布的一个概念）</h3>
    <img src="/images/blog/feishu/CK3XbdtzIoupbexOb4DcRUtBnah.png" alt="强化学习训练数据分布随智能体变化">
    <p>
      归一化的占用度量用于衡量在一个智能体决策与一个动态环境的交互过程中，
      <strong>采样到一个具体的状态动作对（state-action pair）的概率分布</strong>。
    </p>
    <ul>
      <li><strong>性质</strong>：给定两个策略及其与一个动态环境交互得到的两个占用度量，那么当且仅当这两个占用度量相同时，这两个策略相同。</li>
      <li><strong>由性质推导出强化学习的本质</strong>：
        <ul>
          <li>强化学习的一大难点就在于，智能体看到的数据分布是<strong>随着智能体的学习而不断发生改变</strong>的。</li>
          <li>占有度量是状态动作对的概率分布，而策略是动作到状态的映射。对智能体的策略进行优化的目标是使其奖励最大化，可以表达为一个<strong>占有度量下对应的奖励的期望</strong>。</li>
        </ul>
      </li>
    </ul>

    <h3 id="paradigm-diff">范式对比总结</h3>
    <ul>
      <li>一般的有监督学习关注寻找一个模型，使其在<strong>给定数据分布</strong>下得到的损失函数的期望最小。（数据分布确定）</li>
      <li>强化学习关注寻找一个智能体策略，最大化其<strong>与环境交互的过程所产生的数据分布</strong>下，给定奖励函数的期望。（目标函数确定）</li>
    </ul>

    <h2 id="classification">四、强化学习分类</h2>
    <img src="/images/blog/feishu/Sp6EbX1hgoqsFpxG9AfcySe2nwh.png" alt="强化学习分类全景图">

    <h3 id="by-env">按照环境是否已知划分：免模型 vs 有模型</h3>
    <table>
      <thead>
        <tr><th>类别</th><th>核心思想</th><th>典型算法</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>免模型学习（Model-Free）</strong></td>
          <td>不去学习和理解环境，环境给出什么信息就是什么信息</td>
          <td>Policy Optimization、Q-learning</td>
        </tr>
        <tr>
          <td><strong>有模型学习（Model-Based）</strong></td>
          <td>去学习和理解环境，学会用一个模型来模拟环境，通过模拟的环境来得到反馈</td>
          <td>World Models、AlphaZero 等</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p>一般情况下，环境都是不可知的，所以实践中<strong>主要研究无模型问题</strong>。</p>
    </blockquote>

    <h3 id="by-onoff">按照学习方式划分：在线策略 vs 离线策略</h3>
    <table>
      <thead>
        <tr><th>类别</th><th>特征</th><th>典型算法</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>在线策略（On-Policy）</strong></td>
          <td>agent 必须本人在场，并且一定是本人<strong>边玩边学习</strong></td>
          <td>Sarsa</td>
        </tr>
        <tr>
          <td><strong>离线策略（Off-Policy）</strong></td>
          <td>agent 可以选择自己玩，也可以选择看着别人玩，从过往的经验中学习。过往的经历<strong>没必要是自己的</strong>，玩和学习的时间可以不同步</td>
          <td>Q-learning、Deep Q Network</td>
        </tr>
      </tbody>
    </table>

    <h3 id="by-target">按照学习目标划分：基于策略 vs 基于价值</h3>
    <table>
      <thead>
        <tr><th>类别</th><th>输出</th><th>适用动作空间</th><th>典型算法</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>基于策略（Policy-Based）</strong></td>
          <td>下一步动作的概率，根据概率来选取动作</td>
          <td>非连续和连续</td>
          <td>Policy Gradients</td>
        </tr>
        <tr>
          <td><strong>基于价值（Value-Based）</strong></td>
          <td>动作的价值，选择价值最高的动作</td>
          <td>非连续</td>
          <td>Q-learning、Deep Q Network、Sarsa</td>
        </tr>
        <tr>
          <td><strong>Actor-Critic（二者结合）</strong></td>
          <td>Actor 根据概率做出动作，Critic 根据动作给出价值，加速学习</td>
          <td>连续 / 非连续</td>
          <td>A2C、A3C、DDPG</td>
        </tr>
      </tbody>
    </table>

    <h2 id="summary">小结</h2>
    <p>
      强化学习与有监督学习的<strong>根本分歧</strong>在于：数据分布是固定的还是随智能体变化的。
      这一分歧导致强化学习的所有概念（策略、价值、占用度量）都围绕「在变化的数据分布下优化长期奖励」这一目标展开。
    </p>
    <p>
      实际工程中，往往需要把多种范式<strong>组合使用</strong>：例如 Actor-Critic 架构结合了 Policy-Based 的动作采样能力与 Value-Based 的长期评估能力，
      DQN 则是 Value-Based + 神经网络 + 经验回放的经典组合。理解这些范式的<strong>核心动机</strong>比记住具体公式更重要。
    </p>
  </article>
</body>
</html>`,Zd=Object.assign({"../blogs/ai-app/agent-team.html":jd,"../blogs/ai-app/claude-code-tips.html":Vd,"../blogs/dev-basics/dart.html":Nd,"../blogs/dev-basics/flutter.html":Kd,"../blogs/dev-basics/unity-xr.html":Ud,"../blogs/english/ielts.html":Gd,"../blogs/llm-agent/harness-intro.html":qd,"../blogs/llm-agent/kv-cache.html":Wd,"../blogs/llm-agent/mcp-cli-skill-plugin.html":Xd,"../blogs/llm-agent/rag-concepts.html":Qd,"../blogs/reinforcement-learning/markov-process.html":Jd,"../blogs/reinforcement-learning/rl-basics.html":Yd});function tu(t,n){const e=ft(Te.find(p=>p.categoryId===t.value&&p.id===n.value)??null),o=ft(""),i=ft([]),r=ft(!0),s=ft(null);function l(p){const c=[],g=p.replace(/^\.\//,"");return c.push(`../blogs/${g}`),c.push(`./${g}`),c.push(p),c.map(f=>Zd[f]).find(Boolean)}async function a(){r.value=!0,s.value=null,o.value="",i.value=[];try{const p=Te.find(k=>k.categoryId===t.value&&k.id===n.value);if(!p){s.value=`未找到博客：${t.value}/${n.value}`,e.value=null;return}e.value=p;const c=l(p.htmlPath);if(!c)throw new Error(`HTML 模块未找到：${p.htmlPath}`);const m=new DOMParser().parseFromString(c,"text/html").body;m.querySelectorAll("script").forEach(k=>k.remove()),o.value=m.innerHTML,i.value=Array.from(m.querySelectorAll("h1[id], h2[id], h3[id]")).map(k=>({id:k.id,text:(k.textContent??"").trim(),level:parseInt(k.tagName.charAt(1),10)}))}catch(p){const c=p instanceof Error?p.message:String(p);s.value=`加载博客失败：${c}`,console.error("[useBlogPost]",p)}finally{r.value=!1}}return kn([t,n],a,{immediate:!0}),{postMeta:e,bodyHtml:o,toc:i,loading:r,error:s,reload:a}}function nu(t,n,e){let o=null;function i(){o?.disconnect(),o=null}function r(){i(),!(!t.value||n.value.length===0)&&(o=new IntersectionObserver(l=>{const a=l.filter(p=>p.isIntersecting).sort((p,c)=>p.boundingClientRect.top-c.boundingClientRect.top);a[0]&&(e.value=a[0].target.id)},{rootMargin:"-80px 0px -75% 0px",threshold:[0,.5,1]}),n.value.forEach(l=>{const a=t.value?.querySelector(`#${CSS.escape(l.id)}`);a&&o.observe(a)}))}function s(){requestAnimationFrame(()=>requestAnimationFrame(r))}pe(s),kn(()=>n.value,s,{flush:"post"}),Eo(i)}const eu={key:0,class:"toc"},ou={class:"toc__list"},iu=["href","onClick"],ru=xt({__name:"TableOfContents",props:{toc:{},activeId:{}},emits:["navigate"],setup(t,{emit:n}){const e=n;function o(i){e("navigate",i)}return(i,r)=>i.toc.length>0?(F(),B("nav",eu,[r[0]||(r[0]=y("h4",{class:"toc__title"},"Contents",-1)),y("ul",ou,[(F(!0),B(ct,null,An(i.toc,s=>(F(),B("li",{key:s.id,class:en(["toc__item",`toc__item--h${s.level}`,{active:s.id===i.activeId}])},[y("a",{class:"toc__link",href:`#${s.id}`,onClick:Sa(l=>o(s.id),["prevent"])},nt(s.text),9,iu)],2))),128))])])):mt("",!0)}}),su=Rt(ru,[["__scopeId","data-v-bb4f35d1"]]);function lu(t){const n=ft(0);let e=0;function o(){e=0;const r=t.value;if(!r){n.value=0;return}const{top:s,height:l}=r.getBoundingClientRect(),a=window.innerHeight,p=Math.max(1,l-a),c=Math.min(p,Math.max(0,-s));n.value=Math.min(1,Math.max(0,c/p))}function i(){e||(e=requestAnimationFrame(o))}return pe(()=>{o(),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i,{passive:!0})}),Eo(()=>{e&&cancelAnimationFrame(e),window.removeEventListener("scroll",i),window.removeEventListener("resize",i)}),{progress:n}}const au={class:"reading-progress","aria-hidden":"true"},cu=xt({__name:"ReadingProgress",props:{target:{}},setup(t){const n=t,e=lt(()=>n.target),{progress:o}=lu(e),i=lt(()=>({transform:`scaleX(${o.value})`}));return(r,s)=>(F(),B("div",au,[y("div",{class:"reading-progress__bar",style:ze(i.value)},null,4)]))}}),du=Rt(cu,[["__scopeId","data-v-a9d0ff0b"]]),uu={class:"breadcrumb","aria-label":"breadcrumb"},pu={key:1,class:"breadcrumb__sep"},gu={key:2,class:"breadcrumb__current"},fu=xt({__name:"PostBreadcrumb",props:{categoryId:{},postTitle:{}},setup(t){const n=t,e=lt(()=>Ue(n.categoryId));return(o,i)=>{const r=Rn("router-link");return F(),B("nav",uu,[X(r,{to:"/blog",class:"breadcrumb__link"},{default:ht(()=>i[0]||(i[0]=[Pt("Blogs",-1)])),_:1,__:[0]}),i[1]||(i[1]=y("span",{class:"breadcrumb__sep"},"/",-1)),e.value?(F(),Xt(r,{key:0,to:`/blog/${e.value.id}`,class:"breadcrumb__link"},{default:ht(()=>[Pt(nt(e.value.name),1)]),_:1},8,["to"])):mt("",!0),o.postTitle?(F(),B("span",pu,"/")):mt("",!0),o.postTitle?(F(),B("span",gu,nt(o.postTitle),1)):mt("",!0)])}}}),hu=Rt(fu,[["__scopeId","data-v-822f602e"]]),mu={class:"not-found"},bu={class:"not-found__actions"},vu=xt({__name:"BlogPostNotFound",setup(t){const n=Bo();function e(){window.history.length>1?n.back():n.push("/blog")}return(o,i)=>{const r=Rn("router-link");return F(),B("div",mu,[i[1]||(i[1]=y("div",{class:"not-found__icon"},"🔍",-1)),i[2]||(i[2]=y("h2",{class:"not-found__title"},"文章未找到",-1)),i[3]||(i[3]=y("p",{class:"not-found__desc"}," 你访问的博客可能已被移除或路径错误。 ",-1)),y("div",bu,[X(r,{to:"/blog",class:"not-found__btn not-found__btn--primary"},{default:ht(()=>i[0]||(i[0]=[Pt(" 返回博客 ",-1)])),_:1,__:[0]}),y("button",{class:"not-found__btn",onClick:e},"返回上一页")])])}}}),_u=Rt(vu,[["__scopeId","data-v-a4417052"]]),xu={class:"my-box"},yu={class:"container"},wu={key:0,class:"post-loading"},Cu={key:1,class:"post-error"},Su={key:3,class:"section post-layout"},ku={class:"post-container"},Au={class:"post-hero"},Pu={class:"post-hero__meta"},Ru={class:"post-hero__date"},Mu={class:"post-hero__readtime"},Tu={class:"post-hero__title"},Iu={key:0,class:"post-hero__lead"},Eu={key:1,class:"post-hero__tags"},Lu=["innerHTML"],Ou={key:1,class:"post-pager"},Fu={class:"post-pager__title"},zu={key:1,class:"post-pager__item post-pager__item--empty"},Du={class:"post-pager__title"},Hu={key:0,class:"post-toc"},$u=xt({__name:"BlogPostView",props:{categoryId:{},postId:{}},setup(t){const n=t,e=es(),o=ft(null),i=Wo(n,"categoryId"),r=Wo(n,"postId"),{postMeta:s,bodyHtml:l,toc:a,loading:p,error:c}=tu(i,r),g=lt(()=>s.value?Ue(s.value.categoryId):null),f=lt(()=>s.value?ld(s.value.categoryId,s.value.id):{prev:null,next:null}),m=ft("");nu(o,a,m);function k(M){const I=document.getElementById(M);if(!I)return;const E=I.getBoundingClientRect().top+window.scrollY-80-16;window.scrollTo({top:E,behavior:"smooth"}),history.replaceState(null,"",`#${M}`),m.value=M}return pe(()=>{window.scrollTo({top:0})}),kn(()=>e.hash,M=>{M&&requestAnimationFrame(()=>{const I=document.querySelector(M);I&&k(I.id)})}),(M,I)=>{const z=Rn("router-link");return F(),B("div",xu,[y("div",yu,[J(p)?(F(),B("div",wu,I[0]||(I[0]=[y("div",{class:"post-loading__spinner"},null,-1),y("p",null,"正在加载文章...",-1)]))):J(c)?(F(),B("div",Cu,[I[2]||(I[2]=y("div",{class:"post-error__icon"},"⚠️",-1)),I[3]||(I[3]=y("h2",null,"加载失败",-1)),y("p",null,nt(J(c)),1),X(z,{to:"/blog",class:"post-error__link"},{default:ht(()=>I[1]||(I[1]=[Pt("返回博客 →",-1)])),_:1,__:[1]})])):J(s)?(F(),B("section",Su,[X(du,{target:o.value},null,8,["target"]),X(hu,{"category-id":J(s).categoryId,"post-title":J(s).title},null,8,["category-id","post-title"]),y("div",ku,[y("article",{ref_key:"articleRef",ref:o,class:"post-content post-body"},[y("header",Au,[y("div",Pu,[g.value?(F(),Xt(z,{key:0,to:`/blog/${g.value.id}`,class:"post-hero__category"},{default:ht(()=>[Pt(nt(g.value.name),1)]),_:1},8,["to"])):mt("",!0),I[5]||(I[5]=y("span",{class:"post-hero__sep"},"·",-1)),y("time",Ru,nt(J(s).updateTime),1),J(s).readTime?(F(),B(ct,{key:1},[I[4]||(I[4]=y("span",{class:"post-hero__sep"},"·",-1)),y("span",Mu,nt(J(s).readTime),1)],64)):mt("",!0)]),y("h1",Tu,nt(J(s).title),1),J(s).description?(F(),B("p",Iu,nt(J(s).description),1)):mt("",!0),J(s).tags?.length?(F(),B("div",Eu,[(F(!0),B(ct,null,An(J(s).tags,E=>(F(),B("span",{key:E,class:"post-hero__tag"}," #"+nt(E),1))),128))])):mt("",!0)]),J(l)?(F(),B("div",{key:0,class:"post-body__content",innerHTML:J(l)},null,8,Lu)):mt("",!0),f.value.prev||f.value.next?(F(),B("nav",Ou,[f.value.prev?(F(),Xt(z,{key:0,to:`/blog/${f.value.prev.categoryId}/${f.value.prev.id}`,class:"post-pager__item post-pager__item--prev"},{default:ht(()=>[I[6]||(I[6]=y("span",{class:"post-pager__direction"},"← Previous",-1)),y("span",Fu,nt(f.value.prev.title),1)]),_:1,__:[6]},8,["to"])):(F(),B("span",zu)),f.value.next?(F(),Xt(z,{key:2,to:`/blog/${f.value.next.categoryId}/${f.value.next.id}`,class:"post-pager__item post-pager__item--next"},{default:ht(()=>[I[7]||(I[7]=y("span",{class:"post-pager__direction"},"Next →",-1)),y("span",Du,nt(f.value.next.title),1)]),_:1,__:[7]},8,["to"])):mt("",!0)])):mt("",!0)],512),J(a).length>0?(F(),B("aside",Hu,[X(su,{toc:J(a),"active-id":m.value,onNavigate:k},null,8,["toc","active-id"])])):mt("",!0)])])):(F(),Xt(_u,{key:2}))])])}}}),Bu=Rt($u,[["__scopeId","data-v-8dbff083"]]),ju={class:"my-box"},Vu={class:"container"},Nu={class:"section"},Ku={class:"projects-grid"},Uu=["onClick"],Gu={class:"card-image"},qu=["src","alt"],Wu={class:"card-content"},Xu={class:"card-title"},Qu={class:"card-description"},Ju={class:"card-meta"},Yu={class:"project-time"},Zu=xt({__name:"ProjectView",setup(t){Bo();const n=ft([{id:2,title:"三模态Few-shot图像分割的交互式特征融合与匹配网络",description:"构建了新型交互式特征融合与匹配网络，并提出两个新模块，在VDT-2048-5i数据集上取得SOTA效果。",coverImage:"/images/project/3.png",time:"2023年11月 - 2024年8月"},{id:3,title:"Linker - 星星连连看",description:"基于图像特征匹配与自研算法绘制星座图，纪念宠物，负责前端web开发，基于 Vue 2 框架。",coverImage:"/images/project/2.png",time:"2024年6月 - 2025年7月"},{id:4,title:"Plantmon - 植物宝可梦",description:"获得Adventure-X黑客松赛道二等奖*1、三等奖*1，负责战斗模块的实现与部分前端开发。",coverImage:"/images/project/4.png",time:"2025年7月"}]);ft([{id:1,title:"Unity XR 开发",description:"Unity XR 开发的学习笔记及相关资料链接。",coverImage:"/images/blog/unityXR.png",updateTime:"2025年4月25日",url:"https://j2w8lfcfsi.feishu.cn/wiki/GeKhwi4hmipVKgknIVdcO1JXnGh?from=from_copylink"},{id:2,title:"强化学习",description:"强化学习基础理论笔记。",coverImage:"/images/blog/RL.png",updateTime:"2024年1月28日",url:"https://j2w8lfcfsi.feishu.cn/wiki/WxZ6wAsrXiDcqDkreVQcItgqnFe?from=from_copylink"},{id:3,title:"雅思IELTS",description:"雅思备考经验分享。",coverImage:"/images/blog/IELTS.jpg",updateTime:"2023年4月25日",url:"https://j2w8lfcfsi.feishu.cn/wiki/VAyLwKKykiqJTckNcUycoSTLnFd?from=from_copylink"}]);const e=o=>{console.log(`跳转到项目 ${o} 详情页`)};return(o,i)=>(F(),B("div",ju,[y("div",Vu,[y("section",Nu,[i[0]||(i[0]=y("h2",{class:"section-title"},"Projects",-1)),y("div",Ku,[(F(!0),B(ct,null,An(n.value,r=>(F(),B("div",{key:r.id,class:"project-card",onClick:s=>e(r.id)},[y("div",Gu,[y("img",{src:r.coverImage,alt:r.title},null,8,qu)]),y("div",Wu,[y("h3",Xu,nt(r.title),1),y("p",Qu,nt(r.description),1),y("div",Ju,[y("span",Yu,nt(r.time),1)])])],8,Uu))),128))])])])]))}}),tp=Rt(Zu,[["__scopeId","data-v-1aaedf96"]]),np="/assets/2-eHR59pLe.jpg",ep=Object.freeze(Object.defineProperty({__proto__:null,default:np},Symbol.toStringTag,{value:"Module"})),op="/assets/4-BJkfqce8.jpg",ip=Object.freeze(Object.defineProperty({__proto__:null,default:op},Symbol.toStringTag,{value:"Module"})),rp="/assets/6-VrSckUP4.jpg",sp=Object.freeze(Object.defineProperty({__proto__:null,default:rp},Symbol.toStringTag,{value:"Module"})),lp="/assets/7-DxL9htMk.jpg",ap=Object.freeze(Object.defineProperty({__proto__:null,default:lp},Symbol.toStringTag,{value:"Module"})),cp="/assets/9-YGexQ8js.jpg",dp=Object.freeze(Object.defineProperty({__proto__:null,default:cp},Symbol.toStringTag,{value:"Module"})),up={class:"container"},pp=["src","alt"],gp=xt({__name:"AlbumView",setup(t){const n=ft([]),e=async()=>{try{const p=Object.assign({"/public/images/album/2.jpg":ep,"/public/images/album/4.jpg":ip,"/public/images/album/6.jpg":sp,"/public/images/album/7.jpg":ap,"/public/images/album/9.jpg":dp}),c=[];Object.keys(p).forEach(g=>{const f=g.split("/").pop();f&&c.push(f)}),c.sort((g,f)=>{const m=parseInt(g.match(/\d+/)?.[0]||"0"),k=parseInt(f.match(/\d+/)?.[0]||"0");return m-k}),n.value=c}catch(p){console.error("加载图片失败:",p),n.value=["2.jpg","4.jpg"]}},o=ft(),i=ft();let r=null,s=ft(1),l=0;const a=()=>{if(o.value&&i.value){const g=()=>{i.value&&o.value&&(l=i.value.scrollWidth/2-o.value.clientWidth)};i.value.innerHTML+=i.value.innerHTML,setTimeout(g,50);const f=()=>{if(o.value&&i.value){const m=o.value.scrollLeft;s.value===1&&m>=l?s.value=-1:s.value===-1&&m<=0&&(s.value=1),o.value.scrollLeft+=s.value*1}};r=setInterval(f,5),o.value.addEventListener("mouseenter",()=>{r&&clearInterval(r)}),o.value.addEventListener("mouseleave",()=>{r=setInterval(f,5)})}};return pe(async()=>{await e(),setTimeout(()=>{a()},200)}),Lo(()=>{r&&clearInterval(r)}),(p,c)=>(F(),B("div",up,[y("div",{class:"album-container",ref_key:"albumContainer",ref:o},[y("div",{class:"photos",ref_key:"photosContainer",ref:i},[(F(!0),B(ct,null,An(n.value,(g,f)=>(F(),B(ct,{key:f},[y("img",{src:`/images/album/${g}`,alt:`Image ${f+1}`},null,8,pp),c[0]||(c[0]=y("div",{class:"margin"},null,-1))],64))),128))],512)],512)]))}}),fp=Rt(gp,[["__scopeId","data-v-cd1ae3d9"]]),hp=Lc({history:ac("/"),routes:[{path:"/",name:"home",component:ed},{path:"/biography",name:"biography",component:sd},{path:"/blog",name:"blog",component:Ad},{path:"/blog/:categoryId",name:"blog-category",component:Bd,props:!0},{path:"/blog/:categoryId/:postId",name:"blog-post",component:Bu,props:!0},{path:"/project",name:"project",component:tp},{path:"/album",name:"album",component:fp}],scrollBehavior(t,n,e){if(e)return e;if(t.hash)return{el:t.hash,behavior:"smooth",top:80};if(t.path!==n.path)return{top:0}}}),jo=Pa(Wc);jo.use(Ia());jo.use(hp);jo.mount("#app");
