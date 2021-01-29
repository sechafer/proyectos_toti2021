//decoficador
var code = 'enterufat soberufat ufatmai penterssoberai baitailhaidoberrai enter voberufat faizenterr menter entersfoberrçair pairai menter toberrnair ufatm enterstufatdaintenter dai tobertimes enter enterntrair nober menterrcaidober denter traibailhober'
var string1 = code.split(' '); 
console.log(string1);
    var string2 = '';
     for (var i = 0; i <= string1.length-1; i++) {
        var word= string1[i];
        console.log(word);
        word=  word.replaceAll('enter','e');       
        word=  word.replaceAll('imes','i');
        word=  word.replaceAll('ai','a');
        word=  word.replaceAll('ufat','u');
        word=  word.replaceAll('ober','o');
        string2 = string2 + ' ' + word;
       }
    
    console.log(string2);