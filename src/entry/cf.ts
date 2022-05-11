import 'urlpattern-polyfill' // miniflare only
import 'https://ghuc.cc/worker-tools/location-polyfill/index.ts';
import '../vendor/custom-event-polyfill';
import { router } from '../routes/index';
self.addEventListener('fetch', <any>router);
