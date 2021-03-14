import { router } from "../router";

import { news } from './news';
import './item';
import './css';

router.get('/', news);
