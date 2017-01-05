/*
          JJJJJJJJJJJ     OOOOOOOOO     VVVVVVVV           VVVVVVVV   AAA               NNNNNNNN        NNNNNNNNIIIIIIIIII
          J:::::::::J   OO:::::::::OO   V::::::V           V::::::V  A:::A              N:::::::N       N::::::NI::::::::I
          J:::::::::J OO:::::::::::::OO V::::::V           V::::::V A:::::A             N::::::::N      N::::::NI::::::::I
          JJ:::::::JJO:::::::OOO:::::::OV::::::V           V::::::VA:::::::A            N:::::::::N     N::::::NII::::::II
            J:::::J  O::::::O   O::::::O V:::::V           V:::::VA:::::::::A           N::::::::::N    N::::::N  I::::I  
            J:::::J  O:::::O     O:::::O  V:::::V         V:::::VA:::::A:::::A          N:::::::::::N   N::::::N  I::::I  
            J:::::J  O:::::O     O:::::O   V:::::V       V:::::VA:::::A A:::::A         N:::::::N::::N  N::::::N  I::::I  
            J:::::j  O:::::O     O:::::O    V:::::V     V:::::VA:::::A   A:::::A        N::::::N N::::N N::::::N  I::::I  
            J:::::J  O:::::O     O:::::O     V:::::V   V:::::VA:::::A     A:::::A       N::::::N  N::::N:::::::N  I::::I  
JJJJJJJ     J:::::J  O:::::O     O:::::O      V:::::V V:::::VA:::::AAAAAAAAA:::::A      N::::::N   N:::::::::::N  I::::I  
J:::::J     J:::::J  O:::::O     O:::::O       V:::::V:::::VA:::::::::::::::::::::A     N::::::N    N::::::::::N  I::::I  
J::::::J   J::::::J  O::::::O   O::::::O        V:::::::::VA:::::AAAAAAAAAAAAA:::::A    N::::::N     N:::::::::N  I::::I  
J:::::::JJJ:::::::J  O:::::::OOO:::::::O         V:::::::VA:::::A             A:::::A   N::::::N      N::::::::NII::::::II
 JJ:::::::::::::JJ    OO:::::::::::::OO           V:::::VA:::::A               A:::::A  N::::::N       N:::::::NI::::::::I
   JJ:::::::::JJ        OO:::::::::OO              V:::VA:::::A                 A:::::A N::::::N        N::::::NI::::::::I
     JJJJJJJJJ            OOOOOOOOO                 VVVAAAAAAA                   AAAAAAANNNNNNNN         NNNNNNNIIIIIIIIII
*/
$(document).ready(function() {
  $('.navbar a.dropdown-toggle').on('click', function(e) {
    var $el = $(this);
    var $parent = $(this).offsetParent(".dropdown-menu");
    $(this).parent("li").toggleClass('open');

    if(!$parent.parent().hasClass('nav')) {
        $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
    }

    $('.nav li.open').not($(this).parents("li")).removeClass("open");

    return false;
  });
});  