import ExcoCard from "@/components/ExcoCard"
import PastExcoCard from "@/components/PastExcoCard"
import { Slider } from "@/components/Slider"

const page = () => {
    return (
      <section className="flex flex-col items-center my-4">
        <div id="current" className="text-2xl laptop:text-4xl my-4 py-2 px-8 bg-red-600 bg-opacity-30 text-red-600 font-semibold rounded-lg">Current Executives</div>

        <div className='flex flex-col tablet:flex-row justify-center items-center gap-5 max-w-6xl px-5'>
          <ExcoCard src={"/presentExcos/oluwatimileyin-akinnirun.jpg"} name={'Oluwatimileyin Akinnirun'} post={'President'} className={'tablet:h-96'} className2={'flex tablet:hidden'} />
          <ExcoCard src={'/presentExcos/abiodun-wonderful-olamide.jpg'} name={'Abiodun Wonderful Olamide'} post={'Vice President'} department={'(Political Science & International Relations)'} className={'h-96'} />
          <ExcoCard src={"/presentExcos/oluwatimileyin-akinnirun.jpg"} name={'Oluwatimileyin Akinnirun'} post={'President'} className={'tablet:h-96'} className2={'hidden tablet:flex'} />
          <ExcoCard src={"/presentExcos/aderupoko-temiloluwa-deborah.jpg"} name={'Aderupoko Temiloluwa Deborah'} post={'Vice President'} department={'(Politics & Law)'} className={'h-96'} />
        </div>

        <Slider />

        <div id="past" className="text-2xl laptop:text-4xl my-4 py-2 px-8 bg-red-600 bg-opacity-30 text-red-600 font-semibold rounded-lg">Past Executives</div>

        <div className='grid grid-cols-2 laptop:grid-cols-3 gap-5 px-5'>
          <PastExcoCard src={'/pastExcos/frank-seiyefa-okaikpe.jpg'} name={'Frank Seiyera Okiakpe'} year={'2015 - 2017'} className={'object-contain'} />
          <PastExcoCard src={'/pastExcos/kolapo-joshua.jpg'} name={'Kolapo Joshua'} year={'2017 - 2018'} className={'object-cover'} />
          <PastExcoCard src={'/pastExcos/emmanuel-ochoche.jpeg'} name={'Emmanuel Ochoche'} year={'2020 - 2021'} className={'object-cover'} />
          <PastExcoCard src={'/pastExcos/aborisade-cyril.jpg'} name={'Aborisade Cyril'} year={'2021 - 2022'} className={'object-contain'} />
          <PastExcoCard src={'/pastExcos/chiebuliem-uzoma-nwabike.jpg'} name={'Chiebuliem Uzoma Nwebuike'} year={'2023 -2024'} className={'object-cover'} />
        </div>
      </section>
    )
  }
  
  export default page