import { spotifyPlaylistTracks } from './spotifyTracks';

export type LifeItem = {
  title: string;
  category: string;
  summary: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  coverImage?: string;
  coverAlt?: string;
  spotifyEmbedUrl?: string;
  spotifyUrl?: string;
  tracks?: readonly {
    title: string;
    artist: string;
    duration?: string;
    note?: string;
    tags?: string[];
  }[];
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
    summary: '整理个人做过的软件、小工具、Codex skill、研究代码和开源项目。',
    accent: '代码'
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
      title: 'YJX',
      category: '音乐',
      summary: '我的 Spotify 歌单入口。首屏保留自定义展示，真实播放交给 Spotify；下面会逐步整理常听歌曲和简短备注。',
      tags: ['Spotify', 'Playlist', 'Daily'],
      coverImage: 'https://mosaic.scdn.co/300/ab67616d00001e02384850c46c22b0685d6def6fab67616d00001e02a8fba2c2b6f814544da279d1ab67616d00001e02e192db03c0db78e0eead6114ab67616d00001e02fb3a0ed02a87b110cdb6d391',
      coverAlt: 'Spotify playlist cover for YJX',
      spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/34u7oFUYhJQX4kX4YziEz6?utm_source=oembed',
      spotifyUrl: 'https://open.spotify.com/playlist/34u7oFUYhJQX4kX4YziEz6?si=358a09d682964cad',
      tracks: spotifyPlaylistTracks
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
      title: 'DeskTask',
      category: '桌面软件',
      summary: '一个 Windows 桌面任务面板，基于 PySide6 / Qt 构建，支持紧凑悬浮窗口、任务快速编辑和本地提醒。',
      tags: ['Python', 'PySide6', 'Qt', 'Windows', 'Desktop App'],
      externalLink: 'https://github.com/JunxiangYangyjx/DeskTask'
    },
    {
      title: 'Paper Review Comments Skill',
      category: 'Codex Skill',
      summary: '一个用于辅助论文审稿的 Codex skill，可生成结构化 review data、HTML evidence 页面和英文 copy-ready comments。',
      tags: ['Python', 'HTML', 'Codex Skill', 'Paper Review'],
      externalLink: 'https://github.com/JunxiangYangyjx/codex-paper-review-comments-skill'
    },
    {
      title: 'FEM Simulation of HPT Coupler',
      category: '研究代码',
      summary: '面向 HPT coupler 的 FEM 仿真优化代码，README 中说明了单次仿真测试、Latin hypercube sampling 和 dictionary-based search 三个部分。',
      tags: ['Python', 'MATLAB', 'Ansys', 'FEM', 'Optimization'],
      externalLink: 'https://github.com/JunxiangYangyjx/FEM-Simulation-of-HPT-Coupler-'
    },
    {
      title: 'SPCA Optimization',
      category: '研究代码',
      summary: '用于 SPCA 优化的 FEM simulation based optimization framework，结合 Ansys Maxwell 自动化、pymoo / NSGA-II 和 pyaedt。',
      tags: ['Python', 'pyaedt', 'pymoo', 'NSGA-II', 'Research Software'],
      externalLink: 'https://github.com/JunxiangYangyjx/SPCA-optimization'
    },
    {
      title: 'Personal Website',
      category: '网站项目',
      summary: '这个个人学术、项目与生活展示网站本身，使用 Astro + Tailwind CSS + data files 构建，并通过 GitHub Pages 部署。',
      tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
      externalLink: 'https://github.com/JunxiangYangyjx/JunxiangYangyjx.github.io'
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
