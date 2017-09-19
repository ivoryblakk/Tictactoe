* nextPlayer: boolean

* boardState: array
    * Intitialized: 9 (null) positions
    * purpose:  To make storage for the boardState        

* play: function
    * arg: 1
        * box:  boardState initialized position
        * behavior: If the boardState box initialized position is null.Then check for second condition, if the nextPlayers turn is true. If true, set selected boardState initialzed box to "x" or else set to "o". Now nextPlayer will be set to false because nextPlayer completed a turn.  This last condition will alert the player "grow up. you can't do that'.  
        * purpose: It's allows the nextPlayer to select a box in the game and not be allowed to have two turns.
