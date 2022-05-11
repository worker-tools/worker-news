import 'urlpattern-polyfill' // miniflare only
import '@worker-tools/location-polyfill';
import '../vendor/custom-event-polyfill.ts';
import { router } from '../routes/index.ts';
self.addEventListener('fetch', <any>router);
