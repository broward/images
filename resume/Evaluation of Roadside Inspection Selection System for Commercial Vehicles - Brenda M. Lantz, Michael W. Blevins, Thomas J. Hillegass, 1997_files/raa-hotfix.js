$('#profile-form .actions.tfa-reset').closest('.input-group').insertBefore('#profile-form .captchaWidget');$('#profile-form .actions.tfa-reset').show();$('#profile-form input.save-profile').val('Update');$('#profile-form .show-change-password.pop-up').text('Change Password');$('label[for="phone\[0\]\.value"]').text("Phone Number:");$('.request-reset-password-form label[for="deb5ec70-6bb3-4cb8-a147-256e153d32c3\.email"], #profile-form label[for="email\[0\]\.value"], .registration label[for="login\.email"]').text("Email Address:");$('.resetPasswordWidget label, .request-reset-password-form label').addClass('required');$('.resetPasswordWidget input.password, .registration input[type="password"]').attr('aria-required','true').attr('aria-describedby','new-password-rules');$('.terms-section .switch').prependTo('.terms-section');$('.personalInformation input').attr('placeholder','');$('.registration .sageUserTitleControl').prependTo('.registration .personalInformation .personal-information');$('#usertitles\\.title option[value=""]').text('Select a title');$('#society-number-hint').insertBefore('input[type="submit"');$('.literatumSocietyAccessWidget input[name="tokenAccess"]').attr('aria-describedby','society-number-hint');$('form input[type="submit"]:disabled').attr('aria-disabled','true');$('form input[type="submit"][aria-disabled="true"]').prop('disabled',false);$('form input[type="submit"]').on('click',function(e){if($(this).attr('aria-disabled')==="true"){e.preventDefault();return false;}
else
return true;});var observer=new MutationObserver(function(mutations){for(var i=0,mutation;mutation=mutations[i];i++){if(mutation.attributeName=='disabled'){$(mutation.target).attr('aria-disabled',(mutation.target.disabled?'true':'false'));}}});if($('form.customAPGPayment input[type="submit"]').length){$('form.customAPGPayment input[type="submit"][aria-disabled="true"]').attr('disabled','disabled');observer.observe($('form.customAPGPayment input[type="submit"]')[0],{attributes:true});}
if($('.tfa-form-container form input[type="submit"]').length){$('.tfa-form-container form input[type="submit"][aria-disabled="true"]').attr('disabled','disabled');observer.observe($('.tfa-form-container form input[type="submit"]')[0],{attributes:true});}
if($('#connect-email-alert form input[type="submit"]').length){$('#connect-email-alert form input[type="submit"][aria-disabled="true"]').attr('disabled','disabled');observer.observe($('#connect-email-alert form input[type="submit"]')[0],{attributes:true});}
if($('.refine-search-panel form input[type="submit"]').length){$('.refine-search-panel form input[type="submit"][aria-disabled="true"]').attr('disabled','disabled');observer.observe($('.refine-search-panel form input[type="submit"]')[0],{attributes:true});}
if($('input#citationSearchSubmitButton[type="submit"]').length){$('input#citationSearchSubmitButton[type="submit"][aria-disabled="true"]').attr('disabled','disabled');observer.observe($('input#citationSearchSubmitButton[type="submit"]')[0],{attributes:true});}
if($('#submitButtons input.submit').length){$('#submitButtons input.submit[aria-disabled="true"]').attr('disabled','disabled');observer.observe($('#submitButtons input.submit')[0],{attributes:true});}
$(function(){$('a.link.show-request-reset-password').off("click");if($('.error-msg').text().length&&$('.error-msg').is(':visible')){$('.error-msg').hide();console.debug('Alert flashed');$('.error-msg').show();}});