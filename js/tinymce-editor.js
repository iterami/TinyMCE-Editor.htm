'use strict';

function repo_init(){
    core_repo_init({
      'beforeunload': {
        'todo': function(){
            var content = tinymce.activeEditor.getContent();
            if(content.length > 0){
                window.localStorage.setItem(
                  'TinyMCE-Editor.htm-content',
                  content
                );

            }else{
                window.localStorage.removeItem('TinyMCE-Editor.htm-content');
            }
        },
      },
      'title': 'TinyMCE-Editor.htm',
    });
    document.body.removeChild(document.getElementById('core-menu'));

    tinymce.init({
      'menubar': false,
      'mode': 'textareas',
      'plugins': 'code link lists print',
      'statusbar': false,
      'toolbar': 'undo redo | bold italic | bullist numlist | link unlink | print code',
      'valid_elements': 'a[href|target],em,li,ol,p,strong,ul',
    });

    resize();
    tinymce.activeEditor.setContent(window.localStorage.getItem('TinyMCE-Editor.htm-content') || '');

    window.onresize = resize;
}

function resize(){
    document.getElementById(document.getElementsByClassName('mce-edit-area')[0].firstChild.id).style.height =
      parseInt(
        window.innerHeight - 55,
        10
      ) + 'px';
}

function core_escape(){}
