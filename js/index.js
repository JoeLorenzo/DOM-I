const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// gets the keys of the siteContent object
siteContentKeys = ((Object.keys(siteContent)))

// A function that loops through each individual object key. It looks for a string that matches a key and if found pushes the value pair to a  desired array.
let jsonToArray = function(jsonString, array){
for (let i = 0; i < siteContentKeys.length; i++){
  for (let j = 0; j < ((Object.keys(siteContent[(siteContentKeys[i])])).length); j++){
      if (((Object.keys(siteContent[(siteContentKeys[i])]))[j]).includes(jsonString)) {
          array.push((Object.values(siteContent[(siteContentKeys[i])]))[j])
      }
    }
  }
}

// A function that passes an array to a nodelist via .textContent
let arrayToNodelistTextContent = function(array, nodelist){
for (var i = 0; i < array.length; i++){
nodelist[i].textContent = array[i];
  }
};

// Nodelist variables
navItemsNodelist = document.querySelectorAll("a");
imgNodelist = document.querySelectorAll("img");
buttonNodelist = document.querySelectorAll("button");
h1Nodelist = document.querySelectorAll("h1");
h4Nodelist = document.querySelectorAll("h4");
pNodelist = document.querySelectorAll("p");
document.querySelectorAll('a').forEach(element => element.style.color = 'green')

// Arrays
navItems = [];
img = [];
button = [];
h1 = [];
h4 = [];
p = [];

// invoked jsonToArray function
jsonToArray("nav-item", navItems);
jsonToArray("img",img);
jsonToArray("button",button);
jsonToArray("h1",h1);
jsonToArray("h4",h4);
jsonToArray("content",p);
jsonToArray("address",p);
jsonToArray("phone",p);
jsonToArray("email",p);
jsonToArray("copyright",p);

// invoked functions to pass array to nodelist
imgNodelist.forEach((image, i) => image.setAttribute('src', img[i]));
arrayToNodelistTextContent(navItems,navItemsNodelist);
arrayToNodelistTextContent(button,buttonNodelist);
arrayToNodelistTextContent(h1,h1Nodelist);
arrayToNodelistTextContent(h4,h4Nodelist);
arrayToNodelistTextContent(p,pNodelist);
