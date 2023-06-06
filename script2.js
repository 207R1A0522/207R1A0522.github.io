var user_info={name:"",image:"",username:""}
var change_my_pic=function(){
    fetch("https://randomuser.me/api").then((response)=>response.json()).then((data)=>{
        user_info.name=data.results[0].name.first;
        user_info.image=data.results[0].picture.large;
        user_info.username=data.results[0].login.username;
        document.getElementById("my_image").src=user_info.image;
        document.getElementById("my_name").innerHTML=user_info.name;
        document.getElementById("my_designation").innerHTML=user_info.username;
    });
}