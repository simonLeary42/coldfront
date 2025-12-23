function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function getAugmentedNamespace(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var n=t.default;if(typeof n=="function"){var e=function r(){var a=!1;try{a=this instanceof r}catch{}return a?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};e.prototype=n.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var a=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:function(){return t[r]}})}),e}var bootstrap$1={exports:{}},jquery$1={exports:{}};var jquery=jquery$1.exports,hasRequiredJquery;function requireJquery(){return hasRequiredJquery||(hasRequiredJquery=1,(function(t){(function(n,e){t.exports=n.document?e(n,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return e(r)}})(typeof window<"u"?window:jquery,function(n,e){var r=[],a=Object.getPrototypeOf,s=r.slice,o=r.flat?function(c){return r.flat.call(c)}:function(c){return r.concat.apply([],c)},l=r.push,u=r.indexOf,f={},d=f.toString,p=f.hasOwnProperty,v=p.toString,y=v.call(Object),x={},S=function(h){return typeof h=="function"&&typeof h.nodeType!="number"&&typeof h.item!="function"},D=function(h){return h!=null&&h===h.window},A=n.document,I={type:!0,src:!0,nonce:!0,noModule:!0};function W(c,h,g){g=g||A;var _,C,E=g.createElement("script");if(E.text=c,h)for(_ in I)C=h[_]||h.getAttribute&&h.getAttribute(_),C&&E.setAttribute(_,C);g.head.appendChild(E).parentNode.removeChild(E)}function N(c){return c==null?c+"":typeof c=="object"||typeof c=="function"?f[d.call(c)]||"object":typeof c}var U="3.7.1",J=/HTML$/i,m=function(c,h){return new m.fn.init(c,h)};m.fn=m.prototype={jquery:U,constructor:m,length:0,toArray:function(){return s.call(this)},get:function(c){return c==null?s.call(this):c<0?this[c+this.length]:this[c]},pushStack:function(c){var h=m.merge(this.constructor(),c);return h.prevObject=this,h},each:function(c){return m.each(this,c)},map:function(c){return this.pushStack(m.map(this,function(h,g){return c.call(h,g,h)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(m.grep(this,function(c,h){return(h+1)%2}))},odd:function(){return this.pushStack(m.grep(this,function(c,h){return h%2}))},eq:function(c){var h=this.length,g=+c+(c<0?h:0);return this.pushStack(g>=0&&g<h?[this[g]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:r.sort,splice:r.splice},m.extend=m.fn.extend=function(){var c,h,g,_,C,E,w=arguments[0]||{},F=1,L=arguments.length,V=!1;for(typeof w=="boolean"&&(V=w,w=arguments[F]||{},F++),typeof w!="object"&&!S(w)&&(w={}),F===L&&(w=this,F--);F<L;F++)if((c=arguments[F])!=null)for(h in c)_=c[h],!(h==="__proto__"||w===_)&&(V&&_&&(m.isPlainObject(_)||(C=Array.isArray(_)))?(g=w[h],C&&!Array.isArray(g)?E=[]:!C&&!m.isPlainObject(g)?E={}:E=g,C=!1,w[h]=m.extend(V,E,_)):_!==void 0&&(w[h]=_));return w},m.extend({expando:"jQuery"+(U+Math.random()).replace(/\D/g,""),isReady:!0,error:function(c){throw new Error(c)},noop:function(){},isPlainObject:function(c){var h,g;return!c||d.call(c)!=="[object Object]"?!1:(h=a(c),h?(g=p.call(h,"constructor")&&h.constructor,typeof g=="function"&&v.call(g)===y):!0)},isEmptyObject:function(c){var h;for(h in c)return!1;return!0},globalEval:function(c,h,g){W(c,{nonce:h&&h.nonce},g)},each:function(c,h){var g,_=0;if(ne(c))for(g=c.length;_<g&&h.call(c[_],_,c[_])!==!1;_++);else for(_ in c)if(h.call(c[_],_,c[_])===!1)break;return c},text:function(c){var h,g="",_=0,C=c.nodeType;if(!C)for(;h=c[_++];)g+=m.text(h);return C===1||C===11?c.textContent:C===9?c.documentElement.textContent:C===3||C===4?c.nodeValue:g},makeArray:function(c,h){var g=h||[];return c!=null&&(ne(Object(c))?m.merge(g,typeof c=="string"?[c]:c):l.call(g,c)),g},inArray:function(c,h,g){return h==null?-1:u.call(h,c,g)},isXMLDoc:function(c){var h=c&&c.namespaceURI,g=c&&(c.ownerDocument||c).documentElement;return!J.test(h||g&&g.nodeName||"HTML")},merge:function(c,h){for(var g=+h.length,_=0,C=c.length;_<g;_++)c[C++]=h[_];return c.length=C,c},grep:function(c,h,g){for(var _,C=[],E=0,w=c.length,F=!g;E<w;E++)_=!h(c[E],E),_!==F&&C.push(c[E]);return C},map:function(c,h,g){var _,C,E=0,w=[];if(ne(c))for(_=c.length;E<_;E++)C=h(c[E],E,g),C!=null&&w.push(C);else for(E in c)C=h(c[E],E,g),C!=null&&w.push(C);return o(w)},guid:1,support:x}),typeof Symbol=="function"&&(m.fn[Symbol.iterator]=r[Symbol.iterator]),m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(c,h){f["[object "+h+"]"]=h.toLowerCase()});function ne(c){var h=!!c&&"length"in c&&c.length,g=N(c);return S(c)||D(c)?!1:g==="array"||h===0||typeof h=="number"&&h>0&&h-1 in c}function ie(c,h){return c.nodeName&&c.nodeName.toLowerCase()===h.toLowerCase()}var ge=r.pop,ve=r.sort,_e=r.splice,ue="[\\x20\\t\\r\\n\\f]",He=new RegExp("^"+ue+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ue+"+$","g");m.contains=function(c,h){var g=h&&h.parentNode;return c===g||!!(g&&g.nodeType===1&&(c.contains?c.contains(g):c.compareDocumentPosition&&c.compareDocumentPosition(g)&16))};var pe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function we(c,h){return h?c==="\0"?"�":c.slice(0,-1)+"\\"+c.charCodeAt(c.length-1).toString(16)+" ":"\\"+c}m.escapeSelector=function(c){return(c+"").replace(pe,we)};var xe=A,je=l;(function(){var c,h,g,_,C,E=je,w,F,L,V,G,ee=m.expando,Y=0,re=0,Se=Zn(),Re=Zn(),$e=Zn(),rt=Zn(),Ze=function(P,j){return P===j&&(C=!0),0},Mt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",It="(?:\\\\[\\da-fA-F]{1,6}"+ue+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ne="\\["+ue+"*("+It+")(?:"+ue+"*([*^$|!~]?=)"+ue+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+It+"))|)"+ue+"*\\]",mn=":("+It+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ne+")*)|.*)\\)|)",Fe=new RegExp(ue+"+","g"),Qe=new RegExp("^"+ue+"*,"+ue+"*"),Tn=new RegExp("^"+ue+"*([>+~]|"+ue+")"+ue+"*"),Vn=new RegExp(ue+"|>"),Lt=new RegExp(mn),jt=new RegExp("^"+It+"$"),Rt={ID:new RegExp("^#("+It+")"),CLASS:new RegExp("^\\.("+It+")"),TAG:new RegExp("^("+It+"|[*])"),ATTR:new RegExp("^"+Ne),PSEUDO:new RegExp("^"+mn),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ue+"*(even|odd|(([+-]|)(\\d*)n|)"+ue+"*(?:([+-]|)"+ue+"*(\\d+)|))"+ue+"*\\)|)","i"),bool:new RegExp("^(?:"+Mt+")$","i"),needsContext:new RegExp("^"+ue+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ue+"*((?:-\\d)?\\d*)"+ue+"*\\)|)(?=[^-]|$)","i")},tn=/^(?:input|select|textarea|button)$/i,nn=/^h\d$/i,vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ci=/[+~]/,Bt=new RegExp("\\\\[\\da-fA-F]{1,6}"+ue+"?|\\\\([^\\r\\n\\f])","g"),Nt=function(P,j){var q="0x"+P.slice(1)-65536;return j||(q<0?String.fromCharCode(q+65536):String.fromCharCode(q>>10|55296,q&1023|56320))},vn=function(){rn()},fr=ei(function(P){return P.disabled===!0&&ie(P,"fieldset")},{dir:"parentNode",next:"legend"});function Jn(){try{return w.activeElement}catch{}}try{E.apply(r=s.call(xe.childNodes),xe.childNodes),r[xe.childNodes.length].nodeType}catch{E={apply:function(j,q){je.apply(j,s.call(q))},call:function(j){je.apply(j,s.call(arguments,1))}}}function Me(P,j,q,K){var te,se,ce,be,fe,Ie,Ee,Ae=j&&j.ownerDocument,Pe=j?j.nodeType:9;if(q=q||[],typeof P!="string"||!P||Pe!==1&&Pe!==9&&Pe!==11)return q;if(!K&&(rn(j),j=j||w,L)){if(Pe!==11&&(fe=vt.exec(P)))if(te=fe[1]){if(Pe===9)if(ce=j.getElementById(te)){if(ce.id===te)return E.call(q,ce),q}else return q;else if(Ae&&(ce=Ae.getElementById(te))&&Me.contains(j,ce)&&ce.id===te)return E.call(q,ce),q}else{if(fe[2])return E.apply(q,j.getElementsByTagName(P)),q;if((te=fe[3])&&j.getElementsByClassName)return E.apply(q,j.getElementsByClassName(te)),q}if(!rt[P+" "]&&(!V||!V.test(P))){if(Ee=P,Ae=j,Pe===1&&(Vn.test(P)||Tn.test(P))){for(Ae=Ci.test(P)&&Un(j.parentNode)||j,(Ae!=j||!x.scope)&&((be=j.getAttribute("id"))?be=m.escapeSelector(be):j.setAttribute("id",be=ee)),Ie=Vt(P),se=Ie.length;se--;)Ie[se]=(be?"#"+be:":scope")+" "+kn(Ie[se]);Ee=Ie.join(",")}try{return E.apply(q,Ae.querySelectorAll(Ee)),q}catch{rt(P,!0)}finally{be===ee&&j.removeAttribute("id")}}}return Ki(P.replace(He,"$1"),j,q,K)}function Zn(){var P=[];function j(q,K){return P.push(q+" ")>h.cacheLength&&delete j[P.shift()],j[q+" "]=K}return j}function _t(P){return P[ee]=!0,P}function An(P){var j=w.createElement("fieldset");try{return!!P(j)}catch{return!1}finally{j.parentNode&&j.parentNode.removeChild(j),j=null}}function dr(P){return function(j){return ie(j,"input")&&j.type===P}}function Wn(P){return function(j){return(ie(j,"input")||ie(j,"button"))&&j.type===P}}function On(P){return function(j){return"form"in j?j.parentNode&&j.disabled===!1?"label"in j?"label"in j.parentNode?j.parentNode.disabled===P:j.disabled===P:j.isDisabled===P||j.isDisabled!==!P&&fr(j)===P:j.disabled===P:"label"in j?j.disabled===P:!1}}function Dt(P){return _t(function(j){return j=+j,_t(function(q,K){for(var te,se=P([],q.length,j),ce=se.length;ce--;)q[te=se[ce]]&&(q[te]=!(K[te]=q[te]))})})}function Un(P){return P&&typeof P.getElementsByTagName<"u"&&P}function rn(P){var j,q=P?P.ownerDocument||P:xe;return q==w||q.nodeType!==9||!q.documentElement||(w=q,F=w.documentElement,L=!m.isXMLDoc(w),G=F.matches||F.webkitMatchesSelector||F.msMatchesSelector,F.msMatchesSelector&&xe!=w&&(j=w.defaultView)&&j.top!==j&&j.addEventListener("unload",vn),x.getById=An(function(K){return F.appendChild(K).id=m.expando,!w.getElementsByName||!w.getElementsByName(m.expando).length}),x.disconnectedMatch=An(function(K){return G.call(K,"*")}),x.scope=An(function(){return w.querySelectorAll(":scope")}),x.cssHas=An(function(){try{return w.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),x.getById?(h.filter.ID=function(K){var te=K.replace(Bt,Nt);return function(se){return se.getAttribute("id")===te}},h.find.ID=function(K,te){if(typeof te.getElementById<"u"&&L){var se=te.getElementById(K);return se?[se]:[]}}):(h.filter.ID=function(K){var te=K.replace(Bt,Nt);return function(se){var ce=typeof se.getAttributeNode<"u"&&se.getAttributeNode("id");return ce&&ce.value===te}},h.find.ID=function(K,te){if(typeof te.getElementById<"u"&&L){var se,ce,be,fe=te.getElementById(K);if(fe){if(se=fe.getAttributeNode("id"),se&&se.value===K)return[fe];for(be=te.getElementsByName(K),ce=0;fe=be[ce++];)if(se=fe.getAttributeNode("id"),se&&se.value===K)return[fe]}return[]}}),h.find.TAG=function(K,te){return typeof te.getElementsByTagName<"u"?te.getElementsByTagName(K):te.querySelectorAll(K)},h.find.CLASS=function(K,te){if(typeof te.getElementsByClassName<"u"&&L)return te.getElementsByClassName(K)},V=[],An(function(K){var te;F.appendChild(K).innerHTML="<a id='"+ee+"' href='' disabled='disabled'></a><select id='"+ee+"-\r\\' disabled='disabled'><option selected=''></option></select>",K.querySelectorAll("[selected]").length||V.push("\\["+ue+"*(?:value|"+Mt+")"),K.querySelectorAll("[id~="+ee+"-]").length||V.push("~="),K.querySelectorAll("a#"+ee+"+*").length||V.push(".#.+[+~]"),K.querySelectorAll(":checked").length||V.push(":checked"),te=w.createElement("input"),te.setAttribute("type","hidden"),K.appendChild(te).setAttribute("name","D"),F.appendChild(K).disabled=!0,K.querySelectorAll(":disabled").length!==2&&V.push(":enabled",":disabled"),te=w.createElement("input"),te.setAttribute("name",""),K.appendChild(te),K.querySelectorAll("[name='']").length||V.push("\\["+ue+"*name"+ue+"*="+ue+`*(?:''|"")`)}),x.cssHas||V.push(":has"),V=V.length&&new RegExp(V.join("|")),Ze=function(K,te){if(K===te)return C=!0,0;var se=!K.compareDocumentPosition-!te.compareDocumentPosition;return se||(se=(K.ownerDocument||K)==(te.ownerDocument||te)?K.compareDocumentPosition(te):1,se&1||!x.sortDetached&&te.compareDocumentPosition(K)===se?K===w||K.ownerDocument==xe&&Me.contains(xe,K)?-1:te===w||te.ownerDocument==xe&&Me.contains(xe,te)?1:_?u.call(_,K)-u.call(_,te):0:se&4?-1:1)}),w}Me.matches=function(P,j){return Me(P,null,null,j)},Me.matchesSelector=function(P,j){if(rn(P),L&&!rt[j+" "]&&(!V||!V.test(j)))try{var q=G.call(P,j);if(q||x.disconnectedMatch||P.document&&P.document.nodeType!==11)return q}catch{rt(j,!0)}return Me(j,w,null,[P]).length>0},Me.contains=function(P,j){return(P.ownerDocument||P)!=w&&rn(P),m.contains(P,j)},Me.attr=function(P,j){(P.ownerDocument||P)!=w&&rn(P);var q=h.attrHandle[j.toLowerCase()],K=q&&p.call(h.attrHandle,j.toLowerCase())?q(P,j,!L):void 0;return K!==void 0?K:P.getAttribute(j)},Me.error=function(P){throw new Error("Syntax error, unrecognized expression: "+P)},m.uniqueSort=function(P){var j,q=[],K=0,te=0;if(C=!x.sortStable,_=!x.sortStable&&s.call(P,0),ve.call(P,Ze),C){for(;j=P[te++];)j===P[te]&&(K=q.push(te));for(;K--;)_e.call(P,q[K],1)}return _=null,P},m.fn.uniqueSort=function(){return this.pushStack(m.uniqueSort(s.apply(this)))},h=m.expr={cacheLength:50,createPseudo:_t,match:Rt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(P){return P[1]=P[1].replace(Bt,Nt),P[3]=(P[3]||P[4]||P[5]||"").replace(Bt,Nt),P[2]==="~="&&(P[3]=" "+P[3]+" "),P.slice(0,4)},CHILD:function(P){return P[1]=P[1].toLowerCase(),P[1].slice(0,3)==="nth"?(P[3]||Me.error(P[0]),P[4]=+(P[4]?P[5]+(P[6]||1):2*(P[3]==="even"||P[3]==="odd")),P[5]=+(P[7]+P[8]||P[3]==="odd")):P[3]&&Me.error(P[0]),P},PSEUDO:function(P){var j,q=!P[6]&&P[2];return Rt.CHILD.test(P[0])?null:(P[3]?P[2]=P[4]||P[5]||"":q&&Lt.test(q)&&(j=Vt(q,!0))&&(j=q.indexOf(")",q.length-j)-q.length)&&(P[0]=P[0].slice(0,j),P[2]=q.slice(0,j)),P.slice(0,3))}},filter:{TAG:function(P){var j=P.replace(Bt,Nt).toLowerCase();return P==="*"?function(){return!0}:function(q){return ie(q,j)}},CLASS:function(P){var j=Se[P+" "];return j||(j=new RegExp("(^|"+ue+")"+P+"("+ue+"|$)"))&&Se(P,function(q){return j.test(typeof q.className=="string"&&q.className||typeof q.getAttribute<"u"&&q.getAttribute("class")||"")})},ATTR:function(P,j,q){return function(K){var te=Me.attr(K,P);return te==null?j==="!=":j?(te+="",j==="="?te===q:j==="!="?te!==q:j==="^="?q&&te.indexOf(q)===0:j==="*="?q&&te.indexOf(q)>-1:j==="$="?q&&te.slice(-q.length)===q:j==="~="?(" "+te.replace(Fe," ")+" ").indexOf(q)>-1:j==="|="?te===q||te.slice(0,q.length+1)===q+"-":!1):!0}},CHILD:function(P,j,q,K,te){var se=P.slice(0,3)!=="nth",ce=P.slice(-4)!=="last",be=j==="of-type";return K===1&&te===0?function(fe){return!!fe.parentNode}:function(fe,Ie,Ee){var Ae,Pe,ye,Ke,at,nt=se!==ce?"nextSibling":"previousSibling",bt=fe.parentNode,Ft=be&&fe.nodeName.toLowerCase(),$n=!Ee&&!be,Je=!1;if(bt){if(se){for(;nt;){for(ye=fe;ye=ye[nt];)if(be?ie(ye,Ft):ye.nodeType===1)return!1;at=nt=P==="only"&&!at&&"nextSibling"}return!0}if(at=[ce?bt.firstChild:bt.lastChild],ce&&$n){for(Pe=bt[ee]||(bt[ee]={}),Ae=Pe[P]||[],Ke=Ae[0]===Y&&Ae[1],Je=Ke&&Ae[2],ye=Ke&&bt.childNodes[Ke];ye=++Ke&&ye&&ye[nt]||(Je=Ke=0)||at.pop();)if(ye.nodeType===1&&++Je&&ye===fe){Pe[P]=[Y,Ke,Je];break}}else if($n&&(Pe=fe[ee]||(fe[ee]={}),Ae=Pe[P]||[],Ke=Ae[0]===Y&&Ae[1],Je=Ke),Je===!1)for(;(ye=++Ke&&ye&&ye[nt]||(Je=Ke=0)||at.pop())&&!((be?ie(ye,Ft):ye.nodeType===1)&&++Je&&($n&&(Pe=ye[ee]||(ye[ee]={}),Pe[P]=[Y,Je]),ye===fe)););return Je-=te,Je===K||Je%K===0&&Je/K>=0}}},PSEUDO:function(P,j){var q,K=h.pseudos[P]||h.setFilters[P.toLowerCase()]||Me.error("unsupported pseudo: "+P);return K[ee]?K(j):K.length>1?(q=[P,P,"",j],h.setFilters.hasOwnProperty(P.toLowerCase())?_t(function(te,se){for(var ce,be=K(te,j),fe=be.length;fe--;)ce=u.call(te,be[fe]),te[ce]=!(se[ce]=be[fe])}):function(te){return K(te,0,q)}):K}},pseudos:{not:_t(function(P){var j=[],q=[],K=an(P.replace(He,"$1"));return K[ee]?_t(function(te,se,ce,be){for(var fe,Ie=K(te,null,be,[]),Ee=te.length;Ee--;)(fe=Ie[Ee])&&(te[Ee]=!(se[Ee]=fe))}):function(te,se,ce){return j[0]=te,K(j,null,ce,q),j[0]=null,!q.pop()}}),has:_t(function(P){return function(j){return Me(P,j).length>0}}),contains:_t(function(P){return P=P.replace(Bt,Nt),function(j){return(j.textContent||m.text(j)).indexOf(P)>-1}}),lang:_t(function(P){return jt.test(P||"")||Me.error("unsupported lang: "+P),P=P.replace(Bt,Nt).toLowerCase(),function(j){var q;do if(q=L?j.lang:j.getAttribute("xml:lang")||j.getAttribute("lang"))return q=q.toLowerCase(),q===P||q.indexOf(P+"-")===0;while((j=j.parentNode)&&j.nodeType===1);return!1}}),target:function(P){var j=n.location&&n.location.hash;return j&&j.slice(1)===P.id},root:function(P){return P===F},focus:function(P){return P===Jn()&&w.hasFocus()&&!!(P.type||P.href||~P.tabIndex)},enabled:On(!1),disabled:On(!0),checked:function(P){return ie(P,"input")&&!!P.checked||ie(P,"option")&&!!P.selected},selected:function(P){return P.parentNode&&P.parentNode.selectedIndex,P.selected===!0},empty:function(P){for(P=P.firstChild;P;P=P.nextSibling)if(P.nodeType<6)return!1;return!0},parent:function(P){return!h.pseudos.empty(P)},header:function(P){return nn.test(P.nodeName)},input:function(P){return tn.test(P.nodeName)},button:function(P){return ie(P,"input")&&P.type==="button"||ie(P,"button")},text:function(P){var j;return ie(P,"input")&&P.type==="text"&&((j=P.getAttribute("type"))==null||j.toLowerCase()==="text")},first:Dt(function(){return[0]}),last:Dt(function(P,j){return[j-1]}),eq:Dt(function(P,j,q){return[q<0?q+j:q]}),even:Dt(function(P,j){for(var q=0;q<j;q+=2)P.push(q);return P}),odd:Dt(function(P,j){for(var q=1;q<j;q+=2)P.push(q);return P}),lt:Dt(function(P,j,q){var K;for(q<0?K=q+j:q>j?K=j:K=q;--K>=0;)P.push(K);return P}),gt:Dt(function(P,j,q){for(var K=q<0?q+j:q;++K<j;)P.push(K);return P})}},h.pseudos.nth=h.pseudos.eq;for(c in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})h.pseudos[c]=dr(c);for(c in{submit:!0,reset:!0})h.pseudos[c]=Wn(c);function Yi(){}Yi.prototype=h.filters=h.pseudos,h.setFilters=new Yi;function Vt(P,j){var q,K,te,se,ce,be,fe,Ie=Re[P+" "];if(Ie)return j?0:Ie.slice(0);for(ce=P,be=[],fe=h.preFilter;ce;){(!q||(K=Qe.exec(ce)))&&(K&&(ce=ce.slice(K[0].length)||ce),be.push(te=[])),q=!1,(K=Tn.exec(ce))&&(q=K.shift(),te.push({value:q,type:K[0].replace(He," ")}),ce=ce.slice(q.length));for(se in h.filter)(K=Rt[se].exec(ce))&&(!fe[se]||(K=fe[se](K)))&&(q=K.shift(),te.push({value:q,type:se,matches:K}),ce=ce.slice(q.length));if(!q)break}return j?ce.length:ce?Me.error(P):Re(P,be).slice(0)}function kn(P){for(var j=0,q=P.length,K="";j<q;j++)K+=P[j].value;return K}function ei(P,j,q){var K=j.dir,te=j.next,se=te||K,ce=q&&se==="parentNode",be=re++;return j.first?function(fe,Ie,Ee){for(;fe=fe[K];)if(fe.nodeType===1||ce)return P(fe,Ie,Ee);return!1}:function(fe,Ie,Ee){var Ae,Pe,ye=[Y,be];if(Ee){for(;fe=fe[K];)if((fe.nodeType===1||ce)&&P(fe,Ie,Ee))return!0}else for(;fe=fe[K];)if(fe.nodeType===1||ce)if(Pe=fe[ee]||(fe[ee]={}),te&&ie(fe,te))fe=fe[K]||fe;else{if((Ae=Pe[se])&&Ae[0]===Y&&Ae[1]===be)return ye[2]=Ae[2];if(Pe[se]=ye,ye[2]=P(fe,Ie,Ee))return!0}return!1}}function Ei(P){return P.length>1?function(j,q,K){for(var te=P.length;te--;)if(!P[te](j,q,K))return!1;return!0}:P[0]}function hr(P,j,q){for(var K=0,te=j.length;K<te;K++)Me(P,j[K],q);return q}function ti(P,j,q,K,te){for(var se,ce=[],be=0,fe=P.length,Ie=j!=null;be<fe;be++)(se=P[be])&&(!q||q(se,K,te))&&(ce.push(se),Ie&&j.push(be));return ce}function Si(P,j,q,K,te,se){return K&&!K[ee]&&(K=Si(K)),te&&!te[ee]&&(te=Si(te,se)),_t(function(ce,be,fe,Ie){var Ee,Ae,Pe,ye,Ke=[],at=[],nt=be.length,bt=ce||hr(j||"*",fe.nodeType?[fe]:fe,[]),Ft=P&&(ce||!j)?ti(bt,Ke,P,fe,Ie):bt;if(q?(ye=te||(ce?P:nt||K)?[]:be,q(Ft,ye,fe,Ie)):ye=Ft,K)for(Ee=ti(ye,at),K(Ee,[],fe,Ie),Ae=Ee.length;Ae--;)(Pe=Ee[Ae])&&(ye[at[Ae]]=!(Ft[at[Ae]]=Pe));if(ce){if(te||P){if(te){for(Ee=[],Ae=ye.length;Ae--;)(Pe=ye[Ae])&&Ee.push(Ft[Ae]=Pe);te(null,ye=[],Ee,Ie)}for(Ae=ye.length;Ae--;)(Pe=ye[Ae])&&(Ee=te?u.call(ce,Pe):Ke[Ae])>-1&&(ce[Ee]=!(be[Ee]=Pe))}}else ye=ti(ye===be?ye.splice(nt,ye.length):ye),te?te(null,be,ye,Ie):E.apply(be,ye)})}function Di(P){for(var j,q,K,te=P.length,se=h.relative[P[0].type],ce=se||h.relative[" "],be=se?1:0,fe=ei(function(Ae){return Ae===j},ce,!0),Ie=ei(function(Ae){return u.call(j,Ae)>-1},ce,!0),Ee=[function(Ae,Pe,ye){var Ke=!se&&(ye||Pe!=g)||((j=Pe).nodeType?fe(Ae,Pe,ye):Ie(Ae,Pe,ye));return j=null,Ke}];be<te;be++)if(q=h.relative[P[be].type])Ee=[ei(Ei(Ee),q)];else{if(q=h.filter[P[be].type].apply(null,P[be].matches),q[ee]){for(K=++be;K<te&&!h.relative[P[K].type];K++);return Si(be>1&&Ei(Ee),be>1&&kn(P.slice(0,be-1).concat({value:P[be-2].type===" "?"*":""})).replace(He,"$1"),q,be<K&&Di(P.slice(be,K)),K<te&&Di(P=P.slice(K)),K<te&&kn(P))}Ee.push(q)}return Ei(Ee)}function _n(P,j){var q=j.length>0,K=P.length>0,te=function(se,ce,be,fe,Ie){var Ee,Ae,Pe,ye=0,Ke="0",at=se&&[],nt=[],bt=g,Ft=se||K&&h.find.TAG("*",Ie),$n=Y+=bt==null?1:Math.random()||.1,Je=Ft.length;for(Ie&&(g=ce==w||ce||Ie);Ke!==Je&&(Ee=Ft[Ke])!=null;Ke++){if(K&&Ee){for(Ae=0,!ce&&Ee.ownerDocument!=w&&(rn(Ee),be=!L);Pe=P[Ae++];)if(Pe(Ee,ce||w,be)){E.call(fe,Ee);break}Ie&&(Y=$n)}q&&((Ee=!Pe&&Ee)&&ye--,se&&at.push(Ee))}if(ye+=Ke,q&&Ke!==ye){for(Ae=0;Pe=j[Ae++];)Pe(at,nt,ce,be);if(se){if(ye>0)for(;Ke--;)at[Ke]||nt[Ke]||(nt[Ke]=ge.call(fe));nt=ti(nt)}E.apply(fe,nt),Ie&&!se&&nt.length>0&&ye+j.length>1&&m.uniqueSort(fe)}return Ie&&(Y=$n,g=bt),at};return q?_t(te):te}function an(P,j){var q,K=[],te=[],se=$e[P+" "];if(!se){for(j||(j=Vt(P)),q=j.length;q--;)se=Di(j[q]),se[ee]?K.push(se):te.push(se);se=$e(P,_n(te,K)),se.selector=P}return se}function Ki(P,j,q,K){var te,se,ce,be,fe,Ie=typeof P=="function"&&P,Ee=!K&&Vt(P=Ie.selector||P);if(q=q||[],Ee.length===1){if(se=Ee[0]=Ee[0].slice(0),se.length>2&&(ce=se[0]).type==="ID"&&j.nodeType===9&&L&&h.relative[se[1].type]){if(j=(h.find.ID(ce.matches[0].replace(Bt,Nt),j)||[])[0],j)Ie&&(j=j.parentNode);else return q;P=P.slice(se.shift().value.length)}for(te=Rt.needsContext.test(P)?0:se.length;te--&&(ce=se[te],!h.relative[be=ce.type]);)if((fe=h.find[be])&&(K=fe(ce.matches[0].replace(Bt,Nt),Ci.test(se[0].type)&&Un(j.parentNode)||j))){if(se.splice(te,1),P=K.length&&kn(se),!P)return E.apply(q,K),q;break}}return(Ie||an(P,Ee))(K,j,!L,q,!j||Ci.test(P)&&Un(j.parentNode)||j),q}x.sortStable=ee.split("").sort(Ze).join("")===ee,rn(),x.sortDetached=An(function(P){return P.compareDocumentPosition(w.createElement("fieldset"))&1}),m.find=Me,m.expr[":"]=m.expr.pseudos,m.unique=m.uniqueSort,Me.compile=an,Me.select=Ki,Me.setDocument=rn,Me.tokenize=Vt,Me.escape=m.escapeSelector,Me.getText=m.text,Me.isXML=m.isXMLDoc,Me.selectors=m.expr,Me.support=m.support,Me.uniqueSort=m.uniqueSort})();var Le=function(c,h,g){for(var _=[],C=g!==void 0;(c=c[h])&&c.nodeType!==9;)if(c.nodeType===1){if(C&&m(c).is(g))break;_.push(c)}return _},ct=function(c,h){for(var g=[];c;c=c.nextSibling)c.nodeType===1&&c!==h&&g.push(c);return g},Xe=m.expr.match.needsContext,Ve=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function et(c,h,g){return S(h)?m.grep(c,function(_,C){return!!h.call(_,C,_)!==g}):h.nodeType?m.grep(c,function(_){return _===h!==g}):typeof h!="string"?m.grep(c,function(_){return u.call(h,_)>-1!==g}):m.filter(h,c,g)}m.filter=function(c,h,g){var _=h[0];return g&&(c=":not("+c+")"),h.length===1&&_.nodeType===1?m.find.matchesSelector(_,c)?[_]:[]:m.find.matches(c,m.grep(h,function(C){return C.nodeType===1}))},m.fn.extend({find:function(c){var h,g,_=this.length,C=this;if(typeof c!="string")return this.pushStack(m(c).filter(function(){for(h=0;h<_;h++)if(m.contains(C[h],this))return!0}));for(g=this.pushStack([]),h=0;h<_;h++)m.find(c,C[h],g);return _>1?m.uniqueSort(g):g},filter:function(c){return this.pushStack(et(this,c||[],!1))},not:function(c){return this.pushStack(et(this,c||[],!0))},is:function(c){return!!et(this,typeof c=="string"&&Xe.test(c)?m(c):c||[],!1).length}});var it,Ge=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ke=m.fn.init=function(c,h,g){var _,C;if(!c)return this;if(g=g||it,typeof c=="string")if(c[0]==="<"&&c[c.length-1]===">"&&c.length>=3?_=[null,c,null]:_=Ge.exec(c),_&&(_[1]||!h))if(_[1]){if(h=h instanceof m?h[0]:h,m.merge(this,m.parseHTML(_[1],h&&h.nodeType?h.ownerDocument||h:A,!0)),Ve.test(_[1])&&m.isPlainObject(h))for(_ in h)S(this[_])?this[_](h[_]):this.attr(_,h[_]);return this}else return C=A.getElementById(_[2]),C&&(this[0]=C,this.length=1),this;else return!h||h.jquery?(h||g).find(c):this.constructor(h).find(c);else{if(c.nodeType)return this[0]=c,this.length=1,this;if(S(c))return g.ready!==void 0?g.ready(c):c(m)}return m.makeArray(c,this)};ke.prototype=m.fn,it=m(A);var ze=/^(?:parents|prev(?:Until|All))/,tt={children:!0,contents:!0,next:!0,prev:!0};m.fn.extend({has:function(c){var h=m(c,this),g=h.length;return this.filter(function(){for(var _=0;_<g;_++)if(m.contains(this,h[_]))return!0})},closest:function(c,h){var g,_=0,C=this.length,E=[],w=typeof c!="string"&&m(c);if(!Xe.test(c)){for(;_<C;_++)for(g=this[_];g&&g!==h;g=g.parentNode)if(g.nodeType<11&&(w?w.index(g)>-1:g.nodeType===1&&m.find.matchesSelector(g,c))){E.push(g);break}}return this.pushStack(E.length>1?m.uniqueSort(E):E)},index:function(c){return c?typeof c=="string"?u.call(m(c),this[0]):u.call(this,c.jquery?c[0]:c):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(c,h){return this.pushStack(m.uniqueSort(m.merge(this.get(),m(c,h))))},addBack:function(c){return this.add(c==null?this.prevObject:this.prevObject.filter(c))}});function sn(c,h){for(;(c=c[h])&&c.nodeType!==1;);return c}m.each({parent:function(c){var h=c.parentNode;return h&&h.nodeType!==11?h:null},parents:function(c){return Le(c,"parentNode")},parentsUntil:function(c,h,g){return Le(c,"parentNode",g)},next:function(c){return sn(c,"nextSibling")},prev:function(c){return sn(c,"previousSibling")},nextAll:function(c){return Le(c,"nextSibling")},prevAll:function(c){return Le(c,"previousSibling")},nextUntil:function(c,h,g){return Le(c,"nextSibling",g)},prevUntil:function(c,h,g){return Le(c,"previousSibling",g)},siblings:function(c){return ct((c.parentNode||{}).firstChild,c)},children:function(c){return ct(c.firstChild)},contents:function(c){return c.contentDocument!=null&&a(c.contentDocument)?c.contentDocument:(ie(c,"template")&&(c=c.content||c),m.merge([],c.childNodes))}},function(c,h){m.fn[c]=function(g,_){var C=m.map(this,h,g);return c.slice(-5)!=="Until"&&(_=g),_&&typeof _=="string"&&(C=m.filter(_,C)),this.length>1&&(tt[c]||m.uniqueSort(C),ze.test(c)&&C.reverse()),this.pushStack(C)}});var gt=/[^\x20\t\r\n\f]+/g;function Pn(c){var h={};return m.each(c.match(gt)||[],function(g,_){h[_]=!0}),h}m.Callbacks=function(c){c=typeof c=="string"?Pn(c):m.extend({},c);var h,g,_,C,E=[],w=[],F=-1,L=function(){for(C=C||c.once,_=h=!0;w.length;F=-1)for(g=w.shift();++F<E.length;)E[F].apply(g[0],g[1])===!1&&c.stopOnFalse&&(F=E.length,g=!1);c.memory||(g=!1),h=!1,C&&(g?E=[]:E="")},V={add:function(){return E&&(g&&!h&&(F=E.length-1,w.push(g)),(function G(ee){m.each(ee,function(Y,re){S(re)?(!c.unique||!V.has(re))&&E.push(re):re&&re.length&&N(re)!=="string"&&G(re)})})(arguments),g&&!h&&L()),this},remove:function(){return m.each(arguments,function(G,ee){for(var Y;(Y=m.inArray(ee,E,Y))>-1;)E.splice(Y,1),Y<=F&&F--}),this},has:function(G){return G?m.inArray(G,E)>-1:E.length>0},empty:function(){return E&&(E=[]),this},disable:function(){return C=w=[],E=g="",this},disabled:function(){return!E},lock:function(){return C=w=[],!g&&!h&&(E=g=""),this},locked:function(){return!!C},fireWith:function(G,ee){return C||(ee=ee||[],ee=[G,ee.slice?ee.slice():ee],w.push(ee),h||L()),this},fire:function(){return V.fireWith(this,arguments),this},fired:function(){return!!_}};return V};function yt(c){return c}function bn(c){throw c}function qn(c,h,g,_){var C;try{c&&S(C=c.promise)?C.call(c).done(h).fail(g):c&&S(C=c.then)?C.call(c,h,g):h.apply(void 0,[c].slice(_))}catch(E){g.apply(void 0,[E])}}m.extend({Deferred:function(c){var h=[["notify","progress",m.Callbacks("memory"),m.Callbacks("memory"),2],["resolve","done",m.Callbacks("once memory"),m.Callbacks("once memory"),0,"resolved"],["reject","fail",m.Callbacks("once memory"),m.Callbacks("once memory"),1,"rejected"]],g="pending",_={state:function(){return g},always:function(){return C.done(arguments).fail(arguments),this},catch:function(E){return _.then(null,E)},pipe:function(){var E=arguments;return m.Deferred(function(w){m.each(h,function(F,L){var V=S(E[L[4]])&&E[L[4]];C[L[1]](function(){var G=V&&V.apply(this,arguments);G&&S(G.promise)?G.promise().progress(w.notify).done(w.resolve).fail(w.reject):w[L[0]+"With"](this,V?[G]:arguments)})}),E=null}).promise()},then:function(E,w,F){var L=0;function V(G,ee,Y,re){return function(){var Se=this,Re=arguments,$e=function(){var Ze,Mt;if(!(G<L)){if(Ze=Y.apply(Se,Re),Ze===ee.promise())throw new TypeError("Thenable self-resolution");Mt=Ze&&(typeof Ze=="object"||typeof Ze=="function")&&Ze.then,S(Mt)?re?Mt.call(Ze,V(L,ee,yt,re),V(L,ee,bn,re)):(L++,Mt.call(Ze,V(L,ee,yt,re),V(L,ee,bn,re),V(L,ee,yt,ee.notifyWith))):(Y!==yt&&(Se=void 0,Re=[Ze]),(re||ee.resolveWith)(Se,Re))}},rt=re?$e:function(){try{$e()}catch(Ze){m.Deferred.exceptionHook&&m.Deferred.exceptionHook(Ze,rt.error),G+1>=L&&(Y!==bn&&(Se=void 0,Re=[Ze]),ee.rejectWith(Se,Re))}};G?rt():(m.Deferred.getErrorHook?rt.error=m.Deferred.getErrorHook():m.Deferred.getStackHook&&(rt.error=m.Deferred.getStackHook()),n.setTimeout(rt))}}return m.Deferred(function(G){h[0][3].add(V(0,G,S(F)?F:yt,G.notifyWith)),h[1][3].add(V(0,G,S(E)?E:yt)),h[2][3].add(V(0,G,S(w)?w:bn))}).promise()},promise:function(E){return E!=null?m.extend(E,_):_}},C={};return m.each(h,function(E,w){var F=w[2],L=w[5];_[w[1]]=F.add,L&&F.add(function(){g=L},h[3-E][2].disable,h[3-E][3].disable,h[0][2].lock,h[0][3].lock),F.add(w[3].fire),C[w[0]]=function(){return C[w[0]+"With"](this===C?void 0:this,arguments),this},C[w[0]+"With"]=F.fireWith}),_.promise(C),c&&c.call(C,C),C},when:function(c){var h=arguments.length,g=h,_=Array(g),C=s.call(arguments),E=m.Deferred(),w=function(F){return function(L){_[F]=this,C[F]=arguments.length>1?s.call(arguments):L,--h||E.resolveWith(_,C)}};if(h<=1&&(qn(c,E.done(w(g)).resolve,E.reject,!h),E.state()==="pending"||S(C[g]&&C[g].then)))return E.then();for(;g--;)qn(C[g],w(g),E.reject);return E.promise()}});var yn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;m.Deferred.exceptionHook=function(c,h){n.console&&n.console.warn&&c&&yn.test(c.name)&&n.console.warn("jQuery.Deferred exception: "+c.message,c.stack,h)},m.readyException=function(c){n.setTimeout(function(){throw c})};var Mn=m.Deferred();m.fn.ready=function(c){return Mn.then(c).catch(function(h){m.readyException(h)}),this},m.extend({isReady:!1,readyWait:1,ready:function(c){(c===!0?--m.readyWait:m.isReady)||(m.isReady=!0,!(c!==!0&&--m.readyWait>0)&&Mn.resolveWith(A,[m]))}}),m.ready.then=Mn.then;function Ut(){A.removeEventListener("DOMContentLoaded",Ut),n.removeEventListener("load",Ut),m.ready()}A.readyState==="complete"||A.readyState!=="loading"&&!A.documentElement.doScroll?n.setTimeout(m.ready):(A.addEventListener("DOMContentLoaded",Ut),n.addEventListener("load",Ut));var ot=function(c,h,g,_,C,E,w){var F=0,L=c.length,V=g==null;if(N(g)==="object"){C=!0;for(F in g)ot(c,h,F,g[F],!0,E,w)}else if(_!==void 0&&(C=!0,S(_)||(w=!0),V&&(w?(h.call(c,_),h=null):(V=h,h=function(G,ee,Y){return V.call(m(G),Y)})),h))for(;F<L;F++)h(c[F],g,w?_:_.call(c[F],F,h(c[F],g)));return C?c:V?h.call(c):L?h(c[0],g):E},xt=/^-ms-/,ri=/-([a-z])/g;function ln(c,h){return h.toUpperCase()}function Ye(c){return c.replace(xt,"ms-").replace(ri,ln)}var wt=function(c){return c.nodeType===1||c.nodeType===9||!+c.nodeType};function qt(){this.expando=m.expando+qt.uid++}qt.uid=1,qt.prototype={cache:function(c){var h=c[this.expando];return h||(h={},wt(c)&&(c.nodeType?c[this.expando]=h:Object.defineProperty(c,this.expando,{value:h,configurable:!0}))),h},set:function(c,h,g){var _,C=this.cache(c);if(typeof h=="string")C[Ye(h)]=g;else for(_ in h)C[Ye(_)]=h[_];return C},get:function(c,h){return h===void 0?this.cache(c):c[this.expando]&&c[this.expando][Ye(h)]},access:function(c,h,g){return h===void 0||h&&typeof h=="string"&&g===void 0?this.get(c,h):(this.set(c,h,g),g!==void 0?g:h)},remove:function(c,h){var g,_=c[this.expando];if(_!==void 0){if(h!==void 0)for(Array.isArray(h)?h=h.map(Ye):(h=Ye(h),h=h in _?[h]:h.match(gt)||[]),g=h.length;g--;)delete _[h[g]];(h===void 0||m.isEmptyObject(_))&&(c.nodeType?c[this.expando]=void 0:delete c[this.expando])}},hasData:function(c){var h=c[this.expando];return h!==void 0&&!m.isEmptyObject(h)}};var me=new qt,st=new qt,zn=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ai=/[A-Z]/g;function Yn(c){return c==="true"?!0:c==="false"?!1:c==="null"?null:c===+c+""?+c:zn.test(c)?JSON.parse(c):c}function Tt(c,h,g){var _;if(g===void 0&&c.nodeType===1)if(_="data-"+h.replace(ai,"-$&").toLowerCase(),g=c.getAttribute(_),typeof g=="string"){try{g=Yn(g)}catch{}st.set(c,h,g)}else g=void 0;return g}m.extend({hasData:function(c){return st.hasData(c)||me.hasData(c)},data:function(c,h,g){return st.access(c,h,g)},removeData:function(c,h){st.remove(c,h)},_data:function(c,h,g){return me.access(c,h,g)},_removeData:function(c,h){me.remove(c,h)}}),m.fn.extend({data:function(c,h){var g,_,C,E=this[0],w=E&&E.attributes;if(c===void 0){if(this.length&&(C=st.get(E),E.nodeType===1&&!me.get(E,"hasDataAttrs"))){for(g=w.length;g--;)w[g]&&(_=w[g].name,_.indexOf("data-")===0&&(_=Ye(_.slice(5)),Tt(E,_,C[_])));me.set(E,"hasDataAttrs",!0)}return C}return typeof c=="object"?this.each(function(){st.set(this,c)}):ot(this,function(F){var L;if(E&&F===void 0)return L=st.get(E,c),L!==void 0||(L=Tt(E,c),L!==void 0)?L:void 0;this.each(function(){st.set(this,c,F)})},null,h,arguments.length>1,null,!0)},removeData:function(c){return this.each(function(){st.remove(this,c)})}}),m.extend({queue:function(c,h,g){var _;if(c)return h=(h||"fx")+"queue",_=me.get(c,h),g&&(!_||Array.isArray(g)?_=me.access(c,h,m.makeArray(g)):_.push(g)),_||[]},dequeue:function(c,h){h=h||"fx";var g=m.queue(c,h),_=g.length,C=g.shift(),E=m._queueHooks(c,h),w=function(){m.dequeue(c,h)};C==="inprogress"&&(C=g.shift(),_--),C&&(h==="fx"&&g.unshift("inprogress"),delete E.stop,C.call(c,w,E)),!_&&E&&E.empty.fire()},_queueHooks:function(c,h){var g=h+"queueHooks";return me.get(c,g)||me.access(c,g,{empty:m.Callbacks("once memory").add(function(){me.remove(c,[h+"queue",g])})})}}),m.fn.extend({queue:function(c,h){var g=2;return typeof c!="string"&&(h=c,c="fx",g--),arguments.length<g?m.queue(this[0],c):h===void 0?this:this.each(function(){var _=m.queue(this,c,h);m._queueHooks(this,c),c==="fx"&&_[0]!=="inprogress"&&m.dequeue(this,c)})},dequeue:function(c){return this.each(function(){m.dequeue(this,c)})},clearQueue:function(c){return this.queue(c||"fx",[])},promise:function(c,h){var g,_=1,C=m.Deferred(),E=this,w=this.length,F=function(){--_||C.resolveWith(E,[E])};for(typeof c!="string"&&(h=c,c=void 0),c=c||"fx";w--;)g=me.get(E[w],c+"queueHooks"),g&&g.empty&&(_++,g.empty.add(F));return F(),C.promise(h)}});var Kn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,zt=new RegExp("^(?:([+-])=|)("+Kn+")([a-z%]*)$","i"),Ct=["Top","Right","Bottom","Left"],Ht=A.documentElement,We=function(c){return m.contains(c.ownerDocument,c)},In={composed:!0};Ht.getRootNode&&(We=function(c){return m.contains(c.ownerDocument,c)||c.getRootNode(In)===c.ownerDocument});var Et=function(c,h){return c=h||c,c.style.display==="none"||c.style.display===""&&We(c)&&m.css(c,"display")==="none"};function un(c,h,g,_){var C,E,w=20,F=_?function(){return _.cur()}:function(){return m.css(c,h,"")},L=F(),V=g&&g[3]||(m.cssNumber[h]?"":"px"),G=c.nodeType&&(m.cssNumber[h]||V!=="px"&&+L)&&zt.exec(m.css(c,h));if(G&&G[3]!==V){for(L=L/2,V=V||G[3],G=+L||1;w--;)m.style(c,h,G+V),(1-E)*(1-(E=F()/L||.5))<=0&&(w=0),G=G/E;G=G*2,m.style(c,h,G+V),g=g||[]}return g&&(G=+G||+L||0,C=g[1]?G+(g[1]+1)*g[2]:+g[2],_&&(_.unit=V,_.start=G,_.end=C)),C}var cn={};function Ln(c){var h,g=c.ownerDocument,_=c.nodeName,C=cn[_];return C||(h=g.body.appendChild(g.createElement(_)),C=m.css(h,"display"),h.parentNode.removeChild(h),C==="none"&&(C="block"),cn[_]=C,C)}function lt(c,h){for(var g,_,C=[],E=0,w=c.length;E<w;E++)_=c[E],_.style&&(g=_.style.display,h?(g==="none"&&(C[E]=me.get(_,"display")||null,C[E]||(_.style.display="")),_.style.display===""&&Et(_)&&(C[E]=Ln(_))):g!=="none"&&(C[E]="none",me.set(_,"display",g)));for(E=0;E<w;E++)C[E]!=null&&(c[E].style.display=C[E]);return c}m.fn.extend({show:function(){return lt(this,!0)},hide:function(){return lt(this)},toggle:function(c){return typeof c=="boolean"?c?this.show():this.hide():this.each(function(){Et(this)?m(this).show():m(this).hide()})}});var Yt=/^(?:checkbox|radio)$/i,Xn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,O=/^$|^module$|\/(?:java|ecma)script/i;(function(){var c=A.createDocumentFragment(),h=c.appendChild(A.createElement("div")),g=A.createElement("input");g.setAttribute("type","radio"),g.setAttribute("checked","checked"),g.setAttribute("name","t"),h.appendChild(g),x.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked,h.innerHTML="<textarea>x</textarea>",x.noCloneChecked=!!h.cloneNode(!0).lastChild.defaultValue,h.innerHTML="<option></option>",x.option=!!h.lastChild})();var k={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};k.tbody=k.tfoot=k.colgroup=k.caption=k.thead,k.th=k.td,x.option||(k.optgroup=k.option=[1,"<select multiple='multiple'>","</select>"]);function B(c,h){var g;return typeof c.getElementsByTagName<"u"?g=c.getElementsByTagName(h||"*"):typeof c.querySelectorAll<"u"?g=c.querySelectorAll(h||"*"):g=[],h===void 0||h&&ie(c,h)?m.merge([c],g):g}function Q(c,h){for(var g=0,_=c.length;g<_;g++)me.set(c[g],"globalEval",!h||me.get(h[g],"globalEval"))}var oe=/<|&#?\w+;/;function le(c,h,g,_,C){for(var E,w,F,L,V,G,ee=h.createDocumentFragment(),Y=[],re=0,Se=c.length;re<Se;re++)if(E=c[re],E||E===0)if(N(E)==="object")m.merge(Y,E.nodeType?[E]:E);else if(!oe.test(E))Y.push(h.createTextNode(E));else{for(w=w||ee.appendChild(h.createElement("div")),F=(Xn.exec(E)||["",""])[1].toLowerCase(),L=k[F]||k._default,w.innerHTML=L[1]+m.htmlPrefilter(E)+L[2],G=L[0];G--;)w=w.lastChild;m.merge(Y,w.childNodes),w=ee.firstChild,w.textContent=""}for(ee.textContent="",re=0;E=Y[re++];){if(_&&m.inArray(E,_)>-1){C&&C.push(E);continue}if(V=We(E),w=B(ee.appendChild(E),"script"),V&&Q(w),g)for(G=0;E=w[G++];)O.test(E.type||"")&&g.push(E)}return ee}var Oe=/^([^.]*)(?:\.(.+)|)/;function de(){return!0}function Te(){return!1}function he(c,h,g,_,C,E){var w,F;if(typeof h=="object"){typeof g!="string"&&(_=_||g,g=void 0);for(F in h)he(c,F,g,_,h[F],E);return c}if(_==null&&C==null?(C=g,_=g=void 0):C==null&&(typeof g=="string"?(C=_,_=void 0):(C=_,_=g,g=void 0)),C===!1)C=Te;else if(!C)return c;return E===1&&(w=C,C=function(L){return m().off(L),w.apply(this,arguments)},C.guid=w.guid||(w.guid=m.guid++)),c.each(function(){m.event.add(this,h,C,_,g)})}m.event={global:{},add:function(c,h,g,_,C){var E,w,F,L,V,G,ee,Y,re,Se,Re,$e=me.get(c);if(wt(c))for(g.handler&&(E=g,g=E.handler,C=E.selector),C&&m.find.matchesSelector(Ht,C),g.guid||(g.guid=m.guid++),(L=$e.events)||(L=$e.events=Object.create(null)),(w=$e.handle)||(w=$e.handle=function(rt){return typeof m<"u"&&m.event.triggered!==rt.type?m.event.dispatch.apply(c,arguments):void 0}),h=(h||"").match(gt)||[""],V=h.length;V--;)F=Oe.exec(h[V])||[],re=Re=F[1],Se=(F[2]||"").split(".").sort(),re&&(ee=m.event.special[re]||{},re=(C?ee.delegateType:ee.bindType)||re,ee=m.event.special[re]||{},G=m.extend({type:re,origType:Re,data:_,handler:g,guid:g.guid,selector:C,needsContext:C&&m.expr.match.needsContext.test(C),namespace:Se.join(".")},E),(Y=L[re])||(Y=L[re]=[],Y.delegateCount=0,(!ee.setup||ee.setup.call(c,_,Se,w)===!1)&&c.addEventListener&&c.addEventListener(re,w)),ee.add&&(ee.add.call(c,G),G.handler.guid||(G.handler.guid=g.guid)),C?Y.splice(Y.delegateCount++,0,G):Y.push(G),m.event.global[re]=!0)},remove:function(c,h,g,_,C){var E,w,F,L,V,G,ee,Y,re,Se,Re,$e=me.hasData(c)&&me.get(c);if(!(!$e||!(L=$e.events))){for(h=(h||"").match(gt)||[""],V=h.length;V--;){if(F=Oe.exec(h[V])||[],re=Re=F[1],Se=(F[2]||"").split(".").sort(),!re){for(re in L)m.event.remove(c,re+h[V],g,_,!0);continue}for(ee=m.event.special[re]||{},re=(_?ee.delegateType:ee.bindType)||re,Y=L[re]||[],F=F[2]&&new RegExp("(^|\\.)"+Se.join("\\.(?:.*\\.|)")+"(\\.|$)"),w=E=Y.length;E--;)G=Y[E],(C||Re===G.origType)&&(!g||g.guid===G.guid)&&(!F||F.test(G.namespace))&&(!_||_===G.selector||_==="**"&&G.selector)&&(Y.splice(E,1),G.selector&&Y.delegateCount--,ee.remove&&ee.remove.call(c,G));w&&!Y.length&&((!ee.teardown||ee.teardown.call(c,Se,$e.handle)===!1)&&m.removeEvent(c,re,$e.handle),delete L[re])}m.isEmptyObject(L)&&me.remove(c,"handle events")}},dispatch:function(c){var h,g,_,C,E,w,F=new Array(arguments.length),L=m.event.fix(c),V=(me.get(this,"events")||Object.create(null))[L.type]||[],G=m.event.special[L.type]||{};for(F[0]=L,h=1;h<arguments.length;h++)F[h]=arguments[h];if(L.delegateTarget=this,!(G.preDispatch&&G.preDispatch.call(this,L)===!1)){for(w=m.event.handlers.call(this,L,V),h=0;(C=w[h++])&&!L.isPropagationStopped();)for(L.currentTarget=C.elem,g=0;(E=C.handlers[g++])&&!L.isImmediatePropagationStopped();)(!L.rnamespace||E.namespace===!1||L.rnamespace.test(E.namespace))&&(L.handleObj=E,L.data=E.data,_=((m.event.special[E.origType]||{}).handle||E.handler).apply(C.elem,F),_!==void 0&&(L.result=_)===!1&&(L.preventDefault(),L.stopPropagation()));return G.postDispatch&&G.postDispatch.call(this,L),L.result}},handlers:function(c,h){var g,_,C,E,w,F=[],L=h.delegateCount,V=c.target;if(L&&V.nodeType&&!(c.type==="click"&&c.button>=1)){for(;V!==this;V=V.parentNode||this)if(V.nodeType===1&&!(c.type==="click"&&V.disabled===!0)){for(E=[],w={},g=0;g<L;g++)_=h[g],C=_.selector+" ",w[C]===void 0&&(w[C]=_.needsContext?m(C,this).index(V)>-1:m.find(C,this,null,[V]).length),w[C]&&E.push(_);E.length&&F.push({elem:V,handlers:E})}}return V=this,L<h.length&&F.push({elem:V,handlers:h.slice(L)}),F},addProp:function(c,h){Object.defineProperty(m.Event.prototype,c,{enumerable:!0,configurable:!0,get:S(h)?function(){if(this.originalEvent)return h(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[c]},set:function(g){Object.defineProperty(this,c,{enumerable:!0,configurable:!0,writable:!0,value:g})}})},fix:function(c){return c[m.expando]?c:new m.Event(c)},special:{load:{noBubble:!0},click:{setup:function(c){var h=this||c;return Yt.test(h.type)&&h.click&&ie(h,"input")&&Ce(h,"click",!0),!1},trigger:function(c){var h=this||c;return Yt.test(h.type)&&h.click&&ie(h,"input")&&Ce(h,"click"),!0},_default:function(c){var h=c.target;return Yt.test(h.type)&&h.click&&ie(h,"input")&&me.get(h,"click")||ie(h,"a")}},beforeunload:{postDispatch:function(c){c.result!==void 0&&c.originalEvent&&(c.originalEvent.returnValue=c.result)}}}};function Ce(c,h,g){if(!g){me.get(c,h)===void 0&&m.event.add(c,h,de);return}me.set(c,h,!1),m.event.add(c,h,{namespace:!1,handler:function(_){var C,E=me.get(this,h);if(_.isTrigger&1&&this[h]){if(E)(m.event.special[h]||{}).delegateType&&_.stopPropagation();else if(E=s.call(arguments),me.set(this,h,E),this[h](),C=me.get(this,h),me.set(this,h,!1),E!==C)return _.stopImmediatePropagation(),_.preventDefault(),C}else E&&(me.set(this,h,m.event.trigger(E[0],E.slice(1),this)),_.stopPropagation(),_.isImmediatePropagationStopped=de)}})}m.removeEvent=function(c,h,g){c.removeEventListener&&c.removeEventListener(h,g)},m.Event=function(c,h){if(!(this instanceof m.Event))return new m.Event(c,h);c&&c.type?(this.originalEvent=c,this.type=c.type,this.isDefaultPrevented=c.defaultPrevented||c.defaultPrevented===void 0&&c.returnValue===!1?de:Te,this.target=c.target&&c.target.nodeType===3?c.target.parentNode:c.target,this.currentTarget=c.currentTarget,this.relatedTarget=c.relatedTarget):this.type=c,h&&m.extend(this,h),this.timeStamp=c&&c.timeStamp||Date.now(),this[m.expando]=!0},m.Event.prototype={constructor:m.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var c=this.originalEvent;this.isDefaultPrevented=de,c&&!this.isSimulated&&c.preventDefault()},stopPropagation:function(){var c=this.originalEvent;this.isPropagationStopped=de,c&&!this.isSimulated&&c.stopPropagation()},stopImmediatePropagation:function(){var c=this.originalEvent;this.isImmediatePropagationStopped=de,c&&!this.isSimulated&&c.stopImmediatePropagation(),this.stopPropagation()}},m.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},m.event.addProp),m.each({focus:"focusin",blur:"focusout"},function(c,h){function g(_){if(A.documentMode){var C=me.get(this,"handle"),E=m.event.fix(_);E.type=_.type==="focusin"?"focus":"blur",E.isSimulated=!0,C(_),E.target===E.currentTarget&&C(E)}else m.event.simulate(h,_.target,m.event.fix(_))}m.event.special[c]={setup:function(){var _;if(Ce(this,c,!0),A.documentMode)_=me.get(this,h),_||this.addEventListener(h,g),me.set(this,h,(_||0)+1);else return!1},trigger:function(){return Ce(this,c),!0},teardown:function(){var _;if(A.documentMode)_=me.get(this,h)-1,_?me.set(this,h,_):(this.removeEventListener(h,g),me.remove(this,h));else return!1},_default:function(_){return me.get(_.target,c)},delegateType:h},m.event.special[h]={setup:function(){var _=this.ownerDocument||this.document||this,C=A.documentMode?this:_,E=me.get(C,h);E||(A.documentMode?this.addEventListener(h,g):_.addEventListener(c,g,!0)),me.set(C,h,(E||0)+1)},teardown:function(){var _=this.ownerDocument||this.document||this,C=A.documentMode?this:_,E=me.get(C,h)-1;E?me.set(C,h,E):(A.documentMode?this.removeEventListener(h,g):_.removeEventListener(c,g,!0),me.remove(C,h))}}}),m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(c,h){m.event.special[c]={delegateType:h,bindType:h,handle:function(g){var _,C=this,E=g.relatedTarget,w=g.handleObj;return(!E||E!==C&&!m.contains(C,E))&&(g.type=w.origType,_=w.handler.apply(this,arguments),g.type=h),_}}}),m.fn.extend({on:function(c,h,g,_){return he(this,c,h,g,_)},one:function(c,h,g,_){return he(this,c,h,g,_,1)},off:function(c,h,g){var _,C;if(c&&c.preventDefault&&c.handleObj)return _=c.handleObj,m(c.delegateTarget).off(_.namespace?_.origType+"."+_.namespace:_.origType,_.selector,_.handler),this;if(typeof c=="object"){for(C in c)this.off(C,h,c[C]);return this}return(h===!1||typeof h=="function")&&(g=h,h=void 0),g===!1&&(g=Te),this.each(function(){m.event.remove(this,c,g,h)})}});var Be=/<script|<style|<link/i,mt=/checked\s*(?:[^=]|=\s*.checked.)/i,ft=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Kt(c,h){return ie(c,"table")&&ie(h.nodeType!==11?h:h.firstChild,"tr")&&m(c).children("tbody")[0]||c}function Xt(c){return c.type=(c.getAttribute("type")!==null)+"/"+c.type,c}function oi(c){return(c.type||"").slice(0,5)==="true/"?c.type=c.type.slice(5):c.removeAttribute("type"),c}function xn(c,h){var g,_,C,E,w,F,L;if(h.nodeType===1){if(me.hasData(c)&&(E=me.get(c),L=E.events,L)){me.remove(h,"handle events");for(C in L)for(g=0,_=L[C].length;g<_;g++)m.event.add(h,C,L[C][g])}st.hasData(c)&&(w=st.access(c),F=m.extend({},w),st.set(h,F))}}function Rn(c,h){var g=h.nodeName.toLowerCase();g==="input"&&Yt.test(c.type)?h.checked=c.checked:(g==="input"||g==="textarea")&&(h.defaultValue=c.defaultValue)}function Gt(c,h,g,_){h=o(h);var C,E,w,F,L,V,G=0,ee=c.length,Y=ee-1,re=h[0],Se=S(re);if(Se||ee>1&&typeof re=="string"&&!x.checkClone&&mt.test(re))return c.each(function(Re){var $e=c.eq(Re);Se&&(h[0]=re.call(this,Re,$e.html())),Gt($e,h,g,_)});if(ee&&(C=le(h,c[0].ownerDocument,!1,c,_),E=C.firstChild,C.childNodes.length===1&&(C=E),E||_)){for(w=m.map(B(C,"script"),Xt),F=w.length;G<ee;G++)L=C,G!==Y&&(L=m.clone(L,!0,!0),F&&m.merge(w,B(L,"script"))),g.call(c[G],L,G);if(F)for(V=w[w.length-1].ownerDocument,m.map(w,oi),G=0;G<F;G++)L=w[G],O.test(L.type||"")&&!me.access(L,"globalEval")&&m.contains(V,L)&&(L.src&&(L.type||"").toLowerCase()!=="module"?m._evalUrl&&!L.noModule&&m._evalUrl(L.src,{nonce:L.nonce||L.getAttribute("nonce")},V):W(L.textContent.replace(ft,""),L,V))}return c}function Nn(c,h,g){for(var _,C=h?m.filter(h,c):c,E=0;(_=C[E])!=null;E++)!g&&_.nodeType===1&&m.cleanData(B(_)),_.parentNode&&(g&&We(_)&&Q(B(_,"script")),_.parentNode.removeChild(_));return c}m.extend({htmlPrefilter:function(c){return c},clone:function(c,h,g){var _,C,E,w,F=c.cloneNode(!0),L=We(c);if(!x.noCloneChecked&&(c.nodeType===1||c.nodeType===11)&&!m.isXMLDoc(c))for(w=B(F),E=B(c),_=0,C=E.length;_<C;_++)Rn(E[_],w[_]);if(h)if(g)for(E=E||B(c),w=w||B(F),_=0,C=E.length;_<C;_++)xn(E[_],w[_]);else xn(c,F);return w=B(F,"script"),w.length>0&&Q(w,!L&&B(c,"script")),F},cleanData:function(c){for(var h,g,_,C=m.event.special,E=0;(g=c[E])!==void 0;E++)if(wt(g)){if(h=g[me.expando]){if(h.events)for(_ in h.events)C[_]?m.event.remove(g,_):m.removeEvent(g,_,h.handle);g[me.expando]=void 0}g[st.expando]&&(g[st.expando]=void 0)}}}),m.fn.extend({detach:function(c){return Nn(this,c,!0)},remove:function(c){return Nn(this,c)},text:function(c){return ot(this,function(h){return h===void 0?m.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=h)})},null,c,arguments.length)},append:function(){return Gt(this,arguments,function(c){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=Kt(this,c);h.appendChild(c)}})},prepend:function(){return Gt(this,arguments,function(c){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=Kt(this,c);h.insertBefore(c,h.firstChild)}})},before:function(){return Gt(this,arguments,function(c){this.parentNode&&this.parentNode.insertBefore(c,this)})},after:function(){return Gt(this,arguments,function(c){this.parentNode&&this.parentNode.insertBefore(c,this.nextSibling)})},empty:function(){for(var c,h=0;(c=this[h])!=null;h++)c.nodeType===1&&(m.cleanData(B(c,!1)),c.textContent="");return this},clone:function(c,h){return c=c??!1,h=h??c,this.map(function(){return m.clone(this,c,h)})},html:function(c){return ot(this,function(h){var g=this[0]||{},_=0,C=this.length;if(h===void 0&&g.nodeType===1)return g.innerHTML;if(typeof h=="string"&&!Be.test(h)&&!k[(Xn.exec(h)||["",""])[1].toLowerCase()]){h=m.htmlPrefilter(h);try{for(;_<C;_++)g=this[_]||{},g.nodeType===1&&(m.cleanData(B(g,!1)),g.innerHTML=h);g=0}catch{}}g&&this.empty().append(h)},null,c,arguments.length)},replaceWith:function(){var c=[];return Gt(this,arguments,function(h){var g=this.parentNode;m.inArray(this,c)<0&&(m.cleanData(B(this)),g&&g.replaceChild(h,this))},c)}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(c,h){m.fn[c]=function(g){for(var _,C=[],E=m(g),w=E.length-1,F=0;F<=w;F++)_=F===w?this:this.clone(!0),m(E[F])[h](_),l.apply(C,_.get());return this.pushStack(C)}});var At=new RegExp("^("+Kn+")(?!px)[a-z%]+$","i"),Ot=/^--/,Cn=function(c){var h=c.ownerDocument.defaultView;return(!h||!h.opener)&&(h=n),h.getComputedStyle(c)},kt=function(c,h,g){var _,C,E={};for(C in h)E[C]=c.style[C],c.style[C]=h[C];_=g.call(c);for(C in h)c.style[C]=E[C];return _},fn=new RegExp(Ct.join("|"),"i");(function(){function c(){if(V){L.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",V.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ht.appendChild(L).appendChild(V);var G=n.getComputedStyle(V);g=G.top!=="1%",F=h(G.marginLeft)===12,V.style.right="60%",E=h(G.right)===36,_=h(G.width)===36,V.style.position="absolute",C=h(V.offsetWidth/3)===12,Ht.removeChild(L),V=null}}function h(G){return Math.round(parseFloat(G))}var g,_,C,E,w,F,L=A.createElement("div"),V=A.createElement("div");V.style&&(V.style.backgroundClip="content-box",V.cloneNode(!0).style.backgroundClip="",x.clearCloneStyle=V.style.backgroundClip==="content-box",m.extend(x,{boxSizingReliable:function(){return c(),_},pixelBoxStyles:function(){return c(),E},pixelPosition:function(){return c(),g},reliableMarginLeft:function(){return c(),F},scrollboxSize:function(){return c(),C},reliableTrDimensions:function(){var G,ee,Y,re;return w==null&&(G=A.createElement("table"),ee=A.createElement("tr"),Y=A.createElement("div"),G.style.cssText="position:absolute;left:-11111px;border-collapse:separate",ee.style.cssText="box-sizing:content-box;border:1px solid",ee.style.height="1px",Y.style.height="9px",Y.style.display="block",Ht.appendChild(G).appendChild(ee).appendChild(Y),re=n.getComputedStyle(ee),w=parseInt(re.height,10)+parseInt(re.borderTopWidth,10)+parseInt(re.borderBottomWidth,10)===ee.offsetHeight,Ht.removeChild(G)),w}}))})();function Fn(c,h,g){var _,C,E,w,F=Ot.test(h),L=c.style;return g=g||Cn(c),g&&(w=g.getPropertyValue(h)||g[h],F&&w&&(w=w.replace(He,"$1")||void 0),w===""&&!We(c)&&(w=m.style(c,h)),!x.pixelBoxStyles()&&At.test(w)&&fn.test(h)&&(_=L.width,C=L.minWidth,E=L.maxWidth,L.minWidth=L.maxWidth=L.width=w,w=g.width,L.width=_,L.minWidth=C,L.maxWidth=E)),w!==void 0?w+"":w}function Mi(c,h){return{get:function(){if(c()){delete this.get;return}return(this.get=h).apply(this,arguments)}}}var Qt=["Webkit","Moz","ms"],En=A.createElement("div").style,Hn={};function si(c){for(var h=c[0].toUpperCase()+c.slice(1),g=Qt.length;g--;)if(c=Qt[g]+h,c in En)return c}function Gn(c){var h=m.cssProps[c]||Hn[c];return h||(c in En?c:Hn[c]=si(c)||c)}var Ji=/^(none|table(?!-c[ea]).+)/,Zi={position:"absolute",visibility:"hidden",display:"block"},Ii={letterSpacing:"0",fontWeight:"400"};function Li(c,h,g){var _=zt.exec(h);return _?Math.max(0,_[2]-(g||0))+(_[3]||"px"):h}function li(c,h,g,_,C,E){var w=h==="width"?1:0,F=0,L=0,V=0;if(g===(_?"border":"content"))return 0;for(;w<4;w+=2)g==="margin"&&(V+=m.css(c,g+Ct[w],!0,C)),_?(g==="content"&&(L-=m.css(c,"padding"+Ct[w],!0,C)),g!=="margin"&&(L-=m.css(c,"border"+Ct[w]+"Width",!0,C))):(L+=m.css(c,"padding"+Ct[w],!0,C),g!=="padding"?L+=m.css(c,"border"+Ct[w]+"Width",!0,C):F+=m.css(c,"border"+Ct[w]+"Width",!0,C));return!_&&E>=0&&(L+=Math.max(0,Math.ceil(c["offset"+h[0].toUpperCase()+h.slice(1)]-E-L-F-.5))||0),L+V}function Ri(c,h,g){var _=Cn(c),C=!x.boxSizingReliable()||g,E=C&&m.css(c,"boxSizing",!1,_)==="border-box",w=E,F=Fn(c,h,_),L="offset"+h[0].toUpperCase()+h.slice(1);if(At.test(F)){if(!g)return F;F="auto"}return(!x.boxSizingReliable()&&E||!x.reliableTrDimensions()&&ie(c,"tr")||F==="auto"||!parseFloat(F)&&m.css(c,"display",!1,_)==="inline")&&c.getClientRects().length&&(E=m.css(c,"boxSizing",!1,_)==="border-box",w=L in c,w&&(F=c[L])),F=parseFloat(F)||0,F+li(c,h,g||(E?"border":"content"),w,_,F)+"px"}m.extend({cssHooks:{opacity:{get:function(c,h){if(h){var g=Fn(c,"opacity");return g===""?"1":g}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(c,h,g,_){if(!(!c||c.nodeType===3||c.nodeType===8||!c.style)){var C,E,w,F=Ye(h),L=Ot.test(h),V=c.style;if(L||(h=Gn(F)),w=m.cssHooks[h]||m.cssHooks[F],g!==void 0){if(E=typeof g,E==="string"&&(C=zt.exec(g))&&C[1]&&(g=un(c,h,C),E="number"),g==null||g!==g)return;E==="number"&&!L&&(g+=C&&C[3]||(m.cssNumber[F]?"":"px")),!x.clearCloneStyle&&g===""&&h.indexOf("background")===0&&(V[h]="inherit"),(!w||!("set"in w)||(g=w.set(c,g,_))!==void 0)&&(L?V.setProperty(h,g):V[h]=g)}else return w&&"get"in w&&(C=w.get(c,!1,_))!==void 0?C:V[h]}},css:function(c,h,g,_){var C,E,w,F=Ye(h),L=Ot.test(h);return L||(h=Gn(F)),w=m.cssHooks[h]||m.cssHooks[F],w&&"get"in w&&(C=w.get(c,!0,g)),C===void 0&&(C=Fn(c,h,_)),C==="normal"&&h in Ii&&(C=Ii[h]),g===""||g?(E=parseFloat(C),g===!0||isFinite(E)?E||0:C):C}}),m.each(["height","width"],function(c,h){m.cssHooks[h]={get:function(g,_,C){if(_)return Ji.test(m.css(g,"display"))&&(!g.getClientRects().length||!g.getBoundingClientRect().width)?kt(g,Zi,function(){return Ri(g,h,C)}):Ri(g,h,C)},set:function(g,_,C){var E,w=Cn(g),F=!x.scrollboxSize()&&w.position==="absolute",L=F||C,V=L&&m.css(g,"boxSizing",!1,w)==="border-box",G=C?li(g,h,C,V,w):0;return V&&F&&(G-=Math.ceil(g["offset"+h[0].toUpperCase()+h.slice(1)]-parseFloat(w[h])-li(g,h,"border",!1,w)-.5)),G&&(E=zt.exec(_))&&(E[3]||"px")!=="px"&&(g.style[h]=_,_=m.css(g,h)),Li(g,_,G)}}}),m.cssHooks.marginLeft=Mi(x.reliableMarginLeft,function(c,h){if(h)return(parseFloat(Fn(c,"marginLeft"))||c.getBoundingClientRect().left-kt(c,{marginLeft:0},function(){return c.getBoundingClientRect().left}))+"px"}),m.each({margin:"",padding:"",border:"Width"},function(c,h){m.cssHooks[c+h]={expand:function(g){for(var _=0,C={},E=typeof g=="string"?g.split(" "):[g];_<4;_++)C[c+Ct[_]+h]=E[_]||E[_-2]||E[0];return C}},c!=="margin"&&(m.cssHooks[c+h].set=Li)}),m.fn.extend({css:function(c,h){return ot(this,function(g,_,C){var E,w,F={},L=0;if(Array.isArray(_)){for(E=Cn(g),w=_.length;L<w;L++)F[_[L]]=m.css(g,_[L],!1,E);return F}return C!==void 0?m.style(g,_,C):m.css(g,_)},c,h,arguments.length>1)}});function ht(c,h,g,_,C){return new ht.prototype.init(c,h,g,_,C)}m.Tween=ht,ht.prototype={constructor:ht,init:function(c,h,g,_,C,E){this.elem=c,this.prop=g,this.easing=C||m.easing._default,this.options=h,this.start=this.now=this.cur(),this.end=_,this.unit=E||(m.cssNumber[g]?"":"px")},cur:function(){var c=ht.propHooks[this.prop];return c&&c.get?c.get(this):ht.propHooks._default.get(this)},run:function(c){var h,g=ht.propHooks[this.prop];return this.options.duration?this.pos=h=m.easing[this.easing](c,this.options.duration*c,0,1,this.options.duration):this.pos=h=c,this.now=(this.end-this.start)*h+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),g&&g.set?g.set(this):ht.propHooks._default.set(this),this}},ht.prototype.init.prototype=ht.prototype,ht.propHooks={_default:{get:function(c){var h;return c.elem.nodeType!==1||c.elem[c.prop]!=null&&c.elem.style[c.prop]==null?c.elem[c.prop]:(h=m.css(c.elem,c.prop,""),!h||h==="auto"?0:h)},set:function(c){m.fx.step[c.prop]?m.fx.step[c.prop](c):c.elem.nodeType===1&&(m.cssHooks[c.prop]||c.elem.style[Gn(c.prop)]!=null)?m.style(c.elem,c.prop,c.now+c.unit):c.elem[c.prop]=c.now}}},ht.propHooks.scrollTop=ht.propHooks.scrollLeft={set:function(c){c.elem.nodeType&&c.elem.parentNode&&(c.elem[c.prop]=c.now)}},m.easing={linear:function(c){return c},swing:function(c){return .5-Math.cos(c*Math.PI)/2},_default:"swing"},m.fx=ht.prototype.init,m.fx.step={};var dn,Sn,er=/^(?:toggle|show|hide)$/,jn=/queueHooks$/;function Jt(){Sn&&(A.hidden===!1&&n.requestAnimationFrame?n.requestAnimationFrame(Jt):n.setTimeout(Jt,m.fx.interval),m.fx.tick())}function Ni(){return n.setTimeout(function(){dn=void 0}),dn=Date.now()}function Zt(c,h){var g,_=0,C={height:c};for(h=h?1:0;_<4;_+=2-h)g=Ct[_],C["margin"+g]=C["padding"+g]=c;return h&&(C.opacity=C.width=c),C}function $t(c,h,g){for(var _,C=(dt.tweeners[h]||[]).concat(dt.tweeners["*"]),E=0,w=C.length;E<w;E++)if(_=C[E].call(g,h,c))return _}function ui(c,h,g){var _,C,E,w,F,L,V,G,ee="width"in h||"height"in h,Y=this,re={},Se=c.style,Re=c.nodeType&&Et(c),$e=me.get(c,"fxshow");g.queue||(w=m._queueHooks(c,"fx"),w.unqueued==null&&(w.unqueued=0,F=w.empty.fire,w.empty.fire=function(){w.unqueued||F()}),w.unqueued++,Y.always(function(){Y.always(function(){w.unqueued--,m.queue(c,"fx").length||w.empty.fire()})}));for(_ in h)if(C=h[_],er.test(C)){if(delete h[_],E=E||C==="toggle",C===(Re?"hide":"show"))if(C==="show"&&$e&&$e[_]!==void 0)Re=!0;else continue;re[_]=$e&&$e[_]||m.style(c,_)}if(L=!m.isEmptyObject(h),!(!L&&m.isEmptyObject(re))){ee&&c.nodeType===1&&(g.overflow=[Se.overflow,Se.overflowX,Se.overflowY],V=$e&&$e.display,V==null&&(V=me.get(c,"display")),G=m.css(c,"display"),G==="none"&&(V?G=V:(lt([c],!0),V=c.style.display||V,G=m.css(c,"display"),lt([c]))),(G==="inline"||G==="inline-block"&&V!=null)&&m.css(c,"float")==="none"&&(L||(Y.done(function(){Se.display=V}),V==null&&(G=Se.display,V=G==="none"?"":G)),Se.display="inline-block")),g.overflow&&(Se.overflow="hidden",Y.always(function(){Se.overflow=g.overflow[0],Se.overflowX=g.overflow[1],Se.overflowY=g.overflow[2]})),L=!1;for(_ in re)L||($e?"hidden"in $e&&(Re=$e.hidden):$e=me.access(c,"fxshow",{display:V}),E&&($e.hidden=!Re),Re&&lt([c],!0),Y.done(function(){Re||lt([c]),me.remove(c,"fxshow");for(_ in re)m.style(c,_,re[_])})),L=$t(Re?$e[_]:0,_,Y),_ in $e||($e[_]=L.start,Re&&(L.end=L.start,L.start=0))}}function tr(c,h){var g,_,C,E,w;for(g in c)if(_=Ye(g),C=h[_],E=c[g],Array.isArray(E)&&(C=E[1],E=c[g]=E[0]),g!==_&&(c[_]=E,delete c[g]),w=m.cssHooks[_],w&&"expand"in w){E=w.expand(E),delete c[_];for(g in E)g in c||(c[g]=E[g],h[g]=C)}else h[_]=C}function dt(c,h,g){var _,C,E=0,w=dt.prefilters.length,F=m.Deferred().always(function(){delete L.elem}),L=function(){if(C)return!1;for(var ee=dn||Ni(),Y=Math.max(0,V.startTime+V.duration-ee),re=Y/V.duration||0,Se=1-re,Re=0,$e=V.tweens.length;Re<$e;Re++)V.tweens[Re].run(Se);return F.notifyWith(c,[V,Se,Y]),Se<1&&$e?Y:($e||F.notifyWith(c,[V,1,0]),F.resolveWith(c,[V]),!1)},V=F.promise({elem:c,props:m.extend({},h),opts:m.extend(!0,{specialEasing:{},easing:m.easing._default},g),originalProperties:h,originalOptions:g,startTime:dn||Ni(),duration:g.duration,tweens:[],createTween:function(ee,Y){var re=m.Tween(c,V.opts,ee,Y,V.opts.specialEasing[ee]||V.opts.easing);return V.tweens.push(re),re},stop:function(ee){var Y=0,re=ee?V.tweens.length:0;if(C)return this;for(C=!0;Y<re;Y++)V.tweens[Y].run(1);return ee?(F.notifyWith(c,[V,1,0]),F.resolveWith(c,[V,ee])):F.rejectWith(c,[V,ee]),this}}),G=V.props;for(tr(G,V.opts.specialEasing);E<w;E++)if(_=dt.prefilters[E].call(V,c,G,V.opts),_)return S(_.stop)&&(m._queueHooks(V.elem,V.opts.queue).stop=_.stop.bind(_)),_;return m.map(G,$t,V),S(V.opts.start)&&V.opts.start.call(c,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),m.fx.timer(m.extend(L,{elem:c,anim:V,queue:V.opts.queue})),V}m.Animation=m.extend(dt,{tweeners:{"*":[function(c,h){var g=this.createTween(c,h);return un(g.elem,c,zt.exec(h),g),g}]},tweener:function(c,h){S(c)?(h=c,c=["*"]):c=c.match(gt);for(var g,_=0,C=c.length;_<C;_++)g=c[_],dt.tweeners[g]=dt.tweeners[g]||[],dt.tweeners[g].unshift(h)},prefilters:[ui],prefilter:function(c,h){h?dt.prefilters.unshift(c):dt.prefilters.push(c)}}),m.speed=function(c,h,g){var _=c&&typeof c=="object"?m.extend({},c):{complete:g||!g&&h||S(c)&&c,duration:c,easing:g&&h||h&&!S(h)&&h};return m.fx.off?_.duration=0:typeof _.duration!="number"&&(_.duration in m.fx.speeds?_.duration=m.fx.speeds[_.duration]:_.duration=m.fx.speeds._default),(_.queue==null||_.queue===!0)&&(_.queue="fx"),_.old=_.complete,_.complete=function(){S(_.old)&&_.old.call(this),_.queue&&m.dequeue(this,_.queue)},_},m.fn.extend({fadeTo:function(c,h,g,_){return this.filter(Et).css("opacity",0).show().end().animate({opacity:h},c,g,_)},animate:function(c,h,g,_){var C=m.isEmptyObject(c),E=m.speed(h,g,_),w=function(){var F=dt(this,m.extend({},c),E);(C||me.get(this,"finish"))&&F.stop(!0)};return w.finish=w,C||E.queue===!1?this.each(w):this.queue(E.queue,w)},stop:function(c,h,g){var _=function(C){var E=C.stop;delete C.stop,E(g)};return typeof c!="string"&&(g=h,h=c,c=void 0),h&&this.queue(c||"fx",[]),this.each(function(){var C=!0,E=c!=null&&c+"queueHooks",w=m.timers,F=me.get(this);if(E)F[E]&&F[E].stop&&_(F[E]);else for(E in F)F[E]&&F[E].stop&&jn.test(E)&&_(F[E]);for(E=w.length;E--;)w[E].elem===this&&(c==null||w[E].queue===c)&&(w[E].anim.stop(g),C=!1,w.splice(E,1));(C||!g)&&m.dequeue(this,c)})},finish:function(c){return c!==!1&&(c=c||"fx"),this.each(function(){var h,g=me.get(this),_=g[c+"queue"],C=g[c+"queueHooks"],E=m.timers,w=_?_.length:0;for(g.finish=!0,m.queue(this,c,[]),C&&C.stop&&C.stop.call(this,!0),h=E.length;h--;)E[h].elem===this&&E[h].queue===c&&(E[h].anim.stop(!0),E.splice(h,1));for(h=0;h<w;h++)_[h]&&_[h].finish&&_[h].finish.call(this);delete g.finish})}}),m.each(["toggle","show","hide"],function(c,h){var g=m.fn[h];m.fn[h]=function(_,C,E){return _==null||typeof _=="boolean"?g.apply(this,arguments):this.animate(Zt(h,!0),_,C,E)}}),m.each({slideDown:Zt("show"),slideUp:Zt("hide"),slideToggle:Zt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(c,h){m.fn[c]=function(g,_,C){return this.animate(h,g,_,C)}}),m.timers=[],m.fx.tick=function(){var c,h=0,g=m.timers;for(dn=Date.now();h<g.length;h++)c=g[h],!c()&&g[h]===c&&g.splice(h--,1);g.length||m.fx.stop(),dn=void 0},m.fx.timer=function(c){m.timers.push(c),m.fx.start()},m.fx.interval=13,m.fx.start=function(){Sn||(Sn=!0,Jt())},m.fx.stop=function(){Sn=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(c,h){return c=m.fx&&m.fx.speeds[c]||c,h=h||"fx",this.queue(h,function(g,_){var C=n.setTimeout(g,c);_.stop=function(){n.clearTimeout(C)}})},(function(){var c=A.createElement("input"),h=A.createElement("select"),g=h.appendChild(A.createElement("option"));c.type="checkbox",x.checkOn=c.value!=="",x.optSelected=g.selected,c=A.createElement("input"),c.value="t",c.type="radio",x.radioValue=c.value==="t"})();var ci,Dn=m.expr.attrHandle;m.fn.extend({attr:function(c,h){return ot(this,m.attr,c,h,arguments.length>1)},removeAttr:function(c){return this.each(function(){m.removeAttr(this,c)})}}),m.extend({attr:function(c,h,g){var _,C,E=c.nodeType;if(!(E===3||E===8||E===2)){if(typeof c.getAttribute>"u")return m.prop(c,h,g);if((E!==1||!m.isXMLDoc(c))&&(C=m.attrHooks[h.toLowerCase()]||(m.expr.match.bool.test(h)?ci:void 0)),g!==void 0){if(g===null){m.removeAttr(c,h);return}return C&&"set"in C&&(_=C.set(c,g,h))!==void 0?_:(c.setAttribute(h,g+""),g)}return C&&"get"in C&&(_=C.get(c,h))!==null?_:(_=m.find.attr(c,h),_??void 0)}},attrHooks:{type:{set:function(c,h){if(!x.radioValue&&h==="radio"&&ie(c,"input")){var g=c.value;return c.setAttribute("type",h),g&&(c.value=g),h}}}},removeAttr:function(c,h){var g,_=0,C=h&&h.match(gt);if(C&&c.nodeType===1)for(;g=C[_++];)c.removeAttribute(g)}}),ci={set:function(c,h,g){return h===!1?m.removeAttr(c,g):c.setAttribute(g,g),g}},m.each(m.expr.match.bool.source.match(/\w+/g),function(c,h){var g=Dn[h]||m.find.attr;Dn[h]=function(_,C,E){var w,F,L=C.toLowerCase();return E||(F=Dn[L],Dn[L]=w,w=g(_,C,E)!=null?L:null,Dn[L]=F),w}});var fi=/^(?:input|select|textarea|button)$/i,di=/^(?:a|area)$/i;m.fn.extend({prop:function(c,h){return ot(this,m.prop,c,h,arguments.length>1)},removeProp:function(c){return this.each(function(){delete this[m.propFix[c]||c]})}}),m.extend({prop:function(c,h,g){var _,C,E=c.nodeType;if(!(E===3||E===8||E===2))return(E!==1||!m.isXMLDoc(c))&&(h=m.propFix[h]||h,C=m.propHooks[h]),g!==void 0?C&&"set"in C&&(_=C.set(c,g,h))!==void 0?_:c[h]=g:C&&"get"in C&&(_=C.get(c,h))!==null?_:c[h]},propHooks:{tabIndex:{get:function(c){var h=m.find.attr(c,"tabindex");return h?parseInt(h,10):fi.test(c.nodeName)||di.test(c.nodeName)&&c.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),x.optSelected||(m.propHooks.selected={get:function(c){var h=c.parentNode;return h&&h.parentNode&&h.parentNode.selectedIndex,null},set:function(c){var h=c.parentNode;h&&(h.selectedIndex,h.parentNode&&h.parentNode.selectedIndex)}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this});function hn(c){var h=c.match(gt)||[];return h.join(" ")}function pn(c){return c.getAttribute&&c.getAttribute("class")||""}function wn(c){return Array.isArray(c)?c:typeof c=="string"?c.match(gt)||[]:[]}m.fn.extend({addClass:function(c){var h,g,_,C,E,w;return S(c)?this.each(function(F){m(this).addClass(c.call(this,F,pn(this)))}):(h=wn(c),h.length?this.each(function(){if(_=pn(this),g=this.nodeType===1&&" "+hn(_)+" ",g){for(E=0;E<h.length;E++)C=h[E],g.indexOf(" "+C+" ")<0&&(g+=C+" ");w=hn(g),_!==w&&this.setAttribute("class",w)}}):this)},removeClass:function(c){var h,g,_,C,E,w;return S(c)?this.each(function(F){m(this).removeClass(c.call(this,F,pn(this)))}):arguments.length?(h=wn(c),h.length?this.each(function(){if(_=pn(this),g=this.nodeType===1&&" "+hn(_)+" ",g){for(E=0;E<h.length;E++)for(C=h[E];g.indexOf(" "+C+" ")>-1;)g=g.replace(" "+C+" "," ");w=hn(g),_!==w&&this.setAttribute("class",w)}}):this):this.attr("class","")},toggleClass:function(c,h){var g,_,C,E,w=typeof c,F=w==="string"||Array.isArray(c);return S(c)?this.each(function(L){m(this).toggleClass(c.call(this,L,pn(this),h),h)}):typeof h=="boolean"&&F?h?this.addClass(c):this.removeClass(c):(g=wn(c),this.each(function(){if(F)for(E=m(this),C=0;C<g.length;C++)_=g[C],E.hasClass(_)?E.removeClass(_):E.addClass(_);else(c===void 0||w==="boolean")&&(_=pn(this),_&&me.set(this,"__className__",_),this.setAttribute&&this.setAttribute("class",_||c===!1?"":me.get(this,"__className__")||""))}))},hasClass:function(c){var h,g,_=0;for(h=" "+c+" ";g=this[_++];)if(g.nodeType===1&&(" "+hn(pn(g))+" ").indexOf(h)>-1)return!0;return!1}});var St=/\r/g;m.fn.extend({val:function(c){var h,g,_,C=this[0];return arguments.length?(_=S(c),this.each(function(E){var w;this.nodeType===1&&(_?w=c.call(this,E,m(this).val()):w=c,w==null?w="":typeof w=="number"?w+="":Array.isArray(w)&&(w=m.map(w,function(F){return F==null?"":F+""})),h=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],(!h||!("set"in h)||h.set(this,w,"value")===void 0)&&(this.value=w))})):C?(h=m.valHooks[C.type]||m.valHooks[C.nodeName.toLowerCase()],h&&"get"in h&&(g=h.get(C,"value"))!==void 0?g:(g=C.value,typeof g=="string"?g.replace(St,""):g??"")):void 0}}),m.extend({valHooks:{option:{get:function(c){var h=m.find.attr(c,"value");return h??hn(m.text(c))}},select:{get:function(c){var h,g,_,C=c.options,E=c.selectedIndex,w=c.type==="select-one",F=w?null:[],L=w?E+1:C.length;for(E<0?_=L:_=w?E:0;_<L;_++)if(g=C[_],(g.selected||_===E)&&!g.disabled&&(!g.parentNode.disabled||!ie(g.parentNode,"optgroup"))){if(h=m(g).val(),w)return h;F.push(h)}return F},set:function(c,h){for(var g,_,C=c.options,E=m.makeArray(h),w=C.length;w--;)_=C[w],(_.selected=m.inArray(m.valHooks.option.get(_),E)>-1)&&(g=!0);return g||(c.selectedIndex=-1),E}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(c,h){if(Array.isArray(h))return c.checked=m.inArray(m(c).val(),h)>-1}},x.checkOn||(m.valHooks[this].get=function(c){return c.getAttribute("value")===null?"on":c.value})});var Bn=n.location,Fi={guid:Date.now()},hi=/\?/;m.parseXML=function(c){var h,g;if(!c||typeof c!="string")return null;try{h=new n.DOMParser().parseFromString(c,"text/xml")}catch{}return g=h&&h.getElementsByTagName("parsererror")[0],(!h||g)&&m.error("Invalid XML: "+(g?m.map(g.childNodes,function(_){return _.textContent}).join(`
`):c)),h};var pi=/^(?:focusinfocus|focusoutblur)$/,Hi=function(c){c.stopPropagation()};m.extend(m.event,{trigger:function(c,h,g,_){var C,E,w,F,L,V,G,ee,Y=[g||A],re=p.call(c,"type")?c.type:c,Se=p.call(c,"namespace")?c.namespace.split("."):[];if(E=ee=w=g=g||A,!(g.nodeType===3||g.nodeType===8)&&!pi.test(re+m.event.triggered)&&(re.indexOf(".")>-1&&(Se=re.split("."),re=Se.shift(),Se.sort()),L=re.indexOf(":")<0&&"on"+re,c=c[m.expando]?c:new m.Event(re,typeof c=="object"&&c),c.isTrigger=_?2:3,c.namespace=Se.join("."),c.rnamespace=c.namespace?new RegExp("(^|\\.)"+Se.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,c.result=void 0,c.target||(c.target=g),h=h==null?[c]:m.makeArray(h,[c]),G=m.event.special[re]||{},!(!_&&G.trigger&&G.trigger.apply(g,h)===!1))){if(!_&&!G.noBubble&&!D(g)){for(F=G.delegateType||re,pi.test(F+re)||(E=E.parentNode);E;E=E.parentNode)Y.push(E),w=E;w===(g.ownerDocument||A)&&Y.push(w.defaultView||w.parentWindow||n)}for(C=0;(E=Y[C++])&&!c.isPropagationStopped();)ee=E,c.type=C>1?F:G.bindType||re,V=(me.get(E,"events")||Object.create(null))[c.type]&&me.get(E,"handle"),V&&V.apply(E,h),V=L&&E[L],V&&V.apply&&wt(E)&&(c.result=V.apply(E,h),c.result===!1&&c.preventDefault());return c.type=re,!_&&!c.isDefaultPrevented()&&(!G._default||G._default.apply(Y.pop(),h)===!1)&&wt(g)&&L&&S(g[re])&&!D(g)&&(w=g[L],w&&(g[L]=null),m.event.triggered=re,c.isPropagationStopped()&&ee.addEventListener(re,Hi),g[re](),c.isPropagationStopped()&&ee.removeEventListener(re,Hi),m.event.triggered=void 0,w&&(g[L]=w)),c.result}},simulate:function(c,h,g){var _=m.extend(new m.Event,g,{type:c,isSimulated:!0});m.event.trigger(_,null,h)}}),m.fn.extend({trigger:function(c,h){return this.each(function(){m.event.trigger(c,h,this)})},triggerHandler:function(c,h){var g=this[0];if(g)return m.event.trigger(c,h,g,!0)}});var ji=/\[\]$/,gi=/\r?\n/g,nr=/^(?:submit|button|image|reset|file)$/i,ir=/^(?:input|select|textarea|keygen)/i;function mi(c,h,g,_){var C;if(Array.isArray(h))m.each(h,function(E,w){g||ji.test(c)?_(c,w):mi(c+"["+(typeof w=="object"&&w!=null?E:"")+"]",w,g,_)});else if(!g&&N(h)==="object")for(C in h)mi(c+"["+C+"]",h[C],g,_);else _(c,h)}m.param=function(c,h){var g,_=[],C=function(E,w){var F=S(w)?w():w;_[_.length]=encodeURIComponent(E)+"="+encodeURIComponent(F??"")};if(c==null)return"";if(Array.isArray(c)||c.jquery&&!m.isPlainObject(c))m.each(c,function(){C(this.name,this.value)});else for(g in c)mi(g,c[g],h,C);return _.join("&")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var c=m.prop(this,"elements");return c?m.makeArray(c):this}).filter(function(){var c=this.type;return this.name&&!m(this).is(":disabled")&&ir.test(this.nodeName)&&!nr.test(c)&&(this.checked||!Yt.test(c))}).map(function(c,h){var g=m(this).val();return g==null?null:Array.isArray(g)?m.map(g,function(_){return{name:h.name,value:_.replace(gi,`\r
`)}}):{name:h.name,value:g.replace(gi,`\r
`)}}).get()}});var vi=/%20/g,Bi=/#.*$/,rr=/([?&])_=[^&]*/,Qn=/^(.*?):[ \t]*([^\r\n]*)$/mg,ar=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,_i=/^(?:GET|HEAD)$/,or=/^\/\//,Vi={},bi={},Wi="*/".concat("*"),yi=A.createElement("a");yi.href=Bn.href;function Ui(c){return function(h,g){typeof h!="string"&&(g=h,h="*");var _,C=0,E=h.toLowerCase().match(gt)||[];if(S(g))for(;_=E[C++];)_[0]==="+"?(_=_.slice(1)||"*",(c[_]=c[_]||[]).unshift(g)):(c[_]=c[_]||[]).push(g)}}function qi(c,h,g,_){var C={},E=c===bi;function w(F){var L;return C[F]=!0,m.each(c[F]||[],function(V,G){var ee=G(h,g,_);if(typeof ee=="string"&&!E&&!C[ee])return h.dataTypes.unshift(ee),w(ee),!1;if(E)return!(L=ee)}),L}return w(h.dataTypes[0])||!C["*"]&&w("*")}function xi(c,h){var g,_,C=m.ajaxSettings.flatOptions||{};for(g in h)h[g]!==void 0&&((C[g]?c:_||(_={}))[g]=h[g]);return _&&m.extend(!0,c,_),c}function sr(c,h,g){for(var _,C,E,w,F=c.contents,L=c.dataTypes;L[0]==="*";)L.shift(),_===void 0&&(_=c.mimeType||h.getResponseHeader("Content-Type"));if(_){for(C in F)if(F[C]&&F[C].test(_)){L.unshift(C);break}}if(L[0]in g)E=L[0];else{for(C in g){if(!L[0]||c.converters[C+" "+L[0]]){E=C;break}w||(w=C)}E=E||w}if(E)return E!==L[0]&&L.unshift(E),g[E]}function lr(c,h,g,_){var C,E,w,F,L,V={},G=c.dataTypes.slice();if(G[1])for(w in c.converters)V[w.toLowerCase()]=c.converters[w];for(E=G.shift();E;)if(c.responseFields[E]&&(g[c.responseFields[E]]=h),!L&&_&&c.dataFilter&&(h=c.dataFilter(h,c.dataType)),L=E,E=G.shift(),E){if(E==="*")E=L;else if(L!=="*"&&L!==E){if(w=V[L+" "+E]||V["* "+E],!w){for(C in V)if(F=C.split(" "),F[1]===E&&(w=V[L+" "+F[0]]||V["* "+F[0]],w)){w===!0?w=V[C]:V[C]!==!0&&(E=F[0],G.unshift(F[1]));break}}if(w!==!0)if(w&&c.throws)h=w(h);else try{h=w(h)}catch(ee){return{state:"parsererror",error:w?ee:"No conversion from "+L+" to "+E}}}}return{state:"success",data:h}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Bn.href,type:"GET",isLocal:ar.test(Bn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(c,h){return h?xi(xi(c,m.ajaxSettings),h):xi(m.ajaxSettings,c)},ajaxPrefilter:Ui(Vi),ajaxTransport:Ui(bi),ajax:function(c,h){typeof c=="object"&&(h=c,c=void 0),h=h||{};var g,_,C,E,w,F,L,V,G,ee,Y=m.ajaxSetup({},h),re=Y.context||Y,Se=Y.context&&(re.nodeType||re.jquery)?m(re):m.event,Re=m.Deferred(),$e=m.Callbacks("once memory"),rt=Y.statusCode||{},Ze={},Mt={},It="canceled",Ne={readyState:0,getResponseHeader:function(Fe){var Qe;if(L){if(!E)for(E={};Qe=Qn.exec(C);)E[Qe[1].toLowerCase()+" "]=(E[Qe[1].toLowerCase()+" "]||[]).concat(Qe[2]);Qe=E[Fe.toLowerCase()+" "]}return Qe==null?null:Qe.join(", ")},getAllResponseHeaders:function(){return L?C:null},setRequestHeader:function(Fe,Qe){return L==null&&(Fe=Mt[Fe.toLowerCase()]=Mt[Fe.toLowerCase()]||Fe,Ze[Fe]=Qe),this},overrideMimeType:function(Fe){return L==null&&(Y.mimeType=Fe),this},statusCode:function(Fe){var Qe;if(Fe)if(L)Ne.always(Fe[Ne.status]);else for(Qe in Fe)rt[Qe]=[rt[Qe],Fe[Qe]];return this},abort:function(Fe){var Qe=Fe||It;return g&&g.abort(Qe),mn(0,Qe),this}};if(Re.promise(Ne),Y.url=((c||Y.url||Bn.href)+"").replace(or,Bn.protocol+"//"),Y.type=h.method||h.type||Y.method||Y.type,Y.dataTypes=(Y.dataType||"*").toLowerCase().match(gt)||[""],Y.crossDomain==null){F=A.createElement("a");try{F.href=Y.url,F.href=F.href,Y.crossDomain=yi.protocol+"//"+yi.host!=F.protocol+"//"+F.host}catch{Y.crossDomain=!0}}if(Y.data&&Y.processData&&typeof Y.data!="string"&&(Y.data=m.param(Y.data,Y.traditional)),qi(Vi,Y,h,Ne),L)return Ne;V=m.event&&Y.global,V&&m.active++===0&&m.event.trigger("ajaxStart"),Y.type=Y.type.toUpperCase(),Y.hasContent=!_i.test(Y.type),_=Y.url.replace(Bi,""),Y.hasContent?Y.data&&Y.processData&&(Y.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(Y.data=Y.data.replace(vi,"+")):(ee=Y.url.slice(_.length),Y.data&&(Y.processData||typeof Y.data=="string")&&(_+=(hi.test(_)?"&":"?")+Y.data,delete Y.data),Y.cache===!1&&(_=_.replace(rr,"$1"),ee=(hi.test(_)?"&":"?")+"_="+Fi.guid+++ee),Y.url=_+ee),Y.ifModified&&(m.lastModified[_]&&Ne.setRequestHeader("If-Modified-Since",m.lastModified[_]),m.etag[_]&&Ne.setRequestHeader("If-None-Match",m.etag[_])),(Y.data&&Y.hasContent&&Y.contentType!==!1||h.contentType)&&Ne.setRequestHeader("Content-Type",Y.contentType),Ne.setRequestHeader("Accept",Y.dataTypes[0]&&Y.accepts[Y.dataTypes[0]]?Y.accepts[Y.dataTypes[0]]+(Y.dataTypes[0]!=="*"?", "+Wi+"; q=0.01":""):Y.accepts["*"]);for(G in Y.headers)Ne.setRequestHeader(G,Y.headers[G]);if(Y.beforeSend&&(Y.beforeSend.call(re,Ne,Y)===!1||L))return Ne.abort();if(It="abort",$e.add(Y.complete),Ne.done(Y.success),Ne.fail(Y.error),g=qi(bi,Y,h,Ne),!g)mn(-1,"No Transport");else{if(Ne.readyState=1,V&&Se.trigger("ajaxSend",[Ne,Y]),L)return Ne;Y.async&&Y.timeout>0&&(w=n.setTimeout(function(){Ne.abort("timeout")},Y.timeout));try{L=!1,g.send(Ze,mn)}catch(Fe){if(L)throw Fe;mn(-1,Fe)}}function mn(Fe,Qe,Tn,Vn){var Lt,jt,Rt,tn,nn,vt=Qe;L||(L=!0,w&&n.clearTimeout(w),g=void 0,C=Vn||"",Ne.readyState=Fe>0?4:0,Lt=Fe>=200&&Fe<300||Fe===304,Tn&&(tn=sr(Y,Ne,Tn)),!Lt&&m.inArray("script",Y.dataTypes)>-1&&m.inArray("json",Y.dataTypes)<0&&(Y.converters["text script"]=function(){}),tn=lr(Y,tn,Ne,Lt),Lt?(Y.ifModified&&(nn=Ne.getResponseHeader("Last-Modified"),nn&&(m.lastModified[_]=nn),nn=Ne.getResponseHeader("etag"),nn&&(m.etag[_]=nn)),Fe===204||Y.type==="HEAD"?vt="nocontent":Fe===304?vt="notmodified":(vt=tn.state,jt=tn.data,Rt=tn.error,Lt=!Rt)):(Rt=vt,(Fe||!vt)&&(vt="error",Fe<0&&(Fe=0))),Ne.status=Fe,Ne.statusText=(Qe||vt)+"",Lt?Re.resolveWith(re,[jt,vt,Ne]):Re.rejectWith(re,[Ne,vt,Rt]),Ne.statusCode(rt),rt=void 0,V&&Se.trigger(Lt?"ajaxSuccess":"ajaxError",[Ne,Y,Lt?jt:Rt]),$e.fireWith(re,[Ne,vt]),V&&(Se.trigger("ajaxComplete",[Ne,Y]),--m.active||m.event.trigger("ajaxStop")))}return Ne},getJSON:function(c,h,g){return m.get(c,h,g,"json")},getScript:function(c,h){return m.get(c,void 0,h,"script")}}),m.each(["get","post"],function(c,h){m[h]=function(g,_,C,E){return S(_)&&(E=E||C,C=_,_=void 0),m.ajax(m.extend({url:g,type:h,dataType:E,data:_,success:C},m.isPlainObject(g)&&g))}}),m.ajaxPrefilter(function(c){var h;for(h in c.headers)h.toLowerCase()==="content-type"&&(c.contentType=c.headers[h]||"")}),m._evalUrl=function(c,h,g){return m.ajax({url:c,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(_){m.globalEval(_,h,g)}})},m.fn.extend({wrapAll:function(c){var h;return this[0]&&(S(c)&&(c=c.call(this[0])),h=m(c,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&h.insertBefore(this[0]),h.map(function(){for(var g=this;g.firstElementChild;)g=g.firstElementChild;return g}).append(this)),this},wrapInner:function(c){return S(c)?this.each(function(h){m(this).wrapInner(c.call(this,h))}):this.each(function(){var h=m(this),g=h.contents();g.length?g.wrapAll(c):h.append(c)})},wrap:function(c){var h=S(c);return this.each(function(g){m(this).wrapAll(h?c.call(this,g):c)})},unwrap:function(c){return this.parent(c).not("body").each(function(){m(this).replaceWith(this.childNodes)}),this}}),m.expr.pseudos.hidden=function(c){return!m.expr.pseudos.visible(c)},m.expr.pseudos.visible=function(c){return!!(c.offsetWidth||c.offsetHeight||c.getClientRects().length)},m.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch{}};var en={0:200,1223:204},Pt=m.ajaxSettings.xhr();x.cors=!!Pt&&"withCredentials"in Pt,x.ajax=Pt=!!Pt,m.ajaxTransport(function(c){var h,g;if(x.cors||Pt&&!c.crossDomain)return{send:function(_,C){var E,w=c.xhr();if(w.open(c.type,c.url,c.async,c.username,c.password),c.xhrFields)for(E in c.xhrFields)w[E]=c.xhrFields[E];c.mimeType&&w.overrideMimeType&&w.overrideMimeType(c.mimeType),!c.crossDomain&&!_["X-Requested-With"]&&(_["X-Requested-With"]="XMLHttpRequest");for(E in _)w.setRequestHeader(E,_[E]);h=function(F){return function(){h&&(h=g=w.onload=w.onerror=w.onabort=w.ontimeout=w.onreadystatechange=null,F==="abort"?w.abort():F==="error"?typeof w.status!="number"?C(0,"error"):C(w.status,w.statusText):C(en[w.status]||w.status,w.statusText,(w.responseType||"text")!=="text"||typeof w.responseText!="string"?{binary:w.response}:{text:w.responseText},w.getAllResponseHeaders()))}},w.onload=h(),g=w.onerror=w.ontimeout=h("error"),w.onabort!==void 0?w.onabort=g:w.onreadystatechange=function(){w.readyState===4&&n.setTimeout(function(){h&&g()})},h=h("abort");try{w.send(c.hasContent&&c.data||null)}catch(F){if(h)throw F}},abort:function(){h&&h()}}}),m.ajaxPrefilter(function(c){c.crossDomain&&(c.contents.script=!1)}),m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(c){return m.globalEval(c),c}}}),m.ajaxPrefilter("script",function(c){c.cache===void 0&&(c.cache=!1),c.crossDomain&&(c.type="GET")}),m.ajaxTransport("script",function(c){if(c.crossDomain||c.scriptAttrs){var h,g;return{send:function(_,C){h=m("<script>").attr(c.scriptAttrs||{}).prop({charset:c.scriptCharset,src:c.url}).on("load error",g=function(E){h.remove(),g=null,E&&C(E.type==="error"?404:200,E.type)}),A.head.appendChild(h[0])},abort:function(){g&&g()}}}});var zi=[],gn=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var c=zi.pop()||m.expando+"_"+Fi.guid++;return this[c]=!0,c}}),m.ajaxPrefilter("json jsonp",function(c,h,g){var _,C,E,w=c.jsonp!==!1&&(gn.test(c.url)?"url":typeof c.data=="string"&&(c.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&gn.test(c.data)&&"data");if(w||c.dataTypes[0]==="jsonp")return _=c.jsonpCallback=S(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,w?c[w]=c[w].replace(gn,"$1"+_):c.jsonp!==!1&&(c.url+=(hi.test(c.url)?"&":"?")+c.jsonp+"="+_),c.converters["script json"]=function(){return E||m.error(_+" was not called"),E[0]},c.dataTypes[0]="json",C=n[_],n[_]=function(){E=arguments},g.always(function(){C===void 0?m(n).removeProp(_):n[_]=C,c[_]&&(c.jsonpCallback=h.jsonpCallback,zi.push(_)),E&&S(C)&&C(E[0]),E=C=void 0}),"script"}),x.createHTMLDocument=(function(){var c=A.implementation.createHTMLDocument("").body;return c.innerHTML="<form></form><form></form>",c.childNodes.length===2})(),m.parseHTML=function(c,h,g){if(typeof c!="string")return[];typeof h=="boolean"&&(g=h,h=!1);var _,C,E;return h||(x.createHTMLDocument?(h=A.implementation.createHTMLDocument(""),_=h.createElement("base"),_.href=A.location.href,h.head.appendChild(_)):h=A),C=Ve.exec(c),E=!g&&[],C?[h.createElement(C[1])]:(C=le([c],h,E),E&&E.length&&m(E).remove(),m.merge([],C.childNodes))},m.fn.load=function(c,h,g){var _,C,E,w=this,F=c.indexOf(" ");return F>-1&&(_=hn(c.slice(F)),c=c.slice(0,F)),S(h)?(g=h,h=void 0):h&&typeof h=="object"&&(C="POST"),w.length>0&&m.ajax({url:c,type:C||"GET",dataType:"html",data:h}).done(function(L){E=arguments,w.html(_?m("<div>").append(m.parseHTML(L)).find(_):L)}).always(g&&function(L,V){w.each(function(){g.apply(this,E||[L.responseText,V,L])})}),this},m.expr.pseudos.animated=function(c){return m.grep(m.timers,function(h){return c===h.elem}).length},m.offset={setOffset:function(c,h,g){var _,C,E,w,F,L,V,G=m.css(c,"position"),ee=m(c),Y={};G==="static"&&(c.style.position="relative"),F=ee.offset(),E=m.css(c,"top"),L=m.css(c,"left"),V=(G==="absolute"||G==="fixed")&&(E+L).indexOf("auto")>-1,V?(_=ee.position(),w=_.top,C=_.left):(w=parseFloat(E)||0,C=parseFloat(L)||0),S(h)&&(h=h.call(c,g,m.extend({},F))),h.top!=null&&(Y.top=h.top-F.top+w),h.left!=null&&(Y.left=h.left-F.left+C),"using"in h?h.using.call(c,Y):ee.css(Y)}},m.fn.extend({offset:function(c){if(arguments.length)return c===void 0?this:this.each(function(C){m.offset.setOffset(this,c,C)});var h,g,_=this[0];if(_)return _.getClientRects().length?(h=_.getBoundingClientRect(),g=_.ownerDocument.defaultView,{top:h.top+g.pageYOffset,left:h.left+g.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var c,h,g,_=this[0],C={top:0,left:0};if(m.css(_,"position")==="fixed")h=_.getBoundingClientRect();else{for(h=this.offset(),g=_.ownerDocument,c=_.offsetParent||g.documentElement;c&&(c===g.body||c===g.documentElement)&&m.css(c,"position")==="static";)c=c.parentNode;c&&c!==_&&c.nodeType===1&&(C=m(c).offset(),C.top+=m.css(c,"borderTopWidth",!0),C.left+=m.css(c,"borderLeftWidth",!0))}return{top:h.top-C.top-m.css(_,"marginTop",!0),left:h.left-C.left-m.css(_,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var c=this.offsetParent;c&&m.css(c,"position")==="static";)c=c.offsetParent;return c||Ht})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(c,h){var g=h==="pageYOffset";m.fn[c]=function(_){return ot(this,function(C,E,w){var F;if(D(C)?F=C:C.nodeType===9&&(F=C.defaultView),w===void 0)return F?F[h]:C[E];F?F.scrollTo(g?F.pageXOffset:w,g?w:F.pageYOffset):C[E]=w},c,_,arguments.length)}}),m.each(["top","left"],function(c,h){m.cssHooks[h]=Mi(x.pixelPosition,function(g,_){if(_)return _=Fn(g,h),At.test(_)?m(g).position()[h]+"px":_})}),m.each({Height:"height",Width:"width"},function(c,h){m.each({padding:"inner"+c,content:h,"":"outer"+c},function(g,_){m.fn[_]=function(C,E){var w=arguments.length&&(g||typeof C!="boolean"),F=g||(C===!0||E===!0?"margin":"border");return ot(this,function(L,V,G){var ee;return D(L)?_.indexOf("outer")===0?L["inner"+c]:L.document.documentElement["client"+c]:L.nodeType===9?(ee=L.documentElement,Math.max(L.body["scroll"+c],ee["scroll"+c],L.body["offset"+c],ee["offset"+c],ee["client"+c])):G===void 0?m.css(L,V,F):m.style(L,V,G,F)},h,w?C:void 0,w)}})}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(c,h){m.fn[h]=function(g){return this.on(h,g)}}),m.fn.extend({bind:function(c,h,g){return this.on(c,null,h,g)},unbind:function(c,h){return this.off(c,null,h)},delegate:function(c,h,g,_){return this.on(h,c,g,_)},undelegate:function(c,h,g){return arguments.length===1?this.off(c,"**"):this.off(h,c||"**",g)},hover:function(c,h){return this.on("mouseenter",c).on("mouseleave",h||c)}}),m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(c,h){m.fn[h]=function(g,_){return arguments.length>0?this.on(h,null,g,_):this.trigger(h)}});var pt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;m.proxy=function(c,h){var g,_,C;if(typeof h=="string"&&(g=c[h],h=c,c=g),!!S(c))return _=s.call(arguments,2),C=function(){return c.apply(h||this,_.concat(s.call(arguments)))},C.guid=c.guid=c.guid||m.guid++,C},m.holdReady=function(c){c?m.readyWait++:m.ready(!0)},m.isArray=Array.isArray,m.parseJSON=JSON.parse,m.nodeName=ie,m.isFunction=S,m.isWindow=D,m.camelCase=Ye,m.type=N,m.now=Date.now,m.isNumeric=function(c){var h=m.type(c);return(h==="number"||h==="string")&&!isNaN(c-parseFloat(c))},m.trim=function(c){return c==null?"":(c+"").replace(pt,"$1")};var ur=n.jQuery,cr=n.$;return m.noConflict=function(c){return n.$===m&&(n.$=cr),c&&n.jQuery===m&&(n.jQuery=ur),m},typeof e>"u"&&(n.jQuery=n.$=m),m})})(jquery$1)),jquery$1.exports}var isBrowser=typeof window<"u"&&typeof document<"u"&&typeof navigator<"u",timeoutDuration=(function(){for(var t=["Edge","Trident","Firefox"],n=0;n<t.length;n+=1)if(isBrowser&&navigator.userAgent.indexOf(t[n])>=0)return 1;return 0})();function microtaskDebounce(t){var n=!1;return function(){n||(n=!0,window.Promise.resolve().then(function(){n=!1,t()}))}}function taskDebounce(t){var n=!1;return function(){n||(n=!0,setTimeout(function(){n=!1,t()},timeoutDuration))}}var supportsMicroTasks=isBrowser&&window.Promise,debounce$2=supportsMicroTasks?microtaskDebounce:taskDebounce;function isFunction$1(t){var n={};return t&&n.toString.call(t)==="[object Function]"}function getStyleComputedProperty(t,n){if(t.nodeType!==1)return[];var e=t.ownerDocument.defaultView,r=e.getComputedStyle(t,null);return n?r[n]:r}function getParentNode(t){return t.nodeName==="HTML"?t:t.parentNode||t.host}function getScrollParent(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var n=getStyleComputedProperty(t),e=n.overflow,r=n.overflowX,a=n.overflowY;return/(auto|scroll|overlay)/.test(e+a+r)?t:getScrollParent(getParentNode(t))}function getReferenceNode(t){return t&&t.referenceNode?t.referenceNode:t}var isIE11=isBrowser&&!!(window.MSInputMethodContext&&document.documentMode),isIE10=isBrowser&&/MSIE 10/.test(navigator.userAgent);function isIE(t){return t===11?isIE11:t===10?isIE10:isIE11||isIE10}function getOffsetParent(t){if(!t)return document.documentElement;for(var n=isIE(10)?document.body:null,e=t.offsetParent||null;e===n&&t.nextElementSibling;)e=(t=t.nextElementSibling).offsetParent;var r=e&&e.nodeName;return!r||r==="BODY"||r==="HTML"?t?t.ownerDocument.documentElement:document.documentElement:["TH","TD","TABLE"].indexOf(e.nodeName)!==-1&&getStyleComputedProperty(e,"position")==="static"?getOffsetParent(e):e}function isOffsetContainer(t){var n=t.nodeName;return n==="BODY"?!1:n==="HTML"||getOffsetParent(t.firstElementChild)===t}function getRoot(t){return t.parentNode!==null?getRoot(t.parentNode):t}function findCommonOffsetParent(t,n){if(!t||!t.nodeType||!n||!n.nodeType)return document.documentElement;var e=t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING,r=e?t:n,a=e?n:t,s=document.createRange();s.setStart(r,0),s.setEnd(a,0);var o=s.commonAncestorContainer;if(t!==o&&n!==o||r.contains(a))return isOffsetContainer(o)?o:getOffsetParent(o);var l=getRoot(t);return l.host?findCommonOffsetParent(l.host,n):findCommonOffsetParent(t,getRoot(n).host)}function getScroll(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top",e=n==="top"?"scrollTop":"scrollLeft",r=t.nodeName;if(r==="BODY"||r==="HTML"){var a=t.ownerDocument.documentElement,s=t.ownerDocument.scrollingElement||a;return s[e]}return t[e]}function includeScroll(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=getScroll(n,"top"),a=getScroll(n,"left"),s=e?-1:1;return t.top+=r*s,t.bottom+=r*s,t.left+=a*s,t.right+=a*s,t}function getBordersSize(t,n){var e=n==="x"?"Left":"Top",r=e==="Left"?"Right":"Bottom";return parseFloat(t["border"+e+"Width"])+parseFloat(t["border"+r+"Width"])}function getSize(t,n,e,r){return Math.max(n["offset"+t],n["scroll"+t],e["client"+t],e["offset"+t],e["scroll"+t],isIE(10)?parseInt(e["offset"+t])+parseInt(r["margin"+(t==="Height"?"Top":"Left")])+parseInt(r["margin"+(t==="Height"?"Bottom":"Right")]):0)}function getWindowSizes(t){var n=t.body,e=t.documentElement,r=isIE(10)&&getComputedStyle(e);return{height:getSize("Height",n,e,r),width:getSize("Width",n,e,r)}}var classCallCheck=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},createClass=(function(){function t(n,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}})(),defineProperty=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t},_extends=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};function getClientRect(t){return _extends({},t,{right:t.left+t.width,bottom:t.top+t.height})}function getBoundingClientRect(t){var n={};try{if(isIE(10)){n=t.getBoundingClientRect();var e=getScroll(t,"top"),r=getScroll(t,"left");n.top+=e,n.left+=r,n.bottom+=e,n.right+=r}else n=t.getBoundingClientRect()}catch{}var a={left:n.left,top:n.top,width:n.right-n.left,height:n.bottom-n.top},s=t.nodeName==="HTML"?getWindowSizes(t.ownerDocument):{},o=s.width||t.clientWidth||a.width,l=s.height||t.clientHeight||a.height,u=t.offsetWidth-o,f=t.offsetHeight-l;if(u||f){var d=getStyleComputedProperty(t);u-=getBordersSize(d,"x"),f-=getBordersSize(d,"y"),a.width-=u,a.height-=f}return getClientRect(a)}function getOffsetRectRelativeToArbitraryNode(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=isIE(10),a=n.nodeName==="HTML",s=getBoundingClientRect(t),o=getBoundingClientRect(n),l=getScrollParent(t),u=getStyleComputedProperty(n),f=parseFloat(u.borderTopWidth),d=parseFloat(u.borderLeftWidth);e&&a&&(o.top=Math.max(o.top,0),o.left=Math.max(o.left,0));var p=getClientRect({top:s.top-o.top-f,left:s.left-o.left-d,width:s.width,height:s.height});if(p.marginTop=0,p.marginLeft=0,!r&&a){var v=parseFloat(u.marginTop),y=parseFloat(u.marginLeft);p.top-=f-v,p.bottom-=f-v,p.left-=d-y,p.right-=d-y,p.marginTop=v,p.marginLeft=y}return(r&&!e?n.contains(l):n===l&&l.nodeName!=="BODY")&&(p=includeScroll(p,n)),p}function getViewportOffsetRectRelativeToArtbitraryNode(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=t.ownerDocument.documentElement,r=getOffsetRectRelativeToArbitraryNode(t,e),a=Math.max(e.clientWidth,window.innerWidth||0),s=Math.max(e.clientHeight,window.innerHeight||0),o=n?0:getScroll(e),l=n?0:getScroll(e,"left"),u={top:o-r.top+r.marginTop,left:l-r.left+r.marginLeft,width:a,height:s};return getClientRect(u)}function isFixed(t){var n=t.nodeName;if(n==="BODY"||n==="HTML")return!1;if(getStyleComputedProperty(t,"position")==="fixed")return!0;var e=getParentNode(t);return e?isFixed(e):!1}function getFixedPositionOffsetParent(t){if(!t||!t.parentElement||isIE())return document.documentElement;for(var n=t.parentElement;n&&getStyleComputedProperty(n,"transform")==="none";)n=n.parentElement;return n||document.documentElement}function getBoundaries(t,n,e,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,s={top:0,left:0},o=a?getFixedPositionOffsetParent(t):findCommonOffsetParent(t,getReferenceNode(n));if(r==="viewport")s=getViewportOffsetRectRelativeToArtbitraryNode(o,a);else{var l=void 0;r==="scrollParent"?(l=getScrollParent(getParentNode(n)),l.nodeName==="BODY"&&(l=t.ownerDocument.documentElement)):r==="window"?l=t.ownerDocument.documentElement:l=r;var u=getOffsetRectRelativeToArbitraryNode(l,o,a);if(l.nodeName==="HTML"&&!isFixed(o)){var f=getWindowSizes(t.ownerDocument),d=f.height,p=f.width;s.top+=u.top-u.marginTop,s.bottom=d+u.top,s.left+=u.left-u.marginLeft,s.right=p+u.left}else s=u}e=e||0;var v=typeof e=="number";return s.left+=v?e:e.left||0,s.top+=v?e:e.top||0,s.right-=v?e:e.right||0,s.bottom-=v?e:e.bottom||0,s}function getArea(t){var n=t.width,e=t.height;return n*e}function computeAutoPlacement(t,n,e,r,a){var s=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0;if(t.indexOf("auto")===-1)return t;var o=getBoundaries(e,r,s,a),l={top:{width:o.width,height:n.top-o.top},right:{width:o.right-n.right,height:o.height},bottom:{width:o.width,height:o.bottom-n.bottom},left:{width:n.left-o.left,height:o.height}},u=Object.keys(l).map(function(v){return _extends({key:v},l[v],{area:getArea(l[v])})}).sort(function(v,y){return y.area-v.area}),f=u.filter(function(v){var y=v.width,x=v.height;return y>=e.clientWidth&&x>=e.clientHeight}),d=f.length>0?f[0].key:u[0].key,p=t.split("-")[1];return d+(p?"-"+p:"")}function getReferenceOffsets(t,n,e){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,a=r?getFixedPositionOffsetParent(n):findCommonOffsetParent(n,getReferenceNode(e));return getOffsetRectRelativeToArbitraryNode(e,a,r)}function getOuterSizes(t){var n=t.ownerDocument.defaultView,e=n.getComputedStyle(t),r=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),a=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0),s={width:t.offsetWidth+a,height:t.offsetHeight+r};return s}function getOppositePlacement(t){var n={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(e){return n[e]})}function getPopperOffsets(t,n,e){e=e.split("-")[0];var r=getOuterSizes(t),a={width:r.width,height:r.height},s=["right","left"].indexOf(e)!==-1,o=s?"top":"left",l=s?"left":"top",u=s?"height":"width",f=s?"width":"height";return a[o]=n[o]+n[u]/2-r[u]/2,e===l?a[l]=n[l]-r[f]:a[l]=n[getOppositePlacement(l)],a}function find(t,n){return Array.prototype.find?t.find(n):t.filter(n)[0]}function findIndex(t,n,e){if(Array.prototype.findIndex)return t.findIndex(function(a){return a[n]===e});var r=find(t,function(a){return a[n]===e});return t.indexOf(r)}function runModifiers(t,n,e){var r=e===void 0?t:t.slice(0,findIndex(t,"name",e));return r.forEach(function(a){a.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var s=a.function||a.fn;a.enabled&&isFunction$1(s)&&(n.offsets.popper=getClientRect(n.offsets.popper),n.offsets.reference=getClientRect(n.offsets.reference),n=s(n,a))}),n}function update(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=getReferenceOffsets(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=computeAutoPlacement(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=getPopperOffsets(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=runModifiers(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function isModifierEnabled(t,n){return t.some(function(e){var r=e.name,a=e.enabled;return a&&r===n})}function getSupportedPropertyName(t){for(var n=[!1,"ms","Webkit","Moz","O"],e=t.charAt(0).toUpperCase()+t.slice(1),r=0;r<n.length;r++){var a=n[r],s=a?""+a+e:t;if(typeof document.body.style[s]<"u")return s}return null}function destroy(){return this.state.isDestroyed=!0,isModifierEnabled(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[getSupportedPropertyName("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function getWindow(t){var n=t.ownerDocument;return n?n.defaultView:window}function attachToScrollParents(t,n,e,r){var a=t.nodeName==="BODY",s=a?t.ownerDocument.defaultView:t;s.addEventListener(n,e,{passive:!0}),a||attachToScrollParents(getScrollParent(s.parentNode),n,e,r),r.push(s)}function setupEventListeners(t,n,e,r){e.updateBound=r,getWindow(t).addEventListener("resize",e.updateBound,{passive:!0});var a=getScrollParent(t);return attachToScrollParents(a,"scroll",e.updateBound,e.scrollParents),e.scrollElement=a,e.eventsEnabled=!0,e}function enableEventListeners(){this.state.eventsEnabled||(this.state=setupEventListeners(this.reference,this.options,this.state,this.scheduleUpdate))}function removeEventListeners(t,n){return getWindow(t).removeEventListener("resize",n.updateBound),n.scrollParents.forEach(function(e){e.removeEventListener("scroll",n.updateBound)}),n.updateBound=null,n.scrollParents=[],n.scrollElement=null,n.eventsEnabled=!1,n}function disableEventListeners(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=removeEventListeners(this.reference,this.state))}function isNumeric(t){return t!==""&&!isNaN(parseFloat(t))&&isFinite(t)}function setStyles(t,n){Object.keys(n).forEach(function(e){var r="";["width","height","top","right","bottom","left"].indexOf(e)!==-1&&isNumeric(n[e])&&(r="px"),t.style[e]=n[e]+r})}function setAttributes(t,n){Object.keys(n).forEach(function(e){var r=n[e];r!==!1?t.setAttribute(e,n[e]):t.removeAttribute(e)})}function applyStyle(t){return setStyles(t.instance.popper,t.styles),setAttributes(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&setStyles(t.arrowElement,t.arrowStyles),t}function applyStyleOnLoad(t,n,e,r,a){var s=getReferenceOffsets(a,n,t,e.positionFixed),o=computeAutoPlacement(e.placement,s,n,t,e.modifiers.flip.boundariesElement,e.modifiers.flip.padding);return n.setAttribute("x-placement",o),setStyles(n,{position:e.positionFixed?"fixed":"absolute"}),e}function getRoundedOffsets(t,n){var e=t.offsets,r=e.popper,a=e.reference,s=Math.round,o=Math.floor,l=function(A){return A},u=s(a.width),f=s(r.width),d=["left","right"].indexOf(t.placement)!==-1,p=t.placement.indexOf("-")!==-1,v=u%2===f%2,y=u%2===1&&f%2===1,x=n?d||p||v?s:o:l,S=n?s:l;return{left:x(y&&!p&&n?r.left-1:r.left),top:S(r.top),bottom:S(r.bottom),right:x(r.right)}}var isFirefox=isBrowser&&/Firefox/i.test(navigator.userAgent);function computeStyle(t,n){var e=n.x,r=n.y,a=t.offsets.popper,s=find(t.instance.modifiers,function(W){return W.name==="applyStyle"}).gpuAcceleration;s!==void 0&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var o=s!==void 0?s:n.gpuAcceleration,l=getOffsetParent(t.instance.popper),u=getBoundingClientRect(l),f={position:a.position},d=getRoundedOffsets(t,window.devicePixelRatio<2||!isFirefox),p=e==="bottom"?"top":"bottom",v=r==="right"?"left":"right",y=getSupportedPropertyName("transform"),x=void 0,S=void 0;if(p==="bottom"?l.nodeName==="HTML"?S=-l.clientHeight+d.bottom:S=-u.height+d.bottom:S=d.top,v==="right"?l.nodeName==="HTML"?x=-l.clientWidth+d.right:x=-u.width+d.right:x=d.left,o&&y)f[y]="translate3d("+x+"px, "+S+"px, 0)",f[p]=0,f[v]=0,f.willChange="transform";else{var D=p==="bottom"?-1:1,A=v==="right"?-1:1;f[p]=S*D,f[v]=x*A,f.willChange=p+", "+v}var I={"x-placement":t.placement};return t.attributes=_extends({},I,t.attributes),t.styles=_extends({},f,t.styles),t.arrowStyles=_extends({},t.offsets.arrow,t.arrowStyles),t}function isModifierRequired(t,n,e){var r=find(t,function(l){var u=l.name;return u===n}),a=!!r&&t.some(function(l){return l.name===e&&l.enabled&&l.order<r.order});if(!a){var s="`"+n+"`",o="`"+e+"`";console.warn(o+" modifier is required by "+s+" modifier in order to work, be sure to include it before "+s+"!")}return a}function arrow(t,n){var e;if(!isModifierRequired(t.instance.modifiers,"arrow","keepTogether"))return t;var r=n.element;if(typeof r=="string"){if(r=t.instance.popper.querySelector(r),!r)return t}else if(!t.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var a=t.placement.split("-")[0],s=t.offsets,o=s.popper,l=s.reference,u=["left","right"].indexOf(a)!==-1,f=u?"height":"width",d=u?"Top":"Left",p=d.toLowerCase(),v=u?"left":"top",y=u?"bottom":"right",x=getOuterSizes(r)[f];l[y]-x<o[p]&&(t.offsets.popper[p]-=o[p]-(l[y]-x)),l[p]+x>o[y]&&(t.offsets.popper[p]+=l[p]+x-o[y]),t.offsets.popper=getClientRect(t.offsets.popper);var S=l[p]+l[f]/2-x/2,D=getStyleComputedProperty(t.instance.popper),A=parseFloat(D["margin"+d]),I=parseFloat(D["border"+d+"Width"]),W=S-t.offsets.popper[p]-A-I;return W=Math.max(Math.min(o[f]-x,W),0),t.arrowElement=r,t.offsets.arrow=(e={},defineProperty(e,p,Math.round(W)),defineProperty(e,v,""),e),t}function getOppositeVariation(t){return t==="end"?"start":t==="start"?"end":t}var placements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],validPlacements=placements.slice(3);function clockwise(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=validPlacements.indexOf(t),r=validPlacements.slice(e+1).concat(validPlacements.slice(0,e));return n?r.reverse():r}var BEHAVIORS={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function flip(t,n){if(isModifierEnabled(t.instance.modifiers,"inner")||t.flipped&&t.placement===t.originalPlacement)return t;var e=getBoundaries(t.instance.popper,t.instance.reference,n.padding,n.boundariesElement,t.positionFixed),r=t.placement.split("-")[0],a=getOppositePlacement(r),s=t.placement.split("-")[1]||"",o=[];switch(n.behavior){case BEHAVIORS.FLIP:o=[r,a];break;case BEHAVIORS.CLOCKWISE:o=clockwise(r);break;case BEHAVIORS.COUNTERCLOCKWISE:o=clockwise(r,!0);break;default:o=n.behavior}return o.forEach(function(l,u){if(r!==l||o.length===u+1)return t;r=t.placement.split("-")[0],a=getOppositePlacement(r);var f=t.offsets.popper,d=t.offsets.reference,p=Math.floor,v=r==="left"&&p(f.right)>p(d.left)||r==="right"&&p(f.left)<p(d.right)||r==="top"&&p(f.bottom)>p(d.top)||r==="bottom"&&p(f.top)<p(d.bottom),y=p(f.left)<p(e.left),x=p(f.right)>p(e.right),S=p(f.top)<p(e.top),D=p(f.bottom)>p(e.bottom),A=r==="left"&&y||r==="right"&&x||r==="top"&&S||r==="bottom"&&D,I=["top","bottom"].indexOf(r)!==-1,W=!!n.flipVariations&&(I&&s==="start"&&y||I&&s==="end"&&x||!I&&s==="start"&&S||!I&&s==="end"&&D),N=!!n.flipVariationsByContent&&(I&&s==="start"&&x||I&&s==="end"&&y||!I&&s==="start"&&D||!I&&s==="end"&&S),U=W||N;(v||A||U)&&(t.flipped=!0,(v||A)&&(r=o[u+1]),U&&(s=getOppositeVariation(s)),t.placement=r+(s?"-"+s:""),t.offsets.popper=_extends({},t.offsets.popper,getPopperOffsets(t.instance.popper,t.offsets.reference,t.placement)),t=runModifiers(t.instance.modifiers,t,"flip"))}),t}function keepTogether(t){var n=t.offsets,e=n.popper,r=n.reference,a=t.placement.split("-")[0],s=Math.floor,o=["top","bottom"].indexOf(a)!==-1,l=o?"right":"bottom",u=o?"left":"top",f=o?"width":"height";return e[l]<s(r[u])&&(t.offsets.popper[u]=s(r[u])-e[f]),e[u]>s(r[l])&&(t.offsets.popper[u]=s(r[l])),t}function toValue(t,n,e,r){var a=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),s=+a[1],o=a[2];if(!s)return t;if(o.indexOf("%")===0){var l=void 0;switch(o){case"%p":l=e;break;case"%":case"%r":default:l=r}var u=getClientRect(l);return u[n]/100*s}else if(o==="vh"||o==="vw"){var f=void 0;return o==="vh"?f=Math.max(document.documentElement.clientHeight,window.innerHeight||0):f=Math.max(document.documentElement.clientWidth,window.innerWidth||0),f/100*s}else return s}function parseOffset(t,n,e,r){var a=[0,0],s=["right","left"].indexOf(r)!==-1,o=t.split(/(\+|\-)/).map(function(d){return d.trim()}),l=o.indexOf(find(o,function(d){return d.search(/,|\s/)!==-1}));o[l]&&o[l].indexOf(",")===-1&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var u=/\s*,\s*|\s+/,f=l!==-1?[o.slice(0,l).concat([o[l].split(u)[0]]),[o[l].split(u)[1]].concat(o.slice(l+1))]:[o];return f=f.map(function(d,p){var v=(p===1?!s:s)?"height":"width",y=!1;return d.reduce(function(x,S){return x[x.length-1]===""&&["+","-"].indexOf(S)!==-1?(x[x.length-1]=S,y=!0,x):y?(x[x.length-1]+=S,y=!1,x):x.concat(S)},[]).map(function(x){return toValue(x,v,n,e)})}),f.forEach(function(d,p){d.forEach(function(v,y){isNumeric(v)&&(a[p]+=v*(d[y-1]==="-"?-1:1))})}),a}function offset(t,n){var e=n.offset,r=t.placement,a=t.offsets,s=a.popper,o=a.reference,l=r.split("-")[0],u=void 0;return isNumeric(+e)?u=[+e,0]:u=parseOffset(e,s,o,l),l==="left"?(s.top+=u[0],s.left-=u[1]):l==="right"?(s.top+=u[0],s.left+=u[1]):l==="top"?(s.left+=u[0],s.top-=u[1]):l==="bottom"&&(s.left+=u[0],s.top+=u[1]),t.popper=s,t}function preventOverflow(t,n){var e=n.boundariesElement||getOffsetParent(t.instance.popper);t.instance.reference===e&&(e=getOffsetParent(e));var r=getSupportedPropertyName("transform"),a=t.instance.popper.style,s=a.top,o=a.left,l=a[r];a.top="",a.left="",a[r]="";var u=getBoundaries(t.instance.popper,t.instance.reference,n.padding,e,t.positionFixed);a.top=s,a.left=o,a[r]=l,n.boundaries=u;var f=n.priority,d=t.offsets.popper,p={primary:function(y){var x=d[y];return d[y]<u[y]&&!n.escapeWithReference&&(x=Math.max(d[y],u[y])),defineProperty({},y,x)},secondary:function(y){var x=y==="right"?"left":"top",S=d[x];return d[y]>u[y]&&!n.escapeWithReference&&(S=Math.min(d[x],u[y]-(y==="right"?d.width:d.height))),defineProperty({},x,S)}};return f.forEach(function(v){var y=["left","top"].indexOf(v)!==-1?"primary":"secondary";d=_extends({},d,p[y](v))}),t.offsets.popper=d,t}function shift(t){var n=t.placement,e=n.split("-")[0],r=n.split("-")[1];if(r){var a=t.offsets,s=a.reference,o=a.popper,l=["bottom","top"].indexOf(e)!==-1,u=l?"left":"top",f=l?"width":"height",d={start:defineProperty({},u,s[u]),end:defineProperty({},u,s[u]+s[f]-o[f])};t.offsets.popper=_extends({},o,d[r])}return t}function hide(t){if(!isModifierRequired(t.instance.modifiers,"hide","preventOverflow"))return t;var n=t.offsets.reference,e=find(t.instance.modifiers,function(r){return r.name==="preventOverflow"}).boundaries;if(n.bottom<e.top||n.left>e.right||n.top>e.bottom||n.right<e.left){if(t.hide===!0)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(t.hide===!1)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}function inner(t){var n=t.placement,e=n.split("-")[0],r=t.offsets,a=r.popper,s=r.reference,o=["left","right"].indexOf(e)!==-1,l=["top","left"].indexOf(e)===-1;return a[o?"left":"top"]=s[e]-(l?a[o?"width":"height"]:0),t.placement=getOppositePlacement(n),t.offsets.popper=getClientRect(a),t}var modifiers={shift:{order:100,enabled:!0,fn:shift},offset:{order:200,enabled:!0,fn:offset,offset:0},preventOverflow:{order:300,enabled:!0,fn:preventOverflow,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:keepTogether},arrow:{order:500,enabled:!0,fn:arrow,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:flip,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:inner},hide:{order:800,enabled:!0,fn:hide},computeStyle:{order:850,enabled:!0,fn:computeStyle,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:applyStyle,onLoad:applyStyleOnLoad,gpuAcceleration:void 0}},Defaults$1={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers},Popper=(function(){function t(n,e){var r=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};classCallCheck(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=debounce$2(this.update.bind(this)),this.options=_extends({},t.Defaults,a),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=n&&n.jquery?n[0]:n,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(_extends({},t.Defaults.modifiers,a.modifiers)).forEach(function(o){r.options.modifiers[o]=_extends({},t.Defaults.modifiers[o]||{},a.modifiers?a.modifiers[o]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(o){return _extends({name:o},r.options.modifiers[o])}).sort(function(o,l){return o.order-l.order}),this.modifiers.forEach(function(o){o.enabled&&isFunction$1(o.onLoad)&&o.onLoad(r.reference,r.popper,r.options,o,r.state)}),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return createClass(t,[{key:"update",value:function(){return update.call(this)}},{key:"destroy",value:function(){return destroy.call(this)}},{key:"enableEventListeners",value:function(){return enableEventListeners.call(this)}},{key:"disableEventListeners",value:function(){return disableEventListeners.call(this)}}]),t})();Popper.Utils=(typeof window<"u"?window:global).PopperUtils;Popper.placements=placements;Popper.Defaults=Defaults$1;const popper=Object.freeze(Object.defineProperty({__proto__:null,default:Popper},Symbol.toStringTag,{value:"Module"})),require$$1=getAugmentedNamespace(popper);var bootstrap=bootstrap$1.exports,hasRequiredBootstrap;function requireBootstrap(){return hasRequiredBootstrap||(hasRequiredBootstrap=1,(function(t,n){(function(e,r){r(n,requireJquery(),require$$1)})(bootstrap,(function(e,r,a){function s(z){return z&&typeof z=="object"&&"default"in z?z:{default:z}}var o=s(r),l=s(a);function u(z,H){for(var R=0;R<H.length;R++){var b=H[R];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(z,b.key,b)}}function f(z,H,R){return R&&u(z,R),Object.defineProperty(z,"prototype",{writable:!1}),z}function d(){return d=Object.assign?Object.assign.bind():function(z){for(var H=1;H<arguments.length;H++){var R=arguments[H];for(var b in R)Object.prototype.hasOwnProperty.call(R,b)&&(z[b]=R[b])}return z},d.apply(this,arguments)}function p(z,H){z.prototype=Object.create(H.prototype),z.prototype.constructor=z,v(z,H)}function v(z,H){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,T){return b.__proto__=T,b},v(z,H)}var y="transitionend",x=1e6,S=1e3;function D(z){return z===null||typeof z>"u"?""+z:{}.toString.call(z).match(/\s([a-z]+)/i)[1].toLowerCase()}function A(){return{bindType:y,delegateType:y,handle:function(H){if(o.default(H.target).is(this))return H.handleObj.handler.apply(this,arguments)}}}function I(z){var H=this,R=!1;return o.default(this).one(N.TRANSITION_END,function(){R=!0}),setTimeout(function(){R||N.triggerTransitionEnd(H)},z),this}function W(){o.default.fn.emulateTransitionEnd=I,o.default.event.special[N.TRANSITION_END]=A()}var N={TRANSITION_END:"bsTransitionEnd",getUID:function(H){do H+=~~(Math.random()*x);while(document.getElementById(H));return H},getSelectorFromElement:function(H){var R=H.getAttribute("data-target");if(!R||R==="#"){var b=H.getAttribute("href");R=b&&b!=="#"?b.trim():""}try{return document.querySelector(R)?R:null}catch{return null}},getTransitionDurationFromElement:function(H){if(!H)return 0;var R=o.default(H).css("transition-duration"),b=o.default(H).css("transition-delay"),T=parseFloat(R),M=parseFloat(b);return!T&&!M?0:(R=R.split(",")[0],b=b.split(",")[0],(parseFloat(R)+parseFloat(b))*S)},reflow:function(H){return H.offsetHeight},triggerTransitionEnd:function(H){o.default(H).trigger(y)},supportsTransitionEnd:function(){return!!y},isElement:function(H){return(H[0]||H).nodeType},typeCheckConfig:function(H,R,b){for(var T in b)if(Object.prototype.hasOwnProperty.call(b,T)){var M=b[T],X=R[T],Z=X&&N.isElement(X)?"element":D(X);if(!new RegExp(M).test(Z))throw new Error(H.toUpperCase()+": "+('Option "'+T+'" provided type "'+Z+'" ')+('but expected type "'+M+'".'))}},findShadowRoot:function(H){if(!document.documentElement.attachShadow)return null;if(typeof H.getRootNode=="function"){var R=H.getRootNode();return R instanceof ShadowRoot?R:null}return H instanceof ShadowRoot?H:H.parentNode?N.findShadowRoot(H.parentNode):null},jQueryDetection:function(){if(typeof o.default>"u")throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var H=o.default.fn.jquery.split(" ")[0].split("."),R=1,b=2,T=9,M=1,X=4;if(H[0]<b&&H[1]<T||H[0]===R&&H[1]===T&&H[2]<M||H[0]>=X)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};N.jQueryDetection(),W();var U="alert",J="4.6.2",m="bs.alert",ne="."+m,ie=".data-api",ge=o.default.fn[U],ve="alert",_e="fade",ue="show",He="close"+ne,pe="closed"+ne,we="click"+ne+ie,xe='[data-dismiss="alert"]',je=(function(){function z(R){this._element=R}var H=z.prototype;return H.close=function(b){var T=this._element;b&&(T=this._getRootElement(b));var M=this._triggerCloseEvent(T);M.isDefaultPrevented()||this._removeElement(T)},H.dispose=function(){o.default.removeData(this._element,m),this._element=null},H._getRootElement=function(b){var T=N.getSelectorFromElement(b),M=!1;return T&&(M=document.querySelector(T)),M||(M=o.default(b).closest("."+ve)[0]),M},H._triggerCloseEvent=function(b){var T=o.default.Event(He);return o.default(b).trigger(T),T},H._removeElement=function(b){var T=this;if(o.default(b).removeClass(ue),!o.default(b).hasClass(_e)){this._destroyElement(b);return}var M=N.getTransitionDurationFromElement(b);o.default(b).one(N.TRANSITION_END,function(X){return T._destroyElement(b,X)}).emulateTransitionEnd(M)},H._destroyElement=function(b){o.default(b).detach().trigger(pe).remove()},z._jQueryInterface=function(b){return this.each(function(){var T=o.default(this),M=T.data(m);M||(M=new z(this),T.data(m,M)),b==="close"&&M[b](this)})},z._handleDismiss=function(b){return function(T){T&&T.preventDefault(),b.close(this)}},f(z,null,[{key:"VERSION",get:function(){return J}}]),z})();o.default(document).on(we,xe,je._handleDismiss(new je)),o.default.fn[U]=je._jQueryInterface,o.default.fn[U].Constructor=je,o.default.fn[U].noConflict=function(){return o.default.fn[U]=ge,je._jQueryInterface};var Le="button",ct="4.6.2",Xe="bs.button",Ve="."+Xe,et=".data-api",it=o.default.fn[Le],Ge="active",ke="btn",ze="focus",tt="click"+Ve+et,sn="focus"+Ve+et+" "+("blur"+Ve+et),gt="load"+Ve+et,Pn='[data-toggle^="button"]',yt='[data-toggle="buttons"]',bn='[data-toggle="button"]',qn='[data-toggle="buttons"] .btn',yn='input:not([type="hidden"])',Mn=".active",Ut=".btn",ot=(function(){function z(R){this._element=R,this.shouldAvoidTriggerChange=!1}var H=z.prototype;return H.toggle=function(){var b=!0,T=!0,M=o.default(this._element).closest(yt)[0];if(M){var X=this._element.querySelector(yn);if(X){if(X.type==="radio")if(X.checked&&this._element.classList.contains(Ge))b=!1;else{var Z=M.querySelector(Mn);Z&&o.default(Z).removeClass(Ge)}b&&((X.type==="checkbox"||X.type==="radio")&&(X.checked=!this._element.classList.contains(Ge)),this.shouldAvoidTriggerChange||o.default(X).trigger("change")),X.focus(),T=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(T&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(Ge)),b&&o.default(this._element).toggleClass(Ge))},H.dispose=function(){o.default.removeData(this._element,Xe),this._element=null},z._jQueryInterface=function(b,T){return this.each(function(){var M=o.default(this),X=M.data(Xe);X||(X=new z(this),M.data(Xe,X)),X.shouldAvoidTriggerChange=T,b==="toggle"&&X[b]()})},f(z,null,[{key:"VERSION",get:function(){return ct}}]),z})();o.default(document).on(tt,Pn,function(z){var H=z.target,R=H;if(o.default(H).hasClass(ke)||(H=o.default(H).closest(Ut)[0]),!H||H.hasAttribute("disabled")||H.classList.contains("disabled"))z.preventDefault();else{var b=H.querySelector(yn);if(b&&(b.hasAttribute("disabled")||b.classList.contains("disabled"))){z.preventDefault();return}(R.tagName==="INPUT"||H.tagName!=="LABEL")&&ot._jQueryInterface.call(o.default(H),"toggle",R.tagName==="INPUT")}}).on(sn,Pn,function(z){var H=o.default(z.target).closest(Ut)[0];o.default(H).toggleClass(ze,/^focus(in)?$/.test(z.type))}),o.default(window).on(gt,function(){for(var z=[].slice.call(document.querySelectorAll(qn)),H=0,R=z.length;H<R;H++){var b=z[H],T=b.querySelector(yn);T.checked||T.hasAttribute("checked")?b.classList.add(Ge):b.classList.remove(Ge)}z=[].slice.call(document.querySelectorAll(bn));for(var M=0,X=z.length;M<X;M++){var Z=z[M];Z.getAttribute("aria-pressed")==="true"?Z.classList.add(Ge):Z.classList.remove(Ge)}}),o.default.fn[Le]=ot._jQueryInterface,o.default.fn[Le].Constructor=ot,o.default.fn[Le].noConflict=function(){return o.default.fn[Le]=it,ot._jQueryInterface};var xt="carousel",ri="4.6.2",ln="bs.carousel",Ye="."+ln,wt=".data-api",qt=o.default.fn[xt],me=37,st=39,zn=500,ai=40,Yn="carousel",Tt="active",Kn="slide",zt="carousel-item-right",Ct="carousel-item-left",Ht="carousel-item-next",We="carousel-item-prev",In="pointer-event",Et="next",un="prev",cn="left",Ln="right",lt="slide"+Ye,Yt="slid"+Ye,Xn="keydown"+Ye,O="mouseenter"+Ye,k="mouseleave"+Ye,B="touchstart"+Ye,Q="touchmove"+Ye,oe="touchend"+Ye,le="pointerdown"+Ye,Oe="pointerup"+Ye,de="dragstart"+Ye,Te="load"+Ye+wt,he="click"+Ye+wt,Ce=".active",Be=".active.carousel-item",mt=".carousel-item",ft=".carousel-item img",Kt=".carousel-item-next, .carousel-item-prev",Xt=".carousel-indicators",oi="[data-slide], [data-slide-to]",xn='[data-ride="carousel"]',Rn={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Gt={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Nn={TOUCH:"touch",PEN:"pen"},At=(function(){function z(R,b){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(b),this._element=R,this._indicatorsElement=this._element.querySelector(Xt),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=!!(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var H=z.prototype;return H.next=function(){this._isSliding||this._slide(Et)},H.nextWhenVisible=function(){var b=o.default(this._element);!document.hidden&&b.is(":visible")&&b.css("visibility")!=="hidden"&&this.next()},H.prev=function(){this._isSliding||this._slide(un)},H.pause=function(b){b||(this._isPaused=!0),this._element.querySelector(Kt)&&(N.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},H.cycle=function(b){b||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},H.to=function(b){var T=this;this._activeElement=this._element.querySelector(Be);var M=this._getItemIndex(this._activeElement);if(!(b>this._items.length-1||b<0)){if(this._isSliding){o.default(this._element).one(Yt,function(){return T.to(b)});return}if(M===b){this.pause(),this.cycle();return}var X=b>M?Et:un;this._slide(X,this._items[b])}},H.dispose=function(){o.default(this._element).off(Ye),o.default.removeData(this._element,ln),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},H._getConfig=function(b){return b=d({},Rn,b),N.typeCheckConfig(xt,b,Gt),b},H._handleSwipe=function(){var b=Math.abs(this.touchDeltaX);if(!(b<=ai)){var T=b/this.touchDeltaX;this.touchDeltaX=0,T>0&&this.prev(),T<0&&this.next()}},H._addEventListeners=function(){var b=this;this._config.keyboard&&o.default(this._element).on(Xn,function(T){return b._keydown(T)}),this._config.pause==="hover"&&o.default(this._element).on(O,function(T){return b.pause(T)}).on(k,function(T){return b.cycle(T)}),this._config.touch&&this._addTouchEventListeners()},H._addTouchEventListeners=function(){var b=this;if(this._touchSupported){var T=function(ae){b._pointerEvent&&Nn[ae.originalEvent.pointerType.toUpperCase()]?b.touchStartX=ae.originalEvent.clientX:b._pointerEvent||(b.touchStartX=ae.originalEvent.touches[0].clientX)},M=function(ae){b.touchDeltaX=ae.originalEvent.touches&&ae.originalEvent.touches.length>1?0:ae.originalEvent.touches[0].clientX-b.touchStartX},X=function(ae){b._pointerEvent&&Nn[ae.originalEvent.pointerType.toUpperCase()]&&(b.touchDeltaX=ae.originalEvent.clientX-b.touchStartX),b._handleSwipe(),b._config.pause==="hover"&&(b.pause(),b.touchTimeout&&clearTimeout(b.touchTimeout),b.touchTimeout=setTimeout(function(De){return b.cycle(De)},zn+b._config.interval))};o.default(this._element.querySelectorAll(ft)).on(de,function(Z){return Z.preventDefault()}),this._pointerEvent?(o.default(this._element).on(le,function(Z){return T(Z)}),o.default(this._element).on(Oe,function(Z){return X(Z)}),this._element.classList.add(In)):(o.default(this._element).on(B,function(Z){return T(Z)}),o.default(this._element).on(Q,function(Z){return M(Z)}),o.default(this._element).on(oe,function(Z){return X(Z)}))}},H._keydown=function(b){if(!/input|textarea/i.test(b.target.tagName))switch(b.which){case me:b.preventDefault(),this.prev();break;case st:b.preventDefault(),this.next();break}},H._getItemIndex=function(b){return this._items=b&&b.parentNode?[].slice.call(b.parentNode.querySelectorAll(mt)):[],this._items.indexOf(b)},H._getItemByDirection=function(b,T){var M=b===Et,X=b===un,Z=this._getItemIndex(T),ae=this._items.length-1,De=X&&Z===0||M&&Z===ae;if(De&&!this._config.wrap)return T;var Ue=b===un?-1:1,qe=(Z+Ue)%this._items.length;return qe===-1?this._items[this._items.length-1]:this._items[qe]},H._triggerSlideEvent=function(b,T){var M=this._getItemIndex(b),X=this._getItemIndex(this._element.querySelector(Be)),Z=o.default.Event(lt,{relatedTarget:b,direction:T,from:X,to:M});return o.default(this._element).trigger(Z),Z},H._setActiveIndicatorElement=function(b){if(this._indicatorsElement){var T=[].slice.call(this._indicatorsElement.querySelectorAll(Ce));o.default(T).removeClass(Tt);var M=this._indicatorsElement.children[this._getItemIndex(b)];M&&o.default(M).addClass(Tt)}},H._updateInterval=function(){var b=this._activeElement||this._element.querySelector(Be);if(b){var T=parseInt(b.getAttribute("data-interval"),10);T?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=T):this._config.interval=this._config.defaultInterval||this._config.interval}},H._slide=function(b,T){var M=this,X=this._element.querySelector(Be),Z=this._getItemIndex(X),ae=T||X&&this._getItemByDirection(b,X),De=this._getItemIndex(ae),Ue=!!this._interval,qe,ut,on;if(b===Et?(qe=Ct,ut=Ht,on=cn):(qe=zt,ut=We,on=Ln),ae&&o.default(ae).hasClass(Tt)){this._isSliding=!1;return}var Wt=this._triggerSlideEvent(ae,on);if(!Wt.isDefaultPrevented()&&!(!X||!ae)){this._isSliding=!0,Ue&&this.pause(),this._setActiveIndicatorElement(ae),this._activeElement=ae;var ii=o.default.Event(Yt,{relatedTarget:ae,direction:on,from:Z,to:De});if(o.default(this._element).hasClass(Kn)){o.default(ae).addClass(ut),N.reflow(ae),o.default(X).addClass(qe),o.default(ae).addClass(qe);var gr=N.getTransitionDurationFromElement(X);o.default(X).one(N.TRANSITION_END,function(){o.default(ae).removeClass(qe+" "+ut).addClass(Tt),o.default(X).removeClass(Tt+" "+ut+" "+qe),M._isSliding=!1,setTimeout(function(){return o.default(M._element).trigger(ii)},0)}).emulateTransitionEnd(gr)}else o.default(X).removeClass(Tt),o.default(ae).addClass(Tt),this._isSliding=!1,o.default(this._element).trigger(ii);Ue&&this.cycle()}},z._jQueryInterface=function(b){return this.each(function(){var T=o.default(this).data(ln),M=d({},Rn,o.default(this).data());typeof b=="object"&&(M=d({},M,b));var X=typeof b=="string"?b:M.slide;if(T||(T=new z(this,M),o.default(this).data(ln,T)),typeof b=="number")T.to(b);else if(typeof X=="string"){if(typeof T[X]>"u")throw new TypeError('No method named "'+X+'"');T[X]()}else M.interval&&M.ride&&(T.pause(),T.cycle())})},z._dataApiClickHandler=function(b){var T=N.getSelectorFromElement(this);if(T){var M=o.default(T)[0];if(!(!M||!o.default(M).hasClass(Yn))){var X=d({},o.default(M).data(),o.default(this).data()),Z=this.getAttribute("data-slide-to");Z&&(X.interval=!1),z._jQueryInterface.call(o.default(M),X),Z&&o.default(M).data(ln).to(Z),b.preventDefault()}}},f(z,null,[{key:"VERSION",get:function(){return ri}},{key:"Default",get:function(){return Rn}}]),z})();o.default(document).on(he,oi,At._dataApiClickHandler),o.default(window).on(Te,function(){for(var z=[].slice.call(document.querySelectorAll(xn)),H=0,R=z.length;H<R;H++){var b=o.default(z[H]);At._jQueryInterface.call(b,b.data())}}),o.default.fn[xt]=At._jQueryInterface,o.default.fn[xt].Constructor=At,o.default.fn[xt].noConflict=function(){return o.default.fn[xt]=qt,At._jQueryInterface};var Ot="collapse",Cn="4.6.2",kt="bs.collapse",fn="."+kt,Fn=".data-api",Mi=o.default.fn[Ot],Qt="show",En="collapse",Hn="collapsing",si="collapsed",Gn="width",Ji="height",Zi="show"+fn,Ii="shown"+fn,Li="hide"+fn,li="hidden"+fn,Ri="click"+fn+Fn,ht=".show, .collapsing",dn='[data-toggle="collapse"]',Sn={toggle:!0,parent:""},er={toggle:"boolean",parent:"(string|element)"},jn=(function(){function z(R,b){this._isTransitioning=!1,this._element=R,this._config=this._getConfig(b),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+R.id+'"],'+('[data-toggle="collapse"][data-target="#'+R.id+'"]')));for(var T=[].slice.call(document.querySelectorAll(dn)),M=0,X=T.length;M<X;M++){var Z=T[M],ae=N.getSelectorFromElement(Z),De=[].slice.call(document.querySelectorAll(ae)).filter(function(Ue){return Ue===R});ae!==null&&De.length>0&&(this._selector=ae,this._triggerArray.push(Z))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var H=z.prototype;return H.toggle=function(){o.default(this._element).hasClass(Qt)?this.hide():this.show()},H.show=function(){var b=this;if(!(this._isTransitioning||o.default(this._element).hasClass(Qt))){var T,M;if(this._parent&&(T=[].slice.call(this._parent.querySelectorAll(ht)).filter(function(ut){return typeof b._config.parent=="string"?ut.getAttribute("data-parent")===b._config.parent:ut.classList.contains(En)}),T.length===0&&(T=null)),!(T&&(M=o.default(T).not(this._selector).data(kt),M&&M._isTransitioning))){var X=o.default.Event(Zi);if(o.default(this._element).trigger(X),!X.isDefaultPrevented()){T&&(z._jQueryInterface.call(o.default(T).not(this._selector),"hide"),M||o.default(T).data(kt,null));var Z=this._getDimension();o.default(this._element).removeClass(En).addClass(Hn),this._element.style[Z]=0,this._triggerArray.length&&o.default(this._triggerArray).removeClass(si).attr("aria-expanded",!0),this.setTransitioning(!0);var ae=function(){o.default(b._element).removeClass(Hn).addClass(En+" "+Qt),b._element.style[Z]="",b.setTransitioning(!1),o.default(b._element).trigger(Ii)},De=Z[0].toUpperCase()+Z.slice(1),Ue="scroll"+De,qe=N.getTransitionDurationFromElement(this._element);o.default(this._element).one(N.TRANSITION_END,ae).emulateTransitionEnd(qe),this._element.style[Z]=this._element[Ue]+"px"}}}},H.hide=function(){var b=this;if(!(this._isTransitioning||!o.default(this._element).hasClass(Qt))){var T=o.default.Event(Li);if(o.default(this._element).trigger(T),!T.isDefaultPrevented()){var M=this._getDimension();this._element.style[M]=this._element.getBoundingClientRect()[M]+"px",N.reflow(this._element),o.default(this._element).addClass(Hn).removeClass(En+" "+Qt);var X=this._triggerArray.length;if(X>0)for(var Z=0;Z<X;Z++){var ae=this._triggerArray[Z],De=N.getSelectorFromElement(ae);if(De!==null){var Ue=o.default([].slice.call(document.querySelectorAll(De)));Ue.hasClass(Qt)||o.default(ae).addClass(si).attr("aria-expanded",!1)}}this.setTransitioning(!0);var qe=function(){b.setTransitioning(!1),o.default(b._element).removeClass(Hn).addClass(En).trigger(li)};this._element.style[M]="";var ut=N.getTransitionDurationFromElement(this._element);o.default(this._element).one(N.TRANSITION_END,qe).emulateTransitionEnd(ut)}}},H.setTransitioning=function(b){this._isTransitioning=b},H.dispose=function(){o.default.removeData(this._element,kt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},H._getConfig=function(b){return b=d({},Sn,b),b.toggle=!!b.toggle,N.typeCheckConfig(Ot,b,er),b},H._getDimension=function(){var b=o.default(this._element).hasClass(Gn);return b?Gn:Ji},H._getParent=function(){var b=this,T;N.isElement(this._config.parent)?(T=this._config.parent,typeof this._config.parent.jquery<"u"&&(T=this._config.parent[0])):T=document.querySelector(this._config.parent);var M='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',X=[].slice.call(T.querySelectorAll(M));return o.default(X).each(function(Z,ae){b._addAriaAndCollapsedClass(z._getTargetFromElement(ae),[ae])}),T},H._addAriaAndCollapsedClass=function(b,T){var M=o.default(b).hasClass(Qt);T.length&&o.default(T).toggleClass(si,!M).attr("aria-expanded",M)},z._getTargetFromElement=function(b){var T=N.getSelectorFromElement(b);return T?document.querySelector(T):null},z._jQueryInterface=function(b){return this.each(function(){var T=o.default(this),M=T.data(kt),X=d({},Sn,T.data(),typeof b=="object"&&b?b:{});if(!M&&X.toggle&&typeof b=="string"&&/show|hide/.test(b)&&(X.toggle=!1),M||(M=new z(this,X),T.data(kt,M)),typeof b=="string"){if(typeof M[b]>"u")throw new TypeError('No method named "'+b+'"');M[b]()}})},f(z,null,[{key:"VERSION",get:function(){return Cn}},{key:"Default",get:function(){return Sn}}]),z})();o.default(document).on(Ri,dn,function(z){z.currentTarget.tagName==="A"&&z.preventDefault();var H=o.default(this),R=N.getSelectorFromElement(this),b=[].slice.call(document.querySelectorAll(R));o.default(b).each(function(){var T=o.default(this),M=T.data(kt),X=M?"toggle":H.data();jn._jQueryInterface.call(T,X)})}),o.default.fn[Ot]=jn._jQueryInterface,o.default.fn[Ot].Constructor=jn,o.default.fn[Ot].noConflict=function(){return o.default.fn[Ot]=Mi,jn._jQueryInterface};var Jt="dropdown",Ni="4.6.2",Zt="bs.dropdown",$t="."+Zt,ui=".data-api",tr=o.default.fn[Jt],dt=27,ci=32,Dn=9,fi=38,di=40,hn=3,pn=new RegExp(fi+"|"+di+"|"+dt),wn="disabled",St="show",Bn="dropup",Fi="dropright",hi="dropleft",pi="dropdown-menu-right",Hi="position-static",ji="hide"+$t,gi="hidden"+$t,nr="show"+$t,ir="shown"+$t,mi="click"+$t,vi="click"+$t+ui,Bi="keydown"+$t+ui,rr="keyup"+$t+ui,Qn='[data-toggle="dropdown"]',ar=".dropdown form",_i=".dropdown-menu",or=".navbar-nav",Vi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",bi="top-start",Wi="top-end",yi="bottom-start",Ui="bottom-end",qi="right-start",xi="left-start",sr={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},lr={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},en=(function(){function z(R,b){this._element=R,this._popper=null,this._config=this._getConfig(b),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var H=z.prototype;return H.toggle=function(){if(!(this._element.disabled||o.default(this._element).hasClass(wn))){var b=o.default(this._menu).hasClass(St);z._clearMenus(),!b&&this.show(!0)}},H.show=function(b){if(b===void 0&&(b=!1),!(this._element.disabled||o.default(this._element).hasClass(wn)||o.default(this._menu).hasClass(St))){var T={relatedTarget:this._element},M=o.default.Event(nr,T),X=z._getParentFromElement(this._element);if(o.default(X).trigger(M),!M.isDefaultPrevented()){if(!this._inNavbar&&b){if(typeof l.default>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var Z=this._element;this._config.reference==="parent"?Z=X:N.isElement(this._config.reference)&&(Z=this._config.reference,typeof this._config.reference.jquery<"u"&&(Z=this._config.reference[0])),this._config.boundary!=="scrollParent"&&o.default(X).addClass(Hi),this._popper=new l.default(Z,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&o.default(X).closest(or).length===0&&o.default(document.body).children().on("mouseover",null,o.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),o.default(this._menu).toggleClass(St),o.default(X).toggleClass(St).trigger(o.default.Event(ir,T))}}},H.hide=function(){if(!(this._element.disabled||o.default(this._element).hasClass(wn)||!o.default(this._menu).hasClass(St))){var b={relatedTarget:this._element},T=o.default.Event(ji,b),M=z._getParentFromElement(this._element);o.default(M).trigger(T),!T.isDefaultPrevented()&&(this._popper&&this._popper.destroy(),o.default(this._menu).toggleClass(St),o.default(M).toggleClass(St).trigger(o.default.Event(gi,b)))}},H.dispose=function(){o.default.removeData(this._element,Zt),o.default(this._element).off($t),this._element=null,this._menu=null,this._popper!==null&&(this._popper.destroy(),this._popper=null)},H.update=function(){this._inNavbar=this._detectNavbar(),this._popper!==null&&this._popper.scheduleUpdate()},H._addEventListeners=function(){var b=this;o.default(this._element).on(mi,function(T){T.preventDefault(),T.stopPropagation(),b.toggle()})},H._getConfig=function(b){return b=d({},this.constructor.Default,o.default(this._element).data(),b),N.typeCheckConfig(Jt,b,this.constructor.DefaultType),b},H._getMenuElement=function(){if(!this._menu){var b=z._getParentFromElement(this._element);b&&(this._menu=b.querySelector(_i))}return this._menu},H._getPlacement=function(){var b=o.default(this._element.parentNode),T=yi;return b.hasClass(Bn)?T=o.default(this._menu).hasClass(pi)?Wi:bi:b.hasClass(Fi)?T=qi:b.hasClass(hi)?T=xi:o.default(this._menu).hasClass(pi)&&(T=Ui),T},H._detectNavbar=function(){return o.default(this._element).closest(".navbar").length>0},H._getOffset=function(){var b=this,T={};return typeof this._config.offset=="function"?T.fn=function(M){return M.offsets=d({},M.offsets,b._config.offset(M.offsets,b._element)),M}:T.offset=this._config.offset,T},H._getPopperConfig=function(){var b={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return this._config.display==="static"&&(b.modifiers.applyStyle={enabled:!1}),d({},b,this._config.popperConfig)},z._jQueryInterface=function(b){return this.each(function(){var T=o.default(this).data(Zt),M=typeof b=="object"?b:null;if(T||(T=new z(this,M),o.default(this).data(Zt,T)),typeof b=="string"){if(typeof T[b]>"u")throw new TypeError('No method named "'+b+'"');T[b]()}})},z._clearMenus=function(b){if(!(b&&(b.which===hn||b.type==="keyup"&&b.which!==Dn)))for(var T=[].slice.call(document.querySelectorAll(Qn)),M=0,X=T.length;M<X;M++){var Z=z._getParentFromElement(T[M]),ae=o.default(T[M]).data(Zt),De={relatedTarget:T[M]};if(b&&b.type==="click"&&(De.clickEvent=b),!!ae){var Ue=ae._menu;if(o.default(Z).hasClass(St)&&!(b&&(b.type==="click"&&/input|textarea/i.test(b.target.tagName)||b.type==="keyup"&&b.which===Dn)&&o.default.contains(Z,b.target))){var qe=o.default.Event(ji,De);o.default(Z).trigger(qe),!qe.isDefaultPrevented()&&("ontouchstart"in document.documentElement&&o.default(document.body).children().off("mouseover",null,o.default.noop),T[M].setAttribute("aria-expanded","false"),ae._popper&&ae._popper.destroy(),o.default(Ue).removeClass(St),o.default(Z).removeClass(St).trigger(o.default.Event(gi,De)))}}}},z._getParentFromElement=function(b){var T,M=N.getSelectorFromElement(b);return M&&(T=document.querySelector(M)),T||b.parentNode},z._dataApiKeydownHandler=function(b){if(!(/input|textarea/i.test(b.target.tagName)?b.which===ci||b.which!==dt&&(b.which!==di&&b.which!==fi||o.default(b.target).closest(_i).length):!pn.test(b.which))&&!(this.disabled||o.default(this).hasClass(wn))){var T=z._getParentFromElement(this),M=o.default(T).hasClass(St);if(!(!M&&b.which===dt)){if(b.preventDefault(),b.stopPropagation(),!M||b.which===dt||b.which===ci){b.which===dt&&o.default(T.querySelector(Qn)).trigger("focus"),o.default(this).trigger("click");return}var X=[].slice.call(T.querySelectorAll(Vi)).filter(function(ae){return o.default(ae).is(":visible")});if(X.length!==0){var Z=X.indexOf(b.target);b.which===fi&&Z>0&&Z--,b.which===di&&Z<X.length-1&&Z++,Z<0&&(Z=0),X[Z].focus()}}}},f(z,null,[{key:"VERSION",get:function(){return Ni}},{key:"Default",get:function(){return sr}},{key:"DefaultType",get:function(){return lr}}]),z})();o.default(document).on(Bi,Qn,en._dataApiKeydownHandler).on(Bi,_i,en._dataApiKeydownHandler).on(vi+" "+rr,en._clearMenus).on(vi,Qn,function(z){z.preventDefault(),z.stopPropagation(),en._jQueryInterface.call(o.default(this),"toggle")}).on(vi,ar,function(z){z.stopPropagation()}),o.default.fn[Jt]=en._jQueryInterface,o.default.fn[Jt].Constructor=en,o.default.fn[Jt].noConflict=function(){return o.default.fn[Jt]=tr,en._jQueryInterface};var Pt="modal",zi="4.6.2",gn="bs.modal",pt="."+gn,ur=".data-api",cr=o.default.fn[Pt],c=27,h="modal-dialog-scrollable",g="modal-scrollbar-measure",_="modal-backdrop",C="modal-open",E="fade",w="show",F="modal-static",L="hide"+pt,V="hidePrevented"+pt,G="hidden"+pt,ee="show"+pt,Y="shown"+pt,re="focusin"+pt,Se="resize"+pt,Re="click.dismiss"+pt,$e="keydown.dismiss"+pt,rt="mouseup.dismiss"+pt,Ze="mousedown.dismiss"+pt,Mt="click"+pt+ur,It=".modal-dialog",Ne=".modal-body",mn='[data-toggle="modal"]',Fe='[data-dismiss="modal"]',Qe=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Tn=".sticky-top",Vn={backdrop:!0,keyboard:!0,focus:!0,show:!0},Lt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},jt=(function(){function z(R,b){this._config=this._getConfig(b),this._element=R,this._dialog=R.querySelector(It),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var H=z.prototype;return H.toggle=function(b){return this._isShown?this.hide():this.show(b)},H.show=function(b){var T=this;if(!(this._isShown||this._isTransitioning)){var M=o.default.Event(ee,{relatedTarget:b});o.default(this._element).trigger(M),!M.isDefaultPrevented()&&(this._isShown=!0,o.default(this._element).hasClass(E)&&(this._isTransitioning=!0),this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),o.default(this._element).on(Re,Fe,function(X){return T.hide(X)}),o.default(this._dialog).on(Ze,function(){o.default(T._element).one(rt,function(X){o.default(X.target).is(T._element)&&(T._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return T._showElement(b)}))}},H.hide=function(b){var T=this;if(b&&b.preventDefault(),!(!this._isShown||this._isTransitioning)){var M=o.default.Event(L);if(o.default(this._element).trigger(M),!(!this._isShown||M.isDefaultPrevented())){this._isShown=!1;var X=o.default(this._element).hasClass(E);if(X&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),o.default(document).off(re),o.default(this._element).removeClass(w),o.default(this._element).off(Re),o.default(this._dialog).off(Ze),X){var Z=N.getTransitionDurationFromElement(this._element);o.default(this._element).one(N.TRANSITION_END,function(ae){return T._hideModal(ae)}).emulateTransitionEnd(Z)}else this._hideModal()}}},H.dispose=function(){[window,this._element,this._dialog].forEach(function(b){return o.default(b).off(pt)}),o.default(document).off(re),o.default.removeData(this._element,gn),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},H.handleUpdate=function(){this._adjustDialog()},H._getConfig=function(b){return b=d({},Vn,b),N.typeCheckConfig(Pt,b,Lt),b},H._triggerBackdropTransition=function(){var b=this,T=o.default.Event(V);if(o.default(this._element).trigger(T),!T.isDefaultPrevented()){var M=this._element.scrollHeight>document.documentElement.clientHeight;M||(this._element.style.overflowY="hidden"),this._element.classList.add(F);var X=N.getTransitionDurationFromElement(this._dialog);o.default(this._element).off(N.TRANSITION_END),o.default(this._element).one(N.TRANSITION_END,function(){b._element.classList.remove(F),M||o.default(b._element).one(N.TRANSITION_END,function(){b._element.style.overflowY=""}).emulateTransitionEnd(b._element,X)}).emulateTransitionEnd(X),this._element.focus()}},H._showElement=function(b){var T=this,M=o.default(this._element).hasClass(E),X=this._dialog?this._dialog.querySelector(Ne):null;(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)&&document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),o.default(this._dialog).hasClass(h)&&X?X.scrollTop=0:this._element.scrollTop=0,M&&N.reflow(this._element),o.default(this._element).addClass(w),this._config.focus&&this._enforceFocus();var Z=o.default.Event(Y,{relatedTarget:b}),ae=function(){T._config.focus&&T._element.focus(),T._isTransitioning=!1,o.default(T._element).trigger(Z)};if(M){var De=N.getTransitionDurationFromElement(this._dialog);o.default(this._dialog).one(N.TRANSITION_END,ae).emulateTransitionEnd(De)}else ae()},H._enforceFocus=function(){var b=this;o.default(document).off(re).on(re,function(T){document!==T.target&&b._element!==T.target&&o.default(b._element).has(T.target).length===0&&b._element.focus()})},H._setEscapeEvent=function(){var b=this;this._isShown?o.default(this._element).on($e,function(T){b._config.keyboard&&T.which===c?(T.preventDefault(),b.hide()):!b._config.keyboard&&T.which===c&&b._triggerBackdropTransition()}):this._isShown||o.default(this._element).off($e)},H._setResizeEvent=function(){var b=this;this._isShown?o.default(window).on(Se,function(T){return b.handleUpdate(T)}):o.default(window).off(Se)},H._hideModal=function(){var b=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(function(){o.default(document.body).removeClass(C),b._resetAdjustments(),b._resetScrollbar(),o.default(b._element).trigger(G)})},H._removeBackdrop=function(){this._backdrop&&(o.default(this._backdrop).remove(),this._backdrop=null)},H._showBackdrop=function(b){var T=this,M=o.default(this._element).hasClass(E)?E:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=_,M&&this._backdrop.classList.add(M),o.default(this._backdrop).appendTo(document.body),o.default(this._element).on(Re,function(De){if(T._ignoreBackdropClick){T._ignoreBackdropClick=!1;return}De.target===De.currentTarget&&(T._config.backdrop==="static"?T._triggerBackdropTransition():T.hide())}),M&&N.reflow(this._backdrop),o.default(this._backdrop).addClass(w),!b)return;if(!M){b();return}var X=N.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(N.TRANSITION_END,b).emulateTransitionEnd(X)}else if(!this._isShown&&this._backdrop){o.default(this._backdrop).removeClass(w);var Z=function(){T._removeBackdrop(),b&&b()};if(o.default(this._element).hasClass(E)){var ae=N.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(N.TRANSITION_END,Z).emulateTransitionEnd(ae)}else Z()}else b&&b()},H._adjustDialog=function(){var b=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&b&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!b&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},H._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},H._checkScrollbar=function(){var b=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(b.left+b.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},H._setScrollbar=function(){var b=this;if(this._isBodyOverflowing){var T=[].slice.call(document.querySelectorAll(Qe)),M=[].slice.call(document.querySelectorAll(Tn));o.default(T).each(function(ae,De){var Ue=De.style.paddingRight,qe=o.default(De).css("padding-right");o.default(De).data("padding-right",Ue).css("padding-right",parseFloat(qe)+b._scrollbarWidth+"px")}),o.default(M).each(function(ae,De){var Ue=De.style.marginRight,qe=o.default(De).css("margin-right");o.default(De).data("margin-right",Ue).css("margin-right",parseFloat(qe)-b._scrollbarWidth+"px")});var X=document.body.style.paddingRight,Z=o.default(document.body).css("padding-right");o.default(document.body).data("padding-right",X).css("padding-right",parseFloat(Z)+this._scrollbarWidth+"px")}o.default(document.body).addClass(C)},H._resetScrollbar=function(){var b=[].slice.call(document.querySelectorAll(Qe));o.default(b).each(function(X,Z){var ae=o.default(Z).data("padding-right");o.default(Z).removeData("padding-right"),Z.style.paddingRight=ae||""});var T=[].slice.call(document.querySelectorAll(""+Tn));o.default(T).each(function(X,Z){var ae=o.default(Z).data("margin-right");typeof ae<"u"&&o.default(Z).css("margin-right",ae).removeData("margin-right")});var M=o.default(document.body).data("padding-right");o.default(document.body).removeData("padding-right"),document.body.style.paddingRight=M||""},H._getScrollbarWidth=function(){var b=document.createElement("div");b.className=g,document.body.appendChild(b);var T=b.getBoundingClientRect().width-b.clientWidth;return document.body.removeChild(b),T},z._jQueryInterface=function(b,T){return this.each(function(){var M=o.default(this).data(gn),X=d({},Vn,o.default(this).data(),typeof b=="object"&&b?b:{});if(M||(M=new z(this,X),o.default(this).data(gn,M)),typeof b=="string"){if(typeof M[b]>"u")throw new TypeError('No method named "'+b+'"');M[b](T)}else X.show&&M.show(T)})},f(z,null,[{key:"VERSION",get:function(){return zi}},{key:"Default",get:function(){return Vn}}]),z})();o.default(document).on(Mt,mn,function(z){var H=this,R,b=N.getSelectorFromElement(this);b&&(R=document.querySelector(b));var T=o.default(R).data(gn)?"toggle":d({},o.default(R).data(),o.default(this).data());(this.tagName==="A"||this.tagName==="AREA")&&z.preventDefault();var M=o.default(R).one(ee,function(X){X.isDefaultPrevented()||M.one(G,function(){o.default(H).is(":visible")&&H.focus()})});jt._jQueryInterface.call(o.default(R),T,this)}),o.default.fn[Pt]=jt._jQueryInterface,o.default.fn[Pt].Constructor=jt,o.default.fn[Pt].noConflict=function(){return o.default.fn[Pt]=cr,jt._jQueryInterface};var Rt=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],tn=/^aria-[\w-]*$/i,nn={"*":["class","dir","id","lang","role",tn],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},vt=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Ci=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Bt(z,H){var R=z.nodeName.toLowerCase();if(H.indexOf(R)!==-1)return Rt.indexOf(R)!==-1?!!(vt.test(z.nodeValue)||Ci.test(z.nodeValue)):!0;for(var b=H.filter(function(X){return X instanceof RegExp}),T=0,M=b.length;T<M;T++)if(b[T].test(R))return!0;return!1}function Nt(z,H,R){if(z.length===0)return z;if(R&&typeof R=="function")return R(z);for(var b=new window.DOMParser,T=b.parseFromString(z,"text/html"),M=Object.keys(H),X=[].slice.call(T.body.querySelectorAll("*")),Z=function(ut,on){var Wt=X[ut],ii=Wt.nodeName.toLowerCase();if(M.indexOf(Wt.nodeName.toLowerCase())===-1)return Wt.parentNode.removeChild(Wt),"continue";var gr=[].slice.call(Wt.attributes),ua=[].concat(H["*"]||[],H[ii]||[]);gr.forEach(function(Ar){Bt(Ar,ua)||Wt.removeAttribute(Ar.nodeName)})},ae=0,De=X.length;ae<De;ae++)var Ue=Z(ae);return T.body.innerHTML}var vn="tooltip",fr="4.6.2",Jn="bs.tooltip",Me="."+Jn,Zn=o.default.fn[vn],_t="bs-tooltip",An=new RegExp("(^|\\s)"+_t+"\\S+","g"),dr=["sanitize","whiteList","sanitizeFn"],Wn="fade",On="show",Dt="show",Un="out",rn=".tooltip-inner",Yi=".arrow",Vt="hover",kn="focus",ei="click",Ei="manual",hr={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},ti={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:nn,popperConfig:null},Si={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Di={HIDE:"hide"+Me,HIDDEN:"hidden"+Me,SHOW:"show"+Me,SHOWN:"shown"+Me,INSERTED:"inserted"+Me,CLICK:"click"+Me,FOCUSIN:"focusin"+Me,FOCUSOUT:"focusout"+Me,MOUSEENTER:"mouseenter"+Me,MOUSELEAVE:"mouseleave"+Me},_n=(function(){function z(R,b){if(typeof l.default>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=R,this.config=this._getConfig(b),this.tip=null,this._setListeners()}var H=z.prototype;return H.enable=function(){this._isEnabled=!0},H.disable=function(){this._isEnabled=!1},H.toggleEnabled=function(){this._isEnabled=!this._isEnabled},H.toggle=function(b){if(this._isEnabled)if(b){var T=this.constructor.DATA_KEY,M=o.default(b.currentTarget).data(T);M||(M=new this.constructor(b.currentTarget,this._getDelegateConfig()),o.default(b.currentTarget).data(T,M)),M._activeTrigger.click=!M._activeTrigger.click,M._isWithActiveTrigger()?M._enter(null,M):M._leave(null,M)}else{if(o.default(this.getTipElement()).hasClass(On)){this._leave(null,this);return}this._enter(null,this)}},H.dispose=function(){clearTimeout(this._timeout),o.default.removeData(this.element,this.constructor.DATA_KEY),o.default(this.element).off(this.constructor.EVENT_KEY),o.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&o.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},H.show=function(){var b=this;if(o.default(this.element).css("display")==="none")throw new Error("Please use show on visible elements");var T=o.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){o.default(this.element).trigger(T);var M=N.findShadowRoot(this.element),X=o.default.contains(M!==null?M:this.element.ownerDocument.documentElement,this.element);if(T.isDefaultPrevented()||!X)return;var Z=this.getTipElement(),ae=N.getUID(this.constructor.NAME);Z.setAttribute("id",ae),this.element.setAttribute("aria-describedby",ae),this.setContent(),this.config.animation&&o.default(Z).addClass(Wn);var De=typeof this.config.placement=="function"?this.config.placement.call(this,Z,this.element):this.config.placement,Ue=this._getAttachment(De);this.addAttachmentClass(Ue);var qe=this._getContainer();o.default(Z).data(this.constructor.DATA_KEY,this),o.default.contains(this.element.ownerDocument.documentElement,this.tip)||o.default(Z).appendTo(qe),o.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new l.default(this.element,Z,this._getPopperConfig(Ue)),o.default(Z).addClass(On),o.default(Z).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&o.default(document.body).children().on("mouseover",null,o.default.noop);var ut=function(){b.config.animation&&b._fixTransition();var ii=b._hoverState;b._hoverState=null,o.default(b.element).trigger(b.constructor.Event.SHOWN),ii===Un&&b._leave(null,b)};if(o.default(this.tip).hasClass(Wn)){var on=N.getTransitionDurationFromElement(this.tip);o.default(this.tip).one(N.TRANSITION_END,ut).emulateTransitionEnd(on)}else ut()}},H.hide=function(b){var T=this,M=this.getTipElement(),X=o.default.Event(this.constructor.Event.HIDE),Z=function(){T._hoverState!==Dt&&M.parentNode&&M.parentNode.removeChild(M),T._cleanTipClass(),T.element.removeAttribute("aria-describedby"),o.default(T.element).trigger(T.constructor.Event.HIDDEN),T._popper!==null&&T._popper.destroy(),b&&b()};if(o.default(this.element).trigger(X),!X.isDefaultPrevented()){if(o.default(M).removeClass(On),"ontouchstart"in document.documentElement&&o.default(document.body).children().off("mouseover",null,o.default.noop),this._activeTrigger[ei]=!1,this._activeTrigger[kn]=!1,this._activeTrigger[Vt]=!1,o.default(this.tip).hasClass(Wn)){var ae=N.getTransitionDurationFromElement(M);o.default(M).one(N.TRANSITION_END,Z).emulateTransitionEnd(ae)}else Z();this._hoverState=""}},H.update=function(){this._popper!==null&&this._popper.scheduleUpdate()},H.isWithContent=function(){return!!this.getTitle()},H.addAttachmentClass=function(b){o.default(this.getTipElement()).addClass(_t+"-"+b)},H.getTipElement=function(){return this.tip=this.tip||o.default(this.config.template)[0],this.tip},H.setContent=function(){var b=this.getTipElement();this.setElementContent(o.default(b.querySelectorAll(rn)),this.getTitle()),o.default(b).removeClass(Wn+" "+On)},H.setElementContent=function(b,T){if(typeof T=="object"&&(T.nodeType||T.jquery)){this.config.html?o.default(T).parent().is(b)||b.empty().append(T):b.text(o.default(T).text());return}this.config.html?(this.config.sanitize&&(T=Nt(T,this.config.whiteList,this.config.sanitizeFn)),b.html(T)):b.text(T)},H.getTitle=function(){var b=this.element.getAttribute("data-original-title");return b||(b=typeof this.config.title=="function"?this.config.title.call(this.element):this.config.title),b},H._getPopperConfig=function(b){var T=this,M={placement:b,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Yi},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(Z){Z.originalPlacement!==Z.placement&&T._handlePopperPlacementChange(Z)},onUpdate:function(Z){return T._handlePopperPlacementChange(Z)}};return d({},M,this.config.popperConfig)},H._getOffset=function(){var b=this,T={};return typeof this.config.offset=="function"?T.fn=function(M){return M.offsets=d({},M.offsets,b.config.offset(M.offsets,b.element)),M}:T.offset=this.config.offset,T},H._getContainer=function(){return this.config.container===!1?document.body:N.isElement(this.config.container)?o.default(this.config.container):o.default(document).find(this.config.container)},H._getAttachment=function(b){return hr[b.toUpperCase()]},H._setListeners=function(){var b=this,T=this.config.trigger.split(" ");T.forEach(function(M){if(M==="click")o.default(b.element).on(b.constructor.Event.CLICK,b.config.selector,function(ae){return b.toggle(ae)});else if(M!==Ei){var X=M===Vt?b.constructor.Event.MOUSEENTER:b.constructor.Event.FOCUSIN,Z=M===Vt?b.constructor.Event.MOUSELEAVE:b.constructor.Event.FOCUSOUT;o.default(b.element).on(X,b.config.selector,function(ae){return b._enter(ae)}).on(Z,b.config.selector,function(ae){return b._leave(ae)})}}),this._hideModalHandler=function(){b.element&&b.hide()},o.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=d({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},H._fixTitle=function(){var b=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||b!=="string")&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},H._enter=function(b,T){var M=this.constructor.DATA_KEY;if(T=T||o.default(b.currentTarget).data(M),T||(T=new this.constructor(b.currentTarget,this._getDelegateConfig()),o.default(b.currentTarget).data(M,T)),b&&(T._activeTrigger[b.type==="focusin"?kn:Vt]=!0),o.default(T.getTipElement()).hasClass(On)||T._hoverState===Dt){T._hoverState=Dt;return}if(clearTimeout(T._timeout),T._hoverState=Dt,!T.config.delay||!T.config.delay.show){T.show();return}T._timeout=setTimeout(function(){T._hoverState===Dt&&T.show()},T.config.delay.show)},H._leave=function(b,T){var M=this.constructor.DATA_KEY;if(T=T||o.default(b.currentTarget).data(M),T||(T=new this.constructor(b.currentTarget,this._getDelegateConfig()),o.default(b.currentTarget).data(M,T)),b&&(T._activeTrigger[b.type==="focusout"?kn:Vt]=!1),!T._isWithActiveTrigger()){if(clearTimeout(T._timeout),T._hoverState=Un,!T.config.delay||!T.config.delay.hide){T.hide();return}T._timeout=setTimeout(function(){T._hoverState===Un&&T.hide()},T.config.delay.hide)}},H._isWithActiveTrigger=function(){for(var b in this._activeTrigger)if(this._activeTrigger[b])return!0;return!1},H._getConfig=function(b){var T=o.default(this.element).data();return Object.keys(T).forEach(function(M){dr.indexOf(M)!==-1&&delete T[M]}),b=d({},this.constructor.Default,T,typeof b=="object"&&b?b:{}),typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),typeof b.title=="number"&&(b.title=b.title.toString()),typeof b.content=="number"&&(b.content=b.content.toString()),N.typeCheckConfig(vn,b,this.constructor.DefaultType),b.sanitize&&(b.template=Nt(b.template,b.whiteList,b.sanitizeFn)),b},H._getDelegateConfig=function(){var b={};if(this.config)for(var T in this.config)this.constructor.Default[T]!==this.config[T]&&(b[T]=this.config[T]);return b},H._cleanTipClass=function(){var b=o.default(this.getTipElement()),T=b.attr("class").match(An);T!==null&&T.length&&b.removeClass(T.join(""))},H._handlePopperPlacementChange=function(b){this.tip=b.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(b.placement))},H._fixTransition=function(){var b=this.getTipElement(),T=this.config.animation;b.getAttribute("x-placement")===null&&(o.default(b).removeClass(Wn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=T)},z._jQueryInterface=function(b){return this.each(function(){var T=o.default(this),M=T.data(Jn),X=typeof b=="object"&&b;if(!(!M&&/dispose|hide/.test(b))&&(M||(M=new z(this,X),T.data(Jn,M)),typeof b=="string")){if(typeof M[b]>"u")throw new TypeError('No method named "'+b+'"');M[b]()}})},f(z,null,[{key:"VERSION",get:function(){return fr}},{key:"Default",get:function(){return ti}},{key:"NAME",get:function(){return vn}},{key:"DATA_KEY",get:function(){return Jn}},{key:"Event",get:function(){return Di}},{key:"EVENT_KEY",get:function(){return Me}},{key:"DefaultType",get:function(){return Si}}]),z})();o.default.fn[vn]=_n._jQueryInterface,o.default.fn[vn].Constructor=_n,o.default.fn[vn].noConflict=function(){return o.default.fn[vn]=Zn,_n._jQueryInterface};var an="popover",Ki="4.6.2",P="bs.popover",j="."+P,q=o.default.fn[an],K="bs-popover",te=new RegExp("(^|\\s)"+K+"\\S+","g"),se="fade",ce="show",be=".popover-header",fe=".popover-body",Ie=d({},_n.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ee=d({},_n.DefaultType,{content:"(string|element|function)"}),Ae={HIDE:"hide"+j,HIDDEN:"hidden"+j,SHOW:"show"+j,SHOWN:"shown"+j,INSERTED:"inserted"+j,CLICK:"click"+j,FOCUSIN:"focusin"+j,FOCUSOUT:"focusout"+j,MOUSEENTER:"mouseenter"+j,MOUSELEAVE:"mouseleave"+j},Pe=(function(z){p(H,z);function H(){return z.apply(this,arguments)||this}var R=H.prototype;return R.isWithContent=function(){return this.getTitle()||this._getContent()},R.addAttachmentClass=function(T){o.default(this.getTipElement()).addClass(K+"-"+T)},R.getTipElement=function(){return this.tip=this.tip||o.default(this.config.template)[0],this.tip},R.setContent=function(){var T=o.default(this.getTipElement());this.setElementContent(T.find(be),this.getTitle());var M=this._getContent();typeof M=="function"&&(M=M.call(this.element)),this.setElementContent(T.find(fe),M),T.removeClass(se+" "+ce)},R._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},R._cleanTipClass=function(){var T=o.default(this.getTipElement()),M=T.attr("class").match(te);M!==null&&M.length>0&&T.removeClass(M.join(""))},H._jQueryInterface=function(T){return this.each(function(){var M=o.default(this).data(P),X=typeof T=="object"?T:null;if(!(!M&&/dispose|hide/.test(T))&&(M||(M=new H(this,X),o.default(this).data(P,M)),typeof T=="string")){if(typeof M[T]>"u")throw new TypeError('No method named "'+T+'"');M[T]()}})},f(H,null,[{key:"VERSION",get:function(){return Ki}},{key:"Default",get:function(){return Ie}},{key:"NAME",get:function(){return an}},{key:"DATA_KEY",get:function(){return P}},{key:"Event",get:function(){return Ae}},{key:"EVENT_KEY",get:function(){return j}},{key:"DefaultType",get:function(){return Ee}}]),H})(_n);o.default.fn[an]=Pe._jQueryInterface,o.default.fn[an].Constructor=Pe,o.default.fn[an].noConflict=function(){return o.default.fn[an]=q,Pe._jQueryInterface};var ye="scrollspy",Ke="4.6.2",at="bs.scrollspy",nt="."+at,bt=".data-api",Ft=o.default.fn[ye],$n="dropdown-item",Je="active",Or="activate"+nt,kr="scroll"+nt,$r="load"+nt+bt,Pr="offset",mr="position",Mr='[data-spy="scroll"]',vr=".nav, .list-group",pr=".nav-link",Ir=".nav-item",_r=".list-group-item",Lr=".dropdown",Rr=".dropdown-item",Nr=".dropdown-toggle",br={offset:10,method:"auto",target:""},Fr={offset:"number",method:"string",target:"(string|element)"},wi=(function(){function z(R,b){var T=this;this._element=R,this._scrollElement=R.tagName==="BODY"?window:R,this._config=this._getConfig(b),this._selector=this._config.target+" "+pr+","+(this._config.target+" "+_r+",")+(this._config.target+" "+Rr),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,o.default(this._scrollElement).on(kr,function(M){return T._process(M)}),this.refresh(),this._process()}var H=z.prototype;return H.refresh=function(){var b=this,T=this._scrollElement===this._scrollElement.window?Pr:mr,M=this._config.method==="auto"?T:this._config.method,X=M===mr?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var Z=[].slice.call(document.querySelectorAll(this._selector));Z.map(function(ae){var De,Ue=N.getSelectorFromElement(ae);if(Ue&&(De=document.querySelector(Ue)),De){var qe=De.getBoundingClientRect();if(qe.width||qe.height)return[o.default(De)[M]().top+X,Ue]}return null}).filter(Boolean).sort(function(ae,De){return ae[0]-De[0]}).forEach(function(ae){b._offsets.push(ae[0]),b._targets.push(ae[1])})},H.dispose=function(){o.default.removeData(this._element,at),o.default(this._scrollElement).off(nt),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},H._getConfig=function(b){if(b=d({},br,typeof b=="object"&&b?b:{}),typeof b.target!="string"&&N.isElement(b.target)){var T=o.default(b.target).attr("id");T||(T=N.getUID(ye),o.default(b.target).attr("id",T)),b.target="#"+T}return N.typeCheckConfig(ye,b,Fr),b},H._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},H._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},H._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},H._process=function(){var b=this._getScrollTop()+this._config.offset,T=this._getScrollHeight(),M=this._config.offset+T-this._getOffsetHeight();if(this._scrollHeight!==T&&this.refresh(),b>=M){var X=this._targets[this._targets.length-1];this._activeTarget!==X&&this._activate(X);return}if(this._activeTarget&&b<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null,this._clear();return}for(var Z=this._offsets.length;Z--;){var ae=this._activeTarget!==this._targets[Z]&&b>=this._offsets[Z]&&(typeof this._offsets[Z+1]>"u"||b<this._offsets[Z+1]);ae&&this._activate(this._targets[Z])}},H._activate=function(b){this._activeTarget=b,this._clear();var T=this._selector.split(",").map(function(X){return X+'[data-target="'+b+'"],'+X+'[href="'+b+'"]'}),M=o.default([].slice.call(document.querySelectorAll(T.join(","))));M.hasClass($n)?(M.closest(Lr).find(Nr).addClass(Je),M.addClass(Je)):(M.addClass(Je),M.parents(vr).prev(pr+", "+_r).addClass(Je),M.parents(vr).prev(Ir).children(pr).addClass(Je)),o.default(this._scrollElement).trigger(Or,{relatedTarget:b})},H._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(b){return b.classList.contains(Je)}).forEach(function(b){return b.classList.remove(Je)})},z._jQueryInterface=function(b){return this.each(function(){var T=o.default(this).data(at),M=typeof b=="object"&&b;if(T||(T=new z(this,M),o.default(this).data(at,T)),typeof b=="string"){if(typeof T[b]>"u")throw new TypeError('No method named "'+b+'"');T[b]()}})},f(z,null,[{key:"VERSION",get:function(){return Ke}},{key:"Default",get:function(){return br}}]),z})();o.default(window).on($r,function(){for(var z=[].slice.call(document.querySelectorAll(Mr)),H=z.length,R=H;R--;){var b=o.default(z[R]);wi._jQueryInterface.call(b,b.data())}}),o.default.fn[ye]=wi._jQueryInterface,o.default.fn[ye].Constructor=wi,o.default.fn[ye].noConflict=function(){return o.default.fn[ye]=Ft,wi._jQueryInterface};var Ti="tab",Hr="4.6.2",Xi="bs.tab",Ai="."+Xi,jr=".data-api",Br=o.default.fn[Ti],Vr="dropdown-menu",Oi="active",Wr="disabled",yr="fade",xr="show",Ur="hide"+Ai,qr="hidden"+Ai,zr="show"+Ai,Yr="shown"+Ai,Kr="click"+Ai+jr,Xr=".dropdown",Gr=".nav, .list-group",Cr=".active",Er="> li > .active",Qr='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Jr=".dropdown-toggle",Zr="> .dropdown-menu .active",ki=(function(){function z(R){this._element=R}var H=z.prototype;return H.show=function(){var b=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&o.default(this._element).hasClass(Oi)||o.default(this._element).hasClass(Wr)||this._element.hasAttribute("disabled"))){var T,M,X=o.default(this._element).closest(Gr)[0],Z=N.getSelectorFromElement(this._element);if(X){var ae=X.nodeName==="UL"||X.nodeName==="OL"?Er:Cr;M=o.default.makeArray(o.default(X).find(ae)),M=M[M.length-1]}var De=o.default.Event(Ur,{relatedTarget:this._element}),Ue=o.default.Event(zr,{relatedTarget:M});if(M&&o.default(M).trigger(De),o.default(this._element).trigger(Ue),!(Ue.isDefaultPrevented()||De.isDefaultPrevented())){Z&&(T=document.querySelector(Z)),this._activate(this._element,X);var qe=function(){var on=o.default.Event(qr,{relatedTarget:b._element}),Wt=o.default.Event(Yr,{relatedTarget:M});o.default(M).trigger(on),o.default(b._element).trigger(Wt)};T?this._activate(T,T.parentNode,qe):qe()}}},H.dispose=function(){o.default.removeData(this._element,Xi),this._element=null},H._activate=function(b,T,M){var X=this,Z=T&&(T.nodeName==="UL"||T.nodeName==="OL")?o.default(T).find(Er):o.default(T).children(Cr),ae=Z[0],De=M&&ae&&o.default(ae).hasClass(yr),Ue=function(){return X._transitionComplete(b,ae,M)};if(ae&&De){var qe=N.getTransitionDurationFromElement(ae);o.default(ae).removeClass(xr).one(N.TRANSITION_END,Ue).emulateTransitionEnd(qe)}else Ue()},H._transitionComplete=function(b,T,M){if(T){o.default(T).removeClass(Oi);var X=o.default(T.parentNode).find(Zr)[0];X&&o.default(X).removeClass(Oi),T.getAttribute("role")==="tab"&&T.setAttribute("aria-selected",!1)}o.default(b).addClass(Oi),b.getAttribute("role")==="tab"&&b.setAttribute("aria-selected",!0),N.reflow(b),b.classList.contains(yr)&&b.classList.add(xr);var Z=b.parentNode;if(Z&&Z.nodeName==="LI"&&(Z=Z.parentNode),Z&&o.default(Z).hasClass(Vr)){var ae=o.default(b).closest(Xr)[0];if(ae){var De=[].slice.call(ae.querySelectorAll(Jr));o.default(De).addClass(Oi)}b.setAttribute("aria-expanded",!0)}M&&M()},z._jQueryInterface=function(b){return this.each(function(){var T=o.default(this),M=T.data(Xi);if(M||(M=new z(this),T.data(Xi,M)),typeof b=="string"){if(typeof M[b]>"u")throw new TypeError('No method named "'+b+'"');M[b]()}})},f(z,null,[{key:"VERSION",get:function(){return Hr}}]),z})();o.default(document).on(Kr,Qr,function(z){z.preventDefault(),ki._jQueryInterface.call(o.default(this),"show")}),o.default.fn[Ti]=ki._jQueryInterface,o.default.fn[Ti].Constructor=ki,o.default.fn[Ti].noConflict=function(){return o.default.fn[Ti]=Br,ki._jQueryInterface};var ni="toast",ea="4.6.2",Gi="bs.toast",$i="."+Gi,ta=o.default.fn[ni],na="fade",Sr="hide",Pi="show",Dr="showing",wr="click.dismiss"+$i,ia="hide"+$i,ra="hidden"+$i,aa="show"+$i,oa="shown"+$i,sa='[data-dismiss="toast"]',Tr={animation:!0,autohide:!0,delay:500},la={animation:"boolean",autohide:"boolean",delay:"number"},Qi=(function(){function z(R,b){this._element=R,this._config=this._getConfig(b),this._timeout=null,this._setListeners()}var H=z.prototype;return H.show=function(){var b=this,T=o.default.Event(aa);if(o.default(this._element).trigger(T),!T.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add(na);var M=function(){b._element.classList.remove(Dr),b._element.classList.add(Pi),o.default(b._element).trigger(oa),b._config.autohide&&(b._timeout=setTimeout(function(){b.hide()},b._config.delay))};if(this._element.classList.remove(Sr),N.reflow(this._element),this._element.classList.add(Dr),this._config.animation){var X=N.getTransitionDurationFromElement(this._element);o.default(this._element).one(N.TRANSITION_END,M).emulateTransitionEnd(X)}else M()}},H.hide=function(){if(this._element.classList.contains(Pi)){var b=o.default.Event(ia);o.default(this._element).trigger(b),!b.isDefaultPrevented()&&this._close()}},H.dispose=function(){this._clearTimeout(),this._element.classList.contains(Pi)&&this._element.classList.remove(Pi),o.default(this._element).off(wr),o.default.removeData(this._element,Gi),this._element=null,this._config=null},H._getConfig=function(b){return b=d({},Tr,o.default(this._element).data(),typeof b=="object"&&b?b:{}),N.typeCheckConfig(ni,b,this.constructor.DefaultType),b},H._setListeners=function(){var b=this;o.default(this._element).on(wr,sa,function(){return b.hide()})},H._close=function(){var b=this,T=function(){b._element.classList.add(Sr),o.default(b._element).trigger(ra)};if(this._element.classList.remove(Pi),this._config.animation){var M=N.getTransitionDurationFromElement(this._element);o.default(this._element).one(N.TRANSITION_END,T).emulateTransitionEnd(M)}else T()},H._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},z._jQueryInterface=function(b){return this.each(function(){var T=o.default(this),M=T.data(Gi),X=typeof b=="object"&&b;if(M||(M=new z(this,X),T.data(Gi,M)),typeof b=="string"){if(typeof M[b]>"u")throw new TypeError('No method named "'+b+'"');M[b](this)}})},f(z,null,[{key:"VERSION",get:function(){return ea}},{key:"DefaultType",get:function(){return la}},{key:"Default",get:function(){return Tr}}]),z})();o.default.fn[ni]=Qi._jQueryInterface,o.default.fn[ni].Constructor=Qi,o.default.fn[ni].noConflict=function(){return o.default.fn[ni]=ta,Qi._jQueryInterface},e.Alert=je,e.Button=ot,e.Carousel=At,e.Collapse=jn,e.Dropdown=en,e.Modal=jt,e.Popover=Pe,e.Scrollspy=wi,e.Tab=ki,e.Toast=Qi,e.Tooltip=_n,e.Util=N,Object.defineProperty(e,"__esModule",{value:!0})}))})(bootstrap$1,bootstrap$1.exports)),bootstrap$1.exports}requireBootstrap();(function(){const htmx={onLoad:null,process:null,on:null,off:null,trigger:null,ajax:null,find:null,findAll:null,closest:null,values:function(t,n){return getInputValues(t,n||"post").values},remove:null,addClass:null,removeClass:null,toggleClass:null,takeClass:null,swap:null,defineExtension:null,removeExtension:null,logAll:null,logNone:null,logger:null,config:{historyEnabled:!0,historyCacheSize:10,refreshOnHistoryMiss:!1,defaultSwapStyle:"innerHTML",defaultSwapDelay:0,defaultSettleDelay:20,includeIndicatorStyles:!0,indicatorClass:"htmx-indicator",requestClass:"htmx-request",addedClass:"htmx-added",settlingClass:"htmx-settling",swappingClass:"htmx-swapping",allowEval:!0,allowScriptTags:!0,inlineScriptNonce:"",inlineStyleNonce:"",attributesToSettle:["class","style","width","height"],withCredentials:!1,timeout:0,wsReconnectDelay:"full-jitter",wsBinaryType:"blob",disableSelector:"[hx-disable], [data-hx-disable]",scrollBehavior:"instant",defaultFocusScroll:!1,getCacheBusterParam:!1,globalViewTransitions:!1,methodsThatUseUrlParams:["get","delete"],selfRequestsOnly:!0,ignoreTitle:!1,scrollIntoViewOnBoost:!0,triggerSpecsCache:null,disableInheritance:!1,responseHandling:[{code:"204",swap:!1},{code:"[23]..",swap:!0},{code:"[45]..",swap:!1,error:!0}],allowNestedOobSwaps:!0,historyRestoreAsHxRequest:!0,reportValidityOfForms:!1},parseInterval:null,location,_:null,version:"2.0.8"};htmx.onLoad=onLoadHelper,htmx.process=processNode,htmx.on=addEventListenerImpl,htmx.off=removeEventListenerImpl,htmx.trigger=triggerEvent,htmx.ajax=ajaxHelper,htmx.find=find,htmx.findAll=findAll,htmx.closest=closest,htmx.remove=removeElement,htmx.addClass=addClassToElement,htmx.removeClass=removeClassFromElement,htmx.toggleClass=toggleClassOnElement,htmx.takeClass=takeClassForElement,htmx.swap=swap,htmx.defineExtension=defineExtension,htmx.removeExtension=removeExtension,htmx.logAll=logAll,htmx.logNone=logNone,htmx.parseInterval=parseInterval,htmx._=internalEval;const internalAPI={addTriggerHandler,bodyContains,canAccessLocalStorage,findThisElement,filterValues,swap,hasAttribute,getAttributeValue,getClosestAttributeValue,getClosestMatch,getExpressionVars,getHeaders,getInputValues,getInternalData,getSwapSpecification,getTriggerSpecs,getTarget,makeFragment,mergeObjects,makeSettleInfo,oobSwap,querySelectorExt,settleImmediately,shouldCancel,triggerEvent,triggerErrorEvent,withExtensions},VERBS=["get","post","put","delete","patch"],VERB_SELECTOR=VERBS.map(function(t){return"[hx-"+t+"], [data-hx-"+t+"]"}).join(", ");function parseInterval(t){if(t==null)return;let n=NaN;return t.slice(-2)=="ms"?n=parseFloat(t.slice(0,-2)):t.slice(-1)=="s"?n=parseFloat(t.slice(0,-1))*1e3:t.slice(-1)=="m"?n=parseFloat(t.slice(0,-1))*1e3*60:n=parseFloat(t),isNaN(n)?void 0:n}function getRawAttribute(t,n){return t instanceof Element&&t.getAttribute(n)}function hasAttribute(t,n){return!!t.hasAttribute&&(t.hasAttribute(n)||t.hasAttribute("data-"+n))}function getAttributeValue(t,n){return getRawAttribute(t,n)||getRawAttribute(t,"data-"+n)}function parentElt(t){const n=t.parentElement;return!n&&t.parentNode instanceof ShadowRoot?t.parentNode:n}function getDocument(){return document}function getRootNode(t,n){return t.getRootNode?t.getRootNode({composed:n}):getDocument()}function getClosestMatch(t,n){for(;t&&!n(t);)t=parentElt(t);return t||null}function getAttributeValueWithDisinheritance(t,n,e){const r=getAttributeValue(n,e),a=getAttributeValue(n,"hx-disinherit");var s=getAttributeValue(n,"hx-inherit");if(t!==n){if(htmx.config.disableInheritance)return s&&(s==="*"||s.split(" ").indexOf(e)>=0)?r:null;if(a&&(a==="*"||a.split(" ").indexOf(e)>=0))return"unset"}return r}function getClosestAttributeValue(t,n){let e=null;if(getClosestMatch(t,function(r){return!!(e=getAttributeValueWithDisinheritance(t,asElement(r),n))}),e!=="unset")return e}function matches(t,n){return t instanceof Element&&t.matches(n)}function getStartTag(t){const e=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i.exec(t);return e?e[1].toLowerCase():""}function parseHTML(t){return"parseHTMLUnsafe"in Document?Document.parseHTMLUnsafe(t):new DOMParser().parseFromString(t,"text/html")}function takeChildrenFor(t,n){for(;n.childNodes.length>0;)t.append(n.childNodes[0])}function duplicateScript(t){const n=getDocument().createElement("script");return forEach(t.attributes,function(e){n.setAttribute(e.name,e.value)}),n.textContent=t.textContent,n.async=!1,htmx.config.inlineScriptNonce&&(n.nonce=htmx.config.inlineScriptNonce),n}function isJavaScriptScriptNode(t){return t.matches("script")&&(t.type==="text/javascript"||t.type==="module"||t.type==="")}function normalizeScriptTags(t){Array.from(t.querySelectorAll("script")).forEach(n=>{if(isJavaScriptScriptNode(n)){const e=duplicateScript(n),r=n.parentNode;try{r.insertBefore(e,n)}catch(a){logError(a)}finally{n.remove()}}})}function makeFragment(t){const n=t.replace(/<head(\s[^>]*)?>[\s\S]*?<\/head>/i,""),e=getStartTag(n);let r;if(e==="html"){r=new DocumentFragment;const s=parseHTML(t);takeChildrenFor(r,s.body),r.title=s.title}else if(e==="body"){r=new DocumentFragment;const s=parseHTML(n);takeChildrenFor(r,s.body),r.title=s.title}else{const s=parseHTML('<body><template class="internal-htmx-wrapper">'+n+"</template></body>");r=s.querySelector("template").content,r.title=s.title;var a=r.querySelector("title");a&&a.parentNode===r&&(a.remove(),r.title=a.innerText)}return r&&(htmx.config.allowScriptTags?normalizeScriptTags(r):r.querySelectorAll("script").forEach(s=>s.remove())),r}function maybeCall(t){t&&t()}function isType(t,n){return Object.prototype.toString.call(t)==="[object "+n+"]"}function isFunction(t){return typeof t=="function"}function isRawObject(t){return isType(t,"Object")}function getInternalData(t){const n="htmx-internal-data";let e=t[n];return e||(e=t[n]={}),e}function toArray(t){const n=[];if(t)for(let e=0;e<t.length;e++)n.push(t[e]);return n}function forEach(t,n){if(t)for(let e=0;e<t.length;e++)n(t[e])}function isScrolledIntoView(t){const n=t.getBoundingClientRect(),e=n.top,r=n.bottom;return e<window.innerHeight&&r>=0}function bodyContains(t){return t.getRootNode({composed:!0})===document}function splitOnWhitespace(t){return t.trim().split(/\s+/)}function mergeObjects(t,n){for(const e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function parseJSON(t){try{return JSON.parse(t)}catch(n){return logError(n),null}}function canAccessLocalStorage(){const t="htmx:sessionStorageTest";try{return sessionStorage.setItem(t,t),sessionStorage.removeItem(t),!0}catch{return!1}}function normalizePath(t){const n=new URL(t,"http://x");return n&&(t=n.pathname+n.search),t!="/"&&(t=t.replace(/\/+$/,"")),t}function internalEval(str){return maybeEval(getDocument().body,function(){return eval(str)})}function onLoadHelper(t){return htmx.on("htmx:load",function(e){t(e.detail.elt)})}function logAll(){htmx.logger=function(t,n,e){console&&console.log(n,t,e)}}function logNone(){htmx.logger=null}function find(t,n){return typeof t!="string"?t.querySelector(n):find(getDocument(),t)}function findAll(t,n){return typeof t!="string"?t.querySelectorAll(n):findAll(getDocument(),t)}function getWindow(){return window}function removeElement(t,n){t=resolveTarget(t),n?getWindow().setTimeout(function(){removeElement(t),t=null},n):parentElt(t).removeChild(t)}function asElement(t){return t instanceof Element?t:null}function asHtmlElement(t){return t instanceof HTMLElement?t:null}function asString(t){return typeof t=="string"?t:null}function asParentNode(t){return t instanceof Element||t instanceof Document||t instanceof DocumentFragment?t:null}function addClassToElement(t,n,e){t=asElement(resolveTarget(t)),t&&(e?getWindow().setTimeout(function(){addClassToElement(t,n),t=null},e):t.classList&&t.classList.add(n))}function removeClassFromElement(t,n,e){let r=asElement(resolveTarget(t));r&&(e?getWindow().setTimeout(function(){removeClassFromElement(r,n),r=null},e):r.classList&&(r.classList.remove(n),r.classList.length===0&&r.removeAttribute("class")))}function toggleClassOnElement(t,n){t=resolveTarget(t),t.classList.toggle(n)}function takeClassForElement(t,n){t=resolveTarget(t),forEach(t.parentElement.children,function(e){removeClassFromElement(e,n)}),addClassToElement(asElement(t),n)}function closest(t,n){return t=asElement(resolveTarget(t)),t?t.closest(n):null}function startsWith(t,n){return t.substring(0,n.length)===n}function endsWith(t,n){return t.substring(t.length-n.length)===n}function normalizeSelector(t){const n=t.trim();return startsWith(n,"<")&&endsWith(n,"/>")?n.substring(1,n.length-2):n}function querySelectorAllExt(t,n,e){if(n.indexOf("global ")===0)return querySelectorAllExt(t,n.slice(7),!0);t=resolveTarget(t);const r=[];{let o=0,l=0;for(let u=0;u<n.length;u++){const f=n[u];if(f===","&&o===0){r.push(n.substring(l,u)),l=u+1;continue}f==="<"?o++:f==="/"&&u<n.length-1&&n[u+1]===">"&&o--}l<n.length&&r.push(n.substring(l))}const a=[],s=[];for(;r.length>0;){const o=normalizeSelector(r.shift());let l;o.indexOf("closest ")===0?l=closest(asElement(t),normalizeSelector(o.slice(8))):o.indexOf("find ")===0?l=find(asParentNode(t),normalizeSelector(o.slice(5))):o==="next"||o==="nextElementSibling"?l=asElement(t).nextElementSibling:o.indexOf("next ")===0?l=scanForwardQuery(t,normalizeSelector(o.slice(5)),!!e):o==="previous"||o==="previousElementSibling"?l=asElement(t).previousElementSibling:o.indexOf("previous ")===0?l=scanBackwardsQuery(t,normalizeSelector(o.slice(9)),!!e):o==="document"?l=document:o==="window"?l=window:o==="body"?l=document.body:o==="root"?l=getRootNode(t,!!e):o==="host"?l=t.getRootNode().host:s.push(o),l&&a.push(l)}if(s.length>0){const o=s.join(","),l=asParentNode(getRootNode(t,!!e));a.push(...toArray(l.querySelectorAll(o)))}return a}var scanForwardQuery=function(t,n,e){const r=asParentNode(getRootNode(t,e)).querySelectorAll(n);for(let a=0;a<r.length;a++){const s=r[a];if(s.compareDocumentPosition(t)===Node.DOCUMENT_POSITION_PRECEDING)return s}},scanBackwardsQuery=function(t,n,e){const r=asParentNode(getRootNode(t,e)).querySelectorAll(n);for(let a=r.length-1;a>=0;a--){const s=r[a];if(s.compareDocumentPosition(t)===Node.DOCUMENT_POSITION_FOLLOWING)return s}};function querySelectorExt(t,n){return typeof t!="string"?querySelectorAllExt(t,n)[0]:querySelectorAllExt(getDocument().body,t)[0]}function resolveTarget(t,n){return typeof t=="string"?find(asParentNode(n)||document,t):t}function processEventArgs(t,n,e,r){return isFunction(n)?{target:getDocument().body,event:asString(t),listener:n,options:e}:{target:resolveTarget(t),event:asString(n),listener:e,options:r}}function addEventListenerImpl(t,n,e,r){return ready(function(){const s=processEventArgs(t,n,e,r);s.target.addEventListener(s.event,s.listener,s.options)}),isFunction(n)?n:e}function removeEventListenerImpl(t,n,e){return ready(function(){const r=processEventArgs(t,n,e);r.target.removeEventListener(r.event,r.listener)}),isFunction(n)?n:e}const DUMMY_ELT=getDocument().createElement("output");function findAttributeTargets(t,n){const e=getClosestAttributeValue(t,n);if(e){if(e==="this")return[findThisElement(t,n)];{const r=querySelectorAllExt(t,e);if(/(^|,)(\s*)inherit(\s*)($|,)/.test(e)){const s=asElement(getClosestMatch(t,function(o){return o!==t&&hasAttribute(asElement(o),n)}));s&&r.push(...findAttributeTargets(s,n))}return r.length===0?(logError('The selector "'+e+'" on '+n+" returned no matches!"),[DUMMY_ELT]):r}}}function findThisElement(t,n){return asElement(getClosestMatch(t,function(e){return getAttributeValue(asElement(e),n)!=null}))}function getTarget(t){const n=getClosestAttributeValue(t,"hx-target");return n?n==="this"?findThisElement(t,"hx-target"):querySelectorExt(t,n):getInternalData(t).boosted?getDocument().body:t}function shouldSettleAttribute(t){return htmx.config.attributesToSettle.includes(t)}function cloneAttributes(t,n){forEach(Array.from(t.attributes),function(e){!n.hasAttribute(e.name)&&shouldSettleAttribute(e.name)&&t.removeAttribute(e.name)}),forEach(n.attributes,function(e){shouldSettleAttribute(e.name)&&t.setAttribute(e.name,e.value)})}function isInlineSwap(t,n){const e=getExtensions(n);for(let r=0;r<e.length;r++){const a=e[r];try{if(a.isInlineSwap(t))return!0}catch(s){logError(s)}}return t==="outerHTML"}function oobSwap(t,n,e,r){r=r||getDocument();let a="#"+CSS.escape(getRawAttribute(n,"id")),s="outerHTML";t==="true"||(t.indexOf(":")>0?(s=t.substring(0,t.indexOf(":")),a=t.substring(t.indexOf(":")+1)):s=t),n.removeAttribute("hx-swap-oob"),n.removeAttribute("data-hx-swap-oob");const o=querySelectorAllExt(r,a,!1);return o.length?(forEach(o,function(l){let u;const f=n.cloneNode(!0);u=getDocument().createDocumentFragment(),u.appendChild(f),isInlineSwap(s,l)||(u=asParentNode(f));const d={shouldSwap:!0,target:l,fragment:u};triggerEvent(l,"htmx:oobBeforeSwap",d)&&(l=d.target,d.shouldSwap&&(handlePreservedElements(u),swapWithStyle(s,l,l,u,e),restorePreservedElements()),forEach(e.elts,function(p){triggerEvent(p,"htmx:oobAfterSwap",d)}))}),n.parentNode.removeChild(n)):(n.parentNode.removeChild(n),triggerErrorEvent(getDocument().body,"htmx:oobErrorNoTarget",{content:n})),t}function restorePreservedElements(){const t=find("#--htmx-preserve-pantry--");if(t){for(const n of[...t.children]){const e=find("#"+n.id);e.parentNode.moveBefore(n,e),e.remove()}t.remove()}}function handlePreservedElements(t){forEach(findAll(t,"[hx-preserve], [data-hx-preserve]"),function(n){const e=getAttributeValue(n,"id"),r=getDocument().getElementById(e);if(r!=null)if(n.moveBefore){let a=find("#--htmx-preserve-pantry--");a==null&&(getDocument().body.insertAdjacentHTML("afterend","<div id='--htmx-preserve-pantry--'></div>"),a=find("#--htmx-preserve-pantry--")),a.moveBefore(r,null)}else n.parentNode.replaceChild(r,n)})}function handleAttributes(t,n,e){forEach(n.querySelectorAll("[id]"),function(r){const a=getRawAttribute(r,"id");if(a&&a.length>0){const s=a.replace("'","\\'"),o=r.tagName.replace(":","\\:"),l=asParentNode(t),u=l&&l.querySelector(o+"[id='"+s+"']");if(u&&u!==l){const f=r.cloneNode();cloneAttributes(r,u),e.tasks.push(function(){cloneAttributes(r,f)})}}})}function makeAjaxLoadTask(t){return function(){removeClassFromElement(t,htmx.config.addedClass),processNode(asElement(t)),processFocus(asParentNode(t)),triggerEvent(t,"htmx:load")}}function processFocus(t){const n="[autofocus]",e=asHtmlElement(matches(t,n)?t:t.querySelector(n));e?.focus()}function insertNodesBefore(t,n,e,r){for(handleAttributes(t,e,r);e.childNodes.length>0;){const a=e.firstChild;addClassToElement(asElement(a),htmx.config.addedClass),t.insertBefore(a,n),a.nodeType!==Node.TEXT_NODE&&a.nodeType!==Node.COMMENT_NODE&&r.tasks.push(makeAjaxLoadTask(a))}}function stringHash(t,n){let e=0;for(;e<t.length;)n=(n<<5)-n+t.charCodeAt(e++)|0;return n}function attributeHash(t){let n=0;for(let e=0;e<t.attributes.length;e++){const r=t.attributes[e];r.value&&(n=stringHash(r.name,n),n=stringHash(r.value,n))}return n}function deInitOnHandlers(t){const n=getInternalData(t);if(n.onHandlers){for(let e=0;e<n.onHandlers.length;e++){const r=n.onHandlers[e];removeEventListenerImpl(t,r.event,r.listener)}delete n.onHandlers}}function deInitNode(t){const n=getInternalData(t);n.timeout&&clearTimeout(n.timeout),n.listenerInfos&&forEach(n.listenerInfos,function(e){e.on&&removeEventListenerImpl(e.on,e.trigger,e.listener)}),deInitOnHandlers(t),forEach(Object.keys(n),function(e){e!=="firstInitCompleted"&&delete n[e]})}function cleanUpElement(t){triggerEvent(t,"htmx:beforeCleanupElement"),deInitNode(t),forEach(t.children,function(n){cleanUpElement(n)})}function swapOuterHTML(t,n,e){if(t.tagName==="BODY")return swapInnerHTML(t,n,e);let r;const a=t.previousSibling,s=parentElt(t);if(s){for(insertNodesBefore(s,t,n,e),a==null?r=s.firstChild:r=a.nextSibling,e.elts=e.elts.filter(function(o){return o!==t});r&&r!==t;)r instanceof Element&&e.elts.push(r),r=r.nextSibling;cleanUpElement(t),t.remove()}}function swapAfterBegin(t,n,e){return insertNodesBefore(t,t.firstChild,n,e)}function swapBeforeBegin(t,n,e){return insertNodesBefore(parentElt(t),t,n,e)}function swapBeforeEnd(t,n,e){return insertNodesBefore(t,null,n,e)}function swapAfterEnd(t,n,e){return insertNodesBefore(parentElt(t),t.nextSibling,n,e)}function swapDelete(t){cleanUpElement(t);const n=parentElt(t);if(n)return n.removeChild(t)}function swapInnerHTML(t,n,e){const r=t.firstChild;if(insertNodesBefore(t,r,n,e),r){for(;r.nextSibling;)cleanUpElement(r.nextSibling),t.removeChild(r.nextSibling);cleanUpElement(r),t.removeChild(r)}}function swapWithStyle(t,n,e,r,a){switch(t){case"none":return;case"outerHTML":swapOuterHTML(e,r,a);return;case"afterbegin":swapAfterBegin(e,r,a);return;case"beforebegin":swapBeforeBegin(e,r,a);return;case"beforeend":swapBeforeEnd(e,r,a);return;case"afterend":swapAfterEnd(e,r,a);return;case"delete":swapDelete(e);return;default:var s=getExtensions(n);for(let o=0;o<s.length;o++){const l=s[o];try{const u=l.handleSwap(t,e,r,a);if(u){if(Array.isArray(u))for(let f=0;f<u.length;f++){const d=u[f];d.nodeType!==Node.TEXT_NODE&&d.nodeType!==Node.COMMENT_NODE&&a.tasks.push(makeAjaxLoadTask(d))}return}}catch(u){logError(u)}}t==="innerHTML"?swapInnerHTML(e,r,a):swapWithStyle(htmx.config.defaultSwapStyle,n,e,r,a)}}function findAndSwapOobElements(t,n,e){var r=findAll(t,"[hx-swap-oob], [data-hx-swap-oob]");return forEach(r,function(a){if(htmx.config.allowNestedOobSwaps||a.parentElement===null){const s=getAttributeValue(a,"hx-swap-oob");s!=null&&oobSwap(s,a,n,e)}else a.removeAttribute("hx-swap-oob"),a.removeAttribute("data-hx-swap-oob")}),r.length>0}function swap(t,n,e,r){r||(r={});let a=null,s=null,o=function(){maybeCall(r.beforeSwapCallback),t=resolveTarget(t);const f=r.contextElement?getRootNode(r.contextElement,!1):getDocument(),d=document.activeElement;let p={};p={elt:d,start:d?d.selectionStart:null,end:d?d.selectionEnd:null};const v=makeSettleInfo(t);if(e.swapStyle==="textContent")t.textContent=n;else{let x=makeFragment(n);if(v.title=r.title||x.title,r.historyRequest&&(x=x.querySelector("[hx-history-elt],[data-hx-history-elt]")||x),r.selectOOB){const S=r.selectOOB.split(",");for(let D=0;D<S.length;D++){const A=S[D].split(":",2);let I=A[0].trim();I.indexOf("#")===0&&(I=I.substring(1));const W=A[1]||"true",N=x.querySelector("#"+I);N&&oobSwap(W,N,v,f)}}if(findAndSwapOobElements(x,v,f),forEach(findAll(x,"template"),function(S){S.content&&findAndSwapOobElements(S.content,v,f)&&S.remove()}),r.select){const S=getDocument().createDocumentFragment();forEach(x.querySelectorAll(r.select),function(D){S.appendChild(D)}),x=S}handlePreservedElements(x),swapWithStyle(e.swapStyle,r.contextElement,t,x,v),restorePreservedElements()}if(p.elt&&!bodyContains(p.elt)&&getRawAttribute(p.elt,"id")){const x=document.getElementById(getRawAttribute(p.elt,"id")),S={preventScroll:e.focusScroll!==void 0?!e.focusScroll:!htmx.config.defaultFocusScroll};if(x){if(p.start&&x.setSelectionRange)try{x.setSelectionRange(p.start,p.end)}catch{}x.focus(S)}}t.classList.remove(htmx.config.swappingClass),forEach(v.elts,function(x){x.classList&&x.classList.add(htmx.config.settlingClass),triggerEvent(x,"htmx:afterSwap",r.eventInfo)}),maybeCall(r.afterSwapCallback),e.ignoreTitle||handleTitle(v.title);const y=function(){if(forEach(v.tasks,function(x){x.call()}),forEach(v.elts,function(x){x.classList&&x.classList.remove(htmx.config.settlingClass),triggerEvent(x,"htmx:afterSettle",r.eventInfo)}),r.anchor){const x=asElement(resolveTarget("#"+r.anchor));x&&x.scrollIntoView({block:"start",behavior:"auto"})}updateScrollState(v.elts,e),maybeCall(r.afterSettleCallback),maybeCall(a)};e.settleDelay>0?getWindow().setTimeout(y,e.settleDelay):y()},l=htmx.config.globalViewTransitions;e.hasOwnProperty("transition")&&(l=e.transition);const u=r.contextElement||getDocument();if(l&&triggerEvent(u,"htmx:beforeTransition",r.eventInfo)&&typeof Promise<"u"&&document.startViewTransition){const f=new Promise(function(p,v){a=p,s=v}),d=o;o=function(){document.startViewTransition(function(){return d(),f})}}try{e?.swapDelay&&e.swapDelay>0?getWindow().setTimeout(o,e.swapDelay):o()}catch(f){throw triggerErrorEvent(u,"htmx:swapError",r.eventInfo),maybeCall(s),f}}function handleTriggerHeader(t,n,e){const r=t.getResponseHeader(n);if(r.indexOf("{")===0){const a=parseJSON(r);for(const s in a)if(a.hasOwnProperty(s)){let o=a[s];isRawObject(o)?e=o.target!==void 0?o.target:e:o={value:o},triggerEvent(e,s,o)}}else{const a=r.split(",");for(let s=0;s<a.length;s++)triggerEvent(e,a[s].trim(),[])}}const WHITESPACE_OR_COMMA=/[\s,]/,SYMBOL_START=/[_$a-zA-Z]/,SYMBOL_CONT=/[_$a-zA-Z0-9]/,STRINGISH_START=['"',"'","/"],NOT_WHITESPACE=/[^\s]/,COMBINED_SELECTOR_START=/[{(]/,COMBINED_SELECTOR_END=/[})]/;function tokenizeString(t){const n=[];let e=0;for(;e<t.length;){if(SYMBOL_START.exec(t.charAt(e))){for(var r=e;SYMBOL_CONT.exec(t.charAt(e+1));)e++;n.push(t.substring(r,e+1))}else if(STRINGISH_START.indexOf(t.charAt(e))!==-1){const a=t.charAt(e);var r=e;for(e++;e<t.length&&t.charAt(e)!==a;)t.charAt(e)==="\\"&&e++,e++;n.push(t.substring(r,e+1))}else{const a=t.charAt(e);n.push(a)}e++}return n}function isPossibleRelativeReference(t,n,e){return SYMBOL_START.exec(t.charAt(0))&&t!=="true"&&t!=="false"&&t!=="this"&&t!==e&&n!=="."}function maybeGenerateConditional(t,n,e){if(n[0]==="["){n.shift();let r=1,a=" return (function("+e+"){ return (",s=null;for(;n.length>0;){const o=n[0];if(o==="]"){if(r--,r===0){s===null&&(a=a+"true"),n.shift(),a+=")})";try{const l=maybeEval(t,function(){return Function(a)()},function(){return!0});return l.source=a,l}catch(l){return triggerErrorEvent(getDocument().body,"htmx:syntax:error",{error:l,source:a}),null}}}else o==="["&&r++;isPossibleRelativeReference(o,s,e)?a+="(("+e+"."+o+") ? ("+e+"."+o+") : (window."+o+"))":a=a+o,s=n.shift()}}}function consumeUntil(t,n){let e="";for(;t.length>0&&!n.test(t[0]);)e+=t.shift();return e}function consumeCSSSelector(t){let n;return t.length>0&&COMBINED_SELECTOR_START.test(t[0])?(t.shift(),n=consumeUntil(t,COMBINED_SELECTOR_END).trim(),t.shift()):n=consumeUntil(t,WHITESPACE_OR_COMMA),n}const INPUT_SELECTOR="input, textarea, select";function parseAndCacheTrigger(t,n,e){const r=[],a=tokenizeString(n);do{consumeUntil(a,NOT_WHITESPACE);const l=a.length,u=consumeUntil(a,/[,\[\s]/);if(u!=="")if(u==="every"){const f={trigger:"every"};consumeUntil(a,NOT_WHITESPACE),f.pollInterval=parseInterval(consumeUntil(a,/[,\[\s]/)),consumeUntil(a,NOT_WHITESPACE);var s=maybeGenerateConditional(t,a,"event");s&&(f.eventFilter=s),r.push(f)}else{const f={trigger:u};var s=maybeGenerateConditional(t,a,"event");for(s&&(f.eventFilter=s),consumeUntil(a,NOT_WHITESPACE);a.length>0&&a[0]!==",";){const p=a.shift();if(p==="changed")f.changed=!0;else if(p==="once")f.once=!0;else if(p==="consume")f.consume=!0;else if(p==="delay"&&a[0]===":")a.shift(),f.delay=parseInterval(consumeUntil(a,WHITESPACE_OR_COMMA));else if(p==="from"&&a[0]===":"){if(a.shift(),COMBINED_SELECTOR_START.test(a[0]))var o=consumeCSSSelector(a);else{var o=consumeUntil(a,WHITESPACE_OR_COMMA);if(o==="closest"||o==="find"||o==="next"||o==="previous"){a.shift();const y=consumeCSSSelector(a);y.length>0&&(o+=" "+y)}}f.from=o}else p==="target"&&a[0]===":"?(a.shift(),f.target=consumeCSSSelector(a)):p==="throttle"&&a[0]===":"?(a.shift(),f.throttle=parseInterval(consumeUntil(a,WHITESPACE_OR_COMMA))):p==="queue"&&a[0]===":"?(a.shift(),f.queue=consumeUntil(a,WHITESPACE_OR_COMMA)):p==="root"&&a[0]===":"?(a.shift(),f[p]=consumeCSSSelector(a)):p==="threshold"&&a[0]===":"?(a.shift(),f[p]=consumeUntil(a,WHITESPACE_OR_COMMA)):triggerErrorEvent(t,"htmx:syntax:error",{token:a.shift()});consumeUntil(a,NOT_WHITESPACE)}r.push(f)}a.length===l&&triggerErrorEvent(t,"htmx:syntax:error",{token:a.shift()}),consumeUntil(a,NOT_WHITESPACE)}while(a[0]===","&&a.shift());return e&&(e[n]=r),r}function getTriggerSpecs(t){const n=getAttributeValue(t,"hx-trigger");let e=[];if(n){const r=htmx.config.triggerSpecsCache;e=r&&r[n]||parseAndCacheTrigger(t,n,r)}return e.length>0?e:matches(t,"form")?[{trigger:"submit"}]:matches(t,'input[type="button"], input[type="submit"]')?[{trigger:"click"}]:matches(t,INPUT_SELECTOR)?[{trigger:"change"}]:[{trigger:"click"}]}function cancelPolling(t){getInternalData(t).cancelled=!0}function processPolling(t,n,e){const r=getInternalData(t);r.timeout=getWindow().setTimeout(function(){bodyContains(t)&&r.cancelled!==!0&&(maybeFilterEvent(e,t,makeEvent("hx:poll:trigger",{triggerSpec:e,target:t}))||n(t),processPolling(t,n,e))},e.pollInterval)}function isLocalLink(t){return location.hostname===t.hostname&&getRawAttribute(t,"href")&&getRawAttribute(t,"href").indexOf("#")!==0}function eltIsDisabled(t){return closest(t,htmx.config.disableSelector)}function boostElement(t,n,e){if(t instanceof HTMLAnchorElement&&isLocalLink(t)&&(t.target===""||t.target==="_self")||t.tagName==="FORM"&&String(getRawAttribute(t,"method")).toLowerCase()!=="dialog"){n.boosted=!0;let r,a;if(t.tagName==="A")r="get",a=getRawAttribute(t,"href");else{const s=getRawAttribute(t,"method");r=s?s.toLowerCase():"get",a=getRawAttribute(t,"action"),(a==null||a==="")&&(a=location.href),r==="get"&&a.includes("?")&&(a=a.replace(/\?[^#]+/,""))}e.forEach(function(s){addEventListener(t,function(o,l){const u=asElement(o);if(eltIsDisabled(u)){cleanUpElement(u);return}issueAjaxRequest(r,a,u,l)},n,s,!0)})}}function shouldCancel(t,n){if(t.type==="submit"&&n.tagName==="FORM")return!0;if(t.type==="click"){const e=n.closest('input[type="submit"], button');if(e&&e.form&&e.type==="submit")return!0;const r=n.closest("a"),a=/^#.+/;if(r&&r.href&&!a.test(r.getAttribute("href")))return!0}return!1}function ignoreBoostedAnchorCtrlClick(t,n){return getInternalData(t).boosted&&t instanceof HTMLAnchorElement&&n.type==="click"&&(n.ctrlKey||n.metaKey)}function maybeFilterEvent(t,n,e){const r=t.eventFilter;if(r)try{return r.call(n,e)!==!0}catch(a){const s=r.source;return triggerErrorEvent(getDocument().body,"htmx:eventFilter:error",{error:a,source:s}),!0}return!1}function addEventListener(t,n,e,r,a){const s=getInternalData(t);let o;r.from?o=querySelectorAllExt(t,r.from):o=[t],r.changed&&("lastValue"in s||(s.lastValue=new WeakMap),o.forEach(function(l){s.lastValue.has(r)||s.lastValue.set(r,new WeakMap),s.lastValue.get(r).set(l,l.value)})),forEach(o,function(l){const u=function(f){if(!bodyContains(t)){l.removeEventListener(r.trigger,u);return}if(ignoreBoostedAnchorCtrlClick(t,f)||((a||shouldCancel(f,l))&&f.preventDefault(),maybeFilterEvent(r,t,f)))return;const d=getInternalData(f);if(d.triggerSpec=r,d.handledFor==null&&(d.handledFor=[]),d.handledFor.indexOf(t)<0){if(d.handledFor.push(t),r.consume&&f.stopPropagation(),r.target&&f.target&&!matches(asElement(f.target),r.target))return;if(r.once){if(s.triggeredOnce)return;s.triggeredOnce=!0}if(r.changed){const p=f.target,v=p.value,y=s.lastValue.get(r);if(y.has(p)&&y.get(p)===v)return;y.set(p,v)}if(s.delayed&&clearTimeout(s.delayed),s.throttle)return;r.throttle>0?s.throttle||(triggerEvent(t,"htmx:trigger"),n(t,f),s.throttle=getWindow().setTimeout(function(){s.throttle=null},r.throttle)):r.delay>0?s.delayed=getWindow().setTimeout(function(){triggerEvent(t,"htmx:trigger"),n(t,f)},r.delay):(triggerEvent(t,"htmx:trigger"),n(t,f))}};e.listenerInfos==null&&(e.listenerInfos=[]),e.listenerInfos.push({trigger:r.trigger,listener:u,on:l}),l.addEventListener(r.trigger,u)})}let windowIsScrolling=!1,scrollHandler=null;function initScrollHandler(){scrollHandler||(scrollHandler=function(){windowIsScrolling=!0},window.addEventListener("scroll",scrollHandler),window.addEventListener("resize",scrollHandler),setInterval(function(){windowIsScrolling&&(windowIsScrolling=!1,forEach(getDocument().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"),function(t){maybeReveal(t)}))},200))}function maybeReveal(t){!hasAttribute(t,"data-hx-revealed")&&isScrolledIntoView(t)&&(t.setAttribute("data-hx-revealed","true"),getInternalData(t).initHash?triggerEvent(t,"revealed"):t.addEventListener("htmx:afterProcessNode",function(){triggerEvent(t,"revealed")},{once:!0}))}function loadImmediately(t,n,e,r){const a=function(){e.loaded||(e.loaded=!0,triggerEvent(t,"htmx:trigger"),n(t))};r>0?getWindow().setTimeout(a,r):a()}function processVerbs(t,n,e){let r=!1;return forEach(VERBS,function(a){if(hasAttribute(t,"hx-"+a)){const s=getAttributeValue(t,"hx-"+a);r=!0,n.path=s,n.verb=a,e.forEach(function(o){addTriggerHandler(t,o,n,function(l,u){const f=asElement(l);if(eltIsDisabled(f)){cleanUpElement(f);return}issueAjaxRequest(a,s,f,u)})})}}),r}function addTriggerHandler(t,n,e,r){if(n.trigger==="revealed")initScrollHandler(),addEventListener(t,r,e,n),maybeReveal(asElement(t));else if(n.trigger==="intersect"){const a={};n.root&&(a.root=querySelectorExt(t,n.root)),n.threshold&&(a.threshold=parseFloat(n.threshold)),new IntersectionObserver(function(o){for(let l=0;l<o.length;l++)if(o[l].isIntersecting){triggerEvent(t,"intersect");break}},a).observe(asElement(t)),addEventListener(asElement(t),r,e,n)}else!e.firstInitCompleted&&n.trigger==="load"?maybeFilterEvent(n,t,makeEvent("load",{elt:t}))||loadImmediately(asElement(t),r,e,n.delay):n.pollInterval>0?(e.polling=!0,processPolling(asElement(t),r,n)):addEventListener(t,r,e,n)}function shouldProcessHxOn(t){const n=asElement(t);if(!n)return!1;const e=n.attributes;for(let r=0;r<e.length;r++){const a=e[r].name;if(startsWith(a,"hx-on:")||startsWith(a,"data-hx-on:")||startsWith(a,"hx-on-")||startsWith(a,"data-hx-on-"))return!0}return!1}const HX_ON_QUERY=new XPathEvaluator().createExpression('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]');function processHXOnRoot(t,n){shouldProcessHxOn(t)&&n.push(asElement(t));const e=HX_ON_QUERY.evaluate(t);let r=null;for(;r=e.iterateNext();)n.push(asElement(r))}function findHxOnWildcardElements(t){const n=[];if(t instanceof DocumentFragment)for(const e of t.childNodes)processHXOnRoot(e,n);else processHXOnRoot(t,n);return n}function findElementsToProcess(t){if(t.querySelectorAll){const e=", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]",r=[];for(const s in extensions){const o=extensions[s];if(o.getSelectors){var n=o.getSelectors();n&&r.push(n)}}return t.querySelectorAll(VERB_SELECTOR+e+", form, [type='submit'], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]"+r.flat().map(s=>", "+s).join(""))}else return[]}function maybeSetLastButtonClicked(t){const n=getTargetButton(t.target),e=getRelatedFormData(t);e&&(e.lastButtonClicked=n)}function maybeUnsetLastButtonClicked(t){const n=getRelatedFormData(t);n&&(n.lastButtonClicked=null)}function getTargetButton(t){return closest(asElement(t),"button, input[type='submit']")}function getRelatedForm(t){return t.form||closest(t,"form")}function getRelatedFormData(t){const n=getTargetButton(t.target);if(!n)return;const e=getRelatedForm(n);if(e)return getInternalData(e)}function initButtonTracking(t){t.addEventListener("click",maybeSetLastButtonClicked),t.addEventListener("focusin",maybeSetLastButtonClicked),t.addEventListener("focusout",maybeUnsetLastButtonClicked)}function addHxOnEventHandler(t,n,e){const r=getInternalData(t);Array.isArray(r.onHandlers)||(r.onHandlers=[]);let a;const s=function(o){maybeEval(t,function(){eltIsDisabled(t)||(a||(a=new Function("event",e)),a.call(t,o))})};t.addEventListener(n,s),r.onHandlers.push({event:n,listener:s})}function processHxOnWildcard(t){deInitOnHandlers(t);for(let n=0;n<t.attributes.length;n++){const e=t.attributes[n].name,r=t.attributes[n].value;if(startsWith(e,"hx-on")||startsWith(e,"data-hx-on")){const a=e.indexOf("-on")+3,s=e.slice(a,a+1);if(s==="-"||s===":"){let o=e.slice(a+1);startsWith(o,":")?o="htmx"+o:startsWith(o,"-")?o="htmx:"+o.slice(1):startsWith(o,"htmx-")&&(o="htmx:"+o.slice(5)),addHxOnEventHandler(t,o,r)}}}}function initNode(t){triggerEvent(t,"htmx:beforeProcessNode");const n=getInternalData(t),e=getTriggerSpecs(t);processVerbs(t,n,e)||(getClosestAttributeValue(t,"hx-boost")==="true"?boostElement(t,n,e):hasAttribute(t,"hx-trigger")&&e.forEach(function(a){addTriggerHandler(t,a,n,function(){})})),(t.tagName==="FORM"||getRawAttribute(t,"type")==="submit"&&hasAttribute(t,"form"))&&initButtonTracking(t),n.firstInitCompleted=!0,triggerEvent(t,"htmx:afterProcessNode")}function maybeDeInitAndHash(t){if(!(t instanceof Element))return!1;const n=getInternalData(t),e=attributeHash(t);return n.initHash!==e?(deInitNode(t),n.initHash=e,!0):!1}function processNode(t){if(t=resolveTarget(t),eltIsDisabled(t)){cleanUpElement(t);return}const n=[];maybeDeInitAndHash(t)&&n.push(t),forEach(findElementsToProcess(t),function(e){if(eltIsDisabled(e)){cleanUpElement(e);return}maybeDeInitAndHash(e)&&n.push(e)}),forEach(findHxOnWildcardElements(t),processHxOnWildcard),forEach(n,initNode)}function kebabEventName(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function makeEvent(t,n){return new CustomEvent(t,{bubbles:!0,cancelable:!0,composed:!0,detail:n})}function triggerErrorEvent(t,n,e){triggerEvent(t,n,mergeObjects({error:n},e))}function ignoreEventForLogging(t){return t==="htmx:afterProcessNode"}function withExtensions(t,n,e){forEach(getExtensions(t,[],e),function(r){try{n(r)}catch(a){logError(a)}})}function logError(t){console.error(t)}function triggerEvent(t,n,e){t=resolveTarget(t),e==null&&(e={}),e.elt=t;const r=makeEvent(n,e);htmx.logger&&!ignoreEventForLogging(n)&&htmx.logger(t,n,e),e.error&&(logError(e.error),triggerEvent(t,"htmx:error",{errorInfo:e}));let a=t.dispatchEvent(r);const s=kebabEventName(n);if(a&&s!==n){const o=makeEvent(s,r.detail);a=a&&t.dispatchEvent(o)}return withExtensions(asElement(t),function(o){a=a&&o.onEvent(n,r)!==!1&&!r.defaultPrevented}),a}let currentPathForHistory;function setCurrentPathForHistory(t){currentPathForHistory=t,canAccessLocalStorage()&&sessionStorage.setItem("htmx-current-path-for-history",t)}setCurrentPathForHistory(location.pathname+location.search);function getHistoryElement(){return getDocument().querySelector("[hx-history-elt],[data-hx-history-elt]")||getDocument().body}function saveToHistoryCache(t,n){if(!canAccessLocalStorage())return;const e=cleanInnerHtmlForHistory(n),r=getDocument().title,a=window.scrollY;if(htmx.config.historyCacheSize<=0){sessionStorage.removeItem("htmx-history-cache");return}t=normalizePath(t);const s=parseJSON(sessionStorage.getItem("htmx-history-cache"))||[];for(let l=0;l<s.length;l++)if(s[l].url===t){s.splice(l,1);break}const o={url:t,content:e,title:r,scroll:a};for(triggerEvent(getDocument().body,"htmx:historyItemCreated",{item:o,cache:s}),s.push(o);s.length>htmx.config.historyCacheSize;)s.shift();for(;s.length>0;)try{sessionStorage.setItem("htmx-history-cache",JSON.stringify(s));break}catch(l){triggerErrorEvent(getDocument().body,"htmx:historyCacheError",{cause:l,cache:s}),s.shift()}}function getCachedHistory(t){if(!canAccessLocalStorage())return null;t=normalizePath(t);const n=parseJSON(sessionStorage.getItem("htmx-history-cache"))||[];for(let e=0;e<n.length;e++)if(n[e].url===t)return n[e];return null}function cleanInnerHtmlForHistory(t){const n=htmx.config.requestClass,e=t.cloneNode(!0);return forEach(findAll(e,"."+n),function(r){removeClassFromElement(r,n)}),forEach(findAll(e,"[data-disabled-by-htmx]"),function(r){r.removeAttribute("disabled")}),e.innerHTML}function saveCurrentPageToHistory(){const t=getHistoryElement();let n=currentPathForHistory;canAccessLocalStorage()&&(n=sessionStorage.getItem("htmx-current-path-for-history")),n=n||location.pathname+location.search,getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]')||(triggerEvent(getDocument().body,"htmx:beforeHistorySave",{path:n,historyElt:t}),saveToHistoryCache(n,t)),htmx.config.historyEnabled&&history.replaceState({htmx:!0},getDocument().title,location.href)}function pushUrlIntoHistory(t){htmx.config.getCacheBusterParam&&(t=t.replace(/org\.htmx\.cache-buster=[^&]*&?/,""),(endsWith(t,"&")||endsWith(t,"?"))&&(t=t.slice(0,-1))),htmx.config.historyEnabled&&history.pushState({htmx:!0},"",t),setCurrentPathForHistory(t)}function replaceUrlInHistory(t){htmx.config.historyEnabled&&history.replaceState({htmx:!0},"",t),setCurrentPathForHistory(t)}function settleImmediately(t){forEach(t,function(n){n.call(void 0)})}function loadHistoryFromServer(t){const n=new XMLHttpRequest,e={swapStyle:"innerHTML",swapDelay:0,settleDelay:0},r={path:t,xhr:n,historyElt:getHistoryElement(),swapSpec:e};n.open("GET",t,!0),htmx.config.historyRestoreAsHxRequest&&n.setRequestHeader("HX-Request","true"),n.setRequestHeader("HX-History-Restore-Request","true"),n.setRequestHeader("HX-Current-URL",location.href),n.onload=function(){this.status>=200&&this.status<400?(r.response=this.response,triggerEvent(getDocument().body,"htmx:historyCacheMissLoad",r),swap(r.historyElt,r.response,e,{contextElement:r.historyElt,historyRequest:!0}),setCurrentPathForHistory(r.path),triggerEvent(getDocument().body,"htmx:historyRestore",{path:t,cacheMiss:!0,serverResponse:r.response})):triggerErrorEvent(getDocument().body,"htmx:historyCacheMissLoadError",r)},triggerEvent(getDocument().body,"htmx:historyCacheMiss",r)&&n.send()}function restoreHistory(t){saveCurrentPageToHistory(),t=t||location.pathname+location.search;const n=getCachedHistory(t);if(n){const e={swapStyle:"innerHTML",swapDelay:0,settleDelay:0,scroll:n.scroll},r={path:t,item:n,historyElt:getHistoryElement(),swapSpec:e};triggerEvent(getDocument().body,"htmx:historyCacheHit",r)&&(swap(r.historyElt,n.content,e,{contextElement:r.historyElt,title:n.title}),setCurrentPathForHistory(r.path),triggerEvent(getDocument().body,"htmx:historyRestore",r))}else htmx.config.refreshOnHistoryMiss?htmx.location.reload(!0):loadHistoryFromServer(t)}function addRequestIndicatorClasses(t){let n=findAttributeTargets(t,"hx-indicator");return n==null&&(n=[t]),forEach(n,function(e){const r=getInternalData(e);r.requestCount=(r.requestCount||0)+1,e.classList.add.call(e.classList,htmx.config.requestClass)}),n}function disableElements(t){let n=findAttributeTargets(t,"hx-disabled-elt");return n==null&&(n=[]),forEach(n,function(e){const r=getInternalData(e);r.requestCount=(r.requestCount||0)+1,e.setAttribute("disabled",""),e.setAttribute("data-disabled-by-htmx","")}),n}function removeRequestIndicators(t,n){forEach(t.concat(n),function(e){const r=getInternalData(e);r.requestCount=(r.requestCount||1)-1}),forEach(t,function(e){getInternalData(e).requestCount===0&&e.classList.remove.call(e.classList,htmx.config.requestClass)}),forEach(n,function(e){getInternalData(e).requestCount===0&&(e.removeAttribute("disabled"),e.removeAttribute("data-disabled-by-htmx"))})}function haveSeenNode(t,n){for(let e=0;e<t.length;e++)if(t[e].isSameNode(n))return!0;return!1}function shouldInclude(t){const n=t;return n.name===""||n.name==null||n.disabled||closest(n,"fieldset[disabled]")||n.type==="button"||n.type==="submit"||n.tagName==="image"||n.tagName==="reset"||n.tagName==="file"?!1:n.type==="checkbox"||n.type==="radio"?n.checked:!0}function addValueToFormData(t,n,e){t!=null&&n!=null&&(Array.isArray(n)?n.forEach(function(r){e.append(t,r)}):e.append(t,n))}function removeValueFromFormData(t,n,e){if(t!=null&&n!=null){let r=e.getAll(t);Array.isArray(n)?r=r.filter(a=>n.indexOf(a)<0):r=r.filter(a=>a!==n),e.delete(t),forEach(r,a=>e.append(t,a))}}function getValueFromInput(t){return t instanceof HTMLSelectElement&&t.multiple?toArray(t.querySelectorAll("option:checked")).map(function(n){return n.value}):t instanceof HTMLInputElement&&t.files?toArray(t.files):t.value}function processInputValue(t,n,e,r,a){if(!(r==null||haveSeenNode(t,r))){if(t.push(r),shouldInclude(r)){const s=getRawAttribute(r,"name");addValueToFormData(s,getValueFromInput(r),n),a&&validateElement(r,e)}r instanceof HTMLFormElement&&(forEach(r.elements,function(s){t.indexOf(s)>=0?removeValueFromFormData(s.name,getValueFromInput(s),n):t.push(s),a&&validateElement(s,e)}),new FormData(r).forEach(function(s,o){s instanceof File&&s.name===""||addValueToFormData(o,s,n)}))}}function validateElement(t,n){const e=t;e.willValidate&&(triggerEvent(e,"htmx:validation:validate"),e.checkValidity()||(triggerEvent(e,"htmx:validation:failed",{message:e.validationMessage,validity:e.validity})&&!n.length&&htmx.config.reportValidityOfForms&&e.reportValidity(),n.push({elt:e,message:e.validationMessage,validity:e.validity})))}function overrideFormData(t,n){for(const e of n.keys())t.delete(e);return n.forEach(function(e,r){t.append(r,e)}),t}function getInputValues(t,n){const e=[],r=new FormData,a=new FormData,s=[],o=getInternalData(t);o.lastButtonClicked&&!bodyContains(o.lastButtonClicked)&&(o.lastButtonClicked=null);let l=t instanceof HTMLFormElement&&t.noValidate!==!0||getAttributeValue(t,"hx-validate")==="true";if(o.lastButtonClicked&&(l=l&&o.lastButtonClicked.formNoValidate!==!0),n!=="get"&&processInputValue(e,a,s,getRelatedForm(t),l),processInputValue(e,r,s,t,l),o.lastButtonClicked||t.tagName==="BUTTON"||t.tagName==="INPUT"&&getRawAttribute(t,"type")==="submit"){const f=o.lastButtonClicked||t,d=getRawAttribute(f,"name");addValueToFormData(d,f.value,a)}const u=findAttributeTargets(t,"hx-include");return forEach(u,function(f){processInputValue(e,r,s,asElement(f),l),matches(f,"form")||forEach(asParentNode(f).querySelectorAll(INPUT_SELECTOR),function(d){processInputValue(e,r,s,d,l)})}),overrideFormData(r,a),{errors:s,formData:r,values:formDataProxy(r)}}function appendParam(t,n,e){t!==""&&(t+="&"),String(e)==="[object Object]"&&(e=JSON.stringify(e));const r=encodeURIComponent(e);return t+=encodeURIComponent(n)+"="+r,t}function urlEncode(t){t=formDataFromObject(t);let n="";return t.forEach(function(e,r){n=appendParam(n,r,e)}),n}function getHeaders(t,n,e){const r={"HX-Request":"true","HX-Trigger":getRawAttribute(t,"id"),"HX-Trigger-Name":getRawAttribute(t,"name"),"HX-Target":getAttributeValue(n,"id"),"HX-Current-URL":location.href};return getValuesForElement(t,"hx-headers",!1,r),e!==void 0&&(r["HX-Prompt"]=e),getInternalData(t).boosted&&(r["HX-Boosted"]="true"),r}function filterValues(t,n){const e=getClosestAttributeValue(n,"hx-params");if(e){if(e==="none")return new FormData;if(e==="*")return t;if(e.indexOf("not ")===0)return forEach(e.slice(4).split(","),function(r){r=r.trim(),t.delete(r)}),t;{const r=new FormData;return forEach(e.split(","),function(a){a=a.trim(),t.has(a)&&t.getAll(a).forEach(function(s){r.append(a,s)})}),r}}else return t}function isAnchorLink(t){return!!getRawAttribute(t,"href")&&getRawAttribute(t,"href").indexOf("#")>=0}function getSwapSpecification(t,n){const e=n||getClosestAttributeValue(t,"hx-swap"),r={swapStyle:getInternalData(t).boosted?"innerHTML":htmx.config.defaultSwapStyle,swapDelay:htmx.config.defaultSwapDelay,settleDelay:htmx.config.defaultSettleDelay};if(htmx.config.scrollIntoViewOnBoost&&getInternalData(t).boosted&&!isAnchorLink(t)&&(r.show="top"),e){const o=splitOnWhitespace(e);if(o.length>0)for(let l=0;l<o.length;l++){const u=o[l];if(u.indexOf("swap:")===0)r.swapDelay=parseInterval(u.slice(5));else if(u.indexOf("settle:")===0)r.settleDelay=parseInterval(u.slice(7));else if(u.indexOf("transition:")===0)r.transition=u.slice(11)==="true";else if(u.indexOf("ignoreTitle:")===0)r.ignoreTitle=u.slice(12)==="true";else if(u.indexOf("scroll:")===0){var a=u.slice(7).split(":");const d=a.pop();var s=a.length>0?a.join(":"):null;r.scroll=d,r.scrollTarget=s}else if(u.indexOf("show:")===0){var a=u.slice(5).split(":");const p=a.pop();var s=a.length>0?a.join(":"):null;r.show=p,r.showTarget=s}else if(u.indexOf("focus-scroll:")===0){const f=u.slice(13);r.focusScroll=f=="true"}else l==0?r.swapStyle=u:logError("Unknown modifier in hx-swap: "+u)}}return r}function usesFormData(t){return getClosestAttributeValue(t,"hx-encoding")==="multipart/form-data"||matches(t,"form")&&getRawAttribute(t,"enctype")==="multipart/form-data"}function encodeParamsForBody(t,n,e){let r=null;return withExtensions(n,function(a){r==null&&(r=a.encodeParameters(t,e,n))}),r??(usesFormData(n)?overrideFormData(new FormData,formDataFromObject(e)):urlEncode(e))}function makeSettleInfo(t){return{tasks:[],elts:[t]}}function updateScrollState(t,n){const e=t[0],r=t[t.length-1];if(n.scroll){var a=null;n.scrollTarget&&(a=asElement(querySelectorExt(e,n.scrollTarget))),n.scroll==="top"&&(e||a)&&(a=a||e,a.scrollTop=0),n.scroll==="bottom"&&(r||a)&&(a=a||r,a.scrollTop=a.scrollHeight),typeof n.scroll=="number"&&getWindow().setTimeout(function(){window.scrollTo(0,n.scroll)},0)}if(n.show){var a=null;if(n.showTarget){let o=n.showTarget;n.showTarget==="window"&&(o="body"),a=asElement(querySelectorExt(e,o))}n.show==="top"&&(e||a)&&(a=a||e,a.scrollIntoView({block:"start",behavior:htmx.config.scrollBehavior})),n.show==="bottom"&&(r||a)&&(a=a||r,a.scrollIntoView({block:"end",behavior:htmx.config.scrollBehavior}))}}function getValuesForElement(t,n,e,r,a){if(r==null&&(r={}),t==null)return r;const s=getAttributeValue(t,n);if(s){let o=s.trim(),l=e;if(o==="unset")return null;o.indexOf("javascript:")===0?(o=o.slice(11),l=!0):o.indexOf("js:")===0&&(o=o.slice(3),l=!0),o.indexOf("{")!==0&&(o="{"+o+"}");let u;l?u=maybeEval(t,function(){return a?Function("event","return ("+o+")").call(t,a):Function("return ("+o+")").call(t)},{}):u=parseJSON(o);for(const f in u)u.hasOwnProperty(f)&&r[f]==null&&(r[f]=u[f])}return getValuesForElement(asElement(parentElt(t)),n,e,r,a)}function maybeEval(t,n,e){return htmx.config.allowEval?n():(triggerErrorEvent(t,"htmx:evalDisallowedError"),e)}function getHXVarsForElement(t,n,e){return getValuesForElement(t,"hx-vars",!0,e,n)}function getHXValsForElement(t,n,e){return getValuesForElement(t,"hx-vals",!1,e,n)}function getExpressionVars(t,n){return mergeObjects(getHXVarsForElement(t,n),getHXValsForElement(t,n))}function safelySetHeaderValue(t,n,e){if(e!==null)try{t.setRequestHeader(n,e)}catch{t.setRequestHeader(n,encodeURIComponent(e)),t.setRequestHeader(n+"-URI-AutoEncoded","true")}}function getPathFromResponse(t){if(t.responseURL)try{const n=new URL(t.responseURL);return n.pathname+n.search}catch{triggerErrorEvent(getDocument().body,"htmx:badResponseUrl",{url:t.responseURL})}}function hasHeader(t,n){return n.test(t.getAllResponseHeaders())}function ajaxHelper(t,n,e){if(t=t.toLowerCase(),e){if(e instanceof Element||typeof e=="string")return issueAjaxRequest(t,n,null,null,{targetOverride:resolveTarget(e)||DUMMY_ELT,returnPromise:!0});{let r=resolveTarget(e.target);return(e.target&&!r||e.source&&!r&&!resolveTarget(e.source))&&(r=DUMMY_ELT),issueAjaxRequest(t,n,resolveTarget(e.source),e.event,{handler:e.handler,headers:e.headers,values:e.values,targetOverride:r,swapOverride:e.swap,select:e.select,returnPromise:!0,push:e.push,replace:e.replace,selectOOB:e.selectOOB})}}else return issueAjaxRequest(t,n,null,null,{returnPromise:!0})}function hierarchyForElt(t){const n=[];for(;t;)n.push(t),t=t.parentElement;return n}function verifyPath(t,n,e){const r=new URL(n,location.protocol!=="about:"?location.href:window.origin),s=(location.protocol!=="about:"?location.origin:window.origin)===r.origin;return htmx.config.selfRequestsOnly&&!s?!1:triggerEvent(t,"htmx:validateUrl",mergeObjects({url:r,sameHost:s},e))}function formDataFromObject(t){if(t instanceof FormData)return t;const n=new FormData;for(const e in t)t.hasOwnProperty(e)&&(t[e]&&typeof t[e].forEach=="function"?t[e].forEach(function(r){n.append(e,r)}):typeof t[e]=="object"&&!(t[e]instanceof Blob)?n.append(e,JSON.stringify(t[e])):n.append(e,t[e]));return n}function formDataArrayProxy(t,n,e){return new Proxy(e,{get:function(r,a){return typeof a=="number"?r[a]:a==="length"?r.length:a==="push"?function(s){r.push(s),t.append(n,s)}:typeof r[a]=="function"?function(){r[a].apply(r,arguments),t.delete(n),r.forEach(function(s){t.append(n,s)})}:r[a]&&r[a].length===1?r[a][0]:r[a]},set:function(r,a,s){return r[a]=s,t.delete(n),r.forEach(function(o){t.append(n,o)}),!0}})}function formDataProxy(t){return new Proxy(t,{get:function(n,e){if(typeof e=="symbol"){const a=Reflect.get(n,e);return typeof a=="function"?function(){return a.apply(t,arguments)}:a}if(e==="toJSON")return()=>Object.fromEntries(t);if(e in n&&typeof n[e]=="function")return function(){return t[e].apply(t,arguments)};const r=t.getAll(e);if(r.length!==0)return r.length===1?r[0]:formDataArrayProxy(n,e,r)},set:function(n,e,r){return typeof e!="string"?!1:(n.delete(e),r&&typeof r.forEach=="function"?r.forEach(function(a){n.append(e,a)}):typeof r=="object"&&!(r instanceof Blob)?n.append(e,JSON.stringify(r)):n.append(e,r),!0)},deleteProperty:function(n,e){return typeof e=="string"&&n.delete(e),!0},ownKeys:function(n){return Reflect.ownKeys(Object.fromEntries(n))},getOwnPropertyDescriptor:function(n,e){return Reflect.getOwnPropertyDescriptor(Object.fromEntries(n),e)}})}function issueAjaxRequest(t,n,e,r,a,s){let o=null,l=null;if(a=a??{},a.returnPromise&&typeof Promise<"u")var u=new Promise(function(ke,ze){o=ke,l=ze});e==null&&(e=getDocument().body);const f=a.handler||handleAjaxResponse,d=a.select||null;if(!bodyContains(e))return maybeCall(o),u;const p=a.targetOverride||asElement(getTarget(e));if(p==null||p==DUMMY_ELT)return triggerErrorEvent(e,"htmx:targetError",{target:getClosestAttributeValue(e,"hx-target")}),maybeCall(l),u;let v=getInternalData(e);const y=v.lastButtonClicked;if(y){const ke=getRawAttribute(y,"formaction");ke!=null&&(n=ke);const ze=getRawAttribute(y,"formmethod");if(ze!=null)if(VERBS.includes(ze.toLowerCase()))t=ze;else return maybeCall(o),u}const x=getClosestAttributeValue(e,"hx-confirm");if(s===void 0&&triggerEvent(e,"htmx:confirm",{target:p,elt:e,path:n,verb:t,triggeringEvent:r,etc:a,issueRequest:function(tt){return issueAjaxRequest(t,n,e,r,a,!!tt)},question:x})===!1)return maybeCall(o),u;let S=e,D=getClosestAttributeValue(e,"hx-sync"),A=null,I=!1;if(D){const ke=D.split(":"),ze=ke[0].trim();if(ze==="this"?S=findThisElement(e,"hx-sync"):S=asElement(querySelectorExt(e,ze)),D=(ke[1]||"drop").trim(),v=getInternalData(S),D==="drop"&&v.xhr&&v.abortable!==!0)return maybeCall(o),u;if(D==="abort"){if(v.xhr)return maybeCall(o),u;I=!0}else D==="replace"?triggerEvent(S,"htmx:abort"):D.indexOf("queue")===0&&(A=(D.split(" ")[1]||"last").trim())}if(v.xhr)if(v.abortable)triggerEvent(S,"htmx:abort");else{if(A==null){if(r){const ke=getInternalData(r);ke&&ke.triggerSpec&&ke.triggerSpec.queue&&(A=ke.triggerSpec.queue)}A==null&&(A="last")}return v.queuedRequests==null&&(v.queuedRequests=[]),A==="first"&&v.queuedRequests.length===0?v.queuedRequests.push(function(){issueAjaxRequest(t,n,e,r,a)}):A==="all"?v.queuedRequests.push(function(){issueAjaxRequest(t,n,e,r,a)}):A==="last"&&(v.queuedRequests=[],v.queuedRequests.push(function(){issueAjaxRequest(t,n,e,r,a)})),maybeCall(o),u}const W=new XMLHttpRequest;v.xhr=W,v.abortable=I;const N=function(){v.xhr=null,v.abortable=!1,v.queuedRequests!=null&&v.queuedRequests.length>0&&v.queuedRequests.shift()()},U=getClosestAttributeValue(e,"hx-prompt");if(U){var J=prompt(U);if(J===null||!triggerEvent(e,"htmx:prompt",{prompt:J,target:p}))return maybeCall(o),N(),u}if(x&&!s&&!confirm(x))return maybeCall(o),N(),u;let m=getHeaders(e,p,J);t!=="get"&&!usesFormData(e)&&(m["Content-Type"]="application/x-www-form-urlencoded"),a.headers&&(m=mergeObjects(m,a.headers));const ne=getInputValues(e,t);let ie=ne.errors;const ge=ne.formData;a.values&&overrideFormData(ge,formDataFromObject(a.values));const ve=formDataFromObject(getExpressionVars(e,r)),_e=overrideFormData(ge,ve);let ue=filterValues(_e,e);htmx.config.getCacheBusterParam&&t==="get"&&ue.set("org.htmx.cache-buster",getRawAttribute(p,"id")||"true"),(n==null||n==="")&&(n=location.href);const He=getValuesForElement(e,"hx-request"),pe=getInternalData(e).boosted;let we=htmx.config.methodsThatUseUrlParams.indexOf(t)>=0;const xe={boosted:pe,useUrlParams:we,formData:ue,parameters:formDataProxy(ue),unfilteredFormData:_e,unfilteredParameters:formDataProxy(_e),headers:m,elt:e,target:p,verb:t,errors:ie,withCredentials:a.credentials||He.credentials||htmx.config.withCredentials,timeout:a.timeout||He.timeout||htmx.config.timeout,path:n,triggeringEvent:r};if(!triggerEvent(e,"htmx:configRequest",xe))return maybeCall(o),N(),u;if(n=xe.path,t=xe.verb,m=xe.headers,ue=formDataFromObject(xe.parameters),ie=xe.errors,we=xe.useUrlParams,ie&&ie.length>0)return triggerEvent(e,"htmx:validation:halted",xe),maybeCall(o),N(),u;const je=n.split("#"),Le=je[0],ct=je[1];let Xe=n;if(we&&(Xe=Le,!ue.keys().next().done&&(Xe.indexOf("?")<0?Xe+="?":Xe+="&",Xe+=urlEncode(ue),ct&&(Xe+="#"+ct))),!verifyPath(e,Xe,xe))return triggerErrorEvent(e,"htmx:invalidPath",xe),maybeCall(l),N(),u;if(W.open(t.toUpperCase(),Xe,!0),W.overrideMimeType("text/html"),W.withCredentials=xe.withCredentials,W.timeout=xe.timeout,!He.noHeaders){for(const ke in m)if(m.hasOwnProperty(ke)){const ze=m[ke];safelySetHeaderValue(W,ke,ze)}}const Ve={xhr:W,target:p,requestConfig:xe,etc:a,boosted:pe,select:d,pathInfo:{requestPath:n,finalRequestPath:Xe,responsePath:null,anchor:ct}};if(W.onload=function(){try{const ke=hierarchyForElt(e);if(Ve.pathInfo.responsePath=getPathFromResponse(W),f(e,Ve),Ve.keepIndicators!==!0&&removeRequestIndicators(et,it),triggerEvent(e,"htmx:afterRequest",Ve),triggerEvent(e,"htmx:afterOnLoad",Ve),!bodyContains(e)){let ze=null;for(;ke.length>0&&ze==null;){const tt=ke.shift();bodyContains(tt)&&(ze=tt)}ze&&(triggerEvent(ze,"htmx:afterRequest",Ve),triggerEvent(ze,"htmx:afterOnLoad",Ve))}maybeCall(o)}catch(ke){throw triggerErrorEvent(e,"htmx:onLoadError",mergeObjects({error:ke},Ve)),ke}finally{N()}},W.onerror=function(){removeRequestIndicators(et,it),triggerErrorEvent(e,"htmx:afterRequest",Ve),triggerErrorEvent(e,"htmx:sendError",Ve),maybeCall(l),N()},W.onabort=function(){removeRequestIndicators(et,it),triggerErrorEvent(e,"htmx:afterRequest",Ve),triggerErrorEvent(e,"htmx:sendAbort",Ve),maybeCall(l),N()},W.ontimeout=function(){removeRequestIndicators(et,it),triggerErrorEvent(e,"htmx:afterRequest",Ve),triggerErrorEvent(e,"htmx:timeout",Ve),maybeCall(l),N()},!triggerEvent(e,"htmx:beforeRequest",Ve))return maybeCall(o),N(),u;var et=addRequestIndicatorClasses(e),it=disableElements(e);forEach(["loadstart","loadend","progress","abort"],function(ke){forEach([W,W.upload],function(ze){ze.addEventListener(ke,function(tt){triggerEvent(e,"htmx:xhr:"+ke,{lengthComputable:tt.lengthComputable,loaded:tt.loaded,total:tt.total})})})}),triggerEvent(e,"htmx:beforeSend",Ve);const Ge=we?null:encodeParamsForBody(W,e,ue);return W.send(Ge),u}function determineHistoryUpdates(t,n){const e=n.xhr;let r=null,a=null;if(hasHeader(e,/HX-Push:/i)?(r=e.getResponseHeader("HX-Push"),a="push"):hasHeader(e,/HX-Push-Url:/i)?(r=e.getResponseHeader("HX-Push-Url"),a="push"):hasHeader(e,/HX-Replace-Url:/i)&&(r=e.getResponseHeader("HX-Replace-Url"),a="replace"),r)return r==="false"?{}:{type:a,path:r};const s=n.pathInfo.finalRequestPath,o=n.pathInfo.responsePath,l=n.etc.push||getClosestAttributeValue(t,"hx-push-url"),u=n.etc.replace||getClosestAttributeValue(t,"hx-replace-url"),f=getInternalData(t).boosted;let d=null,p=null;return l?(d="push",p=l):u?(d="replace",p=u):f&&(d="push",p=o||s),p?p==="false"?{}:(p==="true"&&(p=o||s),n.pathInfo.anchor&&p.indexOf("#")===-1&&(p=p+"#"+n.pathInfo.anchor),{type:d,path:p}):{}}function codeMatches(t,n){var e=new RegExp(t.code);return e.test(n.toString(10))}function resolveResponseHandling(t){for(var n=0;n<htmx.config.responseHandling.length;n++){var e=htmx.config.responseHandling[n];if(codeMatches(e,t.status))return e}return{swap:!1}}function handleTitle(t){if(t){const n=find("title");n?n.textContent=t:window.document.title=t}}function resolveRetarget(t,n){if(n==="this")return t;const e=asElement(querySelectorExt(t,n));if(e==null)throw triggerErrorEvent(t,"htmx:targetError",{target:n}),new Error(`Invalid re-target ${n}`);return e}function handleAjaxResponse(t,n){const e=n.xhr;let r=n.target;const a=n.etc,s=n.select;if(!triggerEvent(t,"htmx:beforeOnLoad",n))return;if(hasHeader(e,/HX-Trigger:/i)&&handleTriggerHeader(e,"HX-Trigger",t),hasHeader(e,/HX-Location:/i)){let I=e.getResponseHeader("HX-Location");var o={};I.indexOf("{")===0&&(o=parseJSON(I),I=o.path,delete o.path),o.push=o.push||"true",ajaxHelper("get",I,o);return}const l=hasHeader(e,/HX-Refresh:/i)&&e.getResponseHeader("HX-Refresh")==="true";if(hasHeader(e,/HX-Redirect:/i)){n.keepIndicators=!0,htmx.location.href=e.getResponseHeader("HX-Redirect"),l&&htmx.location.reload();return}if(l){n.keepIndicators=!0,htmx.location.reload();return}const u=determineHistoryUpdates(t,n),f=resolveResponseHandling(e),d=f.swap;let p=!!f.error,v=htmx.config.ignoreTitle||f.ignoreTitle,y=f.select;f.target&&(n.target=resolveRetarget(t,f.target));var x=a.swapOverride;x==null&&f.swapOverride&&(x=f.swapOverride),hasHeader(e,/HX-Retarget:/i)&&(n.target=resolveRetarget(t,e.getResponseHeader("HX-Retarget"))),hasHeader(e,/HX-Reswap:/i)&&(x=e.getResponseHeader("HX-Reswap"));var S=e.response,D=mergeObjects({shouldSwap:d,serverResponse:S,isError:p,ignoreTitle:v,selectOverride:y,swapOverride:x},n);if(!(f.event&&!triggerEvent(r,f.event,D))&&triggerEvent(r,"htmx:beforeSwap",D)){if(r=D.target,S=D.serverResponse,p=D.isError,v=D.ignoreTitle,y=D.selectOverride,x=D.swapOverride,n.target=r,n.failed=p,n.successful=!p,D.shouldSwap){e.status===286&&cancelPolling(t),withExtensions(t,function(N){S=N.transformResponse(S,e,t)}),u.type&&saveCurrentPageToHistory();var A=getSwapSpecification(t,x);A.hasOwnProperty("ignoreTitle")||(A.ignoreTitle=v),r.classList.add(htmx.config.swappingClass),s&&(y=s),hasHeader(e,/HX-Reselect:/i)&&(y=e.getResponseHeader("HX-Reselect"));const I=a.selectOOB||getClosestAttributeValue(t,"hx-select-oob"),W=getClosestAttributeValue(t,"hx-select");swap(r,S,A,{select:y==="unset"?null:y||W,selectOOB:I,eventInfo:n,anchor:n.pathInfo.anchor,contextElement:t,afterSwapCallback:function(){if(hasHeader(e,/HX-Trigger-After-Swap:/i)){let N=t;bodyContains(t)||(N=getDocument().body),handleTriggerHeader(e,"HX-Trigger-After-Swap",N)}},afterSettleCallback:function(){if(hasHeader(e,/HX-Trigger-After-Settle:/i)){let N=t;bodyContains(t)||(N=getDocument().body),handleTriggerHeader(e,"HX-Trigger-After-Settle",N)}},beforeSwapCallback:function(){u.type&&(triggerEvent(getDocument().body,"htmx:beforeHistoryUpdate",mergeObjects({history:u},n)),u.type==="push"?(pushUrlIntoHistory(u.path),triggerEvent(getDocument().body,"htmx:pushedIntoHistory",{path:u.path})):(replaceUrlInHistory(u.path),triggerEvent(getDocument().body,"htmx:replacedInHistory",{path:u.path})))}})}p&&triggerErrorEvent(t,"htmx:responseError",mergeObjects({error:"Response Status Error Code "+e.status+" from "+n.pathInfo.requestPath},n))}}const extensions={};function extensionBase(){return{init:function(t){return null},getSelectors:function(){return null},onEvent:function(t,n){return!0},transformResponse:function(t,n,e){return t},isInlineSwap:function(t){return!1},handleSwap:function(t,n,e,r){return!1},encodeParameters:function(t,n,e){return null}}}function defineExtension(t,n){n.init&&n.init(internalAPI),extensions[t]=mergeObjects(extensionBase(),n)}function removeExtension(t){delete extensions[t]}function getExtensions(t,n,e){if(n==null&&(n=[]),t==null)return n;e==null&&(e=[]);const r=getAttributeValue(t,"hx-ext");return r&&forEach(r.split(","),function(a){if(a=a.replace(/ /g,""),a.slice(0,7)=="ignore:"){e.push(a.slice(7));return}if(e.indexOf(a)<0){const s=extensions[a];s&&n.indexOf(s)<0&&n.push(s)}}),getExtensions(asElement(parentElt(t)),n,e)}var isReady=!1;getDocument().addEventListener("DOMContentLoaded",function(){isReady=!0});function ready(t){isReady||getDocument().readyState==="complete"?t():getDocument().addEventListener("DOMContentLoaded",t)}function insertIndicatorStyles(){if(htmx.config.includeIndicatorStyles!==!1){const t=htmx.config.inlineStyleNonce?` nonce="${htmx.config.inlineStyleNonce}"`:"",n=htmx.config.indicatorClass,e=htmx.config.requestClass;getDocument().head.insertAdjacentHTML("beforeend",`<style${t}>.${n}{opacity:0;visibility: hidden} .${e} .${n}, .${e}.${n}{opacity:1;visibility: visible;transition: opacity 200ms ease-in}</style>`)}}function getMetaConfig(){const t=getDocument().querySelector('meta[name="htmx-config"]');return t?parseJSON(t.content):null}function mergeMetaConfig(){const t=getMetaConfig();t&&(htmx.config=mergeObjects(htmx.config,t))}return ready(function(){mergeMetaConfig(),insertIndicatorStyles();let t=getDocument().body;processNode(t);const n=getDocument().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");t.addEventListener("htmx:abort",function(r){const a=r.detail.elt||r.target,s=getInternalData(a);s&&s.xhr&&s.xhr.abort()});const e=window.onpopstate?window.onpopstate.bind(window):null;window.onpopstate=function(r){r.state&&r.state.htmx?(restoreHistory(),forEach(n,function(a){triggerEvent(a,"htmx:restored",{document:getDocument(),triggerEvent})})):e&&e(r)},getWindow().setTimeout(function(){triggerEvent(t,"htmx:load",{}),t=null},0)}),htmx})();var HOOKS=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],defaults$1={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(t){return typeof console<"u"&&console.warn(t)},getWeek:function(t){var n=new Date(t.getTime());n.setHours(0,0,0,0),n.setDate(n.getDate()+3-(n.getDay()+6)%7);var e=new Date(n.getFullYear(),0,4);return 1+Math.round(((n.getTime()-e.getTime())/864e5-3+(e.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},english={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(t){var n=t%100;if(n>3&&n<21)return"th";switch(n%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},pad=function(t,n){return n===void 0&&(n=2),("000"+t).slice(n*-1)},int=function(t){return t===!0?1:0};function debounce$1(t,n){var e;return function(){var r=this,a=arguments;clearTimeout(e),e=setTimeout(function(){return t.apply(r,a)},n)}}var arrayify=function(t){return t instanceof Array?t:[t]};function toggleClass(t,n,e){if(e===!0)return t.classList.add(n);t.classList.remove(n)}function createElement(t,n,e){var r=window.document.createElement(t);return n=n||"",e=e||"",r.className=n,e!==void 0&&(r.textContent=e),r}function clearNode(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function findParent(t,n){if(n(t))return t;if(t.parentNode)return findParent(t.parentNode,n)}function createNumberInput(t,n){var e=createElement("div","numInputWrapper"),r=createElement("input","numInput "+t),a=createElement("span","arrowUp"),s=createElement("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?r.type="number":(r.type="text",r.pattern="\\d*"),n!==void 0)for(var o in n)r.setAttribute(o,n[o]);return e.appendChild(r),e.appendChild(a),e.appendChild(s),e}function getEventTarget(t){try{if(typeof t.composedPath=="function"){var n=t.composedPath();return n[0]}return t.target}catch{return t.target}}var doNothing=function(){},monthToStr=function(t,n,e){return e.months[n?"shorthand":"longhand"][t]},revFormat={D:doNothing,F:function(t,n,e){t.setMonth(e.months.longhand.indexOf(n))},G:function(t,n){t.setHours((t.getHours()>=12?12:0)+parseFloat(n))},H:function(t,n){t.setHours(parseFloat(n))},J:function(t,n){t.setDate(parseFloat(n))},K:function(t,n,e){t.setHours(t.getHours()%12+12*int(new RegExp(e.amPM[1],"i").test(n)))},M:function(t,n,e){t.setMonth(e.months.shorthand.indexOf(n))},S:function(t,n){t.setSeconds(parseFloat(n))},U:function(t,n){return new Date(parseFloat(n)*1e3)},W:function(t,n,e){var r=parseInt(n),a=new Date(t.getFullYear(),0,2+(r-1)*7,0,0,0,0);return a.setDate(a.getDate()-a.getDay()+e.firstDayOfWeek),a},Y:function(t,n){t.setFullYear(parseFloat(n))},Z:function(t,n){return new Date(n)},d:function(t,n){t.setDate(parseFloat(n))},h:function(t,n){t.setHours((t.getHours()>=12?12:0)+parseFloat(n))},i:function(t,n){t.setMinutes(parseFloat(n))},j:function(t,n){t.setDate(parseFloat(n))},l:doNothing,m:function(t,n){t.setMonth(parseFloat(n)-1)},n:function(t,n){t.setMonth(parseFloat(n)-1)},s:function(t,n){t.setSeconds(parseFloat(n))},u:function(t,n){return new Date(parseFloat(n))},w:doNothing,y:function(t,n){t.setFullYear(2e3+parseFloat(n))}},tokenRegex={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},formats={Z:function(t){return t.toISOString()},D:function(t,n,e){return n.weekdays.shorthand[formats.w(t,n,e)]},F:function(t,n,e){return monthToStr(formats.n(t,n,e)-1,!1,n)},G:function(t,n,e){return pad(formats.h(t,n,e))},H:function(t){return pad(t.getHours())},J:function(t,n){return n.ordinal!==void 0?t.getDate()+n.ordinal(t.getDate()):t.getDate()},K:function(t,n){return n.amPM[int(t.getHours()>11)]},M:function(t,n){return monthToStr(t.getMonth(),!0,n)},S:function(t){return pad(t.getSeconds())},U:function(t){return t.getTime()/1e3},W:function(t,n,e){return e.getWeek(t)},Y:function(t){return pad(t.getFullYear(),4)},d:function(t){return pad(t.getDate())},h:function(t){return t.getHours()%12?t.getHours()%12:12},i:function(t){return pad(t.getMinutes())},j:function(t){return t.getDate()},l:function(t,n){return n.weekdays.longhand[t.getDay()]},m:function(t){return pad(t.getMonth()+1)},n:function(t){return t.getMonth()+1},s:function(t){return t.getSeconds()},u:function(t){return t.getTime()},w:function(t){return t.getDay()},y:function(t){return String(t.getFullYear()).substring(2)}},createDateFormatter=function(t){var n=t.config,e=n===void 0?defaults$1:n,r=t.l10n,a=r===void 0?english:r,s=t.isMobile,o=s===void 0?!1:s;return function(l,u,f){var d=f||a;return e.formatDate!==void 0&&!o?e.formatDate(l,u,d):u.split("").map(function(p,v,y){return formats[p]&&y[v-1]!=="\\"?formats[p](l,d,e):p!=="\\"?p:""}).join("")}},createDateParser=function(t){var n=t.config,e=n===void 0?defaults$1:n,r=t.l10n,a=r===void 0?english:r;return function(s,o,l,u){if(!(s!==0&&!s)){var f=u||a,d,p=s;if(s instanceof Date)d=new Date(s.getTime());else if(typeof s!="string"&&s.toFixed!==void 0)d=new Date(s);else if(typeof s=="string"){var v=o||(e||defaults$1).dateFormat,y=String(s).trim();if(y==="today")d=new Date,l=!0;else if(e&&e.parseDate)d=e.parseDate(s,v);else if(/Z$/.test(y)||/GMT$/.test(y))d=new Date(s);else{for(var x=void 0,S=[],D=0,A=0,I="";D<v.length;D++){var W=v[D],N=W==="\\",U=v[D-1]==="\\"||N;if(tokenRegex[W]&&!U){I+=tokenRegex[W];var J=new RegExp(I).exec(s);J&&(x=!0)&&S[W!=="Y"?"push":"unshift"]({fn:revFormat[W],val:J[++A]})}else N||(I+=".")}d=!e||!e.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),S.forEach(function(m){var ne=m.fn,ie=m.val;return d=ne(d,ie,f)||d}),d=x?d:void 0}}if(!(d instanceof Date&&!isNaN(d.getTime()))){e.errorHandler(new Error("Invalid date provided: "+p));return}return l===!0&&d.setHours(0,0,0,0),d}}};function compareDates(t,n,e){return e===void 0&&(e=!0),e!==!1?new Date(t.getTime()).setHours(0,0,0,0)-new Date(n.getTime()).setHours(0,0,0,0):t.getTime()-n.getTime()}var isBetween=function(t,n,e){return t>Math.min(n,e)&&t<Math.max(n,e)},calculateSecondsSinceMidnight=function(t,n,e){return t*3600+n*60+e},parseSeconds=function(t){var n=Math.floor(t/3600),e=(t-n*3600)/60;return[n,e,t-n*3600-e*60]},duration={DAY:864e5};function getDefaultHours(t){var n=t.defaultHour,e=t.defaultMinute,r=t.defaultSeconds;if(t.minDate!==void 0){var a=t.minDate.getHours(),s=t.minDate.getMinutes(),o=t.minDate.getSeconds();n<a&&(n=a),n===a&&e<s&&(e=s),n===a&&e===s&&r<o&&(r=t.minDate.getSeconds())}if(t.maxDate!==void 0){var l=t.maxDate.getHours(),u=t.maxDate.getMinutes();n=Math.min(n,l),n===l&&(e=Math.min(u,e)),n===l&&e===u&&(r=t.maxDate.getSeconds())}return{hours:n,minutes:e,seconds:r}}typeof Object.assign!="function"&&(Object.assign=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];if(!t)throw TypeError("Cannot convert undefined or null to object");for(var r=function(l){l&&Object.keys(l).forEach(function(u){return t[u]=l[u]})},a=0,s=n;a<s.length;a++){var o=s[a];r(o)}return t});var __assign=function(){return __assign=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++){n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},__assign.apply(this,arguments)},__spreadArrays=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;for(var r=Array(t),a=0,n=0;n<e;n++)for(var s=arguments[n],o=0,l=s.length;o<l;o++,a++)r[a]=s[o];return r},DEBOUNCED_CHANGE_MS=300;function FlatpickrInstance(t,n){var e={config:__assign(__assign({},defaults$1),flatpickr.defaultConfig),l10n:english};e.parseDate=createDateParser({config:e.config,l10n:e.l10n}),e._handlers=[],e.pluginElements=[],e.loadedPlugins=[],e._bind=S,e._setHoursFromDate=v,e._positionCalendar=xt,e.changeMonth=Xe,e.changeYear=ze,e.clear=Ve,e.close=et,e.onMouseOver=yt,e._createElement=createElement,e.createDay=J,e.destroy=it,e.isEnabled=tt,e.jumpToDate=I,e.updateValue=lt,e.open=qn,e.redraw=Ye,e.set=st,e.setDate=ai,e.toggle=Ht;function r(){e.utils={getDaysInMonth:function(O,k){return O===void 0&&(O=e.currentMonth),k===void 0&&(k=e.currentYear),O===1&&(k%4===0&&k%100!==0||k%400===0)?29:e.l10n.daysInMonth[O]}}}function a(){e.element=e.input=t,e.isOpen=!1,Mn(),ot(),Kn(),Tt(),r(),e.isMobile||U(),A(),(e.selectedDates.length||e.config.noCalendar)&&(e.config.enableTime&&v(e.config.noCalendar?e.latestSelectedDateObj:void 0),lt(!1)),l();var O=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!e.isMobile&&O&&xt(),We("onReady")}function s(){var O;return((O=e.calendarContainer)===null||O===void 0?void 0:O.getRootNode()).activeElement||document.activeElement}function o(O){return O.bind(e)}function l(){var O=e.config;O.weekNumbers===!1&&O.showMonths===1||O.noCalendar!==!0&&window.requestAnimationFrame(function(){if(e.calendarContainer!==void 0&&(e.calendarContainer.style.visibility="hidden",e.calendarContainer.style.display="block"),e.daysContainer!==void 0){var k=(e.days.offsetWidth+1)*O.showMonths;e.daysContainer.style.width=k+"px",e.calendarContainer.style.width=k+(e.weekWrapper!==void 0?e.weekWrapper.offsetWidth:0)+"px",e.calendarContainer.style.removeProperty("visibility"),e.calendarContainer.style.removeProperty("display")}})}function u(O){if(e.selectedDates.length===0){var k=e.config.minDate===void 0||compareDates(new Date,e.config.minDate)>=0?new Date:new Date(e.config.minDate.getTime()),B=getDefaultHours(e.config);k.setHours(B.hours,B.minutes,B.seconds,k.getMilliseconds()),e.selectedDates=[k],e.latestSelectedDateObj=k}O!==void 0&&O.type!=="blur"&&Xn(O);var Q=e._input.value;p(),lt(),e._input.value!==Q&&e._debouncedChange()}function f(O,k){return O%12+12*int(k===e.l10n.amPM[1])}function d(O){switch(O%24){case 0:case 12:return 12;default:return O%12}}function p(){if(!(e.hourElement===void 0||e.minuteElement===void 0)){var O=(parseInt(e.hourElement.value.slice(-2),10)||0)%24,k=(parseInt(e.minuteElement.value,10)||0)%60,B=e.secondElement!==void 0?(parseInt(e.secondElement.value,10)||0)%60:0;e.amPM!==void 0&&(O=f(O,e.amPM.textContent));var Q=e.config.minTime!==void 0||e.config.minDate&&e.minDateHasTime&&e.latestSelectedDateObj&&compareDates(e.latestSelectedDateObj,e.config.minDate,!0)===0,oe=e.config.maxTime!==void 0||e.config.maxDate&&e.maxDateHasTime&&e.latestSelectedDateObj&&compareDates(e.latestSelectedDateObj,e.config.maxDate,!0)===0;if(e.config.maxTime!==void 0&&e.config.minTime!==void 0&&e.config.minTime>e.config.maxTime){var le=calculateSecondsSinceMidnight(e.config.minTime.getHours(),e.config.minTime.getMinutes(),e.config.minTime.getSeconds()),Oe=calculateSecondsSinceMidnight(e.config.maxTime.getHours(),e.config.maxTime.getMinutes(),e.config.maxTime.getSeconds()),de=calculateSecondsSinceMidnight(O,k,B);if(de>Oe&&de<le){var Te=parseSeconds(le);O=Te[0],k=Te[1],B=Te[2]}}else{if(oe){var he=e.config.maxTime!==void 0?e.config.maxTime:e.config.maxDate;O=Math.min(O,he.getHours()),O===he.getHours()&&(k=Math.min(k,he.getMinutes())),k===he.getMinutes()&&(B=Math.min(B,he.getSeconds()))}if(Q){var Ce=e.config.minTime!==void 0?e.config.minTime:e.config.minDate;O=Math.max(O,Ce.getHours()),O===Ce.getHours()&&k<Ce.getMinutes()&&(k=Ce.getMinutes()),k===Ce.getMinutes()&&(B=Math.max(B,Ce.getSeconds()))}}y(O,k,B)}}function v(O){var k=O||e.latestSelectedDateObj;k&&k instanceof Date&&y(k.getHours(),k.getMinutes(),k.getSeconds())}function y(O,k,B){e.latestSelectedDateObj!==void 0&&e.latestSelectedDateObj.setHours(O%24,k,B||0,0),!(!e.hourElement||!e.minuteElement||e.isMobile)&&(e.hourElement.value=pad(e.config.time_24hr?O:(12+O)%12+12*int(O%12===0)),e.minuteElement.value=pad(k),e.amPM!==void 0&&(e.amPM.textContent=e.l10n.amPM[int(O>=12)]),e.secondElement!==void 0&&(e.secondElement.value=pad(B)))}function x(O){var k=getEventTarget(O),B=parseInt(k.value)+(O.delta||0);(B/1e3>1||O.key==="Enter"&&!/[^\d]/.test(B.toString()))&&ze(B)}function S(O,k,B,Q){if(k instanceof Array)return k.forEach(function(oe){return S(O,oe,B,Q)});if(O instanceof Array)return O.forEach(function(oe){return S(oe,k,B,Q)});O.addEventListener(k,B,Q),e._handlers.push({remove:function(){return O.removeEventListener(k,B,Q)}})}function D(){We("onChange")}function A(){if(e.config.wrap&&["open","close","toggle","clear"].forEach(function(B){Array.prototype.forEach.call(e.element.querySelectorAll("[data-"+B+"]"),function(Q){return S(Q,"click",e[B])})}),e.isMobile){Ct();return}var O=debounce$1(bn,50);if(e._debouncedChange=debounce$1(D,DEBOUNCED_CHANGE_MS),e.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&S(e.daysContainer,"mouseover",function(B){e.config.mode==="range"&&yt(getEventTarget(B))}),S(e._input,"keydown",Pn),e.calendarContainer!==void 0&&S(e.calendarContainer,"keydown",Pn),!e.config.inline&&!e.config.static&&S(window,"resize",O),window.ontouchstart!==void 0?S(window.document,"touchstart",ke):S(window.document,"mousedown",ke),S(window.document,"focus",ke,{capture:!0}),e.config.clickOpens===!0&&(S(e._input,"focus",e.open),S(e._input,"click",e.open)),e.daysContainer!==void 0&&(S(e.monthNav,"click",Yt),S(e.monthNav,["keyup","increment"],x),S(e.daysContainer,"click",qt)),e.timeContainer!==void 0&&e.minuteElement!==void 0&&e.hourElement!==void 0){var k=function(B){return getEventTarget(B).select()};S(e.timeContainer,["increment"],u),S(e.timeContainer,"blur",u,{capture:!0}),S(e.timeContainer,"click",W),S([e.hourElement,e.minuteElement],["focus","click"],k),e.secondElement!==void 0&&S(e.secondElement,"focus",function(){return e.secondElement&&e.secondElement.select()}),e.amPM!==void 0&&S(e.amPM,"click",function(B){u(B)})}e.config.allowInput&&S(e._input,"blur",gt)}function I(O,k){var B=O!==void 0?e.parseDate(O):e.latestSelectedDateObj||(e.config.minDate&&e.config.minDate>e.now?e.config.minDate:e.config.maxDate&&e.config.maxDate<e.now?e.config.maxDate:e.now),Q=e.currentYear,oe=e.currentMonth;try{B!==void 0&&(e.currentYear=B.getFullYear(),e.currentMonth=B.getMonth())}catch(le){le.message="Invalid date supplied: "+B,e.config.errorHandler(le)}k&&e.currentYear!==Q&&(We("onYearChange"),ue()),k&&(e.currentYear!==Q||e.currentMonth!==oe)&&We("onMonthChange"),e.redraw()}function W(O){var k=getEventTarget(O);~k.className.indexOf("arrow")&&N(O,k.classList.contains("arrowUp")?1:-1)}function N(O,k,B){var Q=O&&getEventTarget(O),oe=B||Q&&Q.parentNode&&Q.parentNode.firstChild,le=In("increment");le.delta=k,oe&&oe.dispatchEvent(le)}function U(){var O=window.document.createDocumentFragment();if(e.calendarContainer=createElement("div","flatpickr-calendar"),e.calendarContainer.tabIndex=-1,!e.config.noCalendar){if(O.appendChild(we()),e.innerContainer=createElement("div","flatpickr-innerContainer"),e.config.weekNumbers){var k=ct(),B=k.weekWrapper,Q=k.weekNumbers;e.innerContainer.appendChild(B),e.weekNumbers=Q,e.weekWrapper=B}e.rContainer=createElement("div","flatpickr-rContainer"),e.rContainer.appendChild(je()),e.daysContainer||(e.daysContainer=createElement("div","flatpickr-days"),e.daysContainer.tabIndex=-1),_e(),e.rContainer.appendChild(e.daysContainer),e.innerContainer.appendChild(e.rContainer),O.appendChild(e.innerContainer)}e.config.enableTime&&O.appendChild(xe()),toggleClass(e.calendarContainer,"rangeMode",e.config.mode==="range"),toggleClass(e.calendarContainer,"animate",e.config.animate===!0),toggleClass(e.calendarContainer,"multiMonth",e.config.showMonths>1),e.calendarContainer.appendChild(O);var oe=e.config.appendTo!==void 0&&e.config.appendTo.nodeType!==void 0;if((e.config.inline||e.config.static)&&(e.calendarContainer.classList.add(e.config.inline?"inline":"static"),e.config.inline&&(!oe&&e.element.parentNode?e.element.parentNode.insertBefore(e.calendarContainer,e._input.nextSibling):e.config.appendTo!==void 0&&e.config.appendTo.appendChild(e.calendarContainer)),e.config.static)){var le=createElement("div","flatpickr-wrapper");e.element.parentNode&&e.element.parentNode.insertBefore(le,e.element),le.appendChild(e.element),e.altInput&&le.appendChild(e.altInput),le.appendChild(e.calendarContainer)}!e.config.static&&!e.config.inline&&(e.config.appendTo!==void 0?e.config.appendTo:window.document.body).appendChild(e.calendarContainer)}function J(O,k,B,Q){var oe=tt(k,!0),le=createElement("span",O,k.getDate().toString());return le.dateObj=k,le.$i=Q,le.setAttribute("aria-label",e.formatDate(k,e.config.ariaDateFormat)),O.indexOf("hidden")===-1&&compareDates(k,e.now)===0&&(e.todayDateElem=le,le.classList.add("today"),le.setAttribute("aria-current","date")),oe?(le.tabIndex=-1,Et(k)&&(le.classList.add("selected"),e.selectedDateElem=le,e.config.mode==="range"&&(toggleClass(le,"startRange",e.selectedDates[0]&&compareDates(k,e.selectedDates[0],!0)===0),toggleClass(le,"endRange",e.selectedDates[1]&&compareDates(k,e.selectedDates[1],!0)===0),O==="nextMonthDay"&&le.classList.add("inRange")))):le.classList.add("flatpickr-disabled"),e.config.mode==="range"&&un(k)&&!Et(k)&&le.classList.add("inRange"),e.weekNumbers&&e.config.showMonths===1&&O!=="prevMonthDay"&&Q%7===6&&e.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+e.config.getWeek(k)+"</span>"),We("onDayCreate",le),le}function m(O){O.focus(),e.config.mode==="range"&&yt(O)}function ne(O){for(var k=O>0?0:e.config.showMonths-1,B=O>0?e.config.showMonths:-1,Q=k;Q!=B;Q+=O)for(var oe=e.daysContainer.children[Q],le=O>0?0:oe.children.length-1,Oe=O>0?oe.children.length:-1,de=le;de!=Oe;de+=O){var Te=oe.children[de];if(Te.className.indexOf("hidden")===-1&&tt(Te.dateObj))return Te}}function ie(O,k){for(var B=O.className.indexOf("Month")===-1?O.dateObj.getMonth():e.currentMonth,Q=k>0?e.config.showMonths:-1,oe=k>0?1:-1,le=B-e.currentMonth;le!=Q;le+=oe)for(var Oe=e.daysContainer.children[le],de=B-e.currentMonth===le?O.$i+k:k<0?Oe.children.length-1:0,Te=Oe.children.length,he=de;he>=0&&he<Te&&he!=(k>0?Te:-1);he+=oe){var Ce=Oe.children[he];if(Ce.className.indexOf("hidden")===-1&&tt(Ce.dateObj)&&Math.abs(O.$i-he)>=Math.abs(k))return m(Ce)}e.changeMonth(oe),ge(ne(oe),0)}function ge(O,k){var B=s(),Q=sn(B||document.body),oe=O!==void 0?O:Q?B:e.selectedDateElem!==void 0&&sn(e.selectedDateElem)?e.selectedDateElem:e.todayDateElem!==void 0&&sn(e.todayDateElem)?e.todayDateElem:ne(k>0?1:-1);oe===void 0?e._input.focus():Q?ie(oe,k):m(oe)}function ve(O,k){for(var B=(new Date(O,k,1).getDay()-e.l10n.firstDayOfWeek+7)%7,Q=e.utils.getDaysInMonth((k-1+12)%12,O),oe=e.utils.getDaysInMonth(k,O),le=window.document.createDocumentFragment(),Oe=e.config.showMonths>1,de=Oe?"prevMonthDay hidden":"prevMonthDay",Te=Oe?"nextMonthDay hidden":"nextMonthDay",he=Q+1-B,Ce=0;he<=Q;he++,Ce++)le.appendChild(J("flatpickr-day "+de,new Date(O,k-1,he),he,Ce));for(he=1;he<=oe;he++,Ce++)le.appendChild(J("flatpickr-day",new Date(O,k,he),he,Ce));for(var Be=oe+1;Be<=42-B&&(e.config.showMonths===1||Ce%7!==0);Be++,Ce++)le.appendChild(J("flatpickr-day "+Te,new Date(O,k+1,Be%oe),Be,Ce));var mt=createElement("div","dayContainer");return mt.appendChild(le),mt}function _e(){if(e.daysContainer!==void 0){clearNode(e.daysContainer),e.weekNumbers&&clearNode(e.weekNumbers);for(var O=document.createDocumentFragment(),k=0;k<e.config.showMonths;k++){var B=new Date(e.currentYear,e.currentMonth,1);B.setMonth(e.currentMonth+k),O.appendChild(ve(B.getFullYear(),B.getMonth()))}e.daysContainer.appendChild(O),e.days=e.daysContainer.firstChild,e.config.mode==="range"&&e.selectedDates.length===1&&yt()}}function ue(){if(!(e.config.showMonths>1||e.config.monthSelectorType!=="dropdown")){var O=function(Q){return e.config.minDate!==void 0&&e.currentYear===e.config.minDate.getFullYear()&&Q<e.config.minDate.getMonth()?!1:!(e.config.maxDate!==void 0&&e.currentYear===e.config.maxDate.getFullYear()&&Q>e.config.maxDate.getMonth())};e.monthsDropdownContainer.tabIndex=-1,e.monthsDropdownContainer.innerHTML="";for(var k=0;k<12;k++)if(O(k)){var B=createElement("option","flatpickr-monthDropdown-month");B.value=new Date(e.currentYear,k).getMonth().toString(),B.textContent=monthToStr(k,e.config.shorthandCurrentMonth,e.l10n),B.tabIndex=-1,e.currentMonth===k&&(B.selected=!0),e.monthsDropdownContainer.appendChild(B)}}}function He(){var O=createElement("div","flatpickr-month"),k=window.document.createDocumentFragment(),B;e.config.showMonths>1||e.config.monthSelectorType==="static"?B=createElement("span","cur-month"):(e.monthsDropdownContainer=createElement("select","flatpickr-monthDropdown-months"),e.monthsDropdownContainer.setAttribute("aria-label",e.l10n.monthAriaLabel),S(e.monthsDropdownContainer,"change",function(Oe){var de=getEventTarget(Oe),Te=parseInt(de.value,10);e.changeMonth(Te-e.currentMonth),We("onMonthChange")}),ue(),B=e.monthsDropdownContainer);var Q=createNumberInput("cur-year",{tabindex:"-1"}),oe=Q.getElementsByTagName("input")[0];oe.setAttribute("aria-label",e.l10n.yearAriaLabel),e.config.minDate&&oe.setAttribute("min",e.config.minDate.getFullYear().toString()),e.config.maxDate&&(oe.setAttribute("max",e.config.maxDate.getFullYear().toString()),oe.disabled=!!e.config.minDate&&e.config.minDate.getFullYear()===e.config.maxDate.getFullYear());var le=createElement("div","flatpickr-current-month");return le.appendChild(B),le.appendChild(Q),k.appendChild(le),O.appendChild(k),{container:O,yearElement:oe,monthElement:B}}function pe(){clearNode(e.monthNav),e.monthNav.appendChild(e.prevMonthNav),e.config.showMonths&&(e.yearElements=[],e.monthElements=[]);for(var O=e.config.showMonths;O--;){var k=He();e.yearElements.push(k.yearElement),e.monthElements.push(k.monthElement),e.monthNav.appendChild(k.container)}e.monthNav.appendChild(e.nextMonthNav)}function we(){return e.monthNav=createElement("div","flatpickr-months"),e.yearElements=[],e.monthElements=[],e.prevMonthNav=createElement("span","flatpickr-prev-month"),e.prevMonthNav.innerHTML=e.config.prevArrow,e.nextMonthNav=createElement("span","flatpickr-next-month"),e.nextMonthNav.innerHTML=e.config.nextArrow,pe(),Object.defineProperty(e,"_hidePrevMonthArrow",{get:function(){return e.__hidePrevMonthArrow},set:function(O){e.__hidePrevMonthArrow!==O&&(toggleClass(e.prevMonthNav,"flatpickr-disabled",O),e.__hidePrevMonthArrow=O)}}),Object.defineProperty(e,"_hideNextMonthArrow",{get:function(){return e.__hideNextMonthArrow},set:function(O){e.__hideNextMonthArrow!==O&&(toggleClass(e.nextMonthNav,"flatpickr-disabled",O),e.__hideNextMonthArrow=O)}}),e.currentYearElement=e.yearElements[0],cn(),e.monthNav}function xe(){e.calendarContainer.classList.add("hasTime"),e.config.noCalendar&&e.calendarContainer.classList.add("noCalendar");var O=getDefaultHours(e.config);e.timeContainer=createElement("div","flatpickr-time"),e.timeContainer.tabIndex=-1;var k=createElement("span","flatpickr-time-separator",":"),B=createNumberInput("flatpickr-hour",{"aria-label":e.l10n.hourAriaLabel});e.hourElement=B.getElementsByTagName("input")[0];var Q=createNumberInput("flatpickr-minute",{"aria-label":e.l10n.minuteAriaLabel});if(e.minuteElement=Q.getElementsByTagName("input")[0],e.hourElement.tabIndex=e.minuteElement.tabIndex=-1,e.hourElement.value=pad(e.latestSelectedDateObj?e.latestSelectedDateObj.getHours():e.config.time_24hr?O.hours:d(O.hours)),e.minuteElement.value=pad(e.latestSelectedDateObj?e.latestSelectedDateObj.getMinutes():O.minutes),e.hourElement.setAttribute("step",e.config.hourIncrement.toString()),e.minuteElement.setAttribute("step",e.config.minuteIncrement.toString()),e.hourElement.setAttribute("min",e.config.time_24hr?"0":"1"),e.hourElement.setAttribute("max",e.config.time_24hr?"23":"12"),e.hourElement.setAttribute("maxlength","2"),e.minuteElement.setAttribute("min","0"),e.minuteElement.setAttribute("max","59"),e.minuteElement.setAttribute("maxlength","2"),e.timeContainer.appendChild(B),e.timeContainer.appendChild(k),e.timeContainer.appendChild(Q),e.config.time_24hr&&e.timeContainer.classList.add("time24hr"),e.config.enableSeconds){e.timeContainer.classList.add("hasSeconds");var oe=createNumberInput("flatpickr-second");e.secondElement=oe.getElementsByTagName("input")[0],e.secondElement.value=pad(e.latestSelectedDateObj?e.latestSelectedDateObj.getSeconds():O.seconds),e.secondElement.setAttribute("step",e.minuteElement.getAttribute("step")),e.secondElement.setAttribute("min","0"),e.secondElement.setAttribute("max","59"),e.secondElement.setAttribute("maxlength","2"),e.timeContainer.appendChild(createElement("span","flatpickr-time-separator",":")),e.timeContainer.appendChild(oe)}return e.config.time_24hr||(e.amPM=createElement("span","flatpickr-am-pm",e.l10n.amPM[int((e.latestSelectedDateObj?e.hourElement.value:e.config.defaultHour)>11)]),e.amPM.title=e.l10n.toggleTitle,e.amPM.tabIndex=-1,e.timeContainer.appendChild(e.amPM)),e.timeContainer}function je(){e.weekdayContainer?clearNode(e.weekdayContainer):e.weekdayContainer=createElement("div","flatpickr-weekdays");for(var O=e.config.showMonths;O--;){var k=createElement("div","flatpickr-weekdaycontainer");e.weekdayContainer.appendChild(k)}return Le(),e.weekdayContainer}function Le(){if(e.weekdayContainer){var O=e.l10n.firstDayOfWeek,k=__spreadArrays(e.l10n.weekdays.shorthand);O>0&&O<k.length&&(k=__spreadArrays(k.splice(O,k.length),k.splice(0,O)));for(var B=e.config.showMonths;B--;)e.weekdayContainer.children[B].innerHTML=`
      <span class='flatpickr-weekday'>
        `+k.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function ct(){e.calendarContainer.classList.add("hasWeeks");var O=createElement("div","flatpickr-weekwrapper");O.appendChild(createElement("span","flatpickr-weekday",e.l10n.weekAbbreviation));var k=createElement("div","flatpickr-weeks");return O.appendChild(k),{weekWrapper:O,weekNumbers:k}}function Xe(O,k){k===void 0&&(k=!0);var B=k?O:O-e.currentMonth;B<0&&e._hidePrevMonthArrow===!0||B>0&&e._hideNextMonthArrow===!0||(e.currentMonth+=B,(e.currentMonth<0||e.currentMonth>11)&&(e.currentYear+=e.currentMonth>11?1:-1,e.currentMonth=(e.currentMonth+12)%12,We("onYearChange"),ue()),_e(),We("onMonthChange"),cn())}function Ve(O,k){if(O===void 0&&(O=!0),k===void 0&&(k=!0),e.input.value="",e.altInput!==void 0&&(e.altInput.value=""),e.mobileInput!==void 0&&(e.mobileInput.value=""),e.selectedDates=[],e.latestSelectedDateObj=void 0,k===!0&&(e.currentYear=e._initialDate.getFullYear(),e.currentMonth=e._initialDate.getMonth()),e.config.enableTime===!0){var B=getDefaultHours(e.config),Q=B.hours,oe=B.minutes,le=B.seconds;y(Q,oe,le)}e.redraw(),O&&We("onChange")}function et(){e.isOpen=!1,e.isMobile||(e.calendarContainer!==void 0&&e.calendarContainer.classList.remove("open"),e._input!==void 0&&e._input.classList.remove("active")),We("onClose")}function it(){e.config!==void 0&&We("onDestroy");for(var O=e._handlers.length;O--;)e._handlers[O].remove();if(e._handlers=[],e.mobileInput)e.mobileInput.parentNode&&e.mobileInput.parentNode.removeChild(e.mobileInput),e.mobileInput=void 0;else if(e.calendarContainer&&e.calendarContainer.parentNode)if(e.config.static&&e.calendarContainer.parentNode){var k=e.calendarContainer.parentNode;if(k.lastChild&&k.removeChild(k.lastChild),k.parentNode){for(;k.firstChild;)k.parentNode.insertBefore(k.firstChild,k);k.parentNode.removeChild(k)}}else e.calendarContainer.parentNode.removeChild(e.calendarContainer);e.altInput&&(e.input.type="text",e.altInput.parentNode&&e.altInput.parentNode.removeChild(e.altInput),delete e.altInput),e.input&&(e.input.type=e.input._type,e.input.classList.remove("flatpickr-input"),e.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(B){try{delete e[B]}catch{}})}function Ge(O){return e.calendarContainer.contains(O)}function ke(O){if(e.isOpen&&!e.config.inline){var k=getEventTarget(O),B=Ge(k),Q=k===e.input||k===e.altInput||e.element.contains(k)||O.path&&O.path.indexOf&&(~O.path.indexOf(e.input)||~O.path.indexOf(e.altInput)),oe=!Q&&!B&&!Ge(O.relatedTarget),le=!e.config.ignoredFocusElements.some(function(Oe){return Oe.contains(k)});oe&&le&&(e.config.allowInput&&e.setDate(e._input.value,!1,e.config.altInput?e.config.altFormat:e.config.dateFormat),e.timeContainer!==void 0&&e.minuteElement!==void 0&&e.hourElement!==void 0&&e.input.value!==""&&e.input.value!==void 0&&u(),e.close(),e.config&&e.config.mode==="range"&&e.selectedDates.length===1&&e.clear(!1))}}function ze(O){if(!(!O||e.config.minDate&&O<e.config.minDate.getFullYear()||e.config.maxDate&&O>e.config.maxDate.getFullYear())){var k=O,B=e.currentYear!==k;e.currentYear=k||e.currentYear,e.config.maxDate&&e.currentYear===e.config.maxDate.getFullYear()?e.currentMonth=Math.min(e.config.maxDate.getMonth(),e.currentMonth):e.config.minDate&&e.currentYear===e.config.minDate.getFullYear()&&(e.currentMonth=Math.max(e.config.minDate.getMonth(),e.currentMonth)),B&&(e.redraw(),We("onYearChange"),ue())}}function tt(O,k){var B;k===void 0&&(k=!0);var Q=e.parseDate(O,void 0,k);if(e.config.minDate&&Q&&compareDates(Q,e.config.minDate,k!==void 0?k:!e.minDateHasTime)<0||e.config.maxDate&&Q&&compareDates(Q,e.config.maxDate,k!==void 0?k:!e.maxDateHasTime)>0)return!1;if(!e.config.enable&&e.config.disable.length===0)return!0;if(Q===void 0)return!1;for(var oe=!!e.config.enable,le=(B=e.config.enable)!==null&&B!==void 0?B:e.config.disable,Oe=0,de=void 0;Oe<le.length;Oe++){if(de=le[Oe],typeof de=="function"&&de(Q))return oe;if(de instanceof Date&&Q!==void 0&&de.getTime()===Q.getTime())return oe;if(typeof de=="string"){var Te=e.parseDate(de,void 0,!0);return Te&&Te.getTime()===Q.getTime()?oe:!oe}else if(typeof de=="object"&&Q!==void 0&&de.from&&de.to&&Q.getTime()>=de.from.getTime()&&Q.getTime()<=de.to.getTime())return oe}return!oe}function sn(O){return e.daysContainer!==void 0?O.className.indexOf("hidden")===-1&&O.className.indexOf("flatpickr-disabled")===-1&&e.daysContainer.contains(O):!1}function gt(O){var k=O.target===e._input,B=e._input.value.trimEnd()!==Ln();k&&B&&!(O.relatedTarget&&Ge(O.relatedTarget))&&e.setDate(e._input.value,!0,O.target===e.altInput?e.config.altFormat:e.config.dateFormat)}function Pn(O){var k=getEventTarget(O),B=e.config.wrap?t.contains(k):k===e._input,Q=e.config.allowInput,oe=e.isOpen&&(!Q||!B),le=e.config.inline&&B&&!Q;if(O.keyCode===13&&B){if(Q)return e.setDate(e._input.value,!0,k===e.altInput?e.config.altFormat:e.config.dateFormat),e.close(),k.blur();e.open()}else if(Ge(k)||oe||le){var Oe=!!e.timeContainer&&e.timeContainer.contains(k);switch(O.keyCode){case 13:Oe?(O.preventDefault(),u(),wt()):qt(O);break;case 27:O.preventDefault(),wt();break;case 8:case 46:B&&!e.config.allowInput&&(O.preventDefault(),e.clear());break;case 37:case 39:if(!Oe&&!B){O.preventDefault();var de=s();if(e.daysContainer!==void 0&&(Q===!1||de&&sn(de))){var Te=O.keyCode===39?1:-1;O.ctrlKey?(O.stopPropagation(),Xe(Te),ge(ne(1),0)):ge(void 0,Te)}}else e.hourElement&&e.hourElement.focus();break;case 38:case 40:O.preventDefault();var he=O.keyCode===40?1:-1;e.daysContainer&&k.$i!==void 0||k===e.input||k===e.altInput?O.ctrlKey?(O.stopPropagation(),ze(e.currentYear-he),ge(ne(1),0)):Oe||ge(void 0,he*7):k===e.currentYearElement?ze(e.currentYear-he):e.config.enableTime&&(!Oe&&e.hourElement&&e.hourElement.focus(),u(O),e._debouncedChange());break;case 9:if(Oe){var Ce=[e.hourElement,e.minuteElement,e.secondElement,e.amPM].concat(e.pluginElements).filter(function(ft){return ft}),Be=Ce.indexOf(k);if(Be!==-1){var mt=Ce[Be+(O.shiftKey?-1:1)];O.preventDefault(),(mt||e._input).focus()}}else!e.config.noCalendar&&e.daysContainer&&e.daysContainer.contains(k)&&O.shiftKey&&(O.preventDefault(),e._input.focus());break}}if(e.amPM!==void 0&&k===e.amPM)switch(O.key){case e.l10n.amPM[0].charAt(0):case e.l10n.amPM[0].charAt(0).toLowerCase():e.amPM.textContent=e.l10n.amPM[0],p(),lt();break;case e.l10n.amPM[1].charAt(0):case e.l10n.amPM[1].charAt(0).toLowerCase():e.amPM.textContent=e.l10n.amPM[1],p(),lt();break}(B||Ge(k))&&We("onKeyDown",O)}function yt(O,k){if(k===void 0&&(k="flatpickr-day"),!(e.selectedDates.length!==1||O&&(!O.classList.contains(k)||O.classList.contains("flatpickr-disabled")))){for(var B=O?O.dateObj.getTime():e.days.firstElementChild.dateObj.getTime(),Q=e.parseDate(e.selectedDates[0],void 0,!0).getTime(),oe=Math.min(B,e.selectedDates[0].getTime()),le=Math.max(B,e.selectedDates[0].getTime()),Oe=!1,de=0,Te=0,he=oe;he<le;he+=duration.DAY)tt(new Date(he),!0)||(Oe=Oe||he>oe&&he<le,he<Q&&(!de||he>de)?de=he:he>Q&&(!Te||he<Te)&&(Te=he));var Ce=Array.from(e.rContainer.querySelectorAll("*:nth-child(-n+"+e.config.showMonths+") > ."+k));Ce.forEach(function(Be){var mt=Be.dateObj,ft=mt.getTime(),Kt=de>0&&ft<de||Te>0&&ft>Te;if(Kt){Be.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(Xt){Be.classList.remove(Xt)});return}else if(Oe&&!Kt)return;["startRange","inRange","endRange","notAllowed"].forEach(function(Xt){Be.classList.remove(Xt)}),O!==void 0&&(O.classList.add(B<=e.selectedDates[0].getTime()?"startRange":"endRange"),Q<B&&ft===Q?Be.classList.add("startRange"):Q>B&&ft===Q&&Be.classList.add("endRange"),ft>=de&&(Te===0||ft<=Te)&&isBetween(ft,Q,B)&&Be.classList.add("inRange"))})}}function bn(){e.isOpen&&!e.config.static&&!e.config.inline&&xt()}function qn(O,k){if(k===void 0&&(k=e._positionElement),e.isMobile===!0){if(O){O.preventDefault();var B=getEventTarget(O);B&&B.blur()}e.mobileInput!==void 0&&(e.mobileInput.focus(),e.mobileInput.click()),We("onOpen");return}else if(e._input.disabled||e.config.inline)return;var Q=e.isOpen;e.isOpen=!0,Q||(e.calendarContainer.classList.add("open"),e._input.classList.add("active"),We("onOpen"),xt(k)),e.config.enableTime===!0&&e.config.noCalendar===!0&&e.config.allowInput===!1&&(O===void 0||!e.timeContainer.contains(O.relatedTarget))&&setTimeout(function(){return e.hourElement.select()},50)}function yn(O){return function(k){var B=e.config["_"+O+"Date"]=e.parseDate(k,e.config.dateFormat),Q=e.config["_"+(O==="min"?"max":"min")+"Date"];B!==void 0&&(e[O==="min"?"minDateHasTime":"maxDateHasTime"]=B.getHours()>0||B.getMinutes()>0||B.getSeconds()>0),e.selectedDates&&(e.selectedDates=e.selectedDates.filter(function(oe){return tt(oe)}),!e.selectedDates.length&&O==="min"&&v(B),lt()),e.daysContainer&&(Ye(),B!==void 0?e.currentYearElement[O]=B.getFullYear().toString():e.currentYearElement.removeAttribute(O),e.currentYearElement.disabled=!!Q&&B!==void 0&&Q.getFullYear()===B.getFullYear())}}function Mn(){var O=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],k=__assign(__assign({},JSON.parse(JSON.stringify(t.dataset||{}))),n),B={};e.config.parseDate=k.parseDate,e.config.formatDate=k.formatDate,Object.defineProperty(e.config,"enable",{get:function(){return e.config._enable},set:function(Ce){e.config._enable=Yn(Ce)}}),Object.defineProperty(e.config,"disable",{get:function(){return e.config._disable},set:function(Ce){e.config._disable=Yn(Ce)}});var Q=k.mode==="time";if(!k.dateFormat&&(k.enableTime||Q)){var oe=flatpickr.defaultConfig.dateFormat||defaults$1.dateFormat;B.dateFormat=k.noCalendar||Q?"H:i"+(k.enableSeconds?":S":""):oe+" H:i"+(k.enableSeconds?":S":"")}if(k.altInput&&(k.enableTime||Q)&&!k.altFormat){var le=flatpickr.defaultConfig.altFormat||defaults$1.altFormat;B.altFormat=k.noCalendar||Q?"h:i"+(k.enableSeconds?":S K":" K"):le+(" h:i"+(k.enableSeconds?":S":"")+" K")}Object.defineProperty(e.config,"minDate",{get:function(){return e.config._minDate},set:yn("min")}),Object.defineProperty(e.config,"maxDate",{get:function(){return e.config._maxDate},set:yn("max")});var Oe=function(Ce){return function(Be){e.config[Ce==="min"?"_minTime":"_maxTime"]=e.parseDate(Be,"H:i:S")}};Object.defineProperty(e.config,"minTime",{get:function(){return e.config._minTime},set:Oe("min")}),Object.defineProperty(e.config,"maxTime",{get:function(){return e.config._maxTime},set:Oe("max")}),k.mode==="time"&&(e.config.noCalendar=!0,e.config.enableTime=!0),Object.assign(e.config,B,k);for(var de=0;de<O.length;de++)e.config[O[de]]=e.config[O[de]]===!0||e.config[O[de]]==="true";HOOKS.filter(function(Ce){return e.config[Ce]!==void 0}).forEach(function(Ce){e.config[Ce]=arrayify(e.config[Ce]||[]).map(o)}),e.isMobile=!e.config.disableMobile&&!e.config.inline&&e.config.mode==="single"&&!e.config.disable.length&&!e.config.enable&&!e.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var de=0;de<e.config.plugins.length;de++){var Te=e.config.plugins[de](e)||{};for(var he in Te)HOOKS.indexOf(he)>-1?e.config[he]=arrayify(Te[he]).map(o).concat(e.config[he]):typeof k[he]>"u"&&(e.config[he]=Te[he])}k.altInputClass||(e.config.altInputClass=Ut().className+" "+e.config.altInputClass),We("onParseConfig")}function Ut(){return e.config.wrap?t.querySelector("[data-input]"):t}function ot(){typeof e.config.locale!="object"&&typeof flatpickr.l10ns[e.config.locale]>"u"&&e.config.errorHandler(new Error("flatpickr: invalid locale "+e.config.locale)),e.l10n=__assign(__assign({},flatpickr.l10ns.default),typeof e.config.locale=="object"?e.config.locale:e.config.locale!=="default"?flatpickr.l10ns[e.config.locale]:void 0),tokenRegex.D="("+e.l10n.weekdays.shorthand.join("|")+")",tokenRegex.l="("+e.l10n.weekdays.longhand.join("|")+")",tokenRegex.M="("+e.l10n.months.shorthand.join("|")+")",tokenRegex.F="("+e.l10n.months.longhand.join("|")+")",tokenRegex.K="("+e.l10n.amPM[0]+"|"+e.l10n.amPM[1]+"|"+e.l10n.amPM[0].toLowerCase()+"|"+e.l10n.amPM[1].toLowerCase()+")";var O=__assign(__assign({},n),JSON.parse(JSON.stringify(t.dataset||{})));O.time_24hr===void 0&&flatpickr.defaultConfig.time_24hr===void 0&&(e.config.time_24hr=e.l10n.time_24hr),e.formatDate=createDateFormatter(e),e.parseDate=createDateParser({config:e.config,l10n:e.l10n})}function xt(O){if(typeof e.config.position=="function")return void e.config.position(e,O);if(e.calendarContainer!==void 0){We("onPreCalendarPosition");var k=O||e._positionElement,B=Array.prototype.reduce.call(e.calendarContainer.children,(function(kt,fn){return kt+fn.offsetHeight}),0),Q=e.calendarContainer.offsetWidth,oe=e.config.position.split(" "),le=oe[0],Oe=oe.length>1?oe[1]:null,de=k.getBoundingClientRect(),Te=window.innerHeight-de.bottom,he=le==="above"||le!=="below"&&Te<B&&de.top>B,Ce=window.pageYOffset+de.top+(he?-B-2:k.offsetHeight+2);if(toggleClass(e.calendarContainer,"arrowTop",!he),toggleClass(e.calendarContainer,"arrowBottom",he),!e.config.inline){var Be=window.pageXOffset+de.left,mt=!1,ft=!1;Oe==="center"?(Be-=(Q-de.width)/2,mt=!0):Oe==="right"&&(Be-=Q-de.width,ft=!0),toggleClass(e.calendarContainer,"arrowLeft",!mt&&!ft),toggleClass(e.calendarContainer,"arrowCenter",mt),toggleClass(e.calendarContainer,"arrowRight",ft);var Kt=window.document.body.offsetWidth-(window.pageXOffset+de.right),Xt=Be+Q>window.document.body.offsetWidth,oi=Kt+Q>window.document.body.offsetWidth;if(toggleClass(e.calendarContainer,"rightMost",Xt),!e.config.static)if(e.calendarContainer.style.top=Ce+"px",!Xt)e.calendarContainer.style.left=Be+"px",e.calendarContainer.style.right="auto";else if(!oi)e.calendarContainer.style.left="auto",e.calendarContainer.style.right=Kt+"px";else{var xn=ri();if(xn===void 0)return;var Rn=window.document.body.offsetWidth,Gt=Math.max(0,Rn/2-Q/2),Nn=".flatpickr-calendar.centerMost:before",At=".flatpickr-calendar.centerMost:after",Ot=xn.cssRules.length,Cn="{left:"+de.left+"px;right:auto;}";toggleClass(e.calendarContainer,"rightMost",!1),toggleClass(e.calendarContainer,"centerMost",!0),xn.insertRule(Nn+","+At+Cn,Ot),e.calendarContainer.style.left=Gt+"px",e.calendarContainer.style.right="auto"}}}}function ri(){for(var O=null,k=0;k<document.styleSheets.length;k++){var B=document.styleSheets[k];if(B.cssRules){try{B.cssRules}catch{continue}O=B;break}}return O??ln()}function ln(){var O=document.createElement("style");return document.head.appendChild(O),O.sheet}function Ye(){e.config.noCalendar||e.isMobile||(ue(),cn(),_e())}function wt(){e._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(e.close,0):e.close()}function qt(O){O.preventDefault(),O.stopPropagation();var k=function(Ce){return Ce.classList&&Ce.classList.contains("flatpickr-day")&&!Ce.classList.contains("flatpickr-disabled")&&!Ce.classList.contains("notAllowed")},B=findParent(getEventTarget(O),k);if(B!==void 0){var Q=B,oe=e.latestSelectedDateObj=new Date(Q.dateObj.getTime()),le=(oe.getMonth()<e.currentMonth||oe.getMonth()>e.currentMonth+e.config.showMonths-1)&&e.config.mode!=="range";if(e.selectedDateElem=Q,e.config.mode==="single")e.selectedDates=[oe];else if(e.config.mode==="multiple"){var Oe=Et(oe);Oe?e.selectedDates.splice(parseInt(Oe),1):e.selectedDates.push(oe)}else e.config.mode==="range"&&(e.selectedDates.length===2&&e.clear(!1,!1),e.latestSelectedDateObj=oe,e.selectedDates.push(oe),compareDates(oe,e.selectedDates[0],!0)!==0&&e.selectedDates.sort(function(Ce,Be){return Ce.getTime()-Be.getTime()}));if(p(),le){var de=e.currentYear!==oe.getFullYear();e.currentYear=oe.getFullYear(),e.currentMonth=oe.getMonth(),de&&(We("onYearChange"),ue()),We("onMonthChange")}if(cn(),_e(),lt(),!le&&e.config.mode!=="range"&&e.config.showMonths===1?m(Q):e.selectedDateElem!==void 0&&e.hourElement===void 0&&e.selectedDateElem&&e.selectedDateElem.focus(),e.hourElement!==void 0&&e.hourElement!==void 0&&e.hourElement.focus(),e.config.closeOnSelect){var Te=e.config.mode==="single"&&!e.config.enableTime,he=e.config.mode==="range"&&e.selectedDates.length===2&&!e.config.enableTime;(Te||he)&&wt()}D()}}var me={locale:[ot,Le],showMonths:[pe,l,je],minDate:[I],maxDate:[I],positionElement:[zt],clickOpens:[function(){e.config.clickOpens===!0?(S(e._input,"focus",e.open),S(e._input,"click",e.open)):(e._input.removeEventListener("focus",e.open),e._input.removeEventListener("click",e.open))}]};function st(O,k){if(O!==null&&typeof O=="object"){Object.assign(e.config,O);for(var B in O)me[B]!==void 0&&me[B].forEach(function(Q){return Q()})}else e.config[O]=k,me[O]!==void 0?me[O].forEach(function(Q){return Q()}):HOOKS.indexOf(O)>-1&&(e.config[O]=arrayify(k));e.redraw(),lt(!0)}function zn(O,k){var B=[];if(O instanceof Array)B=O.map(function(Q){return e.parseDate(Q,k)});else if(O instanceof Date||typeof O=="number")B=[e.parseDate(O,k)];else if(typeof O=="string")switch(e.config.mode){case"single":case"time":B=[e.parseDate(O,k)];break;case"multiple":B=O.split(e.config.conjunction).map(function(Q){return e.parseDate(Q,k)});break;case"range":B=O.split(e.l10n.rangeSeparator).map(function(Q){return e.parseDate(Q,k)});break}else e.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(O)));e.selectedDates=e.config.allowInvalidPreload?B:B.filter(function(Q){return Q instanceof Date&&tt(Q,!1)}),e.config.mode==="range"&&e.selectedDates.sort(function(Q,oe){return Q.getTime()-oe.getTime()})}function ai(O,k,B){if(k===void 0&&(k=!1),B===void 0&&(B=e.config.dateFormat),O!==0&&!O||O instanceof Array&&O.length===0)return e.clear(k);zn(O,B),e.latestSelectedDateObj=e.selectedDates[e.selectedDates.length-1],e.redraw(),I(void 0,k),v(),e.selectedDates.length===0&&e.clear(!1),lt(k),k&&We("onChange")}function Yn(O){return O.slice().map(function(k){return typeof k=="string"||typeof k=="number"||k instanceof Date?e.parseDate(k,void 0,!0):k&&typeof k=="object"&&k.from&&k.to?{from:e.parseDate(k.from,void 0),to:e.parseDate(k.to,void 0)}:k}).filter(function(k){return k})}function Tt(){e.selectedDates=[],e.now=e.parseDate(e.config.now)||new Date;var O=e.config.defaultDate||((e.input.nodeName==="INPUT"||e.input.nodeName==="TEXTAREA")&&e.input.placeholder&&e.input.value===e.input.placeholder?null:e.input.value);O&&zn(O,e.config.dateFormat),e._initialDate=e.selectedDates.length>0?e.selectedDates[0]:e.config.minDate&&e.config.minDate.getTime()>e.now.getTime()?e.config.minDate:e.config.maxDate&&e.config.maxDate.getTime()<e.now.getTime()?e.config.maxDate:e.now,e.currentYear=e._initialDate.getFullYear(),e.currentMonth=e._initialDate.getMonth(),e.selectedDates.length>0&&(e.latestSelectedDateObj=e.selectedDates[0]),e.config.minTime!==void 0&&(e.config.minTime=e.parseDate(e.config.minTime,"H:i")),e.config.maxTime!==void 0&&(e.config.maxTime=e.parseDate(e.config.maxTime,"H:i")),e.minDateHasTime=!!e.config.minDate&&(e.config.minDate.getHours()>0||e.config.minDate.getMinutes()>0||e.config.minDate.getSeconds()>0),e.maxDateHasTime=!!e.config.maxDate&&(e.config.maxDate.getHours()>0||e.config.maxDate.getMinutes()>0||e.config.maxDate.getSeconds()>0)}function Kn(){if(e.input=Ut(),!e.input){e.config.errorHandler(new Error("Invalid input element specified"));return}e.input._type=e.input.type,e.input.type="text",e.input.classList.add("flatpickr-input"),e._input=e.input,e.config.altInput&&(e.altInput=createElement(e.input.nodeName,e.config.altInputClass),e._input=e.altInput,e.altInput.placeholder=e.input.placeholder,e.altInput.disabled=e.input.disabled,e.altInput.required=e.input.required,e.altInput.tabIndex=e.input.tabIndex,e.altInput.type="text",e.input.setAttribute("type","hidden"),!e.config.static&&e.input.parentNode&&e.input.parentNode.insertBefore(e.altInput,e.input.nextSibling)),e.config.allowInput||e._input.setAttribute("readonly","readonly"),zt()}function zt(){e._positionElement=e.config.positionElement||e._input}function Ct(){var O=e.config.enableTime?e.config.noCalendar?"time":"datetime-local":"date";e.mobileInput=createElement("input",e.input.className+" flatpickr-mobile"),e.mobileInput.tabIndex=1,e.mobileInput.type=O,e.mobileInput.disabled=e.input.disabled,e.mobileInput.required=e.input.required,e.mobileInput.placeholder=e.input.placeholder,e.mobileFormatStr=O==="datetime-local"?"Y-m-d\\TH:i:S":O==="date"?"Y-m-d":"H:i:S",e.selectedDates.length>0&&(e.mobileInput.defaultValue=e.mobileInput.value=e.formatDate(e.selectedDates[0],e.mobileFormatStr)),e.config.minDate&&(e.mobileInput.min=e.formatDate(e.config.minDate,"Y-m-d")),e.config.maxDate&&(e.mobileInput.max=e.formatDate(e.config.maxDate,"Y-m-d")),e.input.getAttribute("step")&&(e.mobileInput.step=String(e.input.getAttribute("step"))),e.input.type="hidden",e.altInput!==void 0&&(e.altInput.type="hidden");try{e.input.parentNode&&e.input.parentNode.insertBefore(e.mobileInput,e.input.nextSibling)}catch{}S(e.mobileInput,"change",function(k){e.setDate(getEventTarget(k).value,!1,e.mobileFormatStr),We("onChange"),We("onClose")})}function Ht(O){if(e.isOpen===!0)return e.close();e.open(O)}function We(O,k){if(e.config!==void 0){var B=e.config[O];if(B!==void 0&&B.length>0)for(var Q=0;B[Q]&&Q<B.length;Q++)B[Q](e.selectedDates,e.input.value,e,k);O==="onChange"&&(e.input.dispatchEvent(In("change")),e.input.dispatchEvent(In("input")))}}function In(O){var k=document.createEvent("Event");return k.initEvent(O,!0,!0),k}function Et(O){for(var k=0;k<e.selectedDates.length;k++){var B=e.selectedDates[k];if(B instanceof Date&&compareDates(B,O)===0)return""+k}return!1}function un(O){return e.config.mode!=="range"||e.selectedDates.length<2?!1:compareDates(O,e.selectedDates[0])>=0&&compareDates(O,e.selectedDates[1])<=0}function cn(){e.config.noCalendar||e.isMobile||!e.monthNav||(e.yearElements.forEach(function(O,k){var B=new Date(e.currentYear,e.currentMonth,1);B.setMonth(e.currentMonth+k),e.config.showMonths>1||e.config.monthSelectorType==="static"?e.monthElements[k].textContent=monthToStr(B.getMonth(),e.config.shorthandCurrentMonth,e.l10n)+" ":e.monthsDropdownContainer.value=B.getMonth().toString(),O.value=B.getFullYear().toString()}),e._hidePrevMonthArrow=e.config.minDate!==void 0&&(e.currentYear===e.config.minDate.getFullYear()?e.currentMonth<=e.config.minDate.getMonth():e.currentYear<e.config.minDate.getFullYear()),e._hideNextMonthArrow=e.config.maxDate!==void 0&&(e.currentYear===e.config.maxDate.getFullYear()?e.currentMonth+1>e.config.maxDate.getMonth():e.currentYear>e.config.maxDate.getFullYear()))}function Ln(O){var k=O||(e.config.altInput?e.config.altFormat:e.config.dateFormat);return e.selectedDates.map(function(B){return e.formatDate(B,k)}).filter(function(B,Q,oe){return e.config.mode!=="range"||e.config.enableTime||oe.indexOf(B)===Q}).join(e.config.mode!=="range"?e.config.conjunction:e.l10n.rangeSeparator)}function lt(O){O===void 0&&(O=!0),e.mobileInput!==void 0&&e.mobileFormatStr&&(e.mobileInput.value=e.latestSelectedDateObj!==void 0?e.formatDate(e.latestSelectedDateObj,e.mobileFormatStr):""),e.input.value=Ln(e.config.dateFormat),e.altInput!==void 0&&(e.altInput.value=Ln(e.config.altFormat)),O!==!1&&We("onValueUpdate")}function Yt(O){var k=getEventTarget(O),B=e.prevMonthNav.contains(k),Q=e.nextMonthNav.contains(k);B||Q?Xe(B?-1:1):e.yearElements.indexOf(k)>=0?k.select():k.classList.contains("arrowUp")?e.changeYear(e.currentYear+1):k.classList.contains("arrowDown")&&e.changeYear(e.currentYear-1)}function Xn(O){O.preventDefault();var k=O.type==="keydown",B=getEventTarget(O),Q=B;e.amPM!==void 0&&B===e.amPM&&(e.amPM.textContent=e.l10n.amPM[int(e.amPM.textContent===e.l10n.amPM[0])]);var oe=parseFloat(Q.getAttribute("min")),le=parseFloat(Q.getAttribute("max")),Oe=parseFloat(Q.getAttribute("step")),de=parseInt(Q.value,10),Te=O.delta||(k?O.which===38?1:-1:0),he=de+Oe*Te;if(typeof Q.value<"u"&&Q.value.length===2){var Ce=Q===e.hourElement,Be=Q===e.minuteElement;he<oe?(he=le+he+int(!Ce)+(int(Ce)&&int(!e.amPM)),Be&&N(void 0,-1,e.hourElement)):he>le&&(he=Q===e.hourElement?he-le-int(!e.amPM):oe,Be&&N(void 0,1,e.hourElement)),e.amPM&&Ce&&(Oe===1?he+de===23:Math.abs(he-de)>Oe)&&(e.amPM.textContent=e.l10n.amPM[int(e.amPM.textContent===e.l10n.amPM[0])]),Q.value=pad(he)}}return a(),e}function _flatpickr(t,n){for(var e=Array.prototype.slice.call(t).filter(function(o){return o instanceof HTMLElement}),r=[],a=0;a<e.length;a++){var s=e[a];try{if(s.getAttribute("data-fp-omit")!==null)continue;s._flatpickr!==void 0&&(s._flatpickr.destroy(),s._flatpickr=void 0),s._flatpickr=FlatpickrInstance(s,n||{}),r.push(s._flatpickr)}catch(o){console.error(o)}}return r.length===1?r[0]:r}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(t){return _flatpickr(this,t)},HTMLElement.prototype.flatpickr=function(t){return _flatpickr([this],t)});var flatpickr=function(t,n){return typeof t=="string"?_flatpickr(window.document.querySelectorAll(t),n):t instanceof Node?_flatpickr([t],n):_flatpickr(t,n)};flatpickr.defaultConfig={};flatpickr.l10ns={en:__assign({},english),default:__assign({},english)};flatpickr.localize=function(t){flatpickr.l10ns.default=__assign(__assign({},flatpickr.l10ns.default),t)};flatpickr.setDefaults=function(t){flatpickr.defaultConfig=__assign(__assign({},flatpickr.defaultConfig),t)};flatpickr.parseDate=createDateParser({});flatpickr.formatDate=createDateFormatter({});flatpickr.compareDates=compareDates;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(t){return _flatpickr(this,t)});Date.prototype.fp_incr=function(t){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof t=="string"?parseInt(t,10):t))};typeof window<"u"&&(window.flatpickr=flatpickr);function initDateSelector(){flatpickr(".datepicker",{allowInput:!0})}var jqueryExports=requireJquery();const jQuery$1=getDefaultExportFromCjs(jqueryExports),src=`/*!
 * Select2 4.1.0-rc.0
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by \`banner.start.js\`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
      var superMethod = superMethods[m];

      DecoratedClass.prototype[superMethod] =
        SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the \`_type\` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\\/\\\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Cache objects in Utils.__cache instead of $.data (see #4346)
  Utils.__cache = {};

  var id = 0;
  Utils.GetUniqueElementId = function (element) {
    // Get a unique element Id. If element has no id,
    // creates a new unique number, stores it in the id
    // attribute and returns the new id with a prefix.
    // If an id already exists, it simply returns it with a prefix.

    var select2Id = element.getAttribute('data-select2-id');

    if (select2Id != null) {
      return select2Id;
    }

    // If element has id, use it.
    if (element.id) {
      select2Id = 'select2-data-' + element.id;
    } else {
      select2Id = 'select2-data-' + (++id).toString() +
        '-' + Utils.generateChars(4);
    }

    element.setAttribute('data-select2-id', select2Id);

    return select2Id;
  };

  Utils.StoreData = function (element, name, value) {
    // Stores an item in the cache for a specified element.
    // name is the cache key.
    var id = Utils.GetUniqueElementId(element);
    if (!Utils.__cache[id]) {
      Utils.__cache[id] = {};
    }

    Utils.__cache[id][name] = value;
  };

  Utils.GetData = function (element, name) {
    // Retrieves a value from the cache by its key (name)
    // name is optional. If no name specified, return
    // all cache items for the specified element.
    // and for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (name) {
      if (Utils.__cache[id]) {
        if (Utils.__cache[id][name] != null) {
          return Utils.__cache[id][name];
        }
        return $(element).data(name); // Fallback to HTML5 data attribs.
      }
      return $(element).data(name); // Fallback to HTML5 data attribs.
    } else {
      return Utils.__cache[id];
    }
  };

  Utils.RemoveData = function (element) {
    // Removes all cached items for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (Utils.__cache[id] != null) {
      delete Utils.__cache[id];
    }

    element.removeAttribute('data-select2-id');
  };

  Utils.copyNonInternalCssClasses = function (dest, src) {
    var classes;

    var destinationClasses = dest.getAttribute('class').trim().split(/\\s+/);

    destinationClasses = destinationClasses.filter(function (clazz) {
      // Save all Select2 classes
      return clazz.indexOf('select2-') === 0;
    });

    var sourceClasses = src.getAttribute('class').trim().split(/\\s+/);

    sourceClasses = sourceClasses.filter(function (clazz) {
      // Only copy non-Select2 classes
      return clazz.indexOf('select2-') !== 0;
    });

    var replacements = destinationClasses.concat(sourceClasses);

    dest.setAttribute('class', replacements.join(' '));
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="listbox"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="alert" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option--selectable');

    var $selected = $options.filter('.select2-results__option--selected');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = selected.map(function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option--selectable');

      $options.each(function () {
        var $option = $(this);

        var item = Utils.GetData(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && selectedIds.indexOf(id) > -1)) {
          this.classList.add('select2-results__option--selected');
          $option.attr('aria-selected', 'true');
        } else {
          this.classList.remove('select2-results__option--selected');
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.classList.add('select2-results__option');
    option.classList.add('select2-results__option--selectable');

    var attrs = {
      'role': 'option'
    };

    var matches = window.Element.prototype.matches ||
      window.Element.prototype.msMatchesSelector ||
      window.Element.prototype.webkitMatchesSelector;

    if ((data.element != null && matches.call(data.element, ':disabled')) ||
        (data.element == null && data.disabled)) {
      attrs['aria-disabled'] = 'true';

      option.classList.remove('select2-results__option--selectable');
      option.classList.add('select2-results__option--disabled');
    }

    if (data.id == null) {
      option.classList.remove('select2-results__option--selectable');
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;

      option.classList.remove('select2-results__option--selectable');
      option.classList.add('select2-results__option--group');
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested',
        'role': 'none'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    Utils.StoreData(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = Utils.GetData($highlighted[0], 'data');

      if ($highlighted.hasClass('select2-results__option--selected')) {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      // If we are already at the top, don't move further
      // If no options, currentIndex will be -1
      if (currentIndex <= 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element[0].classList.add('select2-results__option--highlighted');
      params.element[0].setAttribute('aria-selected', 'true');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option--selectable',
      function (evt) {
      var $this = $(this);

      var data = Utils.GetData(this, 'data');

      if ($this.hasClass('select2-results__option--selected')) {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option--selectable',
      function (evt) {
      var data = Utils.GetData(this, 'data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted')
          .attr('aria-selected', 'false');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('.select2-results__option--selectable');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
      this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);
    $selection.attr('aria-disabled', 'false');

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.trigger('focus');

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
      self.$selection.attr('aria-disabled', 'false');
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
      self.$selection.attr('aria-disabled', 'true');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger \`blur\` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        if (this == $select[0]) {
          return;
        }

        var $element = Utils.GetData(this, 'element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The \`update\` method must be defined in child classes.');
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  BaseSelection.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  BaseSelection.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection[0].classList.add('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered')
      .attr('id', id)
      .attr('role', 'textbox')
      .attr('aria-readonly', 'true');
    this.$selection.attr('aria-labelledby', id);
    this.$selection.attr('aria-controls', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.trigger('focus');
      }
    });
  };

  SingleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title'); // clear tooltip on empty
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);

    var title = selection.title || selection.text;

    if (title) {
      $rendered.attr('title', title);
    } else {
      $rendered.removeAttr('title');
    }
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection[0].classList.add('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';
    this.$selection.find('.select2-selection__rendered').attr('id', id);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = Utils.GetData($selection[0], 'data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );

    this.$selection.on(
      'keydown',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        evt.stopPropagation();
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title');
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<button type="button" class="select2-selection__choice__remove" ' +
        'tabindex="-1">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '<span class="select2-selection__choice__display"></span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    var selectionIdPrefix = this.$selection.find('.select2-selection__rendered')
      .attr('id') + '-choice-';

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      var selectionId = selectionIdPrefix + Utils.generateChars(4) + '-';

      if (selection.id) {
        selectionId += selection.id;
      } else {
        selectionId += Utils.generateChars(4);
      }

      $selection.find('.select2-selection__choice__display')
        .append(formatted)
        .attr('id', selectionId);

      var title = selection.title || selection.text;

      if (title) {
        $selection.attr('title', title);
      }

      var removeItem = this.options.get('translations').get('removeItem');

      var $remove = $selection.find('.select2-selection__choice__remove');

      $remove.attr('title', removeItem());
      $remove.attr('aria-label', removeItem());
      $remove.attr('aria-describedby', selectionId);

      Utils.StoreData($selection[0], 'data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    $rendered.append($selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[

], function () {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder[0].classList.add('select2-selection__placeholder');
    $placeholder[0].classList.remove('select2-selection__choice');

    var placeholderTitle = placeholder.title ||
      placeholder.text ||
      $placeholder.text();

    this.$selection.find('.select2-selection__rendered').attr(
      'title',
      placeholderTitle
    );

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys',
  '../utils'
], function ($, KEYS, Utils) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The \`allowClear\` option should be used in combination ' +
          'with the \`placeholder\` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.isDisabled()) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = Utils.GetData($clear[0], 'data');

    var previousVal = this.$element.val();
    this.$element.val(this.placeholder.id);

    var unselectData = {
      data: data
    };
    this.trigger('clear', unselectData);
    if (unselectData.prevented) {
      this.$element.val(previousVal);
      return;
    }

    for (var d = 0; d < data.length; d++) {
      unselectData = {
        data: data[d]
      };

      // Trigger the \`unselect\` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        this.$element.val(previousVal);
        return;
      }
    }

    this.$element.trigger('input').trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    this.$selection.find('.select2-selection__clear').remove();
    this.$selection[0].classList.remove('select2-selection--clearable');

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var selectionId = this.$selection.find('.select2-selection__rendered')
      .attr('id');

    var removeAll = this.options.get('translations').get('removeAllItems');

    var $remove = $(
      '<button type="button" class="select2-selection__clear" tabindex="-1">' +
        '<span aria-hidden="true">&times;</span>' +
      '</button>'
    );
    $remove.attr('title', removeAll());
    $remove.attr('aria-label', removeAll());
    $remove.attr('aria-describedby', selectionId);
    Utils.StoreData($remove[0], 'data', data);

    this.$selection.prepend($remove);
    this.$selection[0].classList.add('select2-selection--clearable');
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var searchLabel = this.options.get('translations').get('search');
    var $search = $(
      '<span class="select2-search select2-search--inline">' +
        '<textarea class="select2-search__field"'+
        ' type="search" tabindex="-1"' +
        ' autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" >' +
        '</textarea>' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('textarea');

    this.$search.prop('autocomplete', this.options.get('autocomplete'));
    this.$search.attr('aria-label', searchLabel());

    var $rendered = decorated.call(this);

    this._transferTabIndex();
    $rendered.append(this.$searchContainer);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';
    var selectionId = container.id + '-container';

    decorated.call(this, container, $container);

    self.$search.attr('aria-describedby', selectionId);

    container.on('open', function () {
      self.$search.attr('aria-controls', resultsId);
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.resizeSearch();
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$selection
          .find('.select2-selection__choice').last();

        if ($previousChoice.length > 0) {
          var item = Utils.GetData($previousChoice[0], 'data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    this.$selection.on('click', '.select2-search--inline', function (evt) {
      if (self.$search.val()) {
        evt.stopPropagation();
      }
    });

    // Try to detect the IE version should the \`documentMode\` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the \`input\` event
    // This will prevent double-triggering of events for browsers which support
    // both the \`keyup\` and \`input\` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the \`input\` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // \`input\` events in IE and keep using \`keyup\`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated \`keyup\` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the \`input\` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // \`input\` events in IE and keep using \`keyup\`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the \`keydown\` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.trigger('focus');
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '100%';

    if (this.$search.attr('placeholder') === '') {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/selectionCss',[
  '../utils'
], function (Utils) {
  function SelectionCSS () { }

  SelectionCSS.prototype.render = function (decorated) {
    var $selection = decorated.call(this);

    var selectionCssClass = this.options.get('selectionCssClass') || '';

    if (selectionCssClass.indexOf(':all:') !== -1) {
      selectionCssClass = selectionCssClass.replace(':all:', '');

      Utils.copyNonInternalCssClasses($selection[0], this.$element[0]);
    }

    $selection.addClass(selectionCssClass);

    return $selection;
  };

  return SelectionCSS;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting',
      'clear', 'clearing'
    ];

    var preventableEvents = [
      'opening', 'closing', 'selecting', 'unselecting', 'clearing'
    ];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if (relayEvents.indexOf(name) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if (preventableEvents.indexOf(name) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\\u24B6': 'A',
    '\\uFF21': 'A',
    '\\u00C0': 'A',
    '\\u00C1': 'A',
    '\\u00C2': 'A',
    '\\u1EA6': 'A',
    '\\u1EA4': 'A',
    '\\u1EAA': 'A',
    '\\u1EA8': 'A',
    '\\u00C3': 'A',
    '\\u0100': 'A',
    '\\u0102': 'A',
    '\\u1EB0': 'A',
    '\\u1EAE': 'A',
    '\\u1EB4': 'A',
    '\\u1EB2': 'A',
    '\\u0226': 'A',
    '\\u01E0': 'A',
    '\\u00C4': 'A',
    '\\u01DE': 'A',
    '\\u1EA2': 'A',
    '\\u00C5': 'A',
    '\\u01FA': 'A',
    '\\u01CD': 'A',
    '\\u0200': 'A',
    '\\u0202': 'A',
    '\\u1EA0': 'A',
    '\\u1EAC': 'A',
    '\\u1EB6': 'A',
    '\\u1E00': 'A',
    '\\u0104': 'A',
    '\\u023A': 'A',
    '\\u2C6F': 'A',
    '\\uA732': 'AA',
    '\\u00C6': 'AE',
    '\\u01FC': 'AE',
    '\\u01E2': 'AE',
    '\\uA734': 'AO',
    '\\uA736': 'AU',
    '\\uA738': 'AV',
    '\\uA73A': 'AV',
    '\\uA73C': 'AY',
    '\\u24B7': 'B',
    '\\uFF22': 'B',
    '\\u1E02': 'B',
    '\\u1E04': 'B',
    '\\u1E06': 'B',
    '\\u0243': 'B',
    '\\u0182': 'B',
    '\\u0181': 'B',
    '\\u24B8': 'C',
    '\\uFF23': 'C',
    '\\u0106': 'C',
    '\\u0108': 'C',
    '\\u010A': 'C',
    '\\u010C': 'C',
    '\\u00C7': 'C',
    '\\u1E08': 'C',
    '\\u0187': 'C',
    '\\u023B': 'C',
    '\\uA73E': 'C',
    '\\u24B9': 'D',
    '\\uFF24': 'D',
    '\\u1E0A': 'D',
    '\\u010E': 'D',
    '\\u1E0C': 'D',
    '\\u1E10': 'D',
    '\\u1E12': 'D',
    '\\u1E0E': 'D',
    '\\u0110': 'D',
    '\\u018B': 'D',
    '\\u018A': 'D',
    '\\u0189': 'D',
    '\\uA779': 'D',
    '\\u01F1': 'DZ',
    '\\u01C4': 'DZ',
    '\\u01F2': 'Dz',
    '\\u01C5': 'Dz',
    '\\u24BA': 'E',
    '\\uFF25': 'E',
    '\\u00C8': 'E',
    '\\u00C9': 'E',
    '\\u00CA': 'E',
    '\\u1EC0': 'E',
    '\\u1EBE': 'E',
    '\\u1EC4': 'E',
    '\\u1EC2': 'E',
    '\\u1EBC': 'E',
    '\\u0112': 'E',
    '\\u1E14': 'E',
    '\\u1E16': 'E',
    '\\u0114': 'E',
    '\\u0116': 'E',
    '\\u00CB': 'E',
    '\\u1EBA': 'E',
    '\\u011A': 'E',
    '\\u0204': 'E',
    '\\u0206': 'E',
    '\\u1EB8': 'E',
    '\\u1EC6': 'E',
    '\\u0228': 'E',
    '\\u1E1C': 'E',
    '\\u0118': 'E',
    '\\u1E18': 'E',
    '\\u1E1A': 'E',
    '\\u0190': 'E',
    '\\u018E': 'E',
    '\\u24BB': 'F',
    '\\uFF26': 'F',
    '\\u1E1E': 'F',
    '\\u0191': 'F',
    '\\uA77B': 'F',
    '\\u24BC': 'G',
    '\\uFF27': 'G',
    '\\u01F4': 'G',
    '\\u011C': 'G',
    '\\u1E20': 'G',
    '\\u011E': 'G',
    '\\u0120': 'G',
    '\\u01E6': 'G',
    '\\u0122': 'G',
    '\\u01E4': 'G',
    '\\u0193': 'G',
    '\\uA7A0': 'G',
    '\\uA77D': 'G',
    '\\uA77E': 'G',
    '\\u24BD': 'H',
    '\\uFF28': 'H',
    '\\u0124': 'H',
    '\\u1E22': 'H',
    '\\u1E26': 'H',
    '\\u021E': 'H',
    '\\u1E24': 'H',
    '\\u1E28': 'H',
    '\\u1E2A': 'H',
    '\\u0126': 'H',
    '\\u2C67': 'H',
    '\\u2C75': 'H',
    '\\uA78D': 'H',
    '\\u24BE': 'I',
    '\\uFF29': 'I',
    '\\u00CC': 'I',
    '\\u00CD': 'I',
    '\\u00CE': 'I',
    '\\u0128': 'I',
    '\\u012A': 'I',
    '\\u012C': 'I',
    '\\u0130': 'I',
    '\\u00CF': 'I',
    '\\u1E2E': 'I',
    '\\u1EC8': 'I',
    '\\u01CF': 'I',
    '\\u0208': 'I',
    '\\u020A': 'I',
    '\\u1ECA': 'I',
    '\\u012E': 'I',
    '\\u1E2C': 'I',
    '\\u0197': 'I',
    '\\u24BF': 'J',
    '\\uFF2A': 'J',
    '\\u0134': 'J',
    '\\u0248': 'J',
    '\\u24C0': 'K',
    '\\uFF2B': 'K',
    '\\u1E30': 'K',
    '\\u01E8': 'K',
    '\\u1E32': 'K',
    '\\u0136': 'K',
    '\\u1E34': 'K',
    '\\u0198': 'K',
    '\\u2C69': 'K',
    '\\uA740': 'K',
    '\\uA742': 'K',
    '\\uA744': 'K',
    '\\uA7A2': 'K',
    '\\u24C1': 'L',
    '\\uFF2C': 'L',
    '\\u013F': 'L',
    '\\u0139': 'L',
    '\\u013D': 'L',
    '\\u1E36': 'L',
    '\\u1E38': 'L',
    '\\u013B': 'L',
    '\\u1E3C': 'L',
    '\\u1E3A': 'L',
    '\\u0141': 'L',
    '\\u023D': 'L',
    '\\u2C62': 'L',
    '\\u2C60': 'L',
    '\\uA748': 'L',
    '\\uA746': 'L',
    '\\uA780': 'L',
    '\\u01C7': 'LJ',
    '\\u01C8': 'Lj',
    '\\u24C2': 'M',
    '\\uFF2D': 'M',
    '\\u1E3E': 'M',
    '\\u1E40': 'M',
    '\\u1E42': 'M',
    '\\u2C6E': 'M',
    '\\u019C': 'M',
    '\\u24C3': 'N',
    '\\uFF2E': 'N',
    '\\u01F8': 'N',
    '\\u0143': 'N',
    '\\u00D1': 'N',
    '\\u1E44': 'N',
    '\\u0147': 'N',
    '\\u1E46': 'N',
    '\\u0145': 'N',
    '\\u1E4A': 'N',
    '\\u1E48': 'N',
    '\\u0220': 'N',
    '\\u019D': 'N',
    '\\uA790': 'N',
    '\\uA7A4': 'N',
    '\\u01CA': 'NJ',
    '\\u01CB': 'Nj',
    '\\u24C4': 'O',
    '\\uFF2F': 'O',
    '\\u00D2': 'O',
    '\\u00D3': 'O',
    '\\u00D4': 'O',
    '\\u1ED2': 'O',
    '\\u1ED0': 'O',
    '\\u1ED6': 'O',
    '\\u1ED4': 'O',
    '\\u00D5': 'O',
    '\\u1E4C': 'O',
    '\\u022C': 'O',
    '\\u1E4E': 'O',
    '\\u014C': 'O',
    '\\u1E50': 'O',
    '\\u1E52': 'O',
    '\\u014E': 'O',
    '\\u022E': 'O',
    '\\u0230': 'O',
    '\\u00D6': 'O',
    '\\u022A': 'O',
    '\\u1ECE': 'O',
    '\\u0150': 'O',
    '\\u01D1': 'O',
    '\\u020C': 'O',
    '\\u020E': 'O',
    '\\u01A0': 'O',
    '\\u1EDC': 'O',
    '\\u1EDA': 'O',
    '\\u1EE0': 'O',
    '\\u1EDE': 'O',
    '\\u1EE2': 'O',
    '\\u1ECC': 'O',
    '\\u1ED8': 'O',
    '\\u01EA': 'O',
    '\\u01EC': 'O',
    '\\u00D8': 'O',
    '\\u01FE': 'O',
    '\\u0186': 'O',
    '\\u019F': 'O',
    '\\uA74A': 'O',
    '\\uA74C': 'O',
    '\\u0152': 'OE',
    '\\u01A2': 'OI',
    '\\uA74E': 'OO',
    '\\u0222': 'OU',
    '\\u24C5': 'P',
    '\\uFF30': 'P',
    '\\u1E54': 'P',
    '\\u1E56': 'P',
    '\\u01A4': 'P',
    '\\u2C63': 'P',
    '\\uA750': 'P',
    '\\uA752': 'P',
    '\\uA754': 'P',
    '\\u24C6': 'Q',
    '\\uFF31': 'Q',
    '\\uA756': 'Q',
    '\\uA758': 'Q',
    '\\u024A': 'Q',
    '\\u24C7': 'R',
    '\\uFF32': 'R',
    '\\u0154': 'R',
    '\\u1E58': 'R',
    '\\u0158': 'R',
    '\\u0210': 'R',
    '\\u0212': 'R',
    '\\u1E5A': 'R',
    '\\u1E5C': 'R',
    '\\u0156': 'R',
    '\\u1E5E': 'R',
    '\\u024C': 'R',
    '\\u2C64': 'R',
    '\\uA75A': 'R',
    '\\uA7A6': 'R',
    '\\uA782': 'R',
    '\\u24C8': 'S',
    '\\uFF33': 'S',
    '\\u1E9E': 'S',
    '\\u015A': 'S',
    '\\u1E64': 'S',
    '\\u015C': 'S',
    '\\u1E60': 'S',
    '\\u0160': 'S',
    '\\u1E66': 'S',
    '\\u1E62': 'S',
    '\\u1E68': 'S',
    '\\u0218': 'S',
    '\\u015E': 'S',
    '\\u2C7E': 'S',
    '\\uA7A8': 'S',
    '\\uA784': 'S',
    '\\u24C9': 'T',
    '\\uFF34': 'T',
    '\\u1E6A': 'T',
    '\\u0164': 'T',
    '\\u1E6C': 'T',
    '\\u021A': 'T',
    '\\u0162': 'T',
    '\\u1E70': 'T',
    '\\u1E6E': 'T',
    '\\u0166': 'T',
    '\\u01AC': 'T',
    '\\u01AE': 'T',
    '\\u023E': 'T',
    '\\uA786': 'T',
    '\\uA728': 'TZ',
    '\\u24CA': 'U',
    '\\uFF35': 'U',
    '\\u00D9': 'U',
    '\\u00DA': 'U',
    '\\u00DB': 'U',
    '\\u0168': 'U',
    '\\u1E78': 'U',
    '\\u016A': 'U',
    '\\u1E7A': 'U',
    '\\u016C': 'U',
    '\\u00DC': 'U',
    '\\u01DB': 'U',
    '\\u01D7': 'U',
    '\\u01D5': 'U',
    '\\u01D9': 'U',
    '\\u1EE6': 'U',
    '\\u016E': 'U',
    '\\u0170': 'U',
    '\\u01D3': 'U',
    '\\u0214': 'U',
    '\\u0216': 'U',
    '\\u01AF': 'U',
    '\\u1EEA': 'U',
    '\\u1EE8': 'U',
    '\\u1EEE': 'U',
    '\\u1EEC': 'U',
    '\\u1EF0': 'U',
    '\\u1EE4': 'U',
    '\\u1E72': 'U',
    '\\u0172': 'U',
    '\\u1E76': 'U',
    '\\u1E74': 'U',
    '\\u0244': 'U',
    '\\u24CB': 'V',
    '\\uFF36': 'V',
    '\\u1E7C': 'V',
    '\\u1E7E': 'V',
    '\\u01B2': 'V',
    '\\uA75E': 'V',
    '\\u0245': 'V',
    '\\uA760': 'VY',
    '\\u24CC': 'W',
    '\\uFF37': 'W',
    '\\u1E80': 'W',
    '\\u1E82': 'W',
    '\\u0174': 'W',
    '\\u1E86': 'W',
    '\\u1E84': 'W',
    '\\u1E88': 'W',
    '\\u2C72': 'W',
    '\\u24CD': 'X',
    '\\uFF38': 'X',
    '\\u1E8A': 'X',
    '\\u1E8C': 'X',
    '\\u24CE': 'Y',
    '\\uFF39': 'Y',
    '\\u1EF2': 'Y',
    '\\u00DD': 'Y',
    '\\u0176': 'Y',
    '\\u1EF8': 'Y',
    '\\u0232': 'Y',
    '\\u1E8E': 'Y',
    '\\u0178': 'Y',
    '\\u1EF6': 'Y',
    '\\u1EF4': 'Y',
    '\\u01B3': 'Y',
    '\\u024E': 'Y',
    '\\u1EFE': 'Y',
    '\\u24CF': 'Z',
    '\\uFF3A': 'Z',
    '\\u0179': 'Z',
    '\\u1E90': 'Z',
    '\\u017B': 'Z',
    '\\u017D': 'Z',
    '\\u1E92': 'Z',
    '\\u1E94': 'Z',
    '\\u01B5': 'Z',
    '\\u0224': 'Z',
    '\\u2C7F': 'Z',
    '\\u2C6B': 'Z',
    '\\uA762': 'Z',
    '\\u24D0': 'a',
    '\\uFF41': 'a',
    '\\u1E9A': 'a',
    '\\u00E0': 'a',
    '\\u00E1': 'a',
    '\\u00E2': 'a',
    '\\u1EA7': 'a',
    '\\u1EA5': 'a',
    '\\u1EAB': 'a',
    '\\u1EA9': 'a',
    '\\u00E3': 'a',
    '\\u0101': 'a',
    '\\u0103': 'a',
    '\\u1EB1': 'a',
    '\\u1EAF': 'a',
    '\\u1EB5': 'a',
    '\\u1EB3': 'a',
    '\\u0227': 'a',
    '\\u01E1': 'a',
    '\\u00E4': 'a',
    '\\u01DF': 'a',
    '\\u1EA3': 'a',
    '\\u00E5': 'a',
    '\\u01FB': 'a',
    '\\u01CE': 'a',
    '\\u0201': 'a',
    '\\u0203': 'a',
    '\\u1EA1': 'a',
    '\\u1EAD': 'a',
    '\\u1EB7': 'a',
    '\\u1E01': 'a',
    '\\u0105': 'a',
    '\\u2C65': 'a',
    '\\u0250': 'a',
    '\\uA733': 'aa',
    '\\u00E6': 'ae',
    '\\u01FD': 'ae',
    '\\u01E3': 'ae',
    '\\uA735': 'ao',
    '\\uA737': 'au',
    '\\uA739': 'av',
    '\\uA73B': 'av',
    '\\uA73D': 'ay',
    '\\u24D1': 'b',
    '\\uFF42': 'b',
    '\\u1E03': 'b',
    '\\u1E05': 'b',
    '\\u1E07': 'b',
    '\\u0180': 'b',
    '\\u0183': 'b',
    '\\u0253': 'b',
    '\\u24D2': 'c',
    '\\uFF43': 'c',
    '\\u0107': 'c',
    '\\u0109': 'c',
    '\\u010B': 'c',
    '\\u010D': 'c',
    '\\u00E7': 'c',
    '\\u1E09': 'c',
    '\\u0188': 'c',
    '\\u023C': 'c',
    '\\uA73F': 'c',
    '\\u2184': 'c',
    '\\u24D3': 'd',
    '\\uFF44': 'd',
    '\\u1E0B': 'd',
    '\\u010F': 'd',
    '\\u1E0D': 'd',
    '\\u1E11': 'd',
    '\\u1E13': 'd',
    '\\u1E0F': 'd',
    '\\u0111': 'd',
    '\\u018C': 'd',
    '\\u0256': 'd',
    '\\u0257': 'd',
    '\\uA77A': 'd',
    '\\u01F3': 'dz',
    '\\u01C6': 'dz',
    '\\u24D4': 'e',
    '\\uFF45': 'e',
    '\\u00E8': 'e',
    '\\u00E9': 'e',
    '\\u00EA': 'e',
    '\\u1EC1': 'e',
    '\\u1EBF': 'e',
    '\\u1EC5': 'e',
    '\\u1EC3': 'e',
    '\\u1EBD': 'e',
    '\\u0113': 'e',
    '\\u1E15': 'e',
    '\\u1E17': 'e',
    '\\u0115': 'e',
    '\\u0117': 'e',
    '\\u00EB': 'e',
    '\\u1EBB': 'e',
    '\\u011B': 'e',
    '\\u0205': 'e',
    '\\u0207': 'e',
    '\\u1EB9': 'e',
    '\\u1EC7': 'e',
    '\\u0229': 'e',
    '\\u1E1D': 'e',
    '\\u0119': 'e',
    '\\u1E19': 'e',
    '\\u1E1B': 'e',
    '\\u0247': 'e',
    '\\u025B': 'e',
    '\\u01DD': 'e',
    '\\u24D5': 'f',
    '\\uFF46': 'f',
    '\\u1E1F': 'f',
    '\\u0192': 'f',
    '\\uA77C': 'f',
    '\\u24D6': 'g',
    '\\uFF47': 'g',
    '\\u01F5': 'g',
    '\\u011D': 'g',
    '\\u1E21': 'g',
    '\\u011F': 'g',
    '\\u0121': 'g',
    '\\u01E7': 'g',
    '\\u0123': 'g',
    '\\u01E5': 'g',
    '\\u0260': 'g',
    '\\uA7A1': 'g',
    '\\u1D79': 'g',
    '\\uA77F': 'g',
    '\\u24D7': 'h',
    '\\uFF48': 'h',
    '\\u0125': 'h',
    '\\u1E23': 'h',
    '\\u1E27': 'h',
    '\\u021F': 'h',
    '\\u1E25': 'h',
    '\\u1E29': 'h',
    '\\u1E2B': 'h',
    '\\u1E96': 'h',
    '\\u0127': 'h',
    '\\u2C68': 'h',
    '\\u2C76': 'h',
    '\\u0265': 'h',
    '\\u0195': 'hv',
    '\\u24D8': 'i',
    '\\uFF49': 'i',
    '\\u00EC': 'i',
    '\\u00ED': 'i',
    '\\u00EE': 'i',
    '\\u0129': 'i',
    '\\u012B': 'i',
    '\\u012D': 'i',
    '\\u00EF': 'i',
    '\\u1E2F': 'i',
    '\\u1EC9': 'i',
    '\\u01D0': 'i',
    '\\u0209': 'i',
    '\\u020B': 'i',
    '\\u1ECB': 'i',
    '\\u012F': 'i',
    '\\u1E2D': 'i',
    '\\u0268': 'i',
    '\\u0131': 'i',
    '\\u24D9': 'j',
    '\\uFF4A': 'j',
    '\\u0135': 'j',
    '\\u01F0': 'j',
    '\\u0249': 'j',
    '\\u24DA': 'k',
    '\\uFF4B': 'k',
    '\\u1E31': 'k',
    '\\u01E9': 'k',
    '\\u1E33': 'k',
    '\\u0137': 'k',
    '\\u1E35': 'k',
    '\\u0199': 'k',
    '\\u2C6A': 'k',
    '\\uA741': 'k',
    '\\uA743': 'k',
    '\\uA745': 'k',
    '\\uA7A3': 'k',
    '\\u24DB': 'l',
    '\\uFF4C': 'l',
    '\\u0140': 'l',
    '\\u013A': 'l',
    '\\u013E': 'l',
    '\\u1E37': 'l',
    '\\u1E39': 'l',
    '\\u013C': 'l',
    '\\u1E3D': 'l',
    '\\u1E3B': 'l',
    '\\u017F': 'l',
    '\\u0142': 'l',
    '\\u019A': 'l',
    '\\u026B': 'l',
    '\\u2C61': 'l',
    '\\uA749': 'l',
    '\\uA781': 'l',
    '\\uA747': 'l',
    '\\u01C9': 'lj',
    '\\u24DC': 'm',
    '\\uFF4D': 'm',
    '\\u1E3F': 'm',
    '\\u1E41': 'm',
    '\\u1E43': 'm',
    '\\u0271': 'm',
    '\\u026F': 'm',
    '\\u24DD': 'n',
    '\\uFF4E': 'n',
    '\\u01F9': 'n',
    '\\u0144': 'n',
    '\\u00F1': 'n',
    '\\u1E45': 'n',
    '\\u0148': 'n',
    '\\u1E47': 'n',
    '\\u0146': 'n',
    '\\u1E4B': 'n',
    '\\u1E49': 'n',
    '\\u019E': 'n',
    '\\u0272': 'n',
    '\\u0149': 'n',
    '\\uA791': 'n',
    '\\uA7A5': 'n',
    '\\u01CC': 'nj',
    '\\u24DE': 'o',
    '\\uFF4F': 'o',
    '\\u00F2': 'o',
    '\\u00F3': 'o',
    '\\u00F4': 'o',
    '\\u1ED3': 'o',
    '\\u1ED1': 'o',
    '\\u1ED7': 'o',
    '\\u1ED5': 'o',
    '\\u00F5': 'o',
    '\\u1E4D': 'o',
    '\\u022D': 'o',
    '\\u1E4F': 'o',
    '\\u014D': 'o',
    '\\u1E51': 'o',
    '\\u1E53': 'o',
    '\\u014F': 'o',
    '\\u022F': 'o',
    '\\u0231': 'o',
    '\\u00F6': 'o',
    '\\u022B': 'o',
    '\\u1ECF': 'o',
    '\\u0151': 'o',
    '\\u01D2': 'o',
    '\\u020D': 'o',
    '\\u020F': 'o',
    '\\u01A1': 'o',
    '\\u1EDD': 'o',
    '\\u1EDB': 'o',
    '\\u1EE1': 'o',
    '\\u1EDF': 'o',
    '\\u1EE3': 'o',
    '\\u1ECD': 'o',
    '\\u1ED9': 'o',
    '\\u01EB': 'o',
    '\\u01ED': 'o',
    '\\u00F8': 'o',
    '\\u01FF': 'o',
    '\\u0254': 'o',
    '\\uA74B': 'o',
    '\\uA74D': 'o',
    '\\u0275': 'o',
    '\\u0153': 'oe',
    '\\u01A3': 'oi',
    '\\u0223': 'ou',
    '\\uA74F': 'oo',
    '\\u24DF': 'p',
    '\\uFF50': 'p',
    '\\u1E55': 'p',
    '\\u1E57': 'p',
    '\\u01A5': 'p',
    '\\u1D7D': 'p',
    '\\uA751': 'p',
    '\\uA753': 'p',
    '\\uA755': 'p',
    '\\u24E0': 'q',
    '\\uFF51': 'q',
    '\\u024B': 'q',
    '\\uA757': 'q',
    '\\uA759': 'q',
    '\\u24E1': 'r',
    '\\uFF52': 'r',
    '\\u0155': 'r',
    '\\u1E59': 'r',
    '\\u0159': 'r',
    '\\u0211': 'r',
    '\\u0213': 'r',
    '\\u1E5B': 'r',
    '\\u1E5D': 'r',
    '\\u0157': 'r',
    '\\u1E5F': 'r',
    '\\u024D': 'r',
    '\\u027D': 'r',
    '\\uA75B': 'r',
    '\\uA7A7': 'r',
    '\\uA783': 'r',
    '\\u24E2': 's',
    '\\uFF53': 's',
    '\\u00DF': 's',
    '\\u015B': 's',
    '\\u1E65': 's',
    '\\u015D': 's',
    '\\u1E61': 's',
    '\\u0161': 's',
    '\\u1E67': 's',
    '\\u1E63': 's',
    '\\u1E69': 's',
    '\\u0219': 's',
    '\\u015F': 's',
    '\\u023F': 's',
    '\\uA7A9': 's',
    '\\uA785': 's',
    '\\u1E9B': 's',
    '\\u24E3': 't',
    '\\uFF54': 't',
    '\\u1E6B': 't',
    '\\u1E97': 't',
    '\\u0165': 't',
    '\\u1E6D': 't',
    '\\u021B': 't',
    '\\u0163': 't',
    '\\u1E71': 't',
    '\\u1E6F': 't',
    '\\u0167': 't',
    '\\u01AD': 't',
    '\\u0288': 't',
    '\\u2C66': 't',
    '\\uA787': 't',
    '\\uA729': 'tz',
    '\\u24E4': 'u',
    '\\uFF55': 'u',
    '\\u00F9': 'u',
    '\\u00FA': 'u',
    '\\u00FB': 'u',
    '\\u0169': 'u',
    '\\u1E79': 'u',
    '\\u016B': 'u',
    '\\u1E7B': 'u',
    '\\u016D': 'u',
    '\\u00FC': 'u',
    '\\u01DC': 'u',
    '\\u01D8': 'u',
    '\\u01D6': 'u',
    '\\u01DA': 'u',
    '\\u1EE7': 'u',
    '\\u016F': 'u',
    '\\u0171': 'u',
    '\\u01D4': 'u',
    '\\u0215': 'u',
    '\\u0217': 'u',
    '\\u01B0': 'u',
    '\\u1EEB': 'u',
    '\\u1EE9': 'u',
    '\\u1EEF': 'u',
    '\\u1EED': 'u',
    '\\u1EF1': 'u',
    '\\u1EE5': 'u',
    '\\u1E73': 'u',
    '\\u0173': 'u',
    '\\u1E77': 'u',
    '\\u1E75': 'u',
    '\\u0289': 'u',
    '\\u24E5': 'v',
    '\\uFF56': 'v',
    '\\u1E7D': 'v',
    '\\u1E7F': 'v',
    '\\u028B': 'v',
    '\\uA75F': 'v',
    '\\u028C': 'v',
    '\\uA761': 'vy',
    '\\u24E6': 'w',
    '\\uFF57': 'w',
    '\\u1E81': 'w',
    '\\u1E83': 'w',
    '\\u0175': 'w',
    '\\u1E87': 'w',
    '\\u1E85': 'w',
    '\\u1E98': 'w',
    '\\u1E89': 'w',
    '\\u2C73': 'w',
    '\\u24E7': 'x',
    '\\uFF58': 'x',
    '\\u1E8B': 'x',
    '\\u1E8D': 'x',
    '\\u24E8': 'y',
    '\\uFF59': 'y',
    '\\u1EF3': 'y',
    '\\u00FD': 'y',
    '\\u0177': 'y',
    '\\u1EF9': 'y',
    '\\u0233': 'y',
    '\\u1E8F': 'y',
    '\\u00FF': 'y',
    '\\u1EF7': 'y',
    '\\u1E99': 'y',
    '\\u1EF5': 'y',
    '\\u01B4': 'y',
    '\\u024F': 'y',
    '\\u1EFF': 'y',
    '\\u24E9': 'z',
    '\\uFF5A': 'z',
    '\\u017A': 'z',
    '\\u1E91': 'z',
    '\\u017C': 'z',
    '\\u017E': 'z',
    '\\u1E93': 'z',
    '\\u1E95': 'z',
    '\\u01B6': 'z',
    '\\u0225': 'z',
    '\\u0240': 'z',
    '\\u2C6C': 'z',
    '\\uA763': 'z',
    '\\u0386': '\\u0391',
    '\\u0388': '\\u0395',
    '\\u0389': '\\u0397',
    '\\u038A': '\\u0399',
    '\\u03AA': '\\u0399',
    '\\u038C': '\\u039F',
    '\\u038E': '\\u03A5',
    '\\u03AB': '\\u03A5',
    '\\u038F': '\\u03A9',
    '\\u03AC': '\\u03B1',
    '\\u03AD': '\\u03B5',
    '\\u03AE': '\\u03B7',
    '\\u03AF': '\\u03B9',
    '\\u03CA': '\\u03B9',
    '\\u0390': '\\u03B9',
    '\\u03CC': '\\u03BF',
    '\\u03CD': '\\u03C5',
    '\\u03CB': '\\u03C5',
    '\\u03B0': '\\u03C5',
    '\\u03CE': '\\u03C9',
    '\\u03C2': '\\u03C3',
    '\\u2019': '\\''
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The \`current\` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The \`query\` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var self = this;

    var data = Array.prototype.map.call(
      this.$element[0].querySelectorAll(':checked'),
      function (selectedElement) {
        return self.item($(selectedElement));
      }
    );

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if (
      data.element != null && data.element.tagName.toLowerCase() === 'option'
    ) {
      data.element.selected = true;

      this.$element.trigger('input').trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if (val.indexOf(id) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('input').trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('input').trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if (
      data.element != null &&
      data.element.tagName.toLowerCase() === 'option'
    ) {
      data.element.selected = false;

      this.$element.trigger('input').trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && val.indexOf(id) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('input').trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      Utils.RemoveData(this);
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      if (
        this.tagName.toLowerCase() !== 'option' &&
        this.tagName.toLowerCase() !== 'optgroup'
      ) {
        return;
      }

      var $option = $(this);

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    this.$element.append($options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    Utils.StoreData(option, 'data', normalizedData);

    return $(option);
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = Utils.GetData($option[0], 'data');

    if (data != null) {
      return data;
    }

    var option = $option[0];

    if (option.tagName.toLowerCase() === 'option') {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if (option.tagName.toLowerCase() === 'optgroup') {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    Utils.StoreData($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (item !== Object(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    this._dataToConvert = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.bind = function (container, $container) {
    ArrayAdapter.__super__.bind.call(this, container, $container);

    this.addOptions(this.convertToOptions(this._dataToConvert));
  };

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if (existingIds.indexOf(item.id) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        $option.append($children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if (typeof this._request.abort === 'function') {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a \`results\` key.
          if (!results || !results.results || !Array.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '\`results\` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ('status' in $request &&
            ($request.status === 0 || $request.status === '0')) {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if (Array.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', 'true');

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    if (params.term == null) {
      return null;
    }

    var term = params.term.trim();

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.trigger('focus');
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if (separators.indexOf(termChar) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.bind =
    function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('select', function () {
        self._checkIfMaximumSelected();
      });
  };

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this._checkIfMaximumSelected(function () {
        decorated.call(self, params, callback);
      });
  };

  MaximumSelectionLength.prototype._checkIfMaximumSelected =
    function (_, successCallback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }

        if (successCallback) {
          successCallback();
        }
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery'
], function ($) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);
    var searchLabel = this.options.get('translations').get('search');

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    this.$search.prop('autocomplete', this.options.get('autocomplete'));
    this.$search.attr('aria-label', searchLabel());

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the \`input\` event
    // This will prevent double-triggering of events for browsers which support
    // both the \`keyup\` and \`input\` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated \`keyup\` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);
      self.$search.attr('aria-controls', resultsId);

      self.$search.trigger('focus');

      window.setTimeout(function () {
        self.$search.trigger('focus');
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');

      self.$search.val('');
      self.$search.trigger('blur');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.trigger('focus');
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer[0].classList.remove('select2-search--hide');
        } else {
          self.$searchContainer[0].classList.add('select2-search--hide');
        }
      }
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
      this.loadMoreIfNeeded();
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
  };

  InfiniteScroll.prototype.loadMoreIfNeeded = function () {
    var isLoadMoreVisible = $.contains(
      document.documentElement,
      this.$loadingMore[0]
    );

    if (this.loading || !isLoadMoreVisible) {
      return;
    }

    var currentOffset = this.$results.offset().top +
      this.$results.outerHeight(false);
    var loadingMoreOffset = this.$loadingMore.offset().top +
      this.$loadingMore.outerHeight(false);

    if (currentOffset + 50 >= loadingMoreOffset) {
      this.loadMore();
    }
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="option" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = $(options.get('dropdownParent') || document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      // Must bind after the results handlers to ensure correct sizing
      self._bindContainerResultHandlers(container);
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown[0].classList.remove('select2');
    $dropdown[0].classList.add('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._bindContainerResultHandlers =
      function (decorated, container) {

    // These should only be bound once
    if (this._containerResultsHandlersBound) {
      return;
    }

    var self = this;

    container.on('results:all', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:append', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:message', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('select', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('unselect', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    this._containerResultsHandlersBound = true;
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      Utils.StoreData(this, 'select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = Utils.GetData(this, 'select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown[0].classList
      .contains('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown[0].classList
      .contains('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calculating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positioned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = {
      top: 0,
      left: 0
    };

    if (
      $.contains(document.body, $offsetParent[0]) ||
      $offsetParent[0].isConnected
      ) {
      parentOffset = $offsetParent.offset();
    }

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown[0].classList.remove('select2-dropdown--below');
      this.$dropdown[0].classList.remove('select2-dropdown--above');
      this.$dropdown[0].classList.add('select2-dropdown--' + newDirection);

      this.$container[0].classList.remove('select2-container--below');
      this.$container[0].classList.remove('select2-container--above');
      this.$container[0].classList.add('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[
  '../utils'
], function (Utils) {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = Utils.GetData($highlightedResults[0], 'data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/dropdown/dropdownCss',[
  '../utils'
], function (Utils) {
  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      Utils.copyNonInternalCssClasses($dropdown[0], this.$element[0]);
    }

    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/dropdown/tagsSearchHighlight',[
  '../utils'
], function (Utils) {
  function TagsSearchHighlight () { }

  TagsSearchHighlight.prototype.highlightFirstItem = function (decorated) {
    var $options = this.$results
    .find(
      '.select2-results__option--selectable' +
      ':not(.select2-results__option--selected)'
    );

    if ($options.length > 0) {
      var $firstOption = $options.first();
      var data = Utils.GetData($firstOption[0], 'data');
      var firstElement = data.element;

      if (firstElement && firstElement.getAttribute) {
        if (firstElement.getAttribute('data-select2-tag') === 'true') {
          $firstOption.trigger('mouseenter');

          return;
        }
      }
    }

    decorated.call(this);
  };

  return TagsSearchHighlight;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    },
    removeAllItems: function () {
      return 'Remove all items';
    },
    removeItem: function () {
      return 'Remove item';
    },
    search: function() {
      return 'Search';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/selectionCss',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',
  './dropdown/dropdownCss',
  './dropdown/tagsSearchHighlight',

  './i18n/en'
], function ($,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, SelectionCSS, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,
             DropdownCSS, TagsSearchHighlight,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }

      if (options.tags) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          TagsSearchHighlight
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (options.dropdownCssClass != null) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (options.selectionCssClass != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    // If the defaults were not previously applied from an element, it is
    // possible for the language option to have not been resolved
    options.language = this._resolveLanguage(options.language);

    // Always fall back to English since it will always be complete
    options.language.push('en');

    var uniqueLanguages = [];

    for (var l = 0; l < options.language.length; l++) {
      var language = options.language[l];

      if (uniqueLanguages.indexOf(language) === -1) {
        uniqueLanguages.push(language);
      }
    }

    options.language = uniqueLanguages;

    options.translations = this._processTranslations(
      options.language,
      options.debug
    );

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\\u0000-\\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if (params.term == null || params.term.trim() === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdLanguageBase: './i18n/',
      autocomplete: 'off',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: {},
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      scrollAfterSelect: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.applyFromElement = function (options, $element) {
    var optionLanguage = options.language;
    var defaultLanguage = this.defaults.language;
    var elementLanguage = $element.prop('lang');
    var parentLanguage = $element.closest('[lang]').prop('lang');

    var languages = Array.prototype.concat.call(
      this._resolveLanguage(elementLanguage),
      this._resolveLanguage(optionLanguage),
      this._resolveLanguage(defaultLanguage),
      this._resolveLanguage(parentLanguage)
    );

    options.language = languages;

    return options;
  };

  Defaults.prototype._resolveLanguage = function (language) {
    if (!language) {
      return [];
    }

    if ($.isEmptyObject(language)) {
      return [];
    }

    if ($.isPlainObject(language)) {
      return [language];
    }

    var languages;

    if (!Array.isArray(language)) {
      languages = [language];
    } else {
      languages = language;
    }

    var resolvedLanguages = [];

    for (var l = 0; l < languages.length; l++) {
      resolvedLanguages.push(languages[l]);

      if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = languages[l].split('-');
        var baseLanguage = languageParts[0];

        resolvedLanguages.push(baseLanguage);
      }
    }

    return resolvedLanguages;
  };

  Defaults.prototype._processTranslations = function (languages, debug) {
    var translations = new Translation();

    for (var l = 0; l < languages.length; l++) {
      var languageData = new Translation();

      var language = languages[l];

      if (typeof language === 'string') {
        try {
          // Try to load it with the original name
          languageData = Translation.loadPath(language);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            language = this.defaults.amdLanguageBase + language;
            languageData = Translation.loadPath(language);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files
            if (debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + language + '" could ' +
                'not be automatically loaded. A fallback will be used instead.'
              );
            }
          }
        }
      } else if ($.isPlainObject(language)) {
        languageData = new Translation(language);
      } else {
        languageData = language;
      }

      translations.extend(languageData);
    }

    return translations;
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(true, this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'jquery',
  './defaults',
  './utils'
], function ($, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    if ($element != null) {
      this.options = Defaults.applyFromElement(this.options, $element);
    }

    this.options = Defaults.apply(this.options);
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.autocomplete == null && $e.prop('autocomplete')) {
      this.options.autocomplete = $e.prop('autocomplete');
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if (Utils.GetData($e[0], 'select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The \`data-select2-tags\` attribute has been changed to ' +
          'use the \`data-data\` and \`data-tags="true"\` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
      Utils.StoreData($e[0], 'tags', true);
    }

    if (Utils.GetData($e[0], 'ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The \`data-ajax-url\` attribute has been changed to ' +
          '\`data-ajax--url\` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
      Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
    }

    var dataset = {};

    function upperCaseLetter(_, letter) {
      return letter.toUpperCase();
    }

    // Pre-load all of the attributes which are prefixed with \`data-\`
    for (var attr = 0; attr < $e[0].attributes.length; attr++) {
      var attributeName = $e[0].attributes[attr].name;
      var prefix = 'data-';

      if (attributeName.substr(0, prefix.length) == prefix) {
        // Get the contents of the attribute after \`data-\`
        var dataName = attributeName.substring(prefix.length);

        // Get the data contents from the consistent source
        // This is more than likely the jQuery data helper
        var dataValue = Utils.GetData($e[0], dataName);

        // camelCase the attribute name to match the spec
        var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

        // Store the data attribute contents into the dataset since
        dataset[camelDataName] = dataValue;
      }
    }

    // Prefer the element's \`dataset\` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, dataset);
    }

    // Prefer our internal data cache if it exists
    var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if (excludedData.indexOf(key) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if (Utils.GetData($element[0], 'select2') != null) {
      Utils.GetData($element[0], 'select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    Utils.StoreData($element[0], 'old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element[0].classList.add('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    Utils.StoreData($element[0], 'select2', this);

    // Ensure backwards compatibility with $element.data('select2').
    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\\.|\\[|\\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    if (method == 'computedstyle') {
      var computedStyle = window.getComputedStyle($element[0]);

      return computedStyle.width;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    this._observer = new window.MutationObserver(function (mutations) {
      self._syncA();
      self._syncS(mutations);
    });
    this._observer.observe(this.$element[0], {
      attributes: true,
      childList: true,
      subtree: false
    });
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if (nonRelayEvents.indexOf(name) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container[0].classList.add('select2-container--open');
    });

    this.on('close', function () {
      self.$container[0].classList.remove('select2-container--open');
    });

    this.on('enable', function () {
      self.$container[0].classList.remove('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container[0].classList.add('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container[0].classList.remove('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || (key === KEYS.UP && evt.altKey)) {
          self.close(evt);

          evt.preventDefault();
        } else if (key === KEYS.ENTER || key === KEYS.TAB) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.isDisabled()) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._isChangeMutation = function (mutations) {
    var self = this;

    if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          return true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      return true;
    } else if (Array.isArray(mutations)) {
      return mutations.some(function (mutation) {
        return self._isChangeMutation(mutation);
      });
    }

    return false;
  };

  Select2.prototype._syncSubtree = function (mutations) {
    var changed = this._isChangeMutation(mutations);
    var self = this;

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting',
      'clear': 'clearing'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.isDisabled()) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    if (this.isDisabled()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function (evt) {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', { originalEvent : evt });
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  Select2.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  Select2.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  Select2.prototype.isOpen = function () {
    return this.$container[0].classList.contains('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container[0].classList.contains('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container[0].classList.add('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The \`select2("enable")\` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using \`select2("data")\`. You ' +
        'should consider setting the value instead using \`$element.val()\`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The \`select2("val")\` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if (Array.isArray(newVal)) {
      newVal = newVal.map(function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('input').trigger('change');
  };

  Select2.prototype.destroy = function () {
    Utils.RemoveData(this.$container[0]);
    this.$container.remove();

    this._observer.disconnect();
    this._observer = null;

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex',
    Utils.GetData(this.$element[0], 'old-tabindex'));

    this.$element[0].classList.remove('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    Utils.RemoveData(this.$element[0]);
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container[0].classList
      .add('select2-container--' + this.options.get('theme'));

    Utils.StoreData($container[0], 'element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults',
  './select2/utils'
], function ($, _, Select2, Defaults, Utils) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = Utils.GetData(this, 'select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\\'' + options + '\\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning \`this\`
        if (thisMethods.indexOf(options) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));
`;new Function("module","require","window","jQuery",src)({},()=>jQuery$1,window,jQuery$1);function initSelect2(){jQuery$1(".fos-select2").select2({placeholder:"Select a fos"})}function initForm(){jQuery$1(document).on("click","#form_reset_button",function(){resetForm(jQuery$1("#filter_form"))}),jQuery$1("#expand_button").click(function(){jQuery$1("#collapseOne").collapse(),jQuery$1("#plus_minus").toggleClass("fa-plus fa-minus")});const t=[["selectAll","attributeform-"],["selectAllAllocations","allocationform-"],["selectAll","userform-"],["selectAll","users"],["selectAll","noteform-"],["selectAll","grantform-"],["selectAll","pubform-"],["selectAll","grantdownloadform-"]];for(const n of t)jQuery$1("#"+n[0]).click(function(){jQuery$1("input[name^='"+n[1]+"']").prop("checked",jQuery$1(this).prop("checked"))}),jQuery$1("input[name^='"+n[1]+"']").click(function(){jQuery$1(this).attr("id")!=n[0]&&jQuery$1("#"+n[0]).prop("checked",!1)})}function resetForm(t){t.find("input:text, input:password, input:file, select, textarea").val(""),t.find("input:radio, input:checkbox").removeAttr("checked").removeAttr("selected")}var $$1=jQuery$1,DataTable=function(t,n){if(DataTable.factory(t,n))return DataTable;if(this instanceof DataTable)return $$1(t).DataTable(n);n=t;var e=this,r=n===void 0,a=this.length;return r&&(n={}),this.api=function(){return new _Api(this)},this.each(function(){var s={},o=a>1?_fnExtend(s,n,!0):n,l=0,u,f=this.getAttribute("id"),d=DataTable.defaults,p=$$1(this);if(this.nodeName.toLowerCase()!="table"){_fnLog(null,0,"Non-table node initialisation ("+this.nodeName+")",2);return}o.on&&o.on.options&&_fnListener(p,"options",o.on.options),p.trigger("options.dt",o),_fnCompatOpts(d),_fnCompatCols(d.column),_fnCamelToHungarian(d,d,!0),_fnCamelToHungarian(d.column,d.column,!0),_fnCamelToHungarian(d,$$1.extend(o,_fnEscapeObject(p.data())),!0);var v=DataTable.settings;for(l=0,u=v.length;l<u;l++){var y=v[l];if(y.nTable==this||y.nTHead&&y.nTHead.parentNode==this||y.nTFoot&&y.nTFoot.parentNode==this){var x=o.bRetrieve!==void 0?o.bRetrieve:d.bRetrieve,S=o.bDestroy!==void 0?o.bDestroy:d.bDestroy;if(r||x)return y.oInstance;if(S){new DataTable.Api(y).destroy();break}else{_fnLog(y,0,"Cannot reinitialise DataTable",3);return}}if(y.sTableId==this.id){v.splice(l,1);break}}(f===null||f==="")&&(f="DataTables_Table_"+DataTable.ext._unique++,this.id=f),p.children("colgroup").remove();var D=$$1.extend(!0,{},DataTable.models.oSettings,{sDestroyWidth:p[0].style.width,sInstance:f,sTableId:f,colgroup:$$1("<colgroup>").prependTo(this),fastData:function(pe,we,xe){return _fnGetCellData(D,pe,we,xe)}});D.nTable=this,D.oInit=o,v.push(D),D.api=new _Api(D),D.oInstance=e.length===1?e:p.dataTable(),_fnCompatOpts(o),o.aLengthMenu&&!o.iDisplayLength&&(o.iDisplayLength=Array.isArray(o.aLengthMenu[0])?o.aLengthMenu[0][0]:$$1.isPlainObject(o.aLengthMenu[0])?o.aLengthMenu[0].value:o.aLengthMenu[0]),o=_fnExtend($$1.extend(!0,{},d),o),_fnMap(D.oFeatures,o,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),_fnMap(D,o,["ajax","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","iStateDuration","bSortCellsTop","iTabIndex","sDom","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId","caption","layout","orderDescReverse","orderIndicators","orderHandler","titleRow","typeDetect",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),_fnMap(D.oScroll,o,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),_fnMap(D.oLanguage,o,"fnInfoCallback"),_fnCallbackReg(D,"aoDrawCallback",o.fnDrawCallback),_fnCallbackReg(D,"aoStateSaveParams",o.fnStateSaveParams),_fnCallbackReg(D,"aoStateLoadParams",o.fnStateLoadParams),_fnCallbackReg(D,"aoStateLoaded",o.fnStateLoaded),_fnCallbackReg(D,"aoRowCallback",o.fnRowCallback),_fnCallbackReg(D,"aoRowCreatedCallback",o.fnCreatedRow),_fnCallbackReg(D,"aoHeaderCallback",o.fnHeaderCallback),_fnCallbackReg(D,"aoFooterCallback",o.fnFooterCallback),_fnCallbackReg(D,"aoInitComplete",o.fnInitComplete),_fnCallbackReg(D,"aoPreDrawCallback",o.fnPreDrawCallback),D.rowIdFn=_fnGetObjectDataFn(o.rowId),o.on&&Object.keys(o.on).forEach(function(pe){_fnListener(p,pe,o.on[pe])}),_fnBrowserDetect(D);var A=D.oClasses;$$1.extend(A,DataTable.ext.classes,o.oClasses),p.addClass(A.table),D.oFeatures.bPaginate||(o.iDisplayStart=0),D.iInitDisplayStart===void 0&&(D.iInitDisplayStart=o.iDisplayStart,D._iDisplayStart=o.iDisplayStart);var I=o.iDeferLoading;if(I!==null){D.deferLoading=!0;var W=Array.isArray(I);D._iRecordsDisplay=W?I[0]:I,D._iRecordsTotal=W?I[1]:I}var N=[],U=this.getElementsByTagName("thead"),J=_fnDetectHeader(D,U[0]);if(o.aoColumns)N=o.aoColumns;else if(J.length)for(l=0,u=J[0].length;l<u;l++)N.push(null);for(l=0,u=N.length;l<u;l++)_fnAddColumn(D);_fnApplyColumnDefs(D,o.aoColumnDefs,N,J,function(pe,we){_fnColumnOptions(D,pe,we)});var m=p.children("tbody").find("tr:first-child").eq(0);if(m.length){var ne=function(pe,we){return pe.getAttribute("data-"+we)!==null?we:null};$$1(m[0]).children("th, td").each(function(pe,we){var xe=D.aoColumns[pe];if(xe||_fnLog(D,0,"Incorrect column count",18),xe.mData===pe){var je=ne(we,"sort")||ne(we,"order"),Le=ne(we,"filter")||ne(we,"search");(je!==null||Le!==null)&&(xe.mData={_:pe+".display",sort:je!==null?pe+".@data-"+je:void 0,type:je!==null?pe+".@data-"+je:void 0,filter:Le!==null?pe+".@data-"+Le:void 0},xe._isArrayHost=!0,_fnColumnOptions(D,pe))}})}_fnCallbackReg(D,"aoDrawCallback",_fnSaveState);var ie=D.oFeatures;if(o.bStateSave&&(ie.bStateSave=!0),o.aaSorting===void 0){var ge=D.aaSorting;for(l=0,u=ge.length;l<u;l++)ge[l][1]=D.aoColumns[l].asSorting[0]}_fnSortingClasses(D),_fnCallbackReg(D,"aoDrawCallback",function(){(D.bSorted||_fnDataSource(D)==="ssp"||ie.bDeferRender)&&_fnSortingClasses(D)});var ve=p.children("caption");D.caption&&(ve.length===0&&(ve=$$1("<caption/>").appendTo(p)),ve.html(D.caption)),ve.length&&(ve[0]._captionSide=ve.css("caption-side"),D.captionNode=ve[0]),U.length===0&&(U=$$1("<thead/>").appendTo(p)),D.nTHead=U[0];var _e=p.children("tbody");_e.length===0&&(_e=$$1("<tbody/>").insertAfter(U)),D.nTBody=_e[0];var ue=p.children("tfoot");ue.length===0&&(ue=$$1("<tfoot/>").appendTo(p)),D.nTFoot=ue[0],D.aiDisplay=D.aiDisplayMaster.slice(),D.bInitialised=!0;var He=D.oLanguage;$$1.extend(!0,He,o.oLanguage),He.sUrl?$$1.ajax({dataType:"json",url:He.sUrl,success:function(pe){_fnCamelToHungarian(d.oLanguage,pe),$$1.extend(!0,He,pe,D.oInit.oLanguage),_fnCallbackFire(D,null,"i18n",[D],!0),_fnInitialise(D)},error:function(){_fnLog(D,0,"i18n file loading error",21),_fnInitialise(D)}}):(_fnCallbackFire(D,null,"i18n",[D],!0),_fnInitialise(D))}),e=null,this};DataTable.ext=_ext={builder:"-source-",buttons:{},ccContent:{},classes:{},errMode:"alert",escape:{attributes:!1},feature:[],features:{},search:[],selector:{cell:[],column:[],row:[]},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{className:{},detect:[],render:{},search:{},order:{}},_unique:0,fnVersionCheck:DataTable.fnVersionCheck,iApiIndex:0,sVersion:DataTable.version};$$1.extend(_ext,{afnFiltering:_ext.search,aTypes:_ext.type.detect,ofnSearch:_ext.type.search,oSort:_ext.type.order,afnSortData:_ext.order,aoFeatures:_ext.feature,oStdClasses:_ext.classes,oPagination:_ext.pager});$$1.extend(DataTable.ext.classes,{container:"dt-container",empty:{row:"dt-empty"},info:{container:"dt-info"},layout:{row:"dt-layout-row",cell:"dt-layout-cell",tableRow:"dt-layout-table",tableCell:"",start:"dt-layout-start",end:"dt-layout-end",full:"dt-layout-full"},length:{container:"dt-length",select:"dt-input"},order:{canAsc:"dt-orderable-asc",canDesc:"dt-orderable-desc",isAsc:"dt-ordering-asc",isDesc:"dt-ordering-desc",none:"dt-orderable-none",position:"sorting_"},processing:{container:"dt-processing"},scrolling:{body:"dt-scroll-body",container:"dt-scroll",footer:{self:"dt-scroll-foot",inner:"dt-scroll-footInner"},header:{self:"dt-scroll-head",inner:"dt-scroll-headInner"}},search:{container:"dt-search",input:"dt-input"},table:"dataTable",tbody:{cell:"",row:""},thead:{cell:"",row:""},tfoot:{cell:"",row:""},paging:{active:"current",button:"dt-paging-button",container:"dt-paging",disabled:"disabled",nav:""}});var _ext,_Api,_api_register,_api_registerPlural,_re_dic={},_re_new_lines=/[\r\n\u2028]/g,_re_html=/<([^>]*>)/g,_max_str_len=Math.pow(2,28),_re_date=/^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/,_re_escape_regex=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),_re_formatted_numeric=/['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,_empty=function(t){return!t||t===!0||t==="-"},_intVal=function(t){var n=parseInt(t,10);return!isNaN(n)&&isFinite(t)?n:null},_numToDecimal=function(t,n){return _re_dic[n]||(_re_dic[n]=new RegExp(_fnEscapeRegex(n),"g")),typeof t=="string"&&n!=="."?t.replace(/\./g,"").replace(_re_dic[n],"."):t},_isNumber=function(t,n,e,r){var a=typeof t,s=a==="string";return a==="number"||a==="bigint"||r&&_empty(t)?!0:(n&&s&&(t=_numToDecimal(t,n)),e&&s&&(t=t.replace(_re_formatted_numeric,"")),!isNaN(parseFloat(t))&&isFinite(t))},_isHtml=function(t){return _empty(t)||typeof t=="string"},_htmlNumeric=function(t,n,e,r){if(r&&_empty(t))return!0;if(typeof t=="string"&&t.match(/<(input|select)/i))return null;var a=_isHtml(t);return a&&_isNumber(_stripHtml(t),n,e,r)?!0:null},_pluck=function(t,n,e){var r=[],a=0,s=t.length;if(e!==void 0)for(;a<s;a++)t[a]&&t[a][n]&&r.push(t[a][n][e]);else for(;a<s;a++)t[a]&&r.push(t[a][n]);return r},_pluck_order=function(t,n,e,r){var a=[],s=0,o=n.length;if(r!==void 0)for(;s<o;s++)t[n[s]]&&t[n[s]][e]&&a.push(t[n[s]][e][r]);else for(;s<o;s++)t[n[s]]&&a.push(t[n[s]][e]);return a},_range=function(t,n){var e=[],r;n===void 0?(n=0,r=t):(r=n,n=t);for(var a=n;a<r;a++)e.push(a);return e},_removeEmpty=function(t){for(var n=[],e=0,r=t.length;e<r;e++)t[e]&&n.push(t[e]);return n},_stripHtml=function(t){if(!t||typeof t!="string")return t;if(t.length>_max_str_len)throw new Error("Exceeded max str len");var n;t=t.replace(_re_html,"");do n=t,t=t.replace(/<script/i,"");while(t!==n);return n},_escapeHtml=function(t){return Array.isArray(t)&&(t=t.join(",")),typeof t=="string"?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t},_normalize=function(t,n){if(typeof t!="string")return t;var e=t.normalize?t.normalize("NFD"):t;return e.length!==t.length?(n===!0?t+" ":"")+e.replace(/[\u0300-\u036f]/g,""):e},_areAllUnique=function(t){if(t.length<2)return!0;for(var n=t.slice().sort(),e=n[0],r=1,a=n.length;r<a;r++){if(n[r]===e)return!1;e=n[r]}return!0},_unique=function(t){if(Array.from&&Set)return Array.from(new Set(t));if(_areAllUnique(t))return t.slice();var n=[],e,r,a=t.length,s,o=0;e:for(r=0;r<a;r++){for(e=t[r],s=0;s<o;s++)if(n[s]===e)continue e;n.push(e),o++}return n},_flatten=function(t,n){if(Array.isArray(n))for(var e=0;e<n.length;e++)_flatten(t,n[e]);else t.push(n);return t};function _addClass(t,n){n&&n.split(" ").forEach(function(e){e&&t.classList.add(e)})}DataTable.util={diacritics:function(t,n){var e=typeof t;if(e!=="function")return _normalize(t,n);_normalize=t},debounce:function(t,n){var e;return function(){var r=this,a=arguments;clearTimeout(e),e=setTimeout(function(){t.apply(r,a)},n||250)}},throttle:function(t,n){var e=n!==void 0?n:200,r,a;return function(){var s=this,o=+new Date,l=arguments;r&&o<r+e?(clearTimeout(a),a=setTimeout(function(){r=void 0,t.apply(s,l)},e)):(r=o,t.apply(s,l))}},escapeRegex:function(t){return t.replace(_re_escape_regex,"\\$1")},set:function(t){if($$1.isPlainObject(t))return DataTable.util.set(t._);if(t===null)return function(){};if(typeof t=="function")return function(e,r,a){t(e,"set",r,a)};if(typeof t=="string"&&(t.indexOf(".")!==-1||t.indexOf("[")!==-1||t.indexOf("(")!==-1)){var n=function(e,r,a){for(var s=_fnSplitObjNotation(a),o,l=s[s.length-1],u,f,d,p,v=0,y=s.length-1;v<y;v++){if(s[v]==="__proto__"||s[v]==="constructor")throw new Error("Cannot set prototype values");if(u=s[v].match(__reArray),f=s[v].match(__reFn),u){if(s[v]=s[v].replace(__reArray,""),e[s[v]]=[],o=s.slice(),o.splice(0,v+1),p=o.join("."),Array.isArray(r))for(var x=0,S=r.length;x<S;x++)d={},n(d,r[x],p),e[s[v]].push(d);else e[s[v]]=r;return}else f&&(s[v]=s[v].replace(__reFn,""),e=e[s[v]](r));(e[s[v]]===null||e[s[v]]===void 0)&&(e[s[v]]={}),e=e[s[v]]}l.match(__reFn)?e=e[l.replace(__reFn,"")](r):e[l.replace(__reArray,"")]=r};return function(e,r){return n(e,r,t)}}else return function(e,r){e[t]=r}},get:function(t){if($$1.isPlainObject(t)){var n={};return $$1.each(t,function(r,a){a&&(n[r]=DataTable.util.get(a))}),function(r,a,s,o){var l=n[a]||n._;return l!==void 0?l(r,a,s,o):r}}else{if(t===null)return function(r){return r};if(typeof t=="function")return function(r,a,s,o){return t(r,a,s,o)};if(typeof t=="string"&&(t.indexOf(".")!==-1||t.indexOf("[")!==-1||t.indexOf("(")!==-1)){var e=function(r,a,s){var o,l,u,f;if(s!=="")for(var d=_fnSplitObjNotation(s),p=0,v=d.length;p<v;p++){if(o=d[p].match(__reArray),l=d[p].match(__reFn),o){if(d[p]=d[p].replace(__reArray,""),d[p]!==""&&(r=r[d[p]]),u=[],d.splice(0,p+1),f=d.join("."),Array.isArray(r))for(var y=0,x=r.length;y<x;y++)u.push(e(r[y],a,f));var S=o[0].substring(1,o[0].length-1);r=S===""?u:u.join(S);break}else if(l){d[p]=d[p].replace(__reFn,""),r=r[d[p]]();continue}if(r===null||r[d[p]]===null)return null;if(r===void 0||r[d[p]]===void 0)return;r=r[d[p]]}return r};return function(r,a){return e(r,a,t)}}else return function(r){return r[t]}}},stripHtml:function(t){var n=typeof t;if(n==="function"){_stripHtml=t;return}else if(n==="string")return _stripHtml(t);return t},escapeHtml:function(t){var n=typeof t;if(n==="function"){_escapeHtml=t;return}else if(n==="string"||Array.isArray(t))return _escapeHtml(t);return t},unique:_unique};function _fnHungarianMap(t){var n="a aa ai ao as b fn i m o s ",e,r,a={};$$1.each(t,function(s){e=s.match(/^([^A-Z]+?)([A-Z])/),e&&n.indexOf(e[1]+" ")!==-1&&(r=s.replace(e[0],e[2].toLowerCase()),a[r]=s,e[1]==="o"&&_fnHungarianMap(t[s]))}),t._hungarianMap=a}function _fnCamelToHungarian(t,n,e){t._hungarianMap||_fnHungarianMap(t);var r;$$1.each(n,function(a){r=t._hungarianMap[a],r!==void 0&&(e||n[r]===void 0)&&(r.charAt(0)==="o"?(n[r]||(n[r]={}),$$1.extend(!0,n[r],n[a]),_fnCamelToHungarian(t[r],n[r],e)):n[r]=n[a])})}var _fnCompatMap=function(t,n,e){t[n]!==void 0&&(t[e]=t[n])};function _fnCompatOpts(t){_fnCompatMap(t,"ordering","bSort"),_fnCompatMap(t,"orderMulti","bSortMulti"),_fnCompatMap(t,"orderClasses","bSortClasses"),_fnCompatMap(t,"orderCellsTop","bSortCellsTop"),_fnCompatMap(t,"order","aaSorting"),_fnCompatMap(t,"orderFixed","aaSortingFixed"),_fnCompatMap(t,"paging","bPaginate"),_fnCompatMap(t,"pagingType","sPaginationType"),_fnCompatMap(t,"pageLength","iDisplayLength"),_fnCompatMap(t,"searching","bFilter"),typeof t.sScrollX=="boolean"&&(t.sScrollX=t.sScrollX?"100%":""),typeof t.scrollX=="boolean"&&(t.scrollX=t.scrollX?"100%":""),typeof t.bSort=="object"?(t.orderIndicators=t.bSort.indicators!==void 0?t.bSort.indicators:!0,t.orderHandler=t.bSort.handler!==void 0?t.bSort.handler:!0,t.bSort=!0):t.bSort===!1?(t.orderIndicators=!1,t.orderHandler=!1):t.bSort===!0&&(t.orderIndicators=!0,t.orderHandler=!0),typeof t.bSortCellsTop=="boolean"&&(t.titleRow=t.bSortCellsTop);var n=t.aoSearchCols;if(n)for(var e=0,r=n.length;e<r;e++)n[e]&&_fnCamelToHungarian(DataTable.models.oSearch,n[e]);t.serverSide&&!t.searchDelay&&(t.searchDelay=400)}function _fnCompatCols(t){_fnCompatMap(t,"orderable","bSortable"),_fnCompatMap(t,"orderData","aDataSort"),_fnCompatMap(t,"orderSequence","asSorting"),_fnCompatMap(t,"orderDataType","sortDataType");var n=t.aDataSort;typeof n=="number"&&!Array.isArray(n)&&(t.aDataSort=[n])}function _fnBrowserDetect(t){if(!DataTable.__browser){var n={};DataTable.__browser=n;var e=$$1("<div/>").css({position:"fixed",top:0,left:-1*window.pageXOffset,height:1,width:1,overflow:"hidden"}).append($$1("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append($$1("<div/>").css({width:"100%",height:10}))).appendTo("body"),r=e.children(),a=r.children();n.barWidth=r[0].offsetWidth-r[0].clientWidth,n.bScrollbarLeft=Math.round(a.offset().left)!==1,e.remove()}$$1.extend(t.oBrowser,DataTable.__browser),t.oScroll.iBarWidth=DataTable.__browser.barWidth}function _fnAddColumn(t){var n=DataTable.defaults.column,e=t.aoColumns.length,r=$$1.extend({},DataTable.models.oColumn,n,{aDataSort:n.aDataSort?n.aDataSort:[e],mData:n.mData?n.mData:e,idx:e,searchFixed:{},colEl:$$1("<col>").attr("data-dt-column",e)});t.aoColumns.push(r);var a=t.aoPreSearchCols;a[e]=$$1.extend({},DataTable.models.oSearch,a[e])}function _fnColumnOptions(t,n,e){var r=t.aoColumns[n];if(e!=null){_fnCompatCols(e),_fnCamelToHungarian(DataTable.defaults.column,e,!0),e.mDataProp!==void 0&&!e.mData&&(e.mData=e.mDataProp),e.sType&&(r._sManualType=e.sType),e.className&&!e.sClass&&(e.sClass=e.className);var a=r.sClass;$$1.extend(r,e),_fnMap(r,e,"sWidth","sWidthOrig"),a!==r.sClass&&(r.sClass=a+" "+r.sClass),e.iDataSort!==void 0&&(r.aDataSort=[e.iDataSort]),_fnMap(r,e,"aDataSort")}var s=r.mData,o=_fnGetObjectDataFn(s);if(r.mRender&&Array.isArray(r.mRender)){var l=r.mRender.slice(),u=l.shift();r.mRender=DataTable.render[u].apply(window,l)}r._render=r.mRender?_fnGetObjectDataFn(r.mRender):null;var f=function(d){return typeof d=="string"&&d.indexOf("@")!==-1};r._bAttrSrc=$$1.isPlainObject(s)&&(f(s.sort)||f(s.type)||f(s.filter)),r._setter=null,r.fnGetData=function(d,p,v){var y=o(d,p,void 0,v);return r._render&&p?r._render(y,p,d,v):y},r.fnSetData=function(d,p,v){return _fnSetObjectDataFn(s)(d,p,v)},typeof s!="number"&&!r._isArrayHost&&(t._rowReadObject=!0),t.oFeatures.bSort||(r.bSortable=!1)}function _fnAdjustColumnSizing(t){_fnCalculateColumnWidths(t),_fnColumnSizes(t);var n=t.oScroll;(n.sY!==""||n.sX!=="")&&_fnScrollDraw(t),_fnCallbackFire(t,null,"column-sizing",[t])}function _fnColumnSizes(t){for(var n=t.aoColumns,e=0;e<n.length;e++){var r=_fnColumnsSumWidth(t,[e],!1);n[e].colEl.css("width",r),t.oScroll.sX&&n[e].colEl.css("min-width",r)}}function _fnVisibleToColumnIndex(t,n){var e=_fnGetColumns(t,"bVisible");return typeof e[n]=="number"?e[n]:null}function _fnColumnIndexToVisible(t,n){var e=_fnGetColumns(t,"bVisible"),r=e.indexOf(n);return r!==-1?r:null}function _fnVisibleColumns(t){var n=t.aoHeader,e=t.aoColumns,r=0;if(n.length)for(var a=0,s=n[0].length;a<s;a++)e[a].bVisible&&$$1(n[0][a].cell).css("display")!=="none"&&r++;return r}function _fnGetColumns(t,n){var e=[];return t.aoColumns.map(function(r,a){r[n]&&e.push(a)}),e}function _typeResult(t,n){return n===!0?t._name:n}function _fnColumnTypes(t){var n=t.aoColumns,e=t.aoData,r=DataTable.ext.type.detect,a,s,o,l,u,f,d,p,v;for(a=0,s=n.length;a<s;a++){if(d=n[a],v=[],!d.sType&&d._sManualType)d.sType=d._sManualType;else if(!d.sType){if(!t.typeDetect)return;for(o=0,l=r.length;o<l;o++){var y=r[o],x=y.oneOf,S=y.allOf||y,D=y.init,A=!1;if(p=null,D&&(p=_typeResult(y,D(t,d,a)),p)){d.sType=p;break}for(u=0,f=e.length;u<f&&!(e[u]&&(v[u]===void 0&&(v[u]=_fnGetCellData(t,u,a,"type")),x&&!A&&(A=_typeResult(y,x(v[u],t))),p=_typeResult(y,S(v[u],t)),!p&&o!==r.length-3||p==="html"&&!_empty(v[u])));u++);if(x&&A&&p||!x&&p){d.sType=p;break}}d.sType||(d.sType="string")}var I=_ext.type.className[d.sType];I&&(_columnAutoClass(t.aoHeader,a,I),_columnAutoClass(t.aoFooter,a,I));var W=_ext.type.render[d.sType];W&&!d._render&&(d._render=DataTable.util.get(W),_columnAutoRender(t,a))}}function _columnAutoRender(t,n){for(var e=t.aoData,r=0;r<e.length;r++)if(e[r].nTr){var a=_fnGetCellData(t,r,n,"display");e[r].displayData[n]=a,_fnWriteCell(e[r].anCells[n],a)}}function _columnAutoClass(t,n,e){t.forEach(function(r){r[n]&&r[n].unique&&_addClass(r[n].cell,e)})}function _fnApplyColumnDefs(t,n,e,r,a){var s,o,l,u,f,d,p,v=t.aoColumns;if(e)for(s=0,o=e.length;s<o;s++)e[s]&&e[s].name&&(v[s].sName=e[s].name);if(n)for(s=n.length-1;s>=0;s--){p=n[s];var y=p.target!==void 0?p.target:p.targets!==void 0?p.targets:p.aTargets;for(Array.isArray(y)||(y=[y]),l=0,u=y.length;l<u;l++){var x=y[l];if(typeof x=="number"&&x>=0){for(;v.length<=x;)_fnAddColumn(t);a(x,p)}else if(typeof x=="number"&&x<0)a(v.length+x,p);else if(typeof x=="string")for(f=0,d=v.length;f<d;f++)x==="_all"?a(f,p):x.indexOf(":name")!==-1?v[f].sName===x.replace(":name","")&&a(f,p):r.forEach(function(S){if(S[f]){var D=$$1(S[f].cell);x.match(/^[a-z][\w-]*$/i)&&(x="."+x),D.is(x)&&a(f,p)}})}}if(e)for(s=0,o=e.length;s<o;s++)a(s,e[s])}function _fnColumnsSumWidth(t,n,e,r){Array.isArray(n)||(n=_fnColumnsFromHeader(n));for(var a=0,s,o=t.aoColumns,l=0,u=n.length;l<u;l++){var f=o[n[l]],d=e?f.sWidthOrig:f.sWidth;if(f.bVisible!==!1){if(d==null)return null;if(typeof d=="number")s="px",a+=d;else{var p=d.match(/([\d\.]+)([^\d]*)/);p&&(a+=p[1]*1,s=p.length===3?p[2]:"px")}}}return a+s}function _fnColumnsFromHeader(t){var n=$$1(t).closest("[data-dt-column]").attr("data-dt-column");return n?n.split(",").map(function(e){return e*1}):[]}function _fnAddData(t,n,e,r){var a=t.aoData.length,s=$$1.extend(!0,{},DataTable.models.oRow,{src:e?"dom":"data",idx:a});s._aData=n,t.aoData.push(s);for(var o=t.aoColumns,l=0,u=o.length;l<u;l++)o[l].sType=null;t.aiDisplayMaster.push(a);var f=t.rowIdFn(n);return f!==void 0&&(t.aIds[f]=s),(e||!t.oFeatures.bDeferRender)&&_fnCreateTr(t,a,e,r),a}function _fnAddTr(t,n){var e;return n instanceof $$1||(n=$$1(n)),n.map(function(r,a){return e=_fnGetRowElements(t,a),_fnAddData(t,e.data,a,e.cells)})}function _fnGetCellData(t,n,e,r){r==="search"?r="filter":r==="order"&&(r="sort");var a=t.aoData[n];if(a){var s=t.iDraw,o=t.aoColumns[e],l=a._aData,u=o.sDefaultContent,f=o.fnGetData(l,r,{settings:t,row:n,col:e});if(r!=="display"&&f&&typeof f=="object"&&f.nodeName&&(f=f.innerHTML),f===void 0)return t.iDrawError!=s&&u===null&&(_fnLog(t,0,"Requested unknown parameter "+(typeof o.mData=="function"?"{function}":"'"+o.mData+"'")+" for row "+n+", column "+e,4),t.iDrawError=s),u;if((f===l||f===null)&&u!==null&&r!==void 0)f=u;else if(typeof f=="function")return f.call(l);if(f===null&&r==="display")return"";if(r==="filter"){var d=DataTable.ext.type.search;d[o.sType]&&(f=d[o.sType](f))}return f}}function _fnSetCellData(t,n,e,r){var a=t.aoColumns[e],s=t.aoData[n]._aData;a.fnSetData(s,r,{settings:t,row:n,col:e})}function _fnWriteCell(t,n){n&&typeof n=="object"&&n.nodeName?$$1(t).empty().append(n):t.innerHTML=n}var __reArray=/\[.*?\]$/,__reFn=/\(\)$/;function _fnSplitObjNotation(t){var n=t.match(/(\\.|[^.])+/g)||[""];return n.map(function(e){return e.replace(/\\\./g,".")})}var _fnGetObjectDataFn=DataTable.util.get,_fnSetObjectDataFn=DataTable.util.set;function _fnGetDataMaster(t){return _pluck(t.aoData,"_aData")}function _fnClearTable(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0,t.aIds={}}function _fnInvalidate(t,n,e,r){var a=t.aoData[n],s,o;if(a._aSortData=null,a._aFilterData=null,a.displayData=null,e==="dom"||(!e||e==="auto")&&a.src==="dom")a._aData=_fnGetRowElements(t,a,r,r===void 0?void 0:a._aData).data;else{var l=a.anCells,u=_fnGetRowDisplay(t,n);if(l)if(r!==void 0)_fnWriteCell(l[r],u[r]);else for(s=0,o=l.length;s<o;s++)_fnWriteCell(l[s],u[s])}var f=t.aoColumns;if(r!==void 0)f[r].sType=null,f[r].wideStrings=null;else{for(s=0,o=f.length;s<o;s++)f[s].sType=null,f[s].wideStrings=null;_fnRowAttributes(t,a)}}function _fnGetRowElements(t,n,e,r){var a=[],s=n.firstChild,o,l,u=0,f,d=t.aoColumns,p=t._rowReadObject;r=r!==void 0?r:p?{}:[];var v=function(I,W){if(typeof I=="string"){var N=I.indexOf("@");if(N!==-1){var U=I.substring(N+1),J=_fnSetObjectDataFn(I);J(r,W.getAttribute(U))}}},y=function(I){if(e===void 0||e===u)if(l=d[u],f=I.innerHTML.trim(),l&&l._bAttrSrc){var W=_fnSetObjectDataFn(l.mData._);W(r,f),v(l.mData.sort,I),v(l.mData.type,I),v(l.mData.filter,I)}else p?(l._setter||(l._setter=_fnSetObjectDataFn(l.mData)),l._setter(r,f)):r[u]=f;u++};if(s)for(;s;)o=s.nodeName.toUpperCase(),(o=="TD"||o=="TH")&&(y(s),a.push(s)),s=s.nextSibling;else{a=n.anCells;for(var x=0,S=a.length;x<S;x++)y(a[x])}var D=n.firstChild?n:n.nTr;if(D){var A=D.getAttribute("id");A&&_fnSetObjectDataFn(t.rowId)(r,A)}return{data:r,cells:a}}function _fnGetRowDisplay(t,n){var e=t.aoData[n],r=t.aoColumns;if(!e.displayData){e.displayData=[];for(var a=0,s=r.length;a<s;a++)e.displayData.push(_fnGetCellData(t,n,a,"display"))}return e.displayData}function _fnCreateTr(t,n,e,r){var a=t.aoData[n],s=a._aData,o=[],l,u,f,d,p,v,y=t.oClasses.tbody.row;if(a.nTr===null){for(l=e||document.createElement("tr"),a.nTr=l,a.anCells=o,_addClass(l,y),l._DT_RowIndex=n,_fnRowAttributes(t,a),d=0,p=t.aoColumns.length;d<p;d++){f=t.aoColumns[d],v=!(e&&r[d]),u=v?document.createElement(f.sCellType):r[d],u||_fnLog(t,0,"Incorrect column count",18),u._DT_CellIndex={row:n,column:d},o.push(u);var x=_fnGetRowDisplay(t,n);(v||(f.mRender||f.mData!==d)&&(!$$1.isPlainObject(f.mData)||f.mData._!==d+".display"))&&_fnWriteCell(u,x[d]),_addClass(u,f.sClass),f.bVisible&&v?l.appendChild(u):!f.bVisible&&!v&&u.parentNode.removeChild(u),f.fnCreatedCell&&f.fnCreatedCell.call(t.oInstance,u,_fnGetCellData(t,n,d),s,n,d)}_fnCallbackFire(t,"aoRowCreatedCallback","row-created",[l,s,n,o])}else _addClass(a.nTr,y)}function _fnRowAttributes(t,n){var e=n.nTr,r=n._aData;if(e){var a=t.rowIdFn(r);if(a&&(e.id=a),r.DT_RowClass){var s=r.DT_RowClass.split(" ");n.__rowc=n.__rowc?_unique(n.__rowc.concat(s)):s,$$1(e).removeClass(n.__rowc.join(" ")).addClass(r.DT_RowClass)}r.DT_RowAttr&&$$1(e).attr(r.DT_RowAttr),r.DT_RowData&&$$1(e).data(r.DT_RowData)}}function _fnBuildHead(t,n){var e=t.oClasses,r=t.aoColumns,a,s,o,l=n==="header"?t.nTHead:t.nTFoot,u=n==="header"?"sTitle":n;if(l){if((n==="header"||_pluck(t.aoColumns,u).join(""))&&(o=$$1("tr",l),o.length||(o=$$1("<tr/>").appendTo(l)),o.length===1)){var f=0;for($$1("td, th",o).each(function(){f+=this.colSpan}),a=f,s=r.length;a<s;a++)$$1("<th/>").html(r[a][u]||"").appendTo(o)}var d=_fnDetectHeader(t,l,!0);n==="header"?(t.aoHeader=d,$$1("tr",l).addClass(e.thead.row)):(t.aoFooter=d,$$1("tr",l).addClass(e.tfoot.row)),$$1(l).children("tr").children("th, td").each(function(){_fnRenderer(t,n)(t,$$1(this),e)})}}function _fnHeaderLayout(t,n,e){var r,a,s,o=[],l=[],u=t.aoColumns,f=u.length,d,p;if(n){for(e||(e=_range(f).filter(function(x){return u[x].bVisible})),r=0;r<n.length;r++)o[r]=n[r].slice().filter(function(x,S){return e.includes(S)}),l.push([]);for(r=0;r<o.length;r++)for(a=0;a<o[r].length;a++)if(d=1,p=1,l[r][a]===void 0){for(s=o[r][a].cell;o[r+d]!==void 0&&o[r][a].cell==o[r+d][a].cell;)l[r+d][a]=null,d++;for(;o[r][a+p]!==void 0&&o[r][a].cell==o[r][a+p].cell;){for(var v=0;v<d;v++)l[r+v][a+p]=null;p++}var y=$$1("span.dt-column-title",s);l[r][a]={cell:s,colspan:p,rowspan:d,title:y.length?y.html():$$1(s).html()}}return l}}function _fnDrawHead(t,n){for(var e=_fnHeaderLayout(t,n),r,a,s=0;s<n.length;s++){if(r=n[s].row,r)for(;a=r.firstChild;)r.removeChild(a);for(var o=0;o<e[s].length;o++){var l=e[s][o];l&&$$1(l.cell).appendTo(r).attr("rowspan",l.rowspan).attr("colspan",l.colspan)}}}function _fnDraw(t,n){_fnStart(t);var e=_fnCallbackFire(t,"aoPreDrawCallback","preDraw",[t]);if(e.indexOf(!1)!==-1){_fnProcessingDisplay(t,!1);return}var r=[],a=0,s=_fnDataSource(t)=="ssp",o=t.aiDisplay,l=t._iDisplayStart,u=t.fnDisplayEnd(),f=t.aoColumns,d=$$1(t.nTBody);if(t.bDrawing=!0,t.deferLoading)t.deferLoading=!1,t.iDraw++,_fnProcessingDisplay(t,!1);else if(!s)t.iDraw++;else if(!t.bDestroying&&!n){t.iDraw===0&&d.empty().append(_emptyRow(t)),_fnAjaxUpdate(t);return}if(o.length!==0)for(var p=s?0:l,v=s?t.aoData.length:u,y=p;y<v;y++){var x=o[y],S=t.aoData[x];if(S!==null){S.nTr===null&&_fnCreateTr(t,x);for(var D=S.nTr,A=0;A<f.length;A++){var I=f[A],W=S.anCells[A];_addClass(W,_ext.type.className[I.sType]),_addClass(W,t.oClasses.tbody.cell)}_fnCallbackFire(t,"aoRowCallback",null,[D,S._aData,a,y,x]),r.push(D),a++}}else r[0]=_emptyRow(t);_fnCallbackFire(t,"aoHeaderCallback","header",[$$1(t.nTHead).children("tr")[0],_fnGetDataMaster(t),l,u,o]),_fnCallbackFire(t,"aoFooterCallback","footer",[$$1(t.nTFoot).children("tr")[0],_fnGetDataMaster(t),l,u,o]),d[0].replaceChildren?d[0].replaceChildren.apply(d[0],r):(d.children().detach(),d.append($$1(r))),$$1(t.nTableWrapper).toggleClass("dt-empty-footer",$$1("tr",t.nTFoot).length===0),_fnCallbackFire(t,"aoDrawCallback","draw",[t],!0),t.bSorted=!1,t.bFiltered=!1,t.bDrawing=!1}function _fnReDraw(t,n,e){var r=t.oFeatures,a=r.bSort,s=r.bFilter;(e===void 0||e===!0)&&(_fnColumnTypes(t),a&&_fnSort(t),s?_fnFilterComplete(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice()),n!==!0&&(t._iDisplayStart=0),t._drawHold=n,_fnDraw(t),t.api.one("draw",function(){t._drawHold=!1})}function _emptyRow(t){var n=t.oLanguage,e=n.sZeroRecords,r=_fnDataSource(t);return(r==="ssp"||r==="ajax")&&!t.json?e=n.sLoadingRecords:n.sEmptyTable&&t.fnRecordsTotal()===0&&(e=n.sEmptyTable),$$1("<tr/>").append($$1("<td />",{colSpan:_fnVisibleColumns(t),class:t.oClasses.empty.row}).html(e))[0]}function _layoutItems(t,n,e){if(Array.isArray(e)){for(var r=0;r<e.length;r++)_layoutItems(t,n,e[r]);return}var a=t[n];$$1.isPlainObject(e)?e.features?(e.rowId&&(t.id=e.rowId),e.rowClass&&(t.className=e.rowClass),a.id=e.id,a.className=e.className,_layoutItems(t,n,e.features)):Object.keys(e).map(function(s){a.contents.push({feature:s,opts:e[s]})}):a.contents.push(e)}function _layoutGetRow(t,n,e){for(var r,a=0;a<t.length;a++)if(r=t[a],r.rowNum===n&&(e==="full"&&r.full||(e==="start"||e==="end")&&(r.start||r.end)))return r[e]||(r[e]={contents:[]}),r;return r={rowNum:n},r[e]={contents:[]},t.push(r),r}function _layoutArray(t,n,e){var r=[];$$1.each(n,function(s,o){if(o!==null){var l=s.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/),u=l[2]?l[2]*1:0,f=l[3]?l[3].toLowerCase():"full";if(l[1]===e){var d=_layoutGetRow(r,u,f);_layoutItems(d,f,o)}}}),r.sort(function(s,o){var l=s.rowNum,u=o.rowNum;if(l===u){var f=s.full&&!o.full?-1:1;return e==="bottom"?f*-1:f}return u-l}),e==="bottom"&&r.reverse();for(var a=0;a<r.length;a++)delete r[a].rowNum,_layoutResolve(t,r[a]);return r}function _layoutResolve(t,n){var e=function(a,s){return _ext.features[a]||_fnLog(t,0,"Unknown feature: "+a),_ext.features[a].apply(this,[t,s])},r=function(a){if(n[a])for(var s=n[a].contents,o=0,l=s.length;o<l;o++)if(s[o]){if(typeof s[o]=="string")s[o]=e(s[o],null);else if($$1.isPlainObject(s[o]))s[o]=e(s[o].feature,s[o].opts);else if(typeof s[o].node=="function")s[o]=s[o].node(t);else if(typeof s[o]=="function"){var u=s[o](t);s[o]=typeof u.node=="function"?u.node():u}}else continue};r("start"),r("end"),r("full")}function _fnAddOptionsHtml(t){var n=t.oClasses,e=$$1(t.nTable),r=$$1("<div/>").attr({id:t.sTableId+"_wrapper",class:n.container}).insertBefore(e);if(t.nTableWrapper=r[0],t.sDom)_fnLayoutDom(t,t.sDom,r);else{var a=_layoutArray(t,t.layout,"top"),s=_layoutArray(t,t.layout,"bottom"),o=_fnRenderer(t,"layout");a.forEach(function(l){o(t,r,l)}),o(t,r,{full:{table:!0,contents:[_fnFeatureHtmlTable(t)]}}),s.forEach(function(l){o(t,r,l)})}_processingHtml(t)}function _fnLayoutDom(t,n,e){for(var r=n.match(/(".*?")|('.*?')|./g),a,s,o,l,u,f=0;f<r.length;f++){if(a=null,s=r[f],s=="<"){if(o=$$1("<div/>"),l=r[f+1],l[0]=="'"||l[0]=='"'){u=l.replace(/['"]/g,"");var d="",p;if(u.indexOf(".")!=-1){var v=u.split(".");d=v[0],p=v[1]}else u[0]=="#"?d=u:p=u;o.attr("id",d.substring(1)).addClass(p),f++}e.append(o),e=o}else s==">"?e=e.parent():s=="t"?a=_fnFeatureHtmlTable(t):DataTable.ext.feature.forEach(function(y){s==y.cFeature&&(a=y.fnInit(t))});a&&e.append(a)}}function _fnDetectHeader(t,n,e){var r=t.aoColumns,a=$$1(n).children("tr"),s,o,l,u,f,d,p,v,y,x,S=t.titleRow,D=n&&n.nodeName.toLowerCase()==="thead",A=[],I,W=function(ge,ve,_e){for(var ue=ge[ve];ue[_e];)_e++;return _e};for(l=0,d=a.length;l<d;l++)A.push([]);for(l=0,d=a.length;l<d;l++)for(s=a[l],v=0,o=s.firstChild;o;){if(o.nodeName.toUpperCase()=="TD"||o.nodeName.toUpperCase()=="TH"){var N=[],U=$$1(o);if(y=o.getAttribute("colspan")*1,x=o.getAttribute("rowspan")*1,y=!y||y===0||y===1?1:y,x=!x||x===0||x===1?1:x,p=W(A,l,v),I=y===1,e){if(I){_fnColumnOptions(t,p,_fnEscapeObject(U.data()));var J=r[p],m=o.getAttribute("width")||null,ne=o.style.width.match(/width:\s*(\d+[pxem%]+)/);ne&&(m=ne[1]),J.sWidthOrig=J.sWidth||m,D?(J.sTitle!==null&&!J.autoTitle&&(S===!0&&l===0||S===!1&&l===a.length-1||S===l||S===null)&&(o.innerHTML=J.sTitle),!J.sTitle&&I&&(J.sTitle=_stripHtml(o.innerHTML),J.autoTitle=!0)):J.footer&&(o.innerHTML=J.footer),J.ariaTitle||(J.ariaTitle=U.attr("aria-label")||J.sTitle),J.className&&U.addClass(J.className)}$$1("span.dt-column-title",o).length===0&&$$1("<span>").addClass("dt-column-title").append(o.childNodes).appendTo(o),t.orderIndicators&&D&&U.filter(":not([data-dt-order=disable])").length!==0&&U.parent(":not([data-dt-order=disable])").length!==0&&$$1("span.dt-column-order",o).length===0&&$$1("<span>").addClass("dt-column-order").appendTo(o);var ie=D?"header":"footer";$$1("span.dt-column-"+ie,o).length===0&&$$1("<div>").addClass("dt-column-"+ie).append(o.childNodes).appendTo(o)}for(f=0;f<y;f++){for(u=0;u<x;u++)A[l+u][p+f]={cell:o,unique:I},A[l+u].row=s;N.push(p+f)}o.setAttribute("data-dt-column",_unique(N).join(","))}o=o.nextSibling}return A}function _fnStart(t){var n=_fnDataSource(t)=="ssp",e=t.iInitDisplayStart;e!==void 0&&e!==-1&&(t._iDisplayStart=n?e:e>=t.fnRecordsDisplay()?0:e,t.iInitDisplayStart=-1)}function _fnBuildAjax(t,n,e){var r,a=t.ajax,s=t.oInstance,o=function(d){var p=t.jqXHR?t.jqXHR.status:null;(d===null||typeof p=="number"&&p==204)&&(d={},_fnAjaxDataSrc(t,d,[]));var v=d.error||d.sError;if(v&&_fnLog(t,0,v),d.d&&typeof d.d=="string")try{d=JSON.parse(d.d)}catch{}t.json=d,_fnCallbackFire(t,null,"xhr",[t,d,t.jqXHR],!0),e(d)};if($$1.isPlainObject(a)&&a.data){r=a.data;var l=typeof r=="function"?r(n,t):r;n=typeof r=="function"&&l?l:$$1.extend(!0,n,l),delete a.data}var u={url:typeof a=="string"?a:"",data:n,success:o,dataType:"json",cache:!1,type:t.sServerMethod,error:function(d,p){var v=_fnCallbackFire(t,null,"xhr",[t,null,t.jqXHR],!0);v.indexOf(!0)===-1&&(p=="parsererror"?_fnLog(t,0,"Invalid JSON response",1):d.readyState===4&&_fnLog(t,0,"Ajax error",7)),_fnProcessingDisplay(t,!1)}};if($$1.isPlainObject(a)&&$$1.extend(u,a),t.oAjaxData=n,_fnCallbackFire(t,null,"preXhr",[t,n,u],!0),u.submitAs==="json"&&typeof n=="object"&&(u.data=JSON.stringify(n)),typeof a=="function")t.jqXHR=a.call(s,n,o,t);else if(a.url===""){var f={};_fnAjaxDataSrc(t,f,[]),o(f)}else t.jqXHR=$$1.ajax(u);r&&(a.data=r)}function _fnAjaxUpdate(t){t.iDraw++,_fnProcessingDisplay(t,!0),_fnBuildAjax(t,_fnAjaxParameters(t),function(n){_fnAjaxUpdateDraw(t,n)})}function _fnAjaxParameters(t){var n=t.aoColumns,e=t.oFeatures,r=t.oPreviousSearch,a=t.aoPreSearchCols,s=function(o,l){return typeof n[o][l]=="function"?"function":n[o][l]};return{draw:t.iDraw,columns:n.map(function(o,l){return{data:s(l,"mData"),name:o.sName,searchable:o.bSearchable,orderable:o.bSortable,search:{value:a[l].search,regex:a[l].regex,fixed:Object.keys(o.searchFixed).map(function(u){return{name:u,term:typeof o.searchFixed[u]!="function"?o.searchFixed[u].toString():"function"}})}}}),order:_fnSortFlatten(t).map(function(o){return{column:o.col,dir:o.dir,name:s(o.col,"sName")}}),start:t._iDisplayStart,length:e.bPaginate?t._iDisplayLength:-1,search:{value:r.search,regex:r.regex,fixed:Object.keys(t.searchFixed).map(function(o){return{name:o,term:typeof t.searchFixed[o]!="function"?t.searchFixed[o].toString():"function"}})}}}function _fnAjaxUpdateDraw(t,n){var e=_fnAjaxDataSrc(t,n),r=_fnAjaxDataSrcParam(t,"draw",n),a=_fnAjaxDataSrcParam(t,"recordsTotal",n),s=_fnAjaxDataSrcParam(t,"recordsFiltered",n);if(r!==void 0){if(r*1<t.iDraw)return;t.iDraw=r*1}e||(e=[]),_fnClearTable(t),t._iRecordsTotal=parseInt(a,10),t._iRecordsDisplay=parseInt(s,10);for(var o=0,l=e.length;o<l;o++)_fnAddData(t,e[o]);t.aiDisplay=t.aiDisplayMaster.slice(),_fnColumnTypes(t),_fnDraw(t,!0),_fnInitComplete(t),_fnProcessingDisplay(t,!1)}function _fnAjaxDataSrc(t,n,e){var r="data";if($$1.isPlainObject(t.ajax)&&t.ajax.dataSrc!==void 0){var a=t.ajax.dataSrc;typeof a=="string"||typeof a=="function"?r=a:a.data!==void 0&&(r=a.data)}if(!e)return r==="data"?n.aaData||n[r]:r!==""?_fnGetObjectDataFn(r)(n):n;_fnSetObjectDataFn(r)(n,e)}function _fnAjaxDataSrcParam(t,n,e){var r=$$1.isPlainObject(t.ajax)?t.ajax.dataSrc:null;if(r&&r[n])return _fnGetObjectDataFn(r[n])(e);var a="";return n==="draw"?a="sEcho":n==="recordsTotal"?a="iTotalRecords":n==="recordsFiltered"&&(a="iTotalDisplayRecords"),e[a]!==void 0?e[a]:e[n]}function _fnFilterComplete(t,n){var e=t.aoPreSearchCols;if(_fnDataSource(t)!="ssp"){_fnFilterData(t),t.aiDisplay=t.aiDisplayMaster.slice(),_fnFilter(t.aiDisplay,t,n.search,n),$$1.each(t.searchFixed,function(s,o){_fnFilter(t.aiDisplay,t,o,{})});for(var r=0;r<e.length;r++){var a=e[r];_fnFilter(t.aiDisplay,t,a.search,a,r),$$1.each(t.aoColumns[r].searchFixed,function(s,o){_fnFilter(t.aiDisplay,t,o,{},r)})}_fnFilterCustom(t)}t.bFiltered=!0,_fnCallbackFire(t,null,"search",[t])}function _fnFilterCustom(t){for(var n=DataTable.ext.search,e=t.aiDisplay,r,a,s=0,o=n.length;s<o;s++){for(var l=[],u=0,f=e.length;u<f;u++)a=e[u],r=t.aoData[a],n[s](t,r._aFilterData,a,r._aData,u)&&l.push(a);e.length=0,_fnArrayApply(e,l)}}function _fnFilter(t,n,e,r,a){if(e!==""){var s=0,o=[],l=typeof e=="function"?e:null,u=e instanceof RegExp?e:l?null:_fnFilterCreateSearch(e,r);for(s=0;s<t.length;s++){var f=n.aoData[t[s]],d=a===void 0?f._sFilterRow:f._aFilterData[a];(l&&l(d,f._aData,t[s],a)||u&&u.test(d))&&o.push(t[s])}for(t.length=o.length,s=0;s<o.length;s++)t[s]=o[s]}}function _fnFilterCreateSearch(t,n){var e=[],r=$$1.extend({},{boundary:!1,caseInsensitive:!0,exact:!1,regex:!1,smart:!0},n);if(typeof t!="string"&&(t=t.toString()),t=_normalize(t),r.exact)return new RegExp("^"+_fnEscapeRegex(t)+"$",r.caseInsensitive?"i":"");if(t=r.regex?t:_fnEscapeRegex(t),r.smart){var a=t.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g)||[""],s=a.map(function(u){var f=!1,d;return u.charAt(0)==="!"&&(f=!0,u=u.substring(1)),u.charAt(0)==='"'?(d=u.match(/^"(.*)"$/),u=d?d[1]:u):u.charAt(0)==="“"&&(d=u.match(/^\u201C(.*)\u201D$/),u=d?d[1]:u),f&&(u.length>1&&e.push("(?!"+u+")"),u=""),u.replace(/"/g,"")}),o=e.length?e.join(""):"",l=r.boundary?"\\b":"";t="^(?=.*?"+l+s.join(")(?=.*?"+l)+")("+o+".)*$"}return new RegExp(t,r.caseInsensitive?"i":"")}var _fnEscapeRegex=DataTable.util.escapeRegex,__filter_div=$$1("<div>")[0],__filter_div_textContent=__filter_div.textContent!==void 0;function _fnFilterData(t){for(var n=t.aoColumns,e=t.aoData,r,a,s,o,l,u,f=!1,d=0;d<e.length;d++)if(e[d]&&(u=e[d],!u._aFilterData)){for(o=[],a=0,s=n.length;a<s;a++)r=n[a],r.bSearchable?(l=_fnGetCellData(t,d,a,"filter"),l===null&&(l=""),typeof l!="string"&&l.toString&&(l=l.toString())):l="",l.indexOf&&l.indexOf("&")!==-1&&(__filter_div.innerHTML=l,l=__filter_div_textContent?__filter_div.textContent:__filter_div.innerText),l.replace&&(l=l.replace(/[\r\n\u2028]/g,"")),o.push(l);u._aFilterData=o,u._sFilterRow=o.join("  "),f=!0}return f}function _fnInitialise(t){var n,e=t.oInit,r=t.deferLoading,a=_fnDataSource(t);if(!t.bInitialised){setTimeout(function(){_fnInitialise(t)},200);return}_fnBuildHead(t,"header"),_fnBuildHead(t,"footer"),_fnLoadState(t,e,function(){_fnDrawHead(t,t.aoHeader),_fnDrawHead(t,t.aoFooter);var s=t.iInitDisplayStart;if(e.aaData)for(n=0;n<e.aaData.length;n++)_fnAddData(t,e.aaData[n]);else(r||a=="dom")&&_fnAddTr(t,$$1(t.nTBody).children("tr"));t.aiDisplay=t.aiDisplayMaster.slice(),_fnAddOptionsHtml(t),_fnSortInit(t),_colGroup(t),_fnProcessingDisplay(t,!0),_fnCallbackFire(t,null,"preInit",[t],!0),_fnReDraw(t),(a!="ssp"||r)&&(a=="ajax"?_fnBuildAjax(t,{},function(o){var l=_fnAjaxDataSrc(t,o);for(n=0;n<l.length;n++)_fnAddData(t,l[n]);t.iInitDisplayStart=s,_fnReDraw(t),_fnProcessingDisplay(t,!1),_fnInitComplete(t)}):(_fnInitComplete(t),_fnProcessingDisplay(t,!1)))})}function _fnInitComplete(t){if(!t._bInitComplete){var n=[t,t.json];t._bInitComplete=!0,_fnAdjustColumnSizing(t),_fnCallbackFire(t,null,"plugin-init",n,!0),_fnCallbackFire(t,"aoInitComplete","init",n,!0)}}function _fnLengthChange(t,n){var e=parseInt(n,10);t._iDisplayLength=e,_fnLengthOverflow(t),_fnCallbackFire(t,null,"length",[t,e])}function _fnPageChange(t,n,e){var r=t._iDisplayStart,a=t._iDisplayLength,s=t.fnRecordsDisplay();if(s===0||a===-1)r=0;else if(typeof n=="number")r=n*a,r>s&&(r=0);else if(n=="first")r=0;else if(n=="previous")r=a>=0?r-a:0,r<0&&(r=0);else if(n=="next")r+a<s&&(r+=a);else if(n=="last")r=Math.floor((s-1)/a)*a;else{if(n==="ellipsis")return;_fnLog(t,0,"Unknown paging action: "+n,5)}var o=t._iDisplayStart!==r;return t._iDisplayStart=r,_fnCallbackFire(t,null,o?"page":"page-nc",[t]),o&&e&&_fnDraw(t),o}function _processingHtml(t){var n=t.nTable,e=t.oScroll.sX!==""||t.oScroll.sY!=="";if(t.oFeatures.bProcessing){var r=$$1("<div/>",{id:t.sTableId+"_processing",class:t.oClasses.processing.container,role:"status"}).html(t.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>");e?r.prependTo($$1("div.dt-scroll",t.nTableWrapper)):r.insertBefore(n),$$1(n).on("processing.dt.DT",function(a,s,o){r.css("display",o?"block":"none")})}}function _fnProcessingDisplay(t,n){t.bDrawing&&n===!1||_fnCallbackFire(t,null,"processing",[t,n])}function _fnProcessingRun(t,n,e){n?(_fnProcessingDisplay(t,!0),setTimeout(function(){e(),_fnProcessingDisplay(t,!1)},0)):e()}function _fnFeatureHtmlTable(t){var n=$$1(t.nTable),e=t.oScroll;if(e.sX===""&&e.sY==="")return t.nTable;var r=e.sX,a=e.sY,s=t.oClasses.scrolling,o=t.captionNode,l=o?o._captionSide:null,u=$$1(n[0].cloneNode(!1)),f=$$1(n[0].cloneNode(!1)),d=n.children("tfoot"),p="<div/>",v=function(I){return I?_fnStringToCss(I):null};d.length||(d=null);var y=$$1(p,{class:s.container}).append($$1(p,{class:s.header.self}).css({overflow:"hidden",position:"relative",border:0,width:r?v(r):"100%"}).append($$1(p,{class:s.header.inner}).css({"box-sizing":"content-box",width:e.sXInner||"100%"}).append(u.removeAttr("id").css("margin-left",0).append(l==="top"?o:null).append(n.children("thead"))))).append($$1(p,{class:s.body}).css({position:"relative",overflow:"auto",width:v(r)}).append(n));d&&y.append($$1(p,{class:s.footer.self}).css({overflow:"hidden",border:0,width:r?v(r):"100%"}).append($$1(p,{class:s.footer.inner}).append(f.removeAttr("id").css("margin-left",0).append(l==="bottom"?o:null).append(n.children("tfoot")))));var x=y.children(),S=x[0],D=x[1],A=d?x[2]:null;return $$1(D).on("scroll.DT",function(){var I=this.scrollLeft;S.scrollLeft=I,d&&(A.scrollLeft=I)}),$$1("th, td",S).on("focus",function(){var I=S.scrollLeft;D.scrollLeft=I,d&&(D.scrollLeft=I)}),$$1(D).css("max-height",a),e.bCollapse||$$1(D).css("height",a),t.nScrollHead=S,t.nScrollBody=D,t.nScrollFoot=A,t.aoDrawCallback.push(_fnScrollDraw),y[0]}function _fnScrollDraw(t){var n=t.oScroll,e=n.iBarWidth,r=$$1(t.nScrollHead),a=r.children("div"),s=a.children("table"),o=t.nScrollBody,l=$$1(o),u=$$1(t.nScrollFoot),f=u.children("div"),d=f.children("table"),p=$$1(t.nTHead),v=$$1(t.nTable),y=t.nTFoot&&$$1("th, td",t.nTFoot).length?$$1(t.nTFoot):null,x=t.oBrowser,S,D,A=o.scrollHeight>o.clientHeight;if(t.scrollBarVis!==A&&t.scrollBarVis!==void 0){t.scrollBarVis=A,_fnAdjustColumnSizing(t);return}else t.scrollBarVis=A;if(v.children("thead, tfoot").remove(),S=p.clone().prependTo(v),S.find("th, td").removeAttr("tabindex"),S.find("[id]").removeAttr("id"),y&&(D=y.clone().prependTo(v),D.find("[id]").removeAttr("id")),t.aiDisplay.length){var I=null,W=_fnDataSource(t)!=="ssp"?t._iDisplayStart:0;for(m=W;m<W+t.aiDisplay.length;m++){var N=t.aiDisplay[m],U=t.aoData[N].nTr;if(U){I=U;break}}if(I)for(var J=$$1(I).children("th, td").map(function(ue){return{idx:_fnVisibleToColumnIndex(t,ue),width:$$1(this).outerWidth()}}),m=0;m<J.length;m++){var ne=t.aoColumns[J[m].idx].colEl[0],ie=ne.style.width.replace("px","");ie!==J[m].width&&(ne.style.width=J[m].width+"px",n.sX&&(ne.style.minWidth=J[m].width+"px"))}}s.find("colgroup").remove(),s.append(t.colgroup.clone()),y&&(d.find("colgroup").remove(),d.append(t.colgroup.clone())),$$1("th, td",S).each(function(){$$1(this.childNodes).wrapAll('<div class="dt-scroll-sizing">')}),y&&$$1("th, td",D).each(function(){$$1(this.childNodes).wrapAll('<div class="dt-scroll-sizing">')});var ge=Math.floor(v.height())>o.clientHeight||l.css("overflow-y")=="scroll",ve="padding"+(x.bScrollbarLeft?"Left":"Right"),_e=v.outerWidth();s.css("width",_fnStringToCss(_e)),a.css("width",_fnStringToCss(_e)).css(ve,ge?e+"px":"0px"),y&&(d.css("width",_fnStringToCss(_e)),f.css("width",_fnStringToCss(_e)).css(ve,ge?e+"px":"0px")),v.children("colgroup").prependTo(v),l.trigger("scroll"),(t.bSorted||t.bFiltered)&&!t._drawHold&&(o.scrollTop=0)}function _fnCalculateColumnWidths(t){if(t.oFeatures.bAutoWidth){var n=t.nTable,e=t.aoColumns,r=t.oScroll,a=r.sY,s=r.sX,o=r.sXInner,l=_fnGetColumns(t,"bVisible"),u=n.getAttribute("width"),f=n.parentNode,d,p,v,y,x=n.style.width,S=_fnWrapperWidth(t);if(S===t.containerWidth)return!1;t.containerWidth=S,!x&&!u&&(n.style.width="100%",x="100%"),x&&x.indexOf("%")!==-1&&(u=x),_fnCallbackFire(t,null,"column-calc",{visible:l},!1);var D=$$1(n.cloneNode()).css("visibility","hidden").css("margin",0).removeAttr("id");D.append("<tbody/>"),D.append($$1(t.nTHead).clone()).append($$1(t.nTFoot).clone()),D.find("tfoot th, tfoot td").css("width",""),D.find("thead th, thead td").each(function(){var pe=_fnColumnsSumWidth(t,this,!0);pe?(this.style.width=pe,s&&(this.style.minWidth=pe,$$1(this).append($$1("<div/>").css({width:pe,margin:0,padding:0,border:0,height:1})))):this.style.width=""});var A=[];for(d=0;d<l.length;d++)A.push(_fnGetWideStrings(t,l[d]));if(A.length)for(d=0;d<A[0].length;d++){var I=$$1("<tr/>").appendTo(D.find("tbody"));for(p=0;p<l.length;p++){y=l[p],v=e[y];var W=A[p][d]||"",N=_ext.type.className[v.sType],U=v.sContentPadding||(s?"-":""),J=W+U,m=W.indexOf("<")===-1?document.createTextNode(J):J;$$1("<td/>").addClass(N).addClass(v.sClass).append(m).appendTo(I)}}$$1("[name]",D).removeAttr("name");var ne=$$1("<div/>").css(s||a?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(D).appendTo(f);s&&o?D.width(o):s?(D.css("width","auto"),D.removeAttr("width"),D.outerWidth()<f.clientWidth&&u&&D.outerWidth(f.clientWidth)):a?D.outerWidth(f.clientWidth):u&&D.outerWidth(u);var ie=0,ge=D.find("tbody tr").eq(0).children();for(d=0;d<l.length;d++){var ve=ge[d].getBoundingClientRect().width;ie+=ve,e[l[d]].sWidth=_fnStringToCss(ve)}if(n.style.width=_fnStringToCss(ie),ne.remove(),u&&(n.style.width=_fnStringToCss(u)),(u||s)&&!t._reszEvt){var _e=DataTable.util.throttle(function(){var pe=_fnWrapperWidth(t);!t.bDestroying&&pe!==0&&_fnAdjustColumnSizing(t)});if(window.ResizeObserver){var ue=$$1(t.nTableWrapper).is(":visible"),He=$$1("<div>").css({width:"100%",height:0}).addClass("dt-autosize").appendTo(t.nTableWrapper);t.resizeObserver=new ResizeObserver(function(pe){ue?ue=!1:_e()}),t.resizeObserver.observe(He[0])}else $$1(window).on("resize.DT-"+t.sInstance,_e);t._reszEvt=!0}}}function _fnWrapperWidth(t){return $$1(t.nTableWrapper).is(":visible")?$$1(t.nTableWrapper).width():0}function _fnGetWideStrings(t,n){var e=t.aoColumns[n];if(!e.wideStrings){for(var r=[],a=[],s=0,o=t.aiDisplayMaster.length;s<o;s++){var l=t.aiDisplayMaster[s],u=_fnGetRowDisplay(t,l)[n],f=u&&typeof u=="object"&&u.nodeType?u.innerHTML:u+"";f=f.replace(/id=".*?"/g,"").replace(/name=".*?"/g,"");var d=_stripHtml(f).replace(/&nbsp;/g," ");a.push({str:d,len:d.length}),r.push(d)}a.sort(function(v,y){return y.len-v.len}).splice(3),e.wideStrings=a.map(function(v){return v.str});let p=r.join(" ").split(" ");p.sort(function(v,y){return y.length-v.length}),p.length&&e.wideStrings.push(p[0]),p.length>1&&e.wideStrings.push(p[1]),p.length>2&&e.wideStrings.push(p[3])}return e.wideStrings}function _fnStringToCss(t){return t===null?"0px":typeof t=="number"?t<0?"0px":t+"px":t.match(/\d$/)?t+"px":t}function _colGroup(t){var n=t.aoColumns;for(t.colgroup.empty(),i=0;i<n.length;i++)n[i].bVisible&&t.colgroup.append(n[i].colEl)}function _fnSortInit(t){var n=t.nTHead,e=n.querySelectorAll("tr"),r=t.titleRow,a=':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';r===!0?n=e[0]:r===!1?n=e[e.length-1]:r!==null&&(n=e[r]),t.orderHandler&&_fnSortAttachListener(t,n,n===t.nTHead?"tr"+a+" th"+a+", tr"+a+" td"+a:"th"+a+", td"+a);var s=[];_fnSortResolve(t,s,t.aaSorting),t.aaSorting=s}function _fnSortAttachListener(t,n,e,r,a){_fnBindAction(n,e,function(s){var o=!1,l=r===void 0?_fnColumnsFromHeader(s.target):typeof r=="function"?r():Array.isArray(r)?r:[r];if(l.length){for(var u=0,f=l.length;u<f;u++){var d=_fnSortAdd(t,l[u],u,s.shiftKey);if(d!==!1&&(o=!0),t.aaSorting.length===1&&t.aaSorting[0][1]==="")break}o&&_fnProcessingRun(t,!0,function(){_fnSort(t),_fnSortDisplay(t,t.aiDisplay),_fnReDraw(t,!1,!1),a&&a()})}})}function _fnSortDisplay(t,n){if(!(n.length<2)){var e=t.aiDisplayMaster,r={},a={},s;for(s=0;s<e.length;s++)r[e[s]]=s;for(s=0;s<n.length;s++)a[n[s]]=r[n[s]];n.sort(function(o,l){return a[o]-a[l]})}}function _fnSortResolve(t,n,e){var r=function(s){if($$1.isPlainObject(s)){if(s.idx!==void 0)n.push([s.idx,s.dir]);else if(s.name){var o=_pluck(t.aoColumns,"sName"),l=o.indexOf(s.name);l!==-1&&n.push([l,s.dir])}}else n.push(s)};if($$1.isPlainObject(e))r(e);else if(e.length&&typeof e[0]=="number")r(e);else if(e.length)for(var a=0;a<e.length;a++)r(e[a])}function _fnSortFlatten(t){var n,e,r,a=[],s=DataTable.ext.type.order,o=t.aoColumns,l,u,f,d,p=t.aaSortingFixed,v=$$1.isPlainObject(p),y=[];if(!t.oFeatures.bSort)return a;for(Array.isArray(p)&&_fnSortResolve(t,y,p),v&&p.pre&&_fnSortResolve(t,y,p.pre),_fnSortResolve(t,y,t.aaSorting),v&&p.post&&_fnSortResolve(t,y,p.post),n=0;n<y.length;n++)if(d=y[n][0],o[d])for(l=o[d].aDataSort,e=0,r=l.length;e<r;e++)u=l[e],f=o[u].sType||"string",y[n]._idx===void 0&&(y[n]._idx=o[u].asSorting.indexOf(y[n][1])),y[n][1]&&a.push({src:d,col:u,dir:y[n][1],index:y[n]._idx,type:f,formatter:s[f+"-pre"],sorter:s[f+"-"+y[n][1]]});return a}function _fnSort(t,n,e){var r,a,s=[],o=DataTable.ext.type.order,l=t.aoData,u,f=t.aiDisplayMaster,d;if(_fnColumnTypes(t),n!==void 0){var p=t.aoColumns[n];d=[{src:n,col:n,dir:e,index:0,type:p.sType,formatter:o[p.sType+"-pre"],sorter:o[p.sType+"-"+e]}],f=f.slice()}else d=_fnSortFlatten(t);for(r=0,a=d.length;r<a;r++)u=d[r],_fnSortData(t,u.col);if(_fnDataSource(t)!="ssp"&&d.length!==0){for(r=0,a=f.length;r<a;r++)s[r]=r;d.length&&d[0].dir==="desc"&&t.orderDescReverse&&s.reverse(),f.sort(function(v,y){var x,S,D,A,I,W=d.length,N=l[v]._aSortData,U=l[y]._aSortData;for(D=0;D<W;D++)if(I=d[D],x=N[I.col],S=U[I.col],I.sorter){if(A=I.sorter(x,S),A!==0)return A}else if(A=x<S?-1:x>S?1:0,A!==0)return I.dir==="asc"?A:-A;return x=s[v],S=s[y],x<S?-1:x>S?1:0})}else d.length===0&&f.sort(function(v,y){return v<y?-1:v>y?1:0});return n===void 0&&(t.bSorted=!0,t.sortDetails=d,_fnCallbackFire(t,null,"order",[t,d])),f}function _fnSortAdd(t,n,e,r){var a=t.aoColumns[n],s=t.aaSorting,o=a.asSorting,l,u=function(d,p){var v=d._idx;return v===void 0&&(v=o.indexOf(d[1])),v+1<o.length?v+1:p?null:0};if(!a.bSortable)return!1;if(typeof s[0]=="number"&&(s=t.aaSorting=[s]),(r||e)&&t.oFeatures.bSortMulti){var f=_pluck(s,"0").indexOf(n);f!==-1?(l=u(s[f],!0),l===null&&s.length===1&&(l=0),l===null||o[l]===""?s.splice(f,1):(s[f][1]=o[l],s[f]._idx=l)):r?(s.push([n,o[0],0]),s[s.length-1]._idx=0):(s.push([n,s[0][1],0]),s[s.length-1]._idx=0)}else s.length&&s[0][0]==n?(l=u(s[0]),s.length=1,s[0][1]=o[l],s[0]._idx=l):(s.length=0,s.push([n,o[0]]),s[0]._idx=0)}function _fnSortingClasses(t){var n=t.aLastSort,e=t.oClasses.order.position,r=_fnSortFlatten(t),a=t.oFeatures,s,o,l;if(a.bSort&&a.bSortClasses){for(s=0,o=n.length;s<o;s++)l=n[s].src,$$1(_pluck(t.aoData,"anCells",l)).removeClass(e+(s<2?s+1:3));for(s=0,o=r.length;s<o;s++)l=r[s].src,$$1(_pluck(t.aoData,"anCells",l)).addClass(e+(s<2?s+1:3))}t.aLastSort=r}function _fnSortData(t,n){var e=t.aoColumns[n],r=DataTable.ext.order[e.sSortDataType],a;r&&(a=r.call(t.oInstance,t,n,_fnColumnIndexToVisible(t,n)));for(var s,o,l=DataTable.ext.type.order[e.sType+"-pre"],u=t.aoData,f=0;f<u.length;f++)u[f]&&(s=u[f],s._aSortData||(s._aSortData=[]),(!s._aSortData[n]||r)&&(o=r?a[f]:_fnGetCellData(t,f,n,"sort"),s._aSortData[n]=l?l(o,t):o))}function _fnSaveState(t){if(!t._bLoadingState){var n=[];_fnSortResolve(t,n,t.aaSorting);var e=t.aoColumns,r={time:+new Date,start:t._iDisplayStart,length:t._iDisplayLength,order:n.map(function(a){return e[a[0]]&&e[a[0]].sName?[e[a[0]].sName,a[1]]:a.slice()}),search:$$1.extend({},t.oPreviousSearch),columns:t.aoColumns.map(function(a,s){return{name:a.sName,visible:a.bVisible,search:$$1.extend({},t.aoPreSearchCols[s])}})};t.oSavedState=r,_fnCallbackFire(t,"aoStateSaveParams","stateSaveParams",[t,r]),t.oFeatures.bStateSave&&!t.bDestroying&&t.fnStateSaveCallback.call(t.oInstance,t,r)}}function _fnLoadState(t,n,e){if(!t.oFeatures.bStateSave){e();return}var r=function(s){_fnImplementState(t,s,e)},a=t.fnStateLoadCallback.call(t.oInstance,t,r);return a!==void 0&&_fnImplementState(t,a,e),!0}function _fnImplementState(t,n,e){var r,a,s=t.aoColumns,o=_pluck(t.aoColumns,"sName");t._bLoadingState=!0;var l=t._bInitComplete?new DataTable.Api(t):null;if(!n||!n.time){t._bLoadingState=!1,e();return}var u=t.iStateDuration;if(u>0&&n.time<+new Date-u*1e3){t._bLoadingState=!1,e();return}var f=_fnCallbackFire(t,"aoStateLoadParams","stateLoadParams",[t,n]);if(f.indexOf(!1)!==-1){t._bLoadingState=!1,e();return}if(t.oLoadedState=$$1.extend(!0,{},n),_fnCallbackFire(t,null,"stateLoadInit",[t,n],!0),n.length!==void 0&&(l?l.page.len(n.length):t._iDisplayLength=n.length),n.start!==void 0&&(l===null?(t._iDisplayStart=n.start,t.iInitDisplayStart=n.start):_fnPageChange(t,n.start/t._iDisplayLength)),n.order!==void 0&&(t.aaSorting=[],$$1.each(n.order,function(x,S){var D=[S[0],S[1]];if(typeof S[0]=="string"){var A=o.indexOf(S[0]);if(A<0)return;D[0]=A}else if(D[0]>=s.length)return;t.aaSorting.push(D)})),n.search!==void 0&&$$1.extend(t.oPreviousSearch,n.search),n.columns){var d=n.columns,p=_pluck(n.columns,"name");if(p.join("").length&&p.join("")!==o.join(""))for(d=[],r=0;r<o.length;r++)if(o[r]!=""){var v=p.indexOf(o[r]);v>=0?d.push(n.columns[v]):d.push({})}else d.push({});if(d.length===s.length){for(r=0,a=d.length;r<a;r++){var y=d[r];y.visible!==void 0&&(l?l.column(r).visible(y.visible,!1):s[r].bVisible=y.visible),y.search!==void 0&&$$1.extend(t.aoPreSearchCols[r],y.search)}l&&l.one("draw",function(){l.columns.adjust()})}}t._bLoadingState=!1,_fnCallbackFire(t,"aoStateLoaded","stateLoaded",[t,n]),e()}function _fnLog(t,n,e,r){e="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+e,r&&(e+=". For more information about this error, please see https://datatables.net/tn/"+r);{var a=DataTable.ext,s=a.sErrMode||a.errMode;if(t&&_fnCallbackFire(t,null,"dt-error",[t,r,e],!0),s=="alert")alert(e);else{if(s=="throw")throw new Error(e);typeof s=="function"&&s(t,r,e)}}}function _fnMap(t,n,e,r){if(Array.isArray(e)){$$1.each(e,function(a,s){Array.isArray(s)?_fnMap(t,n,s[0],s[1]):_fnMap(t,n,s)});return}r===void 0&&(r=e),n[e]!==void 0&&(t[r]=n[e])}function _fnExtend(t,n,e){var r;for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r=n[a],$$1.isPlainObject(r)?($$1.isPlainObject(t[a])||(t[a]={}),$$1.extend(!0,t[a],r)):e&&a!=="data"&&a!=="aaData"&&Array.isArray(r)?t[a]=r.slice():t[a]=r);return t}function _fnBindAction(t,n,e){$$1(t).on("click.DT",n,function(r){e(r)}).on("keypress.DT",n,function(r){r.which===13&&(r.preventDefault(),e(r))}).on("selectstart.DT",n,function(){return!1})}function _fnCallbackReg(t,n,e){e&&t[n].push(e)}function _fnCallbackFire(t,n,e,r,a){var s=[];if(n&&(s=t[n].slice().reverse().map(function(u){return u.apply(t.oInstance,r)})),e!==null){var o=$$1.Event(e+".dt"),l=$$1(t.nTable);o.dt=t.api,l[a?"trigger":"triggerHandler"](o,r),a&&l.parents("body").length===0&&$$1("body").trigger(o,r),s.push(o.result)}return s}function _fnLengthOverflow(t){var n=t._iDisplayStart,e=t.fnDisplayEnd(),r=t._iDisplayLength;n>=e&&(n=e-r),n-=n%r,(r===-1||n<0)&&(n=0),t._iDisplayStart=n}function _fnRenderer(t,n){var e=t.renderer,r=DataTable.ext.renderer[n];return $$1.isPlainObject(e)&&e[n]?r[e[n]]||r._:typeof e=="string"&&r[e]||r._}function _fnDataSource(t){return t.oFeatures.bServerSide?"ssp":t.ajax?"ajax":"dom"}function _fnMacros(t,n,e){var r=t.fnFormatNumber,a=t._iDisplayStart+1,s=t._iDisplayLength,o=t.fnRecordsDisplay(),l=t.fnRecordsTotal(),u=s===-1;return n.replace(/_START_/g,r.call(t,a)).replace(/_END_/g,r.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,r.call(t,l)).replace(/_TOTAL_/g,r.call(t,o)).replace(/_PAGE_/g,r.call(t,u?1:Math.ceil(a/s))).replace(/_PAGES_/g,r.call(t,u?1:Math.ceil(o/s))).replace(/_ENTRIES_/g,t.api.i18n("entries","",e)).replace(/_ENTRIES-MAX_/g,t.api.i18n("entries","",l)).replace(/_ENTRIES-TOTAL_/g,t.api.i18n("entries","",o))}function _fnArrayApply(t,n){if(n)if(n.length<1e4)t.push.apply(t,n);else for(i=0;i<n.length;i++)t.push(n[i])}function _fnListener(t,n,e){for(Array.isArray(e)||(e=[e]),i=0;i<e.length;i++)t.on(n+".dt",e[i])}function _fnEscapeObject(t){return DataTable.ext.escape.attributes&&$$1.each(t,function(n,e){t[n]=_escapeHtml(e)}),t}var __apiStruct=[],__arrayProto=Array.prototype,_toSettings=function(t){var n,e,r=DataTable.settings,a=_pluck(r,"nTable");if(t){if(t.nTable&&t.oFeatures)return[t];if(t.nodeName&&t.nodeName.toLowerCase()==="table")return n=a.indexOf(t),n!==-1?[r[n]]:null;if(t&&typeof t.settings=="function")return t.settings().toArray();typeof t=="string"?e=$$1(t).get():t instanceof $$1&&(e=t.get())}else return[];if(e)return r.filter(function(s,o){return e.includes(a[o])})};_Api=function(t,n){if(!(this instanceof _Api))return new _Api(t,n);var e,r=[],a=function(s){var o=_toSettings(s);o&&r.push.apply(r,o)};if(Array.isArray(t))for(e=0;e<t.length;e++)a(t[e]);else a(t);this.context=r.length>1?_unique(r):r,_fnArrayApply(this,n),this.selector={rows:null,cols:null,opts:null},_Api.extend(this,this,__apiStruct)};DataTable.Api=_Api;$$1.extend(_Api.prototype,{any:function(){return this.count()!==0},context:[],count:function(){return this.flatten().length},each:function(t){for(var n=0,e=this.length;n<e;n++)t.call(this,this[n],n,this);return this},eq:function(t){var n=this.context;return n.length>t?new _Api(n[t],this[t]):null},filter:function(t){var n=__arrayProto.filter.call(this,t,this);return new _Api(this.context,n)},flatten:function(){var t=[];return new _Api(this.context,t.concat.apply(t,this.toArray()))},get:function(t){return this[t]},join:__arrayProto.join,includes:function(t){return this.indexOf(t)!==-1},indexOf:__arrayProto.indexOf,iterator:function(t,n,e,r){var a=[],s,o,l,u,f,d=this.context,p,v,y,x=this.selector;for(typeof t=="string"&&(r=e,e=n,n=t,t=!1),o=0,l=d.length;o<l;o++){var S=new _Api(d[o]);if(n==="table")s=e.call(S,d[o],o),s!==void 0&&a.push(s);else if(n==="columns"||n==="rows")s=e.call(S,d[o],this[o],o),s!==void 0&&a.push(s);else if(n==="every"||n==="column"||n==="column-rows"||n==="row"||n==="cell")for(v=this[o],n==="column-rows"&&(p=_selector_row_indexes(d[o],x.opts)),u=0,f=v.length;u<f;u++)y=v[u],n==="cell"?s=e.call(S,d[o],y.row,y.column,o,u):s=e.call(S,d[o],y,o,u,p),s!==void 0&&a.push(s)}if(a.length||r){var D=new _Api(d,t?a.concat.apply([],a):a),A=D.selector;return A.rows=x.rows,A.cols=x.cols,A.opts=x.opts,D}return this},lastIndexOf:__arrayProto.lastIndexOf,length:0,map:function(t){var n=__arrayProto.map.call(this,t,this);return new _Api(this.context,n)},pluck:function(t){var n=DataTable.util.get(t);return this.map(function(e){return n(e)})},pop:__arrayProto.pop,push:__arrayProto.push,reduce:__arrayProto.reduce,reduceRight:__arrayProto.reduceRight,reverse:__arrayProto.reverse,selector:null,shift:__arrayProto.shift,slice:function(){return new _Api(this.context,this)},sort:__arrayProto.sort,splice:__arrayProto.splice,toArray:function(){return __arrayProto.slice.call(this)},to$:function(){return $$1(this)},toJQuery:function(){return $$1(this)},unique:function(){return new _Api(this.context,_unique(this.toArray()))},unshift:__arrayProto.unshift});function _api_scope(t,n,e){return function(){var r=n.apply(t||this,arguments);return _Api.extend(r,r,e.methodExt),r}}function _api_find(t,n){for(var e=0,r=t.length;e<r;e++)if(t[e].name===n)return t[e];return null}window.__apiStruct=__apiStruct;_Api.extend=function(t,n,e){if(!(!e.length||!n||!(n instanceof _Api)&&!n.__dt_wrapper)){var r,a,s;for(r=0,a=e.length;r<a;r++)s=e[r],s.name!=="__proto__"&&(n[s.name]=s.type==="function"?_api_scope(t,s.val,s):s.type==="object"?{}:s.val,n[s.name].__dt_wrapper=!0,_Api.extend(t,n[s.name],s.propExt))}};_Api.register=_api_register=function(t,n){if(Array.isArray(t)){for(var e=0,r=t.length;e<r;e++)_Api.register(t[e],n);return}var a,s,o=t.split("."),l=__apiStruct,u,f;for(a=0,s=o.length;a<s;a++){f=o[a].indexOf("()")!==-1,u=f?o[a].replace("()",""):o[a];var d=_api_find(l,u);d||(d={name:u,val:{},methodExt:[],propExt:[],type:"object"},l.push(d)),a===s-1?(d.val=n,d.type=typeof n=="function"?"function":$$1.isPlainObject(n)?"object":"other"):l=f?d.methodExt:d.propExt}};_Api.registerPlural=_api_registerPlural=function(t,n,e){_Api.register(t,e),_Api.register(n,function(){var r=e.apply(this,arguments);return r===this?this:r instanceof _Api?r.length?Array.isArray(r[0])?new _Api(r.context,r[0]):r[0]:void 0:r})};var __table_selector=function(t,n){if(Array.isArray(t)){var e=[];return t.forEach(function(a){var s=__table_selector(a,n);_fnArrayApply(e,s)}),e.filter(function(a){return a})}if(typeof t=="number")return[n[t]];var r=n.map(function(a){return a.nTable});return $$1(r).filter(t).map(function(){var a=r.indexOf(this);return n[a]}).toArray()};_api_register("tables()",function(t){return t!=null?new _Api(__table_selector(t,this.context)):this});_api_register("table()",function(t){var n=this.tables(t),e=n.context;return e.length?new _Api(e[0]):n});[["nodes","node","nTable"],["body","body","nTBody"],["header","header","nTHead"],["footer","footer","nTFoot"]].forEach(function(t){_api_registerPlural("tables()."+t[0]+"()","table()."+t[1]+"()",function(){return this.iterator("table",function(n){return n[t[2]]},1)})});[["header","aoHeader"],["footer","aoFooter"]].forEach(function(t){_api_register("table()."+t[0]+".structure()",function(n){var e=this.columns(n).indexes().flatten().toArray(),r=this.context[0],a=_fnHeaderLayout(r,r[t[1]],e),s=e.slice().sort(function(o,l){return o-l});return a.map(function(o){return e.map(function(l){return o[s.indexOf(l)]})})})});_api_registerPlural("tables().containers()","table().container()",function(){return this.iterator("table",function(t){return t.nTableWrapper},1)});_api_register("tables().every()",function(t){var n=this;return this.iterator("table",function(e,r){t.call(n.table(r),r)})});_api_register("caption()",function(t,n){var e=this.context;if(t===void 0){var r=e[0].captionNode;return r&&e.length?r.innerHTML:null}return this.iterator("table",function(a){var s=$$1(a.nTable),o=$$1(a.captionNode),l=$$1(a.nTableWrapper);if(o.length||(o=$$1("<caption/>").html(t),a.captionNode=o[0],n||(s.prepend(o),n=o.css("caption-side"))),o.html(t),n&&(o.css("caption-side",n),o[0]._captionSide=n),l.find("div.dataTables_scroll").length){var u=n==="top"?"Head":"Foot";l.find("div.dataTables_scroll"+u+" table").prepend(o)}else s.prepend(o)},1)});_api_register("caption.node()",function(){var t=this.context;return t.length?t[0].captionNode:null});_api_register("draw()",function(t){return this.iterator("table",function(n){t==="page"?_fnDraw(n):(typeof t=="string"&&(t=t!=="full-hold"),_fnReDraw(n,t===!1))})});_api_register("page()",function(t){return t===void 0?this.page.info().page:this.iterator("table",function(n){_fnPageChange(n,t)})});_api_register("page.info()",function(){if(this.context.length!==0){var t=this.context[0],n=t._iDisplayStart,e=t.oFeatures.bPaginate?t._iDisplayLength:-1,r=t.fnRecordsDisplay(),a=e===-1;return{page:a?0:Math.floor(n/e),pages:a?1:Math.ceil(r/e),start:n,end:t.fnDisplayEnd(),length:e,recordsTotal:t.fnRecordsTotal(),recordsDisplay:r,serverSide:_fnDataSource(t)==="ssp"}}});_api_register("page.len()",function(t){return t===void 0?this.context.length!==0?this.context[0]._iDisplayLength:void 0:this.iterator("table",function(n){_fnLengthChange(n,t)})});var __reload=function(t,n,e){if(e){var r=new _Api(t);r.one("draw",function(){e(r.ajax.json())})}if(_fnDataSource(t)=="ssp")_fnReDraw(t,n);else{_fnProcessingDisplay(t,!0);var a=t.jqXHR;a&&a.readyState!==4&&a.abort(),_fnBuildAjax(t,{},function(s){_fnClearTable(t);for(var o=_fnAjaxDataSrc(t,s),l=0,u=o.length;l<u;l++)_fnAddData(t,o[l]);_fnReDraw(t,n),_fnInitComplete(t),_fnProcessingDisplay(t,!1)})}};_api_register("ajax.json()",function(){var t=this.context;if(t.length>0)return t[0].json});_api_register("ajax.params()",function(){var t=this.context;if(t.length>0)return t[0].oAjaxData});_api_register("ajax.reload()",function(t,n){return this.iterator("table",function(e){__reload(e,n===!1,t)})});_api_register("ajax.url()",function(t){var n=this.context;return t===void 0?n.length===0?void 0:(n=n[0],$$1.isPlainObject(n.ajax)?n.ajax.url:n.ajax):this.iterator("table",function(e){$$1.isPlainObject(e.ajax)?e.ajax.url=t:e.ajax=t})});_api_register("ajax.url().load()",function(t,n){return this.iterator("table",function(e){__reload(e,n===!1,t)})});var _selector_run=function(t,n,e,r,a){var s=[],o,l,u,f=typeof n;for((!n||f==="string"||f==="function"||n.length===void 0)&&(n=[n]),l=0,u=n.length;l<u;l++)o=e(typeof n[l]=="string"?n[l].trim():n[l]),o=o.filter(function(p){return p!=null}),o&&o.length&&(s=s.concat(o));var d=_ext.selector[t];if(d.length)for(l=0,u=d.length;l<u;l++)s=d[l](r,a,s);return _unique(s)},_selector_opts=function(t){return t||(t={}),t.filter&&t.search===void 0&&(t.search=t.filter),$$1.extend({columnOrder:"implied",search:"none",order:"current",page:"all"},t)},_selector_first=function(t){var n=new _Api(t.context[0]);return t.length&&n.push(t[0]),n.selector=t.selector,n.length&&n[0].length>1&&n[0].splice(1),n},_selector_row_indexes=function(t,n){var e,r,a,s=[],o=t.aiDisplay,l=t.aiDisplayMaster,u=n.search,f=n.order,d=n.page;if(_fnDataSource(t)=="ssp")return u==="removed"?[]:_range(0,l.length);if(d=="current")for(e=t._iDisplayStart,r=t.fnDisplayEnd();e<r;e++)s.push(o[e]);else if(f=="current"||f=="applied"){if(u=="none")s=l.slice();else if(u=="applied")s=o.slice();else if(u=="removed"){var p={};for(e=0,r=o.length;e<r;e++)p[o[e]]=null;l.forEach(function(y){Object.prototype.hasOwnProperty.call(p,y)||s.push(y)})}}else if(f=="index"||f=="original")for(e=0,r=t.aoData.length;e<r;e++)t.aoData[e]&&(u=="none"?s.push(e):(a=o.indexOf(e),(a===-1&&u=="removed"||a>=0&&u=="applied")&&s.push(e)));else if(typeof f=="number"){var v=_fnSort(t,f,"asc");if(u==="none")s=v;else for(e=0;e<v.length;e++)a=o.indexOf(v[e]),(a===-1&&u=="removed"||a>=0&&u=="applied")&&s.push(v[e])}return s},__row_selector=function(t,n,e){var r,a=function(o){var l=_intVal(o),u=t.aoData;if(l!==null&&!e)return[l];if(r||(r=_selector_row_indexes(t,e)),l!==null&&r.indexOf(l)!==-1)return[l];if(o==null||o==="")return r;if(typeof o=="function")return r.map(function(x){var S=u[x];return o(x,S._aData,S.nTr)?x:null});if(o.nodeName){var f=o._DT_RowIndex,d=o._DT_CellIndex;if(f!==void 0)return u[f]&&u[f].nTr===o?[f]:[];if(d)return u[d.row]&&u[d.row].nTr===o.parentNode?[d.row]:[];var p=$$1(o).closest("*[data-dt-row]");return p.length?[p.data("dt-row")]:[]}if(typeof o=="string"&&o.charAt(0)==="#"){var v=t.aIds[o.replace(/^#/,"")];if(v!==void 0)return[v.idx]}var y=_removeEmpty(_pluck_order(t.aoData,r,"nTr"));return $$1(y).filter(o).map(function(){return this._DT_RowIndex}).toArray()},s=_selector_run("row",n,a,t,e);return(e.order==="current"||e.order==="applied")&&_fnSortDisplay(t,s),s};_api_register("rows()",function(t,n){t===void 0?t="":$$1.isPlainObject(t)&&(n=t,t=""),n=_selector_opts(n);var e=this.iterator("table",function(r){return __row_selector(r,t,n)},1);return e.selector.rows=t,e.selector.opts=n,e});_api_register("rows().nodes()",function(){return this.iterator("row",function(t,n){return t.aoData[n].nTr||void 0},1)});_api_register("rows().data()",function(){return this.iterator(!0,"rows",function(t,n){return _pluck_order(t.aoData,n,"_aData")},1)});_api_registerPlural("rows().cache()","row().cache()",function(t){return this.iterator("row",function(n,e){var r=n.aoData[e];return t==="search"?r._aFilterData:r._aSortData},1)});_api_registerPlural("rows().invalidate()","row().invalidate()",function(t){return this.iterator("row",function(n,e){_fnInvalidate(n,e,t)})});_api_registerPlural("rows().indexes()","row().index()",function(){return this.iterator("row",function(t,n){return n},1)});_api_registerPlural("rows().ids()","row().id()",function(t){for(var n=[],e=this.context,r=0,a=e.length;r<a;r++)for(var s=0,o=this[r].length;s<o;s++){var l=e[r].rowIdFn(e[r].aoData[this[r][s]]._aData);n.push((t===!0?"#":"")+l)}return new _Api(e,n)});_api_registerPlural("rows().remove()","row().remove()",function(){return this.iterator("row",function(t,n){var e=t.aoData,r=e[n],a=t.aiDisplayMaster.indexOf(n);a!==-1&&t.aiDisplayMaster.splice(a,1),t._iRecordsDisplay>0&&t._iRecordsDisplay--,_fnLengthOverflow(t);var s=t.rowIdFn(r._aData);s!==void 0&&delete t.aIds[s],e[n]=null}),this});_api_register("rows.add()",function(t){var n=this.iterator("table",function(r){var a,s,o,l=[];for(s=0,o=t.length;s<o;s++)a=t[s],a.nodeName&&a.nodeName.toUpperCase()==="TR"?l.push(_fnAddTr(r,a)[0]):l.push(_fnAddData(r,a));return l},1),e=this.rows(-1);return e.pop(),_fnArrayApply(e,n),e});_api_register("row()",function(t,n){return _selector_first(this.rows(t,n))});_api_register("row().data()",function(t){var n=this.context;if(t===void 0)return n.length&&this.length&&this[0].length?n[0].aoData[this[0]]._aData:void 0;var e=n[0].aoData[this[0]];return e._aData=t,Array.isArray(t)&&e.nTr&&e.nTr.id&&_fnSetObjectDataFn(n[0].rowId)(t,e.nTr.id),_fnInvalidate(n[0],this[0],"data"),this});_api_register("row().node()",function(){var t=this.context;if(t.length&&this.length&&this[0].length){var n=t[0].aoData[this[0]];if(n&&n.nTr)return n.nTr}return null});_api_register("row.add()",function(t){t instanceof $$1&&t.length&&(t=t[0]);var n=this.iterator("table",function(e){return t.nodeName&&t.nodeName.toUpperCase()==="TR"?_fnAddTr(e,t)[0]:_fnAddData(e,t)});return this.row(n[0])});$$1(document).on("plugin-init.dt",function(t,n){var e=new _Api(n);e.on("stateSaveParams.DT",function(r,a,s){for(var o=a.rowIdFn,l=a.aiDisplayMaster,u=[],f=0;f<l.length;f++){var d=l[f],p=a.aoData[d];p._detailsShow&&u.push("#"+o(p._aData))}s.childRows=u}),e.on("stateLoaded.DT",function(r,a,s){__details_state_load(e,s)}),__details_state_load(e,e.state.loaded())});var __details_state_load=function(t,n){n&&n.childRows&&t.rows(n.childRows.map(function(e){return e.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g,"$1\\:")})).every(function(){_fnCallbackFire(t.settings()[0],null,"requestChild",[this])})},__details_add=function(t,n,e,r){var a=[],s=function(o,l){if(Array.isArray(o)||o instanceof $$1){for(var u=0,f=o.length;u<f;u++)s(o[u],l);return}if(o.nodeName&&o.nodeName.toLowerCase()==="tr")o.setAttribute("data-dt-row",n.idx),a.push(o);else{var d=$$1("<tr><td></td></tr>").attr("data-dt-row",n.idx).addClass(l);$$1("td",d).addClass(l).html(o)[0].colSpan=_fnVisibleColumns(t),a.push(d[0])}};s(e,r),n._details&&n._details.detach(),n._details=$$1(a),n._detailsShow&&n._details.insertAfter(n.nTr)},__details_state=DataTable.util.throttle(function(t){_fnSaveState(t[0])},500),__details_remove=function(t,n){var e=t.context;if(e.length){var r=e[0].aoData[n!==void 0?n:t[0]];r&&r._details&&(r._details.detach(),r._detailsShow=void 0,r._details=void 0,$$1(r.nTr).removeClass("dt-hasChild"),__details_state(e))}},__details_display=function(t,n){var e=t.context;if(e.length&&t.length){var r=e[0].aoData[t[0]];r._details&&(r._detailsShow=n,n?(r._details.insertAfter(r.nTr),$$1(r.nTr).addClass("dt-hasChild")):(r._details.detach(),$$1(r.nTr).removeClass("dt-hasChild")),_fnCallbackFire(e[0],null,"childRow",[n,t.row(t[0])]),__details_events(e[0]),__details_state(e))}},__details_events=function(t){var n=new _Api(t),e=".dt.DT_details",r="draw"+e,a="column-sizing"+e,s="destroy"+e,o=t.aoData;n.off(r+" "+a+" "+s),_pluck(o,"_details").length>0&&(n.on(r,function(l,u){t===u&&n.rows({page:"current"}).eq(0).each(function(f){var d=o[f];d._detailsShow&&d._details.insertAfter(d.nTr)})}),n.on(a,function(l,u){if(t===u)for(var f,d=_fnVisibleColumns(u),p=0,v=o.length;p<v;p++)f=o[p],f&&f._details&&f._details.each(function(){var y=$$1(this).children("td");y.length==1&&y.attr("colspan",d)})}),n.on(s,function(l,u){if(t===u)for(var f=0,d=o.length;f<d;f++)o[f]&&o[f]._details&&__details_remove(n,f)}))},_emp="",_child_obj=_emp+"row().child",_child_mth=_child_obj+"()";_api_register(_child_mth,function(t,n){var e=this.context;return t===void 0?e.length&&this.length&&e[0].aoData[this[0]]?e[0].aoData[this[0]]._details:void 0:(t===!0?this.child.show():t===!1?__details_remove(this):e.length&&this.length&&__details_add(e[0],e[0].aoData[this[0]],t,n),this)});_api_register([_child_obj+".show()",_child_mth+".show()"],function(){return __details_display(this,!0),this});_api_register([_child_obj+".hide()",_child_mth+".hide()"],function(){return __details_display(this,!1),this});_api_register([_child_obj+".remove()",_child_mth+".remove()"],function(){return __details_remove(this),this});_api_register(_child_obj+".isShown()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]]&&t[0].aoData[this[0]]._detailsShow||!1});var __re_column_selector=/^([^:]+)?:(name|title|visIdx|visible)$/,__columnData=function(t,n,e,r,a,s){for(var o=[],l=0,u=a.length;l<u;l++)o.push(_fnGetCellData(t,a[l],n,s));return o},__column_header=function(t,n,e){var r=t.aoHeader,a=t.titleRow,s=null;if(e!==void 0)s=e;else if(a===!0)s=0;else if(a===!1)s=r.length-1;else if(a!==null)s=a;else{for(var o=0;o<r.length;o++)r[o][n].unique&&$$1("span.dt-column-title",r[o][n].cell).text()&&(s=o);s===null&&(s=0)}return r[s][n].cell},__column_header_cells=function(t){for(var n=[],e=0;e<t.length;e++)for(var r=0;r<t[e].length;r++){var a=t[e][r].cell;n.includes(a)||n.push(a)}return n},__column_selector=function(t,n,e){var r=t.aoColumns,a,s,o=__column_header_cells(t.aoHeader),l=function(f){var d=_intVal(f);if(f==="")return _range(r.length);if(d!==null)return[d>=0?d:r.length+d];if(typeof f=="function"){var p=_selector_row_indexes(t,e);return r.map(function(A,I){return f(I,__columnData(t,I,0,0,p),__column_header(t,I))?I:null})}var v=typeof f=="string"?f.match(__re_column_selector):"";if(v)switch(v[2]){case"visIdx":case"visible":if(v[1]&&v[1].match(/^\d+$/)){var y=parseInt(v[1],10);if(y<0){var x=r.map(function(A,I){return A.bVisible?I:null});return[x[x.length+y]]}return[_fnVisibleToColumnIndex(t,y)]}return r.map(function(A,I){return A.bVisible?v[1]?$$1(o[I]).filter(v[1]).length>0?I:null:I:null});case"name":return a||(a=_pluck(r,"sName")),a.map(function(A,I){return A===v[1]?I:null});case"title":return s||(s=_pluck(r,"sTitle")),s.map(function(A,I){return A===v[1]?I:null});default:return[]}if(f.nodeName&&f._DT_CellIndex)return[f._DT_CellIndex.column];var S=$$1(o).filter(f).map(function(){return _fnColumnsFromHeader(this)}).toArray().sort(function(A,I){return A-I});if(S.length||!f.nodeName)return S;var D=$$1(f).closest("*[data-dt-column]");return D.length?[D.data("dt-column")]:[]},u=_selector_run("column",n,l,t,e);return e.columnOrder&&e.columnOrder==="index"?u.sort(function(f,d){return f-d}):u},__setColumnVis=function(t,n,e){var r=t.aoColumns,a=r[n],s=t.aoData,o,l,u,f;if(e===void 0)return a.bVisible;if(a.bVisible===e)return!1;if(e){var d=_pluck(r,"bVisible").indexOf(!0,n+1);for(l=0,u=s.length;l<u;l++)s[l]&&(f=s[l].nTr,o=s[l].anCells,f&&f.insertBefore(o[n],o[d]||null))}else $$1(_pluck(t.aoData,"anCells",n)).detach();return a.bVisible=e,_colGroup(t),!0};_api_register("columns()",function(t,n){t===void 0?t="":$$1.isPlainObject(t)&&(n=t,t=""),n=_selector_opts(n);var e=this.iterator("table",function(r){return __column_selector(r,t,n)},1);return e.selector.cols=t,e.selector.opts=n,e});_api_registerPlural("columns().header()","column().header()",function(t){return this.iterator("column",function(n,e){return __column_header(n,e,t)},1)});_api_registerPlural("columns().footer()","column().footer()",function(t){return this.iterator("column",function(n,e){var r=n.aoFooter;return r.length?n.aoFooter[t!==void 0?t:0][e].cell:null},1)});_api_registerPlural("columns().data()","column().data()",function(){return this.iterator("column-rows",__columnData,1)});_api_registerPlural("columns().render()","column().render()",function(t){return this.iterator("column-rows",function(n,e,r,a,s){return __columnData(n,e,r,a,s,t)},1)});_api_registerPlural("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(t,n){return t.aoColumns[n].mData},1)});_api_registerPlural("columns().cache()","column().cache()",function(t){return this.iterator("column-rows",function(n,e,r,a,s){return _pluck_order(n.aoData,s,t==="search"?"_aFilterData":"_aSortData",e)},1)});_api_registerPlural("columns().init()","column().init()",function(){return this.iterator("column",function(t,n){return t.aoColumns[n]},1)});_api_registerPlural("columns().names()","column().name()",function(){return this.iterator("column",function(t,n){return t.aoColumns[n].sName},1)});_api_registerPlural("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(t,n,e,r,a){return _pluck_order(t.aoData,a,"anCells",n)},1)});_api_registerPlural("columns().titles()","column().title()",function(t,n){return this.iterator("column",function(e,r){typeof t=="number"&&(n=t,t=void 0);var a=$$1("span.dt-column-title",this.column(r).header(n));return t!==void 0?(a.html(t),this):a.html()},1)});_api_registerPlural("columns().types()","column().type()",function(){return this.iterator("column",function(t,n){var e=t.aoColumns[n],r=e.sType;return r||(_fnColumnTypes(t),r=e.sType),r},1)});_api_registerPlural("columns().visible()","column().visible()",function(t,n){var e=this,r=[],a=this.iterator("column",function(s,o){if(t===void 0)return s.aoColumns[o].bVisible;__setColumnVis(s,o,t)&&r.push(o)});return t!==void 0&&this.iterator("table",function(s){_fnDrawHead(s,s.aoHeader),_fnDrawHead(s,s.aoFooter),s.aiDisplay.length||$$1(s.nTBody).find("td[colspan]").attr("colspan",_fnVisibleColumns(s)),_fnSaveState(s),e.iterator("column",function(o,l){r.includes(l)&&_fnCallbackFire(o,null,"column-visibility",[o,l,t,n])}),r.length&&(n===void 0||n)&&e.columns.adjust()}),a});_api_registerPlural("columns().widths()","column().width()",function(){var t=this.columns(":visible").count(),n=$$1("<tr>").html("<td>"+Array(t).join("</td><td>")+"</td>");$$1(this.table().body()).append(n);var e=n.children().map(function(){return $$1(this).outerWidth()});return n.remove(),this.iterator("column",function(r,a){var s=_fnColumnIndexToVisible(r,a);return s!==null?e[s]:0},1)});_api_registerPlural("columns().indexes()","column().index()",function(t){return this.iterator("column",function(n,e){return t==="visible"?_fnColumnIndexToVisible(n,e):e},1)});_api_register("columns.adjust()",function(){return this.iterator("table",function(t){t.containerWidth=-1,_fnAdjustColumnSizing(t)},1)});_api_register("column.index()",function(t,n){if(this.context.length!==0){var e=this.context[0];if(t==="fromVisible"||t==="toData")return _fnVisibleToColumnIndex(e,n);if(t==="fromData"||t==="toVisible")return _fnColumnIndexToVisible(e,n)}});_api_register("column()",function(t,n){return _selector_first(this.columns(t,n))});var __cell_selector=function(t,n,e){var r=t.aoData,a=_selector_row_indexes(t,e),s=_removeEmpty(_pluck_order(r,a,"anCells")),o=$$1(_flatten([],s)),l,u=t.aoColumns.length,f,d,p,v,y,x,S=function(D){var A=typeof D=="function";if(D==null||A){for(f=[],d=0,p=a.length;d<p;d++)for(l=a[d],v=0;v<u;v++)y={row:l,column:v},A?(x=r[l],D(y,_fnGetCellData(t,l,v),x.anCells?x.anCells[v]:null)&&f.push(y)):f.push(y);return f}if($$1.isPlainObject(D))return D.column!==void 0&&D.row!==void 0&&a.indexOf(D.row)!==-1?[D]:[];var I=o.filter(D).map(function(W,N){return{row:N._DT_CellIndex.row,column:N._DT_CellIndex.column}}).toArray();return I.length||!D.nodeName?I:(x=$$1(D).closest("*[data-dt-row]"),x.length?[{row:x.data("dt-row"),column:x.data("dt-column")}]:[])};return _selector_run("cell",n,S,t,e)};_api_register("cells()",function(t,n,e){if($$1.isPlainObject(t)&&(t.row===void 0?(e=t,t=null):(e=n,n=null)),$$1.isPlainObject(n)&&(e=n,n=null),n==null)return this.iterator("table",function(v){return __cell_selector(v,t,_selector_opts(e))});var r=e?{page:e.page,order:e.order,search:e.search}:{},a=this.columns(n,r),s=this.rows(t,r),o,l,u,f,d=this.iterator("table",function(v,y){var x=[];for(o=0,l=s[y].length;o<l;o++)for(u=0,f=a[y].length;u<f;u++)x.push({row:s[y][o],column:a[y][u]});return x},1),p=e&&e.selected?this.cells(d,e):d;return $$1.extend(p.selector,{cols:n,rows:t,opts:e}),p});_api_registerPlural("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(t,n,e){var r=t.aoData[n];return r&&r.anCells?r.anCells[e]:void 0},1)});_api_register("cells().data()",function(){return this.iterator("cell",function(t,n,e){return _fnGetCellData(t,n,e)},1)});_api_registerPlural("cells().cache()","cell().cache()",function(t){return t=t==="search"?"_aFilterData":"_aSortData",this.iterator("cell",function(n,e,r){return n.aoData[e][t][r]},1)});_api_registerPlural("cells().render()","cell().render()",function(t){return this.iterator("cell",function(n,e,r){return _fnGetCellData(n,e,r,t)},1)});_api_registerPlural("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(t,n,e){return{row:n,column:e,columnVisible:_fnColumnIndexToVisible(t,e)}},1)});_api_registerPlural("cells().invalidate()","cell().invalidate()",function(t){return this.iterator("cell",function(n,e,r){_fnInvalidate(n,e,t,r)})});_api_register("cell()",function(t,n,e){return _selector_first(this.cells(t,n,e))});_api_register("cell().data()",function(t){var n=this.context,e=this[0];return t===void 0?n.length&&e.length?_fnGetCellData(n[0],e[0].row,e[0].column):void 0:(_fnSetCellData(n[0],e[0].row,e[0].column,t),_fnInvalidate(n[0],e[0].row,"data",e[0].column),this)});_api_register("order()",function(t,n){var e=this.context,r=Array.prototype.slice.call(arguments);return t===void 0?e.length!==0?e[0].aaSorting:void 0:(typeof t=="number"?t=[[t,n]]:r.length>1&&(t=r),this.iterator("table",function(a){var s=[];_fnSortResolve(a,s,t),a.aaSorting=s}))});_api_register("order.listener()",function(t,n,e){return this.iterator("table",function(r){_fnSortAttachListener(r,t,{},n,e)})});_api_register("order.fixed()",function(t){if(!t){var n=this.context,e=n.length?n[0].aaSortingFixed:void 0;return Array.isArray(e)?{pre:e}:e}return this.iterator("table",function(r){r.aaSortingFixed=$$1.extend(!0,{},t)})});_api_register(["columns().order()","column().order()"],function(t){var n=this;return t?this.iterator("table",function(e,r){e.aaSorting=n[r].map(function(a){return[a,t]})}):this.iterator("column",function(e,r){for(var a=_fnSortFlatten(e),s=0,o=a.length;s<o;s++)if(a[s].col===r)return a[s].dir;return null},1)});_api_registerPlural("columns().orderable()","column().orderable()",function(t){return this.iterator("column",function(n,e){var r=n.aoColumns[e];return t?r.asSorting:r.bSortable},1)});_api_register("processing()",function(t){return this.iterator("table",function(n){_fnProcessingDisplay(n,t)})});_api_register("search()",function(t,n,e,r){var a=this.context;return t===void 0?a.length!==0?a[0].oPreviousSearch.search:void 0:this.iterator("table",function(s){s.oFeatures.bFilter&&(typeof n=="object"?_fnFilterComplete(s,$$1.extend(s.oPreviousSearch,n,{search:t})):_fnFilterComplete(s,$$1.extend(s.oPreviousSearch,{search:t,regex:n===null?!1:n,smart:e===null?!0:e,caseInsensitive:r===null?!0:r})))})});_api_register("search.fixed()",function(t,n){var e=this.iterator(!0,"table",function(r){var a=r.searchFixed;if(t){if(n===void 0)return a[t];n===null?delete a[t]:a[t]=n}else return Object.keys(a);return this});return t!==void 0&&n===void 0?e[0]:e});_api_registerPlural("columns().search()","column().search()",function(t,n,e,r){return this.iterator("column",function(a,s){var o=a.aoPreSearchCols;if(t===void 0)return o[s].search;a.oFeatures.bFilter&&(typeof n=="object"?$$1.extend(o[s],n,{search:t}):$$1.extend(o[s],{search:t,regex:n===null?!1:n,smart:e===null?!0:e,caseInsensitive:r===null?!0:r}),_fnFilterComplete(a,a.oPreviousSearch))})});_api_register(["columns().search.fixed()","column().search.fixed()"],function(t,n){var e=this.iterator(!0,"column",function(r,a){var s=r.aoColumns[a].searchFixed;if(t){if(n===void 0)return s[t]||null;n===null?delete s[t]:s[t]=n}else return Object.keys(s);return this});return t!==void 0&&n===void 0?e[0]:e});_api_register("state()",function(t,n){if(!t)return this.context.length?this.context[0].oSavedState:null;var e=$$1.extend(!0,{},t);return this.iterator("table",function(r){n!==!1&&(e.time=+new Date+100),_fnImplementState(r,e,function(){})})});_api_register("state.clear()",function(){return this.iterator("table",function(t){t.fnStateSaveCallback.call(t.oInstance,t,{})})});_api_register("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});_api_register("state.save()",function(){return this.iterator("table",function(t){_fnSaveState(t)})});var __bootstrap,__foundation;DataTable.use=function(t,n){var e=typeof t=="string"?n:t,r=typeof n=="string"?n:t;if(e===void 0&&typeof r=="string")switch(r){case"lib":case"jq":return $$1;case"win":return window;case"datetime":return DataTable.DateTime;case"luxon":return __luxon;case"moment":return __moment;case"bootstrap":return __bootstrap||window.bootstrap;case"foundation":return __foundation||window.Foundation;default:return null}r==="lib"||r==="jq"||e&&e.fn&&e.fn.jquery?$$1=e:r==="win"||e&&e.document?(window=e,document=e.document):r==="datetime"||e&&e.type==="DateTime"?DataTable.DateTime=e:r==="luxon"||e&&e.FixedOffsetZone?__luxon=e:r==="moment"||e&&e.isMoment?__moment=e:r==="bootstrap"||e&&e.Modal&&e.Modal.NAME==="modal"?__bootstrap=e:(r==="foundation"||e&&e.Reveal)&&(__foundation=e)};DataTable.factory=function(t,n){var e=!1;return t&&t.document&&(window=t,document=t.document),n&&n.fn&&n.fn.jquery&&($$1=n,e=!0),e};DataTable.versionCheck=function(t,n){for(var e=n?n.split("."):DataTable.version.split("."),r=t.split("."),a,s,o=0,l=r.length;o<l;o++)if(a=parseInt(e[o],10)||0,s=parseInt(r[o],10)||0,a!==s)return a>s;return!0};DataTable.isDataTable=function(t){var n=$$1(t).get(0),e=!1;return t instanceof DataTable.Api?!0:($$1.each(DataTable.settings,function(r,a){var s=a.nScrollHead?$$1("table",a.nScrollHead)[0]:null,o=a.nScrollFoot?$$1("table",a.nScrollFoot)[0]:null;(a.nTable===n||s===n||o===n)&&(e=!0)}),e)};DataTable.tables=function(t){var n=!1;$$1.isPlainObject(t)&&(n=t.api,t=t.visible);var e=DataTable.settings.filter(function(r){return!!(!t||t&&$$1(r.nTable).is(":visible"))}).map(function(r){return r.nTable});return n?new _Api(e):e};DataTable.camelToHungarian=_fnCamelToHungarian;_api_register("$()",function(t,n){var e=this.rows(n).nodes(),r=$$1(e);return $$1([].concat(r.filter(t).toArray(),r.find(t).toArray()))});$$1.each(["on","one","off"],function(t,n){_api_register(n+"()",function(){var e=Array.prototype.slice.call(arguments);e[0]=e[0].split(/\s/).map(function(a){return a.match(/\.dt\b/)?a:a+".dt"}).join(" ");var r=$$1(this.tables().nodes());return r[n].apply(r,e),this})});_api_register("clear()",function(){return this.iterator("table",function(t){_fnClearTable(t)})});_api_register("error()",function(t){return this.iterator("table",function(n){_fnLog(n,0,t)})});_api_register("settings()",function(){return new _Api(this.context,this.context)});_api_register("init()",function(){var t=this.context;return t.length?t[0].oInit:null});_api_register("data()",function(){return this.iterator("table",function(t){return _pluck(t.aoData,"_aData")}).flatten()});_api_register("trigger()",function(t,n,e){return this.iterator("table",function(r){return _fnCallbackFire(r,null,t,n,e)}).flatten()});_api_register("ready()",function(t){var n=this.context;return t?this.tables().every(function(){var e=this;this.context[0]._bInitComplete?t.call(e):this.on("init.dt.DT",function(){t.call(e)})}):n.length?n[0]._bInitComplete||!1:null});_api_register("destroy()",function(t){return t=t||!1,this.iterator("table",function(n){var e=n.oClasses,r=n.nTable,a=n.nTBody,s=n.nTHead,o=n.nTFoot,l=$$1(r),u=$$1(a),f=$$1(n.nTableWrapper),d=n.aoData.map(function(D){return D?D.nTr:null}),p=e.order;n.bDestroying=!0,_fnCallbackFire(n,"aoDestroyCallback","destroy",[n],!0),t||new _Api(n).columns().visible(!0),n.resizeObserver&&n.resizeObserver.disconnect(),f.off(".DT").find(":not(tbody *)").off(".DT"),$$1(window).off(".DT-"+n.sInstance),r!=s.parentNode&&(l.children("thead").detach(),l.append(s)),o&&r!=o.parentNode&&(l.children("tfoot").detach(),l.append(o)),cleanHeader(s,"header"),cleanHeader(o,"footer"),n.colgroup.remove(),n.aaSorting=[],n.aaSortingFixed=[],_fnSortingClasses(n),$$1(l).find("th, td").removeClass($$1.map(DataTable.ext.type.className,function(D){return D}).join(" ")),$$1("th, td",s).removeClass(p.none+" "+p.canAsc+" "+p.canDesc+" "+p.isAsc+" "+p.isDesc).css("width","").removeAttr("aria-sort"),u.children().detach(),u.append(d);var v=n.nTableWrapper.parentNode,y=n.nTableWrapper.nextSibling,x=t?"remove":"detach";l[x](),f[x](),!t&&v&&(v.insertBefore(r,y),l.css("width",n.sDestroyWidth).removeClass(e.table));var S=DataTable.settings.indexOf(n);S!==-1&&DataTable.settings.splice(S,1)})});$$1.each(["column","row","cell"],function(t,n){_api_register(n+"s().every()",function(e){var r=this.selector.opts,a=this,s,o=0;return this.iterator("every",function(l,u,f){s=a[n](u,r),n==="cell"?e.call(s,s[0][0].row,s[0][0].column,f,o):e.call(s,u,f,o),o++})})});_api_register("i18n()",function(t,n,e){var r=this.context[0],a=_fnGetObjectDataFn(t)(r.oLanguage);return a===void 0&&(a=n),$$1.isPlainObject(a)&&(a=e!==void 0&&a[e]!==void 0?a[e]:e===!1?a:a._),typeof a=="string"?a.replace("%d",e):a});function cleanHeader(t,n){$$1(t).find("span.dt-column-order").remove(),$$1(t).find("span.dt-column-title").each(function(){var e=$$1(this).html();$$1(this).parent().parent().append(e),$$1(this).remove()}),$$1(t).find("div.dt-column-"+n).remove(),$$1("th, td",t).removeAttr("data-dt-column")}DataTable.version="2.3.5";DataTable.settings=[];DataTable.models={};DataTable.models.oSearch={caseInsensitive:!0,search:"",regex:!1,smart:!0,return:!1};DataTable.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,src:null,idx:-1,displayData:null};DataTable.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null,wideStrings:null,searchFixed:null};DataTable.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],bAutoWidth:!0,bDeferRender:!0,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:null,titleRow:null,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnStateLoadCallback:function(t){try{return JSON.parse((t.iStateDuration===-1?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname))}catch{return{}}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,n){try{(t.iStateDuration===-1?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(n))}catch{}},fnStateSaveParams:null,iStateDuration:7200,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{orderable:": Activate to sort",orderableReverse:": Activate to invert sorting",orderableRemove:": Activate to remove sorting",paginate:{first:"First",last:"Last",next:"Next",previous:"Previous",number:""}},oPaginate:{sFirst:"«",sLast:"»",sNext:"›",sPrevious:"‹"},entries:{_:"entries",1:"entry"},lengthLabels:{"-1":"All"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",sInfoEmpty:"Showing 0 to 0 of 0 _ENTRIES-TOTAL_",sInfoFiltered:"(filtered from _MAX_ total _ENTRIES-MAX_)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"_MENU_ _ENTRIES_ per page",sLoadingRecords:"Loading...",sProcessing:"",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},orderDescReverse:!0,oSearch:$$1.extend({},DataTable.models.oSearch),layout:{topStart:"pageLength",topEnd:"search",bottomStart:"info",bottomEnd:"paging"},sDom:null,searchDelay:null,sPaginationType:"",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId",caption:null,iDeferLoading:null,on:null};_fnHungarianMap(DataTable.defaults);DataTable.defaults.column={aDataSort:null,iDataSort:-1,ariaTitle:"",asSorting:["asc","desc",""],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};_fnHungarianMap(DataTable.defaults.column);DataTable.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:!0,bLengthChange:!0,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollbarLeft:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},searchFixed:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",pagingControls:0,iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,bAjaxDataGet:!0,jqXHR:null,json:void 0,oAjaxData:void 0,sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return _fnDataSource(this)=="ssp"?this._iRecordsTotal*1:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return _fnDataSource(this)=="ssp"?this._iRecordsDisplay*1:this.aiDisplay.length},fnDisplayEnd:function(){var t=this._iDisplayLength,n=this._iDisplayStart,e=n+t,r=this.aiDisplay.length,a=this.oFeatures,s=a.bPaginate;return a.bServerSide?s===!1||t===-1?n+r:Math.min(n+t,this._iRecordsDisplay):!s||e>r||t===-1?r:e},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null,caption:"",captionNode:null,colgroup:null,deferLoading:null,typeDetect:!0,resizeObserver:null,containerWidth:-1,orderDescReverse:null,orderIndicators:!0,orderHandler:!0,titleRow:null};var extPagination=DataTable.ext.pager;$$1.extend(extPagination,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(){return["numbers"]},simple_numbers:function(){return["previous","numbers","next"]},full_numbers:function(){return["first","previous","numbers","next","last"]},first_last:function(){return["first","last"]},first_last_numbers:function(){return["first","numbers","last"]},_numbers:_pagingNumbers,numbers_length:7});$$1.extend(!0,DataTable.ext.renderer,{pagingButton:{_:function(t,n,e,r,a){var s=t.oClasses.paging,o=[s.button],l;return r&&o.push(s.active),a&&o.push(s.disabled),n==="ellipsis"?l=$$1('<span class="ellipsis"></span>').html(e)[0]:l=$$1("<button>",{class:o.join(" "),role:"link",type:"button"}).html(e),{display:l,clicker:l}}},pagingContainer:{_:function(t,n){return n}}});var _filterString=function(t,n){return function(e){return _empty(e)||typeof e!="string"||(e=e.replace(_re_new_lines," "),t&&(e=_stripHtml(e)),e=_normalize(e,!1)),e}};function __mld(t,n,e,r,a){return __moment?t[n](a):__luxon?t[e](a):r?t[r](a):t}var __mlWarning=!1,__luxon,__moment;function resolveWindowLibs(){window.luxon&&!__luxon&&(__luxon=window.luxon),window.moment&&!__moment&&(__moment=window.moment)}function __mldObj(t,n,e){var r;if(resolveWindowLibs(),__moment){if(r=__moment.utc(t,n,e,!0),!r.isValid())return null}else if(__luxon){if(r=n&&typeof t=="string"?__luxon.DateTime.fromFormat(t,n):__luxon.DateTime.fromISO(t),!r.isValid)return null;r=r.setLocale(e)}else n?(__mlWarning||alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"),__mlWarning=!0):r=new Date(t);return r}function __mlHelper(t){return function(n,e,r,a){arguments.length===0?(r="en",e=null,n=null):arguments.length===1?(r="en",e=n,n=null):arguments.length===2&&(r=e,e=n,n=null);var s="datetime"+(e?"-"+e:"");return DataTable.ext.type.order[s+"-pre"]||DataTable.type(s,{detect:function(o){return o===s?s:!1},order:{pre:function(o){return o.valueOf()}},className:"dt-right"}),function(o,l){if(o==null)if(a==="--now"){var u=new Date;o=new Date(Date.UTC(u.getFullYear(),u.getMonth(),u.getDate(),u.getHours(),u.getMinutes(),u.getSeconds()))}else o="";if(l==="type")return s;if(o==="")return l!=="sort"?"":__mldObj("0000-01-01 00:00:00",null,r);if(e!==null&&n===e&&l!=="sort"&&l!=="type"&&!(o instanceof Date))return o;var f=__mldObj(o,n,r);if(f===null)return o;if(l==="sort")return f;var d=e===null?__mld(f,"toDate","toJSDate","")[t](navigator.language,{timeZone:"UTC"}):__mld(f,"format","toFormat","toISOString",e);return l==="display"?_escapeHtml(d):d}}}var __thousands=",",__decimal=".";if(window.Intl!==void 0)try{for(var num=new Intl.NumberFormat().formatToParts(100000.1),i=0;i<num.length;i++)num[i].type==="group"?__thousands=num[i].value:num[i].type==="decimal"&&(__decimal=num[i].value)}catch{}DataTable.datetime=function(t,n){var e="datetime-"+t;n||(n="en"),DataTable.ext.type.order[e]||DataTable.type(e,{detect:function(r){var a=__mldObj(r,t,n);return r===""||a?e:!1},order:{pre:function(r){return __mldObj(r,t,n)||0}},className:"dt-right"})};DataTable.render={date:__mlHelper("toLocaleDateString"),datetime:__mlHelper("toLocaleString"),time:__mlHelper("toLocaleTimeString"),number:function(t,n,e,r,a){return t==null&&(t=__thousands),n==null&&(n=__decimal),{display:function(s){if(typeof s!="number"&&typeof s!="string"||s===""||s===null)return s;var o=s<0?"-":"",l=parseFloat(s),u=Math.abs(l);if(u>=1e11||u<1e-4&&u!==0){var f=l.toExponential(e).split(/e\+?/);return f[0]+" x 10<sup>"+f[1]+"</sup>"}if(isNaN(l))return _escapeHtml(s);l=l.toFixed(e),s=Math.abs(l);var d=parseInt(s,10),p=e?n+(s-d).toFixed(e).substring(2):"";return d===0&&parseFloat(p)===0&&(o=""),o+(r||"")+d.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)+p+(a||"")}}},text:function(){return{display:_escapeHtml,filter:_escapeHtml}}};var _extTypes=DataTable.ext.type;DataTable.type=function(t,n,e){if(!n)return{className:_extTypes.className[t],detect:_extTypes.detect.find(function(o){return o._name===t}),order:{pre:_extTypes.order[t+"-pre"],asc:_extTypes.order[t+"-asc"],desc:_extTypes.order[t+"-desc"]},render:_extTypes.render[t],search:_extTypes.search[t]};var r=function(o,l){_extTypes[o][t]=l},a=function(o){Object.defineProperty(o,"_name",{value:t});var l=_extTypes.detect.findIndex(function(u){return u._name===t});l===-1?_extTypes.detect.unshift(o):_extTypes.detect.splice(l,1,o)},s=function(o){_extTypes.order[t+"-pre"]=o.pre,_extTypes.order[t+"-asc"]=o.asc,_extTypes.order[t+"-desc"]=o.desc};e===void 0&&(e=n,n=null),n==="className"?r("className",e):n==="detect"?a(e):n==="order"?s(e):n==="render"?r("render",e):n==="search"?r("search",e):n||(e.className&&r("className",e.className),e.detect!==void 0&&a(e.detect),e.order&&s(e.order),e.render!==void 0&&r("render",e.render),e.search!==void 0&&r("search",e.search))};DataTable.types=function(){return _extTypes.detect.map(function(t){return t._name})};var __diacriticSort=function(t,n){return t=t!=null?t.toString().toLowerCase():"",n=n!=null?n.toString().toLowerCase():"",t.localeCompare(n,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0})},__diacriticHtmlSort=function(t,n){return t=_stripHtml(t),n=_stripHtml(n),__diacriticSort(t,n)};DataTable.type("string",{detect:function(){return"string"},order:{pre:function(t){return _empty(t)&&typeof t!="boolean"?"":typeof t=="string"?t.toLowerCase():t.toString?t.toString():""}},search:_filterString(!1)});DataTable.type("string-utf8",{detect:{allOf:function(t){return!0},oneOf:function(t){return!_empty(t)&&navigator.languages&&typeof t=="string"&&t.match(/[^\x00-\x7F]/)}},order:{asc:__diacriticSort,desc:function(t,n){return __diacriticSort(t,n)*-1}},search:_filterString(!1)});DataTable.type("html",{detect:{allOf:function(t){return _empty(t)||typeof t=="string"&&t.indexOf("<")!==-1},oneOf:function(t){return!_empty(t)&&typeof t=="string"&&t.indexOf("<")!==-1}},order:{pre:function(t){return _empty(t)?"":t.replace?_stripHtml(t).trim().toLowerCase():t+""}},search:_filterString(!0)});DataTable.type("html-utf8",{detect:{allOf:function(t){return _empty(t)||typeof t=="string"&&t.indexOf("<")!==-1},oneOf:function(t){return navigator.languages&&!_empty(t)&&typeof t=="string"&&t.indexOf("<")!==-1&&typeof t=="string"&&t.match(/[^\x00-\x7F]/)}},order:{asc:__diacriticHtmlSort,desc:function(t,n){return __diacriticHtmlSort(t,n)*-1}},search:_filterString(!0)});DataTable.type("date",{className:"dt-type-date",detect:{allOf:function(t){if(t&&!(t instanceof Date)&&!_re_date.test(t))return null;var n=Date.parse(t);return n!==null&&!isNaN(n)||_empty(t)},oneOf:function(t){return t instanceof Date||typeof t=="string"&&_re_date.test(t)}},order:{pre:function(t){var n=Date.parse(t);return isNaN(n)?-1/0:n}}});DataTable.type("html-num-fmt",{className:"dt-type-numeric",detect:{allOf:function(t,n){var e=n.oLanguage.sDecimal;return _htmlNumeric(t,e,!0,!1)},oneOf:function(t,n){var e=n.oLanguage.sDecimal;return _htmlNumeric(t,e,!0,!1)}},order:{pre:function(t,n){var e=n.oLanguage.sDecimal;return __numericReplace(t,e,_re_html,_re_formatted_numeric)}},search:_filterString(!0)});DataTable.type("html-num",{className:"dt-type-numeric",detect:{allOf:function(t,n){var e=n.oLanguage.sDecimal;return _htmlNumeric(t,e,!1,!0)},oneOf:function(t,n){var e=n.oLanguage.sDecimal;return _htmlNumeric(t,e,!1,!1)}},order:{pre:function(t,n){var e=n.oLanguage.sDecimal;return __numericReplace(t,e,_re_html)}},search:_filterString(!0)});DataTable.type("num-fmt",{className:"dt-type-numeric",detect:{allOf:function(t,n){var e=n.oLanguage.sDecimal;return _isNumber(t,e,!0,!0)},oneOf:function(t,n){var e=n.oLanguage.sDecimal;return _isNumber(t,e,!0,!1)}},order:{pre:function(t,n){var e=n.oLanguage.sDecimal;return __numericReplace(t,e,_re_formatted_numeric)}}});DataTable.type("num",{className:"dt-type-numeric",detect:{allOf:function(t,n){var e=n.oLanguage.sDecimal;return _isNumber(t,e,!1,!0)},oneOf:function(t,n){var e=n.oLanguage.sDecimal;return _isNumber(t,e,!1,!1)}},order:{pre:function(t,n){var e=n.oLanguage.sDecimal;return __numericReplace(t,e)}}});var __numericReplace=function(t,n,e,r){if(t!==0&&(!t||t==="-"))return-1/0;var a=typeof t;return a==="number"||a==="bigint"?t:(n&&(t=_numToDecimal(t,n)),t.replace&&(e&&(t=t.replace(e,"")),r&&(t=t.replace(r,""))),t*1)};$$1.extend(!0,DataTable.ext.renderer,{footer:{_:function(t,n,e){n.addClass(e.tfoot.cell)}},header:{_:function(t,n,e){n.addClass(e.thead.cell),t.oFeatures.bSort||n.addClass(e.order.none);var r=t.titleRow,a=n.closest("thead").find("tr"),s=n.parent().index();n.attr("data-dt-order")==="disable"||n.parent().attr("data-dt-order")==="disable"||r===!0&&s!==0||r===!1&&s!==a.length-1||typeof r=="number"&&s!==r||$$1(t.nTable).on("order.dt.DT column-visibility.dt.DT",function(o,l,u){if(t===l){var f=l.sortDetails;if(f){var d=_pluck(f,"col");if(!(o.type==="column-visibility"&&!d.includes(u))){var p,v=e.order,y=l.api.columns(n),x=t.aoColumns[y.flatten()[0]],S=y.orderable().includes(!0),D="",A=y.indexes(),I=y.orderable(!0).flatten(),W=t.iTabIndex,N=l.orderHandler&&S;n.removeClass(v.isAsc+" "+v.isDesc).toggleClass(v.none,!S).toggleClass(v.canAsc,N&&I.includes("asc")).toggleClass(v.canDesc,N&&I.includes("desc"));var U=!0;for(p=0;p<A.length;p++)d.includes(A[p])||(U=!1);if(U){var J=y.order();n.addClass(J.includes("asc")?v.isAsc:""+J.includes("desc")?v.isDesc:"")}var m=-1;for(p=0;p<d.length;p++)if(t.aoColumns[d[p]].bVisible){m=d[p];break}if(A[0]==m){var ne=f[0],ie=x.asSorting;n.attr("aria-sort",ne.dir==="asc"?"ascending":"descending"),D=ie[ne.index+1]?"Reverse":"Remove"}else n.removeAttr("aria-sort");if(S){var ge=n.find(".dt-column-order");ge.attr("role","button").attr("aria-label",S?x.ariaTitle+l.api.i18n("oAria.orderable"+D):x.ariaTitle),W!==-1&&ge.attr("tabindex",W)}}}}})}},layout:{_:function(t,n,e){var r=t.oClasses.layout,a=$$1("<div/>").attr("id",e.id||null).addClass(e.className||r.row).appendTo(n);DataTable.ext.renderer.layout._forLayoutRow(e,function(s,o){if(!(s==="id"||s==="className")){var l="";o.table&&(a.addClass(r.tableRow),l+=r.tableCell+" "),s==="start"?l+=r.start:s==="end"?l+=r.end:l+=r.full,$$1("<div/>").attr({id:o.id||null,class:o.className?o.className:r.cell+" "+l}).append(o.contents).appendTo(a)}})},_forLayoutRow:function(t,n){var e=function(r){switch(r){case"":return 0;case"start":return 1;case"end":return 2;default:return 3}};Object.keys(t).sort(function(r,a){return e(r)-e(a)}).forEach(function(r){n(r,t[r])})}}});DataTable.feature={};DataTable.feature.register=function(t,n,e){DataTable.ext.features[t]=n,e&&_ext.feature.push({cFeature:e,fnInit:n})};function _divProp(t,n,e){e&&(t[n]=e)}DataTable.feature.register("div",function(t,n){var e=$$1("<div>")[0];return n&&(_divProp(e,"className",n.className),_divProp(e,"id",n.id),_divProp(e,"innerHTML",n.html),_divProp(e,"textContent",n.text)),e});DataTable.feature.register("info",function(t,n){if(!t.oFeatures.bInfo)return null;var e=t.oLanguage,r=t.sTableId,a=$$1("<div/>",{class:t.oClasses.info.container});return n=$$1.extend({callback:e.fnInfoCallback,empty:e.sInfoEmpty,postfix:e.sInfoPostFix,search:e.sInfoFiltered,text:e.sInfo},n),t.aoDrawCallback.push(function(s){_fnUpdateInfo(s,n,a)}),t._infoEl||(a.attr({"aria-live":"polite",id:r+"_info",role:"status"}),$$1(t.nTable).attr("aria-describedby",r+"_info"),t._infoEl=a),a},"i");function _fnUpdateInfo(t,n,e){var r=t._iDisplayStart+1,a=t.fnDisplayEnd(),s=t.fnRecordsTotal(),o=t.fnRecordsDisplay(),l=o?n.text:n.empty;o!==s&&(l+=" "+n.search),l+=n.postfix,l=_fnMacros(t,l),n.callback&&(l=n.callback.call(t.oInstance,t,r,a,s,o,l)),e.html(l),_fnCallbackFire(t,null,"info",[t,e[0],l])}var __searchCounter=0;DataTable.feature.register("search",function(t,n){if(!t.oFeatures.bFilter)return null;var e=t.oClasses.search,r=t.sTableId,a=t.oLanguage,s=t.oPreviousSearch,o='<input type="search" class="'+e.input+'"/>';n=$$1.extend({placeholder:a.sSearchPlaceholder,processing:!1,text:a.sSearch},n),n.text.indexOf("_INPUT_")===-1&&(n.text+="_INPUT_"),n.text=_fnMacros(t,n.text);var l=n.text.match(/_INPUT_$/),u=n.text.match(/^_INPUT_/),f=n.text.replace(/_INPUT_/,""),d="<label>"+n.text+"</label>";u?d="_INPUT_<label>"+f+"</label>":l&&(d="<label>"+f+"</label>_INPUT_");var p=$$1("<div>").addClass(e.container).append(d.replace(/_INPUT_/,o));p.find("label").attr("for","dt-search-"+__searchCounter),p.find("input").attr("id","dt-search-"+__searchCounter),__searchCounter++;var v=function(S){var D=this.value;s.return&&S.key!=="Enter"||D!=s.search&&_fnProcessingRun(t,n.processing,function(){s.search=D,_fnFilterComplete(t,s),t._iDisplayStart=0,_fnDraw(t)})},y=t.searchDelay!==null?t.searchDelay:0,x=$$1("input",p).val(s.search).attr("placeholder",n.placeholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",y?DataTable.util.debounce(v,y):v).on("mouseup.DT",function(S){setTimeout(function(){v.call(x[0],S)},10)}).on("keypress.DT",function(S){if(S.keyCode==13)return!1}).attr("aria-controls",r);return $$1(t.nTable).on("search.dt.DT",function(S,D){t===D&&x[0]!==document.activeElement&&x.val(typeof s.search!="function"?s.search:"")}),p},"f");DataTable.feature.register("paging",function(t,n){if(!t.oFeatures.bPaginate)return null;n=$$1.extend({buttons:DataTable.ext.pager.numbers_length,type:t.sPaginationType,boundaryNumbers:!0,firstLast:!0,previousNext:!0,numbers:!0},n);var e=$$1("<div/>").addClass(t.oClasses.paging.container+(n.type?" paging_"+n.type:"")).append($$1("<nav>").attr("aria-label","pagination").addClass(t.oClasses.paging.nav)),r=function(){_pagingDraw(t,e.children(),n)};return t.aoDrawCallback.push(r),$$1(t.nTable).on("column-sizing.dt.DT",r),e},"p");function _pagingDynamic(t){var n=[];return t.numbers&&n.push("numbers"),t.previousNext&&(n.unshift("previous"),n.push("next")),t.firstLast&&(n.unshift("first"),n.push("last")),n}function _pagingDraw(t,n,e){if(t._bInitComplete){var r=e.type?DataTable.ext.pager[e.type]:_pagingDynamic,a=t.oLanguage.oAria.paginate||{},s=t._iDisplayStart,o=t._iDisplayLength,l=t.fnRecordsDisplay(),u=o===-1,f=u?0:Math.ceil(s/o),d=u?1:Math.ceil(l/o),p=[],v=[],y=r(e).map(function(J){return J==="numbers"?_pagingNumbers(f,d,e.buttons,e.boundaryNumbers):J});p=p.concat.apply(p,y);for(var x=0;x<p.length;x++){var S=p[x],D=_pagingButtonInfo(t,S,f,d),A=_fnRenderer(t,"pagingButton")(t,S,D.display,D.active,D.disabled),I=typeof S=="string"?a[S]:a.number?a.number+(S+1):null;$$1(A.clicker).attr({"aria-controls":t.sTableId,"aria-disabled":D.disabled?"true":null,"aria-current":D.active?"page":null,"aria-label":I,"data-dt-idx":S,tabIndex:D.disabled?-1:t.iTabIndex&&A.clicker[0].nodeName.toLowerCase()!=="span"?t.iTabIndex:null}),typeof S!="number"&&$$1(A.clicker).addClass(S),_fnBindAction(A.clicker,{action:S},function(J){J.preventDefault(),_fnPageChange(t,J.data.action,!0)}),v.push(A.display)}var W=_fnRenderer(t,"pagingContainer")(t,v),N=n.find(document.activeElement).data("dt-idx");if(n.empty().append(W),N!==void 0&&n.find("[data-dt-idx="+N+"]").trigger("focus"),v.length){var U=$$1(v[0]).outerHeight();e.buttons>1&&U>0&&$$1(n).height()>=U*2-10&&_pagingDraw(t,n,$$1.extend({},e,{buttons:e.buttons-2}))}}}function _pagingButtonInfo(t,n,e,r){var a=t.oLanguage.oPaginate,s={display:"",active:!1,disabled:!1};switch(n){case"ellipsis":s.display="&#x2026;";break;case"first":s.display=a.sFirst,e===0&&(s.disabled=!0);break;case"previous":s.display=a.sPrevious,e===0&&(s.disabled=!0);break;case"next":s.display=a.sNext,(r===0||e===r-1)&&(s.disabled=!0);break;case"last":s.display=a.sLast,(r===0||e===r-1)&&(s.disabled=!0);break;default:typeof n=="number"&&(s.display=t.fnFormatNumber(n+1),e===n&&(s.active=!0));break}return s}function _pagingNumbers(t,n,e,r){var a=[],s=Math.floor(e/2),o=r?2:1,l=r?1:0;return n<=e?a=_range(0,n):e===1?a=[t]:e===3?t<=1?a=[0,1,"ellipsis"]:t>=n-2?(a=_range(n-2,n),a.unshift("ellipsis")):a=["ellipsis",t,"ellipsis"]:t<=s?(a=_range(0,e-o),a.push("ellipsis"),r&&a.push(n-1)):t>=n-1-s?(a=_range(n-(e-o),n),a.unshift("ellipsis"),r&&a.unshift(0)):(a=_range(t-s+o,t+s-l),a.push("ellipsis"),a.unshift("ellipsis"),r&&(a.push(n-1),a.unshift(0))),a}var __lengthCounter=0;DataTable.feature.register("pageLength",function(t,n){var e=t.oFeatures;if(!e.bPaginate||!e.bLengthChange)return null;n=$$1.extend({menu:t.aLengthMenu,text:t.oLanguage.sLengthMenu},n);var r=t.oClasses.length,a=t.sTableId,s=n.menu,o=[],l=[],u;if(Array.isArray(s[0]))o=s[0],l=s[1];else for(u=0;u<s.length;u++)$$1.isPlainObject(s[u])?(o.push(s[u].value),l.push(s[u].label)):(o.push(s[u]),l.push(s[u]));var f=n.text.match(/_MENU_$/),d=n.text.match(/^_MENU_/),p=n.text.replace(/_MENU_/,""),v="<label>"+n.text+"</label>";d?v="_MENU_<label>"+p+"</label>":f&&(v="<label>"+p+"</label>_MENU_");var y="tmp-"+ +new Date,x=$$1("<div/>").addClass(r.container).append(v.replace("_MENU_",'<span id="'+y+'"></span>')),S=[];Array.prototype.slice.call(x.find("label")[0].childNodes).forEach(function(W){W.nodeType===Node.TEXT_NODE&&S.push({el:W,text:W.textContent})});var D=function(W){S.forEach(function(N){N.el.textContent=_fnMacros(t,N.text,W)})},A=$$1("<select/>",{"aria-controls":a,class:r.select});for(u=0;u<o.length;u++){var I=t.api.i18n("lengthLabels."+o[u],null);I===null&&(I=typeof l[u]=="number"?t.fnFormatNumber(l[u]):l[u]),A[0][u]=new Option(I,o[u])}return x.find("label").attr("for","dt-length-"+__lengthCounter),A.attr("id","dt-length-"+__lengthCounter),__lengthCounter++,x.find("#"+y).replaceWith(A),$$1("select",x).val(t._iDisplayLength).on("change.DT",function(){_fnLengthChange(t,$$1(this).val()),_fnDraw(t)}),$$1(t.nTable).on("length.dt.DT",function(W,N,U){t===N&&($$1("select",x).val(U),D(U))}),D(t._iDisplayLength),x},"l");$$1.fn.dataTable=DataTable;DataTable.$=$$1;$$1.fn.dataTableSettings=DataTable.settings;$$1.fn.dataTableExt=DataTable.ext;$$1.fn.DataTable=function(t){return $$1(this).dataTable(t).api()};$$1.each(DataTable,function(t,n){$$1.fn.DataTable[t]=n});let $=jQuery$1;$.extend(!0,DataTable.defaults,{renderer:"bootstrap"});$.extend(!0,DataTable.ext.classes,{container:"dt-container dt-bootstrap4",search:{input:"form-control form-control-sm"},length:{select:"custom-select custom-select-sm form-control form-control-sm"},processing:{container:"dt-processing card"},layout:{row:"row justify-content-between",cell:"d-md-flex justify-content-between align-items-center",tableCell:"col-12",start:"dt-layout-start col-md-auto mr-auto",end:"dt-layout-end col-md-auto ml-auto",full:"dt-layout-full col-md"}});DataTable.ext.renderer.pagingButton.bootstrap=function(t,n,e,r,a){var s=["dt-paging-button","page-item"];r&&s.push("active"),a&&s.push("disabled");var o=$("<li>").addClass(s.join(" ")),l=$("<a>",{href:a?null:"#",class:"page-link"}).html(e).appendTo(o);return{display:o,clicker:l}};DataTable.ext.renderer.pagingContainer.bootstrap=function(t,n){return $("<ul/>").addClass("pagination").append(n)};function initDataTable(){const t=document.querySelectorAll("div.table-responsive > table.datatable");for(const e of t)e!==null&&new DataTable(e,{pageLength:10,orderClasses:!1,order:[[1,"desc"]]});const n=document.querySelectorAll("div.table-responsive > table.datatable-long");for(const e of n)e!==null&&new DataTable(e,{pageLength:50,orderClasses:!1,order:[[1,"desc"]]})}function round(t){return t+.5|0}const lim=(t,n,e)=>Math.max(Math.min(t,e),n);function p2b(t){return lim(round(t*2.55),0,255)}function n2b(t){return lim(round(t*255),0,255)}function b2n(t){return lim(round(t/2.55)/100,0,1)}function n2p(t){return lim(round(t*100),0,100)}const map$1={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},hex=[..."0123456789ABCDEF"],h1=t=>hex[t&15],h2=t=>hex[(t&240)>>4]+hex[t&15],eq=t=>(t&240)>>4===(t&15),isShort=t=>eq(t.r)&&eq(t.g)&&eq(t.b)&&eq(t.a);function hexParse(t){var n=t.length,e;return t[0]==="#"&&(n===4||n===5?e={r:255&map$1[t[1]]*17,g:255&map$1[t[2]]*17,b:255&map$1[t[3]]*17,a:n===5?map$1[t[4]]*17:255}:(n===7||n===9)&&(e={r:map$1[t[1]]<<4|map$1[t[2]],g:map$1[t[3]]<<4|map$1[t[4]],b:map$1[t[5]]<<4|map$1[t[6]],a:n===9?map$1[t[7]]<<4|map$1[t[8]]:255})),e}const alpha=(t,n)=>t<255?n(t):"";function hexString(t){var n=isShort(t)?h1:h2;return t?"#"+n(t.r)+n(t.g)+n(t.b)+alpha(t.a,n):void 0}const HUE_RE=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function hsl2rgbn(t,n,e){const r=n*Math.min(e,1-e),a=(s,o=(s+t/30)%12)=>e-r*Math.max(Math.min(o-3,9-o,1),-1);return[a(0),a(8),a(4)]}function hsv2rgbn(t,n,e){const r=(a,s=(a+t/60)%6)=>e-e*n*Math.max(Math.min(s,4-s,1),0);return[r(5),r(3),r(1)]}function hwb2rgbn(t,n,e){const r=hsl2rgbn(t,1,.5);let a;for(n+e>1&&(a=1/(n+e),n*=a,e*=a),a=0;a<3;a++)r[a]*=1-n-e,r[a]+=n;return r}function hueValue(t,n,e,r,a){return t===a?(n-e)/r+(n<e?6:0):n===a?(e-t)/r+2:(t-n)/r+4}function rgb2hsl(t){const e=t.r/255,r=t.g/255,a=t.b/255,s=Math.max(e,r,a),o=Math.min(e,r,a),l=(s+o)/2;let u,f,d;return s!==o&&(d=s-o,f=l>.5?d/(2-s-o):d/(s+o),u=hueValue(e,r,a,d,s),u=u*60+.5),[u|0,f||0,l]}function calln(t,n,e,r){return(Array.isArray(n)?t(n[0],n[1],n[2]):t(n,e,r)).map(n2b)}function hsl2rgb(t,n,e){return calln(hsl2rgbn,t,n,e)}function hwb2rgb(t,n,e){return calln(hwb2rgbn,t,n,e)}function hsv2rgb(t,n,e){return calln(hsv2rgbn,t,n,e)}function hue(t){return(t%360+360)%360}function hueParse(t){const n=HUE_RE.exec(t);let e=255,r;if(!n)return;n[5]!==r&&(e=n[6]?p2b(+n[5]):n2b(+n[5]));const a=hue(+n[2]),s=+n[3]/100,o=+n[4]/100;return n[1]==="hwb"?r=hwb2rgb(a,s,o):n[1]==="hsv"?r=hsv2rgb(a,s,o):r=hsl2rgb(a,s,o),{r:r[0],g:r[1],b:r[2],a:e}}function rotate(t,n){var e=rgb2hsl(t);e[0]=hue(e[0]+n),e=hsl2rgb(e),t.r=e[0],t.g=e[1],t.b=e[2]}function hslString(t){if(!t)return;const n=rgb2hsl(t),e=n[0],r=n2p(n[1]),a=n2p(n[2]);return t.a<255?`hsla(${e}, ${r}%, ${a}%, ${b2n(t.a)})`:`hsl(${e}, ${r}%, ${a}%)`}const map$2={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},names$1={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function unpack(){const t={},n=Object.keys(names$1),e=Object.keys(map$2);let r,a,s,o,l;for(r=0;r<n.length;r++){for(o=l=n[r],a=0;a<e.length;a++)s=e[a],l=l.replace(s,map$2[s]);s=parseInt(names$1[o],16),t[l]=[s>>16&255,s>>8&255,s&255]}return t}let names;function nameParse(t){names||(names=unpack(),names.transparent=[0,0,0,0]);const n=names[t.toLowerCase()];return n&&{r:n[0],g:n[1],b:n[2],a:n.length===4?n[3]:255}}const RGB_RE=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function rgbParse(t){const n=RGB_RE.exec(t);let e=255,r,a,s;if(n){if(n[7]!==r){const o=+n[7];e=n[8]?p2b(o):lim(o*255,0,255)}return r=+n[1],a=+n[3],s=+n[5],r=255&(n[2]?p2b(r):lim(r,0,255)),a=255&(n[4]?p2b(a):lim(a,0,255)),s=255&(n[6]?p2b(s):lim(s,0,255)),{r,g:a,b:s,a:e}}}function rgbString(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${b2n(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const to=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,from=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function interpolate$1(t,n,e){const r=from(b2n(t.r)),a=from(b2n(t.g)),s=from(b2n(t.b));return{r:n2b(to(r+e*(from(b2n(n.r))-r))),g:n2b(to(a+e*(from(b2n(n.g))-a))),b:n2b(to(s+e*(from(b2n(n.b))-s))),a:t.a+e*(n.a-t.a)}}function modHSL(t,n,e){if(t){let r=rgb2hsl(t);r[n]=Math.max(0,Math.min(r[n]+r[n]*e,n===0?360:1)),r=hsl2rgb(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function clone$1(t,n){return t&&Object.assign(n||{},t)}function fromObject(t){var n={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(n={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(n.a=n2b(t[3]))):(n=clone$1(t,{r:0,g:0,b:0,a:1}),n.a=n2b(n.a)),n}function functionParse(t){return t.charAt(0)==="r"?rgbParse(t):hueParse(t)}class Color{constructor(n){if(n instanceof Color)return n;const e=typeof n;let r;e==="object"?r=fromObject(n):e==="string"&&(r=hexParse(n)||nameParse(n)||functionParse(n)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var n=clone$1(this._rgb);return n&&(n.a=b2n(n.a)),n}set rgb(n){this._rgb=fromObject(n)}rgbString(){return this._valid?rgbString(this._rgb):void 0}hexString(){return this._valid?hexString(this._rgb):void 0}hslString(){return this._valid?hslString(this._rgb):void 0}mix(n,e){if(n){const r=this.rgb,a=n.rgb;let s;const o=e===s?.5:e,l=2*o-1,u=r.a-a.a,f=((l*u===-1?l:(l+u)/(1+l*u))+1)/2;s=1-f,r.r=255&f*r.r+s*a.r+.5,r.g=255&f*r.g+s*a.g+.5,r.b=255&f*r.b+s*a.b+.5,r.a=o*r.a+(1-o)*a.a,this.rgb=r}return this}interpolate(n,e){return n&&(this._rgb=interpolate$1(this._rgb,n._rgb,e)),this}clone(){return new Color(this.rgb)}alpha(n){return this._rgb.a=n2b(n),this}clearer(n){const e=this._rgb;return e.a*=1-n,this}greyscale(){const n=this._rgb,e=round(n.r*.3+n.g*.59+n.b*.11);return n.r=n.g=n.b=e,this}opaquer(n){const e=this._rgb;return e.a*=1+n,this}negate(){const n=this._rgb;return n.r=255-n.r,n.g=255-n.g,n.b=255-n.b,this}lighten(n){return modHSL(this._rgb,2,n),this}darken(n){return modHSL(this._rgb,2,-n),this}saturate(n){return modHSL(this._rgb,1,n),this}desaturate(n){return modHSL(this._rgb,1,-n),this}rotate(n){return rotate(this._rgb,n),this}}function noop(){}const uid=(()=>{let t=0;return()=>t++})();function isNullOrUndef(t){return t==null}function isArray(t){if(Array.isArray&&Array.isArray(t))return!0;const n=Object.prototype.toString.call(t);return n.slice(0,7)==="[object"&&n.slice(-6)==="Array]"}function isObject(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function isNumberFinite(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function finiteOrDefault(t,n){return isNumberFinite(t)?t:n}function valueOrDefault(t,n){return typeof t>"u"?n:t}const toPercentage=(t,n)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/n,toDimension=(t,n)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*n:+t;function callback(t,n,e){if(t&&typeof t.call=="function")return t.apply(e,n)}function each(t,n,e,r){let a,s,o;if(isArray(t))for(s=t.length,a=0;a<s;a++)n.call(e,t[a],a);else if(isObject(t))for(o=Object.keys(t),s=o.length,a=0;a<s;a++)n.call(e,t[o[a]],o[a])}function _elementsEqual(t,n){let e,r,a,s;if(!t||!n||t.length!==n.length)return!1;for(e=0,r=t.length;e<r;++e)if(a=t[e],s=n[e],a.datasetIndex!==s.datasetIndex||a.index!==s.index)return!1;return!0}function clone(t){if(isArray(t))return t.map(clone);if(isObject(t)){const n=Object.create(null),e=Object.keys(t),r=e.length;let a=0;for(;a<r;++a)n[e[a]]=clone(t[e[a]]);return n}return t}function isValidKey(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function _merger(t,n,e,r){if(!isValidKey(t))return;const a=n[t],s=e[t];isObject(a)&&isObject(s)?merge(a,s,r):n[t]=clone(s)}function merge(t,n,e){const r=isArray(n)?n:[n],a=r.length;if(!isObject(t))return t;e=e||{};const s=e.merger||_merger;let o;for(let l=0;l<a;++l){if(o=r[l],!isObject(o))continue;const u=Object.keys(o);for(let f=0,d=u.length;f<d;++f)s(u[f],t,o,e)}return t}function mergeIf(t,n){return merge(t,n,{merger:_mergerIf})}function _mergerIf(t,n,e){if(!isValidKey(t))return;const r=n[t],a=e[t];isObject(r)&&isObject(a)?mergeIf(r,a):Object.prototype.hasOwnProperty.call(n,t)||(n[t]=clone(a))}const keyResolvers={"":t=>t,x:t=>t.x,y:t=>t.y};function _splitKey(t){const n=t.split("."),e=[];let r="";for(const a of n)r+=a,r.endsWith("\\")?r=r.slice(0,-1)+".":(e.push(r),r="");return e}function _getKeyResolver(t){const n=_splitKey(t);return e=>{for(const r of n){if(r==="")break;e=e&&e[r]}return e}}function resolveObjectKey(t,n){return(keyResolvers[n]||(keyResolvers[n]=_getKeyResolver(n)))(t)}function _capitalize(t){return t.charAt(0).toUpperCase()+t.slice(1)}const defined=t=>typeof t<"u",isFunction=t=>typeof t=="function",setsEqual=(t,n)=>{if(t.size!==n.size)return!1;for(const e of t)if(!n.has(e))return!1;return!0};function _isClickEvent(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const PI=Math.PI,TAU=2*PI,PITAU=TAU+PI,INFINITY=Number.POSITIVE_INFINITY,RAD_PER_DEG=PI/180,HALF_PI=PI/2,QUARTER_PI=PI/4,TWO_THIRDS_PI=PI*2/3,log10=Math.log10,sign=Math.sign;function almostEquals(t,n,e){return Math.abs(t-n)<e}function niceNum(t){const n=Math.round(t);t=almostEquals(t,n,t/1e3)?n:t;const e=Math.pow(10,Math.floor(log10(t))),r=t/e;return(r<=1?1:r<=2?2:r<=5?5:10)*e}function _factorize(t){const n=[],e=Math.sqrt(t);let r;for(r=1;r<e;r++)t%r===0&&(n.push(r),n.push(t/r));return e===(e|0)&&n.push(e),n.sort((a,s)=>a-s).pop(),n}function isNonPrimitive(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function isNumber(t){return!isNonPrimitive(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function almostWhole(t,n){const e=Math.round(t);return e-n<=t&&e+n>=t}function _setMinAndMaxByKey(t,n,e){let r,a,s;for(r=0,a=t.length;r<a;r++)s=t[r][e],isNaN(s)||(n.min=Math.min(n.min,s),n.max=Math.max(n.max,s))}function toRadians(t){return t*(PI/180)}function toDegrees(t){return t*(180/PI)}function _decimalPlaces(t){if(!isNumberFinite(t))return;let n=1,e=0;for(;Math.round(t*n)/n!==t;)n*=10,e++;return e}function getAngleFromPoint(t,n){const e=n.x-t.x,r=n.y-t.y,a=Math.sqrt(e*e+r*r);let s=Math.atan2(r,e);return s<-.5*PI&&(s+=TAU),{angle:s,distance:a}}function distanceBetweenPoints(t,n){return Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))}function _angleDiff(t,n){return(t-n+PITAU)%TAU-PI}function _normalizeAngle(t){return(t%TAU+TAU)%TAU}function _angleBetween(t,n,e,r){const a=_normalizeAngle(t),s=_normalizeAngle(n),o=_normalizeAngle(e),l=_normalizeAngle(s-a),u=_normalizeAngle(o-a),f=_normalizeAngle(a-s),d=_normalizeAngle(a-o);return a===s||a===o||r&&s===o||l>u&&f<d}function _limitValue(t,n,e){return Math.max(n,Math.min(e,t))}function _int16Range(t){return _limitValue(t,-32768,32767)}function _isBetween(t,n,e,r=1e-6){return t>=Math.min(n,e)-r&&t<=Math.max(n,e)+r}function _lookup(t,n,e){e=e||(o=>t[o]<n);let r=t.length-1,a=0,s;for(;r-a>1;)s=a+r>>1,e(s)?a=s:r=s;return{lo:a,hi:r}}const _lookupByKey=(t,n,e,r)=>_lookup(t,e,r?a=>{const s=t[a][n];return s<e||s===e&&t[a+1][n]===e}:a=>t[a][n]<e),_rlookupByKey=(t,n,e)=>_lookup(t,e,r=>t[r][n]>=e);function _filterBetween(t,n,e){let r=0,a=t.length;for(;r<a&&t[r]<n;)r++;for(;a>r&&t[a-1]>e;)a--;return r>0||a<t.length?t.slice(r,a):t}const arrayEvents=["push","pop","shift","splice","unshift"];function listenArrayEvents(t,n){if(t._chartjs){t._chartjs.listeners.push(n);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[n]}}),arrayEvents.forEach(e=>{const r="_onData"+_capitalize(e),a=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...s){const o=a.apply(this,s);return t._chartjs.listeners.forEach(l=>{typeof l[r]=="function"&&l[r](...s)}),o}})})}function unlistenArrayEvents(t,n){const e=t._chartjs;if(!e)return;const r=e.listeners,a=r.indexOf(n);a!==-1&&r.splice(a,1),!(r.length>0)&&(arrayEvents.forEach(s=>{delete t[s]}),delete t._chartjs)}function _arrayUnique(t){const n=new Set(t);return n.size===t.length?t:Array.from(n)}const requestAnimFrame=(function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame})();function throttled(t,n){let e=[],r=!1;return function(...a){e=a,r||(r=!0,requestAnimFrame.call(window,()=>{r=!1,t.apply(n,e)}))}}function debounce(t,n){let e;return function(...r){return n?(clearTimeout(e),e=setTimeout(t,n,r)):t.apply(this,r),n}}const _toLeftRightCenter=t=>t==="start"?"left":t==="end"?"right":"center",_alignStartEnd=(t,n,e)=>t==="start"?n:t==="end"?e:(n+e)/2,_textX=(t,n,e,r)=>t===(r?"left":"right")?e:t==="center"?(n+e)/2:n;function _getStartAndCountOfVisiblePoints(t,n,e){const r=n.length;let a=0,s=r;if(t._sorted){const{iScale:o,vScale:l,_parsed:u}=t,f=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,d=o.axis,{min:p,max:v,minDefined:y,maxDefined:x}=o.getUserBounds();if(y){if(a=Math.min(_lookupByKey(u,d,p).lo,e?r:_lookupByKey(n,d,o.getPixelForValue(p)).lo),f){const S=u.slice(0,a+1).reverse().findIndex(D=>!isNullOrUndef(D[l.axis]));a-=Math.max(0,S)}a=_limitValue(a,0,r-1)}if(x){let S=Math.max(_lookupByKey(u,o.axis,v,!0).hi+1,e?0:_lookupByKey(n,d,o.getPixelForValue(v),!0).hi+1);if(f){const D=u.slice(S-1).findIndex(A=>!isNullOrUndef(A[l.axis]));S+=Math.max(0,D)}s=_limitValue(S,a,r)-a}else s=r-a}return{start:a,count:s}}function _scaleRangesChanged(t){const{xScale:n,yScale:e,_scaleRanges:r}=t,a={xmin:n.min,xmax:n.max,ymin:e.min,ymax:e.max};if(!r)return t._scaleRanges=a,!0;const s=r.xmin!==n.min||r.xmax!==n.max||r.ymin!==e.min||r.ymax!==e.max;return Object.assign(r,a),s}const atEdge=t=>t===0||t===1,elasticIn=(t,n,e)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-n)*TAU/e)),elasticOut=(t,n,e)=>Math.pow(2,-10*t)*Math.sin((t-n)*TAU/e)+1,effects={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*HALF_PI)+1,easeOutSine:t=>Math.sin(t*HALF_PI),easeInOutSine:t=>-.5*(Math.cos(PI*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>atEdge(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>atEdge(t)?t:elasticIn(t,.075,.3),easeOutElastic:t=>atEdge(t)?t:elasticOut(t,.075,.3),easeInOutElastic(t){return atEdge(t)?t:t<.5?.5*elasticIn(t*2,.1125,.45):.5+.5*elasticOut(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let n=1.70158;return(t/=.5)<1?.5*(t*t*(((n*=1.525)+1)*t-n)):.5*((t-=2)*t*(((n*=1.525)+1)*t+n)+2)},easeInBounce:t=>1-effects.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?effects.easeInBounce(t*2)*.5:effects.easeOutBounce(t*2-1)*.5+.5};function isPatternOrGradient(t){if(t&&typeof t=="object"){const n=t.toString();return n==="[object CanvasPattern]"||n==="[object CanvasGradient]"}return!1}function color(t){return isPatternOrGradient(t)?t:new Color(t)}function getHoverColor(t){return isPatternOrGradient(t)?t:new Color(t).saturate(.5).darken(.1).hexString()}const numbers=["x","y","borderWidth","radius","tension"],colors=["color","borderColor","backgroundColor"];function applyAnimationsDefaults(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:n=>n!=="onProgress"&&n!=="onComplete"&&n!=="fn"}),t.set("animations",{colors:{type:"color",properties:colors},numbers:{type:"number",properties:numbers}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:n=>n|0}}}})}function applyLayoutsDefaults(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const intlCache=new Map;function getNumberFormat(t,n){n=n||{};const e=t+JSON.stringify(n);let r=intlCache.get(e);return r||(r=new Intl.NumberFormat(t,n),intlCache.set(e,r)),r}function formatNumber(t,n,e){return getNumberFormat(n,e).format(t)}const formatters={values(t){return isArray(t)?t:""+t},numeric(t,n,e){if(t===0)return"0";const r=this.chart.options.locale;let a,s=t;if(e.length>1){const f=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(f<1e-4||f>1e15)&&(a="scientific"),s=calculateDelta(t,e)}const o=log10(Math.abs(s)),l=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),u={notation:a,minimumFractionDigits:l,maximumFractionDigits:l};return Object.assign(u,this.options.ticks.format),formatNumber(t,r,u)},logarithmic(t,n,e){if(t===0)return"0";const r=e[n].significand||t/Math.pow(10,Math.floor(log10(t)));return[1,2,3,5,10,15].includes(r)||n>.8*e.length?formatters.numeric.call(this,t,n,e):""}};function calculateDelta(t,n){let e=n.length>3?n[2].value-n[1].value:n[1].value-n[0].value;return Math.abs(e)>=1&&t!==Math.floor(t)&&(e=t-Math.floor(t)),e}var Ticks={formatters};function applyScaleDefaults(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(n,e)=>e.lineWidth,tickColor:(n,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ticks.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:n=>!n.startsWith("before")&&!n.startsWith("after")&&n!=="callback"&&n!=="parser",_indexable:n=>n!=="borderDash"&&n!=="tickBorderDash"&&n!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:n=>n!=="backdropPadding"&&n!=="callback",_indexable:n=>n!=="backdropPadding"})}const overrides=Object.create(null),descriptors=Object.create(null);function getScope$1(t,n){if(!n)return t;const e=n.split(".");for(let r=0,a=e.length;r<a;++r){const s=e[r];t=t[s]||(t[s]=Object.create(null))}return t}function set(t,n,e){return typeof n=="string"?merge(getScope$1(t,n),e):merge(getScope$1(t,""),n)}class Defaults{constructor(n,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,a)=>getHoverColor(a.backgroundColor),this.hoverBorderColor=(r,a)=>getHoverColor(a.borderColor),this.hoverColor=(r,a)=>getHoverColor(a.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(n),this.apply(e)}set(n,e){return set(this,n,e)}get(n){return getScope$1(this,n)}describe(n,e){return set(descriptors,n,e)}override(n,e){return set(overrides,n,e)}route(n,e,r,a){const s=getScope$1(this,n),o=getScope$1(this,r),l="_"+e;Object.defineProperties(s,{[l]:{value:s[e],writable:!0},[e]:{enumerable:!0,get(){const u=this[l],f=o[a];return isObject(u)?Object.assign({},f,u):valueOrDefault(u,f)},set(u){this[l]=u}}})}apply(n){n.forEach(e=>e(this))}}var defaults=new Defaults({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[applyAnimationsDefaults,applyLayoutsDefaults,applyScaleDefaults]);function toFontString(t){return!t||isNullOrUndef(t.size)||isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function _measureText(t,n,e,r,a){let s=n[a];return s||(s=n[a]=t.measureText(a).width,e.push(a)),s>r&&(r=s),r}function _longestText(t,n,e,r){r=r||{};let a=r.data=r.data||{},s=r.garbageCollect=r.garbageCollect||[];r.font!==n&&(a=r.data={},s=r.garbageCollect=[],r.font=n),t.save(),t.font=n;let o=0;const l=e.length;let u,f,d,p,v;for(u=0;u<l;u++)if(p=e[u],p!=null&&!isArray(p))o=_measureText(t,a,s,o,p);else if(isArray(p))for(f=0,d=p.length;f<d;f++)v=p[f],v!=null&&!isArray(v)&&(o=_measureText(t,a,s,o,v));t.restore();const y=s.length/2;if(y>e.length){for(u=0;u<y;u++)delete a[s[u]];s.splice(0,y)}return o}function _alignPixel(t,n,e){const r=t.currentDevicePixelRatio,a=e!==0?Math.max(e/2,.5):0;return Math.round((n-a)*r)/r+a}function clearCanvas(t,n){!n&&!t||(n=n||t.getContext("2d"),n.save(),n.resetTransform(),n.clearRect(0,0,t.width,t.height),n.restore())}function drawPoint(t,n,e,r){drawPointLegend(t,n,e,r,null)}function drawPointLegend(t,n,e,r,a){let s,o,l,u,f,d,p,v;const y=n.pointStyle,x=n.rotation,S=n.radius;let D=(x||0)*RAD_PER_DEG;if(y&&typeof y=="object"&&(s=y.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){t.save(),t.translate(e,r),t.rotate(D),t.drawImage(y,-y.width/2,-y.height/2,y.width,y.height),t.restore();return}if(!(isNaN(S)||S<=0)){switch(t.beginPath(),y){default:a?t.ellipse(e,r,a/2,S,0,0,TAU):t.arc(e,r,S,0,TAU),t.closePath();break;case"triangle":d=a?a/2:S,t.moveTo(e+Math.sin(D)*d,r-Math.cos(D)*S),D+=TWO_THIRDS_PI,t.lineTo(e+Math.sin(D)*d,r-Math.cos(D)*S),D+=TWO_THIRDS_PI,t.lineTo(e+Math.sin(D)*d,r-Math.cos(D)*S),t.closePath();break;case"rectRounded":f=S*.516,u=S-f,o=Math.cos(D+QUARTER_PI)*u,p=Math.cos(D+QUARTER_PI)*(a?a/2-f:u),l=Math.sin(D+QUARTER_PI)*u,v=Math.sin(D+QUARTER_PI)*(a?a/2-f:u),t.arc(e-p,r-l,f,D-PI,D-HALF_PI),t.arc(e+v,r-o,f,D-HALF_PI,D),t.arc(e+p,r+l,f,D,D+HALF_PI),t.arc(e-v,r+o,f,D+HALF_PI,D+PI),t.closePath();break;case"rect":if(!x){u=Math.SQRT1_2*S,d=a?a/2:u,t.rect(e-d,r-u,2*d,2*u);break}D+=QUARTER_PI;case"rectRot":p=Math.cos(D)*(a?a/2:S),o=Math.cos(D)*S,l=Math.sin(D)*S,v=Math.sin(D)*(a?a/2:S),t.moveTo(e-p,r-l),t.lineTo(e+v,r-o),t.lineTo(e+p,r+l),t.lineTo(e-v,r+o),t.closePath();break;case"crossRot":D+=QUARTER_PI;case"cross":p=Math.cos(D)*(a?a/2:S),o=Math.cos(D)*S,l=Math.sin(D)*S,v=Math.sin(D)*(a?a/2:S),t.moveTo(e-p,r-l),t.lineTo(e+p,r+l),t.moveTo(e+v,r-o),t.lineTo(e-v,r+o);break;case"star":p=Math.cos(D)*(a?a/2:S),o=Math.cos(D)*S,l=Math.sin(D)*S,v=Math.sin(D)*(a?a/2:S),t.moveTo(e-p,r-l),t.lineTo(e+p,r+l),t.moveTo(e+v,r-o),t.lineTo(e-v,r+o),D+=QUARTER_PI,p=Math.cos(D)*(a?a/2:S),o=Math.cos(D)*S,l=Math.sin(D)*S,v=Math.sin(D)*(a?a/2:S),t.moveTo(e-p,r-l),t.lineTo(e+p,r+l),t.moveTo(e+v,r-o),t.lineTo(e-v,r+o);break;case"line":o=a?a/2:Math.cos(D)*S,l=Math.sin(D)*S,t.moveTo(e-o,r-l),t.lineTo(e+o,r+l);break;case"dash":t.moveTo(e,r),t.lineTo(e+Math.cos(D)*(a?a/2:S),r+Math.sin(D)*S);break;case!1:t.closePath();break}t.fill(),n.borderWidth>0&&t.stroke()}}function _isPointInArea(t,n,e){return e=e||.5,!n||t&&t.x>n.left-e&&t.x<n.right+e&&t.y>n.top-e&&t.y<n.bottom+e}function clipArea(t,n){t.save(),t.beginPath(),t.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),t.clip()}function unclipArea(t){t.restore()}function _steppedLineTo(t,n,e,r,a){if(!n)return t.lineTo(e.x,e.y);if(a==="middle"){const s=(n.x+e.x)/2;t.lineTo(s,n.y),t.lineTo(s,e.y)}else a==="after"!=!!r?t.lineTo(n.x,e.y):t.lineTo(e.x,n.y);t.lineTo(e.x,e.y)}function _bezierCurveTo(t,n,e,r){if(!n)return t.lineTo(e.x,e.y);t.bezierCurveTo(r?n.cp1x:n.cp2x,r?n.cp1y:n.cp2y,r?e.cp2x:e.cp1x,r?e.cp2y:e.cp1y,e.x,e.y)}function setRenderOpts(t,n){n.translation&&t.translate(n.translation[0],n.translation[1]),isNullOrUndef(n.rotation)||t.rotate(n.rotation),n.color&&(t.fillStyle=n.color),n.textAlign&&(t.textAlign=n.textAlign),n.textBaseline&&(t.textBaseline=n.textBaseline)}function decorateText(t,n,e,r,a){if(a.strikethrough||a.underline){const s=t.measureText(r),o=n-s.actualBoundingBoxLeft,l=n+s.actualBoundingBoxRight,u=e-s.actualBoundingBoxAscent,f=e+s.actualBoundingBoxDescent,d=a.strikethrough?(u+f)/2:f;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=a.decorationWidth||2,t.moveTo(o,d),t.lineTo(l,d),t.stroke()}}function drawBackdrop(t,n){const e=t.fillStyle;t.fillStyle=n.color,t.fillRect(n.left,n.top,n.width,n.height),t.fillStyle=e}function renderText(t,n,e,r,a,s={}){const o=isArray(n)?n:[n],l=s.strokeWidth>0&&s.strokeColor!=="";let u,f;for(t.save(),t.font=a.string,setRenderOpts(t,s),u=0;u<o.length;++u)f=o[u],s.backdrop&&drawBackdrop(t,s.backdrop),l&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),isNullOrUndef(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(f,e,r,s.maxWidth)),t.fillText(f,e,r,s.maxWidth),decorateText(t,e,r,f,s),r+=Number(a.lineHeight);t.restore()}function addRoundedRectPath(t,n){const{x:e,y:r,w:a,h:s,radius:o}=n;t.arc(e+o.topLeft,r+o.topLeft,o.topLeft,1.5*PI,PI,!0),t.lineTo(e,r+s-o.bottomLeft),t.arc(e+o.bottomLeft,r+s-o.bottomLeft,o.bottomLeft,PI,HALF_PI,!0),t.lineTo(e+a-o.bottomRight,r+s),t.arc(e+a-o.bottomRight,r+s-o.bottomRight,o.bottomRight,HALF_PI,0,!0),t.lineTo(e+a,r+o.topRight),t.arc(e+a-o.topRight,r+o.topRight,o.topRight,0,-HALF_PI,!0),t.lineTo(e+o.topLeft,r)}const LINE_HEIGHT=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,FONT_STYLE=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function toLineHeight(t,n){const e=(""+t).match(LINE_HEIGHT);if(!e||e[1]==="normal")return n*1.2;switch(t=+e[2],e[3]){case"px":return t;case"%":t/=100;break}return n*t}const numberOrZero=t=>+t||0;function _readValueToProps(t,n){const e={},r=isObject(n),a=r?Object.keys(n):n,s=isObject(t)?r?o=>valueOrDefault(t[o],t[n[o]]):o=>t[o]:()=>t;for(const o of a)e[o]=numberOrZero(s(o));return e}function toTRBL(t){return _readValueToProps(t,{top:"y",right:"x",bottom:"y",left:"x"})}function toTRBLCorners(t){return _readValueToProps(t,["topLeft","topRight","bottomLeft","bottomRight"])}function toPadding(t){const n=toTRBL(t);return n.width=n.left+n.right,n.height=n.top+n.bottom,n}function toFont(t,n){t=t||{},n=n||defaults.font;let e=valueOrDefault(t.size,n.size);typeof e=="string"&&(e=parseInt(e,10));let r=valueOrDefault(t.style,n.style);r&&!(""+r).match(FONT_STYLE)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const a={family:valueOrDefault(t.family,n.family),lineHeight:toLineHeight(valueOrDefault(t.lineHeight,n.lineHeight),e),size:e,style:r,weight:valueOrDefault(t.weight,n.weight),string:""};return a.string=toFontString(a),a}function resolve(t,n,e,r){let a,s,o;for(a=0,s=t.length;a<s;++a)if(o=t[a],o!==void 0&&o!==void 0)return o}function _addGrace(t,n,e){const{min:r,max:a}=t,s=toDimension(n,(a-r)/2),o=(l,u)=>e&&l===0?0:l+u;return{min:o(r,-Math.abs(s)),max:o(a,s)}}function createContext(t,n){return Object.assign(Object.create(t),n)}function _createResolver(t,n=[""],e,r,a=()=>t[0]){const s=e||t;typeof r>"u"&&(r=_resolve("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:r,_getTarget:a,override:l=>_createResolver([l,...t],n,s,r)};return new Proxy(o,{deleteProperty(l,u){return delete l[u],delete l._keys,delete t[0][u],!0},get(l,u){return _cached(l,u,()=>_resolveWithPrefixes(u,n,t,l))},getOwnPropertyDescriptor(l,u){return Reflect.getOwnPropertyDescriptor(l._scopes[0],u)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(l,u){return getKeysFromAllScopes(l).includes(u)},ownKeys(l){return getKeysFromAllScopes(l)},set(l,u,f){const d=l._storage||(l._storage=a());return l[u]=d[u]=f,delete l._keys,!0}})}function _attachContext(t,n,e,r){const a={_cacheable:!1,_proxy:t,_context:n,_subProxy:e,_stack:new Set,_descriptors:_descriptors(t,r),setContext:s=>_attachContext(t,s,e,r),override:s=>_attachContext(t.override(s),n,e,r)};return new Proxy(a,{deleteProperty(s,o){return delete s[o],delete t[o],!0},get(s,o,l){return _cached(s,o,()=>_resolveWithContext(s,o,l))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(s,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(s,o,l){return t[o]=l,delete s[o],!0}})}function _descriptors(t,n={scriptable:!0,indexable:!0}){const{_scriptable:e=n.scriptable,_indexable:r=n.indexable,_allKeys:a=n.allKeys}=t;return{allKeys:a,scriptable:e,indexable:r,isScriptable:isFunction(e)?e:()=>e,isIndexable:isFunction(r)?r:()=>r}}const readKey=(t,n)=>t?t+_capitalize(n):n,needsSubResolver=(t,n)=>isObject(n)&&t!=="adapters"&&(Object.getPrototypeOf(n)===null||n.constructor===Object);function _cached(t,n,e){if(Object.prototype.hasOwnProperty.call(t,n)||n==="constructor")return t[n];const r=e();return t[n]=r,r}function _resolveWithContext(t,n,e){const{_proxy:r,_context:a,_subProxy:s,_descriptors:o}=t;let l=r[n];return isFunction(l)&&o.isScriptable(n)&&(l=_resolveScriptable(n,l,t,e)),isArray(l)&&l.length&&(l=_resolveArray(n,l,t,o.isIndexable)),needsSubResolver(n,l)&&(l=_attachContext(l,a,s&&s[n],o)),l}function _resolveScriptable(t,n,e,r){const{_proxy:a,_context:s,_subProxy:o,_stack:l}=e;if(l.has(t))throw new Error("Recursion detected: "+Array.from(l).join("->")+"->"+t);l.add(t);let u=n(s,o||r);return l.delete(t),needsSubResolver(t,u)&&(u=createSubResolver(a._scopes,a,t,u)),u}function _resolveArray(t,n,e,r){const{_proxy:a,_context:s,_subProxy:o,_descriptors:l}=e;if(typeof s.index<"u"&&r(t))return n[s.index%n.length];if(isObject(n[0])){const u=n,f=a._scopes.filter(d=>d!==u);n=[];for(const d of u){const p=createSubResolver(f,a,t,d);n.push(_attachContext(p,s,o&&o[t],l))}}return n}function resolveFallback(t,n,e){return isFunction(t)?t(n,e):t}const getScope=(t,n)=>t===!0?n:typeof t=="string"?resolveObjectKey(n,t):void 0;function addScopes(t,n,e,r,a){for(const s of n){const o=getScope(e,s);if(o){t.add(o);const l=resolveFallback(o._fallback,e,a);if(typeof l<"u"&&l!==e&&l!==r)return l}else if(o===!1&&typeof r<"u"&&e!==r)return null}return!1}function createSubResolver(t,n,e,r){const a=n._rootScopes,s=resolveFallback(n._fallback,e,r),o=[...t,...a],l=new Set;l.add(r);let u=addScopesFromKey(l,o,e,s||e,r);return u===null||typeof s<"u"&&s!==e&&(u=addScopesFromKey(l,o,s,u,r),u===null)?!1:_createResolver(Array.from(l),[""],a,s,()=>subGetTarget(n,e,r))}function addScopesFromKey(t,n,e,r,a){for(;e;)e=addScopes(t,n,e,r,a);return e}function subGetTarget(t,n,e){const r=t._getTarget();n in r||(r[n]={});const a=r[n];return isArray(a)&&isObject(e)?e:a||{}}function _resolveWithPrefixes(t,n,e,r){let a;for(const s of n)if(a=_resolve(readKey(s,t),e),typeof a<"u")return needsSubResolver(t,a)?createSubResolver(e,r,t,a):a}function _resolve(t,n){for(const e of n){if(!e)continue;const r=e[t];if(typeof r<"u")return r}}function getKeysFromAllScopes(t){let n=t._keys;return n||(n=t._keys=resolveKeysFromAllScopes(t._scopes)),n}function resolveKeysFromAllScopes(t){const n=new Set;for(const e of t)for(const r of Object.keys(e).filter(a=>!a.startsWith("_")))n.add(r);return Array.from(n)}function _parseObjectDataRadialScale(t,n,e,r){const{iScale:a}=t,{key:s="r"}=this._parsing,o=new Array(r);let l,u,f,d;for(l=0,u=r;l<u;++l)f=l+e,d=n[f],o[l]={r:a.parse(resolveObjectKey(d,s),f)};return o}const EPSILON=Number.EPSILON||1e-14,getPoint=(t,n)=>n<t.length&&!t[n].skip&&t[n],getValueAxis=t=>t==="x"?"y":"x";function splineCurve(t,n,e,r){const a=t.skip?n:t,s=n,o=e.skip?n:e,l=distanceBetweenPoints(s,a),u=distanceBetweenPoints(o,s);let f=l/(l+u),d=u/(l+u);f=isNaN(f)?0:f,d=isNaN(d)?0:d;const p=r*f,v=r*d;return{previous:{x:s.x-p*(o.x-a.x),y:s.y-p*(o.y-a.y)},next:{x:s.x+v*(o.x-a.x),y:s.y+v*(o.y-a.y)}}}function monotoneAdjust(t,n,e){const r=t.length;let a,s,o,l,u,f=getPoint(t,0);for(let d=0;d<r-1;++d)if(u=f,f=getPoint(t,d+1),!(!u||!f)){if(almostEquals(n[d],0,EPSILON)){e[d]=e[d+1]=0;continue}a=e[d]/n[d],s=e[d+1]/n[d],l=Math.pow(a,2)+Math.pow(s,2),!(l<=9)&&(o=3/Math.sqrt(l),e[d]=a*o*n[d],e[d+1]=s*o*n[d])}}function monotoneCompute(t,n,e="x"){const r=getValueAxis(e),a=t.length;let s,o,l,u=getPoint(t,0);for(let f=0;f<a;++f){if(o=l,l=u,u=getPoint(t,f+1),!l)continue;const d=l[e],p=l[r];o&&(s=(d-o[e])/3,l[`cp1${e}`]=d-s,l[`cp1${r}`]=p-s*n[f]),u&&(s=(u[e]-d)/3,l[`cp2${e}`]=d+s,l[`cp2${r}`]=p+s*n[f])}}function splineCurveMonotone(t,n="x"){const e=getValueAxis(n),r=t.length,a=Array(r).fill(0),s=Array(r);let o,l,u,f=getPoint(t,0);for(o=0;o<r;++o)if(l=u,u=f,f=getPoint(t,o+1),!!u){if(f){const d=f[n]-u[n];a[o]=d!==0?(f[e]-u[e])/d:0}s[o]=l?f?sign(a[o-1])!==sign(a[o])?0:(a[o-1]+a[o])/2:a[o-1]:a[o]}monotoneAdjust(t,a,s),monotoneCompute(t,s,n)}function capControlPoint(t,n,e){return Math.max(Math.min(t,e),n)}function capBezierPoints(t,n){let e,r,a,s,o,l=_isPointInArea(t[0],n);for(e=0,r=t.length;e<r;++e)o=s,s=l,l=e<r-1&&_isPointInArea(t[e+1],n),s&&(a=t[e],o&&(a.cp1x=capControlPoint(a.cp1x,n.left,n.right),a.cp1y=capControlPoint(a.cp1y,n.top,n.bottom)),l&&(a.cp2x=capControlPoint(a.cp2x,n.left,n.right),a.cp2y=capControlPoint(a.cp2y,n.top,n.bottom)))}function _updateBezierControlPoints(t,n,e,r,a){let s,o,l,u;if(n.spanGaps&&(t=t.filter(f=>!f.skip)),n.cubicInterpolationMode==="monotone")splineCurveMonotone(t,a);else{let f=r?t[t.length-1]:t[0];for(s=0,o=t.length;s<o;++s)l=t[s],u=splineCurve(f,l,t[Math.min(s+1,o-(r?0:1))%o],n.tension),l.cp1x=u.previous.x,l.cp1y=u.previous.y,l.cp2x=u.next.x,l.cp2y=u.next.y,f=l}n.capBezierPoints&&capBezierPoints(t,e)}function _isDomSupported(){return typeof window<"u"&&typeof document<"u"}function _getParentNode(t){let n=t.parentNode;return n&&n.toString()==="[object ShadowRoot]"&&(n=n.host),n}function parseMaxStyle(t,n,e){let r;return typeof t=="string"?(r=parseInt(t,10),t.indexOf("%")!==-1&&(r=r/100*n.parentNode[e])):r=t,r}const getComputedStyle$1=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function getStyle(t,n){return getComputedStyle$1(t).getPropertyValue(n)}const positions=["top","right","bottom","left"];function getPositionedStyle(t,n,e){const r={};e=e?"-"+e:"";for(let a=0;a<4;a++){const s=positions[a];r[s]=parseFloat(t[n+"-"+s+e])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const useOffsetPos=(t,n,e)=>(t>0||n>0)&&(!e||!e.shadowRoot);function getCanvasPosition(t,n){const e=t.touches,r=e&&e.length?e[0]:t,{offsetX:a,offsetY:s}=r;let o=!1,l,u;if(useOffsetPos(a,s,t.target))l=a,u=s;else{const f=n.getBoundingClientRect();l=r.clientX-f.left,u=r.clientY-f.top,o=!0}return{x:l,y:u,box:o}}function getRelativePosition(t,n){if("native"in t)return t;const{canvas:e,currentDevicePixelRatio:r}=n,a=getComputedStyle$1(e),s=a.boxSizing==="border-box",o=getPositionedStyle(a,"padding"),l=getPositionedStyle(a,"border","width"),{x:u,y:f,box:d}=getCanvasPosition(t,e),p=o.left+(d&&l.left),v=o.top+(d&&l.top);let{width:y,height:x}=n;return s&&(y-=o.width+l.width,x-=o.height+l.height),{x:Math.round((u-p)/y*e.width/r),y:Math.round((f-v)/x*e.height/r)}}function getContainerSize(t,n,e){let r,a;if(n===void 0||e===void 0){const s=t&&_getParentNode(t);if(!s)n=t.clientWidth,e=t.clientHeight;else{const o=s.getBoundingClientRect(),l=getComputedStyle$1(s),u=getPositionedStyle(l,"border","width"),f=getPositionedStyle(l,"padding");n=o.width-f.width-u.width,e=o.height-f.height-u.height,r=parseMaxStyle(l.maxWidth,s,"clientWidth"),a=parseMaxStyle(l.maxHeight,s,"clientHeight")}}return{width:n,height:e,maxWidth:r||INFINITY,maxHeight:a||INFINITY}}const round1=t=>Math.round(t*10)/10;function getMaximumSize(t,n,e,r){const a=getComputedStyle$1(t),s=getPositionedStyle(a,"margin"),o=parseMaxStyle(a.maxWidth,t,"clientWidth")||INFINITY,l=parseMaxStyle(a.maxHeight,t,"clientHeight")||INFINITY,u=getContainerSize(t,n,e);let{width:f,height:d}=u;if(a.boxSizing==="content-box"){const v=getPositionedStyle(a,"border","width"),y=getPositionedStyle(a,"padding");f-=y.width+v.width,d-=y.height+v.height}return f=Math.max(0,f-s.width),d=Math.max(0,r?f/r:d-s.height),f=round1(Math.min(f,o,u.maxWidth)),d=round1(Math.min(d,l,u.maxHeight)),f&&!d&&(d=round1(f/2)),(n!==void 0||e!==void 0)&&r&&u.height&&d>u.height&&(d=u.height,f=round1(Math.floor(d*r))),{width:f,height:d}}function retinaScale(t,n,e){const r=n||1,a=round1(t.height*r),s=round1(t.width*r);t.height=round1(t.height),t.width=round1(t.width);const o=t.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==r||o.height!==a||o.width!==s?(t.currentDevicePixelRatio=r,o.height=a,o.width=s,t.ctx.setTransform(r,0,0,r,0,0),!0):!1}const supportsEventListenerOptions=(function(){let t=!1;try{const n={get passive(){return t=!0,!1}};_isDomSupported()&&(window.addEventListener("test",null,n),window.removeEventListener("test",null,n))}catch{}return t})();function readUsedSize(t,n){const e=getStyle(t,n),r=e&&e.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function _pointInLine(t,n,e,r){return{x:t.x+e*(n.x-t.x),y:t.y+e*(n.y-t.y)}}function _steppedInterpolation(t,n,e,r){return{x:t.x+e*(n.x-t.x),y:r==="middle"?e<.5?t.y:n.y:r==="after"?e<1?t.y:n.y:e>0?n.y:t.y}}function _bezierInterpolation(t,n,e,r){const a={x:t.cp2x,y:t.cp2y},s={x:n.cp1x,y:n.cp1y},o=_pointInLine(t,a,e),l=_pointInLine(a,s,e),u=_pointInLine(s,n,e),f=_pointInLine(o,l,e),d=_pointInLine(l,u,e);return _pointInLine(f,d,e)}const getRightToLeftAdapter=function(t,n){return{x(e){return t+t+n-e},setWidth(e){n=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,r){return e-r},leftForLtr(e,r){return e-r}}},getLeftToRightAdapter=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,n){return t+n},leftForLtr(t,n){return t}}};function getRtlAdapter(t,n,e){return t?getRightToLeftAdapter(n,e):getLeftToRightAdapter()}function overrideTextDirection(t,n){let e,r;(n==="ltr"||n==="rtl")&&(e=t.canvas.style,r=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",n,"important"),t.prevTextDirection=r)}function restoreTextDirection(t,n){n!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",n[0],n[1]))}function propertyFn(t){return t==="angle"?{between:_angleBetween,compare:_angleDiff,normalize:_normalizeAngle}:{between:_isBetween,compare:(n,e)=>n-e,normalize:n=>n}}function normalizeSegment({start:t,end:n,count:e,loop:r,style:a}){return{start:t%e,end:n%e,loop:r&&(n-t+1)%e===0,style:a}}function getSegment(t,n,e){const{property:r,start:a,end:s}=e,{between:o,normalize:l}=propertyFn(r),u=n.length;let{start:f,end:d,loop:p}=t,v,y;if(p){for(f+=u,d+=u,v=0,y=u;v<y&&o(l(n[f%u][r]),a,s);++v)f--,d--;f%=u,d%=u}return d<f&&(d+=u),{start:f,end:d,loop:p,style:t.style}}function _boundSegment(t,n,e){if(!e)return[t];const{property:r,start:a,end:s}=e,o=n.length,{compare:l,between:u,normalize:f}=propertyFn(r),{start:d,end:p,loop:v,style:y}=getSegment(t,n,e),x=[];let S=!1,D=null,A,I,W;const N=()=>u(a,W,A)&&l(a,W)!==0,U=()=>l(s,A)===0||u(s,W,A),J=()=>S||N(),m=()=>!S||U();for(let ne=d,ie=d;ne<=p;++ne)I=n[ne%o],!I.skip&&(A=f(I[r]),A!==W&&(S=u(A,a,s),D===null&&J()&&(D=l(A,a)===0?ne:ie),D!==null&&m()&&(x.push(normalizeSegment({start:D,end:ne,loop:v,count:o,style:y})),D=null),ie=ne,W=A));return D!==null&&x.push(normalizeSegment({start:D,end:p,loop:v,count:o,style:y})),x}function _boundSegments(t,n){const e=[],r=t.segments;for(let a=0;a<r.length;a++){const s=_boundSegment(r[a],t.points,n);s.length&&e.push(...s)}return e}function findStartAndEnd(t,n,e,r){let a=0,s=n-1;if(e&&!r)for(;a<n&&!t[a].skip;)a++;for(;a<n&&t[a].skip;)a++;for(a%=n,e&&(s+=a);s>a&&t[s%n].skip;)s--;return s%=n,{start:a,end:s}}function solidSegments(t,n,e,r){const a=t.length,s=[];let o=n,l=t[n],u;for(u=n+1;u<=e;++u){const f=t[u%a];f.skip||f.stop?l.skip||(r=!1,s.push({start:n%a,end:(u-1)%a,loop:r}),n=o=f.stop?u:null):(o=u,l.skip&&(n=u)),l=f}return o!==null&&s.push({start:n%a,end:o%a,loop:r}),s}function _computeSegments(t,n){const e=t.points,r=t.options.spanGaps,a=e.length;if(!a)return[];const s=!!t._loop,{start:o,end:l}=findStartAndEnd(e,a,s,r);if(r===!0)return splitByStyles(t,[{start:o,end:l,loop:s}],e,n);const u=l<o?l+a:l,f=!!t._fullLoop&&o===0&&l===a-1;return splitByStyles(t,solidSegments(e,o,u,f),e,n)}function splitByStyles(t,n,e,r){return!r||!r.setContext||!e?n:doSplitByStyles(t,n,e,r)}function doSplitByStyles(t,n,e,r){const a=t._chart.getContext(),s=readStyle(t.options),{_datasetIndex:o,options:{spanGaps:l}}=t,u=e.length,f=[];let d=s,p=n[0].start,v=p;function y(x,S,D,A){const I=l?-1:1;if(x!==S){for(x+=u;e[x%u].skip;)x-=I;for(;e[S%u].skip;)S+=I;x%u!==S%u&&(f.push({start:x%u,end:S%u,loop:D,style:A}),d=A,p=S%u)}}for(const x of n){p=l?p:x.start;let S=e[p%u],D;for(v=p+1;v<=x.end;v++){const A=e[v%u];D=readStyle(r.setContext(createContext(a,{type:"segment",p0:S,p1:A,p0DataIndex:(v-1)%u,p1DataIndex:v%u,datasetIndex:o}))),styleChanged(D,d)&&y(p,v-1,x.loop,d),S=A,d=D}p<v-1&&y(p,v-1,x.loop,d)}return f}function readStyle(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function styleChanged(t,n){if(!n)return!1;const e=[],r=function(a,s){return isPatternOrGradient(s)?(e.includes(s)||e.push(s),e.indexOf(s)):s};return JSON.stringify(t,r)!==JSON.stringify(n,r)}function getSizeForArea(t,n,e){return t.options.clip?t[e]:n[e]}function getDatasetArea(t,n){const{xScale:e,yScale:r}=t;return e&&r?{left:getSizeForArea(e,n,"left"),right:getSizeForArea(e,n,"right"),top:getSizeForArea(r,n,"top"),bottom:getSizeForArea(r,n,"bottom")}:n}function getDatasetClipArea(t,n){const e=n._clip;if(e.disabled)return!1;const r=getDatasetArea(n,t.chartArea);return{left:e.left===!1?0:r.left-(e.left===!0?0:e.left),right:e.right===!1?t.width:r.right+(e.right===!0?0:e.right),top:e.top===!1?0:r.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?t.height:r.bottom+(e.bottom===!0?0:e.bottom)}}class Animator{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(n,e,r,a){const s=e.listeners[a],o=e.duration;s.forEach(l=>l({chart:n,initial:e.initial,numSteps:o,currentStep:Math.min(r-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=requestAnimFrame.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(n=Date.now()){let e=0;this._charts.forEach((r,a)=>{if(!r.running||!r.items.length)return;const s=r.items;let o=s.length-1,l=!1,u;for(;o>=0;--o)u=s[o],u._active?(u._total>r.duration&&(r.duration=u._total),u.tick(n),l=!0):(s[o]=s[s.length-1],s.pop());l&&(a.draw(),this._notify(a,r,n,"progress")),s.length||(r.running=!1,this._notify(a,r,n,"complete"),r.initial=!1),e+=s.length}),this._lastDate=n,e===0&&(this._running=!1)}_getAnims(n){const e=this._charts;let r=e.get(n);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(n,r)),r}listen(n,e,r){this._getAnims(n).listeners[e].push(r)}add(n,e){!e||!e.length||this._getAnims(n).items.push(...e)}has(n){return this._getAnims(n).items.length>0}start(n){const e=this._charts.get(n);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((r,a)=>Math.max(r,a._duration),0),this._refresh())}running(n){if(!this._running)return!1;const e=this._charts.get(n);return!(!e||!e.running||!e.items.length)}stop(n){const e=this._charts.get(n);if(!e||!e.items.length)return;const r=e.items;let a=r.length-1;for(;a>=0;--a)r[a].cancel();e.items=[],this._notify(n,e,Date.now(),"complete")}remove(n){return this._charts.delete(n)}}var animator=new Animator;const transparent="transparent",interpolators={boolean(t,n,e){return e>.5?n:t},color(t,n,e){const r=color(t||transparent),a=r.valid&&color(n||transparent);return a&&a.valid?a.mix(r,e).hexString():n},number(t,n,e){return t+(n-t)*e}};class Animation{constructor(n,e,r,a){const s=e[r];a=resolve([n.to,a,s,n.from]);const o=resolve([n.from,s,a]);this._active=!0,this._fn=n.fn||interpolators[n.type||typeof o],this._easing=effects[n.easing]||effects.linear,this._start=Math.floor(Date.now()+(n.delay||0)),this._duration=this._total=Math.floor(n.duration),this._loop=!!n.loop,this._target=e,this._prop=r,this._from=o,this._to=a,this._promises=void 0}active(){return this._active}update(n,e,r){if(this._active){this._notify(!1);const a=this._target[this._prop],s=r-this._start,o=this._duration-s;this._start=r,this._duration=Math.floor(Math.max(o,n.duration)),this._total+=s,this._loop=!!n.loop,this._to=resolve([n.to,e,a,n.from]),this._from=resolve([n.from,a,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(n){const e=n-this._start,r=this._duration,a=this._prop,s=this._from,o=this._loop,l=this._to;let u;if(this._active=s!==l&&(o||e<r),!this._active){this._target[a]=l,this._notify(!0);return}if(e<0){this._target[a]=s;return}u=e/r%2,u=o&&u>1?2-u:u,u=this._easing(Math.min(1,Math.max(0,u))),this._target[a]=this._fn(s,l,u)}wait(){const n=this._promises||(this._promises=[]);return new Promise((e,r)=>{n.push({res:e,rej:r})})}_notify(n){const e=n?"res":"rej",r=this._promises||[];for(let a=0;a<r.length;a++)r[a][e]()}}class Animations{constructor(n,e){this._chart=n,this._properties=new Map,this.configure(e)}configure(n){if(!isObject(n))return;const e=Object.keys(defaults.animation),r=this._properties;Object.getOwnPropertyNames(n).forEach(a=>{const s=n[a];if(!isObject(s))return;const o={};for(const l of e)o[l]=s[l];(isArray(s.properties)&&s.properties||[a]).forEach(l=>{(l===a||!r.has(l))&&r.set(l,o)})})}_animateOptions(n,e){const r=e.options,a=resolveTargetOptions(n,r);if(!a)return[];const s=this._createAnimations(a,r);return r.$shared&&awaitAll(n.options.$animations,r).then(()=>{n.options=r},()=>{}),s}_createAnimations(n,e){const r=this._properties,a=[],s=n.$animations||(n.$animations={}),o=Object.keys(e),l=Date.now();let u;for(u=o.length-1;u>=0;--u){const f=o[u];if(f.charAt(0)==="$")continue;if(f==="options"){a.push(...this._animateOptions(n,e));continue}const d=e[f];let p=s[f];const v=r.get(f);if(p)if(v&&p.active()){p.update(v,d,l);continue}else p.cancel();if(!v||!v.duration){n[f]=d;continue}s[f]=p=new Animation(v,n,f,d),a.push(p)}return a}update(n,e){if(this._properties.size===0){Object.assign(n,e);return}const r=this._createAnimations(n,e);if(r.length)return animator.add(this._chart,r),!0}}function awaitAll(t,n){const e=[],r=Object.keys(n);for(let a=0;a<r.length;a++){const s=t[r[a]];s&&s.active()&&e.push(s.wait())}return Promise.all(e)}function resolveTargetOptions(t,n){if(!n)return;let e=t.options;if(!e){t.options=n;return}return e.$shared&&(t.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function scaleClip(t,n){const e=t&&t.options||{},r=e.reverse,a=e.min===void 0?n:0,s=e.max===void 0?n:0;return{start:r?s:a,end:r?a:s}}function defaultClip(t,n,e){if(e===!1)return!1;const r=scaleClip(t,e),a=scaleClip(n,e);return{top:a.end,right:r.end,bottom:a.start,left:r.start}}function toClip(t){let n,e,r,a;return isObject(t)?(n=t.top,e=t.right,r=t.bottom,a=t.left):n=e=r=a=t,{top:n,right:e,bottom:r,left:a,disabled:t===!1}}function getSortedDatasetIndices(t,n){const e=[],r=t._getSortedDatasetMetas(n);let a,s;for(a=0,s=r.length;a<s;++a)e.push(r[a].index);return e}function applyStack(t,n,e,r={}){const a=t.keys,s=r.mode==="single";let o,l,u,f;if(n===null)return;let d=!1;for(o=0,l=a.length;o<l;++o){if(u=+a[o],u===e){if(d=!0,r.all)continue;break}f=t.values[u],isNumberFinite(f)&&(s||n===0||sign(n)===sign(f))&&(n+=f)}return!d&&!r.all?0:n}function convertObjectDataToArray(t,n){const{iScale:e,vScale:r}=n,a=e.axis==="x"?"x":"y",s=r.axis==="x"?"x":"y",o=Object.keys(t),l=new Array(o.length);let u,f,d;for(u=0,f=o.length;u<f;++u)d=o[u],l[u]={[a]:d,[s]:t[d]};return l}function isStacked(t,n){const e=t&&t.options.stacked;return e||e===void 0&&n.stack!==void 0}function getStackKey(t,n,e){return`${t.id}.${n.id}.${e.stack||e.type}`}function getUserBounds(t){const{min:n,max:e,minDefined:r,maxDefined:a}=t.getUserBounds();return{min:r?n:Number.NEGATIVE_INFINITY,max:a?e:Number.POSITIVE_INFINITY}}function getOrCreateStack(t,n,e){const r=t[n]||(t[n]={});return r[e]||(r[e]={})}function getLastIndexInStack(t,n,e,r){for(const a of n.getMatchingVisibleMetas(r).reverse()){const s=t[a.index];if(e&&s>0||!e&&s<0)return a.index}return null}function updateStacks(t,n){const{chart:e,_cachedMeta:r}=t,a=e._stacks||(e._stacks={}),{iScale:s,vScale:o,index:l}=r,u=s.axis,f=o.axis,d=getStackKey(s,o,r),p=n.length;let v;for(let y=0;y<p;++y){const x=n[y],{[u]:S,[f]:D}=x,A=x._stacks||(x._stacks={});v=A[f]=getOrCreateStack(a,d,S),v[l]=D,v._top=getLastIndexInStack(v,o,!0,r.type),v._bottom=getLastIndexInStack(v,o,!1,r.type);const I=v._visualValues||(v._visualValues={});I[l]=D}}function getFirstScaleId(t,n){const e=t.scales;return Object.keys(e).filter(r=>e[r].axis===n).shift()}function createDatasetContext(t,n){return createContext(t,{active:!1,dataset:void 0,datasetIndex:n,index:n,mode:"default",type:"dataset"})}function createDataContext(t,n,e){return createContext(t,{active:!1,dataIndex:n,parsed:void 0,raw:void 0,element:e,index:n,mode:"default",type:"data"})}function clearStacks(t,n){const e=t.controller.index,r=t.vScale&&t.vScale.axis;if(r){n=n||t._parsed;for(const a of n){const s=a._stacks;if(!s||s[r]===void 0||s[r][e]===void 0)return;delete s[r][e],s[r]._visualValues!==void 0&&s[r]._visualValues[e]!==void 0&&delete s[r]._visualValues[e]}}}const isDirectUpdateMode=t=>t==="reset"||t==="none",cloneIfNotShared=(t,n)=>n?t:Object.assign({},t),createStack=(t,n,e)=>t&&!n.hidden&&n._stacked&&{keys:getSortedDatasetIndices(e,!0),values:null};class DatasetController{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(n,e){this.chart=n,this._ctx=n.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const n=this._cachedMeta;this.configure(),this.linkScales(),n._stacked=isStacked(n.vScale,n),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(n){this.index!==n&&clearStacks(this._cachedMeta),this.index=n}linkScales(){const n=this.chart,e=this._cachedMeta,r=this.getDataset(),a=(p,v,y,x)=>p==="x"?v:p==="r"?x:y,s=e.xAxisID=valueOrDefault(r.xAxisID,getFirstScaleId(n,"x")),o=e.yAxisID=valueOrDefault(r.yAxisID,getFirstScaleId(n,"y")),l=e.rAxisID=valueOrDefault(r.rAxisID,getFirstScaleId(n,"r")),u=e.indexAxis,f=e.iAxisID=a(u,s,o,l),d=e.vAxisID=a(u,o,s,l);e.xScale=this.getScaleForId(s),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(l),e.iScale=this.getScaleForId(f),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(n){return this.chart.scales[n]}_getOtherScale(n){const e=this._cachedMeta;return n===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const n=this._cachedMeta;this._data&&unlistenArrayEvents(this._data,this),n._stacked&&clearStacks(n)}_dataCheck(){const n=this.getDataset(),e=n.data||(n.data=[]),r=this._data;if(isObject(e)){const a=this._cachedMeta;this._data=convertObjectDataToArray(e,a)}else if(r!==e){if(r){unlistenArrayEvents(r,this);const a=this._cachedMeta;clearStacks(a),a._parsed=[]}e&&Object.isExtensible(e)&&listenArrayEvents(e,this),this._syncList=[],this._data=e}}addElements(){const n=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(n.dataset=new this.datasetElementType)}buildOrUpdateElements(n){const e=this._cachedMeta,r=this.getDataset();let a=!1;this._dataCheck();const s=e._stacked;e._stacked=isStacked(e.vScale,e),e.stack!==r.stack&&(a=!0,clearStacks(e),e.stack=r.stack),this._resyncElements(n),(a||s!==e._stacked)&&(updateStacks(this,e._parsed),e._stacked=isStacked(e.vScale,e))}configure(){const n=this.chart.config,e=n.datasetScopeKeys(this._type),r=n.getOptionScopes(this.getDataset(),e,!0);this.options=n.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(n,e){const{_cachedMeta:r,_data:a}=this,{iScale:s,_stacked:o}=r,l=s.axis;let u=n===0&&e===a.length?!0:r._sorted,f=n>0&&r._parsed[n-1],d,p,v;if(this._parsing===!1)r._parsed=a,r._sorted=!0,v=a;else{isArray(a[n])?v=this.parseArrayData(r,a,n,e):isObject(a[n])?v=this.parseObjectData(r,a,n,e):v=this.parsePrimitiveData(r,a,n,e);const y=()=>p[l]===null||f&&p[l]<f[l];for(d=0;d<e;++d)r._parsed[d+n]=p=v[d],u&&(y()&&(u=!1),f=p);r._sorted=u}o&&updateStacks(this,v)}parsePrimitiveData(n,e,r,a){const{iScale:s,vScale:o}=n,l=s.axis,u=o.axis,f=s.getLabels(),d=s===o,p=new Array(a);let v,y,x;for(v=0,y=a;v<y;++v)x=v+r,p[v]={[l]:d||s.parse(f[x],x),[u]:o.parse(e[x],x)};return p}parseArrayData(n,e,r,a){const{xScale:s,yScale:o}=n,l=new Array(a);let u,f,d,p;for(u=0,f=a;u<f;++u)d=u+r,p=e[d],l[u]={x:s.parse(p[0],d),y:o.parse(p[1],d)};return l}parseObjectData(n,e,r,a){const{xScale:s,yScale:o}=n,{xAxisKey:l="x",yAxisKey:u="y"}=this._parsing,f=new Array(a);let d,p,v,y;for(d=0,p=a;d<p;++d)v=d+r,y=e[v],f[d]={x:s.parse(resolveObjectKey(y,l),v),y:o.parse(resolveObjectKey(y,u),v)};return f}getParsed(n){return this._cachedMeta._parsed[n]}getDataElement(n){return this._cachedMeta.data[n]}applyStack(n,e,r){const a=this.chart,s=this._cachedMeta,o=e[n.axis],l={keys:getSortedDatasetIndices(a,!0),values:e._stacks[n.axis]._visualValues};return applyStack(l,o,s.index,{mode:r})}updateRangeFromParsed(n,e,r,a){const s=r[e.axis];let o=s===null?NaN:s;const l=a&&r._stacks[e.axis];a&&l&&(a.values=l,o=applyStack(a,s,this._cachedMeta.index)),n.min=Math.min(n.min,o),n.max=Math.max(n.max,o)}getMinMax(n,e){const r=this._cachedMeta,a=r._parsed,s=r._sorted&&n===r.iScale,o=a.length,l=this._getOtherScale(n),u=createStack(e,r,this.chart),f={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:p}=getUserBounds(l);let v,y;function x(){y=a[v];const S=y[l.axis];return!isNumberFinite(y[n.axis])||d>S||p<S}for(v=0;v<o&&!(!x()&&(this.updateRangeFromParsed(f,n,y,u),s));++v);if(s){for(v=o-1;v>=0;--v)if(!x()){this.updateRangeFromParsed(f,n,y,u);break}}return f}getAllParsedValues(n){const e=this._cachedMeta._parsed,r=[];let a,s,o;for(a=0,s=e.length;a<s;++a)o=e[a][n.axis],isNumberFinite(o)&&r.push(o);return r}getMaxOverflow(){return!1}getLabelAndValue(n){const e=this._cachedMeta,r=e.iScale,a=e.vScale,s=this.getParsed(n);return{label:r?""+r.getLabelForValue(s[r.axis]):"",value:a?""+a.getLabelForValue(s[a.axis]):""}}_update(n){const e=this._cachedMeta;this.update(n||"default"),e._clip=toClip(valueOrDefault(this.options.clip,defaultClip(e.xScale,e.yScale,this.getMaxOverflow())))}update(n){}draw(){const n=this._ctx,e=this.chart,r=this._cachedMeta,a=r.data||[],s=e.chartArea,o=[],l=this._drawStart||0,u=this._drawCount||a.length-l,f=this.options.drawActiveElementsOnTop;let d;for(r.dataset&&r.dataset.draw(n,s,l,u),d=l;d<l+u;++d){const p=a[d];p.hidden||(p.active&&f?o.push(p):p.draw(n,s))}for(d=0;d<o.length;++d)o[d].draw(n,s)}getStyle(n,e){const r=e?"active":"default";return n===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(n||0,r)}getContext(n,e,r){const a=this.getDataset();let s;if(n>=0&&n<this._cachedMeta.data.length){const o=this._cachedMeta.data[n];s=o.$context||(o.$context=createDataContext(this.getContext(),n,o)),s.parsed=this.getParsed(n),s.raw=a.data[n],s.index=s.dataIndex=n}else s=this.$context||(this.$context=createDatasetContext(this.chart.getContext(),this.index)),s.dataset=a,s.index=s.datasetIndex=this.index;return s.active=!!e,s.mode=r,s}resolveDatasetElementOptions(n){return this._resolveElementOptions(this.datasetElementType.id,n)}resolveDataElementOptions(n,e){return this._resolveElementOptions(this.dataElementType.id,e,n)}_resolveElementOptions(n,e="default",r){const a=e==="active",s=this._cachedDataOpts,o=n+"-"+e,l=s[o],u=this.enableOptionSharing&&defined(r);if(l)return cloneIfNotShared(l,u);const f=this.chart.config,d=f.datasetElementScopeKeys(this._type,n),p=a?[`${n}Hover`,"hover",n,""]:[n,""],v=f.getOptionScopes(this.getDataset(),d),y=Object.keys(defaults.elements[n]),x=()=>this.getContext(r,a,e),S=f.resolveNamedOptions(v,y,x,p);return S.$shared&&(S.$shared=u,s[o]=Object.freeze(cloneIfNotShared(S,u))),S}_resolveAnimations(n,e,r){const a=this.chart,s=this._cachedDataOpts,o=`animation-${e}`,l=s[o];if(l)return l;let u;if(a.options.animation!==!1){const d=this.chart.config,p=d.datasetAnimationScopeKeys(this._type,e),v=d.getOptionScopes(this.getDataset(),p);u=d.createResolver(v,this.getContext(n,r,e))}const f=new Animations(a,u&&u.animations);return u&&u._cacheable&&(s[o]=Object.freeze(f)),f}getSharedOptions(n){if(n.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},n))}includeOptions(n,e){return!e||isDirectUpdateMode(n)||this.chart._animationsDisabled}_getSharedOptions(n,e){const r=this.resolveDataElementOptions(n,e),a=this._sharedOptions,s=this.getSharedOptions(r),o=this.includeOptions(e,s)||s!==a;return this.updateSharedOptions(s,e,r),{sharedOptions:s,includeOptions:o}}updateElement(n,e,r,a){isDirectUpdateMode(a)?Object.assign(n,r):this._resolveAnimations(e,a).update(n,r)}updateSharedOptions(n,e,r){n&&!isDirectUpdateMode(e)&&this._resolveAnimations(void 0,e).update(n,r)}_setStyle(n,e,r,a){n.active=a;const s=this.getStyle(e,a);this._resolveAnimations(e,r,a).update(n,{options:!a&&this.getSharedOptions(s)||s})}removeHoverStyle(n,e,r){this._setStyle(n,r,"active",!1)}setHoverStyle(n,e,r){this._setStyle(n,r,"active",!0)}_removeDatasetHoverStyle(){const n=this._cachedMeta.dataset;n&&this._setStyle(n,void 0,"active",!1)}_setDatasetHoverStyle(){const n=this._cachedMeta.dataset;n&&this._setStyle(n,void 0,"active",!0)}_resyncElements(n){const e=this._data,r=this._cachedMeta.data;for(const[l,u,f]of this._syncList)this[l](u,f);this._syncList=[];const a=r.length,s=e.length,o=Math.min(s,a);o&&this.parse(0,o),s>a?this._insertElements(a,s-a,n):s<a&&this._removeElements(s,a-s)}_insertElements(n,e,r=!0){const a=this._cachedMeta,s=a.data,o=n+e;let l;const u=f=>{for(f.length+=e,l=f.length-1;l>=o;l--)f[l]=f[l-e]};for(u(s),l=n;l<o;++l)s[l]=new this.dataElementType;this._parsing&&u(a._parsed),this.parse(n,e),r&&this.updateElements(s,n,e,"reset")}updateElements(n,e,r,a){}_removeElements(n,e){const r=this._cachedMeta;if(this._parsing){const a=r._parsed.splice(n,e);r._stacked&&clearStacks(r,a)}r.data.splice(n,e)}_sync(n){if(this._parsing)this._syncList.push(n);else{const[e,r,a]=n;this[e](r,a)}this.chart._dataChanges.push([this.index,...n])}_onDataPush(){const n=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-n,n])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(n,e){e&&this._sync(["_removeElements",n,e]);const r=arguments.length-2;r&&this._sync(["_insertElements",n,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function getAllScaleValues(t,n){if(!t._cache.$bar){const e=t.getMatchingVisibleMetas(n);let r=[];for(let a=0,s=e.length;a<s;a++)r=r.concat(e[a].controller.getAllParsedValues(t));t._cache.$bar=_arrayUnique(r.sort((a,s)=>a-s))}return t._cache.$bar}function computeMinSampleSize(t){const n=t.iScale,e=getAllScaleValues(n,t.type);let r=n._length,a,s,o,l;const u=()=>{o===32767||o===-32768||(defined(l)&&(r=Math.min(r,Math.abs(o-l)||r)),l=o)};for(a=0,s=e.length;a<s;++a)o=n.getPixelForValue(e[a]),u();for(l=void 0,a=0,s=n.ticks.length;a<s;++a)o=n.getPixelForTick(a),u();return r}function computeFitCategoryTraits(t,n,e,r){const a=e.barThickness;let s,o;return isNullOrUndef(a)?(s=n.min*e.categoryPercentage,o=e.barPercentage):(s=a*r,o=1),{chunk:s/r,ratio:o,start:n.pixels[t]-s/2}}function computeFlexCategoryTraits(t,n,e,r){const a=n.pixels,s=a[t];let o=t>0?a[t-1]:null,l=t<a.length-1?a[t+1]:null;const u=e.categoryPercentage;o===null&&(o=s-(l===null?n.end-n.start:l-s)),l===null&&(l=s+s-o);const f=s-(s-Math.min(o,l))/2*u;return{chunk:Math.abs(l-o)/2*u/r,ratio:e.barPercentage,start:f}}function parseFloatBar(t,n,e,r){const a=e.parse(t[0],r),s=e.parse(t[1],r),o=Math.min(a,s),l=Math.max(a,s);let u=o,f=l;Math.abs(o)>Math.abs(l)&&(u=l,f=o),n[e.axis]=f,n._custom={barStart:u,barEnd:f,start:a,end:s,min:o,max:l}}function parseValue(t,n,e,r){return isArray(t)?parseFloatBar(t,n,e,r):n[e.axis]=e.parse(t,r),n}function parseArrayOrPrimitive(t,n,e,r){const a=t.iScale,s=t.vScale,o=a.getLabels(),l=a===s,u=[];let f,d,p,v;for(f=e,d=e+r;f<d;++f)v=n[f],p={},p[a.axis]=l||a.parse(o[f],f),u.push(parseValue(v,p,s,f));return u}function isFloatBar(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function barSign(t,n,e){return t!==0?sign(t):(n.isHorizontal()?1:-1)*(n.min>=e?1:-1)}function borderProps(t){let n,e,r,a,s;return t.horizontal?(n=t.base>t.x,e="left",r="right"):(n=t.base<t.y,e="bottom",r="top"),n?(a="end",s="start"):(a="start",s="end"),{start:e,end:r,reverse:n,top:a,bottom:s}}function setBorderSkipped(t,n,e,r){let a=n.borderSkipped;const s={};if(!a){t.borderSkipped=s;return}if(a===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:l,reverse:u,top:f,bottom:d}=borderProps(t);a==="middle"&&e&&(t.enableBorderRadius=!0,(e._top||0)===r?a=f:(e._bottom||0)===r?a=d:(s[parseEdge(d,o,l,u)]=!0,a=f)),s[parseEdge(a,o,l,u)]=!0,t.borderSkipped=s}function parseEdge(t,n,e,r){return r?(t=swap(t,n,e),t=startEnd(t,e,n)):t=startEnd(t,n,e),t}function swap(t,n,e){return t===n?e:t===e?n:t}function startEnd(t,n,e){return t==="start"?n:t==="end"?e:t}function setInflateAmount(t,{inflateAmount:n},e){t.inflateAmount=n==="auto"?e===1?.33:0:n}class BarController extends DatasetController{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(n,e,r,a){return parseArrayOrPrimitive(n,e,r,a)}parseArrayData(n,e,r,a){return parseArrayOrPrimitive(n,e,r,a)}parseObjectData(n,e,r,a){const{iScale:s,vScale:o}=n,{xAxisKey:l="x",yAxisKey:u="y"}=this._parsing,f=s.axis==="x"?l:u,d=o.axis==="x"?l:u,p=[];let v,y,x,S;for(v=r,y=r+a;v<y;++v)S=e[v],x={},x[s.axis]=s.parse(resolveObjectKey(S,f),v),p.push(parseValue(resolveObjectKey(S,d),x,o,v));return p}updateRangeFromParsed(n,e,r,a){super.updateRangeFromParsed(n,e,r,a);const s=r._custom;s&&e===this._cachedMeta.vScale&&(n.min=Math.min(n.min,s.min),n.max=Math.max(n.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(n){const e=this._cachedMeta,{iScale:r,vScale:a}=e,s=this.getParsed(n),o=s._custom,l=isFloatBar(o)?"["+o.start+", "+o.end+"]":""+a.getLabelForValue(s[a.axis]);return{label:""+r.getLabelForValue(s[r.axis]),value:l}}initialize(){this.enableOptionSharing=!0,super.initialize();const n=this._cachedMeta;n.stack=this.getDataset().stack}update(n){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,n)}updateElements(n,e,r,a){const s=a==="reset",{index:o,_cachedMeta:{vScale:l}}=this,u=l.getBasePixel(),f=l.isHorizontal(),d=this._getRuler(),{sharedOptions:p,includeOptions:v}=this._getSharedOptions(e,a);for(let y=e;y<e+r;y++){const x=this.getParsed(y),S=s||isNullOrUndef(x[l.axis])?{base:u,head:u}:this._calculateBarValuePixels(y),D=this._calculateBarIndexPixels(y,d),A=(x._stacks||{})[l.axis],I={horizontal:f,base:S.base,enableBorderRadius:!A||isFloatBar(x._custom)||o===A._top||o===A._bottom,x:f?S.head:D.center,y:f?D.center:S.head,height:f?D.size:Math.abs(S.size),width:f?Math.abs(S.size):D.size};v&&(I.options=p||this.resolveDataElementOptions(y,n[y].active?"active":a));const W=I.options||n[y].options;setBorderSkipped(I,W,A,o),setInflateAmount(I,W,d.ratio),this.updateElement(n[y],y,I,a)}}_getStacks(n,e){const{iScale:r}=this._cachedMeta,a=r.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),s=r.options.stacked,o=[],l=this._cachedMeta.controller.getParsed(e),u=l&&l[r.axis],f=d=>{const p=d._parsed.find(y=>y[r.axis]===u),v=p&&p[d.vScale.axis];if(isNullOrUndef(v)||isNaN(v))return!0};for(const d of a)if(!(e!==void 0&&f(d))&&((s===!1||o.indexOf(d.stack)===-1||s===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===n))break;return o.length||o.push(void 0),o}_getStackCount(n){return this._getStacks(void 0,n).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const n=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(n).filter(r=>n[r].axis===e).shift()}_getAxis(){const n={},e=this.getFirstScaleIdForIndexAxis();for(const r of this.chart.data.datasets)n[valueOrDefault(this.chart.options.indexAxis==="x"?r.xAxisID:r.yAxisID,e)]=!0;return Object.keys(n)}_getStackIndex(n,e,r){const a=this._getStacks(n,r),s=e!==void 0?a.indexOf(e):-1;return s===-1?a.length-1:s}_getRuler(){const n=this.options,e=this._cachedMeta,r=e.iScale,a=[];let s,o;for(s=0,o=e.data.length;s<o;++s)a.push(r.getPixelForValue(this.getParsed(s)[r.axis],s));const l=n.barThickness;return{min:l||computeMinSampleSize(e),pixels:a,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:n.grouped,ratio:l?1:n.categoryPercentage*n.barPercentage}}_calculateBarValuePixels(n){const{_cachedMeta:{vScale:e,_stacked:r,index:a},options:{base:s,minBarLength:o}}=this,l=s||0,u=this.getParsed(n),f=u._custom,d=isFloatBar(f);let p=u[e.axis],v=0,y=r?this.applyStack(e,u,r):p,x,S;y!==p&&(v=y-p,y=p),d&&(p=f.barStart,y=f.barEnd-f.barStart,p!==0&&sign(p)!==sign(f.barEnd)&&(v=0),v+=p);const D=!isNullOrUndef(s)&&!d?s:v;let A=e.getPixelForValue(D);if(this.chart.getDataVisibility(n)?x=e.getPixelForValue(v+y):x=A,S=x-A,Math.abs(S)<o){S=barSign(S,e,l)*o,p===l&&(A-=S/2);const I=e.getPixelForDecimal(0),W=e.getPixelForDecimal(1),N=Math.min(I,W),U=Math.max(I,W);A=Math.max(Math.min(A,U),N),x=A+S,r&&!d&&(u._stacks[e.axis]._visualValues[a]=e.getValueForPixel(x)-e.getValueForPixel(A))}if(A===e.getPixelForValue(l)){const I=sign(S)*e.getLineWidthForValue(l)/2;A+=I,S-=I}return{size:S,base:A,head:x,center:x+S/2}}_calculateBarIndexPixels(n,e){const r=e.scale,a=this.options,s=a.skipNull,o=valueOrDefault(a.maxBarThickness,1/0);let l,u;const f=this._getAxisCount();if(e.grouped){const d=s?this._getStackCount(n):e.stackCount,p=a.barThickness==="flex"?computeFlexCategoryTraits(n,e,a,d*f):computeFitCategoryTraits(n,e,a,d*f),v=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,y=this._getAxis().indexOf(valueOrDefault(v,this.getFirstScaleIdForIndexAxis())),x=this._getStackIndex(this.index,this._cachedMeta.stack,s?n:void 0)+y;l=p.start+p.chunk*x+p.chunk/2,u=Math.min(o,p.chunk*p.ratio)}else l=r.getPixelForValue(this.getParsed(n)[r.axis],n),u=Math.min(o,e.min*e.ratio);return{base:l-u/2,head:l+u/2,center:l,size:u}}draw(){const n=this._cachedMeta,e=n.vScale,r=n.data,a=r.length;let s=0;for(;s<a;++s)this.getParsed(s)[e.axis]!==null&&!r[s].hidden&&r[s].draw(this._ctx)}}class BubbleController extends DatasetController{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(n,e,r,a){const s=super.parsePrimitiveData(n,e,r,a);for(let o=0;o<s.length;o++)s[o]._custom=this.resolveDataElementOptions(o+r).radius;return s}parseArrayData(n,e,r,a){const s=super.parseArrayData(n,e,r,a);for(let o=0;o<s.length;o++){const l=e[r+o];s[o]._custom=valueOrDefault(l[2],this.resolveDataElementOptions(o+r).radius)}return s}parseObjectData(n,e,r,a){const s=super.parseObjectData(n,e,r,a);for(let o=0;o<s.length;o++){const l=e[r+o];s[o]._custom=valueOrDefault(l&&l.r&&+l.r,this.resolveDataElementOptions(o+r).radius)}return s}getMaxOverflow(){const n=this._cachedMeta.data;let e=0;for(let r=n.length-1;r>=0;--r)e=Math.max(e,n[r].size(this.resolveDataElementOptions(r))/2);return e>0&&e}getLabelAndValue(n){const e=this._cachedMeta,r=this.chart.data.labels||[],{xScale:a,yScale:s}=e,o=this.getParsed(n),l=a.getLabelForValue(o.x),u=s.getLabelForValue(o.y),f=o._custom;return{label:r[n]||"",value:"("+l+", "+u+(f?", "+f:"")+")"}}update(n){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,n)}updateElements(n,e,r,a){const s=a==="reset",{iScale:o,vScale:l}=this._cachedMeta,{sharedOptions:u,includeOptions:f}=this._getSharedOptions(e,a),d=o.axis,p=l.axis;for(let v=e;v<e+r;v++){const y=n[v],x=!s&&this.getParsed(v),S={},D=S[d]=s?o.getPixelForDecimal(.5):o.getPixelForValue(x[d]),A=S[p]=s?l.getBasePixel():l.getPixelForValue(x[p]);S.skip=isNaN(D)||isNaN(A),f&&(S.options=u||this.resolveDataElementOptions(v,y.active?"active":a),s&&(S.options.radius=0)),this.updateElement(y,v,S,a)}}resolveDataElementOptions(n,e){const r=this.getParsed(n);let a=super.resolveDataElementOptions(n,e);a.$shared&&(a=Object.assign({},a,{$shared:!1}));const s=a.radius;return e!=="active"&&(a.radius=0),a.radius+=valueOrDefault(r&&r._custom,s),a}}function getRatioAndOffset(t,n,e){let r=1,a=1,s=0,o=0;if(n<TAU){const l=t,u=l+n,f=Math.cos(l),d=Math.sin(l),p=Math.cos(u),v=Math.sin(u),y=(W,N,U)=>_angleBetween(W,l,u,!0)?1:Math.max(N,N*e,U,U*e),x=(W,N,U)=>_angleBetween(W,l,u,!0)?-1:Math.min(N,N*e,U,U*e),S=y(0,f,p),D=y(HALF_PI,d,v),A=x(PI,f,p),I=x(PI+HALF_PI,d,v);r=(S-A)/2,a=(D-I)/2,s=-(S+A)/2,o=-(D+I)/2}return{ratioX:r,ratioY:a,offsetX:s,offsetY:o}}class DoughnutController extends DatasetController{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:n=>n!=="spacing",_indexable:n=>n!=="spacing"&&!n.startsWith("borderDash")&&!n.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(n){const e=n.data,{labels:{pointStyle:r,textAlign:a,color:s,useBorderRadius:o,borderRadius:l}}=n.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((u,f)=>{const p=n.getDatasetMeta(0).controller.getStyle(f);return{text:u,fillStyle:p.backgroundColor,fontColor:s,hidden:!n.getDataVisibility(f),lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:p.borderWidth,strokeStyle:p.borderColor,textAlign:a,pointStyle:r,borderRadius:o&&(l||p.borderRadius),index:f}}):[]}},onClick(n,e,r){r.chart.toggleDataVisibility(e.index),r.chart.update()}}}};constructor(n,e){super(n,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(n,e){const r=this.getDataset().data,a=this._cachedMeta;if(this._parsing===!1)a._parsed=r;else{let s=u=>+r[u];if(isObject(r[n])){const{key:u="value"}=this._parsing;s=f=>+resolveObjectKey(r[f],u)}let o,l;for(o=n,l=n+e;o<l;++o)a._parsed[o]=s(o)}}_getRotation(){return toRadians(this.options.rotation-90)}_getCircumference(){return toRadians(this.options.circumference)}_getRotationExtents(){let n=TAU,e=-TAU;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const a=this.chart.getDatasetMeta(r).controller,s=a._getRotation(),o=a._getCircumference();n=Math.min(n,s),e=Math.max(e,s+o)}return{rotation:n,circumference:e-n}}update(n){const e=this.chart,{chartArea:r}=e,a=this._cachedMeta,s=a.data,o=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,l=Math.max((Math.min(r.width,r.height)-o)/2,0),u=Math.min(toPercentage(this.options.cutout,l),1),f=this._getRingWeight(this.index),{circumference:d,rotation:p}=this._getRotationExtents(),{ratioX:v,ratioY:y,offsetX:x,offsetY:S}=getRatioAndOffset(p,d,u),D=(r.width-o)/v,A=(r.height-o)/y,I=Math.max(Math.min(D,A)/2,0),W=toDimension(this.options.radius,I),N=Math.max(W*u,0),U=(W-N)/this._getVisibleDatasetWeightTotal();this.offsetX=x*W,this.offsetY=S*W,a.total=this.calculateTotal(),this.outerRadius=W-U*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-U*f,0),this.updateElements(s,0,s.length,n)}_circumference(n,e){const r=this.options,a=this._cachedMeta,s=this._getCircumference();return e&&r.animation.animateRotate||!this.chart.getDataVisibility(n)||a._parsed[n]===null||a.data[n].hidden?0:this.calculateCircumference(a._parsed[n]*s/TAU)}updateElements(n,e,r,a){const s=a==="reset",o=this.chart,l=o.chartArea,f=o.options.animation,d=(l.left+l.right)/2,p=(l.top+l.bottom)/2,v=s&&f.animateScale,y=v?0:this.innerRadius,x=v?0:this.outerRadius,{sharedOptions:S,includeOptions:D}=this._getSharedOptions(e,a);let A=this._getRotation(),I;for(I=0;I<e;++I)A+=this._circumference(I,s);for(I=e;I<e+r;++I){const W=this._circumference(I,s),N=n[I],U={x:d+this.offsetX,y:p+this.offsetY,startAngle:A,endAngle:A+W,circumference:W,outerRadius:x,innerRadius:y};D&&(U.options=S||this.resolveDataElementOptions(I,N.active?"active":a)),A+=W,this.updateElement(N,I,U,a)}}calculateTotal(){const n=this._cachedMeta,e=n.data;let r=0,a;for(a=0;a<e.length;a++){const s=n._parsed[a];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(a)&&!e[a].hidden&&(r+=Math.abs(s))}return r}calculateCircumference(n){const e=this._cachedMeta.total;return e>0&&!isNaN(n)?TAU*(Math.abs(n)/e):0}getLabelAndValue(n){const e=this._cachedMeta,r=this.chart,a=r.data.labels||[],s=formatNumber(e._parsed[n],r.options.locale);return{label:a[n]||"",value:s}}getMaxBorderWidth(n){let e=0;const r=this.chart;let a,s,o,l,u;if(!n){for(a=0,s=r.data.datasets.length;a<s;++a)if(r.isDatasetVisible(a)){o=r.getDatasetMeta(a),n=o.data,l=o.controller;break}}if(!n)return 0;for(a=0,s=n.length;a<s;++a)u=l.resolveDataElementOptions(a),u.borderAlign!=="inner"&&(e=Math.max(e,u.borderWidth||0,u.hoverBorderWidth||0));return e}getMaxOffset(n){let e=0;for(let r=0,a=n.length;r<a;++r){const s=this.resolveDataElementOptions(r);e=Math.max(e,s.offset||0,s.hoverOffset||0)}return e}_getRingWeightOffset(n){let e=0;for(let r=0;r<n;++r)this.chart.isDatasetVisible(r)&&(e+=this._getRingWeight(r));return e}_getRingWeight(n){return Math.max(valueOrDefault(this.chart.data.datasets[n].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class LineController extends DatasetController{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(n){const e=this._cachedMeta,{dataset:r,data:a=[],_dataset:s}=e,o=this.chart._animationsDisabled;let{start:l,count:u}=_getStartAndCountOfVisiblePoints(e,a,o);this._drawStart=l,this._drawCount=u,_scaleRangesChanged(e)&&(l=0,u=a.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!s._decimated,r.points=a;const f=this.resolveDatasetElementOptions(n);this.options.showLine||(f.borderWidth=0),f.segment=this.options.segment,this.updateElement(r,void 0,{animated:!o,options:f},n),this.updateElements(a,l,u,n)}updateElements(n,e,r,a){const s=a==="reset",{iScale:o,vScale:l,_stacked:u,_dataset:f}=this._cachedMeta,{sharedOptions:d,includeOptions:p}=this._getSharedOptions(e,a),v=o.axis,y=l.axis,{spanGaps:x,segment:S}=this.options,D=isNumber(x)?x:Number.POSITIVE_INFINITY,A=this.chart._animationsDisabled||s||a==="none",I=e+r,W=n.length;let N=e>0&&this.getParsed(e-1);for(let U=0;U<W;++U){const J=n[U],m=A?J:{};if(U<e||U>=I){m.skip=!0;continue}const ne=this.getParsed(U),ie=isNullOrUndef(ne[y]),ge=m[v]=o.getPixelForValue(ne[v],U),ve=m[y]=s||ie?l.getBasePixel():l.getPixelForValue(u?this.applyStack(l,ne,u):ne[y],U);m.skip=isNaN(ge)||isNaN(ve)||ie,m.stop=U>0&&Math.abs(ne[v]-N[v])>D,S&&(m.parsed=ne,m.raw=f.data[U]),p&&(m.options=d||this.resolveDataElementOptions(U,J.active?"active":a)),A||this.updateElement(J,U,m,a),N=ne}}getMaxOverflow(){const n=this._cachedMeta,e=n.dataset,r=e.options&&e.options.borderWidth||0,a=n.data||[];if(!a.length)return r;const s=a[0].size(this.resolveDataElementOptions(0)),o=a[a.length-1].size(this.resolveDataElementOptions(a.length-1));return Math.max(r,s,o)/2}draw(){const n=this._cachedMeta;n.dataset.updateControlPoints(this.chart.chartArea,n.iScale.axis),super.draw()}}class PolarAreaController extends DatasetController{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(n){const e=n.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:r,color:a}}=n.legend.options;return e.labels.map((s,o)=>{const u=n.getDatasetMeta(0).controller.getStyle(o);return{text:s,fillStyle:u.backgroundColor,strokeStyle:u.borderColor,fontColor:a,lineWidth:u.borderWidth,pointStyle:r,hidden:!n.getDataVisibility(o),index:o}})}return[]}},onClick(n,e,r){r.chart.toggleDataVisibility(e.index),r.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(n,e){super(n,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(n){const e=this._cachedMeta,r=this.chart,a=r.data.labels||[],s=formatNumber(e._parsed[n].r,r.options.locale);return{label:a[n]||"",value:s}}parseObjectData(n,e,r,a){return _parseObjectDataRadialScale.bind(this)(n,e,r,a)}update(n){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,n)}getMinMax(){const n=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return n.data.forEach((r,a)=>{const s=this.getParsed(a).r;!isNaN(s)&&this.chart.getDataVisibility(a)&&(s<e.min&&(e.min=s),s>e.max&&(e.max=s))}),e}_updateRadius(){const n=this.chart,e=n.chartArea,r=n.options,a=Math.min(e.right-e.left,e.bottom-e.top),s=Math.max(a/2,0),o=Math.max(r.cutoutPercentage?s/100*r.cutoutPercentage:1,0),l=(s-o)/n.getVisibleDatasetCount();this.outerRadius=s-l*this.index,this.innerRadius=this.outerRadius-l}updateElements(n,e,r,a){const s=a==="reset",o=this.chart,u=o.options.animation,f=this._cachedMeta.rScale,d=f.xCenter,p=f.yCenter,v=f.getIndexAngle(0)-.5*PI;let y=v,x;const S=360/this.countVisibleElements();for(x=0;x<e;++x)y+=this._computeAngle(x,a,S);for(x=e;x<e+r;x++){const D=n[x];let A=y,I=y+this._computeAngle(x,a,S),W=o.getDataVisibility(x)?f.getDistanceFromCenterForValue(this.getParsed(x).r):0;y=I,s&&(u.animateScale&&(W=0),u.animateRotate&&(A=I=v));const N={x:d,y:p,innerRadius:0,outerRadius:W,startAngle:A,endAngle:I,options:this.resolveDataElementOptions(x,D.active?"active":a)};this.updateElement(D,x,N,a)}}countVisibleElements(){const n=this._cachedMeta;let e=0;return n.data.forEach((r,a)=>{!isNaN(this.getParsed(a).r)&&this.chart.getDataVisibility(a)&&e++}),e}_computeAngle(n,e,r){return this.chart.getDataVisibility(n)?toRadians(this.resolveDataElementOptions(n,e).angle||r):0}}class PieController extends DoughnutController{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}class RadarController extends DatasetController{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(n){const e=this._cachedMeta.vScale,r=this.getParsed(n);return{label:e.getLabels()[n],value:""+e.getLabelForValue(r[e.axis])}}parseObjectData(n,e,r,a){return _parseObjectDataRadialScale.bind(this)(n,e,r,a)}update(n){const e=this._cachedMeta,r=e.dataset,a=e.data||[],s=e.iScale.getLabels();if(r.points=a,n!=="resize"){const o=this.resolveDatasetElementOptions(n);this.options.showLine||(o.borderWidth=0);const l={_loop:!0,_fullLoop:s.length===a.length,options:o};this.updateElement(r,void 0,l,n)}this.updateElements(a,0,a.length,n)}updateElements(n,e,r,a){const s=this._cachedMeta.rScale,o=a==="reset";for(let l=e;l<e+r;l++){const u=n[l],f=this.resolveDataElementOptions(l,u.active?"active":a),d=s.getPointPositionForValue(l,this.getParsed(l).r),p=o?s.xCenter:d.x,v=o?s.yCenter:d.y,y={x:p,y:v,angle:d.angle,skip:isNaN(p)||isNaN(v),options:f};this.updateElement(u,l,y,a)}}}class ScatterController extends DatasetController{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(n){const e=this._cachedMeta,r=this.chart.data.labels||[],{xScale:a,yScale:s}=e,o=this.getParsed(n),l=a.getLabelForValue(o.x),u=s.getLabelForValue(o.y);return{label:r[n]||"",value:"("+l+", "+u+")"}}update(n){const e=this._cachedMeta,{data:r=[]}=e,a=this.chart._animationsDisabled;let{start:s,count:o}=_getStartAndCountOfVisiblePoints(e,r,a);if(this._drawStart=s,this._drawCount=o,_scaleRangesChanged(e)&&(s=0,o=r.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:l,_dataset:u}=e;l._chart=this.chart,l._datasetIndex=this.index,l._decimated=!!u._decimated,l.points=r;const f=this.resolveDatasetElementOptions(n);f.segment=this.options.segment,this.updateElement(l,void 0,{animated:!a,options:f},n)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(r,s,o,n)}addElements(){const{showLine:n}=this.options;!this.datasetElementType&&n&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(n,e,r,a){const s=a==="reset",{iScale:o,vScale:l,_stacked:u,_dataset:f}=this._cachedMeta,d=this.resolveDataElementOptions(e,a),p=this.getSharedOptions(d),v=this.includeOptions(a,p),y=o.axis,x=l.axis,{spanGaps:S,segment:D}=this.options,A=isNumber(S)?S:Number.POSITIVE_INFINITY,I=this.chart._animationsDisabled||s||a==="none";let W=e>0&&this.getParsed(e-1);for(let N=e;N<e+r;++N){const U=n[N],J=this.getParsed(N),m=I?U:{},ne=isNullOrUndef(J[x]),ie=m[y]=o.getPixelForValue(J[y],N),ge=m[x]=s||ne?l.getBasePixel():l.getPixelForValue(u?this.applyStack(l,J,u):J[x],N);m.skip=isNaN(ie)||isNaN(ge)||ne,m.stop=N>0&&Math.abs(J[y]-W[y])>A,D&&(m.parsed=J,m.raw=f.data[N]),v&&(m.options=p||this.resolveDataElementOptions(N,U.active?"active":a)),I||this.updateElement(U,N,m,a),W=J}this.updateSharedOptions(p,a,d)}getMaxOverflow(){const n=this._cachedMeta,e=n.data||[];if(!this.options.showLine){let l=0;for(let u=e.length-1;u>=0;--u)l=Math.max(l,e[u].size(this.resolveDataElementOptions(u))/2);return l>0&&l}const r=n.dataset,a=r.options&&r.options.borderWidth||0;if(!e.length)return a;const s=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(a,s,o)/2}}var controllers=Object.freeze({__proto__:null,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController});function abstract(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class DateAdapterBase{static override(n){Object.assign(DateAdapterBase.prototype,n)}options;constructor(n){this.options=n||{}}init(){}formats(){return abstract()}parse(){return abstract()}format(){return abstract()}add(){return abstract()}diff(){return abstract()}startOf(){return abstract()}endOf(){return abstract()}}var adapters={_date:DateAdapterBase};function binarySearch(t,n,e,r){const{controller:a,data:s,_sorted:o}=t,l=a._cachedMeta.iScale,u=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(l&&n===l.axis&&n!=="r"&&o&&s.length){const f=l._reversePixels?_rlookupByKey:_lookupByKey;if(r){if(a._sharedOptions){const d=s[0],p=typeof d.getRange=="function"&&d.getRange(n);if(p){const v=f(s,n,e-p),y=f(s,n,e+p);return{lo:v.lo,hi:y.hi}}}}else{const d=f(s,n,e);if(u){const{vScale:p}=a._cachedMeta,{_parsed:v}=t,y=v.slice(0,d.lo+1).reverse().findIndex(S=>!isNullOrUndef(S[p.axis]));d.lo-=Math.max(0,y);const x=v.slice(d.hi).findIndex(S=>!isNullOrUndef(S[p.axis]));d.hi+=Math.max(0,x)}return d}}return{lo:0,hi:s.length-1}}function evaluateInteractionItems(t,n,e,r,a){const s=t.getSortedVisibleDatasetMetas(),o=e[n];for(let l=0,u=s.length;l<u;++l){const{index:f,data:d}=s[l],{lo:p,hi:v}=binarySearch(s[l],n,o,a);for(let y=p;y<=v;++y){const x=d[y];x.skip||r(x,f,y)}}}function getDistanceMetricForAxis(t){const n=t.indexOf("x")!==-1,e=t.indexOf("y")!==-1;return function(r,a){const s=n?Math.abs(r.x-a.x):0,o=e?Math.abs(r.y-a.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function getIntersectItems(t,n,e,r,a){const s=[];return!a&&!t.isPointInArea(n)||evaluateInteractionItems(t,e,n,function(l,u,f){!a&&!_isPointInArea(l,t.chartArea,0)||l.inRange(n.x,n.y,r)&&s.push({element:l,datasetIndex:u,index:f})},!0),s}function getNearestRadialItems(t,n,e,r){let a=[];function s(o,l,u){const{startAngle:f,endAngle:d}=o.getProps(["startAngle","endAngle"],r),{angle:p}=getAngleFromPoint(o,{x:n.x,y:n.y});_angleBetween(p,f,d)&&a.push({element:o,datasetIndex:l,index:u})}return evaluateInteractionItems(t,e,n,s),a}function getNearestCartesianItems(t,n,e,r,a,s){let o=[];const l=getDistanceMetricForAxis(e);let u=Number.POSITIVE_INFINITY;function f(d,p,v){const y=d.inRange(n.x,n.y,a);if(r&&!y)return;const x=d.getCenterPoint(a);if(!(!!s||t.isPointInArea(x))&&!y)return;const D=l(n,x);D<u?(o=[{element:d,datasetIndex:p,index:v}],u=D):D===u&&o.push({element:d,datasetIndex:p,index:v})}return evaluateInteractionItems(t,e,n,f),o}function getNearestItems(t,n,e,r,a,s){return!s&&!t.isPointInArea(n)?[]:e==="r"&&!r?getNearestRadialItems(t,n,e,a):getNearestCartesianItems(t,n,e,r,a,s)}function getAxisItems(t,n,e,r,a){const s=[],o=e==="x"?"inXRange":"inYRange";let l=!1;return evaluateInteractionItems(t,e,n,(u,f,d)=>{u[o]&&u[o](n[e],a)&&(s.push({element:u,datasetIndex:f,index:d}),l=l||u.inRange(n.x,n.y,a))}),r&&!l?[]:s}var Interaction={modes:{index(t,n,e,r){const a=getRelativePosition(n,t),s=e.axis||"x",o=e.includeInvisible||!1,l=e.intersect?getIntersectItems(t,a,s,r,o):getNearestItems(t,a,s,!1,r,o),u=[];return l.length?(t.getSortedVisibleDatasetMetas().forEach(f=>{const d=l[0].index,p=f.data[d];p&&!p.skip&&u.push({element:p,datasetIndex:f.index,index:d})}),u):[]},dataset(t,n,e,r){const a=getRelativePosition(n,t),s=e.axis||"xy",o=e.includeInvisible||!1;let l=e.intersect?getIntersectItems(t,a,s,r,o):getNearestItems(t,a,s,!1,r,o);if(l.length>0){const u=l[0].datasetIndex,f=t.getDatasetMeta(u).data;l=[];for(let d=0;d<f.length;++d)l.push({element:f[d],datasetIndex:u,index:d})}return l},point(t,n,e,r){const a=getRelativePosition(n,t),s=e.axis||"xy",o=e.includeInvisible||!1;return getIntersectItems(t,a,s,r,o)},nearest(t,n,e,r){const a=getRelativePosition(n,t),s=e.axis||"xy",o=e.includeInvisible||!1;return getNearestItems(t,a,s,e.intersect,r,o)},x(t,n,e,r){const a=getRelativePosition(n,t);return getAxisItems(t,a,"x",e.intersect,r)},y(t,n,e,r){const a=getRelativePosition(n,t);return getAxisItems(t,a,"y",e.intersect,r)}}};const STATIC_POSITIONS=["left","top","right","bottom"];function filterByPosition(t,n){return t.filter(e=>e.pos===n)}function filterDynamicPositionByAxis(t,n){return t.filter(e=>STATIC_POSITIONS.indexOf(e.pos)===-1&&e.box.axis===n)}function sortByWeight(t,n){return t.sort((e,r)=>{const a=n?r:e,s=n?e:r;return a.weight===s.weight?a.index-s.index:a.weight-s.weight})}function wrapBoxes(t){const n=[];let e,r,a,s,o,l;for(e=0,r=(t||[]).length;e<r;++e)a=t[e],{position:s,options:{stack:o,stackWeight:l=1}}=a,n.push({index:e,box:a,pos:s,horizontal:a.isHorizontal(),weight:a.weight,stack:o&&s+o,stackWeight:l});return n}function buildStacks(t){const n={};for(const e of t){const{stack:r,pos:a,stackWeight:s}=e;if(!r||!STATIC_POSITIONS.includes(a))continue;const o=n[r]||(n[r]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return n}function setLayoutDims(t,n){const e=buildStacks(t),{vBoxMaxWidth:r,hBoxMaxHeight:a}=n;let s,o,l;for(s=0,o=t.length;s<o;++s){l=t[s];const{fullSize:u}=l.box,f=e[l.stack],d=f&&l.stackWeight/f.weight;l.horizontal?(l.width=d?d*r:u&&n.availableWidth,l.height=a):(l.width=r,l.height=d?d*a:u&&n.availableHeight)}return e}function buildLayoutBoxes(t){const n=wrapBoxes(t),e=sortByWeight(n.filter(f=>f.box.fullSize),!0),r=sortByWeight(filterByPosition(n,"left"),!0),a=sortByWeight(filterByPosition(n,"right")),s=sortByWeight(filterByPosition(n,"top"),!0),o=sortByWeight(filterByPosition(n,"bottom")),l=filterDynamicPositionByAxis(n,"x"),u=filterDynamicPositionByAxis(n,"y");return{fullSize:e,leftAndTop:r.concat(s),rightAndBottom:a.concat(u).concat(o).concat(l),chartArea:filterByPosition(n,"chartArea"),vertical:r.concat(a).concat(u),horizontal:s.concat(o).concat(l)}}function getCombinedMax(t,n,e,r){return Math.max(t[e],n[e])+Math.max(t[r],n[r])}function updateMaxPadding(t,n){t.top=Math.max(t.top,n.top),t.left=Math.max(t.left,n.left),t.bottom=Math.max(t.bottom,n.bottom),t.right=Math.max(t.right,n.right)}function updateDims(t,n,e,r){const{pos:a,box:s}=e,o=t.maxPadding;if(!isObject(a)){e.size&&(t[a]-=e.size);const p=r[e.stack]||{size:0,count:1};p.size=Math.max(p.size,e.horizontal?s.height:s.width),e.size=p.size/p.count,t[a]+=e.size}s.getPadding&&updateMaxPadding(o,s.getPadding());const l=Math.max(0,n.outerWidth-getCombinedMax(o,t,"left","right")),u=Math.max(0,n.outerHeight-getCombinedMax(o,t,"top","bottom")),f=l!==t.w,d=u!==t.h;return t.w=l,t.h=u,e.horizontal?{same:f,other:d}:{same:d,other:f}}function handleMaxPadding(t){const n=t.maxPadding;function e(r){const a=Math.max(n[r]-t[r],0);return t[r]+=a,a}t.y+=e("top"),t.x+=e("left"),e("right"),e("bottom")}function getMargins(t,n){const e=n.maxPadding;function r(a){const s={left:0,top:0,right:0,bottom:0};return a.forEach(o=>{s[o]=Math.max(n[o],e[o])}),s}return r(t?["left","right"]:["top","bottom"])}function fitBoxes(t,n,e,r){const a=[];let s,o,l,u,f,d;for(s=0,o=t.length,f=0;s<o;++s){l=t[s],u=l.box,u.update(l.width||n.w,l.height||n.h,getMargins(l.horizontal,n));const{same:p,other:v}=updateDims(n,e,l,r);f|=p&&a.length,d=d||v,u.fullSize||a.push(l)}return f&&fitBoxes(a,n,e,r)||d}function setBoxDims(t,n,e,r,a){t.top=e,t.left=n,t.right=n+r,t.bottom=e+a,t.width=r,t.height=a}function placeBoxes(t,n,e,r){const a=e.padding;let{x:s,y:o}=n;for(const l of t){const u=l.box,f=r[l.stack]||{placed:0,weight:1},d=l.stackWeight/f.weight||1;if(l.horizontal){const p=n.w*d,v=f.size||u.height;defined(f.start)&&(o=f.start),u.fullSize?setBoxDims(u,a.left,o,e.outerWidth-a.right-a.left,v):setBoxDims(u,n.left+f.placed,o,p,v),f.start=o,f.placed+=p,o=u.bottom}else{const p=n.h*d,v=f.size||u.width;defined(f.start)&&(s=f.start),u.fullSize?setBoxDims(u,s,a.top,v,e.outerHeight-a.bottom-a.top):setBoxDims(u,s,n.top+f.placed,v,p),f.start=s,f.placed+=p,s=u.right}}n.x=s,n.y=o}var layouts={addBox(t,n){t.boxes||(t.boxes=[]),n.fullSize=n.fullSize||!1,n.position=n.position||"top",n.weight=n.weight||0,n._layers=n._layers||function(){return[{z:0,draw(e){n.draw(e)}}]},t.boxes.push(n)},removeBox(t,n){const e=t.boxes?t.boxes.indexOf(n):-1;e!==-1&&t.boxes.splice(e,1)},configure(t,n,e){n.fullSize=e.fullSize,n.position=e.position,n.weight=e.weight},update(t,n,e,r){if(!t)return;const a=toPadding(t.options.layout.padding),s=Math.max(n-a.width,0),o=Math.max(e-a.height,0),l=buildLayoutBoxes(t.boxes),u=l.vertical,f=l.horizontal;each(t.boxes,S=>{typeof S.beforeLayout=="function"&&S.beforeLayout()});const d=u.reduce((S,D)=>D.box.options&&D.box.options.display===!1?S:S+1,0)||1,p=Object.freeze({outerWidth:n,outerHeight:e,padding:a,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/d,hBoxMaxHeight:o/2}),v=Object.assign({},a);updateMaxPadding(v,toPadding(r));const y=Object.assign({maxPadding:v,w:s,h:o,x:a.left,y:a.top},a),x=setLayoutDims(u.concat(f),p);fitBoxes(l.fullSize,y,p,x),fitBoxes(u,y,p,x),fitBoxes(f,y,p,x)&&fitBoxes(u,y,p,x),handleMaxPadding(y),placeBoxes(l.leftAndTop,y,p,x),y.x+=y.w,y.y+=y.h,placeBoxes(l.rightAndBottom,y,p,x),t.chartArea={left:y.left,top:y.top,right:y.left+y.w,bottom:y.top+y.h,height:y.h,width:y.w},each(l.chartArea,S=>{const D=S.box;Object.assign(D,t.chartArea),D.update(y.w,y.h,{left:0,top:0,right:0,bottom:0})})}};class BasePlatform{acquireContext(n,e){}releaseContext(n){return!1}addEventListener(n,e,r){}removeEventListener(n,e,r){}getDevicePixelRatio(){return 1}getMaximumSize(n,e,r,a){return e=Math.max(0,e||n.width),r=r||n.height,{width:e,height:Math.max(0,a?Math.floor(e/a):r)}}isAttached(n){return!0}updateConfig(n){}}class BasicPlatform extends BasePlatform{acquireContext(n){return n&&n.getContext&&n.getContext("2d")||null}updateConfig(n){n.options.animation=!1}}const EXPANDO_KEY="$chartjs",EVENT_TYPES={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},isNullOrEmpty=t=>t===null||t==="";function initCanvas(t,n){const e=t.style,r=t.getAttribute("height"),a=t.getAttribute("width");if(t[EXPANDO_KEY]={initial:{height:r,width:a,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",isNullOrEmpty(a)){const s=readUsedSize(t,"width");s!==void 0&&(t.width=s)}if(isNullOrEmpty(r))if(t.style.height==="")t.height=t.width/(n||2);else{const s=readUsedSize(t,"height");s!==void 0&&(t.height=s)}return t}const eventListenerOptions=supportsEventListenerOptions?{passive:!0}:!1;function addListener(t,n,e){t&&t.addEventListener(n,e,eventListenerOptions)}function removeListener(t,n,e){t&&t.canvas&&t.canvas.removeEventListener(n,e,eventListenerOptions)}function fromNativeEvent(t,n){const e=EVENT_TYPES[t.type]||t.type,{x:r,y:a}=getRelativePosition(t,n);return{type:e,chart:n,native:t,x:r!==void 0?r:null,y:a!==void 0?a:null}}function nodeListContains(t,n){for(const e of t)if(e===n||e.contains(n))return!0}function createAttachObserver(t,n,e){const r=t.canvas,a=new MutationObserver(s=>{let o=!1;for(const l of s)o=o||nodeListContains(l.addedNodes,r),o=o&&!nodeListContains(l.removedNodes,r);o&&e()});return a.observe(document,{childList:!0,subtree:!0}),a}function createDetachObserver(t,n,e){const r=t.canvas,a=new MutationObserver(s=>{let o=!1;for(const l of s)o=o||nodeListContains(l.removedNodes,r),o=o&&!nodeListContains(l.addedNodes,r);o&&e()});return a.observe(document,{childList:!0,subtree:!0}),a}const drpListeningCharts=new Map;let oldDevicePixelRatio=0;function onWindowResize(){const t=window.devicePixelRatio;t!==oldDevicePixelRatio&&(oldDevicePixelRatio=t,drpListeningCharts.forEach((n,e)=>{e.currentDevicePixelRatio!==t&&n()}))}function listenDevicePixelRatioChanges(t,n){drpListeningCharts.size||window.addEventListener("resize",onWindowResize),drpListeningCharts.set(t,n)}function unlistenDevicePixelRatioChanges(t){drpListeningCharts.delete(t),drpListeningCharts.size||window.removeEventListener("resize",onWindowResize)}function createResizeObserver(t,n,e){const r=t.canvas,a=r&&_getParentNode(r);if(!a)return;const s=throttled((l,u)=>{const f=a.clientWidth;e(l,u),f<a.clientWidth&&e()},window),o=new ResizeObserver(l=>{const u=l[0],f=u.contentRect.width,d=u.contentRect.height;f===0&&d===0||s(f,d)});return o.observe(a),listenDevicePixelRatioChanges(t,s),o}function releaseObserver(t,n,e){e&&e.disconnect(),n==="resize"&&unlistenDevicePixelRatioChanges(t)}function createProxyAndListen(t,n,e){const r=t.canvas,a=throttled(s=>{t.ctx!==null&&e(fromNativeEvent(s,t))},t);return addListener(r,n,a),a}class DomPlatform extends BasePlatform{acquireContext(n,e){const r=n&&n.getContext&&n.getContext("2d");return r&&r.canvas===n?(initCanvas(n,e),r):null}releaseContext(n){const e=n.canvas;if(!e[EXPANDO_KEY])return!1;const r=e[EXPANDO_KEY].initial;["height","width"].forEach(s=>{const o=r[s];isNullOrUndef(o)?e.removeAttribute(s):e.setAttribute(s,o)});const a=r.style||{};return Object.keys(a).forEach(s=>{e.style[s]=a[s]}),e.width=e.width,delete e[EXPANDO_KEY],!0}addEventListener(n,e,r){this.removeEventListener(n,e);const a=n.$proxies||(n.$proxies={}),o={attach:createAttachObserver,detach:createDetachObserver,resize:createResizeObserver}[e]||createProxyAndListen;a[e]=o(n,e,r)}removeEventListener(n,e){const r=n.$proxies||(n.$proxies={}),a=r[e];if(!a)return;({attach:releaseObserver,detach:releaseObserver,resize:releaseObserver}[e]||removeListener)(n,e,a),r[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(n,e,r,a){return getMaximumSize(n,e,r,a)}isAttached(n){const e=n&&_getParentNode(n);return!!(e&&e.isConnected)}}function _detectPlatform(t){return!_isDomSupported()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?BasicPlatform:DomPlatform}let Element$1=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(n){const{x:e,y:r}=this.getProps(["x","y"],n);return{x:e,y:r}}hasValue(){return isNumber(this.x)&&isNumber(this.y)}getProps(n,e){const r=this.$animations;if(!e||!r)return this;const a={};return n.forEach(s=>{a[s]=r[s]&&r[s].active()?r[s]._to:this[s]}),a}};function autoSkip(t,n){const e=t.options.ticks,r=determineMaxTicks(t),a=Math.min(e.maxTicksLimit||r,r),s=e.major.enabled?getMajorIndices(n):[],o=s.length,l=s[0],u=s[o-1],f=[];if(o>a)return skipMajors(n,f,s,o/a),f;const d=calculateSpacing(s,n,a);if(o>0){let p,v;const y=o>1?Math.round((u-l)/(o-1)):null;for(skip(n,f,d,isNullOrUndef(y)?0:l-y,l),p=0,v=o-1;p<v;p++)skip(n,f,d,s[p],s[p+1]);return skip(n,f,d,u,isNullOrUndef(y)?n.length:u+y),f}return skip(n,f,d),f}function determineMaxTicks(t){const n=t.options.offset,e=t._tickSize(),r=t._length/e+(n?0:1),a=t._maxLength/e;return Math.floor(Math.min(r,a))}function calculateSpacing(t,n,e){const r=getEvenSpacing(t),a=n.length/e;if(!r)return Math.max(a,1);const s=_factorize(r);for(let o=0,l=s.length-1;o<l;o++){const u=s[o];if(u>a)return u}return Math.max(a,1)}function getMajorIndices(t){const n=[];let e,r;for(e=0,r=t.length;e<r;e++)t[e].major&&n.push(e);return n}function skipMajors(t,n,e,r){let a=0,s=e[0],o;for(r=Math.ceil(r),o=0;o<t.length;o++)o===s&&(n.push(t[o]),a++,s=e[a*r])}function skip(t,n,e,r,a){const s=valueOrDefault(r,0),o=Math.min(valueOrDefault(a,t.length),t.length);let l=0,u,f,d;for(e=Math.ceil(e),a&&(u=a-r,e=u/Math.floor(u/e)),d=s;d<0;)l++,d=Math.round(s+l*e);for(f=Math.max(s,0);f<o;f++)f===d&&(n.push(t[f]),l++,d=Math.round(s+l*e))}function getEvenSpacing(t){const n=t.length;let e,r;if(n<2)return!1;for(r=t[0],e=1;e<n;++e)if(t[e]-t[e-1]!==r)return!1;return r}const reverseAlign=t=>t==="left"?"right":t==="right"?"left":t,offsetFromEdge=(t,n,e)=>n==="top"||n==="left"?t[n]+e:t[n]-e,getTicksLimit=(t,n)=>Math.min(n||t,t);function sample(t,n){const e=[],r=t.length/n,a=t.length;let s=0;for(;s<a;s+=r)e.push(t[Math.floor(s)]);return e}function getPixelForGridLine(t,n,e){const r=t.ticks.length,a=Math.min(n,r-1),s=t._startPixel,o=t._endPixel,l=1e-6;let u=t.getPixelForTick(a),f;if(!(e&&(r===1?f=Math.max(u-s,o-u):n===0?f=(t.getPixelForTick(1)-u)/2:f=(u-t.getPixelForTick(a-1))/2,u+=a<n?f:-f,u<s-l||u>o+l)))return u}function garbageCollect(t,n){each(t,e=>{const r=e.gc,a=r.length/2;let s;if(a>n){for(s=0;s<a;++s)delete e.data[r[s]];r.splice(0,a)}})}function getTickMarkLength(t){return t.drawTicks?t.tickLength:0}function getTitleHeight(t,n){if(!t.display)return 0;const e=toFont(t.font,n),r=toPadding(t.padding);return(isArray(t.text)?t.text.length:1)*e.lineHeight+r.height}function createScaleContext(t,n){return createContext(t,{scale:n,type:"scale"})}function createTickContext(t,n,e){return createContext(t,{tick:e,index:n,type:"tick"})}function titleAlign(t,n,e){let r=_toLeftRightCenter(t);return(e&&n!=="right"||!e&&n==="right")&&(r=reverseAlign(r)),r}function titleArgs(t,n,e,r){const{top:a,left:s,bottom:o,right:l,chart:u}=t,{chartArea:f,scales:d}=u;let p=0,v,y,x;const S=o-a,D=l-s;if(t.isHorizontal()){if(y=_alignStartEnd(r,s,l),isObject(e)){const A=Object.keys(e)[0],I=e[A];x=d[A].getPixelForValue(I)+S-n}else e==="center"?x=(f.bottom+f.top)/2+S-n:x=offsetFromEdge(t,e,n);v=l-s}else{if(isObject(e)){const A=Object.keys(e)[0],I=e[A];y=d[A].getPixelForValue(I)-D+n}else e==="center"?y=(f.left+f.right)/2-D+n:y=offsetFromEdge(t,e,n);x=_alignStartEnd(r,o,a),p=e==="left"?-HALF_PI:HALF_PI}return{titleX:y,titleY:x,maxWidth:v,rotation:p}}class Scale extends Element$1{constructor(n){super(),this.id=n.id,this.type=n.type,this.options=void 0,this.ctx=n.ctx,this.chart=n.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(n){this.options=n.setContext(this.getContext()),this.axis=n.axis,this._userMin=this.parse(n.min),this._userMax=this.parse(n.max),this._suggestedMin=this.parse(n.suggestedMin),this._suggestedMax=this.parse(n.suggestedMax)}parse(n,e){return n}getUserBounds(){let{_userMin:n,_userMax:e,_suggestedMin:r,_suggestedMax:a}=this;return n=finiteOrDefault(n,Number.POSITIVE_INFINITY),e=finiteOrDefault(e,Number.NEGATIVE_INFINITY),r=finiteOrDefault(r,Number.POSITIVE_INFINITY),a=finiteOrDefault(a,Number.NEGATIVE_INFINITY),{min:finiteOrDefault(n,r),max:finiteOrDefault(e,a),minDefined:isNumberFinite(n),maxDefined:isNumberFinite(e)}}getMinMax(n){let{min:e,max:r,minDefined:a,maxDefined:s}=this.getUserBounds(),o;if(a&&s)return{min:e,max:r};const l=this.getMatchingVisibleMetas();for(let u=0,f=l.length;u<f;++u)o=l[u].controller.getMinMax(this,n),a||(e=Math.min(e,o.min)),s||(r=Math.max(r,o.max));return e=s&&e>r?r:e,r=a&&e>r?e:r,{min:finiteOrDefault(e,finiteOrDefault(r,e)),max:finiteOrDefault(r,finiteOrDefault(e,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const n=this.chart.data;return this.options.labels||(this.isHorizontal()?n.xLabels:n.yLabels)||n.labels||[]}getLabelItems(n=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(n))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){callback(this.options.beforeUpdate,[this])}update(n,e,r){const{beginAtZero:a,grace:s,ticks:o}=this.options,l=o.sampleSize;this.beforeUpdate(),this.maxWidth=n,this.maxHeight=e,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=_addGrace(this,s,a),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const u=l<this.ticks.length;this._convertTicksToLabels(u?sample(this.ticks,l):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=autoSkip(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),u&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let n=this.options.reverse,e,r;this.isHorizontal()?(e=this.left,r=this.right):(e=this.top,r=this.bottom,n=!n),this._startPixel=e,this._endPixel=r,this._reversePixels=n,this._length=r-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){callback(this.options.afterUpdate,[this])}beforeSetDimensions(){callback(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){callback(this.options.afterSetDimensions,[this])}_callHooks(n){this.chart.notifyPlugins(n,this.getContext()),callback(this.options[n],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){callback(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(n){const e=this.options.ticks;let r,a,s;for(r=0,a=n.length;r<a;r++)s=n[r],s.label=callback(e.callback,[s.value,r,n],this)}afterTickToLabelConversion(){callback(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){callback(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const n=this.options,e=n.ticks,r=getTicksLimit(this.ticks.length,n.ticks.maxTicksLimit),a=e.minRotation||0,s=e.maxRotation;let o=a,l,u,f;if(!this._isVisible()||!e.display||a>=s||r<=1||!this.isHorizontal()){this.labelRotation=a;return}const d=this._getLabelSizes(),p=d.widest.width,v=d.highest.height,y=_limitValue(this.chart.width-p,0,this.maxWidth);l=n.offset?this.maxWidth/r:y/(r-1),p+6>l&&(l=y/(r-(n.offset?.5:1)),u=this.maxHeight-getTickMarkLength(n.grid)-e.padding-getTitleHeight(n.title,this.chart.options.font),f=Math.sqrt(p*p+v*v),o=toDegrees(Math.min(Math.asin(_limitValue((d.highest.height+6)/l,-1,1)),Math.asin(_limitValue(u/f,-1,1))-Math.asin(_limitValue(v/f,-1,1)))),o=Math.max(a,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){callback(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){callback(this.options.beforeFit,[this])}fit(){const n={width:0,height:0},{chart:e,options:{ticks:r,title:a,grid:s}}=this,o=this._isVisible(),l=this.isHorizontal();if(o){const u=getTitleHeight(a,e.options.font);if(l?(n.width=this.maxWidth,n.height=getTickMarkLength(s)+u):(n.height=this.maxHeight,n.width=getTickMarkLength(s)+u),r.display&&this.ticks.length){const{first:f,last:d,widest:p,highest:v}=this._getLabelSizes(),y=r.padding*2,x=toRadians(this.labelRotation),S=Math.cos(x),D=Math.sin(x);if(l){const A=r.mirror?0:D*p.width+S*v.height;n.height=Math.min(this.maxHeight,n.height+A+y)}else{const A=r.mirror?0:S*p.width+D*v.height;n.width=Math.min(this.maxWidth,n.width+A+y)}this._calculatePadding(f,d,D,S)}}this._handleMargins(),l?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=n.height):(this.width=n.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(n,e,r,a){const{ticks:{align:s,padding:o},position:l}=this.options,u=this.labelRotation!==0,f=l!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,p=this.right-this.getPixelForTick(this.ticks.length-1);let v=0,y=0;u?f?(v=a*n.width,y=r*e.height):(v=r*n.height,y=a*e.width):s==="start"?y=e.width:s==="end"?v=n.width:s!=="inner"&&(v=n.width/2,y=e.width/2),this.paddingLeft=Math.max((v-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((y-p+o)*this.width/(this.width-p),0)}else{let d=e.height/2,p=n.height/2;s==="start"?(d=0,p=n.height):s==="end"&&(d=e.height,p=0),this.paddingTop=d+o,this.paddingBottom=p+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){callback(this.options.afterFit,[this])}isHorizontal(){const{axis:n,position:e}=this.options;return e==="top"||e==="bottom"||n==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(n){this.beforeTickToLabelConversion(),this.generateTickLabels(n);let e,r;for(e=0,r=n.length;e<r;e++)isNullOrUndef(n[e].label)&&(n.splice(e,1),r--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let n=this._labelSizes;if(!n){const e=this.options.ticks.sampleSize;let r=this.ticks;e<r.length&&(r=sample(r,e)),this._labelSizes=n=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return n}_computeLabelSizes(n,e,r){const{ctx:a,_longestTextCache:s}=this,o=[],l=[],u=Math.floor(e/getTicksLimit(e,r));let f=0,d=0,p,v,y,x,S,D,A,I,W,N,U;for(p=0;p<e;p+=u){if(x=n[p].label,S=this._resolveTickFontOptions(p),a.font=D=S.string,A=s[D]=s[D]||{data:{},gc:[]},I=S.lineHeight,W=N=0,!isNullOrUndef(x)&&!isArray(x))W=_measureText(a,A.data,A.gc,W,x),N=I;else if(isArray(x))for(v=0,y=x.length;v<y;++v)U=x[v],!isNullOrUndef(U)&&!isArray(U)&&(W=_measureText(a,A.data,A.gc,W,U),N+=I);o.push(W),l.push(N),f=Math.max(W,f),d=Math.max(N,d)}garbageCollect(s,e);const J=o.indexOf(f),m=l.indexOf(d),ne=ie=>({width:o[ie]||0,height:l[ie]||0});return{first:ne(0),last:ne(e-1),widest:ne(J),highest:ne(m),widths:o,heights:l}}getLabelForValue(n){return n}getPixelForValue(n,e){return NaN}getValueForPixel(n){}getPixelForTick(n){const e=this.ticks;return n<0||n>e.length-1?null:this.getPixelForValue(e[n].value)}getPixelForDecimal(n){this._reversePixels&&(n=1-n);const e=this._startPixel+n*this._length;return _int16Range(this._alignToPixels?_alignPixel(this.chart,e,0):e)}getDecimalForPixel(n){const e=(n-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:n,max:e}=this;return n<0&&e<0?e:n>0&&e>0?n:0}getContext(n){const e=this.ticks||[];if(n>=0&&n<e.length){const r=e[n];return r.$context||(r.$context=createTickContext(this.getContext(),n,r))}return this.$context||(this.$context=createScaleContext(this.chart.getContext(),this))}_tickSize(){const n=this.options.ticks,e=toRadians(this.labelRotation),r=Math.abs(Math.cos(e)),a=Math.abs(Math.sin(e)),s=this._getLabelSizes(),o=n.autoSkipPadding||0,l=s?s.widest.width+o:0,u=s?s.highest.height+o:0;return this.isHorizontal()?u*r>l*a?l/r:u/a:u*a<l*r?u/r:l/a}_isVisible(){const n=this.options.display;return n!=="auto"?!!n:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(n){const e=this.axis,r=this.chart,a=this.options,{grid:s,position:o,border:l}=a,u=s.offset,f=this.isHorizontal(),p=this.ticks.length+(u?1:0),v=getTickMarkLength(s),y=[],x=l.setContext(this.getContext()),S=x.display?x.width:0,D=S/2,A=function(we){return _alignPixel(r,we,S)};let I,W,N,U,J,m,ne,ie,ge,ve,_e,ue;if(o==="top")I=A(this.bottom),m=this.bottom-v,ie=I-D,ve=A(n.top)+D,ue=n.bottom;else if(o==="bottom")I=A(this.top),ve=n.top,ue=A(n.bottom)-D,m=I+D,ie=this.top+v;else if(o==="left")I=A(this.right),J=this.right-v,ne=I-D,ge=A(n.left)+D,_e=n.right;else if(o==="right")I=A(this.left),ge=n.left,_e=A(n.right)-D,J=I+D,ne=this.left+v;else if(e==="x"){if(o==="center")I=A((n.top+n.bottom)/2+.5);else if(isObject(o)){const we=Object.keys(o)[0],xe=o[we];I=A(this.chart.scales[we].getPixelForValue(xe))}ve=n.top,ue=n.bottom,m=I+D,ie=m+v}else if(e==="y"){if(o==="center")I=A((n.left+n.right)/2);else if(isObject(o)){const we=Object.keys(o)[0],xe=o[we];I=A(this.chart.scales[we].getPixelForValue(xe))}J=I-D,ne=J-v,ge=n.left,_e=n.right}const He=valueOrDefault(a.ticks.maxTicksLimit,p),pe=Math.max(1,Math.ceil(p/He));for(W=0;W<p;W+=pe){const we=this.getContext(W),xe=s.setContext(we),je=l.setContext(we),Le=xe.lineWidth,ct=xe.color,Xe=je.dash||[],Ve=je.dashOffset,et=xe.tickWidth,it=xe.tickColor,Ge=xe.tickBorderDash||[],ke=xe.tickBorderDashOffset;N=getPixelForGridLine(this,W,u),N!==void 0&&(U=_alignPixel(r,N,Le),f?J=ne=ge=_e=U:m=ie=ve=ue=U,y.push({tx1:J,ty1:m,tx2:ne,ty2:ie,x1:ge,y1:ve,x2:_e,y2:ue,width:Le,color:ct,borderDash:Xe,borderDashOffset:Ve,tickWidth:et,tickColor:it,tickBorderDash:Ge,tickBorderDashOffset:ke}))}return this._ticksLength=p,this._borderValue=I,y}_computeLabelItems(n){const e=this.axis,r=this.options,{position:a,ticks:s}=r,o=this.isHorizontal(),l=this.ticks,{align:u,crossAlign:f,padding:d,mirror:p}=s,v=getTickMarkLength(r.grid),y=v+d,x=p?-d:y,S=-toRadians(this.labelRotation),D=[];let A,I,W,N,U,J,m,ne,ie,ge,ve,_e,ue="middle";if(a==="top")J=this.bottom-x,m=this._getXAxisLabelAlignment();else if(a==="bottom")J=this.top+x,m=this._getXAxisLabelAlignment();else if(a==="left"){const pe=this._getYAxisLabelAlignment(v);m=pe.textAlign,U=pe.x}else if(a==="right"){const pe=this._getYAxisLabelAlignment(v);m=pe.textAlign,U=pe.x}else if(e==="x"){if(a==="center")J=(n.top+n.bottom)/2+y;else if(isObject(a)){const pe=Object.keys(a)[0],we=a[pe];J=this.chart.scales[pe].getPixelForValue(we)+y}m=this._getXAxisLabelAlignment()}else if(e==="y"){if(a==="center")U=(n.left+n.right)/2-y;else if(isObject(a)){const pe=Object.keys(a)[0],we=a[pe];U=this.chart.scales[pe].getPixelForValue(we)}m=this._getYAxisLabelAlignment(v).textAlign}e==="y"&&(u==="start"?ue="top":u==="end"&&(ue="bottom"));const He=this._getLabelSizes();for(A=0,I=l.length;A<I;++A){W=l[A],N=W.label;const pe=s.setContext(this.getContext(A));ne=this.getPixelForTick(A)+s.labelOffset,ie=this._resolveTickFontOptions(A),ge=ie.lineHeight,ve=isArray(N)?N.length:1;const we=ve/2,xe=pe.color,je=pe.textStrokeColor,Le=pe.textStrokeWidth;let ct=m;o?(U=ne,m==="inner"&&(A===I-1?ct=this.options.reverse?"left":"right":A===0?ct=this.options.reverse?"right":"left":ct="center"),a==="top"?f==="near"||S!==0?_e=-ve*ge+ge/2:f==="center"?_e=-He.highest.height/2-we*ge+ge:_e=-He.highest.height+ge/2:f==="near"||S!==0?_e=ge/2:f==="center"?_e=He.highest.height/2-we*ge:_e=He.highest.height-ve*ge,p&&(_e*=-1),S!==0&&!pe.showLabelBackdrop&&(U+=ge/2*Math.sin(S))):(J=ne,_e=(1-ve)*ge/2);let Xe;if(pe.showLabelBackdrop){const Ve=toPadding(pe.backdropPadding),et=He.heights[A],it=He.widths[A];let Ge=_e-Ve.top,ke=0-Ve.left;switch(ue){case"middle":Ge-=et/2;break;case"bottom":Ge-=et;break}switch(m){case"center":ke-=it/2;break;case"right":ke-=it;break;case"inner":A===I-1?ke-=it:A>0&&(ke-=it/2);break}Xe={left:ke,top:Ge,width:it+Ve.width,height:et+Ve.height,color:pe.backdropColor}}D.push({label:N,font:ie,textOffset:_e,options:{rotation:S,color:xe,strokeColor:je,strokeWidth:Le,textAlign:ct,textBaseline:ue,translation:[U,J],backdrop:Xe}})}return D}_getXAxisLabelAlignment(){const{position:n,ticks:e}=this.options;if(-toRadians(this.labelRotation))return n==="top"?"left":"right";let a="center";return e.align==="start"?a="left":e.align==="end"?a="right":e.align==="inner"&&(a="inner"),a}_getYAxisLabelAlignment(n){const{position:e,ticks:{crossAlign:r,mirror:a,padding:s}}=this.options,o=this._getLabelSizes(),l=n+s,u=o.widest.width;let f,d;return e==="left"?a?(d=this.right+s,r==="near"?f="left":r==="center"?(f="center",d+=u/2):(f="right",d+=u)):(d=this.right-l,r==="near"?f="right":r==="center"?(f="center",d-=u/2):(f="left",d=this.left)):e==="right"?a?(d=this.left+s,r==="near"?f="right":r==="center"?(f="center",d-=u/2):(f="left",d-=u)):(d=this.left+l,r==="near"?f="left":r==="center"?(f="center",d+=u/2):(f="right",d=this.right)):f="right",{textAlign:f,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const n=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:n.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:n.width}}drawBackground(){const{ctx:n,options:{backgroundColor:e},left:r,top:a,width:s,height:o}=this;e&&(n.save(),n.fillStyle=e,n.fillRect(r,a,s,o),n.restore())}getLineWidthForValue(n){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const a=this.ticks.findIndex(s=>s.value===n);return a>=0?e.setContext(this.getContext(a)).lineWidth:0}drawGrid(n){const e=this.options.grid,r=this.ctx,a=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(n));let s,o;const l=(u,f,d)=>{!d.width||!d.color||(r.save(),r.lineWidth=d.width,r.strokeStyle=d.color,r.setLineDash(d.borderDash||[]),r.lineDashOffset=d.borderDashOffset,r.beginPath(),r.moveTo(u.x,u.y),r.lineTo(f.x,f.y),r.stroke(),r.restore())};if(e.display)for(s=0,o=a.length;s<o;++s){const u=a[s];e.drawOnChartArea&&l({x:u.x1,y:u.y1},{x:u.x2,y:u.y2},u),e.drawTicks&&l({x:u.tx1,y:u.ty1},{x:u.tx2,y:u.ty2},{color:u.tickColor,width:u.tickWidth,borderDash:u.tickBorderDash,borderDashOffset:u.tickBorderDashOffset})}}drawBorder(){const{chart:n,ctx:e,options:{border:r,grid:a}}=this,s=r.setContext(this.getContext()),o=r.display?s.width:0;if(!o)return;const l=a.setContext(this.getContext(0)).lineWidth,u=this._borderValue;let f,d,p,v;this.isHorizontal()?(f=_alignPixel(n,this.left,o)-o/2,d=_alignPixel(n,this.right,l)+l/2,p=v=u):(p=_alignPixel(n,this.top,o)-o/2,v=_alignPixel(n,this.bottom,l)+l/2,f=d=u),e.save(),e.lineWidth=s.width,e.strokeStyle=s.color,e.beginPath(),e.moveTo(f,p),e.lineTo(d,v),e.stroke(),e.restore()}drawLabels(n){if(!this.options.ticks.display)return;const r=this.ctx,a=this._computeLabelArea();a&&clipArea(r,a);const s=this.getLabelItems(n);for(const o of s){const l=o.options,u=o.font,f=o.label,d=o.textOffset;renderText(r,f,0,d,u,l)}a&&unclipArea(r)}drawTitle(){const{ctx:n,options:{position:e,title:r,reverse:a}}=this;if(!r.display)return;const s=toFont(r.font),o=toPadding(r.padding),l=r.align;let u=s.lineHeight/2;e==="bottom"||e==="center"||isObject(e)?(u+=o.bottom,isArray(r.text)&&(u+=s.lineHeight*(r.text.length-1))):u+=o.top;const{titleX:f,titleY:d,maxWidth:p,rotation:v}=titleArgs(this,u,e,l);renderText(n,r.text,0,0,s,{color:r.color,maxWidth:p,rotation:v,textAlign:titleAlign(l,e,a),textBaseline:"middle",translation:[f,d]})}draw(n){this._isVisible()&&(this.drawBackground(),this.drawGrid(n),this.drawBorder(),this.drawTitle(),this.drawLabels(n))}_layers(){const n=this.options,e=n.ticks&&n.ticks.z||0,r=valueOrDefault(n.grid&&n.grid.z,-1),a=valueOrDefault(n.border&&n.border.z,0);return!this._isVisible()||this.draw!==Scale.prototype.draw?[{z:e,draw:s=>{this.draw(s)}}]:[{z:r,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:a,draw:()=>{this.drawBorder()}},{z:e,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(n){const e=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",a=[];let s,o;for(s=0,o=e.length;s<o;++s){const l=e[s];l[r]===this.id&&(!n||l.type===n)&&a.push(l)}return a}_resolveTickFontOptions(n){const e=this.options.ticks.setContext(this.getContext(n));return toFont(e.font)}_maxDigits(){const n=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/n}}class TypedRegistry{constructor(n,e,r){this.type=n,this.scope=e,this.override=r,this.items=Object.create(null)}isForType(n){return Object.prototype.isPrototypeOf.call(this.type.prototype,n.prototype)}register(n){const e=Object.getPrototypeOf(n);let r;isIChartComponent(e)&&(r=this.register(e));const a=this.items,s=n.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+n);return s in a||(a[s]=n,registerDefaults(n,o,r),this.override&&defaults.override(n.id,n.overrides)),o}get(n){return this.items[n]}unregister(n){const e=this.items,r=n.id,a=this.scope;r in e&&delete e[r],a&&r in defaults[a]&&(delete defaults[a][r],this.override&&delete overrides[r])}}function registerDefaults(t,n,e){const r=merge(Object.create(null),[e?defaults.get(e):{},defaults.get(n),t.defaults]);defaults.set(n,r),t.defaultRoutes&&routeDefaults(n,t.defaultRoutes),t.descriptors&&defaults.describe(n,t.descriptors)}function routeDefaults(t,n){Object.keys(n).forEach(e=>{const r=e.split("."),a=r.pop(),s=[t].concat(r).join("."),o=n[e].split("."),l=o.pop(),u=o.join(".");defaults.route(s,a,u,l)})}function isIChartComponent(t){return"id"in t&&"defaults"in t}class Registry{constructor(){this.controllers=new TypedRegistry(DatasetController,"datasets",!0),this.elements=new TypedRegistry(Element$1,"elements"),this.plugins=new TypedRegistry(Object,"plugins"),this.scales=new TypedRegistry(Scale,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...n){this._each("register",n)}remove(...n){this._each("unregister",n)}addControllers(...n){this._each("register",n,this.controllers)}addElements(...n){this._each("register",n,this.elements)}addPlugins(...n){this._each("register",n,this.plugins)}addScales(...n){this._each("register",n,this.scales)}getController(n){return this._get(n,this.controllers,"controller")}getElement(n){return this._get(n,this.elements,"element")}getPlugin(n){return this._get(n,this.plugins,"plugin")}getScale(n){return this._get(n,this.scales,"scale")}removeControllers(...n){this._each("unregister",n,this.controllers)}removeElements(...n){this._each("unregister",n,this.elements)}removePlugins(...n){this._each("unregister",n,this.plugins)}removeScales(...n){this._each("unregister",n,this.scales)}_each(n,e,r){[...e].forEach(a=>{const s=r||this._getRegistryForType(a);r||s.isForType(a)||s===this.plugins&&a.id?this._exec(n,s,a):each(a,o=>{const l=r||this._getRegistryForType(o);this._exec(n,l,o)})})}_exec(n,e,r){const a=_capitalize(n);callback(r["before"+a],[],r),e[n](r),callback(r["after"+a],[],r)}_getRegistryForType(n){for(let e=0;e<this._typedRegistries.length;e++){const r=this._typedRegistries[e];if(r.isForType(n))return r}return this.plugins}_get(n,e,r){const a=e.get(n);if(a===void 0)throw new Error('"'+n+'" is not a registered '+r+".");return a}}var registry=new Registry;class PluginService{constructor(){this._init=void 0}notify(n,e,r,a){if(e==="beforeInit"&&(this._init=this._createDescriptors(n,!0),this._notify(this._init,n,"install")),this._init===void 0)return;const s=a?this._descriptors(n).filter(a):this._descriptors(n),o=this._notify(s,n,e,r);return e==="afterDestroy"&&(this._notify(s,n,"stop"),this._notify(this._init,n,"uninstall"),this._init=void 0),o}_notify(n,e,r,a){a=a||{};for(const s of n){const o=s.plugin,l=o[r],u=[e,a,s.options];if(callback(l,u,o)===!1&&a.cancelable)return!1}return!0}invalidate(){isNullOrUndef(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(n){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(n);return this._notifyStateChanges(n),e}_createDescriptors(n,e){const r=n&&n.config,a=valueOrDefault(r.options&&r.options.plugins,{}),s=allPlugins(r);return a===!1&&!e?[]:createDescriptors(n,s,a,e)}_notifyStateChanges(n){const e=this._oldCache||[],r=this._cache,a=(s,o)=>s.filter(l=>!o.some(u=>l.plugin.id===u.plugin.id));this._notify(a(e,r),n,"stop"),this._notify(a(r,e),n,"start")}}function allPlugins(t){const n={},e=[],r=Object.keys(registry.plugins.items);for(let s=0;s<r.length;s++)e.push(registry.getPlugin(r[s]));const a=t.plugins||[];for(let s=0;s<a.length;s++){const o=a[s];e.indexOf(o)===-1&&(e.push(o),n[o.id]=!0)}return{plugins:e,localIds:n}}function getOpts(t,n){return!n&&t===!1?null:t===!0?{}:t}function createDescriptors(t,{plugins:n,localIds:e},r,a){const s=[],o=t.getContext();for(const l of n){const u=l.id,f=getOpts(r[u],a);f!==null&&s.push({plugin:l,options:pluginOpts(t.config,{plugin:l,local:e[u]},f,o)})}return s}function pluginOpts(t,{plugin:n,local:e},r,a){const s=t.pluginScopeKeys(n),o=t.getOptionScopes(r,s);return e&&n.defaults&&o.push(n.defaults),t.createResolver(o,a,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function getIndexAxis(t,n){const e=defaults.datasets[t]||{};return((n.datasets||{})[t]||{}).indexAxis||n.indexAxis||e.indexAxis||"x"}function getAxisFromDefaultScaleID(t,n){let e=t;return t==="_index_"?e=n:t==="_value_"&&(e=n==="x"?"y":"x"),e}function getDefaultScaleIDFromAxis(t,n){return t===n?"_index_":"_value_"}function idMatchesAxis(t){if(t==="x"||t==="y"||t==="r")return t}function axisFromPosition(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function determineAxis(t,...n){if(idMatchesAxis(t))return t;for(const e of n){const r=e.axis||axisFromPosition(e.position)||t.length>1&&idMatchesAxis(t[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function getAxisFromDataset(t,n,e){if(e[n+"AxisID"]===t)return{axis:n}}function retrieveAxisFromDatasets(t,n){if(n.data&&n.data.datasets){const e=n.data.datasets.filter(r=>r.xAxisID===t||r.yAxisID===t);if(e.length)return getAxisFromDataset(t,"x",e[0])||getAxisFromDataset(t,"y",e[0])}return{}}function mergeScaleConfig(t,n){const e=overrides[t.type]||{scales:{}},r=n.scales||{},a=getIndexAxis(t.type,n),s=Object.create(null);return Object.keys(r).forEach(o=>{const l=r[o];if(!isObject(l))return console.error(`Invalid scale configuration for scale: ${o}`);if(l._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const u=determineAxis(o,l,retrieveAxisFromDatasets(o,t),defaults.scales[l.type]),f=getDefaultScaleIDFromAxis(u,a),d=e.scales||{};s[o]=mergeIf(Object.create(null),[{axis:u},l,d[u],d[f]])}),t.data.datasets.forEach(o=>{const l=o.type||t.type,u=o.indexAxis||getIndexAxis(l,n),d=(overrides[l]||{}).scales||{};Object.keys(d).forEach(p=>{const v=getAxisFromDefaultScaleID(p,u),y=o[v+"AxisID"]||v;s[y]=s[y]||Object.create(null),mergeIf(s[y],[{axis:v},r[y],d[p]])})}),Object.keys(s).forEach(o=>{const l=s[o];mergeIf(l,[defaults.scales[l.type],defaults.scale])}),s}function initOptions(t){const n=t.options||(t.options={});n.plugins=valueOrDefault(n.plugins,{}),n.scales=mergeScaleConfig(t,n)}function initData(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function initConfig(t){return t=t||{},t.data=initData(t.data),initOptions(t),t}const keyCache=new Map,keysCached=new Set;function cachedKeys(t,n){let e=keyCache.get(t);return e||(e=n(),keyCache.set(t,e),keysCached.add(e)),e}const addIfFound=(t,n,e)=>{const r=resolveObjectKey(n,e);r!==void 0&&t.add(r)};class Config{constructor(n){this._config=initConfig(n),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(n){this._config.type=n}get data(){return this._config.data}set data(n){this._config.data=initData(n)}get options(){return this._config.options}set options(n){this._config.options=n}get plugins(){return this._config.plugins}update(){const n=this._config;this.clearCache(),initOptions(n)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(n){return cachedKeys(n,()=>[[`datasets.${n}`,""]])}datasetAnimationScopeKeys(n,e){return cachedKeys(`${n}.transition.${e}`,()=>[[`datasets.${n}.transitions.${e}`,`transitions.${e}`],[`datasets.${n}`,""]])}datasetElementScopeKeys(n,e){return cachedKeys(`${n}-${e}`,()=>[[`datasets.${n}.elements.${e}`,`datasets.${n}`,`elements.${e}`,""]])}pluginScopeKeys(n){const e=n.id,r=this.type;return cachedKeys(`${r}-plugin-${e}`,()=>[[`plugins.${e}`,...n.additionalOptionScopes||[]]])}_cachedScopes(n,e){const r=this._scopeCache;let a=r.get(n);return(!a||e)&&(a=new Map,r.set(n,a)),a}getOptionScopes(n,e,r){const{options:a,type:s}=this,o=this._cachedScopes(n,r),l=o.get(e);if(l)return l;const u=new Set;e.forEach(d=>{n&&(u.add(n),d.forEach(p=>addIfFound(u,n,p))),d.forEach(p=>addIfFound(u,a,p)),d.forEach(p=>addIfFound(u,overrides[s]||{},p)),d.forEach(p=>addIfFound(u,defaults,p)),d.forEach(p=>addIfFound(u,descriptors,p))});const f=Array.from(u);return f.length===0&&f.push(Object.create(null)),keysCached.has(e)&&o.set(e,f),f}chartOptionScopes(){const{options:n,type:e}=this;return[n,overrides[e]||{},defaults.datasets[e]||{},{type:e},defaults,descriptors]}resolveNamedOptions(n,e,r,a=[""]){const s={$shared:!0},{resolver:o,subPrefixes:l}=getResolver(this._resolverCache,n,a);let u=o;if(needContext(o,e)){s.$shared=!1,r=isFunction(r)?r():r;const f=this.createResolver(n,r,l);u=_attachContext(o,r,f)}for(const f of e)s[f]=u[f];return s}createResolver(n,e,r=[""],a){const{resolver:s}=getResolver(this._resolverCache,n,r);return isObject(e)?_attachContext(s,e,void 0,a):s}}function getResolver(t,n,e){let r=t.get(n);r||(r=new Map,t.set(n,r));const a=e.join();let s=r.get(a);return s||(s={resolver:_createResolver(n,e),subPrefixes:e.filter(l=>!l.toLowerCase().includes("hover"))},r.set(a,s)),s}const hasFunction=t=>isObject(t)&&Object.getOwnPropertyNames(t).some(n=>isFunction(t[n]));function needContext(t,n){const{isScriptable:e,isIndexable:r}=_descriptors(t);for(const a of n){const s=e(a),o=r(a),l=(o||s)&&t[a];if(s&&(isFunction(l)||hasFunction(l))||o&&isArray(l))return!0}return!1}var version="4.5.1";const KNOWN_POSITIONS=["top","bottom","left","right","chartArea"];function positionIsHorizontal(t,n){return t==="top"||t==="bottom"||KNOWN_POSITIONS.indexOf(t)===-1&&n==="x"}function compare2Level(t,n){return function(e,r){return e[t]===r[t]?e[n]-r[n]:e[t]-r[t]}}function onAnimationsComplete(t){const n=t.chart,e=n.options.animation;n.notifyPlugins("afterRender"),callback(e&&e.onComplete,[t],n)}function onAnimationProgress(t){const n=t.chart,e=n.options.animation;callback(e&&e.onProgress,[t],n)}function getCanvas(t){return _isDomSupported()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const instances={},getChart=t=>{const n=getCanvas(t);return Object.values(instances).filter(e=>e.canvas===n).pop()};function moveNumericKeys(t,n,e){const r=Object.keys(t);for(const a of r){const s=+a;if(s>=n){const o=t[a];delete t[a],(e>0||s>n)&&(t[s+e]=o)}}}function determineLastEvent(t,n,e,r){return!e||t.type==="mouseout"?null:r?n:t}class Chart{static defaults=defaults;static instances=instances;static overrides=overrides;static registry=registry;static version=version;static getChart=getChart;static register(...n){registry.add(...n),invalidatePlugins()}static unregister(...n){registry.remove(...n),invalidatePlugins()}constructor(n,e){const r=this.config=new Config(e),a=getCanvas(n),s=getChart(a);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||_detectPlatform(a)),this.platform.updateConfig(r);const l=this.platform.acquireContext(a,o.aspectRatio),u=l&&l.canvas,f=u&&u.height,d=u&&u.width;if(this.id=uid(),this.ctx=l,this.canvas=u,this.width=d,this.height=f,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new PluginService,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=debounce(p=>this.update(p),o.resizeDelay||0),this._dataChanges=[],instances[this.id]=this,!l||!u){console.error("Failed to create chart: can't acquire context from the given item");return}animator.listen(this,"complete",onAnimationsComplete),animator.listen(this,"progress",onAnimationProgress),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:n,maintainAspectRatio:e},width:r,height:a,_aspectRatio:s}=this;return isNullOrUndef(n)?e&&s?s:a?r/a:null:n}get data(){return this.config.data}set data(n){this.config.data=n}get options(){return this._options}set options(n){this.config.options=n}get registry(){return registry}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():retinaScale(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return clearCanvas(this.canvas,this.ctx),this}stop(){return animator.stop(this),this}resize(n,e){animator.running(this)?this._resizeBeforeDraw={width:n,height:e}:this._resize(n,e)}_resize(n,e){const r=this.options,a=this.canvas,s=r.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(a,n,e,s),l=r.devicePixelRatio||this.platform.getDevicePixelRatio(),u=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,retinaScale(this,l,!0)&&(this.notifyPlugins("resize",{size:o}),callback(r.onResize,[this,o],this),this.attached&&this._doResize(u)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};each(e,(r,a)=>{r.id=a})}buildOrUpdateScales(){const n=this.options,e=n.scales,r=this.scales,a=Object.keys(r).reduce((o,l)=>(o[l]=!1,o),{});let s=[];e&&(s=s.concat(Object.keys(e).map(o=>{const l=e[o],u=determineAxis(o,l),f=u==="r",d=u==="x";return{options:l,dposition:f?"chartArea":d?"bottom":"left",dtype:f?"radialLinear":d?"category":"linear"}}))),each(s,o=>{const l=o.options,u=l.id,f=determineAxis(u,l),d=valueOrDefault(l.type,o.dtype);(l.position===void 0||positionIsHorizontal(l.position,f)!==positionIsHorizontal(o.dposition))&&(l.position=o.dposition),a[u]=!0;let p=null;if(u in r&&r[u].type===d)p=r[u];else{const v=registry.getScale(d);p=new v({id:u,type:d,ctx:this.ctx,chart:this}),r[p.id]=p}p.init(l,n)}),each(a,(o,l)=>{o||delete r[l]}),each(r,o=>{layouts.configure(this,o,o.options),layouts.addBox(this,o)})}_updateMetasets(){const n=this._metasets,e=this.data.datasets.length,r=n.length;if(n.sort((a,s)=>a.index-s.index),r>e){for(let a=e;a<r;++a)this._destroyDatasetMeta(a);n.splice(e,r-e)}this._sortedMetasets=n.slice(0).sort(compare2Level("order","index"))}_removeUnreferencedMetasets(){const{_metasets:n,data:{datasets:e}}=this;n.length>e.length&&delete this._stacks,n.forEach((r,a)=>{e.filter(s=>s===r._dataset).length===0&&this._destroyDatasetMeta(a)})}buildOrUpdateControllers(){const n=[],e=this.data.datasets;let r,a;for(this._removeUnreferencedMetasets(),r=0,a=e.length;r<a;r++){const s=e[r];let o=this.getDatasetMeta(r);const l=s.type||this.config.type;if(o.type&&o.type!==l&&(this._destroyDatasetMeta(r),o=this.getDatasetMeta(r)),o.type=l,o.indexAxis=s.indexAxis||getIndexAxis(l,this.options),o.order=s.order||0,o.index=r,o.label=""+s.label,o.visible=this.isDatasetVisible(r),o.controller)o.controller.updateIndex(r),o.controller.linkScales();else{const u=registry.getController(l),{datasetElementType:f,dataElementType:d}=defaults.datasets[l];Object.assign(u,{dataElementType:registry.getElement(d),datasetElementType:f&&registry.getElement(f)}),o.controller=new u(this,r),n.push(o.controller)}}return this._updateMetasets(),n}_resetElements(){each(this.data.datasets,(n,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(n){const e=this.config;e.update();const r=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),a=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:n,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let f=0,d=this.data.datasets.length;f<d;f++){const{controller:p}=this.getDatasetMeta(f),v=!a&&s.indexOf(p)===-1;p.buildOrUpdateElements(v),o=Math.max(+p.getMaxOverflow(),o)}o=this._minPadding=r.layout.autoPadding?o:0,this._updateLayout(o),a||each(s,f=>{f.reset()}),this._updateDatasets(n),this.notifyPlugins("afterUpdate",{mode:n}),this._layers.sort(compare2Level("z","_idx"));const{_active:l,_lastEvent:u}=this;u?this._eventHandler(u,!0):l.length&&this._updateHoverStyles(l,l,!0),this.render()}_updateScales(){each(this.scales,n=>{layouts.removeBox(this,n)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const n=this.options,e=new Set(Object.keys(this._listeners)),r=new Set(n.events);(!setsEqual(e,r)||!!this._responsiveListeners!==n.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:n}=this,e=this._getUniformDataChanges()||[];for(const{method:r,start:a,count:s}of e){const o=r==="_removeElements"?-s:s;moveNumericKeys(n,a,o)}}_getUniformDataChanges(){const n=this._dataChanges;if(!n||!n.length)return;this._dataChanges=[];const e=this.data.datasets.length,r=s=>new Set(n.filter(o=>o[0]===s).map((o,l)=>l+","+o.splice(1).join(","))),a=r(0);for(let s=1;s<e;s++)if(!setsEqual(a,r(s)))return;return Array.from(a).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(n){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;layouts.update(this,this.width,this.height,n);const e=this.chartArea,r=e.width<=0||e.height<=0;this._layers=[],each(this.boxes,a=>{r&&a.position==="chartArea"||(a.configure&&a.configure(),this._layers.push(...a._layers()))},this),this._layers.forEach((a,s)=>{a._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(n){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:n,cancelable:!0})!==!1){for(let e=0,r=this.data.datasets.length;e<r;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,r=this.data.datasets.length;e<r;++e)this._updateDataset(e,isFunction(n)?n({datasetIndex:e}):n);this.notifyPlugins("afterDatasetsUpdate",{mode:n})}}_updateDataset(n,e){const r=this.getDatasetMeta(n),a={meta:r,index:n,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",a)!==!1&&(r.controller._update(e),a.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",a))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(animator.has(this)?this.attached&&!animator.running(this)&&animator.start(this):(this.draw(),onAnimationsComplete({chart:this})))}draw(){let n;if(this._resizeBeforeDraw){const{width:r,height:a}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,a)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(n=0;n<e.length&&e[n].z<=0;++n)e[n].draw(this.chartArea);for(this._drawDatasets();n<e.length;++n)e[n].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(n){const e=this._sortedMetasets,r=[];let a,s;for(a=0,s=e.length;a<s;++a){const o=e[a];(!n||o.visible)&&r.push(o)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const n=this.getSortedVisibleDatasetMetas();for(let e=n.length-1;e>=0;--e)this._drawDataset(n[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(n){const e=this.ctx,r={meta:n,index:n.index,cancelable:!0},a=getDatasetClipArea(this,n);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(a&&clipArea(e,a),n.controller.draw(),a&&unclipArea(e),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(n){return _isPointInArea(n,this.chartArea,this._minPadding)}getElementsAtEventForMode(n,e,r,a){const s=Interaction.modes[e];return typeof s=="function"?s(this,n,r,a):[]}getDatasetMeta(n){const e=this.data.datasets[n],r=this._metasets;let a=r.filter(s=>s&&s._dataset===e).pop();return a||(a={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:n,_dataset:e,_parsed:[],_sorted:!1},r.push(a)),a}getContext(){return this.$context||(this.$context=createContext(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(n){const e=this.data.datasets[n];if(!e)return!1;const r=this.getDatasetMeta(n);return typeof r.hidden=="boolean"?!r.hidden:!e.hidden}setDatasetVisibility(n,e){const r=this.getDatasetMeta(n);r.hidden=!e}toggleDataVisibility(n){this._hiddenIndices[n]=!this._hiddenIndices[n]}getDataVisibility(n){return!this._hiddenIndices[n]}_updateVisibility(n,e,r){const a=r?"show":"hide",s=this.getDatasetMeta(n),o=s.controller._resolveAnimations(void 0,a);defined(e)?(s.data[e].hidden=!r,this.update()):(this.setDatasetVisibility(n,r),o.update(s,{visible:r}),this.update(l=>l.datasetIndex===n?a:void 0))}hide(n,e){this._updateVisibility(n,e,!1)}show(n,e){this._updateVisibility(n,e,!0)}_destroyDatasetMeta(n){const e=this._metasets[n];e&&e.controller&&e.controller._destroy(),delete this._metasets[n]}_stop(){let n,e;for(this.stop(),animator.remove(this),n=0,e=this.data.datasets.length;n<e;++n)this._destroyDatasetMeta(n)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:n,ctx:e}=this;this._stop(),this.config.clearCache(),n&&(this.unbindEvents(),clearCanvas(n,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete instances[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...n){return this.canvas.toDataURL(...n)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const n=this._listeners,e=this.platform,r=(s,o)=>{e.addEventListener(this,s,o),n[s]=o},a=(s,o,l)=>{s.offsetX=o,s.offsetY=l,this._eventHandler(s)};each(this.options.events,s=>r(s,a))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const n=this._responsiveListeners,e=this.platform,r=(u,f)=>{e.addEventListener(this,u,f),n[u]=f},a=(u,f)=>{n[u]&&(e.removeEventListener(this,u,f),delete n[u])},s=(u,f)=>{this.canvas&&this.resize(u,f)};let o;const l=()=>{a("attach",l),this.attached=!0,this.resize(),r("resize",s),r("detach",o)};o=()=>{this.attached=!1,a("resize",s),this._stop(),this._resize(0,0),r("attach",l)},e.isAttached(this.canvas)?l():o()}unbindEvents(){each(this._listeners,(n,e)=>{this.platform.removeEventListener(this,e,n)}),this._listeners={},each(this._responsiveListeners,(n,e)=>{this.platform.removeEventListener(this,e,n)}),this._responsiveListeners=void 0}updateHoverStyle(n,e,r){const a=r?"set":"remove";let s,o,l,u;for(e==="dataset"&&(s=this.getDatasetMeta(n[0].datasetIndex),s.controller["_"+a+"DatasetHoverStyle"]()),l=0,u=n.length;l<u;++l){o=n[l];const f=o&&this.getDatasetMeta(o.datasetIndex).controller;f&&f[a+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(n){const e=this._active||[],r=n.map(({datasetIndex:s,index:o})=>{const l=this.getDatasetMeta(s);if(!l)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:l.data[o],index:o}});!_elementsEqual(r,e)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,e))}notifyPlugins(n,e,r){return this._plugins.notify(this,n,e,r)}isPluginEnabled(n){return this._plugins._cache.filter(e=>e.plugin.id===n).length===1}_updateHoverStyles(n,e,r){const a=this.options.hover,s=(u,f)=>u.filter(d=>!f.some(p=>d.datasetIndex===p.datasetIndex&&d.index===p.index)),o=s(e,n),l=r?n:s(n,e);o.length&&this.updateHoverStyle(o,a.mode,!1),l.length&&a.mode&&this.updateHoverStyle(l,a.mode,!0)}_eventHandler(n,e){const r={event:n,replay:e,cancelable:!0,inChartArea:this.isPointInArea(n)},a=o=>(o.options.events||this.options.events).includes(n.native.type);if(this.notifyPlugins("beforeEvent",r,a)===!1)return;const s=this._handleEvent(n,e,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,a),(s||r.changed)&&this.render(),this}_handleEvent(n,e,r){const{_active:a=[],options:s}=this,o=e,l=this._getActiveElements(n,a,r,o),u=_isClickEvent(n),f=determineLastEvent(n,this._lastEvent,r,u);r&&(this._lastEvent=null,callback(s.onHover,[n,l,this],this),u&&callback(s.onClick,[n,l,this],this));const d=!_elementsEqual(l,a);return(d||e)&&(this._active=l,this._updateHoverStyles(l,a,e)),this._lastEvent=f,d}_getActiveElements(n,e,r,a){if(n.type==="mouseout")return[];if(!r)return e;const s=this.options.hover;return this.getElementsAtEventForMode(n,s.mode,s,a)}}function invalidatePlugins(){return each(Chart.instances,t=>t._plugins.invalidate())}function clipSelf(t,n,e){const{startAngle:r,x:a,y:s,outerRadius:o,innerRadius:l,options:u}=n,{borderWidth:f,borderJoinStyle:d}=u,p=Math.min(f/o,_normalizeAngle(r-e));if(t.beginPath(),t.arc(a,s,o-f/2,r+p/2,e-p/2),l>0){const v=Math.min(f/l,_normalizeAngle(r-e));t.arc(a,s,l+f/2,e-v/2,r+v/2,!0)}else{const v=Math.min(f/2,o*_normalizeAngle(r-e));if(d==="round")t.arc(a,s,v,e-PI/2,r+PI/2,!0);else if(d==="bevel"){const y=2*v*v,x=-y*Math.cos(e+PI/2)+a,S=-y*Math.sin(e+PI/2)+s,D=y*Math.cos(r+PI/2)+a,A=y*Math.sin(r+PI/2)+s;t.lineTo(x,S),t.lineTo(D,A)}}t.closePath(),t.moveTo(0,0),t.rect(0,0,t.canvas.width,t.canvas.height),t.clip("evenodd")}function clipArc(t,n,e){const{startAngle:r,pixelMargin:a,x:s,y:o,outerRadius:l,innerRadius:u}=n;let f=a/l;t.beginPath(),t.arc(s,o,l,r-f,e+f),u>a?(f=a/u,t.arc(s,o,u,e+f,r-f,!0)):t.arc(s,o,a,e+HALF_PI,r-HALF_PI),t.closePath(),t.clip()}function toRadiusCorners(t){return _readValueToProps(t,["outerStart","outerEnd","innerStart","innerEnd"])}function parseBorderRadius$1(t,n,e,r){const a=toRadiusCorners(t.options.borderRadius),s=(e-n)/2,o=Math.min(s,r*n/2),l=u=>{const f=(e-Math.min(s,u))*r/2;return _limitValue(u,0,Math.min(s,f))};return{outerStart:l(a.outerStart),outerEnd:l(a.outerEnd),innerStart:_limitValue(a.innerStart,0,o),innerEnd:_limitValue(a.innerEnd,0,o)}}function rThetaToXY(t,n,e,r){return{x:e+t*Math.cos(n),y:r+t*Math.sin(n)}}function pathArc(t,n,e,r,a,s){const{x:o,y:l,startAngle:u,pixelMargin:f,innerRadius:d}=n,p=Math.max(n.outerRadius+r+e-f,0),v=d>0?d+r+e+f:0;let y=0;const x=a-u;if(r){const pe=d>0?d-r:0,we=p>0?p-r:0,xe=(pe+we)/2,je=xe!==0?x*xe/(xe+r):x;y=(x-je)/2}const S=Math.max(.001,x*p-e/PI)/p,D=(x-S)/2,A=u+D+y,I=a-D-y,{outerStart:W,outerEnd:N,innerStart:U,innerEnd:J}=parseBorderRadius$1(n,v,p,I-A),m=p-W,ne=p-N,ie=A+W/m,ge=I-N/ne,ve=v+U,_e=v+J,ue=A+U/ve,He=I-J/_e;if(t.beginPath(),s){const pe=(ie+ge)/2;if(t.arc(o,l,p,ie,pe),t.arc(o,l,p,pe,ge),N>0){const Le=rThetaToXY(ne,ge,o,l);t.arc(Le.x,Le.y,N,ge,I+HALF_PI)}const we=rThetaToXY(_e,I,o,l);if(t.lineTo(we.x,we.y),J>0){const Le=rThetaToXY(_e,He,o,l);t.arc(Le.x,Le.y,J,I+HALF_PI,He+Math.PI)}const xe=(I-J/v+(A+U/v))/2;if(t.arc(o,l,v,I-J/v,xe,!0),t.arc(o,l,v,xe,A+U/v,!0),U>0){const Le=rThetaToXY(ve,ue,o,l);t.arc(Le.x,Le.y,U,ue+Math.PI,A-HALF_PI)}const je=rThetaToXY(m,A,o,l);if(t.lineTo(je.x,je.y),W>0){const Le=rThetaToXY(m,ie,o,l);t.arc(Le.x,Le.y,W,A-HALF_PI,ie)}}else{t.moveTo(o,l);const pe=Math.cos(ie)*p+o,we=Math.sin(ie)*p+l;t.lineTo(pe,we);const xe=Math.cos(ge)*p+o,je=Math.sin(ge)*p+l;t.lineTo(xe,je)}t.closePath()}function drawArc(t,n,e,r,a){const{fullCircles:s,startAngle:o,circumference:l}=n;let u=n.endAngle;if(s){pathArc(t,n,e,r,u,a);for(let f=0;f<s;++f)t.fill();isNaN(l)||(u=o+(l%TAU||TAU))}return pathArc(t,n,e,r,u,a),t.fill(),u}function drawBorder(t,n,e,r,a){const{fullCircles:s,startAngle:o,circumference:l,options:u}=n,{borderWidth:f,borderJoinStyle:d,borderDash:p,borderDashOffset:v,borderRadius:y}=u,x=u.borderAlign==="inner";if(!f)return;t.setLineDash(p||[]),t.lineDashOffset=v,x?(t.lineWidth=f*2,t.lineJoin=d||"round"):(t.lineWidth=f,t.lineJoin=d||"bevel");let S=n.endAngle;if(s){pathArc(t,n,e,r,S,a);for(let D=0;D<s;++D)t.stroke();isNaN(l)||(S=o+(l%TAU||TAU))}x&&clipArc(t,n,S),u.selfJoin&&S-o>=PI&&y===0&&d!=="miter"&&clipSelf(t,n,S),s||(pathArc(t,n,e,r,S,a),t.stroke())}class ArcElement extends Element$1{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:n=>n!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(n){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,e,r){const a=this.getProps(["x","y"],r),{angle:s,distance:o}=getAngleFromPoint(a,{x:n,y:e}),{startAngle:l,endAngle:u,innerRadius:f,outerRadius:d,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],r),v=(this.options.spacing+this.options.borderWidth)/2,y=valueOrDefault(p,u-l),x=_angleBetween(s,l,u)&&l!==u,S=y>=TAU||x,D=_isBetween(o,f+v,d+v);return S&&D}getCenterPoint(n){const{x:e,y:r,startAngle:a,endAngle:s,innerRadius:o,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:u,spacing:f}=this.options,d=(a+s)/2,p=(o+l+f+u)/2;return{x:e+Math.cos(d)*p,y:r+Math.sin(d)*p}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:e,circumference:r}=this,a=(e.offset||0)/4,s=(e.spacing||0)/2,o=e.circular;if(this.pixelMargin=e.borderAlign==="inner"?.33:0,this.fullCircles=r>TAU?Math.floor(r/TAU):0,r===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const l=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(l)*a,Math.sin(l)*a);const u=1-Math.sin(Math.min(PI,r||0)),f=a*u;n.fillStyle=e.backgroundColor,n.strokeStyle=e.borderColor,drawArc(n,this,f,s,o),drawBorder(n,this,f,s,o),n.restore()}}function setStyle(t,n,e=n){t.lineCap=valueOrDefault(e.borderCapStyle,n.borderCapStyle),t.setLineDash(valueOrDefault(e.borderDash,n.borderDash)),t.lineDashOffset=valueOrDefault(e.borderDashOffset,n.borderDashOffset),t.lineJoin=valueOrDefault(e.borderJoinStyle,n.borderJoinStyle),t.lineWidth=valueOrDefault(e.borderWidth,n.borderWidth),t.strokeStyle=valueOrDefault(e.borderColor,n.borderColor)}function lineTo(t,n,e){t.lineTo(e.x,e.y)}function getLineMethod(t){return t.stepped?_steppedLineTo:t.tension||t.cubicInterpolationMode==="monotone"?_bezierCurveTo:lineTo}function pathVars(t,n,e={}){const r=t.length,{start:a=0,end:s=r-1}=e,{start:o,end:l}=n,u=Math.max(a,o),f=Math.min(s,l),d=a<o&&s<o||a>l&&s>l;return{count:r,start:u,loop:n.loop,ilen:f<u&&!d?r+f-u:f-u}}function pathSegment(t,n,e,r){const{points:a,options:s}=n,{count:o,start:l,loop:u,ilen:f}=pathVars(a,e,r),d=getLineMethod(s);let{move:p=!0,reverse:v}=r||{},y,x,S;for(y=0;y<=f;++y)x=a[(l+(v?f-y:y))%o],!x.skip&&(p?(t.moveTo(x.x,x.y),p=!1):d(t,S,x,v,s.stepped),S=x);return u&&(x=a[(l+(v?f:0))%o],d(t,S,x,v,s.stepped)),!!u}function fastPathSegment(t,n,e,r){const a=n.points,{count:s,start:o,ilen:l}=pathVars(a,e,r),{move:u=!0,reverse:f}=r||{};let d=0,p=0,v,y,x,S,D,A;const I=N=>(o+(f?l-N:N))%s,W=()=>{S!==D&&(t.lineTo(d,D),t.lineTo(d,S),t.lineTo(d,A))};for(u&&(y=a[I(0)],t.moveTo(y.x,y.y)),v=0;v<=l;++v){if(y=a[I(v)],y.skip)continue;const N=y.x,U=y.y,J=N|0;J===x?(U<S?S=U:U>D&&(D=U),d=(p*d+N)/++p):(W(),t.lineTo(N,U),x=J,p=0,S=D=U),A=U}W()}function _getSegmentMethod(t){const n=t.options,e=n.borderDash&&n.borderDash.length;return!t._decimated&&!t._loop&&!n.tension&&n.cubicInterpolationMode!=="monotone"&&!n.stepped&&!e?fastPathSegment:pathSegment}function _getInterpolationMethod(t){return t.stepped?_steppedInterpolation:t.tension||t.cubicInterpolationMode==="monotone"?_bezierInterpolation:_pointInLine}function strokePathWithCache(t,n,e,r){let a=n._path;a||(a=n._path=new Path2D,n.path(a,e,r)&&a.closePath()),setStyle(t,n.options),t.stroke(a)}function strokePathDirect(t,n,e,r){const{segments:a,options:s}=n,o=_getSegmentMethod(n);for(const l of a)setStyle(t,s,l.style),t.beginPath(),o(t,n,l,{start:e,end:e+r-1})&&t.closePath(),t.stroke()}const usePath2D=typeof Path2D=="function";function draw(t,n,e,r){usePath2D&&!n.options.segment?strokePathWithCache(t,n,e,r):strokePathDirect(t,n,e,r)}class LineElement extends Element$1{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:n=>n!=="borderDash"&&n!=="fill"};constructor(n){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,n&&Object.assign(this,n)}updateControlPoints(n,e){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const a=r.spanGaps?this._loop:this._fullLoop;_updateBezierControlPoints(this._points,r,n,a,e),this._pointsUpdated=!0}}set points(n){this._points=n,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=_computeSegments(this,this.options.segment))}first(){const n=this.segments,e=this.points;return n.length&&e[n[0].start]}last(){const n=this.segments,e=this.points,r=n.length;return r&&e[n[r-1].end]}interpolate(n,e){const r=this.options,a=n[e],s=this.points,o=_boundSegments(this,{property:e,start:a,end:a});if(!o.length)return;const l=[],u=_getInterpolationMethod(r);let f,d;for(f=0,d=o.length;f<d;++f){const{start:p,end:v}=o[f],y=s[p],x=s[v];if(y===x){l.push(y);continue}const S=Math.abs((a-y[e])/(x[e]-y[e])),D=u(y,x,S,r.stepped);D[e]=n[e],l.push(D)}return l.length===1?l[0]:l}pathSegment(n,e,r){return _getSegmentMethod(this)(n,this,e,r)}path(n,e,r){const a=this.segments,s=_getSegmentMethod(this);let o=this._loop;e=e||0,r=r||this.points.length-e;for(const l of a)o&=s(n,this,l,{start:e,end:e+r-1});return!!o}draw(n,e,r,a){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(n.save(),draw(n,this,r,a),n.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function inRange$1(t,n,e,r){const a=t.options,{[e]:s}=t.getProps([e],r);return Math.abs(n-s)<a.radius+a.hitRadius}class PointElement extends Element$1{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(n){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,e,r){const a=this.options,{x:s,y:o}=this.getProps(["x","y"],r);return Math.pow(n-s,2)+Math.pow(e-o,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(n,e){return inRange$1(this,n,"x",e)}inYRange(n,e){return inRange$1(this,n,"y",e)}getCenterPoint(n){const{x:e,y:r}=this.getProps(["x","y"],n);return{x:e,y:r}}size(n){n=n||this.options||{};let e=n.radius||0;e=Math.max(e,e&&n.hoverRadius||0);const r=e&&n.borderWidth||0;return(e+r)*2}draw(n,e){const r=this.options;this.skip||r.radius<.1||!_isPointInArea(this,e,this.size(r)/2)||(n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.fillStyle=r.backgroundColor,drawPoint(n,r,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}function getBarBounds(t,n){const{x:e,y:r,base:a,width:s,height:o}=t.getProps(["x","y","base","width","height"],n);let l,u,f,d,p;return t.horizontal?(p=o/2,l=Math.min(e,a),u=Math.max(e,a),f=r-p,d=r+p):(p=s/2,l=e-p,u=e+p,f=Math.min(r,a),d=Math.max(r,a)),{left:l,top:f,right:u,bottom:d}}function skipOrLimit(t,n,e,r){return t?0:_limitValue(n,e,r)}function parseBorderWidth(t,n,e){const r=t.options.borderWidth,a=t.borderSkipped,s=toTRBL(r);return{t:skipOrLimit(a.top,s.top,0,e),r:skipOrLimit(a.right,s.right,0,n),b:skipOrLimit(a.bottom,s.bottom,0,e),l:skipOrLimit(a.left,s.left,0,n)}}function parseBorderRadius(t,n,e){const{enableBorderRadius:r}=t.getProps(["enableBorderRadius"]),a=t.options.borderRadius,s=toTRBLCorners(a),o=Math.min(n,e),l=t.borderSkipped,u=r||isObject(a);return{topLeft:skipOrLimit(!u||l.top||l.left,s.topLeft,0,o),topRight:skipOrLimit(!u||l.top||l.right,s.topRight,0,o),bottomLeft:skipOrLimit(!u||l.bottom||l.left,s.bottomLeft,0,o),bottomRight:skipOrLimit(!u||l.bottom||l.right,s.bottomRight,0,o)}}function boundingRects(t){const n=getBarBounds(t),e=n.right-n.left,r=n.bottom-n.top,a=parseBorderWidth(t,e/2,r/2),s=parseBorderRadius(t,e/2,r/2);return{outer:{x:n.left,y:n.top,w:e,h:r,radius:s},inner:{x:n.left+a.l,y:n.top+a.t,w:e-a.l-a.r,h:r-a.t-a.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(a.t,a.l)),topRight:Math.max(0,s.topRight-Math.max(a.t,a.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(a.b,a.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(a.b,a.r))}}}}function inRange(t,n,e,r){const a=n===null,s=e===null,l=t&&!(a&&s)&&getBarBounds(t,r);return l&&(a||_isBetween(n,l.left,l.right))&&(s||_isBetween(e,l.top,l.bottom))}function hasRadius(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function addNormalRectPath(t,n){t.rect(n.x,n.y,n.w,n.h)}function inflateRect(t,n,e={}){const r=t.x!==e.x?-n:0,a=t.y!==e.y?-n:0,s=(t.x+t.w!==e.x+e.w?n:0)-r,o=(t.y+t.h!==e.y+e.h?n:0)-a;return{x:t.x+r,y:t.y+a,w:t.w+s,h:t.h+o,radius:t.radius}}class BarElement extends Element$1{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(n){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,n&&Object.assign(this,n)}draw(n){const{inflateAmount:e,options:{borderColor:r,backgroundColor:a}}=this,{inner:s,outer:o}=boundingRects(this),l=hasRadius(o.radius)?addRoundedRectPath:addNormalRectPath;n.save(),(o.w!==s.w||o.h!==s.h)&&(n.beginPath(),l(n,inflateRect(o,e,s)),n.clip(),l(n,inflateRect(s,-e,o)),n.fillStyle=r,n.fill("evenodd")),n.beginPath(),l(n,inflateRect(s,e)),n.fillStyle=a,n.fill(),n.restore()}inRange(n,e,r){return inRange(this,n,e,r)}inXRange(n,e){return inRange(this,n,null,e)}inYRange(n,e){return inRange(this,null,n,e)}getCenterPoint(n){const{x:e,y:r,base:a,horizontal:s}=this.getProps(["x","y","base","horizontal"],n);return{x:s?(e+a)/2:e,y:s?r:(r+a)/2}}getRange(n){return n==="x"?this.width/2:this.height/2}}var elements=Object.freeze({__proto__:null,ArcElement,BarElement,LineElement,PointElement});const BORDER_COLORS=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],BACKGROUND_COLORS=BORDER_COLORS.map(t=>t.replace("rgb(","rgba(").replace(")",", 0.5)"));function getBorderColor(t){return BORDER_COLORS[t%BORDER_COLORS.length]}function getBackgroundColor(t){return BACKGROUND_COLORS[t%BACKGROUND_COLORS.length]}function colorizeDefaultDataset(t,n){return t.borderColor=getBorderColor(n),t.backgroundColor=getBackgroundColor(n),++n}function colorizeDoughnutDataset(t,n){return t.backgroundColor=t.data.map(()=>getBorderColor(n++)),n}function colorizePolarAreaDataset(t,n){return t.backgroundColor=t.data.map(()=>getBackgroundColor(n++)),n}function getColorizer(t){let n=0;return(e,r)=>{const a=t.getDatasetMeta(r).controller;a instanceof DoughnutController?n=colorizeDoughnutDataset(e,n):a instanceof PolarAreaController?n=colorizePolarAreaDataset(e,n):a&&(n=colorizeDefaultDataset(e,n))}}function containsColorsDefinitions(t){let n;for(n in t)if(t[n].borderColor||t[n].backgroundColor)return!0;return!1}function containsColorsDefinition(t){return t&&(t.borderColor||t.backgroundColor)}function containsDefaultColorsDefenitions(){return defaults.borderColor!=="rgba(0,0,0,0.1)"||defaults.backgroundColor!=="rgba(0,0,0,0.1)"}var plugin_colors={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(t,n,e){if(!e.enabled)return;const{data:{datasets:r},options:a}=t.config,{elements:s}=a,o=containsColorsDefinitions(r)||containsColorsDefinition(a)||s&&containsColorsDefinitions(s)||containsDefaultColorsDefenitions();if(!e.forceOverride&&o)return;const l=getColorizer(t);r.forEach(l)}};function lttbDecimation(t,n,e,r,a){const s=a.samples||r;if(s>=e)return t.slice(n,n+e);const o=[],l=(e-2)/(s-2);let u=0;const f=n+e-1;let d=n,p,v,y,x,S;for(o[u++]=t[d],p=0;p<s-2;p++){let D=0,A=0,I;const W=Math.floor((p+1)*l)+1+n,N=Math.min(Math.floor((p+2)*l)+1,e)+n,U=N-W;for(I=W;I<N;I++)D+=t[I].x,A+=t[I].y;D/=U,A/=U;const J=Math.floor(p*l)+1+n,m=Math.min(Math.floor((p+1)*l)+1,e)+n,{x:ne,y:ie}=t[d];for(y=x=-1,I=J;I<m;I++)x=.5*Math.abs((ne-D)*(t[I].y-ie)-(ne-t[I].x)*(A-ie)),x>y&&(y=x,v=t[I],S=I);o[u++]=v,d=S}return o[u++]=t[f],o}function minMaxDecimation(t,n,e,r){let a=0,s=0,o,l,u,f,d,p,v,y,x,S;const D=[],A=n+e-1,I=t[n].x,N=t[A].x-I;for(o=n;o<n+e;++o){l=t[o],u=(l.x-I)/N*r,f=l.y;const U=u|0;if(U===d)f<x?(x=f,p=o):f>S&&(S=f,v=o),a=(s*a+l.x)/++s;else{const J=o-1;if(!isNullOrUndef(p)&&!isNullOrUndef(v)){const m=Math.min(p,v),ne=Math.max(p,v);m!==y&&m!==J&&D.push({...t[m],x:a}),ne!==y&&ne!==J&&D.push({...t[ne],x:a})}o>0&&J!==y&&D.push(t[J]),D.push(l),d=U,s=0,x=S=f,p=v=y=o}}return D}function cleanDecimatedDataset(t){if(t._decimated){const n=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{configurable:!0,enumerable:!0,writable:!0,value:n})}}function cleanDecimatedData(t){t.data.datasets.forEach(n=>{cleanDecimatedDataset(n)})}function getStartAndCountOfVisiblePointsSimplified(t,n){const e=n.length;let r=0,a;const{iScale:s}=t,{min:o,max:l,minDefined:u,maxDefined:f}=s.getUserBounds();return u&&(r=_limitValue(_lookupByKey(n,s.axis,o).lo,0,e-1)),f?a=_limitValue(_lookupByKey(n,s.axis,l).hi+1,r,e)-r:a=e-r,{start:r,count:a}}var plugin_decimation={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,n,e)=>{if(!e.enabled){cleanDecimatedData(t);return}const r=t.width;t.data.datasets.forEach((a,s)=>{const{_data:o,indexAxis:l}=a,u=t.getDatasetMeta(s),f=o||a.data;if(resolve([l,t.options.indexAxis])==="y"||!u.controller.supportsDecimation)return;const d=t.scales[u.xAxisID];if(d.type!=="linear"&&d.type!=="time"||t.options.parsing)return;let{start:p,count:v}=getStartAndCountOfVisiblePointsSimplified(u,f);const y=e.threshold||4*r;if(v<=y){cleanDecimatedDataset(a);return}isNullOrUndef(o)&&(a._data=f,delete a.data,Object.defineProperty(a,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(S){this._data=S}}));let x;switch(e.algorithm){case"lttb":x=lttbDecimation(f,p,v,r,e);break;case"min-max":x=minMaxDecimation(f,p,v,r);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}a._decimated=x})},destroy(t){cleanDecimatedData(t)}};function _segments(t,n,e){const r=t.segments,a=t.points,s=n.points,o=[];for(const l of r){let{start:u,end:f}=l;f=_findSegmentEnd(u,f,a);const d=_getBounds(e,a[u],a[f],l.loop);if(!n.segments){o.push({source:l,target:d,start:a[u],end:a[f]});continue}const p=_boundSegments(n,d);for(const v of p){const y=_getBounds(e,s[v.start],s[v.end],v.loop),x=_boundSegment(l,a,y);for(const S of x)o.push({source:S,target:v,start:{[e]:_getEdge(d,y,"start",Math.max)},end:{[e]:_getEdge(d,y,"end",Math.min)}})}}return o}function _getBounds(t,n,e,r){if(r)return;let a=n[t],s=e[t];return t==="angle"&&(a=_normalizeAngle(a),s=_normalizeAngle(s)),{property:t,start:a,end:s}}function _pointsFromSegments(t,n){const{x:e=null,y:r=null}=t||{},a=n.points,s=[];return n.segments.forEach(({start:o,end:l})=>{l=_findSegmentEnd(o,l,a);const u=a[o],f=a[l];r!==null?(s.push({x:u.x,y:r}),s.push({x:f.x,y:r})):e!==null&&(s.push({x:e,y:u.y}),s.push({x:e,y:f.y}))}),s}function _findSegmentEnd(t,n,e){for(;n>t;n--){const r=e[n];if(!isNaN(r.x)&&!isNaN(r.y))break}return n}function _getEdge(t,n,e,r){return t&&n?r(t[e],n[e]):t?t[e]:n?n[e]:0}function _createBoundaryLine(t,n){let e=[],r=!1;return isArray(t)?(r=!0,e=t):e=_pointsFromSegments(t,n),e.length?new LineElement({points:e,options:{tension:0},_loop:r,_fullLoop:r}):null}function _shouldApplyFill(t){return t&&t.fill!==!1}function _resolveTarget(t,n,e){let a=t[n].fill;const s=[n];let o;if(!e)return a;for(;a!==!1&&s.indexOf(a)===-1;){if(!isNumberFinite(a))return a;if(o=t[a],!o)return!1;if(o.visible)return a;s.push(a),a=o.fill}return!1}function _decodeFill(t,n,e){const r=parseFillOption(t);if(isObject(r))return isNaN(r.value)?!1:r;let a=parseFloat(r);return isNumberFinite(a)&&Math.floor(a)===a?decodeTargetIndex(r[0],n,a,e):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function decodeTargetIndex(t,n,e,r){return(t==="-"||t==="+")&&(e=n+e),e===n||e<0||e>=r?!1:e}function _getTargetPixel(t,n){let e=null;return t==="start"?e=n.bottom:t==="end"?e=n.top:isObject(t)?e=n.getPixelForValue(t.value):n.getBasePixel&&(e=n.getBasePixel()),e}function _getTargetValue(t,n,e){let r;return t==="start"?r=e:t==="end"?r=n.options.reverse?n.min:n.max:isObject(t)?r=t.value:r=n.getBaseValue(),r}function parseFillOption(t){const n=t.options,e=n.fill;let r=valueOrDefault(e&&e.target,e);return r===void 0&&(r=!!n.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function _buildStackLine(t){const{scale:n,index:e,line:r}=t,a=[],s=r.segments,o=r.points,l=getLinesBelow(n,e);l.push(_createBoundaryLine({x:null,y:n.bottom},r));for(let u=0;u<s.length;u++){const f=s[u];for(let d=f.start;d<=f.end;d++)addPointsBelow(a,o[d],l)}return new LineElement({points:a,options:{}})}function getLinesBelow(t,n){const e=[],r=t.getMatchingVisibleMetas("line");for(let a=0;a<r.length;a++){const s=r[a];if(s.index===n)break;s.hidden||e.unshift(s.dataset)}return e}function addPointsBelow(t,n,e){const r=[];for(let a=0;a<e.length;a++){const s=e[a],{first:o,last:l,point:u}=findPoint(s,n,"x");if(!(!u||o&&l)){if(o)r.unshift(u);else if(t.push(u),!l)break}}t.push(...r)}function findPoint(t,n,e){const r=t.interpolate(n,e);if(!r)return{};const a=r[e],s=t.segments,o=t.points;let l=!1,u=!1;for(let f=0;f<s.length;f++){const d=s[f],p=o[d.start][e],v=o[d.end][e];if(_isBetween(a,p,v)){l=a===p,u=a===v;break}}return{first:l,last:u,point:r}}class simpleArc{constructor(n){this.x=n.x,this.y=n.y,this.radius=n.radius}pathSegment(n,e,r){const{x:a,y:s,radius:o}=this;return e=e||{start:0,end:TAU},n.arc(a,s,o,e.end,e.start,!0),!r.bounds}interpolate(n){const{x:e,y:r,radius:a}=this,s=n.angle;return{x:e+Math.cos(s)*a,y:r+Math.sin(s)*a,angle:s}}}function _getTarget(t){const{chart:n,fill:e,line:r}=t;if(isNumberFinite(e))return getLineByIndex(n,e);if(e==="stack")return _buildStackLine(t);if(e==="shape")return!0;const a=computeBoundary(t);return a instanceof simpleArc?a:_createBoundaryLine(a,r)}function getLineByIndex(t,n){const e=t.getDatasetMeta(n);return e&&t.isDatasetVisible(n)?e.dataset:null}function computeBoundary(t){return(t.scale||{}).getPointPositionForValue?computeCircularBoundary(t):computeLinearBoundary(t)}function computeLinearBoundary(t){const{scale:n={},fill:e}=t,r=_getTargetPixel(e,n);if(isNumberFinite(r)){const a=n.isHorizontal();return{x:a?r:null,y:a?null:r}}return null}function computeCircularBoundary(t){const{scale:n,fill:e}=t,r=n.options,a=n.getLabels().length,s=r.reverse?n.max:n.min,o=_getTargetValue(e,n,s),l=[];if(r.grid.circular){const u=n.getPointPositionForValue(0,s);return new simpleArc({x:u.x,y:u.y,radius:n.getDistanceFromCenterForValue(o)})}for(let u=0;u<a;++u)l.push(n.getPointPositionForValue(u,o));return l}function _drawfill(t,n,e){const r=_getTarget(n),{chart:a,index:s,line:o,scale:l,axis:u}=n,f=o.options,d=f.fill,p=f.backgroundColor,{above:v=p,below:y=p}=d||{},x=a.getDatasetMeta(s),S=getDatasetClipArea(a,x);r&&o.points.length&&(clipArea(t,e),doFill(t,{line:o,target:r,above:v,below:y,area:e,scale:l,axis:u,clip:S}),unclipArea(t))}function doFill(t,n){const{line:e,target:r,above:a,below:s,area:o,scale:l,clip:u}=n,f=e._loop?"angle":n.axis;t.save();let d=s;s!==a&&(f==="x"?(clipVertical(t,r,o.top),fill(t,{line:e,target:r,color:a,scale:l,property:f,clip:u}),t.restore(),t.save(),clipVertical(t,r,o.bottom)):f==="y"&&(clipHorizontal(t,r,o.left),fill(t,{line:e,target:r,color:s,scale:l,property:f,clip:u}),t.restore(),t.save(),clipHorizontal(t,r,o.right),d=a)),fill(t,{line:e,target:r,color:d,scale:l,property:f,clip:u}),t.restore()}function clipVertical(t,n,e){const{segments:r,points:a}=n;let s=!0,o=!1;t.beginPath();for(const l of r){const{start:u,end:f}=l,d=a[u],p=a[_findSegmentEnd(u,f,a)];s?(t.moveTo(d.x,d.y),s=!1):(t.lineTo(d.x,e),t.lineTo(d.x,d.y)),o=!!n.pathSegment(t,l,{move:o}),o?t.closePath():t.lineTo(p.x,e)}t.lineTo(n.first().x,e),t.closePath(),t.clip()}function clipHorizontal(t,n,e){const{segments:r,points:a}=n;let s=!0,o=!1;t.beginPath();for(const l of r){const{start:u,end:f}=l,d=a[u],p=a[_findSegmentEnd(u,f,a)];s?(t.moveTo(d.x,d.y),s=!1):(t.lineTo(e,d.y),t.lineTo(d.x,d.y)),o=!!n.pathSegment(t,l,{move:o}),o?t.closePath():t.lineTo(e,p.y)}t.lineTo(e,n.first().y),t.closePath(),t.clip()}function fill(t,n){const{line:e,target:r,property:a,color:s,scale:o,clip:l}=n,u=_segments(e,r,a);for(const{source:f,target:d,start:p,end:v}of u){const{style:{backgroundColor:y=s}={}}=f,x=r!==!0;t.save(),t.fillStyle=y,clipBounds(t,o,l,x&&_getBounds(a,p,v)),t.beginPath();const S=!!e.pathSegment(t,f);let D;if(x){S?t.closePath():interpolatedLineTo(t,r,v,a);const A=!!r.pathSegment(t,d,{move:S,reverse:!0});D=S&&A,D||interpolatedLineTo(t,r,p,a)}t.closePath(),t.fill(D?"evenodd":"nonzero"),t.restore()}}function clipBounds(t,n,e,r){const a=n.chart.chartArea,{property:s,start:o,end:l}=r||{};if(s==="x"||s==="y"){let u,f,d,p;s==="x"?(u=o,f=a.top,d=l,p=a.bottom):(u=a.left,f=o,d=a.right,p=l),t.beginPath(),e&&(u=Math.max(u,e.left),d=Math.min(d,e.right),f=Math.max(f,e.top),p=Math.min(p,e.bottom)),t.rect(u,f,d-u,p-f),t.clip()}}function interpolatedLineTo(t,n,e,r){const a=n.interpolate(e,r);a&&t.lineTo(a.x,a.y)}var index={id:"filler",afterDatasetsUpdate(t,n,e){const r=(t.data.datasets||[]).length,a=[];let s,o,l,u;for(o=0;o<r;++o)s=t.getDatasetMeta(o),l=s.dataset,u=null,l&&l.options&&l instanceof LineElement&&(u={visible:t.isDatasetVisible(o),index:o,fill:_decodeFill(l,o,r),chart:t,axis:s.controller.options.indexAxis,scale:s.vScale,line:l}),s.$filler=u,a.push(u);for(o=0;o<r;++o)u=a[o],!(!u||u.fill===!1)&&(u.fill=_resolveTarget(a,o,e.propagate))},beforeDraw(t,n,e){const r=e.drawTime==="beforeDraw",a=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let o=a.length-1;o>=0;--o){const l=a[o].$filler;l&&(l.line.updateControlPoints(s,l.axis),r&&l.fill&&_drawfill(t.ctx,l,s))}},beforeDatasetsDraw(t,n,e){if(e.drawTime!=="beforeDatasetsDraw")return;const r=t.getSortedVisibleDatasetMetas();for(let a=r.length-1;a>=0;--a){const s=r[a].$filler;_shouldApplyFill(s)&&_drawfill(t.ctx,s,t.chartArea)}},beforeDatasetDraw(t,n,e){const r=n.meta.$filler;!_shouldApplyFill(r)||e.drawTime!=="beforeDatasetDraw"||_drawfill(t.ctx,r,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const getBoxSize=(t,n)=>{let{boxHeight:e=n,boxWidth:r=n}=t;return t.usePointStyle&&(e=Math.min(e,n),r=t.pointStyleWidth||Math.min(r,n)),{boxWidth:r,boxHeight:e,itemHeight:Math.max(n,e)}},itemsEqual=(t,n)=>t!==null&&n!==null&&t.datasetIndex===n.datasetIndex&&t.index===n.index;class Legend extends Element$1{constructor(n){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=n.chart,this.options=n.options,this.ctx=n.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(n,e,r){this.maxWidth=n,this.maxHeight=e,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const n=this.options.labels||{};let e=callback(n.generateLabels,[this.chart],this)||[];n.filter&&(e=e.filter(r=>n.filter(r,this.chart.data))),n.sort&&(e=e.sort((r,a)=>n.sort(r,a,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:n,ctx:e}=this;if(!n.display){this.width=this.height=0;return}const r=n.labels,a=toFont(r.font),s=a.size,o=this._computeTitleHeight(),{boxWidth:l,itemHeight:u}=getBoxSize(r,s);let f,d;e.font=a.string,this.isHorizontal()?(f=this.maxWidth,d=this._fitRows(o,s,l,u)+10):(d=this.maxHeight,f=this._fitCols(o,a,l,u)+10),this.width=Math.min(f,n.maxWidth||this.maxWidth),this.height=Math.min(d,n.maxHeight||this.maxHeight)}_fitRows(n,e,r,a){const{ctx:s,maxWidth:o,options:{labels:{padding:l}}}=this,u=this.legendHitBoxes=[],f=this.lineWidths=[0],d=a+l;let p=n;s.textAlign="left",s.textBaseline="middle";let v=-1,y=-d;return this.legendItems.forEach((x,S)=>{const D=r+e/2+s.measureText(x.text).width;(S===0||f[f.length-1]+D+2*l>o)&&(p+=d,f[f.length-(S>0?0:1)]=0,y+=d,v++),u[S]={left:0,top:y,row:v,width:D,height:a},f[f.length-1]+=D+l}),p}_fitCols(n,e,r,a){const{ctx:s,maxHeight:o,options:{labels:{padding:l}}}=this,u=this.legendHitBoxes=[],f=this.columnSizes=[],d=o-n;let p=l,v=0,y=0,x=0,S=0;return this.legendItems.forEach((D,A)=>{const{itemWidth:I,itemHeight:W}=calculateItemSize(r,e,s,D,a);A>0&&y+W+2*l>d&&(p+=v+l,f.push({width:v,height:y}),x+=v+l,S++,v=y=0),u[A]={left:x,top:y,col:S,width:I,height:W},v=Math.max(v,I),y+=W+l}),p+=v,f.push({width:v,height:y}),p}adjustHitBoxes(){if(!this.options.display)return;const n=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:r,labels:{padding:a},rtl:s}}=this,o=getRtlAdapter(s,this.left,this.width);if(this.isHorizontal()){let l=0,u=_alignStartEnd(r,this.left+a,this.right-this.lineWidths[l]);for(const f of e)l!==f.row&&(l=f.row,u=_alignStartEnd(r,this.left+a,this.right-this.lineWidths[l])),f.top+=this.top+n+a,f.left=o.leftForLtr(o.x(u),f.width),u+=f.width+a}else{let l=0,u=_alignStartEnd(r,this.top+n+a,this.bottom-this.columnSizes[l].height);for(const f of e)f.col!==l&&(l=f.col,u=_alignStartEnd(r,this.top+n+a,this.bottom-this.columnSizes[l].height)),f.top=u,f.left+=this.left+a,f.left=o.leftForLtr(o.x(f.left),f.width),u+=f.height+a}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const n=this.ctx;clipArea(n,this),this._draw(),unclipArea(n)}}_draw(){const{options:n,columnSizes:e,lineWidths:r,ctx:a}=this,{align:s,labels:o}=n,l=defaults.color,u=getRtlAdapter(n.rtl,this.left,this.width),f=toFont(o.font),{padding:d}=o,p=f.size,v=p/2;let y;this.drawTitle(),a.textAlign=u.textAlign("left"),a.textBaseline="middle",a.lineWidth=.5,a.font=f.string;const{boxWidth:x,boxHeight:S,itemHeight:D}=getBoxSize(o,p),A=function(J,m,ne){if(isNaN(x)||x<=0||isNaN(S)||S<0)return;a.save();const ie=valueOrDefault(ne.lineWidth,1);if(a.fillStyle=valueOrDefault(ne.fillStyle,l),a.lineCap=valueOrDefault(ne.lineCap,"butt"),a.lineDashOffset=valueOrDefault(ne.lineDashOffset,0),a.lineJoin=valueOrDefault(ne.lineJoin,"miter"),a.lineWidth=ie,a.strokeStyle=valueOrDefault(ne.strokeStyle,l),a.setLineDash(valueOrDefault(ne.lineDash,[])),o.usePointStyle){const ge={radius:S*Math.SQRT2/2,pointStyle:ne.pointStyle,rotation:ne.rotation,borderWidth:ie},ve=u.xPlus(J,x/2),_e=m+v;drawPointLegend(a,ge,ve,_e,o.pointStyleWidth&&x)}else{const ge=m+Math.max((p-S)/2,0),ve=u.leftForLtr(J,x),_e=toTRBLCorners(ne.borderRadius);a.beginPath(),Object.values(_e).some(ue=>ue!==0)?addRoundedRectPath(a,{x:ve,y:ge,w:x,h:S,radius:_e}):a.rect(ve,ge,x,S),a.fill(),ie!==0&&a.stroke()}a.restore()},I=function(J,m,ne){renderText(a,ne.text,J,m+D/2,f,{strikethrough:ne.hidden,textAlign:u.textAlign(ne.textAlign)})},W=this.isHorizontal(),N=this._computeTitleHeight();W?y={x:_alignStartEnd(s,this.left+d,this.right-r[0]),y:this.top+d+N,line:0}:y={x:this.left+d,y:_alignStartEnd(s,this.top+N+d,this.bottom-e[0].height),line:0},overrideTextDirection(this.ctx,n.textDirection);const U=D+d;this.legendItems.forEach((J,m)=>{a.strokeStyle=J.fontColor,a.fillStyle=J.fontColor;const ne=a.measureText(J.text).width,ie=u.textAlign(J.textAlign||(J.textAlign=o.textAlign)),ge=x+v+ne;let ve=y.x,_e=y.y;u.setWidth(this.width),W?m>0&&ve+ge+d>this.right&&(_e=y.y+=U,y.line++,ve=y.x=_alignStartEnd(s,this.left+d,this.right-r[y.line])):m>0&&_e+U>this.bottom&&(ve=y.x=ve+e[y.line].width+d,y.line++,_e=y.y=_alignStartEnd(s,this.top+N+d,this.bottom-e[y.line].height));const ue=u.x(ve);if(A(ue,_e,J),ve=_textX(ie,ve+x+v,W?ve+ge:this.right,n.rtl),I(u.x(ve),_e,J),W)y.x+=ge+d;else if(typeof J.text!="string"){const He=f.lineHeight;y.y+=calculateLegendItemHeight(J,He)+d}else y.y+=U}),restoreTextDirection(this.ctx,n.textDirection)}drawTitle(){const n=this.options,e=n.title,r=toFont(e.font),a=toPadding(e.padding);if(!e.display)return;const s=getRtlAdapter(n.rtl,this.left,this.width),o=this.ctx,l=e.position,u=r.size/2,f=a.top+u;let d,p=this.left,v=this.width;if(this.isHorizontal())v=Math.max(...this.lineWidths),d=this.top+f,p=_alignStartEnd(n.align,p,this.right-v);else{const x=this.columnSizes.reduce((S,D)=>Math.max(S,D.height),0);d=f+_alignStartEnd(n.align,this.top,this.bottom-x-n.labels.padding-this._computeTitleHeight())}const y=_alignStartEnd(l,p,p+v);o.textAlign=s.textAlign(_toLeftRightCenter(l)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=r.string,renderText(o,e.text,y,d,r)}_computeTitleHeight(){const n=this.options.title,e=toFont(n.font),r=toPadding(n.padding);return n.display?e.lineHeight+r.height:0}_getLegendItemAt(n,e){let r,a,s;if(_isBetween(n,this.left,this.right)&&_isBetween(e,this.top,this.bottom)){for(s=this.legendHitBoxes,r=0;r<s.length;++r)if(a=s[r],_isBetween(n,a.left,a.left+a.width)&&_isBetween(e,a.top,a.top+a.height))return this.legendItems[r]}return null}handleEvent(n){const e=this.options;if(!isListened(n.type,e))return;const r=this._getLegendItemAt(n.x,n.y);if(n.type==="mousemove"||n.type==="mouseout"){const a=this._hoveredItem,s=itemsEqual(a,r);a&&!s&&callback(e.onLeave,[n,a,this],this),this._hoveredItem=r,r&&!s&&callback(e.onHover,[n,r,this],this)}else r&&callback(e.onClick,[n,r,this],this)}}function calculateItemSize(t,n,e,r,a){const s=calculateItemWidth(r,t,n,e),o=calculateItemHeight(a,r,n.lineHeight);return{itemWidth:s,itemHeight:o}}function calculateItemWidth(t,n,e,r){let a=t.text;return a&&typeof a!="string"&&(a=a.reduce((s,o)=>s.length>o.length?s:o)),n+e.size/2+r.measureText(a).width}function calculateItemHeight(t,n,e){let r=t;return typeof n.text!="string"&&(r=calculateLegendItemHeight(n,e)),r}function calculateLegendItemHeight(t,n){const e=t.text?t.text.length:0;return n*e}function isListened(t,n){return!!((t==="mousemove"||t==="mouseout")&&(n.onHover||n.onLeave)||n.onClick&&(t==="click"||t==="mouseup"))}var plugin_legend={id:"legend",_element:Legend,start(t,n,e){const r=t.legend=new Legend({ctx:t.ctx,options:e,chart:t});layouts.configure(t,r,e),layouts.addBox(t,r)},stop(t){layouts.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,n,e){const r=t.legend;layouts.configure(t,r,e),r.options=e},afterUpdate(t){const n=t.legend;n.buildLabels(),n.adjustHitBoxes()},afterEvent(t,n){n.replay||t.legend.handleEvent(n.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,n,e){const r=n.datasetIndex,a=e.chart;a.isDatasetVisible(r)?(a.hide(r),n.hidden=!0):(a.show(r),n.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const n=t.data.datasets,{labels:{usePointStyle:e,pointStyle:r,textAlign:a,color:s,useBorderRadius:o,borderRadius:l}}=t.legend.options;return t._getSortedDatasetMetas().map(u=>{const f=u.controller.getStyle(e?0:void 0),d=toPadding(f.borderWidth);return{text:n[u.index].label,fillStyle:f.backgroundColor,fontColor:s,hidden:!u.visible,lineCap:f.borderCapStyle,lineDash:f.borderDash,lineDashOffset:f.borderDashOffset,lineJoin:f.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:f.borderColor,pointStyle:r||f.pointStyle,rotation:f.rotation,textAlign:a||f.textAlign,borderRadius:o&&(l||f.borderRadius),datasetIndex:u.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Title extends Element$1{constructor(n){super(),this.chart=n.chart,this.options=n.options,this.ctx=n.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(n,e){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=n,this.height=this.bottom=e;const a=isArray(r.text)?r.text.length:1;this._padding=toPadding(r.padding);const s=a*toFont(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const n=this.options.position;return n==="top"||n==="bottom"}_drawArgs(n){const{top:e,left:r,bottom:a,right:s,options:o}=this,l=o.align;let u=0,f,d,p;return this.isHorizontal()?(d=_alignStartEnd(l,r,s),p=e+n,f=s-r):(o.position==="left"?(d=r+n,p=_alignStartEnd(l,a,e),u=PI*-.5):(d=s-n,p=_alignStartEnd(l,e,a),u=PI*.5),f=a-e),{titleX:d,titleY:p,maxWidth:f,rotation:u}}draw(){const n=this.ctx,e=this.options;if(!e.display)return;const r=toFont(e.font),s=r.lineHeight/2+this._padding.top,{titleX:o,titleY:l,maxWidth:u,rotation:f}=this._drawArgs(s);renderText(n,e.text,0,0,r,{color:e.color,maxWidth:u,rotation:f,textAlign:_toLeftRightCenter(e.align),textBaseline:"middle",translation:[o,l]})}}function createTitle(t,n){const e=new Title({ctx:t.ctx,options:n,chart:t});layouts.configure(t,e,n),layouts.addBox(t,e),t.titleBlock=e}var plugin_title={id:"title",_element:Title,start(t,n,e){createTitle(t,e)},stop(t){const n=t.titleBlock;layouts.removeBox(t,n),delete t.titleBlock},beforeUpdate(t,n,e){const r=t.titleBlock;layouts.configure(t,r,e),r.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const map=new WeakMap;var plugin_subtitle={id:"subtitle",start(t,n,e){const r=new Title({ctx:t.ctx,options:e,chart:t});layouts.configure(t,r,e),layouts.addBox(t,r),map.set(t,r)},stop(t){layouts.removeBox(t,map.get(t)),map.delete(t)},beforeUpdate(t,n,e){const r=map.get(t);layouts.configure(t,r,e),r.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const positioners={average(t){if(!t.length)return!1;let n,e,r=new Set,a=0,s=0;for(n=0,e=t.length;n<e;++n){const l=t[n].element;if(l&&l.hasValue()){const u=l.tooltipPosition();r.add(u.x),a+=u.y,++s}}return s===0||r.size===0?!1:{x:[...r].reduce((l,u)=>l+u)/r.size,y:a/s}},nearest(t,n){if(!t.length)return!1;let e=n.x,r=n.y,a=Number.POSITIVE_INFINITY,s,o,l;for(s=0,o=t.length;s<o;++s){const u=t[s].element;if(u&&u.hasValue()){const f=u.getCenterPoint(),d=distanceBetweenPoints(n,f);d<a&&(a=d,l=u)}}if(l){const u=l.tooltipPosition();e=u.x,r=u.y}return{x:e,y:r}}};function pushOrConcat(t,n){return n&&(isArray(n)?Array.prototype.push.apply(t,n):t.push(n)),t}function splitNewlines(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function createTooltipItem(t,n){const{element:e,datasetIndex:r,index:a}=n,s=t.getDatasetMeta(r).controller,{label:o,value:l}=s.getLabelAndValue(a);return{chart:t,label:o,parsed:s.getParsed(a),raw:t.data.datasets[r].data[a],formattedValue:l,dataset:s.getDataset(),dataIndex:a,datasetIndex:r,element:e}}function getTooltipSize(t,n){const e=t.chart.ctx,{body:r,footer:a,title:s}=t,{boxWidth:o,boxHeight:l}=n,u=toFont(n.bodyFont),f=toFont(n.titleFont),d=toFont(n.footerFont),p=s.length,v=a.length,y=r.length,x=toPadding(n.padding);let S=x.height,D=0,A=r.reduce((N,U)=>N+U.before.length+U.lines.length+U.after.length,0);if(A+=t.beforeBody.length+t.afterBody.length,p&&(S+=p*f.lineHeight+(p-1)*n.titleSpacing+n.titleMarginBottom),A){const N=n.displayColors?Math.max(l,u.lineHeight):u.lineHeight;S+=y*N+(A-y)*u.lineHeight+(A-1)*n.bodySpacing}v&&(S+=n.footerMarginTop+v*d.lineHeight+(v-1)*n.footerSpacing);let I=0;const W=function(N){D=Math.max(D,e.measureText(N).width+I)};return e.save(),e.font=f.string,each(t.title,W),e.font=u.string,each(t.beforeBody.concat(t.afterBody),W),I=n.displayColors?o+2+n.boxPadding:0,each(r,N=>{each(N.before,W),each(N.lines,W),each(N.after,W)}),I=0,e.font=d.string,each(t.footer,W),e.restore(),D+=x.width,{width:D,height:S}}function determineYAlign(t,n){const{y:e,height:r}=n;return e<r/2?"top":e>t.height-r/2?"bottom":"center"}function doesNotFitWithAlign(t,n,e,r){const{x:a,width:s}=r,o=e.caretSize+e.caretPadding;if(t==="left"&&a+s+o>n.width||t==="right"&&a-s-o<0)return!0}function determineXAlign(t,n,e,r){const{x:a,width:s}=e,{width:o,chartArea:{left:l,right:u}}=t;let f="center";return r==="center"?f=a<=(l+u)/2?"left":"right":a<=s/2?f="left":a>=o-s/2&&(f="right"),doesNotFitWithAlign(f,t,n,e)&&(f="center"),f}function determineAlignment(t,n,e){const r=e.yAlign||n.yAlign||determineYAlign(t,e);return{xAlign:e.xAlign||n.xAlign||determineXAlign(t,n,e,r),yAlign:r}}function alignX(t,n){let{x:e,width:r}=t;return n==="right"?e-=r:n==="center"&&(e-=r/2),e}function alignY(t,n,e){let{y:r,height:a}=t;return n==="top"?r+=e:n==="bottom"?r-=a+e:r-=a/2,r}function getBackgroundPoint(t,n,e,r){const{caretSize:a,caretPadding:s,cornerRadius:o}=t,{xAlign:l,yAlign:u}=e,f=a+s,{topLeft:d,topRight:p,bottomLeft:v,bottomRight:y}=toTRBLCorners(o);let x=alignX(n,l);const S=alignY(n,u,f);return u==="center"?l==="left"?x+=f:l==="right"&&(x-=f):l==="left"?x-=Math.max(d,v)+a:l==="right"&&(x+=Math.max(p,y)+a),{x:_limitValue(x,0,r.width-n.width),y:_limitValue(S,0,r.height-n.height)}}function getAlignedX(t,n,e){const r=toPadding(e.padding);return n==="center"?t.x+t.width/2:n==="right"?t.x+t.width-r.right:t.x+r.left}function getBeforeAfterBodyLines(t){return pushOrConcat([],splitNewlines(t))}function createTooltipContext(t,n,e){return createContext(t,{tooltip:n,tooltipItems:e,type:"tooltip"})}function overrideCallbacks(t,n){const e=n&&n.dataset&&n.dataset.tooltip&&n.dataset.tooltip.callbacks;return e?t.override(e):t}const defaultCallbacks={beforeTitle:noop,title(t){if(t.length>0){const n=t[0],e=n.chart.data.labels,r=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return n.dataset.label||"";if(n.label)return n.label;if(r>0&&n.dataIndex<r)return e[n.dataIndex]}return""},afterTitle:noop,beforeBody:noop,beforeLabel:noop,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let n=t.dataset.label||"";n&&(n+=": ");const e=t.formattedValue;return isNullOrUndef(e)||(n+=e),n},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:noop,afterBody:noop,beforeFooter:noop,footer:noop,afterFooter:noop};function invokeCallbackWithFallback(t,n,e,r){const a=t[n].call(e,r);return typeof a>"u"?defaultCallbacks[n].call(e,r):a}class Tooltip extends Element$1{static positioners=positioners;constructor(n){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=n.chart,this.options=n.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(n){this.options=n,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const n=this._cachedAnimations;if(n)return n;const e=this.chart,r=this.options.setContext(this.getContext()),a=r.enabled&&e.options.animation&&r.animations,s=new Animations(this.chart,a);return a._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=createTooltipContext(this.chart.getContext(),this,this._tooltipItems))}getTitle(n,e){const{callbacks:r}=e,a=invokeCallbackWithFallback(r,"beforeTitle",this,n),s=invokeCallbackWithFallback(r,"title",this,n),o=invokeCallbackWithFallback(r,"afterTitle",this,n);let l=[];return l=pushOrConcat(l,splitNewlines(a)),l=pushOrConcat(l,splitNewlines(s)),l=pushOrConcat(l,splitNewlines(o)),l}getBeforeBody(n,e){return getBeforeAfterBodyLines(invokeCallbackWithFallback(e.callbacks,"beforeBody",this,n))}getBody(n,e){const{callbacks:r}=e,a=[];return each(n,s=>{const o={before:[],lines:[],after:[]},l=overrideCallbacks(r,s);pushOrConcat(o.before,splitNewlines(invokeCallbackWithFallback(l,"beforeLabel",this,s))),pushOrConcat(o.lines,invokeCallbackWithFallback(l,"label",this,s)),pushOrConcat(o.after,splitNewlines(invokeCallbackWithFallback(l,"afterLabel",this,s))),a.push(o)}),a}getAfterBody(n,e){return getBeforeAfterBodyLines(invokeCallbackWithFallback(e.callbacks,"afterBody",this,n))}getFooter(n,e){const{callbacks:r}=e,a=invokeCallbackWithFallback(r,"beforeFooter",this,n),s=invokeCallbackWithFallback(r,"footer",this,n),o=invokeCallbackWithFallback(r,"afterFooter",this,n);let l=[];return l=pushOrConcat(l,splitNewlines(a)),l=pushOrConcat(l,splitNewlines(s)),l=pushOrConcat(l,splitNewlines(o)),l}_createItems(n){const e=this._active,r=this.chart.data,a=[],s=[],o=[];let l=[],u,f;for(u=0,f=e.length;u<f;++u)l.push(createTooltipItem(this.chart,e[u]));return n.filter&&(l=l.filter((d,p,v)=>n.filter(d,p,v,r))),n.itemSort&&(l=l.sort((d,p)=>n.itemSort(d,p,r))),each(l,d=>{const p=overrideCallbacks(n.callbacks,d);a.push(invokeCallbackWithFallback(p,"labelColor",this,d)),s.push(invokeCallbackWithFallback(p,"labelPointStyle",this,d)),o.push(invokeCallbackWithFallback(p,"labelTextColor",this,d))}),this.labelColors=a,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=l,l}update(n,e){const r=this.options.setContext(this.getContext()),a=this._active;let s,o=[];if(!a.length)this.opacity!==0&&(s={opacity:0});else{const l=positioners[r.position].call(this,a,this._eventPosition);o=this._createItems(r),this.title=this.getTitle(o,r),this.beforeBody=this.getBeforeBody(o,r),this.body=this.getBody(o,r),this.afterBody=this.getAfterBody(o,r),this.footer=this.getFooter(o,r);const u=this._size=getTooltipSize(this,r),f=Object.assign({},l,u),d=determineAlignment(this.chart,r,f),p=getBackgroundPoint(r,f,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,s={opacity:1,x:p.x,y:p.y,width:u.width,height:u.height,caretX:l.x,caretY:l.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),n&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(n,e,r,a){const s=this.getCaretPosition(n,r,a);e.lineTo(s.x1,s.y1),e.lineTo(s.x2,s.y2),e.lineTo(s.x3,s.y3)}getCaretPosition(n,e,r){const{xAlign:a,yAlign:s}=this,{caretSize:o,cornerRadius:l}=r,{topLeft:u,topRight:f,bottomLeft:d,bottomRight:p}=toTRBLCorners(l),{x:v,y}=n,{width:x,height:S}=e;let D,A,I,W,N,U;return s==="center"?(N=y+S/2,a==="left"?(D=v,A=D-o,W=N+o,U=N-o):(D=v+x,A=D+o,W=N-o,U=N+o),I=D):(a==="left"?A=v+Math.max(u,d)+o:a==="right"?A=v+x-Math.max(f,p)-o:A=this.caretX,s==="top"?(W=y,N=W-o,D=A-o,I=A+o):(W=y+S,N=W+o,D=A+o,I=A-o),U=W),{x1:D,x2:A,x3:I,y1:W,y2:N,y3:U}}drawTitle(n,e,r){const a=this.title,s=a.length;let o,l,u;if(s){const f=getRtlAdapter(r.rtl,this.x,this.width);for(n.x=getAlignedX(this,r.titleAlign,r),e.textAlign=f.textAlign(r.titleAlign),e.textBaseline="middle",o=toFont(r.titleFont),l=r.titleSpacing,e.fillStyle=r.titleColor,e.font=o.string,u=0;u<s;++u)e.fillText(a[u],f.x(n.x),n.y+o.lineHeight/2),n.y+=o.lineHeight+l,u+1===s&&(n.y+=r.titleMarginBottom-l)}}_drawColorBox(n,e,r,a,s){const o=this.labelColors[r],l=this.labelPointStyles[r],{boxHeight:u,boxWidth:f}=s,d=toFont(s.bodyFont),p=getAlignedX(this,"left",s),v=a.x(p),y=u<d.lineHeight?(d.lineHeight-u)/2:0,x=e.y+y;if(s.usePointStyle){const S={radius:Math.min(f,u)/2,pointStyle:l.pointStyle,rotation:l.rotation,borderWidth:1},D=a.leftForLtr(v,f)+f/2,A=x+u/2;n.strokeStyle=s.multiKeyBackground,n.fillStyle=s.multiKeyBackground,drawPoint(n,S,D,A),n.strokeStyle=o.borderColor,n.fillStyle=o.backgroundColor,drawPoint(n,S,D,A)}else{n.lineWidth=isObject(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,n.strokeStyle=o.borderColor,n.setLineDash(o.borderDash||[]),n.lineDashOffset=o.borderDashOffset||0;const S=a.leftForLtr(v,f),D=a.leftForLtr(a.xPlus(v,1),f-2),A=toTRBLCorners(o.borderRadius);Object.values(A).some(I=>I!==0)?(n.beginPath(),n.fillStyle=s.multiKeyBackground,addRoundedRectPath(n,{x:S,y:x,w:f,h:u,radius:A}),n.fill(),n.stroke(),n.fillStyle=o.backgroundColor,n.beginPath(),addRoundedRectPath(n,{x:D,y:x+1,w:f-2,h:u-2,radius:A}),n.fill()):(n.fillStyle=s.multiKeyBackground,n.fillRect(S,x,f,u),n.strokeRect(S,x,f,u),n.fillStyle=o.backgroundColor,n.fillRect(D,x+1,f-2,u-2))}n.fillStyle=this.labelTextColors[r]}drawBody(n,e,r){const{body:a}=this,{bodySpacing:s,bodyAlign:o,displayColors:l,boxHeight:u,boxWidth:f,boxPadding:d}=r,p=toFont(r.bodyFont);let v=p.lineHeight,y=0;const x=getRtlAdapter(r.rtl,this.x,this.width),S=function(ne){e.fillText(ne,x.x(n.x+y),n.y+v/2),n.y+=v+s},D=x.textAlign(o);let A,I,W,N,U,J,m;for(e.textAlign=o,e.textBaseline="middle",e.font=p.string,n.x=getAlignedX(this,D,r),e.fillStyle=r.bodyColor,each(this.beforeBody,S),y=l&&D!=="right"?o==="center"?f/2+d:f+2+d:0,N=0,J=a.length;N<J;++N){for(A=a[N],I=this.labelTextColors[N],e.fillStyle=I,each(A.before,S),W=A.lines,l&&W.length&&(this._drawColorBox(e,n,N,x,r),v=Math.max(p.lineHeight,u)),U=0,m=W.length;U<m;++U)S(W[U]),v=p.lineHeight;each(A.after,S)}y=0,v=p.lineHeight,each(this.afterBody,S),n.y-=s}drawFooter(n,e,r){const a=this.footer,s=a.length;let o,l;if(s){const u=getRtlAdapter(r.rtl,this.x,this.width);for(n.x=getAlignedX(this,r.footerAlign,r),n.y+=r.footerMarginTop,e.textAlign=u.textAlign(r.footerAlign),e.textBaseline="middle",o=toFont(r.footerFont),e.fillStyle=r.footerColor,e.font=o.string,l=0;l<s;++l)e.fillText(a[l],u.x(n.x),n.y+o.lineHeight/2),n.y+=o.lineHeight+r.footerSpacing}}drawBackground(n,e,r,a){const{xAlign:s,yAlign:o}=this,{x:l,y:u}=n,{width:f,height:d}=r,{topLeft:p,topRight:v,bottomLeft:y,bottomRight:x}=toTRBLCorners(a.cornerRadius);e.fillStyle=a.backgroundColor,e.strokeStyle=a.borderColor,e.lineWidth=a.borderWidth,e.beginPath(),e.moveTo(l+p,u),o==="top"&&this.drawCaret(n,e,r,a),e.lineTo(l+f-v,u),e.quadraticCurveTo(l+f,u,l+f,u+v),o==="center"&&s==="right"&&this.drawCaret(n,e,r,a),e.lineTo(l+f,u+d-x),e.quadraticCurveTo(l+f,u+d,l+f-x,u+d),o==="bottom"&&this.drawCaret(n,e,r,a),e.lineTo(l+y,u+d),e.quadraticCurveTo(l,u+d,l,u+d-y),o==="center"&&s==="left"&&this.drawCaret(n,e,r,a),e.lineTo(l,u+p),e.quadraticCurveTo(l,u,l+p,u),e.closePath(),e.fill(),a.borderWidth>0&&e.stroke()}_updateAnimationTarget(n){const e=this.chart,r=this.$animations,a=r&&r.x,s=r&&r.y;if(a||s){const o=positioners[n.position].call(this,this._active,this._eventPosition);if(!o)return;const l=this._size=getTooltipSize(this,n),u=Object.assign({},o,this._size),f=determineAlignment(e,n,u),d=getBackgroundPoint(n,u,f,e);(a._to!==d.x||s._to!==d.y)&&(this.xAlign=f.xAlign,this.yAlign=f.yAlign,this.width=l.width,this.height=l.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(n){const e=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(e);const a={width:this.width,height:this.height},s={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const o=toPadding(e.padding),l=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&l&&(n.save(),n.globalAlpha=r,this.drawBackground(s,n,a,e),overrideTextDirection(n,e.textDirection),s.y+=o.top,this.drawTitle(s,n,e),this.drawBody(s,n,e),this.drawFooter(s,n,e),restoreTextDirection(n,e.textDirection),n.restore())}getActiveElements(){return this._active||[]}setActiveElements(n,e){const r=this._active,a=n.map(({datasetIndex:l,index:u})=>{const f=this.chart.getDatasetMeta(l);if(!f)throw new Error("Cannot find a dataset at index "+l);return{datasetIndex:l,element:f.data[u],index:u}}),s=!_elementsEqual(r,a),o=this._positionChanged(a,e);(s||o)&&(this._active=a,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(n,e,r=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const a=this.options,s=this._active||[],o=this._getActiveElements(n,s,e,r),l=this._positionChanged(o,n),u=e||!_elementsEqual(o,s)||l;return u&&(this._active=o,(a.enabled||a.external)&&(this._eventPosition={x:n.x,y:n.y},this.update(!0,e))),u}_getActiveElements(n,e,r,a){const s=this.options;if(n.type==="mouseout")return[];if(!a)return e.filter(l=>this.chart.data.datasets[l.datasetIndex]&&this.chart.getDatasetMeta(l.datasetIndex).controller.getParsed(l.index)!==void 0);const o=this.chart.getElementsAtEventForMode(n,s.mode,s,r);return s.reverse&&o.reverse(),o}_positionChanged(n,e){const{caretX:r,caretY:a,options:s}=this,o=positioners[s.position].call(this,n,e);return o!==!1&&(r!==o.x||a!==o.y)}}var plugin_tooltip={id:"tooltip",_element:Tooltip,positioners,afterInit(t,n,e){e&&(t.tooltip=new Tooltip({chart:t,options:e}))},beforeUpdate(t,n,e){t.tooltip&&t.tooltip.initialize(e)},reset(t,n,e){t.tooltip&&t.tooltip.initialize(e)},afterDraw(t){const n=t.tooltip;if(n&&n._willRender()){const e={tooltip:n};if(t.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;n.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",e)}},afterEvent(t,n){if(t.tooltip){const e=n.replay;t.tooltip.handleEvent(n.event,e,n.inChartArea)&&(n.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,n)=>n.bodyFont.size,boxWidth:(t,n)=>n.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:defaultCallbacks},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},plugins=Object.freeze({__proto__:null,Colors:plugin_colors,Decimation:plugin_decimation,Filler:index,Legend:plugin_legend,SubTitle:plugin_subtitle,Title:plugin_title,Tooltip:plugin_tooltip});const addIfString=(t,n,e,r)=>(typeof n=="string"?(e=t.push(n)-1,r.unshift({index:e,label:n})):isNaN(n)&&(e=null),e);function findOrAddLabel(t,n,e,r){const a=t.indexOf(n);if(a===-1)return addIfString(t,n,e,r);const s=t.lastIndexOf(n);return a!==s?e:a}const validIndex=(t,n)=>t===null?null:_limitValue(Math.round(t),0,n);function _getLabelForValue(t){const n=this.getLabels();return t>=0&&t<n.length?n[t]:t}class CategoryScale extends Scale{static id="category";static defaults={ticks:{callback:_getLabelForValue}};constructor(n){super(n),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(n){const e=this._addedLabels;if(e.length){const r=this.getLabels();for(const{index:a,label:s}of e)r[a]===s&&r.splice(a,1);this._addedLabels=[]}super.init(n)}parse(n,e){if(isNullOrUndef(n))return null;const r=this.getLabels();return e=isFinite(e)&&r[e]===n?e:findOrAddLabel(r,n,valueOrDefault(e,n),this._addedLabels),validIndex(e,r.length-1)}determineDataLimits(){const{minDefined:n,maxDefined:e}=this.getUserBounds();let{min:r,max:a}=this.getMinMax(!0);this.options.bounds==="ticks"&&(n||(r=0),e||(a=this.getLabels().length-1)),this.min=r,this.max=a}buildTicks(){const n=this.min,e=this.max,r=this.options.offset,a=[];let s=this.getLabels();s=n===0&&e===s.length-1?s:s.slice(n,e+1),this._valueRange=Math.max(s.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let o=n;o<=e;o++)a.push({value:o});return a}getLabelForValue(n){return _getLabelForValue.call(this,n)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(n){return typeof n!="number"&&(n=this.parse(n)),n===null?NaN:this.getPixelForDecimal((n-this._startValue)/this._valueRange)}getPixelForTick(n){const e=this.ticks;return n<0||n>e.length-1?null:this.getPixelForValue(e[n].value)}getValueForPixel(n){return Math.round(this._startValue+this.getDecimalForPixel(n)*this._valueRange)}getBasePixel(){return this.bottom}}function generateTicks$1(t,n){const e=[],{bounds:a,step:s,min:o,max:l,precision:u,count:f,maxTicks:d,maxDigits:p,includeBounds:v}=t,y=s||1,x=d-1,{min:S,max:D}=n,A=!isNullOrUndef(o),I=!isNullOrUndef(l),W=!isNullOrUndef(f),N=(D-S)/(p+1);let U=niceNum((D-S)/x/y)*y,J,m,ne,ie;if(U<1e-14&&!A&&!I)return[{value:S},{value:D}];ie=Math.ceil(D/U)-Math.floor(S/U),ie>x&&(U=niceNum(ie*U/x/y)*y),isNullOrUndef(u)||(J=Math.pow(10,u),U=Math.ceil(U*J)/J),a==="ticks"?(m=Math.floor(S/U)*U,ne=Math.ceil(D/U)*U):(m=S,ne=D),A&&I&&s&&almostWhole((l-o)/s,U/1e3)?(ie=Math.round(Math.min((l-o)/U,d)),U=(l-o)/ie,m=o,ne=l):W?(m=A?o:m,ne=I?l:ne,ie=f-1,U=(ne-m)/ie):(ie=(ne-m)/U,almostEquals(ie,Math.round(ie),U/1e3)?ie=Math.round(ie):ie=Math.ceil(ie));const ge=Math.max(_decimalPlaces(U),_decimalPlaces(m));J=Math.pow(10,isNullOrUndef(u)?ge:u),m=Math.round(m*J)/J,ne=Math.round(ne*J)/J;let ve=0;for(A&&(v&&m!==o?(e.push({value:o}),m<o&&ve++,almostEquals(Math.round((m+ve*U)*J)/J,o,relativeLabelSize(o,N,t))&&ve++):m<o&&ve++);ve<ie;++ve){const _e=Math.round((m+ve*U)*J)/J;if(I&&_e>l)break;e.push({value:_e})}return I&&v&&ne!==l?e.length&&almostEquals(e[e.length-1].value,l,relativeLabelSize(l,N,t))?e[e.length-1].value=l:e.push({value:l}):(!I||ne===l)&&e.push({value:ne}),e}function relativeLabelSize(t,n,{horizontal:e,minRotation:r}){const a=toRadians(r),s=(e?Math.sin(a):Math.cos(a))||.001,o=.75*n*(""+t).length;return Math.min(n/s,o)}class LinearScaleBase extends Scale{constructor(n){super(n),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(n,e){return isNullOrUndef(n)||(typeof n=="number"||n instanceof Number)&&!isFinite(+n)?null:+n}handleTickRangeOptions(){const{beginAtZero:n}=this.options,{minDefined:e,maxDefined:r}=this.getUserBounds();let{min:a,max:s}=this;const o=u=>a=e?a:u,l=u=>s=r?s:u;if(n){const u=sign(a),f=sign(s);u<0&&f<0?l(0):u>0&&f>0&&o(0)}if(a===s){let u=s===0?1:Math.abs(s*.05);l(s+u),n||o(a-u)}this.min=a,this.max=s}getTickLimit(){const n=this.options.ticks;let{maxTicksLimit:e,stepSize:r}=n,a;return r?(a=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,a>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${a} ticks. Limiting to 1000.`),a=1e3)):(a=this.computeTickLimit(),e=e||11),e&&(a=Math.min(e,a)),a}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const n=this.options,e=n.ticks;let r=this.getTickLimit();r=Math.max(2,r);const a={maxTicks:r,bounds:n.bounds,min:n.min,max:n.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},s=this._range||this,o=generateTicks$1(a,s);return n.bounds==="ticks"&&_setMinAndMaxByKey(o,this,"value"),n.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const n=this.ticks;let e=this.min,r=this.max;if(super.configure(),this.options.offset&&n.length){const a=(r-e)/Math.max(n.length-1,1)/2;e-=a,r+=a}this._startValue=e,this._endValue=r,this._valueRange=r-e}getLabelForValue(n){return formatNumber(n,this.chart.options.locale,this.options.ticks.format)}}class LinearScale extends LinearScaleBase{static id="linear";static defaults={ticks:{callback:Ticks.formatters.numeric}};determineDataLimits(){const{min:n,max:e}=this.getMinMax(!0);this.min=isNumberFinite(n)?n:0,this.max=isNumberFinite(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const n=this.isHorizontal(),e=n?this.width:this.height,r=toRadians(this.options.ticks.minRotation),a=(n?Math.sin(r):Math.cos(r))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,s.lineHeight/a))}getPixelForValue(n){return n===null?NaN:this.getPixelForDecimal((n-this._startValue)/this._valueRange)}getValueForPixel(n){return this._startValue+this.getDecimalForPixel(n)*this._valueRange}}const log10Floor=t=>Math.floor(log10(t)),changeExponent=(t,n)=>Math.pow(10,log10Floor(t)+n);function isMajor(t){return t/Math.pow(10,log10Floor(t))===1}function steps(t,n,e){const r=Math.pow(10,e),a=Math.floor(t/r);return Math.ceil(n/r)-a}function startExp(t,n){const e=n-t;let r=log10Floor(e);for(;steps(t,n,r)>10;)r++;for(;steps(t,n,r)<10;)r--;return Math.min(r,log10Floor(t))}function generateTicks(t,{min:n,max:e}){n=finiteOrDefault(t.min,n);const r=[],a=log10Floor(n);let s=startExp(n,e),o=s<0?Math.pow(10,Math.abs(s)):1;const l=Math.pow(10,s),u=a>s?Math.pow(10,a):0,f=Math.round((n-u)*o)/o,d=Math.floor((n-u)/l/10)*l*10;let p=Math.floor((f-d)/Math.pow(10,s)),v=finiteOrDefault(t.min,Math.round((u+d+p*Math.pow(10,s))*o)/o);for(;v<e;)r.push({value:v,major:isMajor(v),significand:p}),p>=10?p=p<15?15:20:p++,p>=20&&(s++,p=2,o=s>=0?1:o),v=Math.round((u+d+p*Math.pow(10,s))*o)/o;const y=finiteOrDefault(t.max,v);return r.push({value:y,major:isMajor(y),significand:p}),r}class LogarithmicScale extends Scale{static id="logarithmic";static defaults={ticks:{callback:Ticks.formatters.logarithmic,major:{enabled:!0}}};constructor(n){super(n),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(n,e){const r=LinearScaleBase.prototype.parse.apply(this,[n,e]);if(r===0){this._zero=!0;return}return isNumberFinite(r)&&r>0?r:null}determineDataLimits(){const{min:n,max:e}=this.getMinMax(!0);this.min=isNumberFinite(n)?Math.max(0,n):null,this.max=isNumberFinite(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!isNumberFinite(this._userMin)&&(this.min=n===changeExponent(this.min,0)?changeExponent(this.min,-1):changeExponent(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:n,maxDefined:e}=this.getUserBounds();let r=this.min,a=this.max;const s=l=>r=n?r:l,o=l=>a=e?a:l;r===a&&(r<=0?(s(1),o(10)):(s(changeExponent(r,-1)),o(changeExponent(a,1)))),r<=0&&s(changeExponent(a,-1)),a<=0&&o(changeExponent(r,1)),this.min=r,this.max=a}buildTicks(){const n=this.options,e={min:this._userMin,max:this._userMax},r=generateTicks(e,this);return n.bounds==="ticks"&&_setMinAndMaxByKey(r,this,"value"),n.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(n){return n===void 0?"0":formatNumber(n,this.chart.options.locale,this.options.ticks.format)}configure(){const n=this.min;super.configure(),this._startValue=log10(n),this._valueRange=log10(this.max)-log10(n)}getPixelForValue(n){return(n===void 0||n===0)&&(n=this.min),n===null||isNaN(n)?NaN:this.getPixelForDecimal(n===this.min?0:(log10(n)-this._startValue)/this._valueRange)}getValueForPixel(n){const e=this.getDecimalForPixel(n);return Math.pow(10,this._startValue+e*this._valueRange)}}function getTickBackdropHeight(t){const n=t.ticks;if(n.display&&t.display){const e=toPadding(n.backdropPadding);return valueOrDefault(n.font&&n.font.size,defaults.font.size)+e.height}return 0}function measureLabelSize(t,n,e){return e=isArray(e)?e:[e],{w:_longestText(t,n.string,e),h:e.length*n.lineHeight}}function determineLimits(t,n,e,r,a){return t===r||t===a?{start:n-e/2,end:n+e/2}:t<r||t>a?{start:n-e,end:n}:{start:n,end:n+e}}function fitWithPointLabels(t){const n={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},e=Object.assign({},n),r=[],a=[],s=t._pointLabels.length,o=t.options.pointLabels,l=o.centerPointLabels?PI/s:0;for(let u=0;u<s;u++){const f=o.setContext(t.getPointLabelContext(u));a[u]=f.padding;const d=t.getPointPosition(u,t.drawingArea+a[u],l),p=toFont(f.font),v=measureLabelSize(t.ctx,p,t._pointLabels[u]);r[u]=v;const y=_normalizeAngle(t.getIndexAngle(u)+l),x=Math.round(toDegrees(y)),S=determineLimits(x,d.x,v.w,0,180),D=determineLimits(x,d.y,v.h,90,270);updateLimits(e,n,y,S,D)}t.setCenterPoint(n.l-e.l,e.r-n.r,n.t-e.t,e.b-n.b),t._pointLabelItems=buildPointLabelItems(t,r,a)}function updateLimits(t,n,e,r,a){const s=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e));let l=0,u=0;r.start<n.l?(l=(n.l-r.start)/s,t.l=Math.min(t.l,n.l-l)):r.end>n.r&&(l=(r.end-n.r)/s,t.r=Math.max(t.r,n.r+l)),a.start<n.t?(u=(n.t-a.start)/o,t.t=Math.min(t.t,n.t-u)):a.end>n.b&&(u=(a.end-n.b)/o,t.b=Math.max(t.b,n.b+u))}function createPointLabelItem(t,n,e){const r=t.drawingArea,{extra:a,additionalAngle:s,padding:o,size:l}=e,u=t.getPointPosition(n,r+a+o,s),f=Math.round(toDegrees(_normalizeAngle(u.angle+HALF_PI))),d=yForAngle(u.y,l.h,f),p=getTextAlignForAngle(f),v=leftForTextAlign(u.x,l.w,p);return{visible:!0,x:u.x,y:d,textAlign:p,left:v,top:d,right:v+l.w,bottom:d+l.h}}function isNotOverlapped(t,n){if(!n)return!0;const{left:e,top:r,right:a,bottom:s}=t;return!(_isPointInArea({x:e,y:r},n)||_isPointInArea({x:e,y:s},n)||_isPointInArea({x:a,y:r},n)||_isPointInArea({x:a,y:s},n))}function buildPointLabelItems(t,n,e){const r=[],a=t._pointLabels.length,s=t.options,{centerPointLabels:o,display:l}=s.pointLabels,u={extra:getTickBackdropHeight(s)/2,additionalAngle:o?PI/a:0};let f;for(let d=0;d<a;d++){u.padding=e[d],u.size=n[d];const p=createPointLabelItem(t,d,u);r.push(p),l==="auto"&&(p.visible=isNotOverlapped(p,f),p.visible&&(f=p))}return r}function getTextAlignForAngle(t){return t===0||t===180?"center":t<180?"left":"right"}function leftForTextAlign(t,n,e){return e==="right"?t-=n:e==="center"&&(t-=n/2),t}function yForAngle(t,n,e){return e===90||e===270?t-=n/2:(e>270||e<90)&&(t-=n),t}function drawPointLabelBox(t,n,e){const{left:r,top:a,right:s,bottom:o}=e,{backdropColor:l}=n;if(!isNullOrUndef(l)){const u=toTRBLCorners(n.borderRadius),f=toPadding(n.backdropPadding);t.fillStyle=l;const d=r-f.left,p=a-f.top,v=s-r+f.width,y=o-a+f.height;Object.values(u).some(x=>x!==0)?(t.beginPath(),addRoundedRectPath(t,{x:d,y:p,w:v,h:y,radius:u}),t.fill()):t.fillRect(d,p,v,y)}}function drawPointLabels(t,n){const{ctx:e,options:{pointLabels:r}}=t;for(let a=n-1;a>=0;a--){const s=t._pointLabelItems[a];if(!s.visible)continue;const o=r.setContext(t.getPointLabelContext(a));drawPointLabelBox(e,o,s);const l=toFont(o.font),{x:u,y:f,textAlign:d}=s;renderText(e,t._pointLabels[a],u,f+l.lineHeight/2,l,{color:o.color,textAlign:d,textBaseline:"middle"})}}function pathRadiusLine(t,n,e,r){const{ctx:a}=t;if(e)a.arc(t.xCenter,t.yCenter,n,0,TAU);else{let s=t.getPointPosition(0,n);a.moveTo(s.x,s.y);for(let o=1;o<r;o++)s=t.getPointPosition(o,n),a.lineTo(s.x,s.y)}}function drawRadiusLine(t,n,e,r,a){const s=t.ctx,o=n.circular,{color:l,lineWidth:u}=n;!o&&!r||!l||!u||e<0||(s.save(),s.strokeStyle=l,s.lineWidth=u,s.setLineDash(a.dash||[]),s.lineDashOffset=a.dashOffset,s.beginPath(),pathRadiusLine(t,e,o,r),s.closePath(),s.stroke(),s.restore())}function createPointLabelContext(t,n,e){return createContext(t,{label:e,index:n,type:"pointLabel"})}class RadialLinearScale extends LinearScaleBase{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ticks.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(n){return n},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(n){super(n),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const n=this._padding=toPadding(getTickBackdropHeight(this.options)/2),e=this.width=this.maxWidth-n.width,r=this.height=this.maxHeight-n.height;this.xCenter=Math.floor(this.left+e/2+n.left),this.yCenter=Math.floor(this.top+r/2+n.top),this.drawingArea=Math.floor(Math.min(e,r)/2)}determineDataLimits(){const{min:n,max:e}=this.getMinMax(!1);this.min=isNumberFinite(n)&&!isNaN(n)?n:0,this.max=isNumberFinite(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/getTickBackdropHeight(this.options))}generateTickLabels(n){LinearScaleBase.prototype.generateTickLabels.call(this,n),this._pointLabels=this.getLabels().map((e,r)=>{const a=callback(this.options.pointLabels.callback,[e,r],this);return a||a===0?a:""}).filter((e,r)=>this.chart.getDataVisibility(r))}fit(){const n=this.options;n.display&&n.pointLabels.display?fitWithPointLabels(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(n,e,r,a){this.xCenter+=Math.floor((n-e)/2),this.yCenter+=Math.floor((r-a)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(n,e,r,a))}getIndexAngle(n){const e=TAU/(this._pointLabels.length||1),r=this.options.startAngle||0;return _normalizeAngle(n*e+toRadians(r))}getDistanceFromCenterForValue(n){if(isNullOrUndef(n))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-n)*e:(n-this.min)*e}getValueForDistanceFromCenter(n){if(isNullOrUndef(n))return NaN;const e=n/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(n){const e=this._pointLabels||[];if(n>=0&&n<e.length){const r=e[n];return createPointLabelContext(this.getContext(),n,r)}}getPointPosition(n,e,r=0){const a=this.getIndexAngle(n)-HALF_PI+r;return{x:Math.cos(a)*e+this.xCenter,y:Math.sin(a)*e+this.yCenter,angle:a}}getPointPositionForValue(n,e){return this.getPointPosition(n,this.getDistanceFromCenterForValue(e))}getBasePosition(n){return this.getPointPositionForValue(n||0,this.getBaseValue())}getPointLabelPosition(n){const{left:e,top:r,right:a,bottom:s}=this._pointLabelItems[n];return{left:e,top:r,right:a,bottom:s}}drawBackground(){const{backgroundColor:n,grid:{circular:e}}=this.options;if(n){const r=this.ctx;r.save(),r.beginPath(),pathRadiusLine(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),r.closePath(),r.fillStyle=n,r.fill(),r.restore()}}drawGrid(){const n=this.ctx,e=this.options,{angleLines:r,grid:a,border:s}=e,o=this._pointLabels.length;let l,u,f;if(e.pointLabels.display&&drawPointLabels(this,o),a.display&&this.ticks.forEach((d,p)=>{if(p!==0||p===0&&this.min<0){u=this.getDistanceFromCenterForValue(d.value);const v=this.getContext(p),y=a.setContext(v),x=s.setContext(v);drawRadiusLine(this,y,u,o,x)}}),r.display){for(n.save(),l=o-1;l>=0;l--){const d=r.setContext(this.getPointLabelContext(l)),{color:p,lineWidth:v}=d;!v||!p||(n.lineWidth=v,n.strokeStyle=p,n.setLineDash(d.borderDash),n.lineDashOffset=d.borderDashOffset,u=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),f=this.getPointPosition(l,u),n.beginPath(),n.moveTo(this.xCenter,this.yCenter),n.lineTo(f.x,f.y),n.stroke())}n.restore()}}drawBorder(){}drawLabels(){const n=this.ctx,e=this.options,r=e.ticks;if(!r.display)return;const a=this.getIndexAngle(0);let s,o;n.save(),n.translate(this.xCenter,this.yCenter),n.rotate(a),n.textAlign="center",n.textBaseline="middle",this.ticks.forEach((l,u)=>{if(u===0&&this.min>=0&&!e.reverse)return;const f=r.setContext(this.getContext(u)),d=toFont(f.font);if(s=this.getDistanceFromCenterForValue(this.ticks[u].value),f.showLabelBackdrop){n.font=d.string,o=n.measureText(l.label).width,n.fillStyle=f.backdropColor;const p=toPadding(f.backdropPadding);n.fillRect(-o/2-p.left,-s-d.size/2-p.top,o+p.width,d.size+p.height)}renderText(n,l.label,0,-s,d,{color:f.color,strokeColor:f.textStrokeColor,strokeWidth:f.textStrokeWidth})}),n.restore()}drawTitle(){}}const INTERVALS={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},UNITS=Object.keys(INTERVALS);function sorter(t,n){return t-n}function parse(t,n){if(isNullOrUndef(n))return null;const e=t._adapter,{parser:r,round:a,isoWeekday:s}=t._parseOpts;let o=n;return typeof r=="function"&&(o=r(o)),isNumberFinite(o)||(o=typeof r=="string"?e.parse(o,r):e.parse(o)),o===null?null:(a&&(o=a==="week"&&(isNumber(s)||s===!0)?e.startOf(o,"isoWeek",s):e.startOf(o,a)),+o)}function determineUnitForAutoTicks(t,n,e,r){const a=UNITS.length;for(let s=UNITS.indexOf(t);s<a-1;++s){const o=INTERVALS[UNITS[s]],l=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-n)/(l*o.size))<=r)return UNITS[s]}return UNITS[a-1]}function determineUnitForFormatting(t,n,e,r,a){for(let s=UNITS.length-1;s>=UNITS.indexOf(e);s--){const o=UNITS[s];if(INTERVALS[o].common&&t._adapter.diff(a,r,o)>=n-1)return o}return UNITS[e?UNITS.indexOf(e):0]}function determineMajorUnit(t){for(let n=UNITS.indexOf(t)+1,e=UNITS.length;n<e;++n)if(INTERVALS[UNITS[n]].common)return UNITS[n]}function addTick(t,n,e){if(!e)t[n]=!0;else if(e.length){const{lo:r,hi:a}=_lookup(e,n),s=e[r]>=n?e[r]:e[a];t[s]=!0}}function setMajorTicks(t,n,e,r){const a=t._adapter,s=+a.startOf(n[0].value,r),o=n[n.length-1].value;let l,u;for(l=s;l<=o;l=+a.add(l,1,r))u=e[l],u>=0&&(n[u].major=!0);return n}function ticksFromTimestamps(t,n,e){const r=[],a={},s=n.length;let o,l;for(o=0;o<s;++o)l=n[o],a[l]=o,r.push({value:l,major:!1});return s===0||!e?r:setMajorTicks(t,r,a,e)}class TimeScale extends Scale{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(n){super(n),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(n,e={}){const r=n.time||(n.time={}),a=this._adapter=new adapters._date(n.adapters.date);a.init(e),mergeIf(r.displayFormats,a.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(n),this._normalized=e.normalized}parse(n,e){return n===void 0?null:parse(this,n)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const n=this.options,e=this._adapter,r=n.time.unit||"day";let{min:a,max:s,minDefined:o,maxDefined:l}=this.getUserBounds();function u(f){!o&&!isNaN(f.min)&&(a=Math.min(a,f.min)),!l&&!isNaN(f.max)&&(s=Math.max(s,f.max))}(!o||!l)&&(u(this._getLabelBounds()),(n.bounds!=="ticks"||n.ticks.source!=="labels")&&u(this.getMinMax(!1))),a=isNumberFinite(a)&&!isNaN(a)?a:+e.startOf(Date.now(),r),s=isNumberFinite(s)&&!isNaN(s)?s:+e.endOf(Date.now(),r)+1,this.min=Math.min(a,s-1),this.max=Math.max(a+1,s)}_getLabelBounds(){const n=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return n.length&&(e=n[0],r=n[n.length-1]),{min:e,max:r}}buildTicks(){const n=this.options,e=n.time,r=n.ticks,a=r.source==="labels"?this.getLabelTimestamps():this._generate();n.bounds==="ticks"&&a.length&&(this.min=this._userMin||a[0],this.max=this._userMax||a[a.length-1]);const s=this.min,o=this.max,l=_filterBetween(a,s,o);return this._unit=e.unit||(r.autoSkip?determineUnitForAutoTicks(e.minUnit,this.min,this.max,this._getLabelCapacity(s)):determineUnitForFormatting(this,l.length,e.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:determineMajorUnit(this._unit),this.initOffsets(a),n.reverse&&l.reverse(),ticksFromTimestamps(this,l,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(n=>+n.value))}initOffsets(n=[]){let e=0,r=0,a,s;this.options.offset&&n.length&&(a=this.getDecimalForValue(n[0]),n.length===1?e=1-a:e=(this.getDecimalForValue(n[1])-a)/2,s=this.getDecimalForValue(n[n.length-1]),n.length===1?r=s:r=(s-this.getDecimalForValue(n[n.length-2]))/2);const o=n.length<3?.5:.25;e=_limitValue(e,0,o),r=_limitValue(r,0,o),this._offsets={start:e,end:r,factor:1/(e+1+r)}}_generate(){const n=this._adapter,e=this.min,r=this.max,a=this.options,s=a.time,o=s.unit||determineUnitForAutoTicks(s.minUnit,e,r,this._getLabelCapacity(e)),l=valueOrDefault(a.ticks.stepSize,1),u=o==="week"?s.isoWeekday:!1,f=isNumber(u)||u===!0,d={};let p=e,v,y;if(f&&(p=+n.startOf(p,"isoWeek",u)),p=+n.startOf(p,f?"day":o),n.diff(r,e,o)>1e5*l)throw new Error(e+" and "+r+" are too far apart with stepSize of "+l+" "+o);const x=a.ticks.source==="data"&&this.getDataTimestamps();for(v=p,y=0;v<r;v=+n.add(v,l,o),y++)addTick(d,v,x);return(v===r||a.bounds==="ticks"||y===1)&&addTick(d,v,x),Object.keys(d).sort(sorter).map(S=>+S)}getLabelForValue(n){const e=this._adapter,r=this.options.time;return r.tooltipFormat?e.format(n,r.tooltipFormat):e.format(n,r.displayFormats.datetime)}format(n,e){const a=this.options.time.displayFormats,s=this._unit,o=e||a[s];return this._adapter.format(n,o)}_tickFormatFunction(n,e,r,a){const s=this.options,o=s.ticks.callback;if(o)return callback(o,[n,e,r],this);const l=s.time.displayFormats,u=this._unit,f=this._majorUnit,d=u&&l[u],p=f&&l[f],v=r[e],y=f&&p&&v&&v.major;return this._adapter.format(n,a||(y?p:d))}generateTickLabels(n){let e,r,a;for(e=0,r=n.length;e<r;++e)a=n[e],a.label=this._tickFormatFunction(a.value,e,n)}getDecimalForValue(n){return n===null?NaN:(n-this.min)/(this.max-this.min)}getPixelForValue(n){const e=this._offsets,r=this.getDecimalForValue(n);return this.getPixelForDecimal((e.start+r)*e.factor)}getValueForPixel(n){const e=this._offsets,r=this.getDecimalForPixel(n)/e.factor-e.end;return this.min+r*(this.max-this.min)}_getLabelSize(n){const e=this.options.ticks,r=this.ctx.measureText(n).width,a=toRadians(this.isHorizontal()?e.maxRotation:e.minRotation),s=Math.cos(a),o=Math.sin(a),l=this._resolveTickFontOptions(0).size;return{w:r*s+l*o,h:r*o+l*s}}_getLabelCapacity(n){const e=this.options.time,r=e.displayFormats,a=r[e.unit]||r.millisecond,s=this._tickFormatFunction(n,0,ticksFromTimestamps(this,[n],this._majorUnit),a),o=this._getLabelSize(s),l=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return l>0?l:1}getDataTimestamps(){let n=this._cache.data||[],e,r;if(n.length)return n;const a=this.getMatchingVisibleMetas();if(this._normalized&&a.length)return this._cache.data=a[0].controller.getAllParsedValues(this);for(e=0,r=a.length;e<r;++e)n=n.concat(a[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(n)}getLabelTimestamps(){const n=this._cache.labels||[];let e,r;if(n.length)return n;const a=this.getLabels();for(e=0,r=a.length;e<r;++e)n.push(parse(this,a[e]));return this._cache.labels=this._normalized?n:this.normalize(n)}normalize(n){return _arrayUnique(n.sort(sorter))}}function interpolate(t,n,e){let r=0,a=t.length-1,s,o,l,u;e?(n>=t[r].pos&&n<=t[a].pos&&({lo:r,hi:a}=_lookupByKey(t,"pos",n)),{pos:s,time:l}=t[r],{pos:o,time:u}=t[a]):(n>=t[r].time&&n<=t[a].time&&({lo:r,hi:a}=_lookupByKey(t,"time",n)),{time:s,pos:l}=t[r],{time:o,pos:u}=t[a]);const f=o-s;return f?l+(u-l)*(n-s)/f:l}class TimeSeriesScale extends TimeScale{static id="timeseries";static defaults=TimeScale.defaults;constructor(n){super(n),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const n=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(n);this._minPos=interpolate(e,this.min),this._tableRange=interpolate(e,this.max)-this._minPos,super.initOffsets(n)}buildLookupTable(n){const{min:e,max:r}=this,a=[],s=[];let o,l,u,f,d;for(o=0,l=n.length;o<l;++o)f=n[o],f>=e&&f<=r&&a.push(f);if(a.length<2)return[{time:e,pos:0},{time:r,pos:1}];for(o=0,l=a.length;o<l;++o)d=a[o+1],u=a[o-1],f=a[o],Math.round((d+u)/2)!==f&&s.push({time:f,pos:o/(l-1)});return s}_generate(){const n=this.min,e=this.max;let r=super.getDataTimestamps();return(!r.includes(n)||!r.length)&&r.splice(0,0,n),(!r.includes(e)||r.length===1)&&r.push(e),r.sort((a,s)=>a-s)}_getTimestampsForTable(){let n=this._cache.all||[];if(n.length)return n;const e=this.getDataTimestamps(),r=this.getLabelTimestamps();return e.length&&r.length?n=this.normalize(e.concat(r)):n=e.length?e:r,n=this._cache.all=n,n}getDecimalForValue(n){return(interpolate(this._table,n)-this._minPos)/this._tableRange}getValueForPixel(n){const e=this._offsets,r=this.getDecimalForPixel(n)/e.factor-e.end;return interpolate(this._table,r*this._tableRange+this._minPos,!0)}}var scales=Object.freeze({__proto__:null,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale});const registerables=[controllers,elements,plugins,scales];Chart.register(...registerables);class ColorPalette{static PRIMARY=["#1f78b4","#a6cee3","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]}function renderChart(t,n,e){const r=document.getElementById(t);r!==null&&fetchChartData(n).then(a=>{e(r,a)}).catch(a=>{console.log("Error loading chart data: "+a);const s=r.getContext("2d");s&&(s.fillStyle="red",s.font="16px Arial",s.fillText("Error loading chart data",10,15))})}async function fetchChartData(t){try{const n=await fetch(t);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return await n.json()}catch(n){throw console.error("Error fetching data:",n),n}}function getCSSVariable(t){return getComputedStyle(document.documentElement).getPropertyValue(t).trim()}function initPubChart(){renderChart("pubs-by-year-chart","/publication/data/by-year",createPubChart)}function createPubChart(t,n){new Chart(t,{type:"bar",data:{labels:n.data.map(e=>e.name),datasets:[{label:"Publications",data:n.data.map(e=>e.total)}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0,suggestedMax:10,ticks:{stepSize:1},grid:{display:!1}},x:{grid:{display:!1}}},plugins:{title:{display:!1},legend:{display:!1}}}})}function initGrantChart(){renderChart("grant-summary-chart","/grant/data/summary",createGrantChart)}function createGrantChart(t,n){new Chart(t,{type:"doughnut",data:{labels:n.data.map(e=>e.name),datasets:[{data:n.data.map(e=>e.total),backgroundColor:ColorPalette.PRIMARY,borderColor:ColorPalette.PRIMARY.map(e=>e+"80"),borderWidth:1}]},options:{radius:"60%",responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!1}}}})}function initAllocationChart(){renderChart("allocation-summary-chart","/portal/data/allocation-by-status",createAllocationChart)}function createAllocationChart(t,n){new Chart(t,{type:"doughnut",data:{labels:n.data.map(e=>e.name),datasets:[{data:n.data.map(e=>e.total),backgroundColor:ColorPalette.PRIMARY,borderColor:ColorPalette.PRIMARY.map(e=>e+"80"),borderWidth:1}]},options:{radius:"70%",responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!1}}}})}function initResourceChart(){renderChart("resource-summary-chart","/portal/data/resource-by-type",createResourceChart)}function createResourceChart(t,n){new Chart(t,{type:"doughnut",data:{labels:n.data.map(e=>e.name),datasets:[{data:n.data.map(e=>e.total),backgroundColor:ColorPalette.PRIMARY,borderColor:ColorPalette.PRIMARY.map(e=>e+"80"),borderWidth:1}]},options:{radius:"70%",responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!1}}}})}function initGaugeChart(){const t=document.querySelectorAll("div.chart-container > canvas.gauge-chart");for(const n of t)if(n!==null){const e=Number(n?.getAttribute("data-used")||0);let r=Number(n?.getAttribute("data-total")||0)-e;const a=String(n?.getAttribute("data-title")||"");r<0&&(r=0),createGaugeChart(n,a,e,r)}}function createGaugeChart(t,n,e,r){new Chart(t,{type:"doughnut",data:{labels:["Used","Available"],datasets:[{data:[e,r],backgroundColor:[getCSSVariable("--success"),getCSSVariable("--secondary")],borderColor:[getCSSVariable("--success"),getCSSVariable("--secondary")],borderWidth:1}]},options:{radius:"70%",rotation:270,circumference:180,responsive:!0,plugins:{legend:{display:!1},title:{display:!0,text:n,position:"bottom"}}}})}function initCharts(){for(const t of[initPubChart,initGrantChart,initAllocationChart,initResourceChart,initGaugeChart])t()}function initDepedencies(){initDataTable()}function initHtmx(){document.addEventListener("htmx:afterSettle",initDepedencies)}function getCookie(t){let n="";if(document.cookie&&document.cookie!=""){const e=document.cookie.split(";");for(let r=0;r<e.length;r++){const a=jQuery.trim(e[r]);if(a.substring(0,t.length+1)==t+"="){n=decodeURIComponent(a.substring(t.length+1));break}}}return n}Object.assign(window,{getCookie:function(t){getCookie(t)},$:jQuery$1,jQuery:jQuery$1});function initDocument(){for(const t of[initDateSelector,initSelect2,initForm,initDataTable,initCharts,initHtmx])t()}document.readyState!=="loading"?initDocument():document.addEventListener("DOMContentLoaded",initDocument);
