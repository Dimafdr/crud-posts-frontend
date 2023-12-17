(this["webpackJsonpra-hw-9.2-crud-posts-frontend"]=this["webpackJsonpra-hw-9.2-crud-posts-frontend"]||[]).push([[0],{21:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),a=n(22),i=n.n(a),r=(n(28),n(3)),s=n(4),u=n(10),l=n(6),d=n(5),h=n(14),j=n(2),b=(n(29),n(8));n(21),n(30),n(31);var f=n(1),m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.className,n=t.type,c=void 0===n?"button":n,o=t.onHandleClick,a=t.content;return Object(f.jsx)("button",{className:"Button ".concat(e),type:c,onClick:o,children:a})}}]),n}(o.a.Component),p=n(23),O=n(38);n(33),n(34);function v(t){function e(e){var n=Object(j.f)();return Object(f.jsx)(t,Object(b.a)(Object(b.a)({},e),{},{navigate:n}))}var n=t.displayName||t.name||"Component";return e.displayName="withNavigate(".concat(n,")"),e}var x=v(function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.onEditClick,c=e.onDeleteClick;return Object(f.jsxs)("div",{className:"Note-controls",children:[Object(f.jsx)(m,{className:"Note-controls__button-edit",content:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",onHandleClick:n}),Object(f.jsx)(m,{className:"Note-controls__button-delete",content:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",type:"submit",onHandleClick:function(){t.props.navigate("/"),c()}})]})}}]),n}(o.a.Component)),g=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).getDistanceToNow=c.getDistanceToNow.bind(Object(u.a)(c)),c}return Object(s.a)(n,[{key:"getDistanceToNow",value:function(t){return Object(O.a)(new Date(Number(t)),{locale:p.a})}},{key:"render",value:function(){var t=this.props,e=t.id,n=t.text,c=t.created,o=t.onEditClick,a=t.onDeleteClick,i=t.onView,r=Object(f.jsx)(x,{onEditClick:o,onDeleteClick:function(){return a(e)}}),s=Object(f.jsx)(h.b,{to:"/notes/".concat(e),children:n});return Object(f.jsxs)("div",{className:"Note",children:[Object(f.jsx)("span",{className:"Note__elapsed-time",children:this.getDistanceToNow(c)}),Object(f.jsx)("div",{className:"Note-body",id:e,children:Object(f.jsx)("p",{className:i&&"Note-body__text",children:i?n:s})}),a&&r]})}}]),n}(o.a.Component),k=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"Page",children:[Object(f.jsx)(m,{className:"Home__button-create",content:Object(f.jsx)(h.b,{to:"/notes/new",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"})}),Object(f.jsx)("div",{className:"Home__notes-container",children:this.props.notes.map((function(t){var e=t.id,n=t.text,c=t.created;return Object(f.jsx)(g,{id:e,text:n,created:c},e)}))})]})}}]),n}(o.a.Component),C=n(17),N=(n(35),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={id:c.props.id,text:c.props.text},c.textRef=o.a.createRef(),c.handleInputChange=c.handleInputChange.bind(Object(u.a)(c)),c.handleGoBack=c.handleGoBack.bind(Object(u.a)(c)),c}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(t,e){""===e.text&&this.textRef.current.focus()}},{key:"handleInputChange",value:function(t){var e=t.target,n=e.name,c=e.value;this.setState((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(C.a)({},n,c))}))}},{key:"handleGoBack",value:function(){this.props.navigate(-1)}},{key:"render",value:function(){var t=this,e=this.props,n=e.title,c=e.onSubmit,o=e.btnName,a=e.onGoBackClick;return Object(f.jsxs)("form",{className:"Form",onSubmit:function(e){e.preventDefault(),t.handleGoBack(),c(t.state)},children:[Object(f.jsxs)("div",{className:"Form-control",children:[Object(f.jsx)("label",{htmlFor:"text",children:n}),Object(f.jsx)("textarea",{className:"Form-control__text",type:"text",id:"text",name:"text",value:this.state.text,onChange:this.handleInputChange,ref:this.textRef,rows:"3",autoComplete:"off",required:!0})]}),Object(f.jsx)(m,{className:"Form-control__button-add",type:"submit",content:o}),Object(f.jsx)("a",{href:"#0",className:"Form__button-go-back",onClick:a||this.handleGoBack,children:"\xd7"})]})}}]),n}(o.a.Component)),y=v(N),S=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Page",children:Object(f.jsx)(y,{title:"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442",btnName:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c",onSubmit:this.props.onFormSubmit})})}}]),n}(o.a.Component),w=v(N),D=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={id:"",text:"",created:"",editingMode:!1},c.toggleEditingMode=c.toggleEditingMode.bind(Object(u.a)(c)),c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.props.get("notes/?id=".concat(this.props.params.id)).then((function(e){t.setState(Object(b.a)({},e))})).catch((function(t){return console.log("Could not load the note",t)}))}},{key:"toggleEditingMode",value:function(){this.setState({editingMode:!this.state.editingMode})}},{key:"render",value:function(){var t=this.state,e=t.id,n=t.text,c=t.created,o=this.props.onDeleteClick,a=Object(f.jsx)(g,{id:e,text:n,created:c,onEditClick:this.toggleEditingMode,onDeleteClick:o,onView:!0}),i=Object(f.jsx)(w,{id:e,text:n,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044e",btnName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:this.props.onFormSubmit,onGoBackClick:this.toggleEditingMode});return Object(f.jsx)("div",{className:"Page",children:this.state.editingMode?i:a})}}]),n}(o.a.Component);var F,_=(F="https://dimafdr-crud-posts-backend.onrender.com",{get:function(t){return new Promise((function(e,n){fetch(F+t).then((function(t){return t.json()})).then((function(t){if(!t)return n(t);e(t)})).catch((function(t){n(t)}))}))},post:function(t,e){return new Promise((function(n,c){fetch(F+t,Object(b.a)({},{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).then((function(t){return t.json()})).then((function(t){if(!t)return c(t);n(t)})).catch((function(t){c(t)}))}))},del:function(t){return new Promise((function(e,n){fetch(F+t,{method:"delete"}).then((function(t){return t.json()})).then((function(t){if(!t)return n(t);e(t)})).catch((function(t){n(t)}))}))}}),M=_.get,B=_.post,E=_.del,P=function(t){function e(e){var n=Object(j.g)();return Object(f.jsx)(t,Object(b.a)(Object(b.a)({},e),{},{params:n}))}var n=t.displayName||t.name||"Component";return e.displayName="withParams(".concat(n,")"),e}(D),G=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={notes:[]},c.handleFormSubmit=c.handleFormSubmit.bind(Object(u.a)(c)),c.handleDeleteClick=c.handleDeleteClick.bind(Object(u.a)(c)),c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;M("notes/").then((function(e){t.setState({notes:e})})).catch((function(t){return console.log("Could not load notes",t)}))}},{key:"handleFormSubmit",value:function(t){var e=this,n=t.id,c=t.text;B("notes/",{id:n,text:c}).then((function(t){e.setState({notes:t})})).catch((function(t){return console.log("Could not upload the note",t)}))}},{key:"handleDeleteClick",value:function(t){var e=this;E("notes/".concat(t)).then((function(t){e.setState({notes:t})})).catch((function(t){return console.log("Could not delete the note",t)}))}},{key:"render",value:function(){return Object(f.jsx)(h.a,{basename:"/crud-posts-frontend",children:Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("div",{className:"App-wrapper",children:Object(f.jsx)("main",{children:Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/",element:Object(f.jsx)(k,{notes:this.state.notes})}),Object(f.jsx)(j.a,{path:"/notes/new",element:Object(f.jsx)(S,{onFormSubmit:this.handleFormSubmit})}),Object(f.jsx)(j.a,{path:"/notes/:id",element:Object(f.jsx)(P,{onFormSubmit:this.handleFormSubmit,onDeleteClick:this.handleDeleteClick,get:M})})]})})})})})}}]),n}(o.a.Component),T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),a(t),i(t)}))};i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(G,{})}),document.getElementById("root")),T()}},[[36,1,2]]]);
//# sourceMappingURL=main.f3f481bb.chunk.js.map