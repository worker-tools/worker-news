import { router } from "../router";

import './css';

import { news } from './news';
import './item';
import './user';
import './threads';
// import './login';

router.get('/favicon.ico', () => fetch('https://news.ycombinator.com/favicon.ico'))
router.get('/s.gif', () => fetch('https://news.ycombinator.com/s.gif'))
router.get('/y18.gif', () => fetch('https://workers.tools/assets/img/logo_d.png'))
router.get('/grayarrow.gif', () => fetch('https://news.ycombinator.com/grayarrow.gif'))
router.get('/grayarrow2x.gif', () => fetch('https://news.ycombinator.com/grayarrow2x.gif'))
router.get('/hn.js', () => fetch('https://news.ycombinator.com/hn.js'))
router.get('/yc.css', () => fetch('https://news.ycombinator.com/yc.css'))
router.get('/yc500.gif', () => fetch('https://news.ycombinator.com/yc500.gif'))
router.get('/newsfaq.html', () => fetch('https://news.ycombinator.com/newsfaq.html'))
router.get('/newsguidelines.html', () => fetch('https://news.ycombinator.com/newsguidelines.html'))
router.get('/showhn.html', () => fetch('https://news.ycombinator.com/showhn.html'))
router.get('/security.html', () => fetch('https://news.ycombinator.com/security.html'))

router.get('/', news);
