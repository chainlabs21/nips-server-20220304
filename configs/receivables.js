const ITEM_SALE_START_PRICE = 100;
const PAYMENT_MEANS_DEF = "USDT";
const PAYMENT_ADDRESS_DEF = "0x34da0872bb4b215345f6e47ed6514d8c4cd5f8e0";
const { net: PAYMENT_NETTYPE_DEF } = require("../configs/net"); // 'ETH_TESTNET'

// const ITEM_SALE_START_PRICE = 100 
// const PAYMENT_MEANS_DEF = 'USDT'
// const PAYMENT_ADDRESS_DEF = '0x34da0872bb4b215345f6e47ed6514d8c4cd5f8e0'
// const PAYMENT_NETTYPE_DEF = 'ETH_TEST NET'

const SALES_ACCOUNT_TICKET = "0xb6d630B3DEeb8B74E743d0a68678933F1fD536Dc";
const SALES_ACCOUNT_NONE_TICKET = "0xaa86CBa96795F21d391F0CB69d9320E9cbdde795";

const PRICE_HIKE_PERCENT = 20;
const PRICE_INCREASE_FACTOR_DEF = "1.12";
const MAX_ROUND_TO_REACH = 17;
module.exports = {
  ITEM_SALE_START_PRICE,
  PAYMENT_MEANS_DEF,
  PAYMENT_ADDRESS_DEF,
  PAYMENT_NETTYPE_DEF,
  PRICE_HIKE_PERCENT,
  PRICE_INCREASE_FACTOR_DEF,

  SALES_ACCOUNT_TICKET,
  SALES_ACCOUNT_NONE_TICKET,
  MAX_ROUND_TO_REACH,
};
