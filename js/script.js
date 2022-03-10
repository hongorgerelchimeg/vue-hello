const settings = {
    el: '#root',
    data: {
      name: 'insert your name',
      message: 'Hello World!',
      image: [{
      link: "https://picsum.photos/200/300",
      alt: "pic 1"
      },
      { 
       link: "https://picsum.photos/200/400",
       alt: "pic 2"
      }
      ]
       
    },
    methods: {
            greet: function() {
               if (this.name ==  'insert your name') {
                  this.name = "Please ,name!"
               } else {
                  this.message =  `Hello, ${this.name}`
               }
               
            },
            clear: function() {
               this.name = ''
            }
        }
    
 };
 
 const app = new Vue(settings);
