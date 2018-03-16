(function($){
    $(function(){
        $('body').on('grav-editor-ready', function() {
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

                            let chart = '<ul id="custom-chooser" class="dropdown-menu flat_design"><li class="grav-editor-button-color js-color"><a data-class="turquoise" style="background-color:#1abc9c" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="green-sea" style="background-color:#16a085" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="emerald" style="background-color:#2ecc71" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="nephritis" style="background-color:#27ae60" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="peter-river" style="background-color:#3498db" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="belize-hole" style="background-color:#2980b9" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="amethyst" style="background-color:#9b59b6" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="wisteria" style="background-color:#8e44ad" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="wet-asphalt" style="background-color:#34495e" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="midnight-blue" style="background-color:#2c3e50" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="sunflower" style="background-color:#f1c40f" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="orange" style="background-color:#f39c12" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="carrot" style="background-color:#e67e22" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="pumpkin" style="background-color:#d35400" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="alizarin" style="background-color:#e74c3c" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="pomegranate" style="background-color:#c0392b" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="clouds" style="background-color:#ecf0f1" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="silver" style="background-color:#bdc3c7" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="concrete" style="background-color:#95a5a6" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="asbestos" style="background-color:#7f8c8d" class="custom-color-btn hint--top"></a></li></ul>';
                            button.append($(chart));
                            $('#custom-chooser').css('width', ($('#custom-chooser').children().length*30)+'px');
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