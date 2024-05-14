/* jika halaman awal terdeteksi */
if($('.home-left').length > 0)
    /*$.getScript("//unpkg.com/scrollreveal").done(function(){
      const sr = ScrollReveal({
          distance: "80px",
          origin: "left",
          duration: 1400,
          opacity: 0,
          delay: 400,
      });
      sr.reveal(".home-left"),
      sr.reveal(".home-right", { delay: 800, origin: "right" }),
      sr.reveal(".hero-polres", { delay: 100, origin: "top" }),
      sr.reveal(".nav-items", { delay: 100, origin: "top" }),
      sr.reveal(".nav-footer", { delay: 100, origin: "bottom" })      
    }),
    */
    /*mengembalikan body ke panjang ukuran layar
    setTimeout(()=>{
        $('body').attr('style','width:100%');
    },1500);
    */

/* jika disetiap halaman ada element html
   yang memiliki property class customDatePicker */
if($('.customDatePicker').length > 0)
    $('.customDatePicker').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        todayHighlight: true
    });
/* fungsi untuk compress gambar */
function imageCompressor(img,$type="image/jpeg",max_height=1440,max_width=2560) { 
    /* default maksimum mengikuti ukuran WQHD
        * lihat disini https://www.studio1productions.com/Articles/16x9-Resolution.htm
        */ 
    var canvas = document.createElement('canvas');
    var width = img.width;
    var height = img.height;
    /* hitung lebar dan tinggi, batasi proporsinya */
    if (width > height) {
        if (width > max_width) {
        /* height *= max_width / width; */
        height = Math.round(height *= max_width / width);
        width = max_width;
        }
    } else {
        if (height > max_height) {
        /* width *= max_height / height; */
        width = Math.round(width *= max_height / height);
        height = max_height;
        }
    }
    /* mengubah ukuran canvas dan menarik data gambar ke dalamnya*/
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
    /* data dari gambar akan terkonversi sebanyak 70% 
        * sesuai dengan mimetype yg di upload
        * defaultnya image/jpeg jika tidak ditentukan
        */
    return canvas.toDataURL($type,0.7); 
} 
/* fungsi untuk mengaktifkan cropperJS */
function getCropperJS(callBack) {
    $.getScript( "https://unpkg.com/cropperjs@1.6.2/dist/cropper.min.js").done(callBack);    
   /*.done(function( script, textStatus ) {
       console.log( `${textStatus} attaching script on '${element}'` );
   }).fail(function( jqxhr, settings, exception ) {
       console.log( `failed to get script on '${element}'` ),
       console.log( exception );
   });*/
}
function openModal() {
    $('#modal-base').modal('show');
}
function openNotify( params ){
    var params = params ? params : {
        title: "Contoh Warning?",
        text: "Contoh Pemberitahuan!",
        type: "warning",
        confirmButtonText : "Ya!",
        cancelButtonText : "Tidak!",
        confirmed : function(isConfirm) {
            if (isConfirm) {
                swal("Contoh sukess!", "pesan sukses, dengan konfirmasi", "success");
            } else {
                swal({
                    title: "Batal!",
                    text: "Pesan batal, menutup setelah 1,5 detik",
                    type: "error",
                    showConfirmButton: false,
                    timer : 1500
                });
            }
        }
    };
    swal({
        title: params.title,
        text: params.text,
        type: params.type,
        showCancelButton: true,
        confirmButtonText: params.confirmButtonText,
        cancelButtonText: params.cancelButtonText,
        closeOnConfirm: false,
        closeOnCancel: false
    },params.confirmed);
}
/* limitasi extensi untuk dokumen */
var mimeTypeDocs = [
    /*ppt,pot,pps,ppa*/
    "application/vnd.ms-powerpoint", 
    /*pptx*/
    "application/vnd.openxmlformats-officedocument.presentationml.presentation", 
    /*xls,xlt,xla*/
    "application/vnd.ms-excel", 
    /*xlsx*/
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", 
    /*doc,rtf*/
    "application/msword", 
    "application/rtf",
    /*docx*/
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
    "application/pdf"
];
/* show hidden body */
$('body').attr('hidden',false);
(function(){
    /*
    masih bug deteksi resize footer
    if($(window).scrollTop() + $(window).height() <= $(document).height()){
        $('.footer').css('position','relative');
    }
    */
    function propagationFooter(){
        if($(window).height() < $('.content').height()+100){
            if($('.footer').hasClass('fixed'))
                $('.footer').removeClass('fixed').addClass('relative');
        }else{
            if($('.footer').hasClass('relative'))
                $('.footer').removeClass('relative').addClass('fixed');
        }
        /* untuk banner */
        if($(window).width() > 960){
            if(!$('#banner-1').is(':visible'))
                $('#banner-1').show();
            if($('#banner-1').is(':visible'))
                $('#banner-2').hide()
        }else{
            if(!$('#banner-2').is(':visible'))
                $('#banner-2').show();
            if($('#banner-1').is(':visible'))
                $('#banner-1').hide()
        }
    }
    propagationFooter();
    $(window).on('resize click scroll', propagationFooter);
})();

