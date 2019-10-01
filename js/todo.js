$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented
        $('#button').click(function () {
            $('ol').append('<li id=' + generateUUID() + ' class="">' +
                '<input name="done-todo" type="checkbox" class="done-todo">' +
                $('.input-text').val() + '</li>');
        });

        $('input[name="done-todo"]').click(function () {
            if ($('input[name="done-todo"].checked')){
                $(this).closest('li').toggleClass('checked');
            } else {
                $(this).closest('li').toggleClass('""');
            }
        });

        $('#filters li a').click(function () {
            $('#filters li a').removeClass('selected');
            $(this).addClass('selected');

            if ($('ul li a[data-filter="active"]')) {
                $('ol li').filter('.checked').hide();
            } else if ($('ul li a[data-filter="complete"]')) {
                $('ol li').filter('.unchecked').hide();
            } else {
                $('ol li').show();
            }
        });
    });