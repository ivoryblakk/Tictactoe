* nextPlayer: boolean true

* boardState: array
    * Intitialized: 9 (null) positions
    * purpose:  To create a board and describe it's state of each box.        

* play: function
    * arg: 1
        * box:  DOM table box id
            * behavior: boardState will use the DOM box id as a position. 
    * behavior: 
        * If the boardState box id position is null.
            * Then check second condition, if the nextPlayers turn is true.If true, set selected boardState box id to "x" or else set to "o". 
            * Now nextPlayer will be set to false because nextPlayer completed a turn. 
        * Or else alert the player "Grow up. You can't do that'. Because the boardState box already has the value "x" or "o". 
    * purpose: It's allows the nextPlayer to select a box in the game and not be allowed to have two turns.
