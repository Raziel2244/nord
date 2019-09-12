nord = {

  init : function() {

    nord.tools.init();

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
      .then(() => console.log("Successfuly registered service worker"))
      .catch(e => console.log("Failed to register service worker"))
    }
    
  },

  state : {}

}
