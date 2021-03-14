require('dotenv').config();
const Web3 = require('web3');

networkNames = ['mainnet', 'ropsten', 'rinkeby', 'kovan', 'goerli'];

networkNames.map((network, index) => {
    const rpcProvider = `https://${networkNames[index]}.infura.io/v3/${process.env.netID}`;
    const web3 = new Web3(rpcProvider);

    // returns the network ID
    web3.eth.net.getId((err, ID) => {
        //(!err) ? console.log(`${network} : ${ID}`) : console.error(err);
    });

    // checks if the node is listening for peers
    web3.eth.net.isListening((err, listening) => {
        //(!err) ? console.log(`${network} is listeing for peers : ${listening}`) : console.error(err);
    });
    
     // returns the number of peers connected to
     web3.eth.net.getPeerCount((err, nbrOfPeers) => {
        //(!err) ? console.log(`${nbrOfPeers} peers are connected to ${network} network`) : console.error(err);
    });
    
    // returns the name of the network the node is connected to
    web3.eth.net.getNetworkType((err, netType) => {
        //(!err) ? console.log(`${network} === ${netType}`) : console.error(err);
    });



    //******************************  all together (just to check to result) *******************************//
    web3.eth.net.getId((err, ID) => {
        if (!err) {
            web3.eth.net.isListening((err, listening) => {
                if (!err) {
                    web3.eth.net.getPeerCount((err, nbrOfPeers) => {
                        if (!err) {
                            web3.eth.net.getNetworkType((err, netType) => {
                                if (!err) {
                                    console.log(
                                        `${network} Id is ${ID}, it has ${nbrOfPeers} peers connected. listenening : ${listening}. ${netType}`
                                    );
                                }
                            });
                        }                        
                    });                   
                }
            });            
        }
    });


});