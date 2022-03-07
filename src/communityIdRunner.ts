const crypto = require('crypto');

export const test1_community_id_v1 = () =>{
  const shasum = crypto.createHash('sha1');
  const buffer = new Uint8Array([0x00, 0x00, 0x0a, 0x01, 0x0c, 0x01, 0x0a, 0x01, 0x0c, 0x02, 0x2e, 0x00]);
  console.log(buffer.buffer);
  shasum.update(buffer);
  return shasum.digest("hex");
}

export const test2_community_id_v1 = () =>{
  const shasum = crypto.createHash('sha1');
  const buffer = new Uint8Array([0x00, 0x00, 0x0a, 0x01, 0x0c, 0x01, 0x0a, 0x01, 0x0c, 0x02, 0x2e, 0x00, 0x00, 0x00, 0x00, 0x00]);
  console.log(buffer.buffer);
  shasum.update(buffer);
  return shasum.digest("hex");
}


console.log(test1_community_id_v1());
console.log(test2_community_id_v1());



