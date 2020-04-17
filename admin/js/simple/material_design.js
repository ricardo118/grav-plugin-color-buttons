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

                            let chart = '<ul id="custom-chooser" class="dropdown-menu material_design"><li class="grav-editor-button-color js-color"><a data-class="red" style="background-color:#f44336" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="pink" style="background-color:#e91e63" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="purple" style="background-color:#9c27b0" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="deep-purple" style="background-color:#673ab7" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="indigo" style="background-color:#3f51b5" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="blue" style="background-color:#2196f3" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="light-blue" style="background-color:#03a9f4" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="cyan" style="background-color:#00bcd4" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="teal" style="background-color:#009688" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="green" style="background-color:#4caf50" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="light-green" style="background-color:#8bc34a" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="lime" style="background-color:#cddc39" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="yellow" style="background-color:#ffeb3b" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="amber" style="background-color:#ffc107" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="orange" style="background-color:#ff9800" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="deep-orange" style="background-color:#ff5722" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="brown" style="background-color:#795548" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="grey" style="background-color:#9e9e9e" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="blue-grey" style="background-color:#607d8b" class="custom-color-btn hint--top"></a></li><li class="grav-editor-button-color js-color"><a data-class="white" style="background-color:#ffffff" class="custom-color-btn hint--top"></a></li></ul>';

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
                            if (window.ColorButtonsPlugin.useShortcode) {
                                if (codemirror.getSelection() !== '') {
                                    Instance.buttonStrategies.replaceSelections({
                                        token: '$1',
                                        template: `[cb color=${$this.data("class")}] $1[/cb]`,
                                        codemirror: codemirror
                                    });
                                } else {
                                    Instance.buttonStrategies.replaceLine({
                                        token: '$1',
                                        template: `[cb color=${$this.data("class")}] $1[/cb]`,
                                        codemirror: codemirror
                                    });
                                }
                            } else {
                                Instance.buttonStrategies.replaceLine({
                                    token: '$1',
                                    template: '$1 {.' + $this.data('class') + '}',
                                    codemirror: codemirror
                                });
                            }
                            button.trigger('click.editor.colors');
                            codemirror.focus();
                        });
                    }
                }
            });
        });
    });

})(jQuery);
