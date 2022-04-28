import 'urlpattern-polyfill' // miniflare only
import '@worker-tools/location-polyfill';
import '../vendor/custom-event-polyfill';
import { router } from '../routes/index';
self.addEventListener('fetch', <any>router);
