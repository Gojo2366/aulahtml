<?php
include './estrutura/topo.php';
include './estrutura/menu.php';
if (isset($_GET['pagina'])) {
    if ($_GET['pagina'] == 1) {
        include './conteudo/indexConteudo.php';
    } else if ($_GET['pagina'] == 2){
        include './conteudo/loginConteudo.php';
        
    } else if ($_GET['pagina'] == 3) {
          include './conteudo/galeriaConteudo.php';
    } else if ($_GET['pagina'] == 4) {
        
    }
    else if ($_GET['pagina'] == 5) {
        include './conteudo/contatoConteudo.php';
    }
}
include './estrutura/rodape.php';
