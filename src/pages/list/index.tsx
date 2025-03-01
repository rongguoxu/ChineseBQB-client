import Taro, { useState, useRouter, useShareAppMessage, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtFab } from 'taro-ui'
import { useTypesMap } from '../../utils/hooks'
import BQBItem from '../../components/bqb-item'
import bannerImage from '../../assets/banner.png'
import './index.less'

export default function ListPage() {
  const { params } = useRouter()
  const [isAbort, setIsAbort] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [images, setImages] = useState<string[]>([]);
  const { typesMap } = useTypesMap(false);

  useEffect(() => {
    const { title } = params

    if (title) {
      Taro.setNavigationBarTitle({
        title: decodeURIComponent(title)
      })
    }
  }, [])

  useEffect(() => {
    if (!typesMap) return
    setImages(typesMap[params.key].imgList)
  }, [typesMap])

  useShareAppMessage(() => {
    return {
      title: `开源表情包 - ${params.title}`,
      imageUrl: bannerImage
    }
  })

  const downloadImages = async (index: number = 0) => {
    try {
      const { name } = params
      const src = images[index]
      const nextIndex = index + 1

      Taro.showLoading({ title: `保存第${nextIndex}张中...` })
      const res: any = await Taro.downloadFile({ url: src })
      await Taro.saveImageToPhotosAlbum({ filePath: res.tempFilePath })
      Taro.setStorageSync(`DOWNLOAD ${name}`, nextIndex)

      if (nextIndex < images.length && !isAbort) {
        downloadImages(nextIndex)
      } else {
        setIsDownloading(false)
        setIsAbort(false)
        Taro.showToast({ title: `保存完成！`, duration: 5000 })
        !isAbort && Taro.removeStorageSync(`DOWNLOAD ${name}`)
      }
    } catch (err) {
      setIsDownloading(false)
      Taro.showToast({ title: '请授予保存图片权限', icon: 'none' })
    }
  }

  const handleDownload = async () => {
    const { name } = params

    const { confirm: downloadConfirm } = await Taro.showModal({
      title: '批量下载',
      content: '是否批量下载本类型全部表情包'
    })

    if (!downloadConfirm) return

    setIsDownloading(true)

    const downloadCount = Taro.getStorageSync(`DOWNLOAD ${name}`)

    if (!downloadCount) {
      downloadImages(0)
      return
    }

    const { confirm: continueConfirm } = await Taro.showModal({
      title: '断点下载',
      content: `是否从第 ${downloadCount} 张表情包开始下载`,
      confirmText: '是',
      cancelText: '否'
    })

    if (continueConfirm) {
      downloadImages(downloadCount)
    } else {
      downloadImages(0)
      Taro.removeStorageSync(`DOWNLOAD ${name}`)
    }
  }

  const handleAbort = () => {
    setIsAbort(true)
  }

  const handlePreview = (src) => {
    Taro.previewImage({
      urls: images,
      current: src
    })
  }

  const randomImages = () => {
    setImages([])
    setImages(images.sort(() => (Math.random() > 0.5 ? -1 : 1)))
    Taro.pageScrollTo({ scrollTop: 0 })
    Taro.showToast({ title: '表情包已随机排序', icon: 'none' })
  }

  return (
    <View className='list'>
      {images.map(img => (
        <BQBItem
          key={img}
          src={img}
          showTitle={false}
          onClick={() => handlePreview(img)}
        />
      ))}
      <AtFab
        className="download-btn"
        onClick={isDownloading ? handleAbort : handleDownload}
      >
        {isDownloading
          ? <View className='at-icon at-icon-close' />
          : <View onLongPress={randomImages} className='at-icon at-icon-download' />}
      </AtFab>
    </View>
  )
}

ListPage.config = {
  navigationBarTitleText: '开源表情包'
}
