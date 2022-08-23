jQuery(function ($) {
    $('.phone').focus(function () {
        $(this).setCursorPosition(1);
    }).mask('(999) 999-9999', {
        autoclear: false
    });
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

jQuery(function ($) {
    $('#phonePopup').focus(function () {
        $(this).setCursorPosition(1);
    }).mask('+9 (999) 999-9999', {
        autoclear: false
    });
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

jQuery(function ($) {
    $('#phonePopup-zoom').focus(function () {
        $(this).setCursorPosition(1);
    }).mask('+9 (999) 999-9999', {
        autoclear: false
    });
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
jQuery(function ($) {
    $('#phonePopup-whatsapp').focus(function () {
        $(this).setCursorPosition(1);
    }).mask('+9 (999) 999-9999', {
        autoclear: false
    });
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
jQuery(function ($) {
    $('#phonePopup-telegram').focus(function () {
        $(this).setCursorPosition(1);
    }).mask('+9 (999) 999-9999', {
        autoclear: false
    });
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
jQuery(function ($) {
    $('#phonePopup-offers').focus(function () {
        $(this).setCursorPosition(1);
    }).mask('+9 (999) 999-9999', {
        autoclear: false
    });
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

jQuery(function ($) {
    $('#phonePopup-question').focus(function () {
        $(this).setCursorPosition(1);
    }).mask('+9 (999) 999-9999', {
        autoclear: false
    });
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

jQuery(function ($) {
    $('#phonePopup-youtube').focus(function () {
        $(this).setCursorPosition(1);
    }).mask('+9 (999) 999-9999', {
        autoclear: false
    });
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};
