define(['jquery'],function($){var navCover=$('.nav-cover');var qsError=$('.qs-error');$('.modal.modal-qs-search').on('show.bs.modal',function(){navCover.fadeIn();}).on('shown.bs.modal',function(){$('.modal-qs-search input').focus();});$('.modal.modal-qs-search').on('hide.bs.modal',function(){navCover.fadeOut();}).on('hidden.bs.modal',function(event){setTimeout(function(){$('[data-target="#search-modal"]').blur();navCover.fadeOut();qsError.empty();});});var qsForm=$('.modal-qs-search form');var qsFormFilter=$('<input type="hidden" name="filter">');$('.form-search').unbind('keydown').keydown(function(e){var code=e.keyCode||e.which;if(code===40){e.preventDefault();if($('.qs-results a.hovered').length<1){$('.qs-results a').eq(0).addClass('hovered');}else{if($('a.hovered').eq(0).next().hasClass('qs-skip')){$('a.hovered').eq(0).removeClass('hovered').next().next().addClass('hovered');}else{if($('a.hovered').eq(0).next().length<1){return}
$('a.hovered').eq(0).removeClass('hovered').next('a').addClass('hovered');}}}else if(code===38){e.preventDefault();if($('a.hovered').index()==0)return;if($('.qs-results a.hovered').length<1){$('.qs-results a').eq(0).addClass('hovered');}else{if($('a.hovered').eq(0).prev().hasClass('container-fluid')){$('a.hovered').eq(0).removeClass('hovered').prev().prev().addClass('hovered');}else{$('a.hovered').eq(0).removeClass('hovered').prev('a').addClass('hovered');}}}else if(code===13){if($('a.hovered li').length>0){if($('a.hovered li').hasClass('qs-filter')===false){$('.hovered')[0].click();return false}else{$(qsFormFilter).val($('a.hovered li').attr('data-filter'));qsForm.append(qsFormFilter);}}}});$('.qs-filter').on('click',function(){$(qsFormFilter).val($(this).attr('data-filter'));qsForm.append(qsFormFilter).submit();});$('.qs-results a').hover(function(){$('a.hovered').removeClass('hovered');$(this).addClass('hovered');});var form=$('.search-bar');var input=$('.form-search');var errorHTML;input.on('input',function(){if($(this).val().length>1){qsError.empty();$(this).next().children().prop('disabled',false);if($(this).closest('.modal').length>0){$(this).closest('.modal-qs-search').addClass('qs-show-results').addClass('qs-results-pending');}}else{$(this).next().children().prop('disabled',true);if($(this).closest('.modal').length>0){$(this).closest('.modal-qs-search').removeClass('qs-show-results').removeClass('qs-results-pending');}}});form.on('submit',function(e){var inputVal=input.val().replace(/[^a-zA-Z0-9\@\#\%\/\$\!\-\"\.\,\'\s]/g,'');if(inputVal==''||inputVal.length>255){if(inputVal==''){errorHTML='<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="btr bt-times bt-sm"></i></button>Please enter search key words</div>';}else if(inputVal.length>255){errorHTML='<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="btr bt-times bt-sm"></i></button>Search terms cannot exceed 255 characters.</div>';}
qsError.empty();qsError.append(errorHTML);input.focus();e.preventDefault();return false;}});});