// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = $("#hours").val();
        let rate = $("#rate").val();

        // Validate input
        if (hours <= 0 || isNaN(hours)) {
            alert("Please enter a valid positive number for hours.");
            return;
        }

        let total = hours * rate;
        $("#total").text(total.toFixed(2));
    });
});
