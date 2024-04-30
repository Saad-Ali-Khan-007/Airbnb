import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="mb-4 w-full h-[64vh] overflow-hidden rounded-xl relative">
        <Image
          fill
          src="/beach_1.jpg"
          className="object-cover w-full h-full"
          alt="beach house"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1 bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-6">
            <Image
              src="/download (2).png"
              alt="profile pic"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>
              <strong>John Doe</strong> is your host
            </p>
          </div>
          <hr />
          <div className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            suscipit deserunt et, earum ipsa obcaecati iure, debitis fugiat
            facere alias nobis mollitia magni consequatur quaerat, repellat
            placeat doloremque quia! Iste.
          </div>
        </div>

        <ReservationSidebar />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
