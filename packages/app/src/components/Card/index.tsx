import { Image, Swiper, SwiperItem, Text, View } from "@tarojs/components";
import "./index.less";

const Card = ({ swiperConfig }: any) => {
  return (
    <View className='card'>
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        autoplay
      >
        {swiperConfig.map((item,index) => (
          <SwiperItem key={index}>
            <View className='card-swiper-item'>
                    <View className='card-swiper-item__title'>{item.title}</View>
                    <View className='card-swiper-item-info'>
                        <Text className='card-swiper-item-info__name'>{item.docker.name}</Text>
                        <Text className='card-swiper-item-info__displayName'>{item.docker.displayName}</Text>
                    </View>
                    <Image src={item.docker.img} mode='widthFix' svg />
            </View>
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
};
export default Card;
