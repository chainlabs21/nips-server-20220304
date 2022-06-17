const ITEM_SALE_START_PRICE = 100;
const PAYMENT_MEANS_DEF = "USDT";
const PAYMENT_ADDRESS_DEF = "0x34da0872bb4b215345f6e47ed6514d8c4cd5f8e0";
const { net: PAYMENT_NETTYPE_DEF } = require("../configs/net"); // 'ETH_TESTNET'

// const PAYMENT_ADDRESS_DEF = '0x34da0872bb4b215345f6e47ed6514d8c4cd5f8e0'
// const PAYMENT_NETTYPE_DEF = 'ETH_TEST NET'

const SALES_ACCOUNT_TICKET = "0xdd9938393815bCe3695956CAc73c3123AA1f6b1d";
const SALES_ACCOUNT_NONE_TICKET = "0xa6d9B48b3D869271fF84F9E62B9E48986EE3Aa7b";

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
