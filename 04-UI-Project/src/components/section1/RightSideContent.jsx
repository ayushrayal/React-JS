import RightCard from './RightCard'
import nehu1 from '../../assets/nehu1.jpg';
import nehu2 from '../../assets/nehu2.jpg';
import nehu3 from '../../assets/nehu3.jpg';
import nehu4 from '../../assets/nehu4.jpg';
import nehu5 from '../../assets/nehu5.jpg';
import nehu6 from '../../assets/nehu6.jpg';

const RightSideContent = () => {
  return (
    <div id='right' className='h-full w-3/4 p-6 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl scroll-smooth'>
      <RightCard h={1} img={nehu1} color="red"/>
      <RightCard h={2} img={nehu2} color="blue"/>
      <RightCard h={3} img={nehu3} color="green"/>
      <RightCard h={4} img={nehu4} color="yellow"/>
      <RightCard h={5} img={nehu5} color="purple"/>
      <RightCard h={6} img={nehu6} color="orange"/>
    </div>
  )
}

export default RightSideContent
