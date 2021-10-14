/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0x6464afe6238740fcf7e44ec466890047fa34a6a893b46f4bb999aaf68fb966d0","balance":"1000000000000000000000"},{"privateKey":"0x5cb3bbac88d4846593c08503a82b4c9da8454bdcd3b1c9474ca4430dd1906d79","balance":"1000000000000000000000"},{"privateKey":"0xb58a115a6f5d66c8ff7c912d3b8d33665ae654eff51d2cb65e49f444bf3f1519","balance":"1000000000000000000000"},{"privateKey":"0x607fe8aad2e15142540af4a04356fb76ed24433f6b19f702fa6c6fe36b27357c","balance":"1000000000000000000000"},{"privateKey":"0x68b61255f5bb06b5cefb2530f76b809d1bd494b0091d6d152ee18c85dc4106e8","balance":"1000000000000000000000"},{"privateKey":"0x64cb7d118162de8d40071df89a74afa0009b4d6d42981d2767a96a9d62e1448f","balance":"1000000000000000000000"},{"privateKey":"0x6b93e595a1318d9b1f7a5325e7c14527821cda26d1adce9b432d63df0f86448d","balance":"1000000000000000000000"},{"privateKey":"0x188c707b8e30ea7b2163f36ce2f206c18d54f0827686be934a80cf55b02d4a34","balance":"1000000000000000000000"},{"privateKey":"0xf08f89c607d13e4aaf6ee2f08f027f37ce257ffe6fa58dc0007989217e9fa0ab","balance":"1000000000000000000000"},{"privateKey":"0x108ade9e2a08512419f1cf56a459f434c1c5df6c7bd72d533e3117266ae06b73","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};