<script setup>
import { reactive } from 'vue';
import { TheChessboard } from 'vue3-chessboard';
var state = reactive({
    'movesPairs':[],
});

function handleMove(move){
    console.log(move)

    if(move.color == "w"){
        var movePair = [move,null];
        state.movesPairs.push(movePair);
        console.log(movePair)
        

    }
    else{   
        var arrayLength = state.movesPairs.length;
        movePair = state.movesPairs[arrayLength - 1];
        movePair[1] = move;
        console.log(movePair)
        
    }
    
    
}
</script>
<template>
    <div class = "row">
        <TheChessboard @move="handleMove"/>
        <v-table class = "move-table">
            <thead>
                <tr>
                    <th class = "text-left">
                        Move
                    </th>
                    <th class = "text-left">
                        White
                    </th>
                    <th class = "text-left">
                        Black
                    </th>
                </tr>
            </thead>
            <tbody> 
                <tr v-for="(movesPairs, index) in state.movesPairs">
                    <td>
                        {{index + 1}}
                    </td>
                    <td>
                        {{ movesPairs[0].san }}
                    </td>
                    <td v-if="movesPairs[1]">
                        {{ movesPairs[1].san }}
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
    
    <!-- add the move tracking table right beside this -->
</template>
<style scoped>
    .row {
    display: flex;
    gap: 0px; /* optional spacing */
    }
    .move-table {
    width: auto;       /* don't stretch */
    max-width: 400px;  /* optional limit */
    }
</style>