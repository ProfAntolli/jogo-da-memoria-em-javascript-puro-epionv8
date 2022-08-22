const  FRONT  =  "card_front"
const  BACK  =  "card_back"
const  CARD  =  "cartão"
const  ÍCONE  =  "ícone"


deixe  jogos  =  [

    'bootstrap' ,
    'css' ,
    'elétron' ,
    'base de fogo' ,
    'html' ,
    'javascript' ,
    'jquery' ,
    'mongo' ,
    'nó' ,
    'reagir'
]
startJogo ( )

função  startJogo ( ) {
    cards  =  createCards ( jogos )
    shuffleCards ( cartas ) ;
    createDivs ( cartões )
}


função  createDivs ( cartões ) {

    deixe  gameBoard  =  document . getElementById ( "gameBoard" )

    for ( deixe  cartão  de  cartões ) {

        deixe  cardElement  =  document . createElement ( 'div' ) ;
        cardElement . id  =  cartão . identificação ;
        cardElement . classList . adicionar ( CARTÃO ) ;
        cardElement . conjunto de dados . ícone  =  cartão . ícone ;

        createCardContent ( card ,  cardElement )

        cardElement . addEventListener ( 'click' ,  flipCard )
        tabuleiro de jogo . appendChild ( cardElement )
    }
}

function  createCardContent ( card ,  cardElement ) {

    createCardFace ( FRONT ,  card ,  cardElement ) ;
    createCardFace ( BACK ,  card ,  cardElement ) ;
}


function  createCardFace ( face ,  card ,  cardElemnte ) {

    deixe  cardElementFace  =  document . createElement ( 'div' ) ;
    cardElementFace . classList . adicionar ( face ) ;
    if ( face  ==  FRENTE ) {
       deixe  iconElement  =  document . createElement ( 'img' ) ;
       iconElement . classList . adicionar ( ÍCONE )
       iconElement . src  =  "./images/" +  cartão . ícone  +  ".png"
       cardElementFace . appendChild ( iconElement )
    } senão {
        cardElementFace . innerHTML  =  "</>"
    }

    cardElemnte . appendChild ( cardElementFace )
}



função  shuffleCards ( cartas ) {
    deixe  currentIndex  =  cards . comprimento ;
    deixe  randomIndex  =  0 ;

    while  ( currentIndex  !==  0 ) {

        RandomIndex  =  Math . andar ( Math . random ( )  *  currentIndex ) ;
        currentIndex -- ;

        //valores do inversor sem java script
        [ cards [ randomIndex ] ,  cards [ currentIndex ] ]  =  [ cards [ currentIndex ] ,  cards [ randomIndex ] ]
    }

}


função  createCards ( jogos ) {
    deixe  pares  =  [ ]
    deixe  cartões  =  [ ]

    for ( deixe  o jogo  dos  jogos ) {
       pares . push (  createPair ( jogo ) )
    }

 
    cartas  =  pares . mapa plano ( p  =>  p )
     cartões de retorno
}

função  createPair ( jogo ) {

    retornar  [ {
        id : createIdWithGame ( jogo ) ,
        ícone : jogo ,
        invertido : falso
    } ,  {
        id : createIdWithGame ( jogo ) ,
        ícone : jogo ,
        invertido : falso
    } ]

}

função  createIdWithGame ( jogo ) {

    return  game  +  parseInt ( Math . random ( )  *  1000 )
}

função  reiniciar ( ) {

    deixe  gameOver  =  document . getElementById ( "gameOver" ) 
    deixe  cardsFliped  =  document . getElementsByClassName ( "cartão" )
    deixe  gameBoard  =  document . getElementById ( "gameBoard" )

    gameOver . estilo . exibição  =  "nenhum"


   
    for ( let  i  =  0 ;  i  <  cardsFliped . length ;  i ++ ) {

        consola . log ( cardsFliped [ i ] )

        cartões Virados [ i ] . classList  =  "cartão"
    }


    tabuleiro de jogo . innerHTML  =  ''
    startJogo ( )

    //cardsFliped.forEach(card => console.log(card.classList) )
}
