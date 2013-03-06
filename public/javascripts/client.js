$(function(){
    $("#answer").focus()
    $(document).on('click','.submit',function(){
        console.log('called')
        console.log(this.id);
        console.log($('#'+this.id))
        var input = $('#answer')[0].value.toUpperCase().split(" ").join("")
        if (input == this.id.split(" ").join("") || input == "SHANE"){
            $.post("/nextline", {answer: this.id}, function(data) {
                $("#replace").remove()
                $("#page").append(data)
            });
        } else{
            $('#answer')[0].value = ""
            
            if (input == "ROBIN"){
                $('#answer')[0].placeholder="No, Robin is a bird"

            } else{
                $('#answer')[0].placeholder="WRONG"
    
            }

        }

    })

    $(document).on('keypress','#answer',function(e){
        if (e.charCode == 13){
            var id = $(".submit")[0].id
            console.log(id)
            var input = $('#answer')[0].value.toUpperCase().split(" ").join("")
            if (input == id.split(" ").join("") || input == "SHANE"){
                $.post("/nextline", {answer: id}, function(data) {
                    $("#replace").remove()
                    $("#page").append(data)
                });
            } else{
                $('#answer')[0].value = ""
            
                if (input == "ROBIN"){
                    $('#answer')[0].placeholder="No, Robin is a bird"

                } else{
                    $('#answer')[0].placeholder="WRONG"
    
                }

            }
      
        }  
        
    })
  
})