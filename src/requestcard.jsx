import { Card } from './components/cards/card';
import circletick from './assets/tick-circle.svg';
import timer from './assets/timer.png';
import group from './assets/group.svg';
import star from './assets/star.svg';

function Requestcard() {
  const stats = [
    {
      title: 'Approved requests',
      value: '5450',
      icon: <img src={circletick} alt="Approved" className="w-6 h-6 text-white" />,
      color: 'bg-green-600',
      background: 'bg-[#3B9B7B]'
    },
    {
      title: 'Pending requests',
      value: '178',
      icon: <img src={timer} alt="Pending" className="w-6 h-6" />,
      color: 'bg-purple-600',
      background: 'bg-[#DC6803]'
    },
    {
      title: 'Declined requests',
      value: '34',
      icon: <img src={group} alt="Declined" className="w-6 h-6" />,
      color: 'bg-orange-600',
      background: 'bg-[#5261BC]'
    },
    {
      title: 'New requests',
      value: '156',
      icon: <img src={star} alt="New" className="w-6 h-6 text-white" />,
      color: 'bg-blue-800',
      background: 'bg-[#A35CC5]'
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            title={stat.title}
            icon={stat.icon}
            value={stat.value}
            color={stat.color}
            background={stat.background}
          />
        ))}
      </div>
    </div>
  );
}

export default Requestcard;