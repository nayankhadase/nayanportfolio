// for profile button
$(document).ready(
            function() {
                $("#btnnav").click(
                    function() {
                        $("#prop").toggle("slow");
                        $("#iconbtn").toggleClass("fas fa-times");
                        $("#iconbtn").toggleClass("fas fa-bars ");
                        
                    }
                )
                $("#prop").click(
                    function() {
                        $("#prop").toggle("slow");
                        $("#iconbtn").toggleClass("fas fa-times");
                        $("#iconbtn").toggleClass("fas fa-bars ");
                    }
                )

            
    
                $("#about").hover(
                function()
                    {
                        $("#getimg").animate({'width':"0",'width':"335px"},1000);
                        $("#getimg").addClass("img-fluid");
                        
                    }
                )
    
            }
        )