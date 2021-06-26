function show(idd){
    all=document.getElementsByTagName('div');
    for(i=0;i<all.length;i++){
        id=all[i].id;
        document.getElementById(id).style.display="none";
    }
    document.getElementById(idd).style.display="block";
}
function home(){
    all=document.getElementsByTagName('div');
    for(i=0;i<all.length;i++){
        id=all[i].id;
        document.getElementById(id).style.display="none";
    }
    document.getElementById("home").style.display="block";
}

