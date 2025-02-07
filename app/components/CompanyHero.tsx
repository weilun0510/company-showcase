import Image from 'next/image';

export default function CompanyHero() {
  return (
    <div className="container mx-auto px-4 py-12">
      <a href="https://xuanyeai.com/" target="_blank">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 pr-4 md:pr-20">
            <h1
              className="text-4xl md:text-6xl text-gray-900"
              style={{ lineHeight: '1.2' }}
            >
              杭州轩晔数字科技
              <br />
              有限公司
            </h1>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              轩晔数字科技公司拥有强大的数字视觉制作团队以及国内顶尖商业运营队伍，立志于顶尖CG视觉虚拟数智人技术捆绑人工智能大数据底层架构，触及线上线下以及全新商业运营逻辑开发于一身，囊括尖端技术及头部商业的双重加持，致力于打造成为国内顶尖数字赋能产业升维平台体系第一品牌。
            </p>
            <button className="btn btn-primary px-8 py-3 md:px-12 md:py-4">
              立即前往
            </button>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/hero.png"
              alt="Company Hero"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </a>
    </div>
  );
}
