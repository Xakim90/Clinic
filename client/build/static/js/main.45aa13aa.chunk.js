(this.webpackJsonpclinic=this.webpackJsonpclinic||[]).push([[0],{13:function(e,t,a){e.exports={spanWidth:"ContentHeader_spanWidth__3ANDU",contentBtn:"ContentHeader_contentBtn__1ZZDg"}},156:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(38),s=a.n(r);a(67),a(68),a(69),a(70);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(10);class i extends l.a.Component{render(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row bg-primary pt-2"},l.a.createElement("div",{className:"col-4 font-weight-bold"}),l.a.createElement("div",{className:"col-4"},l.a.createElement("h6",{className:"text-center font-weight-bold"},l.a.createElement("span",{className:"font-weight-bold"})," : Patient")),l.a.createElement("div",{className:"col-4"},this.props.initialized?l.a.createElement("button",{onClick:this.props.logout,className:"btn btn-sm btn-light float-right"},"Log Out"):l.a.createElement("div",null,l.a.createElement(c.b,{to:"/signin",className:"btn btn-sm float-right btn-light"},"signin"),l.a.createElement(c.b,{to:"/signup",className:"btn btn-sm float-right btn-light"},"signup")))),l.a.createElement("div",{className:"row bg-dark pt-2 pb-2"},l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 text-white"},"Icon"),l.a.createElement("div",{className:"col-6 text-white"},"Menu"))),l.a.createElement("div",{className:"col-2 offset-8"},l.a.createElement("span",{className:"text-white font-weight-bold"},"Icon "),l.a.createElement("span",{className:"text-white font-weight-bold"},"Show Hide Docs"))),l.a.createElement("div",{className:"row bg-light"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{className:"btn btn-danger"},"Verify/Update Medications")),l.a.createElement("div",{className:"col-md-5 offset-3 pt-2"},l.a.createElement("button",{className:"btn btn-sm btn-light"},"123"),l.a.createElement("button",{className:"btn btn-sm btn-light"},"icon"),l.a.createElement("button",{className:"btn btn-sm btn-light"},"icon"),l.a.createElement("button",{className:"btn btn-sm btn-light"},"icon"),l.a.createElement("button",{className:"btn btn-sm btn-light"},"icon"))))}}var o=i,m=a(16);const d="bg-white p-2 text-dark border",u=300,h="al;skdkal;kdl;aksdlkasl;dks",p="bg-light p-2 text-dark",E=75,g=135,b=20.5,N={1:114,2:75},v=36.6,w=75,f=19;class y extends l.a.Component{render(){return l.a.createElement(m.Accordion,{className:d,duration:u},[1].map(e=>l.a.createElement(m.AccordionItem,{key:e.toString,title:"Item ".concat(e),expanded:1===e},l.a.createElement("div",{title:h,className:p},l.a.createElement("h6",{className:"font-weight-bold"},"Height: ",E,l.a.createElement("span",{className:"font-weight-italic"},"m")),l.a.createElement("h6",{className:"font-weight-bold"},"Weight: ",g,l.a.createElement("span",{className:"font-weight-italic"},"kg")),l.a.createElement("h6",{className:"font-weight-bold"},"BMI: ",b),l.a.createElement("h6",{className:"font-weight-bold"},"Bp: ",N[1]+"/"+N[2]),l.a.createElement("h6",{className:"font-weight-bold"},"T: ",v," ^C"),l.a.createElement("h6",{className:"font-weight-bold"},"P: ",w),l.a.createElement("h6",{className:"font-weight-bold"},"RR: ",f)))))}}var x=y;const C="bg-white p-2 text-dark border",S=300,_="al;skdkal;kdl;aksdlkasl;dks",I="bg-light p-2 text-dark",k=75,P=135,O=20.5,D={1:114,2:75},j=36.6,U=75,A=19;class H extends l.a.Component{render(){return l.a.createElement(m.Accordion,{className:C,duration:S},[1].map(e=>l.a.createElement(m.AccordionItem,{key:e.toString,className:"bg-danger text-white h6",title:"Patient Alerts",expanded:1===e},l.a.createElement("div",{title:_,className:I},l.a.createElement("h6",{className:"font-weight-bold"},"Height: ",k,l.a.createElement("span",{className:"font-weight-italic"},"m")),l.a.createElement("h6",{className:"font-weight-bold"},"Weight: ",P,l.a.createElement("span",{className:"font-weight-italic"},"kg")),l.a.createElement("h6",{className:"font-weight-bold"},"BMI: ",O),l.a.createElement("h6",{className:"font-weight-bold"},"Bp: ",D[1]+"/"+D[2]),l.a.createElement("h6",{className:"font-weight-bold"},"T: ",j," ^C"),l.a.createElement("h6",{className:"font-weight-bold"},"P: ",U),l.a.createElement("h6",{className:"font-weight-bold"},"RR: ",A)))))}}var L=H;class M extends l.a.Component{componentDidMount(){console.log(this.props)}render(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},this.props.initialized&&null!==this.props.currentUser&&this.props.currentUser!=={}?l.a.createElement("div",null,l.a.createElement("h3",{className:"font-weight-bold text-center pt-2 mb-3"},void 0!==this.props.currentUser?this.props.currentUser.username:null),l.a.createElement(x,null),l.a.createElement(L,null)):null))))}}var T=M;class z extends l.a.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"PROFILE PAGE"))}}var q=z,F=a(13),B=a.n(F);const W="3131551",R="2019",G="Office-Office-Home-Visits",V="Achi, Traci FNP";class J extends l.a.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("h6",{className:"font-weight-bold"},"ID: ",l.a.createElement("span",{className:"font-weight-normal"},W)),l.a.createElement("h6",{className:"font-weight-bold"},"DOS: ",l.a.createElement("span",{className:"font-weight-normal"},R))),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("h6",{className:"font-weight-bold"},"Facility: ",l.a.createElement("span",{className:"font-weight-normal"},G)),l.a.createElement("h6",{className:"font-weight-bold"},"Provider: ",l.a.createElement("span",{className:"font-weight-normal"},V))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{className:B.a.contentBtn+" m-2 p-2"},"Attach Documents"),l.a.createElement("button",{className:B.a.contentBtn+" m-2 p-2"},"Sreenings"))),l.a.createElement("div",{className:"d-flex"},l.a.createElement("span",{className:B.a.spanWidth+" text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger"},"Patient Status"),l.a.createElement("span",{className:B.a.spanWidth+" text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger"},"Specialist PCP"),l.a.createElement("span",{className:B.a.spanWidth+" text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger"},"Quality Measures"),l.a.createElement("span",{className:B.a.spanWidth+" text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger"},"Patient Education"),l.a.createElement("span",{className:B.a.spanWidth+" text-center p-2 ml-0 bg-light border-right-1 border-danger"},"Misc")))}}var K=J,Z=a(21),X=a.n(Z);class Q extends l.a.Component{render(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:X.a.miniCardHeight+" card mt-2 mb-1"},l.a.createElement("div",{className:"card-header py-1 font-weight-bolder"},"Chief Complaint"),l.a.createElement("div",{className:"card-body overflow-auto"},l.a.createElement("p",{className:"card-text font-weight-bolder"},"Physical exam. EKG SML Allergic rhinits. Watery /Itchy  Eyes"))),l.a.createElement("div",{className:X.a.miniCardHeight+" card mt-1 mb-1"},l.a.createElement("div",{className:"card-header py-1 font-weight-bolder"},"HPI"),l.a.createElement("div",{className:"card-body overflow-auto"},l.a.createElement("p",{className:"card-text font-weight-bolder"},"Physical exam. EKG SML Allergic rhinits. Watery /Itchy  Eyes")))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:X.a.cardHeight+" card mt-2 mb-1"},l.a.createElement("div",{className:"card-header py-1 font-weight-bolder"},"Plan"),l.a.createElement("div",{className:"card-body overflow-auto"},l.a.createElement("p",{className:"card-text font-weight-bolder"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit, error aliquid, facere voluptatum eveniet deserunt itaque quas aliquam temporibus rerum unde natus explicabo numquam voluptate. Voluptas dolorum voluptate maiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit, error aliquid, facere voluptatum eveniet deserunt itaque quas aliquam temporibus rerum unde natus explicabo numquam voluptate. Voluptas dolorum voluptate maiores.")))),l.a.createElement("div",{className:"col-md-6 bordered"},l.a.createElement("div",{className:X.a.cardHeight+" card mt-2 mb-1"},l.a.createElement("div",{className:"card-header py-1 font-weight-bolder"},"Plan"),l.a.createElement("div",{className:"card-body overflow-auto"},l.a.createElement("p",{className:"card-text font-weight-bolder"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit, error aliquid, facere voluptatum eveniet deserunt itaque quas aliquam temporibus rerum unde natus explicabo numquam voluptate. Voluptas dolorum voluptate maiores.")))))}}var $=Q;class Y extends l.a.Component{render(){return l.a.createElement("div",null,l.a.createElement(K,null),l.a.createElement($,null))}}var ee=Y,te=a(14),ae=a(11),ne=a(22);const le={currentUser:{},initialized:!1};var re=a(59),se=a(158);let ce=Object(ae.c)({form:se.a,authReducer:function(e=le,t){switch(t.type){case"INITIALIZED_SUCCESS":return Object(ne.a)(Object(ne.a)({},e),{},{currentUser:t.payload,initialized:!0});case"LOG_OUT":return Object(ne.a)(Object(ne.a)({},e),{},{currentUser:{},initialized:!1});default:return e}}});const ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,oe=Object(ae.e)(ce,ie(Object(ae.a)(re.a)));window._store_=oe;var me=oe;const de=e=>({type:"INITIALIZED_SUCCESS",payload:e});var ue=a(7),he=a.n(ue);class pe extends n.Component{constructor(...e){super(...e),this.state={email:"",password:""},this.onInputChange=e=>{this.setState({[e.target.name]:e.target.value})},this.onInputSubmit=e=>{e.preventDefault(),this.props.userLoginFetch(this.state)}}componentDidMount(){console.log(this.props),console.log(this.state)}render(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.onInputSubmit},l.a.createElement("h1",null,"Sign In"),l.a.createElement("label",{className:he.a.label},"Email"),l.a.createElement("input",{name:"email",placeholder:"please enter your email",value:this.state.email,onChange:this.onInputChange,className:he.a.input}),l.a.createElement("br",null),l.a.createElement("label",{className:he.a.label},"Password"),l.a.createElement("input",{type:"password",name:"password",placeholder:"enter the password",value:this.state.password,onChange:this.onInputChange,className:he.a.input}),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{id:"errorDiv",className:he.a.errorDiv})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"btn btn-sm btn-light"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("b",null,"\u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0442\u043e\u0433\u0434\u0430: "),l.a.createElement(c.b,{to:"/signup",className:"btn btn-sm btn-light"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c")))}}var Ee=Object(te.b)(null,e=>({userLoginFetch:t=>{return e((a=t,e=>fetch("/api/users/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:a})}).then(e=>e.json()).then(t=>{t.errors?document.getElementById("errorDiv").innerHTML="wrong email or password":t.user&&(localStorage.setItem("token",t.user.token),e(de(t.user)))})));var a}}))(pe);class ge extends n.Component{constructor(...e){super(...e),this.state={username:"",email:"",password:"",role:""},this.change=e=>{this.setState({[e.target.name]:e.target.value})},this.submit=e=>{e.preventDefault(),this.props.userPostFetch(this.state),this.clearState()}}clearState(){this.setState({username:"",email:"",password:"",role:""})}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("h1",null,"Sign Up For An Account"),l.a.createElement("label",{className:he.a.label},"name"),l.a.createElement("input",{name:"username",placeholder:"username",value:this.state.username,onChange:this.change}),l.a.createElement("br",null),l.a.createElement("label",{className:he.a.label},"email"),l.a.createElement("input",{type:"email",name:"email",placeholder:"email",value:this.state.email,onChange:this.change}),l.a.createElement("br",null),l.a.createElement("label",{className:he.a.label},"Password"),l.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.change}),l.a.createElement("br",null),l.a.createElement("label",{className:he.a.label},"role:"),l.a.createElement("select",{value:this.state.role,name:"role",onChange:this.change},l.a.createElement("option",null,"Select your role"),l.a.createElement("option",{value:"admin"},"admin"),l.a.createElement("option",{value:"operator"},"operator"),l.a.createElement("option",{value:"client"},"client")),l.a.createElement("br",null),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("p",{id:"signupErrorDiv",className:he.a.errorDiv})),l.a.createElement("input",{type:"submit",className:"btn btn-sm btn-light"})),l.a.createElement("br",null),l.a.createElement("div",{className:"signup"},l.a.createElement("b",null,"\u0423 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? \u0442\u043e\u0433\u0434\u0430: "),l.a.createElement(c.b,{to:"/signin",className:"btn btn-sm btn-light"},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435")))}}var be=Object(te.b)(null,e=>({userPostFetch:t=>{return e((a=t,e=>fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:a})}).then(e=>e.json()).then(t=>{if(void 0!==t.message&&console.log("data.message"),void 0!==t.user&&(localStorage.setItem("token",t.user.token),e(de(t.user))),void 0!==t.errors){var a=Object.keys(t.errors);document.getElementById("signupErrorDiv").innerHTML=a[0]+" "+t.errors[a[0]]}})));var a}}))(ge),Ne=a(2);class ve extends l.a.Component{constructor(...e){super(...e),this.logout=e=>{e.preventDefault(),localStorage.removeItem("token"),this.props.logoutUser()}}componentDidMount(){this.props.getProfileFetch()}render(){return l.a.createElement("div",{className:"app-wrapper"},l.a.createElement(o,{className:"main-header",initialized:this.props.initialized,logout:this.logout,loginStatus:"logout"}),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 mt-2"},l.a.createElement(T,{initialized:this.props.initialized,currentUser:this.props.currentUser})),l.a.createElement("div",{className:"col-md-9 mt-2"},l.a.createElement(Ne.b,{path:"/"},this.props.initialized?l.a.createElement(ee,null):l.a.createElement(Ne.a,{to:"/signin"})),l.a.createElement(Ne.b,{exact:!0,path:"/signin"},this.props.initialized?l.a.createElement(Ne.a,{to:"/content"}):l.a.createElement(Ee,null)),l.a.createElement(Ne.b,{exact:!0,path:"/signup"},this.props.initialized?l.a.createElement(Ne.a,{to:"/content"}):l.a.createElement(be,null)),l.a.createElement(Ne.b,{exact:!0,path:"/profile"},this.props.initialized?l.a.createElement(q,null):l.a.createElement(Ne.a,{to:"/signin"}))))))}}const we=Object(ae.d)(Ne.f,Object(te.b)(e=>({currentUser:e.authReducer.currentUser,initialized:e.authReducer.initialized}),e=>({getProfileFetch:()=>e(e=>{const t=localStorage.token;if(t)return fetch("/api/users/auth",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then(e=>e.json()).then(t=>{t.message?localStorage.removeItem("token"):void 0!==t.user&&null!==t.user&&e(de(t.user))})}),logoutUser:()=>e({type:"LOG_OUT"})})))(ve);var fe=e=>l.a.createElement(c.a,null,l.a.createElement(te.a,{store:me},l.a.createElement(we,null)));s.a.render(l.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},21:function(e,t,a){e.exports={cardHeight:"ContentMain_cardHeight__2hlJe",miniCardHeight:"ContentMain_miniCardHeight__17jmI","card-body":"ContentMain_card-body__3tF8N"}},62:function(e,t,a){e.exports=a(156)},7:function(e,t,a){e.exports={label:"Signin_label__1GtKL",input:"Signin_input__2DUPK",errorDiv:"Signin_errorDiv__2dirn"}},70:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.45aa13aa.chunk.js.map