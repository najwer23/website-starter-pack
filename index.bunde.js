(()=>{function e(e,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=function(){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.name=e.name}var o,a;return o=n,(a=[{key:"sayHello",value:function(){console.log("Hello "+this.name)}}])&&e(o.prototype,a),n}();window.onload=function(){console.log("All resource has loaded"),new n({name:"Mariusz Najwer"}).sayHello()},window.addEventListener("DOMContentLoaded",(function(){console.log("DOM fully loaded and parsed")}))})();