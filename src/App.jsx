import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Logo from './assets/Logo.png'
import Menu from './components/Menu'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaShoppingCart, FaUndo } from "react-icons/fa";
import { FaSortDown, Fa2 } from "react-icons/fa6";
import { PiVanFill } from "react-icons/pi";
import Heading from './components/Heading'
import Anchor from './components/Anchor'
import ad_1 from './assets/Ad_1.jpg'
import ad_2 from './assets/Ad_2.png'
import ad_3 from './assets/Ad_3.jpg'

function App() {

  return (
    <>
      {/* Header Part Start */}
      <div className='py-[30px] mobile:py-[10px] android:py-[10px] taplet:py-[20px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex>
            <div className='w-LogoW android:w-[18%] mobile:w-[10%]'>
              <Image imgSrc={Logo}/>
            </div>
            <Flex className='w-MenuW android:w-[70%] mobile:w-[90%] pl-8 android:pl-0 mobile:justify-center'>
              <Menu menuName={'Home'} className={'hover:font-bold hover:text-TextHColor'}/>
              <Menu menuName={'Shop'} className={'hover:font-bold hover:text-TextHColor'}/>
              <Menu menuName={'About'} className={'hover:font-bold hover:text-TextHColor'}/>
              <Menu menuName={'Contacts'} className={'hover:font-bold hover:text-TextHColor'}/>
              <Menu menuName={'Journal'} className={'hover:font-bold hover:text-TextHColor'}/>
            </Flex>
          </Flex>
        </Container>
      </div>
      {/* Header Part End */}

      {/* Category Part Start */}
      <div className='bg-CategoryBG py-[30px] border-TextColor border-y mobile:py-[10px] android:py-[10px] taplet:py-[20px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={'items-center'}>
            <Flex className='w-CatW gap-x-2 android:gap-x-1 mobile:gap-x-0'>
            <HiBars3BottomLeft className='text-[20px] android:text-[14px] android:mt-1 mobile:text-[10px] mobile:mt-1'/> <Heading as="h3" className={'text-sm font-dms taplet:text-[10px] text-TextHColor android:text-[8px] mobile:text-[5px] mobile:ml-[2px]'} text={'Shop by Category'} />
          </Flex>
          <div className='w-SearchW android:w-[60%] mobile:w-[50%] mobile:ml-[10px] relative'>
              <input type="text" className='bg-white rounded-lg p-4 mobile:p-[3px] w-full' placeholder='Search Products' />
              <FaSearch className='absolute top-[50%] translate-y-[-50%] right-5 mobile:right-2 mobile:text-[10px]'/>
          </div>
            <div className='w-UserW android:w-[15%]'>
              <Flex className={'justify-end'}>
                <FaUser className='android:text-[15px] mobile:text-[10px]'/>
                <FaSortDown className='mr-8 pb-1 android:mr-4 mobile:mr-3 mobile:text-[10px]'/>
                <FaShoppingCart className='android:text-[15px] mobile:text-[10px]'/>
              </Flex>
          </div>
          </Flex>
        </Container>
      </div>
      {/* Category Part End */}

      {/* Banner Part Start */}
      <div className='bg-BannerBG'>
        <Container className={'max-w-headerContainer'}>
          <Anchor href={'#'}>
          <div className='bg-Bannerimg bg-no-repeat bg-center bg-cover py-[220px] laptop:py-[167px] taplet:py-[130px] android:py-[93px] mobile:py-[54px]'></div>
          </Anchor>
        </Container>
      </div>
      {/* Banner Part End */}

      {/* Information Part Start */}
      <div className='py-[30px] android:py-[10px] taplet:py-[20px] mobile:py-[10px] border-BorderInfoColor border-y'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={'items-center justify-between'}>
            <Flex className={'w-[15%]'}>
              <Fa2 className='mr-2 text-[25px] android:text-[15px] mobile:text-[10px] mobile:mr-[3px]'/><Heading as='h4' text='Two years warranty' className='font-dms text-[16px] text-InformationColor android:text-[12px] mobile:text-[6px]'/>
            </Flex>
            <Flex className={'w-[70%] justify-center'}>
              <PiVanFill className='mr-3 text-[25px] android:text-[15px] mobile:text-[10px] mobile:mr-[3px]'/><Heading as='h4' text='Free shipping' className='font-dms text-[16px] text-InformationColor android:text-[12px] mobile:text-[6px]'/>
            </Flex>
            <Flex className={'w-[15%] justify-end'}>
              <FaUndo className='mr-3 text-[25px] taplet:text-[18px] android:text-[15px] mobile:text-[10px] mobile:mr-[3px]'/><Heading as='h4' text='Return policy in 30 days' className='font-dms text-[16px] text-InformationColor android:text-[10px] mobile:text-[6px]'/>
            </Flex>
          </Flex>
        </Container>
      </div>
      {/* Information Part End */}

      {/* Ads Part Start */}
      <div className='py-[80px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={'justify-between'}>
            <div className='w-[49%]'>
            <img src={ad_1} alt={'ad_1'} />
            </div>
            <div className='w-[49%]'>
              <img src={ad_2} alt={'ad_2'} />
              <img src={ad_3} alt={'ad_3'} className='mt-[31px]' />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Ads Part End */}
    </>
  )
}

export default App