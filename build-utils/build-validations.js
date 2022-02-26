// chalk 4.1.0版才能require 最新版會有es module問題
const chalk = require('chalk');
const ERR_NO_ENV_FLAG = chalk.red(
  `You must pass an --env env flag into your build for webpack to work!`
);

module.exports = {
  ERR_NO_ENV_FLAG,
};
