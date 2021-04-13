import { seeOther } from "@worker-tools/response-creators";
import { router } from "../router";

import { news } from './news';

import './item';
import './css';
import './crawl';

router.get('/s.gif', () => fetch('https://news.ycombinator.com/s.gif'))
router.get('/grayarrow.gif', () => fetch('https://news.ycombinator.com/grayarrow.gif'))
router.get('/grayarrow2x.gif', () => fetch('https://news.ycombinator.com/grayarrow2x.gif'))
router.get('/newsfaq.html', () => seeOther('https://news.ycombinator.com/newsfaq.html'))
router.get('/newsguidelines.html', () => seeOther('https://news.ycombinator.com/newsguidelines.html'))
router.get('/showhn.html', () => seeOther('https://news.ycombinator.com/showhn.html'))
router.get('/security.html', () => seeOther('https://news.ycombinator.com/security.html'))
router.get('/', news);
