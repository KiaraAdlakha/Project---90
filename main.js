function add_user()
{
    player1_name=document.getElementById("player_name1").value;
player2_name=document.getElementById("player_name2").value;
console.log(player1_name);
console.log(player2_name);
    console.log(player1_name);
    localStorage.setItem("Player1 Name", player1_name);
    localStorage.setItem("Player2 Name", player2_name);
    window.location="game_page.html";
}