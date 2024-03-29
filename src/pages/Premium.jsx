import React, { useState, useRef, useContext } from 'react';
import { Fragment } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import ImageBox from '../common/components/ImageBox';
import PayRadioButton from '../common/components/Button/PayRadioButton';
import { Button } from 'react-native-elements';
import { Image } from 'react-native-elements';
import { PremiumContext } from '../common/contexts/PremiumContext';

export default function Premium() {
  /**
   * 1. 12個月
   * 2. 3個月
   * 3. 1個月
   */
  const [planChoose, setPlanChoose] = useState('2');

  const scrollViewRef = useRef(null);

  // 交易畫面共用資料以及函數
  const {
    translate
  } = useContext(PremiumContext);

  /**
   * 將 ScrollView 滾動到底部。
   */
  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <Fragment>
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
      >
        {/** 圖片 */}
        <Image
          source={require('../../assets/payment.png')}
          style={styles.itemImage}
          onPress={scrollToBottom}
        />
        <View style={styles.container3}>
          {/** 圖片箱 */}
          <ImageBox
            // 營養師安排的飲食計畫
            title={translate('PREMIUM.TITLE.LABEL_1')}
            // 透過進食多樣化、營養居衡的飲食計畫，簡化飲食決策
            content={translate('PREMIUM.CONTENT.LABEL_1')}
            uri='https://media.ct.org.tw/upload/news_article/2023/10/27/653b1d736d0b3_03LB.jpg?wm=LB'
            onPress={scrollToBottom}
          ></ImageBox>
          <ImageBox
            // 建立並安排您的客製化餐點計畫
            title={translate('PREMIUM.TITLE.LABEL_2')}
            // 建立可輕鬆安排至日記中的個人化每週飲食計畫，從而提前計畫您的飲食
            content={translate('PREMIUM.CONTENT.LABEL_2')}
            uri='https://contents.mediadecathlon.com/s815289/k$08e32006b20580421596f059bc1a4ca8/1800x0/3256pt2397/5480xcr4110/alimentation%2520healthy.jpeg?format=auto'
            onPress={scrollToBottom}
          ></ImageBox>
          <ImageBox
            // 將HealthPlan核准的食譜直接紀錄到日記
            title={translate('PREMIUM.TITLE.LABEL_3')}
            // 只須點按幾下，即可將所有可用的食譜記錄到日記，免於手動輸入和計算之麻煩
            content={translate('PREMIUM.CONTENT.LABEL_3')}
            uri='https://coolhealth.sharkcdn.io/blog/thumb_500_b0ba6b640bbe6888bd3ccea319eea2d7bdd3c09b.jpg'
            onPress={scrollToBottom}
          ></ImageBox>
          <ImageBox
            // 追蹤您的飲食方式
            title={translate('PREMIUM.TITLE.LABEL_4')}
            // 建立6種其他餐點類型，並用符合您的飲食方式的獨特標籤來加以自訂
            content={translate('PREMIUM.CONTENT.LABEL_4')}
            uri='https://img.ltn.com.tw/Upload/health/page/800/2023/01/16/php6n2DUU.jpg'
            onPress={scrollToBottom}
          ></ImageBox>
          <ImageBox
            // 追蹤您每日的水分攝取量並設定目標
            title={translate('PREMIUM.TITLE.LABEL_5')}
            // 追蹤您的水分攝取量並自訂飲水目標
            content={translate('PREMIUM.CONTENT.LABEL_5')}
            uri='https://cdn2.ettoday.net/images/5548/d5548114.jpg'
            onPress={scrollToBottom}
          ></ImageBox>
          <ImageBox
            // 複製食品到多天的飲食中，加快食物紀錄速度
            title={translate('PREMIUM.TITLE.LABEL_6')}
            // 複製經常享用的食物到多餐和多天的飲食中，從而節省時間
            content={translate('PREMIUM.CONTENT.LABEL_6')}
            uri='https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2018/05/03/99/4702972.png&x=0&y=0&sw=0&sh=0&exp=3600'
            onPress={scrollToBottom}
          ></ImageBox>
        </View>
        <View style={styles.container2}>
          <View style={styles.container3}>
            {/* 進階版讓您更接近目標 */}
            <Text style={styles.text1}>{translate('PREMIUM.TEXT.LABEL_1')}</Text>
            {/* 在分析數百萬個食物紀錄後，我們發現進階版會員在將進階版功能加入它們的日常活動時，向目標體重接近的成效會高達3倍，而且保持動力的時間會長達兩倍 */}
            <Text style={styles.text2}>{translate('PREMIUM.TEXT.LABEL_2')}</Text>
          </View>
        </View>
        <View style={styles.container3}>
          {/* 升級至進階版，達成健康目標更輕鬆 */}
          <Text style={{ ...styles.text3, textAlign: 'center' }}>{translate('PREMIUM.TEXT.LABEL_3')}</Text>
        </View>
        {/** 付費選項 */}
        <View style={styles.container3}>
          <PayRadioButton
            // 12 個月
            monthText={translate('PREMIUM.MONTH.TWELVE')}
            // $1,440.00
            priceText={translate('PREMIUM.PRICE.PRICE_1')}
            // 省下54%
            savingsText={translate('PREMIUM.SAVINGS.54')}
            recommended={false}
            checked={planChoose == '1'}
            onPress={() => { setPlanChoose('1'); }}
          />
          <PayRadioButton
            // 3 個月
            monthText={translate('PREMIUM.MONTH.THREE')}
            // $580.00
            priceText={translate('PREMIUM.PRICE.PRICE_2')}
            // 省下26%
            savingsText={translate('PREMIUM.SAVINGS.26')}
            recommended={true}
            checked={planChoose == '2'}
            onPress={() => { setPlanChoose('2'); }}
          />
          <PayRadioButton
            // 1 個月
            monthText={translate('PREMIUM.MONTH.ONE')}
            // $240.00
            priceText={translate('PREMIUM.PRICE.PRICE_3')}
            savingsText=''
            recommended={false}
            checked={planChoose == '3'}
            onPress={() => { setPlanChoose('3'); }}
          />
        </View>
        <View style={styles.container4}>
          {/* 向您推薦我們的3個月方案，因為它提供的價格和投入時間都很合理，協助您達成目標。三個月來的持續追蹤與進步會為您提供邁向成功長遠下來所需的動力。 */}
          <Text style={{ ...styles.text4, textAlign: 'center' }}>{translate('PREMIUM.TEXT.LABEL_4')}</Text>
          <View style={styles.container5}>
            <Button
              //購買 X 個月方案
              title={
                translate('PREMIUM.TEXT.PURCHASE') +
                ((planChoose == '1')
                  ? '12'
                  : (planChoose == '2')
                    ? '3'
                    : '1')
                + translate('PREMIUM.TEXT.PLAN')
              }
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
            />
          </View>
          {/* 使用條款 和 隱私權條款 */}
          <Text style={{ ...styles.text4, textAlign: 'center' }}>{translate('PREMIUM.TEXT.LABEL_5')}</Text>
          {/* *我們會使用您Google Play帳號來收取進階版服務的費用，您所選擇的服務方案需要在過期的24小時前取消，否則此方案會自動續約，您能透過您的Google Play帳號來管理您的服務。 */}
          <Text style={{ ...styles.text4, textAlign: 'center' }}>{translate('PREMIUM.TEXT.LABEL_6')}</Text>
        </View>
      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444444',
  },
  container2: {
    backgroundColor: '#886600',
    marginTop: 10,
    paddingVertical: 15,
  },
  container3: {
    padding: 10
  },
  container4: {
    paddingHorizontal: 25,
    paddingVertical: 5
  },
  container5: {
    paddingVertical: 20
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 4
  },
  text2: {
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 4
  },
  text3: {
    fontSize: 25,
    color: '#FFFFFF',
    marginTop: 4,
    fontWeight: 'bold',
  },
  text4: {
    fontSize: 12,
    color: '#AAAAAA',
  },
  button: {
    backgroundColor: '#FFBB00',
    borderRadius: 10,
    height: 50
  },
  buttonText: {
    color: '#000000', // 黑色
    fontWeight: 'bold', // 加粗
    fontSize: 16, // 字体大小
  },
  itemImage: {
    width: '100%',
    height: 250, // Adjust the height based on your preference
    marginBottom: 0,
  },
});