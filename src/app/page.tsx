import Image from "next/image";
import Benefit from "./components/benefit";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   p-[30px] bg-gray-200 lg:items-center">
      <div className="lg:w-[960px]">
        <h1 className="text-center font-black text-5xl text-gray-600 pb-5">
          BucketList
        </h1>
        <h3 className="text-xl font-bold pb-3 text-center">
          Premium Membership Plan
        </h3>
        <p className=" text-center">Choose the plan that fits your needs</p>

        <div className="w-full grid pt-10 gap-6 md:grid-cols-3 lg:grid-cols-3">
          <div className="card bg-white p-4 rounded-md">
            <h3>Basic Plan</h3>
            <h1 className="font-black text-gray-600 text-4xl py-8">
              $9.99<span className="text-xl ml-2">/month</span>
            </h1>
            <div className="benefits">
              <ul>
                <Benefit benefit="Access to essential features" />
                <Benefit benefit="Limited support via email" />
                <Benefit benefit="Suitable for individuals and hobbyists" />
                <Benefit benefit="Access to essential features" />
              </ul>
            </div>
          </div>
          <div className="card bg-white p-4 rounded-md">
            <h3>Standard Plan</h3>
            <h1 className="font-black text-gray-600 text-4xl py-8">
              $19.99<span className="text-xl ml-2">/month</span>
            </h1>
            <div className="benefits">
              <ul>
                <Benefit benefit="Access to advanced features" />
                <Benefit benefit="Priority support via email and chats" />
                <Benefit benefit="Suitable for businesses and startups" />
                <Benefit benefit="15GB of storage space" />
              </ul>
            </div>
          </div>
          <div className="card bg-white p-4 rounded-md">
            <h3>Basic Plan</h3>
            <h1 className="font-black text-gray-600 text-4xl py-8">
              $29.99<span className="text-xl ml-2">/month</span>
            </h1>
            <div className="benefits">
              <ul>
                <Benefit benefit="Access to premium features" />
                <Benefit benefit="Dedicated support with SLA" />
                <Benefit benefit="Suitable for businesses anrd enterprises" />
                <Benefit benefit="Unlimited storage space" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
