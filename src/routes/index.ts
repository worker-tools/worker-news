import { router } from "../router";

import { news } from './news';

import './item';
import './css';
import './crawl';

// router.get('/newsfaq.html', () => fetch('https://news.ycombinator.com/newsfaq.html'))
router.get('/', news);
