import MuiModal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { wrapper, box } from "./mui-styles";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

function Modal({ open, handleClose, children }: ModalProps) {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={wrapper}>
        <Box sx={box}>{children}</Box>
      </Box>
    </MuiModal>
  );
}

export default Modal;
