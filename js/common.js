let create = tag => name => parent => attributes => {
    let x = document.createElement(tag);
    x.className = name;
    parent.appendChild(x);
    for(el in attributes){
      x.setAttribute(el, attributes[el]);
    }
    return x; 
}

// let diver = title =>parameters =>parent=>{
//    let x = create('div')('unit')(parent)({});
//     x.innerText = title;
//     return x;
// }

// let inputer = title => (parameters)=>(parent)=>{
//     let unit = create('div')('unit')(parent)({});
//     let label = create('div')('label')(unit)({})
//         label.innerText = title;
//     let field = create('input')('field')(unit)(parameters);
//   return [unit,label,field];
// }

// let selector = title => parameters => data =>parent=> {
//     let unit = create('div')('unit')(parent)({});
//     let label = create('div')('label')(unit)({})
//         label.innerText = title;
//     let s = create('select')('field')(unit)(parameters);
//         data.map(y=>{
//             let option = create('option')('optional')(s)({}); 
//             option.innerText = y; 
//         });
//   return [unit,label,s];
// }

vanish = el => el.style.display = "none"

appear = el => el.style.display ="flex"

require = el => el.required = true

unrequire = el => el.required = false

