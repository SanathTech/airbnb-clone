import { useRouter } from "next/dist/client/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import MapBox from "../components/MapBox";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${
          location === "Unknown" ? "London" : location
        } | ${range} | ${noOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {searchResults.length} Stays - {range} - {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            {location === "Unknown"
              ? "Sorry, we couldn't find any matches. How about London?"
              : `Stays in ${location}`}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map(
              ({
                img,
                message,
                name,
                guests,
                beds,
                baths,
                amenities,
                rating,
                price,
                per_night,
              }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={message}
                  title={name}
                  description={`${guests} · ${beds} · ${baths} · ${amenities
                    .map((amenity) => amenity)
                    .join(" · ")}`}
                  star={rating}
                  price={per_night}
                  total={price}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[40%] sticky top-[76px] h-[calc(100vh-76px)]">
          <MapBox searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const { location } = context.query;
  var searchResults = "";
  if (location === "New York") {
    searchResults = await fetch("https://www.jsonkeeper.com/b/OVTA").then(
      (res) => res.json()
    );
  } else if (location === "London") {
    searchResults = await fetch("https://www.jsonkeeper.com/b/6S0I").then(
      (res) => res.json()
    );
  } else {
    searchResults = await fetch("https://www.jsonkeeper.com/b/6S0I").then(
      (res) => res.json()
    );
  }

  return {
    props: {
      searchResults,
    },
  };
}
