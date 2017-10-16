'use strict';

function resize(){
    document.getElementById(document.getElementsByClassName('mce-edit-area')[0].firstChild.id).style.height =
      parseInt(
        window.innerHeight - 55,
        10
      ) + 'px';
}
