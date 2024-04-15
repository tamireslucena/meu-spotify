// styles

import { useEffect, useState } from "react";
import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";
import arrowLeft from "../../../assets/icons/arrow-left.png";
import { AlbumProps, getDiscography } from "../../../gateway/Artist";
import AlbumList from "../../../containers/Artists/DIscography/AlbumList";

function Discography() {
  const location = useLocation();
  const navigate = useNavigate();

  const [albums, setAlbums] = useState<AlbumProps[] | null>(null);

  useEffect(() => {
    async function fetchTopArtists() {
      const album = await getDiscography(location.state.id);
      setAlbums(album);
    }

    fetchTopArtists();
  }, [location.state.id]);

  return (
    <div className="Discography">
      <div className="discographyHeader">
        <div className="discographyPageTitle">
          <img
            alt="icon"
            src={arrowLeft}
            onClick={() => {
              navigate(-1);
            }}
          />
          {location.state.artist}
        </div>
        <img
          className="artistImage"
          alt="artist image"
          src={location.state.artistImage}
        />
      </div>
      <AlbumList items={albums || []} />
    </div>
  );
}

export default Discography;
