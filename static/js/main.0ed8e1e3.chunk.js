(this.webpackJsonpwheel=this.webpackJsonpwheel||[]).push([[0],{148:function(e,t,n){},149:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(47),r=n.n(i),o=(n(148),n(149),n(150),n(174)),s=n(182),l=n(179),j=n(173),u=n(74),b=n(10),O=n(128),h=n(102),d=n(134),x=n(171),f=n(111),g=n(176),p=n(177),m=n(180),v=n(172),y=n(181),C=n(175),w=n(75),S=n(116),k=n.n(S),I=n(129),A=n(130);function N(){return(N=Object(A.a)(k.a.mark((function e(t){var n,c,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new TextEncoder,c=n.encode(t),e.next=4,crypto.subtle.digest("SHA-256",c);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){(function(e){return N.apply(this,arguments)})(e).then((function(e){var n=Array.from(new Uint8Array(e)).map((function(e){return e.toString(16).padStart(2,"0")})).join("");n=n.slice(n.length-6,n.length);var c="#".concat(n),a="#".concat((16777215&~Number.parseInt(n,16)).toString(16));t([c,a])}))}var F=function(e){return(100*e).toFixed(2)},z=function(e){return 1-e.reduce((function(e,t){return e+t.weight}),0)},E=function(e,t){return 1===t.filter((function(t){var n=t.title;return e===n})).length},R=n(3),L=Object(c.createContext)(null);function T(e){var t=e.children,n=Object(c.useState)(JSON.parse(localStorage.getItem("items"))||[]),a=Object(b.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)(JSON.parse(localStorage.getItem("history"))||[]),s=Object(b.a)(o,2),l=s[0],j=s[1],u=Object(c.useState)(z(i)),O=Object(b.a)(u,2),h=O[0],d=O[1],x={items:[i,r],history:[l,j],unassignedProbability:h};return Object(c.useEffect)((function(){var e=z(i);d(e),localStorage.setItem("items",JSON.stringify(i))}),[i]),Object(c.useEffect)((function(){localStorage.setItem("history",JSON.stringify(l))}),[l]),Object(R.jsx)(L.Provider,{value:x,children:t})}var D=1e-4,J=1e-4,M=function(e){var t=e.index,n=e.title,a=e.fg,i=e.bg,r=e.weight,o=Object(c.useContext)(L),s=Object(b.a)(o.items,2),O=s[0],y=s[1],C=o.unassignedProbability,w=Object(c.useState)(!1),S=Object(b.a)(w,2),k=S[0],I=S[1],A=Object(c.useState)(!1),N=Object(b.a)(A,2),z=N[0],T=N[1],M=r+C,U=Object(c.useState)(n),B=Object(b.a)(U,2),G=B[0],H=B[1],V=Object(c.useState)(r),Y=Object(b.a)(V,2),K=Y[0],W=Y[1],q=Object(c.useState)([null,null]),Q=Object(b.a)(q,2),X=Q[0],Z=Q[1],$=Object(c.useState)(""),_=Object(b.a)($,2),ee=_[0],te=_[1],ne=Object(c.useState)(!1),ce=Object(b.a)(ne,2),ae=ce[0],ie=ce[1];Object(c.useEffect)((function(){if(n!==G&&E(G,O))return ie(!1),void te("It's already on the list");if(X[0]&&X[1]){var e=Object(u.a)(O),c=e[t];c.title=G,c.weight=K;var a=Object(b.a)(X,2);c.fg=a[0],c.bg=a[1],y(e),ie(!1),T(!1)}}),[X]);return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(l.a.Row,{children:[Object(R.jsx)(l.a.Column,{width:14,children:Object(R.jsx)(h.a,{style:{color:a,backgroundColor:i,alignSelf:"flex-start"},size:"large",children:"".concat(t+1,") ").concat(n," (").concat(F(r),"%)")})}),Object(R.jsx)(l.a.Column,{width:2,children:Object(R.jsxs)(d.a.Group,{compact:!0,floated:"right",children:[Object(R.jsx)(d.a,{size:"mini",icon:"edit outline",onClick:function(){return T(!0)}}),Object(R.jsx)(d.a,{size:"mini",color:"red",icon:"delete",onClick:function(){return I(!0)}}),Object(R.jsx)(x.a,{open:k,onConfirm:function(){var e=O;e.splice(t,1),y(Object(u.a)(e)),I(!1)},onCancel:function(){return I(!1)}}),Object(R.jsxs)(f.a,{onClose:function(){return T(!1)},open:z,children:[Object(R.jsx)(f.a.Header,{children:"Edit"}),Object(R.jsxs)(f.a.Content,{children:[Object(R.jsxs)(g.a,{error:!0,children:[Object(R.jsxs)(g.a.Group,{inline:!0,children:[Object(R.jsx)(g.a.Field,{type:"text",control:"input",defaultValue:n,label:"Title",onChange:function(e){return H(e.target.value)}}),Object(R.jsx)(g.a.Field,{type:"range",control:"input",label:"Probability",min:D,max:M,step:J,defaultValue:r,onChange:function(e){return W(Number.parseFloat(e.target.value))}}),F(K),"%"]}),ee&&Object(R.jsx)(p.a,{error:!0,content:ee})]}),Object(R.jsx)(m.a,{active:ae,children:Object(R.jsx)(v.a,{content:"Saving"})})]}),Object(R.jsxs)(f.a.Actions,{children:[Object(R.jsx)(d.a,{color:"black",onClick:function(){return T(!1)},children:"Cancel"}),Object(R.jsx)(d.a,{content:"Save",labelPosition:"right",icon:"checkmark",onClick:function(){return ie(!0),void P(G,Z)},positive:!0})]})]})]})})]}),Object(R.jsx)(j.a,{fitted:!0})]})},U=function(){var e=Object(c.useContext)(L),t=Object(b.a)(e.items,2),n=t[0],a=t[1],i=e.unassignedProbability,r=Object(c.useState)(""),o=Object(b.a)(r,2),s=o[0],l=o[1],j=Object(c.useState)(D),h=Object(b.a)(j,2),d=h[0],x=h[1],f=Object(c.useState)([null,null]),m=Object(b.a)(f,2),v=m[0],y=m[1],C=Object(c.useState)(!1),w=Object(b.a)(C,2),S=w[0],k=w[1],I=Object(c.useState)(null),A=Object(b.a)(I,2),N=A[0],z=A[1];Object(c.useEffect)((function(){var e=Number.parseFloat(d);if(s&&e){if(function(e){return Math.abs(e)<1e-4}(i))return z("The total probability of specified events has reached 100%"),void k(!1);var t=Object(b.a)(v,2);t[0],t[1]}else k(!1)}),[s,d,v,i]);var T=Object(c.useCallback)(Object(O.debounce)((function(e){E(e,n)?z("It's already on the list"):(P(e,y),k(!0))}),300),[n]);return Object(R.jsxs)(g.a,{onSubmit:function(){var e=Object(b.a)(v,2),t=e[0],c=e[1],i={title:s,weight:d,fg:t,bg:c};a([].concat(Object(u.a)(n),[i])),l(""),x(D),k(!1),z(null)},error:!0,children:[Object(R.jsxs)(g.a.Group,{grouped:!0,children:[Object(R.jsx)(g.a.Input,{type:"text",label:"Title",placeholder:"thing to do",value:s,onChange:function(e){k(!1);var t=e.target.value;l(t),t?(z(""),T(t)):z("Title must be non-empty")}}),Object(R.jsx)(g.a.Field,{type:"range",control:"input",min:D,max:i,step:J,label:"Probability",value:d,onChange:function(e){return x(Number.parseFloat(e.target.value))}}),"".concat(F(d),"%"),Object(R.jsx)(g.a.Button,{positive:!0,size:"large",disabled:!S,icon:"add"})," "]}),N&&Object(R.jsx)(p.a,{error:!0,content:N})]})},B=function(){var e=Object(c.useContext)(L),t=Object(b.a)(e.items,2),n=t[0],a=t[1],i=Object(b.a)(e.history,2),r=i[0],u=i[1],O=Object(c.useState)(!1),h=Object(b.a)(O,2),m=h[0],v=h[1],S=Object(c.useState)(!1),k=Object(b.a)(S,2),I=k[0],A=k[1],N=Object(c.useState)(""),P=Object(b.a)(N,2),F=P[0],z=P[1],E=Object(c.useState)(null),T=Object(b.a)(E,2),D=T[0],J=T[1],B=function(){D?fetch(D).then((function(e){return e.json()})).then((function(e){var t=e.items,n=e.history;a(t),u(n),A(!1)})).catch((function(){z("Failed to fetch specified URL or parse its contents as JSON")})):z("You should pick a file")},G=n.map((function(e,t){var n=e.title,c=e.fg,a=e.bg,i=e.weight;return Object(R.jsx)(M,{index:t,title:n,fg:c,bg:a,weight:i},t)}));return Object(R.jsxs)(y.a,{raised:!0,children:[Object(R.jsxs)(l.a,{children:[Object(R.jsx)(l.a.Column,{width:14,children:Object(R.jsx)(s.a,{size:"medium",content:"The things that are about to happen:"})}),Object(R.jsx)(l.a.Column,{width:2,children:Object(R.jsx)(C.a,{button:!0,icon:"wrench",className:"icon",fluid:!0,style:{textAlign:"center"},children:Object(R.jsxs)(C.a.Menu,{children:[Object(R.jsx)(C.a.Item,{icon:"download",text:"Import",onClick:function(){return A(!0)}}),Object(R.jsx)(C.a.Item,{icon:"upload",text:"Export",onClick:function(){var e={items:n,history:r},t=JSON.stringify(e),c=new Blob([t],{type:"application/json"}),a=document.createElement("a"),i=URL.createObjectURL(c);a.href=i,a.download="wheel.json",document.body.appendChild(a),a.click(),setTimeout((function(){document.body.removeChild(a),window.URL.revokeObjectURL(i)}),0)}}),Object(R.jsx)(C.a.Item,{icon:"eraser",text:"Erase",onClick:function(){return v(!0)},as:d.a,fluid:!0,attached:"bottom",color:"red"}),Object(R.jsx)(x.a,{open:m,onCancel:function(){return v(!1)},onConfirm:function(){v(!1),a([]),u([])}}),Object(R.jsxs)(f.a,{open:I,onClose:function(){return A(!1)},onOpen:function(){return A(!0)},children:[Object(R.jsxs)(s.a,{icon:!0,children:[Object(R.jsx)(w.a,{name:"download"}),"Pick a file"]}),Object(R.jsx)(f.a.Content,{children:Object(R.jsxs)(o.a,{textAlign:"center",children:[Object(R.jsxs)(f.a.Description,{children:[Object(R.jsx)("p",{children:"Due to the restrictions caused by security reasons you cannot use local files directly and you have to upload it somewhere first."}),Object(R.jsx)("p",{children:"Note that there is no input file validation performed, so modifying it would be on your own risk."})]}),Object(R.jsx)(j.a,{}),Object(R.jsxs)(g.a,{error:!0,onSubmit:function(){return B()},children:[Object(R.jsx)(g.a.Input,{type:"text",label:"Link:",placeholder:"https://example.com/wheel.json",value:D,onChange:function(e){return J(e.target.value)}}),F&&Object(R.jsx)(p.a,{error:!0,content:F})]})]})}),Object(R.jsxs)(f.a.Actions,{children:[Object(R.jsxs)(d.a,{color:"red",inverted:!0,onClick:function(){return A(!1)},children:[Object(R.jsx)(w.a,{name:"remove"})," Cancel"]}),Object(R.jsxs)(d.a,{color:"green",inverted:!0,onClick:function(){return B()},children:[Object(R.jsx)(w.a,{name:"checkmark"})," OK"]})]})]})]})})})]}),Object(R.jsx)(j.a,{section:!0}),0===G.length?Object(R.jsx)(s.a,{textAlign:"center",size:"tiny",content:"Nothing's on the list yet"}):Object(R.jsx)(l.a,{children:G}),Object(R.jsx)(U,{})]})},G=function(e){var t=e.ts,n=e.title,c=e.weight;return Object(R.jsx)(l.a.Row,{columns:1,children:Object(R.jsx)(l.a.Column,{children:"".concat(function(e){return new Date(e).toLocaleString()}(t),": ").concat(n," (").concat(F(c),"%)")})})},H=function(){var e=Object(c.useContext)(L),t=Object(b.a)(e.history,1)[0].map((function(e){var t=e.ts,n=e.title,c=e.weight;return Object(R.jsx)(G,{ts:t,title:n,weight:c},Math.floor(t*Math.random()))}));return Object(R.jsx)(y.a,{raised:!0,children:Object(R.jsxs)(o.a,{children:[Object(R.jsx)(s.a,{size:"medium",textAlign:"center",content:"History of spins:"}),0===t.length?Object(R.jsx)(s.a,{textAlign:"center",size:"tiny",content:"Empty"}):Object(R.jsx)(l.a,{children:t})]})})},V=function(){var e=Object(c.useContext)(L),t=Object(b.a)(e.items,1)[0],n=Object(b.a)(e.history,2),a=n[0],i=n[1],r=Object(c.useState)({title:null,weight:null}),l=Object(b.a)(r,2),j=l[0],O=l[1],h=Object(c.useState)(!1),x=Object(b.a)(h,2),g=x[0],p=x[1],m=Object(c.useState)(!1),v=Object(b.a)(m,2),C=(v[0],v[1],Object(c.useState)(!1)),w=Object(b.a)(C,2),S=(w[0],w[1],Object(c.useRef)(null));return Object(c.useEffect)((function(){var e,t=S.current.getContext("2d");(e=t).clearRect(0,0,750,750),e.fillStyle="#dadada",e.beginPath(),e.arc(375,375,375,0,2*Math.PI),e.fill()}),[t]),Object(R.jsxs)(y.a,{raised:!0,children:[Object(R.jsxs)(o.a,{text:!0,children:[Object(R.jsx)(s.a,{size:"medium",textAlign:"center",content:"Drag the wheel!"}),Object(R.jsx)("canvas",{ref:S,onClick:function(){if(!(t.length<1)){var e=function(e){var t,n=0,c=Math.random(),a=Object(I.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value,r=i.title,o=i.weight;if(c<=(n+=o))return{title:r,weight:o}}}catch(s){a.e(s)}finally{a.f()}}(t),n=e.title,c=e.weight;O({title:n,weight:c});var r={ts:Date.parse(Date()),title:n,weight:c};i([r].concat(Object(u.a)(a))),p(!0)}},width:"".concat(750,"px"),height:"".concat(750,"px"),children:"Your browser does not seem to be supporting Canvas API"})]}),Object(R.jsxs)(f.a,{open:g,onClose:function(){return p(!1)},children:[Object(R.jsx)(f.a.Header,{content:"Result"}),Object(R.jsx)(f.a.Content,{children:Object(R.jsx)(f.a.Description,{children:Object(R.jsx)(s.a,{size:"huge",textAlign:"center",content:"".concat(j.title," (").concat(F(j.weight),"%)")})})}),Object(R.jsx)(f.a.Actions,{children:Object(R.jsx)(d.a,{content:"Great!",labelPosition:"right",icon:"checkmark",onClick:function(){return p(!1)},positive:!0})})]})]})},Y=function(){return Object(R.jsxs)(o.a,{fluid:!0,className:"main-container",children:[Object(R.jsx)(s.a,{size:"huge",textAlign:"center",children:Object(R.jsx)(s.a.Content,{children:"Wheel of Unfortunate"})}),Object(R.jsxs)(l.a,{columns:2,children:[Object(R.jsx)(l.a.Column,{width:9,children:Object(R.jsx)(V,{})}),Object(R.jsx)(l.a.Column,{width:7,children:Object(R.jsx)(B,{})})]}),Object(R.jsx)(j.a,{horizontal:!0}),Object(R.jsx)(o.a,{children:Object(R.jsx)(H,{})})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,184)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(T,{children:Object(R.jsx)(Y,{})})}),document.getElementById("root")),K()}},[[159,1,2]]]);
//# sourceMappingURL=main.0ed8e1e3.chunk.js.map