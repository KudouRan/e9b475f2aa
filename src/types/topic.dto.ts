import type { ApiBaseProp } from './bili.dto';

export type TopicRes = ApiBaseProp<{
  related_topics: Relatedtopics;
  topic_card_list: Topiccardlist;
}>;

interface Topiccardlist {
  has_more: boolean;
  items: Item2[];
  offset: string;
  topic_sort_by_conf: Topicsortbyconf;
}

interface Topicsortbyconf {
  all_sort_by: Allsortby[];
  default_sort_by: number;
  show_sort_by: number;
}

interface Allsortby {
  sort_by: number;
  sort_name: string;
}

interface Item2 {
  dynamic_card_item: Dynamiccarditem;
  topic_type: string;
}

interface Dynamiccarditem {
  basic: Basic;
  id_str: string;
  modules: Modules;
  type: string;
  visible: boolean;
}

interface Modules {
  module_author: Moduleauthor;
  module_dynamic: Moduledynamic;
  module_more: Modulemore;
  module_stat: Modulestat;
}

interface Modulestat {
  comment: Comment;
  forward: Comment;
  like: Like;
}

interface Like {
  count: number;
  forbidden: boolean;
  status: boolean;
}

interface Comment {
  count: number;
  forbidden: boolean;
}

interface Modulemore {
  three_point_items: Threepointitem[];
}

interface Threepointitem {
  label: string;
  type: string;
}

interface Moduledynamic {
  additional?: Additional;
  desc?: any;
  major: Major;
  topic?: any;
}

interface Major {
  opus: Opus;
  type: string;
}

interface Opus {
  fold_action: string[];
  jump_url: string;
  pics: Pic[];
  summary: Summary;
  title?: any;
}

interface Summary {
  rich_text_nodes: Richtextnode[];
  text: string;
}

interface Richtextnode {
  orig_text: string;
  text: string;
  type: string;
  jump_url?: string;
  rid?: string;
  emoji?: Emoji;
  goods?: Goods2;
  icon_name?: string;
}

interface Goods2 {
  jump_url: string;
  type: number;
}

interface Emoji {
  icon_url: string;
  size: number;
  text: string;
  type: number;
}

interface Pic {
  height: number;
  size: number;
  url: string;
  width: number;
}

interface Additional {
  goods?: Goods;
  type: string;
  upower_lottery?: Upowerlottery;
}

interface Upowerlottery {
  button: Button;
  desc: Desc;
  hint: Hint;
  jump_url: string;
  rid: number;
  state: number;
  title: string;
  up_mid: number;
  upower_action_state: number;
}

interface Hint {
  style: number;
  text: string;
}

interface Desc {
  jump_url: string;
  style: number;
  text: string;
}

interface Button {
  check: Check;
  status: number;
  type: number;
}

interface Check {
  disable: number;
  icon_url: string;
  text: string;
  toast: string;
}

interface Goods {
  head_icon: string;
  head_text: string;
  items: Item[];
  jump_url: string;
}

interface Item {
  brief: string;
  cover: string;
  id: string;
  jump_desc: string;
  jump_url: string;
  name: string;
  price: string;
}

interface Moduleauthor {
  avatar: Avatar;
  face: string;
  face_nft: boolean;
  following?: any;
  jump_url: string;
  label: string;
  mid: number;
  name: string;
  official_verify: Officialverify;
  pendant: Pendant;
  pub_action: string;
  pub_location_text: string;
  pub_time: string;
  pub_ts: number;
  type: string;
  vip: Vip;
}

interface Vip {
  avatar_subscript: number;
  avatar_subscript_url: string;
  due_date: number;
  label: Label;
  nickname_color: string;
  status: number;
  theme_type: number;
  type: number;
}

interface Label {
  bg_color: string;
  bg_style: number;
  border_color: string;
  img_label_uri_hans: string;
  img_label_uri_hans_static: string;
  img_label_uri_hant: string;
  img_label_uri_hant_static: string;
  label_theme: string;
  path: string;
  text: string;
  text_color: string;
  use_img_label: boolean;
}

interface Pendant {
  expire: number;
  image: string;
  image_enhance: string;
  image_enhance_frame: string;
  n_pid: number;
  name: string;
  pid: number;
}

interface Officialverify {
  desc: string;
  type: number;
}

interface Avatar {
  container_size: Containersize;
  fallback_layers: Fallbacklayers;
  layers: Layer3[];
  mid: string;
}

interface Layer3 {
  is_critical_group?: boolean;
  layers: Layer2[];
}

interface Layer2 {
  general_spec: Generalspec;
  layer_config: Layerconfig;
  resource: Resource2;
  visible: boolean;
}

interface Resource2 {
  res_image?: Resimage;
  res_type: number;
  res_animation?: Resanimation;
}

interface Resanimation {
  webp_src: Webpsrc;
}

interface Webpsrc {
  remote: Remote;
  src_type: number;
}

interface Fallbacklayers {
  is_critical_group: boolean;
  layers: Layer[];
}

interface Layer {
  general_spec: Generalspec;
  layer_config: Layerconfig;
  resource: Resource;
  visible: boolean;
}

interface Resource {
  res_image: Resimage;
  res_type: number;
}

interface Resimage {
  image_src: Imagesrc;
}

interface Imagesrc {
  placeholder?: number;
  remote?: Remote;
  src_type: number;
  local?: number;
}

interface Remote {
  bfs_style: string;
  url: string;
}

interface Layerconfig {
  is_critical?: boolean;
  tags: Tags;
}

interface Tags {
  AVATAR_LAYER?: Relatedtopics;
  GENERAL_CFG?: GENERALCFG;
  PENDENT_LAYER?: Relatedtopics;
  ICON_LAYER?: Relatedtopics;
}

interface GENERALCFG {
  config_type: number;
  general_config: Generalconfig;
}

interface Generalconfig {
  web_css_style: Webcssstyle;
}

interface Webcssstyle {
  borderRadius: string;
  'background-color'?: string;
  border?: string;
  boxSizing?: string;
}

interface Generalspec {
  pos_spec: Posspec;
  render_spec: Renderspec;
  size_spec: Containersize;
}

interface Renderspec {
  opacity: number;
}

interface Posspec {
  axis_x: number;
  axis_y: number;
  coordinate_pos: number;
}

interface Containersize {
  height: number;
  width: number;
}

interface Basic {
  comment_id_str: string;
  comment_type: number;
  jump_url: string;
  like_icon: Likeicon;
  rid_str: string;
}

interface Likeicon {
  action_url: string;
  end_url: string;
  id: number;
  start_url: string;
}

interface Relatedtopics {}
