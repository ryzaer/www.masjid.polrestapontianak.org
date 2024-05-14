/* snippet/sortable.js */
let url = window.location.href;
if(url.match(/snippet/)){
    /** CUSTOM FUNCTION DRAGGABLE LIST */
    function startListDraggable(propSort,printJson,addBtnName='add item'){
      /* mengaktifkan fungsi sortable */
      var propUID=propSort,
          propAdd=propSort.replace(/[^a-zA-Z0-9]/i,'')+'-add-list',
          sortList =  document.querySelector(propSort);
      new Sortable(sortList, {
        handle: '.handle',
        animation: 100
      });
      /* making button add */
      $(`<div class="mb-2">
      <a href="#" id="${propAdd}" class="btn btn-sm btn-primary"><i class="fa fa-plus"></i>${addBtnName}</a>
  </div>`).insertBefore(propSort);
      /* start jquery handle event for unique id if not set */
      if(!$(propUID).data('unique'))
        $(propUID).attr('data-unique',1);
      /* add auto generate unique id function for each list */
      function generateUID(vars) {
        if(!$(vars).data('id')){
          $(vars).attr('data-id',$(propUID).data('unique')),
          $(propUID).data('unique', $(propUID).data('unique') + 1)
        }
      }
      /* loop untuk menciptakan trigger eksekusi ke server */          
      function sendSortEvnVals(){
        var arrsCode = [],
            valClean,
            exChange,
            idUnique,
            serialize=1;
        /* loop dimana data segera dieksekusi */
        $(`${propSort}\ li input`).get().forEach(vars => {
          /* clean html tags untuk menghindari injeksi */
          valClean = $.trim($(vars).val().replace(/(<([^>]+)>)/ig,''));
          /* make unique id */
          generateUID(vars);
          idUnique = $(vars).data('id');
          if($(vars).data('current') !== valClean){
            $(vars).data('current',valClean),
            exChange = true
          }else{
            exChange = false
          }
          /**
           * semua code pengeksekusian ke server akan bermuara disini.....
          */
          arrsCode.push({serial:serialize,unique:idUnique,change:exChange,vanish:$(vars).data('vanish'),value:valClean}),
          serialize++
        });
        /* hanya sample data output json */
        if(printJson){
          $(printJson).text(JSON.stringify(arrsCode, null, 4))
        }else{
          console.log(arrsCode)
        }
      }
      /* menciptakan event yang fleksibel */  
      function renewEvnSortable(params) { 
        $(`${propSort}\ li`).off('dragend touchend').on('dragend touchend', function(){
          setTimeout(()=>{sendSortEvnVals()},100);
          sortProp = null;
        }),
        $(`${propSort}\ li .sign-close`).off('click').on('click', function(){
          /* memberi status delete untuk siap eksekusi hapus di databse */
          $(this).next('input').data('vanish',true),
          /* update perubahan nilai parameter untuk pengeksekusian */
          sendSortEvnVals(),
          /* menghapus element pada client */
          $(this).parent().fadeOut('slow',function(){ $(this).remove() })
        }),
        $(`${propSort}\ li input`).off('blur touchstart').on('touchstart',function(){
          /* library sortable butuh event ini untuk mobile */
          this.focus();
          this.selectionStart = this.value.length;
          this.selectionEnd = this.value.length;
        }).on('blur',function(){sendSortEvnVals()}).get().forEach(vars => {
          /* awal loop menentukan nilai current utk validasi jika nilai berubah */
          $(vars).attr('data-current',$(vars).val()),
          /* menambahkan parameter vanish untuk mengirim status delete */
          $(vars).attr('data-vanish',false);
          /* make unique id */
          generateUID(vars);
        })
      }
      renewEvnSortable(),
      $(`#${propAdd}`).on('click', function(e){
        e.preventDefault(),
        $(propSort).append('<li><i class="fa fa-arrows handle"></i><i class="fa fa-times sign-close"></i><input type="text" value="new item"></li>'),
        renewEvnSortable()
      })
    }
    startListDraggable('#mylist1','#viewCode1');
    startListDraggable('#mylist2','#viewCode2','add another item');
  }