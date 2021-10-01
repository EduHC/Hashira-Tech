import CryptoJs from 'crypto-js';
import OAuth from 'oauth-1.0a';

export const oauth = new OAuth({
  consumer: {
    key: 'ck_86e9b1f30c5fa23e9d6bc3d0d2148723da384db5',
    secret: 'cs_999af528faff3f7308688b5babb71b91bae96d31'
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
      return CryptoJs.HmacSHA1(base_string, key).toString(CryptoJs.enc.Base64)
  },
  version: '1.0'
});
