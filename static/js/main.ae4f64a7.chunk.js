(this.webpackJsonpreactfront=this.webpackJsonpreactfront||[]).push([[0],{109:function(e,t,n){},198:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(25),r=n.n(c),i=(n(94),n(5)),o=n(6),l=n(8),d=n(7),u=(n(95),n(96),n(97),n(20)),h=n(9),j=n(18),b=n.n(j),p=n(21),m=n(26);var g=n(10),O=n(0),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",invalidLogin:!1,errorMsg:" ",hidden:!0,loginAlert:""},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=e.state,n=t.email,a=t.password;t.invalidLogin;if(n.length>1&&a.length>1){e.setState({hidden:!1,loginAlert:"Logging in..."});var s={email:n,password:a};fetch("https://multer-test123.herokuapp.com/signin",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((function(t){return 200===t.status?(e.setState({invalidLogin:!1}),t.json()):(e.setState({invalidLogin:!0}),t.json())})).then(function(){var t=Object(p.a)(b.a.mark((function t(n){var a,s,c,r,i,o,l,d,u,h;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.Error,!1!==e.state.invalidLogin||a){t.next=27;break}return"token",s=new Date,c=s.getTime(),c+=36e5,s.setTime(c),document.cookie="userId="+n.userId+";expires="+s.toUTCString()+";path=/",document.cookie="token="+n.token+";expires="+s.toUTCString()+";path=/",r=document.cookie.match(new RegExp("(^| )token=([^;]+)")),i=r[0].split("="),o=i[1],l=new FormData,e.setState({loginAlert:"Gathering images..."}),setTimeout((function(){e.setState({loginAlert:"Linking with instagram..."})}),1e3),t.next=17,fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");case 17:return d=t.sent,t.next=20,d.blob();case 20:u=t.sent,h=new File([u],"test.jpg",{type:"image/jpeg"}),l.append("image",h),new Promise((function(t,a){fetch("https://multer-test123.herokuapp.com/test",{method:"POST",body:l,headers:{Authorization:"Bearer ".concat(o)}}).then(function(){var s=Object(p.a)(b.a.mark((function s(c){return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(200!==c.status){s.next=4;break}t(),s.next=10;break;case 4:if(403!==c.status){s.next=9;break}return s.next=7,c.json();case 7:n=s.sent,e.setState({errorMsg:n.Error});case 9:a();case 10:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))})).then((function(){e.props.forceRender(),document.cookie.match(new RegExp("(^| )token=([^;]+)"))&&e.setState({test:!0})})),t.next=29;break;case 27:console.log("error"),e.setState({errorMsg:n.Error,hidden:!0});case 29:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else e.setState({errorMsg:"Please ensure both fields are entered correctly.",hidden:!0})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.hidden,a=t.test,c=t.email,r=t.password,i=t.loginAlert,o=t.invalidLogin,l=t.errorMsg;return Object(O.jsxs)(s.a.Fragment,{children:[a&&!o?Object(O.jsx)(h.a,{to:"/btnPage"}):null,Object(O.jsx)("h1",{children:"Sign In"}),Object(O.jsx)("span",{className:"alert",children:l}),Object(O.jsx)("label",{children:"Email:"}),Object(O.jsx)("input",{id:"email",value:c,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(O.jsx)("label",{children:"Password:"}),Object(O.jsx)("input",{id:"password",value:r,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(O.jsxs)("div",{className:"btnContain",children:[Object(O.jsxs)("div",{className:"btnContainCol",children:[Object(O.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(O.jsxs)("div",{id:n?"hide":null,className:"lds-defaultTwo left",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]}),Object(O.jsx)("span",{id:n?null:"hide",className:"loginTxt",children:"LOGIN"})]}),Object(O.jsx)("div",{className:"loginAlert",children:i})]}),Object(O.jsx)("button",{className:"btn signup",children:Object(O.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(s.a.Component),x=Object(g.b)((function(e){return{}}))(f),v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={impressions:new Array,reach:new Array},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t={access_token:this.props.access[0].split("?")[1]},n=document.cookie.match(new RegExp("(^| )token=([^;]+)"))[0].split("=")[1];fetch("https://multer-test123.herokuapp.com/info",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){e.setState({impressions:t.TOKEN.data[0].values,reach:t.TOKEN.data[1].values}),e.props.setName(t.NAME),setTimeout((function(){e.forceUpdate()}),500)})).catch((function(e){return console.log(e)})),fetch("https://multer-test123.herokuapp.com/recentPhotos",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){console.log("INFO PHOTOS",t),e.props.setPhotos(t.OBJ),e.props.setAvatar(t.OBJ[0].url)}))}},{key:"render",value:function(){var e=this.state,t=e.impressions,n=e.reach;return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsxs)("div",{className:"insights",children:[Object(O.jsx)("span",{style:{fontWeight:500,fontSize:"20px"},children:"Impressions in the last week:"}),t.length>0&&Object(O.jsxs)("div",{className:"flexMain",children:[t[0].value," views",Object(O.jsxs)("span",{className:"week",children:["week ending ",t[0].end_time]}),Object(O.jsxs)("span",{className:"iBtn",children:[Object(O.jsx)("span",{className:"left"}),Object(O.jsx)("span",{className:"right"})]})]})]}),Object(O.jsxs)("div",{className:"insights",children:[Object(O.jsx)("span",{style:{fontWeight:500,fontSize:"20px"},children:"Reach in the last week:"}),n.length>0&&Object(O.jsxs)("div",{className:"flexMain",children:[n[0].value," views",Object(O.jsxs)("span",{className:"week",children:["week ending ",n[0].end_time]}),Object(O.jsxs)("span",{className:"iBtn",children:[Object(O.jsx)("span",{className:"left"}),Object(O.jsx)("span",{className:"right"})]})]})]})]})}}]),n}(s.a.Component),w=Object(g.b)((function(e){return{}}))(v),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.conditions,n=e.overlay,a=e.scale,c=e.color,r=e.top,i=e.left;return n?Object(O.jsx)(s.a.Fragment,{children:!0===t&&Object(O.jsx)("div",{className:"dashboardBlurLoader",children:Object(O.jsx)("div",{className:"dashboardLoader",children:Object(O.jsxs)("div",{style:{transform:"scale(".concat(a,")"),marginLeft:i,marginTop:r},className:"lds-defaultThree ".concat(c),children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})})})}):Object(O.jsx)(s.a.Fragment,{children:!0===t&&Object(O.jsxs)("div",{style:{transform:"scale(".concat(a,")"),marginLeft:i,marginTop:r},className:"lds-defaultThree ".concat(c),children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})})}}]),n}(s.a.Component),k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleLogout=function(){document.cookie.match(new RegExp("(^| )token=([^;]+)"))[0].split("=")[1];var t=new Date,n=t.getTime();n-=1,t.setTime(n),document.cookie="token=null;expires="+t.toUTCString()+";path=/",document.cookie="access=null;expires="+t.toUTCString()+";path=/",document.cookie="userId=null;expires="+t.toUTCString()+";path=/",e.props.logout(!0)},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"btnHolder",children:[Object(O.jsx)(u.b,{style:{textDecoration:"none"},to:"/upload",children:Object(O.jsx)("div",{style:{height:"auto"},className:"btnDash purpleGradient",children:"Schedule an upload"})}),Object(O.jsx)(u.b,{style:{textDecoration:"none"},to:"/scheduled",children:Object(O.jsx)("div",{style:{height:"auto"},className:"btnDash purpleGradient",children:"View your scheduled posts"})}),Object(O.jsx)("div",{style:{height:"auto"},onClick:this.handleLogout,className:"btnDash purpleGradient",children:"Logout of the associated instagram account"})]})}}]),n}(s.a.Component),N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(s.a.Fragment,{children:Object(O.jsxs)("div",{className:"flexError",children:[Object(O.jsx)("h1",{children:"You do not appear to be signed in, please sign in."}),Object(O.jsx)("a",{href:"https://lbaker15.github.io/ReactPhoto/",children:"Sign in here"})]})})}}]),n}(s.a.Component),S=function(e){var t=Object(h.g)();return e.setAccess(t.search),Object(O.jsx)("div",{children:" "})},T=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={name:"",avatar:"",hovered:!1,recentPhotos:new Array,completed:!1,loggedOut:!1},e.setName=function(t){e.setState({name:t})},e.setAvatar=function(t){e.setState({avatar:t})},e.setPhotos=function(t){e.setState({recentPhotos:t}),setTimeout((function(){e.forceUpdate()}),1e3)},e.setAccess=function(t){if(!document.cookie.match(new RegExp("(^| )access=([^;]+)"))){var n=new Date,a=n.getTime();a+=72e5,n.setTime(a),document.cookie="access=".concat(t,";expires=").concat(n.toUTCString(),";path=/;"),setTimeout((function(){e.forceUpdate()}),500)}},e.logout=function(){e.setState({loggedOut:!0})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=document.cookie.match(new RegExp("(^| )token=([^;]+)")),t=document.cookie.match(new RegExp("(^| )userId=([^;]+)")),n=document.cookie.match(new RegExp("(^| )access=([^;]+)")),a=this.state,c=a.name,r=a.avatar,i=(a.completed,a.recentPhotos),o=a.loggedOut;return console.log(i),e&&t?Object(O.jsxs)("div",{className:"dashFlex",children:[o?Object(O.jsx)(h.a,{to:"/"}):null,Object(O.jsx)(y,{top:"-100px",left:0,color:"purpleD",scale:1.5,overlay:!0,conditions:0===i.length||0===c.length||0===r.length}),Object(O.jsx)(S,{setAccess:this.setAccess}),n&&Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)("div",{class:"leftPanel",children:i.length>0&&i.map((function(e,t){if(t<4)return Object(O.jsx)("div",{className:"widget widget".concat(e.number),children:Object(O.jsx)("div",{className:"widgImg",style:{backgroundImage:"url(".concat(e.url,")")}})},t)}))}),Object(O.jsxs)("div",{className:"mainSection",children:[Object(O.jsxs)("div",{className:"head",children:[Object(O.jsx)("div",{class:"headAvatar",style:{backgroundImage:"url(".concat(r,")")},children:" "}),Object(O.jsxs)("span",{style:{marginLeft:"10px"},children:["Welcome ",c," "]})]}),Object(O.jsx)(w,{access:n,setPhotos:this.setPhotos,setName:this.setName,setAvatar:this.setAvatar})]}),Object(O.jsx)(k,{logout:this.logout})]})]}):Object(O.jsx)(N,{})}}]),n}(s.a.Component),C=Object(g.b)((function(e){return{}}))(T),A=(n(109),n(54),n(41)),L=n(42);var P=Object(g.b)((function(e){return{}}))((function(){return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsxs)("li",{"data-tag":"1",children:[Object(O.jsx)(A.a,{icon:L.b})," ",Object(O.jsx)("a",{href:"https://lbaker15.github.io/ReactPhoto/#/dashboard",children:"Dashboard"})," "]}),Object(O.jsxs)("li",{"data-tag":"2",children:[Object(O.jsx)(A.a,{icon:L.c})," ",Object(O.jsx)("a",{href:"https://lbaker15.github.io/ReactPhoto/#/scheduled",children:"View Schedule"})," "]}),Object(O.jsxs)("li",{"data-tag":"3",children:[Object(O.jsx)(A.a,{icon:L.a})," ",Object(O.jsx)("a",{href:"https://lbaker15.github.io/ReactPhoto/#/upload",children:"Upload"})," "]})]})})),D="DRAWER";function I(e){return{type:D,value:e}}var R=n(51),U=n(53),E=n(47),M={slideInLeft:{animation:"x 1s",animationName:U.a.keyframes(R.slideInLeft,"slideInLeft")},slideOutLeft:{animation:"x 1s",animationName:U.a.keyframes(R.slideOutLeft,"slideOutLeft")}},F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={drawerOpen:!1},e.openDrawer=function(){e.setState((function(e){return{drawerOpen:!0}})),e.props.dispatch(I({val:!0}))},e.closeDrawer=function(t){var n=t.target.attributes.getNamedItem("data-tag");t.target!==e.list.current&&t.target!==e.listUl.current&&null===n&&(e.setState((function(e){return{drawerOpen:!1}})),setTimeout((function(){e.props.dispatch(I({val:!1}))}),1e3))},e.list=s.a.createRef(),e.listUl=s.a.createRef(),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=null!==this.props.parent?this.props.parent:null;setTimeout((function(){r.a.findDOMNode(t.current);t.current.addEventListener("click",(function(t){return e.closeDrawer(t)}))}),2e3)}},{key:"render",value:function(){var e=this.state.drawerOpen,t=this.props.sidebar;return console.log("D",e),Object(O.jsxs)(s.a.Fragment,{children:[!t&&Object(O.jsx)(E.a,{children:Object(O.jsx)("div",{className:"burgerIcon",onClick:this.openDrawer,children:"Sidebar"})}),t&&Object(O.jsx)(s.a.Fragment,{children:Object(O.jsxs)(E.a,{children:[Object(O.jsx)("div",{style:e?M.slideInLeft:M.slideOutLeft,className:"blur"}),Object(O.jsxs)("div",{onClick:this.openDrawer,className:"list",style:e?M.slideInLeft:M.slideOutLeft,ref:this.list,children:[Object(O.jsx)("ul",{ref:this.listUl,children:Object(O.jsx)(P,{parent:this.listUl})}),Object(O.jsx)("button",{className:"logout",children:"Logout"})]})]})})]})}}]),n}(s.a.Component),B=Object(g.b)((function(e){return{sidebar:e.sidebar}}))(F),_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={file:"",time:"",date:"",alertMsg:"",message:"",hovered:!1},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleChangeImg=function(t){t.target.files.length&&e.setState({preview:URL.createObjectURL(t.target.files[0]),file:t.target.files[0]})},e.clearImg=function(){e.setState({preview:"",file:""})},e.handleUpload=function(){var t=e.state,n=t.file,a=t.time,s=t.date,c=(t.preview,t.message),r=(new Date).getTime();if(console.log(n,a,s),""!==n&&""!==a&&""!==s&&""!==c){var i=document.cookie.match(new RegExp("(^| )userId=([^;]+)"))[0].split("=")[1],o=String(i+"_"+n.name),l=new FormData;l.append("image",n,o);var d=String(s),u=String(a),h=d.split("-"),j=Number(h[0]),b=Number(h[1])-1,p=Number(h[2]),m=u.split(":"),g=Number(m[0]),O=Number(m[1]),f=new Date(Date.UTC(j,b,p,g,O,0,0)).getTime();if(r>f)e.setState({alertMsg:"Scheduled date must be in the future."});else{l.append("time",f),l.append("userId",i),l.append("message",c);var x=document.cookie.match(new RegExp("(^| )token=([^;]+)"))[0].split("=")[1];setTimeout((function(){fetch("https://multer-test123.herokuapp.com/upload",{method:"POST",body:l,headers:{Authorization:"Bearer ".concat(x)}}).then((function(e){return e.json()})).then((function(t){var n=t.Error;n?e.setState({alertMsg:n}):e.setState({alertMsg:"Image successfully uploaded!"}),console.log(t)}))}),2e3)}}else e.setState({alertMsg:"Please ensure all fields are filled in correctly."})},e.refTwo=s.a.createRef(),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=document.cookie.match(new RegExp("(^| )token=([^;]+)")),n=document.cookie.match(new RegExp("(^| )userId=([^;]+)"));document.cookie.match(new RegExp("(^| )access=([^;]+)"));if(t&&n){var a=this.state,c=a.file,r=a.time,i=a.date,o=a.preview,l=a.message,d=a.alertMsg,u=a.hovered;return Object(O.jsxs)("div",{className:"entireWidth",ref:this.refTwo,children:[Object(O.jsxs)("div",{className:"formHeaders",children:[Object(O.jsx)("h1",{children:"Schedule An Upload"}),Object(O.jsx)("h2",{children:"Some information about how it works here. Lorem ipsum is the standard language of the typing industry."})]}),Object(O.jsxs)("div",{className:"formFlex",children:[Object(O.jsxs)("div",{className:"inputForm",style:d&&o?{height:"550px"}:{height:"500px"},children:[Object(O.jsx)("div",{style:d?{display:"block"}:{display:"none"},className:"alert",children:d}),Object(O.jsx)("label",{for:"date",children:"Date:"}),Object(O.jsx)("input",{type:"date",id:"date",value:i,onChange:this.handleChange}),Object(O.jsx)("label",{for:"time",children:"Time:"}),Object(O.jsx)("input",{type:"time",id:"time",value:r,onChange:this.handleChange}),Object(O.jsx)("label",{for:"message",children:"message:"}),Object(O.jsx)("input",{type:"text",id:"message",value:l,onChange:this.handleChange}),Object(O.jsx)("label",{style:""!==c?{height:"120px"}:{height:"75px"},className:"fileBox",for:"file",children:o?Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)("img",{src:o,width:"100",height:"100"}),Object(O.jsx)("button",{onClick:this.clearImg,className:"clearImg",children:"Change image"})]}):Object(O.jsx)("div",{id:u?"shadow2":"shadow1",onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1})},className:"uploadBtn",children:"Please select an image"})}),Object(O.jsx)("input",{type:"file",id:"file",style:{display:"none"},onChange:this.handleChangeImg}),Object(O.jsx)("button",{className:"btnSubmit",onClick:this.handleUpload,children:"Upload"}),Object(O.jsx)("div",{className:u?"btnBlur2":"btnBlur"})]}),Object(O.jsx)(B,{parent:this.refTwo})]})]})}return Object(O.jsx)(N,{})}}]),n}(s.a.Component),J=Object(g.b)((function(e){return{}}))(_),z=n(52),G=(n(198),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pastUrls:new Array,futureUrls:new Array,pastShowing:!1,loading:!0,btnDisabled:!1,smallLoader:!1},e.refOne=s.a.createRef(),e.toggle=function(){e.setState((function(e){return{btnDisabled:!0,smallLoader:!0}})),setTimeout((function(){e.setState((function(e){return{pastShowing:!e.pastShowing}}))}),500),setTimeout((function(){e.setState((function(e){return{btnDisabled:!1,smallLoader:!1}}))}),1e3)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.cookie.match(new RegExp("(^| )token=([^;]+)"));if(t){var n=t[0].split("=")[1],a={userId:localStorage.getItem("userId")};setTimeout((function(){fetch("https://multer-test123.herokuapp.com/getScheduled",{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify(a),method:"POST"}).then((function(e){return e.json()})).then(function(){var t=Object(p.a)(b.a.mark((function t(n){var a,s,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.Success,s=new Array,c=new Array,t.next=5,a.map((function(e){var t=e.data,n=e.time,a=(new Date).getTime(),r={name:t,time:n};return fetch(e.location).then((function(e){return e.blob()})).then((function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result,i=Object(z.a)(Object(z.a)({},r),{},{img:e});a>n?s.push(i):c.push(i)}}))}));case 5:setTimeout((function(){e.setState({futureUrls:c}),e.setState({pastUrls:s}),e.setState({loading:!1}),e.forceUpdate()}),1e3);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),500)}}},{key:"timeConverter",value:function(e){var t=new Date(Number(e)),n=t.getFullYear(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],s=t.getDate(),c=t.getHours(),r=t.getMinutes();console.log("HOUR, MINS:",c,Number(r)<10);var i=s+" "+a+" "+n,o=c+":"+(Number(r)<10?"0"+String(r):r);return Object(O.jsxs)("div",{className:"timings",children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("span",{className:"bold",children:"Date:"})," ",Object(O.jsx)("br",{})," ",i," "]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("span",{className:"bold",children:"Time:"})," ",Object(O.jsx)("br",{})," ",o," "]})]})}},{key:"render",value:function(){var e=this,t=document.cookie.match(new RegExp("(^| )token=([^;]+)")),n=document.cookie.match(new RegExp("(^| )userId=([^;]+)"));document.cookie.match(new RegExp("(^| )access=([^;]+)"));if(t&&n){var a=this.state,c=a.pastUrls,r=a.smallLoader,i=a.futureUrls,o=a.btnDisabled,l=a.pastShowing,d=a.loading;return Object(O.jsx)(s.a.Fragment,{children:Object(O.jsx)("div",{class:"widthTotal",ref:this.refOne,children:Object(O.jsxs)("div",{className:"scheduled",children:[Object(O.jsx)("h1",{children:"Scheduled posts"}),Object(O.jsx)(y,{top:"50px",left:"-150px",color:"fontD",scale:2,conditions:!0===d,overlay:!1}),!d&&Object(O.jsx)("div",{className:"btns",children:r?Object(O.jsx)("div",{className:"loadingBtnText",children:"Loading..."}):Object(O.jsx)("button",{disbaled:!!o,onClick:this.toggle,children:l?"View Scheduled Posts":"View Past Posts"})}),Object(O.jsxs)("div",{className:"flex",children:[!0===l&&!1===d&&0!==c.length&&c.map((function(t,n){return n===c.length-1&&console.log("PAST URL MAP here"),Object(O.jsxs)("div",{className:"item",children:[Object(O.jsx)("div",{style:{backgroundImage:"url("+t.img+")"},class:"img"}),e.timeConverter(t.time)]},n)})),!0===l&&!1===d&&0===c.length&&Object(O.jsx)("div",{className:"noDisplay",children:"There are no past posts to display."}),!1===l&&!1===d&&0===i.length&&Object(O.jsx)("div",{className:"noDisplay",children:"There are no scheduled posts to display."}),!1===l&&!1===d&&0!==i.length&&i.map((function(t,n){return Object(O.jsxs)("div",{id:n%3===0?n%2===0?"purple":"yellow":"blue",className:"item",children:[Object(O.jsx)("img",{style:{width:180,height:180},src:t.img}),e.timeConverter(t.time)]},n)}))]}),Object(O.jsx)(B,{parent:this.refOne})]})})})}return Object(O.jsx)(N,{})}}]),n}(s.a.Component)),W=Object(g.b)((function(e){return{}}))(G),H=(s.a.Component,function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.name;return Object(O.jsx)(s.a.Fragment,{children:Object(O.jsxs)("div",{class:"btnPage",children:[Object(O.jsxs)("span",{className:"btnPageName",children:["Welcome ",e]}),Object(O.jsx)("span",{className:"btnPageInfo",children:"Please authorize your login with facebook by clicking the button below.  Enter information here about privacy policy, needs to be longer. "}),Object(O.jsx)("a",{className:"btnPageLink",href:"https://multer-test123.herokuapp.com/fbAuth",children:"Continue With Facebook"})]})})}}]),n}(s.a.Component)),V=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loggedIn:!1,accessToken:"",loggedOut:!1,loading:!1,cookie:null},e.redirectPage=function(t){e.setState({loggedIn:t})},e.redirectPageLogout=function(t){e.setState({loggedOut:t})},e.setAccess=function(t){e.setState({accessToken:t})},e.forceRender=function(){var t=document.cookie.match(new RegExp("(^| )token=([^;]+)"));e.setState({cookie:t}),setTimeout((function(){e.forceUpdate()}),500)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=(t.loggedIn,t.loggedOut),a=t.accessToken,c=this.state;c.cookie;return c.loading?Object(O.jsx)("div",{children:"Loading"}):Object(O.jsxs)(u.a,{basename:"/",children:[Object(O.jsx)("div",{className:"linearGrad"}),Object(O.jsxs)(h.d,{children:[Object(O.jsx)(h.b,{exact:!0,path:"/",children:Object(O.jsx)("div",{className:"form",children:Object(O.jsx)("div",{className:"rowMine",children:Object(O.jsx)(x,{forceRender:this.forceRender})})})}),Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(h.b,{component:function(){return Object(O.jsx)(C,{loggedOut:n,redirectPageLogout:e.redirectPageLogout,redirectPage:e.redirectPage,accessToken:a})},path:"/dashboard"}),Object(O.jsx)(h.b,{path:"/upload",component:J}),Object(O.jsx)(h.b,{path:"/scheduled",component:W}),Object(O.jsx)(h.b,{path:"/btnPage",component:H})]})]})]})}}]),n}(s.a.Component),K=Object(g.b)((function(e){return{}}))(V),Y=n(19),q=Object(Y.c)({sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return console.log("reducer",e,t.value.val),t.value.val;default:return e}}}),Q=n(89),X=Object(Y.a)(Q.a),Z=Object(Y.d)(q,X);r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(g.a,{store:Z,children:Object(O.jsx)(K,{})})}),document.getElementById("root"))},54:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[199,1,2]]]);
//# sourceMappingURL=main.ae4f64a7.chunk.js.map