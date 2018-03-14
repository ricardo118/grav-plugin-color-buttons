(function($){
    $(function(){
        $('body').on('grav-editor-ready', function() {
            var Instance = Grav.default.Forms.Fields.EditorField.Instance;
            let replacer = ({ name, replace, codemirror, button, mode = 'replaceSelections', runner }) => {
                button.on(`click.editor.${name}`, () => {
                    Instance.buttonStrategies.replaceLine({ token: '$1', template: replace, codemirror: codemirror });
                    button.trigger('click.editor.colors');
                    codemirror.focus();
                });
            };

            let test = [
                {
                    c1: {
                        identifier: 'c1',
                        label: '',
                        modes: ['gfm', 'markdown'],
                        action({ codemirror, button, textarea }) {
                            replacer({ name: 'c1', replace: '$1 {.color-1}', codemirror, button, mode: 'replaceLine' });
                        }
                    }
                },
                {
                    c2: {
                        identifier: 'c2',
                        label: '',
                        modes: ['gfm', 'markdown'],
                        action({ codemirror, button, textarea }) {
                            replacer({ name: 'c2', replace: '$1 {.color-2}', codemirror, button, mode: 'replaceLine' });
                        }
                    }
                },
                {
                    c3: {
                        identifier: 'c3',
                        label: '',
                        modes: ['gfm', 'markdown'],
                        action({ codemirror, button, textarea }) {
                            replacer({ name: 'c3', replace: '$1 {.color-3}', codemirror, button, mode: 'replaceLine' });
                        }
                    }
                },
                {
                    c4: {
                        identifier: 'c4',
                        label: '',
                        modes: ['gfm', 'markdown'],
                        action({ codemirror, button, textarea }) {
                            replacer({ name: 'c4', replace: '$1 {.color-4}', codemirror, button, mode: 'replaceLine' });
                        }
                    }
                },
                {
                    c5: {
                        identifier: 'c5',
                        label: '',
                        modes: ['gfm', 'markdown'],
                        action({ codemirror, button, textarea }) {
                            replacer({ name: 'c5', replace: '$1 {.color-5}', codemirror, button, mode: 'replaceLine' });
                        }
                    }
                },
                {
                    c6: {
                        identifier: 'c6',
                        label: '',
                        modes: ['gfm', 'markdown'],
                        action({ codemirror, button, textarea }) {
                            replacer({ name: 'c6', replace: '$1 {.color-6}', codemirror, button, mode: 'replaceLine' });
                        }
                    }
                },
                {
                    c7: {
                        identifier: 'c7',
                        label: '',
                        modes: ['gfm', 'markdown'],
                        action({ codemirror, button, textarea }) {
                            replacer({ name: 'c7', replace: '$1  {.color-7}', codemirror, button, mode: 'replaceLine' });
                        }
                    }
                }
            ];

            Instance.addButton({
                colors: {
                    identifier: 'colors',
                    title: 'Colors',
                    label: '<i class="fa fa-fw fa-tint"></i>',
                    modes: ['gfm', 'markdown'],
                    children: test
                }
            });
            console.log(Instance);


        });
    });

})(jQuery);
