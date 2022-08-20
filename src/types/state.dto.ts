export interface InitialStateDto {
  BaseInfo: {
    jumpUrl: string;
    title: string;
  };
  // 关注
  'pc-follow-new'?: FollowNew[];
  'h5-follow-new'?: FollowNew[];
  // 抽奖
  'pc-lottery-v3'?: LotteryV3[];
  'h5-lottery-v3'?: LotteryV3[];
  // 追剧/追番
  'pc-follow-origin'?: FollowOrigin[];
  'h5-follow-origin'?: FollowOrigin[];
  // 按钮
  button?: Button[];
  'h5-button'?: Button[];
  'pc-button'?: Button[];
}

export interface FollowNew {
  uid: string;
  uname: string;
  // 显示取消关注（为 true 就是已经关注）
  unfollow: boolean;
}

export interface LotteryV3 {
  lotteryId: string;
  showShare: boolean;
}

export interface FollowOrigin {
  ssids: string;
  unclickable: boolean;
}

export interface Button {
  button_jump_url: string;
}
