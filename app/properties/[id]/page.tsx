import Image from "next/image";
import ReservationSidebar from "../../components/properties/ReservationSidebar";
import apiService from "../../services/apiService";
import { getUserId } from "../../components/lib/action";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const property = await apiService.get(`/api/properties/${params.id}`);
  const userId = await getUserId();
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="mb-4 w-full h-[64vh] overflow-hidden rounded-xl relative">
        <Image
          fill
          src={property.image_url}
          className="object-cover w-full h-full"
          alt="beach house"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">{property.title}</h1>
          <span className="mb-6 block text-lg text-gray-600">
            {property.guests} guests - {property.bedrooms} bedrooms -{" "}
            {property.bathrooms} bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-6">
            {property.landlord.avatar_url && (
              <Image
                src={property.landlord.avatar_url}
                alt="profile pic"
                width={50}
                height={50}
                className="rounded-full"
              />
            )}

            <p>
              <strong>{property.landlord.name}</strong> is your host
            </p>
          </div>
          <hr />
          <div className="mt-6 text-lg">{property.description}</div>
        </div>

        <ReservationSidebar property={property} userId={userId} />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
