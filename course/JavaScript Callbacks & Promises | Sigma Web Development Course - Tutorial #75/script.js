console.log("this is line 1")
console.log("this is line 2")

setTimeout(() => {
    console.log("i'm execute after 5 sec but browser donot wait for me")
}, 5000);

console.log("in mean time i will run")


//anfn
const callback =(arg)=>{
    console.log(arg)
}

const loadScript = (src,callback) => {
  let sc =document.createElement("script");
  sc.src = src;
  sc.onload = callback("I'm a call back function used as argument for LOADSCRIPT function")
  document.head.append(sc)
}

loadScript("https:///prismjs@v1.x/plugins/autoloader/prism-autoloader.min.js",callback)