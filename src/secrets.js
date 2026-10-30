import crypto from 'node:crypto';
export function getEncryptionKey(){
  const explicit=process.env.OPERATOR_ENCRYPTION_KEY||'';
  if(/^[a-f0-9]{64}$/i.test(explicit))return explicit.toLowerCase();
  const source=process.env.BLOB_READ_WRITE_TOKEN||'';
  if(!source)throw new Error('Configure the private Blob store or set OPERATOR_ENCRYPTION_KEY.');
  return Buffer.from(crypto.hkdfSync('sha256',Buffer.from(source),Buffer.from('ai-studio-operator-v1'),Buffer.from('aes-256-gcm'),32)).toString('hex');
}
function keyBytes(value){const key=/^[a-f0-9]{64}$/i.test(value||'')?value:getEncryptionKey();return Buffer.from(key,'hex');}
export function encryptJson(value,secret){const iv=crypto.randomBytes(12);const cipher=crypto.createCipheriv('aes-256-gcm',keyBytes(secret),iv);const data=Buffer.concat([cipher.update(JSON.stringify(value),'utf8'),cipher.final()]);return {version:1,iv:iv.toString('base64'),tag:cipher.getAuthTag().toString('base64'),data:data.toString('base64')};}
export function decryptJson(payload,secret){if(!payload||payload.version!==1||!payload.iv||!payload.tag||!payload.data)return {};const decipher=crypto.createDecipheriv('aes-256-gcm',keyBytes(secret),Buffer.from(payload.iv,'base64'));decipher.setAuthTag(Buffer.from(payload.tag,'base64'));return JSON.parse(Buffer.concat([decipher.update(Buffer.from(payload.data,'base64')),decipher.final()]).toString('utf8'));}
