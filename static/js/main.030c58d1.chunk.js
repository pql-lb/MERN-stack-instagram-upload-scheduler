(this.webpackJsonpreactfront=this.webpackJsonpreactfront||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(22),o=n.n(c),i=(n(28),n(8)),r=n(9),l=n(11),u=n(10),d=(n(29),n(30),n(15)),h=n(2),g=n(7),j=n.n(g),b=n(13),p=n(17),m=n(16);function f(){return new Promise((function(e,t){window.FB.getLoginStatus((function(t){e(t)}))}))}function O(){return new Promise((function(e,t){window.FB?e():(!function(e,t,n){var a,s=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="//connect.facebook.net/en_US/sdk.js",s.parentNode.insertBefore(a,s))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){window.FB.init({appId:0x661cee00f404d,cookie:!0,xfbml:!0,version:"v9.0"}),window.FB.AppEvents.logPageView(),console.log("fired"),e()})}))}function x(e){var t=this;return new Promise(function(){var n=Object(b.a)(j.a.mark((function n(a,s){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"unknown"===e.status||"not_authorized"===e.status?new Promise((function(e,t){window.FB.login((function(t){console.log("logged in",t.authResponse.accessToken);var n=t.authResponse.accessToken;e(n)}))})).then((function(e){t.setState({accessToken:e}),localStorage.setItem("access",e),a(e)})):(t.setState({accessToken:e.authResponse.accessToken}),localStorage.setItem("access",e.authResponse.accessToken),a(e.authResponse.accessToken));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}function v(){return new Promise((function(e,t){window.FB.getLoginStatus((function(n){console.log(n),window.FB.api("/me/accounts?fields=id",{access_token:n.authResponse.accessToken},(function(n){console.log("RESPONSE",n),n?e(n):t()}))}))}))}var w=n(0),k=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",submitRedirectFb:!1,invalidLogin:!1,errorMsg:" ",hidden:!0},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=e.state,n=t.email,a=t.password;t.invalidLogin;if(n.length>1&&a.length>1){e.setState({hidden:!1});var s={email:n,password:a};fetch("https://multer-test123.herokuapp.com/signin",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((function(t){return console.log("res",t),200===t.status?(e.setState({invalidLogin:!1}),t.json()):(e.setState({invalidLogin:!0}),t.json())})).then(function(){var t=Object(b.a)(j.a.mark((function t(n){var a,s,c,o,i,r,l,u,d,h,g;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.Error,!1!==e.state.invalidLogin||a){t.next=28;break}return s=n.userId,localStorage.setItem("userId",s),"token",c=new Date,o=c.getTime(),o+=36e5,c.setTime(o),console.log("time after",c),document.cookie="token="+n.token+";expires="+c.toUTCString()+";path=/",i=document.cookie.match(new RegExp("(^| )token=([^;]+)")),r=i[0].split("="),l=r[1],u=new FormData,t.next=17,fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");case 17:return d=t.sent,t.next=20,d.blob();case 20:h=t.sent,g=new File([h],"test.jpg",{type:"image/jpeg"}),u.append("image",g),console.log("formData",u,g),new Promise((function(t,a){fetch("https://multer-test123.herokuapp.com/test",{method:"POST",body:u,headers:{Authorization:"Bearer ".concat(l)}}).then(function(){var s=Object(b.a)(j.a.mark((function s(c){return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(console.log("here",c),200!==c.status){s.next=5;break}t(),s.next=11;break;case 5:if(403!==c.status){s.next=10;break}return s.next=8,c.json();case 8:n=s.sent,e.setState({errorMsg:n.Error});case 10:a();case 11:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))})).then((function(){var t=document.cookie.match(new RegExp("(^| )token=([^;]+)"));t&&O().then((function(){f.bind(Object(m.a)(e))().then(function(){var n=Object(b.a)(j.a.mark((function n(a){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:x.bind(Object(m.a)(e))(a).then((function(n){console.log("a",n),n&&v().then((function(n){n&&(setTimeout((function(){e.props.setCookie(t)}),500),setTimeout((function(){e.setState({submitRedirectFb:!0,hidden:!0}),console.log("STATES",t,e.state.submitRedirectFb,e.state.invalidLogin)}),1e3))})).catch((function(e){return console.log("err with test call",e)}))})).catch((function(e){return console.log("err with status change",e)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){return console.log("err with check login",e)}))}))})),t.next=30;break;case 28:console.log("error"),e.setState({errorMsg:n.Error});case 30:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}else e.setState({errorMsg:"Please ensure both fields are entered correctly."})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.hidden,a=t.email,c=t.password,o=t.submitRedirectFb,i=t.invalidLogin,r=t.errorMsg;return Object(w.jsxs)(s.a.Fragment,{children:[!0===o&&!1===i?Object(w.jsx)(h.a,{to:"/dashboard"}):null,Object(w.jsx)("h1",{children:"Sign In"}),Object(w.jsx)("span",{className:"alert",children:r}),Object(w.jsx)("label",{children:"Email:"}),Object(w.jsx)("input",{id:"email",value:a,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(w.jsx)("label",{children:"Password:"}),Object(w.jsx)("input",{id:"password",value:c,onChange:function(t){return e.handleChange(t)},className:"input"}),Object(w.jsxs)("div",{className:"btnContain",children:[Object(w.jsxs)("button",{onClick:this.handleSubmit,className:"btn login",children:[Object(w.jsxs)("div",{id:n?"hide":null,className:"lds-defaultTwo left",children:[Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{})]}),Object(w.jsx)("span",{id:n?null:"hide",className:"loginTxt",children:"LOGIN"})]}),Object(w.jsx)("button",{className:"btn signup",children:Object(w.jsx)("span",{className:"signTxt",children:" SIGNUP "})})]})]})}}]),n}(s.a.Component),S=(n(41),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={file:"",time:"",date:"",alertMsg:""},e.handleChange=function(t){e.setState(Object(p.a)({},t.target.id,t.target.value))},e.handleChangeImg=function(t){t.target.files.length&&e.setState({preview:URL.createObjectURL(t.target.files[0]),file:t.target.files[0]})},e.clearImg=function(){e.setState({preview:"",file:""})},e.handleUpload=function(){var t=e.state,n=t.file,a=t.time,s=t.date,c=(t.preview,(new Date).getTime());if(console.log(n,a,s),""!==n&&""!==a&&""!==s){var o=localStorage.getItem("userId"),i=o.slice(0,5),r=String(i+"_"+n.name),l=new FormData;l.append("image",n,r);var u=String(s),d=String(a),h=u.split("-"),g=Number(h[0]),j=Number(h[1])-1,b=Number(h[2]),p=d.split(":"),m=Number(p[0]),f=Number(p[1]),O=new Date(Date.UTC(g,j,b,m,f,0,0)).getTime();console.log(O),c>O?e.setState({alertMsg:"Scheduled date must be in the future."}):(l.append("time",O),l.append("userId",o),setTimeout((function(){fetch("https://multer-test123.herokuapp.com/upload",{method:"POST",body:l}).then((function(e){return e.json()})).then((function(t){var n=t.Error;n?e.setState({alertMsg:n}):e.setState({alertMsg:"Image successfully uploaded!"}),console.log(t)}))}),2e3))}else e.setState({alertMsg:"Please ensure all fields are filled in correctly."})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.file,n=e.time,a=e.date,c=e.preview,o=e.alertMsg;return Object(w.jsx)(s.a.Fragment,{children:Object(w.jsx)("div",{className:"formFlex",children:Object(w.jsxs)("div",{className:"inputForm",style:o&&c?{height:"550px"}:{height:"500px"},children:[Object(w.jsx)("div",{style:o?{display:"block"}:{display:"none"},className:"alert",children:o}),Object(w.jsx)("label",{for:"date",children:"Date:"}),Object(w.jsx)("input",{type:"date",id:"date",value:a,onChange:this.handleChange}),Object(w.jsx)("label",{for:"time",children:"Time:"}),Object(w.jsx)("input",{type:"time",id:"time",value:n,onChange:this.handleChange}),Object(w.jsx)("label",{style:""!==t?{height:"120px"}:{height:"75px"},className:"fileBox",for:"file",children:c?Object(w.jsxs)(s.a.Fragment,{children:[Object(w.jsx)("img",{src:c,width:"100",height:"100"}),Object(w.jsx)("button",{onClick:this.clearImg,className:"clearImg",children:"Change image"})]}):Object(w.jsx)("div",{className:"uploadBtn",children:"Please select an image"})}),Object(w.jsx)("input",{type:"file",id:"file",style:{display:"none"},onChange:this.handleChangeImg}),Object(w.jsx)("button",{className:"btnSubmit",onClick:this.handleUpload,children:"Upload"})]})})})}}]),n}(s.a.Component)),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return null!==this.props.cookie?Object(w.jsxs)("div",{children:[Object(w.jsx)(d.b,{to:"/upload",children:Object(w.jsx)("div",{className:"btn",children:"Schedule an upload"})}),"Dashboard"]}):Object(w.jsx)("div",{children:"ERROR PAGE"})}}]),n}(s.a.Component),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loggedIn:!1,accessToken:"",loggedOut:!1,cookie:null},e.redirectPage=function(t){e.setState({loggedIn:t})},e.redirectPageLogout=function(t){e.setState({loggedOut:t})},e.setAccess=function(t){e.setState({accessToken:t})},e.setCookie=function(t){e.setState({cookie:t})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=(t.loggedIn,t.loggedOut),a=t.accessToken,s=t.cookie;document.cookie.match(new RegExp("(^| )token=([^;]+)"));return console.log("cookie state",s),Object(w.jsx)(d.a,{basename:"/",children:Object(w.jsxs)(h.d,{children:[Object(w.jsx)(h.b,{exact:!0,path:"/",children:Object(w.jsx)("div",{className:"form",children:Object(w.jsx)("div",{className:"rowMine",children:Object(w.jsx)(k,{setCookie:this.setCookie})})})}),Object(w.jsx)(h.b,{component:function(){return Object(w.jsx)(y,{cookie:s,loggedOut:n,redirectPageLogout:e.redirectPageLogout,redirectPage:e.redirectPage,accessToken:a})},path:"/dashboard"}),Object(w.jsx)(h.b,{path:"/upload",component:S})]})})}}]),n}(s.a.Component);o.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(T,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.030c58d1.chunk.js.map