import type { ApiBaseProp } from './bili.dto';

export type TopicRes = ApiBaseProp<{
  topic_card_list: Topiccardlist;
  related_topics: unknown;
}>;

interface Topiccardlist {
  items: Item3[];
  offset: string;
  has_more: boolean;
  topic_sort_by_conf: Topicsortbyconf;
}

interface Topicsortbyconf {
  default_sort_by: number;
  all_sort_by: Allsortby[];
  show_sort_by: number;
}

interface Allsortby {
  sort_by: number;
  sort_name: string;
}

interface Item3 {
  topic_type: string;
  dynamic_card_item: Dynamiccarditem;
}

interface Dynamiccarditem {
  id_str: string;
  type: string;
  visible: boolean;
  topic_id: number;
  basic: Basic;
  modules: Modules;
}

interface Modules {
  module_author: Moduleauthor;
  module_dynamic: Moduledynamic;
  module_stat: Modulestat;
  module_interaction: unknown;
  module_more: Modulemore;
}

interface Modulemore {
  three_point_items: Threepointitem[];
}

interface Threepointitem {
  type: string;
  label: string;
}

interface Modulestat {
  forward: Forward;
  comment: Forward;
  like: Forward;
}

interface Forward {
  count: number;
  forbidden: boolean;
  text: string;
}

interface Moduledynamic {
  desc: Desc;
  major: Major;
  additional?: Additional;
}

interface Additional {
  type: string;
  goods: Goods;
}

interface Goods {
  head_text: string;
  head_icon: string;
  items: Item2[];
}

interface Item2 {
  cover: string;
  name: string;
  brief: string;
  jump_url: string;
  jump_desc: string;
  id: number;
}

interface Major {
  type: string;
  draw: Draw;
}

interface Draw {
  id: number;
  items: Item[];
}

interface Item {
  src: string;
  width: number;
  height: number;
}

interface Desc {
  text: string;
  rich_text_nodes: Richtextnode[];
}

interface Richtextnode {
  text: string;
  orig_text: string;
  type: string;
  jump_url?: string;
  rid?: string;
  icon_url?: string;
  icon_name?: string;
  good?: Good;
}

interface Good {
  type: number;
  text: string;
  jump_url: string;
  icon_url: string;
}

interface Moduleauthor {
  type: string;
  face: string;
  name: string;
  mid: number;
  face_nft: number;
  following: boolean;
  pub_time: string;
  pub_action: string;
  pub_ts: number;
  pendant: Pendant;
  vip: Vip;
  official_verify: Officialverify;
  decorate: Decorate;
  is_top: boolean;
}

interface Decorate {
  id: number;
  type: number;
  name: string;
  card_url: string;
  jump_url: string;
  fan: Fan;
}

interface Fan {
  is_fan: boolean;
  color: string;
  num_str: string;
  number: number;
}

interface Officialverify {
  type: number;
}

interface Vip {
  type: number;
  status: number;
  label: Label;
  due_date: number;
  role: number;
  avatar_subscript: number;
  nickname_color: string;
}

interface Label {
  path: string;
  text: string;
  label_theme: string;
  text_color: string;
  bg_style: number;
  bg_color: string;
  border_color: string;
  use_img_label: boolean;
  img_label_uri_hans: string;
  img_label_uri_hant: string;
  img_label_uri_hans_static: string;
  img_label_uri_hant_static: string;
}

interface Pendant {
  pid: number;
  name: string;
  image: string;
  image_enhance: string;
}

interface Basic {
  rid_str: string;
  comment_type: number;
  comment_id_str: string;
  like_show_icon: Likeshowicon;
}

interface Likeshowicon {
  new_icon_id: number;
  action_url: string;
}
