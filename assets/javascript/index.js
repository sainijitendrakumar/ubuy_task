function togglePassword(toogleelm, elmId) {
  var attr_type_val = jQuery("#" + elmId).attr("type");
  let attr_type = "text";
  let btn_text = '<em class="fa-regular fa-eye-slash"></em>';
  if (attr_type_val == "text") {
    attr_type = "password";
    btn_text = '<em class="far fa-eye"></em>';
  }
  jQuery("#" + elmId).attr("type", attr_type);
  jQuery(toogleelm).html(btn_text);
}

jQuery("#nav-pass-tab").on("click", function () {
  //login tab
  jQuery("#login-form-btn-div").removeClass("d-none");
  jQuery("#create-form-btn-div").addClass("d-none");
  jQuery(".check-terms").addClass("d-none");
  jQuery("#g-recaptcha-div").removeClass("d-none");
  jQuery("#g-recaptcha-div").addClass("pt-4");
});

jQuery("#nav-otp-tab").on("click", function () {
  // signup tab
  jQuery("#login-form-btn-div").addClass("d-none");
  if (jQuery("#signup-pass-otp-section").hasClass("d-none")) {
    jQuery("#g-recaptcha-div").addClass("d-none");
  } else {
    jQuery("#create-form-btn-div").removeClass("d-none");
    jQuery(".check-terms").removeClass("d-none");
    jQuery("#g-recaptcha-div").removeClass("pt-4");
  }
});
