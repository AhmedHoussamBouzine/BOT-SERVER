var connection  = require('./db');
const express = require('express');
const app = express();
const WebSocket  =require('ws');
app.listen(5005);

let streams = ["BTC","LTC","ETH","NEO","BNB","QTUM","EOS","SNT","BNT","GAS","USDT","OAX","DNT","OMG","WTC","YOYO",
                           "LRC","TRX","STRAX","FUN","KNC","XVG","IOTA","SNM","LINK","CVC","REP","MDA","MTL","NULS","STX","MTH",
                           "ADX","ETC","ZEC","BAT","DASH","POWR","BTG","REQ","VIB","ENJ","QRK","XRP","KMD","DATA","MANA","GXS",
                           "AMB","BTS","TFUEL","LSK","ADA","XLM","WAVES","WABI","GTO","ICX","ELF","AION","BRD","VIB","LUNA","RLC",
                           "IOST","STEEM","BLZ","SYS","NCASH","ONT","ZIL","XEM","WAN","LOOM","TUSD","ZEN","THETA","IOTX","QKC",
                           "SC","KEY","NAS","MFT","DENT","IQ","ARDR","HOT","VET","DOCK","POLY","VTHO","ONG","PAXG","RVN","DCR",
                           "USDC","MITH","REN","BTTC","USDS","FET","TFUEL","CELR","MATIC","ATOM","PHB","ONE","FTM","CHZ","COS",
                           "ALGO","DOGE","DUSK","ANKR","WIN","COCOS","PERL","TOMO","BUSD","BAND","BEAM","HBAR","XTZ","DGB",
                           "NKN","GBP","EUR","KAVA","ARPA", "JASMY","CTXC","AERGO","BCH","TROY","VITE","AUD","OGN","DREP","EOSBULL",
                           "EOS","TCT","WRX","LTO","MBL","COTI","HIVE","STPT","SOL","CTSI","CHR","BTCUP","BTCDOWN","HNT","JST","FIO",
                           "STMX","MDT","PNT","COMP","IRIS","SXP","SNX","ETHUP","ETHDOWN","ADAUP","ADADOWN","LINKUP","LINKDOWN","DOT",
                           "RUNE","BNBUP","BNBDOWN","AVA","BAL","YFI","SRM","ANT","CRV","SAND","OCEAN","NMR","LUNA","IDEX","RSR","PAXG",
                           "TRB","EGLD","WBTC","KSM","SUSHI","YFII","DIA","BEL","UMA","TRXUP","TRXDOWN","XRPUP","XRPDOWN","DOTUP",
                           "DOTDOWN","NBS","WING","CREAM","UNI","OXT","SUN","AVAX","BURGER","BAKE","FLM","SCRT","XVS","CAKE","SPARTA",
                           "ALPHA","ORN","UTK","NEAR","VIDT","AAVE","FIL","INJ","CTK","EZ","AUDIO","AXS","AKRO","HARD","KP3R","SLP","MIR",
                           "MC","STRAX","UNFI","CVP","FOR","FRONT","ROSE","HEGIC","AAVE","PROM","BETH","SKL","GLM","GHST","DF","JUV","PSG",
                           "GRT","CELO","TWT","REEF","OG","ATM","ASR","1INCH","RIF","BTCST","TRU","DEXE","QI","CKB","FIRO","LIT","PROS","BAR",
                           "SFP","FXS","DODO","AUCTION","UFT","INDEX","MLN","ACM","PHA","TVK","BADGER","FIS","OM","POND","ALICE","DEGO",
                           "BIFI","LINA","UST","BCH","KLAY","QNT","AMP","AR","WAXP","IMX","PEOPLE","SUPER","PLA","YGG","ANY","PYR","API3",
                           "RAY","RGT","FET","ACH","CTSI","WRX","ALCX","BETA","MASK","RAD","POLS","TLM","DAR","CLV","AGLD","FIDA","SFP","FORTH",
                           "ERN","PHA","FARM","DATA","AVA","CHESS","QUICK","RARE","BNX","ALPACA","WNXM","BOND","LOKA","TORN","ALPINE","OOKI",
                           "BRD","RAMP","BEAM","CITY", "AUCTION","LAZIO","PROTO","AUTO","ACM","NAS","SANTOS","NCASH","PHB","ASR","XRP","SAND",
                           "AXS","XMR","FLOW","ONE","GALA","XEC", "CVX","CHZ","DASH","COMP","WAXP","RNDR","ANKR","LPT","GLM","ZRX","SC","ONT",
                           "WOO","STROJ","PERP","DYDX","SPELL","ILV","JSP","FLUX","ENS","C98","MOVR","JOE","PUNDIX","ALCK","RSK","BICO"];


var ws = new WebSocket('wss://stream.binance.com:9443/ws/' + streams.join('usdt@trade/').toLowerCase()+"usdt@trade");


  ws.on('message', (data) => {
    if (data) {
        const coins = JSON.parse(data); 
        let coin = {date :coins.T,price :coins.p,coin :coins.s};
        let sql = 'insert into prices set ?';

         connection.query(sql,coin,(err,result) =>{
            if (err) throw err;
            console.log(result);
    });
    }
  });