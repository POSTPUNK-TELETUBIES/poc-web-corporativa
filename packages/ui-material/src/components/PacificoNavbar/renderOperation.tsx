import { Drawer } from "@mui/material";
import { PacificoNavbarItem } from "./PacifivoNavbar";
import { defaultMenuDrawerDefaultSx } from "./styles";
import { MouseEventHandler } from "react";
import BodyMenu from "./BodyMenu";

export const renderDrawer =
  (
    currentMenu: string | undefined,
    handleClose: MouseEventHandler<HTMLButtonElement>,
  ) =>
  ({ label, items }: PacificoNavbarItem) => (
    <Drawer
      key={label}
      ModalProps={{
        keepMounted: true,
        disablePortal: true,
      }}
      SlideProps={{
        direction: "down",
      }}
      PaperProps={{
        sx: defaultMenuDrawerDefaultSx,
      }}
      open={currentMenu === label}
      onClose={handleClose}
    >
      <BodyMenu
        sx={{
          m: 2,
          display: "flex",
          gap: 3,
        }}
        columns={items ?? []}
      />
    </Drawer>
  );
