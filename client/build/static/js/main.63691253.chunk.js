(this.webpackJsonpclinic=this.webpackJsonpclinic||[]).push([[0],{129:function(e,t,a){e.exports={label:"RegClient_label__1Jcw6",errorDiv:"RegClient_errorDiv__3sMYV"}},157:function(e,t,a){e.exports={cardHeight:"ContentMain_cardHeight__BzuEq",miniCardHeight:"ContentMain_miniCardHeight__DxZMB","card-body":"ContentMain_card-body__2B8RO"}},216:function(e,t,a){e.exports={label:"Signin_label__2YL6_",errorDiv:"Signin_errorDiv__mLdYv"}},417:function(e,t,a){},554:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),s=a.n(r);a(414),a(415),a(416),a(417);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(94),o=a(593),c=a(594),m=a(66),d=a(368),u=a(257),p=a(394),h=a.n(p),E=a(330);class b extends l.a.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"PROFILE PAGE"))}}var g=b,v=a(4),f=a(195),C=a(325),N=a(583),w=a(326),y=a(372),S=a.n(y),x=a(373),O=a.n(x),j=a(263),D=a.n(j);const _=Object(v.a)({paper:{}})((e=>l.a.createElement(f.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e)))),P=Object(v.a)((e=>({root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}})))(C.a);function k(e){const t=l.a.useState(null),a=Object(i.a)(t,2),n=a[0],r=a[1];return l.a.createElement("div",null,l.a.createElement(N.a,{onClick:e=>{r(e.currentTarget)},className:"cursor-pointer"},l.a.createElement(D.a,{fontSize:"large",color:"inherit"})),l.a.createElement(_,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:()=>{r(null)}},l.a.createElement(P,null,l.a.createElement(N.a,null,l.a.createElement(D.a,{fontSize:"small"})),l.a.createElement(w.a,{primary:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})),l.a.createElement(P,null,l.a.createElement(N.a,null,l.a.createElement(S.a,{fontSize:"small"})),l.a.createElement(w.a,{primary:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})),l.a.createElement(P,{onClick:e.logout},l.a.createElement(N.a,null,l.a.createElement(O.a,{fontSize:"small"})),l.a.createElement(w.a,{primary:"\u0412\u044b\u0439\u0442\u0438"}))))}var I=a(256),T=a.n(I),F=a(265),L=a.n(F),z=a(377),A=a.n(z),U=a(266),M=a.n(U),R=a(378),B=a.n(R),q=a(379),H=a.n(q),W=a(380),J=a.n(W),V=a(382),G=a.n(V),Y=a(383),Z=a.n(Y),X=a(381),Q=a.n(X),$=a(384),K=a.n($),ee=a(385),te=a.n(ee),ae=a(386),ne=a.n(ae),le=a(387),re=a.n(le);class se extends l.a.Component{constructor(...e){super(...e),this.rowAdd=e=>{this.props.clientPostFetch(e),this.props.getClientsFetch()},this.rowUpdate=e=>{this.props.updateClient(e),this.props.getClientsFetch()},this.rowDelete=e=>{this.props.removeClient(e),this.props.getClientsFetch()}}componentDidUpdate(e){e.children,this.props.children}render(){return l.a.createElement(T.a,{title:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432",data:this.props.clients,columns:[{title:"\u0418\u043c\u044f",field:"name"},{title:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",field:"surname"},{title:"\u0421\u0442\u0430\u0442\u0443\u0441",field:"status"},{title:"\u0413\u043e\u0434 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",field:"birthYear",type:"numeric"},{title:"\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f",field:"birthCity",lookup:{1:"\u0422\u0430\u0448\u043a\u0435\u043d\u0442",10:"\u0422\u0430\u0448\u043a\u0435\u043d\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",20:"\u0421\u044b\u0440\u0434\u0430\u0440\u044c\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",25:"\u0414\u0436\u0438\u0437\u0430\u043a\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",30:"\u0421\u0430\u043c\u0430\u0440\u043a\u0430\u043d\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",40:"\u0424\u0435\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",50:"\u041d\u0430\u043c\u0430\u043d\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",60:"\u0410\u043d\u0434\u0438\u0436\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",70:"\u041a\u0430\u0448\u043a\u0430\u0434\u0430\u0440\u044c\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",75:"\u0421\u0443\u0440\u0445\u0430\u043d\u0434\u0430\u0440\u044c\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",80:"\u0411\u0443\u0445\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",85:"\u041d\u0430\u0432\u043e\u0438\u0439\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",90:"\u0425\u043e\u0440\u0435\u0437\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",95:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u043a\u0430\u043b\u043f\u0430\u043a\u0441\u0442\u0430\u043d"}}],actions:[{icon:L.a,tooltip:"Save User",onClick:(e,t)=>alert("You saved "+t.name)}],icons:{Search:A.a,ResetSearch:M.a,Edit:B.a,Delete:H.a,Save:L.a,Cancel:J.a,Check:Q.a,Clear:M.a,FirstPage:G.a,LastPage:Z.a,PreviousPage:K.a,NextPage:te.a,Add:ne.a,SortArrow:re.a},editable:{onRowAdd:e=>new Promise(((t,a)=>{t(),this.rowAdd(e)})),onRowUpdate:(e,t)=>new Promise(((a,n)=>{[...this.props.clients][t.tableData.id]=e,a(),this.rowUpdate(e)})),onRowDelete:e=>new Promise(((t,a)=>{const n=[...this.props.clients],l=e.tableData.id,r=e._id;n.splice(l,1),t(),this.rowDelete(r)}))}})}}var ie=se,oe=a(344),ce=a(350);const me=Object(oe.a)((e=>({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}})));function de(){const e=me();return l.a.createElement("div",{className:e.root},l.a.createElement(ce.a,null),l.a.createElement(ce.a,{color:"secondary"}))}var ue=a(213);Object(ue.a)();const pe="",he=e=>({type:"INITIALIZED_SUCCESS",payload:e}),Ee=e=>({type:"LOADED_SUCCESS",payload:e}),be=()=>e=>{const t=localStorage.token;if(t)return fetch("".concat(pe,"/api/clients"),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((e=>e.json())).then((t=>{t.message||void 0!==t&&null!==t&&e(Ee(t))}))},ge=e=>t=>fetch("".concat(pe,"/api/clients"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({client:e})}).then((e=>e.json())).then((e=>{void 0!==e.message&&console.log("data.message"),void 0!==e&&t(Ee(e.client)),e.errors}));var ve=a(29),fe=a(30),Ce=a(58);class Ne extends l.a.Component{componentDidMount(){this.props.getClientsFetch()}render(){return l.a.createElement(l.a.Fragment,null,this.props.loaded?l.a.createElement(ie,{clientPostFetch:this.props.clientPostFetch,getClientsFetch:this.props.getClientsFetch,removeClient:this.props.removeClient,updateClient:this.props.updateClient,clients:this.props.clients}):l.a.createElement(de,null))}}var we=Object(fe.d)(ve.e,Object(Ce.b)((e=>({clients:e.clientsReducer.clients,loaded:e.clientsReducer.loaded})),(e=>({getClientsFetch:()=>e(be()),clientPostFetch:t=>e(ge(t)),removeClient:t=>e((e=>t=>fetch("".concat(pe,"/api/clients"),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({id:e})}))(t)),updateClient:t=>e((e=>t=>fetch("".concat(pe,"/api/clients"),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{void 0!==e.message&&console.log("data.message"),e.errors})))(t))}))))(Ne),ye=a(96),Se=a.n(ye);const xe="3131551",Oe="2019",je="Office-Office-Home-Visits",De="Achi, Traci FNP";class _e extends l.a.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("h6",{className:"font-weight-bold"},"ID: ",l.a.createElement("span",{className:"font-weight-normal"},xe)),l.a.createElement("h6",{className:"font-weight-bold"},"DOS: ",l.a.createElement("span",{className:"font-weight-normal"},Oe))),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("h6",{className:"font-weight-bold"},"Facility: ",l.a.createElement("span",{className:"font-weight-normal"},je)),l.a.createElement("h6",{className:"font-weight-bold"},"Provider: ",l.a.createElement("span",{className:"font-weight-normal"},De))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{className:Se.a.contentBtn+" m-2 p-2"},"Attach Documents"),l.a.createElement("button",{className:Se.a.contentBtn+" m-2 p-2"},"Sreenings"))),l.a.createElement("div",{className:"d-flex"},l.a.createElement("span",{className:Se.a.spanWidth+" text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger"},"Patient Status"),l.a.createElement("span",{className:Se.a.spanWidth+" text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger"},"Specialist PCP"),l.a.createElement("span",{className:Se.a.spanWidth+" text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger"},"Quality Measures"),l.a.createElement("span",{className:Se.a.spanWidth+" text-center p-2 mr-1 ml-0 bg-light border-right-1 border-danger"},"Patient Education"),l.a.createElement("span",{className:Se.a.spanWidth+" text-center p-2 ml-0 bg-light border-right-1 border-danger"},"Misc")))}}var Pe=_e,ke=a(157),Ie=a.n(ke);const Te=[{complaint:"\u0410\u043b\u043b\u0435\u0440\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0438\u043d\u0438\u0442. \u0413\u043e\u043b\u043e\u0432\u043d\u0430\u044f \u0431\u043e\u043b\u044c",history:"\u0416\u0435\u043b\u0442\u0443\u0445\u0430.\u0410\u043b\u043b\u0435\u0440\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0438\u043d\u0438\u0442. \u0413\u043e\u043b\u043e\u0432\u043d\u0430\u044f \u0431\u043e\u043b\u044c"}];class Fe extends l.a.Component{componentDidMount(){this.props.getClientsFetch();this.props.clients}render(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:Ie.a.miniCardHeight+" card mt-2 mb-2"},l.a.createElement("div",{className:"card-header py-1 font-weight-bolder"},"\u041f\u0430\u0446\u0438\u0435\u043d\u0442\u044b :"),l.a.createElement("div",{className:"card-body overflow-auto mb-2"},this.props.clients.map(((e,t)=>l.a.createElement("p",{key:t,className:"card-text font-weight-bolder cursor-pointer hover:text-blue-900"},e.name))))),l.a.createElement("div",{className:Ie.a.miniCardHeight+" card mt-1 mb-1"},l.a.createElement("div",{className:"card-header py-1 font-weight-bolder"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0431\u043e\u043b\u0435\u0437\u043d\u0438 :"),l.a.createElement("div",{className:"card-body overflow-auto"},Te.map(((e,t)=>l.a.createElement("p",{key:t,className:"card-text font-weight-bolder"},e.history)))))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:Ie.a.cardHeight+" card mt-2 mb-1"},l.a.createElement("div",{className:"card-header py-1 font-weight-bolder"},"Plan"),l.a.createElement("div",{className:"card-body overflow-auto"},l.a.createElement("p",{className:"card-text font-weight-bolder"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit, error aliquid, facere voluptatum eveniet deserunt itaque quas aliquam temporibus rerum unde natus explicabo numquam voluptate. Voluptas dolorum voluptate maiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit, error aliquid, facere voluptatum eveniet deserunt itaque quas aliquam temporibus rerum unde natus explicabo numquam voluptate. Voluptas dolorum voluptate maiores.")))),l.a.createElement("div",{className:"col-md-6 bordered"},l.a.createElement("div",{className:Ie.a.cardHeight+" card mt-2 mb-1"},l.a.createElement("div",{className:"card-header py-1 font-weight-bolder"},"Plan"),l.a.createElement("div",{className:"card-body overflow-auto"},l.a.createElement("p",{className:"card-text font-weight-bolder"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit, error aliquid, facere voluptatum eveniet deserunt itaque quas aliquam temporibus rerum unde natus explicabo numquam voluptate. Voluptas dolorum voluptate maiores.")))))}}var Le=Object(fe.d)(ve.e,Object(Ce.b)((e=>({clients:e.clientsReducer.clients,loaded:e.clientsReducer.loaded})),(e=>({getClientsFetch:()=>e(be())}))))(Fe);class ze extends l.a.Component{render(){return l.a.createElement("div",null,l.a.createElement(Pe,null),l.a.createElement(Le,null))}}var Ae=ze,Ue=a(216),Me=a.n(Ue),Re=a(34),Be=a(341);class qe extends n.Component{constructor(...e){super(...e),this.state={email:"",password:""},this.onInputChange=e=>{this.setState({[e.target.name]:e.target.value})},this.onInputSubmit=e=>{e.preventDefault(),this.props.userLoginFetch(this.state)}}render(){return l.a.createElement("div",{className:"grid grid-cols-1 gap-12"},l.a.createElement("form",{onSubmit:this.onInputSubmit},l.a.createElement("h1",null,"\u0412\u0445\u043e\u0434"),l.a.createElement("br",null),l.a.createElement("span",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 email:admin@gmail.com \u0438 \u043f\u0430\u0440\u043e\u043b\u044c:admin \u0447\u0442\u043e\u0431\u044b \u0432\u043e\u0439\u0442\u0438 \u0438 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443!"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(Be.a,{id:"outlined-email-input",label:"Email",type:"email",autoComplete:"current-email",variant:"outlined",value:this.state.email,onChange:this.onInputChange,size:"small",name:"email"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(Be.a,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",value:this.state.password,onChange:this.onInputChange,size:"small",name:"password"}),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{id:"errorDiv",className:Me.a.errorDiv})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"btn btn-sm btn-light"})),l.a.createElement("div",null,l.a.createElement("b",null,"\u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0442\u043e\u0433\u0434\u0430: "),l.a.createElement(Re.b,{to:"/signup",className:"btn btn-sm btn-light"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c")))}}var He=Object(Ce.b)(null,(e=>({userLoginFetch:t=>{return e((a=t,e=>fetch("".concat(pe,"/api/users/login"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:a})}).then((e=>e.json())).then((t=>{t.errors?document.getElementById("errorDiv").innerHTML="wrong email or password":t.user&&(localStorage.setItem("token",t.user.token),e(he(t.user)))}))));var a}})))(qe);class We extends l.a.Component{render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Re.b,{to:"/test"},"To Test page"),l.a.createElement("h1",null,"\u042d\u0442\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0435\u0449\u0435 \u043d\u0435 \u0433\u043e\u0442\u043e\u0432\u0430"))}}var Je=We;class Ve extends l.a.Component{constructor(e){super(e),this.state={date:new Date}}componentDidMount(){this.timerID=setInterval((()=>this.tick()),1e3)}componentWillUnmount(){clearInterval(this.timerID)}tick(){this.setState({date:new Date})}render(){return l.a.createElement("div",null,l.a.createElement("h1",null,"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0438\u0440!"),l.a.createElement("h2",null,"\u0421\u0435\u0439\u0447\u0430\u0441 ",this.state.date.toLocaleTimeString(),"."))}}var Ge=Ve,Ye=a(129),Ze=a.n(Ye);class Xe extends n.Component{constructor(...e){super(...e),this.state={name:"",surname:"",complaint:"",history:""},this.change=e=>{this.setState({[e.target.name]:e.target.value})},this.submit=e=>{e.preventDefault(),this.props.clientPostFetch(this.state),this.clearState()}}clearState(){this.setState({name:"",surname:"",complaint:"",history:""})}render(){return l.a.createElement("div",{className:"flex flex-col md:flex-row"},l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430"),l.a.createElement("label",{className:Ze.a.label},"\u0418\u043c\u044f"),l.a.createElement("input",{name:"name",placeholder:"\u0418\u043c\u044f",value:this.state.name,onChange:this.change}),l.a.createElement("br",null),l.a.createElement("label",{className:Ze.a.label},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"),l.a.createElement("input",{type:"text",name:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",placeholder:"surname",value:this.state.surname,onChange:this.change}),l.a.createElement("br",null),l.a.createElement("label",{className:Ze.a.label},"\u0416\u0430\u043b\u043e\u0431\u044b"),l.a.createElement("textarea",{name:"complaint",placeholder:"\u0416\u0430\u043b\u043e\u0431\u044b",value:this.state.complaint,onChange:this.change}),l.a.createElement("br",null),l.a.createElement("label",{className:Ze.a.label},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0431\u043e\u043b\u0435\u0437\u043d\u0438:"),l.a.createElement("textarea",{placeholder:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0431\u043e\u043b\u0435\u0437\u043d\u0438",value:this.state.history,name:"history",onChange:this.change}),l.a.createElement("br",null),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("p",{id:"signupErrorDiv",className:Ze.a.errorDiv})),l.a.createElement("input",{type:"submit",className:"btn btn-sm btn-light"})),l.a.createElement("br",null),l.a.createElement("div",{className:"signup"},l.a.createElement(Re.b,{to:"/table",className:"btn btn-sm btn-light"},"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0432\u0441\u0435\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432")))}}var Qe=Object(Ce.b)(null,(e=>({clientPostFetch:t=>e(ge(t))})))(Xe),$e=a(17);class Ke extends n.Component{constructor(...e){super(...e),this.state={username:"",email:"",password:"",role:""},this.handleChange=e=>{this.setState({[e.target.name]:e.target.value})},this.submit=e=>{e.preventDefault(),this.props.userPostFetch(this.state),this.clearState()}}clearState(){this.setState({username:"",email:"",password:"",role:""})}render(){return l.a.createElement("div",{className:"grid grid-cols-1 gap-12"},l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement("br",null),l.a.createElement(Be.a,{id:"outlined-email-input-01",label:"\u0418\u043c\u044f",type:"text",variant:"outlined",value:this.state.username,onChange:this.handleChange,size:"small",name:"username"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(Be.a,{id:"outlined-email-input-02",label:"Email",type:"email",autoComplete:"current-email",variant:"outlined",value:this.state.email,onChange:this.handleChange,size:"small",name:"email"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(Be.a,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",value:this.state.password,onChange:this.handleChange,size:"small",name:"password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("select",{value:this.state.role,className:"border py-2 px-2",name:"role",onChange:this.handleChange},l.a.createElement("option",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0440\u043e\u043b\u044c \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435:"),l.a.createElement("option",{className:"border py-2 px-3",value:"admin"},"admin"),l.a.createElement("option",{value:"operator"},"operator"),l.a.createElement("option",{value:"client"},"client")),l.a.createElement("br",null),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("p",{id:"signupErrorDiv",className:Me.a.errorDiv})),l.a.createElement("input",{type:"submit",className:"btn btn-sm btn-light"})),l.a.createElement("div",{className:"signup"},l.a.createElement("b",null,"\u0423 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? \u0442\u043e\u0433\u0434\u0430: "),l.a.createElement(Re.b,{to:"/signin",className:"btn btn-sm btn-light"},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435")))}}var et=Object(Ce.b)(null,(e=>({userPostFetch:t=>{return e((a=t,e=>fetch("".concat(pe,"/api/users"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:a})}).then((e=>e.json())).then((t=>{if(void 0!==t.message&&console.log("data.message"),void 0!==t.user&&(localStorage.setItem("token",t.user.token),e(he(t.user))),void 0!==t.errors){var a=Object.keys(t.errors);document.getElementById("signupErrorDiv").innerHTML=a[0]+" "+t.errors[a[0]]}}))));var a}})))(Ke),tt=a(595),at=a(559),nt=a(560),lt=a(592),rt=a(261),st=a.n(rt),it=a(390),ot=a.n(it),ct=a(392),mt=a.n(ct),dt=a(393),ut=a.n(dt),pt=a(391),ht=a.n(pt),Et=a(388),bt=a.n(Et),gt=a(389),vt=a.n(gt);const ft=Object(oe.a)((e=>({root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}))),Ct=[{title:"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",href:"/home",icon:l.a.createElement(bt.a,null)},{title:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432",href:"/table",icon:l.a.createElement(vt.a,null)},{title:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432",href:"/content",icon:l.a.createElement(ot.a,null)}],Nt=[{title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",href:"/profile",icon:l.a.createElement(ht.a,null)}];function wt(e){const t=ft(),a=l.a.useState(!0),n=Object(i.a)(a,2),r=n[0],s=n[1];return l.a.createElement(at.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:l.a.createElement(tt.a,{component:"div",id:"nested-list-subheader"},"Menu"),className:t.root},Ct.map(((e,t)=>l.a.createElement(nt.a,{key:t,button:!0},l.a.createElement(N.a,null,e.icon),l.a.createElement(Re.b,{to:e.href},e.title," ")))),l.a.createElement(nt.a,{button:!0,onClick:()=>{s(!r)}},l.a.createElement(N.a,null,l.a.createElement(st.a,null)),r?l.a.createElement(mt.a,null):l.a.createElement(ut.a,null),l.a.createElement(w.a,{primary:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"})),l.a.createElement(lt.a,{in:r,timeout:"auto",unmountOnExit:!0},l.a.createElement(at.a,{component:"div",disablePadding:!0},Nt.map(((e,a)=>l.a.createElement(nt.a,{key:a,button:!0,className:t.nested},l.a.createElement(N.a,null,e.icon),l.a.createElement(Re.b,{to:e.href},e.title)))))))}const yt=240,St=Object(oe.a)((e=>({root:{display:"flex"},drawer:{[e.breakpoints.up("sm")]:{width:yt,flexShrink:0}},appBar:{[e.breakpoints.up("sm")]:{width:"calc(100% - ".concat(yt,"px)"),marginLeft:yt}},menuButton:{marginRight:e.spacing(2),[e.breakpoints.up("sm")]:{display:"none"}},toolbar:e.mixins.toolbar,drawerPaper:{width:yt},content:{flexGrow:1,padding:e.spacing(3)}})));var xt=function(e){const t=l.a.useState(!0),a=Object(i.a)(t,2),n=(a[0],a[1],l.a.useState(null)),r=Object(i.a)(n,2),s=(r[0],r[1],e.window),p=St(),b=Object($e.a)(),v=l.a.useState(!1),f=Object(i.a)(v,2),C=f[0],N=f[1],w=()=>{N(!C)},y=l.a.createElement("div",{className:p.toolbar},l.a.createElement(wt,null)),S=void 0!==s?()=>s().document.body:void 0;return l.a.createElement("div",{className:"md:flex justify-end"},l.a.createElement(c.a,null),l.a.createElement(o.a,{position:"fixed",className:p.appBar,color:"secondary"},l.a.createElement(E.a,{className:"md:flex justify-end"},l.a.createElement(u.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:w,className:p.menuButton},l.a.createElement(h.a,null)),e.initialized?l.a.createElement(k,{logout:e.logout}):l.a.createElement("div",null,l.a.createElement(Re.b,{to:"/signin",className:"btn btn-sm text-deeppink float-right btn-light"},"\u0412\u0445\u043e\u0434")))),l.a.createElement("nav",{className:p.drawer,"aria-label":"mailbox folders"},l.a.createElement(d.a,{smUp:!0,implementation:"css"},l.a.createElement(m.a,{container:S,variant:"temporary",anchor:"rtl"===b.direction?"right":"left",open:C,onClose:w,classes:{paper:p.drawerPaper},ModalProps:{keepMounted:!0}},y)),l.a.createElement(d.a,{xsDown:!0,implementation:"css"},l.a.createElement(m.a,{classes:{paper:p.drawerPaper},variant:"permanent",open:!0},y))),l.a.createElement("main",{className:p.content},l.a.createElement("div",{className:p.toolbar}),l.a.createElement(ve.a,{exact:!0,path:"/"},e.initialized?l.a.createElement(we,null):l.a.createElement(He,null)),l.a.createElement(ve.a,{exact:!0,path:"/signin"},l.a.createElement(He,null)),l.a.createElement(ve.a,{exact:!0,path:"/signup"},l.a.createElement(et,null)),l.a.createElement(ve.a,{exact:!0,path:"/content"},l.a.createElement(Ae,null)),l.a.createElement(ve.a,{exact:!0,path:"/profile"},l.a.createElement(g,null)),l.a.createElement(ve.a,{exact:!0,path:"/table"},l.a.createElement(we,null)),l.a.createElement(ve.a,{exact:!0,path:"/regclient"},l.a.createElement(Qe,null)),l.a.createElement(ve.a,{exact:!0,path:"/home"},l.a.createElement(Je,null)),l.a.createElement(ve.a,{exact:!0,path:"/test"},l.a.createElement(Ge,null))))},Ot=a(78);const jt={currentUser:{},initialized:!1};const Dt={clients:[],loaded:!1};var _t=a(395),Pt=a(596);let kt=Object(fe.c)({form:Pt.a,clientsReducer:function(e=Dt,t){switch(t.type){case"LOADED_SUCCESS":return Object(Ot.a)(Object(Ot.a)({},e),{},{clients:t.payload,loaded:!0});case"REMOVE_LOADED_CLIENTS":return Object(Ot.a)(Object(Ot.a)({},e),{},{clients:[],loaded:!1});default:return e}},authReducer:function(e=jt,t){switch(t.type){case"INITIALIZED_SUCCESS":return Object(Ot.a)(Object(Ot.a)({},e),{},{currentUser:t.payload,initialized:!0});case"LOG_OUT":return Object(Ot.a)(Object(Ot.a)({},e),{},{currentUser:{},initialized:!1});default:return e}}});const It=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.d,Tt=Object(fe.e)(kt,It(Object(fe.a)(_t.a)));window._store_=Tt;var Ft=Tt;Object(ue.a)().location;class Lt extends l.a.Component{constructor(...e){super(...e),this.logout=e=>{e.preventDefault(),localStorage.removeItem("token"),this.props.logoutUser()}}componentDidMount(){this.props.getProfileFetch()}render(){return l.a.createElement(xt,{initialized:this.props.initialized,logout:this.logout})}}const zt=Object(fe.d)(ve.e,Object(Ce.b)((e=>({currentUser:e.authReducer.currentUser,initialized:e.authReducer.initialized})),(e=>({getProfileFetch:()=>e((e=>{const t=localStorage.token;if(t)return fetch("".concat(pe,"/api/users/auth"),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((e=>e.json())).then((t=>{t.message?localStorage.removeItem("token"):void 0!==t.user&&null!==t.user&&e(he(t.user))}))})),logoutUser:()=>e({type:"LOG_OUT"})}))))(Lt);var At=e=>l.a.createElement(Re.a,null,l.a.createElement(Ce.a,{store:Ft},l.a.createElement(zt,null)));s.a.render(l.a.createElement(At,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))},96:function(e,t,a){e.exports={spanWidth:"ContentHeader_spanWidth__3g2zZ",contentBtn:"ContentHeader_contentBtn__27Zyx"}}},[[554,1,2]]]);
//# sourceMappingURL=main.63691253.chunk.js.map