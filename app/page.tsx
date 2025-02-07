import ProjectCard from '@/components/ProjectCard';
import CompanyHero from '@/components/CompanyHero';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'MD',
    description: 'AI驱动,秒变创作神器',
    image: '/images/md_prototype.png',
    link: 'https://magicshadow.xuanyeai.com',
    avatar: '/images/md_avatar.png',
  },
  {
    id: 2,
    title: '换脸数据大屏',
    description: '智能分析换脸数据,助力高效协作',
    image: '/images/bigScreen_prototype.png',
    link: 'https://magicshadow.xuanyeai.com/databoard',
    avatar: '/images/bigScreen_avatar.png',
  },
  {
    id: 3,
    title: '换脸协作平台',
    description: '换脸协作,创意共享平台',
    image: '/images/face_prototype.png',
    link: 'https://magicshadow.xuanyeai.com/face/login',
    avatar: '/images/face_avatar.png',
  },
  {
    id: 4,
    title: 'LIVE2D平台',
    description: '虚拟与现实交汇,互动更智能',
    image: '/images/live2d_prototype.png',
    link: 'https://demo.xuanyeai.com/katong/interact/%E6%88%90%E5%93%81%E7%9A%AE1%E5%8F%B7',
    avatar: '/images/live2d_avatar.png',
  },
  {
    id: 5,
    title: 'AI短剧平台',
    description: '短剧创作革新,AI让故事更精彩',
    image: '/images/shotPlat_prototype.png',
    link: 'http://web.xuanyeai.com/pc/',
    avatar: '/images/shotPlat_avatar.png',
  },
  {
    id: 6,
    title: '数唤',
    description: '智能对话,无限可能',
    image: '/images/chat_prototype.png',
    link: 'https://demo.xuanyeai.com/cga/#/',
    avatar: '/images/chat_avatar.png',
  },
  {
    id: 7,
    title: 'bolo语予',
    description: '智能编辑,打造个性化数字人',
    image: '/images/bobo_prototype.png',
    link: 'https://demo.xuanyeai.com/bobo/',
    avatar: '/images/bobo_avatar.png',
  },
  // {
  //   id: 8,
  //   title: '魔影',
  //   description: 'AI创作新纪元,轻松生成专业内容',
  //   image: '/images/magic_prototype.png',
  //   link: '#',
  // },
];

export default function Home() {
  return (
    <main className="min-h-screen  bg-gradient-to-t from-[#D29FFF] to-[#F5F7FB] via-[#F5F7FB]">
      <header className="flex items-center px-10 py-4 bg-[#E9E9FB]  ">
        <Image src={'/images/logo.png'} alt="logo" width={120} height={10} />
      </header>

      <CompanyHero />

      <section className="container mx-auto px-4 py-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
