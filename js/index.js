var dices = [
    {name: 'Player 1', val: 0},
    {name: 'Player 2', val: 0},
]
function layoutForGrid(number){
    console.log($('.dice-member')[0])
    for (const element of $('.dice-member')) {
        element.className = `col-md-${(number % 3 == 0 || number % 3 == 2)? 4 : 6} dice-member`;
        console.log(element);
    };
}
$(document).ready(function(){

    // Add a dice
    $('#add-dice').click(function(){
        if (dices.length >= 10 ) return;
        dices.push({name: `Player ${dices.length + 1}`, val: 1});
        $('#dice-grid').append(
            `<div class="col-md-6 dice-member">
                <p style="text-align: center;">
                    <input type="text" class="player-name" maxlength="15" placeholder="Player ${dices.length}">  <br>
                    <i class="fa-solid fa-dice-one dice"></i>
                </p>
            </div>`
        );
        layoutForGrid(dices.length);
    })

    // Remove a dice
    $('#remove-dice').click(function(){
        if (dices.length == 2 ) return;
        $('.dice-member')[dices.length - 1].remove();
        dices.pop();
        layoutForGrid(dices.length);
    })

    // TODO: - History on 

    // 
})