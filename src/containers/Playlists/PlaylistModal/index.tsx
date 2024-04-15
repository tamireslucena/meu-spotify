import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "../../../components/Modal";
import GreenButton from "../../../components/GreenButton";
// styles
import { textField, inputLabel } from "./mui-styles";

interface PlaylistModalProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function PlaylistModal({
  open,
  handleClose,
  handleConfirm,
  handleInputChange,
}: PlaylistModalProps) {
  return (
    <Modal open={open} handleClose={handleClose}>
      <>
        <Box
          display="flex"
          flexDirection="column"
          pb={2}
          gap={2}
          alignItems="center"
        >
          <Typography id="modal-modal-title" variant="h6">
            Dê um nome a sua playlist
          </Typography>
          <TextField
            id="standard-basic"
            placeholder="Minha playlist #1"
            variant="standard"
            sx={textField}
            InputLabelProps={{ style: inputLabel() }}
            onChange={handleInputChange}
          />
        </Box>
        <GreenButton label="Criar" onClick={handleConfirm} />
      </>
    </Modal>
  );
}

export default PlaylistModal;
