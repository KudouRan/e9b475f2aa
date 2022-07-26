import { ContentTypeEnum } from '../enums/http.enum';

export const OriginURLs = {
  account: 'https://account.bilibili.com',
  live: 'https://live.bilibili.com',
  space: 'https://space.bilibili.com',
  message: 'https://message.bilibili.com',
  www: 'https://www.bilibili.com',
  manga: 'https://manga.bilibili.com',
};

export const RefererURLs = {
  www: 'https://www.bilibili.com/',
  bigPoint: 'https://big.bilibili.com/mobile/bigPoint',
  bigPointTask: 'https://big.bilibili.com/mobile/bigPoint/task',
  judge: 'https://www.bilibili.com/judgement/',
};

export const baseURLs = {
  account: 'https://account.bilibili.com',
  live: 'https://api.live.bilibili.com',
  api: 'https://api.bilibili.com',
  manga: 'https://manga.bilibili.com',
  vc: 'https://api.vc.bilibili.com',
  liveTrace: 'https://live-trace.bilibili.com',
};

export const defaultHeaders = {
  'user-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36 Edg/101.0.1210.32',
  'content-type': ContentTypeEnum.FORM_URLENCODED,
  'accept-language': 'zh-CN,zh;q=0.9',
  'accept-encoding': 'gzip, deflate, br',
};
