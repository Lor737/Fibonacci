function fibonacci(inputvalue)
{
  //__________________________________________________________________________________________________
  //CONTROLLO ED ELIMINAZIONE DIV CON CLASS .cuboclass 
  //per vedere il risultato da zero ogni volta che si clicca sul pulsante "Vedi Serie Fibonacci"
  var cubi_passati = document.querySelectorAll(".cuboclass");
  
  if (cubi_passati.length > 0) // fai un controllo se ci sono elementi che hanno come classe "cuboclass"
  {
    cubi_passati.forEach      
    (
      cubi => {cubi.remove()}  //serve a rimuovere tutti gli elementi che hanno come classe "cuboclass"
    )
  }
  //__________________________________________________________________________________________________
  //FUNZIONE FIBONACCI
  var inputvalue = document.getElementById("inp").value;
  var array = [0,1];
  for (var i=2;i<inputvalue;i++)
  {
    array[i] = array[i-2]+array[i-1];
  }
  console.log(array);
  
  var n = -2;
  var top = 400;
  var left = 500;
  //__________________________________________________________________________________________________
  //CREAZIONE DIV CON CLASS .cuboclass
  for (var i=0;i<array.length;i++)
  {
    var cubo = document.createElement("div"); //crea il div
    var cubo_creato = document.getElementById("contenuto"); //memorizza l'elemento che ha per id contenuto
    cubo_creato.appendChild(cubo);  //inserisce il nuovo div dentro il div che ha come id "contenuto"
    cubo.setAttribute("class","cuboclass"); //assegna al div la classe "cuboclass"
    cubo.style.height = array[i] +"px"; //inserisce l'altezza del div
    cubo.style.width = array[i] +"px";  //inserisce la larghezza del div
    cubo.style.backgroundColor = "red"; //inserisce il background colore del div
    cubo.style.outline = "solid 0.1px black"; //inserisce un bordo esterno solido con larghezza 0.5px e con colore nero
    cubo.style.outlineOffset = "-0.1px"; //sposto il bordo dentro il div
    cubo.style.position = "absolute";    //inserisce la positzione assoluta del div

  //1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765
  //1 2 3 4 5 6 7  8  9  10 11 12  13  14  15  16  17   18   19   20

  //1 5 34 233 1597        1 8 55 377 2584       2 13 89 610 4181        3 21 144 987 6765
  //1 5 9  13  17          2 6 10 14  18         3 7  11 15  19          4 8  12  16  20
  //var destra = (i-1)%4   var sopra = (i-2)%4   var sinistra = (i-3)%4  var sotto = i%4

if (i == 0) {cubo.style.top = top + 0 + "px";cubo.style.left = left + 0 + "px";}
if (i == 1) {cubo.style.top = top - 1 + "px";cubo.style.left = left + 0 + "px";}
if (i == 2) {cubo.style.top = top - 2 + "px";cubo.style.left = left + 0 + "px";}
if (i == 3) {cubo.style.top = top - 2 + "px";cubo.style.left = left - 2 + "px";}
if (i == 4) {cubo.style.top = top + 0 + "px";cubo.style.left = left - 2 + "px";}

var destra = (i-1)%4;   
var sopra = (i-2)%4;   
var sinistra = (i-3)%4;  
var sotto= i%4;

if (destra == 0) 
{
  n+=1;
}

if (i>4)
{
  if (destra == 0)   {cubo.style.top = top - array[i-4-2*n]*array[i-2-2*n] + "px";cubo.style.left = left + array[i-4-2*n]*array[i-3-2*n] + "px";}
  if (sopra == 0)    {cubo.style.top = top - array[i-3-2*n]*array[i-1-2*n] + "px";cubo.style.left = left - array[i-4-2*n]*array[i-3-2*n] + "px";}
  if (sinistra == 0) {cubo.style.top = top - array[i-4-2*n]*array[i-2-2*n] + "px";cubo.style.left = left - array[i-3-2*n]*array[i-2-2*n] + "px";}
  if (sotto == 0)    {cubo.style.top = top + array[i-6-2*n]*array[i-4-2*n] + "px";cubo.style.left = left - array[i-4-2*n]*array[i-3-2*n] + "px";} 
}
console.log("i: " + i + " top: " + cubo.style.top + " left: " + cubo.style.left);
console.log("n: " + n)

/*
//_____________________________________________________
//RAGIONAMENTO
i1[1]: top -1,        left 0  destra
i2[1]: top -1-1 = -2, left 0  sopra
i3[2]: top -1-1 = -2, left -2 sinistra
i4[3]: top  0,        left -2 sotto
----------------------------------------------------
i5[5]: top -1-1 = -2,     left +1 
i6[8]: top -8-1-1 = -10,  left -2 
i7[13]: top -8-1-1 = -10, left -13-2 = -15 
i8[21]: top +3,           left -13-2 = -15

i9[34]: top -8-1-1 = -10,   left +5+1 = 6
i10[55]:top -55-8-1-1 = 65, left -2-13 = -15
i11[89]:top -55-8-1-1 = 65, left -89-13-2 = -104
i12[144]:top +21+3 = 24,    left -89-13-2 = -104

i13[233]:top -55-8-1-1=65,      left +34+5+1=40
i14[377]:top -377-55-8-1-1=442, left -89-13-2=104
i15[610]:top -377-55-8-1-1=442, left -610-89-13-2=714
i16[987]:top +144+21+3=168,     left -610-89-13-2=714
//_____________________________________________________
i5[5]: top -(1*2),  left +(1*1) 
i6[8]: top -(2*5),  left -(1*2) 
i7[13]: top -(2*5), left -(3*5) 
i8[21]: top +(1*3), left -(3*5)

i9[34]: top -(2*5),  left +(2*3)
i10[55]:top -(5*13), left -(3*5)
i11[89]:top -(5*13), left -(8*13)
i12[144]:top +(3*8), left -(8*13)

i13[233]:top -(5*13),  left +(5*8)
i14[377]:top -(13*34), left -(8*13)
i15[610]:top -(13*34), left -(21*34)
i16[987]:top +(8*21),  left -(21*34)
//_____________________________________________________
i5[5]: top -array[1]*array[3],  left +array[1]*array[2]
i6[8]: top -array[3]*array[5],  left -array[2]*array[3]
i7[13]: top -array[3]*array[5], left -array[4]*array[5]
i8[21]: top  array[2]*array[4], left -array[4]*array[5]

i9[34]: top -array[3]*array[5], left array[3]*array[4]
i10[55]:top -array[5]*array[7], left -array[4]*array[5]
i11[89]:top -array[5]*array[7], left -array[6]*array[7]
i12[144]:top array[4]*array[6], left -array[6]*array[7]

i13[233]:top -array[5]*array[7], left +array[5]*array[6]
i14[377]:top -array[7]*array[9], left -array[6]*array[7]
i15[610]:top -array[7]*array[9], left -array[8]*array[9]
i16[987]:top +array[6]*array[8], left -array[8]*array[9]
//_____________________________________________________
i5[5]: top -array[5-4]*array[5-2],  left +array[5-4]*array[5-3]
i6[8]: top -array[6-3]*array[6-1],  left -array[6-4]*array[6-3]
i7[13]: top -array[7-4]*array[7-2], left -array[7-3]*array[7-2]
i8[21]: top  array[8-6]*array[8-4], left -array[8-4]*array[8-3]

i9[34]: top -array[9-6]*array[9-4],   left array[9-6]*array[9-5]
i10[55]:top -array[10-5]*array[10-3], left -array[10-6]*array[10-5]
i11[89]:top -array[11-6]*array[11-4], left -array[11-5]*array[11-4]
i12[144]:top array[12-8]*array[12-6], left -array[12-6]*array[12-5]

i13[233]:top -array[13-8]*array[13-6],  left +array[13-8]*array[13-7]
i14[377]:top -array[14-7]*array[14-5],  left -array[14-8]*array[14-7]
i15[610]:top -array[15-8]*array[15-6],  left -array[15-7]*array[15-6]
i16[987]:top +array[16-10]*array[16-8], left -array[16-8]*array[16-7]
//___________________________________________________________________
i5[5]: top -array[i-4]*array[i-2],  left +array[i-4]*array[i-3]
i6[8]: top -array[i-3]*array[i-1],  left -array[i-4]*array[i-3]
i7[13]: top -array[i-4]*array[i-2], left -array[i-3]*array[i-2]
i8[21]: top  array[i-6]*array[i-4], left -array[i-4]*array[i-3]

i9[34]: top -array[i-6]*array[i-4], left array[i-6]*array[i-5]
i10[55]:top -array[i-5]*array[i-3], left -array[i-6]*array[i-5]
i11[89]:top -array[i-6]*array[i-4], left -array[i-5]*array[i-4]
i12[144]:top array[i-8]*array[i-6], left -array[i-6]*array[i-5]

i13[233]:top -array[i-8]*array[i-6], left +array[i-8]*array[i-7]
i14[377]:top -array[i-7]*array[i-5], left -array[i-8]*array[i-7]
i15[610]:top -array[i-8]*array[i-6], left -array[i-7]*array[i-6]
i16[987]:top +array[i-10]*array[i-8], left -array[i-8]*array[i-7]

var n = 0;

i5[5]: top -array[i-4-2*n]*array[i-2-2*n],  left +array[i-4-2*n]*array[i-3-2*n]
i6[8]: top -array[i-3-2*n]*array[i-1-2*n],  left -array[i-4-2*n]*array[i-3-2*n]
i7[13]: top -array[i-4-2*n]*array[i-2-2*n], left -array[i-3-2*n]*array[i-2-2*n]
i8[21]: top  array[i-6-2*n]*array[i-4-2*n], left -array[i-4-2*n]*array[i-3-2*n]

*/
 }
}
