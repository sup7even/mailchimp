$(document).on('submit', '#mailchimp-form', function (e) {
    'use strict';

    var $this = $(this);
    var url = $this.data('url');

    if (url) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: url,
            data: $this.serialize(),
            dataType: 'html',
            encode: false
        })
            .done(function (data) {
                $('#mailchimp-ajax-response').html(data);
            });
    }
});