import {expectType} from 'tsd';
import requiredFrom from '.';

expectType<String>(requiredFrom());
