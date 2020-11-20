const commander = require('commander');
const GetAndVerify =  require('./getAndVerify.js')
const GetProof =  require('./getProof.js')
const VerifyProof =  require('./verifyProof.js')
const ProofUtil =  require('eth-util-lite') // maybe remove this in future version

module.exports = { GetAndVerify, GetProof, VerifyProof, ProofUtil}



class MyCommand extends commander.Command {
    createCommand(name) {
        const cmd = new MyCommand(name);
        cmd.option('-d,--debug', 'output options');
        return cmd;
    }
}

const program = new MyCommand();
program
    .command('proof')
    .option('-u --url', 'eth server url', 'http://127.0.0.1:8545')
    .option('-n --network <network>', 'eth network', 'dev')
    .option('--hash <tx_hash>', 'tx hash')
    .option('--index <log_index>', 'event log index')
    .action((cmd) => {
        let url
        switch (cmd.network) {
            case 'dev':
                url = 'http://127.0.0.1:8545'
                break;
            case 'test':
                url = 'https://ropsten.infura.io/v3/48be8feb3f9c46c397ceae02a0dbc7ae'
                break
            case 'main':
                url = 'https://mainnet.infura.io/v3/9c7178cede9f4a8a84a151d058bd609c'
                break;
            default:
                url = 'http://127.0.0.1:8545'
        }
        let getProof = new GetProof(url)
        getProof.receiptProof(cmd.hash, cmd.index).then((tx)=>{
            console.log(tx)
        })
    });

program.parse();
