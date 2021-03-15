import { router } from "../router";

import { news } from './news';

import './item';
import './css';
import './crawl';

router.get('/', news);
