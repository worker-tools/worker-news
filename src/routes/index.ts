import { router } from "../router";

import * as assets from './assets';

import { news } from './news';
import './item';
import './user';
import './threads';
// import './login';

router.get('/yc.css', () => fetch('https://news.ycombinator.com/yc.css'))
router.get('/yc500.gif', () => fetch('https://news.ycombinator.com/yc500.gif'))
router.get('/newsfaq.html', () => fetch('https://news.ycombinator.com/newsfaq.html'))
router.get('/newsguidelines.html', () => fetch('https://news.ycombinator.com/newsguidelines.html'))
router.get('/showhn.html', () => fetch('https://news.ycombinator.com/showhn.html'))
router.get('/security.html', () => fetch('https://news.ycombinator.com/security.html'))

router.get('/', news);

router.all('*', assets.handleEvent)
