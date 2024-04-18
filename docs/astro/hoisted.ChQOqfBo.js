/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=window,Ke=ae.ShadowRoot&&(ae.ShadyCSS===void 0||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),Xe=new WeakMap;let gt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ke&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Xe.set(t,e))}return e}toString(){return this.cssText}};const en=n=>new gt(typeof n=="string"?n:n+"",void 0,ze),me=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,o,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[s+1],n[0]);return new gt(t,n,ze)},tn=(n,e)=>{Ke?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),o=ae.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,n.appendChild(i)})},Ge=Ke?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return en(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $e;const le=window,Je=le.trustedTypes,nn=Je?Je.emptyScript:"",Qe=le.reactiveElementPolyfillSupport,Le={toAttribute(n,e){switch(e){case Boolean:n=n?nn:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},bt=(n,e)=>e!==n&&(e==e||n==n),we={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:bt},Ie="finalized";let B=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=we){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const s=this[e];this[t]=o,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||we}static finalize(){if(this.hasOwnProperty(Ie))return!1;this[Ie]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(Ge(o))}else e!==void 0&&t.push(Ge(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return tn(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=we){var o;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Le).toAttribute(t,i.type);this._$El=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,s=o._$Ev.get(e);if(s!==void 0&&this._$El!==s){const r=o.getPropertyOptions(s),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Le;this._$El=s,this[s]=l.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||bt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};B[Ie]=!0,B.elementProperties=new Map,B.elementStyles=[],B.shadowRootOptions={mode:"open"},Qe?.({ReactiveElement:B}),(($e=le.reactiveElementVersions)!==null&&$e!==void 0?$e:le.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ae;const ce=window,z=ce.trustedTypes,Ze=z?z.createPolicy("lit-html",{createHTML:n=>n}):void 0,de="$lit$",H=`lit$${(Math.random()+"").slice(9)}$`,Ve="?"+H,on=`<${Ve}>`,I=document,G=()=>I.createComment(""),J=n=>n===null||typeof n!="object"&&typeof n!="function",_t=Array.isArray,$t=n=>_t(n)||typeof n?.[Symbol.iterator]=="function",Ee=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,tt=/>/g,R=RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,it=/"/g,wt=/^(?:script|style|textarea|title)$/i,sn=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),x=sn(1),S=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ot=new WeakMap,L=I.createTreeWalker(I,129,null,!1);function At(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ze!==void 0?Ze.createHTML(e):e}const Et=(n,e)=>{const t=n.length-1,i=[];let o,s=e===2?"<svg>":"",r=Y;for(let l=0;l<t;l++){const a=n[l];let c,u,f=-1,d=0;for(;d<a.length&&(r.lastIndex=d,u=r.exec(a),u!==null);)d=r.lastIndex,r===Y?u[1]==="!--"?r=et:u[1]!==void 0?r=tt:u[2]!==void 0?(wt.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=R):u[3]!==void 0&&(r=R):r===R?u[0]===">"?(r=o??Y,f=-1):u[1]===void 0?f=-2:(f=r.lastIndex-u[2].length,c=u[1],r=u[3]===void 0?R:u[3]==='"'?it:nt):r===it||r===nt?r=R:r===et||r===tt?r=Y:(r=R,o=void 0);const h=r===R&&n[l+1].startsWith("/>")?" ":"";s+=r===Y?a+on:f>=0?(i.push(c),a.slice(0,f)+de+a.slice(f)+H+h):a+H+(f===-2?(i.push(void 0),l):h)}return[At(n,s+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};class Q{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,r=0;const l=e.length-1,a=this.parts,[c,u]=Et(e,t);if(this.el=Q.createElement(c,i),L.currentNode=this.el.content,t===2){const f=this.el.content,d=f.firstChild;d.remove(),f.append(...d.childNodes)}for(;(o=L.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes()){const f=[];for(const d of o.getAttributeNames())if(d.endsWith(de)||d.startsWith(H)){const h=u[r++];if(f.push(d),h!==void 0){const p=o.getAttribute(h.toLowerCase()+de).split(H),v=/([.?@])?(.*)/.exec(h);a.push({type:1,index:s,name:v[2],strings:p,ctor:v[1]==="."?xt:v[1]==="?"?jt:v[1]==="@"?St:ne})}else a.push({type:6,index:s})}for(const d of f)o.removeAttribute(d)}if(wt.test(o.tagName)){const f=o.textContent.split(H),d=f.length-1;if(d>0){o.textContent=z?z.emptyScript:"";for(let h=0;h<d;h++)o.append(f[h],G()),L.nextNode(),a.push({type:2,index:++s});o.append(f[d],G())}}}else if(o.nodeType===8)if(o.data===Ve)a.push({type:2,index:s});else{let f=-1;for(;(f=o.data.indexOf(H,f+1))!==-1;)a.push({type:7,index:s}),f+=H.length-1}s++}}static createElement(e,t){const i=I.createElement("template");return i.innerHTML=e,i}}function N(n,e,t=n,i){var o,s,r,l;if(e===S)return e;let a=i!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[i]:t._$Cl;const c=J(e)?void 0:e._$litDirective$;return a?.constructor!==c&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(n),a._$AT(n,t,i)),i!==void 0?((r=(l=t)._$Co)!==null&&r!==void 0?r:l._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=N(n,a._$AS(n,e.values),a,i)),e}class kt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:o}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:I).importNode(i,!0);L.currentNode=s;let r=L.nextNode(),l=0,a=0,c=o[0];for(;c!==void 0;){if(l===c.index){let u;c.type===2?u=new F(r,r.nextSibling,this,e):c.type===1?u=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(u=new Tt(r,this,e)),this._$AV.push(u),c=o[++a]}l!==c?.index&&(r=L.nextNode(),l++)}return L.currentNode=I,s}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class F{constructor(e,t,i,o){var s;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cp=(s=o?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),J(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):$t(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&J(this._$AH)?this._$AA.nextSibling.data=e:this.$(I.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Q.createElement(At(o.h,o.h[0]),this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(i);else{const r=new kt(s,this),l=r.u(this.options);r.v(i),this.$(l),this._$AH=r}}_$AC(e){let t=ot.get(e.strings);return t===void 0&&ot.set(e.strings,t=new Q(e)),t}T(e){_t(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new F(this.k(G()),this.k(G()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}let ne=class{constructor(e,t,i,o,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const s=this.strings;let r=!1;if(s===void 0)e=N(this,e,t,0),r=!J(e)||e!==this._$AH&&e!==S,r&&(this._$AH=e);else{const l=e;let a,c;for(e=s[0],a=0;a<s.length-1;a++)c=N(this,l[i+a],t,a),c===S&&(c=this._$AH[a]),r||(r=!J(c)||c!==this._$AH[a]),c===g?e=g:e!==g&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}r&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class xt extends ne{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}const rn=z?z.emptyScript:"";class jt extends ne{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,rn):this.element.removeAttribute(this.name)}}class St extends ne{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=N(this,e,t,0))!==null&&i!==void 0?i:g)===S)return;const o=this._$AH,s=e===g&&o!==g||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==g&&(o===g||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Tt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const an={O:de,P:H,A:Ve,C:1,M:Et,L:kt,R:$t,D:N,I:F,V:ne,H:jt,N:St,U:xt,F:Tt},st=ce.litHtmlPolyfillSupport;st?.(Q,F),((Ae=ce.litHtmlVersions)!==null&&Ae!==void 0?Ae:ce.litHtmlVersions=[]).push("2.8.0");const ln=(n,e,t)=>{var i,o;const s=(i=t?.renderBefore)!==null&&i!==void 0?i:e;let r=s._$litPart$;if(r===void 0){const l=(o=t?.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=r=new F(e.insertBefore(G(),l),l,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke,xe;let P=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ln(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return S}};P.finalized=!0,P._$litElement$=!0,(ke=globalThis.litElementHydrateSupport)===null||ke===void 0||ke.call(globalThis,{LitElement:P});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:P});((xe=globalThis.litElementVersions)!==null&&xe!==void 0?xe:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:o,elements:s}=i;return{kind:o,elements:s,finisher(r){customElements.define(t,r)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cn=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},dn=(n,e,t)=>{e.constructor.createProperty(t,n)};function A(n){return(e,t)=>t!==void 0?dn(n,e,t):cn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O(n){return A({...n,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var je;((je=window.HTMLSlotElement)===null||je===void 0?void 0:je.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ie=n=>(...e)=>({_$litDirective$:n,values:e});class oe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:hn}=an,Ht=n=>n.strings===void 0,at=()=>document.createComment(""),W=(n,e,t)=>{var i;const o=n._$AA.parentNode,s=e===void 0?n._$AB:e._$AA;if(t===void 0){const r=o.insertBefore(at(),s),l=o.insertBefore(at(),s);t=new hn(r,l,n,n.options)}else{const r=t._$AB.nextSibling,l=t._$AM,a=l!==n;if(a){let c;(i=t._$AQ)===null||i===void 0||i.call(t,n),t._$AM=n,t._$AP!==void 0&&(c=n._$AU)!==l._$AU&&t._$AP(c)}if(r!==s||a){let c=t._$AA;for(;c!==r;){const u=c.nextSibling;o.insertBefore(c,s),c=u}}}return t},M=(n,e,t=n)=>(n._$AI(e,t),n),un={},Ct=(n,e=un)=>n._$AH=e,fn=n=>n._$AH,Se=n=>{var e;(e=n._$AP)===null||e===void 0||e.call(n,!1,!0);let t=n._$AA;const i=n._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=(n,e,t)=>{const i=new Map;for(let o=e;o<=t;o++)i.set(n[o],o);return i},pn=ie(class extends oe{constructor(n){if(super(n),n.type!==T.CHILD)throw Error("repeat() can only be used in text expressions")}ct(n,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const o=[],s=[];let r=0;for(const l of n)o[r]=i?i(l,r):r,s[r]=t(l,r),r++;return{values:s,keys:o}}render(n,e,t){return this.ct(n,e,t).values}update(n,[e,t,i]){var o;const s=fn(n),{values:r,keys:l}=this.ct(e,t,i);if(!Array.isArray(s))return this.ut=l,r;const a=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let u,f,d=0,h=s.length-1,p=0,v=r.length-1;for(;d<=h&&p<=v;)if(s[d]===null)d++;else if(s[h]===null)h--;else if(a[d]===l[p])c[p]=M(s[d],r[p]),d++,p++;else if(a[h]===l[v])c[v]=M(s[h],r[v]),h--,v--;else if(a[d]===l[v])c[v]=M(s[d],r[v]),W(n,c[v+1],s[d]),d++,v--;else if(a[h]===l[p])c[p]=M(s[h],r[p]),W(n,s[d],s[h]),h--,p++;else if(u===void 0&&(u=lt(l,p,v),f=lt(a,d,h)),u.has(a[d]))if(u.has(a[h])){const j=f.get(l[p]),m=j!==void 0?s[j]:null;if(m===null){const _=W(n,s[d]);M(_,r[p]),c[p]=_}else c[p]=M(m,r[p]),W(n,s[d],m),s[j]=null;p++}else Se(s[h]),h--;else Se(s[d]),d++;for(;p<=v;){const j=W(n,c[v+1]);M(j,r[p]),c[p++]=j}for(;d<=h;){const j=s[d++];j!==null&&Se(j)}return this.ut=l,Ct(n,c),S}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn=ie(class extends oe{constructor(n){if(super(n),n.type!==T.PROPERTY&&n.type!==T.ATTRIBUTE&&n.type!==T.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ht(n))throw Error("`live` bindings can only contain a single expression")}render(n){return n}update(n,[e]){if(e===S||e===g)return e;const t=n.element,i=n.name;if(n.type===T.PROPERTY){if(e===t[i])return S}else if(n.type===T.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return S}else if(n.type===T.ATTRIBUTE&&t.getAttribute(i)===e+"")return S;return Ct(n),e}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=(n,e)=>{var t,i;const o=n._$AN;if(o===void 0)return!1;for(const s of o)(i=(t=s)._$AO)===null||i===void 0||i.call(t,e,!1),X(s,e);return!0},he=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while(t?.size===0)},Pt=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),gn(e)}};function vn(n){this._$AN!==void 0?(he(this),this._$AM=n,Pt(this)):this._$AM=n}function yn(n,e=!1,t=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let s=t;s<i.length;s++)X(i[s],!1),he(i[s]);else i!=null&&(X(i,!1),he(i));else X(this,n)}const gn=n=>{var e,t,i,o;n.type==T.CHILD&&((e=(i=n)._$AP)!==null&&e!==void 0||(i._$AP=yn),(t=(o=n)._$AQ)!==null&&t!==void 0||(o._$AQ=vn))};class bn extends oe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Pt(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),t&&(X(this,e),he(this))}setValue(e){if(Ht(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=()=>new _n;let _n=class{};const Te=new WeakMap,Rt=ie(class extends bn{render(n){return g}update(n,[e]){var t;const i=e!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=(t=n.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=n.element)),g}ot(n){var e;if(typeof this.G=="function"){const t=(e=this.dt)!==null&&e!==void 0?e:globalThis;let i=Te.get(t);i===void 0&&(i=new WeakMap,Te.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.dt,void 0),i.set(this.G,n),n!==void 0&&this.G.call(this.dt,n)}else this.G.value=n}get rt(){var n,e,t;return typeof this.G=="function"?(e=Te.get((n=this.dt)!==null&&n!==void 0?n:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=ie(class extends oe{constructor(n){var e;if(super(n),n.type!==T.ATTRIBUTE||n.name!=="class"||((e=n.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var t,i;if(this.it===void 0){this.it=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((t=this.nt)===null||t===void 0)&&t.has(s))&&this.it.add(s);return this.render(e)}const o=n.element.classList;this.it.forEach(s=>{s in e||(o.remove(s),this.it.delete(s))});for(const s in e){const r=!!e[s];r===this.it.has(s)||!((i=this.nt)===null||i===void 0)&&i.has(s)||(r?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return S}});/*!
 * hotkeys-js v3.8.7
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */var He=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Ce(n,e,t){n.addEventListener?n.addEventListener(e,t,!1):n.attachEvent&&n.attachEvent("on".concat(e),function(){t(window.event)})}function Mt(n,e){for(var t=e.slice(0,e.length-1),i=0;i<t.length;i++)t[i]=n[t[i].toLowerCase()];return t}function Lt(n){typeof n!="string"&&(n=""),n=n.replace(/\s/g,"");for(var e=n.split(","),t=e.lastIndexOf("");t>=0;)e[t-1]+=",",e.splice(t,1),t=e.lastIndexOf("");return e}function $n(n,e){for(var t=n.length>=e.length?n:e,i=n.length>=e.length?e:n,o=!0,s=0;s<t.length;s++)i.indexOf(t[s])===-1&&(o=!1);return o}var It={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":He?173:189,"=":He?61:187,";":He?59:186,"'":222,"[":219,"]":221,"\\":220},D={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},ct={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},k={16:!1,18:!1,17:!1,91:!1},E={};for(var re=1;re<20;re++)It["f".concat(re)]=111+re;var y=[],Nt="all",Dt=[],ye=function(e){return It[e.toLowerCase()]||D[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function Ut(n){Nt=n||"all"}function Z(){return Nt||"all"}function wn(){return y.slice(0)}function An(n){var e=n.target||n.srcElement,t=e.tagName,i=!0;return(e.isContentEditable||(t==="INPUT"||t==="TEXTAREA"||t==="SELECT")&&!e.readOnly)&&(i=!1),i}function En(n){return typeof n=="string"&&(n=ye(n)),y.indexOf(n)!==-1}function kn(n,e){var t,i;n||(n=Z());for(var o in E)if(Object.prototype.hasOwnProperty.call(E,o))for(t=E[o],i=0;i<t.length;)t[i].scope===n?t.splice(i,1):i++;Z()===n&&Ut(e||"all")}function xn(n){var e=n.keyCode||n.which||n.charCode,t=y.indexOf(e);if(t>=0&&y.splice(t,1),n.key&&n.key.toLowerCase()==="meta"&&y.splice(0,y.length),(e===93||e===224)&&(e=91),e in k){k[e]=!1;for(var i in D)D[i]===e&&($[i]=!1)}}function jn(n){if(!n)Object.keys(E).forEach(function(r){return delete E[r]});else if(Array.isArray(n))n.forEach(function(r){r.key&&Pe(r)});else if(typeof n=="object")n.key&&Pe(n);else if(typeof n=="string"){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var o=t[0],s=t[1];typeof o=="function"&&(s=o,o=""),Pe({key:n,scope:o,method:s,splitKey:"+"})}}var Pe=function(e){var t=e.key,i=e.scope,o=e.method,s=e.splitKey,r=s===void 0?"+":s,l=Lt(t);l.forEach(function(a){var c=a.split(r),u=c.length,f=c[u-1],d=f==="*"?"*":ye(f);if(E[d]){i||(i=Z());var h=u>1?Mt(D,c):[];E[d]=E[d].map(function(p){var v=o?p.method===o:!0;return v&&p.scope===i&&$n(p.mods,h)?{}:p})}})};function dt(n,e,t){var i;if(e.scope===t||e.scope==="all"){i=e.mods.length>0;for(var o in k)Object.prototype.hasOwnProperty.call(k,o)&&(!k[o]&&e.mods.indexOf(+o)>-1||k[o]&&e.mods.indexOf(+o)===-1)&&(i=!1);(e.mods.length===0&&!k[16]&&!k[18]&&!k[17]&&!k[91]||i||e.shortcut==="*")&&e.method(n,e)===!1&&(n.preventDefault?n.preventDefault():n.returnValue=!1,n.stopPropagation&&n.stopPropagation(),n.cancelBubble&&(n.cancelBubble=!0))}}function ht(n){var e=E["*"],t=n.keyCode||n.which||n.charCode;if($.filter.call(this,n)){if((t===93||t===224)&&(t=91),y.indexOf(t)===-1&&t!==229&&y.push(t),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(h){var p=ct[h];n[h]&&y.indexOf(p)===-1?y.push(p):!n[h]&&y.indexOf(p)>-1?y.splice(y.indexOf(p),1):h==="metaKey"&&n[h]&&y.length===3&&(n.ctrlKey||n.shiftKey||n.altKey||(y=y.slice(y.indexOf(p))))}),t in k){k[t]=!0;for(var i in D)D[i]===t&&($[i]=!0);if(!e)return}for(var o in k)Object.prototype.hasOwnProperty.call(k,o)&&(k[o]=n[ct[o]]);n.getModifierState&&!(n.altKey&&!n.ctrlKey)&&n.getModifierState("AltGraph")&&(y.indexOf(17)===-1&&y.push(17),y.indexOf(18)===-1&&y.push(18),k[17]=!0,k[18]=!0);var s=Z();if(e)for(var r=0;r<e.length;r++)e[r].scope===s&&(n.type==="keydown"&&e[r].keydown||n.type==="keyup"&&e[r].keyup)&&dt(n,e[r],s);if(t in E){for(var l=0;l<E[t].length;l++)if((n.type==="keydown"&&E[t][l].keydown||n.type==="keyup"&&E[t][l].keyup)&&E[t][l].key){for(var a=E[t][l],c=a.splitKey,u=a.key.split(c),f=[],d=0;d<u.length;d++)f.push(ye(u[d]));f.sort().join("")===y.sort().join("")&&dt(n,a,s)}}}}function Sn(n){return Dt.indexOf(n)>-1}function $(n,e,t){y=[];var i=Lt(n),o=[],s="all",r=document,l=0,a=!1,c=!0,u="+";for(t===void 0&&typeof e=="function"&&(t=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(s=e.scope),e.element&&(r=e.element),e.keyup&&(a=e.keyup),e.keydown!==void 0&&(c=e.keydown),typeof e.splitKey=="string"&&(u=e.splitKey)),typeof e=="string"&&(s=e);l<i.length;l++)n=i[l].split(u),o=[],n.length>1&&(o=Mt(D,n)),n=n[n.length-1],n=n==="*"?"*":ye(n),n in E||(E[n]=[]),E[n].push({keyup:a,keydown:c,scope:s,mods:o,shortcut:i[l],method:t,key:i[l],splitKey:u});typeof r<"u"&&!Sn(r)&&window&&(Dt.push(r),Ce(r,"keydown",function(f){ht(f)}),Ce(window,"focus",function(){y=[]}),Ce(r,"keyup",function(f){ht(f),xn(f)}))}var Oe={setScope:Ut,getScope:Z,deleteScope:kn,getPressedKeyCodes:wn,isPressed:En,filter:An,unbind:jn};for(var Re in Oe)Object.prototype.hasOwnProperty.call(Oe,Re)&&($[Re]=Oe[Re]);if(typeof window<"u"){var Tn=window.hotkeys;$.noConflict=function(n){return n&&window.hotkeys===$&&(window.hotkeys=Tn),$},window.hotkeys=$}var se=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let U=class extends P{constructor(){super(...arguments),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.breadcrumbs=[],this._inputRef=Ot()}render(){let e="";if(!this.hideBreadcrumbs){const t=[];for(const i of this.breadcrumbs)t.push(x`<button
            tabindex="-1"
            @click=${()=>this.selectParent(i)}
            class="breadcrumb"
          >
            ${i}
          </button>`);e=x`<div class="breadcrumb-list">
        <button
          tabindex="-1"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>
        ${t}
      </div>`}return x`
      ${e}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${Rt(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
        />
      </div>
    `}setSearch(e){this._inputRef.value&&(this._inputRef.value.value=e)}focusSearch(){requestAnimationFrame(()=>this._inputRef.value.focus())}_handleInput(e){const t=e.target;this.dispatchEvent(new CustomEvent("change",{detail:{search:t.value},bubbles:!1,composed:!1}))}selectParent(e){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:e},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};U.styles=me`
    :host {
      flex: 1;
      position: relative;
    }
    .search {
      padding: 1.25em;
      flex-grow: 1;
      flex-shrink: 0;
      margin: 0px;
      border: none;
      appearance: none;
      font-size: 1.125em;
      background: transparent;
      caret-color: var(--ninja-accent-color);
      color: var(--ninja-text-color);
      outline: none;
      font-family: var(--ninja-font-family);
    }
    .search::placeholder {
      color: var(--ninja-placeholder-color);
    }
    .breadcrumb-list {
      padding: 1em 4em 0 1em;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: flex-start;
      flex: initial;
    }

    .breadcrumb {
      background: var(--ninja-secondary-background-color);
      text-align: center;
      line-height: 1.2em;
      border-radius: var(--ninja-key-border-radius);
      border: 0;
      cursor: pointer;
      padding: 0.1em 0.5em;
      color: var(--ninja-secondary-text-color);
      margin-right: 0.5em;
      outline: none;
      font-family: var(--ninja-font-family);
    }

    .search-wrapper {
      display: flex;
      border-bottom: var(--ninja-separate-border);
    }
  `;se([A()],U.prototype,"placeholder",void 0);se([A({type:Boolean})],U.prototype,"hideBreadcrumbs",void 0);se([A()],U.prototype,"breadcrumbHome",void 0);se([A({type:Array})],U.prototype,"breadcrumbs",void 0);U=se([ve("ninja-header")],U);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class De extends oe{constructor(e){if(super(e),this.et=g,e.type!==T.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this.ft=void 0,this.et=e;if(e===S)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}De.directiveName="unsafeHTML",De.resultType=1;const Hn=ie(De);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Cn(n,e){const t=typeof e=="function";if(n!==void 0){let i=-1;for(const o of n)i>-1&&(yield t?e(i):e),i++,yield o}}function Pn(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const On=me`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ue=class extends P{render(){return x`<span><slot></slot></span>`}};Ue.styles=[On];Ue=Pn([ve("mwc-icon")],Ue);var ge=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let V=class extends P{constructor(){super(),this.selected=!1,this.hotKeysJoinedView=!0,this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}))}updated(e){e.has("selected")&&this.selected&&this.ensureInView()}render(){let e;this.action.mdIcon?e=x`<mwc-icon part="ninja-icon" class="ninja-icon"
        >${this.action.mdIcon}</mwc-icon
      >`:this.action.icon&&(e=Hn(this.action.icon||""));let t;this.action.hotkey&&(this.hotKeysJoinedView?t=this.action.hotkey.split(",").map(o=>{const s=o.split("+"),r=x`${Cn(s.map(l=>x`<kbd>${l}</kbd>`),"+")}`;return x`<div class="ninja-hotkey ninja-hotkeys">
            ${r}
          </div>`}):t=this.action.hotkey.split(",").map(o=>{const r=o.split("+").map(l=>x`<kbd class="ninja-hotkey">${l}</kbd>`);return x`<kbd class="ninja-hotkeys">${r}</kbd>`}));const i={selected:this.selected,"ninja-action":!0};return x`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${Ne(i)}
      >
        ${e}
        <div class="ninja-title">${this.action.title}</div>
        ${t}
      </div>
    `}};V.styles=me`
    :host {
      display: flex;
      width: 100%;
    }
    .ninja-action {
      padding: 0.75em 1em;
      display: flex;
      border-left: 2px solid transparent;
      align-items: center;
      justify-content: start;
      outline: none;
      transition: color 0s ease 0s;
      width: 100%;
    }
    .ninja-action.selected {
      cursor: pointer;
      color: var(--ninja-selected-text-color);
      background-color: var(--ninja-selected-background);
      border-left: 2px solid var(--ninja-accent-color);
      outline: none;
    }
    .ninja-action.selected .ninja-icon {
      color: var(--ninja-selected-text-color);
    }
    .ninja-icon {
      font-size: var(--ninja-icon-size);
      max-width: var(--ninja-icon-size);
      max-height: var(--ninja-icon-size);
      margin-right: 1em;
      color: var(--ninja-icon-color);
      margin-right: 1em;
      position: relative;
    }

    .ninja-title {
      flex-shrink: 0.01;
      margin-right: 0.5em;
      flex-grow: 1;
      font-size: 0.8125em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .ninja-hotkeys {
      flex-shrink: 0;
      width: min-content;
      display: flex;
    }

    .ninja-hotkeys kbd {
      font-family: inherit;
    }
    .ninja-hotkey {
      background: var(--ninja-secondary-background-color);
      padding: 0.06em 0.25em;
      border-radius: var(--ninja-key-border-radius);
      text-transform: capitalize;
      color: var(--ninja-secondary-text-color);
      font-size: 0.75em;
      font-family: inherit;
    }

    .ninja-hotkey + .ninja-hotkey {
      margin-left: 0.5em;
    }
    .ninja-hotkeys + .ninja-hotkeys {
      margin-left: 1em;
    }
  `;ge([A({type:Object})],V.prototype,"action",void 0);ge([A({type:Boolean})],V.prototype,"selected",void 0);ge([A({type:Boolean})],V.prototype,"hotKeysJoinedView",void 0);V=ge([ve("ninja-action")],V);const Rn=x` <div class="modal-footer" slot="footer">
  <span class="help">
    <svg
      version="1.0"
      class="ninja-examplekey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1280"
    >
      <path
        d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
      />
    </svg>

    to select
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    to navigate
  </span>
  <span class="help">
    <span class="ninja-examplekey esc">esc</span>
    to close
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey backspace"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
    move to parent
  </span>
</div>`,Mn=me`
  :host {
    --ninja-width: 640px;
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(255, 255, 255, 0.5);
    --ninja-text-color: rgb(60, 65, 73);
    --ninja-font-size: 16px;
    --ninja-top: 20%;

    --ninja-key-border-radius: 0.25em;
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgb(239, 241, 244);
    --ninja-secondary-text-color: rgb(107, 111, 118);

    --ninja-selected-background: rgb(248, 249, 251);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-icon-size: 1.2em;
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-background: #fff;
    --ninja-modal-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;

    --ninja-actions-height: 300px;
    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(242, 242, 242, 0.4);

    --ninja-placeholder-color: #8e8e8e;

    font-size: var(--ninja-font-size);

    --ninja-z-index: 1;
  }

  :host(.dark) {
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(0, 0, 0, 0.7);
    --ninja-text-color: #7d7d7d;

    --ninja-modal-background: rgba(17, 17, 17, 0.85);
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgba(51, 51, 51, 0.44);
    --ninja-secondary-text-color: #888;

    --ninja-selected-text-color: #eaeaea;
    --ninja-selected-background: rgba(51, 51, 51, 0.44);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-shadow: 0 16px 70px rgba(0, 0, 0, 0.2);

    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(30, 30, 30, 85%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: var(--ninja-z-index);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: var(--ninja-overflow-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backdrop-filter: var(--ninja-backdrop-filter);
    backdrop-filter: var(--ninja-backdrop-filter);
    text-align: left;
    color: var(--ninja-text-color);
    font-family: var(--ninja-font-family);
  }
  .modal.visible {
    display: block;
  }

  .modal-content {
    position: relative;
    top: var(--ninja-top);
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    min-width: 0px;
    will-change: transform;
    background: var(--ninja-modal-background);
    border-radius: 0.5em;
    box-shadow: var(--ninja-modal-shadow);
    max-width: var(--ninja-width);
    overflow: hidden;
  }

  .bump {
    animation: zoom-in-zoom-out 0.2s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.01, 1.01);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .ninja-github {
    color: var(--ninja-keys-text-color);
    font-weight: normal;
    text-decoration: none;
  }

  .actions-list {
    max-height: var(--ninja-actions-height);
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    margin: 0;
    padding: 0.5em 0;
    list-style: none;
    scroll-behavior: smooth;
  }

  .group-header {
    height: 1.375em;
    line-height: 1.375em;
    padding-left: 1.25em;
    padding-top: 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75em;
    line-height: 1em;
    color: var(--ninja-group-text-color);
    margin: 1px 0;
  }

  .modal-footer {
    background: var(--ninja-footer-background);
    padding: 0.5em 1em;
    display: flex;
    /* font-size: 0.75em; */
    border-top: var(--ninja-separate-border);
    color: var(--ninja-secondary-text-color);
  }

  .modal-footer .help {
    display: flex;
    margin-right: 1em;
    align-items: center;
    font-size: 0.75em;
  }

  .ninja-examplekey {
    background: var(--ninja-secondary-background-color);
    padding: 0.06em 0.25em;
    border-radius: var(--ninja-key-border-radius);
    color: var(--ninja-secondary-text-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    font-size: 1.25em;
    fill: currentColor;
  }
  .ninja-examplekey.esc {
    width: auto;
    height: auto;
    font-size: 1.1em;
  }
  .ninja-examplekey.backspace {
    opacity: 0.7;
  }
`;var w=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(s=(o<3?r(s):o>3?r(e,t,s):r(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let b=class extends P{constructor(){super(...arguments),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up,shift+tab",this.navigationDownHotkey="down,tab",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this._flatData=[],this._headerRef=Ot()}open(e={}){this._bump=!0,this.visible=!0,this._headerRef.value.focusSearch(),this._actionMatches.length>0&&(this._selected=this._actionMatches[0]),this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1}setParent(e){e?this._currentRoot=e:this._currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value.setSearch("")}get breadcrumbs(){var e;const t=[];let i=(e=this._selected)===null||e===void 0?void 0:e.parent;if(i)for(t.push(i);i;){const o=this._flatData.find(s=>s.id===i);o?.parent&&t.push(o.parent),i=o?o.parent:void 0}return t.reverse()}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(e,t){let i=[];return e||(e=[]),e.map(o=>{const s=o.children&&o.children.some(l=>typeof l=="string"),r={...o,parent:o.parent||t};return s||(r.children&&r.children.length&&(t=o.id,i=[...i,...r.children]),r.children=r.children?r.children.map(l=>l.id):[]),r}).concat(i.length?this._flattern(i,t):i)}update(e){e.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.filter(t=>!!t.hotkey).forEach(t=>{$(t.hotkey,i=>{i.preventDefault(),t.handler&&t.handler(t)})})),super.update(e)}_registerInternalHotkeys(){this.openHotkey&&$(this.openHotkey,e=>{e.preventDefault(),this.visible?this.close():this.open()}),this.selectHotkey&&$(this.selectHotkey,e=>{this.visible&&(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex]))}),this.goBackHotkey&&$(this.goBackHotkey,e=>{this.visible&&(this._search||(e.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&$(this.navigationDownHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&$(this.navigationUpHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&$(this.closeHotkey,()=>{this.visible&&this.close()})}_unregisterInternalHotkeys(){this.openHotkey&&$.unbind(this.openHotkey),this.selectHotkey&&$.unbind(this.selectHotkey),this.goBackHotkey&&$.unbind(this.goBackHotkey),this.navigationDownHotkey&&$.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&$.unbind(this.navigationUpHotkey),this.closeHotkey&&$.unbind(this.closeHotkey)}_actionFocused(e,t){this._selected=e,t.target.ensureInView()}_onTransitionEnd(){this._bump=!1}_goBack(){const e=this.breadcrumbs.length>1?this.breadcrumbs[this.breadcrumbs.length-2]:void 0;this.setParent(e)}render(){const e={bump:this._bump,"modal-content":!0},t={visible:this.visible,modal:!0},o=this._flatData.filter(l=>{var a;const c=new RegExp(this._search,"gi"),u=l.title.match(c)||((a=l.keywords)===null||a===void 0?void 0:a.match(c));return(!this._currentRoot&&this._search||l.parent===this._currentRoot)&&u}).reduce((l,a)=>l.set(a.section,[...l.get(a.section)||[],a]),new Map);this._actionMatches=[...o.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);const s=l=>x` ${pn(l,a=>a.id,a=>{var c;return x`<ninja-action
            exportparts="ninja-action,ninja-selected,ninja-icon"
            .selected=${mn(a.id===((c=this._selected)===null||c===void 0?void 0:c.id))}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mouseover=${u=>this._actionFocused(a,u)}
            @actionsSelected=${u=>this._actionSelected(u.detail)}
            .action=${a}
          ></ninja-action>`})}`,r=[];return o.forEach((l,a)=>{const c=a?x`<div class="group-header">${a}</div>`:void 0;r.push(x`${c}${s(l)}`)}),x`
      <div @click=${this._overlayClick} class=${Ne(t)}>
        <div class=${Ne(e)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            exportparts="ninja-input,ninja-input-wrapper"
            ${Rt(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.breadcrumbs}
            @change=${this._handleInput}
            @setParent=${l=>this.setParent(l.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div class="modal-body">
            <div class="actions-list" part="actions-list">${r}</div>
          </div>
          <slot name="footer"> ${Rn} </slot>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e){var t;if(this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),!!e){if(e.children&&((t=e.children)===null||t===void 0?void 0:t.length)>0&&(this._currentRoot=e.id,this._search=""),this._headerRef.value.setSearch(""),this._headerRef.value.focusSearch(),e.handler){const i=e.handler(e);i?.keepOpen||this.close()}this._bump=!0}}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){var t;!((t=e.target)===null||t===void 0)&&t.classList.contains("modal")&&this.close()}};b.styles=[Mn];w([A({type:String})],b.prototype,"placeholder",void 0);w([A({type:Boolean})],b.prototype,"disableHotkeys",void 0);w([A({type:Boolean})],b.prototype,"hideBreadcrumbs",void 0);w([A()],b.prototype,"openHotkey",void 0);w([A()],b.prototype,"navigationUpHotkey",void 0);w([A()],b.prototype,"navigationDownHotkey",void 0);w([A()],b.prototype,"closeHotkey",void 0);w([A()],b.prototype,"goBackHotkey",void 0);w([A()],b.prototype,"selectHotkey",void 0);w([A({type:Boolean})],b.prototype,"hotKeysJoinedView",void 0);w([A({type:Boolean})],b.prototype,"noAutoLoadMdIcons",void 0);w([A({type:Array,hasChanged(){return!0}})],b.prototype,"data",void 0);w([O()],b.prototype,"visible",void 0);w([O()],b.prototype,"_bump",void 0);w([O()],b.prototype,"_actionMatches",void 0);w([O()],b.prototype,"_search",void 0);w([O()],b.prototype,"_currentRoot",void 0);w([O()],b.prototype,"_flatData",void 0);w([O()],b.prototype,"breadcrumbs",null);w([O()],b.prototype,"_selected",void 0);b=w([ve("ninja-keys")],b);const Me=document.querySelector("ninja-keys"),Ln=document.getElementById("footer-button");Ln?.addEventListener("click",()=>{var n=new KeyboardEvent("keydown",{key:"K",code:"KeyK",keyCode:75,which:75,ctrlKey:!0,altKey:!1,shiftKey:!1,metaKey:!1});document.dispatchEvent(n)});if(Me!=null){const n=Me.getAttribute("data-info")??"[]",t=JSON.parse(n).map(i=>({...i,handler:()=>{window.open(i.url,"_blank")}}));Me.data=[{id:"print",title:"🖨️ Imprimir",hotkey:"ctrl+p",section:"Actions",handler:()=>{window.print()}},...t]}const In="astro:before-preparation",Nn="astro:after-preparation",Dn="astro:before-swap",Un="astro:after-swap",Bn=n=>document.dispatchEvent(new Event(n));class Bt extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(e,t,i,o,s,r,l,a,c){super(e,t),this.from=i,this.to=o,this.direction=s,this.navigationType=r,this.sourceElement=l,this.info=a,this.newDocument=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class Kn extends Bt{formData;loader;constructor(e,t,i,o,s,r,l,a,c){super(In,{cancelable:!0},e,t,i,o,s,r,l),this.formData=a,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class zn extends Bt{direction;viewTransition;swap;constructor(e,t,i){super(Dn,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument),this.direction=e.direction,this.viewTransition=t,this.swap=i.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function Vn(n,e,t,i,o,s,r,l){const a=new Kn(n,e,t,i,o,s,window.document,r,l);return document.dispatchEvent(a)&&(await a.loader(),a.defaultPrevented||(Bn(Nn),a.navigationType!=="traverse"&&Fe({scrollX,scrollY}))),a}async function Fn(n,e,t){const i=new zn(n,e,t);return document.dispatchEvent(i),i.swap(),i}const qn=history.pushState.bind(history),ue=history.replaceState.bind(history),Fe=n=>{history.state&&(history.scrollRestoration="manual",ue({...history.state,...n},""))},qe=!!document.startViewTransition,Ye=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Kt=(n,e)=>n.pathname===e.pathname&&n.search===e.search;let be,K,fe=!1,zt;const Vt=n=>document.dispatchEvent(new Event(n)),Ft=()=>Vt("astro:page-load"),Yn=()=>{let n=document.createElement("div");n.setAttribute("aria-live","assertive"),n.setAttribute("aria-atomic","true"),n.className="astro-route-announcer",document.body.append(n),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;n.textContent=e},60)},C="data-astro-transition-persist",qt="data-astro-transition",Yt="data-astro-transition-fallback";let ut,ee=0;history.state?(ee=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):Ye()&&(ue({index:ee,scrollX,scrollY},""),history.scrollRestoration="manual");async function Wn(n,e){try{const t=await fetch(n,e),o=(t.headers.get("content-type")??"").split(";",1)[0].trim();return o!=="text/html"&&o!=="application/xhtml+xml"?null:{html:await t.text(),redirected:t.redirected?t.url:void 0,mediaType:o}}catch{return null}}function Wt(){const n=document.querySelector('[name="astro-view-transitions-fallback"]');return n?n.getAttribute("content"):"animate"}function Xn(){let n=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const t=e.getAttribute("type");if(t&&t!=="module"&&t!=="text/javascript")continue;const i=document.createElement("script");i.innerHTML=e.innerHTML;for(const o of e.attributes){if(o.name==="src"){const s=new Promise(r=>{i.onload=i.onerror=r});n=n.then(()=>s)}i.setAttribute(o.name,o.value)}i.dataset.astroExec="",e.replaceWith(i)}return n}const Xt=(n,e,t,i,o)=>{const s=Kt(e,n),r=document.title;document.title=i;let l=!1;if(n.href!==location.href&&!o)if(t.history==="replace"){const a=history.state;ue({...t.state,index:a.index,scrollX:a.scrollX,scrollY:a.scrollY},"",n.href)}else qn({...t.state,index:++ee,scrollX:0,scrollY:0},"",n.href);if(document.title=r,be=n,s||(scrollTo({left:0,top:0,behavior:"instant"}),l=!0),o)scrollTo(o.scrollX,o.scrollY);else{if(n.hash){history.scrollRestoration="auto";const a=history.state;location.href=n.href,history.state||(ue(a,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else l||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Gn(n){const e=[];for(const t of n.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${C}="${t.getAttribute(C)}"], link[rel=stylesheet][href="${t.getAttribute("href")}"]`)){const i=document.createElement("link");i.setAttribute("rel","preload"),i.setAttribute("as","style"),i.setAttribute("href",t.getAttribute("href")),e.push(new Promise(o=>{["load","error"].forEach(s=>i.addEventListener(s,o)),document.head.append(i)}))}return e}async function ft(n,e,t,i){const o=(d,h)=>{const p=d.getAttribute(C),v=p&&h.head.querySelector(`[${C}="${p}"]`);if(v)return v;if(d.matches("link[rel=stylesheet]")){const j=d.getAttribute("href");return h.head.querySelector(`link[rel=stylesheet][href="${j}"]`)}return null},s=()=>{const d=document.activeElement;if(d?.closest(`[${C}]`)){if(d instanceof HTMLInputElement||d instanceof HTMLTextAreaElement){const h=d.selectionStart,p=d.selectionEnd;return{activeElement:d,start:h,end:p}}return{activeElement:d}}else return{activeElement:null}},r=({activeElement:d,start:h,end:p})=>{d&&(d.focus(),(d instanceof HTMLInputElement||d instanceof HTMLTextAreaElement)&&(d.selectionStart=h,d.selectionEnd=p))},l=d=>{const h=d.dataset.astroTransitionPersistProps;return h==null||h==="false"},a=d=>{const h=document.documentElement,p=[...h.attributes].filter(({name:m})=>(h.removeAttribute(m),m.startsWith("data-astro-")));[...d.newDocument.documentElement.attributes,...p].forEach(({name:m,value:_})=>h.setAttribute(m,_));for(const m of document.scripts)for(const _ of d.newDocument.scripts)if(!_.hasAttribute("data-astro-rerun")&&(!m.src&&m.textContent===_.textContent||m.src&&m.type===_.type&&m.src===_.src)){_.dataset.astroExec="";break}for(const m of Array.from(document.head.children)){const _=o(m,d.newDocument);_?_.remove():m.remove()}document.head.append(...d.newDocument.head.children);const v=document.body,j=s();document.body.replaceWith(d.newDocument.body);for(const m of v.querySelectorAll(`[${C}]`)){const _=m.getAttribute(C),q=document.querySelector(`[${C}="${_}"]`);q&&(q.replaceWith(m),q.localName==="astro-island"&&l(m)&&(m.setAttribute("ssr",""),m.setAttribute("props",q.getAttribute("props"))))}r(j)};async function c(d){function h(m){const _=m.effect;return!_||!(_ instanceof KeyframeEffect)||!_.target?!1:window.getComputedStyle(_.target,_.pseudoElement).animationIterationCount==="infinite"}const p=document.getAnimations();document.documentElement.setAttribute(Yt,d);const j=document.getAnimations().filter(m=>!p.includes(m)&&!h(m));return Promise.all(j.map(m=>m.finished))}if(!fe)document.documentElement.setAttribute(qt,n.direction),i==="animate"&&await c("old");else throw new DOMException("Transition was skipped");const u=document.title,f=await Fn(n,K,a);Xt(f.to,f.from,e,u,t),Vt(Un),i==="animate"&&!fe&&c("new").then(()=>zt())}async function Gt(n,e,t,i,o){if(!Ye()||location.origin!==t.origin){location.href=t.href;return}const s=o?"traverse":i.history==="replace"?"replace":"push";if(s!=="traverse"&&Fe({scrollX,scrollY}),Kt(e,t)&&(n!=="back"&&t.hash||n==="back"&&e.hash)){Xt(t,e,i,document.title,o);return}const r=await Vn(e,t,n,s,i.sourceElement,i.info,i.formData,l);if(r.defaultPrevented){location.href=t.href;return}async function l(a){const c=a.to.href,u={};if(a.formData){u.method="POST";const h=a.sourceElement instanceof HTMLFormElement?a.sourceElement:a.sourceElement instanceof HTMLElement&&"form"in a.sourceElement?a.sourceElement.form:a.sourceElement?.closest("form");u.body=h?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(a.formData):a.formData}const f=await Wn(c,u);if(f===null){a.preventDefault();return}if(f.redirected&&(a.to=new URL(f.redirected)),ut??=new DOMParser,a.newDocument=ut.parseFromString(f.html,f.mediaType),a.newDocument.querySelectorAll("noscript").forEach(h=>h.remove()),!a.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!a.formData){a.preventDefault();return}const d=Gn(a.newDocument);d.length&&await Promise.all(d)}if(fe=!1,qe)K=document.startViewTransition(async()=>await ft(r,i,o));else{const a=(async()=>{await new Promise(c=>setTimeout(c)),await ft(r,i,o,Wt())})();K={updateCallbackDone:a,ready:a,finished:new Promise(c=>zt=c),skipTransition:()=>{fe=!0}}}K.ready.then(async()=>{await Xn(),Ft(),Yn()}),K.finished.then(()=>{document.documentElement.removeAttribute(qt),document.documentElement.removeAttribute(Yt)}),await K.ready}async function pt(n,e){await Gt("forward",be,new URL(n,location.href),e??{})}function Jn(n){if(!Ye()&&n.state){location.reload();return}if(n.state===null)return;const e=history.state,t=e.index,i=t>ee?"forward":"back";ee=t,Gt(i,be,new URL(location.href),{},e)}const mt=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&Fe({scrollX,scrollY})};{if(qe||Wt()!=="none")if(be=new URL(location.href),addEventListener("popstate",Jn),addEventListener("load",Ft),"onscrollend"in window)addEventListener("scrollend",mt);else{let n,e,t,i;const o=()=>{if(i!==history.state?.index){clearInterval(n),n=void 0;return}if(e===scrollY&&t===scrollX){clearInterval(n),n=void 0,mt();return}else e=scrollY,t=scrollX};addEventListener("scroll",()=>{n===void 0&&(i=history.state.index,e=scrollY,t=scrollX,n=window.setInterval(o,50))},{passive:!0})}for(const n of document.scripts)n.dataset.astroExec=""}const Jt=new Set,pe=new WeakSet;let Be,Qt,vt=!1;function Qn(n){vt||(vt=!0,Be??=n?.prefetchAll??!1,Qt??=n?.defaultStrategy??"hover",Zn(),ei(),ti(),ii())}function Zn(){for(const n of["touchstart","mousedown"])document.body.addEventListener(n,e=>{te(e.target,"tap")&&_e(e.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function ei(){let n;document.body.addEventListener("focusin",i=>{te(i.target,"hover")&&e(i)},{passive:!0}),document.body.addEventListener("focusout",t,{passive:!0}),We(()=>{for(const i of document.getElementsByTagName("a"))pe.has(i)||te(i,"hover")&&(pe.add(i),i.addEventListener("mouseenter",e,{passive:!0}),i.addEventListener("mouseleave",t,{passive:!0}))});function e(i){const o=i.target.href;n&&clearTimeout(n),n=setTimeout(()=>{_e(o,{with:"fetch"})},80)}function t(){n&&(clearTimeout(n),n=0)}}function ti(){let n;We(()=>{for(const e of document.getElementsByTagName("a"))pe.has(e)||te(e,"viewport")&&(pe.add(e),n??=ni(),n.observe(e))})}function ni(){const n=new WeakMap;return new IntersectionObserver((e,t)=>{for(const i of e){const o=i.target,s=n.get(o);i.isIntersecting?(s&&clearTimeout(s),n.set(o,setTimeout(()=>{t.unobserve(o),n.delete(o),_e(o.href,{with:"link"})},300))):s&&(clearTimeout(s),n.delete(o))}})}function ii(){We(()=>{for(const n of document.getElementsByTagName("a"))te(n,"load")&&_e(n.href,{with:"link"})})}function _e(n,e){const t=e?.ignoreSlowConnection??!1;if(!oi(n,t))return;if(Jt.add(n),(e?.with??"link")==="link"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",n),document.head.append(o)}else fetch(n).catch(o=>{console.log(`[astro] Failed to prefetch ${n}`),console.error(o)})}function oi(n,e){if(!navigator.onLine||!e&&Zt())return!1;try{const t=new URL(n,location.href);return location.origin===t.origin&&(location.pathname!==t.pathname||location.search!==t.search)&&!Jt.has(n)}catch{}return!1}function te(n,e){if(n?.tagName!=="A")return!1;const t=n.dataset.astroPrefetch;return t==="false"?!1:e==="tap"&&(t!=null||Be)&&Zt()?!0:t==null&&Be||t===""?e===Qt:t===e}function Zt(){if("connection"in navigator){const n=navigator.connection;return n.saveData||/2g/.test(n.effectiveType)}return!1}function We(n){n();let e=!1;document.addEventListener("astro:page-load",()=>{if(!e){e=!0;return}n()})}function si(){const n=document.querySelector('[name="astro-view-transitions-fallback"]');return n?n.getAttribute("content"):"animate"}function yt(n){return n.dataset.astroReload!==void 0}(qe||si()!=="none")&&(document.addEventListener("click",n=>{let e=n.target;if(n.composed&&(e=n.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const t=e instanceof HTMLElement?e.target:e.target.baseVal,i=e instanceof HTMLElement?e.href:e.href.baseVal,o=new URL(i,location.href).origin;yt(e)||e.hasAttribute("download")||!e.href||t&&t!=="_self"||o!==location.origin||n.button!==0||n.metaKey||n.ctrlKey||n.altKey||n.shiftKey||n.defaultPrevented||(n.preventDefault(),pt(i,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",n=>{let e=n.target;if(e.tagName!=="FORM"||n.defaultPrevented||yt(e))return;const t=e,i=n.submitter,o=new FormData(t,i);let s=i?.getAttribute("formaction")??t.action??location.pathname;const r=i?.getAttribute("formmethod")??t.method;if(r==="dialog"||location.origin!==new URL(s,location.href).origin)return;const l={sourceElement:i??t};if(r==="get"){const a=new URLSearchParams(o),c=new URL(s);c.search=a.toString(),s=c.toString()}else l.formData=o;n.preventDefault(),pt(s,l)}),Qn({prefetchAll:!0}));
