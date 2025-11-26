import Sidebar from './components/Sidebar';
import OrderCard from './components/OrderCards';
import SearchIcon from '../../assets/Union.svg';
import { useEffect, useState } from 'react';
//import orderApi from '../../services/order'; // FUTURE backend call

export default function TrackOrder() {
  const [orders, setOrders] = useState([]);

  // FUTURE: API will go here
  useEffect(() => {
    async function fetchOrders() {
      try {
        // const response = await orderApi.getAll();
        // setOrders(response.data);

        // TEMPORARY MOCK DATA (frontend-only)
        setOrders([
          {
            number: '006',
            details:
              '2 loads, Fresh & Quick, 0533 Building D Purok African Daisy Barangay...',
            status: 'PENDING',
            statusColor: '#1B1B1B',
          },
          {
            number: '005',
            details:
              '2 loads, Fresh & Quick, 0533 Building D Purok African Daisy Barangay...',
            status: 'ACCEPTED',
            statusColor: '#00C853',
          },
          {
            number: '004',
            details:
              '2 loads, Fresh & Quick, 0533 Building D Purok African Daisy Barangay...',
            status: 'IN PROGRESS',
            statusColor: '#03C75A',
          },
        ]);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#001112] p-[35px]">
      <div className="flex h-[955px] w-[1370px] overflow-hidden rounded-[20px] border border-[#013130] bg-white">
        <Sidebar />

        {/* MAIN CONTENT */}
        <div className="flex-1 pt-[26px] pl-[65px]">
          {/* PAGE TITLE */}
          <h1 className="font-dm text-[48px] font-black tracking-[-0.25px] text-[#1B1B1B]">
            Track Order
          </h1>

          {/* LINE */}
          <div className="mt-[28px] h-[2px] w-[968px] bg-[#CBCBCB]"></div>

          {/* SEARCH BAR — DO NOT MOVE */}
          <div className="relative mt-[18px] ml-[686px] w-[282px]">
            <input
              type="text"
              placeholder="Enter your order #"
              className="font-dm h-[30px] w-full rounded-[3px] border border-[#1B1B1B]/20 bg-white pr-[32px] pl-[10px] text-[14px] placeholder:text-[#BDBDBD]"
            />
            <img
              src={SearchIcon}
              alt="search"
              className="pointer-events-none absolute top-1/2 right-[8px] h-[14px] w-[14px] -translate-y-1/2 opacity-70"
            />
          </div>

          {/* ORDER LIST */}
          <div className="mt-[17px] space-y-[15px]">
            {orders.map((order, idx) => (
              <OrderCard key={idx} {...order} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
