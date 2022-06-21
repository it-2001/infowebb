"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[8056],{81666:(ke,L,a)=>{a.r(L),a.d(L,{default:()=>ge});var e=a(53547),s=a(68547),I=a(92699),E=a(97132),B=a(35395),F=a(80117),H=a(64459),j=a(31512),Q=a(89326),M=a.n(Q),P=a(23724),C=a(49656),W=a(80129),Z=a.n(W),O=a(63955);const z=[{name:"name",key:"name",metadatas:{label:"Name",sortable:!0}},{name:"description",key:"description",metadatas:{label:"Description",sortable:!1}},{name:"type",key:"type",metadatas:{label:"Token type",sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:"Created at",sortable:!1}}];var h=a(33483),y=a(43546),G=a(40264),Y=a(45697),i=a.n(Y),J=a(62982),K=a.n(J),X=a(49549),q=a(94117),_=Object.defineProperty,S=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,N=(o,t,n)=>t in o?_(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,ne=(o,t)=>{for(var n in t||(t={}))ee.call(t,n)&&N(o,n,t[n]);if(S)for(var n of S(t))te.call(t,n)&&N(o,n,t[n]);return o};const w=({tokenName:o,onClickDelete:t})=>{const{formatMessage:n}=(0,E.useIntl)(),{trackUsage:c}=(0,s.useTracking)();return e.createElement(q.Box,ne({paddingLeft:1},s.stopPropagation),e.createElement(X.IconButton,{onClick:()=>{c("willDeleteToken"),t()},label:n({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${o}`}),noBorder:!0,icon:e.createElement(K(),null)}))};w.propTypes={tokenName:i().string.isRequired,onClickDelete:i().func.isRequired};const ae=w;var oe=a(56204),se=a.n(oe),le=a(56156),re=a(78384);const ie=(0,re.default)(le.Link)`
  svg {
    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({theme:o})=>o.colors.neutral800};
      }
    }
  }
`,R=({tokenName:o,tokenId:t})=>{const{formatMessage:n}=(0,E.useIntl)(),{location:{pathname:c}}=(0,C.useHistory)();return e.createElement(ie,{to:`${c}/${t}`,title:n({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${o}`})},e.createElement(se(),null))};R.propTypes={tokenName:i().string.isRequired,tokenId:i().oneOfType([i().string,i().number]).isRequired};const ce=R;var de=Object.defineProperty,$=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,x=(o,t,n)=>t in o?de(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,pe=(o,t)=>{for(var n in t||(t={}))ue.call(t,n)&&x(o,n,t[n]);if($)for(var n of $(t))me.call(t,n)&&x(o,n,t[n]);return o};const D=({canDelete:o,canUpdate:t,onClickDelete:n,withBulkActions:c,rows:m})=>{const{formatMessage:f}=(0,E.useIntl)(),[{query:d}]=(0,s.useQueryParams)(),[,p]=d.sort.split(":"),{push:r,location:{pathname:g}}=(0,C.useHistory)(),{trackUsage:k}=(0,s.useTracking)(),v=m.sort((l,b)=>{const T=l.name.localeCompare(b.name);return p==="DESC"?-T:T});return e.createElement(y.Tbody,null,v.map(l=>e.createElement(y.Tr,pe({key:l.id},(0,s.onRowClick)({fn:()=>{k("willEditTokenFromList"),r(`${g}/${l.id}`)},condition:t})),e.createElement(y.Td,null,e.createElement(h.Typography,{textColor:"neutral800",fontWeight:"bold"},l.name)),e.createElement(y.Td,{maxWidth:(0,s.pxToRem)(250)},e.createElement(h.Typography,{textColor:"neutral800",ellipsis:!0},l.description)),e.createElement(y.Td,null,e.createElement(h.Typography,{textColor:"neutral800"},f({id:`Settings.apiTokens.types.${l.type}`,defaultMessage:"Type unknown"}))),e.createElement(y.Td,null,e.createElement(h.Typography,{textColor:"neutral800"},e.createElement(s.RelativeTime,{timestamp:new Date(l.createdAt)}))),c&&e.createElement(y.Td,null,e.createElement(G.Flex,{justifyContent:"end"},t&&e.createElement(ce,{tokenName:l.name,tokenId:l.id}),o&&e.createElement(ae,{tokenName:l.name,onClickDelete:()=>n(l.id)}))))))};D.defaultProps={canDelete:!1,canUpdate:!1,onClickDelete:()=>{},rows:[],withBulkActions:!1},D.propTypes={canDelete:i().bool,canUpdate:i().bool,onClickDelete:i().func,rows:i().array,withBulkActions:i().bool};const ye=D;var A=(o,t,n)=>new Promise((c,m)=>{var f=r=>{try{p(n.next(r))}catch(g){m(g)}},d=r=>{try{p(n.throw(r))}catch(g){m(g)}},p=r=>r.done?c(r.value):Promise.resolve(r.value).then(f,d);p((n=n.apply(o,t)).next())});const fe=()=>{(0,s.useFocusWhenNavigate)();const o=(0,P.useQueryClient)(),{formatMessage:t}=(0,E.useIntl)(),n=(0,s.useNotification)(),{allowedActions:{canCreate:c,canDelete:m,canUpdate:f,canRead:d}}=(0,s.useRBAC)(I.Z.settings["api-tokens"]),{push:p}=(0,C.useHistory)(),{trackUsage:r}=(0,s.useTracking)(),{startSection:g}=(0,s.useGuidedTour)(),k=(0,e.useRef)(g);(0,e.useEffect)(()=>{k.current&&k.current("apiTokens")},[]),(0,e.useEffect)(()=>{p({search:Z().stringify({sort:"name:ASC"},{encode:!1})})},[p]);const{data:v,status:l,isFetching:b}=(0,P.useQuery)(["api-tokens"],()=>A(void 0,null,function*(){r("willAccessTokenList");const{data:{data:u}}=yield O.be.get("/admin/api-tokens");return r("didAccessTokenList",{number:u.length}),u}),{enabled:d,onError:()=>{n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),T=d&&(l!=="success"&&l!=="error"||l==="success"&&b),ve=(0,P.useMutation)(u=>A(void 0,null,function*(){yield O.be.delete(`/admin/api-tokens/${u}`)}),{onSuccess:()=>A(void 0,null,function*(){yield o.invalidateQueries(["api-tokens"]),r("didDeleteToken")}),onError:u=>{var U,V;(V=(U=u==null?void 0:u.response)==null?void 0:U.data)!=null&&V.data?n({type:"warning",message:u.response.data.data}):n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Te=d&&v,Ee=d&&!v&&!c,he=d&&!v&&c;return e.createElement(F.Main,{"aria-busy":T},e.createElement(s.SettingsPageTitle,{name:"API Tokens"}),e.createElement(B.HeaderLayout,{title:t({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:t({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:c?e.createElement(j.LinkButton,{"data-testid":"create-api-token-button",startIcon:e.createElement(M(),null),size:"L",onClick:()=>r("willAddTokenFromList"),to:"/settings/api-tokens/create"},t({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})):void 0}),e.createElement(B.ContentLayout,null,!d&&e.createElement(s.NoPermissions,null),Te&&e.createElement(s.DynamicTable,{headers:z,contentType:"api-tokens",rows:v,withBulkActions:m||f,isLoading:T,onConfirmDelete:u=>ve.mutateAsync(u)},e.createElement(ye,{canDelete:m,canUpdate:f,rows:v,withBulkActions:m||f})),he&&e.createElement(s.NoContent,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:e.createElement(H.Button,{variant:"secondary",startIcon:e.createElement(M(),null)},t({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"}))}),Ee&&e.createElement(s.NoContent,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},ge=()=>e.createElement(s.CheckPagePermissions,{permissions:I.Z.settings["api-tokens"].main},e.createElement(fe,null))}}]);