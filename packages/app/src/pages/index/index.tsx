import { View, Text } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import Card from '@/components/Card'
import docter from "@/public/svg/docter.svg"
import './index.less'

const swiperConfig = [
  {
    title:'寻找你的想要的专业医生?',
    docker:{
      name:'王小红',
      displayName:'北京大学外壳医生',
      img:docter
    }
  }
]

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Card swiperConfig={swiperConfig} />
    </View>
  )
}
