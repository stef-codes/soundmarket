import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
// import { marketplaceContractAddress } from "../addresses";

const Home: NextPage = () => {
  const router = useRouter();
  const { contract: marketplace } = useContract("0x7653Cd64320c65733C005EF855CdE916705B483D", "marketplace");
  const { data: listings, isLoading: loadingListings } = useActiveListings(marketplace);

  function handleClick() {
    console.log("increment like count")
  }

  return (
    <>
      {/* Content */}
      <div className={styles.container}>
        {/* Top Section */}
        <h1 className={styles.h1}>SoundPhase Marketplace</h1>
        <p className={styles.explain}>
          Discover new {" "}
          <b>
            {" "}
            <a
              href="https://thirdweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.purple}
            >
              music.
            </a>
          </b>{" "}
          Own your sounds.
        </p>

        <hr className={styles.divider} />

        <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link href="/create" className={styles.mainButton} style={{ textDecoration: "none" }}>
            Create A Listing
          </Link>
        </div>

        <div className="main">
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div>Loading music...</div>
            ) : (
              // Otherwise, show the listings
              <div className={styles.listingGrid}>
                {listings?.map((listing) => (
                  <><div
                    key={listing.id}
                    className={styles.listingShortView}
                    //  onClick={() => router.push(`/listing/${listing.id}`)}
                  >
                    <MediaRenderer
                      src={listing.asset.image}
                      // src={listing.asset.animation_url}
                      style={{
                        borderRadius: 16,
                        // Fit the image to the container
                        width: "100%",
                        height: "100%",
                      }} />
                    <MediaRenderer
                      // src={listing.asset.image}
                      src={listing.asset.animation_url}
                      style={{
                        borderRadius: 16,
                        // Fit the image to the container
                        width: "100%",
                        height: "100%",
                      }} />
                    <h2 className={styles.nameContainer}>
                      <Link href={`/listing/${listing.id}`} className={styles.name}>
                        {listing.asset.name}
                      </Link>
                    </h2>

                    <p className={styles.nameContainer}>
                      <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>
                    <div className={styles.nameContainer}>
                      <button onClick={() => router.push(`/listing/${listing.id}`)}>Purchase</button>
                    </div>

                    
                  </div></>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Home;
