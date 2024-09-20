function skillsMember()
{
    //console.log("skillsMember");
    if (document.getElementById("skillsMember").style.display == "none")
    {
        document.getElementById("skillsMember").style.display = "block";
        document.getElementById("skillsMember").style.position = "absolute";
        document.getElementById("skillsMember").style.left = "0px";
        document.getElementById("skillsMember").style.top = "0px";
    }
    else
    {
        document.getElementById("skillsMember").style.display = "none";
    }
}

