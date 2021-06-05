(this.webpackJsonpdishes=this.webpackJsonpdishes||[]).push([[0],{285:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var r,i,s=n(139),a=n(18),o=(n(157),n(0)),c=n(14),l=n.n(c),u=n(69),d=n(71),p=n(40),m=n(15),b=n.n(m),h=n(24),f=n(16),j=n(140),v=n(326),x=n(330),O=n(321),g=n(325),y=n(78),w=n.n(y),_=n(128),S=n.n(_),N=n(44),q=n(25),P=function(e){var t=null===e||void 0===e?void 0:e.getHours(),n=null===e||void 0===e?void 0:e.getMinutes(),r=null===e||void 0===e?void 0:e.getSeconds();return t<10&&(t="0".concat(t)),n<10&&(n="0".concat(n)),r<10&&(r="0".concat(r)),"".concat(t,":").concat(n,":").concat(r)},F=n(8),z=d.a.form(r||(r=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  width: 100%;\n\n  .customField {\n    margin-top: 20px;\n  }\n\n  .field {\n    overflow: hidden;\n  }\n"]))),I=q.c().shape({name:q.d().required("Name is required"),preparation_time:q.d().required("Preparation time is required"),type:q.d().required("Dish type is required"),no_of_slices:q.a().when("type",{is:function(e){return"pizza"===e},then:q.b().min(1,"Minimum 1 required").typeError("Number of slices is required").required()}),diameter:q.a().when("type",{is:function(e){return"pizza"===e},then:q.b().min(.01,"Minimum 0.01 required").typeError("Diameter is required").required()}),spiciness_scale:q.a().when("type",{is:function(e){return"soup"===e},then:q.b().min(1,"Minimum 1 required").max(10,"Maximum of 10 allowed").typeError("Spiciness scale is required").required()}),slices_of_bread:q.a().when("type",{is:function(e){return"sandwich"===e},then:q.b().min(1,"Minimum 1 required").typeError("Slices of bread is required").required()})}),T=function(){var e,t,n,r,i,s,a,c=Object(o.useState)(null),l=Object(f.a)(c,2),u=l[0],d=l[1],m=Object(o.useState)(""),y=Object(f.a)(m,2),_=y[0],q=y[1],T=Object(o.useState)(!1),k=Object(f.a)(T,2),L=k[0],M=k[1],D=Object(o.useState)(!1),E=Object(f.a)(D,2),B=E[0],C=E[1],H=Object(o.useState)(!1),V=Object(f.a)(H,2),G=V[0],J=V[1],W=Object(N.d)({resolver:Object(j.a)(I)}),A=W.register,Y=W.handleSubmit,K=W.reset,Q=W.setValue,R=W.formState.errors,U=function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.post("".concat("https://frosty-wood-6558.getsandbox.com:443","/dishes"),t).then((function(e){console.log(e),w.a.success("Sent successfully"),M(!1),C(!1),J(!1),d(null),q(""),Q("preparation_time",null,{shouldValidate:!1}),K()}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),w.a.alert("Error",e.t0.message,(function(){w.a.error("Something went wrong")}));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){"pizza"===_&&(M(!0),C(!1),J(!1)),"soup"===_&&(M(!1),C(!0),J(!1)),"sandwich"===_&&(M(!1),C(!1),J(!0))}),[_]),Object(F.jsxs)(z,{onSubmit:Y(U),children:[Object(F.jsx)(v.a,{InputLabelProps:{className:"field"},style:{overflow:"hidden"},label:"Name",InputProps:Object(p.a)({},A("name")),error:!!R.name,helperText:null===(e=R.name)||void 0===e?void 0:e.message}),Object(F.jsx)(g.a,{className:"customField",InputLabelProps:{className:"field"},ampm:!1,openTo:"hours",views:["hours","minutes","seconds"],format:"HH:mm:ss",label:"Preparation time",value:u,onChange:function(e){d(e),Q("preparation_time",P(e),{shouldValidate:!0})},InputProps:Object(p.a)({},A("preparation_time")),error:!!R.preparation_time,helperText:null===(t=R.preparation_time)||void 0===t?void 0:t.message}),Object(F.jsxs)(v.a,{InputLabelProps:{className:"field"},select:!0,className:"customField",label:"Dish type",value:_,onChange:function(e){q(e.target.value)},inputProps:Object(p.a)({},A("type")),error:!!R.type,helperText:null===(n=R.type)||void 0===n?void 0:n.message,children:[Object(F.jsx)(x.a,{value:"pizza",children:"Pizza"}),Object(F.jsx)(x.a,{value:"soup",children:"Soup"}),Object(F.jsx)(x.a,{value:"sandwich",children:"Sandwich"})]}),L?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(v.a,{className:"customField",InputLabelProps:{className:"field"},style:{overflow:"hidden"},label:"Number of slices",error:!!R.no_of_slices,helperText:null===(r=R.no_of_slices)||void 0===r?void 0:r.message,inputProps:Object(p.a)({type:"number",step:1},A("no_of_slices"))}),Object(F.jsx)(v.a,{className:"customField",InputLabelProps:{className:"field"},style:{overflow:"hidden"},label:"Diameter",error:!!R.diameter,helperText:null===(i=R.diameter)||void 0===i?void 0:i.message,inputProps:Object(p.a)({type:"number",step:.01},A("diameter"))})]}):null,B?Object(F.jsx)(v.a,{className:"customField",InputLabelProps:{className:"field"},style:{overflow:"hidden"},label:"Spiciness scale",error:!!R.spiciness_scale,helperText:null===(s=R.spiciness_scale)||void 0===s?void 0:s.message,inputProps:Object(p.a)({type:"number",step:1},A("spiciness_scale"))}):null,G?Object(F.jsx)(v.a,{className:"customField",InputLabelProps:{className:"field"},style:{overflow:"hidden"},label:"Slices of bread",error:!!R.slices_of_bread,helperText:null===(a=R.slices_of_bread)||void 0===a?void 0:a.message,inputProps:Object(p.a)({type:"number",step:1},A("slices_of_bread"))}):null,Object(F.jsx)(O.a,{className:"customField",variant:"contained",color:"primary",type:"submit",children:"Send"})]})},k=n(323),L=n(324),M=n(320),D=n(322),E=Object(M.a)({root:{width:400,maxWidth:"90vw",padding:30,opacity:.95},title:{fontSize:14,marginBottom:20}}),B=function(e){var t=e.title,n=e.children,r=E();return Object(F.jsx)(k.a,{className:r.root,children:Object(F.jsxs)(L.a,{children:[Object(F.jsx)(D.a,{className:r.title,color:"textSecondary",gutterBottom:!0,children:t}),n]})})},C=d.a.div(i||(i=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background-image: url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center 0;\n  background-attachment: fixed;\n  overflow: hidden;\n"]))),H=function(){return Object(F.jsx)(C,{children:Object(F.jsx)(B,{title:"Choose your dish",children:Object(F.jsx)(T,{})})})},V=(n(285),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,331)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),s(e),a(e)}))});l.a.render(Object(F.jsx)(a.a,{utils:s.a,children:Object(F.jsx)(H,{})}),document.getElementById("root")),V()}},[[286,1,2]]]);
//# sourceMappingURL=main.3ca4e6a9.chunk.js.map