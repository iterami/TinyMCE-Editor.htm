'use strict';

function resize(){
    document.getElementById(document.getElementsByClassName('mce-edit-area')[0].firstChild.id).style.height =
      parseInt(window.innerHeight - 37) + 'px';
}

window.onbeforeunload = function(e){
    var content = tinymce.activeEditor.getContent();
    if(content.length > 0){
        window.localStorage.setItem(
          'TinyMCE-Editor.htm-content',
          content
        );

    }else{
        window.localStorage.removeItem('TinyMCE-Editor.htm-content');
    }
};

window.onload = function(e){
    tinyMCE.init({
      'content_css': 'css/tinymce.css',
      'menubar': false,
      'mode': 'textareas',
      'plugins': 'code link lists print',
      'statusbar': false,
      'toolbar': 'undo redo | bold italic | bullist numlist | link unlink | print code',
      'valid_elements': 'a[href|target],em,li,ol,p,strong,ul',
    });

    resize();
    if(window.localStorage.getItem('TinyMCE-Editor.htm-content') !== null){
        tinymce.activeEditor.setContent(window.localStorage.getItem('TinyMCE-Editor.htm-content'));
    }
};

window.onresize = resize;
