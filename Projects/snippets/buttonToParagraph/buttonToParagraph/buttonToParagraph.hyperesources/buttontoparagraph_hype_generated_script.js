//	HYPE.documents["buttonToParagraph"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="buttonToParagraph.hyperesources",c="buttonToParagraph",e="buttontoparagraph_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("buttontoparagraph_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_518","HYPE_dtl_518",!0==(null!=a&&10>a||false==!0)?"HYPE-518.full.min.js":"HYPE-518.thin.min.js"),false==!0&&(a=a||l("HYPE_w_518","HYPE_wdtl_518","HYPE-518.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"buttonToParagraph",source:"function(hypeDocument, element, event) {\t\n\tvar name = element.textContent;\n\tvar text = hypeDocument.getElementById('text');\n\t\n\tvar p1 = \"Maiores quos officiis fugit aut. Quia et quia qui consequuntur quo placeat. Maxime hic id sit aut ducimus. Molestias non exercitationem modi explicabo sint. Voluptates eum eius nihil nisi modi. Voluptate et voluptas quia nemo.\";\n\tvar p2 = \"Fuga exercitationem veritatis fugiat a unde ex aut quibusdam. In deleniti adipisci accusamus molestias corrupti. Nemo ut dolorum non totam quia animi. Maxime illum et ea in accusamus sit. Inventore rerum in cupiditate. Cupiditate dolores et et ut ut. Quia sed vel voluptates modi ea ut.\";\n\tvar p3 = \"Alias nobis cupiditate iusto assumenda ea omnis minus. Et accusantium sequi magnam est tenetur. Sit iste doloribus cupiditate saepe quidem. Sit autem magnam necessitatibus aspernatur deserunt. Soluta quia dolor et vitae ex et.\";\n\t\n\tif (true){\n\t\tif(name==\"Info\"){text.textContent = p1;}\n\t\telse if(name==\"Contact\"){text.textContent=p2;}\n\t\telse if(name==\"Portfolio\"){text.textContent=p3;}\n\n\t\thypeDocument.startTimelineNamed('Main Timeline');\n\t\t\n\n\n\t}\n}",identifier:"19"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_518(c,e,{},h,[],d,[{n:"Untitled Scene",o:"1",X:[0]}],[{o:"3",p:"600px",x:0,a:100,Z:400,cA:false,Y:600,b:100,c:"#FFFFFF",L:[],bY:1,d:600,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:1,b:[],a:[{f:"c",y:0,z:1,i:"a",e:149,s:-301,o:"20"},{y:1,i:"a",s:149,z:0,o:"20",f:"c"}],f:30}},bZ:180,O:["22","23","24","21","20"],v:{"22":{b:0,z:3,K:"None",c:90,aD:{a:[{p:4,h:"19"}]},L:"None",d:15,aS:6,M:0,bD:"none",N:0,aT:6,O:0,aU:6,P:0,bF:"21",aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:12,F:"center",G:"#3A3A3A",aP:"pointer",w:"Contact<br>",x:"visible",I:"None",a:153,y:"preserve",J:"None"},"21":{x:"visible",k:"div",bS:45,c:239,d:27,z:3,a:180,aP:"pointer",j:"absolute",b:10},"24":{b:0,z:1,K:"None",c:90,aD:{a:[{p:4,h:"19"}]},L:"None",d:15,aS:6,M:0,bD:"none",N:0,aT:6,O:0,aU:6,P:0,bF:"21",aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:12,F:"center",G:"#3A3A3A",aP:"pointer",w:"Portfolio<br><br>",x:"visible",I:"None",a:-16,y:"preserve",J:"None"},"20":{G:"#3A3A3A",aU:8,c:285,bS:45,d:102,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",i:"text",w:"Aut repudiandae suscipit quo. Aut nemo voluptatem qui perferendis similique. Culpa veniam officia quia enim tempora error. Qui consectetur est aut culpa id est illum ea. Omnis ut tempora non sint est odit.",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:-301,F:"center",b:141},"23":{b:0,z:2,K:"None",c:90,aD:{a:[{p:4,h:"19"}]},L:"None",d:15,aS:6,M:0,bD:"none",N:0,aT:6,O:0,aU:6,P:0,bF:"21",aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:12,F:"center",G:"#3A3A3A",aP:"pointer",w:"Info",x:"visible",I:"None",a:69,y:"preserve",J:"None"}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
