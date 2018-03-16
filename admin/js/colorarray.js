$( document ).ready(function() {
    function getNewRow() {
        let tpl = '';
        tpl += `
        <div class="form-row" data-grav-array-type="row">
            <input data-grav-array-type="key" value="" placeholder="Class" type="text">
            <div class="g-colorpicker g-colorpicker-array">
                <input data-grav-array-type="value" data-grav-colorpicker='{"update":".g-colorpicker-preview-wrap .g-colorpicker-preview"}' pattern="^#([a-fA-F0-9]{6})|(rgba\(\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])\s*,\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])\s*,\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])\s*,\s*((0.[0-9]+)|(1.00)|1.0|1)\s*\))$" value="" name="" placeholder="Color" type="text">
                    <div class="g-colorpicker-preview-wrap">
                        <div class="g-colorpicker-preview"></div>
                    </div>
            </div>`;

        tpl += `
            <span data-grav-colorarray-action="rem" class="fa fa-minus"></span>
            <span data-grav-colorarray-action="add" class="fa fa-plus"></span>
       </div>`;

        return tpl;
    }
    function getName(container) {
        return container.parent().data('grav-array-name');
    }

    function addAction(element, container) {

        let row = element.closest('[data-grav-array-type="row"]');
        row.after(getNewRow());
    }

    function remAction(element, container) {
        let row = element.closest('[data-grav-array-type="row"]');
        let isLast = !row.siblings().length;

        if (isLast) {
            let newRow = getNewRow();
            row.after(newRow);
            newRow.find('[data-grav-array-type="value"]:last').attr('name', getName(container));
        }

        row.remove();
    }
    function refreshNames(container) {

        let row = container.find('> div > [data-grav-array-type="row"]');
        let inputs = row.find('[name]:not([name=""])');

        inputs.each((index, input) => {
            input = $(input);
            let name = input.attr('name');
            name = name.replace(/\[\d+\]$/, `[${index}]`);
            input.attr('name', name);
        });

        if (!inputs.length) {
            row.find('[data-grav-array-type="value"]').attr('name', getName(container));
        }
    }
    $( "body").on('change._grav_colorpicker','[data-grav-array-type="key"], [data-grav-array-type="value"]', function () {
        let element = $(this);
        let type = element.data('grav-array-type');
        let container = element.parents('[data-grav-array-type="container"]');

        let keyElement = type === 'key' ? element : element.parent().parent().find('[data-grav-array-type="key"]:first');
        let valueElement = type === 'value' ? element : element.siblings('[data-grav-array-type="value"]:first');

        let escaped_name = keyElement.val();
        escaped_name = escaped_name.toString().replace(/\[/g, '%5B').replace(/]/g, '%5D');
        let name = `${getName(container)}[${escaped_name}]`;

        let colorpicker_preview = valueElement.siblings('.g-colorpicker-preview-wrap:first').find('.g-colorpicker-preview');
        colorpicker_preview.css('background-color', valueElement.val());
        valueElement.attr('name', !valueElement.val() ? getName(container) : name);

        refreshNames(container);
    });

    $( "body" ).on('input', '[data-grav-array-type="key"], [data-grav-array-type="value"]',function() {
        let element = $(this);
        let type = element.data('grav-array-type');
        let container = element.parents('[data-grav-array-type="container"]');

        let keyElement = type === 'key' ? element : element.siblings('[data-grav-array-type="key"]:first');
        let valueElement = type === 'value' ? element : element.siblings('.g-colorpicker:first').find('[data-grav-array-type="value"]:first');

        let escaped_name = keyElement.val();
        escaped_name = escaped_name.toString().replace(/\[/g, '%5B').replace(/]/g, '%5D');
        let name = `${getName(container)}[${escaped_name}]`;
        valueElement.attr('name', !valueElement.val() ? getName(container) : name);

        refreshNames(container);
    });

    $( "body" ).on( "click touch", '[data-grav-colorarray-action]:not([data-grav-colorarray-action="sort"])',function() {

        let element = $(this);
        let action = element.data('grav-colorarray-action');
        let container = element.parents('[data-grav-array-type="container"]');

        eval(`${action}Action`)(element, container);

        let siblings = container.find('> div');
        container[siblings.length > 1 ? 'removeClass' : 'addClass']('one-child');

    });
});