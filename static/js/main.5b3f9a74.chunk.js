(this.webpackJsonpwheel=this.webpackJsonpwheel||[]).push([[0],{148:function(e,t,n){},149:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(47),r=n.n(i),o=(n(148),n(149),n(150),n(174)),s=n(182),l=n(179),j=n(173),u=n(74),b=n(10),h=n(129),O=n(103),d=n(134),f=n(171),x=n(112),g=n(176),m=n(177),p=n(180),v=n(172),y=n(181),w=n(175),S=n(75),C=n(117),k=n.n(C),P=n(82),T=n(130);function I(){return(I=Object(T.a)(k.a.mark((function e(t){var n,c,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new TextEncoder,c=n.encode(t),e.next=4,crypto.subtle.digest("SHA-256",c);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){(function(e){return I.apply(this,arguments)})(e).then((function(e){var n=Array.from(new Uint8Array(e)).map((function(e){return e.toString(16).padStart(2,"0")})).join("");n=n.slice(n.length-6,n.length);var c="#".concat(n),a="#".concat((16777215&~Number.parseInt(n,16)).toString(16));t([c,a])}))}var A=function(e){return(100*e).toFixed(2)},N=function(e){return 1-e.reduce((function(e,t){return e+t.weight}),0)},F=function(e,t){return 1===t.filter((function(t){var n=t.title;return e===n})).length},z=n(3),E=Object(c.createContext)(null);function R(e){var t=e.children,n=Object(c.useState)(JSON.parse(localStorage.getItem("items"))||[]),a=Object(b.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)(JSON.parse(localStorage.getItem("history"))||[]),s=Object(b.a)(o,2),l=s[0],j=s[1],u=Object(c.useState)(N(i)),h=Object(b.a)(u,2),O=h[0],d=h[1],f={items:[i,r],history:[l,j],unassignedProbability:O};return Object(c.useEffect)((function(){var e=N(i);d(e),localStorage.setItem("items",JSON.stringify(i))}),[i]),Object(c.useEffect)((function(){localStorage.setItem("history",JSON.stringify(l))}),[l]),Object(z.jsx)(E.Provider,{value:f,children:t})}var L=1e-4,D=1e-4,J=function(e){var t=e.index,n=e.title,a=e.fg,i=e.bg,r=e.weight,o=Object(c.useContext)(E),s=Object(b.a)(o.items,2),h=s[0],y=s[1],w=o.unassignedProbability,S=Object(c.useState)(!1),C=Object(b.a)(S,2),k=C[0],P=C[1],T=Object(c.useState)(!1),I=Object(b.a)(T,2),N=I[0],R=I[1],J=r+w,U=Object(c.useState)(n),B=Object(b.a)(U,2),G=B[0],H=B[1],V=Object(c.useState)(r),Y=Object(b.a)(V,2),K=Y[0],W=Y[1],q=Object(c.useState)([null,null]),Q=Object(b.a)(q,2),X=Q[0],Z=Q[1],$=Object(c.useState)(""),_=Object(b.a)($,2),ee=_[0],te=_[1],ne=Object(c.useState)(!1),ce=Object(b.a)(ne,2),ae=ce[0],ie=ce[1];Object(c.useEffect)((function(){if(n!==G&&F(G,h))return ie(!1),void te("It's already on the list");if(X[0]&&X[1]){var e=Object(u.a)(h),c=e[t];c.title=G,c.weight=K;var a=Object(b.a)(X,2);c.fg=a[0],c.bg=a[1],y(e),ie(!1),R(!1)}}),[X]);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(l.a.Row,{children:[Object(z.jsx)(l.a.Column,{width:14,children:Object(z.jsx)(O.a,{style:{color:a,backgroundColor:i,alignSelf:"flex-start"},size:"large",children:"".concat(t+1,") ").concat(n," (").concat(A(r),"%)")})}),Object(z.jsx)(l.a.Column,{width:2,children:Object(z.jsxs)(d.a.Group,{compact:!0,floated:"right",children:[Object(z.jsx)(d.a,{size:"mini",icon:"edit outline",onClick:function(){return R(!0)}}),Object(z.jsx)(d.a,{size:"mini",color:"red",icon:"delete",onClick:function(){return P(!0)}}),Object(z.jsx)(f.a,{open:k,onConfirm:function(){var e=h;e.splice(t,1),y(Object(u.a)(e)),P(!1)},onCancel:function(){return P(!1)}}),Object(z.jsxs)(x.a,{onClose:function(){return R(!1)},open:N,children:[Object(z.jsx)(x.a.Header,{children:"Edit"}),Object(z.jsxs)(x.a.Content,{children:[Object(z.jsxs)(g.a,{error:!0,children:[Object(z.jsxs)(g.a.Group,{inline:!0,children:[Object(z.jsx)(g.a.Field,{type:"text",control:"input",defaultValue:n,label:"Title",onChange:function(e){return H(e.target.value)}}),Object(z.jsx)(g.a.Field,{type:"range",control:"input",label:"Probability",min:L,max:J,step:D,defaultValue:r,onChange:function(e){return W(Number.parseFloat(e.target.value))}}),A(K),"%"]}),ee&&Object(z.jsx)(m.a,{error:!0,content:ee})]}),Object(z.jsx)(p.a,{active:ae,children:Object(z.jsx)(v.a,{content:"Saving"})})]}),Object(z.jsxs)(x.a.Actions,{children:[Object(z.jsx)(d.a,{color:"black",onClick:function(){return R(!1)},children:"Cancel"}),Object(z.jsx)(d.a,{content:"Save",labelPosition:"right",icon:"checkmark",onClick:function(){return ie(!0),void M(G,Z)},positive:!0})]})]})]})})]}),Object(z.jsx)(j.a,{fitted:!0})]})},U=function(){var e=Object(c.useContext)(E),t=Object(b.a)(e.items,2),n=t[0],a=t[1],i=e.unassignedProbability,r=Object(c.useState)(""),o=Object(b.a)(r,2),s=o[0],l=o[1],j=Object(c.useState)(L),O=Object(b.a)(j,2),d=O[0],f=O[1],x=Object(c.useState)([null,null]),p=Object(b.a)(x,2),v=p[0],y=p[1],w=Object(c.useState)(!1),S=Object(b.a)(w,2),C=S[0],k=S[1],P=Object(c.useState)(null),T=Object(b.a)(P,2),I=T[0],N=T[1];Object(c.useEffect)((function(){var e=Number.parseFloat(d);if(s&&e){if(function(e){return Math.abs(e)<1e-4}(i))return N("The total probability of specified events has reached 100%"),void k(!1);var t=Object(b.a)(v,2);t[0],t[1]}else k(!1)}),[s,d,v,i]);var R=Object(c.useCallback)(Object(h.debounce)((function(e){F(e,n)?N("It's already on the list"):(M(e,y),k(!0))}),300),[n]);return Object(z.jsxs)(g.a,{onSubmit:function(){var e=Object(b.a)(v,2),t=e[0],c=e[1],i={title:s,weight:d,fg:t,bg:c};a([].concat(Object(u.a)(n),[i])),l(""),f(L),k(!1),N(null)},error:!0,children:[Object(z.jsxs)(g.a.Group,{grouped:!0,children:[Object(z.jsx)(g.a.Input,{type:"text",label:"Title",placeholder:"thing to do",value:s,onChange:function(e){k(!1);var t=e.target.value;l(t),t?(N(""),R(t)):N("Title must be non-empty")}}),Object(z.jsx)(g.a.Field,{type:"range",control:"input",min:L,max:i,step:D,label:"Probability",value:d,onChange:function(e){return f(Number.parseFloat(e.target.value))}}),"".concat(A(d),"%"),Object(z.jsx)(g.a.Button,{positive:!0,size:"large",disabled:!C,icon:"add"})," "]}),I&&Object(z.jsx)(m.a,{error:!0,content:I})]})},B=function(){var e=Object(c.useContext)(E),t=Object(b.a)(e.items,2),n=t[0],a=t[1],i=Object(b.a)(e.history,2),r=i[0],u=i[1],h=Object(c.useState)(!1),O=Object(b.a)(h,2),p=O[0],v=O[1],C=Object(c.useState)(!1),k=Object(b.a)(C,2),P=k[0],T=k[1],I=Object(c.useState)(""),M=Object(b.a)(I,2),A=M[0],N=M[1],F=Object(c.useState)(null),R=Object(b.a)(F,2),L=R[0],D=R[1],B=function(){L?fetch(L).then((function(e){return e.json()})).then((function(e){var t=e.items,n=e.history;a(t),u(n),T(!1)})).catch((function(){N("Failed to fetch specified URL or parse its contents as JSON")})):N("You should pick a file")},G=n.map((function(e,t){var n=e.title,c=e.fg,a=e.bg,i=e.weight;return Object(z.jsx)(J,{index:t,title:n,fg:c,bg:a,weight:i},t)}));return Object(z.jsxs)(y.a,{raised:!0,children:[Object(z.jsxs)(l.a,{children:[Object(z.jsx)(l.a.Column,{width:14,children:Object(z.jsx)(s.a,{size:"medium",content:"The things that are about to happen:"})}),Object(z.jsx)(l.a.Column,{width:2,children:Object(z.jsx)(w.a,{button:!0,icon:"wrench",className:"icon",fluid:!0,style:{textAlign:"center"},children:Object(z.jsxs)(w.a.Menu,{children:[Object(z.jsx)(w.a.Item,{icon:"download",text:"Import",onClick:function(){return T(!0)}}),Object(z.jsx)(w.a.Item,{icon:"upload",text:"Export",onClick:function(){var e={items:n,history:r},t=JSON.stringify(e),c=new Blob([t],{type:"application/json"}),a=document.createElement("a"),i=URL.createObjectURL(c);a.href=i,a.download="wheel.json",document.body.appendChild(a),a.click(),setTimeout((function(){document.body.removeChild(a),window.URL.revokeObjectURL(i)}),0)}}),Object(z.jsx)(w.a.Item,{icon:"eraser",text:"Erase",onClick:function(){return v(!0)},as:d.a,fluid:!0,attached:"bottom",color:"red"}),Object(z.jsx)(f.a,{open:p,onCancel:function(){return v(!1)},onConfirm:function(){v(!1),a([]),u([])}}),Object(z.jsxs)(x.a,{open:P,onClose:function(){return T(!1)},onOpen:function(){return T(!0)},children:[Object(z.jsxs)(s.a,{icon:!0,children:[Object(z.jsx)(S.a,{name:"download"}),"Pick a file"]}),Object(z.jsx)(x.a.Content,{children:Object(z.jsxs)(o.a,{textAlign:"center",children:[Object(z.jsxs)(x.a.Description,{children:[Object(z.jsx)("p",{children:"Due to the restrictions caused by security reasons you cannot use local files directly and you have to upload it somewhere first."}),Object(z.jsx)("p",{children:"Note that there is no input file validation performed, so modifying it would be on your own risk."})]}),Object(z.jsx)(j.a,{}),Object(z.jsxs)(g.a,{error:!0,onSubmit:function(){return B()},children:[Object(z.jsx)(g.a.Input,{type:"text",label:"Link:",placeholder:"https://example.com/wheel.json",value:L,onChange:function(e){return D(e.target.value)}}),A&&Object(z.jsx)(m.a,{error:!0,content:A})]})]})}),Object(z.jsxs)(x.a.Actions,{children:[Object(z.jsxs)(d.a,{color:"red",inverted:!0,onClick:function(){return T(!1)},children:[Object(z.jsx)(S.a,{name:"remove"})," Cancel"]}),Object(z.jsxs)(d.a,{color:"green",inverted:!0,onClick:function(){return B()},children:[Object(z.jsx)(S.a,{name:"checkmark"})," OK"]})]})]})]})})})]}),Object(z.jsx)(j.a,{section:!0}),0===G.length?Object(z.jsx)(s.a,{textAlign:"center",size:"tiny",content:"Nothing's on the list yet"}):Object(z.jsx)(l.a,{children:G}),Object(z.jsx)(U,{})]})},G=function(e){var t=e.ts,n=e.title,c=e.weight;return Object(z.jsx)(l.a.Row,{columns:1,children:Object(z.jsx)(l.a.Column,{children:"".concat(function(e){return new Date(e).toLocaleString()}(t),": ").concat(n," (").concat(A(c),"%)")})})},H=function(){var e=Object(c.useContext)(E),t=Object(b.a)(e.history,1)[0].map((function(e){var t=e.ts,n=e.title,c=e.weight;return Object(z.jsx)(G,{ts:t,title:n,weight:c},Math.floor(t*Math.random()))}));return Object(z.jsx)(y.a,{raised:!0,children:Object(z.jsxs)(o.a,{children:[Object(z.jsx)(s.a,{size:"medium",textAlign:"center",content:"History of spins:"}),0===t.length?Object(z.jsx)(s.a,{textAlign:"center",size:"tiny",content:"Empty"}):Object(z.jsx)(l.a,{children:t})]})})},V=function(){var e=Object(c.useContext)(E),t=Object(b.a)(e.items,1)[0],n=Object(b.a)(e.history,2),a=n[0],i=n[1],r=750,l=750,j=Object(c.useState)({title:null,weight:null}),h=Object(b.a)(j,2),O=h[0],f=h[1],g=Object(c.useState)(!1),m=Object(b.a)(g,2),p=m[0],v=m[1],w=Object(c.useState)(!1),S=Object(b.a)(w,2),C=(S[0],S[1],Object(c.useState)(!1)),k=Object(b.a)(C,2),T=(k[0],k[1],Object(c.useRef)(null));return Object(c.useEffect)((function(){!function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=5,a="#000000",i="#cece00",o="#fefe00",s=25,j=37.5,u=375-c-12.5,b=375,h=375,O=Math.round(.8*u),d=10,f=100;e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,r,l),e.translate(b,h),e.rotate(n),e.fillStyle=a,e.beginPath(),e.arc(0,0,u+c,0,2*Math.PI),e.closePath(),e.fill();var x,g=Object(P.a)(t);try{for(g.s();!(x=g.n()).done;){var m=x.value,p=m.title,v=m.weight,y=m.fg,w=m.bg,S=2*Math.PI*v,C=Math.min(f,1.6*(u-O/2)*Math.sin(Math.min(S/2,Math.PI/2))),k=Math.floor(Math.log2(f-d));e.fillStyle=w,e.strokeStype=a,e.beginPath(),e.arc(0,0,u,0,S),e.lineTo(0,0),e.closePath(),e.fill(),e.stroke(),e.rotate(S/2),e.fillStyle=y;var T=Math.round((C-d)/2),I=T/2;if(C>d){for(var M=0;M<k;M++){e.font="".concat(T,"px Verdana");var A=e.measureText(p).width;if(A===O)break;A<O?T+=I:T-=I,I/=2}A=e.measureText(p).width;var N=e.measureText("M").width;e.fillText(p,u/2-A/2,N/2)}e.rotate(S/2)}}catch(F){g.e(F)}finally{g.f()}e.setTransform(1,0,0,1,0,0),e.fillStyle=i,e.strokeStyle=a,e.beginPath(),e.moveTo(375-s,0),e.lineTo(375,j/3),e.lineTo(375,j),e.closePath(),e.fill(),e.stroke(),e.fillStyle=o,e.beginPath(),e.moveTo(375+s,0),e.lineTo(375,j/3),e.lineTo(375,j),e.closePath(),e.fill(),e.stroke()}(T.current.getContext("2d"),Math.PI)}),[t]),Object(z.jsxs)(y.a,{raised:!0,children:[Object(z.jsxs)(o.a,{text:!0,children:[Object(z.jsx)(s.a,{size:"medium",textAlign:"center",content:"Drag the wheel!"}),Object(z.jsxs)("canvas",{ref:T,onClick:function(){if(!(t.length<1)){var e=function(e){var t,n=0,c=Math.random(),a=Object(P.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value,r=i.title,o=i.weight;if(c<=(n+=o))return{title:r,weight:o}}}catch(s){a.e(s)}finally{a.f()}}(t),n=e.title,c=e.weight;f({title:n,weight:c});var r={ts:Date.parse(Date()),title:n,weight:c};i([r].concat(Object(u.a)(a))),v(!0)}},width:"".concat(r,"px"),height:"".concat(l,"px"),children:[" ","Your browser does not seem to be supporting Canvas API"]})]}),Object(z.jsxs)(x.a,{open:p,onClose:function(){return v(!1)},children:[Object(z.jsx)(x.a.Header,{content:"Result"}),Object(z.jsx)(x.a.Content,{children:Object(z.jsx)(x.a.Description,{children:Object(z.jsx)(s.a,{size:"huge",textAlign:"center",content:"".concat(O.title," (").concat(A(O.weight),"%)")})})}),Object(z.jsx)(x.a.Actions,{children:Object(z.jsx)(d.a,{content:"Great!",labelPosition:"right",icon:"checkmark",onClick:function(){return v(!1)},positive:!0})})]})]})},Y=function(){return Object(z.jsxs)(o.a,{fluid:!0,className:"main-container",children:[Object(z.jsx)(s.a,{size:"huge",textAlign:"center",children:Object(z.jsx)(s.a.Content,{children:"Wheel of Unfortunate"})}),Object(z.jsxs)(l.a,{columns:2,children:[Object(z.jsx)(l.a.Column,{width:9,children:Object(z.jsx)(V,{})}),Object(z.jsx)(l.a.Column,{width:7,children:Object(z.jsx)(B,{})})]}),Object(z.jsx)(j.a,{horizontal:!0}),Object(z.jsx)(o.a,{children:Object(z.jsx)(H,{})})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,184)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(R,{children:Object(z.jsx)(Y,{})})}),document.getElementById("root")),K()}},[[159,1,2]]]);
//# sourceMappingURL=main.5b3f9a74.chunk.js.map