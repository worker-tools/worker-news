import * as assets from './assets.ts';
import { default as DeviceDetector } from "device-detector-js"

export async function manifestHandler(request, { waitUntil }) {
  const userAgent = request.headers.get('user-agent');
  const device = userAgent && new DeviceDetector({ skipBotDetection: true }).parse(userAgent);
  const response = await assets.handler(request, { request, waitUntil })
  const manifest = await response.json()

  if (device?.os && manifest.icons?.some(i => !!i.__os)) {
    manifest.icons = manifest.icons?.filter(i => i.__os === device.os?.name || i.__os?.toLowerCase() === 'any')
  } else {
    manifest.icons = manifest.icons?.filter(i => !i.__os || i.__os?.toLowerCase() === 'any');
  }
  manifest.icons = manifest.icons?.map(({ __os, ...props }) => ({ ...props }));

  return new Response(JSON.stringify(manifest, null, 2), response);
}