import { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import "./styles.css";

export const ModalDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Typography>Text in a modal</Typography>
          <Typography>Hello! This is Modal...</Typography>
        </Box>
      </Modal>
    </div>
  );
};
