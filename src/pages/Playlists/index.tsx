import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import PlaylistList from "../../containers/Playlists/PlaylistList";
import PlaylistModal from "../../containers/Playlists/PlaylistModal";
import {
  PlaylistProps,
  createPlaylist,
  getUserPlaylists,
} from "../../gateway/Playlist";
// styles
import "./index.css";
import PlaylistHeader from "../../containers/Playlists/PlaylistHeader";

function Playlists() {
  const [playlists, setPlaylists] = useState<PlaylistProps[] | null>(null);
  const [newPlaylistName, setNewPlaylistName] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function fetchPlaylists(page: number) {
    const userPlaylists = await getUserPlaylists({
      limit: 8,
      offset: (page - 1) * 8,
    });
    setPlaylists(userPlaylists.items);
    setTotalPages(Math.ceil(userPlaylists.total / 8));
  }

  useEffect(() => {
    fetchPlaylists(page);
  }, [page]);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleConfirm = () => {
    createPlaylist(newPlaylistName).then(() => {
      setOpen(false);
      fetchPlaylists(page);
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlaylistName(event.target.value);
  };

  return (
    <>
      <PlaylistModal
        open={open}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        handleInputChange={handleInputChange}
      />
      <div className="Playlists">
        <PlaylistHeader handleOpen={handleOpen} />
        Sua coleção pessoal de playlists
        <PlaylistList items={playlists || []} />
        <Pagination
          page={page}
          onChange={handleChange}
          count={totalPages}
          sx={{ marginTop: 3 }}
        />
      </div>
    </>
  );
}

export default Playlists;
