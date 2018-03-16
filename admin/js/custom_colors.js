(function($){
    $(function(){

        $('body').on('grav-editor-ready', function() {

            let path = window.GravAdmin.config.base_url_simple + '/color-buttons-endpoint';
            function getCustom() {
                return $.ajax({
                    url: path,
                    error: function () {
                        console.log('Could not get Ajax Custom Colors');
                    }
                });
            }
            var Instance = Grav.default.Forms.Fields.EditorField.Instance;

            Instance.addButton({
                colors: {
                    identifier: 'colors',
                    title: 'Colors',
                    label: '<i class="fa fa-fw fa-tint"></i><i class="fa fa-caret-down"></i>',
                    modes: ['gfm', 'markdown'],
                    action: function(_ref) {
                        var codemirror = _ref.codemirror, button = _ref.button, textarea = _ref.textarea, $allSquares;

                        button.on('click.editor.colors', function() {
                            if ($('#custom-chooser').is(':visible')) {
                                $('#custom-chooser').remove();
                                return;
                            }

                            getCustom().done(function(data) {
                                button.append(data);
                                $('#custom-chooser').css('width', ($('#custom-chooser').children().length*30)+'px');
                            });

                        });

                        button.on('mouseover', '.custom-color-btn', function () {
                            var $this = $(this);
                            $this.addClass('highlight');
                        });
                        button.on('mouseout', '.custom-color-btn', function () {
                            var $this = $(this);
                            $this.removeClass('highlight');
                        });

                        button.on('click', '.custom-color-btn', function () {
                            var $this = $(this);

                            $('#custom-chooser').remove();

                            Instance.buttonStrategies.replaceLine({ token: '$1', template: '$1 {.'+$this.data('class')+'}', codemirror: codemirror });
                            button.trigger('click.editor.colors');
                            codemirror.focus();
                        });
                    }
                }
            });
        });
    });

})(jQuery);