import RightCard from './RightCard'
import nehu1 from '../../assets/nehu1.jpg';
import nehu2 from '../../assets/nehu2.jpg';
import nehu3 from '../../assets/nehu3.jpg';

const RightSideContent = () => {
  return (
    <div className='h-full w-3/4 p-6 flex justify-between'>
      <RightCard h={1} img={nehu1}/>
      <RightCard h={2} img={nehu2}/>
      <RightCard h={3} img={nehu3}/>
    </div>
  )
}

export default RightSideContent
