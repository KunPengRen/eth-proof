const commander = require("commander");
const GetAndVerify = require("./getAndVerify.js");
const GetProof = require("./getProof.js");
const VerifyProof = require("./verifyProof.js");
const ProofUtil = require("eth-util-lite"); // maybe remove this in future version

module.exports = { GetAndVerify, GetProof, VerifyProof, ProofUtil };

// class MyCommand extends commander.Command {
//   createCommand(name) {
//     const cmd = new MyCommand(name);
//     cmd.option("-d,--debug", "output options");
//     return cmd;
//   }
// }

// const program = new MyCommand();
// program
//   .command("proof")
//   .option("-u --url <url>", "eth server url", "http://127.0.0.1:8545")
//   .option("--hash <tx_hash>", "tx hash")
//   .option("--index <log_index>", "event log index")
//   .action((cmd) => {
//     let getProof = new GetProof(cmd.url);
//     getProof.receiptProof(cmd.hash, cmd.index).then((tx) => {
//       console.log(tx);
//     });
//   });

// program.parse();
