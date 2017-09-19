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

* populateBoard: function
    * arg: 0
        * behavior: Run a loop (increasing) for the number boxes on the board
            * Set the DOM table box (looped) id to the  boardState (looped) box id.
    * purpose: To show the boardState array on the user interface which boxes are null, "x" or "o". Even if the board is is unchanged.