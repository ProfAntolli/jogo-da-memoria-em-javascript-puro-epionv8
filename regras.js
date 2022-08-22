deixe  par  =  [ ]

função  flipCard ( )
{
   if (  this . classList . length  ==  1 ) {
 
     if ( par . comprimento  <  2 ) {
    isso . classList . adicionar ( "virar" )
    par . empurre ( isso )

    if ( par . comprimento  >  1 ) {
        setTimeout ( validacao ,  500 )  
    } }
   } senão {
       alert ( "carta já selecionada" )
   }
}

função  validacao ( ) {

    if ( par [ 0 ] . dataset . icon  !=  par [ 1 ] . dataset . icon ) {

        par . forEach ( d  =>  d . classList  =  "cartão" )
    }
    senão {
        jogoVence ( )
    }
    par  =  [ ]

    
}

função  gameWin ( ) {
  deixe  cardsFliped  =  document . getElementsByClassName ( "cartão flip" )
  deixe  gameOver  =  document . getElementById ( "gameOver" ) 
    if ( cardsFliped . length  ==  20 ) {
        gameOver . estilo . exibição  =  "flexível"
        
    }
}
