(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{1325:(e,t,a)=>{Promise.resolve().then(a.bind(a,660))},660:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>k});var i=a(5155),n=a(2115),s=a(984),l=a(5565),r=a(8173),o=a.n(r),d=a(2345);let c=[{name:"Ruhan Nandalal",role:"Fullstack Developer | Back-end Coordinator",image:"/team/ruhan.png",linkedin:"https://www.linkedin.com/in/ruhan-nandalal-683387320/"},{name:"Chiran Senarath",role:"Fullstack Developer | UI Designer",image:"/team/chiran.jpg",linkedin:"https://www.linkedin.com/in/chiran-senarath-088524235/"},{name:"Tharana Bopearachchi",role:"Fullstack Developer | Project Manager",image:"/team/tharana.jpg",linkedin:"https://www.linkedin.com/in/tharana-bopearachchi/"},{name:"Sudesh Seneviratne",role:"Fullstack Developer | Frontend-end Coordinator",image:"/team/sudesh.jpg",linkedin:"https://www.linkedin.com/in/sudesharoshaseneviratne/"},{name:"Akila Senanayake",role:"Fullstack Developer | UI Designer",image:"/team/akila.png",linkedin:"https://www.linkedin.com/in/akila-senanayake-23aab42a7/"},{name:"Pasidu",role:"Fullstack Developer | UI Designer",image:"/team/pasidu.jpg",linkedin:"https://www.linkedin.com/in/pasindu-gamage-14442015a/"}];var m=a(7468),u=a(405),p=a(3160),h=a(3848);let x=e=>{let{products:t}=e,a=t.slice(0,5),s=t.slice(5,10),l=t.slice(10,15),r=n.useRef(null),{scrollYProgress:o}=(0,m.L)({target:r,offset:["start start","end start"]}),d={stiffness:300,damping:30,bounce:100},c=(0,u.z)((0,p.G)(o,[0,1],[0,1e3]),d),x=(0,u.z)((0,p.G)(o,[0,1],[0,-1e3]),d),b=(0,u.z)((0,p.G)(o,[0,.2],[15,0]),d),f=(0,u.z)((0,p.G)(o,[0,.2],[.2,1]),d),j=(0,u.z)((0,p.G)(o,[0,.2],[20,0]),d),w=(0,u.z)((0,p.G)(o,[0,.2],[-700,500]),d);return(0,i.jsxs)("div",{ref:r,className:"h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]",children:[(0,i.jsx)(g,{}),(0,i.jsxs)(h.P.div,{style:{rotateX:b,rotateZ:j,translateY:w,opacity:f},children:[(0,i.jsx)(h.P.div,{className:"flex flex-row-reverse space-x-reverse space-x-20 mb-20",children:a.map(e=>(0,i.jsx)(v,{product:e,translate:c},e.title))}),(0,i.jsx)(h.P.div,{className:"flex flex-row mb-20 space-x-20",children:s.map(e=>(0,i.jsx)(v,{product:e,translate:x},e.title))}),(0,i.jsx)(h.P.div,{className:"flex flex-row-reverse space-x-reverse space-x-20",children:l.map(e=>(0,i.jsx)(v,{product:e,translate:c},e.title))})]})]})},g=()=>(0,i.jsxs)("div",{className:"max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0",children:[(0,i.jsxs)("h1",{className:"text-2xl md:text-7xl font-bold text-white",children:["About ",(0,i.jsx)("br",{})," Colossus.AI"]}),(0,i.jsx)("p",{className:"max-w-2xl text-base md:text-xl mt-8 text-neutral-200",children:"We are a team of students working together to revolutionize learning with Colossus.AI. Our system analyzes documents to generate structured study roadmaps, making learning more efficient and accessible."})]}),v=e=>{let{product:t,translate:a}=e;return(0,i.jsxs)(h.P.div,{style:{x:a},whileHover:{y:-20},className:"group/product h-96 w-[30rem] relative flex-shrink-0",children:[(0,i.jsx)(o(),{href:t.link,className:"block group-hover/product:shadow-2xl",children:(0,i.jsx)(l.default,{src:t.thumbnail,height:"600",width:"600",className:"object-cover object-left-top absolute h-full w-full inset-0",alt:t.title})}),(0,i.jsx)("div",{className:"absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"}),(0,i.jsx)("h2",{className:"absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white",children:t.title})]},t.title)};var b=a(5683),f=a(9602);function j(e){let{features:t,className:a,title:s="How to get Started",autoPlayInterval:r=3e3}=e,[o,d]=(0,n.useState)(0),[c,m]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=setInterval(()=>{c<100?m(e=>e+100/(r/100)):(d(e=>(e+1)%t.length),m(0))},100);return()=>clearInterval(e)},[c,t.length,r]),(0,i.jsx)("div",{className:(0,f.cn)("p-8 md:p-12",a),children:(0,i.jsxs)("div",{className:"max-w-7xl mx-auto w-full",children:[(0,i.jsx)("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center",children:s}),(0,i.jsxs)("div",{className:"flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10",children:[(0,i.jsx)("div",{className:"order-2 md:order-1 space-y-8",children:t.map((e,t)=>(0,i.jsxs)(h.P.div,{className:"flex items-center gap-6 md:gap-8",initial:{opacity:.3},animate:{opacity:t===o?1:.3},transition:{duration:.5},children:[(0,i.jsx)(h.P.div,{className:(0,f.cn)("w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",t===o?"bg-primary border-primary text-primary-foreground scale-110":"bg-muted border-muted-foreground"),children:t<=o?(0,i.jsx)("span",{className:"text-lg font-bold",children:"✓"}):(0,i.jsx)("span",{className:"text-lg font-semibold",children:t+1})}),(0,i.jsxs)("div",{className:"flex-1",children:[(0,i.jsx)("h3",{className:"text-xl md:text-2xl font-semibold",children:e.title||e.step}),(0,i.jsx)("p",{className:"text-sm md:text-lg text-muted-foreground",children:e.content})]})]},t))}),(0,i.jsx)("div",{className:(0,f.cn)("order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg"),children:(0,i.jsx)(b.N,{mode:"wait",children:t.map((e,t)=>t===o&&(0,i.jsxs)(h.P.div,{className:"absolute inset-0 rounded-lg overflow-hidden",initial:{y:100,opacity:0,rotateX:-20},animate:{y:0,opacity:1,rotateX:0},exit:{y:-100,opacity:0,rotateX:20},transition:{duration:.5,ease:"easeInOut"},children:[(0,i.jsx)(l.default,{src:e.image,alt:e.step,className:"w-full h-full object-cover transition-transform transform",width:1e3,height:500}),(0,i.jsx)("div",{className:"absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent"})]},t))})})]})]})})}var w=a(3982);let y=[{title:"AI Learning",link:"#",thumbnail:"/about/ms.png"},{title:"Knowledge Graphs",link:"#",thumbnail:"/about/Landing.jpg"},{title:"Smart Search",link:"#",thumbnail:"/about/followus.png"},{title:"Visual Learning",link:"#",thumbnail:"/about/Marketing1.png"},{title:"AI Assistant",link:"#",thumbnail:"/about/Landing.jpg"},{title:"Interactive Learning",link:"#",thumbnail:"/about/Chatpage.png"},{title:"Knowledge Maps",link:"#",thumbnail:"/about/usecase.png"},{title:"Smart Navigation",link:"#",thumbnail:"/about/presentation.png"},{title:"Intelligent Search",link:"#",thumbnail:"/about/ms.png"},{title:"Learning Assistant",link:"#",thumbnail:"/about/Landing.jpg"}],N=[{step:"Step 1",title:"Understand the System and Develop Core Features",content:" Gain a clear understanding of how the Learning Guide System structures and processes documents.Implement document processing, roadmap generation, and interactive chatbot features.",image:"/about/presentation.png"},{step:"Step 2",title:"Enhance User Experience",content:"Improve UI/UX for smooth navigation and clear roadmap presentation.",image:"/about/Chatpage.png"},{step:"Step 3",title:"Test, Optimize, and Deploy",content:"Conduct testing to ensure accuracy, speed, and efficiency in generating learning paths. Launch the system and present it with real-world examples to demonstrate its value.",image:"/about/Landing_Page_Group3.png"}],k=()=>(0,i.jsxs)("div",{className:"min-h-screen w-full relative overflow-hidden",children:[(0,i.jsx)(w.u,{className:"absolute inset-0 pointer-events-none z-10",quantity:300,staticity:20,ease:70,color:"#FF4A8D",refresh:!1,size:1.5,vx:.2,vy:.2}),(0,i.jsxs)(s.M,{children:[(0,i.jsx)("div",{className:"relative min-h-screen w-full",children:(0,i.jsx)(x,{products:y})}),(0,i.jsxs)(h.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},className:"container mx-auto px-4 py-8 relative w-full z-20",children:[(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 -z-10"}),(0,i.jsxs)(h.P.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6},className:"text-center mb-8",children:[(0,i.jsx)("h1",{className:"text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF9F4A] via-[#FF4A8D] to-[#8B4AFF] bg-clip-text text-transparent",children:"Team Colossus - SE42"}),(0,i.jsx)("p",{className:"text-xl text-white max-w-2xl mx-auto",children:"Meet our talented team of developers and designers who bring innovation and creativity to life"})]}),(0,i.jsx)("div",{className:"relative",children:(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center max-w-[1000px] mx-auto",children:c.map((e,t)=>(0,i.jsx)(h.P.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t,ease:"easeOut"},whileHover:{y:-10},className:"w-[280px] ".concat(t%3==0?"md:ml-auto":t%3==2?"md:mr-auto":"mx-auto"),children:(0,i.jsxs)("div",{className:"relative bg-black backdrop-blur-lg rounded-[30px] p-6 border-2 border-white/10 transition-all duration-500 hover:border-[#FF4A8D]/50 hover:bg-black",children:[(0,i.jsx)("div",{className:"absolute inset-0 rounded-[30px] bg-gradient-to-b from-[#FF4A8D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"}),(0,i.jsxs)(h.P.div,{whileHover:{scale:1.05},transition:{duration:.3},className:"relative w-36 h-36 mx-auto mb-6",children:[(0,i.jsx)("div",{className:"relative w-full h-full rounded-[24px] overflow-hidden bg-black/40 backdrop-blur-sm",children:(0,i.jsx)(l.default,{src:e.image,alt:e.name,fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-110 rounded-[24px]"})}),(0,i.jsx)("div",{className:"absolute inset-0 rounded-[24px] bg-gradient-to-b from-[#FF4A8D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"})]}),(0,i.jsxs)("div",{className:"text-center relative z-10",children:[(0,i.jsx)(h.P.h3,{whileHover:{scale:1.05},className:"text-lg font-bold text-white mb-2 bg-gradient-to-r from-white to-white bg-clip-text group-hover:text-transparent group-hover:from-[#FF9F4A] group-hover:to-[#FF4A8D] transition-all duration-500",children:e.name}),(0,i.jsx)("p",{className:"text-gray-300 mb-6 text-sm opacity-90 line-clamp-2",children:e.role}),(0,i.jsx)(h.P.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,i.jsxs)(o(),{href:e.linkedin,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF9F4A] via-[#FF4A8D] to-[#8B4AFF] text-white rounded-[20px] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#FF4A8D]/25 text-sm",children:[(0,i.jsx)(d.A,{className:"w-4 h-4"}),(0,i.jsx)("span",{children:"Connect"})]})})]})]})},t))})})]}),(0,i.jsx)("div",{className:"bg-black",children:(0,i.jsx)(j,{features:N,title:"Your Journey Starts Here",autoPlayInterval:4e3})})]})]})},984:(e,t,a)=>{"use strict";a.d(t,{M:()=>o});var i=a(5155),n=a(6135),s=a(9680),l=a(3848);function r(){return(0,i.jsxs)("div",{className:"fixed inset-0 -z-10 overflow-hidden",children:[(0,i.jsx)(l.P.div,{animate:{x:[0,100,0],y:[0,-50,0],scale:[1,1.2,1]},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-[#FF9F4A] via-[#FF4A8D] to-[#8B4AFF] opacity-10 blur-3xl"}),(0,i.jsx)(l.P.div,{animate:{x:[0,-70,0],y:[0,100,0],scale:[1,1.1,1]},transition:{duration:15,repeat:1/0,ease:"linear"},className:"absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-[#FF9F4A] via-[#FF4A8D] to-[#8B4AFF] opacity-10 blur-3xl"}),(0,i.jsx)(l.P.div,{animate:{x:[0,50,0],y:[0,50,0],scale:[1,1.3,1]},transition:{duration:18,repeat:1/0,ease:"linear"},className:"absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-[#FF9F4A] via-[#FF4A8D] to-[#8B4AFF] opacity-10 blur-3xl"})]})}function o(e){let{children:t}=e;return(0,i.jsxs)("div",{className:"bg-black",children:[(0,i.jsx)(r,{}),(0,i.jsx)(n.F,{}),(0,i.jsx)("main",{className:"min-h-screen bg-black pt-16",children:t}),(0,i.jsx)(s.w,{})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[961,380,523,441,517,358],()=>t(1325)),_N_E=e.O()}]);