const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
  }



  function createTransaction(transaction){
    user.transactions.push(transaction);

    if(transaction.type === "credit"){
        user.balance = user.balance + transaction.value;
    } else{
        user.balance = user.balance - transaction.value;
    }
    
}

 function getHigherTransactionByType(type){
     let higherTransaction;
     let higherValue = 0;

     for(let transaction of user.transactions){
         if(transaction.type == type && transaction.value > higherValue){
             higherValue = transaction.value;
             higherTransaction = transaction;
         }
     }
        return higherTransaction;
 }

 function getAverageTransactionValue(){
     let sum = 0;
     for(let transaction of user.transactions){
         sum = sum + transaction.value
     }
     return sum / user.transactions.length;
 }

 function  getTransactionsCount() {
    let count = {
        credit: 0,
        debit:0
    }
    for(let transaction of user.transactions){
        if(transaction.type === "credit"){
            count.credit ++;
        }else{
            count.debit ++;
        }
    }
    return count; 
}   

 // { credit: 5, debit: 3 }



createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

getHigherTransactionByType('credit') // { type: 'credit', value: 120 }
getHigherTransactionByType('debit') // { type: 'debit', value: 80 }

getAverageTransactionValue() // 70

getTransactionsCount() // { credit: 2, debit: 2 }