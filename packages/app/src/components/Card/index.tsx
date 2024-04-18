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
        layout-type='transformer' 
        transformer-type='accordion'
      >
        {swiperConfig.map((item,index) => (
          <SwiperItem key={index}>
            <View className='card-swiper-item'>
                   <View className='card-swiper-item-info'>
                    <View className='card-swiper-item-info__title'>{item.title}</View>
                      <View className='card-swiper-item-names'>
                          <View className='card-swiper-item-names__name'>{item.docker.name}</View>
                          <View className='card-swiper-item-names__displayname'>{item.docker.displayName}</View>
                      </View>
                    </View>
                    <View className='card-swiper-item-image'>
                      <Image src={item.docker.img} mode='widthFix' svg />
                    </View>
            </View>
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
};
export default Card;
