import { UUID } from 'uuid-class';
import { Base64Encoder, Base64Decoder } from 'base64-encoding';

export function shortenId(uuid?: null): null;
export function shortenId(uuid: UUID): string;
export function shortenId(uuid: UUID | null): string | null;
export function shortenId(uuid?: any): string | null {
  return uuid
    ? new Base64Encoder({ url: true }).encode(uuid)
    : null;
};

export function parseUUID(uuid?: string | null): UUID | null {
  return uuid
    ? uuid.length === 22 || uuid.length == 24 && uuid.endsWith('==')
      ? new UUID(new Base64Decoder().decode(uuid).buffer)
      : new UUID(uuid)
    : null;
}
