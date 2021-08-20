 const headingColor = document.getElementById('main-heading');
    headingColor.style.color ='#FF4848';


 document.getElementById('first-blog').style.background ='rgba(137, 196, 244, 1)';
 document.getElementById('first-blog').style.padding ='2rem';
 document.getElementById('first-blog').style.margin ='1rem';
 document.getElementById('first-blog').style.borderRadius ='.5rem';


 
function addItem() {
    var node = document.createElement("LI");
    var textNode = document.createTextNode("social");
    node.appendChild(textNode);
    document.getElementById("list").appendChild(node);
  }





  var i = 0;
  document.getElementById('count-btn').addEventListener('click', function (){
        const newNum = i++ ;
        document.getElementById('num').value = newNum ; 

  })

