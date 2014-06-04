/**
 * Created by Denys on 04.06.2014.
 */
$(document).ready(function () {

    $('.datepicker').datepicker({
        format: "dd/mm/yyyy"
    });

    $('body').on('click', '[data-toggle="collapse"]', function() {
        console.log(this);
        var _self = $(this);
        var _content = $(_self.attr('data-target'));
        var _originalText = _self.attr('data-text');

        if ( _content.hasClass('in') ) {
            _self.text(_self.attr('data-textexp'));
        } else {
            _self.text(_self.attr('data-text'));
        }
    });

});