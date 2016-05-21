$(document).ready(function() {
    var j;
    if(!localStorage['buenas']){
        localStorage['buenas'] = 0;
        localStorage['malas'] = 0;
        localStorage['marca'] = 0;
        j = 0;
        $('#ok').val(localStorage['buenas']);
        $('#mal').val(localStorage['malas']);
    }
    else{
        localStorage['marca']++;
        if(localStorage['marca'] >40){
            alert('Empezamos de nuevo!!');
            localStorage['buenas'] = 0;
            localStorage['malas'] = 0;
            localStorage['marca'] = 0;
        }
        j = localStorage['marca'];
        $('#ok').val(localStorage['buenas']);
        $('#mal').val(localStorage['malas']);
    }
    peru = ['Ana Paula Verme',
        'Joselyn Inga',
        'Antonella Gutierrez',
        'Karen Valdivia',
        'Astrid Cordova',
        'Carmenrosa Arias',
        'Daniela Segura',
        'Diana Santisteban',
        'Emily Elena Vivanco',
        'Gabriela Segura',
        'Genesis Leon',
        'Ingrid Dariana Patiño',
        'Janet Huacahuasi',
        'Jenny Vega',
        'Jesenia Rodríguez',
        'Johana Azañero',
        'Johelyn Cordova',
        'Pierina Acevedo',
        'Karina Prado',
        'Karla Rios',
        'Katherine Llacza',
        'Kiara Esquerra',
        'Lisbeth Balabarca',
        'Lizeth Lopez',
        'Magaly Flores',
        'Maria Cecilia Limay',
        'Maria Victoria Cardenas',
        'Merlin Rupay',
        'Milu Robles',
        'Monica Ccencho',
        'Nayra Pillihuaman',
        'Patricia Arakawa',
        'Reina Torrejón',
        'Rita Ortiz',
        'Sandra Azabache',
        'Sara Nolasco',
        'Sarita Roman',
        'Tania Cuya',
        'Vanessa Alvarado',
        'Vanessa Vargas',
        'Vickensi de la Cruz'];
    var buena;
    var src = 'fotos/peru/'+peru[j]+'.jpg';
    $('#ban1').html('<img class="img-responsive bandera" src="'+src+'">');
    buena = peru[j];

    $('#comprobar').click(function(event) {
        tem = $('#res').val().toLowerCase();
        if(tem.indexOf(buena)>-1){
            alert('success','<strong>BUENA</strong>');
            localStorage['buenas']++;
            clearInterval(inter);
            setTimeout(function(){location.href = 'index.html'},2000);
        }
        else{
            alert('error','NO SABES!!');
        }        
    });
    $('#reset').click(function(event) {
        localStorage['malas']++;
        location.href="index.html";
    });
}); 