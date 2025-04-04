import type { MetaRecord } from 'nextra'
import { TitleBadge } from '@/components/TitleBadge'

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      timestamp: false,
      layout: 'full',
      toc: false,
    },
  },
  introduction: {
    type: 'page',
    title: '글',
    theme: {
      navbar: true,
      toc: false,
    },
  },
  aaa: {
    type: 'page',
    title: '여행',
    theme: {
      navbar: true,
      toc: true,
    },
  },
  examples: {
    title: '일',
    type: 'page',
  },
  upgrade: {
    title: (
      <span className="flex items-center leading-[1]">
        기타
        <TitleBadge />
      </span>
    ),
    type: 'page',
  },
} satisfies MetaRecord
