/**
 * Created by Ferra on 27/10/15.
 */
$(function(){
    var picCount=0;
    var picArray= ["images/profile.jpg"];

    //Initial call to execute the function
    nextPic();

    function nextPic()
    {
        picCount=(picCount+1<picArray.length)? picCount+1 : 0;
        var build='<img src="'+picArray[picCount]+'" />';
        document.getElementById("profilePic").innerHTML=build;
        setTimeout(function(){nextPic();},10000);
    }
});