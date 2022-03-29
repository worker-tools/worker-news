import { router } from './router';
import './routes/index';
self.addEventListener('fetch', <any>router.fetchEventCallback);
