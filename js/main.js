//setting the elements//

body = document.body;

container = create('div')('container')(body)({});

header = create('div')('header')(container)({});

headerElements = ['logo','heading','language'].map(x=>create('div')(x)(header)({}));

lingo = create('select')('lingo')(headerElements[2])({name:'lingo'});

languages = pageDetails.languages.map(x=>{
    y = create('option')('optional')(lingo)({});
    y.innerText = x;
    return y;
});

feature = create('div')('feature')(container)({});

display = create('div')('display')(container)({});

footer = create('div')('footer')(container)({});

footerElements = ['foot_one','foot_two'].map(x=>create('div')(x)(footer)({}));

//completed the elements//


//details of elements//

headerElements[1].innerText = pageDetails.name;

 