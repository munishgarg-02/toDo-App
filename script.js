$(()=>{
    let btnadd = $('#btnadd')
    let btndelete = $('#btndelete')
    let btnreset = $('#btnreset')
    let btnsort = $('#btnsort')
    let inptask = $('#inptask')
    let inpdatetime = $('#inpdatetime')

    function addItems(){
        let item = $('<li>',{
            'class':'list-group-item',
            text: inptask.val() + "( " + inpdatetime.val() + " )"
        })
        $('#ultasks').append(item)
        inptask.val('')
        inpdatetime.val('')
        btnadd.prop('disabled',inptask.val()=='')
    }

    btnadd.click(addItems)

    function clear(){
        inptask.val('')
    }

    btnreset.click(clear)

    inptask.keypress((e)=>{
        if(e.keyCode==13){
            addItems()
        }
    })

    $('#ultasks').click((e)=>{
        $(e.target).toggleClass('toggle')
    })

    btndelete.click(()=>{
        $('li').remove()
    })

    btnsort.click(()=>{
        $('.toggle').appendTo('#ultasks')
    })
})