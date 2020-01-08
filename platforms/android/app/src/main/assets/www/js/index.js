var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app', 
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    routes: [
        {
          name: 'pgIndex',
          path: '/index/',
          url: 'index.html',
        },
        {
          name: 'pgResultado',
          path: '/resultado/',
          url: 'paginas/resultado.html',
        }
    ],
});

var mainView = app.views.create('.view-main');

var app2 = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app2.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};
