(this.webpackJsonpclinic=this.webpackJsonpclinic||[]).push([[0],{12:function(e,t,a){e.exports={label:"Signin_label__dwl5M",input:"Signin_input__2R3wJ",errorDiv:"Signin_errorDiv__30-v-"}},22:function(e,t,a){e.exports={spanWidth:"ContentHeader_spanWidth__3S_Er",contentBtn:"ContentHeader_contentBtn__xFuCM"}},223:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r);a(96),a(97),a(98),a(99);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(19);class i extends l.a.Component{render(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row bg-primary pt-2"},l.a.createElement("div",{className:"col-4 font-weight-bold"}),l.a.createElement("div",{className:"col-4"},l.a.createElement("h6",{className:"text-center font-weight-bold"},l.a.createElement("span",{className:"font-weight-bold"})," : Patient")),l.a.createElement("div",{className:"col-4"},this.props.initialized?l.a.createElement("button",{onClick:this.props.logout,className:"btn btn-sm btn-light float-right"},"Log Out"):l.a.createElement("div",null,l.a.createElement(s.b,{to:"/signin",className:"btn btn-sm float-right btn-light"},"signin"),l.a.createElement(s.b,{to:"/signup",className:"btn btn-sm float-right btn-light"},"signup")))),l.a.createElement("div",{className:"row bg-dark pt-2 pb-2"},l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 text-white"},"Icon"),l.a.createElement("div",{className:"col-6 text-white"},"Menu"))),l.a.createElement("div",{className:"col-2 offset-8"},l.a.createElement("span",{className:"text-white font-weight-bold"},"Icon "),l.a.createElement("span",{className:"text-white font-weight-bold"},"Show Hide Docs"))),l.a.createElement("div",{className:"row bg-light"}))}}var o=i;a(27);l.a.Component;l.a.Component;l.a.Component;var m=a(11),d=a(79),u=a.n(d);var p=()=>{const e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),s=Object(m.a)(c,2),i=s[0],o=s[1],d=Object(n.useState)(0),p=Object(m.a)(d,2),h=p[0],g=p[1],E=e=>{r(!1),g(e),o(52*e),setTimeout(()=>{r(!0)},100)};return Object(n.useEffect)(()=>(setTimeout(()=>{r(!0)},500),()=>{}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:u.a.sidebar},l.a.createElement("div",{style:{top:"".concat(i,"px")},className:"styles.sidebar__highlight ".concat(a&&"styles.sidebar__highlight__animate")}),l.a.createElement("a",{className:h?0:void 0,href:"#home",onClick:()=>E(0)},l.a.createElement("span",{className:h?0:void 0},l.a.createElement("i",{className:"fas fa-arrow-right"})," Home")),l.a.createElement("a",{className:h?1:void 0,href:"#news",onClick:()=>E(1)},l.a.createElement("span",{className:h?1:void 0},l.a.createElement("i",{className:"fas fa-arrow-right"})," News")),l.a.createElement("a",{className:h?2:void 0,href:"#contact",onClick:()=>E(2)},l.a.createElement("span",{className:h?2:void 0},l.a.createElement("i",{className:"fas fa-arrow-right"})," Contact")),l.a.createElement("a",{className:h?3:void 0,href:"#about",onClick:()=>E(3)},l.a.createElement("span",{className:h?3:void 0},l.a.createElement("i",{className:"fas fa-arrow-right"})," About"))))};class h extends l.a.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"PROFILE PAGE"))}}var g=h,E=a(16),b=a(26),v=a.n(b),N=(a(63),a(80)),f=a(17),y=a(81),w=a(14),_=a(82),C=a(83),S=a(84),O=a(85),x=a(33),P=a(54),j=a(44),k=a(55);var I=()=>{let e={id:null,name:"",image:null,description:"",category:null,price:0,quantity:0,rating:0,inventoryStatus:"INSTOCK"};const t=Object(n.useState)(null),a=Object(m.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(m.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)(!1),p=Object(m.a)(u,2),h=p[0],g=p[1],b=Object(n.useState)(!1),I=Object(m.a)(b,2),F=I[0],T=I[1],D=Object(n.useState)(e),M=Object(m.a)(D,2),B=M[0],L=M[1],q=Object(n.useState)(null),A=Object(m.a)(q,2),H=A[0],R=A[1],U=Object(n.useState)(!1),z=Object(m.a)(U,2),W=z[0],V=z[1],J=Object(n.useState)(null),K=Object(m.a)(J,2),G=K[0],X=K[1],Q=Object(n.useRef)(null),Y=Object(n.useRef)(null),Z=()=>{L(e),V(!1),d(!0)},$=()=>{V(!1),d(!1)},ee=()=>{g(!1)},te=()=>{T(!1)},ae=e=>{let t=-1;for(let a=0;a<r.length;a++)if(r[a].id===e){t=a;break}return t},ne=()=>{let e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let a=0;a<5;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},le=()=>{Y.current.exportCSV()},re=()=>{T(!0)},ce=e=>{let t=Object(E.a)({},B);t.category=e.value,L(t)},se=(e,t)=>{const a=e.target&&e.target.value||"";let n=Object(E.a)({},B);n["".concat(t)]=a,L(n)},ie=(e,t)=>{const a=e.value||0;let n=Object(E.a)({},B);n["".concat(t)]=a,L(n)},oe=l.a.createElement("div",{className:"table-header"},l.a.createElement("h5",{className:"p-m-0"},"Manage Products"),l.a.createElement("span",{className:"p-input-icon-left"},l.a.createElement("i",{className:"pi pi-search"}),l.a.createElement(k.InputText,{type:"search",onInput:e=>X(e.target.value),placeholder:"Search..."}))),me=l.a.createElement(l.a.Fragment,null,l.a.createElement(w.Button,{label:"Cancel",icon:"pi pi-times",className:"p-button-text",onClick:$}),l.a.createElement(w.Button,{label:"Save",icon:"pi pi-check",className:"p-button-text",onClick:()=>{if(V(!0),B.name.trim()){let t=[...r],a=Object(E.a)({},B);if(B.id){t[ae(B.id)]=a,Q.current.show({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})}else a.id=ne(),a.image="product-placeholder.svg",t.push(a),Q.current.show({severity:"success",summary:"Successful",detail:"Product Created",life:3e3});c(t),d(!1),L(e)}}})),de=l.a.createElement(l.a.Fragment,null,l.a.createElement(w.Button,{label:"No",icon:"pi pi-times",className:"p-button-text",onClick:ee}),l.a.createElement(w.Button,{label:"Yes",icon:"pi pi-check",className:"p-button-text",onClick:()=>{let t=r.filter(e=>e.id!==B.id);L(t),g(!1),L(e),Q.current.show({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})}})),ue=l.a.createElement(l.a.Fragment,null,l.a.createElement(w.Button,{label:"No",icon:"pi pi-times",className:"p-button-text",onClick:te}),l.a.createElement(w.Button,{label:"Yes",icon:"pi pi-check",className:"p-button-text",onClick:()=>{let e=r.filter(e=>!H.includes(e));c(e),T(!1),R(null),Q.current.show({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}}));return l.a.createElement("div",{className:"datatable-crud-demo"},l.a.createElement(y.Toast,{ref:Q}),l.a.createElement("div",{className:"card"},l.a.createElement(S.Toolbar,{className:"p-mb-4",left:()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(w.Button,{label:"New",icon:"pi pi-plus",className:"p-button-success p-mr-2",onClick:Z}),l.a.createElement(w.Button,{label:"Delete",icon:"pi pi-trash",className:"p-button-danger",onClick:re,disabled:!H||!H.length})),right:()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(_.FileUpload,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import",className:"p-mr-2 p-d-inline-block"}),l.a.createElement(w.Button,{label:"Export",icon:"pi pi-upload",className:"p-button-help",onClick:le}))}),l.a.createElement(N.DataTable,{ref:Y,value:r,selection:H,onSelectionChange:e=>R(e.value),dataKey:"id",paginator:!0,rows:10,rowsPerPageOptions:[5,10,25],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",globalFilter:G,header:oe},l.a.createElement(f.Column,{selectionMode:"multiple",headerStyle:{width:"3rem"}}),l.a.createElement(f.Column,{field:"code",header:"Code",sortable:!0}),l.a.createElement(f.Column,{field:"name",header:"Name",sortable:!0}),l.a.createElement(f.Column,{header:"Image",body:e=>l.a.createElement("img",{src:"showcase/demo/images/product/".concat(e.image),onError:e=>e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",alt:e.image,className:"product-image"})}),l.a.createElement(f.Column,{field:"price",header:"Price",body:e=>e.price.toLocaleString("en-US",{style:"currency",currency:"USD"}),sortable:!0}),l.a.createElement(f.Column,{field:"category",header:"Category",sortable:!0}),l.a.createElement(f.Column,{field:"rating",header:"Reviews",body:e=>l.a.createElement(C.Rating,{value:e.rating,readonly:!0,cancel:!1}),sortable:!0}),l.a.createElement(f.Column,{field:"inventoryStatus",header:"Status",body:e=>l.a.createElement("span",{className:"product-badge status-".concat(e.inventoryStatus.toLowerCase())},e.inventoryStatus),sortable:!0}),l.a.createElement(f.Column,{body:e=>l.a.createElement(l.a.Fragment,null,l.a.createElement(w.Button,{icon:"pi pi-pencil",className:"p-button-rounded p-button-success p-mr-2",onClick:()=>(e=>{L(Object(E.a)({},e)),d(!0)})(e)}),l.a.createElement(w.Button,{icon:"pi pi-trash",className:"p-button-rounded p-button-warning",onClick:()=>(e=>{L(e),g(!0)})(e)}))}))),l.a.createElement(j.Dialog,{visible:o,style:{width:"450px"},header:"Product Details",modal:!0,className:"p-fluid",footer:me,onHide:$},B.image&&l.a.createElement("img",{src:"showcase/demo/images/product/".concat(B.image),onError:e=>e.target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",alt:B.image,className:"product-image"}),l.a.createElement("div",{className:"p-field"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement(k.InputText,{id:"name",value:B.name,onChange:e=>se(e,"name"),required:!0,autoFocus:!0,className:v()({"p-invalid":W&&!B.name})}),W&&!B.name&&l.a.createElement("small",{className:"p-invalid"},"Name is required.")),l.a.createElement("div",{className:"p-field"},l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement(O.InputTextarea,{id:"description",value:B.description,onChange:e=>se(e,"description"),required:!0,rows:3,cols:20})),l.a.createElement("div",{className:"p-field"},l.a.createElement("label",{className:"p-mb-3"},"Category"),l.a.createElement("div",{className:"p-formgrid p-grid"},l.a.createElement("div",{className:"p-field-radiobutton p-col-6"},l.a.createElement(x.RadioButton,{inputId:"category1",name:"category",value:"Accessories",onChange:ce,checked:"Accessories"===B.category}),l.a.createElement("label",{htmlFor:"category1"},"Accessories")),l.a.createElement("div",{className:"p-field-radiobutton p-col-6"},l.a.createElement(x.RadioButton,{inputId:"category2",name:"category",value:"Clothing",onChange:ce,checked:"Clothing"===B.category}),l.a.createElement("label",{htmlFor:"category2"},"Clothing")),l.a.createElement("div",{className:"p-field-radiobutton p-col-6"},l.a.createElement(x.RadioButton,{inputId:"category3",name:"category",value:"Electronics",onChange:ce,checked:"Electronics"===B.category}),l.a.createElement("label",{htmlFor:"category3"},"Electronics")),l.a.createElement("div",{className:"p-field-radiobutton p-col-6"},l.a.createElement(x.RadioButton,{inputId:"category4",name:"category",value:"Fitness",onChange:ce,checked:"Fitness"===B.category}),l.a.createElement("label",{htmlFor:"category4"},"Fitness")))),l.a.createElement("div",{className:"p-formgrid p-grid"},l.a.createElement("div",{className:"p-field p-col"},l.a.createElement("label",{htmlFor:"price"},"Price"),l.a.createElement(P.InputNumber,{id:"price",value:B.price,onValueChange:e=>ie(e,"price"),mode:"currency",currency:"USD",locale:"en-US"})),l.a.createElement("div",{className:"p-field p-col"},l.a.createElement("label",{htmlFor:"quantity"},"Quantity"),l.a.createElement(P.InputNumber,{id:"quantity",value:B.quantity,onValueChange:e=>ie(e,"quantity"),integeronly:!0})))),l.a.createElement(j.Dialog,{visible:h,style:{width:"450px"},header:"Confirm",modal:!0,footer:de,onHide:ee},l.a.createElement("div",{className:"confirmation-content"},l.a.createElement("i",{className:"pi pi-exclamation-triangle p-mr-3",style:{fontSize:"2rem"}}),B&&l.a.createElement("span",null,"Are you sure you want to delete ",l.a.createElement("b",null,B.name),"?"))),l.a.createElement(j.Dialog,{visible:F,style:{width:"450px"},header:"Confirm",modal:!0,footer:ue,onHide:te},l.a.createElement("div",{className:"confirmation-content"},l.a.createElement("i",{className:"pi pi-exclamation-triangle p-mr-3",style:{fontSize:"2rem"}}),B&&l.a.createElement("span",null,"Are you sure you want to delete the selected products?"))))},F=a(22),T=a.n(F);const D="3131551",M="2019",B="Office-Office-Home-Visits",L="Achi, Traci FNP";class q extends l.a.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("h6",{className:"font-weight-bold"},"ID: ",l.a.createElement("span",{className:"font-weight-normal"},D)),l.a.createElement("h6",{className:"font-weight-bold"},"DOS: ",l.a.createElement("span",{className:"font-weight-normal"},M))),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("h6",{className:"font-weight-bold"},"Facility: ",l.a.createElement("span",{className:"font-weight-normal"},B)),l.a.createElement("h6",{className:"font-weight-bold"},"Provider: ",l.a.createElement("span",{className:"font-weight-normal"},L))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{className:T.a.contentBtn+" m-2 p-2"},"Attach Documents"),l.a.createElement("button",{className:T.a.contentBtn+" m-2 p-2"},"Sreenings"))),l.a.createElement("div",{className:"d-flex"},l.a.createElement("span",{className:T.a.spanWidth+" text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger"},"Patient Status"),l.a.createElement("span",{className:T.a.spanWidth+" text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger"},"Specialist PCP"),l.a.createElement("span",{className:T.a.spanWidth+" text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger"},"Quality Measures"),l.a.createElement("span",{className:T.a.spanWidth+" text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger"},"Patient Education"),l.a.createElement("span",{className:T.a.spanWidth+" text-center p-2 ml-0 bg-light border-right-1 border-danger"},"Misc")))}}var A=q,H=a(34),R=a.n(H);class U extends l.a.Component{render(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:R.a.miniCardHeight+" card mt-2 mb-1"},l.a.createElement("div",{className:"card-header py-1 font-weight-bolder"},"Chief Complaint"),l.a.createElement("div",{className:"card-body overflow-auto"},l.a.createElement("p",{className:"card-text font-weight-bolder"},"Physical exam. EKG SML Allergic rhinits. Watery /Itchy  Eyes"))),l.a.createElement("div",{className:R.a.miniCardHeight+" card mt-1 mb-1"},l.a.createElement("div",{className:"card-header py-1 font-weight-bolder"},"HPI"),l.a.createElement("div",{className:"card-body overflow-auto"},l.a.createElement("p",{className:"card-text font-weight-bolder"},"Physical exam. EKG SML Allergic rhinits. Watery /Itchy  Eyes")))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:R.a.cardHeight+" card mt-2 mb-1"},l.a.createElement("div",{className:"card-header py-1 font-weight-bolder"},"Plan"),l.a.createElement("div",{className:"card-body overflow-auto"},l.a.createElement("p",{className:"card-text font-weight-bolder"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit, error aliquid, facere voluptatum eveniet deserunt itaque quas aliquam temporibus rerum unde natus explicabo numquam voluptate. Voluptas dolorum voluptate maiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit, error aliquid, facere voluptatum eveniet deserunt itaque quas aliquam temporibus rerum unde natus explicabo numquam voluptate. Voluptas dolorum voluptate maiores.")))),l.a.createElement("div",{className:"col-md-6 bordered"},l.a.createElement("div",{className:R.a.cardHeight+" card mt-2 mb-1"},l.a.createElement("div",{className:"card-header py-1 font-weight-bolder"},"Plan"),l.a.createElement("div",{className:"card-body overflow-auto"},l.a.createElement("p",{className:"card-text font-weight-bolder"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit, error aliquid, facere voluptatum eveniet deserunt itaque quas aliquam temporibus rerum unde natus explicabo numquam voluptate. Voluptas dolorum voluptate maiores.")))))}}var z=U;class W extends l.a.Component{render(){return l.a.createElement("div",null,l.a.createElement(A,null),l.a.createElement(z,null))}}var V=W,J=a(24),K=a(20);const G={currentUser:{},initialized:!1};var X=a(87),Q=a(225);let Y=Object(K.c)({form:Q.a,authReducer:function(e=G,t){switch(t.type){case"INITIALIZED_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{currentUser:t.payload,initialized:!0});case"LOG_OUT":return Object(E.a)(Object(E.a)({},e),{},{currentUser:{},initialized:!1});default:return e}}});const Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,$=Object(K.e)(Y,Z(Object(K.a)(X.a)));window._store_=$;var ee=$;const te=e=>({type:"INITIALIZED_SUCCESS",payload:e});var ae=a(12),ne=a.n(ae);class le extends n.Component{constructor(...e){super(...e),this.state={email:"",password:""},this.onInputChange=e=>{this.setState({[e.target.name]:e.target.value})},this.onInputSubmit=e=>{e.preventDefault(),this.props.userLoginFetch(this.state)}}render(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.onInputSubmit},l.a.createElement("h1",null,"Sign In"),l.a.createElement("label",{className:ne.a.label},"Email"),l.a.createElement("input",{name:"email",placeholder:"please enter your email",value:this.state.email,onChange:this.onInputChange,className:ne.a.input}),l.a.createElement("br",null),l.a.createElement("label",{className:ne.a.label},"Password"),l.a.createElement("input",{type:"password",name:"password",placeholder:"enter the password",value:this.state.password,onChange:this.onInputChange,className:ne.a.input}),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{id:"errorDiv",className:ne.a.errorDiv})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"btn btn-sm btn-light"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("b",null,"\u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0442\u043e\u0433\u0434\u0430: "),l.a.createElement(s.b,{to:"/signup",className:"btn btn-sm btn-light"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c")))}}var re=Object(J.b)(null,e=>({userLoginFetch:t=>{return e((a=t,e=>fetch("/api/users/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:a})}).then(e=>e.json()).then(t=>{t.errors?document.getElementById("errorDiv").innerHTML="wrong email or password":t.user&&(localStorage.setItem("token",t.user.token),e(te(t.user)))})));var a}}))(le);class ce extends n.Component{constructor(...e){super(...e),this.state={username:"",email:"",password:"",role:""},this.change=e=>{this.setState({[e.target.name]:e.target.value})},this.submit=e=>{e.preventDefault(),this.props.userPostFetch(this.state),this.clearState()}}clearState(){this.setState({username:"",email:"",password:"",role:""})}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("h1",null,"Sign Up For An Account"),l.a.createElement("label",{className:ne.a.label},"name"),l.a.createElement("input",{name:"username",placeholder:"username",value:this.state.username,onChange:this.change}),l.a.createElement("br",null),l.a.createElement("label",{className:ne.a.label},"email"),l.a.createElement("input",{type:"email",name:"email",placeholder:"email",value:this.state.email,onChange:this.change}),l.a.createElement("br",null),l.a.createElement("label",{className:ne.a.label},"Password"),l.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.change}),l.a.createElement("br",null),l.a.createElement("label",{className:ne.a.label},"role:"),l.a.createElement("select",{value:this.state.role,name:"role",onChange:this.change},l.a.createElement("option",null,"Select your role"),l.a.createElement("option",{value:"admin"},"admin"),l.a.createElement("option",{value:"operator"},"operator"),l.a.createElement("option",{value:"client"},"client")),l.a.createElement("br",null),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("p",{id:"signupErrorDiv",className:ne.a.errorDiv})),l.a.createElement("input",{type:"submit",className:"btn btn-sm btn-light"})),l.a.createElement("br",null),l.a.createElement("div",{className:"signup"},l.a.createElement("b",null,"\u0423 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? \u0442\u043e\u0433\u0434\u0430: "),l.a.createElement(s.b,{to:"/signin",className:"btn btn-sm btn-light"},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435")))}}var se=Object(J.b)(null,e=>({userPostFetch:t=>{return e((a=t,e=>fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:a})}).then(e=>e.json()).then(t=>{if(void 0!==t.message&&console.log("data.message"),void 0!==t.user&&(localStorage.setItem("token",t.user.token),e(te(t.user))),void 0!==t.errors){var a=Object.keys(t.errors);document.getElementById("signupErrorDiv").innerHTML=a[0]+" "+t.errors[a[0]]}})));var a}}))(ce),ie=a(5);class oe extends l.a.Component{constructor(...e){super(...e),this.logout=e=>{e.preventDefault(),localStorage.removeItem("token"),this.props.logoutUser()}}componentDidMount(){this.props.getProfileFetch()}render(){return l.a.createElement("div",{className:"app-wrapper"},l.a.createElement(o,{className:"main-header",initialized:this.props.initialized,logout:this.logout,loginStatus:"logout"}),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2 m-0 p-0"},l.a.createElement(p,null)),l.a.createElement("div",{className:"col-md-10 mt-2"},l.a.createElement(ie.b,{exact:!0,path:"/content"},this.props.initialized?l.a.createElement(V,null):l.a.createElement(ie.a,{to:"/signin"})),l.a.createElement(ie.b,{exact:!0,path:"/signin"},this.props.initialized?l.a.createElement(ie.a,{to:"/content"}):l.a.createElement(re,null)),l.a.createElement(ie.b,{exact:!0,path:"/signup"},this.props.initialized?l.a.createElement(ie.a,{to:"/content"}):l.a.createElement(se,null)),l.a.createElement(ie.b,{exact:!0,path:"/profile"},this.props.initialized?l.a.createElement(g,null):l.a.createElement(ie.a,{to:"/signin"})),l.a.createElement(ie.b,{exact:!0,path:"/table"},this.props.initialized?l.a.createElement(I,null):l.a.createElement(ie.a,{to:"/signin"}))))))}}const me=Object(K.d)(ie.f,Object(J.b)(e=>({currentUser:e.authReducer.currentUser,initialized:e.authReducer.initialized}),e=>({getProfileFetch:()=>e(e=>{const t=localStorage.token;if(t)return fetch("/api/users/auth",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then(e=>e.json()).then(t=>{t.message?localStorage.removeItem("token"):void 0!==t.user&&null!==t.user&&e(te(t.user))})}),logoutUser:()=>e({type:"LOG_OUT"})})))(oe);var de=e=>l.a.createElement(s.a,null,l.a.createElement(J.a,{store:ee},l.a.createElement(me,null)));c.a.render(l.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},34:function(e,t,a){e.exports={cardHeight:"ContentMain_cardHeight__3p3k9",miniCardHeight:"ContentMain_miniCardHeight__lJSlh","card-body":"ContentMain_card-body__lvJHW"}},63:function(e,t,a){e.exports={"datatable-crud-demo":"PrimeTable_datatable-crud-demo__3EujT","table-header":"PrimeTable_table-header__rQXOJ","product-image":"PrimeTable_product-image__3gYcJ","p-dialog":"PrimeTable_p-dialog__KMlP-","confirmation-content":"PrimeTable_confirmation-content__1csme"}},79:function(e,t,a){e.exports={sidebar:"Menu_sidebar__Af9Rs",sidebar__highlight:"Menu_sidebar__highlight__NQZKr",sidebar__highlight__animate:"Menu_sidebar__highlight__animate__1TCXw",test:"Menu_test__2KdPx",active:"Menu_active__2H8Vc","text-active":"Menu_text-active__2lB_d",container:"Menu_container__1bEVr",animFullSidebar:"Menu_animFullSidebar__3m1yX"}},91:function(e,t,a){e.exports=a(223)},99:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.c3f98b37.chunk.js.map