
/* ---------------- C L A S S - P A N I E R ---------------- */


export default class Panier {
    constructor(owner, teddies){
        this.owner = owner;
        this.teddies = teddies;
    }
    addItem(teddyId){
        if(!this.teddies[teddyId]){
            this.teddies[teddyId] = 1;
        } else {
            this.teddies[teddyId] += 1;
        }
        // this.teddies[teddy._id] = !this.teddies[teddy._id] ? 1 : this.teddies[teddy._id] + 1;
    }
    removeItem(teddyId){
        this.teddies[teddyId] -= 1;
        if(this.teddies[teddyId] === 0){
            delete this.teddies[teddyId];
        }
    }
}


/* ---------------- 2 N D E - P A N I E R ---------------- */

// export default class Panier {
//     constructor(owner, teddies){
//         this.owner = owner;
//         this.teddies = teddies;
//     }
//     addItem(teddy){
//         if(!this.teddies[teddyId]){
//             this.teddies[teddyId] = 1;
//         } else {
//             this.teddies[teddyId] += 1;
//         }
//         // this.teddies[teddy._id] = !this.teddies[teddy._id] ? 1 : this.teddies[teddy._id] + 1;
//     }
//     removeItem(teddyId){
//         this.teddies[teddyId] -= 1;
//         if(this.teddies[teddyId] === 0){
//             delete this.teddies[teddyId];
//         }
//     }
// }