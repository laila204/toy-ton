const product = [
{
    id:0,
    image:'image/1.png',
    title: 'Ballon inflator',
    price: 50,

},
{
    id:1,
    image:'image/2.png',
    title: 'lucky duck',
    price: 40,

},
{
    id:2,
    image:'image/3.png',
    title: 'The book of colors and letters',
    price: 80,

},
{
    id:3,
    image:'image/4.png',
    title: 'Optical target',
    price: 150,

},
{
    id:4,
    image:'image/5.png',
    title: 'Fisherman',
    price: 40,

},

{
    id:5,
    image:'image/6.png',
    title: 'The wondrous laptop ',
    price: 100,

},
{
    id:6,
    image:'image/7.png',
    title: ' The automatic alarm',
    price: 120,

},
{
    id:7,
    image:'image/8.png',
    title: '   Dictionary of mines',
    price: 100,

},
{
    id:8,
    image:'image/9.png',
    title: '  Cubes game ',
    price: 30,

},
{
    id:89,
    image:'image/10.png',
    title: '   Dentist game  ',
    price: 30,

},

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    let n=2;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>ل.س ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add </button>"+
        "<a href ='html/index("+(n++)+").html' target='_blank'>copcthion</a>" +
        `</div>
        </div>`
    )
}).join('')

var cart =[];

document.getElementsByClassName("carty")[0];
function openForm() {
    displaycart();
    document.getElementById("nav").style.display = "block";
  }
  
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
    document.getElementById("nav").style.display = "block";
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    document.getElementById("count-1").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$"+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>ل.س ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}


  function closeForm() {
    document.getElementById("nav").style.display = "none";
  }
 
