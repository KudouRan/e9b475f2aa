import type { ApiBaseProp } from './bili.dto';

export type TopicTopRes = ApiBaseProp<{
  top_details: Topdetails;
  functional_card: Functionalcard;
}>;

interface Functionalcard {
  traffic_card: Trafficcard;
}

interface Trafficcard {
  name: string;
  jump_url: string;
  icon_url: string;
  benefit_point: string;
  card_desc: string;
  jump_title: string;
}

interface Topdetails {
  topic_item: Topicitem;
  topic_creator: Topiccreator;
  operation_content: unknown;
  has_create_jurisdiction: boolean;
  word_color: number;
  close_pub_layer_entry: boolean;
}

interface Topiccreator {
  uid: number;
  face: string;
  name: string;
}

interface Topicitem {
  id: number;
  name: string;
  view: number;
  discuss: number;
  fav: number;
  jump_url: string;
  back_color: string;
  description: string;
  share_pic: string;
  share: number;
  like: number;
  share_url: string;
}
