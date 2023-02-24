$(document).ready(function () {
    let feedback = null;

    $("#kotu, #orta, #iyi").click(function () {
        for (let i = 0; i < $('.feedback-icons').children().length; i++) {
            if ($('.feedback-icons').children()[i].id == $(this)[0].id) {
                $(this).addClass('bg-body-secondary').addClass('rounded');
                feedback = $(this)[0].id;
            } else {
                $('.feedback-icons').children()[i].classList.remove('bg-body-secondary');
                $('.feedback-icons').children()[i].classList.remove('rounded');
            }
        }
    });

    $("#degerlendirBtn").click(function () {
        if (feedback) {
            $('#feedback-container').html(
            `
            <div class="icon"><i style="color: red; font-size: 7rem;" class="fa-solid fa-heart"></i></div>
            <div class="feedbackres-body"><h3 class="fw-bolder fs-3">Geri bildiriminizi aldık. (`+ (feedback.charAt(0).toUpperCase() + feedback.slice(1)) + `)</h3></div>
            <div class="feedbackres-body"><h3 class="fw-normal fs-5">Geri bildiriminizi kendimizi geliştirmek için kullanacağız.</h3></div>
            `);
        } else {
            alert(false);
        }
    });
});