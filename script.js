$(()=>{
    let btnadd = $('#btnadd')
    let btndelete = $('#btndelete')
    let btnreset = $('#btnreset')
    let btnsort = $('#btnsort')
    let inptask = $('#inptask')
    let inpdatetime = $('#inpdatetime')

    function addItems(){
        if(inpdatetime.val()==''){
            let item  = $('<li>',{
                'class':'list-group-item bg-transparent',
                text: inptask.val(),
                style: 'font-weight:bold;font-size:large'
            })
            $('#ultasks').append(item)
            inptask.val('')
            inpdatetime.val('')
        }
        else{
            let item  = $('<li>',{
                'class':'list-group-item bg-transparent',
                text: inptask.val() + "( " + inpdatetime.val() + " )",
                style: 'font-weight:bold;font-size:large'
            })
            $('#ultasks').append(item)
            inptask.val('')
            inpdatetime.val('')
        }
    }

    btnadd.click(()=>{
        if(inptask.val()!=''){
            addItems();
        }
        else{
            alert('Enter the task first!')
        }
    })

    function clear(){
        inptask.val('')
    }

    btnreset.click(clear)

    inptask.keypress((e)=>{
        if(inptask.val()!='' && e.keyCode==13){
            addItems()
        }
        else if(e.keyCode==13 && inptask.val()==''){
            alert('Enter the task first!!')
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

    inpdatetime.keypress((e)=>{
        if(e.keyCode==13){
            if(inptask.val()==''){
                alert('Enter the task first!!!')
            }
            else{
                addItems();
            }
        }
    })
})