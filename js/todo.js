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
                '<input name="done-todo" type="checkbox" class="done-todo"> <span name="editContent" contenteditable="true">' +
                $('.input-text').val() + '</span> </li>');

            $('.input-text').val('');
        });

        $(document).on('click', 'input[name="done-todo"]', function (event) {
            $(this).parent().toggleClass('checked');
        });

        $('#filters li a').click(function () {
            $('#filters').find('a').removeClass('selected');
            $(this).addClass('selected');

            if ($(this).data('filter') == 'all') {
                $('ol li').show();
            } if ($(this).data('filter') == 'active') {
                $("ol li").filter(".checked").hide();
                $("ol li").not(".checked").show();
            } else if ($(this).data('filter') == 'complete') {
                $("ol li").filter(".checked").show();
                $("ol li").not(".checked").hide();
            }
        });

        $('span[name="editContent"]').on('dblclick', function () {
            $('span[name="editContent"]').on('keypress', function (e) {
                if (e.which == 13) {
                    $('span').attr("contenteditable", false);
                }
            });
        });

        $('span[name="editContent"]').on('blur', function () {
            $('span[name="editContent"]').attr("contenteditable", false);
        });
    });