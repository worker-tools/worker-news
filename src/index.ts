import { router } from './routes/index';
self.addEventListener('fetch', <any>router.fetchEventCallback);
