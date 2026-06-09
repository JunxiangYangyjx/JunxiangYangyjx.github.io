export type LifeItem = {
  title: string;
  category: string;
  summary: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  externalLink?: string;
};

export const lifeCategories = [
  {
    slug: 'music',
    title: '音乐',
    summary: '记录最近常听的专辑、歌单和现场体验。',
    accent: '听觉'
  },
  {
    slug: 'gallery',
    title: '照片墙',
    summary: '保存旅行、校园、城市和日常片段。',
    accent: '影像'
  },
  {
    slug: 'with-her',
    title: 'With her',
    summary: '单独保存一些两个人一起走过的片段。',
    accent: '陪伴'
  },
  {
    slug: 'games',
    title: '游戏',
    summary: '整理喜欢的游戏、机制、叙事和体验笔记。',
    accent: '互动'
  },
  {
    slug: 'software',
    title: '软件',
    summary: '展示偏个人创作或兴趣驱动的软件、小工具和设计。',
    accent: '创作'
  },
  {
    slug: 'anime',
    title: '动漫',
    summary: '收集推荐作品、短评和个人观看记录。',
    accent: '推荐'
  }
];

export const lifeItems: Record<string, LifeItem[]> = {
  music: [
    {
      title: '最近循环歌单',
      category: '音乐',
      summary: '这里可以放 Spotify、网易云或本地歌单链接，也可以只写简短推荐。',
      tags: ['Playlist', 'Daily']
    },
    {
      title: '值得记录的一张专辑',
      category: '音乐',
      summary: '用 2-3 句话说明为什么喜欢，而不是做完整乐评。',
      tags: ['Album', 'Note']
    }
  ],
  gallery: [
    {
      title: 'NTU 路上的朋友们',
      category: '照片墙',
      summary: '出行路上的合照，适合放在照片墙里作为生活片段。',
      tags: ['Friends', 'NTU', 'Daily'],
      image: '/images/life/gallery/ntu-friends.jpg',
      imageAlt: '朋友们在车上的合照'
    },
    {
      title: 'PolyU 片段',
      category: '照片墙',
      summary: '在香港留下的一张轻松合照，记录一次校园与城市之间的停留。',
      tags: ['Hong Kong', 'PolyU', 'Memory'],
      image: '/images/life/gallery/polyu-dessert.jpg',
      imageAlt: '在餐厅里的合照'
    },
    {
      title: '晚餐合照',
      category: '照片墙',
      summary: '和朋友一起吃饭时随手拍下的日常。',
      tags: ['Dinner', 'Friends', 'Daily'],
      image: '/images/life/gallery/dinner-with-friend.jpg',
      imageAlt: '和朋友晚餐时的合照'
    }
  ],
  'with-her': [
    {
      title: '靠在一起的瞬间',
      category: 'With her',
      summary: '一起拍照时留下的安静片段。',
      tags: ['Memory', 'Together'],
      image: '/images/life/with-her/with-her-wall-heart.jpg',
      imageAlt: '两个人靠在一起的合照'
    },
    {
      title: '海边自拍',
      category: 'With her',
      summary: '有海风和傍晚光线的一张合照。',
      tags: ['Seaside', 'Travel'],
      image: '/images/life/with-her/with-her-seaside.jpg',
      imageAlt: '两个人在海边的自拍'
    },
    {
      title: '比心',
      category: 'With her',
      summary: '很直接也很可爱的留念。',
      tags: ['Together', 'Photo'],
      image: '/images/life/with-her/with-her-heart-pose.jpg',
      imageAlt: '两个人一起比心的合照'
    },
    {
      title: '城市草坪',
      category: 'With her',
      summary: '城市天际线前的一张日常合照。',
      tags: ['City', 'Singapore', 'Memory'],
      image: '/images/life/with-her/with-her-city-lawn.jpg',
      imageAlt: '两个人在城市草坪前的合照'
    }
  ],
  games: [
    {
      title: '喜欢的游戏占位条目',
      category: '游戏',
      summary: '可以记录游戏名、平台、推荐理由、喜欢的机制或截图。',
      tags: ['Game', 'Review']
    },
    {
      title: '机制与叙事笔记',
      category: '游戏',
      summary: '如果你想写得更深入，可以未来扩展成单独详情页。',
      tags: ['Design', 'Story']
    }
  ],
  software: [
    {
      title: 'XPS 上位机软件',
      category: '软件',
      summary: '基于 PyQt5 的 X-ray Photoelectron Spectroscopy 实验操作界面，包含与 FPGA 和 detector 通信的模块。',
      tags: ['PyQt5', 'GUI', 'Research Software']
    },
    {
      title: '科研自动化工作流',
      category: '软件',
      summary: '围绕机器学习和有限元仿真的自动优化流程，用于加速 PCB-based resonator / coupler 设计。',
      tags: ['Automation', 'Simulation', 'Optimization']
    }
  ],
  anime: [
    {
      title: '推荐动漫占位条目',
      category: '动漫',
      summary: '可以写作品名、推荐等级、关键词和一句话短评。',
      tags: ['Anime', 'Recommendation']
    },
    {
      title: '观看记录',
      category: '动漫',
      summary: '生活栏目保持中文即可，不接入局部双语状态。',
      tags: ['Log', 'Personal']
    }
  ]
};
