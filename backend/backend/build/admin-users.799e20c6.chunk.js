(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5199],{14319:function(x,y,t){(function(e,a){x.exports=a(t(53547))})(this,function(e){return function(a){var c={};function l(n){if(c[n])return c[n].exports;var r=c[n]={i:n,l:!1,exports:{}};return a[n].call(r.exports,r,r.exports,l),r.l=!0,r.exports}return l.m=a,l.c=c,l.d=function(n,r,p){l.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:p})},l.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,r){if(1&r&&(n=l(n)),8&r||4&r&&typeof n=="object"&&n&&n.__esModule)return n;var p=Object.create(null);if(l.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:n}),2&r&&typeof n!="string")for(var f in n)l.d(p,f,function(D){return n[D]}.bind(null,f));return p},l.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(r,"a",r),r},l.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},l.p="",l(l.s=67)}({0:function(a,c){a.exports=e},67:function(a,c,l){"use strict";l.r(c);var n=l(0);function r(){return(r=Object.assign||function(p){for(var f=1;f<arguments.length;f++){var D=arguments[f];for(var M in D)Object.prototype.hasOwnProperty.call(D,M)&&(p[M]=D[M])}return p}).apply(this,arguments)}c.default=function(p){return n.createElement("svg",r({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p),n.createElement("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),n.createElement("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),n.createElement("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"}))}}})})},79313:(x,y,t)=>{"use strict";t.d(y,{Z:()=>a});const a={firstname:"",lastname:"",email:"",roles:[]}},91972:(x,y,t)=>{"use strict";t.d(y,{Z:()=>a});const a=[]},61322:(x,y,t)=>{"use strict";t.r(y),t.d(y,{default:()=>qe});var e=t(53547),a=t(68547),c=t(92699),l=t(35395),n=t(64459),r=t(80117),p=t(67422),f=t(14319),D=t.n(f),M=t(49656),v=t(97132),m=t(23724),T=t(45697),u=t.n(T),te=t(46458),I=t(94117),ae=t(49549),X=t(40264),b=t(33483),j=t(43546),N=t(56204),$=t.n(N),H=t(62982),le=t.n(H),V=t(58836),oe=Object.defineProperty,U=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,Y=(s,i,o)=>i in s?oe(s,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[i]=o,ne=(s,i)=>{for(var o in i||(i={}))J.call(i,o)&&Y(s,o,i[o]);if(U)for(var o of U(i))B.call(i,o)&&Y(s,o,i[o]);return s},ge=(s,i)=>{var o={};for(var d in s)J.call(s,d)&&i.indexOf(d)<0&&(o[d]=s[d]);if(s!=null&&U)for(var d of U(s))i.indexOf(d)<0&&B.call(s,d)&&(o[d]=s[d]);return o};const z=({canDelete:s,headers:i,entriesToDelete:o,onClickDelete:d,onSelectRow:P,withMainAction:A,withBulkActions:O,rows:h})=>{const{push:E,location:{pathname:C}}=(0,M.useHistory)(),{formatMessage:Z}=(0,v.useIntl)();return e.createElement(j.Tbody,null,h.map(g=>{const re=o.findIndex(W=>W===g.id)!==-1;return e.createElement(j.Tr,ne({key:g.id},(0,a.onRowClick)({fn:()=>E(`${C}/${g.id}`),condition:O})),A&&e.createElement(j.Td,ne({},a.stopPropagation),e.createElement(te.BaseCheckbox,{"aria-label":Z({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,V.Pp)(g.firstname,g.lastname)}),checked:re,onChange:()=>{P({name:g.id,value:!re})}})),i.map(W=>{var F=W,{key:se,cellFormatter:q,name:ee}=F,K=ge(F,["key","cellFormatter","name"]);return e.createElement(j.Td,{key:se},typeof q=="function"?q(g,ne({key:se,name:ee},K)):e.createElement(b.Typography,{textColor:"neutral800"},g[ee]||"-"))}),O&&e.createElement(j.Td,null,e.createElement(X.Flex,{justifyContent:"end"},e.createElement(ae.IconButton,{onClick:()=>E(`${C}/${g.id}`),label:Z({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,V.Pp)(g.firstname,g.lastname)}),noBorder:!0,icon:e.createElement($(),null)}),s&&e.createElement(I.Box,ne({paddingLeft:1},a.stopPropagation),e.createElement(ae.IconButton,{onClick:()=>d(g.id),label:Z({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,V.Pp)(g.firstname,g.lastname)}),noBorder:!0,icon:e.createElement(le(),null)})))))}))};z.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete:()=>{},onSelectRow:()=>{},rows:[],withBulkActions:!1,withMainAction:!1},z.propTypes={canDelete:u().bool,entriesToDelete:u().array,headers:u().array.isRequired,onClickDelete:u().func,onSelectRow:u().func,rows:u().array,withBulkActions:u().bool,withMainAction:u().bool};const be=z;var Ue=t(88231),We=t.n(Ue);const De=({displayedFilters:s})=>{const[i,o]=(0,e.useState)(!1),{formatMessage:d}=(0,v.useIntl)(),P=(0,e.useRef)(),A=()=>{o(O=>!O)};return e.createElement(e.Fragment,null,e.createElement(I.Box,{paddingTop:1,paddingBottom:1},e.createElement(n.Button,{variant:"tertiary",ref:P,startIcon:e.createElement(We(),null),onClick:A,size:"S"},d({id:"app.utils.filters",defaultMessage:"Filters"})),i&&e.createElement(a.FilterPopoverURLQuery,{displayedFilters:s,isVisible:i,onToggle:A,source:P})),e.createElement(a.FilterListURLQuery,{filtersSchema:s}))};De.propTypes={displayedFilters:u().arrayOf(u().shape({name:u().string.isRequired,metadatas:u().shape({label:u().string}),fieldSchema:u().shape({type:u().string})})).isRequired};const Fe=De;var me=t(87462),Te=t(15861),ve=t(70885),Ke=t(87757),pe=t.n(Ke),fe=t(68991),ie=t(39272),Ce=t(44981),Le=t(9524),xe=t(80831),ye=t(63955),Ze=t(7676);const je=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];var ce=t(53209);const Ne=ce.Ry().shape({firstname:ce.Z_().required(a.translatedErrors.required),lastname:ce.Z_(),email:ce.Z_().email(a.translatedErrors.email).required(a.translatedErrors.required),roles:ce.IX().min(1,a.translatedErrors.required).required(a.translatedErrors.required)}),$e={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};var ze=function(){return window&&window.strapi&&window.strapi.isEE?t(58818).Z:t(79313).Z}(),Qe=function(){return window&&window.strapi&&window.strapi.isEE?t(81003).Z:t(91972).Z}(),we=function(){return window&&window.strapi&&window.strapi.isEE?t(77791).Z:t(26010).Z}(),Ae=function(i){var o=i.queryName,d=i.onToggle,P=(0,e.useState)("create"),A=(0,ve.Z)(P,2),O=A[0],h=A[1],E=(0,e.useState)(!1),C=(0,ve.Z)(E,2),Z=C[0],g=C[1],re=(0,e.useState)(null),W=(0,ve.Z)(re,2),F=W[0],se=W[1],q=(0,m.useQueryClient)(),ee=(0,v.useIntl)(),K=ee.formatMessage,Pe=(0,a.useNotification)(),S=(0,a.useOverlayBlocker)(),Ee=S.lockApp,ue=S.unlockApp,et=(0,m.useMutation)(function(R){return ye.be.post("/admin/users",R)},{onSuccess:function(){var R=(0,Te.Z)(pe().mark(function w(k){var G;return pe().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return G=k.data,se(G.data.registrationToken),de.next=4,q.invalidateQueries(o);case 4:at(),g(!1);case 6:case"end":return de.stop()}},w)}));function Q(w){return R.apply(this,arguments)}return Q}(),onError:function(Q){throw g(!1),Pe({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),Q},onSettled:function(){ue()}}),Se=K({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),tt=function(){var R=(0,Te.Z)(pe().mark(function Q(w,k){var G,L;return pe().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return G=k.setErrors,Ee(),g(!0),_.prev=3,_.next=6,et.mutateAsync(w);case 6:_.next=12;break;case 8:_.prev=8,_.t0=_.catch(3),ue(),(_.t0===null||_.t0===void 0||(L=_.t0.response)===null||L===void 0?void 0:L.data.message)==="Email already taken"&&G({email:_.t0.response.data.message});case 12:case"end":return _.stop()}},Q,null,[[3,8]])}));return function(w,k){return R.apply(this,arguments)}}(),at=function(){Ie?h(Ie):d()},he=$e[O],Re=he.buttonSubmitLabel,Oe=he.isDisabled,Ie=he.next,nt=O==="create"?e.createElement(n.Button,{type:"submit",loading:Z},K(Re)):e.createElement(n.Button,{type:"button",loading:Z,onClick:d},K(Re));return e.createElement(fe.ModalLayout,{onClose:d,labelledBy:"title"},e.createElement(fe.ModalHeader,null,e.createElement(Ce.Breadcrumbs,{label:Se},e.createElement(Ce.Crumb,null,Se))),e.createElement(xe.Formik,{initialValues:ze,onSubmit:tt,validationSchema:Ne,validateOnChange:!1},function(R){var Q=R.errors,w=R.handleChange,k=R.values;return e.createElement(a.Form,null,e.createElement(fe.ModalBody,null,e.createElement(Le.Stack,{spacing:6},O!=="create"&&e.createElement(we,{registrationToken:F}),e.createElement(I.Box,null,e.createElement(b.Typography,{variant:"beta",as:"h2"},K({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),e.createElement(I.Box,{paddingTop:4},e.createElement(Le.Stack,{spacing:1},e.createElement(ie.Grid,{gap:5},je.map(function(G){return G.map(function(L){return e.createElement(ie.GridItem,(0,me.Z)({key:L.name},L.size),e.createElement(a.GenericInput,(0,me.Z)({},L,{disabled:Oe,error:Q[L.name],onChange:w,value:k[L.name]})))})}))))),e.createElement(I.Box,null,e.createElement(b.Typography,{variant:"beta",as:"h2"},K({id:"global.roles",defaultMessage:"User's role"})),e.createElement(I.Box,{paddingTop:4},e.createElement(ie.Grid,{gap:5},e.createElement(ie.GridItem,{col:6,xs:12},e.createElement(Ze.Z,{disabled:Oe,error:Q.roles,onChange:w,value:k.roles})),Qe.map(function(G){return G.map(function(L){return e.createElement(ie.GridItem,(0,me.Z)({key:L.name},L.size),e.createElement(a.GenericInput,(0,me.Z)({},L,{disabled:Oe,onChange:w,value:k[L.name]})))})})))))),e.createElement(fe.ModalFooter,{startActions:e.createElement(n.Button,{variant:"tertiary",onClick:d,type:"button"},K({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:nt}))}))};Ae.propTypes={onToggle:u().func.isRequired,queryName:u().array.isRequired};const Ge=Ae,Me=({pagination:s})=>e.createElement(I.Box,{paddingTop:4},e.createElement(X.Flex,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(a.PageSizeURLQuery,null),e.createElement(a.PaginationURLQuery,{pagination:s})));Me.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},Me.propTypes={pagination:u().shape({page:u().number,pageCount:u().number,pageSize:u().number,total:u().number})};const Xe=Me;var _e=(s,i,o)=>new Promise((d,P)=>{var A=E=>{try{h(o.next(E))}catch(C){P(C)}},O=E=>{try{h(o.throw(E))}catch(C){P(C)}},h=E=>E.done?d(E.value):Promise.resolve(E.value).then(A,O);h((o=o.apply(s,i)).next())});const He=(s,i)=>_e(void 0,null,function*(){const{data:{data:o}}=yield ye.be.get(`/admin/users${s}`);return i(),o}),Ve=s=>_e(void 0,null,function*(){yield ye.be.post("/admin/users/batch-delete",{ids:s})}),Je=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Be=[{name:"firstname",key:"firstname",metadatas:{label:"Firstname",sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:"Lastname",sortable:!0}},{key:"email",name:"email",metadatas:{label:"Email",sortable:!0}},{key:"roles",name:"roles",metadatas:{label:"Roles",sortable:!1},cellFormatter:({roles:s})=>e.createElement(b.Typography,{textColor:"neutral800"},s.map(i=>i.name).join(`,
`))},{key:"username",name:"username",metadatas:{label:"Username",sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:"User status",sortable:!1},cellFormatter:({isActive:s})=>e.createElement(X.Flex,null,e.createElement(a.Status,{isActive:s,variant:s?"success":"danger"}),e.createElement(b.Typography,{textColor:"neutral800"},s?"Active":"Inactive"))}];var Ye=(s,i,o)=>new Promise((d,P)=>{var A=E=>{try{h(o.next(E))}catch(C){P(C)}},O=E=>{try{h(o.throw(E))}catch(C){P(C)}},h=E=>E.done?d(E.value):Promise.resolve(E.value).then(A,O);h((o=o.apply(s,i)).next())});const ke=()=>{const[s,i]=(0,e.useState)(!1),{allowedActions:{canCreate:o,canDelete:d,canRead:P}}=(0,a.useRBAC)(c.Z.settings.users),A=(0,m.useQueryClient)(),O=(0,a.useNotification)(),{formatMessage:h}=(0,v.useIntl)(),{search:E}=(0,M.useLocation)();(0,a.useFocusWhenNavigate)();const{notifyStatus:C}=(0,p.useNotifyAT)(),Z=["users",E],g=h({id:"global.users",defaultMessage:"Users"}),re=()=>{C(h({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:g}))},{status:W,data:F,isFetching:se}=(0,m.useQuery)(Z,()=>He(E,re),{enabled:P,keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:()=>{O({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),q=()=>{i(S=>!S)},ee=(0,m.useMutation)(S=>Ve(S),{onSuccess:()=>Ye(void 0,null,function*(){yield A.invalidateQueries(Z)}),onError:S=>{var Ee,ue;(ue=(Ee=S==null?void 0:S.response)==null?void 0:Ee.data)!=null&&ue.data?O({type:"warning",message:S.response.data.data}):O({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),K=W!=="success"&&W!=="error"||W==="success"&&se,Pe=o?e.createElement(n.Button,{"data-testid":"create-user-button",onClick:q,startIcon:e.createElement(D(),null),size:"L"},h({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})):void 0;return e.createElement(r.Main,{"aria-busy":K},e.createElement(a.SettingsPageTitle,{name:"Users"}),e.createElement(l.HeaderLayout,{primaryAction:Pe,title:g,subtitle:h({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),P&&e.createElement(l.ActionLayout,{startActions:e.createElement(e.Fragment,null,e.createElement(a.SearchURLQuery,{label:h({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:g})}),e.createElement(Fe,{displayedFilters:Je}))}),e.createElement(l.ContentLayout,{canRead:P},!P&&e.createElement(a.NoPermissions,null),W==="error"&&e.createElement("div",null,"TODO: An error occurred"),P&&e.createElement(e.Fragment,null,e.createElement(a.DynamicTable,{contentType:"Users",isLoading:K,onConfirmDeleteAll:ee.mutateAsync,onConfirmDelete:S=>ee.mutateAsync([S]),headers:Be,rows:F==null?void 0:F.results,withBulkActions:!0,withMainAction:d},e.createElement(be,{canDelete:d,headers:Be,rows:(F==null?void 0:F.results)||[],withBulkActions:!0,withMainAction:d})),e.createElement(Xe,{pagination:F==null?void 0:F.pagination}))),s&&e.createElement(Ge,{onToggle:q,queryName:Z}))},qe=()=>e.createElement(a.CheckPagePermissions,{permissions:c.Z.settings.users.main},e.createElement(ke,null))},53073:(x,y,t)=>{"use strict";t.d(y,{Z:()=>I});var e=t(53547),a=t(45697),c=t.n(a),l=t(49549),n=t.n(l),r=t(68547),p=t.n(r),f=t(54279),D=t.n(f),M=t(74855),v=t.n(M),m=t(97132),T=t.n(m);const u=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},e.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},e.createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F"))),te=({children:ae,target:X})=>{const b=(0,r.useNotification)(),{formatMessage:j}=(0,m.useIntl)(),N=()=>{b({type:"info",message:{id:"notification.link-copied"}})},$=j({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return e.createElement(r.ContentBox,{endAction:e.createElement(M.CopyToClipboard,{onCopy:N,text:X},e.createElement(l.IconButton,{label:$,noBorder:!0,icon:e.createElement(D(),null)})),title:X,titleEllipsis:!0,subtitle:ae,icon:e.createElement(u,null),iconBackground:"neutral100"})};te.propTypes={children:c().oneOfType([c().element,c().string]).isRequired,target:c().string.isRequired};const I=te},26010:(x,y,t)=>{"use strict";t.d(y,{Z:()=>D});var e=t(53547),a=t(97132),c=t.n(a),l=t(45697),n=t.n(l),r=t(71242),p=t(53073);const f=({registrationToken:M})=>{const{formatMessage:v}=(0,a.useIntl)(),m=`${window.location.origin}${r.Z}auth/register?registrationToken=${M}`;return e.createElement(p.Z,{target:m},v({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};f.defaultProps={registrationToken:""},f.propTypes={registrationToken:n().string};const D=f},7676:(x,y,t)=>{"use strict";t.d(y,{Z:()=>j});var e=t(53547),a=t(45697),c=t.n(a),l=t(97132),n=t.n(l),r=t(2632),p=t.n(r),f=t(23724),D=t.n(f),M=t(78384),v=t(79386),m=t.n(v),T=t(63955),u=(N,$,H)=>new Promise((le,V)=>{var oe=B=>{try{J(H.next(B))}catch(Y){V(Y)}},U=B=>{try{J(H.throw(B))}catch(Y){V(Y)}},J=B=>B.done?le(B.value):Promise.resolve(B.value).then(oe,U);J((H=H.apply(N,$)).next())});const te=M.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,I=M.default.div`
  animation: ${te} 2s infinite linear;
`,ae=()=>e.createElement(I,null,e.createElement(m(),null)),X=()=>u(void 0,null,function*(){const{data:N}=yield T.be.get("/admin/roles");return N.data}),b=({disabled:N,error:$,onChange:H,value:le})=>{const{status:V,data:oe}=(0,f.useQuery)(["roles"],X,{staleTime:5e4}),{formatMessage:U}=(0,l.useIntl)(),J=$?U({id:$,defaultMessage:$}):"",B=U({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),Y=U({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),ne=U({id:"app.components.Select.placeholder",defaultMessage:"Select"}),ge=V==="loading"?e.createElement(ae,null):void 0;return e.createElement(r.Select,{id:"roles",disabled:N,error:J,hint:Y,label:B,name:"roles",onChange:z=>{H({target:{name:"roles",value:z}})},placeholder:ne,multi:!0,startIcon:ge,value:le,withTags:!0,required:!0},(oe||[]).map(z=>e.createElement(r.Option,{key:z.id,value:z.id},z.name)))};b.defaultProps={disabled:!1,error:void 0},b.propTypes={disabled:c().bool,error:c().string,onChange:c().func.isRequired,value:c().array.isRequired};const j=b},58818:(x,y,t)=>{"use strict";t.d(y,{Z:()=>M});var e=t(79313),a=Object.defineProperty,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(v,m,T)=>m in v?a(v,m,{enumerable:!0,configurable:!0,writable:!0,value:T}):v[m]=T,p=(v,m)=>{for(var T in m||(m={}))l.call(m,T)&&r(v,T,m[T]);if(c)for(var T of c(m))n.call(m,T)&&r(v,T,m[T]);return v};const f=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{},M=p(p({},e.Z),f)},81003:(x,y,t)=>{"use strict";t.d(y,{Z:()=>a});const a=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[]},77791:(x,y,t)=>{"use strict";t.d(y,{Z:()=>D});var e=t(53547),a=t(97132),c=t.n(a),l=t(45697),n=t.n(l),r=t(71242),p=t(53073);const f=({registrationToken:M})=>{const{formatMessage:v}=(0,a.useIntl)();return M?e.createElement(p.Z,{target:`${window.location.origin}${r.Z}auth/register?registrationToken=${M}`},v({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):e.createElement(p.Z,{target:`${window.location.origin}${r.Z}auth/login`},v({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};f.defaultProps={registrationToken:""},f.propTypes={registrationToken:n().string};const D=f}}]);