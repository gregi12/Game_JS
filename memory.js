var cards = ["ciri.png" ,"geralt.png" ,"jaskier.png" ,"jaskier.png" ,"iorweth.png" ,"triss.png" ,"geralt.png" ,"yen.png" ,"ciri.png" ,"triss.png" ,"yen.png" ,"iorweth.png"];

//alert(card[4])
//console.log(cards);

var flag= false;
var turnCounter = 0;
var first;
var karta = "url(img/karta.png)";
var lock = false;
var licznik = 0;
function revealCard(nr)
{ 
    
    var opacity = $('#c'+nr).css('opacity');
    if(opacity!=0 && lock!=true){
        lock=true;
     var picture = "url(img/"+cards[nr]+")";
    $('#c'+ nr).css('background-image',picture);
    $('#c'+ nr).addClass('cardA');
    
    if(flag==false){ //firstcard
        
        flag = true;
        first = nr;
        lock=false;
    }
    
    else 
    { 
        if(first!=nr){
            if(cards[first]==cards[nr]) //when we cilcked 2 card already
            {
                //alert('wow');
                setTimeout(function() { hideCards(nr,first)}, 750);
                licznik++;
                
    
            }
            else{
                //alert('buuuuu');
    
                setTimeout(function(){restore2Cards(nr,first)},750);
              
            }
           
            
            turnCounter++;
            $(".score").html("Turn Counter: "+turnCounter);
            flag = false;
            
            
            
            
    
            function hideCards(nr1,nr2)
            {
                $('#c'+nr1).css('opacity',0);
                $('#c'+nr2).css('opacity',0);
                lock=false;
            } 
            function restore2Cards(nr1,nr2)
            {
                $('#c'+nr1).css('background-image',karta);
                $('#c'+nr1).removeClass('cardA');
    
                $('#c'+nr2).css('background-image',karta);
                $('#c'+nr2).removeClass('cardA');
                lock=false;
            }


        }
        
        else {
            lock=false;

    }
    
    if(licznik==6){
        setTimeout(function(){koniecGry()},750)
        
    }
    
    }
 function koniecGry(){
    $('.board').html("<h1 style='font-size:50px;'>You win, you have done it in "+turnCounter +" turns.</h1> <br/> <div class='koniec'><a href='gra.html'>Zagraj ponownie</a></div>");
 }
}}
    
    


    

 



var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");

var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");



c0.addEventListener("click",function(){revealCard(0);})
c1.addEventListener("click",function(){revealCard(1);})
c2.addEventListener("click",function(){revealCard(2);})
c3.addEventListener("click",function(){revealCard(3);})

c4.addEventListener("click",function(){revealCard(4);})
c5.addEventListener("click",function(){revealCard(5);})
c6.addEventListener("click",function(){revealCard(6);})
c7.addEventListener("click",function(){revealCard(7);})

c8.addEventListener("click",function(){revealCard(8);})
c9.addEventListener("click",function(){revealCard(9);})
c10.addEventListener("click",function(){revealCard(10);})
c11.addEventListener("click",function(){revealCard(11);})



