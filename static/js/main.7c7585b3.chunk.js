(this.webpackJsonpreactfront=this.webpackJsonpreactfront||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(22),r=n.n(s),o=(n(28),n(7)),i=n(8),l=n(10),u=n(9),d=(n(29),n(30),n(14)),h=n(2),j=n(4),p=n.n(j),b=n(12),g=n(17),f=n(16);function m(){return new Promise((function(e,t){window.FB.getLoginStatus((function(t){e(t)}))}))}function O(){return new Promise((function(e,t){window.FB?e():(!function(e,t,n){var a,c=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="//connect.facebook.net/en_US/sdk.js",c.parentNode.insertBefore(a,c))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){window.FB.init({appId:0x661cee00f404d,cookie:!0,xfbml:!0,version:"v9.0"}),window.FB.AppEvents.logPageView(),console.log("fired"),e()})}))}function v(e){var t=this;return new Promise(function(){var n=Object(b.a)(p.a.mark((function n(a,c){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"unknown"===e.status||"not_authorized"===e.status?new Promise((function(e,t){window.FB.login((function(t){console.log("logged in",t.authResponse.accessToken);var n=t.authResponse.accessToken;e(n)}))})).then((function(e){t.setState({accessToken:e}),localStorage.setItem("access",e),a(e)})):(t.setState({accessToken:e.authResponse.accessToken}),localStorage.setItem("access",e.authResponse.accessToken),a(e.authResponse.accessToken));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}function x(){return new Promise((function(e,t){window.FB.getLoginStatus((function(n){console.log(n),window.FB.api("/me/accounts?fields=id",{access_token:n.authResponse.accessToken},(function(n){console.log("RESPONSE",n),n?e(n):t()}))}))}))}var w=n(0),k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",submitRedirectFb:!1,invalidLogin:!1,errorMsg:" ",hidden:!0},e.handleChange=function(t){e.setState(Object(g.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=e.state,n=t.email,a=t.password;t.invalidLogin;if(n.length>1&&a.length>1){e.setState({hidden:!1});var c={email:n,password:a};fetch("https://multer-test123.herokuapp.com/signin",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(t){return console.log("res",t),200===t.status?(e.setState({invalidLogin:!1}),t.json()):(e.setState({invalidLogin:!0}),t.json())})).then(function(){var t=Object(b.a)(p.a.mark((function t(n){var a,c,s,r,o,i,l,u,d,h,j;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.Error,!1!==e.state.invalidLogin||a){t.next=28;break}return c=n.userId,localStorage.setItem("userId",c),"token",s=new Date,r=s.getTime(),r+=36e5,s.setTime(r),console.log("time after",s),document.cookie="token="+n.token+";expires="+s.toUTCString()+";path=/",o=document.cookie.match(new RegExp("(^| )token=([^;]+)")),i=o[0].split("="),l=i[1],u=new FormData,t.next=17,fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");case 17:return d=t.sent,t.next=20,d.blob();case 20:h=t.sent,j=new File([h],"test.jpg",{type:"image/jpeg"}),u.append("image",j),console.log("formData",u,j),new Promise((function(t,a){fetch("https://multer-test123.herokuapp.com/test",{method:"POST",body:u,headers:{Authorization:"Bearer ".concat(l)}}).then(function(){var c=Object(b.a)(p.a.mark((function c(s){return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(console.log("here",s),200!==s.status){c.next=5;break}t(),c.next=11;break;case 5:if(403!==s.status){c.next=10;break}return c.next=8,s.json();case 8:n=c.sent,e.setState({errorMsg:n.Error});case 10:a();case 11:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))})).then((function(){e.props.forceRender(),document.cookie.match(new RegExp("(^| )token=([^;]+)"))&&O().then((function(){m.bind(Object(f.a)(e))().then(function(){var t=Object(b.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v.bind(Object(f.a)(e))(n).then((function(t){console.log("a",t),t&&x().then((function(t){t&&setTimeout((function(){e.setState({submitRedirectFb:!0,hidden:!0})}),1e3)})).catch((function(e){return console.log("err with test call",e)}))})).catch((function(e){return console.log("err with status change",e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return console.log("err with check login",e)}))}))})),t.next=30;break;case 28:console.log("error"),e.setState({errorMsg:n.Error,hidden:!0});case 30:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else e.setState({errorMsg:"Please ensure both fields are entered correctly.",hidden:!0})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.hidden,a=t.email,s=t.password,r=t.submitRedirectFb,o=t.invalidLogin,i=t.errorMsg;return Object(w.jsxs)(c.a.Fragment,{children:[!0===r&&!1===o?Object(w.jsx)(h.a,{to:"/dashboard"}):null,Object(w.jsx)("h1",{children:"Sign In"}),Object(w.jsx)("span",{className:"alert",children:i}),Object(w.jsx)("label",{children:"Email:"}),Object(w.jsx)("input",{id:"email",value:a,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(w.jsx)("label",{children:"Password:"}),Object(w.jsx)("input",{id:"password",value:s,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(w.jsxs)("div",{className:"btnContain",children:[Object(w.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(w.jsxs)("div",{id:n?"hide":null,className:"lds-defaultTwo left",children:[Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{})]}),Object(w.jsx)("span",{id:n?null:"hide",className:"loginTxt",children:"LOGIN"})]}),Object(w.jsx)("button",{className:"btn signup",children:Object(w.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(c.a.Component),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return document.cookie.match(new RegExp("(^| )token=([^;]+)"))?Object(w.jsxs)("div",{children:[Object(w.jsx)(d.b,{to:"/upload",children:Object(w.jsx)("div",{className:"btn",children:"Schedule an upload"})}),Object(w.jsx)(d.b,{to:"/scheduled",children:Object(w.jsx)("div",{className:"btn",children:"View your scheduled posts"})}),"Dashboard"]}):Object(w.jsx)("div",{children:"ERROR"})}}]),n}(c.a.Component),y=(n(41),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={file:"",time:"",date:"",alertMsg:""},e.handleChange=function(t){e.setState(Object(g.a)({},t.target.id,t.target.value))},e.handleChangeImg=function(t){t.target.files.length&&e.setState({preview:URL.createObjectURL(t.target.files[0]),file:t.target.files[0]})},e.clearImg=function(){e.setState({preview:"",file:""})},e.handleUpload=function(){var t=e.state,n=t.file,a=t.time,c=t.date,s=(t.preview,(new Date).getTime());if(console.log(n,a,c),""!==n&&""!==a&&""!==c){var r=localStorage.getItem("userId"),o=r.slice(0,5),i=String(o+"_"+n.name),l=new FormData;l.append("image",n,i);var u=String(c),d=String(a),h=u.split("-"),j=Number(h[0]),p=Number(h[1])-1,b=Number(h[2]),g=d.split(":"),f=Number(g[0]),m=Number(g[1]),O=new Date(Date.UTC(j,p,b,f,m,0,0)).getTime();console.log(O),s>O?e.setState({alertMsg:"Scheduled date must be in the future."}):(l.append("time",O),l.append("userId",r),setTimeout((function(){fetch("https://multer-test123.herokuapp.com/upload",{method:"POST",body:l}).then((function(e){return e.json()})).then((function(t){var n=t.Error;n?e.setState({alertMsg:n}):e.setState({alertMsg:"Image successfully uploaded!"}),console.log(t)}))}),2e3))}else e.setState({alertMsg:"Please ensure all fields are filled in correctly."})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.file,n=e.time,a=e.date,s=e.preview,r=e.alertMsg;return Object(w.jsx)(c.a.Fragment,{children:Object(w.jsx)("div",{className:"formFlex",children:Object(w.jsxs)("div",{className:"inputForm",style:r&&s?{height:"550px"}:{height:"500px"},children:[Object(w.jsx)("div",{style:r?{display:"block"}:{display:"none"},className:"alert",children:r}),Object(w.jsx)("label",{for:"date",children:"Date:"}),Object(w.jsx)("input",{type:"date",id:"date",value:a,onChange:this.handleChange}),Object(w.jsx)("label",{for:"time",children:"Time:"}),Object(w.jsx)("input",{type:"time",id:"time",value:n,onChange:this.handleChange}),Object(w.jsx)("label",{style:""!==t?{height:"120px"}:{height:"75px"},className:"fileBox",for:"file",children:s?Object(w.jsxs)(c.a.Fragment,{children:[Object(w.jsx)("img",{src:s,width:"100",height:"100"}),Object(w.jsx)("button",{onClick:this.clearImg,className:"clearImg",children:"Change image"})]}):Object(w.jsx)("div",{className:"uploadBtn",children:"Please select an image"})}),Object(w.jsx)("input",{type:"file",id:"file",style:{display:"none"},onChange:this.handleChangeImg}),Object(w.jsx)("button",{className:"btnSubmit",onClick:this.handleUpload,children:"Upload"})]})})})}}]),n}(c.a.Component)),N=(n(42),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={urls:new Array},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.cookie.match(new RegExp("(^| )token=([^;]+)"));if(t){var n=t[0].split("=")[1],a={userId:localStorage.getItem("userId")};setTimeout((function(){fetch("https://multer-test123.herokuapp.com/getScheduled",{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify(a),method:"POST"}).then((function(e){return e.json()})).then(function(){var t=Object(b.a)(p.a.mark((function t(n){var a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.Success,c=new Array,t.next=4,a.map((function(e){return fetch(e.location).then((function(e){return e.blob()})).then((function(e){console.log("d",e);var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){var e=t.result;c.push(e)}}))}));case 4:setTimeout((function(){e.setState({urls:c}),e.forceUpdate()}),1e3);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),500)}}},{key:"render",value:function(){var e=this.state.urls;return Object(w.jsxs)("div",{className:"scheduled",children:[Object(w.jsx)("h1",{children:"Scheduled posts"}),e.length>0&&e.map((function(e,t){return Object(w.jsx)("div",{className:"item",children:Object(w.jsx)("img",{style:{width:100,height:100},src:e})},t)}))]})}}]),n}(c.a.Component)),T=(c.a.Component,function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={loggedIn:!1,accessToken:"",loggedOut:!1,loading:!1,cookie:null},e.redirectPage=function(t){e.setState({loggedIn:t})},e.redirectPageLogout=function(t){e.setState({loggedOut:t})},e.setAccess=function(t){e.setState({accessToken:t})},e.forceRender=function(){var t=document.cookie.match(new RegExp("(^| )token=([^;]+)"));e.setState({cookie:t}),setTimeout((function(){e.forceUpdate()}),500)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=(t.loggedIn,t.loggedOut),a=t.accessToken,s=this.state;s.cookie;return s.loading?Object(w.jsx)("div",{children:"Loading"}):Object(w.jsx)(d.a,{basename:"/",children:Object(w.jsxs)(h.d,{children:[Object(w.jsx)(h.b,{exact:!0,path:"/",children:Object(w.jsx)("div",{className:"form",children:Object(w.jsx)("div",{className:"rowMine",children:Object(w.jsx)(k,{forceRender:this.forceRender})})})}),Object(w.jsxs)(c.a.Fragment,{children:[Object(w.jsx)(h.b,{component:function(){return Object(w.jsx)(S,{loggedOut:n,redirectPageLogout:e.redirectPageLogout,redirectPage:e.redirectPage,accessToken:a})},path:"/dashboard"}),Object(w.jsx)(h.b,{path:"/upload",component:y}),Object(w.jsx)(h.b,{path:"/scheduled",component:N})]})]})})}}]),n}(c.a.Component));r.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(T,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.7c7585b3.chunk.js.map