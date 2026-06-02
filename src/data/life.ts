export type LifeItem = {
  title: string;
  category: string;
  summary: string;
  tags: string[];
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
      title: '校园与城市',
      category: '照片墙',
      summary: '首版先用文字占位；后续把照片放入 public/images/gallery 并替换这里的字段。',
      tags: ['Photo', 'City']
    },
    {
      title: '旅行片段',
      category: '照片墙',
      summary: '照片墙建议按年份或主题维护，避免一次性堆太多图片。',
      tags: ['Travel', 'Memory']
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
