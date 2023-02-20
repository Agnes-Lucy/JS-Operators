//4
let classGroup ="Art";
let generalSubject = "English, Mathematics";
if (classGroup === "Science") {
    console.log ( "Subjects include: " + generalSubject + ", Physics, chemisty, Biology, Technical drawing");
} else if (classGroup === "SocialScience") {
    console.log ("Subjects include : " + generalSubject + ", Accounting, Commerce, Marketing, Geography");
} else if (classGroup === "Art") {
    console.log ("Subjects include : " + generalSubject + ", Government, Economics, Literature, History");
} else {  
    console.log ("Subjects include : " + generalSubject)
}
// Subjects include : English, Mathematics, Government, Economics, Literature, History


let num = 32;
let pwr = 2;
for (let index=2; index < 5; index++)
{ 
  pwr*=index
}
console.log ( "The number " + pwr + " is the power of 2 nearest to " + num )

