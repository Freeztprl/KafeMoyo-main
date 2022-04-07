$(document).ready(function () {
    function cekCount() {
        if ($(".count").val() <= 0) {
            $(".minus").prop("disabled", true);
        } else {
            $(".minus").prop("disabled", false);
        }
    }

    cekCount();

    $(document).on("click", ".plus", function () {
        $(".count").val(parseInt($(".count").val()) + 1);
        cekCount();
    });
    $(document).on("click", ".minus", function () {
        $(".count").val(parseInt($(".count").val()) - 1);
        cekCount();
    });
});
