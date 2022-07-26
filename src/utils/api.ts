import { defaultHeaders, OriginURLs, RefererURLs } from '../constant';
import { createRequest } from './got';

export const defHttp = createRequest({
  headers: {
    'user-agent': defaultHeaders['user-agent'],
    Origin: OriginURLs.www,
    Referer: RefererURLs.www,
  },
});
